import { createSerachQuery } from './../../Connectors/config';
import { Investment } from './EnumTypes/ActionEnumTypes';
import * as InvestmentActionModel from './Models/InvestmentActionModel';
import * as InvestmentModule from 'Modules/InvestmentModule';
import * as ViewManagementModule from 'Modules/ViewManagementModule';
import { history } from 'src/App';

function getInvestments(params?: URLSearchParams) {
    return async dispatch => {
        try {
            dispatch(ViewManagementModule.Actions.showLoader())
            const response = await InvestmentModule.Connector.getInvestments(params)
            dispatch(getInvestmentsSuccess(response.data))
            dispatch(ViewManagementModule.Actions.hideLoader())
        } catch (err) {
            dispatch(ViewManagementModule.Actions.hideLoader())
        }
    };
}
function addInvestment(investment: InvestmentModule.Types.Investment) {
    return async dispatch => {
        try {
            dispatch(ViewManagementModule.Actions.showLoader())
            await InvestmentModule.Connector.addInvestment(investment)
            dispatch(addInvestmentSuccess());
            history.push('/dashboard')
            dispatch(ViewManagementModule.Actions.hideLoader())

        } catch (err) {
            dispatch(ViewManagementModule.Actions.hideLoader())

            // 
        }
    };
}

function archiveInvestment(investmentId: number) {
    return async dispatch => {
        try {
            dispatch(ViewManagementModule.Actions.showLoader())
            await InvestmentModule.Connector.archiveInvestment(investmentId)
            dispatch(archiveInvestmentSuccess(investmentId));
            dispatch(ViewManagementModule.Actions.hideLoader())
            dispatch(getInvestments());
        } catch (err) {
            dispatch(ViewManagementModule.Actions.hideLoader())

            // 
        }
    };
}
function getInvestmentDetails(investmentId: number) {
    return async dispatch => {
        try {
            const query = createSerachQuery({id: investmentId})
            dispatch(ViewManagementModule.Actions.showLoader())
            const response = await InvestmentModule.Connector.getInvestments(query)
            dispatch(getInvestmentDetailsSuccess(response.data[0]))
            dispatch(ViewManagementModule.Actions.hideLoader())
        } catch (err) {
            dispatch(ViewManagementModule.Actions.hideLoader())

            // 
        }
    };
}

function getInvestmentDetailsSuccess(investmentDetails: InvestmentModule.Types.Investment): InvestmentActionModel.GetInvestmentDetails {
    return {
        type: Investment.GET_INVESTMENT_DETAILS,
        payload: {
            investmentDetails
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

function archiveInvestmentSuccess(investmentId: number): InvestmentActionModel.ArchiveProduct {
    return {
        type: Investment.ARCHIVE_INVESTMENT,
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
    setActiveInvestmentId,
    archiveInvestment,
    getInvestmentDetails
}
