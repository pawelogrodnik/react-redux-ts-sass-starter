import * as React from 'react';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import * as InvestmentModule from 'Modules/InvestmentModule';
import { baseURL } from './../Connectors/config';
import ImageSlider from './../components/ImageSlider';
import ContactBanner from './ContactBanner';
import * as Dictionary from './../Models/Dictionary';
import { replace } from 'react-router-redux';

type P = {
    match: any;
}
const { flat, parcel, hotel, vehicle, gold, token, whisky, diamonds, dorm, franchise } = InvestmentModule.EnumTypes.InvestmentType;
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
        window.scrollTo(0,0);
    }

    public checkPlural(value:number) {
        if(value === 1) {
            return `${value} miesiąc`
        } else if(value % 10 >= 2 && value % 10 <= 4 && (value % 100 < 10 || value % 100 >= 20)) {
            return `${value} miesiące`
        } else {
            return `${value} miesięcy`
        }
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
                                        <div>
                                            <i className="fas fa-percent" />
                                            Oprocentowanie</div>
                                        <div>
                                            {this.props.investmentDetails.basicParams.interest === 0 ?
                                                "Zmienne" : this.props.investmentDetails.basicParams.interest + "%"
                                            }
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div>
                                            <i className="fas fa-business-time" />
                                            Czas trwania
                                            </div>
                                        <div>
                                            {this.props.investmentDetails.basicParams.duration === 0 ? (
                                                "Nieoznaczony" 
                                            ) : (
                                                this.checkPlural(this.props.investmentDetails.basicParams.duration)
                                            )
                                            }
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div>
                                            <i className="fas fa-tachometer-alt" />
                                            Skala ryzyka
                                        </div>
                                        <div>
                                            {this.props.investmentDetails.basicParams.risk} / 10
                                        </div>
                                    </div>
                                </div>
                                <div className="row row--divider">
                                    {/* <div className="col">
                                        {this.props.investmentDetails.basicParams.interest === 0 ?
                                            "Zmienne" : this.props.investmentDetails.basicParams.interest + "%"
                                        }
                                    </div>
                                    <div className="col">
                                        {this.props.investmentDetails.basicParams.duration === 0 ?
                                            "Nieoznaczony" : this.props.investmentDetails.basicParams.duration + " miesięcy"
                                        }
                                    </div>
                                    <div className="col">{this.props.investmentDetails.basicParams.risk} /10</div> */}
                                </div>
                            </div>
                            <div className="productDataDetails">
                                {(this.props.investmentDetails.type === parcel || this.props.investmentDetails.type === flat || this.props.investmentDetails.type === hotel || this.props.investmentDetails.type === dorm) &&
                                    <div><span>Powierzchnia [m2]:</span><span>{this.props.investmentDetails.detailedParams.usableArea}</span></div>}
                                {this.props.investmentDetails.type === parcel &&
                                    <div><span>PUM [m2]:</span><span>{this.props.investmentDetails.detailedParams.pum}</span></div>}
                                {this.props.investmentDetails.type === flat &&
                                    <div><span>Piętro:</span><span>{this.props.investmentDetails.detailedParams.floorNumber}</span></div>}
                                <div><span>Cena w serwisie:</span><span>{new Intl.NumberFormat('pl-PL').format(parseFloat(this.props.investmentDetails.detailedParams.priceService.replace(/\s+/g, '').replace(/,/g, '.')))} zł</span></div>
                                
                                {(this.props.investmentDetails.type === flat || this.props.investmentDetails.type === parcel || this.props.investmentDetails.type === hotel || this.props.investmentDetails.type === dorm || this.props.investmentDetails.type === vehicle || this.props.investmentDetails.type === franchise) &&
                                    <div><span>Cena rynkowa:</span><span>{new Intl.NumberFormat('pl-PL').format(parseFloat(this.props.investmentDetails.detailedParams.priceMarket.replace(/\s+/g, '').replace(/,/g, '.')))} zł</span></div>}
                                    {/* {Number(this.props.investmentDetails.detailedParams.priceMarket.replace(/\s+/g, '')).toLocaleString()} */}
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
                            <div className="center">
                                {this.props.investmentDetails.detailedParams.attachments && this.props.investmentDetails.detailedParams.attachments.map((item, i) => {
                                    return <a key={i} href={`${baseURL}/${item.path}`} target="_blank"><button type="button" className="btn btn--main btn--inline" >Pobierz Załącznik  {this.props.investmentDetails.detailedParams.attachments.length > 1 && i + 1}</button></a>
                                })}
                            </div>
                            {this.props.investmentDetails.type === token && (
                                <div className="center">
                                    <a href="https://ico.sapiency.io/ref/yhtbak" target="_blank" ><button className="btn btn--main btn--buyNow">Kup teraz!</button></a>
                                </div>
                            )}
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