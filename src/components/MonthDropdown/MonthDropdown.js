import React from 'react';
import MonthDropdownOption from './MonthDropdownOption';
import moment from 'moment';


function MonthDropdown({ year, month }) {
  
  let options = [];
  for (var i = 0; i < 12; i++) {
    let _moment = moment([year, i]).month(i);
    options.push(<MonthDropdownOption key={i} value={i} title={_moment.format("MMMM")} ></MonthDropdownOption>)
  }
  return (
    <select value={month}>
      {options}
    </select>
  );
}

export default MonthDropdown;