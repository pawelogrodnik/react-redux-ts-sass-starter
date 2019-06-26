import * as ActionTypes from '../Actions/EnumTypes/ActionEnumTypes';
import { ErrorAction, ErrorStore } from './../Actions/Models/ErrorActionsModel';

export type State = ErrorStore;
export const initialState: State = {
    unknownError: false,
    responseError: {
        data: null,
        status: null,
        statusText: null,
        headers: {},
        config: {},
        request: {}
    },
    requestData: {
        url: null,
        baseURL: null,
        headers: {},
        method: null
    },
    responseSuccess: {
        data: null,
        status: null,
        statusText: null,
        headers: {},
        config: {},
        request: {}
    },
    sseResponseError: null
};

export function errorReducer(state: State = initialState, action: ErrorAction): State {
    switch (action.type) {
        case ActionTypes.ERORR.CLEAR_ERRORS:
            return {
                ...state,
                ...initialState,
            };
        case ActionTypes.ERORR.SET_RQ_CONFIG:
            return {
                ...state,
                requestData: action.payload.requestData
            };
        case ActionTypes.ERORR.SET_RQ_RESPONSE_ERR:
            return {
                ...state,
                responseError: action.payload.responseError,
                unknownError: action.payload.unknownError
            };
        case ActionTypes.ERORR.RESPONSE_SUCCESS:
            return {
                ...state,
                responseSuccess: action.payload.responseSuccess
            };
        default:
            return {
                ...state
            };
    }
}
