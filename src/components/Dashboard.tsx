import * as React from 'react';
import { connect } from 'react-redux';
import * as ViewManagementModule from './../Modules/ViewManagementModule';
import { Route, Switch } from 'react-router-dom';
import Login from 'components/Layout/Login';
import ManageInvestment from 'components/AddInvestment';
import InvestmentsList from 'components/InvestmentsList';
import { Link } from 'react-router-dom';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import * as UserModule from 'Modules/UserModule';
import { history } from 'src/App';

type S = {

}
type ConnectedP = {
    userStore: UserModule.Types.UserStore
}
type DispatchedP = {
    hideFooter: () => void;
    hideHeader: () => void;
    showFooter: () => void;
    showHeader: () => void;
    logoutUser: () => void;
}
class Dashboard extends React.Component<DispatchedP & ConnectedP, S> {
    constructor(props: ConnectedP & DispatchedP) {
        super(props);
    }

    public componentWillMount() {
        if (!this.props.userStore.user) {
            history.push('/dashboard/login')
        }
        this.props.hideFooter();
        this.props.hideHeader();
    }
    public componentWillUnmount() {
        this.props.showFooter();
        this.props.showHeader();
    }
    public handleLogout = () => {
        history.push('/')
        this.props.logoutUser()
    }
    public render() {
        return (
            <div className="page page--dashboard">
                <div className="page--dashboard__menu">
                    <ul>
                        <li><Link to={'/'}><img src="/home.png" /></Link></li>
                        {this.props.userStore.user ? (
                            <>
                            <li><Link to={'/dashboard/'}><i className="fas fa-list-ol" /></Link></li>
                            <li><Link to={'/dashboard/investments/add'}><i className="fas fa-plus" /></Link></li>
                            <li><Link to={'/login'}><i className="fas fa-sign-in-alt" /></Link></li>
                            <li><span className="fake-a" onClick={this.handleLogout}><i className="fas fa-sign-out-alt" /></span></li>
                            </>
                         ) : (
                            <li><Link to={'/dashboard/login'}><i className="fas fa-sign-in-alt" /></Link></li>
                        )}
                    </ul>
                </div>
                <div className="page--dashboard__content">
                    {this.props.userStore.user ? (
                        <Switch>
                            <Route exact path={'/dashboard/'} component={InvestmentsList} />
                            <Route exact path={'/dashboard/investments/add'} component={ManageInvestment} />
                            <Route exact path={'/dashboard/investments/:investmentId'} component={ManageInvestment} />
                        </Switch>
                    ) : (
                            <Switch>
                                <Route path={'/dashboard'} component={Login} />
                            </Switch>
                        )}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps: DispatchedP = {
    hideFooter: () => ViewManagementModule.Actions.hideFooter(),
    hideHeader: () => ViewManagementModule.Actions.hideHeader(),
    showFooter: () => ViewManagementModule.Actions.showFooter(),
    showHeader: () => ViewManagementModule.Actions.showHeader(),
    logoutUser: () => UserModule.Actions.logoutUser(),
};

function mapStateToProps(state: RootState): ConnectedP {
    return {
        userStore: state.userStore
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)