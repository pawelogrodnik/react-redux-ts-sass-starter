import { User } from './EnumTypes/ActionEnumTypes';
import * as UserActionModel from './Models/UserActionModel';
import * as UserModule from 'Modules/UserModule';
import { history } from './../../App';

function loginUser(login: string, password: string) {
    return async dispatch => {
        try {
            await UserModule.Connector.loginUser({login, password});
            dispatch(loginUserSuccess('user', 'token'))
            history.push('/dashboard')
        } catch (err) {
            dispatch(loginUserFailure());
            history.push('/dashboard')
        }
    };
}

function loginUserSuccess(user: any, token: string): UserActionModel.LoginUserSuccess {
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

function logoutUser(): UserActionModel.LogoutUser {
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
