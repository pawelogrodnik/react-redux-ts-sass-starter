import * as React from 'react';
import AddInvestmentForm from './Forms/AddInvestmentForm';
import * as InvestmentModule from 'Modules/InvestmentModule';
import { connect } from 'react-redux';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { history } from 'src/App';

type DispatchedP = {
    addInvestment: (investment: any) => void;
}
type ConnectedP = {
    activeInvestment: InvestmentModule.Types.Investment
}
type P = {
    match: any
}

class AddInvestment extends React.Component<DispatchedP & ConnectedP & P,any> {
    constructor(props: DispatchedP & ConnectedP & P) {
        super(props);
    }

    public componentWillMount() {
        if (this.props.match.params && !this.props.activeInvestment) {
            history.push('/dashboard');
        }
    }

    public render() {
        const initialValues = this.props.activeInvestment ? {...this.props.activeInvestment} : {};
        return (
            <div className="addInvestment">
                <h1>{this.props.match.params ? 'Edytuj' : 'Dodaj'} inwestycję</h1>
                <p>Lorem ipsum dolor sit amet</p>
                <AddInvestmentForm onSubmit={async(data)=> await(this.props.addInvestment(data))} initialValues={initialValues} />
            </div> 
        )
    }
}


const mapDispatchToProps: DispatchedP = {
    addInvestment: (investmentData: any) => InvestmentModule.Actions.addInvestment(investmentData)
};

function mapStateToProps(state: RootState): ConnectedP {
    return {
        activeInvestment: InvestmentModule.Selectors.getActiveInvestment(state.investmentStore)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddInvestment)