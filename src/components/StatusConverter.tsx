import * as React from 'react';
import * as moment from 'moment';

export default class StatusConverter extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        if (this.props && this.props.original) {
            return (
                <div>
                    {
                        (this.props.original.status === 'active' && moment().format('YYYY-MM-DD') >= moment(this.props.original.basicParams.startDate).format('YYYY-MM-DD')) && <span>Aktywny</span>
                    }
                    {
                        (this.props.original.status === 'active' && moment().format('YYYY-MM-DD') < moment(this.props.original.basicParams.startDate).format('YYYY-MM-DD')) && <span>Oczekujący</span>
                    }
                    {
                        this.props.original.status === 'archived' && <span>Archiwalny</span>
                    }
                </div>
            )
        } else {
            return null
        }

    }
}