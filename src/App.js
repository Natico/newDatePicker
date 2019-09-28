import React from "react";
import moment from "moment";
import TableMonth from "./components/TableMonth/TableMonth";
import MonthDropdown from "./components/MonthDropdown/MonthDropdown";
import YearDropdown from "./components/YearDropdown/YearDropdown";
import AppContext from "./context/AppContext";
import NextMonth from "./components/ControlButtons/NextMonth";
import PrevMonth from "./components/ControlButtons/PrevMonth";
import Input from "./components/Input";
import './App.less'

class App extends React.Component {
	constructor(props) {
		super(props);
		// Don't call this.setState() here!
		this.state = {
			viewDate: {
				year: 2019,
				month: 8,
				day: 12
			},
			selectedDate: {
				year: 2019,
				month: 8,
				day: 12
			}
		};
	}

	changeMonth(e) {
		this.setState({
			viewDate :{
				month: e.target.value
			}
		});
	}

	changeYear(e) {
		this.setState({
			viewDate :{
				year: e.target.value
			}
		});
	}

	nextMonthEvent() {
		let currentMonth = Number(this.state.month);
		if (currentMonth < 11 && currentMonth >= 0) {
			this.setState({
				viewDate :{
					month: currentMonth + 1
				}
			});
		}
	}

	prevMonthEvent() {
		let currentMonth = Number(this.state.month);
		if (currentMonth <= 11 && currentMonth > 0) {
			this.setState({
				viewDate :{
					month: currentMonth - 1
				}				
			});
		}
	}

	render() {
		let today = moment();
		// let defaultDate = null;

		// if (defaultDate) {

		// } else {
		//   this.setState({
		//     year: today.get('year'),
		//     month: today.get('month'),
		//     day: today.get('date')
		//   })
		// }

		return (
			<AppContext.Provider value={this.state.selectedDate}>
				{/* <Input
					year={this.state.selectedDate.year}
					month={this.state.selectedDate.month}
					day={this.state.selectedDate.day}></Input> */}
				<div>
					<NextMonth onClickAction={this.nextMonthEvent.bind(this)}></NextMonth>
					<PrevMonth onClickAction={this.prevMonthEvent.bind(this)}></PrevMonth>
				</div>
				<div>
					<YearDropdown
						handleChange={this.changeYear.bind(this)}
						year={this.state.viewDate.year}></YearDropdown>
					<MonthDropdown
						handleChange={this.changeMonth.bind(this)}
						year={this.state.viewDate.year}
						month={this.state.viewDate.month}></MonthDropdown>
				</div>
				<div>
					<TableMonth
						year={this.state.viewDate.year}
						month={this.state.viewDate.month}
						day={this.state.viewDate.day}></TableMonth>
				</div>
			</AppContext.Provider>
		);
	}
}

export default App;
