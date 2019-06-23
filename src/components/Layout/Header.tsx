import * as React from 'react';

export default class Header extends React.Component<any, any> {
    public render() {
        return (
            <header className="header">
                <div className="header__inner container">
                    <h2>
                        <img src="/logo.png" id="logo" />
                    </h2>
                    <ul className="header__menu">
                        <li>Start</li>
                        <li>Wyszukiwarka</li>
                        <li>Kontakt</li>
                    </ul>
                </div>
            </header>
        );
    }
}
