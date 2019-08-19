import * as React from 'react';
import AddInvestmentForm from './Forms/AddInvestmentForm';
import * as UserModule from 'Modules/UserModule';
import { connect } from 'react-redux';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { history } from 'src/App';
import EditUserForm from './Forms/EditUserForm';

type DispatchedP = {
    editUser: (newUser: any) => void;
    getLoggedUserdata: () => void;
}
type ConnectedP = {
    loggedUserData: any
}

class EditUser extends React.Component<DispatchedP & ConnectedP, any> {
    constructor(props: DispatchedP & ConnectedP) {
        super(props);
    }

    public componentWillMount() {
        this.props.getLoggedUserdata();
    }

    public render() {
        return (
            <div className="edituser">
                <h2>Edycja danych</h2>
                <EditUserForm onSubmit={async (data) => await (this.props.editUser(data))} initialValues={this.props.loggedUserData}/>
            </div>
        )
    }
}


const mapDispatchToProps: DispatchedP = {
    editUser: (data: any) => UserModule.Actions.editUser(data),
    getLoggedUserdata: () => UserModule.Actions.getLoggedUserData(),
};

function mapStateToProps(state: RootState): ConnectedP {
    return {
        loggedUserData: state.userStore.loggedUserData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)