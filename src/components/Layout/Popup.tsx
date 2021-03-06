import * as React from 'react';
import * as ErrorActions from './../../Store/Actions/ErrorActions';
import * as UserModule from 'Modules/UserModule';
import * as InvestmentModule from 'Modules/InvestmentModule';
import * as ViewManagementModule from '../../Store/../Modules/ViewManagementModule'
import { ErrorStore } from './../../Store/Actions/Models/ErrorActionsModel';
import { connect } from 'react-redux';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { resetPassword } from 'src/Connectors/UserConnector';
import Login from './Login';
import { history } from 'src/App';
import { Link } from 'react-router-dom';
import OneTimeData from '../OneTimeData';
import SalesmanData from '../SalesmanData';

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
    deleteUserByAdmin: (id?: number) => void;
    buyInvestment: (id: number) => void;
};

type ConnectedP = {
    viewManagement: ViewManagementModule.Types.ViewManagementStore,
    resetPasswordCode: string,
    specificUser: UserModule.Types.SpecificUser;
    router: any;
};

type S = {
    email: string,
    password: string,
    confirmation: string,
    alert:string,
    showOneTimeForm: boolean
}

type P = {
    match?: any;
}

class Popup extends React.Component<DispatchedP & ConnectedP & P, S> {
    constructor(props: DispatchedP & ConnectedP & P) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmation: '',
            alert: null,
            showOneTimeForm: false,
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
        this.setState({showOneTimeForm:false});
        this.props.hidePopup();
    }
    
    public generateContent() {
        switch (this.props.viewManagement.typePopup) {
            case 'registerSuccess': {
                return (
                    <>
                        <h2>Dziękujemy za utworzenie konta!</h2>
                        <p>Prosimy oczekiwać na wiadomość e-mail potwierdzającą rejestrację celem dokończenia procesu.</p>
                        <i className="popup__icon far fa-check-circle" />
                    </>
                )
            }
            case 'editUserSuccess': {
                return (
                    <>
                        <h2>Edycja zakończona pomyślnie!</h2>
                        <i className="popup__icon far fa-check-circle" />
                    </>
                )
            }
            case 'confirmUserSuccess': {
                return (
                    <>
                        <h2>Twoje konto zostało pomyślnie potwierdzone!</h2>
                        <i className="popup__icon far fa-check-circle" />
                    </>
                )
            }
            case 'confirmUserCodeUsed': {
                return (
                    <>
                        <h2>Twój kod potwierdzenia został już użyty!</h2>
                        <i className="popup__icon fas fa-exclamation-triangle"/>
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
                        <i className="popup__icon far fa-check-circle" />
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
                        <i className="popup__icon far fa-check-circle" />
                    </>
                )
            }
            case 'resetPasswordCodeUsed': {
                return (
                    <>
                        <h2>Kod do zresetowania hasła został już użyty!</h2>
                        <i className="popup__icon fas fa-exclamation-triangle" />
                    </>
                )
            }
            case 'deleteUser': {
                return (
                    <>
                        <h2>Uwaga! Zaakceptowanie tej opcji skutkuje trwałym usunięciem konta w systemie. Czy jesteś pewien?</h2>
                        <i className="popup__icon fas fa-exclamation-triangle"/>
                        <div className="deleteUser--actions">
                            <button className="btn btn--main btn--red" onClick={() => {
                                if(localStorage.getItem('role') == 'ROLE_USER') {
                                    this.props.deleteUserByAdmin(this.props.specificUser.id)
                                } else {
                                    this.props.deleteUser()
                                }
                            }}>Tak, usuń</button>
                            <button className="btn btn--main" onClick={() => this.closePopup()}>Anuluj</button>
                        </div>
                    </>
                )
            }
            case 'deleteUserSuccess': {
                return (
                    <>
                        <h2>Konto zostało pomyślnie usunięte!</h2>
                        <i className="popup__icon far fa-check-circle" />
                    </>
                )
            }
            case 'openPDF': {
                if(this.state.showOneTimeForm) {
                    return (
                        <div className="popup__message--left">
                            <OneTimeData />
                        </div>
                    )
                } else {
                    return (
                        <>
                            <h2>Załączone pliki dostępne są dla zalogowanych użytkowników</h2>
                            <Login openPDF={true}/>
                            <div className="popup__message--openPDF">
                                <div className="divider" />
                                <p>Nie masz jeszcze konta? <Link to="/register" onClick={this.closePopup}>Przejdź do rejestracji</Link></p>
                                <div className="divider" />
                                <p>Nie chcesz tworzyć konta? <a href="#" onClick={() => this.setState({showOneTimeForm: true})}>Podaj dane jednorazowo</a></p>
                            </div>
                        </>
                    )
                }
            }
            case 'copiedLink': {
                return (
                    <>
                        <h2>Skopiowano do schowka!</h2>
                        <i className="popup__icon far fa-check-circle" />
                    </>
                )
            }
            case 'investmentBuySuccess' : {
                return (
                    <>
                        <h2>Inwestycja została pomyślnie zarezerwowana z obowiązkiem zapłaty!</h2>
                        <i className="popup__icon far fa-check-circle" />
                    </>
                )
            }
            case 'salesmanForm': {
                return (
                    <>
                        <h2>Uzupełnij dane sprzedawcy</h2>
                        <SalesmanData />
                    </>
                )
            }
            case 'confirmPurchase': {
                return (
                    <>
                    <h2>Czy na pewno chcesz dokonać rezerwacji?</h2>
                    <i className="popup__icon far fa-question-circle"/>
                    <div className="deleteUser--actions">
                    <button className="btn btn--main" onClick={() => this.props.buyInvestment(this.props.router.location.pathname.split('/')[2])}>Tak, potwierdzam!</button>
                    </div>
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
        resetPasswordCode: state.userStore.resetPasswordCode,
        specificUser: state.userStore.specificUser,
        router: state.router
    };
}
const mapDispachToProps: DispatchedP = {
    hidePopup: () => ViewManagementModule.Actions.hidePopup(),
    resetPassword: (email: string) => UserModule.Actions.resetPassword(email),
    deleteUser: () => UserModule.Actions.deleteUser(),
    deleteUserByAdmin: (id?: number) => UserModule.Actions.deleteUserByAdmin(id),
    resetPasswordContinue: (data: resetPasswordData) => UserModule.Actions.resetPasswordContinue(data),
    buyInvestment: (id: number) => InvestmentModule.Actions.buyInvestment(id)
}
export default connect(
    mapStateToProps,
    mapDispachToProps
)(Popup)
