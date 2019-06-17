import * as React from 'react';
import * as InvestmentsModule from 'Modules/InvestmentModule';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import ReactTable from 'react-table';

type props = {
    type: String
}
export default class TypeConverter extends React.Component<any, any> {
    public render() {
        return (
            <div>
                {
                    this.props.original.type === 'vehicle' && <span>Samochód</span>
                }
                {
                    this.props.original.type === 'gold' && <span>Złoto</span>
                }
                {
                    this.props.original.type === 'diamonds' && <span>Diamenty</span>
                }
                {
                    this.props.original.type === 'token' && <span>Tokeny</span>
                }
                {
                    this.props.original.type === 'whisky' && <span>Whisky</span>
                }
                {
                    this.props.original.type === 'Hotel' && <span>Hotel</span>
                }
                {
                    this.props.original.type === 'parcel' && <span>Działka</span>
                }
                {
                    this.props.original.type === 'flat' && <span>Mieszkanie</span>
                }
                {
                    this.props.original.type === 'dorm' && <span>Akademik</span>
                }
            </div>
        )
    }
}