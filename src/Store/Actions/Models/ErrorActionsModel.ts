import * as ActionTypes from 'src/Store/Actions/EnumTypes/ActionEnumTypes';
import { AxiosResponse, AxiosRequestConfig } from 'axios';

export type ClearErrors = {
    type: ActionTypes.ERORR.CLEAR_ERRORS;
};
export type SetRequestConfig = {
    type: ActionTypes.ERORR.SET_RQ_CONFIG;
    payload: {
        requestData: AxiosRequestConfig;
    };
};

export type SetResponseError = {
    type: ActionTypes.ERORR.SET_RQ_RESPONSE_ERR;
    payload: {
        responseError: AxiosResponse;
        unknownError?: boolean;
    };
};

export type ResponseSuccess = {
    type: ActionTypes.ERORR.RESPONSE_SUCCESS;
    payload: {
        responseSuccess: AxiosResponse;
    };
};

export type ErrorStore = {
    unknownError: boolean;
    requestData: AxiosRequestConfig;
    responseError: AxiosResponse;
    responseSuccess: AxiosResponse;
    sseResponseError: any;
};


export type ErrorAction = ClearErrors | SetRequestConfig | SetResponseError | ResponseSuccess;