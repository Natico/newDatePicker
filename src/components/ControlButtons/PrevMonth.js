import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

function PrevMonth({onClickAction}) {
    let appContext = useContext(AppContext);    
	return <a className='prevMonth' disabled={appContext.month === 0} onClick={onClickAction}>PrevMonth</a>;
}

export default PrevMonth;
