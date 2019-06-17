import * as Types from '../../Models/InvestmentModel';
import * as ActionTypes from '../Actions/EnumTypes/ActionEnumTypes';
import { InvestmentAction } from '../Actions/Models/InvestmentActionModel';

export type State = Types.InvestmentStore

export const initialState: State = {
    investmentList: null,
    investmentDetails: null,
    activeInvestmentId: null
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