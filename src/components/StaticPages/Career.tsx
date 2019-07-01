import * as React from 'react';
import { createSerachQuery } from 'src/Connectors/config';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import { history } from 'src/App';

type DispatchedP = {};

type ConnectedP = {};

export default class Career extends React.Component<DispatchedP & ConnectedP> {
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
                    <h2>KARIERA</h2>
                    <p>Nieustannie poszukujemy specjalistów z różnych dziedzin, odważnych i otwartych na nowe wyzwania. Praca u nas to przygoda i radość tworzenia czegoś nowego. </p>
                    <p>Do dyspozycji naszych współpracowników i pracowników są m.in.:</p>
                    <p>
                        <ul className="ulType">
                            <li>Nowoczesne biuro z wygodnym stanowiskiem pracy.</li>
                            <li>Wszelkie świadczenia socjalne. </li>
                            <li>Do dyspozycji naszych pracowników są piłkarzyki, konsole, hamak, wygodne kanapy oraz bieżnia. </li>
                            <li>Na miejscu znajdują się dwie restauracje, biblioteka, kawiarnia, paczkomat oraz bankomat. </li>
                            <li>Każdy z pracowników otrzymuje prywatne miejsce parkingowe.</li>
                        </ul>
                    </p>
                    <p>Obecnie poszukujemy pracowników na następujące stanowiska:</p>
                    <p>
                        <ul className="ulType">
                            <li>Asystentka Zarządu (praca biurowa)</li>
                            <li>Kierownik sprzedaży Kraków</li>
                        </ul>
                    </p>
                    <p>Osoby chętne, by porozmawiać o wspólnej wizji pracy prosimy o przesłanie CV na adres: biuro@obligain.com w tytule wpisując „Praca”</p>
                </div>
            </div>
        );
    }
}
