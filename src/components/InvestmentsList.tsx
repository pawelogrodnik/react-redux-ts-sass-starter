import * as React from 'react';
import * as InvestmentsModule from 'Modules/InvestmentModule';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
// import TypeConverter from './TypeConverter';
import StatusConverter from './StatusConverter';
import * as Dictionary from 'Models/Dictionary';
import * as moment from 'moment';
type DispatchedP = {
    getInvestments: () => void;
}
type ConnectedP = {
    investmentList: Array<InvestmentsModule.Types.Investment>
}
class InvestmentList extends React.Component<DispatchedP & ConnectedP, any> {
    public async componentWillMount() {
        await this.props.getInvestments()
    }
    public render() {
        return (
            <div className="investmentList">
                <h1>Lista inwestycji</h1>
                <p>Lorem ipsum dolor sit amet</p>
                <ReactTable
                    showPagination={false}
                    sortable={true}
                    minRows={0}
                    data={this.props.investmentList ? [...this.props.investmentList] : []}
                    columns={[
                        {
                            id: 'id',
                            accessor: 'id',
                            Header: 'ID produktu',
                        },
                        {
                            id: 'type',
                            Header: 'Typ produktu',
                            Cell: (props) => Dictionary.investmentTypeMap.get(props.original.type)
                        },
                        {
                            id: 'status',
                            Header: 'Status produktu',
                            Cell: (props) => <StatusConverter {...props} />
                        },
                        {
                            id: 'title',
                            Header: 'Nazwa produktu',
                            accessor: d => d.basicParams.title
                        },
                        {
                            id: 'price',
                            Header: 'Cena w serwisie',
                            accessor: d => d.detailedParams.priceService + " PLN"
                        },
                        {
                            id: 'date',
                            Header: 'Rozpoczęcie sprzedaży',
                            accessor: d => moment(d.basicParams.startDate).format('DD-MM-YYYY')
                        },
                        {
                            id: 'edit',
                            Cell: <i className="fas fa-edit" />,
                            width: 50
                        },
                        {
                            id: 'archive',
                            Cell: <i className="fas fa-trash" />,
                            width: 50
                        }
                    ]}
                />
            </div>
        )
    }
}

const mapDispatchToProps: DispatchedP = {
    getInvestments: () => InvestmentsModule.Actions.getInvestments()
};
function mapStateToProps(state: RootState): ConnectedP {
    return {
        investmentList: state.investmentStore.investmentList
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InvestmentList)