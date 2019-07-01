import * as React from 'react';
import ContactBanner from './../ContactBanner';

type DispatchedP = {};

type ConnectedP = {};

export default class Contact extends React.Component<DispatchedP & ConnectedP> {
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
                    <h2>KONTAKT</h2>

                    <p>Portal Obligain, działający pod adresem internetowym obligain.com jest własnością Reliance Polska sp. z o.o. z siedzibą w Krakowie, adres: 31-548 Kraków, al. Pokoju 1, spółka wpisana do rejestru przedsiębiorców KRS prowadzonego przez Sąd Rejonowy w Krakowie, XI Wydział Gospodarczy KRS pod numerem KRS 0000686682, REGON 367804850, NIP 6751598679, o kapitale zakładowym 5000,00 zł.</p>

                    <p>
                        Adres Siedziby:
                        <br />
                        Reliance Polska sp. z o.o.
                        <br />
                        Al. Pokoju 1<br />
                        31-548 Kraków
                    </p>

                    <p>
                        Adres Biura:
                        <br />
                        Reliance Polska sp. z o.o.
                        <br />
                        ul. Podole 60
                        <br />
                        30-394 Kraków
                    </p>

                    <p>
                        Tel: 12 347 07 28
                        <br />
                        Mail: biuro@obligain.com
                    </p>
                </div>
                <ContactBanner />
            </div>
        );
    }
}
