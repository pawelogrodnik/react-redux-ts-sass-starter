import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';

type Props = {
    label: string;
    type: string;
    max?: number;
    min?: number;
    disabled: boolean;
    placeholder: string;
    wrapperClassName?: string;
    multiple?: boolean
};
type State = {
    file: File,
    base64: any,
    fileArr: Array<File>
    base64Arr: Array<any>
}
class FieldFileInput extends React.PureComponent<WrappedFieldProps & Props, State> {
    private fileInput: any;
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            file: null,
            base64: null,
            fileArr: [],
            base64Arr: []
        }
    }

    public onChange(e) {
        const { onChange } = this.props.input;
        if (this.props.multiple) {
            const files = e.target.files;
            if (files.length > 0) {
                for (let idx = 0; idx < files.length; idx++) {
                    const reader = new FileReader();
                    console.log(files[idx]);
                    reader.readAsDataURL(files[idx]);
                    reader.onloadend = () => {
                        const fileArrClone = [...this.state.fileArr, files[idx]];
                        const base64ArrClone = [...this.state.base64Arr, reader.result];
                        this.setState({
                            fileArr: fileArrClone,
                            base64Arr: base64ArrClone
                        }, () => onChange(this.state.base64Arr))
                    }

                }
            }
        } else {
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
    }

    public render() {
        const { label, meta, wrapperClassName, disabled } = this.props;
        const fileInputKey = this.props.input.name ? this.props.input.name : +new Date();
        let formClasses: string = 'form_field form_field--fileinput';
        formClasses += meta.error && meta.touched ? ' form_field--has_error' : '';
        formClasses += wrapperClassName ? ` ${wrapperClassName} ` : '';
        formClasses += disabled ? ' form_field--disabled' : '';
        return (
            <div className={formClasses}>
                <label htmlFor={this.props.input.name}>
                    <i className="icon--plus_sign" /> <span>{label}</span>
                </label>
                <div>
                    <input
                        id={this.props.input.name}
                        name={this.props.input.name}
                        key={fileInputKey}
                        type="file"
                        accept=".jpg, .png, .jpeg, .pdf"
                        onChange={event => this.onChange(event)}
                        ref={ref => (this.fileInput = ref)}
                        multiple={this.props.multiple}
                    />
                </div>
                {this.props.multiple ? (
                    <div>
                        {this.state.fileArr.map((e, i) => {
                            if (e) {
                                return (<div key={`${e.name}${e.lastModified}`}>{e.name}</div>)
                            }
                        })}
                    </div>
                ) : (
                    <>
                        {
                            this.state.file &&
                                <div>
                                    {this.state.file.name}
                                </div>
                        }
                    </>
                )}

            </div>
        );
    }
}

export default FieldFileInput;
