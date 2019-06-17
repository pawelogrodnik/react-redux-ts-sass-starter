import * as React from 'react';
import { connect } from 'react-redux';
import * as ViewManagementModule from './../Modules/ViewManagementModule';
import { Route, Switch } from 'react-router-dom';
import Login from 'components/Layout/Login';
import AddInvestment from 'components/AddInvestment';
import InvestmentsList from 'components/InvestmentsList';
import { Link } from 'react-router-dom';

type S = {
}
type DispatchedP = {
    hideFooter: () => void;
    hideHeader: () => void;
    showFooter: () => void;
    showHeader: () => void
}
class Dashboard extends React.Component<DispatchedP, S> {
    constructor(props: any) {
        super(props);
    }

    public componentWillMount() {
        this.props.hideFooter();
        this.props.hideHeader();
    }
    public componentWillUnmount() {
        this.props.showFooter();
        this.props.showHeader();
    }

    public render() {
        return (
            <div className="page page--dashboard">
                <div className="page--dashboard__menu">
                    <ul>
                        <li><Link to={'/'}><img src="home.png" /></Link></li>
                        <li><Link to={'/login'}><i className="fas fa-sign-in-alt" /></Link></li>
                        <li><Link to={'/dashboard/'}>Lista inwestycji</Link></li>
                        <li><Link to={'/dashboard/investments/add'}>Dodaj inwestycje</Link></li>
                    </ul>
                </div>
                <div className="page--dashboard__content">
                    <Switch>
                        <Route exact path={'/dashboard/'} component={InvestmentsList} />
                        <Route exact path={'/dashboard/login'} component={Login} />
                        <Route exact path={'/dashboard/investments/add'} component={AddInvestment} />
                        <Route exact path={'/dashboard/investments/:investmentId'} component={() => <h1>Edytuj inwestycje</h1>} />
                    </Switch>
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
};

export default connect(null, mapDispatchToProps)(Dashboard)