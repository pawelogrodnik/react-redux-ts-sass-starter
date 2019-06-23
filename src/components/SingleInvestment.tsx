import * as React from 'react';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import * as InvestmentModule from 'Modules/InvestmentModule';

type P = {
    match: any;
}
type DispatchedP = {
}

type ConnectedP = {
    activeInvestment: InvestmentModule.Types.Investment
}

class SingleInvestment extends React.Component<DispatchedP & ConnectedP & P, any> {
    constructor(props: DispatchedP & ConnectedP & P) {
        super(props);
    }

    public render() {
        return (
            <div className="page page--singleInvestment">
                <h1>SingleInvestment {this.props.match.params.id}</h1>
                {/* <p>{this.props.activeInvestment.type}</p> */}
            </div>
        );
    }
}

const mapDispatchToProps: DispatchedP = {
    // 
};

function mapStateToProps(state: RootState): ConnectedP {
    return {
        activeInvestment: InvestmentModule.Selectors.getActiveInvestment(state.investmentStore)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleInvestment)