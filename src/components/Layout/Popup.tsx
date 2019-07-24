import * as React from 'react';
import * as ErrorActions from './../../Store/Actions/ErrorActions';
import * as UserModule from 'Modules/UserModule';
import * as ViewManagementModule from '../../Store/../Modules/ViewManagementModule'
import { ErrorStore } from './../../Store/Actions/Models/ErrorActionsModel';
import { connect } from 'react-redux';
import { RootState } from 'src/Store/Reducers/_RootReducer';

type DispatchedP = {
    hidePopup: () => void;
};

type ConnectedP = {
    viewManagement: ViewManagementModule.Types.ViewManagementStore
};

class Popup extends React.Component<DispatchedP & ConnectedP, {}> {
    constructor(props) {
        super(props);
    }

    public handleChildClick(e: any) {
        e.stopPropagation();
    }
    
    public generateContent() {
        switch (this.props.viewManagement.typePopup) {
            case 'registerSuccess': {
                return (
                    <>
                        <h2>Dziękujemy za utworzenie konta!</h2>
                        <p>Prosimy oczekiwać na wiadomość e-mail potwierdzającą rejestrację celem dokończenia procesu.</p>
                        <i className="far fa-check-circle" />
                    </>
                )
            }
            case 'editUserSuccess': {
                return (
                    <>
                        <h2>Edycja zakończona pomyślnie!</h2>
                        <i className="far fa-check-circle" />
                    </>
                )
            }
            case 'confirmUserSuccess': {
                return (
                    <>
                        <h2>Twoje konto zostało pomyślnie potwierdzone!</h2>
                        <i className="far fa-check-circle" />
                    </>
                )
            }
            case 'confirmUserCodeUsed': {
                return (
                    <>
                        <h2>Twój kod potwierdzenia został już użyty!</h2>
                        <i className="fas fa-exclamation-triangle"/>
                    </>
                )
            }
            default: {
                return null;
            }
        }
    }
    public render() {

        if (this.props.viewManagement.popupVisible) {
            return (
                <div className="popup" onClick={() => this.props.hidePopup()}>
                    <div className="popup__inner" onClick={this.handleChildClick}>
                        <i className="fas fa-times" onClick={() => this.props.hidePopup()} />
                        <div className="popup__message">
                            {this.generateContent()}
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }

    }
}

function mapStateToProps(state: RootState): ConnectedP {
    return {
        viewManagement: state.viewManagementStore
    };
}
const mapDispachToProps: DispatchedP = {
    hidePopup: () => ViewManagementModule.Actions.hidePopup()
}
export default connect(
    mapStateToProps,
    mapDispachToProps
)(Popup)
