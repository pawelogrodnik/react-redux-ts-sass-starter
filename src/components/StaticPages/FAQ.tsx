import * as React from 'react';
import { createSerachQuery } from 'src/Connectors/config';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import { history } from 'src/App';

type DispatchedP = {};

type ConnectedP = {};

export default class FAQ extends React.Component<DispatchedP & ConnectedP> {
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
                    <h2>FAQ</h2>
                    <h3>Jak najlepiej dobrać produkt?</h3>
                    <p>Produkt najlepiej dobrać korzystając z trzech suwaków na stronie głównej. Obok suwaka „ryzyko” znajduje się legenda opisująca poszczególne klasy ryzyka inwestycji. </p>
                    <h3>W jaki sposób mogę skontaktować się z obligain?</h3>
                    <p>Z naszą firmą można skontaktować się mailowo pod adresem biuro@obligain.com, poprzez formularz kontaktowy na stronie, bądź telefonicznie pod numerem telefonu: 12 347 07 28. Z naszą firmą można skontaktować się mailowo pod adresem biuro@obligain.com, poprzez formularz kontaktowy na stronie, bądź telefonicznie pod numerem telefonu: 12 347 07 28.</p>
                    <h3>W jakich godzinach mogę kontaktować się z obligain?</h3>
                    <p>Kontakt z nami jest możliwy od poniedziałku do piątku od godziny 8:00 do 17:00 W jaki sposób mogę umówić spotkanie z przedstawicielem obligain? Poprzez formularz kontaktowy na stronie danego produktu. Nasz przedstawiciel chętnie przybliży Państwu temat, który Państwa zainteresował, oraz przeprowadzi przez cały proces finalizacji transakcji.</p>
                    <h3>Ile kosztuje spotkanie z przedstawicielem Obligain?</h3>
                    <p>Spotkanie jest i zawsze będzie bezpłatne.</p>
                    <h3>Na czym zarabia Obligain?</h3>
                    <p>Jesteśmy wynagradzani przez Oferentów, a portal jest utrzymywany z opłat abonamentowych.</p>
                    <h3>Kto odpowiada za realizację zamówienia?</h3>
                    <p>Za realizację zamówienia odpowiada Oferent, którego dane podane są zawsze przy odpowiednim towarze.</p>
                    <h3>W jakim mieście mogę spotkać się z przedstawicielem Obligain?</h3>
                    <p>Nasi przedstawiciele są obecni w Warszawie, Krakowie, Katowicach i Poznaniu. Jednak zdalnie obsługujemy również inne regiony. Szczegółową informację uzyskają Państwo poprzez wypełnienie formularza kontaktowego.</p>
                    <h3>Mam pytanie na które nie znalazłem odpowiedzi</h3>
                    <p>Proszę je nam zadać w formularzu kontaktowym, a nasz pracownik odpowie na nie w najbliższym, możliwym terminie.</p>
                </div>
            </div>
        );
    }
}
