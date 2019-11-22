import * as React from 'react';
import AddInvestmentForm from './Forms/AddInvestmentForm';
import * as UserModule from 'Modules/UserModule';
import * as ViewManagementModule from 'Modules/ViewManagementModule';
import { connect } from 'react-redux';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { history } from 'src/App';
import EditUserForm from './Forms/EditUserForm';
import * as QRCode from 'qrcode.react'
import { baseURL, domainURL } from './../Connectors/config';
import { FacebookShareButton, FacebookIcon } from 'react-share';

type DispatchedP = {
    editUser: (newUser: any) => void;
    getLoggedUserdata: () => void;
    showPopup: (text: string) => void;
}
type ConnectedP = {
    loggedUserData: any
}
type S = {
    img: string;
}

class EditUser extends React.Component<DispatchedP & ConnectedP, S> {
    constructor(props: DispatchedP & ConnectedP) {
        super(props);
        this.state = {
            img: ''
        }
    }

    public componentWillMount() {
        this.props.getLoggedUserdata();
    }
    public onUserDelete = () => {
        this.props.showPopup('deleteUser')
    }
    public copyReflink = () => {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(document.getElementById("reflink"));
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges();
        this.props.showPopup('copiedLink')
    }
    public downloadCanvas = () => {
        const canvas = document.getElementsByTagName('canvas');
        const link = document.createElement('a');
        link.download = 'QR.png';
        link.href = canvas[0].toDataURL("image/png;base64");
        link.click();
    }
    public render() {
        return (
            <div className="edituser">
                <h2>Edycja danych</h2>
                <h3>Dane osobowe</h3>
                <div className="edituser__img-profile">
                    {((this.props.loggedUserData && this.props.loggedUserData.avatar && !this.state.img) ? (
                        <img src={`${baseURL}/${this.props.loggedUserData.avatar}`} />
                    ) : (this.state.img ? (
                        <img src={this.state.img} />
                    ) : (
                            <i className="fas fa-user-tie" />
                        )))}
                </div>
                <EditUserForm onChange={(data: any) => data.avatar && this.setState({ img: data.avatar.content })} onSubmit={async (data) => await (this.props.editUser(data))} initialValues={this.props.loggedUserData} />
                {this.props.loggedUserData && this.props.loggedUserData.firstRole === 'ROLE_SALESMAN' &&
                    (<>
                        <div className="edituser__reflink">
                            <h3>Twój link polecający to: </h3>
                            <p id="reflink">{domainURL}?r={this.props.loggedUserData.refCode}</p>
                            <button className="btn btn--copyReflink" onClick={this.copyReflink}>
                                Skopiuj do schowka
                            </button>
                        </div>
                        <QRCode value={domainURL + `?r=` + this.props.loggedUserData.refCode} />
                        <button className="btn btn--main" onClick={this.downloadCanvas}>Pobierz kod</button>
                        <FacebookShareButton url={domainURL + `?r=` + this.props.loggedUserData.refCode} >
                            <i className="fab fa-facebook-f" />
                            <p>Udostępnij</p>
                        </FacebookShareButton>
                    </>
                    )
                }
                <div className="edituser--actions">
                    <button className="edituser--delete btn btn--main btn--big btn--red" onClick={this.onUserDelete}>Trwałe usunięcie konta</button>
                </div>
            </div >
        )
    }
}


const mapDispatchToProps: DispatchedP = {
    editUser: (data: any) => UserModule.Actions.editUser(data),
    getLoggedUserdata: () => UserModule.Actions.getLoggedUserData(),
    showPopup: (text: string) => ViewManagementModule.Actions.showPopup(text)
};

function mapStateToProps(state: RootState): ConnectedP {
    return {
        loggedUserData: state.userStore.loggedUserData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)