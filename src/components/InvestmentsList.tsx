import * as React from 'react';
import * as InvestmentsModule from 'Modules/InvestmentModule';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import ReactTable from 'react-table';

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
                    data={this.props.investmentList ? [...this.props.investmentList] : []}
                    columns={[
                        {
                            id: 'company_name',
                            accessor: 'type',
                        },
                        {
                            id: 'estimated_risk',
                            accessor: 'estimated_risk',
                        },
                        {
                            id: 'interest',
                            accessor: 'interest',
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