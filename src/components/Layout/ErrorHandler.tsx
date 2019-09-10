import * as React from 'react';
import * as ErrorActions from './../../Store/Actions/ErrorActions';
import * as UserModule from 'Modules/UserModule';
import { ErrorStore } from './../../Store/Actions/Models/ErrorActionsModel';
import { connect } from 'react-redux';
import { MappedErrorResponse } from 'Models/Dictionary';

type DispatchedP = {
    clearErrorStore: () => void;
};

type ConnectedP = {
    errorStore: ErrorStore;
    userStore: UserModule.Types.UserStore;
};
type S = {
    errorMessages: Array<string>
}
class ErrorHandler extends React.Component<DispatchedP & ConnectedP, S> {
    constructor(props) {
        super(props);
        this.state = {
            errorMessages: []
        }
    }
    public mapErrorMessage = (errors: any) => {
        const errorMessages = [];
        const keys = Object.keys(errors);
        for (const key of keys) {
            errorMessages.push(errors[key]);
        }
        return errorMessages.map((errorMessage,i) => 
            (<p className="errorHandler__mapped-response" key={i+errorMessage}>
                {MappedErrorResponse.get(errorMessage).length > 0 ? MappedErrorResponse.get(errorMessage) : errorMessage}
            </p>))
    }
    public render() {
        const { errorStore } = this.props;
        console.log(errorStore)
        const errorText = errorStore.responseError.status === 403 ? (
            <p>Twoja sesja wygasła. Zaloguj się ponownie!</p>
            ) : ( errorStore.responseError.statusText !== 'Unauthorized' ? (
                <p>Wystąpił błąd. Spróbuj ponownie później lub skontaktuj się z nami pod adresem <a href="mailto:">kontakt@obligain.com</a></p>
                ) : (
                <p>Niepoprawne dane logowania</p>
                )
            );
        if (
            errorStore.responseError.status
        ) {
          
            return (
                <div className="errorHandler">
                    <div className="errorHandler__inner">
                        {errorStore.responseError.data && errorStore.responseError.data.errors && errorStore.responseError.status === 400 ? (
                            <div className="errorHandler__message">
                                {/* <pre>{JSON.stringify(errorStore.responseError.data.errors)}</pre> */}
                                {this.mapErrorMessage(errorStore.responseError.data.errors)}
                            </div>
                        ) : (
                            <>
                                {errorText}
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
