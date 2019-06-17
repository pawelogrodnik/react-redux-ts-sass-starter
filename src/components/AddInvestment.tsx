import * as React from 'react';
import AddInvestmentForm from './Forms/AddInvestmentForm';
import * as InvestmentModule from 'Modules/InvestmentModule';
import { connect } from 'react-redux';

type DispatchedP = {
    addInvestment: (investment: any) => void;
}

class AddInvestment extends React.Component<DispatchedP,any> {
    constructor(props: DispatchedP) {
        super(props);
    }

    public render() {
        return (
            <div className="addInvestment">
                <h1>Dodaj inwestycję</h1>
                <p>Lorem ipsum dolor sit amet</p>
                <AddInvestmentForm onSubmit={async(data)=> await(this.props.addInvestment(data))} />
            </div> 
        )
    }
}


const mapDispatchToProps: DispatchedP = {
    addInvestment: (investmentData: any) => InvestmentModule.Actions.addInvestment(investmentData),
};



export default connect(null, mapDispatchToProps)(AddInvestment)