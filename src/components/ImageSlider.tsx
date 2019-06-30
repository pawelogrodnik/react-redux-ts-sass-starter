import * as React from 'react';
import { baseURL } from './../Connectors/config';

export type P = {
    images: any;
}
type S = {
    popupVisible: boolean;
    imageIdPopup: number
}

export default class ImageSlider extends React.Component<P, S> {
    constructor(props: P) {
        super(props);
        this.state = {
            popupVisible: false,
            imageIdPopup: null
        }
    }
    private openPopup = (imageIdPopup: number) => {
        this.setState({
            popupVisible: true,
            imageIdPopup
        })
    }
    private hidePopup = () => {
        this.setState({
            popupVisible: false,
            imageIdPopup: null
        })
    }
    private nextImage = () => {
        if (this.state.imageIdPopup + 1 === this.props.images.length) {
            this.setState({
                imageIdPopup: 0
            })
        } else {
            this.setState({
                imageIdPopup: this.state.imageIdPopup + 1
            })
        }
    }
    private prevImage = () => {
        if (this.state.imageIdPopup - 1 < 0) {
            this.setState({
                imageIdPopup: this.props.images.length - 1
            })
        } else {
            this.setState({
                imageIdPopup: this.state.imageIdPopup - 1
            })
        }
    }
    public render() {
        return (
            <>
            <div className="imageSlider">
                {this.props.images && this.props.images.map((item, i) => {
                    return <img key={i} src={`${baseURL}/${item.path}`} width={"150px"} onClick={() => this.openPopup(i)} />
                })}
            </div>
                {
            this.state.popupVisible && (
                <div className="imagePopup">
                    <div className="imagePopup__exit" onClick={() => this.hidePopup()}>X</div>
                    <div className="imagePopup__inner">
                        <img src={`${baseURL}/${this.props.images[this.state.imageIdPopup].path}`} width={'100%'} />
                    </div>
                    <div className="imagePopup__btn imagePopup__btn--next" onClick={this.nextImage}><i className="fas fa-caret-right" /></div>
                    <div className="imagePopup__btn imagePopup__btn--prev" onClick={this.prevImage}><i className="fas fa-caret-left" /></div>
                </div>
            )
        }
            </>
        )
    }
}

