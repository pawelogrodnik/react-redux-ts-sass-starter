import * as React from 'react';
import { createSerachQuery } from 'src/Connectors/config';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import { history } from 'src/App';

type DispatchedP = {};

type ConnectedP = {};

export default class Returns extends React.Component<DispatchedP & ConnectedP> {
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
                    <h2>ZWROTY</h2>
                    <ul className="ulType">
                        <li>Mają Państwo prawo zwrócić zakupiony produkt w przeciągu 30 DNI od dnia finalizacji (prawo odstąpienia od umowy sprzedaży)</li>
                        <li>Termin ZWROTU PŁATNOŚCI może wynieść od 5 DO 14 DNI na zasadach określonych w przepisach prawa.</li>
                        <li>Za proces zwrotu odpowiedzialni są oferenci wystawiający swoje towary na portalu Obligain.</li>
                        <li>W razie problemów ze zwrotem Obligain zwróci się, na prośbę inwestora do Oferenta, by wyjaśnić sytuację.</li>
                    </ul>
                </div>
            </div>
        );
    }
}
