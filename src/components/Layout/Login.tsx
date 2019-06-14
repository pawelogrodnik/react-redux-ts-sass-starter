import * as React from 'react';
import LoginForm from './../Forms/LoginForm';
import { connect } from 'react-redux';
import * as ViewManagementModule from './../../Modules/ViewManagementModule';
import * as UserModule from './../../Modules/UserModule';

type DispatchedP = {
    hideFooter: () => void;
    hideHeader: () => void;
    loginUser: (username: string, password: string) => void;
}

class Login extends React.Component<DispatchedP, any> {
    constructor(props: DispatchedP) {
        super(props);
    }

    public componentWillMount() {
        this.props.hideFooter();
        this.props.hideHeader();
    }

    public handleSubmit = async(formData) => {
        await this.props.loginUser(formData.username, formData.password);
    }

    public render() {
        return (
            <div className="login">
                <div className="login__inner">
                    <h1>Logowanie</h1>
                    <p>Lorem ipsum sit amet</p>
                    <LoginForm onSubmit={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps: DispatchedP = {
    hideFooter: () => ViewManagementModule.Actions.hideFooter(),
    hideHeader: () => ViewManagementModule.Actions.hideHeader(),
    loginUser: (username: string, password: string) => UserModule.Actions.loginUser(username, password),
};

export default connect(null, mapDispatchToProps)(Login)
