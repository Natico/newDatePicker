import React from 'react';
import moment from 'moment';
import Day from './Day';

export default function Mounth(props) {

    let mounthIndex = props.mounth.index;
    let year = props.year;
    let currentMoment = moment([year, mounthIndex]).month(mounthIndex);

    let mounthDaysCount = currentMoment.daysInMonth();
    const days = []
    for (let i = 1; i <= mounthDaysCount; i++) {
        days.push(<Day dayObject={{ indexOfDay: i, indexOfMounth: mounthIndex, year }}></Day>)
    }

    return (
        <div>
            <div >{mounthIndex}-{currentMoment.format("MMMM")}</div>
            <div >{days}</div>
        </div>

    )
}