import API, { config } from './config';
import { AxiosPromise } from 'axios';
import * as InvestmentModule from './../Modules/InvestmentModule';

export function addInvestment(investment: InvestmentModule.Types.Investment): AxiosPromise<any> {
    return API.post('products', investment, config(null, { 'x-auth-token': localStorage.getItem('token') }));
}

export function getInvestments(params?: URLSearchParams): AxiosPromise<Array<InvestmentModule.Types.Investment>> {
    if (localStorage.getItem('token')) {
        return API.get('products', config(params, { 'x-auth-token': localStorage.getItem('token') }));
    } else {
        return API.get('products', config(params));
    }
}

export function archiveInvestment(params?: number) {
    return API.get(`products/archive?id=${params}`, config());
}

export function contact(contactData: InvestmentModule.Types.Contact) {
    return API.post('contact', contactData);
}

export function downloadPDF(path: string, data?) {
    return API.post(path, data, config(null, { 'x-auth-token': localStorage.getItem('token') }, 'blob'))
}

export function getDownloadedInvestments(): AxiosPromise<Array<InvestmentModule.Types.DownloadedInvestment>> {
    return API.get('user/products', config(null, { 'x-auth-token': localStorage.getItem('token') }));
}

export function getDownloadedInvestmentsByAdmin(): AxiosPromise<Array<any>> {
    return API.get('products/downloads', config(null, { 'x-auth-token': localStorage.getItem('token') }));
}

export function getPurchasedInvestments(): AxiosPromise<Array<InvestmentModule.Types.PurchasedInvestment>> {
    return API.get('user/bought', config(null, { 'x-auth-token': localStorage.getItem('token') }));
}

export function getPurchasedInvestmentsByAdmin(): AxiosPromise<Array<any>> {
    return API.get('sale', config(null, { 'x-auth-token': localStorage.getItem('token') }));
}

export function getPurchasedInvestmentsDetailsByAdmin(saleId): AxiosPromise<Array<InvestmentModule.Types.PurchasedInvestmentDetails>> {
    return API.get(`sale/${saleId}`, config(null, { 'x-auth-token': localStorage.getItem('token') }));
}

export function buyInvestment(id: number): AxiosPromise<any> {
    return API.post(`products/${id}/buy`, null, config(null, { 'x-auth-token': localStorage.getItem('token') }));
}