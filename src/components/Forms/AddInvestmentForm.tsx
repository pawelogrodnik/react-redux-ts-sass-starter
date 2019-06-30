import * as React from 'react';
import { Field, reduxForm, InjectedFormProps, formValueSelector } from 'redux-form';
import { RegularField, DatePicker, SelectField, FileField } from './Fields/_Fields';
import * as InvestmentModule from 'Modules/InvestmentModule';
import { Validators as V } from './Fields/Validators';
import * as Dictionary from 'Models/Dictionary';
import { connect } from 'react-redux';

type P = {
    investmentType: InvestmentModule.EnumTypes.InvestmentType;
    edit?: boolean;
};
const { flat, parcel, hotel, vehicle, gold, token, whisky, diamonds, dorm } = InvestmentModule.EnumTypes.InvestmentType;
const AddInvestmentForm = (props: InjectedFormProps & P) => {
    const { handleSubmit, submitting, investmentType, initialValues } = props;
    return (
        <div className="form form--addInvestment">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form--addInvestment_l">
                    <h3>Dane sprzedawcy</h3>
                    <div className="form--addInvestment__content">
                        <Field type="text" wrapperClassName={'full'} name="seller.companyName" component={RegularField} label={'Nazwa sprzedawcy'} placeholder={'Wpisz nazwę sprzedawcy'} validate={[V.required]} />
                        <Field type="text" wrapperClassName={'half'} name="seller.NIP" component={RegularField} label={'NIP'} placeholder={'NIP'} validate={[V.required]} />
                        <Field type="text" wrapperClassName={'half'} name="seller.REGON" component={RegularField} label={'REGON'} placeholder={'REGON'} validate={[V.required]} />
                        <Field type="text" wrapperClassName={'half'} name="seller.address.street" component={RegularField} label={'Ulica'} placeholder={'Ulica'} validate={[V.required]} />
                        <Field type="text" wrapperClassName={'quarter'} name="seller.address.houseNumber" component={RegularField} label={'Numer domu'} placeholder={'Numer domu'} validate={[V.required]} />
                        <Field type="text" wrapperClassName={'quarter'} name="seller.address.flatNumber" component={RegularField} label={'Numer mieszkania'} placeholder={'Numer mieszkania'} />
                        <Field type="text" wrapperClassName={'half'} name="seller.address.postCode" component={RegularField} label={'Kod pocztowy'} placeholder={'Kod pocztowy'} validate={[V.required]} />
                        <Field type="text" wrapperClassName={'half'} name="seller.address.city" component={RegularField} label={'Miasto'} placeholder={'Miasto'} validate={[V.required]} />
                    </div>
                </div>
                <div className="form--addInvestment_r">
                    <h3>Podstawowe parametry inwestycji</h3>
                    <div className="form--addInvestment__content">
                        {/* <Field wrapperClassName={'full'} name="basicParams.title" component={RegularField} label={'Tytuł'} placeholder={'Tytuł'} validate={[V.required]} />
                        <Field wrapperClassName={'full'} name="basicParams.description" component={RegularField} label={'Opis'} placeholder={'Opis'} validate={[V.required]} /> */}
                        <Field wrapperClassName={'full'} name="basicParams.startDate" component={DatePicker} label={'Data początkowa'} placeholder={'Wybierz datę początkową'} validate={[V.required]} />
                        <Field type="text" wrapperClassName={'full'} name="basicParams.duration" component={RegularField} label={'Czas trwania inwestycji (miesiące)'} placeholder={'Czas trwania inwestycji (miesiące)'} validate={[V.required]} />
                        <Field type="text" wrapperClassName={'half'} name="basicParams.interest" component={RegularField} label={'Oprocentowanie'} placeholder={'Oprocentowanie'} validate={[V.required]} />
                        <Field wrapperClassName={'half'} name="basicParams.risk" options={Dictionary.riskOptions} component={SelectField} label={'Wybierz stopień ryzyka'} placeholder={'Wybierz stopień ryzyka'} validate={[V.required]} />
                        <Field wrapperClassName={'full'} name="type" options={Dictionary.getInvestmentOptions} component={SelectField} label={'Typ inwestycji'} placeholder={'Wybierz typ inwestycji'} validate={[V.required]} />
                    </div>
                </div>
                {investmentType && (
                    <div className="form--addInvestment_bottom">
                        <div className="form--addInvestment_l">
                            <h3>Informacje o inwestycji</h3>
                            <div className="form--addInvestment__content">
                                <Field type="text" wrapperClassName={'full'} name="basicParams.title" component={RegularField} label={'Nazwa inwestycji'} placeholder={'Nazwa inwestycji'} validate={[V.required]} />
                                {!initialValues && (
                                    <>
                                    <Field wrapperClassName={'full'} name="detailedParams.images.background" component={FileField} label={'Zdjęcie w tle'} />
                                    <Field wrapperClassName={'full'} name="detailedParams.images.thumbnail" component={FileField} label={'Zdjęcie miniaturka'} />
                                    <Field wrapperClassName={'full'} name="detailedParams.images.other" multiple component={FileField} label={'Zdjęcia produktu'} />
                                    <Field wrapperClassName={'full'} name="detailedParams.attachments" multiple component={FileField} label={'Załączniki'} />
                                    </>
                                )}
                                <Field type="textarea" wrapperClassName={'full'} name="basicParams.description" component={RegularField} rows="5" label={'Opis inwestycji'} placeholder={'Opis inwestycji'} validate={[V.required]} />
                                <Field type="text" wrapperClassName={'half'} name="detailedParams.address.street" component={RegularField} label={'Ulica'} placeholder={'Ulica'} validate={[V.required]} />
                                <Field type="text" wrapperClassName={'quarter'} name="detailedParams.address.houseNumber" component={RegularField} label={'Numer domu'} placeholder={'Numer domu'} validate={[V.required]} />
                                <Field type="text" wrapperClassName={'quarter'} name="detailedParams.address.flatNumber" component={RegularField} label={'Numer mieszkania'} placeholder={'Numer mieszkania'} />
                                <Field type="text" wrapperClassName={'half'} name="detailedParams.address.postCode" component={RegularField} label={'Kod pocztowy'} placeholder={'Kod pocztowy'} validate={[V.required]} />
                                <Field type="text" wrapperClassName={'half'} name="detailedParams.address.city" component={RegularField} label={'Miasto'} placeholder={'Miasto'} validate={[V.required]} />
                            </div>
                        </div>
                        <div className="form--addInvestment_r">
                            <div className="form--addInvestment__content form--addInvestment__content--blankTitle">
                                {(investmentType === parcel || investmentType === flat || investmentType === hotel || investmentType === dorm) && <Field type="text" name="detailedParams.usableArea" component={RegularField} label={'Powierzchnia [m2]'} placeholder={'Powierzchnia [m2]'} validate={[V.required]} />}
                                {investmentType === parcel && <Field type="text" name="detailedParams.pum" component={RegularField} label={'PUM [m2]'} placeholder={'PUM [m2]'} validate={[V.required]} />}
                                {investmentType === flat && <Field type="text" name="detailedParams.floorNumber" component={RegularField} label={'Piętro'} placeholder={'Piętro'} validate={[V.required]} />}
                                <Field type="text" name="detailedParams.priceService" component={RegularField} label={'Cena w serwisie'} placeholder={'Cena w serwisie'} validate={[V.required]} />
                                {(investmentType === flat || investmentType === parcel || investmentType === hotel || investmentType === dorm || investmentType === vehicle) && <Field type="text" name="detailedParams.priceMarket" component={RegularField} label={'Cena rynkowa'} placeholder={'Cena rynkowa'} validate={[V.required]} />}
                                {investmentType === parcel && <Field type="text" name="detailedParams.roi" component={RegularField} label={'ROI'} placeholder={'ROI'} validate={[V.required]} />}
                                {investmentType === hotel && <Field type="text" name="detailedParams.roomsCount" component={RegularField} label={'Ilość pokoi'} placeholder={'Ilość pokoi'} validate={[V.required]} />}
                                {investmentType === hotel && <Field type="text" name="detailedParams.income" component={RegularField} label={'Przychody'} placeholder={'Przychody'} validate={[V.required]} />}
                                {investmentType === gold && (
                                    <>
                                    <Field type="text" name="detailedParams.mass" component={RegularField} label={'Masa'} placeholder={'Masa'} validate={[V.required]} />
                                    <Field type="text" name="detailedParams.goldtrial" component={RegularField} label={'Próba'} placeholder={'Próba'} validate={[V.required]} />
                                    </>
                                )}
                                {investmentType === whisky && (
                                    <>
                                    <Field type="text" name="detailedParams.distillery" component={RegularField} label={'Destylarnia'} placeholder={'Destylarnia'} validate={[V.required]} />
                                    <Field type="text" name="detailedParams.version" component={RegularField} label={'Wersja'} placeholder={'Wersja'} validate={[V.required]} />
                                    <Field type="text" name="detailedParams.bottling" component={RegularField} label={'Butelkowanie'} placeholder={'Butelkowanie'} validate={[V.required]} />
                                    <Field type="text" name="detailedParams.volume" component={RegularField} label={'Objętość'} placeholder={'Objętość'} validate={[V.required]} />
                                    <Field type="text" name="detailedParams.age" component={RegularField} label={'Wiek'} placeholder={'Wiek'} validate={[V.required]} />
                                    <Field type="text" name="detailedParams.origin" component={RegularField} label={'Pochodzenie'} placeholder={'Pochodzenie'} validate={[V.required]} />
                                    </>
                                )}
                                {investmentType === diamonds && (
                                    <>
                                    <Field type="text" name="detailedParams.mass" component={RegularField} label={'Masa'} placeholder={'Masa'} validate={[V.required]} />
                                    <Field type="text" name="detailedParams.cut" component={RegularField} label={'Szlif'} placeholder={'Szlif'} validate={[V.required]} />
                                    <Field type="text" name="detailedParams.color" component={RegularField} label={'Barwa'} placeholder={'Barwa'} validate={[V.required]} />
                                    <Field type="text" name="detailedParams.purity" component={RegularField} label={'Czystość'} placeholder={'Czystość'} validate={[V.required]} />
                                    </>
                                )}
                                {investmentType === token && (
                                    <>
                                    <Field type="text" name="detailedParams.minInsert" component={RegularField} label={'Minimalny wkład'} placeholder={'Minimalny wkład'} validate={[V.required]} />
                                    <Field type="text" name="detailedParams.currentCourse" component={RegularField} label={'Aktualny kurs'} placeholder={'Aktualny kurs'} validate={[V.required]} />
                                    <Field type="text" name="detailedParams.ipo" component={RegularField} label={'Planowany debiut (IPO)'} placeholder={'Planowany debiut (IPO)'} validate={[V.required]} />
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="form--addInvestment--actions">
                            <div className="form--login__buttons">
                                <button disabled={submitting} className="btn btn--main btn--big" type="submit">
                                    {initialValues ? 'Zapisz zmiany' : 'Dodaj nową inwestycję'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

const addInvestment = reduxForm({
    form: 'addInvestmentForm',
    keepDirtyOnReinitialize: true,
    enableReinitialize: true
})(AddInvestmentForm);

const selector = formValueSelector('addInvestmentForm');

export default connect((state: any) => {
    const investmentType = selector(state, 'type');
    return {
        investmentType
    };
})(addInvestment);
