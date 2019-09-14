import * as React from 'react';
import * as UserModule from 'Modules/UserModule';
import { connect } from 'react-redux';
import SalesmanDataForm from './Forms/SalesmanDataForm';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import * as H from 'history'

type DispatchedP = {
    registerSalesman: (data: any) => void;
}
type ConnectedP = {
    router: any
}
type PropsLocation = {
    location?: H.Location;
}

class SalesmanData extends React.Component<DispatchedP & ConnectedP & PropsLocation, any> {
    constructor(props: DispatchedP & ConnectedP & PropsLocation) {
        super(props);
    }

    public render() {
        return (
            <div className="salesmanData">
                <div className="salesmanData__inner">
                    <SalesmanDataForm onSubmit={async (data) => {
                        data['salesmanCode'] = this.props.router.location.search.split('=')[1];
                        await this.props.registerSalesman(data)
                    } }/>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps: DispatchedP = {
    registerSalesman: (data:any) => UserModule.Actions.registerSalesman(data)
};

function mapStateToProps(state: RootState): ConnectedP {
    return {
        router: state.router
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SalesmanData)