import * as React from 'react';
import * as UserModule from 'Modules/UserModule';
import { connect } from 'react-redux';
import OneTimeDataForm from './Forms/OneTimeDataForm';

type DispatchedP = {
    registerUser: (newUser: any) => void;
}

class OneTimeData extends React.Component<DispatchedP, any> {
    constructor(props: DispatchedP) {
        super(props);
    }

    public render() {
        return (
            <div className="oneTimeData">
                <div className="oneTimeData__inner">
                    <OneTimeDataForm onSubmit={async (data) => await (this.props.registerUser(data))}/>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps: DispatchedP = {
    registerUser: (newUser: any) => UserModule.Actions.registerUser(newUser),
};

export default connect(null, mapDispatchToProps)(OneTimeData)