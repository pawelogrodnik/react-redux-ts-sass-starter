import * as React from 'react';
import ContactBanner from './../ContactBanner';

type DispatchedP = {

}

type ConnectedP = {

}

export default class Contact extends React.Component<DispatchedP & ConnectedP> {
    constructor(props: DispatchedP & ConnectedP) {
        super(props);
        this.state = {
            // 
        };
    }

    public render() {
        return (
            <div className="page page--static">
                <ContactBanner />
            </div>
        );
    }
}