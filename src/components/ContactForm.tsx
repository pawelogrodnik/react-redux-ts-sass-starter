import * as React from 'react';
import { baseURL } from './../Connectors/config';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { RegularField } from './../components/Forms/Fields/_Fields';
import { Validators as V } from './../components/Forms/Fields/Validators';

export type P = {

}

export default class ContactForm extends React.Component<P, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <div className="contactForm">
                <div className="container">
                    <div className="contactBox">
                        <form className="form">
                            {/* <Field type="email" name="username" component={RegularField} placeholder={'Login'} validate={[V.required]} /> */}
                            {/* <Field type="password" name="password" component={RegularField} placeholder={'Hasło'} validate={[V.required]} /> */}
                            <div className="form--login__buttons">
                                <button className="btn btn--main btn--big" type="submit">
                                    Umów się
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}