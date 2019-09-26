import * as React from 'react';
import * as InvestmentsModule from 'Modules/InvestmentModule';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import ReactTable, { RowInfo } from 'react-table';
import * as moment from 'moment';
import { Link } from 'react-router-dom';

type DispatchedP = {
    getPurchasedInvestmentsByAdmin: () => void;
}
type ConnectedP = {
    purchasedInvestmentList: Array<InvestmentsModule.Types.PurchasedInvestment>
}
class PurchasedInvestmentsByAdmin extends React.Component<DispatchedP & ConnectedP, any> {
    public async componentWillMount() {
        await this.props.getPurchasedInvestmentsByAdmin()
        console.log(this.props.purchasedInvestmentList)
    }

    public render() {
        return (
            <div className="investmentList">
                <h2>Lista zakupionych inwestycji przez klientów</h2>
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
                        loadingText='Ładowanie...'
                        // getTrProps={this.getTrProps}
                        data={this.props.purchasedInvestmentList ? [...this.props.purchasedInvestmentList] : []}
                        columns={[
                            {
                                id: 'id',
                                accessor: 'id',
                                Header: 'Id sprzedaży',
                                width: 100
                            },
                            {
                                id: 'productId',
                                accessor: 'product_id',
                                Header: 'Id produktu',
                                width: 100
                            },
                            {
                                id: 'type',
                                Header: 'Nazwa produktu',
                                accessor: 'product_name'
                            },
                            {
                                id: 'first_name',
                                Header: 'Imię',
                                accessor: 'buyer_first_name'
                            },
                            {
                                id: 'last_name',
                                Header: 'Nazwisko',
                                accessor: 'buyer_last_name'
                            },
                            {
                                id: 'price',
                                Header: 'Cena zakupu',
                                accessor: d => d.sale_price + " PLN"
                            },
                            {
                                id: 'date',
                                Header: 'Data sprzedaży',
                                accessor: d => moment(d.sale_date).format('DD-MM-YYYY HH:mm')
                            },
                            {
                                id: 'edit',
                                Header: 'Szczegóły',
                                Cell: (props) => <Link to={`/dashboard/purchasedInvestments/details/${props.original.id}`} className="btn btn--checkInvestment">Zobacz</Link>,
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
    getPurchasedInvestmentsByAdmin: () => InvestmentsModule.Actions.getPurchasedInvestmentsByAdmin()
};
function mapStateToProps(state: RootState): ConnectedP {
    return {
        purchasedInvestmentList: state.investmentStore.purchasedInvestmentList
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PurchasedInvestmentsByAdmin)