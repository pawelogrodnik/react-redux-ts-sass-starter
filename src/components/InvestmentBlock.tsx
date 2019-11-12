import * as React from 'react';
import * as InvestmentsModule from 'Modules/InvestmentModule';
import { baseURL } from 'src/Connectors/config';


type P = {
    investment: InvestmentsModule.Types.Investment;
    action: (blockRef: HTMLDivElement) => void;
    isTilesView: boolean;
}

export const InvestmentBlock = (props: P) => {
    let blockRef: any = React.createRef();
    return (
        <div className={`investmentBlock ${props.isTilesView ? 'investmentBlock--tile-view' : 'investmentBlock--list-view'}`} ref={(block) => { blockRef = block }}>
            <div className="investmentBlock__inner">
                <div className={`investmentBlock__icon investmentBlock__icon--${props.isTilesView ? 'tile-view' : 'list-view'}`}>
                    {props.isTilesView && <h3>{props.investment.basicParams.title}</h3>}
                    {props.investment.detailedParams.images && props.investment.detailedParams.images.thumbnail &&
                        <img src={`${baseURL}/${props.investment.detailedParams.images.thumbnail.path}`} width={'150'} />
                    }
                </div>
                {!props.isTilesView && (
                    <div className="investmentBlock__desc">
                        <h3>{props.investment.basicParams.title}</h3>
                        <p>{props.investment.basicParams.description}</p>
                    </div>
                )}
                <div className={`investmentBlock__action investmentBlock__action--${props.isTilesView ? 'tile-view' : 'list-view'}`}>
                    <button className={`btn--bordered ${props.isTilesView ? 'btn--center' : ''}`} onClick={() => props.action(blockRef)}>Zobacz więcej</button>
                </div>
            </div>
        </div>
    )
}


export const InvestmentList = (props: { investmentList: Array<InvestmentsModule.Types.Investment>, action: (id: number, ref: HTMLDivElement) => void, isTilesView: boolean }) => {
    return (
        <div className={`investmentContainer ${props.isTilesView ? 'investmentContainer--tile-view' : 'investmentContainer--list-view'}`}>
            {
                props.investmentList.map((investment, i) => (
                    <InvestmentBlock key={Math.random()} isTilesView={props.isTilesView} investment={investment} action={(blockRef: HTMLDivElement) => props.action(investment.id, blockRef)} />
                ))
            }
        </div>
    )
}