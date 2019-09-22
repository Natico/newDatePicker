import React from 'react';

function YearDropdownOptions({ key, value, title ,selected}) {

    return (
        <option key={key} value={value} selected={selected}>
            {title}
        </option>

    );
}

export default YearDropdownOptions;
