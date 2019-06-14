
export type InvestmentStore = {
    investmentList: Array<Investment>
    activeInvestmentId: number;
    investmentDetails: Investment;
};


export type Investment = {
    id: number;
    company_name: string;
    estimated_risk: number;
    interest: number;
    duration: number;
}