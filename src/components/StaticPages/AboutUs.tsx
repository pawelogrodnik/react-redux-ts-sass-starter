import * as React from 'react';
import { createSerachQuery } from 'src/Connectors/config';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import { history } from 'src/App';


type DispatchedP = {

}

type ConnectedP = {

}

export default class AboutUs extends React.Component<DispatchedP & ConnectedP> {
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
                    <h3>O Obligain</h3>

                    <p>Obligain to nasza odpowiedź na nurtujące nas pytanie „co zrobić z wolnymi środkami”. WIemy, że koniunktura nie sprzyja samodzielnym inwestycjom, a podjęte decyzje często okazują się chybione. Postanowiliśmy stworzyć portal - miejsce spotkań ludzi z pieniędzmi z tymi, którzy tych pieniędzy potrzebują. Chodzi o okazje inwestycyjne. Nieraz sytuacja życiowa zmusza nas do sprzedania czegoś w okazyjnej cenie. Dzięki Obligain takie oferty są w jednym miejscu. Mają Państwo możliwość sprawdzenia co aktualnie jest okazją inwestycyjną oraz co warto kupić. Jesteśmy sklepem internetowym, w którym swoje towary wystawiają ludzie i firmy, którym zależy na szybkiej realizacji transakcji. Znajdą tu Państwo akademiki, pokoje hotelowe, działki, złoto, tokeny czy pojazdy osobowe. Wszystko to na czym można zarobić.</p>

                    <p>Pomysł na portal wziął się w 2019 roku, kiedy na rynku finansowym wybuchała afera za aferą, a nasi klienci bali się inwestować. W momencie w którym rynek wchodził w zakręt, my dodaliśmy gazu i przenieśliśmy obrót spółki Reliance Polska do Internetu. Stworzyliśmy miejsce spotkań ludzi szukających okazji. Miejsce w którym każdy może znaleźć coś dla siebie.</p>

                    <p>Model rozwoju portalu jest naszą tajemnicą, jednak możemy już zdradzić, że niedługo dodamy na stronie nowe funkcjonalności, pozwalające Państwu optymalizować swój portfel inwestycyjny.</p>

                    <p>Dlaczego jesteśmy najlepsi?</p>
                    <p>Każdy z nas miał taką sytuację w której wahał się czy coś kupić. WIemy jak ważne dla naszych klientów jest bezpieczne i rozsądne lokowanie środków, dlatego nasi przedstawiciele na terenie całego kraju przyjadą do Państwa i wytłumaczą wszystkie zawiłości danej rzeczy. Wskażą notariusza czy przeprowadzą przez cały proces zakupu. Mając kogoś obok łatwiej jest nam podjąć rozsądną decyzję. Bardzo ważne jest, że nasi przedstawiciele reprezentują portal, a nie emitentów czy producentów danych rozwiązań. Nie doradzą czy coś się opłaca czy nie, ale pokażą zapisy w umowach na które warto zwrócić uwagę. Stoimy po stronie inwestorów.</p>



                </div>
            </div>
        );
    }
}