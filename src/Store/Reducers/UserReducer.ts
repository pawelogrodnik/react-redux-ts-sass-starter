import * as Types from '../../Models/UserModel';
import * as ActionTypes from '../Actions/EnumTypes/ActionEnumTypes';
import { UserAction } from '../Actions/Models/UserActionModel';

export type State = Types.UserStore;

export const initialState: State = {
    token: null,
    user: null
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
        case ActionTypes.User.LOG_OUT: {
            localStorage.removeItem('user');
            return {
                ...state
            }
        }
        default: {
            return state;
        }
    }
}
 
