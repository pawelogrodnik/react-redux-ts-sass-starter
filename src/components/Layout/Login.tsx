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
    loginUser: (username: string, password: string) => void;
    showPopup: (type: string) => void;
}
type ConnectedP = {
    userStore: UserModule.Types.UserStore;
}

class Login extends React.Component<DispatchedP & ConnectedP, any> {
    constructor(props: DispatchedP & ConnectedP) {
        super(props);
    }

    public componentWillMount() {
        if (this.props.userStore.user) {
            history.push('/dashboard');
        }
    }

    public handleSubmit = async (formData) => {
        await this.props.loginUser(formData.username, formData.password);
    }

    public render() {
        return (
            <div className="login">
                <div className="login__inner">
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
    loginUser: (username: string, password: string) => UserModule.Actions.loginUser(username, password),
    showPopup: (type: string) => ViewManagementModule.Actions.showPopup(type),
};

function mapStateToProps(state: RootState) {
    return {
        userStore: state.userStore
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
