import * as React from 'react';
import { connect } from 'react-redux';
import * as ViewManagementModule from './../Modules/ViewManagementModule';
import { Route, Switch } from 'react-router-dom';
import Login from 'components/Layout/Login';
import ManageInvestment from 'components/AddInvestment';
import InvestmentsList from 'components/InvestmentsList';
import EditUser from 'components/EditUser';
import { Link } from 'react-router-dom';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import * as UserModule from 'Modules/UserModule';
import { history } from 'src/App';
import { ViewManagement } from 'src/Store/Actions/EnumTypes/ActionEnumTypes';

type S = {

}
type ConnectedP = {
    userStore: UserModule.Types.UserStore,
    viewManagement: ViewManagementModule.Types.ViewManagementStore,
    router: any
}
type DispatchedP = {
    hideFooter: () => void;
    hideHeader: () => void;
    showFooter: () => void;
    showHeader: () => void;
    logoutUser: () => void;
    checkIfUserIsValid: (token: string) => void;
}
class Dashboard extends React.Component<DispatchedP & ConnectedP, S> {
    constructor(props: ConnectedP & DispatchedP) {
        super(props);
    }

    public componentWillMount() {
        if (!localStorage.getItem('token')) {
            history.push('/dashboard/login')
        }
        
        this.props.hideFooter();
        this.props.hideHeader();
    }
    public componentWillUpdate(nextProps) {
        if(this.props.router.location.pathname !== nextProps.router.location.pathname) {
            console.log(nextProps.router.location.pathname);
            if (localStorage.getItem('token') && nextProps.router.location.pathname !== '/dashboard/login') {
                this.props.checkIfUserIsValid(localStorage.getItem('token'))
            }
        }
    }
    public componentWillUnmount() {
        this.props.showFooter();
        this.props.showHeader();
    }
    public handleLogout = () => {
        this.props.logoutUser()
        history.push('/dashboard/login')
    }
    public render() {
        return (
            <div className="page page--dashboard">
                <div className="page--dashboard__menu">
                    <ul>
                        <Link to={'/'}><li><img src="/home.png" /></li></Link>
                        {localStorage.getItem('token') && localStorage.getItem('role') !== 'CUSTOMER' ? (
                            <>
                                <Link to={'/dashboard/'}><li><i className="fas fa-list-ol" /></li></Link>
                                <Link to={'/dashboard/investments/add'}><li><i className="fas fa-plus" /></li></Link>
                                <li onClick={this.handleLogout}><span className="fake-a"><i className="fas fa-sign-out-alt" /></span></li>
                            </>
                         ) : (localStorage.getItem('token') && localStorage.getItem('role') == 'CUSTOMER' ? (
                            <>
                                <Link to={'/dashboard/'}><li><i className="fas fa-user-cog" /></li></Link>
                                <li onClick={this.handleLogout}><span className="fake-a"><i className="fas fa-sign-out-alt" /></span></li>
                            </>
                         ) : (
                             <Link to={'/dashboard/login'}><li><i className="fas fa-sign-in-alt" /></li></Link>
                         )
                        )}
                    </ul>
                </div>
                <div className="page--dashboard__content">
                    {localStorage.getItem('token') && localStorage.getItem('role') !== 'CUSTOMER' ? (
                        <Switch>
                            <Route exact path={'/dashboard/'} component={InvestmentsList} />
                            <Route exact path={'/dashboard/investments/add'} component={ManageInvestment} />
                            <Route exact path={'/dashboard/investments/:investmentId'} component={ManageInvestment} />
                        </Switch>
                    ) : ( localStorage.getItem('token') && localStorage.getItem('role') == 'CUSTOMER' ? (
                        <Switch>
                            <Route exact path={'/dashboard/'} component={EditUser} />
                        </Switch>   
                    ): (
                        <Switch>
                         <Route path={'/dashboard'} component={Login} />
                        </Switch>
                    )
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
    checkIfUserIsValid: (token: string) => UserModule.Actions.checkIfUserIsValid(token)
};

function mapStateToProps(state: RootState): ConnectedP {
    return {
        userStore: state.userStore,
        viewManagement: state.viewManagementStore,
        router: state.router
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)