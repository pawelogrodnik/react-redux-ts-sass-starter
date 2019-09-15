import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { RegularField } from './Fields/_Fields';
import { Validators as V } from './Fields/Validators';
import { Link } from 'react-router-dom';

type Props = {
    previousPage: () => void;
}

const SecondStepRegisterForm = (props: InjectedFormProps & Props) => {
    const { handleSubmit, previousPage , submitting} = props;
    return (
        <div className="form form--register">
            <form className="form" onSubmit={handleSubmit}>
                <Field type="text" name="phone" component={RegularField} label={'Telefon'} validate={[V.required]} />
                <Field type="text" name="street" component={RegularField} label={'Ulica'} validate={[V.required]} />
                <Field type="text" wrapperClassName={'quarter'} name="houseNumber" component={RegularField} label={'Numer domu'} validate={[V.required]} />
                <Field type="text" wrapperClassName={'quarter'} name="flatNumber" component={RegularField} label={'Numer mieszkania'} />
                <Field type="text" wrapperClassName={'half'} name="postCode" component={RegularField} label={'Kod pocztowy'} validate={[V.required]} />
                <Field type="text" name="country" component={RegularField} label={'Miasto'} validate={[V.required]} />
                <Field type="text" name="salesmanId" component={RegularField} label={'Identyfikator sprzedawcy'} />
                <Field type="text" wrapperClassName={'half'} name="city" component={RegularField} label={'Kraj'} validate={[V.required]} />

                <div className="form--register__footer">
                    <p>Klikając przycisk rejestracja, akceptują Państwo <Link to={'/termsandconditions'}>regulamin</Link></p>
                    <p>Przyjmuję do wiadomości, że OBLIGAIN wykorzystuje moje dane osobowe zgodnie z <Link to={'/privacypolicy'}>Polityką prywatności</Link> oraz Polityką dotyczącą plików cookie i podobnych technologii [LINK DO POLITYKI COOKIES]. Obligain wykorzystuje zautomatyzowane systemy i partnerów do analizowania, w jaki sposób korzystam z usług w celu zapewnienia odpowiedniej funkcjonalności produktu, treści, dostosowanych i opartych na zainteresowaniach reklam, jak również ochrony przed spamem, złośliwym oprogramowaniem i nieuprawnionym korzystaniem z naszych usług.</p>
                    <Field type="checkbox" name="checkbox1" component={RegularField} label={'Wyrażam zgodę na używanie przez Reliance Polska sp. z o.o. środków komunikacji elektronicznej oraz telekomunikacyjnych urządzeń końcowych w celu przesyłania mi informacji handlowych oraz prowadzenia marketingu (np. newsletter, wiadomości SMS) przez Reliance Polska sp. z o.o., podmioty powiązane i partnerów biznesowych. Moja zgoda obejmuje numery telefonów i adresy e-mail wykorzystywane podczas korzystania z usług Reliance Polska Sp. z o.o. Wyrażoną zgodę można wycofać lub ograniczyć w dowolnej chwili za pomocą odpowiednich ustawień konta lub zgłaszając nam takie żądanie.'} validate={[V.required]} />
                    <p>Administratorem Państwa danych osobowych jest Reliance Polska sp. z o.o. z siedzibą w Krakowie (31-548), przy Al. Pokoju 1. Państwa dane osobowe będą przetwarzane w szczególności w celu wykonania umowy zawartej z Państwem, w tym do umożliwienia świadczenia usługi drogą elektroniczną oraz pełnego korzystania z platformy Obligain, w tym dokonywania transakcji na naszej platformie. Gwarantujemy spełnienie wszystkich Państwa praw wynikających z ogólnego rozporządzenia o ochronie danych, tj. prawo dostępu, sprostowania oraz usunięcia Państwa danych, ograniczenia ich przetwarzania, prawo do ich przenoszenia, niepodlegania zautomatyzowanemu podejmowaniu decyzji, w tym profilowaniu, a także prawo wyrażenia sprzeciwu wobec przetwarzania Państwa danych osobowych (więcej na temat przetwarzania Państwa danych osobowych znajdą Państwo <Link to={'/privacypolicy'}>tutaj</Link>). </p>
                </div>
                <div className="form--registration__buttons">
                <button className="btn btn--main btn--left" type="button" onClick={previousPage}>
                        Wróć
                    </button>
                    <button className="btn btn--main btn--right" type="submit" disabled={submitting}>
                        Zarejestruj
                    </button>
                </div>
            </form>
        </div>
    );
};

export default reduxForm<any, Props>({
    form: 'registrationForm',
    destroyOnUnmount: false
})(SecondStepRegisterForm);
