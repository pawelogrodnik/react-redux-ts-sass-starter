import * as React from 'react';
import * as InvestmentsModule from 'Modules/InvestmentModule';
import { history } from 'src/App';

type P = {
    investment: InvestmentsModule.Types.Investment;
    action: () => void;
}

export const InvestmentBlock = (props: P) => {
    return (
        <div className="investmentBlock">
            <div className="investmentBlock__inner">
                <div className="investmentBlock__icon">
                    <img src={props.investment.detailerParams.images.thumbnail}/>
                </div>
                <div className="investmentBlock__desc">
                    {props.investment.basicParams.description}
                </div>
                <div className="investmentBlock__action">
                    <button className="btn--bordered" onClick={() => props.action()}>Lorem ipsum</button>
                </div>
            </div>
        </div>
    )
}


export const InvestmentList = (props: {investmentList: Array<InvestmentsModule.Types.Investment>, action: (id: number) => void}) => {
    return (
        <>
            {props.investmentList.map((investment,i) => (
                <InvestmentBlock key={Math.random()} investment={investment} action={() => props.action(investment.id)} />
            ))}
        </>
    )    
}