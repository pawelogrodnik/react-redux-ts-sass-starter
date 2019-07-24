import * as Types from '../../Models/ViewManagementModel';
import * as ActionTypes from '../Actions/EnumTypes/ActionEnumTypes';
import { ViewsManagemenetAction } from './../Actions/Models/ViewManagementActionModel';

export type State = Types.ViewManagementStore;

export const initialState: State = {
    loaderVisible: false,
    footerVisible: true,
    headerVisible: true,
    popupVisible: false,
    whiteHeader: false,
    prevPath: '',
    typePopup: ''
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
        case ActionTypes.ViewManagement.SHOW_LOADER: {
            return {
                ...state,
                loaderVisible: true
            };
        }
        case ActionTypes.ViewManagement.HIDE_LOADER: {
            return {
                ...state,
                loaderVisible: false
            };
        }
        case ActionTypes.ViewManagement.SHOW_POPUP: {
            return {
                ...state,
                popupVisible: true,
                typePopup: action.payload.typePopup
            };
        }
        case ActionTypes.ViewManagement.HIDE_POPUP: {
            return {
                ...state,
                popupVisible: false
            };
        }
        case ActionTypes.ViewManagement.SET_WHITE_HEADER: {
            return {
                ...state,
                whiteHeader: true
            };
        }
        case ActionTypes.ViewManagement.SET_BLUE_HEADER: {
            return {
                ...state,
                whiteHeader: false
            };
        }
        case ActionTypes.ViewManagement.SET_PREV_PATH: {
            return {
                ...state,
                prevPath: action.payload.prevPath
            };
        }
        default: {
            return state;
        }
    }
}
