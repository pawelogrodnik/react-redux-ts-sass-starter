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
export {
    showHeader,
    hideHeader,
    showFooter,
    hideFooter,
    showLoader,
    hideLoader
}
