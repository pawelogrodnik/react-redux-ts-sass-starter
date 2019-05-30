import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';
import RegularField from './Fields/RegularField';
import { Validators } from './Fields/Validators';


type Props = {
    onClose: Function;
    onDelete: () => void;
    currentAddress: string;
};
const SearchInvestmentsForm = (props: InjectedFormProps  & Props) => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <div className="form form--searchInvestments">
            <form className="form" onSubmit={handleSubmit}>
                <Field name="percentage" component={RegularField} min={0} max={2000} type="range" label={'Oprocentowanie'} validate={[Validators.required]} />
                <Field name="duration" component={RegularField} min={0} max={2000} type="range" label={'Czas trwania'} validate={[Validators.required]} />
                <Field name="risk" component={RegularField} min={0} max={2000} type="range" label={'Skala ryzyka'} validate={[Validators.required]} />
                <div className="form--searchInvestments__buttons">
                    <button disabled={submitting || pristine} className="btn btn--blue" type="submit">
                        Wyszukaj
                    </button>
                </div>
            </form>
        </div>
    );
};

function mapStateToProps(state: any) {
    return {
        ...state
    };
}

export default connect(mapStateToProps)(
    reduxForm({
        form: 'searchInvestmentsForm'
    })(SearchInvestmentsForm))
