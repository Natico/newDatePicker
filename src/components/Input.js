import React from 'react';
import { classNames } from '../util'
import moment from 'moment';

function Input({ year, month, day }) {

    let date = moment([year, month, day]).format('YYYY/MM/DD')


    return (
        <React.Fragment>
            <input  value={date}/>
        </React.Fragment>
    )
}

export default Input;