import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';

type Props = {
    label: string;
    type: string;
    max?: number;
    min?: number;
    disabled: boolean;
    placeholder: string;
    wrapperClassName?:string;
};

class FieldFileInput extends React.PureComponent<WrappedFieldProps & Props> {
    private fileInput: any;
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    public onChange(e) {
        const {
            input: { onChange }
        } = this.props;
        onChange(e.target.files[0]);
    }

    public render() {
        const {
            input: { value }
        } = this.props;
        const { input, label, meta, placeholder, wrapperClassName, disabled } = this.props;
        const fileInputKey = input.value ? input.value.name : +new Date();
        let formClasses: string = 'form_field form_Field--fileinput';
        formClasses += meta.error && meta.touched ? ' form_field--has_error' : '';
        formClasses += wrapperClassName ? ` ${wrapperClassName} ` : '';
        formClasses += disabled ? ' form_field--disabled' : '';
        return (
            <div className={formClasses}>
                <label htmlFor={'fileInput'}>
                    <i className="icon--plus_sign" /> <span>{input.value ? input.value.name : placeholder}</span>
                </label>
                <div>
                    <input
                        id={'fileInput'}
                        name={'fileInput'}
                        key={fileInputKey}
                        type="file"
                        accept=".jpg, .png, .jpeg"
                        onChange={event => input.onChange(event.target.files[0])}
                        ref={ref => (this.fileInput = ref)}
                    />
                </div>
            </div>
        );
    }
}

export default FieldFileInput;
