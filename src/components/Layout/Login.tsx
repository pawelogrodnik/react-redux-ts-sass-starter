import * as React from 'react';
import LoginForm from './../Forms/LoginForm';
import { connect } from 'react-redux';
import * as ViewManagementModule from './../../Modules/ViewManagementModule';
import * as UserModule from './../../Modules/UserModule';
import { RootState } from './../../Store/Reducers/_RootReducer';
import { history } from 'src/App';

type DispatchedP = {
    hideFooter: () => void;
    hideHeader: () => void;
    loginUser: (username: string, password: string, openPDF: boolean) => void;
    showPopup: (type: string) => void;
}
type ConnectedP = {
    userStore: UserModule.Types.UserStore;
}
type P = {
    openPDF: boolean
}

class Login extends React.Component<DispatchedP & ConnectedP & P, any> {
    constructor(props: DispatchedP & ConnectedP & P) {
        super(props);
    }

    public componentWillMount() {
        if (this.props.userStore.user) {
            history.push('/dashboard');
        }
    }

    public handleSubmit = async (formData) => {
        await this.props.loginUser(formData.username, formData.password, this.props.openPDF);
    }

    public render() {
        return (
            <div className="login">
                <div className="login__inner" style={{marginTop: !this.props.openPDF ? '150px' : null}}>
                    <h2>Logowanie</h2>
                    <LoginForm onSubmit={this.handleSubmit} />
                    <p onClick={() => this.props.showPopup('resetPassword')}>Nie pamiętasz hasła?</p>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps: DispatchedP = {
    hideFooter: () => ViewManagementModule.Actions.hideFooter(),
    hideHeader: () => ViewManagementModule.Actions.hideHeader(),
    loginUser: (username: string, password: string, openPDF: boolean) => UserModule.Actions.loginUser(username, password, openPDF),
    showPopup: (type: string) => ViewManagementModule.Actions.showPopup(type),
};

function mapStateToProps(state: RootState) {
    return {
        userStore: state.userStore
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
