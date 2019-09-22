import React from 'react';

function MonthDropdownOption({ key, value, title }) {

    return (
        <option key={key} value={value}>
            {title}
        </option>

    );
}

export default MonthDropdownOption;
