import * as React from 'react';

export default class Header extends React.Component<any, any> {
    public render() {
        return (
            <header className="header">
                <div className="header__inner container">
                    <ul className="header__menu">
                        <li>Start</li>
                        <li>Wyszukiwarka</li>
                        <li>Kontakt</li>
                    </ul>
                    <h2>LOGO</h2>
                </div>
            </header>
        )
    }
}