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
type State = {
    file: File,
    base64: any
}
class FieldFileInput extends React.PureComponent<WrappedFieldProps & Props, State> {
    private fileInput: any;
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            file: null,
            base64: null
        }
    }

    public onChange(e) {
        const {
            input: { onChange }
        } = this.props;
        const reader = new FileReader();
        const temp = e.target.files[0];
        reader.readAsDataURL(temp);
        reader.onloadend = () => {
            this.setState({
                file: temp,
                base64: reader.result
            })
            onChange(reader.result);
        }
  
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
                    <i className="icon--plus_sign" /> <span>{this.state.file ? this.state.file.name : placeholder}</span>
                </label>
                <div>
                    <input
                        id={'fileInput'}
                        name={'fileInput'}
                        key={fileInputKey}
                        type="file"
                        accept=".jpg, .png, .jpeg"
                        onChange={event => this.onChange(event)}
                        ref={ref => (this.fileInput = ref)}
                    />
                </div>
                {(meta.touched &&
                        (meta.error && (
                            <div className="form_field--error_wrapper">
                                <span className="form_field--error">{meta.error}</span>
                            </div>
                        ))) ||
                        (meta.warning && <span>{meta.warning}</span>)}
            </div>
        );
    }
}

export default FieldFileInput;
