import * as React from 'react';
import { createSerachQuery } from 'src/Connectors/config';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import { history } from 'src/App';

type DispatchedP = {};

type ConnectedP = {};

export default class OtherTerms extends React.Component<DispatchedP & ConnectedP> {
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
                    <h2>POZOSTAŁE REGULAMINY</h2>
                    <p>W tym miejscu publikowali będziemy regulaminy akcji promocyjnych, abonamentowych oraz rejestracyjnych. Portal obligain.com jest w ciągłym rozwoju i nigdy nie przestanie się rozwijać, dlatego w tym miejscu znajdą Państwo podstawy do każdej nowinki, którą wprowadzamy na stronę. Następna aktualizacja już w Sierpniu!</p>
                </div>
            </div>
        );
    }
}
