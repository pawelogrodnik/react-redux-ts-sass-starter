import axios, { AxiosRequestConfig } from 'axios';
import { store } from './../Store/Store';
import * as ErrorActions from './../Store/Actions/ErrorActions';
import * as UserActions from './../Store/Actions/UserActions';
import * as ViewManagementActions from './../Store/Actions/ViewManagementActions';
import { RootState } from 'src/Store/Reducers/_RootReducer';

export type QueryParams = {
    key: any;
    value: any;
};

export const baseURL = '//obligacje-app.k-org.pl/';

export let activeToken = (store.getState() as RootState).userStore.token ? store.getState().userStore.token : localStorage.getItem('token');

const axiosInstance = axios.create({
    baseURL: `http:${baseURL}`,
});

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';

function handleConfigInterCeptor(configRq: AxiosRequestConfig) {
    store.dispatch(ErrorActions.clearErrorStore());
    store.dispatch(ErrorActions.setRequestConfig(configRq))
    return configRq;
}

function handleInterceptorError(error: any) {
    if (error.response && error.response.status === 401) {
        store.dispatch(UserActions.logoutUser());
    }
    if (error.response) {
        store.dispatch(ErrorActions.setResponseError(error.response ? error.response : error));
    } else {
        store.dispatch(ErrorActions.setResponseError(error.response ? error.response : error, true));
    }
    store.dispatch(ViewManagementActions.hideLoader());
    return Promise.reject(error);
}

axiosInstance.interceptors.request.use((configRq: AxiosRequestConfig) => handleConfigInterCeptor(configRq), error => handleInterceptorError(error));

axiosInstance.interceptors.response.use(
    response => {
        store.dispatch(ErrorActions.requestSuccess(response));
        return response;
    },
    error => handleInterceptorError(error)
);

export const config = (params?: any, headers?: any) => {
    const configRq: AxiosRequestConfig = {};
    if (params) {
        configRq.params = params;
    }
    if (headers) {
        configRq.headers = headers
    }
    return configRq;
};

export function createSerachQuery(params: Object | Array<Object>): URLSearchParams {
    const searchQuery = new URLSearchParams();
    Object.keys(params).forEach((e, i) => {
        if (e === 'risk' || e === 'interest' || e === 'duration') {
            searchQuery.set(`min-${e}`, params[e]['min'])
            searchQuery.set(`max-${e}`, params[e]['max'])
        } else {
            searchQuery.set(e, params[e]);
        }
    });
    return searchQuery;
}

export default axiosInstance;
