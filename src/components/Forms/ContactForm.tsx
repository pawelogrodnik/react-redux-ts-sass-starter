import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { RegularField } from './Fields/_Fields';
import { Validators as V } from './Fields/Validators';

const ContactForm = (props: InjectedFormProps) => {
    const { handleSubmit, submitting } = props;
    return (
        <div className="form form--contact">
            <h2>Umów spotkanie</h2>
            <form className="form" onSubmit={handleSubmit}>
                <Field type="text" name="firstName" component={RegularField} label={'Imię'} validate={[V.required]} />
                <Field type="text" name="lastName" component={RegularField} label={'Nazwisko'} validate={[V.required]} />
                <Field type="text" name="city" component={RegularField} label={'Miejscowość'} validate={[V.required]} />
                <Field type="email" name="mail" component={RegularField} label={'E-mail'} validate={[V.required]} />
                <Field type="text" name="topic" component={RegularField} label={'Temat'} validate={[V.required]} />
                <Field type="textarea" name="content" component={RegularField} label={'Treść wiadomości'} validate={[V.required]} />
                <Field type="checkbox" name="checkbox1" component={RegularField} label={'Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą o ochronie danych osobowych w związku z wysłaniem zapytania przez formularz kontaktowy. Podanie danych jest dobrowolne, ale niezbędne do przetworzenia zapytania. Zostałem poinformowany, że przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawiania, żądania zaprzestania ich przetwarzania. Administratorem danych osobowych jest Reliance Polska z siedzibą w Krakowie przy al. Pokoju 1.'} validate={[V.required]} />
                <Field type="checkbox" name="checkbox2" component={RegularField} label={'Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą o ochronie danych osobowych w celu wysyłania informacji handlowej. Podanie danych osobowych jest dobrowolne. Zostałem poinformowany, że przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawienia, żądania zaprzestania ich przetwarzania. Administratorem danych osobowych jest Reliance Polska z siedzibą w Krakowie przy al. Pokoju 1.'} validate={[V.required]} />
                <div className="form--login__buttons">
                    <button disabled={submitting} className="btn btn--main btn--big" type="submit">
                        Wyślij
                    </button>
                </div>
            </form>
        </div>
    );
};

export default reduxForm({
    form: 'contactForm'
})(ContactForm);
