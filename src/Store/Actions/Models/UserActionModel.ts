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
export type LogoutUser = {
    type: ActionTypes.User.LOG_OUT;
};

export type RegisterUser = {
    type: ActionTypes.User.REGISTER_USER;
};
export type EditUser = {
    type: ActionTypes.User.EDIT_USER;
};

export type UserAction =
    | LoginUser
    | LoginUserSuccess
    | LoginUserFailure
    | LogoutUser
    | RegisterUser
    | EditUser;
