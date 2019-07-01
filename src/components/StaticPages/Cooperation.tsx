import * as React from 'react';

type DispatchedP = {};

type ConnectedP = {};

export default class Cooperation extends React.Component<DispatchedP & ConnectedP> {
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
                    <h2>WSPÓŁPRACA</h2>
                    <p>Interesuje Państwa misja, którą realizujemy? Chcą Państwo uczestniczyć w projekcie sprzedaży ofert umieszonych na naszym portalu? Mogą Państwo zamówić u nas indywidualną ofertę przygotowaną dla Państwa firmy. Stworzymy model współpracy, który będzie wynagradzał Państwa pracowników za promowanie naszego portalu. </p>
                    <p>Prosimy o kontakt: biuro@obligain.com</p>
                </div>
            </div>
        );
    }
}
