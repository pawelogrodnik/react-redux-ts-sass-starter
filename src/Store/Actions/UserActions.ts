import { User } from './EnumTypes/ActionEnumTypes';
import * as UserActionModel from './Models/UserActionModel';
import * as UserModule from 'Modules/UserModule';
import * as ViewManagementModule from 'Modules/ViewManagementModule';
import { history } from './../../App';
import API from './../../Connectors/config';
import * as ErrorActions from './ErrorActions';

function loginUser(username: string, password: string) {
    return async dispatch => {
        try {
            dispatch(ViewManagementModule.Actions.showLoader())
            const response = await UserModule.Connector.loginUser(username, password);
            dispatch(loginUserSuccess(response.data, response.data.authToken))
            localStorage.setItem('token', JSON.parse(JSON.stringify(response.data.authToken)));
            history.push('/dashboard')
            dispatch(ViewManagementModule.Actions.hideLoader())

        } catch (err) {
            dispatch(loginUserFailure());
            console.log(err.response)
            dispatch(ErrorActions.setResponseError(err.response ? err.response : err));
            dispatch(ViewManagementModule.Actions.hideLoader())
        }
    };
}

function loginUserSuccess(user: UserModule.Types.User, token: string): UserActionModel.LoginUserSuccess {
    return {
        type: User.LOG_IN_SUCCESS,
        payload: {
            user, token
        }
    };
}
function loginUserFailure(): UserActionModel.LoginUserFailure {
    return {
        type: User.LOG_IN_FAILURE
    };
}
function logoutUser() {
    return async dispatch => {
        try {
            dispatch(ViewManagementModule.Actions.showLoader())
            await UserModule.Connector.logout();
            // localStorage.removeItem('user');
            localStorage.removeItem('token');
            delete API.defaults.headers.common["x-auth-token"];
            dispatch(logoutUserSuccess())
            dispatch(ViewManagementModule.Actions.hideLoader())
        } catch (err) {
            dispatch(ViewManagementModule.Actions.hideLoader())
        }
    }
}

function logoutUserSuccess(): UserActionModel.LogoutUser {
    return {
        type: User.LOG_OUT
    };
}

export {
    logoutUser,
    loginUserFailure,
    loginUserSuccess,
    loginUser
}
