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


export type ViewsManagemenetAction =
    | ShowHeader
    | HideHeader
    | ShowFooter
    | HideFooter;
