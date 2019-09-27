import React from 'react';

function MonthDropdownOption({ value, title, _selected }) {

    return (
        <option key value={value} selected={_selected}>
            {title}
        </option>

    );
}

export default MonthDropdownOption;
