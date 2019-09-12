import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { RegularField } from './Fields/_Fields';
import { Validators as V } from './Fields/Validators';

const LoginForm = (props: InjectedFormProps) => {
    const { handleSubmit, submitting } = props;
    return (
        <div className="form form--login">
            <form className="form" onSubmit={handleSubmit}>
                <Field type="email" name="username" component={RegularField} placeholder={'Email'} validate={[V.required]} />
                <Field type="password" name="password" component={RegularField} placeholder={'Hasło'} validate={[V.required]} />
                <div className="form--login__buttons">
                    <button disabled={submitting} className="btn btn--main btn--big" type="submit">
                        Zaloguj się
                    </button>
                </div>
            </form>
        </div>
    );
};

export default reduxForm({
    form: 'loginForm'
})(LoginForm);
