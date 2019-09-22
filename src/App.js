import React from 'react';
import Year from './components/Year';
import Month from './components/Month';
import YearDropdown from './components/YearDropdown/YearDropdown';
import MonthDropdown from './components/MonthDropdown/MonthDropdown';
import moment from 'moment';
import TableMonth from './components/Table'



function App() {
  const _moment = moment();
  let currentYear=_moment.year();
  let currentMonth=_moment.month();

  return (
    <div>
      <div>
      <MonthDropdown year={currentYear} month={currentMonth}></MonthDropdown>
      <YearDropdown year={currentYear} ></YearDropdown>
      <Month month={currentMonth} year={currentYear}></Month>
      </div>
      <br/>
      <br/>
      <TableMonth></TableMonth>
      <br/>
      <br/>

      <Year year={currentYear} month={currentMonth}></Year>
    </div>

  );
}

export default App;
