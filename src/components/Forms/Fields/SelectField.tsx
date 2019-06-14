import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';
import Select from 'react-select';
import { OptionsElement } from 'Models/ViewManagementModel';

type Props = {
    label: string;
    type: string;
    max?: number;
    min?: number;
    disabled: boolean;
    options: Array<OptionsElement>;
    wrapperClassName?: string;
    onUpdate?: Function
};

class SelectField extends React.PureComponent<WrappedFieldProps & Props> {
    public handleChange = (element: any): void => {
        this.props.input.onChange(element.value);
        if (this.props.onUpdate) {
            this.props.onUpdate(element.value)
        }
    }
    public componentDidUpdate(prevProps: WrappedFieldProps & Props) {
        if(prevProps.options.length !== this.props.options.length) {
            this.props.input.onChange(undefined);
        }
    }
    public getValue = (val: any): any => {
        if (this.props.options && this.props.options.length > 0) {
            const idx = this.props.options.findIndex((e) => e.value === val)
            return this.props.options[idx]
        } else {
            return val;
        }
    }
    public render() {
        const { input, meta, label, options, disabled, wrapperClassName } = this.props;
        let formClasses: string = 'form_field form_field--select ';
        formClasses += meta.error && meta.touched ? ' form_field--has_error' : '';
        formClasses += wrapperClassName ? ` ${wrapperClassName} ` : '';
        formClasses += disabled ? ' form_field--disabled' : '';
        const value = this.getValue(input.value);

        return (
            <div className={formClasses}>
                <label htmlFor={input.name}>{label}</label>
                <div>
                    <Select
                        classNamePrefix={'form_control'}
                        value={value}
                        onChange={this.handleChange}
                        onBlur={() => {
                            input.onBlur(input.value);
                        }}
                        options={options}
                        className="form_control"
                        isDisabled={disabled}
                        // defaultMenuIsOpen={true}
                        {...this.props}
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

export default SelectField;
