import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

function PrevMonth({onClickAction}) {
    let appContext = useContext(AppContext);    
	return <button className='prevMonth' disabled={appContext.viewDate.month === 0} onClick={onClickAction}>PrevMonth</button>;
}

export default PrevMonth;
