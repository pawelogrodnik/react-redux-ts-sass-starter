import * as React from 'react';
import HeroBanner from './HeroBanner';
import IntroTextBanner from './IntroTextBanner';
import SearchInvestmentsForm from './Forms/SearchInvestmentsForm';
import { InvestmentList } from './InvestmentBlock';

type S = {
    investmentsVisible?: boolean;
};
const initialValues = {
    percentage: {
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
export default class HomePage extends React.Component<any, S> {
    constructor(props: any) {
        super(props);
        this.state = {
            investmentsVisible: false
        };
    }

    public render() {
        const list = new Array(3).fill(true);
        return (
            <div className="page page--homepage">
                <HeroBanner backgroundImageSrc={'/background.png'} title={'Działamy na rzecz inwestorów'} description={'Witamy na pierwszym w Polsce portalu z najlepszymi okazjami inwestycyjnymi w jednym miejscu. Przed Państwem przygoda w postaci podróży po wyselekcjonowanych inwestycjach z całego kraju.'} buttonText={'Lorem ipsum'} />
                <IntroTextBanner title={'Wyszukiwarka inwestycji'} description={'Proszę ustawić suwaki zgodnie ze swoimi preferencjami. Określone przez Państwa parametry wyłonią inwestycję, spełniającą Państwa wymagania.'} />
                <SearchInvestmentsForm onSubmit={(data) => this.setState({ investmentsVisible: true })} initialValues={initialValues} />
                {this.state.investmentsVisible && <InvestmentList list={list} />}
            </div>
        );
    }
}
