import * as React from 'react';


type P = {
    classNames: string;
    onChange: () => void;
    onButtonPress: () => void;
}

export default class RangeButtonsMobileHelpers extends React.Component<P, any> {
    constructor(props: P) {
      super(props)
      this.handleButtonPress = this.handleButtonPress.bind(this)
      this.handleButtonRelease = this.handleButtonRelease.bind(this)
    }

    private buttonPressTimer;
    private interval;

    public handleButtonPress () {
      this.buttonPressTimer = setTimeout(() => this.interval = setInterval(() => this.props.onButtonPress(), 150), 700);
    }
  
    public handleButtonRelease () {
      clearTimeout(this.buttonPressTimer);
      clearInterval(this.interval);
    }
  
    public render() {
      return (
        <div
            className={`RangeButtonsMobileHelpers ${this.props.classNames}`}
            onClick={this.props.onChange} 
            onTouchStart={this.handleButtonPress} 
            onTouchEnd={this.handleButtonRelease} 
            onMouseDown={this.handleButtonPress} 
            onMouseUp={this.handleButtonRelease} 
            onMouseLeave={this.handleButtonRelease}>
          {this.props.children}
        </div>
      );
    }
  }
