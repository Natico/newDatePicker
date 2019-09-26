import React from 'react';
import moment from "moment";
import TableMonth from './components/TableMonth/TableMonth';
import MonthDropdown from './components/MonthDropdown/MonthDropdown';
import YearDropdown from './components/YearDropdown/YearDropdown';
import AppContext from './context/AppContext'



class App extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      year: '2019',
      month: "08",
      day: "12"
    };
  }

  changeMonth(e) {
    this.setState({
      month: e.target.value
    })
  }

  changeYear(e) {
    this.setState({
      year: e.target.value
    })
  }

  render() {
    let today = moment();
    let defaultDate = null;

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
        <YearDropdown handleChange={this.changeYear.bind(this)} year={this.state.year}></YearDropdown>
        <MonthDropdown handleChange={this.changeMonth.bind(this)} year={this.state.year} month={this.state.month}></MonthDropdown>
        <h4>{today.format('YYYY/MM/DD')}</h4>
        <TableMonth year={this.state.year} month={this.state.month} day={this.state.day}></TableMonth>
      </AppContext.Provider>

    );
  }


}

export default App;
