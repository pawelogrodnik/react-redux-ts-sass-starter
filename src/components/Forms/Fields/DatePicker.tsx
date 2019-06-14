import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import * as moment from 'moment';

type Props = {
    label: string;
    type: string;
    max?: number;
    min?: number;
    disabled: boolean;
    startDateLabel: string;
    endDateLabel: string;
    wrapperClassName?:string;
    placeholder?:string;
};

type State = {
    focusedInput: any;
};

class DatePickerField extends React.PureComponent<WrappedFieldProps & Props, State> {
    constructor(props: WrappedFieldProps & Props) {
        super(props);
        this.state = {
            focusedInput: null
        };
        this.handleFocusChange = this.handleFocusChange.bind(this);
    }
    public handleFocusChange(focusedInput) {
        this.setState({ focusedInput });
    }

    public render() {
        const { input, disabled,wrapperClassName,placeholder } = this.props;
        const {
            meta,
            label
        } = this.props;

        let formClasses: string = 'form_field form_field--select ';
        formClasses += meta.error && meta.touched ? ' form_field--has_error' : '';
        formClasses += wrapperClassName ? ` ${wrapperClassName} ` : '';
        formClasses += disabled ? ' form_field--disabled' : '';

        const { focusedInput } = this.state;
        const value = (input && input.value)?moment(input.value):null;
        return (
            <div className={formClasses}>
                <label htmlFor={input.name}>{label}</label>
                <div className="DatePickerField">
                    <SingleDatePicker
                        id={input.name}
                        focused={focusedInput}
                        onDateChange={date  => { 
                            const tempDate = date.clone();

                            if(value) {
                                tempDate.hour(value.get('hour'));
                                tempDate.minute(value.get('minute')); 
                            }    
                            
                            input.onChange(tempDate.format())
                        }}
                        onFocusChange={(focusedObj)=> {
                            this.handleFocusChange(focusedObj.focused)
                        }}
                        date={value}
                        readOnly={true}
                        noBorder={true}
                        block={false}
                        displayFormat="DD-MM-YYYY"
                        placeholder={placeholder}
                        // isOutsideRange={day => moment().diff(day) < 0}
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

export default DatePickerField;
