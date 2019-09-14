import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { RegularField, SelectField } from './Fields/_Fields';
import { Validators as V } from './Fields/Validators';
import { Link } from 'react-router-dom';

const SalesmanDataForm = (props: InjectedFormProps) => {
    const { handleSubmit, submitting } = props;
    const legalFormOptions = [
        {label: 'Prywatna', value: 'private'},
        {label: 'Firma', value: 'company'}
    ]

    return (
        <div className="form form--salesman">
            <form className="form" onSubmit={handleSubmit}>
                <Field type="text" name="companyName" component={RegularField} label={'Nazwa firmy'} validate={[V.salesmanValidate]} />
                <Field type="text" name="accountNumber" component={RegularField} label={'Numer konta bankowego'} validate={[V.required]} />
                <Field type="text" name="nip" component={RegularField} label={'NIP'} validate={[V.salesmanValidate]} />
                <Field wrapperClassName={'half'} name="legalForm" options={legalFormOptions} component={SelectField} label={'Forma prawna'} placeholder="Wybierz formę" validate={[V.required]} />
                <Field type="checkbox" name="consent" component={RegularField} label={'Wyrażam zgodę na używanie przez Reliance Polska sp. z o.o. środków komunikacji elektronicznej oraz telekomunikacyjnych urządzeń końcowych w celu przesyłania mi informacji handlowych oraz prowadzenia marketingu (np. newsletter, wiadomości SMS) przez Reliance Polska sp. z o.o., podmioty powiązane i partnerów biznesowych. Moja zgoda obejmuje numery telefonów i adresy e-mail wykorzystywane podczas korzystania z usług Reliance Polska Sp. z o.o. Wyrażoną zgodę można wycofać lub ograniczyć w dowolnej chwili za pomocą odpowiednich ustawień konta lub zgłaszając nam takie żądanie.'} validate={[V.required]} />
                <button disabled={submitting} className="btn btn--main btn--big" type="submit">
                    Wyślij
                </button>
            </form>
        </div>
    );
};

export default reduxForm({
    form: 'salesmanDataForm'
})(SalesmanDataForm);
