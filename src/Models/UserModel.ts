import * as EnumTypes from './EnumTypes/UserEnumTypes';

export type UserStore = {
    user: User;
    token: string;
    loggedUserData: RegisterUser;
    resetPasswordCode: string;
    isUserLogged: boolean;
};

export type User = {
    // username: string;
    // roles: Array<EnumTypes.UserRole>
    error: any;
    firstName: string;
    lastName: string;
    roles: EnumTypes.UserRole;
    userName: string;
    authToken: string;
}

export type RegisterUser = {
    firstname: string;
    lastname: string;
    email: string;
    phone: number;
    password: string;
    confirmation: string;
    street: string;
    houseNumber: number;
    flatNumber: number;
    postCode: any;
    city: string;
    country: string;
}
