import React from 'react';

function Day({ day, otherMonth, weekEnd }) {

    let dayClassList = [];
    // otherMonth ? '' : dayClassList.push('otherMonth');
    // weekEnd ? dayClassList.push('weekEnd') : '';


    let dayClassListStr = dayClassList.filter(item => !!item).join(' ');


    return (
        <React.Fragment>
            <span className={dayClassListStr}>{day ? day.format('DD') : ''}</span>
        </React.Fragment>
    )
}

export default Day;