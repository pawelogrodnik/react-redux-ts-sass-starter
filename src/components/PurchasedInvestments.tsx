import * as React from 'react';
import * as InvestmentsModule from 'Modules/InvestmentModule';
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
    getPurchasedInvestments: () => void;
}
type ConnectedP = {
    purchasedInvestmentList: Array<InvestmentsModule.Types.DownloadedInvestment>
}
class PurchasedInvestments extends React.Component<DispatchedP & ConnectedP, any> {
    public async componentWillMount() {
        await this.props.getPurchasedInvestments()
    }

    public render() {
        return (
            <div className="investmentList">
                <h2>Lista zakupionych inwestycji</h2>
                {this.props.purchasedInvestmentList.length > 0 ? (
                    <ReactTable
                    showPagination={true}
                    sortable={true}
                    minRows={0}
                    previousText='Poprzednia'
                    nextText="Następna"
                    pageText="Strona"
                    ofText="z"
                    rowsText="rzędów"
                    loadingText= 'Ładowanie...'
                    // getTrProps={this.getTrProps}
                    data={this.props.purchasedInvestmentList ? [...this.props.purchasedInvestmentList] : []}
                    columns={[
                        {
                            id: 'id',
                            accessor: 'id',
                            Header: 'ID',
                            width: 50
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
                        // {
                        //     id: 'email',
                        //     Header: 'Email sprzedawcy',
                        //     accessor: 'email'
                        // },
                        {
                            id: 'date',
                            Header: 'Data pobrania',
                            accessor: d => moment(d.date).format('DD-MM-YYYY')
                        },
                        {
                            id: 'edit',
                            Header: 'Inwestycja',
                            Cell: (props) => <Link to={`/investment/${props.original.id}`} className="btn btn--checkInvestment">Zobacz</Link>,
                            width: 150
                        }
                    ]}
                />
                ) : (
                    <p>Brak zakupionych inwestycji</p>
                )}
                
            </div>
        )
    }
}

const mapDispatchToProps: DispatchedP = {
    getPurchasedInvestments: () => InvestmentsModule.Actions.getPurchasedInvestments()
};
function mapStateToProps(state: RootState): ConnectedP {
    return {
        purchasedInvestmentList: state.investmentStore.purchasedInvestmentList
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PurchasedInvestments)