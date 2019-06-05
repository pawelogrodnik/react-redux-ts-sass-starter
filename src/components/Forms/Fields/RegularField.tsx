import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';

type Props = {
    label: string;
    options: any;
    type: string;
    disabled: boolean;
    placeholder: string;
    wrapperClassName?:string;
};

class RenderField extends React.PureComponent<WrappedFieldProps & Props> {
    public render() {
        const { input, meta, label, type, disabled, placeholder, wrapperClassName } = this.props;
        let formClasses: string = 'form_field';
        formClasses += meta.error && meta.touched ? ' form_field--has_error' : '';
        formClasses += wrapperClassName ? ` ${wrapperClassName} ` : '';
        formClasses += disabled ? ' form_field--disabled' : '';

        return (
            <div className={formClasses}>
                {label && <label htmlFor={input.name}>{label}</label>}
                <div>
                    <input
                        disabled={disabled || false}
                        {...input}
                        value={input.value}
                        placeholder={placeholder ? placeholder : label}
                        type={type}
                    />
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

export default RenderField;
