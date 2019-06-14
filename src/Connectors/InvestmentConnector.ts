import API from './config';
import { AxiosPromise } from 'axios';
import * as InvestmentModule from './../Modules/InvestmentModule';

export function addInvestment(investment: InvestmentModule.Types.Investment): AxiosPromise<any> {
    return API.post('products', investment);
}

export function getInvestments(): AxiosPromise<Array<InvestmentModule.Types.Investment>> {
    return API.get('products');
}