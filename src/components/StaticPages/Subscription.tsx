import * as React from 'react';
import { createSerachQuery } from 'src/Connectors/config';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import { history } from 'src/App';

type DispatchedP = {};

type ConnectedP = {};

export default class Subscription extends React.Component<DispatchedP & ConnectedP> {
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
                    <h2>ABONAMENT</h2>
                    <p>Jest nam niezmiernie miło poinformować Państwa, że spółka zamierza uruchomić na portalu Obligain.com do końca roku usługę abonamentową, która zaoferuje naszym Klientom wybrane korzyści. Szczegóły przekażemy Państwu wkrótce. </p>
                </div>
            </div>
        );
    }
}
