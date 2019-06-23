import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component<any, any> {
    public render() {
        return (
            <footer className="footer">
                <div className="footer__inner container">
                    <div className="footer__l">
                        <h2>
                            <img src="/logo.png" id="footer__logo" />
                        </h2>
                    </div>
                    <div className="footer__r">
                        <ul className="footer__menu">
                            {!this.props.user && (
                                <li>
                                    <Link to={'/dashboard/login'}>Login</Link>
                                </li>
                            )}
                            <li>
                                <Link to={'/'}>Strona główna</Link>
                            </li>
                            <li>
                                <Link to={'/dashboard'}>Dashboard</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Polityka prywatności</Link>
                            </li>
                            <li>Współpraca</li>
                        </ul>
                        <ul className="footer__menu">
                            <li>Zwroty</li>
                            <li>Reklamacje</li>
                            <li>Formy płatności</li>
                            <li>Czas realizacji</li>
                            <li>FAQ</li>
                        </ul>
                        <ul className="footer__menu">
                            <li>Kontakt</li>
                            <li>Kariera</li>
                            <li>Program</li>
                            <li>VIP Serwis</li>
                            <li>Abonament</li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}
