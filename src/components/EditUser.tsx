import * as React from 'react';
import AddInvestmentForm from './Forms/AddInvestmentForm';
import * as UserModule from 'Modules/UserModule';
import { connect } from 'react-redux';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { history } from 'src/App';
import EditUserForm from './Forms/EditUserForm';

type DispatchedP = {
    editUser: (newUser: any) => void;
}

class EditUser extends React.Component<DispatchedP, any> {
    constructor(props: DispatchedP) {
        super(props);
    }

    public render() {
     
        return (
            <div className="edituser">
                <h2>Edycja danych</h2>
                <EditUserForm onSubmit={async (data) => await (this.props.editUser(data))}/>
            </div>
        )
    }
}


const mapDispatchToProps: DispatchedP = {
    editUser: (data: any) => UserModule.Actions.editUser(data),
};

// function mapStateToProps(state: RootState): ConnectedP {
//     return {
//         activeInvestment: InvestmentModule.Selectors.getActiveInvestment(state.investmentStore)
//     }
// }

export default connect(null, mapDispatchToProps)(EditUser)