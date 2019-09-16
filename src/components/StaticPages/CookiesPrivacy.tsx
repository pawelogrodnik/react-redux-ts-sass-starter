import * as React from 'react';
import { Link } from 'react-router-dom';
import { createSerachQuery } from 'src/Connectors/config';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import { history } from 'src/App';

type DispatchedP = {};

type ConnectedP = {};

export default class CookiesPrivacy extends React.Component<DispatchedP & ConnectedP> {
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
                    <h2>Polityka dotycząca Cookies i Podobnych Technologii</h2>

                    <h3>PROSIMY O DOKŁADNE ZAPOZNANIE SIĘ Z POLITYKĄ DOTYCZĄCĄ COOKIES I PODOBNYCH TECHNOLOGII PRZED ROZPOCZĘCIEM KORZYSTANIA Z TEJ STRONY LUB APLIKACJI</h3>


                    <p>Czym są cookies?</p>

                    <p>Cookies to małe pliki zawierające liczby lub litery, przechowywane w urządzeniach użytkowników podczas korzystania ze stron internetowych lub aplikacji. Cookies wykorzystywane są do zapewnienia przyjaznego korzystania z naszego Serwisu poprzez zapamiętywanie Państwa preferencji. Na przykład, jeżeli dodają Państwo produkt do koszyka w sklepie internetowym, który Państwo odwiedzają i nie dokończą Państwo procesu zakupu, podczas kolejnej wizyty na tej samej stronie, wcześniej wybrany produkt wciąż będzie znajdował się w Państwa koszyku. W taki sposób cookies są wykorzystywane do zapamiętywania Państwa preferencji. Bez używania plików cookies korzystanie z naszego Serwisu byłoby mniej przyjazne dla użytkownika.
 W celu uzyskania dodatkowych informacji na temat cookies, odwiedź adres: www.wszystkoociasteczkach.pl</p>

                    <p>Dlaczego używamy cookies?</p>

                    <p>Cookies pełnią różne funkcje, ułatwiają poruszanie się po Serwisie i przechowują informacje o Państwa preferencjach, po to by prezentować Państwu odpowiednie treści oraz przyczyniać się do podnoszenia jakości naszych usług.
                    Używamy cookies w celu:
                    Zarządzania Państwa preferencjami i usprawniania funkcjonowania naszego Serwisu. W ramach tych działań możemy gromadzić informacje dotyczące tego kiedy i przez jaki czas odwiedzają Państwo nasze strony, informacje o historii Państwa przeglądarki oraz o preferencjach językowych.
                    Rozwijania naszych środków bezpieczeństwa i wykrywania działań sprzecznych z prawem (tzw. fraudy).
                    Analizowania dostępności naszego Serwisu, sposobów jego wykorzystania oraz wydajności. Wykorzystujemy te informacje do utrzymywania, obsługi i ciągłego  ulepszania świadczonych przez nas usług.
 Dostarczania spersonalizowanych reklam. Cookies pomagają nam określać reklamy, które widzą Państwo i mierzyć ich efektywność.</p>

                    <p>Jakie rodzaje cookies i innych technologii wykorzystujemy?</p>

                    <p>Nasz Serwis korzysta z następujących kategorii cookies i technologii:
                    Cookies stałe (persistent cookies) – ten rodzaj cookies jest przechowywany w przeglądarce Państwa urządzenia i wykorzystywany zawsze, gdy odwiedzają Państwo nasz Serwis. Pomaga nam zapamiętywać Państwa ustawienia i preferencje, po to by uczynić Państwa kolejną wizytę na naszym Serwisie wygodniejszą. Na przykład, dzięki cookies nie będą Państwo zmuszeni do ponownego logowania.
                    Cookies tymczasowe (session cookies) – cookies tymczasowe pozostają w archiwum cookies w Państwa przeglądarce do czasu, gdy nie opuszczą Państwo naszego Serwisu. Informacje, które otrzymujemy dzięki wykorzystywaniu tego rodzaju cookies pomagają nam analizować ruch sieciowy, umożliwiają identyfikację i rozwiązywanie problemów technicznych oraz umożliwiają łatwiejsze poruszanie się po Serwisie.
                    Cookies reklamowe – ten rodzaj cookies pomaga nam dostarczać Państwu odpowiednie reklamy oraz umożliwia badanie efektywności kampanii marketingowych reklamodawców poprzez analizowanie tego, w jaki sposób reagują Państwo na kierowaną do Państwa reklamę. Takie pliki pomagają nam na przykład określić ile razy użytkownik kliknął w reklamę i odwiedził stronę internetową reklamodawcy.
                    Dodatkowo, w naszym Serwisie wykorzystujemy także sygnalizatory www (ang. web beacons), które stanowią małe elementy graficzne (zwane także jako „piksele śledzące” albo „czyste GIF-y”). Są one używane razem z plikami cookies do identyfikacji naszych użytkowników i ich zachowania.
 Nasz Serwis może zawierać odnośniki do innych stron internetowych lub aplikacji, w tym stron lub aplikacji naszych partnerów biznesowych. Prosimy pamiętać, że strony internetowe innych podmiotów również mogą wykorzystywać cookies. Nie mamy wpływu na strony internetowe podmiotów trzecich i nie jesteśmy odpowiedzialni za cookies, które zbierają lub do których mają dostęp. Klikając na odnośnik lub aplikację, prosimy pamiętać, że każda z nich ma własną politykę cookies. Z tego powodu prosimy, abyś przed rozpoczęciem korzystania z innych stron internetowych lub aplikacji zapoznali się Państwo z ich politykami cookies.</p>

