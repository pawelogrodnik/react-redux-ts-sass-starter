 import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

export type RootState = {
    form:any,
    router:any
};

const rootReducer = combineReducers<RootState>({
    form: formReducer,
    router: routerReducer
} as any);

const appReducer = (state, action) => {
    if (action.type === 'LOG_OUT') {
        state = undefined;
    }
    return rootReducer(state, action);
};
export default appReducer;
