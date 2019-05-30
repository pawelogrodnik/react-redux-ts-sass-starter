import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';
import {RangeField} from './Fields/_Fields';
import { Validators as V } from './Fields/Validators';


type Props = {
    onClose: Function;
    onDelete: () => void;
    currentAddress: string;
};
const SearchInvestmentsForm = (props: InjectedFormProps  & Props) => {
    const { handleSubmit, submitting } = props;
    return (
        <div className="form form--searchInvestments">
            <form className="form" onSubmit={handleSubmit}>
            <div className="form--searchInvestments__range-wrapper">
                <Field name="percentage" component={RangeField} min={0} max={10}label={'Oprocentowanie'} validate={[V.required]} formatLabel={(val)=> `${val}%`}/>
                <Field name="duration" component={RangeField} min={6} max={48} label={'Czas trwania'} validate={[V.required]} />
                <Field name="risk" component={RangeField} min={1} max={10} label={'Skala ryzyka'} validate={[V.required]} />
            </div>
                <div className="form--searchInvestments__buttons">
                    <button disabled={submitting} className="btn btn--main" type="submit">
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
