import * as React from 'react';
import { createSerachQuery } from 'src/Connectors/config';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import { history } from 'src/App';

type DispatchedP = {};

type ConnectedP = {};

export default class Mission extends React.Component<DispatchedP & ConnectedP> {
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
                    <h2>MISJA</h2>
                    <p>
                        Nasza firma powstała, by wyjść naprzeciw odwiecznemu problemowi inwestycyjnemu z jakim mamy do czynienia w naszym kraju. Podjęliśmy się trudnego zadania stworzenia miejsca spotkań inwestorów i oferentów. Jesteśmy istnym targiem, gdzie każdy może kupić to czego szuka, ale gdzie nie każdy może sprzedawać. Na naszym portalu próżno szukać możliwości dodania inwestycji czy zgłoszenia swojego projektu. Zdobywanie wiarygodnych partnerów to nasze zadanie i to my decydujemy kogo
                        zaprosimy do publikacji swojej oferty na portalu.{' '}
                    </p>

                    <p>
                        Naszym celem jest, by Klient czuł się bezpiecznie przeglądając różne opcje. Na naszym portalu znajdują się produkty krótko i długo terminowe, ryzykowne i bezpieczne, angażujące małe i duże środki. Najważniejsze dla nas jest to, by Klient dostał to co najlepsze w jednym miejscu. My tylko pokazujemy możliwości, nie sprzedajemy. Można nas nazwać porównywarką ofert, z tym, że żadna propozycja nie jest u nas na stałe. Dobieramy inwestycje w ten sposób, by asortyment był
                        różnorodny i bogaty. Dzięki temu nasi Klienci znajdują to czego szukali.{' '}
                    </p>

                    <p>Korzystając z naszej platformy mogą Państwo szybko porównać mieszkanie inwestycyjne z pojazdem, oraz zestawić je ze złotem czy akademikiem. Następnie mogą Państwo podjąć decyzje jaki instrument finansowy spełnia Państwa wymagania i zakupić go online, bądź umówić spotkanie z naszym przedstawicielem w celu prezentacji oferty. My zajęliśmy się doborem partnerów, ale wybór pozostawiamy Państwu. Nasze motto to: Stoimy po stronie inwestorów. </p>
                </div>
            </div>
        );
    }
}
