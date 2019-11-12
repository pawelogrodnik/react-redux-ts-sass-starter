export class Validators {
    public static required = value => {
        let valueTemp = value;

        if (typeof valueTemp == 'string') {
            valueTemp = valueTemp.trim();
        }
        return valueTemp || valueTemp === 0 ? undefined : 'Pole wymagane';
    };

    public static matchPassword = (value, allValues) => {
        return allValues.password === allValues.confirmation ? undefined : 'Niezgodność hasła';
    }

    public static salesmanValidate = (value, allValues) => {
        if ((allValues.legalForm == 'company') && (!allValues.nip || !allValues.companyName) && !value) {
            return 'Pole wymagane'
        }
    }
    public static passwordMinLength = value => {
        const regex = new RegExp('[!@#$%^&*(),.?":{}|<>]');
        console.log(regex.test(value));
        return value && value.length < 8 || !regex.test(value) ? `Hasło musi zawierać co najmniej 8 znaków oraz 1 znak specjalny` : undefined;
    }


}
