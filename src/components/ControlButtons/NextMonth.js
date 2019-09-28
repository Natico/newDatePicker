import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

function NextMonth({onClickAction}) {
    let appContext = useContext(AppContext);    
	return <a className='NextMonth' disabled={appContext.month === 11} onClick={onClickAction}>NextMonth</a>;
}

export default NextMonth;
