import React from 'react';

function YearDropdownOptions({ value, title }) {

    return (
        <option key value={value}>
            {title}
        </option>
    );
}

export default YearDropdownOptions;
