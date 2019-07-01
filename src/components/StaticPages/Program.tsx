import * as React from 'react';
import { createSerachQuery } from 'src/Connectors/config';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import { history } from 'src/App';

type DispatchedP = {};

type ConnectedP = {};

export default class Program extends React.Component<DispatchedP & ConnectedP> {
    constructor(props: DispatchedP & ConnectedP) {
        super(props);
        this.state = {
            //
        };
    }

    public render() {
        return (
            <div className="page page--static">
                <div className="container page--content">
                    <h2>PROGRAM PARTNERSKI</h2>
                    <p>Jest nam niezmiernie miło poinformować Państwa, że na Sierpień bieżącego roku zaplanowaliśmy wprowadzenie systemu partnerskiego. Oferta skierowana jest do pracowników branży finansowej, którzy chcieliby zarabiać polecając nasz portal. Jeżeli mają Państwo pytania prosimy o kontakt na adres biuro@obligain.com</p>
                </div>
            </div>
        );
    }
}
