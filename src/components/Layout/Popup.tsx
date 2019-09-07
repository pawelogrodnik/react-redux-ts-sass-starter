import * as React from 'react';
import * as ErrorActions from './../../Store/Actions/ErrorActions';
import * as UserModule from 'Modules/UserModule';
import * as ViewManagementModule from '../../Store/../Modules/ViewManagementModule'
import { ErrorStore } from './../../Store/Actions/Models/ErrorActionsModel';
import { connect } from 'react-redux';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { resetPassword } from 'src/Connectors/UserConnector';
import Login from './Login';
import { history } from 'src/App';

type resetPasswordData = {
    password: string,
    confirmation: string,
    code: string 
}

type DispatchedP = {
    hidePopup: () => void;
    resetPassword: (email: Object) => void;
    resetPasswordContinue: (data: resetPasswordData) => void;
    deleteUser: () => void;
};

type ConnectedP = {
    viewManagement: ViewManagementModule.Types.ViewManagementStore,
    resetPasswordCode: string,
};

type S = {
    email: string,
    password: string,
    confirmation: string,
    alert:string,
    showLoginForm: boolean
}

class Popup extends React.Component<DispatchedP & ConnectedP, S> {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmation: '',
            alert: null,
            showLoginForm: false,
        }
    }

    public handleChildClick(e: any) {
        e.stopPropagation();
    }

    public validateEmail() {
        const {email} = this.state;
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const ifCorrect = regex.test(String(email).toLowerCase());
        if(email == '') {
            this.setState({alert: 'Uzupełnij puste pole!'})
        } else if(!ifCorrect) {
            this.setState({alert: 'Wpisz poprawny adres email!'})
        } else {
            this.setState({alert:null})
            this.props.resetPassword(this.state.email)
        }
    }

    public confirmPassword() {
        const {password,confirmation} = this.state;
        const resetPasswordCode = this.props.resetPasswordCode;
        if(password == '' || confirmation == '') {
           this.setState({alert: 'Uzupełnij puste pole!'})
        } else if(password !== confirmation) {
            this.setState({alert: 'Hasła się niezgodne!'})
        } else {
            this.setState({alert:null})
            const data = {
                password,
                confirmation,
                code: resetPasswordCode
            }
            this.props.resetPasswordContinue(data);
        }
    }

    public closePopup() {
        this.setState({showLoginForm:false});
        this.props.hidePopup();
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
            case 'resetPassword': {
                return (
                    <div className="popup__message--resetPassword">
                        <h2>Wprowadź email konta</h2>
                        <input type="email" placeholder="Wpisz email konta" onChange={e => this.setState({email: e.target.value})} />
                        <p>{this.state.alert}</p>
                        <button className="btn btn--main" onClick={() => this.validateEmail()}>Wyślij</button>
                    </div>
                )
            }
            case 'resetPasswordSendEmail': {
                return (
                    <>
                        <h2>Na Twoje konto mailowe został wysłany link do resetu hasła!</h2>
                        <i className="far fa-check-circle" />
                    </>
                )
            }
            case 'resetPasswordContinue': {
                return (
                    <div className="popup__message--resetPassword">
                        <h2>Wprowadź nowe hasło</h2>
                        <input type="password" placeholder="Wpisz nowe hasło" onChange={e => this.setState({password: e.target.value})} />
                        <input type="password" placeholder="Potwierdź hasło" onChange={e => this.setState({confirmation: e.target.value})} />
                        <p>{this.state.alert}</p>
                        <button className="btn btn--main" onClick={() => {
                            this.confirmPassword();
                            }
                            }>Zmień hasło</button>
                    </div>
                )
            }
            case 'resetPasswordSuccess': {
                return (
                    <>
                        <h2>Hasło do Twojego konta zostało pomyślnie zmienione!</h2>
                        <i className="far fa-check-circle" />
                    </>
                )
            }
            case 'resetPasswordCodeUsed': {
                return (
                    <>
                        <h2>Kod do zresetowania hasła został już użyty!</h2>
                        <i className="fas fa-exclamation-triangle" />
                    </>
                )
            }
            case 'deleteUser': {
                return (
                    <>
                        <h2>Uwaga! Zaakceptowanie tej opcji skutkuje trwałym usunięciem konta w systemie. Czy jesteś pewien?</h2>
                        <i className="fas fa-exclamation-triangle"/>
                        <div className="deleteUser--actions">
                            <button className="btn btn--main btn--red" onClick={() => this.props.deleteUser()}>Tak, usuń</button>
                            <button className="btn btn--main" onClick={() => this.closePopup()}>Anuluj</button>
                        </div>
                    </>
                )
            }
            case 'openPDF': {
                if(this.state.showLoginForm) {
                    return (
                        <Login openPDF={true}/>
                    )
                } else {
                    return (
                        <>
                            <h2>Aby otworzyć plik PDF:</h2>
                            <div className="popup__message--openPDF">
                                <button className="btn btn--main" onClick={() => this.setState({showLoginForm: true})}>Zaloguj się!</button>
                                <button className="btn btn--main" onClick={() => {
                                    history.push('/register')
                                    this.closePopup();
                                }}>Zarejestruj się!</button>
                                 <button className="btn btn--main" >Podaj własne dane!</button>
                            </div>
                        </>
                    )
                }
            }
            default: {
                return null;
            }
        }
    }
    public render() {

        if (this.props.viewManagement.popupVisible) {
            return (
                <div className="popup" onClick={() => this.closePopup()}>
                    <div className="popup__inner" onClick={this.handleChildClick}>
                        <i className="fas fa-times" onClick={() => this.closePopup()} />
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
        viewManagement: state.viewManagementStore,
        resetPasswordCode: state.userStore.resetPasswordCode
    };
}
const mapDispachToProps: DispatchedP = {
    hidePopup: () => ViewManagementModule.Actions.hidePopup(),
    resetPassword: (email: string) => UserModule.Actions.resetPassword(email),
    deleteUser: () => UserModule.Actions.deleteUser(),
    resetPasswordContinue: (data: resetPasswordData) => UserModule.Actions.resetPasswordContinue(data),
}
export default connect(
    mapStateToProps,
    mapDispachToProps
)(Popup)
