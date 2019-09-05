import * as ViewManagementModule from 'Modules/ViewManagementModule';
import * as InvestmentEnumTypes from './EnumTypes/InvestmentEnumTypes';
import { OptionsElement } from 'Models/ViewManagementModel';

export const investmentTypeMap = new Map<InvestmentEnumTypes.InvestmentType, string>([
    [InvestmentEnumTypes.InvestmentType.diamonds, 'Diamenty'],
    [InvestmentEnumTypes.InvestmentType.dorm, 'Akademik'],
    [InvestmentEnumTypes.InvestmentType.flat, 'Mieszkanie'],
    [InvestmentEnumTypes.InvestmentType.gold, 'Złoto'],
    [InvestmentEnumTypes.InvestmentType.hotel, 'Hotel'],
    [InvestmentEnumTypes.InvestmentType.parcel, 'Działka'],
    [InvestmentEnumTypes.InvestmentType.token, 'Tokeny'],
    [InvestmentEnumTypes.InvestmentType.vehicle, 'Samochód'],
    [InvestmentEnumTypes.InvestmentType.whisky, 'Whisky'],
    [InvestmentEnumTypes.InvestmentType.franchise, 'Franczyza'],
])

export const investmentTypeArray = [InvestmentEnumTypes.InvestmentType.diamonds, InvestmentEnumTypes.InvestmentType.dorm, InvestmentEnumTypes.InvestmentType.flat,
InvestmentEnumTypes.InvestmentType.gold, InvestmentEnumTypes.InvestmentType.hotel, InvestmentEnumTypes.InvestmentType.parcel, InvestmentEnumTypes.InvestmentType.token,
InvestmentEnumTypes.InvestmentType.vehicle, InvestmentEnumTypes.InvestmentType.whisky, InvestmentEnumTypes.InvestmentType.franchise
];

export const RiskArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const stopienRyzyka: Array<ViewManagementModule.Types.OptionsElement> = [
    {
        label: 'DUZY',
        value: 'DUZY'
    },
    {
        label: 'OGROMNY',
        value: 'OGROMNY'
    }
]
export const oprocentowanie: Array<ViewManagementModule.Types.OptionsElement> = [
    {
        label: 'ENORMOUS',
        value: 'ENORMOUS'
    },
    {
        label: 'BIG',
        value: 'BIG'
    }
]
export const duration: Array<ViewManagementModule.Types.OptionsElement> = [
    {
        label: 'LONG',
        value: 'LONG'
    },
    {
        label: 'SHORT',
        value: 'SHORT'
    }
]

function getOptionsList(arrayEnums: Array<any>, dictionary?: Map<any, any>): Array<OptionsElement> {
    const optionsElement: Array<OptionsElement> = [];
    arrayEnums.map((value, i) => {
        optionsElement.push({
            label: dictionary ? dictionary.get(value) : value,
            value
        })
    })
    return optionsElement;
}

export const getInvestmentOptions = getOptionsList(investmentTypeArray, investmentTypeMap)
export const riskOptions = getOptionsList(RiskArray);



export const MappedErrorResponse = new Map<string, string>([
    ['Passwords not pass', 'Hasła nie są takie same']
])