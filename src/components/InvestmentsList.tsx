import * as React from 'react';
import * as InvestmentsModule from 'Modules/InvestmentModule';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import TypeConverter from './TypeConverter';
import StatusConverter from './StatusConverter';

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
                            Header: 'ID produktu'
                        },
                        {
                            id: 'type',
                            Header: 'Typ produktu',
                            Cell: TypeConverter
                        },
                        {
                            id: 'status',
                            Header: 'Status produktu',
                            Cell: StatusConverter
                        },
                        {
                            id: 'title',
                            Header: 'Nazwa produktu',
                            accessor: d => d.basicParams.title
                        },
                        {
                            id: 'price',
                            Header: 'Cena w serwisie',
                            accessor: d => d.detailedParams.priceService
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