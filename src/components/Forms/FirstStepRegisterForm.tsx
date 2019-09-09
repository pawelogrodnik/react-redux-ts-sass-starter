import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { RegularField, FileField } from './Fields/_Fields';
import { Validators as V } from './Fields/Validators';

type Props = {
    isLoadedImage: boolean;
}
const FirstStepRegisterForm = (props: InjectedFormProps & Props) => {
    const { handleSubmit, isLoadedImage } = props;
    return (
        <div className="form form--register">
            <form className="form" onSubmit={handleSubmit}>
                <Field type="text" name="firstname" component={RegularField} label={'Imię'} validate={[V.required]} />
                <Field type="text" name="lastname" component={RegularField} label={'Nazwisko'} validate={[V.required]} />
                <Field type="email" name="username" component={RegularField} label={'E-mail'} validate={[V.required]} />
                <Field type="password" name="password" component={RegularField} label={'Hasło'} validate={[V.required]} />
                <Field type="password" name="confirmation" component={RegularField} label={'Powtórz hasło'} validate={[V.required]} />
                {!isLoadedImage ?  <Field name="picture.content" component={FileField} label={'Zdjęcie profilowe'} /> : null}
                <div className="form--registration__buttons">
                    <button className="btn btn--main btn--center" type="submit">
                        Kontynuuj
                    </button>
                </div> 
            </form>
        </div>
    );
};

export default reduxForm<any, Props>({
    form: 'registrationForm',
    destroyOnUnmount: false,
    enableReinitialize: true
})(FirstStepRegisterForm);
