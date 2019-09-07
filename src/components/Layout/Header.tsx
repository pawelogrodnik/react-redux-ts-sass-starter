import * as React from 'react';
import { Link } from 'react-router-dom';
type P = {
    whiteHeader: boolean
}
export default class Header extends React.Component<P, any> {
    public render() {
        return (
            <header className={this.props.whiteHeader ? `header  header--whiteHeader` : `header header--blueHeader`}>
                <div className="header__inner container">
                    <h2>
                        <Link to="/"><img src={this.props.whiteHeader ? `/logo.svg` : '/logoBlue.svg'} id="logo" /></Link>
                    </h2>
                    <ul className="header__menu">
                        <Link to="/"><li>Start</li></Link>
                        <Link to="/register"><li>Rejestracja</li></Link>
                        <Link to="/contact"><li>Kontakt</li></Link>
                    </ul>
                </div>
            </header>
        );
    }
}
