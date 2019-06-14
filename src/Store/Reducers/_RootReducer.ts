import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import * as fromViewManagementReducer from './ViewManagement';
import * as fromInvestmentReducer from './InvestmentReducer';
import * as fromUserReducer from './UserReducer';

export type RootState = {
    form:any,
    router:any,
    viewManagementStore: fromViewManagementReducer.State;
    userStore: fromUserReducer.State,
    investmentStore: fromInvestmentReducer.State
};

const rootReducer = combineReducers<RootState>({
    form: formReducer,
    router: routerReducer,
    viewManagementStore: fromViewManagementReducer.viewManagementReducer,
    investmentStore: fromInvestmentReducer.investmentReducer,
    userStore: fromUserReducer.userReducer
} as any);

const appReducer = (state, action) => {
    if (action.type === 'LOG_OUT') {
        state = undefined;
    }
    return rootReducer(state, action);
};

export default appReducer;
