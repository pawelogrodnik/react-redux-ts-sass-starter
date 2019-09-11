import * as EnumTypes from './EnumTypes/UserEnumTypes';

export type UserStore = {
    user: User;
    token: string;
    loggedUserData: RegisterUser;
    resetPasswordCode: string;
    isUserLogged: boolean;
    usersList: Array<UserInList>;
    specificUser: SpecificUser;
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

export type UserInList = {
    active: boolean;
    dateAdd: string;
    firstName: string;
    lastName: string;
    id: number;
    phone: number;
    username: string;

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

export type Address = {
    street: string;
    houseNumber: number;
    flatNumber: number;
    postCode: any;
    city: string;
    country: string;

}

export type SpecificUser = {
    address: Address;
    downloadedProducts: Array<any>;
    user: {
        firstname: string;
        lastname: string;
        phone: number;
        username: string;
    }
}