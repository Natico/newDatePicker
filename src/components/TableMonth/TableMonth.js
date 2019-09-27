import React from "react";
import moment from "moment";
import Header from "./Header";
import Month from "./Month";
import "./TableMonthStyle.css";

export default class TableMonth extends React.Component {
	constructor(props) {
		super(props);
		// Don't call this.setState() here!
		this.state = {
			year: this.props.year,
			month: this.props.month,
			day: this.props.day
		};
	}

	render() {
		// let state = this.state;
		let _moment = moment([this.props.year, this.props.month, this.props.day]);
		let currentYear = _moment.year();
		let currentMonth = _moment.month();
		// let currentDay = _moment.day();
		// let today = moment();
		let daysInMonth = _moment.daysInMonth();
		let firstDay = 0; // 0 baraie miladi 6 baraie jalali
		let daysInWeek = 7;
		let dayOfWeek = moment([currentYear, currentMonth, 1]).day();

		let firstDayOfMonth = moment([currentYear, currentMonth, 1]);
		// let lastDayOfMonth = moment([currentYear, currentMonth, daysInMonth]);

		let firstWeekNum = firstDayOfMonth.isoWeek();
		// let weekNumberOfLastDay = lastDayOfMonth.isoWeek();

		let leadDays = dayOfWeek - firstDay + (daysInWeek % daysInWeek);

		let weeksCount = Math.ceil((leadDays + daysInMonth) / daysInWeek); //find first day of month
		let drawDate = firstDayOfMonth; //find first day of month
		drawDate.add(-leadDays, "d"); //find first day of month table

		let weekdaysShort = moment.weekdaysShort(true);
		console.info('TableMonth rendered');
		return (
			<table className='table-month'>
				<Header
					weekdaysShort={weekdaysShort}
					weekNum={true}></Header>
				<Month
					firstWeekNum={firstWeekNum}
					weeksCount={weeksCount}
					drawDate={drawDate}
					currentMonth={currentMonth}></Month>
				<caption><h4>{_moment.format('YYYY/MM/DD')}</h4></caption>
			</table>


		);
	}
}
