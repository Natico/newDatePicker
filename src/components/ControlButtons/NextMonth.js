import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

function NextMonth({onClickAction}) {
    let appContext = useContext(AppContext);    
	return <button className='NextMonth' disabled={appContext.viewDate.month === 11} onClick={onClickAction}>NextMonth</button>;
}

export default NextMonth;
