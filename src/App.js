import React from "react";
import moment from "moment";
import TableMonth from "./components/TableMonth/TableMonth";
import MonthDropdown from "./components/MonthDropdown/MonthDropdown";
import YearDropdown from "./components/YearDropdown/YearDropdown";
import AppContext from "./context/AppContext";
import NextMonth from "./components/ControlButtons/NextMonth";
import PrevMonth from "./components/ControlButtons/PrevMonth";
import ViewInput from "./components/ViewInput";
import './App.less';
// import 'semantic-ui-css/semantic.min.css'

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
				year: null,
				month: null,
				day: null
			},
			value: null
		};
	}

	changeMonth(e) {
		let newValue = e.target.value;
		this.setState(prevState => ({
			viewDate: {
				...prevState.viewDate,
				month: newValue
			}
		}));
	}

	changeYear(e) {
		let newValue = e.target.value;
		this.setState((prevState) => ({
			viewDate: {
				...prevState.viewDate,
				year: newValue
			}
		}))
	}

	nextMonthEvent() {
		let currentMonth = Number(this.state.viewDate.month);
		let currentYear = Number(this.state.viewDate.year);
		if (currentMonth < 11 && currentMonth >= 0) {
			this.setState(prevState => ({
				viewDate: {
					...prevState.viewDate,
					month: currentMonth + 1
				}
			}));
		} else if (currentMonth == 11) {
			this.setState(prevState => ({
				viewDate: {
					...prevState.viewDate,
					month: 0,
					year: currentYear + 1
				}
			}));
		}
	}

	prevMonthEvent() {
		let currentMonth = Number(this.state.viewDate.month);
		let currentYear = Number(this.state.viewDate.year);
		if (currentMonth <= 11 && currentMonth > 0) {
			this.setState(prevState => ({
				viewDate: {
					...prevState.viewDate,
					month: currentMonth - 1
				}
			}));
		} else if (currentMonth == 0) {
			this.setState(prevState => ({
				viewDate: {
					...prevState.viewDate,
					month: 11,
					year: currentYear - 1
				}
			}));
		}
	}

	onDaySelect(selectedDay) {
		if (selectedDay) {

			this.setState(prevState => ({
				selectedDate: {
					...prevState.viewDate,
					year: selectedDay.get('year'),
					month: selectedDay.get('month'),
					day: selectedDay.get('date')
				}
			}));

			this.updateAltField(selectedDay)

		}
	}

	updateAltField(dateObj) {
		debugger;
		if (dateObj) {
			this.setState({
				value: dateObj.format('x')
			});
		}
	}

	// altField: null, // Alternate field to update in synch with the datepicker 
	// altFormat: null, // Date format for alternate field, defaults to dateFormat 

	events = {
		onDaySelect: this.onDaySelect.bind(this),
		updateAltField: this.updateAltField.bind(this)

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
			<AppContext.Provider value={this.state}>
				<span>{this.state.value}</span>
				<ViewInput
					year={this.state.selectedDate.year}
					month={this.state.selectedDate.month}
					day={this.state.selectedDate.day}
					events={this.events}>
				</ViewInput>

				<div>
					<NextMonth onClickAction={this.nextMonthEvent.bind(this)}></NextMonth>
					<PrevMonth onClickAction={this.prevMonthEvent.bind(this)}></PrevMonth>
				</div>
				<div>
					<YearDropdown
						handleChange={this.changeYear.bind(this)}
						year={this.state.viewDate.year}>

					</YearDropdown>
					<MonthDropdown
						handleChange={this.changeMonth.bind(this)}
						year={this.state.viewDate.year}
						month={this.state.viewDate.month}>

					</MonthDropdown>
				</div>
				<div>
					<TableMonth
						year={this.state.viewDate.year}
						month={this.state.viewDate.month}
						day={this.state.viewDate.day}
						events={this.events}>

					</TableMonth>
				</div>
			</AppContext.Provider>
		);
	}
}

export default App;
