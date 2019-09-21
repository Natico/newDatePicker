import React from 'react';
import Day from './Day';

export default function Mounth(props){
    debugger;
    var currentDate = props.currentDate;
    
    return (        

                <Day currentDate={currentDate}></Day>        
    )
}