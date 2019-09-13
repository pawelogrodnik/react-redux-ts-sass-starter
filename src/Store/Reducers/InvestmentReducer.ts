import * as Types from '../../Models/InvestmentModel';
import * as ActionTypes from '../Actions/EnumTypes/ActionEnumTypes';
import { InvestmentAction } from '../Actions/Models/InvestmentActionModel';

export type State = Types.InvestmentStore

export const initialState: State = {
    investmentList: [],
    investmentDetails: null,
    activeInvestmentId: null,
    selectedPDF: null,
    downloadedInvestmentList: [],
    purchasedInvestmentList: []
};

export function investmentReducer(state: State = initialState, action: InvestmentAction) {
    switch (action.type) {
        case ActionTypes.Investment.GET_INVESTMENTS: {
            return {
                ...state,
                investmentList: action.payload.investmentList
            };
        }
        case ActionTypes.Investment.SET_ACTIVE_INVESTMENT: {
            return {
                ...state,
                activeInvestmentId: action.payload.investmentId
            }
        }
        case ActionTypes.Investment.GET_INVESTMENT_DETAILS: {
            return {
                ...state,
                investmentDetails: action.payload.investmentDetails
            }
        }
        case ActionTypes.Investment.CLEAR_INVESTMENT: {
            return {
                ...state,
                activeInvestmentId: null,
                investmentDetails: null

            }
        }
        case ActionTypes.Investment.SET_SELECTED_PDF: {
            return {
                ...state,
                selectedPDF: action.payload.path
            }
        }
        case ActionTypes.Investment.GET_DOWNLOADED_INVESTMENTS: {
            return {
                ...state,
                downloadedInvestmentList: action.payload.downloadedInvestmentList
            }
        }
        case ActionTypes.Investment.GET_PURCHASED_INVESTMENTS: {
            return {
                ...state,
                purchasedInvestmentList: action.payload.purchasedInvestmentList
            }
        }
        default: {
            return state;
        }
    }
}
 
export const Selectors = {
    getActiveInvestment(state: State) {
        if (state.investmentList && state.activeInvestmentId) {
            return state.investmentList.find((investment, idx) => investment.id === state.activeInvestmentId)
        } else {
            return null
        }
    }
}