import * as React from 'react';
import AddInvestmentForm from './Forms/AddInvestmentForm';

const AddInvestment = () => {
    return (
        <div className="addInvestment">
            <h1>Dodaj inwestycję</h1>
            <p>Lorem ipsum dolor sit amet</p>
            <AddInvestmentForm onSubmit={(data)=>console.log(data)} />
        </div> 
    )
}

export default AddInvestment;