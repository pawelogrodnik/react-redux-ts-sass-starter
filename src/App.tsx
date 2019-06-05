import * as React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './components/HomePage';
import Login from './components/Layout/Login';
import { ConnectedRouter } from 'react-router-redux';
import { Provider} from 'react-redux';
import { store } from './Store/Store';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';
import { RootState } from './Store/Reducers/_RootReducer';

type P = RootState

class App extends React.Component<P, any> {
  public render() {
      return (
          <div className="main-wrapper">
              {this.props.viewManagementStore.headerVisible && <Header/> }
              <div className="pages__inner">
                <Switch>
                  <Route exact path={'/'} component={HomePage} />
                  <Route exact path={'/login'} component={Login} />
                  <Route exact path={'/dashboard'} component={() =><h1>Dashboard</h1>} />
                </Switch>
              </div>
              {this.props.viewManagementStore.footerVisible && <Footer/> }
          </div>
        )
    }
}

export const history = createHistory();

function mapStateToProps(state: any) {
    return {
      ...state
    }
}


const AppMain = connect(mapStateToProps, null)(App)

const RootApp = () => (
  <Provider store={store}>
      <ConnectedRouter history={history}>
          <Route path="/" component={AppMain} />
      </ConnectedRouter>
  </Provider>
)
export default RootApp;
