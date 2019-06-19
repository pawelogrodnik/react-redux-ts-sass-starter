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

export type ViewsManagemenetAction =
    | ShowHeader
    | HideHeader
    | ShowFooter
    | HideFooter
    | ShowLoader
    | HideLoader;