                    <p>Czy w naszym Serwisie mamy cookies podmiotów trzecich lub wtyczki (plug-ins)?</p>

                    <p>Podmioty trzecie takie jak sieci reklamowe i dostawcy usług zewnętrznych, zajmujący się np. analizą ruchu w sieci, mogą wykorzystywać cookies, sygnalizatory www, narzędzia software development kits (SDKs) lub inne pokrewne technologie do zbierania informacji na temat Państwa wizyty w Serwisie. Informacje są wykorzystywane do tego, aby dostarczyć Państwu odpowiedniejsze reklamy w naszym Serwisie lub w innych miejscach w Internecie. Nie mamy kontroli nad korzystaniem przez podmioty trzecie z cookies, które są zarządzane zgodnie z politykami prywatności/cookies tych podmiotów trzecich.
 Poniżej przedstawiamy listę podmiotów trzecich, którym umożliwiamy zapisywanie cookies lub innych technologii na Państwa urządzeniu.</p>
                    <p>Dostawcy usług analitycznych: W celu lepszego zrozumienia tego jak działa nasz Serwis, współpracujemy z różnymi dostawcami usług analitycznych. Umożliwiamy dostawcom usług analitycznych takim jak Google i Facebook Analytics wykorzystywanie cookies, SDKs i innych pokrewnych technologii. Więcej informacji na temat tego, jak Google i Facebook wykorzystują Twoje dane, znajdą Państwo tutaj:</p>
                    <p>https://www.google.com/policies/technologies/partner-sites/ https://www.facebook.com/about/privacy/update</p>
                    <p>Partnerzy reklamowi: Nasi partnerzy reklamowi mogą używać cookies reklamowych w celu wyświetlania reklam, które ich zdaniem będą dla Państwa najbardziej interesujące, oraz w celu mierzenia efektywności takich reklam w naszym Serwisie.
                    Wtyczki („plug-ins”) podmiotów trzecich:
 Nasz Serwis wykorzystuje także wtyczki („plug-ins”) podmiotów trzecich w formie przycisków Udostępnij w serwisie Facebook. Za pomocą tego przycisku mogą się Państwo rejestrować do naszego serwisu, pod warunkiem, że są Państwo zalogowani w tych serwisach. Podmioty trzecie mogą być w stanie połączyć Państwa aktywność w naszym Serwisie z kontem, które posiadają Państwo w ich portalach. Dlatego prosimy, aby przed kliknięciem w przycisk Udostępnij uważnie zapoznali się Państwo z politykami prywatności podmiotów trzecich.</p>

                    <p>Co możesz zrobić aby usunąć, wyłączyć lub zablokować cookies?</p>

                    <p>Państwa przeglądarka internetowa zazwyczaj zapewnia Państwu informacje na temat tego w jaki sposób można odrzucić, usunąć lub zablokować cookies. Poniżej znajdą Państwo odnośniki, które przekierują Państwa do odpowiednich informacji związanych z kilkoma, najbardziej popularnymi przeglądarkami:</p>
                    <ul>
                        <li>Google Chrome</li>
                        <li>Internet Explorer</li>
                        <li>Mozilla Firefox</li>
                        <li>Safari</li>
                        <li>Opera</li>
                    </ul>
                    <p>Mogą Państwo zrezygnować z cookies podmiotów trzecich wykorzystywanych w Google Analytics zmieniając ustawienia reklam albo przez narzędzie udostępnione tutaj: https://adssettings.google.com</p>
                    <p>Mogą Państwo zrezygnować z cookies odpowiedzialnych za śledzenie Państwa zainteresowań i umieszczanych przez dostawców treści reklamowych, korzystając z następujących stron zarządzanych przez Digital Advertising Alliance:</p>
                    <ul>
                        <li>http://youradchoices.com</li>
                        <li>http://www.youronlinechoices.com/pl/</li>
                        <li>http://optout.aboutads.info</li>
                    </ul>
                    <p>Dodatkowo, mogą Państwo zmienić ustawienia Państwa urządzenia mobilnego w celu kontroli tego, czy będą Państwo widzieli reklamy dopasowane do Twoich zainteresowań.</p>
                    <p>Prosimy pamiętać, że jeśli zdecydują się Państwo zablokować cookies wykorzystywane w naszym Serwisie, mogą Pańśtwo nie mieć dostępu do wszystkich lub niektórych świadczonych przez nas usług, np. nie będą mogli Państwo zapisać indywidualnych ustawień, takich jak dane potrzebne do zalogowania.</p>

                    <p>Dane kontaktowe</p>

                    <p>W celu uzyskania dodatkowych informacji lub realizowania swoich praw, mogą Państwo skontaktować się z nami przez za pośrednictwem adresu mail: kontakt@obligain.com.</p>
                </div>
            </div>
        );
    }
}
