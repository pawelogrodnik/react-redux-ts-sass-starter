import * as React from 'react';
import { createSerachQuery } from 'src/Connectors/config';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import { history } from 'src/App';

type DispatchedP = {};

type ConnectedP = {};

export default class Complaints extends React.Component<DispatchedP & ConnectedP> {
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
                    <h2>REKLAMACJE</h2>
                    <p>Zgodnie z art. 556 i nast. Kodeksu cywilnego na wszystkie produkty zakupione od Oferentów prezentujących swoje Towary na platformie Obligain.com przysługują Państwu uprawnienia z tytułu rękojmi przez okres 2 lat od daty zakupu. Za realizację rękojmi odpowiedzialni są Oferenci. W razie problemów z rękojmią Obligain zwróci się, na prośbę inwestora do Oferenta, by wyjaśnić sytuację. </p>
                </div>
            </div>
        );
    }
}
