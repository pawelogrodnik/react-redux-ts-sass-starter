import * as React from 'react';
import AddInvestmentForm from './Forms/AddInvestmentForm';
import * as UserModule from 'Modules/UserModule';
import { connect } from 'react-redux';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { history } from 'src/App';
import RegistrationForm from './Forms/RegistrationForm';

type DispatchedP = {
    registerUser: (newUser: any) => void;
}

class Registration extends React.Component<DispatchedP, any> {
    constructor(props: DispatchedP) {
        super(props);
    }

    public render() {
     
        return (
            <div className="registration">
                <div className="registration__inner">
                    <h2>Rejestracja</h2>
                    <RegistrationForm onSubmit={async (data) => await (this.props.registerUser(data))}/>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps: DispatchedP = {
    registerUser: (newUser: any) => UserModule.Actions.registerUser(newUser),
};

// function mapStateToProps(state: RootState): ConnectedP {
//     return {
//         activeInvestment: InvestmentModule.Selectors.getActiveInvestment(state.investmentStore)
//     }
// }

export default connect(null, mapDispatchToProps)(Registration)