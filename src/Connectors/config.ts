import axios, { AxiosRequestConfig } from 'axios';

export type QueryParams = {
    key: any;
    value: any;
};

export const baseURL ='baseURl';

const axiosInstance = axios.create({
    baseURL: `https:${baseURL}`
});
export const activeToken = ''; 

axiosInstance.defaults.headers.common['Authorization'] = `bearer ${activeToken}`;
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';

function handleConfigInterCeptor(configRq: AxiosRequestConfig) {
    return configRq;
}

function handleInterceptorError(error: any) {
    // obsługa błedów zanim przed catch error
    return Promise.reject(error);
}

axiosInstance.interceptors.request.use((configRq: AxiosRequestConfig) => handleConfigInterCeptor(configRq), error => handleInterceptorError(error));

axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => handleInterceptorError(error)
);

export const config = (params?: any) => {
    const configRq = {};
    if (params) {
        configRq['params'] = params;
    }
    return configRq;
};

export function createSerachQuery(params: Object | Array<Object>): URLSearchParams {
    const searchQuery = new URLSearchParams();
    Object.keys(params).forEach((e, i) => {
        searchQuery.set(e, params[e]);
    });
    return searchQuery;
}

export default axiosInstance;
