import * as ActionTypes from '../EnumTypes/ActionEnumTypes';
import * as InvestmentModule from 'Modules/InvestmentModule';

export type GetInvestments = {
    type: ActionTypes.Investment.GET_INVESTMENTS,
    payload: {
        investmentList: Array<InvestmentModule.Types.Investment>
    }
};

export type SetActiveInvestmentId = {
    type: ActionTypes.Investment.SET_ACTIVE_INVESTMENT,
    payload: {
        investmentId: number
    }
};

export type AddInvestment = {
    type: ActionTypes.Investment.ADD_INVESTMENT
};

export type GetInvestmentDetails = {
    type: ActionTypes.Investment.GET_INVESTMENT_DETAILS,
    payload: {
        investmentDetails: InvestmentModule.Types.Investment
    }
};

export type InvestmentAction =
    | GetInvestmentDetails
    | AddInvestment
    | SetActiveInvestmentId
    | GetInvestments;
