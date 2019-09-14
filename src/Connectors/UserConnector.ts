import API, {config} from './config';
import { AxiosPromise } from 'axios';
import * as UserModule from './../Modules/UserModule';

export function loginUser(username: string, password: string): AxiosPromise<UserModule.Types.User> {
    return API.post('login', {username, password});
}

export function logout(): AxiosPromise<UserModule.Types.User> {
    return API.get('logout', config(null, {'x-auth-token': localStorage.getItem('token')}));
}

export function registerUser(newUser: UserModule.Types.RegisterUser): AxiosPromise<any> {
    return API.post('register', newUser);
}

export function editUser(newUserData: UserModule.Types.RegisterUser): AxiosPromise<any> {
    return API.post('user/update', newUserData, config(null, { 'x-auth-token': localStorage.getItem('token') }));
}

export function editUserByAdmin(newUserData: any): AxiosPromise<any> {
    return API.post(`users/${newUserData.id}`, newUserData, config(null, { 'x-auth-token': localStorage.getItem('token') }));
}

export function getLoggedUserData(): AxiosPromise<any> {
    return API.get('user', config(null, { 'x-auth-token': localStorage.getItem('token') }));
}

export function resetPassword(userEmail): AxiosPromise<any> {
    return API.post('user/password_reset_query', userEmail);
}

export function resetPasswordContinue(data): AxiosPromise<any> {
    return API.post('user/password_reset', data);
}

export function checkIfUserIsValid(token): AxiosPromise<any> {
    return API.get('user/validate_token', config(null, {'x-auth-token': token}));
} 

export function deleteUser(token) {
    return API.delete('user', config(null, {'x-auth-token': token}))
}

export function deleteUserByAdmin(token, id) {
    return API.delete(`users/${id}`, config(null, {'x-auth-token': token}))
}

export function getUsersList(): AxiosPromise<Array<UserModule.Types.UserInList>> {
    return API.get('users', config(null, { 'x-auth-token': localStorage.getItem('token') }));
}

export function getSpecificUser(id): AxiosPromise<UserModule.Types.SpecificUser> {
    return API.get(`users/${id}`, config(null, { 'x-auth-token': localStorage.getItem('token') }));
}


export function registerSalesman(data): AxiosPromise<any> {
    return API.post('register/salesman', data);
}