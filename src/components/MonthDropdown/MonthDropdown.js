import React, { useEffect } from 'react';
import MonthDropdownOption from './MonthDropdownOption';
import moment from 'moment';


class MonthDropdown extends React.Component {

  componentsDidUpdate(oldProps) {
    // debugger;
    // if (oldProps.month !== this.props.month) {
    //   this.setState({ defaultValue: oldProps.month })
    // }
  }


  render() {
    const { year, month, handleChange } = this.props;
    let options = [];
    for (var i = 0; i < 12; i++) {
      let _moment = moment([year, i]);
      let _selected = month === i;
      options.push(<MonthDropdownOption key={i} value={i} title={_moment.format("MMMM")} _selected={_selected}></MonthDropdownOption>)
    }
    console.info('MonthDropdown rendered');
    return (
      <select defaultValue={month} onChange={handleChange}>
        {options}
      </select>
    );
  }
}

export default MonthDropdown;