import * as React from 'react';
import { Link } from 'react-router-dom';

export type P = {
    backgroundImageSrc: string;
    title: string;
    buttonText?: string;
    description: string;
}

export default class HeroBanner extends React.Component<P, any> {
    public render() {
        return (
            <div className="heroBanner" style={{ backgroundImage: `url(${this.props.backgroundImageSrc})` }}>
                <div className="heroBanner__inner container">
                    <h1 className="heroBanner__title">{this.props.title}</h1>
                    <p className="heroBanner__desc">{this.props.description}</p>
                    {this.props.buttonText && <Link to="/mission"><button className="btn btn--main">{this.props.buttonText}</button></Link>}
                </div>
            </div>
        )
    }
}