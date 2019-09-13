import * as React from 'react';
import AddInvestmentForm from './Forms/AddInvestmentForm';
import * as UserModule from 'Modules/UserModule';
import * as ViewManagementModule from 'Modules/ViewManagementModule';
import { connect } from 'react-redux';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { history } from 'src/App';
import EditUserByAdminForm from './Forms/EditUserByAdminForm';
import { baseURL } from './../Connectors/config';

type DispatchedP = {
    editUserByAdmin: (newUser: any) => void;
    showPopup: (text: string) => void;
}
type ConnectedP = {
    specificUser: UserModule.Types.SpecificUser;
}
type S = {
    img: string;
}

class EditUser extends React.Component<DispatchedP & ConnectedP, S> {
    constructor(props: DispatchedP & ConnectedP) {
        super(props);
        this.state = {
            img: ''
        }
    }

    public onUserDelete = () => {
       this.props.showPopup('deleteUser')
    }
 
    public render() {
            return (
                <div className="edituser">
                    <h2>Edycja danych</h2>
                    <h3>Dane osobowe</h3>
                    <div className="edituser__img-profile">
                        {((this.props.specificUser && this.props.specificUser.avatar && !this.state.img) ? (
                            <img src={`${baseURL}/${this.props.specificUser.avatar}`} />
                        ) : (this.state.img ? (
                            <img src={this.state.img} />
                        ): (
                            <i className="fas fa-user-tie" />
                        )))}
                    </div>
                    <EditUserByAdminForm onChange={(data:any) => data.avatar && this.setState({img: data.avatar.content})} onSubmit={async (data) => {await (this.props.editUserByAdmin(data))}} initialValues={this.props.specificUser}/>
                    <div className="edituser--actions">
                        <button className="edituser--delete btn btn--main btn--big btn--red" onClick={this.onUserDelete}>Trwałe usunięcie konta</button>
                    </div>
                    <button className="btn btn--main" onClick={() => history.push('/dashboard/usersList')}>Powrót</button>
                </div>
            )
    }
}


const mapDispatchToProps: DispatchedP = {
    editUserByAdmin: (data: any) => UserModule.Actions.editUserByAdmin(data),
    showPopup: (text: string) => ViewManagementModule.Actions.showPopup(text)
};

function mapStateToProps(state: RootState): ConnectedP {
    return {
        specificUser: state.userStore.specificUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)