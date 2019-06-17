import * as React from 'react';
import AddInvestmentForm from './Forms/AddInvestmentForm';

class AddInvestment extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }
    
    public render() {
        return (
            <div className="addInvestment">
                <h1>Dodaj inwestycję</h1>
                <p>Lorem ipsum dolor sit amet</p>
                <AddInvestmentForm onSubmit={(data)=>console.log(data)} />
            </div> 
        )
    }
}

export default AddInvestment;