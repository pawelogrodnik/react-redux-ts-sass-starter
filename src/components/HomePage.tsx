import * as React from 'react';
import HeroBanner from './HeroBanner';
import IntroTextBanner from './IntroTextBanner';
import SearchInvestmentsForm from './Forms/SearchInvestmentsForm';
import { InvestmentList } from './InvestmentBlock';
type S = {
    investmentsVisible?: boolean
}
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
}
export default class HomePage extends React.Component<any, S> {
    constructor(props: any) {
        super(props);
        this.state = {
            investmentsVisible: false
        }
    }

    public render() {
        const list = new Array(3).fill(true);
        return (
            <div className="page page--homepage">
                <HeroBanner backgroundImageSrc={''} title={'Lorem ipsum'} description={'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'} buttonText={'Lorem ipsum'}/>
                <IntroTextBanner title={'Wyszukiwarka inwestycji'} description={'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'}/>
                <SearchInvestmentsForm onSubmit={(data)=>this.setState({investmentsVisible: true})} initialValues={initialValues}/>
                {this.state.investmentsVisible && (
                    <InvestmentList list={list}/>
                )}
            </div>
        )
    }
}