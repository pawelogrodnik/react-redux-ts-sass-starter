import * as React from 'react';
import HeroBanner from './HeroBanner';
import IntroTextBanner from './IntroTextBanner';
import SearchInvestmentsForm from './Forms/SearchInvestmentsForm';
import { InvestmentList } from './InvestmentBlock';
import { createSerachQuery } from 'src/Connectors/config';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import * as InvestmentsModule from 'Modules/InvestmentModule';
import * as ViewManagementModule from 'Modules/ViewManagementModule';
import { connect } from 'react-redux';
import { history } from 'src/App';
import { promises } from 'fs';

type S = {
    investmentsVisible?: boolean;
    initialValues: any;
    path: string;
};

// let initialValues = {
//     interest: {
//         min: 6,
//         max: 20
//     },
//     duration: {
//         min: 6,
//         max: 36
//     },
//     risk: {
//         min: 3,
//         max: 10
//     }
// };

type DispatchedP = {
    getInvestments: (params?: URLSearchParams) => void;
    setActiveInvestmentId: (investmentId: number) => void;
    setBlueHeader: () => void;
    setWhiteHeader: () => void;
    setPrevPath: (prevPath:string) => void;
}

type ConnectedP = {
    investmentList: Array<InvestmentsModule.Types.Investment>
    prevPath: string;
    loaderVisible: boolean;
}

class HomePage extends React.Component<DispatchedP & ConnectedP, S> {
    constructor(props: DispatchedP & ConnectedP) {
        super(props);
        this.state = {
            investmentsVisible: false,
            initialValues : {
                interest: {
                    min: 6,
                    max: 20
                },
                duration: {
                    min: 6,
                    max: 36
                },
                risk: {
                    min: 3,
                    max: 10
                }
            },
            path: '/investment'
        };
    }
    public componentWillMount() {
        this.props.setWhiteHeader();
        if(this.props.prevPath.substring(0, this.props.prevPath.lastIndexOf('/')) == '/investment' && sessionStorage.getItem('searchValues')) {
            this.setState({initialValues: JSON.parse(sessionStorage.getItem('searchValues'))}, async () => {
                const query = createSerachQuery(this.state.initialValues)
                await this.props.getInvestments(query);
            });
            this.setState({ investmentsVisible: true })
        }
    }
    
    public componentDidUpdate() {
            if(this.props.prevPath.substring(0, this.props.prevPath.lastIndexOf('/')) == this.state.path && sessionStorage.getItem('searchValues')) {
                window.scrollTo(0, JSON.parse(sessionStorage.getItem('scrollToPosition'))-20);
                if(!this.props.loaderVisible) {
                    this.props.setPrevPath('')
                }
            }

    }

    public componentWillUnmount() {
        this.props.setBlueHeader()
    }

    public handleInvestmentFormSubmit = async (data: any) => {
        this.setState({ investmentsVisible: false })
        sessionStorage.setItem('searchValues', JSON.stringify(data));
        const query = createSerachQuery(data);
        await this.props.getInvestments(query)
        this.setState({ investmentsVisible: true })
    }
    public investmentClickAction = (id: number,ref:any) => {
        console.log(ref.offsetTop)
        sessionStorage.setItem('scrollToPosition', JSON.stringify(ref.offsetTop));
        // this.setState({scrollToPosition: ref.offsetTop})
        history.push(`/investment/${id}`)
        
    }
    public render() {
        const { investmentList } = this.props;
        return (
            <div className="page page--homepage">
                <HeroBanner backgroundImageSrc={'/background.png'} title={'Działamy na rzecz inwestorów'} description={'Witamy na pierwszym w Polsce portalu z najlepszymi okazjami inwestycyjnymi w jednym miejscu. Przed Państwem przygoda w postaci podróży po wyselekcjonowanych projektach z całego kraju. Znajdą tutaj Państwo zarówno długoterminowe lokaty kapitału w postaci mieszkań jak i krótkoterminowe inwestycje typu buy and sell.'} buttonText={'Wyszukiwarka'} />
                <IntroTextBanner title={'Wyszukiwarka inwestycji'} description={'Proszę ustawić suwaki zgodnie ze swoimi preferencjami. Określone przez Państwa parametry dobiorą inwestycję, spełniającą Państwa wymagania.'} />
                <SearchInvestmentsForm onSubmit={this.handleInvestmentFormSubmit} initialValues={this.state.initialValues} />
                {this.state.investmentsVisible &&
                    <> { investmentList.length > 0 ? <InvestmentList investmentList={investmentList} action={this.investmentClickAction} /> : <div className="container"><h2 className="noResult">Brak wyników dla podanych parametrów</h2></div> } </>
                }
            </div>
        );
    }
}

const mapDispatchToProps: DispatchedP = {
    getInvestments: (params?: URLSearchParams) => InvestmentsModule.Actions.getInvestments(params),
    setActiveInvestmentId: (investmentId: number) => InvestmentsModule.Actions.setActiveInvestmentId(investmentId),
    setBlueHeader: () => ViewManagementModule.Actions.setBlueHeader(),
    setWhiteHeader: () => ViewManagementModule.Actions.setWhiteHeader(),
    setPrevPath: (prevPath:string) => ViewManagementModule.Actions.setPrevPath(prevPath),
};

function mapStateToProps(state: RootState): ConnectedP {
    return {
        investmentList: state.investmentStore.investmentList,
        prevPath: state.viewManagementStore.prevPath,
        loaderVisible : state.viewManagementStore.loaderVisible
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)