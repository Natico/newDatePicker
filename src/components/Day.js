import React from 'react';
import { classNames } from '../util'

export default class Day extends React.Component{
    selectDate(){
        // this;
        debugger;
    }
    render(){
            const { day, otherMonth, weekEnd, events } = this.props;
            let dayClassList = [];
            if (!otherMonth) dayClassList.push("otherMonth");
            if (weekEnd) dayClassList.push("weekEnd");

            console.log(dayClassList);
            let dayClassListStr = classNames(dayClassList);
            return (
                <React.Fragment>
                    <span 
                    className={dayClassListStr}
                    onClick={
                            ()=>events.onDaySelect(day)
                        }
                    
                        >
                        {day ? day.format("DD") : ""}
                    </span>
                </React.Fragment>
            );
        }
}
