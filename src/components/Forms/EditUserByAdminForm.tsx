import * as React from 'react';
import { Field, reduxForm, InjectedFormProps, formValueSelector } from 'redux-form';
import { RegularField , SelectField, FileField} from './Fields/_Fields';
import { Validators as V } from './Fields/Validators';

const EditUserByAdminForm = (props: InjectedFormProps ) => {
    const { handleSubmit, submitting} = props;
    const options = [
        {label: 'Aktywne', value: true},
        {label: 'Nieaktywne', value: false}
    ]
    return (
        <div className="form form--editUser">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form--editUser_l">
                    <Field type="text" name="firstname" component={RegularField} label={'Imię'} />
                    <Field type="text" name="lastname" component={RegularField} label={'Nazwisko'} />
                    <Field type="text" name="phone" component={RegularField} label={'Telefon'} />
                    <Field type="text" name="street" component={RegularField} label={'Ulica'} />
                </div>
                <div className="form--editUser_r">
                    <Field type="text" wrapperClassName={'half'} name="houseNumber" component={RegularField} label={'Numer domu'} />
                    <Field type="text" wrapperClassName={'half'} name="flatNumber" component={RegularField} label={'Numer mieszkania'} />
                    <Field type="text" wrapperClassName={'half'} name="postCode" component={RegularField} label={'Kod pocztowy'} />
                    <Field type="text" wrapperClassName={'half'} name="city" component={RegularField} label={'Kraj'} />
                <Field name="active" options={options} component={SelectField} label={'Status konta'} />
                    <Field type="text" name="country" component={RegularField} label={'Miasto'} />
                </div>
                <Field type="password" wrapperClassName={'half'} name="password" component={RegularField} label={'Hasło'} />
                <Field type="password" wrapperClassName={'half'} name="confirmation" component={RegularField} label={'Powtórz hasło'} />
                <Field type="select" wrapperClassName={'full'} name="avatar.content" component={FileField} label={'Zdjęcie w tle'} />
                <div className="form--registration__buttons">
                    <button disabled={submitting} className="btn btn--main btn--big" type="submit">
                        Edytuj dane
                    </button>
                </div>
            </form>
        </div>
    );
};

export default reduxForm({
    form: 'editUserByAdminForm',
})(EditUserByAdminForm);
