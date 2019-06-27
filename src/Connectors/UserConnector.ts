import API, {config} from './config';
import { AxiosPromise } from 'axios';
import * as UserModule from './../Modules/UserModule';

export function loginUser(username: string, password: string): AxiosPromise<UserModule.Types.User> {
    return API.post('login', {username, password});
}

export function logout(): AxiosPromise<UserModule.Types.User> {
    return API.get('logout', config(null, {'x-auth-token': localStorage.getItem('token')}));
}