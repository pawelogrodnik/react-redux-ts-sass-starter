import * as React from 'react';

type P = {
    iconSrc: string;
    description: string;
    action: Function
}

export const InvestmentBlock = (props: P) => {
    return (
        <div className="investmentBlock">
            <div className="investmentBlock__inner">
                <div className="investmentBlock__icon">
                    <img src={props.iconSrc}/>
                </div>
                <div className="investmentBlock__desc">
                    {props.description}
                </div>
                <div className="investmentBlock__action">
                    <button className="btn--bordered" onClick={() => props.action()}>Lorem ipsum</button>
                </div>
            </div>
        </div>
    )
}
type InvestmentListP = {
    list: Array<any>
}
export const InvestmentList = (props: InvestmentListP) => {
    return (
        <>
            {props.list.map((e,i) => (
                <InvestmentBlock key={Math.random()} iconSrc={''} description={'Lorem ipsum dolor sit amet'} action={()=>console.log('klik')} />
            ))}
        </>
    )    
}