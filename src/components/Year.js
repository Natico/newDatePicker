import React, { Fragment } from 'react';
import moment from 'moment';
import Month from './Month';


const Year = ({year, month}) => {
    const months = []
    for (let i = 0; i < 12; i++) {
        months.push(<Month key={i} month={i} year={year} ></Month>)
    }

    return (
        <div>            
            <h1>{year}</h1>
            {months}
        </div>
    )
}

export default Year;