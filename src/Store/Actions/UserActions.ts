import { User } from './EnumTypes/ActionEnumTypes';
import * as UserActionModel from './Models/UserActionModel';
import * as UserModule from 'Modules/UserModule';
import * as ViewManagementModule from 'Modules/ViewManagementModule';
import { history } from './../../App';
import API from './../../Connectors/config';
import * as ErrorActions from './ErrorActions';
import { reset } from 'redux-form';
let inverval;
function loginUser(username: string, password: string) {
    return async dispatch => {
        try {
            dispatch(ViewManagementModule.Actions.showLoader())
            const response = await UserModule.Connector.loginUser(username, password);
            dispatch(loginUserSuccess(response.data, response.data.authToken))
            localStorage.setItem('token', JSON.parse(JSON.stringify(response.data.authToken)));
            localStorage.setItem('role', JSON.parse(JSON.stringify(response.data.roles)));
            history.push('/dashboard');
            dispatch(checkIfUserIsValid(JSON.parse(JSON.stringify(response.data.authToken))))
            dispatch(ViewManagementModule.Actions.hideLoader())

        } catch (err) {
            dispatch(loginUserFailure());
            console.log(err.response)
            dispatch(ErrorActions.setResponseError(err.response ? err.response : err));
            dispatch(ViewManagementModule.Actions.hideLoader())
        }
    };
}
function checkIfUserIsValid(token: string) { 
    return async dispatch => {
        inverval = setInterval(async() => {
            await UserModule.Connector.checkIfUserIsValid(token).then(() => {
                dispatch(tokenValidSuccess())
            }).catch((err) => {
                dispatch(tokenValidFailure())
                history.push('/dashboard/login');
            });
        }, 10000)
    }
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
function tokenValidSuccess() {
    return {
        type: User.TOKEN_VALID_SUCCESS
    }
}
function tokenValidFailure() {
    return {
        type: User.TOKEN_VALID_FAILURE
    }
}
function logoutUser() {
    return async dispatch => {
        clearInterval(inverval);
        try {
            dispatch(ViewManagementModule.Actions.showLoader())
            await UserModule.Connector.logout();
            // localStorage.removeItem('user');
            // localStorage.removeItem('token');
            // localStorage.removeItem('role');
            dispatch(logoutUserSuccess())
            delete API.defaults.headers.common["x-auth-token"];
            dispatch(ViewManagementModule.Actions.hideLoader())
        } catch (err) {
            dispatch(ViewManagementModule.Actions.hideLoader())
        }
    }
}

function logoutUserSuccess(): UserActionModel.LogoutUserSuccess {
    return {
        type: User.LOG_OUT_SUCCESS
    };
}

function registerUser(newUser: UserModule.Types.RegisterUser) {
    return async dispatch => {
        try {
            dispatch(ViewManagementModule.Actions.showLoader())
            const response = await UserModule.Connector.registerUser(newUser);
            dispatch(reset('registrationForm'));
            dispatch(ViewManagementModule.Actions.hideLoader())
            dispatch(ViewManagementModule.Actions.showPopup('registerSuccess'))
        } catch (err) {
            console.log(err.response)
            dispatch(ErrorActions.setResponseError(err.response ? err.response : err));
            dispatch(ViewManagementModule.Actions.hideLoader())
        }
    };
}

function editUser(newUserData: UserModule.Types.RegisterUser) {
    return async dispatch => {
        try {
            dispatch(ViewManagementModule.Actions.showLoader())
            const response = await UserModule.Connector.editUser(newUserData);
            dispatch(ViewManagementModule.Actions.hideLoader())
            dispatch(ViewManagementModule.Actions.showPopup('editUserSuccess'))
        } catch (err) {
            console.log(err.response)
            dispatch(ErrorActions.setResponseError(err.response ? err.response : err));
            dispatch(ViewManagementModule.Actions.hideLoader())
        }
    };
}

function deleteUser() {
    return async dispatch => {
        await UserModule.Connector.deleteUser(JSON.parse(JSON.stringify(localStorage.getItem('token')))).then(() => {
            dispatch(deleteUserSuccess())
            history.push('/dashboard/login');
        }).catch((err) => {
            history.push('/dashboard/login');
        });
    }
}
function deleteUserSuccess(): UserActionModel.DeleteUser {
    return {
        type: User.DELETE_USER
    }
}
function getLoggedUserData() {
    return async dispatch => {
        try {
            dispatch(ViewManagementModule.Actions.showLoader())
            const response = await UserModule.Connector.getLoggedUserData();
            dispatch(loggedUserDataSuccess(response.data))
            dispatch(ViewManagementModule.Actions.hideLoader())
            if (localStorage.getItem('token')) {
                dispatch(checkIfUserIsValid(JSON.parse(JSON.stringify(localStorage.getItem('token')))));
            }
        } catch (err) {
            dispatch(ErrorActions.setResponseError(err.response ? err.response : err));
            dispatch(ViewManagementModule.Actions.hideLoader())
        }
    };
}

function loggedUserDataSuccess(userData: UserModule.Types.RegisterUser): UserActionModel.GetLoggedUserData {
    return {
        type: User.GET_LOGGED_USER_DATA,
        payload: {
            userData
        }
    };
}

function resetPassword(email: string) {
    const value = {
        email
    }
    return async dispatch => {
        try {
            dispatch(ViewManagementModule.Actions.showLoader())
            const response = await UserModule.Connector.resetPassword(value);
            // dispatch(loggedUserDataSuccess(response.data))
            dispatch(ViewManagementModule.Actions.hideLoader())
            dispatch(ViewManagementModule.Actions.showPopup('resetPasswordSendEmail'))
            
        } catch (err) {
            console.log(err.response)
            dispatch(ErrorActions.setResponseError(err.response ? err.response : err));
            dispatch(ViewManagementModule.Actions.hideLoader())
        }
    };
}
function setResetCode(code:string): UserActionModel.SetResetCode {
    return {
        type: User.SET_RESET_CODE,
        payload: {
            code
        }
    }
}
function resetPasswordContinue(data:any) {
    return async dispatch => {
        try {
            dispatch(ViewManagementModule.Actions.showLoader())
            const response = await UserModule.Connector.resetPasswordContinue(data);
            dispatch(ViewManagementModule.Actions.hideLoader())
            dispatch(ViewManagementModule.Actions.showPopup('resetPasswordSuccess'))
            
        } catch (err) {
            console.log(err.response)
            dispatch(ErrorActions.setResponseError(err.response ? err.response : err));
            dispatch(ViewManagementModule.Actions.hideLoader())
        }
    };
}
export {
    logoutUser,
    logoutUserSuccess,
    loginUserFailure,
    loginUserSuccess,
    loginUser,
    registerUser,
    editUser,
    getLoggedUserData,
    resetPassword,
    setResetCode,
    resetPasswordContinue,
    checkIfUserIsValid,
    deleteUser
}
