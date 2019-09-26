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
            const gainz = [
                {
                    salesman: {
                        id: 12,
                        username: "mati",
                        refCode: "mati",
                        street: "mati",
                        houseNumber: "mati",
                        flatNumber: "mati",
                        postCode: "mati",
                        city: "mati",
                        country: "mati",
                        voivodeship: "mati",
                        firstname: "mati",
                        lastname: "mati",
                    },
                    revenue: 232323
                },
                {
                    salesman: {
                        id: 12,
                        username: "mati",
                        refCode: "mati",
                        street: "mati",
                        houseNumber: "mati",
                        flatNumber: "mati",
                        postCode: "mati",
                        city: "mati",
                        country: "mati",
                        voivodeship: "mati",
                        firstname: "mati",
                        lastname: "mati",
                    },
                    revenue: 232323
                }
            ]
            return (
                <div className="details">
                    {this.props.purchasedInvestmentDetails && (
                        <>
                            <h2>{productName}</h2>
                            <h3>Dane firmy</h3>
                            <div className="details__container">
                                <div className="details__field">
                                    <label>Nazwa firmy</label>
                                    <p>{company.companyName}</p>
                                </div>
                                <div className="details__field">
                                    <label>Email</label>
                                    <p>{company.email}</p>
                                </div>
                                <div className="details__field">
                                    <label>Kraj</label>
                                    <p>{company.address.country}</p>
                                </div>
                                <div className="details__field">
                                    <label>Województwo</label>
                                    <p>{company.address.voivodeship}</p>
                                </div>
                                <div className="details__field">
                                    <label>Miasto</label>
                                    <p>{company.address.city}</p>
                                </div>
                                <div className="details__field">
                                    <label>Ulica</label>
                                    <p>{company.address.street}</p>
                                </div>
                                <div className="details__field">
                                    <label>Numer domu</label>
                                    <p>{company.address.houseNumber}</p>
                                </div>
                                <div className="details__field">
                                    <label>Numer mieszkania</label>
                                    <p>{company.address.flatNumber}</p>
                                </div>
                                <div className="details__field">
                                    <label>Kod pocztowy</label>
                                    <p>{company.address.postCode}</p>
                                </div>
                            </div>
                            <h3>Dane kupującego</h3>
                            <div className="details__container">
                                <div className="details__field">
                                    <label>Nazwa użytkownika</label>
                                    <p>{buyer.username}</p>
                                </div>
                                <div className="details__field">
                                    <label>Imię</label>
                                    <p>{buyer.firstname}</p>
                                </div>
                                <div className="details__field">
                                    <label>Nazwisko</label>
                                    <p>{buyer.lastname}</p>
                                </div>
                                <div className="details__field">
                                    <label>Województwo</label>
                                    <p>{buyer.voivodeship}</p>
                                </div>
                                <div className="details__field">
                                    <label>Miasto</label>
                                    <p>{buyer.city}</p>
                                </div>
                                <div className="details__field">
                                    <label>Ulica</label>
                                    <p>{buyer.street}</p>
                                </div>
                                <div className="details__field">
                                    <label>Numer domu</label>
                                    <p>{buyer.houseNumber}</p>
                                </div>
                                <div className="details__field">
                                    <label>Numer mieszkania</label>
                                    <p>{buyer.flatNumber}</p>
                                </div>
                                <div className="details__field">
                                    <label>Kod pocztowy</label>
                                    <p>{buyer.postCode}</p>
                                </div>
                                <div className="details__field">
                                    <label>Numer telefonu</label>
                                    <p>{buyer.phone}</p>
                                </div>
                                <div className="details__field">
                                    <label>Data dodania</label>
                                    <p>{moment(buyer.dateAdd).format('DD-MM-YYYY HH:mm')}</p>
                                </div>
                            </div>
                            {gainz.length > 0 && (
                                <>
                                    <h3>Dane sprzedawców</h3>
                                    {gainz.map((gain, idx) => {
                                        return (
                                            <div className="details__container" key={idx}>
                                                <div className="details__field">
                                                    <label>Nazwa użytkownika</label>
                                                    <p>{gain.salesman.username}</p>
                                                </div>
                                                <div className="details__field">
                                                    <label>Imię</label>
                                                    <p>{gain.salesman.firstname}</p>
                                                </div>
                                                <div className="details__field">
                                                    <label>Nazwisko</label>
                                                    <p>{gain.salesman.lastname}</p>
                                                </div>
                                                <div className="details__field">
                                                    <label>Województwo</label>
                                                    <p>{gain.salesman.voivodeship}</p>
                                                </div>
                                                <div className="details__field">
                                                    <label>Miasto</label>
                                                    <p>{gain.salesman.city}</p>
                                                </div>
                                                <div className="details__field">
                                                    <label>Ulica</label>
                                                    <p>{gain.salesman.street}</p>
                                                </div>
                                                <div className="details__field">
                                                    <label>Numer domu</label>
                                                    <p>{gain.salesman.houseNumber}</p>
                                                </div>
                                                <div className="details__field">
                                                    <label>Numer mieszkania</label>
                                                    <p>{gain.salesman.flatNumber}</p>
                                                </div>
                                                <div className="details__field">
                                                    <label>Kod pocztowy</label>
                                                    <p>{gain.salesman.postCode}</p>
                                                </div>
                                                <div className="details__field">
                                                    <label>Identyfikator</label>
                                                    <p>{gain.salesman.refCode}</p>
                                                </div>
                                                <div className="details__field">
                                                    <label>Dochód sprzedawcy</label>
                                                    <p>{gain.revenue} PLN</p>
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