import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';
import InputRange from 'react-input-range';

type Props = {
    label: string;
    disabled: boolean;
    description: string;
    iconSrc: string;
    min: number;
    max: number;
    icon: string;
    formatLabel?: (val: any) => string
};

type S = {
    riskDescriptionVisible: boolean
};

class RangeField extends React.PureComponent<WrappedFieldProps & Props, S> {

    constructor(props) {
        super(props);
        this.state = {
            riskDescriptionVisible: false,
        };
    }

    public toggleRiskDescription = () => {
        console.log(this.state.riskDescriptionVisible);
        this.setState({
            riskDescriptionVisible: !this.state.riskDescriptionVisible
        })
    };

    public render() {
        const { input, meta, label, disabled, description, icon } = this.props;
        let formClasses: string = 'form_field input--range';

        formClasses += meta.error && meta.touched ? ' form_field--has_error' : '';
        formClasses += disabled ? ' form_field--disabled' : '';

        const value = input.value;
        return (
            <div className={formClasses}>
                <div className="input--range__heading">
                    <div className="input--range__icon">
                        {input.name === 'risk' && <i onClick={this.toggleRiskDescription} className="far fa-question-circle more-info" />}
                    </div>
                    <div className="input--range__name">
                    <i className={icon} />
                        <label htmlFor={input.name}>{label}</label>
                        <p className="input--range__description">{description}</p>
                    </div>
                </div>
                {input.name === 'risk' && <div className={"risk-description" + ' ' + (this.state.riskDescriptionVisible ? 'show' : 'hidden')}>
                    <p>1. Kruszce przechowywane samodzielnie przez Klienta.</p>
                    <p>2. Kamienie szlachetne przechowywane samodzielnie przez Klienta.</p>
                    <p>3. Inwestycje mieszkaniowe zabezpieczone hipotecznie z oddzielną księga wieczystą.</p>
                    <p>4. Numizmatyka przechowywana samodzielnie przez Klienta.</p>
                    <p>5. Inwestycje mieszkaniowe zabezpieczone hipotecznie bez odrębnej księgi wieczystej.</p>
                    <p>6. Pojazdy przechowywane przez Klienta.</p>
                    <p>7. Whisky przechowywana przez Klienta.</p>
                    <p>8. Inwestycje mieszkaniowe bez zabezpieczenia hipotecznego.</p>
                    <p>9. Inwestycje w biznes franczyzowy.</p>
                    <p>10. Tokeny</p>
                    <i className="fas fa-times" onClick={this.toggleRiskDescription} />
                </div>}
                <div>
                    <InputRange
                        minValue={this.props.min}
                        maxValue={this.props.max}
                        formatLabel={this.props.formatLabel}
                        value={value}
                        onChange={newVal => input.onChange(newVal)} />
                    {(meta.touched &&
                        (meta.error && (
                            <div className="form_field--error_wrapper">
                                <span className="form_field--error">{meta.error}</span>
                            </div>
                        ))) ||
                        (meta.warning && <span>{meta.warning}</span>)}
                </div>
            </div>
        );
    }
}

export default RangeField;
