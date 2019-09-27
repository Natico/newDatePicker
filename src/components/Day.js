import React from 'react';
import { classNames } from '../util'

function Day({ day, otherMonth, weekEnd }) {

    let dayClassList = [];
    if (!otherMonth) dayClassList.push('otherMonth');
    if (weekEnd) dayClassList.push('weekEnd');

    console.log(dayClassList)
    let dayClassListStr = classNames(dayClassList);


    return (
        <React.Fragment>
            <span className={dayClassListStr}>{day ? day.format('DD') : ''}</span>
        </React.Fragment>
    )
}

export default Day;