import * as React from 'react';
import { Link } from 'react-router-dom';
import { RootState } from '../../Store/Reducers/_RootReducer'
import { connect } from 'react-redux';

type S = {
    cookiesAgreement: boolean;
}

export default class Footer extends React.Component<any, S> {
    constructor(props: any) {
        super(props);
        this.state = {
            cookiesAgreement: localStorage.getItem('cookiesAgreement') ? true : false
        };
    }

    public agreeCookies = () => {
        localStorage.setItem('cookiesAgreement', 'true');
        this.setState({ cookiesAgreement: true })
    }

    public render() {
        return (
            <footer className={this.props.popupVisible ? 'footer blurred' : 'footer'}>
                {!this.state.cookiesAgreement && (
                    <div className="cookies">
                        <div className="left"><p>Korzystając z naszych usług, przyjmują Pańśtwo do wiadomości, że używamy plików cookie i podobnych technologii do ulepszania i dostosowania treści, analizy ruchu, dostarczania reklam oraz ochrony przed spamem, złośliwym oprogramowaniem i nieuprawnionym dostępem. Więcej klikając <Link to="/cookiesprivacy">tutaj</Link></p>
                            <p>Mogą Państwo zarządzać swoimi preferencjami reklamowymi dotyczącymi partnerów zarządzanych przez Obligain, klikając <Link to="/privacypolicy">tutaj</Link></p>
                        </div>
                        <div className="right">
                            <button type="button" className="btn btn--search" onClick={this.agreeCookies}>Zaakceptuj</button>
                        </div>
                    </div>
                )}
                <div className="footer__inner container">
                    <div className="footer__l">
                        <h2>
                            <Link to="/"><img src="/logo.svg" id="footer__logo" /></Link>
                        </h2>
                        <h2>
                            <a href="https://www.firmagodnazaufania.pl/company,58536,reliance-polska-sp-z-o-o" target="_blank"><img src="/firma_godna_zaufania_2019.png" id="footer__brand" width="200px" /></a>
                        </h2>
                    </div>
                    <div className="footer__r">
                        <ul className="footer__menu">
                            <li>
                                <Link to={'/'}>Strona główna</Link>
                            </li>
                            <li>
                                <Link to={'/dashboard'}>Logowanie</Link>
                            </li>
                            {/* {!localStorage.getItem('token') && (
                                <li>
                                    <Link to={'/dashboard/login'}>Logowanie</Link>
                                </li>
                            )} */}
                            {/* {localStorage.getItem('token') && (
                                <li>
                                    <Link to={'/dashboard'}>Dashboard</Link>
                                </li>
                            )} */}
                            <Link to="/mission"><li>Misja</li></Link>
                            <li>
                                <Link to={'/aboutus'}>O Obligain</Link>
                            </li>
                            <Link to="/cooperation"><li>Współpraca</li></Link>
                            <Link to="/termsandconditions"><li>Regulamin</li></Link>
                        </ul>
                        <ul className="footer__menu">
                            <Link to="/returns"><li>Zwroty</li></Link>
                            <Link to="/complaints"><li>Reklamacje</li></Link>
                            <Link to="/formofpayments"><li>Formy płatności</li></Link>
                            <Link to="/execusiontime"><li>Czas realizacji</li></Link>
                            <Link to="/faq"><li>FAQ</li></Link>
                            <Link to="/otherterms"><li>Pozostałe regulaminy</li></Link>
                        </ul>
                        <ul className="footer__menu">
                            <Link to="/contact"><li>Kontakt</li></Link>
                            <Link to="/career"><li>Kariera</li></Link>
                            <Link to="/program"><li>Program</li></Link>
                            <Link to="/vip"><li>VIP Serwis</li></Link>
                            {/* <Link to="/subscription"><li>Abonament</li></Link> */}
                            <Link to="/privacypolicy"><li>Polityka prywatności</li></Link>
                            <Link to="/cookiesprivacy"><li>Polityka cookies</li></Link>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

// function mapStateToProps(state: RootState) {
//     return {
//         ...state
//     };
// }
// export default connect(
//     mapStateToProps,
//     null
// )(Footer)
