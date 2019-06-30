import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { RangeField } from './Fields/_Fields';
import { Validators as V } from './Fields/Validators';

const SearchInvestmentsForm = (props: InjectedFormProps) => {
    const { handleSubmit, submitting } = props;
    return (
        <div className="form form--searchInvestments">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form--searchInvestments__range-wrapper">
                    <Field name="interest" component={RangeField} min={1} max={35} label={'Oprocentowanie'} validate={[V.required]} formatLabel={(val) => `${val}%`} />
                    <Field name="duration" component={RangeField} min={1} max={48} label={'Czas trwania (mies)'} validate={[V.required]} />
                    <Field name="risk" component={RangeField} min={1} max={10} label={'Skala ryzyka'} validate={[V.required]} />
                </div>
                <div className="form--searchInvestments__buttons">
                    <button disabled={submitting} className="btn btn--search" type="submit">
                        Wyszukaj
                    </button>
                </div>
            </form>
        </div>
    );
};

export default reduxForm({
    form: 'searchInvestmentsForm'
})(SearchInvestmentsForm);
