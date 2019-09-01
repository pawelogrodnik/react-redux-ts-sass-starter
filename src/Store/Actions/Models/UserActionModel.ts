import * as ActionTypes from '../EnumTypes/ActionEnumTypes';

export type LoginUser = {
    type: ActionTypes.User.LOG_IN;
};
export type LoginUserSuccess = {
    type: ActionTypes.User.LOG_IN_SUCCESS;
    payload: {
        user: any;
        token: string;
    }
};
export type LoginUserFailure = {
    type: ActionTypes.User.LOG_IN_FAILURE;
};
export type LogoutUserSuccess = {
    type: ActionTypes.User.LOG_OUT_SUCCESS;
};

export type RegisterUser = {
    type: ActionTypes.User.REGISTER_USER;
};
export type EditUser = {
    type: ActionTypes.User.EDIT_USER;
};
export type GetLoggedUserData = {
    type: ActionTypes.User.GET_LOGGED_USER_DATA;
    payload: {
        userData: any;
    }
};
export type ResetPasswordSuccess = {
    type: ActionTypes.User.RESET_PASSWORD_SUCCESS;
}
export type SetResetCode = {
    type: ActionTypes.User.SET_RESET_CODE;
    payload: {
        code: string;
    }
};
export type TokenValidFailure = {
    type: ActionTypes.User.TOKEN_VALID_FAILURE
}
export type UserAction =
    | LoginUser
    | LoginUserSuccess
    | LoginUserFailure
    | LogoutUserSuccess
    | RegisterUser
    | EditUser
    | GetLoggedUserData
    | ResetPasswordSuccess
    | SetResetCode
    | TokenValidFailure;
