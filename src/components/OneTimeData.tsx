import * as React from 'react';
import * as InvestmentModule from 'Modules/InvestmentModule';
import { connect } from 'react-redux';
import OneTimeDataForm from './Forms/OneTimeDataForm';
import { RootState } from 'src/Store/Reducers/_RootReducer';

type DispatchedP = {
    getPDF: (selectedPDF: string, oneTimeData: any) => void;
}
type ConnectedP = {
    selectedPDF: string
}

class OneTimeData extends React.Component<DispatchedP & ConnectedP, any> {
    constructor(props: DispatchedP & ConnectedP) {
        super(props);
    }

    public render() {
        return (
            <div className="oneTimeData">
                <div className="oneTimeData__inner">
                    <OneTimeDataForm onSubmit={async (data) => await (this.props.getPDF(this.props.selectedPDF, data))}/>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps: DispatchedP = {
    getPDF: (selectedPDF: string, oneTimeData: any) => InvestmentModule.Actions.getPDF(selectedPDF, oneTimeData),
};

function mapStateToProps(state: RootState): ConnectedP {
    return {
        selectedPDF: state.investmentStore.selectedPDF
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OneTimeData)