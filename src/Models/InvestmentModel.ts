import { EnumTypes } from "src/Modules/InvestmentModule";

export type InvestmentStore = {
    investmentList: Array<Investment>
    activeInvestmentId: number;
    investmentDetails: Investment;
};


export type Investment = {
    id: number;
    basicParams: BasicParams;
    detailerParams: DetailedParams;
    type: EnumTypes.InvestmentType;
    status: string;
    seller: Seller
}

export type Address = {
    id?: number;
    city: string;
    flatNumber: string;
    houseNumber: string;
    postCode: string;
    street: string;
}

export type Seller = {
    NIP: number;
    REGON: number;
    address: Address;
    companyName: string;
    id: number
}

export type BasicParams = {
    description: string;
    duration: number;
    id: number;
    interest: number;
    risk: number;
    startDate: string;
    title: string;
}

export type DetailedParams = {
    address: Address;
    floorNumber: string;
    id: number;
    images: Array<any>;
    priceMarket: string;
    priceService: string;
    usableArea: string;
}