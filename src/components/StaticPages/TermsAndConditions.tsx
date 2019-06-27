import * as React from 'react';
import { createSerachQuery } from 'src/Connectors/config';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import { history } from 'src/App';

type DispatchedP = {};

type ConnectedP = {};

export default class TermsAndConditions extends React.Component<DispatchedP & ConnectedP> {
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
                    <h2>REGULAMIN OBLIGAIN</h2>
                    <h3>I WSTĘP</h3>
                    <p>
                        1. Reliance Polska sp. z o.o. z siedzibą w Krakowie, adres: 31-548 Kraków, al. Pokoju 1, wpisana do rejestru przedsiębiorców KRS prowadzonego przez Sąd Rejonowy w Krakowie, XI Wydział Gospodarczy KRS pod numerem KRS 0000686682, REGON 367804850, NIP 6751598679, o kapitale zakładowym 5000,00 zł, umożliwia kupowanie towarów przy pomocy sieci elektronicznej (Internet) - pod adresem internetowym: www.obligain.com („SKLEP”). Administratorem danych osobowych klientów Sklepu jest
                        Reliance Polska sp. z o.o. z siedzibą w Krakowie, adres: 31-548 Kraków, al. Pokoju 1.
                    </p>
                    <p>2. Rolą Sklepu jest przedstawienie Klientowi Towarów prezentowanych. Przez Oferentów rozumie się firmy oferujące swoje Towary w Sklepie.</p>
                    <p>3. Sklep nie ponosi odpowiedzialności za treści przedstawiane przez Oferentów, a w szczególności Sklep nie ponosi odpowiedzialności za przebieg transakcji i zachowanie Oferenta. </p>
                    <p>4. Sklep udostępnia swoją powierzchnię w sieci Internet Oferentom w celu zaprezentowania swojej oferty.</p> <p>5. Sklep prezentując ofertę Oferenta polega tylko i wyłącznie na danych przekazanych przez Oferenta. Sklep nie podejmuje się oceny ryzyka oferty Oferenta.</p>
                    <p>6. Sklep zastrzega sobie możliwość oferowania własnych Towarów. </p>
                    <p>7. Niniejszy Regulamin skierowany jest do wszystkich użytkowników Sklepu oraz określa zasady dokonywania rejestracji i korzystania z konta Sklepu, zasady dokonywania elektronicznej rezerwacji towarów dostępnych w Sklepie („TOWARY” lub „TOWAR”), składania zamówień w Sklepie oraz zasady zawierania umów sprzedaży Towarów.</p>
                    <p>8. Dostęp do Regulaminu każdy użytkownik Sklepu może uzyskać w dowolnym momencie, poprzez „kliknięcie” linku „Regulamin Obligain” umieszczonego na stronie sklepu.</p>
                    <p>9. Informacje o Towarach w Sklepie m.in. opisy, ceny stanowią zaproszenie do zawarcia umowy sprzedaży w rozumieniu art. 71 k.c., zgodnie z warunkami Regulaminu.</p>
                    <p>10. Towary w Sklepie są szczegółowo oznaczone. Na stronie internetowej znajdują się informacje w szczególności o właściwościach Towaru, jego cenie, materiale, z którego jest wykonany itp.</p>
                    <p>11. Zdjęcia i prezentacje oferowanych produktów służą prezentacji konkretnie wskazanych na nich modeli Towarów.</p>
                    <h3>II ZASADY KORZYSTANIA ZE SKLEPU I ZAWIERANIA UMOWY SPRZEDAŻY TOWARÓW</h3>
                    <p>1. Reliance Polska sp. z o.o. umożliwia zawieranie umów sprzedaży Towarów za pośrednictwem sieci Internet oraz świadczy inne usługi przewidziane w niniejszym Regulaminie.</p>
                    <p>2. Umowa sprzedaży towarów zawierana jest między użytkownikiem Sklepu („KLIENT”), a sprzedawcą danego towaru, którego szczegółowe dane udostępnione są kupującemu.</p>
                    <p>3. Warunkiem rozpoczęcia korzystania ze Sklepu jest zapoznanie się z niniejszym Regulaminem i jego akceptacja.</p>
                    <p>
                        {' '}
                        4. Informacje podane przez Klienta w toku składania zamówienia powinny być zgodne z prawdą, aktualne oraz dokładne. Reliance Polska sp. z o.o. zastrzega sobie możliwość odmowy realizacji zamówienia, w przypadku, gdy podane dane są na tyle niedokładne, że uniemożliwiają realizacje zamówienia, w szczególności uniemożliwiają prawidłowe doręczenie przesyłki. Przed odmową realizacji Reliance Polska sp. z o.o. podejmie próbę kontaktu z Klientem w celu ustalenia danych w
                        zakresie umożliwiającym zrealizowanie zamówienia.
                    </p>
                    <p>5. Sklep podejmuje wszelkie możliwe i nakazane odpowiednimi przepisami prawa środki techniczne i organizacyjne służące ochronie danych osobowych Klientów, w szczególności zapobiegające pozyskaniu i modyfikacji przez osoby nieupoważnione danych podawanych podczas rejestracji.</p>
                    <p>6. Klient, który skorzystał ze Sklepu, zobowiązany jest do: a) Niedostarczania i nieprzekazywania treści zabronionychprzez przepisy prawa; b) Korzystania ze Sklepu w sposób nie zakłócający jego funkcjonowania; c) Nierozsyłania i nieumieszczania w ramach Sklepu niezamówionej informacji handlowej; d) Korzystania ze Sklepu w sposób nieuciążliwy dla innych klientów oraz dla Administratora Sklepu; e) Korzystania z treści zamieszczonych na stronach sklepu do użytku własnego.</p>
                    <h3>III ZAWARCIE UMOWY SPRZEDAŻY</h3>
                    <p>1. Sklep umożliwia składanie zamówień na Towary w następujący sposób: a) na stronie Sklepu (on-line), korzystając z procedury składania zamówienia, b) poprzez formularz kontaktowy na stronie Sklepu, służący do umówienia spotkania z przedstawicielem Sklepu.</p>
                    <p>2. Sklep przyjmuje zamówienia składane on-line przez całą dobę, we wszystkie dni tygodnia. Zamówienia składane przez formularz kontaktowy przyjmowane są w dni robocze od poniedziałku do piątku w godzinach 8.00 – 17.00. Zamówienia złożone w soboty, dni wolne od pracy i święta będą realizowane w pierwszym dniu roboczym następującym po dniu, w którym zamówienie zostało złożone.</p>
                    <p>3. Klient może złożyć zamówienie bez konieczności trwałego rejestrowania swoich danych w bazie Sklepu (tzw. zakupy bez rejestracji).</p>
                    <p>4. Warunkiem złożenia zamówienia jest wypełnienie w formularzu wszystkich wymaganych danych koniecznych do wysyłki lub systemowego wygenerowania faktury VAT lub paragonu fiskalnego.</p>
                    <p>5. W celu złożenia zamówienia należy dokonać wyboru Towarów w Sklepie, a zamówienie zostanie przekazane podmiotowi realizującemu daną inwestycję.</p>
                    <p>6. Zapłata za zamówiony produkt odbywa się w momencie jego odbioru przez Klienta od Oferenta, zamieszczającego swoją ofertę w Sklepie. Dopuszczane jest przyjęcie zapłaty w innym momencie, w szczególności podczas umowy przedwstępnej zakupu lokalu bądź umowy rezerwacyjnej.</p>
                    <p>7. Zatwierdzenie przez Klienta zamówienia zgodnie z pkt 6 powyżej stanowi ofertę Klienta złożoną Oferentowi. co do zawarcia umowy sprzedaży, zgodnie z treścią zamówienia, oraz niniejszym Regulaminem.</p>
                    <p>8. Umowa sprzedaży zawierana jest w języku polskim, o treści zgodnej z niniejszym Regulaminem i złożonym przez Klienta zamówieniem.</p>
                    <p>9. Bez uszczerbku dla uprawnienia Klienta do odstąpienia od umowy zgodnie z odpowiednimi przepisami prawa, Klient może zrezygnować z zamówienia przed otrzymaniem od Sklepu potwierdzenia przyjęcia oferty zakupu. W niniejszej sprawie Klient powinien niezwłocznie skontaktować się ze sklepem, w tym możliwy jest kontakt drogą telefoniczną, z potwierdzeniem mailowym.</p>
                    <p>10. Sklep zastrzega sobie prawo odmowy realizacji zamówienia w ramach umowy sprzedaży, w przypadku gdy: (i) dane teleadresowe Kupującego są na tyle nieprecyzyjne, że uniemożliwiają dostawę towaru, (ii) transakcja nie została zautoryzowana w systemie płatności elektronicznych lub (iii) płatność za zamówienie nie została uiszczona w czasie do 2 dni roboczych od złożenia zamówienia.</p>
                    <h3>IV DOSTAWA I ODBIÓR TOWARÓW</h3>
                    <p>Klient winien ustalić z oferentem zarówno sposób odbioru towaru jak i ewentualnej dostawy. Sklep nie bierze odpowiedzialności za ustalenia pomiędzy Klientem a Oferentem.</p>
                    <h3>V CENY I METODY PŁATNOŚCI</h3>
                    <p>1. Informacja o cenie zakupu towaru podawana na stronie sklepu ma charakter wiążący.</p>
                    <p>2. Ceny produktów w sklepie podawane są w złotych polskich i zawierają wszystkie jej składniki, w tym VAT, cła i podatki.</p>
                    <p>3. Klient płaci cenę za zamówione Towary przelewem bankowym, za pośrednictwem płatności elektronicznej realizowanej w systemie płatniczym.</p>
                    <p>
                        4. Reliance Polska sp. z o.o. jak i Oferenci zastrzegają sobie prawo zmiany cen towarów znajdujących się w Sklepie, wprowadzania nowych towarów do sprzedaży, przeprowadzania i odwoływania akcji promocyjnych na stronach sklepu, bądź wprowadzania w nich zmian zgodnie z normami kodeksu cywilnego oraz innych ustaw, przy czym zmiany takie nie naruszają praw osób, które zawarły umowy sprzedaży towarów oferowanych przez Sklep przed dokonaniem ww. zmian lub praw osób uprawnionych
                        do korzystania z danej promocji, zgodnie z jej zasadami i w okresie jej trwania.
                    </p>
                    <h3>VI. REKLAMACJE TOWARÓW</h3>
                    <p>1.Oferent odpowiada za wady fizyczne lub prawne Towarów na zasadzie art. 556 i następnych Kodeksu cywilnego.</p>
                    <p>2. Reliance Polska sp. z o.o. podejmuje działania w celu zapewnienia w pełni poprawnego funkcjonowania Sklepu, w takim zakresie, jaki wynika z aktualnej wiedzy technicznej i zobowiązuje się usunąć w rozsądnym terminie wszelkie nieprawidłowości zgłoszone przez Klientów.</p>
                    <p>3. Każda rzecz kupiona w sklepie może być reklamowana z zachowaniem terminów i warunków reklamacji określonych odpowiednimi przepisami prawa, jeśli posiada wady, stanowiące o jej niezgodności z zawartą umową sprzedaży.</p>
                    <p>4. Reklamację można złożyć drogą pocztową poprzez odesłanie towaru wraz z pisemnym opisem wady lub formularzem reklamacyjnym pobranym ze strony Sklepu i dowodem zakupu w Sklepie, listem poleconym lub inną formą przesyłki, na adres Oferenta. Klient otrzyma informację o sposobie rozpatrzenia reklamacji w terminie 14 dni liczonych od dnia następnego od otrzymania przez Oferenta przesyłki zawierającej reklamowany towar.</p>
                    <p>5. Jeżeli Towar ma wady, Klientowi przysługują następujące roszczenia na podstawie art. 556 oraz art. 561 Kodeksu cywilnego: a) złożenie świadczenia o odstąpieniu od Umowy lub obniżeniu ceny Towaru, chyba że Sprzedawca niezwłocznie i bez nadmiernych niedogodności dla Kupującego wymieni Towar na wolny od wad albo wadę usunie, albo b) żądanie wymiany Towaru na wolny od wad albo usunięcia wady.</p>
                    <p>6. W przypadku nie uwzględnienia reklamacji, towar zostanie odesłany wraz z opinią co do niezasadności reklamacji.</p>
                    <p>7. W razie stwierdzenia przez Klienta uszkodzenia towaru podczas transportu, zaleca się aby Klient sporządził w obecności kuriera protokół szkody.</p>
                    <p>
                        8. Pozasądowe sposoby rozstrzygania sporów: a) Informujemy, że Klientowi będącemu konsumentem przysługuje możliwość skorzystania z następujących, pozasądowych sposobów rozpatrywania reklamacji oraz dochodzenia roszczeń: (I) możliwość zwrócenia się z wnioskiem o przeprowadzenie postępowania w sprawie pozasądowego rozwiązywania sporów konsumenckich na podstawie Ustawy z dnia 23 września 2016 r. o pozasądowym rozwiązywaniu sporów konsumenckich (Dz. U. z 2016 r., poz. 1823),
                        tj. np. do Wojewódzkiego Inspektora Inspekcji Handlowej w Krakowie (np. http://www.krakow.wiih.gov.pl/); (II) wystąpienie z wnioskiem o rozpoznanie sprawy przez Stały Polubowny Sąd Konsumencki działający przy odpowiednim Wojewódzkim Inspektoracie Inspekcji Handlowej (np. http://bip.malopolska.pl/wiihkrakow/Article/id,112169.html); (III) zwrócenie się do Miejskiego Rzecznika Praw Konsumentów o pomoc w zakresie ochrony interesów i praw konsumentów (np.
                        http://konsument.um.warszawa.pl/). Bezpłatną pomoc konsumentom w zakresie ochrony ich praw i interesów świadczą także organizacje społeczne, takie jak m.in. Federacja Konsumentów (http://www.federacja-konsumentow.org.pl/). b) Jednocześnie informujemy, że powyższe postępowanie ma charakter dobrowolny i obie strony muszą wyrazić na nie zgodę. c) Jeżeli dokonujesz zakupu Towarów jako konsument, jesteś także uprawniony do skorzystania z pozasądowego sposobu rozpatrywania
                        sporów i dochodzenia roszczeń w postaci platformy interaktywnej ODR (Online Dispute Resolution), zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) Nr 524/2013 z dnia 21 maja 2013 r. w sprawie internetowego systemu rozstrzygania sporów konsumenckich oraz zmiany Rozporządzenia (WE) nr 2006/2004 i dyrektywy 2009/WE, zwanym dalej „ROZPORZĄDZENIEM W SPRAWIE ODR”. d) Platforma ODR jest interaktywnym narzędziem udostępnionym konsumentom z Unii Europejskiej, za
                        pomocą którego można złożyć skargę. Poniżej zamieszczamy lik do platformy ODR: ec.europa.eu/consumers/odr. Stosownie do Art. 1 Rozporządzenia w sprawie ODR celem powstania platformy ODR jest udostępnienie konsumentom narzędzia ułatwiającego niezależne, bezstronne, przejrzyste, skuteczne, szybkie i sprawiedliwe pozasądowe rozstrzyganie przez internet sporów między konsumentami i przedsiębiorcami na terytorium Unii Europejskiej. e) Adres e-mail Sklepu Internetowego do
                        kontaktu z Klientami jest następujący: biuro@obligain.com.
                    </p>
                    <h3>VII ZWROTY TOWARÓW – ODSTĄPIENIE OD UMOWY SPRZEDAŻY</h3>
                    <p>1. Klient będący konsumentem w rozumieniu odpowiednich przepisów prawa ma prawo odstąpić od umowy sprzedaży bez podania przyczyny, na zasadach opisanych poniżej.</p>
                    <p>2. Termin do odstąpienia od umowy sprzedaży Towarów wygasa po upływie 30 dni od dnia, w którym Klient wszedł w posiadanie Towarów lub w którym osoba trzecia inna niż przewoźnik i wskazana przez Klienta weszła w posiadanie Towarów.</p>
                    <p>3. Aby skorzystać z prawa odstąpienia od umowy, Klient powinien poinformować Sklep o swojej decyzji o odstąpieniu od umowy w drodze jednoznacznego oświadczenia (na przykład pismo wysłane pocztą, faksem lub pocztą elektroniczną), przesłanego na adres: Reliance Polska 31-548 Kraków, al. Pokoju 1.</p>
                    <p>4. Do zachowania terminu do odstąpienia od umowy, wystarczy, aby Klient wysłał informację dotyczącą wykonania przysługującego mu prawa odstąpienia od umowy przed upływem terminu do odstąpienia od umowy.</p>
                    <p>5. Klient odsyła Towary, co do których następuje odstąpienie od umowy na następujący adres pocztowy: Reliance Polska 31-548 Kraków, al. Pokoju 1 niezwłocznie, a w każdym razie nie później niż 14 dni od dnia, w którym poinformował Sklep o odstąpieniu od niniejszej umowy. Termin jest zachowany, jeżeli Klient odeśle rzecz przed upływem terminu 14 dni.</p>
                    <p>6. Klient ponosi bezpośrednie koszty zwrotu rzeczy.</p>
                    <p>7. W przypadku odstąpienia od umowy Sklep zwraca Klientom wszystkie otrzymane od płatności, w tym koszty dostarczenia rzeczy (z wyjątkiem dodatkowych kosztów wynikających z wybranego przez Klienta sposobu dostarczenia innego niż najtańszy zwykły sposób dostarczenia oferowany przez Sklep), niezwłocznie, a w każdym przypadku nie później niż 14 dni od dnia, w którym Sklep został poinformowany o decyzji Klienta o wykonaniu prawa odstąpienia od umowy.</p>
                    <p>8. Zwrot płatności Klienta zostanie dokonamy przy użyciu takich samych sposobów płatności, jakie zostały przez Klienta użyte w pierwotnej transakcji, chyba że Klient wyraźnie zgodził się na inne rozwiązanie; w każdym przypadku Klienci nie poniosą opłat w związku z tym zwrotem. Sklep może wstrzymać się ze zwrotem płatności do czasu otrzymania rzeczy lub do czasu dostarczenia do Sklepu dowodu jej odesłania, w zależności od tego, które zdarzenie nastąpi wcześniej.</p>
                    <p>9. Klienci odpowiadają tylko za zmniejszenie wartości zwracanych Towarów wynikające z korzystania z nich w sposób inny niż było to konieczne do stwierdzenia charakteru, cech i funkcjonowania rzeczy.</p>
                    <h3>VIII INFORMACJE DOTYCZĄCE USŁUG ŚWIADCZONYCH DROGĄ ELEKTRONICZNA</h3>
                    <p>1. Sklep świadczy na rzecz Klientów następujące usługi drogą elektroniczną: a) Umożliwianie zawieranie on-line umów sprzedaży towarów w Sklepie zgodnie z niniejszym Regulaminem, b) Umożliwienie zakładania kont Klientów w Sklepie, c) Przesyłanie zamówionej informacji handlowej dotyczącej towarów.</p>
                    <p>2. Klient uprawniony jest do odstąpienia od umów sprzedaży towarów zgodnie z odpowiednimi przepisami prawa i na zasadach określonych w niniejszym Regulaminie. Ponadto Klient uprawniony jest w każdym momencie do żądania zaprzestania świadczenia przez Sklep usług wskazanych w pkt 1 ppkt b) i c) powyżej.</p>
                    <p>3. Warunki techniczne świadczenia przez Sklep usług drogą elektroniczną są następujące: a) Dostęp do sieci Internet, b) Korzystanie z przeglądarki internetowej umożliwiającej edytowanie dokumentów hipertekstowych (typu Safari, Opera, FireFox lub podobne), c) Posiadanie konta poczty elektronicznej.</p>
                    <p>
                        4. Reklamacje dotyczące usług świadczonych przez Sklep drogą elektroniczną mogą być składane poprzez przesłanie reklamacji na adres e-mail Biura Obsługi Klienta Sklepu (biuro@obligain.com) lub telefonicznie na (nr tel: 12 347 07 28). Reklamacja Klienta powinna zawierać oznaczenie usługobiorcy oraz krótki opis reklamacyjny. Sklep dołoży wszelkich starań, aby zgłoszone reklamacje były rozpatrzone w najszybszym możliwym terminie, jednak nie później niż 14 dni od dnia
                        otrzymania przez Sklep Reklamacji. O sposobie rozpatrzenia reklamacji Klient zostanie powiadomiony wedle wyboru Klienta, telefonicznie lub poprzez wiadomość wysłaną na wskazany przez Klienta adres poczty e-mail. Sklep zastrzega sobie, że stroną odpowiedzialną za rozpatrzenie reklamacji będzie Oferent, jednak w takim przypadku Sklep zobowiązuje się poinformować o tym niezwłocznie Klienta.
                    </p>
                    <p>
                        5. Reliance Polska informuje, że w zależności od ustawień przeglądarki internetowej Klienta, może wprowadzać do systemu teleinformatycznego którym posługuje się Klient, pliki cookies, które nie są składnikiem treści świadczonych przez Sklep usług, a które umożliwiają późniejszą identyfikację Klienta wchodzącego na strony Sklepu i są wykorzystywane przez Sklep w celu ułatwienia Klientowi korzystania ze Sklepu, jak również w celu monitorowania ruchu Klientów na stronach
                        Sklepu. Klient może w każdym momencie wyłączyć możliwość korzystania przez Sklep z cookies poprzez odpowiednie ustawienia w swojej przeglądarce internetowej.
                    </p>
                    <h3>IX INFORMACJE DOTYCZĄCE PRZETWARZANIA PRZEZ RELIANCE POLSKA SP. Z O.O. DANYCH OSOBOWYCH UZYTKOWNIKÓW SKLEPU</h3>
                    <p>1. Informacje wskazane poniżej zostają Użytkownikowi udostępniane także w momencie zbierania jego danych osobowych na stronach Sklepu.</p>
                    <p>2. Administratorem danych osobowych Użytkownika Sklepu jest spółka Reliance Polska Spółka z ograniczoną odpowiedzialnością. Administrator przetwarza dane osobowe Użytkowników Sklepu zgodnie z Ogólnym Rozporządzeniem o Ochronie Danych z dnia 27 kwietnia 2016 r. („RODO”).</p>
                    <p>3. Kontakt do Inspektora Ochrony Danych: biuro@obligain.com lub: Inspektor Ochrony Danych Reliance Polska Spółka z ograniczoną odpowiedzialnością, al. Pokoju 1, 31 – 548 Kraków.</p>
                    <p>
                        4. Dane osobowe Użytkowników Sklepu są przetwarzane m.in. w następującym zakresie: (i) w celu wykonywania zawartych z Użytkownikiem umów sprzedaży towarów ze Sklepu - podstawą przetwarzania danych będzie w tym wypadku umowa zawarta z Administratorem poprzez akceptację regulaminu Sklepu; (ii) w celu prowadzenia konta Użytkownika Sklepu - podstawą przetwarzania danych będzie w tym wypadku umowa zawarta z Administratorem poprzez założenie konta i akceptację regulaminu
                        Sklepu; (ii) w celu przeprowadzania procesów reklamacyjnych - w tym wypadku podstawą przetwarzania jest obowiązek Administratora wynikający z przepisu prawa dotyczących rękojmi za wady rzeczy sprzedanej; (iii) jeżeli Użytkownik wyrazi na to odrębne zgody, na podany adres e-mail Użytkownika albo jego nr telefonu, może być wysyłana informacja handlowa dotyczącą towarów oferowanych do sprzedaży w Sklepie, w tym ofert promocyjnych – w tym wypadku podstawą przetwarzania danych
                        Użytkownika jest jego zgoda, która nie jest obowiązkowa i może być cofnięta w każdej chwili; (iv) w celu kierowania do Użytkownika na stronie Sklepu zindywidualizowanych komunikatów marketingowych np. w formie sugestii zakupu towarów z wykorzystaniem profilowania. Komunikaty będą przygotowane w oparciu o analizę dokonanych przez Użytkownika zakupów – podstawą przetwarzania danych Użytkownika w tym przypadku będzie prawnie uzasadniony interes Administratora polegający na
                        marketingu towarów oferowanych w Sklepie; (v) w celach marketingowych - na podany przez Użytkownika adres do doręczeń Administrator od czasu do czasu wysyłać informacje o ofercie sklepu Obligain.com lub ofercie jego partnerów handlowych – podstawą przetwarzania danych osobowych Użytkownika w tym zakresie będzie prawnie uzasadniony interes Administratora lub jego partnerów polegający na marketingu wskazanych w ofercie towarów; Użytkownik może w każdej chwili sprzeciwić się
                        przetwarzaniu jego danych osobowych w powyższym zakresie kontaktując się ze Sklepem, (vi) w celach statystycznych dla wewnętrznych potrzeb Administratora – w tym wypadku podstawą przetwarzania będzie prawnie uzasadniony interes Administratora polegający na zbieraniu informacji umożliwiających rozwijanie działalności i dostosowywanie usług do potrzeb Użytkowników Sklepu, (vii) w celu potwierdzenia wykonania przez Administratora jego obowiązków oraz dochodzenia roszczeń lub
                        obrony przed roszczeniami, które mogą być kierowane przeciwko Administratorowi, zapobiegania lub wykrywania oszustw – podstawą przetwarzania danych Użytkownika w tym przypadku będzie prawnie uzasadniony interes Administratora jakim jest ochrona praw, potwierdzenie wykonania obowiązków i uzyskanie z tego tytułu należnego wynagrodzenia od klientów Administratora.
                    </p>
                    <p>
                        5. Dokonując zakupów w Sklepie Użytkownik podaje określone dane osobowe, niezbędne do wykonania umowy sprzedaży. Odmowa podania danych koniecznych do realizacji zamówienia skutkuje brakiem możliwości wykonania przez Sklep umowy sprzedaży. Nie jest obowiązkowe wyrażenie przez Użytkownika zgody na otrzymywanie informacji handlowej na podany adres e-mail lub podany nr telefonu dla realizacji zawartej umowy sprzedaży Towarów. Jeżeli zgoda zostanie wyrażona, będzie mogła być
                        cofnięta w każdym czasie. Cofnięcie zgody nie wpływa na zgodność z prawem przetwarzania sprzed cofnięcia.{' '}
                    </p>
                    <p>6. Administrator będzie udostępniał dane osobowe Użytkownika podmiotom, które współpracują z nami przy wykonaniu umowy sprzedaży zakupionych przez Użytkownika towarów, w tym odbioru płatność za zakupione towary, jak również dostarczenia towarów. </p>
                    <p>7. Przekazane przez Użytkownika dane osobowe będą przetwarzane w okresie niezbędnym do realizacji umowy sprzedaży, a także roszczeń reklamacyjnych, jak również potwierdzenia wykonania obowiązków Administratora oraz dochodzenia roszczeń lub obrony przed roszczeniami, które mogą być kierowane przeciwko Administratorowi – jednak nie dłużej niż 10 lat od dnia przekazania Administratorowi przez Użytkownika jego danych. </p>
                    <p>
                        8. Administrator stosuje zabezpieczenia informatyczne i organizacyjne mające na celu zminimalizowanie ryzyka wycieku danych, ich zniszczenia, dezintegracji, takich jak: system firewall, systemy zabezpieczeń antywirusowe i antyspamowe, wewnętrzne procedury dostępu, przetwarzania danych i odtwarzania awaryjnego, a także system kopii zapasowych działający na wielu poziomach. Sklep zapewniają bardzo wysoki poziom bezpieczeństwa dzięki zastosowaniu Web application firewall
                        (WAF) oraz systemu zabezpieczeń przed atakami typu DDoS, wysokiego poziomu szyfrowania połączenia HTTPS/SSL zgodnie z przyjętymi najlepszymi praktykami, współpracuje ze starannie dobranym dostawcą usług hostingowych, którzy posiadają certyfikaty z zakresu zarządzania jakością ISO 9001 oraz wymaganiami AQAP-2110, a także certyfikat zarządzania bezpieczeństwem informacji wg normy ISO/IEC 27001.
                    </p>
                    <p>9. Na zasadach określonych w RODO Użytkownikowi przysługują następujące prawa w związku z przetwarzaniem jego danych osobowych przez Administratora w związku z prowadzeniem Sklepu: prawo dostępu do danych, ich aktualizacji, prawo żądania przeniesienia danych, ich usunięcia, zgłoszenia sprzeciwu co do przetwarzania danych oraz prawo żądania ograniczenia ich przetwarzania. </p>
                    <p>10. Użytkownikowi przysługuje prawo do zgłoszenia skargi do Prezesa Urzędu Ochrony Danych Osobowych w związku z przetwarzaniem danych osobowych Użytkownika przez Administratora.</p>
                    <h3>X ZAPISY KOŃCOWE </h3>
                    <p>1. Brak akceptacji postanowień niniejszego Regulaminu uniemożliwia zakup Towarów oferowanych przez Sklep. Sklep umożliwi Klientowi zapoznanie się z Regulaminem przy składanym zamówieniu. Klienci posiadający konto w Sklepie zostaną poinformowani o zmianie regulaminu za pośrednictwem korespondencji e-mail. Klientowi, który nie akceptuje wprowadzonych w Regulaminie zmian przysługuje uprawnienie do usunięcia konta w każdym czasie.</p>
                    <p>2. Do umowy sprzedaży produktów w Sklepie stosuje się prawo polskie. Umowa zawierana jest w języku polskim.</p>
                    <p>3. W sprawach nie uregulowanych niniejszym regulaminem stosuje się odpowiednio przepisy kodeksu cywilnego lub przepisów innych aktów prawnych mających zastosowanie do działalności i funkcjonowania sklepu.</p>
                    <p>4. Sądem właściwym dla rozstrzygania sporów jest sąd miejscowo właściwy wg. obowiązujących przepisów.</p>
                    <p>5. Reliance Polska Sp. z o.o. zastrzega sobie prawo do dokonywania zmian Regulaminu w każdym czasie. Zmiany Regulaminu mają zastosowanie do zamówień złożonych po dokonaniu danej zmiany niniejszego Regulaminu, z zastrzeżeniem postanowień ust. 3 powyżej. </p>
                    <p>6. Wszelkie zamieszczone w sklepie znaki towarowe i nazwy firmowe należą do prawnych właścicieli i zostały umieszczone w celach informacyjnych.</p>
                </div>
            </div>
        );
    }
}
