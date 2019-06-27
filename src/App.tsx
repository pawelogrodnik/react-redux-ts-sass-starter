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
import Mission from './components/StaticPages/Mission';
import Loader from './components/Layout/Loader';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';
import { RootState } from './Store/Reducers/_RootReducer';
import * as UserModule from 'Modules/UserModule';
import ErrorHandler from './components/Layout/ErrorHandler';

type P = RootState
type DispatchedP = {
    loginUserFromStorage: (user: UserModule.Types.User, token: string) => void;
}
type S = {
    loadingUserComplete: boolean
}
class App extends React.PureComponent<P & DispatchedP, S> {
    constructor(props: P & DispatchedP) {
        super(props);
        this.state = {
            loadingUserComplete: false
        }
    }
    public componentWillMount() {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'));
            this.props.loginUserFromStorage(user, 'token');
        }
        this.setState({ loadingUserComplete: true })
    }
    public render() {
        if (this.state.loadingUserComplete) {
            return (
                <div className="main-wrapper">
                    <ErrorHandler />
                    {this.props.viewManagementStore.headerVisible && <Header whiteHeader={this.props.viewManagementStore.whiteHeader} />}
                    <div className="pages__inner">
                        <Switch>
                            <Route exact path={'/'} component={HomePage} />
                            <Route path={'/dashboard'} component={Dashboard} />
                            <Route path={'/investment/:id'} component={SingleInvestment} />
                            <Route path={'/aboutus'} component={AboutUs} />
                            <Route path={'/career'} component={Career} />
                            <Route path={'/complaints'} component={Complaints} />
                            <Route path={'/contact'} component={Contact} />
                            <Route path={'/cooperation'} component={Cooperation} />
                            <Route path={'/execusiontime'} component={ExecusionTime} />
                            <Route path={'/faq'} component={FAQ} />
                            <Route path={'/formofpayments'} component={FormOfPayments} />
                            <Route path={'/program'} component={Program} />
                            <Route path={'/returns'} component={Returns} />
                            <Route path={'/subscription'} component={Subscription} />
                            <Route path={'/vip'} component={VIP} />
                            <Route path={'/termsandconditions'} component={TermsAndConditions} />
                            <Route path={'/mission'} component={Mission} />
                        </Switch>
                    </div>
                    {this.props.viewManagementStore.footerVisible && <Footer user={this.props.userStore.user} />}
                    {this.props.viewManagementStore.loaderVisible && <Loader />}
                </div>
            )
        } else {
            return null
        }
    }
}

export const history = createHistory();

const mapDispatchToProps: DispatchedP = {
    loginUserFromStorage: (user: UserModule.Types.User, token: string) => UserModule.Actions.loginUserSuccess(user, token)
};

function mapStateToProps(state: RootState) {
    return {
        ...state
    }
}


const AppMain = connect(mapStateToProps, mapDispatchToProps)(App)

const RootApp = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={AppMain} />
        </ConnectedRouter>
    </Provider>
)
export default RootApp;
