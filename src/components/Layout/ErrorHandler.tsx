import * as React from 'react';
import * as ErrorActions from './../../Store/Actions/ErrorActions';
import * as UserModule from 'Modules/UserModule';
import { ErrorStore } from './../../Store/Actions/Models/ErrorActionsModel';
import { connect } from 'react-redux';

type DispatchedP = {
    clearErrorStore: () => void;
};

type ConnectedP = {
    errorStore: ErrorStore;
    userStore: UserModule.Types.UserStore;
};

class ErrorHandler extends React.Component<DispatchedP & ConnectedP, {}> {
    constructor(props) {
        super(props);
    }

    public render() {
        const { errorStore } = this.props;
        if (
            errorStore.responseError.status
        ) {
            return (
                <div className="errorHandler">
                    <div className="errorHandler__inner">
                        {errorStore.responseError.data && errorStore.responseError.data.errors && errorStore.responseError.status === 400 ? (
                            <div className="errorHandler__message">
                                <pre>{JSON.stringify(errorStore.responseError.data.errors)}</pre>
                            </div>
                        ) : (
                            <>
                                <p>
                                    Wystąpił błąd. Spróbuj ponownie później lub skontaktuj się z nami pod adresem <a href="mailto:">kontakt@obligain.com</a>
                                </p>
                            </>
                        )}
                    </div>
                    <div className="errorHandler__exit" onClick={() => this.props.clearErrorStore()} />
                </div>
            );
        } else {
            return null;
        }
    }
}

function mapStateToProps(state: any): ConnectedP {
    return {
        errorStore: state.errorStore,
        userStore: state.userStore
    };
}
function mapDispachToProps(dispatch: any): DispatchedP {
    return {
        clearErrorStore: () => dispatch(ErrorActions.clearErrorStore())
    };
}
export default connect(
    mapStateToProps,
    mapDispachToProps
)(ErrorHandler)
