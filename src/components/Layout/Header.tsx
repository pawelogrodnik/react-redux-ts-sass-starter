import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component<any, any> {
    public render() {
        return (
            <header className="header">
                <div className="header__inner container">
                    <h2>
                        <Link to="/"><img src="/logo.png" id="logo" /></Link>
                    </h2>
                    <ul className="header__menu">
                        <Link to="/"><li>Start</li></Link>
                        <li>Wyszukiwarka</li>
                        <Link to="/contact"><li>Kontakt</li></Link>
                    </ul>
                </div>
            </header>
        );
    }
}
