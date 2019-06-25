import * as React from 'react';
import * as InvestmentsModule from 'Modules/InvestmentModule';
import { baseURL } from 'src/Connectors/config';


type P = {
    investment: InvestmentsModule.Types.Investment;
    action: () => void;
}

export const InvestmentBlock = (props: P) => {
    return (
        <div className="investmentBlock">
            <div className="investmentBlock__inner">
                <div className="investmentBlock__icon">
                    {props.investment.detailedParams.images && props.investment.detailedParams.images.background &&
                        <img src={`${baseURL}/${props.investment.detailedParams.images.thumbnail.path}`} width={'150'} />
                    }
                </div>
                <div className="investmentBlock__desc">
                    <h3>{props.investment.basicParams.title}</h3>
                    <p>{props.investment.basicParams.description}</p>
                </div>
                <div className="investmentBlock__action">
                    <button className="btn--bordered" onClick={() => props.action()}>Lorem ipsum</button>
                </div>
            </div>
        </div>
    )
}


export const InvestmentList = (props: { investmentList: Array<InvestmentsModule.Types.Investment>, action: (id: number) => void }) => {
    return (
        <>
        {
            props.investmentList.map((investment, i) => (
                <InvestmentBlock key={Math.random()} investment={investment} action={() => props.action(investment.id)} />
            ))
        }
        </>
    )    
}