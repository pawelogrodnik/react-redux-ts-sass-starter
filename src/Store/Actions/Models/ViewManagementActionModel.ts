import * as ActionTypes from '../EnumTypes/ActionEnumTypes';


export type ShowHeader = {
    type: ActionTypes.ViewManagement.SHOW_HEADER;
};

export type HideHeader = {
    type: ActionTypes.ViewManagement.HIDE_HEADER;
};

export type ShowFooter = {
    type: ActionTypes.ViewManagement.SHOW_FOOTER;
};

export type HideFooter = {
    type: ActionTypes.ViewManagement.HIDE_FOOTER;
};

export type ShowLoader = {
    type: ActionTypes.ViewManagement.SHOW_LOADER;
};
export type HideLoader = {
    type: ActionTypes.ViewManagement.HIDE_LOADER;
};
export type ShowPopup = {
    type: ActionTypes.ViewManagement.SHOW_POPUP;
    payload: {
        typePopup: string;
    }
};
export type HidePopup = {
    type: ActionTypes.ViewManagement.HIDE_POPUP;
};
export type SetBlueHeader = {
    type: ActionTypes.ViewManagement.SET_BLUE_HEADER;
};

export type SetWhiteHeader = {
    type: ActionTypes.ViewManagement.SET_WHITE_HEADER;
};
export type SetPrevPath = {
    type: ActionTypes.ViewManagement.SET_PREV_PATH;
    payload: {
        prevPath: string;
    }
};

export type ViewsManagemenetAction =
    | ShowHeader
    | HideHeader
    | ShowFooter
    | HideFooter
    | ShowLoader
    | HideLoader
    | ShowPopup
    | HidePopup
    | SetBlueHeader
    | SetWhiteHeader
    | SetPrevPath;
