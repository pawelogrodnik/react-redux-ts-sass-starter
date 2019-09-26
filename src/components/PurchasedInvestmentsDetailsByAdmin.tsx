import * as React from 'react';
import * as InvestmentsModule from 'Modules/InvestmentModule';
import { RootState } from 'src/Store/Reducers/_RootReducer';
import { connect } from 'react-redux';
import * as moment from 'moment';
import { history } from 'src/App';

type DispatchedP = {
    getPurchasedInvestmentsDetailsByAdmin: (id) => void;
}
type ConnectedP = {
    purchasedInvestmentDetails: InvestmentsModule.Types.PurchasedInvestmentDetails;
}
type P = {
    match: any;
}
class PurchasedInvestmentsDetailsByAdmin extends React.Component<DispatchedP & ConnectedP & P, any> {
    public async componentWillMount() {
        // console.log(this.props.match.params.saleId)
        await this.props.getPurchasedInvestmentsDetailsByAdmin(this.props.match.params.saleId)
        console.log(this.props.purchasedInvestmentDetails)
    }

    public render() {
        if (this.props.purchasedInvestmentDetails) {
            const { productName, company, buyer, gains, } = this.props.purchasedInvestmentDetails;
            return (
                <div className="details">
                    {this.props.purchasedInvestmentDetails && (
                        <>
                            <h2>{productName}</h2>
                            <h3>Dane firmy</h3>
                            <div className="details__container">
                                <div className="details__field">
                                    <label>Nazwa firmy</label>
                                    <p>{company.companyName ? company.companyName : 'Brak'}</p>
                                </div>
                                <div className="details__field">
                                    <label>Email</label>
                                    <p>{company.email ? company.email : 'Brak'}</p>
                                </div>
                                <div className="details__field">
                                    <label>Kraj</label>
                                    <p>{company.address.country ? company.address.country : 'Brak'}</p>
                                </div>
                                <div className="details__field">
                                    <label>Województwo</label>
                                    <p>{company.address.voivodeship ? company.address.voivodeship : 'Brak'}</p>
                                </div>
                                <div className="details__field">
                                    <label>Miasto</label>
                                    <p>{company.address.city ? company.address.city : 'Brak'}</p>
                                </div>
                                <div className="details__field">
                                    <label>Ulica</label>
                                    <p>{company.address.street ? company.address.street : 'Brak'}</p>
                                </div>
                                <div className="details__field">
                                    <label>Numer domu</label>
                                    <p>{company.address.houseNumber ? company.address.houseNumber : 'Brak'}</p>
                                </div>
                                <div className="details__field">
                                    <label>Numer mieszkania</label>
                                    <p>{company.address.flatNumber ? company.address.flatNumber : 'Brak'}</p>
                                </div>
                                <div className="details__field">
                                    <label>Kod pocztowy</label>
                                    <p>{company.address.postCode ? company.address.postCode : 'Brak'}</p>
                                </div>
                            </div>
                            {buyer && (
                                <>
                                    <h3>Dane kupującego</h3>
                                    <div className="details__container">
                                        <div className="details__field">
                                            <label>Nazwa użytkownika</label>
                                            <p>{buyer.username ? buyer.username : 'Brak'}</p>
                                        </div>
                                        <div className="details__field">
                                            <label>Imię</label>
                                            <p>{buyer.firstname ? buyer.firstname : 'Brak'}</p>
                                        </div>
                                        <div className="details__field">
                                            <label>Nazwisko</label>
                                            <p>{buyer.lastname ? buyer.lastname : 'Brak'}</p>
                                        </div>
                                        <div className="details__field">
                                            <label>Województwo</label>
                                            <p>{buyer.voivodeship ? buyer.voivodeship : 'Brak'}</p>
                                        </div>
                                        <div className="details__field">
                                            <label>Miasto</label>
                                            <p>{buyer.city ? buyer.city : 'Brak'}</p>
                                        </div>
                                        <div className="details__field">
                                            <label>Ulica</label>
                                            <p>{buyer.street ? buyer.street : 'Brak'}</p>
                                        </div>
                                        <div className="details__field">
                                            <label>Numer domu</label>
                                            <p>{buyer.houseNumber ? buyer.houseNumber : 'Brak'}</p>
                                        </div>
                                        <div className="details__field">
                                            <label>Numer mieszkania</label>
                                            <p>{buyer.flatNumber ? buyer.flatNumber : 'Brak'}</p>
                                        </div>
                                        <div className="details__field">
                                            <label>Kod pocztowy</label>
                                            <p>{buyer.postCode ? buyer.postCode : 'Brak'}</p>
                                        </div>
                                        <div className="details__field">
                                            <label>Numer telefonu</label>
                                            <p>{buyer.phone ? buyer.phone : 'Brak'}</p>
                                        </div>
                                        <div className="details__field">
                                            <label>Data sprzedaży</label>
                                            <p>{buyer.dateAdd ? moment(buyer.dateAdd).format('DD-MM-YYYY HH:mm') : 'Brak'}</p>
                                        </div>
                                    </div>
                                </>
                            )}
                            {gains.length > 0 && (
                                <>
                                    <h3>Dane sprzedawców</h3>
                                    {gains.map((gain, idx) => {
                                        return (
                                            <div className="details__container" key={idx}>
                                                <div className="details__field">
                                                    <label>Nazwa użytkownika</label>
                                                    <p>{gain.salesman.username ? gain.salesman.username : 'Brak'}</p>
                                                </div>
                                                <div className="details__field">
                                                    <label>Imię</label>
                                                    <p>{gain.salesman.firstname ? gain.salesman.firstname : 'Brak'}</p>
                                                </div>
                                                <div className="details__field">
                                                    <label>Nazwisko</label>
                                                    <p>{gain.salesman.lastname ? gain.salesman.lastname : 'Brak'}</p>
                                                </div>
                                                <div className="details__field">
                                                    <label>Województwo</label>
                                                    <p>{gain.salesman.voivodeship ? gain.salesman.voivodeship : 'Brak'}</p>
                                                </div>
                                                <div className="details__field">
                                                    <label>Miasto</label>
                                                    <p>{gain.salesman.city ? gain.salesman.city : 'Brak'}</p>
                                                </div>
                                                <div className="details__field">
                                                    <label>Ulica</label>
                                                    <p>{gain.salesman.street ? gain.salesman.street : 'Brak'}</p>
                                                </div>
                                                <div className="details__field">
                                                    <label>Numer domu</label>
                                                    <p>{gain.salesman.houseNumber ? gain.salesman.houseNumber : 'Brak'}</p>
                                                </div>
                                                <div className="details__field">
                                                    <label>Numer mieszkania</label>
                                                    <p>{gain.salesman.flatNumber ? gain.salesman.flatNumber : 'Brak'}</p>
                                                </div>
                                                <div className="details__field">
                                                    <label>Kod pocztowy</label>
                                                    <p>{gain.salesman.postCode ? gain.salesman.postCode : 'Brak'}</p>
                                                </div>
                                                <div className="details__field">
                                                    <label>Identyfikator</label>
                                                    <p>{gain.salesman.refCode ? gain.salesman.refCode : 'Brak'}</p>
                                                </div>
                                                <div className="details__field">
                                                    <label>Dochód sprzedawcy</label>
                                                    <p>{gain.revenue ? new Intl.NumberFormat('pl-PL').format(gain.revenue) : 'Brak'} PLN</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </>
                            )}
                        </>
                    )}
                    <button className="btn btn--main" onClick={() => history.push('/dashboard/purchasedInvestments')}>Powrót</button>
                </div>
            )
        } else {
            return null;
        }
    }
}

const mapDispatchToProps: DispatchedP = {
    getPurchasedInvestmentsDetailsByAdmin: (id) => InvestmentsModule.Actions.getPurchasedInvestmentsDetailsByAdmin(id)
};
function mapStateToProps(state: RootState): ConnectedP {
    return {
        purchasedInvestmentDetails: state.investmentStore.purchasedInvestmentDetails
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PurchasedInvestmentsDetailsByAdmin)