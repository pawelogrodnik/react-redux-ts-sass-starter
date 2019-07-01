import * as React from 'react';
import { createSerachQuery } from 'src/Connectors/config';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import { history } from 'src/App';

type DispatchedP = {};

type ConnectedP = {};

export default class FormOfPayments extends React.Component<DispatchedP & ConnectedP> {
    constructor(props: DispatchedP & ConnectedP) {
        super(props);
        this.state = {
            //
        };
    }

    public render() {
        return (
            <div className="page page--static">
                 <div style={{ backgroundImage: `url(banner.jpg)` }} className="singleBackgroundImage" />
                <div className="container page--content">
                    <h2>FORMY PŁATNOŚCI</h2>
                    <p>Realizując przepisy prawa każdy zakup powyżej kwoty 15 000 pln jest realizowany za pośrednictwem przelewu, karty kredytowej bądź systemu płatności. </p>
                    <p>Formy płatności są uzależnione od Oferentów. Oferent nigdy nie powinien przyjmować płatności gotówkowej od Klientów. W przypadku takiej sytuacji prosimy o niezwłoczny kontakt z naszą firmą. </p>
                    <p>Wszyscy oferenci przyjmują płatności przelewem, a wybrani Oferenci przyjmują płatności za pośrednictwem systemów płatności.</p>
                    <p>Jedyną formą płatności pobieranych przez nasz portal będzie abonament, który zostanie wprowadzony w grudniu bieżącego roku i będzie obejmował tylko wybrane oferty na naszym portalu. </p>
                </div>
            </div>
        );
    }
}
