import * as React from 'react';
import * as UserModule from 'Modules/UserModule';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import ReactTable, { RowInfo } from 'react-table';
// import TypeConverter from './TypeConverter';
import StatusConverter from './StatusConverter';
import * as Dictionary from 'Models/Dictionary';
import * as moment from 'moment';
import { history } from 'src/App';
import { baseURL } from '../Connectors/config';
import { Link } from 'react-router-dom';

type DispatchedP = {
    getUsersList: () => void;
}
type ConnectedP = {
    usersList: Array<UserModule.Types.UserInList>
}
class UsersList extends React.Component<DispatchedP & ConnectedP, any> {
    public async componentWillMount() {
        await this.props.getUsersList()
        console.log(this.props.usersList)
    }

    public render() {
        return (
            <div className="investmentList">
                <h2>Lista użytkowników w systemie</h2>
                <ReactTable
                    showPagination={true}
                    sortable={true}
                    minRows={0}
                    // getTrProps={this.getTrProps}
                    data={this.props.usersList ? [...this.props.usersList] : []}
                    columns={[
                        {
                            id: 'id',
                            accessor: 'id',
                            Header: 'ID',
                            width: 50
                        },
                        {
                            id: 'email',
                            Header: 'Email użytkownika',
                            accessor: 'username'
                        },
                        {
                            id: 'firstName',
                            Header: 'Imię',
                            accessor: d => d.firstName ? d.firstName : 'Brak'
                        },
                        {
                            id: 'lastName',
                            Header: 'Nazwisko',
                            accessor: d => d.lastName ? d.lastName : 'Brak'
                        },
                        {
                            id: 'phone',
                            Header: 'Numer telefonu',
                            accessor: d => d.phone ? d.phone : 'Brak'
                        },
                        {
                            id: 'date',
                            Header: 'Data utworzenia',
                            accessor: d => d.dateAdd ? moment(d.dateAdd).format('DD-MM-YYYY') : 'Brak'
                        },
                        {
                            id: 'active',
                            Header: 'Status konta',
                            accessor: d => d.active ? 'Aktywne' : 'Nieaktywne'
                        }
                    ]}
                />
            </div>
        )
    }
}

const mapDispatchToProps: DispatchedP = {
    getUsersList: () => UserModule.Actions.getUsersList()
};
function mapStateToProps(state: RootState): ConnectedP {
    return {
        usersList: state.userStore.usersList
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersList)