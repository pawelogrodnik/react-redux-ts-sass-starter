import { Investment } from './EnumTypes/ActionEnumTypes';
import * as InvestmentActionModel from './Models/InvestmentActionModel';
import * as InvestmentModule from 'Modules/InvestmentModule';
import { history } from 'src/App';

function getInvestments() {
    return async dispatch => {
        try {
            const response = await InvestmentModule.Connector.getInvestments()
            dispatch(getInvestmentsSuccess(response.data))
        } catch (err) {
            // 
        }
    };
}
function addInvestment(investment: InvestmentModule.Types.Investment) {
    return async dispatch => {
        try {
            await InvestmentModule.Connector.addInvestment(investment)
<<<<<<< HEAD
            dispatch(addInvestmentSuccess())
=======
            dispatch(addInvestmentSuccess());
            history.push('/dashboard')
>>>>>>> 44c61672180f5bc955a212cb15c2118146bae1d5
        } catch (err) {
            // 
        }
    };
}

function getInvestmentsSuccess(investmentList: Array<InvestmentModule.Types.Investment>): InvestmentActionModel.GetInvestments {
    return {
        type: Investment.GET_INVESTMENTS,
        payload: {
            investmentList
        }
    };
}
function setActiveInvestmentId(investmentId): InvestmentActionModel.SetActiveInvestmentId {
    return {
        type: Investment.SET_ACTIVE_INVESTMENT,
        payload: {
            investmentId
        }
    };
}
function addInvestmentSuccess(): InvestmentActionModel.AddInvestment {
    return {
        type: Investment.ADD_INVESTMENT
    };
}


export {
    getInvestments,
    addInvestment,
    setActiveInvestmentId
}
