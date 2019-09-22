import React from 'react';
import moment from 'moment';

const TR = ({ weekNum }) => {

    return (
        <tr>
            <td>{weekNum}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    )
}


export default class TableMonth extends React.Component {



    render() {
        debugger;
        const _moment = this.props.moment;
        let currentYear = _moment.year();
        let currentMonth = _moment.month();
        let currentDay = _moment.day();

        let firstDayOfMonth = moment([currentYear, currentMonth, 1]);
        let lasttDayOfMonth = moment([currentYear, currentMonth, _moment.daysInMonth()]);

        let weekNumberOfFirstDay = firstDayOfMonth.isoWeek();
        let weekNumberOfLastDay = lasttDayOfMonth.isoWeek();

        let weekTr = []

        for (let i = weekNumberOfFirstDay; i <= weekNumberOfLastDay; i++) {
            debugger;
            weekTr.push(<TR weekNum={i}></TR>)
        }

        debugger;
        return (
            <table>
                <thead>
                    <tr>
                        <td>week num</td>
                        <td>sa</td>
                        <td>su</td>
                        <td>mo</td>
                        <td>tu</td>
                        <td>we</td>
                        <td>th</td>
                        <td>fr</td>
                    </tr>
                </thead>
                <tbody>
                    {weekTr}
                </tbody>

            </table>
        );
    }
}