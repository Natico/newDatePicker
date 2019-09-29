import React from 'react';
import YearDropdownOptions from '../YearDropdown/YearDropdownOptions';


class YearDropdown extends React.Component {
  render() {
    const { year, handleChange } = this.props;
    let telorance = 5;
    let options = [];
    for (var i = Number(year) - telorance; i < Number(year) + telorance; i++) {
      options.push(<YearDropdownOptions key={i} value={i} title={i}></YearDropdownOptions>)
    }

    console.info('YearDropdown rendered');
    return (
      <select value={Number(year)} onChange={handleChange}>
        {options}
      </select>

    );
  }

}

export default YearDropdown;
