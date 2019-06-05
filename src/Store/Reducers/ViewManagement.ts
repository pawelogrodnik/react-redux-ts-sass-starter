import * as Types from '../../Models/ViewManagementModel';
import * as ActionTypes from '../Actions/EnumTypes/ActionEnumTypes';
import { ViewsManagemenetAction } from './../Actions/Models/ViewManagementActionModel';

export type State = Types.ViewManagementStore;

export const initialState: State = {
    loaderVisible: false,
    footerVisible: true,
    headerVisible: true
};

export function viewManagementReducer(state: State = initialState, action: ViewsManagemenetAction) {
    switch (action.type) {
        case ActionTypes.ViewManagement.SHOW_HEADER: {
            return {
                ...state,
                headerVisible: true
            };
        }
        case ActionTypes.ViewManagement.HIDE_HEADER: {
            return {
                ...state,
                headerVisible: false
            };
        }
        case ActionTypes.ViewManagement.SHOW_FOOTER: {
            return {
                ...state,
                footerVisible: true
            };
        }
        case ActionTypes.ViewManagement.HIDE_FOOTER: {
            return {
                ...state,
                footerVisible: false
            };
        }
        default: {
            return state;
        }
    }
}
