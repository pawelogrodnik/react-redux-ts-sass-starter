import * as React from 'react';
import { baseURL } from './../Connectors/config';

export type P = {
    images: any;
}

export default class ImageSlider extends React.Component<P, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <div className="imageSlider">
                {this.props.images.map(function (item, i) {
                    return <img key={i} src={`${baseURL}${item.path}`} width={"150px"} />
                })}
            </div>
        )
    }
}