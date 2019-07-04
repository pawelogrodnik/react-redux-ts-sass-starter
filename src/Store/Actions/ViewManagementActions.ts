import * as ActionTypes from './EnumTypes/ActionEnumTypes';
import * as ViewsManagementModel from './Models/ViewManagementActionModel';

function showHeader(): ViewsManagementModel.ShowHeader {
    return {
        type: ActionTypes.ViewManagement.SHOW_HEADER
    };
}

function hideHeader(): ViewsManagementModel.HideHeader {
    return {
        type: ActionTypes.ViewManagement.HIDE_HEADER
    };
}
function showFooter(): ViewsManagementModel.ShowFooter {
    return {
        type: ActionTypes.ViewManagement.SHOW_FOOTER
    };
}

function hideFooter(): ViewsManagementModel.HideFooter {
    return {
        type: ActionTypes.ViewManagement.HIDE_FOOTER
    };
}
function showLoader(): ViewsManagementModel.ShowLoader {
    return {
        type: ActionTypes.ViewManagement.SHOW_LOADER
    };
}

function hideLoader(): ViewsManagementModel.HideLoader {
    return {
        type: ActionTypes.ViewManagement.HIDE_LOADER
    };
}

function setBlueHeader(): ViewsManagementModel.SetBlueHeader {
    return {
        type: ActionTypes.ViewManagement.SET_BLUE_HEADER
    };
}

function setWhiteHeader(): ViewsManagementModel.SetWhiteHeader {
    return {
        type: ActionTypes.ViewManagement.SET_WHITE_HEADER
    };
}
function setPrevPath(prevPath:string): ViewsManagementModel.SetPrevPath {
    return {
        type: ActionTypes.ViewManagement.SET_PREV_PATH,
        payload:{
            prevPath
        }
    };
}
export {
    showHeader,
    hideHeader,
    showFooter,
    hideFooter,
    showLoader,
    hideLoader,
    setBlueHeader,
    setWhiteHeader,
    setPrevPath
}
