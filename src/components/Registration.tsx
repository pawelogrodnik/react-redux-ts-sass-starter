import * as React from 'react';
import * as UserModule from 'Modules/UserModule';
import { connect } from 'react-redux';
import RegistrationForm from './Forms/RegistrationForm';
import FirstStepRegisterForm from './Forms/FirstStepRegisterForm'
import SecondStepRegisterForm from './Forms/SecondStepRegisterForm'
import FacebookLogin from 'react-facebook-login';

type DispatchedP = {
  registerUser: (newUser: any) => void;
}
type S = {
  page: number;
  img: any;
  initialValues: {
    firstname: string,
    lastname: string,
    username: string,
    password: string,
    confirmation: string,
    facebook: boolean,
    avatar: {
      url: string,
      content: any
    }
  }
};

class Registration extends React.Component<DispatchedP, S> {
  constructor(props: DispatchedP) {
    super(props);
    this.state = {
      page: 1,
      img: null,
      initialValues: {
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        confirmation: '',
        facebook: false,
        avatar: {
          url: '',
          content: null
        }
      }
    };
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
  }
  public responseFacebook = (response) => {
    console.log(response);
    if (response.picture) {
      this.setState({
        img: response.picture.data.url,
        initialValues: {
          firstname: response.first_name,
          lastname: response.last_name,
          username: response.email,
          password: response.accessToken,
          confirmation: response.accessToken,
          facebook: true,
          avatar: {
            url: response.picture.data.url,
            content: null
          }
        }
      })
    }
    console.log(this.state)
  }
  public componentClicked = () => {
    console.log('clicked')
  }
  public nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  public previousPage() {
    this.setState({ page: this.state.page - 1 })
  }


  public render() {
    return (
      <div className="registration">
        <div className="registration__inner">
          <h2>Rejestracja</h2>
          {(this.state.page == 1 && !this.state.img && !this.state.initialValues.facebook) && (
            <>
              <FacebookLogin
                appId="2398570190423416"
                autoLoad={false}
                fields="name,email,picture,first_name,last_name"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                icon="fa-facebook"
                textButton="Zarejestruj przez Facebooka"
                isMobile={false}
                disableMobileRedirect={true}
              />
              <p className="center">lub</p>
            </>
          )}
          {(this.state.page == 1 && (this.state.initialValues.avatar.url || this.state.img)) && (
            <div className="registration__img-profile">
              <img className="registration__img-profile--circle" src={this.state.initialValues.facebook ? this.state.initialValues.avatar.url : this.state.img} />
            </div>
          )}
          {this.state.page === 1 && <FirstStepRegisterForm onSubmit={this.nextPage} onChange={(data: any) => data.avatar && this.setState({ img: data.avatar.content })} initialValues={this.state.initialValues.firstname !== '' ? this.state.initialValues : null} isLoadedImage={this.state.initialValues.facebook ? true : false} />}
          {this.state.page === 2 && <SecondStepRegisterForm previousPage={this.previousPage} onSubmit={async (data) => {
            if (localStorage.getItem('salesmanId')) {
              data['salesmanId'] = localStorage.getItem('salesmanId');
            }
            await (this.props.registerUser(data))
          }} />}
          {/* <RegistrationForm onSubmit={async (data) => await (this.props.registerUser(data))}/> */}
        </div>
      </div>
    )
  }
}


const mapDispatchToProps: DispatchedP = {
  registerUser: (newUser: any) => UserModule.Actions.registerUser(newUser),
};

export default connect(null, mapDispatchToProps)(Registration) 