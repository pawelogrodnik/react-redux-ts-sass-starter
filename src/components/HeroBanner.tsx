import * as React from 'react';

export type P = {
    backgroundImageSrc: string;
    title: string;
    buttonText?: string;
    description: string;
}

export default class HeroBanner extends React.Component<P, any> {
    public render() {
        return (
            <div className="heroBanner" style={{backgroundImage: `url(${this.props.backgroundImageSrc})`}}>
                <div className="heroBanner__inner">
                    <h1 className="heroBanner__title">{this.props.title}</h1>
                    <p className="heroBanner__desc">{this.props.description}</p>
                    {this.props.buttonText && <button className="btn btn--main">{this.props.buttonText}</button>}
                </div>
            </div>
        )
    }
}