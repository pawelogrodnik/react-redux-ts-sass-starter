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
])

export const investmentTypeArray = [InvestmentEnumTypes.InvestmentType.diamonds, InvestmentEnumTypes.InvestmentType.dorm, InvestmentEnumTypes.InvestmentType.flat,
    InvestmentEnumTypes.InvestmentType.gold, InvestmentEnumTypes.InvestmentType.hotel, InvestmentEnumTypes.InvestmentType.parcel, InvestmentEnumTypes.InvestmentType.token,
    InvestmentEnumTypes.InvestmentType.vehicle, InvestmentEnumTypes.InvestmentType.whisky
];

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

function getList(arrayEnums: Array<any>, dictionary: Map<any, any>): Array<OptionsElement> {
    const optionsElement: Array<OptionsElement> = [];
    arrayEnums.map((value,i) => {
        optionsElement.push({
            label: dictionary.get(value),
            value
        })
    })
    return optionsElement;
}

export const getInvestmentOptions = getList(investmentTypeArray, investmentTypeMap)