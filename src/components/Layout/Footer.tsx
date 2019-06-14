import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component<any, any> {
    public render() {
        return (
            <footer className="footer">
                <div className="footer__inner container">
                    <div className="footer__l">
                        <h2>LOGO FIRMY</h2>
                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </p>
                    </div>
                    <div className="footer__r">
                        <ul className="footer__menu">
                            <li><Link to={'/'}>Login</Link></li>
                            <li><Link to={'/homepage'}>Strona główna</Link></li>
                            <li><Link to={'/dashboard'}>Dashboard</Link></li>
                            <li><Link to={'/'}>Lorem ipsum</Link></li>
                        </ul>
                        <ul className="footer__menu">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                        <ul className="footer__menu">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>
                </div>   
            </footer>
        )
    }
}