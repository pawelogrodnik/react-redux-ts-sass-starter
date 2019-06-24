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
type DispatchedP = {
    getInvestments: () => void;
    setActiveInvestmentId: (investmentId: number) => void;
}
type ConnectedP = {
    investmentList: Array<InvestmentsModule.Types.Investment>
}
class InvestmentList extends React.Component<DispatchedP & ConnectedP, any> {
    public async componentWillMount() {
        await this.props.getInvestments()
    }

    private editProduct = (rowInfo: RowInfo) => {
        this.props.setActiveInvestmentId(rowInfo.original.id);
        history.push(`/dashboard/investments/${rowInfo.original.id}`);
    };

    private archiveProduct = (rowInfo: RowInfo) => {
        fetch(baseURL + 'products/archive/?id=' + rowInfo.original.id, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then(() => this.props.getInvestments());
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
                    // getTrProps={this.getTrProps}
                    data={this.props.investmentList ? [...this.props.investmentList] : []}
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
                            id: 'interest',
                            Header: 'Oprocentowanie',
                            accessor: d => d.basicParams.interest + " %"
                        },
                        {
                            id: 'duration',
                            Header: 'Czas trwania',
                            accessor: d => d.basicParams.duration + " mies."
                        },
                        {
                            id: 'risk',
                            Header: 'Ryzyko',
                            accessor: d => d.basicParams.risk,
                            width: 100
                        },
                        {
                            id: 'date',
                            Header: 'Rozpoczęcie sprzedaży',
                            accessor: d => moment(d.basicParams.startDate).format('DD-MM-YYYY')
                        },
                        {
                            id: 'edit',
                            Cell: (props) => <span className={props.original.status === 'archived' ? 'action--disabled' : ''} onClick={() => props.original.status === 'archived' ? null : this.editProduct(props)}><i className="fas fa-edit" /></span>,
                            width: 50
                        },
                        {
                            id: 'archive',
                            Cell: (props) => <span className={props.original.status === 'archived' ? 'action--disabled' : ''} onClick={() => props.original.status === 'archived' ? null : this.archiveProduct(props)}><i className="fas fa-trash" /></span>,
                            width: 50
                        }
                    ]}
                />
            </div>
        )
    }
}

const mapDispatchToProps: DispatchedP = {
    getInvestments: () => InvestmentsModule.Actions.getInvestments(),
    setActiveInvestmentId: (investmentId: number) => InvestmentsModule.Actions.setActiveInvestmentId(investmentId),
};
function mapStateToProps(state: RootState): ConnectedP {
    return {
        investmentList: state.investmentStore.investmentList
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InvestmentList)