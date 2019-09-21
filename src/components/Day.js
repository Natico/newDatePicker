import React from 'react';
import moment from 'moment';

function Day(props) {

    return (
        <div>{moment([props.dayObject.year, props.indexOfMounth.year, props.dayObject.indexOfDay])}</div>
    )
}

export default Day;