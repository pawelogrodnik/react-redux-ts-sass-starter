import * as React from 'react';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import * as InvestmentModule from 'Modules/InvestmentModule';

type P = {
    match: any;
}
type DispatchedP = {
    getInvestmentDetails: (id: number) => void;
}

type ConnectedP = {
    investmentDetails: InvestmentModule.Types.Investment
}

class SingleInvestment extends React.Component<DispatchedP & ConnectedP & P, any> {
    constructor(props: DispatchedP & ConnectedP & P) {
        super(props);
    }
    public async componentDidMount() {
        await this.props.getInvestmentDetails(this.props.match.params.id);
    }
    public render() {
        return (
            <div className="page page--singleInvestment">
                <h1>SingleInvestment {this.props.match.params.id}</h1>
                {this.props.investmentDetails && (
                    <div className="activeInvestmentDetails">
                        <p>{this.props.investmentDetails.id}</p>
                        <p>{this.props.investmentDetails.type}</p>
                        <p>{this.props.investmentDetails.status}</p>
                        <p>{this.props.investmentDetails.basicParams.title}</p>
                        <p>{this.props.investmentDetails.basicParams.description}</p>
                        <p>{this.props.investmentDetails.basicParams.startDate}</p>
                    </div>
                )}
            </div>
        );
    }
}

const mapDispatchToProps: DispatchedP = {
    getInvestmentDetails: (id: number) => InvestmentModule.Actions.getInvestmentDetails(id)
};

function mapStateToProps(state: RootState): ConnectedP {
    return {
        investmentDetails: state.investmentStore.investmentDetails
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleInvestment)