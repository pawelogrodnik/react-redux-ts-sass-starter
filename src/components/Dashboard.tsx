import * as React from 'react';
import { connect } from 'react-redux';
import * as ViewManagementModule from './../Modules/ViewManagementModule';
import { Route, Switch } from 'react-router-dom';
import Login from 'components/Layout/Login';
import ManageInvestment from 'components/AddInvestment';
import InvestmentsList from 'components/InvestmentsList';
import EditUser from 'components/EditUser';
import DownloadedInvestments from 'src/components/DownloadedInvestments';
import PurchasedInvestments from 'src/components/PurchasedInvestments';
import UsersList from 'src/components/UsersList';
import { Link } from 'react-router-dom';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import * as UserModule from 'Modules/UserModule';
import { history } from 'src/App';
import { ViewManagement } from 'src/Store/Actions/EnumTypes/ActionEnumTypes';
import * as ReactTooltip from 'react-tooltip'
import EditUserByAdmin from './EditUserByAdmin';

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
    public generateTooltip = (id: string, text: string) => {
        return (
            <ReactTooltip id={id} effect='solid'>
                <span>{text}</span>
            </ReactTooltip>
        )
    }
    public render() {
        return (
            
            <div className="page page--dashboard">
                <div className="page--dashboard__menu">
                    <ul>
                        <Link to={'/'} data-tip data-for="home"><li><img src="/home.png" /></li></Link>
                        {this.generateTooltip('home', 'Strona główna')}
                        {localStorage.getItem('token') && localStorage.getItem('role') === 'ROLE_USER' ? (
                            <>
                                <Link to={'/dashboard/'} data-tip data-for="investmentList"><li><i className="fas fa-list-ol" /></li></Link>
                                <Link to={'/dashboard/investments/add'} data-tip data-for="addInvestment"><li><i className="fas fa-plus" /></li></Link>
                                <Link to={'/dashboard/usersList'} data-tip data-for="usersList"><li><i className="fas fa-users" /></li></Link>
                                <li onClick={this.handleLogout} data-tip data-for="logout"><span className="fake-a"><i className="fas fa-sign-out-alt" /></span></li>
                                {this.generateTooltip('investmentList', 'Lista inwestycji')}
                                {this.generateTooltip('addInvestment', 'Dodaj inwestycję')}
                                {this.generateTooltip('usersList', 'Lista użytkowników')}
                                {this.generateTooltip('logout', 'Wyloguj')}
                            </>
                         ) : (localStorage.getItem('token') && localStorage.getItem('role') ==='CUSTOMER' ? (
                            <>
                                <Link to={'/dashboard/'} data-tip data-for="downloadedList"><li><i className="fas fa-cart-arrow-down" /></li></Link>
                                {/* <Link to={'/dashboard/purchasedInvestments'} data-tip data-for="purchasedInvestments"><li><i className="fas fa-shopping-cart" /></li></Link> */}
                                <Link to={'/dashboard/editUser'} data-tip data-for="editUser"><li><i className="fas fa-user-cog" /></li></Link>
                                <li onClick={this.handleLogout} data-tip data-for="logout"><span className="fake-a"><i className="fas fa-sign-out-alt" /></span></li>
                                {this.generateTooltip('downloadedList', 'Lista pobranych inwestycji')}
                                {/* {this.generateTooltip('purchasedInvestments', 'Lista zakupionych inwestycji')} */}
                                {this.generateTooltip('editUser', 'Edytuj dane')}
                                {this.generateTooltip('logout', 'Wyloguj')}
                            </>
                         ) : (
                            //  <Link to={'/dashboard/login'}><li><i className="fas fa-sign-in-alt" /></li></Link>
                            null
                         )
                        )}
                    </ul>
                </div>
                <div className="page--dashboard__content">
                    {localStorage.getItem('token') && localStorage.getItem('role') === 'ROLE_USER' ? (
                        <Switch>
                            <Route exact path={'/dashboard/'} component={InvestmentsList} />
                            <Route exact path={'/dashboard/investments/add'} component={ManageInvestment} />
                            <Route exact path={'/dashboard/investments/:investmentId'} component={ManageInvestment} />
                            <Route exact path={'/dashboard/usersList'} component={UsersList} />
                            <Route exact path={'/dashboard/editUserByAdmin'} component={EditUserByAdmin} />
                        </Switch>
                    ) : ( localStorage.getItem('token') && localStorage.getItem('role') === 'CUSTOMER' ? (
                        <Switch>
                            <Route exact path={'/dashboard/'} component={DownloadedInvestments} />
                            {/* <Route exact path={'/dashboard/purchasedInvestments'} component={PurchasedInvestments} /> */}
                            <Route exact path={'/dashboard/editUser'} component={EditUser} />
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