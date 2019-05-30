import * as React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './components/HomePage';
import { ConnectedRouter } from 'react-router-redux';
import { Provider} from 'react-redux';
import { store } from './Store/Store';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

class App extends React.Component<any, any> {
  public render() {
      return (
          <div className="main-wrapper">
              <Header/>
              <div className="pages__inner">
                <Switch>
                  <Route exact path={'/'} component={HomePage} />
                </Switch>
              </div>
              <Footer/>
          </div>
        )
    }
}

const history = createHistory();

const RootApp = () => (
  <Provider store={store}>
      <ConnectedRouter history={history}>
          <Route path="/" component={App} />
      </ConnectedRouter>
  </Provider>
)
export default RootApp;
