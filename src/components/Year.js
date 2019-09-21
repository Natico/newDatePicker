import React, { Fragment } from 'react';
import moment from 'moment';
import Mounth from './Mounth';


const Year = (props) => {

    let currentMoment = moment(props.yearNumber);


    return (
        <div>
            <div>{props.yearNumber}</div>
            <Mounth year={props.yearNumber} mounth={{ index: 0 }}></Mounth>
            {/* <Mounth year={props.yearNumber} mounth={{ index: 1 }}></Mounth>
            <Mounth year={props.yearNumber} mounth={{ index: 2 }}></Mounth>
            <Mounth year={props.yearNumber} mounth={{ index: 3 }}></Mounth>
            <Mounth year={props.yearNumber} mounth={{ index: 4 }}></Mounth>
            <Mounth year={props.yearNumber} mounth={{ index: 5 }}></Mounth>
            <Mounth year={props.yearNumber} mounth={{ index: 6 }}></Mounth>
            <Mounth year={props.yearNumber} mounth={{ index: 7 }}></Mounth>
            <Mounth year={props.yearNumber} mounth={{ index: 8 }}></Mounth>
            <Mounth year={props.yearNumber} mounth={{ index: 9 }}></Mounth>
            <Mounth year={props.yearNumber} mounth={{ index: 10 }}></Mounth>
            <Mounth year={props.yearNumber} mounth={{ index: 11 }}></Mounth> */}
        </div>
    )
}

export default Year;