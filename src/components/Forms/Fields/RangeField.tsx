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
    formatLabel?: (val: any) => string
};

class RangeField extends React.PureComponent<WrappedFieldProps & Props> {
    public render() {
        const { input, meta, label, disabled, description } = this.props;
        let formClasses: string = 'form_field input--range';

        formClasses += meta.error && meta.touched ? ' form_field--has_error' : '';
        formClasses += disabled ? ' form_field--disabled' : '';

        const value = input.value;
        return (
            <div className={formClasses}>
            <div className="input--range__heading">
                <div className="input--range__icon">
                    <img src={this.props.iconSrc} alt=""/>
                </div>
                <div className="input--range__name">
                    <label htmlFor={input.name}>{label}</label>
                    <p className="input--range__description">{description}</p>
                </div>
            </div>
                
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
