import * as React from 'react';
import { Link } from 'react-router-dom';
import { createSerachQuery } from 'src/Connectors/config';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import { history } from 'src/App';

type DispatchedP = {};

type ConnectedP = {};

export default class PrivacyPolicy extends React.Component<DispatchedP & ConnectedP> {
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
                    <h2>POLITYKA PRYTWATNOŚCI</h2>
                    <h3>Polityka prywatności dla użytkowników sklepu obligain.com</h3>
                    <h4>Dbamy o Państwa prywatność</h4>
                    <p>Od 25 maja 2018 roku w całej Unii Europejskiej obowiązuje nowe Rozporządzenie o Ochronie Danych Osobowych (RODO). W tym dokumencie opisujemy usługi, które świadczymy, oraz wyjaśniamy, jak chronimy Państwa prywatność. Piszemy też, jak mogą Państwo korzystać ze swoich praw do danych, które zgromadziliśmy.</p>
                    <h5>Kto zarządza Państwa danymi osobowymi?</h5>
                    <p>
                        Państwa danymi osobowymi zarządza: Reliance Polska sp. z o.o. z siedzibą w Krakowie, adres: 31-548 Kraków, al. Pokoju 1, wpisana do rejestru przedsiębiorców KRS prowadzonego przez Sąd Rejonowy w Krakowie, XI Wydział Gospodarczy KRS pod numerem KRS 0000686682, REGON 367804850, NIP 6751598679, o kapitale zakładowym 5000,00 zł, Podmioty ustala po co i jak przetwarza Państwa dane. Robi to na podstawie art. 26, ust. 1 RODO: Rozporządzenia Parlamentu Europejskiego i Rady (UE)
                        2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE – ogólnego rozporządzenia o ochronie danych.
                    </p>
                    <h5>Gdzie przechowujemy Państwa dane?</h5>
                    <p>Państwa dane osobowe przechowujemy na terenie Europejskiego Obszaru Gospodarczego (EOG). Mogą być one także przesyłane poza ten obszar i tam przetwarzane. Zawsze gdy przesyłamy dane, robimy to zgodnie z obowiązującym prawem. Jeśli przekazujemy dane poza EOG, stosujemy Standardowe klauzule umowne oraz Tarczę prywatności, które zabezpieczają te dane poza EOG.</p>
                    <h5>Kto ma dostęp do Państwa danych?</h5>
                    <p>
                        Do Państwa danych mają dostęp tylko podmioty, które nimi zarządzają. To oznacza, że nigdy nie przekazujemy Państwa danych w celach marketingowych, nie sprzedajemy ich ani nie wykorzystujemy, aby wymieniać się danymi z innymi podmiotami zewnętrznymi. Państwa dane przekazujemy wybranym podmiotom zewnętrznym – gdy realizujemy usługi, które zdefiniowaliśmy, i tylko w zakresie, w jakim możemy powierzyć ich przetwarzanie na podstawie podpisanych przez nas umów. Szczegółowe
                        informacje na temat tych podmiotów zewnętrznych znajdą Państwo niżej.
                    </p>
                    <h5>Jakie są podstawy prawne przetwarzania danych?</h5>
                    <p>
                        Przetwarzamy Państwa dane osobowe na mocy umowy. Jej wzór znajdą Państwo w<Link to="/TermsAndConditions">Regulaminie</Link>
                        naszego serwisu lub regulaminach promocji konkursów, loterii itp., które dla Państwa organizujemy. Państwa dane przetwarzamy tylko w takim zakresie, jaki jest potrzebny, aby właściwie zrealizować usługę, którą Państwu świadczymy. Czasem, na przykład aby dopasować usługę do Państwa potrzeb, możemy poprosić Państwa o podanie dodatkowych danych. Państwa zgoda na to jest, oczywiście, dobrowolna. Każdą udzieloną nam zgodę mogą Państwo odwołać.
                    </p>
                    <h5>Uaktualnienia naszej Polityki Prywatności</h5>
                    <p>Zawsze gdy uaktualnimy Politykę Prywatności, jej najnowszą wersję zamieścimy na naszej stronie internetowej w zakładce Polityka Prywatności.</p>
                    <p>Proces zakupowy:</p>
                    <h5>Dlaczego używamy Państwa danych osobowych?</h5>
                    <p>Używamy Państwa danych osobowych, aby zarządzać zakupami zrobionymi online w sklepie: Obligain.com</p>
                    <p>Potrzebujemy tych danych, aby przetwarzać Państwa zamówienia i zwroty, wysyłać Państwu powiadomienia o statusie dostawy produktów oraz rozwiązywać ewentualne problemy z tym związane. Państwa dane osobowe wykorzystujemy także, gdy zarządzamy Państwa płatnościami oraz przetwarzamy reklamacje i zgłoszenia gwarancyjne, dotyczące zamówionych przez Państwa produktów. Dzięki danym osobowym otrzymujemy informacje niezbędne do sfinalizowania procesu zakupowego. </p>
                    <p>Na ich podstawie możemy:</p>
                    <p>
                        <ul className="ulType">
                            <li>zidentyfikować Państwa i sprawdzić, czy Państwa wiek kwalifikuje Państwa do zakupów online;</li>
                            <li> potwierdzić Państwa adres z podmiotami zewnętrznymi;</li>
                            <li> sprawdzić Państwa historię płatności i wiarygodności kredytowej, aby zaproponować Państwu różne formy płatności.</li>
                        </ul>
                    </p>
                    <h5>Jakie dane osobowe przetwarzamy?</h5>
                    <p>Będziemy przetwarzać następujące dane osobowe:</p>
                    <p>
                        <ul className="ulType">
                            <li>dane kontaktowe: imię i nazwisko, adres, adres e-mail i numer telefonu;</li>
                            <li>informacje na temat płatności i historię płatności;</li>
                            <li>informacje o zakupie ratalnym, jeśli Państwa dotyczą;</li>
                            <li>informacje na temat zamówień.</li>
                        </ul>
                    </p>
                    <h5>Kto ma dostęp do Państwa danych osobowych?</h5>
                    <p>Państwa dane osobowe przekazujemy podmiotom zewnętrznym, tylko aby zarządzać zakupami zrobionymi przez Państwa online. </p>
                    <p>Otrzymują je wyłącznie:</p>
                    <p>
                        <ul className="ulType">
                            <li>firmy, które przetwarzają Państwa adres;</li>
                            <li> agencje komunikacji, które wysyłają potwierdzenia zamówień; </li>
                            <li>firmy, które realizują płatności; banki, które sprawdzają Państwa tożsamość i zdolność kredytową – w przypadku zakupu ratalnego;</li>
                            <li>firmy windykacyjne.</li>
                        </ul>
                    </p>
                    <h5>W jakim celu przetwarzamy Państwa dane osobowe?</h5>
                    <p>Państwa dane przetwarzamy, aby świadczyć Państwu usługi i dostarczać Państwa zamówienia.</p>
                    <h5>Jak długo przechowujemy Państwa dane?</h5>
                    <p>Państwa dane będziemy przechowywać tak długo, jak długo będą Państwo naszym aktywnym Klientem.</p>
                    <h5>Jak działa zautomatyzowany proces decyzyjny?</h5>
                    <p>Jeśli złożą Państwo wniosek o zakup ratalny jako metodę płatności, rozpatrzą go w sposób automatyczny banki. W takiej sytuacji to one są administratorami Państwa danych. Mają prawo odnieść się do ich decyzji, np. ją zakwestionować, i zgłosić to naszemu pracownikowi.</p>
                    <p>Marketing:</p>
                    <h6>Dlaczego używamy Państwa danych osobowych?</h6>
                    <p>Korzystamy z Państwa danych osobowych, aby przekazywać Państwu informacje i oferty marketingowe:</p>
                    <p>
                        <ul className="ulType">
                            <li>e-mailem;</li>
                            <li>SMS-em;</li>
                            <li>telefonicznie;</li>
                            <li>za pomocą komunikatów PUSH;</li>
                            <li>tradycyjną pocztą.</li>
                        </ul>
                    </p>
                    <h6>Jakie dane osobowe przetwarzamy?</h6>
                    <p>Przetwarzamy następujące dane osobowe:</p>
                    <p>
                        <ul className="ulType">
                            <li>dane kontaktowe: adres e-mail, numer telefonu i kod pocztowy;</li>
                            <li>dane demograficzne;</li>
                            <li>informacje o ofertach, z których Państwo korzystają, i produktach, które Państwo obserwują.</li>
                        </ul>
                    </p>
                    <p>Jeśli założą Państwo konto na naszym portalu, będziemy też przetwarzać Państwa dane osobowe przekazane nam w związku z tym kontem, m.in.:</p>
                    <p>
                        <ul className="ulType">
                            <li>imię i nazwisko;</li>
                            <li>adres; dane demograficzne;</li>
                            <li>historię zakupów;</li>
                            <li>sposób nawigacji po stronie i kliknięte elementy.</li>
                        </ul>
                    </p>
                    <h6>Kto ma dostęp do Panstwa danych osobowych?</h6>
                    <p>
                        Państwa dane osobowe przekazujemy podmiotom zewnętrznym, tylko aby udostępniać Państu informacje i oferty marketingowe. Dzięki tym danym agencje marketingowe – z którymi podpisaliśmy odrębne umowy powierzenia przetwarzania danych – mogą realizować nasze cele marketingowe w zakresie, który im wyznaczyliśmy. Nigdy nie przekazujemy Państwa danych osobowych w celach marketingowych, nie sprzedajemy ich ani nie wykorzystujemy, aby wymieniać się danymi z innymi podmiotami
                        zewnętrznymi.
                    </p>
                    <h6>Na jakiej podstawie prawnej przetwarzamy Państwa dane osobowe?</h6>
                    <p>Państwa dane osobowe przetwarzamy na podstawie Państwa zgody na otrzymywanie informacji marketingowych. Tego typu informacje wysyłamy do Państwa, gdy mamy w tym uzasadniony interes.</p>

