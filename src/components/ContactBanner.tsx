import * as React from 'react';
import ContactForm from './Forms/ContactForm';
import { connect } from 'react-redux';
import * as InvestmentModule from 'Modules/InvestmentModule';

type DispatchedP = {
    contact: (contactData: InvestmentModule.Types.Contact) => void;
}
type S = {
    successMessageVisible: boolean
}
class ContactBanner extends React.Component<DispatchedP, S> {
    constructor(props: DispatchedP) {
        super(props);
        this.state = {
            successMessageVisible: false
        }
    }
    private handleSubmit = async(contactData: InvestmentModule.Types.Contact) => {
        try {
            await this.props.contact(contactData);
            this.setState({
                successMessageVisible: true
            })
        } catch(err) {
            // 
        }
    }

    public render() {
        return (
            <div className="contactForm">
                <div className="container">
                    <div className="contactBox">
                        {this.state.successMessageVisible && <p>Poprawnie wysłano wiadomość <span dangerouslySetInnerHTML={{__html: '&#128515'}} className="emoij"/></p>}
                        <ContactForm onSubmit={this.handleSubmit} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps: DispatchedP = {
    contact: (contactData: InvestmentModule.Types.Contact) => InvestmentModule.Actions.contact(contactData)
};

export default connect(null, mapDispatchToProps)(ContactBanner)