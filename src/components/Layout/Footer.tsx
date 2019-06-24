import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component<any, any> {
    public render() {
        return (
            <footer className="footer">
                <div className="footer__inner container">
                    <div className="footer__l">
                        <h2>
                            <Link to="/"><img src="/logo.png" id="footer__logo" /></Link>
                        </h2>
                    </div>
                    <div className="footer__r">
                        <ul className="footer__menu">
                            <li>
                                <Link to={'/'}>Strona główna</Link>
                            </li>
                            {!this.props.user && (
                                <li>
                                    <Link to={'/dashboard/login'}>Logowanie</Link>
                                </li>
                            )}
                            {this.props.user && (
                                <li>
                                    <Link to={'/dashboard'}>Dashboard</Link>
                                </li>
                            )}
                            <li>
                                <Link to={'/privacy'}>Polityka prywatności</Link>
                            </li>
                            <Link to="/cooperation"><li>Współpraca</li></Link>
                        </ul>
                        <ul className="footer__menu">
                            <Link to="/returns"><li>Zwroty</li></Link>
                            <Link to="/complaints"><li>Reklamacje</li></Link>
                            <Link to="/formofpayments"><li>Formy płatności</li></Link>
                            <Link to="/execusiontime"><li>Czas realizacji</li></Link>
                            <Link to="/faq"><li>FAQ</li></Link>
                        </ul>
                        <ul className="footer__menu">
                            <Link to="/contact"><li>Kontakt</li></Link>
                            <Link to="/career"><li>Kariera</li></Link>
                            <Link to="/program"><li>Program</li></Link>
                            <Link to="/vip"><li>VIP Serwis</li></Link>
                            <Link to="/subscription"><li>Abonament</li></Link>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}
