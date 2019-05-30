import * as React from 'react';

type P = {
    backgroundImageSrc?: string;
    title: string;
    description: string;
}

export default class IntroTextBanner extends React.Component<P, any> {
    public render() {
        const styles = this.props.backgroundImageSrc ? {backgroundImage: `url(${this.props.backgroundImageSrc})`} : {};
        return (
            <div className="introTextBanner" style={styles}>
                <div className="introTextBanner__inner">
                    <h2 className="introTextBanner__title">{this.props.title}</h2>
                    <p className="introTextBanner__desc">{this.props.description}</p>
                </div>
            </div>
        )
    }
}