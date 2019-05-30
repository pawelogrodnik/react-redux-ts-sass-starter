export class Validators {    
    public static required = value => {
        let valueTemp = value;

        if (typeof valueTemp == 'string') {
            valueTemp = valueTemp.trim();
        }

        return valueTemp ? undefined : 'Pole wymagane';
    };
    
}
