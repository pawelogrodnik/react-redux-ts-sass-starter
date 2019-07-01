import * as React from 'react';

type DispatchedP = {};

type ConnectedP = {};

export default class ExecusionTime extends React.Component<DispatchedP & ConnectedP> {
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
                    <h2>CZAS REALIZACJI ZAMÓWIENIA</h2>
                    <h3>Zapytania złożone od poniedziałku do piątku</h3>
                    <p>Zamówienia złożone i skompletowane od poniedziałku do piątku do godz. 17 - przekazywane są do kierowników regionu w ciągu 24 godzin roboczych. </p>
                    <h3>Zapytania złożone w pozostałe dni</h3>
                    <p>Zapytania złożone w soboty, dni wolne od pracy i święta przekazywane są standardowo w pierwszym dniu roboczym następującym po dniu, w którym zamówienie zostało przesłane. </p>
                    <p>W wyjątkowych sytuacjach powyższe terminy mogą ulec wydłużeniu, o czym Klient będzie informowany przez obsługę portalu najszybciej jak to możliwe.</p>
                    <h3>W jakim czasie kontaktujemy się z Klientem?</h3>
                    <h3>Poznań</h3>
                    <p>Zamówienia z formularze przekazywane są niezwłocznie do kierownika regionu Poznańskiego, który dokonuje przydziału poszczególnym przedstawicielom. Czas kontaktu nie powinien być dłuższy niż 48h.</p>
                    <h3>Warszawa</h3>
                    <p>Zamówienia z formularze przekazywane są niezwłocznie do kierownika regionu Poznańskiego, który dokonuje przydziału poszczególnym przedstawicielom. Czas kontaktu nie powinien być dłuższy niż 48h.</p>
                    <h3>Śląsk</h3>
                    <p>Zamówienia z formularze przekazywane są niezwłocznie do kierownika regionu Poznańskiego, który dokonuje przydziału poszczególnym przedstawicielom. Czas kontaktu nie powinien być dłuższy niż 48h.</p>
                    <h3>Kraków</h3>
                    <p>Zamówienia z formularze przekazywane są niezwłocznie do kierownika regionu Poznańskiego, który dokonuje przydziału poszczególnym przedstawicielom. Czas kontaktu nie powinien być dłuższy niż 48h.</p>
                    <h3>Realizacja zamówienia w siedzibie spółki:</h3>
                    <p>Zamówienia złożone i skompletowane od poniedziałku do piątku do godz. 17:00 standardowo można zrealizować w naszej siedzibie przy al. Pokoju 1 w Krakowie, bądź w naszym biurze przy ul. Podole 60 w Krakowie.</p>
                    <h3>Realizacja zamówienia u notariusza:</h3>
                    <p>Zamówienia wymagające ingerencji notarialnej realizowane są standardowo w Kancelarii Knuplerz&Knuplerz w Krakowie. Notariuszem realizującym zamówienia ze strony spółki jest Grzegorz Mardyła.</p>
                </div>
            </div>
        );
    }
}
