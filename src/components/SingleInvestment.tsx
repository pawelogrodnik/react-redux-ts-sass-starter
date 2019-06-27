import * as React from 'react';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import * as InvestmentModule from 'Modules/InvestmentModule';
import { baseURL } from './../Connectors/config';
import ImageSlider from './../components/ImageSlider';
import ContactBanner from './ContactBanner';
import * as Dictionary from './../Models/Dictionary';

type P = {
    match: any;
}
const { flat, parcel, hotel, vehicle, gold, token, whisky, diamonds, dorm } = InvestmentModule.EnumTypes.InvestmentType;
type DispatchedP = {
    getInvestmentDetails: (id: number) => void;
}

type ConnectedP = {
    investmentDetails: InvestmentModule.Types.Investment
}

class SingleInvestment extends React.Component<DispatchedP & ConnectedP & P, any> {
    constructor(props: DispatchedP & ConnectedP & P) {
        super(props);
    }
    public async componentDidMount() {
        await this.props.getInvestmentDetails(this.props.match.params.id);
    }
    public render() {
        return (
            <div className="page page--singleInvestment">
                {this.props.investmentDetails && (
                    <div className="activeInvestmentDetails">
                        {this.props.investmentDetails.detailedParams.images.background &&
                            <div style={{ backgroundImage: `url(${baseURL}/${this.props.investmentDetails.detailedParams.images.background.path})` }} className="singleBackgroundImage" />}
                        <div className="container">
                            <ImageSlider images={this.props.investmentDetails.detailedParams.images.other} />
                            <h1 className="titleLabel">{this.props.investmentDetails.basicParams.title}</h1>
                            <h2 className="subtitleLabel">{Dictionary.investmentTypeMap.get(this.props.investmentDetails.type)}</h2>
                            <p>{this.props.investmentDetails.basicParams.description}</p>
                            <div className="singleProductComparision">
                                <div className="row grey">
                                    <div className="col">
                                        <i className="fas fa-percent" />
                                        Oprocentowanie</div>
                                    <div className="col">
                                        <i className="fas fa-business-time" />
                                        Czas trwania</div>
                                    <div className="col">
                                        <i className="fas fa-tachometer-alt" />
                                        Skala ryzyka</div>
                                </div>
                                <div className="row">
                                    <div className="col">{this.props.investmentDetails.basicParams.interest} %</div>
                                    <div className="col">{this.props.investmentDetails.basicParams.duration} miesięcy</div>
                                    <div className="col">{this.props.investmentDetails.basicParams.risk}</div>
                                </div>
                            </div>
                            <div className="productDataDetails">
                                {(this.props.investmentDetails.type === parcel || this.props.investmentDetails.type === flat || this.props.investmentDetails.type === hotel || this.props.investmentDetails.type === dorm) &&
                                    <div><span>Powierzchnia [m2]:</span><span>{this.props.investmentDetails.detailedParams.usableArea}</span></div>}
                                {this.props.investmentDetails.type === parcel &&
                                    <div><span>PUM [m2]:</span><span>{this.props.investmentDetails.detailedParams.pum}</span></div>}
                                {this.props.investmentDetails.type === flat &&
                                    <div><span>Piętro:</span><span>{this.props.investmentDetails.detailedParams.floorNumber}</span></div>}
                                <div><span>Cena w serwisie:</span><span>{this.props.investmentDetails.detailedParams.priceService} zł</span></div>

                                {(this.props.investmentDetails.type === flat || this.props.investmentDetails.type === parcel || this.props.investmentDetails.type === hotel || this.props.investmentDetails.type === dorm || this.props.investmentDetails.type === vehicle) &&
                                    <div><span>Cena rynkowa:</span><span>{this.props.investmentDetails.detailedParams.priceMarket} zł</span></div>}
                                {this.props.investmentDetails.type === parcel &&
                                    <div><span>ROI:</span><span>{this.props.investmentDetails.detailedParams.roi}</span></div>}
                                {this.props.investmentDetails.type === hotel &&
                                    <div><span>Ilość pokoi:</span><span>{this.props.investmentDetails.detailedParams.roomsCount}</span></div>}
                                {this.props.investmentDetails.type === hotel &&
                                    <div><span>Przychody:</span><span>{this.props.investmentDetails.detailedParams.income}</span></div>}
                                {this.props.investmentDetails.type === gold && (
                                    <>
                                    <div><span>Masa:</span><span>{this.props.investmentDetails.detailedParams.mass}</span></div>
                                    <div><span>Próba:</span><span>{this.props.investmentDetails.detailedParams.goldtrial}</span></div>
                                    </>
                                )}
                                {this.props.investmentDetails.type === whisky && (
                                    <>
                                    <div><span>Destylarnia:</span><span>{this.props.investmentDetails.detailedParams.distillery}</span></div>
                                    <div><span>Wersja:</span><span>{this.props.investmentDetails.detailedParams.version}</span></div>
                                    <div><span>Butelkowanie:</span><span>{this.props.investmentDetails.detailedParams.bottling}</span></div>
                                    <div><span>Objętość:</span><span>{this.props.investmentDetails.detailedParams.volume}</span></div>
                                    <div><span>Wiek:</span><span>{this.props.investmentDetails.detailedParams.age}</span></div>
                                    <div><span>Pochodzenie:</span><span>{this.props.investmentDetails.detailedParams.origin}</span></div>
                                    </>
                                )}
                               {this.props.investmentDetails.type === diamonds && (
                                    <>
                                    <div><span>Masa:</span><span>{this.props.investmentDetails.detailedParams.mass}</span></div>
                                    <div><span>Szlif:</span><span>{this.props.investmentDetails.detailedParams.cut}</span></div>
                                    <div><span>Barwa:</span><span>{this.props.investmentDetails.detailedParams.color}</span></div>
                                    <div><span>Czystość:</span><span>{this.props.investmentDetails.detailedParams.purity}</span></div>
                                    </>
                                )}
                                {this.props.investmentDetails.type === token && (
                                    <>
                                    <div><span>Minimalny wkład:</span><span>{this.props.investmentDetails.detailedParams.minInsert}</span></div>
                                    <div><span>Aktualny kurs:</span><span>{this.props.investmentDetails.detailedParams.currentCourse}</span></div>
                                    <div><span>Planowany debiut (IPO):</span><span>{this.props.investmentDetails.detailedParams.ipo}</span></div>
                                    </>
                                )}
                            </div>
                        </div>
                        <ContactBanner />
                    </div>
                )}
            </div>
        );
    }
}

const mapDispatchToProps: DispatchedP = {
    getInvestmentDetails: (id: number) => InvestmentModule.Actions.getInvestmentDetails(id)
};

function mapStateToProps(state: RootState): ConnectedP {
    return {
        investmentDetails: state.investmentStore.investmentDetails
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleInvestment)