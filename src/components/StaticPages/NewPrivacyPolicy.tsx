import * as React from "react";
import { Link } from "react-router-dom";

type DispatchedP = {};

type ConnectedP = {};

export default class NewPrivacyPolicy extends React.Component<
  DispatchedP & ConnectedP
> {
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
          <h2>Obligain - Polityka Prywatności</h2>
          <h4>
            Data ostatniej aktualizacji 14 sierpnia 2019 roku. Poprzednią wersję
            naszej Polityki Prywatności znajdziesz{" "}
            <Link className="color-brown" to="/oldprivacypolicy">
              tutaj
            </Link>
          </h4>
          <p>
            Szanujemy Państwa prywatność i dbamy o ochronę Państwa danych
            osobistych. Niniejsza Polityka Prywatności dostarczy Państwu
            informacji na temat tego, w jaki sposób postępujemy z Państwa danymi
            osobowymi. Dowiedzą się Państwo także o przysługujących Państwu
            prawach oraz o tym, jak obowiązujące przepisy chronią Państwa i
            Państwa dane osobowe. Prosimy o uważne zapoznanie się z treścią
            Polityki Prywatności przed rozpoczęciem korzystania z naszych Usług.
          </p>
          <p>W naszej Polityce Prywatności:</p>
          <p>
            Usługi oznaczają każdy produkt, usługę, treść, funkcjonalność,
            technologię lub funkcję, wszystkie powiązane strony internetowe,
            które Państwu oferujemy.
          </p>
          <p>
            Serwis oznacza strony internetowe i strony mobilne lub inne treści
            online, za pośrednictwem których oferujemy nasze Usługi.
          </p>
          <h5>1. Kim jesteśmy?</h5>
          <p>
            Głównym administratorem Państwa danych w zakresie świadczenia
            naszych międzynarodowych usług jest Reliance Polska spółka z
            ograniczoną odpowiedzialnością, adres: al. Pokoju 1, 31-548 Kraków.
            Reliance Polska Sp. z o.o. jest wpisana do rejestru przedsiębiorców
            prowadzonego przez Sąd Rejonowy dla Krakowa Śródmieścia w Krakowie -
            , Wydział XI Gospodarczy KRS pod numerem KRS 0000686682 oraz
            posługuje się następującymi numerami identyfikacyjnymi: NIP
            6751598679, REGON: 367804850. Aktualne dane kontaktowe są
            zamieszczone w sekcji 15.
          </p>
          <h5>2. Jakie dane zbieramy na Państwa temat?</h5>
          <h6>2.1.1 Dane przekazane przekazywane bezpośrednio przez Państwa</h6>
          <h6>Rejestracja i inne informacje o Państwa koncie</h6>
          <p>
            Podczas Państwa rejestracji w celu korzystania ze świadczonych przez
            nas Usług możemy zbierać na Państwa temat następujące informacje:
          </p>
          <p>
            <ul className="ulType">
              <li>
                jeśli rejestrują się Państwo z wykorzystaniem konta Facebook:
                gromadzimy imię i nazwisko w formie w jakiej występują na
                Państwa koncie Facebook oraz numer identyfikacyjny (Facebook
                ID). W sytuacji, gdy w ramach ustawień prywatności aplikacji
                Facebook (takie ustawienia pojawią się zaraz przed
                zarejestrowaniem się do naszego Serwisu), udzielą Państwo
                swojego pozwolenia, możemy pozyskać również informacje na temat
                Państwa płci, wieku, identyfikatora email, adresu składającego
                się z kraju, miasta, ulicy, numeru domu oraz numeru mieszkania i
                kodu pocztowego oraz numeru telefonu komórkowego. W przypadku
                braku udostępnienia wybranych danych z portalu Facebook dane te
                należy uzupełnić samodzielnie, aby dokończyć proces rejestracji.{" "}
              </li>
              <li>
                jeśli rejestrują się Państwo z wykorzystaniem Państwa adresu
                email: adres email, imię, nazwisko, ulicę, nr domu, nr
                mieszkania, miasto, kraj, kod pocztowy, numer telefonu
                komórkowego oraz hasło.
              </li>
            </ul>
          </p>
          <p>
            Podanie powyższych danych jest niezbędne do korzystania z usług
            oferowanych w ramach konta Obligain.
          </p>
          <p>
            W uzasadnionych przypadkach podejrzenia naruszenia postanowień
            Regulaminu polegających na działaniu na niekorzyść innych
            Użytkowników Serwisu czy też samego Serwisu możemy poprosić Państwa
            o przekazanie nam dodatkowych informacji związanych z transakcją
            (np. Potwierdzenie wykonania płatności na rzecz Oferenta). W takich
            przypadkach podstawą do przetwarzania przez nas tej kategorii danych
            osobowych jest nasz prawnie uzasadniony interes polegający na
            zwalczaniu naruszeń Regulaminu i zapewnieniu Użytkownikom możliwości
            korzystania z bezpiecznego i przyjaznego Serwisu.
          </p>
          <h5>Komunikacja telefoniczna oraz prowadzenie korespondencji</h5>
          <p>
            W przypadku kontaktu telefonicznego lub mailowego zbieramy wszystkie
            informacje, które zdecydują się Państwo przekazać podczas rozmowy
            lub w trakcie korespondencji z naszymi pracownikami lub
            przedstawicielami. Informujemy, że w przypadku kontaktów
            telefonicznych wszystkie rozmowy są nagrywane. Jeżeli sprzeciwiają
            się Państwo nagrywaniu rozmów telefonicznych, rozmowa nie będzie
            kontynuowana, a Państwo mogą skorzystać z innych dostępnych form
            komunikacji.
          </p>
          <h6>
            2.1.2 Dane, które gromadzimy automatycznie kiedy korzystają Państwo
            z naszych Usług
          </h6>
          <h5>Dane o urządzeniu</h5>
          <p>
            <ul className="ulType">
              <li>
                Gromadzimy informacje dotyczące Państwa urządzenia, takie jak
                wersja systemu operacyjnego oraz unikalne identyfikatory.
                Przykładem takich informacji jest nazwa sieci komórkowej, z
                której Państwo korzystają. Informacje związane z urządzeniem są
                przez nas łączone z Państwa kontem Obligain.
              </li>
            </ul>
          </p>
          <h5>Dane dotyczące logowania</h5>
          <p>
            <ul className="ulType">
              <li>
                Gromadzimy szczegóły techniczne, w tym adres protokołu
                internetowego (adres IP) Państwa urządzenia, informacje o
                strefie czasowej i systemie operacyjnym. Przechowujemy również
                informacje na temat Państwa logowania (data rejestracji, data
                ostatniej zmiany hasła, data ostatniego udanego logowania) oraz
                typu i rodzaju Państwa przeglądarki internetowej.
              </li>
            </ul>
          </p>
          <h5>Dane o aktywności w Serwisie </h5>
          <p>
            <ul className="ulType">
              <li>
                Zbieramy informacje dotyczące Państwa aktywności w Serwisie, a
                wśród nich informacje o stronach, z których trafiają Państwo na
                nasz Serwis, datę każdej wizyty, wyniki Państwa wyszukiwań,
                listy produktów oraz banery reklamowe, w które Państwo klikają,
                Państwa interakcje z takimi reklamami i listami produktowymi,
                czas trwania Państwa wizyty, a także kolejność, w jakiej
                odwiedzają Państwo poszczególne sekcje naszego Serwisu.{" "}
              </li>
            </ul>
          </p>
          <h5>Cookies</h5>
          <p>
            <ul className="ulType">
              <li>
                Wykorzystujemy cookies w celu zarządzania sesjami użytkowników,
                przechowywania wyboru preferencji językowych oraz dostarczania
                Państwu odpowiednich reklam. "Cookies" to niewielkie pliki
                tekstowe przesyłane przez serwer internetowy na twardy dysk
                Państwa urządzenia. Cookies mogą być wykorzystywane do
                gromadzenia informacji o dacie i godzinie Państwa wizyty,
                Państwa historii przeglądania, Państwa preferencjach, oraz
                nazwie użytkownika. Mogą Państwo zmienić ustawienia Państwa
                przeglądarki, aby odrzucić wszystkie lub niektóre cookies, lub
                ustawić ostrzeżenia informujące Państwa, że strony internetowe
                umieszczają lub mają dostęp do cookies. Prosimy pamiętać, że
                jeśli zablokują Państwo albo odrzucą cookies, niektóre z naszych
                Usług lub niektóre części Serwisu mogą stać się dla Państwa
                niedostępne lub mogą działać nieprawidłowo. Aby uzyskać więcej
                informacji o wykorzystaniu przez nas cookies, prosimy o
                zapoznanie się z naszą{" "}
                <Link className="color-brown" to="/cookiesprivacy">
                  Polityką dotyczącą Cookies i Podobnych Technologii.
                </Link>
              </li>
            </ul>
          </p>
          <h6>
            2.1.3. Dane pozyskane od osób trzecich lub z publicznie dostępnych
            źródeł
          </h6>
          <p>
            Otrzymujemy Państwa dane osobowe od różnych osób trzecich (i ze
            źródeł publicznych) takich jak wymienione poniżej: i. Niektóre
            informacje o charakterze technicznym oraz wynikające ze sposobu
            użytkowania, pozyskane od dostawców usług analitycznych, jak np.
            Google. ii. Dane adresowe i kontaktowe związane z prowadzoną
            działalnością gospodarczą pozyskane od dostawców informacji, jak np.
            wywiadownie gospodarcze oraz podmioty budujące bazy potencjalnych
            kontrahentów oraz publicznie dostępne rejestry (np. Centralna
            Ewidencja i Informacja o Działalności Gospodarczej). iii. Innych
            użytkowników Serwisu, w zakresie w jakim prowadzą oni z nami
            korespondencję dotyczącą naszych Usług lub transakcji, które z nimi
            Państwo prowadzą (np. dane potwierdzenia wysyłki, informacje o
            niezgodności towaru z ogłoszeniem, informacje dotyczące
            potencjalnych oszustw).
          </p>
          <h5>3. Czy pozyskujemy dane od dzieci?</h5>
          <p>
            Nasze Usługi nie są skierowane do dzieci poniżej 16 roku życia i
            świadomie nie pozyskujemy informacji na ich temat. Jeśli
            stwierdzimy, że osoba poniżej 16 roku życia dostarczyła nam swoje
            dane osobowe, natychmiast je usuniemy.
          </p>
          <h5>4. Dlaczego przetwarzamy informacje na Państwa temat?</h5>
          <p>
            Będziemy wykorzystywać Państwa dane osobowe tylko wtedy, gdy jest to
            zgodne z przepisami prawa. Najczęściej przetwarzamy Państwa dane
            osobowe, gdy:
          </p>
          <p>
            <ul className="ulType">
              <li>
                Jest to niezbędne to zawarcia lub wykonania umowy (proszę
                pamiętać, że korzystając z naszych Usług zawierają Państwo umowę
                o świadczenie usług drogą elektroniczną).
              </li>
              <li>
                Jest to niezbędne do celów wynikających z naszych prawnie
                uzasadnionych interesów, polegających na ulepszaniu naszych
                Usług i zapewnianiu Państwu dostępu do bezpiecznego i sprawnie
                działającego Serwisu.
              </li>
              <li>
                Jest to niezbędne do wypełnienia ciążącego na nas obowiązku
                prawnego.
              </li>
            </ul>
          </p>
          <p>
            W pewnych okolicznościach możemy również przetwarzać Państwa dane
            osobowe na podstawie uzyskanej od Państwa zgody. W takich
            przypadkach, w momencie pozyskiwania Państwa zgody poinformujemy
            Pańtwa o celu przetwarzania i kategorii przetwarzanych danych
            osobowych. Poniżej przedstawiamy opis sposobów przetwarzania przez
            nas Państwa danych osobowych oraz podstawy prawne, na których
            oparliśmy nasze działania. Ponadto, gdy ma to swoje zastosowanie,
            zidentyfikowaliśmy i opisaliśmy nasze prawnie uzasadnione interesy.
          </p>
          <h5>
            4.1 Przetwarzanie w celu zapewnienia dostępu oraz świadczenia Usług
            za pośrednictwem Serwisu
          </h5>
          <p>
            Jeśli zalogują się Państwa za pomocą Państwa numeru telefonu
            komórkowego lub identyfikatora e-mail, wykorzystamy Państwa imię i
            nazwisko, numer telefonu komórkowego lub adres e-mail w celu
            zidentyfikowania Państwa jako Użytkownika i zapewnienia Państwu
            dostępu do naszego Serwisu. Jeśli zalogują się Państwa za pomocą
            Państwa konta Facebook, wykorzystamy Państwa imię i nazwisko oraz
            adres email z Państwa profilu Facebook w celu zidentyfikowania
            Państwa jako Użytkownika naszego Serwisu i zapewnieniaPaństwu
            dostępu do Serwisu. Powyższe informacje dotyczące logowania są przez
            nas używane również do świadczenia Usług zgodnie z naszym{" "}
            <Link className="color-brown" to="/termsandconditions">
              Regulaminem.
            </Link>
            Wykorzystujemy Państwa adres email i numer telefonu komórkowego (za
            pośrednictwem SMS) do przesyłania Państwu propozycji i rekomendacji
            naszych Usług, które mogą być dla Państwa interesujące. Powyższe
            informacje są przetwarzane w celu należytego wykonania umowy, którą
            z nami Państwo zawarli oraz na podstawie prawnie uzasadnionego
            interesu w przypadku podejmowania przez nas działań marketingowych,
            polegających na oferowaniu Państwu Usług.
          </p>
          <h5>
            4.2 Przetwarzanie w celu poprawienia wygody korzystania z Serwisu
            oraz rozwoju nowych funkcjonalności Serwisu
          </h5>
          <p>
            Wykorzystujemy dane o aktywności użytkownika (np. sekwencje kliknięć
            w ramach Serwisu) do:
          </p>
          <p>
            <ul className="ulType">
              <li>
                oferowania Państwu spersonalizowanych treści, takich jak lepsze
                wyniki wyszukiwania podczas korzystania z naszych Usług;
              </li>
              <li>
                określania jak długo i w jaki sposób poruszają się Państwo po
                naszym Serwisie, w celu poznania Państwa zainteresowań i poprawy
                naszych Usług. Na przykład, opierając się na informacjach
                dotyczących treści, które Państwa zainteresowały, możemy
                przekazać Państwu sugestie innych interesujących materiałów;
              </li>
              <li>
                monitorowania i raportowania efektywności kampanii
                marketingowych do naszych partnerów biznesowych oraz do celów
                wewnętrznych analiz biznesowych.
              </li>
            </ul>
          </p>
          <p>
            Wykorzystujemy dane dotyczące Państwa lokalizacji do następujących
            celów:
          </p>
          <p>
            <ul className="ulType">
              <li>
                łączenia anonimowych informacji o cechach i zachowaniu
                użytkowników Obligain, w tym w celach analiz biznesowych,
                segmentacji oraz rozwijania anonimowych profili;
              </li>
              <li>
                wspierania rozwoju naszego Serwisu oraz personalizacji treści,
                które do Państwa kierujemy. Na przykład, przy pomocy lokalizacji
                i dla zapewnienia Państwu większej wygody zakupów, możemy
                wyświetlać wyniki spełniające Państwa kryteria wyszukiwania;
              </li>
              <li>
                mierzenia i monitorowania Państwa interakcji z banerami
                reklamowymi podmiotów trzecich, które umieszczamy w naszym
                Serwisie.
              </li>
            </ul>
          </p>
          <p>
            Na podstawie informacji dotyczących logowania, które zawierają
            Państwa identyfikator email i numer telefonu, rozpoznajemy różne
            urządzenia (takie jak komputer stacjonarny, telefon komórkowy,
            tablet) wykorzystywane przez Państwa w celu uzyskania dostępu do
            Serwisu. Pozwala nam to łączyć Państwa aktywność w naszym Serwisie
            na wszystkich urządzeniach, a także pomaga zapewnić Państwu taką
            samą wygodę korzystania z Serwisu bez względu na to, z jakiego
            urządzenia Państwo korzystają. Przetwarzamy powyższe informacje w
            oparciu o przesłankę naszego prawnie uzasadnionego interesu w celu
            poprawy Państwa wygody korzystania z Serwisu oraz w celu należytego
            wykonania umowy, którą z nami Państwo zawarli. W celu umożliwienia
            Państwu korzystania z coraz wygodniejszego Serwisu oraz nowych
            przydatnych funkcjonalności cały czas pracujemy nad rozwojem naszych
            usług. W celu opracowania nowych rozwiązań takich jak np. system
            skutecznych rekomendacji możemy prowadzić różnego rodzaju testy i
            badania. W takim przypadku możemy przetwarzać Państwa dane osobowe
            na podstawie naszego prawnie uzasadnionego interesu polegającego na
            rozwoju naszego Serwisu. W celu ochrony Państwa interesów
            wdrożyliśmy wiele mechanizmów ochrony danych osobowych, które mogą
            być wykorzystywane do celów rozwoju nowych usług, takich jak
            szyfrowanie danych.
          </p>
          <h5>4.3 Przetwarzanie w celu zapewnienia bezpieczeństwa Serwisu</h5>
          <p>
            i. Wykorzystujemy Państwa numer telefonu komórkowego, dane dotyczące
            logowania oraz unikalne identyfikatory urządzeń w celu
            administrowania i ochrony naszego Serwisu (w tym diagnostyki,
            analizy danych, testów, zapobiegania nadużyciom, utrzymania systemów
            informatycznych, wsparcia, raportowania oraz hostingu danych). ii.
            Dla celów zapobiegania nadużyciom oraz promowania bezpieczeństwa
            przez blokowanie spamu lub obraźliwych wiadomości, które mogą być do
            Państwa wysyłane przez innych użytkowników, analizujemy Państwa
            komunikację prowadzoną za pomocą funkcji czatu. Powyższe informacje
            przetwarzamy w celu należytego wykonania umowy, którą z nami Państwo
            zawarli, ulepszania naszych Usług oraz w oparciu o przesłankę
            naszego prawnie uzasadnionego interesu polegającego na zapobieganiu
            nadużyciom.
          </p>
          <h5>5. Przetwarzanie danych w „Zacznij zarabiać”</h5>
          <h6>
            5.1 W jaki sposób przetwarzamy Państwa dane w celu wykonania
            rozliczeń?
          </h6>
          <p>
            Państwa dane podane po rejestracji jako partner (numer konta
            bankowego, niezbędny do rozliczeń oraz rodzaj powierzchni reklamowej
            udostępnionej Serwisowi w celu zamieszczenia reklamy) wykorzystywane
            będą do dokonania zapłaty za usługę reklamowania serwisu. W tym celu
            zbieramy informacje statystyczne o wykorzystaniu Państwa linku
            afiliacyjnego oraz indywidualnego kodu qr. Przechowujemy historię
            logowań, rejestracji oraz zakupów dokonanych przy użyciu tych
            linków. Przechowujemy również dane dotyczące wielkości należnego
            Państwu wynagrodzenia oraz jego podstawy.{" "}
          </p>
          <h6>5.2 Kto ma dostęp do danych partnerów?</h6>
          <p>
            Dane niezbędne do wykonania rozliczeń przechowywane są tylko i
            wyłącznie przez spółkę do której należy serwis (Reliance Polska sp.
            z o.o.) i nie są nikomu udostępniane. Wyjątkiem może być podejrzenie
            naruszenia prawa bądź kontrola skarbowa.{" "}
          </p>
          <h5>
            7. W jaki sposób będziemy Pańśtwa informować o zmianach w naszej
            Polityce Prywatności?
          </h5>
          <p>
            Polityka Prywatności może być przez nas zmieniana lub aktualizowana.
            Wszelkie zmiany zostaną zamieszczone na tej stronie, a dodatkowo
            poinformujemy Państwa o nich za pośrednictwem wiadomości e-mail lub
            naszego Serwisu. Jeśli nie wyrażają Państwo zgody na dokonane przez
            nas zmiany, mogą Państwo dokonać zamknięcia swojego konta wchodząc w
            jego ustawienia i wybierając opcję trwałego usunięcia konta.
          </p>
          <h5>8. Państwa prawa</h5>
          <p>
            Obowiązujące przepisy dotyczące ochrony prywatności przyznają
            Państwu pewne prawa związane z przetwarzaniem Państwa danych
            osobowych. O zakresie przysługujących Państwu praw decyduje
            charakter podejmowanych przez nas działań.
          </p>
          <p>
            Sposób realizacji Państwa praw: W celu zapewnienia realizacji
            Państwa praw udostępniliśmy odpowiednie funkcjonalności w ramach
            Państwa konta Obligain. Korzystając z dostępnych funkcji mogą
            Państwo poprawiać swoje dane osobowe, otrzymać ich kopię, czy też
            zażądać usunięcia konta Obligain i związanych z nim danych
            osobowych. W związku z tym, że troszczymy się o bezpieczeństwo
            danych osobowych naszych Użytkowników żądania dotyczące realizacji
            Państwa praw powinny zostać zgłoszone z poziomu funkcjonalności
            konta Obligain. Wynika to z faktu, że tylko w taki sposób mamy
            szansę zweryfikować, czy określone żądanie zostało zgłoszone przez
            osobę, której dane dotyczą (czyli naszego Użytkownika). Ponadto
            prosimy pamiętać, że usunięcie Państwa danych jest możliwe dopiero
            po zakończeniu świadczenia przez nas usług, tzn. po usunięciu konta
            Obligain. Dokładamy również starań, aby odpowiednie funkcjonalności
            były również dostępne w naszych pozostałych usługach. Jeśli chcą
            Państwo zrealizować którekolwiek z praw opisanych poniżej, prosimy
            przejść do swojego konta/ustawień prywatności.
          </p>
          <p>
            Prawo dostępu do Państwa danych osobowych. Prawo to umożliwia
            Państwu otrzymanie informacji, czy przetwarzamy dane osobowe na
            Państwa temat, a jeżeli tak, prawo do otrzymania kopii danych
            osobowych, które przetwarzamy. Prawo dostępu do danych osobowych
            pozwala Pańśtwu na zweryfikowanie tego, czy przetwarzamy je zgodnie
            z prawem.
          </p>
          <p>
            Prawo do sprostowania Państwa danych osobowych. Prawo to zapewnia
            możliwość żądania poprawienia niekompletnych, nieprawdziwych lub
            nieaktualnych danych, które przetwarzamy. W niektórych przypadkach
            realizując Państwa żądanie będziemy musieli zweryfikować poprawność
            nowych danych, które nam Państwo dostarczą.
          </p>
          <p>
            Prawo do ograniczenia przetwarzania Państwa danych osobowych. Prawo
            to pozwala Państwu zwrócić się do nas o wstrzymanie przetwarzania
            Państwa danych osobowych w następujących sytuacjach: (a) gdy chcą
            Państwo abyśmy sprawdzili prawidłowość danych; (b) gdy nasze
            przetwarzanie jest niezgodne z prawem; (c) gdy dane są Państwu
            potrzebne do ustalenia, dochodzenia lub obrony roszczeń, mimo, że
            nie potrzebujemy już Państwa danych do naszych własnych celów
            przetwarzania; (d) gdy wniosłeś sprzeciw wobec naszego
            przetwarzania, ale musimy zweryfikować czy w dalszym ciągu mamy
            nadrzędne i prawnie uzasadnione podstawy do kontynuowania
            przetwarzania Państwa danych osobowych.
          </p>
          <p>
            Prawo do usunięcia Państwa danych osobowych. Prawo to umożliwia Ci
            żądanie usunięcia Państwa danych osobowych, jeśli nie są już
            niezbędne do celów, dla których zostały zebrane. Mogą Państwo
            również żądać od nas usunięcia Państwa danych osobowych, jeśli
            skutecznie zrealizowali Państwo przysługujące Państwu prawo do
            sprzeciwu wobec przetwarzania (punkt poniżej), jeśli przetwarzamy
            Państwa dane niezgodnie z prawem lub jesteśmy zobowiązani do
            usunięcia Państwa danych osobowych w celu wywiązania się z obowiązku
            prawnego wskazanego w przepisach obowiązującego prawa. Prosimy
            pamiętać, że w niektórych przypadkach, jesteśmy zobowiązani
            przetwarzać Państwa dane na podstawie obowiązujących przepisów i nie
            możemy zrealizować Państwa żądania. Więcej informacji na ten temat
            znajdą Państwo w sekcji 10.
          </p>
          <p>
            Prawo do sprzeciwu wobec przetwarzania dotyczących Państwa danych w
            sytuacji, gdy przetwarzamy Państwa dane w oparciu o przesłankę
            prawnie uzasadnionego interesu (naszego lub podmiotów trzecich).
            Prawo do sprzeciwu mogą Państwo wnieść z przyczyn związanych z
            Państwa szczególną sytuacją, gdy Państwa zdaniem przetwarzanie
            wpływa na Państwa prawa lub wolności. Prawo do wniesienia sprzeciwu
            przysługuje Państwu również jeśli przetwarzamy Państwa dane w celach
            marketingu bezpośredniego. W niektórych przypadkach, możemy wykazać,
            że posiadamy prawnie uzasadnione podstawy do przetwarzania danych,
            które są nadrzędne wobec Państwa praw i wolności (np. konieczność
            zapewnienia bezpieczeństwa Serwisu oraz przeciwdziałanie oszustwom).
            W takich przypadkach prawo do sprzeciwu nie łączy się z usunięciem
            Państwa danych osobowych.
          </p>
          <p>
            Prawo do przenoszenia Państwa danych osobowych. Realizując to prawo
            dostarczymy Państwu lub wskazanej przez Państwa osobie trzeciej
            Państwa dane osobowe w powszechnie używanym formacie, nadającym się
            do odczytu maszynowego. Pamiętaj, że prawo to przysługuje Państwu
            tylko w odniesieniu do danych przetwarzanych na podstawie zgody lub
            przesłanki wykonania umowy, którą Państwo z nami zawarli, a samo
            przetwarzanie odbywa się w sposób zautomatyzowany (w systemach
            informatycznych).
          </p>
          <h6>
            W przypadku, gdy udzielili nam Państwo zgody na przetwarzanie
            Państwa danych osobowych, mają Pańśtwo prawo do wycofania jej w
            dowolnym momencie. Wycofanie zgody nie wpływa na zgodność z prawem
            przetwarzania, którego dokonano na podstawie zgody przed jej
            wycofaniem.
          </h6>
          <p>
            Realizacja praw jest, co do zasady, bezpłatna: Nie będą musieli
            Państwo wnosić opłaty za realizację prawa dostępu do Państwa danych
            osobowych (lub za realizację jakichkolwiek innych praw). Możemy
            jednak pobrać opłatę w rozsądnej wysokości, jeśli Państwa żądanie
            jest w oczywisty sposób nieuzasadnione lub nadmierne, w
            szczególności ze względu na ich ustawiczny charakter. W takich
            przypadkach możemy również odmówić spełnienia Państwa żądania.
          </p>
          <p>
            Czas realizacji żądań: Dokładamy starań, aby odpowiedzieć na
            wszystkie prawnie uzasadnione żądania w ciągu jednego miesiąca.
            Jeśli Państwa żądanie jest szczególnie skomplikowane lub złożyli
            Państwo kilka żądań ich rozpoznanie może zająć nam dłużej niż
            miesiąc. W takim wypadku poinformujemy Państwa o wydłużeniu terminu
            i zapewnimy Państwu bieżące informacje dotyczące realizacji Pańśtwa
            żądania. Mają również Państwo prawo w dowolnym czasie wnieść skargę
            do właściwego organu nadzorczego, zgodnie z informacjami wskazanymi
            w sekcji 13. Będziemy wdzięczni, jeśli przed wniesieniem skargi do
            organu nadzorczego, dadzą nam Państwo szansę zajęcia się Państwa
            sprawą i wątpliwościami związanymi z naszym działaniem. Z tego
            powodu prosimy o kontakt z naszym Działem Prywatności za
            pośrednictwem maila kontakt@obligain.com.
          </p>
          <h5>9. Komunikacja i Marketing</h5>
          <p>
            Będziemy komunikować się z Państwem za pośrednictwem wiadomości
            email, SMS lub za pomocą powiadomień związanych z naszymi
            Usługami/Serwisem. Komunikacja będzie mieć na celu potwierdzenie
            Państwa rejestracji, informowanie Państwa w sytuacji, gdy Państwa
            ogłoszenie stanie się aktywne/wygaśnie oraz w przypadku innych
            wiadomości transakcyjnych związanych z naszymi Usługami. Ze względu
            na to, że wysyłanie Państwu tego rodzaju komunikatów jest z naszej
            perspektywy konieczne, mogą nie mieć Państwo możliwości rezygnacji z
            ich otrzymywania. Mogą jednak Państwo w każdej chwili zrezygnować z
            otrzymywanej komunikacji marketingowej przez kliknięcie w odpowiedni
            link umieszczony w wysłanej do Państwa wiadomości email lub SMS,
            zmieniając ustawienia powiadomień w ramach swojego konta Obligain. W
            przypadku problemów lub trudności prosimy skontaktować się z nami za
            pośrednictwem maila kontakt@obligain.com. Komunikację marketingową
            mogą Państwo otrzymywać, gdy:
          </p>
          <p>
            <ul className="ulType">
              <li>
                zgłosili nam Państwo chęć otrzymywania takich informacji
                wyrażając swoją zgodę na komunikację marketingową;
              </li>
              <li>
                dostarczyli nam Państwo swoje dane biorąc udział w konkursie;
                lub
              </li>
              <li>zgłosili nam Państwo swój udział w akcji promocyjnej.</li>
            </ul>
          </p>
          <h5>10. Komu udostępniamy Państwa dane?</h5>
          <p>
            Do realizacji celów wskazanych w sekcji 4, możemy udostępniać
            Państwa dane osobowe następującym kategoriom odbiorców:
            Przeprowadzamy kontrole naszych dostawców i wymagamy od nich
            zapewnienia bezpieczeństwa Państwa danych osobowych oraz
            przetwarzania ich zgodnie z prawem. Nie pozwalamy na to, aby nasi
            dostawcy przetwarzali Państwa dane osobowe do własnych celów. W
            ramach naszej współpracy zastrzegamy, że dostawcy mogą przetwarzać
            je tylko w wyraźnie wskazanych celach, zgodnie z naszymi
            instrukcjami. Dostawcy naszych usług działają zarówno w jaki i poza
            Europejskim Obszarem Gospodarczym.{" "}
          </p>
          <p>
            Dostawcy usług marketingowych i analitycznych: W celu ulepszania
            naszych Usług, czasem udostępniamy informacje o Państwu w postaci
            uniemożliwiającej identyfikację dostawcom usług analitycznych,
            którzy pomagają nam analizować w jaki sposób użytkownicy korzystają
            z naszych Usług/Serwisu. Dla celów monitorowania i raportowania
            efektywności kampanii naszych partnerów biznesowych oraz w celach
            wewnętrznych analiz biznesowych, dzielimy się z nimi informacjami w
            sposób uniemożliwiający identyfikację użytkowników. Więcej
            informacji na temat naszych dostawców usług analitycznych znajdą
            Państwo w naszej{" "}
            <Link className="color-brown" to="/cookiesprivacy">
              Polityce dotyczącej Cookies i Pokrewnych Technologii.
            </Link>
          </p>
          <p>
            Organy ścigania, organy nadzorcze i inne: Możemy ujawnić Państwa
            dane osobowe organom ścigania, organom nadzorczym, organom władzy
            publicznej, podmiotom wykonującym zadania publiczne lub działającym
            na zlecenie organów władzy publicznej oraz innym podmiotom trzecim.
            Ujawnienie takich danych odbywa się w związku z wykonywaniem
            obowiązków prawnych. Możemy podjąć decyzje o sprzedaży, przekazaniu
            lub połączeniu części naszego przedsiębiorstwa lub naszych aktywów.
            Możemy również dążyć do przejęcia innych przedsiębiorstw lub do
            połączenia z nimi. W przypadku jakiejkolwiek zmiany, nowy właściciel
            będzie mógł wykorzystywać Państwa dane osobowe w sposób opisany w
            niniejszej Polityce Prywatności.
          </p>
          <p>
            Informacje dostępne publicznie: Jeśli korzystają Państwo z naszych
            Usług i decydują się Państwo skorzystać z opcji Zacznij Zarabiać,
            mogą podjąć Pańśtwo decyzję o ujawnieniu pewnych danych osobowych
            dla pozostałych użytkowników Serwisu Obligain, którzy
            zarekomendowali Państwa jako partnera. Informacje te mogą obejmować
            Państwa imię i nazwisko, adres email, historię i wielkość zakupów
            oraz historię aktywności linku afiliacyjnego. Prosimy pamiętać, że
            każda informacja, którą ujawnią Państwo innym użytkownikom może być
            przekazana dalej, dlatego powinni Państwo zachować w tej kwestii
            szczególną rozwagę.
          </p>
          <h6>Oferenci produktów oferowanych za pośrednictwem Obligain:</h6>
          <p>
            W momencie pobrania pliku z ofertą oferent otrzymuje za
            pośrednictwem poczty mail informację takie jak: imię i nazwisko,
            numer telefonu, adres, adres mail oraz datę i godzinę pobrania
            pliku. Dane te są niezbędne do identyfikacji kupującego w
            późniejszym procesie zakupowym.{" "}
          </p>
          <h5>11. Przekazywanie danych do państw trzecich</h5>
          <p>
            W sytuacjach, gdy przekazujemy Państwa dane osobowe poza „EOG”,
            gwarantujemy, że podobny poziom ochrony jest zapewniony przez
            wprowadzenie co najmniej jednego z poniższych zabezpieczeń:
          </p>
          <p>
            <ul className="ulType">
              <li>
                Przekażemy Państwa dane osobowe tylko do państw, które Komisja
                Europejska uznała za zapewniające odpowiedni poziom ochrony
                danych osobowych. Szczegółowe informacje są dostępne tutaj:{" "}
                <a
                  className="color-brown"
                  target="_blank"
                  href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_pl"
                >
                  European Commission: Adequacy of the protection of personal
                  data in non-EU countries
                </a>
              </li>
              <li>
                Korzystając z usług określonych dostawców, możemy posługiwać się
                umowami zatwierdzonych przez Komisję Europejską, które
                zapewniają danym osobowym taką samą ochronę, jaka przysługuje im
                w Unii Europejskiej. Szczegółowe informacje są dostępne tutaj:
                <a
                  className="color-brown"
                  target="_blank"
                  href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_pl"
                >
                  European Commission: Model contracts for the transfer of
                  personal data to third countries
                </a>
              </li>
              <li>
                Jeśli nasi dostawcy usług mają swoją siedzibę w Stanach
                Zjednoczonych Ameryki, możemy przekazywać im dane jeśli zostali
                objęci programem Privacy Shield, który zobowiązuje ich do
                zapewnienia podobnej ochrony w odniesieniu do danych
                przekazywanych pomiędzy Europą i Stanami Zjednoczonymi.
                Szczegółowe informacje są dostępne tutaj:
                <a
                  className="color-brown"
                  target="_blank"
                  href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/eu-us-data-transfers_pl"
                >
                  European Commission: EU-US Privacy Shield
                </a>
              </li>
            </ul>
          </p>
          <p>
            Mogą Państwo uzyskać kopię odpowiednich zabezpieczeń kontaktując się
            z nami za pomocą maila kontakt@obligain.com.
          </p>
          <h5>12. Gdzie i przez jaki okres przechowujemy Państwa dane?</h5>
          <p>
            Dane, które gromadzimy na Państwa temat będą przechowywane i
            przetwarzane zarówno na terenie „EOG”, jak i poza nim, na
            odpowiednio zabezpieczonych serwerach, w celu zapewnienia naszym
            użytkownikom jak najwyższej jakości usług, np. szybkich stron
            internetowych lub stale rozwijanych aplikacji mobilnych.
            Przechowujemy Państwa dane tak długo, jak jest to niezbędne do
            realizacji celów, dla których zostały zebrane, w tym w ramach
            wypełniania obowiązków prawnych, podatkowo-księgowych lub dla celów
            sprawozdawczych. W celu określenia odpowiedniego okresu retencji
            danych osobowych, uwzględniamy ilość i charakter przetwarzanych
            danych, w tym charakter danych szczególnej kategorii. Bierzemy także
            pod uwagę potencjalne ryzyko niedozwolonego wykorzystania lub
            nieuprawnionego ujawnienia Państwa danych osobowych, możliwość
            realizacji celów przetwarzania za pomocą innych środków orz treść
            przepisów odnoszących się do przetwarzanych danych osobowych.
            Państwa dane osobowe związane z kontem Obligain przechowujemy przez
            czas jego posiadania w Serwisie dla celów realizacji usług
            świadczonych zgodnie z{" "}
            <Link className="color-brown" to="/termsandconditions">
              Regulaminem.
            </Link>
            , jak również do celów marketingowych. Po zamknięciu Państwa konta
            możemy przechowywać Państwa dane osobowe w zakresie i przez okres,
            który jest niezbędny do wypełnienia obowiązków wynikających z
            przepisów prawa lub naszych prawnie uzasadnionych interesów (np. w
            celach zwalczania nadużyć). Dane osobowe związane z technologią
            plików cookies są przechowywane przez czas odpowiadający cyklowi
            życia plików cookie lub do czasu ich usunięcia przez Użytkownika.
            Jeśli mają Państwo jakiekolwiek pytania dotyczące okresów retencji
            Państwa danych, prosimy zgłosić je kontaktując się z nami za pomocą
            maila kontakt@obligain.com.
          </p>
          <h5>
            13. Środki techniczne i organizacyjne oraz bezpieczeństwo
            przetwarzania
          </h5>
          <p>
            Wszystkie informacje, które otrzymujemy na Państwa temat,
            przechowujemy na odpowiednio zabezpieczonych serwerach. Wdrożyliśmy
            także odpowiednie oraz niezbędne środki techniczne i organizacyjne
            służące ochronie Państwa danych Obligain stale ocenia stopień
            bezpieczeństwa w ramach swojej sieci oraz monitoruje wewnętrzne
            regulacje i procedury zaprojektowane po to, by (a) chronić dane
            przed przypadkową lub niezgodną z prawem utratą, dostępem lub
            ujawnieniem, (b) identyfikować możliwe do przewidzenia ryzyka dla
            bezpieczeństwa sieci Obligain, oraz (c) minimalizować zagrożenia dla
            bezpieczeństwa, w tym przez dokonywanie oceny ryzyka i regularne
            testy. Dodatkowo zapewniamy, że wszystkie dane związane z płatnością
            są szyfrowane przy użyciu technologii SSL. Prosimy pamiętać, że
            pomimo wdrożonych przez nas środków ochrony Państwa danych
            osobowych, udostępnianie informacji za pośrednictwem Internetu lub
            publicznie dostępnych sieci, nigdy nie jest całkowicie bezpieczne i
            istnieje ryzyko, że dostęp do Państwa danych osobowych uzyskają
            nieuprawnione do tego osoby trzecie.
          </p>
          <h5>14. Odnośniki do strony internetowych podmiotów trzecich</h5>
          <p>
            Nasz Serwis może zawierać odnośniki do stron internetowych lub
            aplikacji podmiotów trzecich. Jeśli klikną Państwo w jeden z takich
            odnośników, prosimy pamiętać, że każda ze stron, na którą zostaną
            Państwo przekierowani posiada własną politykę prywatności. Nie mamy
            wpływu na takie strony internetowe/aplikacje i nie jesteśmy
            odpowiedzialni za ich polityki. Zachęcamy Państwa do zapoznania się
            z informacją o polityce prywatności każdej strony internetowej,
            którą odwiedzają Państwo opuszczając nasz Serwis.
          </p>
          <h5>15. Kontakt</h5>
          <p>
            W celu uzyskania dodatkowych informacji lub realizacji swoich praw,
            prosimy sprawdzić swoje ustawienia konta Obligain albo skontaktować
            się z naszym Działem Prywatności bądź kontaktując się z nami za
            pomocą maila kontakt@obligain.com. Jeżeli chcą Państwo skontaktować
            się z nami w sprawach związanych z przetwarzaniem Państwa danych
            osobowych mogą Państwo:
          </p>
          <p>
            <ul className="ulType">
              <li>wysłać list na nasz adres;</li>
            </ul>
          </p>
          <p>Reliance Polska, al. Pokoju 1, 31-548 Kraków.</p>
          <h5>16. Organy Nadzorcze</h5>
          <p>
            Naszym Wiodącym Organem Nadzorczym jest Prezes Urzędu Ochrony Danych
            Osobowych urzędujący w Warszawie przy ul. Stawki 2. Kontakt:
            kancelaria@uodo.gov.pl.{" "}
          </p>
        </div>
      </div>
    );
  }
}
