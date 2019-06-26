import * as ActionTypes from 'src/Store/Actions/EnumTypes/ActionEnumTypes';
import { AxiosResponse, AxiosRequestConfig } from 'axios';
import * as ErrorActionModel from 'src/Store/Actions/Models/ErrorActionsModel';

function clearErrorStore(): ErrorActionModel.ClearErrors {
    return {
        type: ActionTypes.ERORR.CLEAR_ERRORS
    };
}

function setRequestConfig(requestData: AxiosRequestConfig): ErrorActionModel.SetRequestConfig {
    return {
        type: ActionTypes.ERORR.SET_RQ_CONFIG,
        payload: {
            requestData
        }
    };
}

function setResponseError(responseError: AxiosResponse, unknownError?: boolean): ErrorActionModel.SetResponseError {
    return {
        type: ActionTypes.ERORR.SET_RQ_RESPONSE_ERR,
        payload: {
            responseError,
            unknownError
        }
    };
}
function requestSuccess(responseSuccess: AxiosResponse): ErrorActionModel.ResponseSuccess {
    return {
        type: ActionTypes.ERORR.RESPONSE_SUCCESS,
        payload: {
            responseSuccess
        }
    };
}



export { clearErrorStore, setRequestConfig, setResponseError, requestSuccess };
