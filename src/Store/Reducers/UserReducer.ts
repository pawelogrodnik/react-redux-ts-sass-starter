import * as Types from '../../Models/UserModel';
import * as ActionTypes from '../Actions/EnumTypes/ActionEnumTypes';
import { UserAction } from '../Actions/Models/UserActionModel';

export type State = Types.UserStore;

export const initialState: State = {
    token: null,
    user: null,
    loggedUserData: null,
    resetPasswordCode: null,
    isUserLogged: false,
    usersList: [],
    specificUser: null

};

export function userReducer(state: State = initialState, action: UserAction) {
    switch (action.type) {
        case ActionTypes.User.LOG_IN_SUCCESS: {
            return {
                ...state,
               user: action.payload.user,
               token: action.payload.token,
               isUserLogged: true
            };
        }
        case ActionTypes.User.LOG_OUT_SUCCESS: {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            return {
                ...state,
                loggedUserData: null,
                isUserLogged: false
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
                ...initialState,
                isUserLogged: false
            }
        }
        case ActionTypes.User.TOKEN_VALID_SUCCESS: {
            return {
                ...state,
                isUserLogged: true
            }
        }
        case ActionTypes.User.GET_USERS_LIST: {
            return {
                ...state,
                usersList: action.payload.usersList
            };
        }
        case ActionTypes.User.GET_SPECIFIC_USER: {
            return {
                ...state,
                specificUser: action.payload.specificUser
            };
        }
        default: {
            return state;
        }
    }
}
 
