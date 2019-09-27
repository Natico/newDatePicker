import React from 'react';
import YearDropdownOptions from '../YearDropdown/YearDropdownOptions';


function YearDropdown({ year, handleChange }) {
  let telorance = 5;
  let options = [];
  for (var i = Number(year) - telorance; i < Number(year) + telorance; i++) {
    options.push(<YearDropdownOptions key={i} value={i} title={i}></YearDropdownOptions>)
  }
  return (
    <select defaultValue={year} onChange={handleChange}>
      {options}
    </select>

  );
}

export default YearDropdown;
