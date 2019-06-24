import * as React from 'react';
import AddInvestmentForm from './Forms/AddInvestmentForm';
import * as InvestmentModule from 'Modules/InvestmentModule';
import { connect } from 'react-redux';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { history } from 'src/App';

type DispatchedP = {
    addInvestment: (investment: any) => void;
    removeActiveInvestmentId: () => void;
}
type ConnectedP = {
    activeInvestment: InvestmentModule.Types.Investment;
}
type P = {
    match: any;
    editable?: boolean
}

class AddInvestment extends React.Component<DispatchedP & ConnectedP & P,any> {
    constructor(props: DispatchedP & ConnectedP & P) {
        super(props);
    }

    public componentWillMount() {
        if (this.props.match.params.investmentId && !this.props.activeInvestment) {
            history.push('/dashboard');
        }
    }

    public componentWillUnmount() {
        this.props.removeActiveInvestmentId();
    }

    public componentDidUpdate(prevProps: DispatchedP & ConnectedP & P) {
        if (prevProps.match.params.investmentId && this.props.match.params.investmentId === undefined) {
            this.props.removeActiveInvestmentId();
        }
    }
    public render() {
        const initialValues = this.props.activeInvestment ? {...this.props.activeInvestment} : {};
        return (
            <div className="addInvestment">
                <h1>{this.props.match.params.investmentId ? 'Edytuj' : 'Dodaj'} inwestycję</h1>
                <p>Lorem ipsum dolor sit amet</p>
                <AddInvestmentForm onSubmit={async(data)=> await(this.props.addInvestment(data))} initialValues={initialValues}/>
            </div> 
        )
    }
}


const mapDispatchToProps: DispatchedP = {
    addInvestment: (investmentData: any) => InvestmentModule.Actions.addInvestment(investmentData),
    removeActiveInvestmentId: () => InvestmentModule.Actions.setActiveInvestmentId(null)
};

function mapStateToProps(state: RootState): ConnectedP {
    return {
        activeInvestment: InvestmentModule.Selectors.getActiveInvestment(state.investmentStore)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddInvestment)