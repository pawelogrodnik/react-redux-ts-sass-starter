import { EnumTypes } from "src/Modules/InvestmentModule";

export type InvestmentStore = {
    investmentList: Array<Investment>
    activeInvestmentId: number;
    investmentDetails: Investment;
    selectedPDF: string;
    downloadedInvestmentList: Array<DownloadedInvestment>;
    purchasedInvestmentList: Array<PurchasedInvestment>
};


export type Investment = {
    id: number;
    basicParams: BasicParams;
    detailedParams: DetailedParams;
    type: EnumTypes.InvestmentType;
    status: string;
    seller: Seller
}

export type DownloadedInvestment = {
    id: number;
    email: string;
    date: string;
    title: string;
    type: EnumTypes.InvestmentType;
}

export type PurchasedInvestment = {
    id: number;
    email: string;
    date: string;
    title: string;
    type: EnumTypes.InvestmentType;
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
    email: string;
    id: number;
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
    images: Images
    priceMarket: string;
    priceService: string;
    usableArea: string;
    pum: string;
    mass: string;
    goldtrial: string;
    distillery: string;
    version: string;
    bottling: string;
    volume: string;
    age: string;
    origin: string;
    cut: string;
    color: string;
    purity: string;
    minInsert: string;
    currentCourse: string;
    ipo: string;
    roi: string;
    roomsCount: string;
    income: string;
    attachments: Array<any>
}

export type Images = {
    background: any;
    thumbnail: any;
    other: Array<any>
}

export type Contact = {
    topic: string;
    content: string;
    city: string;
    firstName: string;
    lastName: string;
    mail: string;
}