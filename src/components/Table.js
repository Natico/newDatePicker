import React from 'react';
import moment from 'moment';
import Day from './Day';


const DayDiv = ({ day }) => {
    if (day > 0) {
        return (
            <div><Day day={day}></Day></div>
        )
    } else {
        return (
            <div>-</div>
        )
    }

}





export default class TableMonth extends React.Component {



    render() {

        const _moment = this.props.moment;
        let currentYear = _moment.year();
        let currentMonth = _moment.month();
        let currentDay = _moment.day();
        let today = moment();
        let daysInMonth = _moment.daysInMonth();
        let firstDay = 0; // 0 baraie miladi 6 baraie jalali
        let daysInWeek = 7;
        let dayOfWeek = moment([currentYear, currentMonth, 1]).day()

        let firstDayOfMonth = moment([currentYear, currentMonth, 1]);
        let lastDayOfMonth = moment([currentYear, currentMonth, daysInMonth]);

        let weekNumberOfFirstDay = firstDayOfMonth.isoWeek();
        let weekNumberOfLastDay = lastDayOfMonth.isoWeek();

        var leadDays = dayOfWeek - firstDay + daysInWeek % daysInWeek;

        var numWeeks = Math.ceil((leadDays + daysInMonth) / daysInWeek);
        var drawDate = firstDayOfMonth;
        // drawDate.add(-leadDays - (fixedWeeks && (drawDate.dayOfWeek() === firstDay || drawDate.daysInMonth() < calendar.daysInWeek())? calendar.daysInWeek() : 0), 'd');
        drawDate.add(-leadDays, 'd');



        let weekdaysShort = moment.weekdaysShort();
        let Ths = [];

        for (let i = firstDay; i < 7; i++) {
            const Th = function ({ day }) {
                return (
                    <th>{day}</th>
                )
            }

            let daysShor = moment.weekdaysShort(true, i)
            Ths.push(<Th day={daysShor}></Th>);
        }




        /*********** */
        let daysss = [];
        let emptyDivCount = firstDayOfMonth.isoWeekday();
        for (let i = 0 - emptyDivCount; i <= _moment.daysInMonth(); i++) {
            daysss.push(<DayDiv day={i}></DayDiv>);
        }


        /*********** */
        let weekTr = []
        for (let i = 1; i <= numWeeks; i++) {
            const TRR = ({ weekNum }) => {

                const TD = ({ day }) => {
                    debugger;
                   
                    return (
                        <td>{day.format('DD')}</td>
                    )

                }

                let dayTd = []
                for (let i = 0; i <= 6; i++) {
                    drawDate.add(1, 'd');
                    dayTd.push(<TD day={drawDate}></TD>)

                }

                return (
                    <tr>
                        <td>{weekNum}</td>
                        {dayTd}
                    </tr>
                )
            }

            weekTr.push(<TRR weekNum={i} moment={_moment}></TRR>);
        }



        const tableStyle = {
            width: '300px'
        }

        return (
            <div>
                {firstDayOfMonth.day()}
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <td>week num</td>
                            {Ths}
                        </tr>
                    </thead>
                    <tbody>
                        {weekTr}
                    </tbody>

                </table>
            </div>

        );
    }
}