                    <h5>Prawo do wycofania zgody</h5>
                    <p>Mają Państwo prawo w każdej chwili wycofać swoją zgodę na przetwarzanie danych osobowych oraz otrzymywanie informacji marketingowych. Gdy to Państwo zrobią, niezwłocznie przestaniemy przetwarzać Państwa dane w celach marketingowych i wysyłać Państwu jakiekolwiek oferty marketingowe.</p>
                    <p>Aby zrezygnować z otrzymywania informacji marketingowych, wystarczy, że:</p>
                    <p>
                        <ul className="ulType">
                            <li>postąpią Państwo zgodnie z instrukcją zawartą w każdej wiadomości marketingowej, którą Państwu przekazujemy;</li>
                            <li>edytują Państwo ustawienia swojego konta.</li>
                        </ul>
                    </p>
                    <h5>Jak długo przechowujemy Państwa dane?</h5>
                    <p>Będziemy przechowywać Państwa dane do celów marketingu bezpośredniego do momentu, w którym wycofają Państwo swoją zgodę. Będziemy Państwu wysyłać informacje handlowe e-mailem, dopóki uznamy Państwa za nieaktywnego Klienta. Zrobimy to, jeśli w ciągu trzech lat nie otworzą Państwo żadnego e-maila od nas. Wtedy usuniemy Państwa dane osobowe z naszej bazy.</p>
                    <p>Cookies</p>
                    <h6>Czym są cookies?</h6>
                    <p>Cookies to dane informatyczne, zwłaszcza niewielkie pliki tekstowe, zapisywane i przechowywane na urządzeniach, za pomocą których korzystają Państwo z naszych serwisów. Cookies administratora to nasze cookies, które wiążą się ze świadczeniem przez nas usług drogą elektroniczną za pośrednictwem naszych serwisów. Cookies zewnętrzne to cookies naszych partnerów, które wiążą się z korzystaniem przez nich ze strony internetowej naszego serwisu.</p>
                    <h6>Jak używamy cookies?</h6>
                    <p>Wykorzystujemy dwa typy cookies:</p>
                    <p>
                        <ul className="ulType">
                            <li>cookies sesyjne – które są przechowywane na Państwa urządzeniu i pozostają tam do momentu zakończenia sesji danej przeglądarki. Zapisane informacje są wówczas trwale usuwane z pamięci urządzenia. Mechanizm cookies sesyjnych nie pozwala na pobieranie jakichkolwiek danych osobowych ani żadnych informacji poufnych z Państwa urządzenia;</li>
                            <li>
                                cookies trwałe – które są przechowywane na Państwa urządzeniu i pozostają tam, dopóki je Państwo skasują. Zakończenie sesji danej przeglądarki lub wyłączenie urządzenia nie powoduje ich usunięcia z tego urządzenia. Mechanizm cookies trwałych nie pozwala na pobieranie jakichkolwiek danych osobowych ani żadnych informacji poufnych z Państwa urządzenia.
                                <p>Trwałych cookies używamy, aby przechowywać:</p>
                                <ul className="ulType">
                                    <li>informacje o stronie startowej, którą Państwo preferują,</li>
                                    <li>Państwa dane – jeśli przed zalogowaniem kliknęli Państwo opcję „Pamiętaj mnie”,</li>
                                    <li>informacje o Państwa ulubionych produktach.</li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                    <p>
                        Używamy zarówno naszych cookies, jak i cookies podmiotów zewnętrznych, aby gromadzić statystyki oraz dane Państwa i innych użytkowników w formie zagregowanej oraz indywidualnej. Korzystamy przy tym z narzędzi analitycznych, dzięki którym możemy optymalizować naszą stronę i przedstawiać ofertę interesującą dla Państwa. Używamy także zewnętrznych cookies, które monitorują to, jak korzystają Państwo z innych witryn. Dzięki temu możemy udostępniać nasze materiały marketingowe
                        na innych stronach i w różnych kanałach komunikacji.
                    </p>
                    <h5>Dlaczego wykorzystujemy cookies?</h5>
                    <p>Poniżej znajdą Państwo informacje o tym, co robimy przy użyciu cookies, aby ułatwić Państwu korzystanie z naszego serwisu.</p>
                    <h6>1. Konfigurujemy serwis.</h6>
                    <p>Cookies wykorzystujemy, aby:</p>
                    <p>
                        <ul className="ulType">
                            <li>dostosować zawartość stron internetowych serwisu do Państwa preferencji oraz optymalizować korzystanie z tych stron;</li>
                            <li>rozpoznawać Państwa urządzenie oraz je lokalizować i wyświetlać stronę internetową dostosowaną do Państwa potrzeb;</li>
                            <li>zapamiętywać wybrane przez Państwa ustawienia i personalizować interfejs użytkownika, np. w zakresie wybranego języka lub regionu, z którego Państwo pochodzą;</li>
                            <li>zapamiętywać, jakie strony Państwo odwiedzają w serwisie, i rekomendować Państwu treści; dostosowywać rozmiar czcionki, wygląd strony internetowej itp. do Pańśtwa preferencji.</li>
                        </ul>
                    </p>
                    <h6>2. Uwierzytelniamy Państwa w serwisie i zapewniamy Państwu sesję w serwisie.</h6>
                    <p>Cookies wykorzystujemy, aby:</p>
                    <p>
                        <ul className="ulType">
                            <li>utrzymać Państwa sesję po zalogowaniu do serwisu – dzięki temu nie muszą Państwo na każdej podstronie serwisu wpisywać loginu i hasła;</li>
                            <li>poprawnie konfigurować wybrane funkcje serwisu i na przykład móc sprawdzić autentyczność sesji przeglądarki;</li>
                            <li>zwiększać wydajność naszych usług.</li>
                        </ul>
                    </p>
                    <h6>3. Realizujemy procesy niezbędne dla pełnej funkcjonalności stron internetowych.</h6>
                    <p>Cookies wykorzystujemy, aby:</p>
                    <p>
                        <ul className="ulType">
                            <li>dostosować zawartość stron internetowych serwisu do Państwa preferencji oraz ułatwić Państwu korzystanie z tych stron – przede wszystkim rozpoznać podstawowe parametry Państwa urządzenia i wyświetlić stronę internetową w sposób odpowiedni dla Państwa;</li>
                            <li>poprawnie obsługiwać program partnerski – przede wszystkim móc weryfikować, skąd Państwo i inni użytkownicy stron internetowych naszego serwisu jesteście na nie przekierowywani.</li>
                        </ul>
                    </p>
                    <h6>4. Zapamiętujemy Państwa lokalizację.</h6>
                    <p>Cookies wykorzystujemy, aby poprawnie konfigurować wybrane funkcje serwisu – przede wszystkim móc dostarczać Państwu informacje z uwzględnieniem Państwa lokalizacji.</p>
                    <h6>5. Analizujemy, badamy i kontrolujemy oglądalność oraz tworzymy anonimowe statystyki odwiedzin na naszych stronach internetowych.</h6>
                    <p>Cookies wykorzystujemy, aby ulepszać ich strukturę i zawartość. 6. Świadczymy usługi reklamowe i dostosowujemy reklamy produktów i usług prezentowane za pośrednictwem serwisu. Cookies wykorzystujemy, aby wyświetlać reklamy, które mogą Państwa zainteresować.</p>
                    <h6>7. Zapewniamy bezpieczeństwo i niezawodność serwisu.</h6>
                    <p>Cookies wykorzystujemy, aby chronić Państwa podczas Państwa wizyt w serwisie i ułatwiać Państwu poruszanie się po nim. </p>
                    <p>Wykorzystujemy też cookies zewnętrzne, aby:</p>
                    <p>
                        <ul className="ulType">
                            <li>zbierać ogólne i anonimowe dane statyczne za pośrednictwem narzędzi analitycznych, np. Google Analytics, Gemius Traffic, Yandex, HotJar;</li>
                            <li>prezentować reklamy dostosowane do Państwa preferencji z wykorzystaniem narzędzia internetowej reklamy; </li>
                            <li>zastosować funkcje interaktywne w celu popularyzacji serwisu za pomocą serwisu społecznościowego: facebook.com</li>
                        </ul>
                    </p>
                    <h5>Co mogą Państwo zrobić, gdy nie chcą Państwo cookies?</h5>
                    <p>
                        W każdym momencie mogą Państwo samodzielnie zmienić ustawienia dotyczące cookies i określić warunki, na jakich cookies są przechowywane na Państwa urządzeniu i uzyskują do niego dostęp. Ustawienia dotyczące cookies mogą Państwo zmienić za pomocą ustawień przeglądarki internetowej lub za pomocą konfiguracji usługi. Ustawienia te mogą przede wszystkim blokować automatyczną obsługę cookies w ustawieniach przeglądarki internetowej lub każdorazowo informować, że cookies
                        zostały zamieszczone na Państwa urządzeniu. Szczegółowe informacje o możliwości i sposobach obsługi cookies znajdą Państwo w ustawieniach przeglądarki internetowej.
                    </p>
                    <p>
                        W każdej chwili mogą Państwo usunąć cookies, korzystając z dostępnych funkcji w przeglądarce internetowej, której Państwo używają. Ograniczenie stosowania cookies może jednak wpłynąć na niektóre funkcjonalności serwisu. Dane – które przekazujemy firmom zewnętrznym – są używane wyłącznie do świadczenia usług opisanych w tym dokumencie. Za pomocą narzędzi analitycznych gromadzimy dane statystyczne, aby optymalizować naszą witrynę i przedstawiać w niej informacje, które mogą
                        Państwa zainteresować.
                    </p>
                </div>
            </div>
        );
    }
}
