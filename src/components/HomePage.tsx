import * as React from 'react';
import HeroBanner from './HeroBanner';
import IntroTextBanner from './IntroTextBanner';
import SearchInvestmentsForm from './Forms/SearchInvestmentsForm';
import { InvestmentList, InvestmentBlock } from './InvestmentBlock';

export default class HomePage extends React.Component<any, any> {
    public render() {
        const list = new Array(3).fill(true);
        return (
            <div className="page page--homepage">
                {/* <HeroBanner backgroundImageSrc={''} title={'Lorem ipsum'} description={'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'} buttonText={'Lorem ipsum'}/>
                <IntroTextBanner title={'Wyszukiwarka inwestycji'} description={'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'}/>
                <SearchInvestmentsForm onSubmit={(data)=>console.log(data)}/>
                <InvestmentList list={list}/> */}
            </div>
        )
    }
}