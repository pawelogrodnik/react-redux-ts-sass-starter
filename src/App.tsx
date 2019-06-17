import * as React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import Login from './components/Layout/Login';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';
import { RootState } from './Store/Reducers/_RootReducer';
import * as UserModule from 'Modules/UserModule';

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
        this.setState({loadingUserComplete: true})
    }
    public render() {
        if (this.state.loadingUserComplete) {
            return (
                <div className="main-wrapper">
                    {this.props.viewManagementStore.headerVisible && <Header />}
                    <div className="pages__inner">
                        <Switch>
                            <Route exact path={'/'} component={HomePage} />
                            <Route path={'/dashboard'} component={Dashboard} />
                        </Switch>
                    </div>
                    {this.props.viewManagementStore.footerVisible && <Footer />}
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
