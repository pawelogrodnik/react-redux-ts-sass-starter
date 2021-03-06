import * as React from 'react';
import * as InvestmentsModule from 'Modules/InvestmentModule';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import ReactTable, { RowInfo } from 'react-table';
import * as moment from 'moment';
import { Link } from 'react-router-dom';

type DispatchedP = {
    getPurchasedInvestments: () => void;
}
type ConnectedP = {
    purchasedInvestmentList: Array<InvestmentsModule.Types.PurchasedInvestment>
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
                                accessor: 'productName'
                            },
                            {
                                id: 'companyName',
                                Header: 'Nazwa firmy',
                                accessor: 'companyName'
                            },
                            {
                                id: 'price',
                                Header: 'Cena zakupu',
                                accessor: d => d.salePrice + " PLN"
                            },
                            {
                                id: 'date',
                                Header: 'Data sprzedaży',
                                accessor: d => moment(d.saleDate).format('DD-MM-YYYY HH:mm')
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