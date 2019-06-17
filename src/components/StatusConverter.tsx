import * as React from 'react';
import * as InvestmentsModule from 'Modules/InvestmentModule';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import ReactTable from 'react-table';

export default class StatusConverter extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        if (this.props && this.props.original) {
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
        } else {
            return null
        }
        
    }
}