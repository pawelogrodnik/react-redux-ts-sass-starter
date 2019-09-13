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

export type ArchiveProduct = {
    type: ActionTypes.Investment.ARCHIVE_INVESTMENT,
    payload: {
        investmentId: number
    }
};

export type AddInvestment = {
    type: ActionTypes.Investment.ADD_INVESTMENT
};

export type Contact = {
    type: ActionTypes.Investment.CONTACT
};

export type ClearInvestment = {
    type: ActionTypes.Investment.CLEAR_INVESTMENT
};

export type GetInvestmentDetails = {
    type: ActionTypes.Investment.GET_INVESTMENT_DETAILS,
    payload: {
        investmentDetails: InvestmentModule.Types.Investment
    }
};

export type SetSelectedPDF = {
    type: ActionTypes.Investment.SET_SELECTED_PDF,
    payload: {
        path: string
    }
};

export type GetDownloadedInvestments = {
    type: ActionTypes.Investment.GET_DOWNLOADED_INVESTMENTS,
    payload: {
        downloadedInvestmentList: Array<InvestmentModule.Types.DownloadedInvestment>
    }
};

export type GetPurchasedInvestments = {
    type: ActionTypes.Investment.GET_PURCHASED_INVESTMENTS,
    payload: {
        purchasedInvestmentList: Array<InvestmentModule.Types.PurchasedInvestment>
    }
};

export type InvestmentAction =
    | GetInvestmentDetails
    | AddInvestment
    | SetActiveInvestmentId
    | GetInvestments
    | ArchiveProduct
    | Contact 
    | ClearInvestment
    | SetSelectedPDF
    | GetDownloadedInvestments
    | GetPurchasedInvestments;
