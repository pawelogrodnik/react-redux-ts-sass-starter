import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { RegularField } from './Fields/_Fields';
import { Validators as V } from './Fields/Validators';

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
                <Field type="text" wrapperClassName={'half'} name="city" component={RegularField} label={'Kraj'} validate={[V.required]} />
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
