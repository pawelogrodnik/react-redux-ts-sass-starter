export enum User {
    LOG_IN = 'LOG_IN',
    LOG_IN_SUCCESS = 'LOG_IN_SUCCESS',
    LOG_IN_FAILURE = 'LOG_IN_FAILURE',
    LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS',
    REGISTER_USER = 'REGISTER_USER',
    EDIT_USER = 'EDIT_USER',
    GET_LOGGED_USER_DATA = 'GET_LOGGED_USER_DATAP',
    RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS',
    SET_RESET_CODE = 'SET_RESET_CODE',
    TOKEN_VALID_SUCCESS = 'TOKEN_VALID_SUCCESS',
    TOKEN_VALID_FAILURE = 'TOKEN_VALID_FAILURE',
    DELETE_USER = 'DELETE_USER'
}

export enum ViewManagement {
    SHOW_LOADER = 'SHOW_LOADER',
    HIDE_LOADER = 'HIDE_LOADER',
    SHOW_HEADER = 'SHOW_HEADER',
    HIDE_HEADER = 'HIDE_HEADER',
    SHOW_FOOTER = 'SHOW_FOOTER',
    HIDE_FOOTER = 'HIDE_FOOTER',
    SHOW_POPUP = 'SHOW_POPUP',
    HIDE_POPUP = 'HIDE_POPUP',
    SET_BLUE_HEADER = 'SET_BLUE_HEADER',
    SET_WHITE_HEADER = 'SET_WHITE_HEADER',
    SET_PREV_PATH = 'SET_PREV_PATH',
}

export enum Investment {
    GET_INVESTMENTS = 'GET_INVESTMENTS',
    SET_ACTIVE_INVESTMENT = 'SET_ACTIVE_INVESTMENT',
    ADD_INVESTMENT = 'ADD_INVESTMENT',
    CLEAR_INVESTMENT = 'CLEAR_INVESTMENT',
    GET_INVESTMENT_DETAILS = 'GET_INVESTMENT_DETAILS',
    ARCHIVE_INVESTMENT = 'ARCHIVE_INVESTMENT',
    CONTACT = 'CONTACT'
}

export enum ERORR {
    CLEAR_ERRORS = 'CLEAR_ERRORS',
    SET_RQ_CONFIG = 'SET_RQ_CONFIG',
    SET_RQ_RESPONSE_ERR = 'SET_RQ_RESPONSE_ERR',
    SET_SSE_RQ_RESPONSE_ERR = 'SET_SSE_RQ_RESPONSE_ERR',
    RESPONSE_SUCCESS = 'RESPONSE_SUCCESS',
    SET_NEWS = 'SET_NEWS'
}