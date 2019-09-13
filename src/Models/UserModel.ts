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
    active: boolean;
    avatar: any;
    city: string;
    country: string;
    credentialsProvider: any;
    dateAdd: string;
    downloadedProducts: Array<any>;
    firstRole: string;
    firstname: string;
    flatNumber: number;
    houseNumber: number;
    id: number;
    lastname: string;
    phone: number;
    picture: any;
    postCode: any;
    refCode: any;
    referrals: Array<any>;
    referrer: any;
    roles: Array<any>;
    salesmanDetails: any;
    salesmanRequiredData: boolean;
    street: string;
    username: string;
}