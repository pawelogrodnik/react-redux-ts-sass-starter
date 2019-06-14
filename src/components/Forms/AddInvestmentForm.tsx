import * as React from 'react';
import { Field, reduxForm, InjectedFormProps, formValueSelector } from 'redux-form';
import { RegularField, DatePicker, SelectField, FileField } from './Fields/_Fields';
import { Validators as V } from './Fields/Validators';
import * as Dictionary from 'Models/Dictionary';
import { connect } from 'react-redux';

type P = {
    investmentType: any
}
const AddInvestmentForm = (props: InjectedFormProps & P) => {
    const { handleSubmit, submitting, investmentType } = props;
    return (
        <div className="form form--addInvestment">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form--addInvestment_l">
                    <h3>Dane sprzedawcy</h3>
                    <div className="form--addInvestment__content">
                        <Field wrapperClassName={'full'} name="companyName" component={RegularField} label={'Nazwa sprzedawcy'} placeholder={'Wpisz nazwę sprzedawcy'} validate={[V.required]} />
                        <Field wrapperClassName={'half'} name="NIP" component={RegularField} label={'NIP'} placeholder={'NIP'} validate={[V.required]} />
                        <Field wrapperClassName={'half'} name="REGON" component={RegularField} label={'REGON'} placeholder={'REGON'} validate={[V.required]} />
                        <Field wrapperClassName={'half'} name="address" component={RegularField} label={'Ulica'} placeholder={'Ulica'} validate={[V.required]} />
                        <Field wrapperClassName={'quarter'} name="houseNo" component={RegularField} label={'Number domu'} placeholder={'Number domu'} validate={[V.required]} />
                        <Field wrapperClassName={'quarter'} name="flatNo" component={RegularField} label={'Number mieszkania'} placeholder={'Number mieszkania'} validate={[V.required]} />
                        <Field wrapperClassName={'half'} name="postCode" component={RegularField} label={'Kod pocztowy'} placeholder={'Kod pocztowy'} validate={[V.required]} />
                        <Field wrapperClassName={'half'} name="city" component={RegularField} label={'Miasto'} placeholder={'Miasto'} validate={[V.required]} />
                    </div>
                </div>
                <div className="form--addInvestment_r">
                    <h3>Podstawowe parametry inwestycji</h3>
                    <div className="form--addInvestment__content">
                        <Field wrapperClassName={'full'} name="startDate" component={DatePicker} label={'Data początkowa'} placeholder={'Wybierz datę początkową'} validate={[V.required]} />
                        <Field wrapperClassName={'full'} name="duration" options={Dictionary.duration} component={SelectField} label={'Wybierz czas trwania inwestycji'} placeholder={'Wybierz czas trwania inwestycji'} validate={[V.required]} />
                        <Field wrapperClassName={'half'} name="percentage" options={Dictionary.oprocentowanie} component={SelectField} label={'Wybierz oprocentowanie'} placeholder={'Wybierz oprocentowanie'} validate={[V.required]} />
                        <Field wrapperClassName={'half'} name="risk" options={Dictionary.stopienRyzyka} component={SelectField} label={'Wybierz stopień ryzyka'} placeholder={'Wybierz stopień ryzyka'} validate={[V.required]} />
                        <Field wrapperClassName={'full'} name="type" options={Dictionary.typInwestycji} component={SelectField} label={'Wybierz typ inwestycji'} placeholder={'Wybierz typ inwestycji'} validate={[V.required]} />
                    </div>
                </div>
                {(investmentType === "DZIALKA" || investmentType === 'FLAT') &&  (
                    <div className="form--addInvestment_bottom">
                        <div className="form--addInvestment_l">
                            <h3>Informacje o inwestycji</h3>
                            <div className="form--addInvestment__content">
                                <Field wrapperClassName={'full'} name="investmentName" component={RegularField} label={'Nazwa inwestycji'} placeholder={'Wpisz nazwę sprzedawcy'} validate={[V.required]} />
                                <Field wrapperClassName={'full'} name="investmentImages" component={FileField} label={'Zdjęcia inwestycji'} placeholder={'Wpisz nazwę sprzedawcy'} validate={[V.required]} />
                                <Field type='textarea' wrapperClassName={'full'} name="companyName" component={RegularField} label={'Opis inwestycji'} placeholder={'Wpisz nazwę sprzedawcy'} validate={[V.required]} />
                                <Field wrapperClassName={'half'} name="investmentStreetName" component={RegularField} label={'Ulica'} placeholder={'Wpisz nazwę sprzedawcy'} validate={[V.required]} />
                                <Field wrapperClassName={'quarter'} name="investmentHouseNo" component={RegularField} label={'Numer domu'} placeholder={'Wpisz nazwę sprzedawcy'} validate={[V.required]} />
                                <Field wrapperClassName={'quarter'} name="investmentFlatNo" component={RegularField} label={'Numer mieszkania'} placeholder={'Wpisz nazwę sprzedawcy'} validate={[V.required]} />
                                <Field wrapperClassName={'half'} name="investmentPostCode" component={RegularField} label={'Kod pocztowy'} placeholder={'Wpisz nazwę sprzedawcy'} validate={[V.required]} />
                                <Field wrapperClassName={'half'} name="investmentCity" component={RegularField} label={'Miasto'} placeholder={'Wpisz nazwę sprzedawcy'} validate={[V.required]} />
                            </div>
                        </div>
                        <div className="form--addInvestment_r">
                            <div className="form--addInvestment__content form--addInvestment__content--blankTitle">
                                <Field name="investmentSqm" component={RegularField} label={'Powierzchnia [m2]'} placeholder={'Wpisz nazwę sprzedawcy'} validate={[V.required]} />
                                {investmentType === "DZIALKA" && <Field name="pum" component={RegularField} label={'PUM [m2]'} placeholder={'Wpisz nazwę sprzedawcy'} validate={[V.required]} />}
                                {investmentType === "MIESZKANIE" && <Field name="floorNo" component={RegularField} label={'Piętro'} placeholder={'Wpisz nazwę sprzedawcy'} validate={[V.required]} />}
                                <Field name="appPrice" component={RegularField} label={'Cena w serwisie'} placeholder={'Wpisz nazwę sprzedawcy'} validate={[V.required]} />
                                <Field name="rynekPrice" component={RegularField} label={'Cena rynkpwa'} placeholder={'Wpisz nazwę sprzedawcy'} validate={[V.required]} />
                                {investmentType === "DZIALKA" && <Field name="roi" component={RegularField} label={'ROI'} placeholder={'Wpisz nazwę sprzedawcy'} validate={[V.required]} />}
                            </div>
                        </div>
                    </div>
                )}
                <div className="form--addInvestment--actions">
                    <div className="form--login__buttons">
                        <button disabled={submitting} className="btn btn--main btn--big" type="submit">
                            Dodaj nową inwestycję
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

const addInvestment = reduxForm({
    form: 'addInvestmentForm'
})(AddInvestmentForm);

const selector = formValueSelector('addInvestmentForm');

export default connect((state: any) => {
    const investmentType = selector(state, 'type');
    return {
        investmentType
    }
})(addInvestment);