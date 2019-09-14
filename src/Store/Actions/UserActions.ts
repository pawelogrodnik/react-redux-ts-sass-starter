import { User } from './EnumTypes/ActionEnumTypes';
import * as UserActionModel from './Models/UserActionModel';
import * as UserModule from 'Modules/UserModule';
import * as ViewManagementModule from 'Modules/ViewManagementModule';
import { history } from './../../App';
import API from './../../Connectors/config';
import * as ErrorActions from './ErrorActions';
import { reset } from 'redux-form';
import { hidePopup } from './ViewManagementActions';
// let inverval;
function loginUser(username: string, password: string, openPDF: boolean) {
    return async dispatch => {
        try {
            dispatch(ViewManagementModule.Actions.showLoader())
            const response = await UserModule.Connector.loginUser(username, password);
            dispatch(loginUserSuccess(response.data, response.data.authToken))
            localStorage.setItem('token', JSON.parse(JSON.stringify(response.data.authToken)));
            localStorage.setItem('role', JSON.parse(JSON.stringify(response.data.roles)));
            console.log(openPDF)
            if(!openPDF) {
                history.push('/dashboard');
            }
            dispatch(hidePopup());
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
        // inverval = setInterval(() => {
           await UserModule.Connector.checkIfUserIsValid(token).then(() => {
                dispatch(tokenValidSuccess())
            }).catch((err) => {
                // clearInterval(inverval)
                console.log("WYKONUJE")
                history.push('/dashboard/login');
                dispatch(tokenValidFailure())
            });
        // }, 10000)
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
        // clearInterval(inverval);
        try {
            dispatch(ViewManagementModule.Actions.showLoader())
            await UserModule.Connector.logout();
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

function editUserByAdmin(newUserData: any) {
    return async dispatch => {
        try {
            dispatch(ViewManagementModule.Actions.showLoader())
            const response = await UserModule.Connector.editUserByAdmin(newUserData);
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
        dispatch(ViewManagementModule.Actions.showLoader())
        await UserModule.Connector.deleteUser(JSON.parse(JSON.stringify(localStorage.getItem('token')))).then(() => {
            dispatch(logoutUserSuccess());
            dispatch(deleteUserSuccess());
            dispatch(ViewManagementModule.Actions.showPopup('deleteUserSuccess'))
            history.push('/');
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

function deleteUserByAdmin(id: number) {
    return async dispatch => {
        dispatch(ViewManagementModule.Actions.showLoader())
        await UserModule.Connector.deleteUserByAdmin(JSON.parse(JSON.stringify(localStorage.getItem('token'))), id).then(() => {
                dispatch(deleteUserByAdminSuccess());
                dispatch(ViewManagementModule.Actions.showPopup('deleteUserSuccess'))
                history.push('/dashboard/usersList');
        }).catch((err) => {
            history.push('/dashboard/login');
        });
    }
}
function deleteUserByAdminSuccess(): UserActionModel.DeleteUserByAdmin {
    return {
        type: User.DELETE_USER_BY_ADMIN
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

function getUsersList() {
    return async dispatch => {
        try {
            dispatch(ViewManagementModule.Actions.showLoader())
            const response = await UserModule.Connector.getUsersList();
            dispatch(getUsersListSuccess(response.data))
            dispatch(ViewManagementModule.Actions.hideLoader())
        } catch (err) {
            dispatch(ErrorActions.setResponseError(err.response ? err.response : err));
            dispatch(ViewManagementModule.Actions.hideLoader())
        }
    };
}

function getUsersListSuccess(usersList: Array<UserModule.Types.UserInList>): UserActionModel.GetUsersList {
    return {
        type: User.GET_USERS_LIST,
        payload: {
            usersList
        }
    };
}

function getSpecificUser(id) {
    return async dispatch => {
        try {
            dispatch(ViewManagementModule.Actions.showLoader())
            const response = await UserModule.Connector.getSpecificUser(id);
            dispatch(getSpecificUserSuccess(response.data))
            dispatch(ViewManagementModule.Actions.hideLoader())
        } catch (err) {
            dispatch(ErrorActions.setResponseError(err.response ? err.response : err));
            dispatch(ViewManagementModule.Actions.hideLoader())
        }
    };
}

function getSpecificUserSuccess(specificUser: UserModule.Types.SpecificUser): UserActionModel.GetSpecificUser {
    return {
        type: User.GET_SPECIFIC_USER,
        payload: {
            specificUser
        }
    };
}

function registerSalesman(data:any) {
    return async dispatch => {
        try {
            dispatch(ViewManagementModule.Actions.showLoader())
            await UserModule.Connector.registerSalesman(data);
            dispatch(ViewManagementModule.Actions.hideLoader())
            dispatch(ViewManagementModule.Actions.showPopup('confirmUserSuccess'))
        } catch (err) {
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
    editUserByAdmin,
    getLoggedUserData,
    resetPassword,
    setResetCode,
    resetPasswordContinue,
    checkIfUserIsValid,
    deleteUser,
    deleteUserByAdmin,
    getUsersList,
    getSpecificUser,
    registerSalesman
}
