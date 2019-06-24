import * as React from 'react';
import HeroBanner from './HeroBanner';
import IntroTextBanner from './IntroTextBanner';
import SearchInvestmentsForm from './Forms/SearchInvestmentsForm';
import { InvestmentList } from './InvestmentBlock';
import { createSerachQuery } from 'src/Connectors/config';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import * as InvestmentsModule from 'Modules/InvestmentModule';
import { connect } from 'react-redux';
import { history } from 'src/App';

type S = {
    investmentsVisible?: boolean;
};
const initialValues = {
    interest: {
        min: 2,
        max: 7
    },
    duration: {
        min: 12,
        max: 36
    },
    risk: {
        min: 2,
        max: 6
    }
};

type DispatchedP = {
    getInvestments: (params?: URLSearchParams) => void;
    setActiveInvestmentId: (investmentId: number) => void;
}

type ConnectedP = {
    investmentList: Array<InvestmentsModule.Types.Investment>
}

class HomePage extends React.Component<DispatchedP & ConnectedP, S> {
    constructor(props: DispatchedP & ConnectedP) {
        super(props);
        this.state = {
            investmentsVisible: false
        };
    }

    public handleInvestmentFormSubmit = async (data: any) => {
        this.setState({ investmentsVisible: false })
        const query = createSerachQuery(data);
        await this.props.getInvestments(query)
        this.setState({ investmentsVisible: true })
    }
    public investmentClickAction = (id: number) => {
        this.props.setActiveInvestmentId(id);
        history.push(`/investment/${id}`)
    }
    public render() {
        const { investmentList } = this.props;
        return (
            <div className="page page--homepage">
                <HeroBanner backgroundImageSrc={'/background.png'} title={'Działamy na rzecz inwestorów'} description={'Witamy na pierwszym w Polsce portalu z najlepszymi okazjami inwestycyjnymi w jednym miejscu. Przed Państwem przygoda w postaci podróży po wyselekcjonowanych inwestycjach z całego kraju. Znajdą tutaj Państwo zarówno długoterminowe inwestycje w postaci mieszkań jak i krótkoterminowe inwestycje typu buy and sell.'} buttonText={'Wyszukaj inwestycję'} />
                <IntroTextBanner title={'Wyszukiwarka inwestycji'} description={'Proszę ustawić suwaki zgodnie ze swoimi preferencjami. Określone przez Państwa parametry wyłonią inwestycję, spełniającą Państwa wymagania.'} />
                <SearchInvestmentsForm onSubmit={this.handleInvestmentFormSubmit} initialValues={initialValues} />
                {this.state.investmentsVisible &&
                    <> { investmentList.length > 0 ? <InvestmentList investmentList={investmentList} action={this.investmentClickAction} /> : <div className="container"><h2>Brak wyników dla podanych parametrów</h2></div> } </>
                }
            </div>
        );
    }
}

const mapDispatchToProps: DispatchedP = {
    getInvestments: (params?: URLSearchParams) => InvestmentsModule.Actions.getInvestments(params),
    setActiveInvestmentId: (investmentId: number) => InvestmentsModule.Actions.setActiveInvestmentId(investmentId),

};

function mapStateToProps(state: RootState): ConnectedP {
    return {
        investmentList: state.investmentStore.investmentList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)