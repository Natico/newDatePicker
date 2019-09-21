import React from 'react';
import Mounth from './Mounth';

function Year(props) {
    var currentDate = props.currentDate
       return (
        <div>{currentDate.getDate()}</div>
    )
}

export default Year;