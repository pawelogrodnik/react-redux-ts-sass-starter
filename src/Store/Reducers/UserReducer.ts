import * as Types from '../../Models/UserModel';
import * as ActionTypes from '../Actions/EnumTypes/ActionEnumTypes';
import { UserAction } from '../Actions/Models/UserActionModel';

export type State = Types.UserStore;

export const initialState: State = {
    token: null,
    user: null,
    loggedUserData: null,
    resetPasswordCode: null,

};

export function userReducer(state: State = initialState, action: UserAction) {
    switch (action.type) {
        case ActionTypes.User.LOG_IN_SUCCESS: {
            return {
                ...state,
               user: action.payload.user,
               token: action.payload.token
            };
        }
        case ActionTypes.User.LOG_OUT_SUCCESS: {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            return {
                ...state,
                loggedUserData: null
            }
        }
        case ActionTypes.User.GET_LOGGED_USER_DATA: {
            return {
                ...state,
                loggedUserData: action.payload.userData
            };
        }
        case ActionTypes.User.SET_RESET_CODE: {
            return {
                ...state,
                resetPasswordCode: action.payload.code
            };
        }
        case ActionTypes.User.TOKEN_VALID_FAILURE: {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            return {
                ...initialState
            }
        }
        default: {
            return state;
        }
    }
}
 
