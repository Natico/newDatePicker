import React from "react";
import moment from "moment";
import TableMonthThead from "./Thead";
import TableMonthTbody from "./Tbody";
import "./TableMonthStyle.css";

export default class TableMonth extends React.Component {
	constructor(props) {
		super(props);
		// Don't call this.setState() here!
		this.state = { year: "2019", month: "11", day: "18" };
	}

	render() {
		debugger;
		const state = this.state;
		const _moment = moment([state.year, state.month-1, state.day]);
		let currentYear = _moment.year();
		let currentMonth = _moment.month();
		let currentDay = _moment.day();
		let today = moment();
		let daysInMonth = _moment.daysInMonth();
		let firstDay = 0; // 0 baraie miladi 6 baraie jalali
		let daysInWeek = 7;
		let dayOfWeek = moment([currentYear, currentMonth, 1]).day();

		let firstDayOfMonth = moment([currentYear, currentMonth, 1]);
		let lastDayOfMonth = moment([currentYear, currentMonth, daysInMonth]);

		let firstWeekNum = firstDayOfMonth.isoWeek();
		let weekNumberOfLastDay = lastDayOfMonth.isoWeek();

		var leadDays = dayOfWeek - firstDay + (daysInWeek % daysInWeek);

		var weeksCount = Math.ceil((leadDays + daysInMonth) / daysInWeek); //find first day of month
		var drawDate = firstDayOfMonth; //find first day of month
		drawDate.add(-leadDays, "d"); //find first day of month table

		let weekdaysShort = moment.weekdaysShort(true);

		return (
			<table className='table-month'>
				<TableMonthThead
					weekdaysShort={weekdaysShort}
					weekNum={true}></TableMonthThead>
				<TableMonthTbody
					firstWeekNum={firstWeekNum}
					weeksCount={weeksCount}
					drawDate={drawDate}></TableMonthTbody>
			</table>
		);
	}
}
