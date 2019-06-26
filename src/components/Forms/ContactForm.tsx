import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { RegularField } from './Fields/_Fields';
import { Validators as V } from './Fields/Validators';

const ContactForm = (props: InjectedFormProps) => {
    const { handleSubmit, submitting } = props;
    return (
        <div className="form form--contact">
            <form className="form" onSubmit={handleSubmit}>
                <Field type="text" name="firstName" component={RegularField} label={'Imię'} validate={[V.required]} />
                <Field type="text" name="lastName" component={RegularField} label={'Nazwisko'} validate={[V.required]} />
                <Field type="text" name="city" component={RegularField} label={'Miejscowość'} validate={[V.required]} />
                <Field type="email" name="mail" component={RegularField} label={'E-mail'} validate={[V.required]} />
                <Field type="text" name="topic" component={RegularField} label={'Temat'} validate={[V.required]} />
                <Field type="textarea" name="content" component={RegularField} label={'Opis'} validate={[V.required]} />
                <div className="form--login__buttons">
                    <button disabled={submitting} className="btn btn--main btn--big" type="submit">
                        Umów się
                    </button>
                </div>
            </form>
        </div>
    );
};

export default reduxForm({
    form: 'contactForm'
})(ContactForm);
