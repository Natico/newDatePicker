import React from 'react';

function MonthDropdownOption({ value, title }) {

    return (
        <option key value={value}>
            {title}
        </option>

    );
}

export default MonthDropdownOption;
