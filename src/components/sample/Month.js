import React from 'react';
import moment from 'moment';
import Day from '../Day';

export default function Month({ month, year }) {

    let _moment = moment([year, month]).month(month);
    const _daysInMonth = _moment.daysInMonth();
    const _days = []

    for (let i = 1; i <= _daysInMonth; i++) {
        let _weekNumber = moment([year, month, i]).week();
        let _DayOfWeek = moment([year, month, i]).day();
        _days.push(<Day key={i} day={i} month={month} year={year} week={_weekNumber} _DayOfWeek={_DayOfWeek}></Day>)
    }

    console.info('Month rendered');
    return (
        <div>
            <h2 >{month + 1}-{_moment.format("MMMM")}</h2>
            <div >{_days}</div>
        </div>
    )
}