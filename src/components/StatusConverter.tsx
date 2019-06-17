import * as React from 'react';
import * as InvestmentsModule from 'Modules/InvestmentModule';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import ReactTable from 'react-table';

type props = {
    status: String
}
export default class StatusConverter extends React.Component<any, any> {
    public render() {
        return (
            <div>
                {
                    this.props.original.status === 'active' && <span>Aktywny</span>
                }
                {
                    this.props.original.status === 'archived' && <span>Archiwalny</span>
                }
            </div>
        )
    }
}