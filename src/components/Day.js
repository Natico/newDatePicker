import React from 'react';

function Day(props) {
    var currentDate = props.currentDate
       return (
        <div>{currentDate.getDate()}</div>
    )
}

export default Day;