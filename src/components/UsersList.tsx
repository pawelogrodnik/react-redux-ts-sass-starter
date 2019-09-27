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
import EditUserByAdmin from './EditUserByAdmin'

type DispatchedP = {
    getUsersList: () => void;
    getSpecificUser: (id) => void;
}
type ConnectedP = {
    usersList: Array<UserModule.Types.UserInList>
    specificUser: UserModule.Types.SpecificUser;
}

class UsersList extends React.Component<DispatchedP & ConnectedP, any> {
    constructor(props: ConnectedP & DispatchedP) {
        super(props);
    }
    public async componentWillMount() {
        await this.props.getUsersList()
        console.log(this.props.usersList)

    }

    public render() {
        return (
            <div className="investmentList">
                {/* {!this.state.showSpecificUser ? ( */}
                <>
                    <h2>Lista użytkowników w systemie</h2>
                    <ReactTable
                        showPagination={true}
                        sortable={true}
                        minRows={0}
                        previousText='Poprzednia'
                        nextText="Następna"
                        pageText="Strona"
                        ofText="z"
                        rowsText="rzędów"
                        loadingText='Ładowanie...'
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
                                id: 'role',
                                Header: 'Rola użytkownika',
                                accessor: d => d.firstRole == 'ROLE_USER'? 'Admin' : (d.firstRole == "ROLE_CUSTOMER" ? 'Klient' : 'Handlowiec')
                            },
                            {
                                id: 'active',
                                Header: 'Status konta',
                                accessor: d => d.active ? 'Aktywne' : 'Nieaktywne'
                            },
                            {
                                id: 'check',
                                Cell: (props) => <button className="btn btn--checkInvestment" onClick={async () => {
                                    await this.props.getSpecificUser(props.original.id)
                                    history.push('/dashboard/editUserByAdmin')
                                }}>Edytuj dane</button>,
                                width: 150
                            }
                        ]}
                    />
                </>
                {/* ) : (
                    <>
                        <EditUserByAdmin />
                        <button className="btn btn--main" onClick={async () => {
                             this.setState({showSpecificUser: false})
                        }}>Powrót</button>
                    </>
                )} */}
            </div>
        )
    }
}

const mapDispatchToProps: DispatchedP = {
    getUsersList: () => UserModule.Actions.getUsersList(),
    getSpecificUser: (id) => UserModule.Actions.getSpecificUser(id)
}

function mapStateToProps(state: RootState): ConnectedP {
    return {
        usersList: state.userStore.usersList,
        specificUser: state.userStore.specificUser
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersList)