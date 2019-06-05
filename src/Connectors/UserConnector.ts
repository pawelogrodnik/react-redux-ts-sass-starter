import API from './config';
import axios, { AxiosPromise } from 'axios';
import * as UserModule from './../Modules/UserModule';

export function loginUser(userData:any): AxiosPromise<any> {
    return API.post('user/login', userData);
}