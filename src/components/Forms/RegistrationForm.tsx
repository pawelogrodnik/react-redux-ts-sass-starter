import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { RegularField } from './Fields/_Fields';
import { Validators as V } from './Fields/Validators';

const RegistrationForm = (props: InjectedFormProps) => {
    const { handleSubmit, submitting } = props;
    return (
        <div className="form form--register">
            <form className="form" onSubmit={handleSubmit}>
                <Field type="text" name="firstname" component={RegularField} label={'Imię'} validate={[V.required]} />
                <Field type="text" name="lastname" component={RegularField} label={'Nazwisko'} validate={[V.required]} />
                <Field type="text" name="phone" component={RegularField} label={'Telefon'} validate={[V.required]} />
                <Field type="email" name="username" component={RegularField} label={'E-mail'} validate={[V.required]} />
                <Field type="text" name="street" component={RegularField} label={'Ulica'} validate={[V.required]} />
                <Field type="text" wrapperClassName={'quarter'} name="houseNumber" component={RegularField} label={'Numer domu'} validate={[V.required]} />
                <Field type="text" wrapperClassName={'quarter'} name="flatNumber" component={RegularField} label={'Numer mieszkania'} validate={[V.required]} />
                <Field type="text" wrapperClassName={'quarter'} name="postCode" component={RegularField} label={'Kod pocztowy'} validate={[V.required]} />
                <Field type="text" wrapperClassName={'quarter'} name="city" component={RegularField} label={'Kraj'} validate={[V.required]} />
                <Field type="text" name="country" component={RegularField} label={'Miasto'} validate={[V.required]} />
                <Field type="password" name="password" component={RegularField} label={'Hasło'} validate={[V.required]} />
                <Field type="password" name="confirmation" component={RegularField} label={'Powtórz hasło'} validate={[V.required]} />
                <div className="form--registration__buttons">
                    <button disabled={submitting} className="btn btn--main btn--big" type="submit">
                        Zarejestruj się
                    </button>
                </div>
            </form>
        </div>
    );
};

export default reduxForm({
    form: 'registrationForm'
})(RegistrationForm);
