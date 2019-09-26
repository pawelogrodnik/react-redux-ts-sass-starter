import * as React from 'react';
import * as InvestmentsModule from 'Modules/InvestmentModule';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import ReactTable, { RowInfo } from 'react-table';
import * as Dictionary from 'Models/Dictionary';
import * as moment from 'moment';
import { Link } from 'react-router-dom';

type DispatchedP = {
    getDownloadedInvestmentsByAdmin: () => void;
}
type ConnectedP = {
    downloadedInvestmentList: Array<InvestmentsModule.Types.DownloadedInvestment>
}
class DownloadedInvestmentsByAdmin extends React.Component<DispatchedP & ConnectedP, any> {
    public async componentWillMount() {
        await this.props.getDownloadedInvestmentsByAdmin()
    }

    public render() {
        return (
            <div className="investmentList">
                <h2>Lista pobranych inwestycji przez klientów</h2>
                {this.props.downloadedInvestmentList.length > 0 ? (
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
                        data={this.props.downloadedInvestmentList ? [...this.props.downloadedInvestmentList] : []}
                        columns={[
                            {
                                id: 'id',
                                accessor: 'product_id',
                                Header: 'ID Produktu',
                                width: 100
                            },
                            {
                                id: 'type',
                                Header: 'Typ produktu',
                                Cell: (props) => Dictionary.investmentTypeMap.get(props.original.type)
                            },
                            {
                                id: 'title',
                                Header: 'Nazwa produktu',
                                accessor: 'title'
                            },
                            {
                                id: 'first_name',
                                Header: 'Imię',
                                accessor: 'first_name'
                            },
                            {
                                id: 'last_name',
                                Header: 'Nazwisko',
                                accessor: 'last_name'
                            },
                            {
                                id: 'seller_email',
                                Header: 'Email sprzedawcy',
                                accessor: 'seller_email'
                            },
                            {
                                id: 'date',
                                Header: 'Data pobrania',
                                accessor: d => moment(d.date).format('DD-MM-YYYY HH:mm')
                            },
                            {
                                id: 'client_type',
                                Header: 'Typ klienta',
                                accessor: d => d.user_id === null ? 'Gość' : 'Zalogowany'
                            },
                            {
                                id: 'edit',
                                Header: 'Inwestycja',
                                Cell: (props) => <Link to={`/investment/${props.original.product_id}`} className="btn btn--checkInvestment">Zobacz</Link>,
                                width: 150
                            }
                        ]}
                    />
                ) : (
                        <p>Brak pobranych inwestycji</p>
                    )}

            </div>
        )
    }
}

const mapDispatchToProps: DispatchedP = {
    getDownloadedInvestmentsByAdmin: () => InvestmentsModule.Actions.getDownloadedInvestmentsByAdmin()
};
function mapStateToProps(state: RootState): ConnectedP {
    return {
        downloadedInvestmentList: state.investmentStore.downloadedInvestmentList
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DownloadedInvestmentsByAdmin)