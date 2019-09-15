import * as React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import SingleInvestment from './components/SingleInvestment';
import AboutUs from './components/StaticPages/AboutUs';
import Career from './components/StaticPages/Career';
import Complaints from './components/StaticPages/Complaints';
import Contact from './components/StaticPages/Contact';
import Cooperation from './components/StaticPages/Cooperation';
import ExecusionTime from './components/StaticPages/ExecusionTime';
import FAQ from './components/StaticPages/FAQ';
import FormOfPayments from './components/StaticPages/FormOfPayments';
import Program from './components/StaticPages/Program';
import Returns from './components/StaticPages/Returns';
import TermsAndConditions from './components/StaticPages/TermsAndConditions';
import Subscription from './components/StaticPages/Subscription';
import VIP from './components/StaticPages/VIP';
import PrivacyPolicy from './components/StaticPages/PrivacyPolicy';
import OtherTerms from './components/StaticPages/OtherTerms';
import Mission from './components/StaticPages/Mission';
import Loader from './components/Layout/Loader';
import MetaTags from './components/MetaTags';
import Registration from './components/Registration';
import * as ViewManagementModule from './store/../Modules/ViewManagementModule';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';
import { RootState } from './Store/Reducers/_RootReducer';
import * as UserModule from 'Modules/UserModule';
import ErrorHandler from './components/Layout/ErrorHandler';
import Popup from './components/Layout/Popup';
import * as H from 'history'

type P = RootState;
type PropsLocation = {
    location: H.Location;
    history: any;
}
type DispatchedP = {
    loginUserFromStorage: (user: UserModule.Types.User, token: string) => void;
    setPrevPath: (prevPath: string) => void;
    showPopup: (typePopup: string) => void;
    setResetCode: (code:string) => void;
    checkIfUserIsValid: (token:string) => void;
};
type S = {
    loadingUserComplete: boolean;
    // staticPages: Array<string>;
    isScrolled: boolean;
};
class App extends React.PureComponent<P & DispatchedP & PropsLocation, S> {
    constructor(props: P & DispatchedP & PropsLocation) {
        super(props);
        this.state = {
            loadingUserComplete: false,
            // staticPages: ['/mission','/otherterms','/termsandconditions','/privacypolicy','/vip','/subscription','/contact','/dashboard/login','/returns','/program','/formofpayments','/faq','/execusiontime','/cooperation','/complaints','/career','/aboutus'],
            isScrolled: false
        };
    }

    public componentDidMount() {
        // console.log(this.props.location);
        // console.log(this.props.location.search.split('=')[1].split('&')[0])
        if(this.props.location.pathname == '/dashboard/login' && this.props.location.search == '?status=successfully_confirmed') {
            this.props.showPopup('confirmUserSuccess');
        } else if(this.props.location.pathname == '/dashboard/login' && this.props.location.search == '?status=code_already_used') {
            this.props.showPopup('confirmUserCodeUsed');
        } else if(this.props.location.pathname == '/dashboard/reset_password' && this.props.location.search.split('&')[0] == '?status=code_valid') {
            const code: string = this.props.location.search.split('=')[2];
            this.props.setResetCode(code);
            this.props.showPopup('resetPasswordContinue');
        } else if(this.props.location.pathname == '/dashboard/reset_password' && this.props.location.search == '?status=code_already_used') {
            this.props.showPopup('resetPasswordCodeUsed');
        } else if (this.props.location.pathname == '/' && this.props.location.search.split('=')[0] == '?r') {
            // alert(`Twój kod reflinku to: ${this.props.location.search.split('=')[1].split('&')[0]}`)
            localStorage.setItem('salesmanId', this.props.location.search.split('=')[1].split('&')[0]);
            this.props.history.replace('/');

        } else if (this.props.location.pathname == '/' && this.props.location.search.split('=')[0] == '?salesmanCode') {
            // alert(`Twój kod to: ${this.props.location.search.split('=')[1]}`)
            this.props.showPopup('salesmanForm');
        }

    }

    public componentWillMount() {
        if (localStorage.getItem('token')) {
            const token = JSON.parse(JSON.stringify(localStorage.getItem('token')));
            this.props.loginUserFromStorage(null, token); 
            this.props.checkIfUserIsValid(token);
        }
        this.setState({ loadingUserComplete: true });
        
    }
  
    public componentDidUpdate() {
        if(this.props.location.pathname !== '/' && !this.state.isScrolled) {
            window.scrollTo(0,0);
            this.setState({isScrolled: true})
        }
    }

    public componentWillReceiveProps(nextProps) {
        if(nextProps.location !== this.props.location) {
            const path = this.props.location.pathname;
            this.props.setPrevPath(path);
            this.setState({isScrolled: false})
        }
    }

    public render() {
        if (this.state.loadingUserComplete) {
            return (
                <div className="main-wrapper">
                    <MetaTags />
                    <ErrorHandler />
                    <Popup />
                    {this.props.viewManagementStore.headerVisible && <Header whiteHeader={this.props.viewManagementStore.whiteHeader} />}
                    <div className={this.props.viewManagementStore.popupVisible ? 'pages__inner blurred' : 'pages__inner'}>
                        <Switch>
                            <Route exact path={'/'} component={HomePage}/>} />
                            <Route path={'/dashboard'} component={Dashboard} />
                            <Route path={'/investment/:id'} component={SingleInvestment} />
                            <Route path={'/aboutus'} component={AboutUs} />
                            <Route path={'/career'} component={Career} />
                            <Route path={'/complaints'} component={Complaints} />
                            <Route path={'/contact'} component={Contact} />
                            <Route path={'/register'} component={Registration} />
                            <Route path={'/cooperation'} component={Cooperation} />
                            <Route path={'/execusiontime'} component={ExecusionTime} />
                            <Route path={'/faq'} component={FAQ} />
                            <Route path={'/formofpayments'} component={FormOfPayments} />
                            <Route path={'/program'} component={Program} />
                            <Route path={'/returns'} component={Returns} />
                            <Route path={'/subscription'} component={Subscription} />
                            <Route path={'/vip'} component={VIP} />
                            <Route path={'/privacypolicy'} component={PrivacyPolicy} />
                            <Route path={'/termsandconditions'} component={TermsAndConditions} />
                            <Route path={'/otherterms'} component={OtherTerms} />
                            <Route path={'/mission'} component={Mission} />
                        </Switch>
                    </div>
                    {this.props.viewManagementStore.footerVisible && <Footer user={this.props.userStore.user} popupVisible={this.props.viewManagementStore.popupVisible} />}
                    {this.props.viewManagementStore.loaderVisible && <Loader />}
                </div>
            );
        } else {
            return null;
        }
    }
}

export const history = createHistory();

const mapDispatchToProps: DispatchedP = {
    loginUserFromStorage: (user: UserModule.Types.User, token: string) => UserModule.Actions.loginUserSuccess(user, token),
    setPrevPath: (prevPath:string) => ViewManagementModule.Actions.setPrevPath(prevPath),
    showPopup: (typePopup) => ViewManagementModule.Actions.showPopup(typePopup),
    setResetCode: (code:string) => UserModule.Actions.setResetCode(code),
    checkIfUserIsValid: (token:string) => UserModule.Actions.checkIfUserIsValid(token),
};

function mapStateToProps(state: RootState) {
    return {
        ...state
    };
}

const AppMain = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

const RootApp = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={AppMain} />
        </ConnectedRouter>
    </Provider>
);
export default RootApp;
