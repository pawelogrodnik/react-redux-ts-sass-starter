import { createSerachQuery } from './../../Connectors/config';
import { Investment } from './EnumTypes/ActionEnumTypes';
import * as InvestmentActionModel from './Models/InvestmentActionModel';
import * as InvestmentModule from 'Modules/InvestmentModule';
import * as ViewManagementModule from 'Modules/ViewManagementModule';
import { history } from 'src/App';
import { reset } from 'redux-form';
import { hidePopup } from './ViewManagementActions';
import * as ErrorActions from './ErrorActions';

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

function clearInvestment() {
    return {
        type: Investment.CLEAR_INVESTMENT
    }
};

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

function contact(contactData: InvestmentModule.Types.Contact) {
    return async dispatch => {
        try {
            dispatch(ViewManagementModule.Actions.showLoader())
            await InvestmentModule.Connector.contact(contactData)
            dispatch(contactSuccess());
            dispatch(reset('contactForm'));
            dispatch(ViewManagementModule.Actions.hideLoader())
        } catch (err) {
            dispatch(ViewManagementModule.Actions.hideLoader())

            // 
        }
    };
}
function contactSuccess(): InvestmentActionModel.Contact {
    return {
        type: Investment.CONTACT
    }
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

function setSelectedPDF(path: string): InvestmentActionModel.SetSelectedPDF {
    return {
        type: Investment.SET_SELECTED_PDF,
        payload: {
            path
        }
    }
}

function getPDF(path: string, data1?:any) {
    return async dispatch => {
        try {
            dispatch(ViewManagementModule.Actions.showLoader())
            await InvestmentModule.Connector.downloadPDF(path,data1).then(({data}) => {
                const downloadUrl = window.URL.createObjectURL(new Blob([data], {type: 'application/pdf'}));
                const link = document.createElement('a');
                link.download = 'Obligain.pdf';
                link.href = downloadUrl;
                document.body.appendChild(link);
                link.click();
            }).catch((err) => {
                console.log(err.response)
            });
            dispatch(ViewManagementModule.Actions.hideLoader())
            dispatch(hidePopup());
            
        } catch (err) {
            console.log(err.response)
            dispatch(ErrorActions.setResponseError(err.response ? err.response : err));
            dispatch(ViewManagementModule.Actions.hideLoader())
        }
    };
}

export {
    getInvestments,
    addInvestment,
    setActiveInvestmentId,
    archiveInvestment,
    getInvestmentDetails,
    contact,
    clearInvestment,
    setSelectedPDF,
    getPDF
}
