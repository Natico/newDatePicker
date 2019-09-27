import React, { useContext } from "react";
import { cloneDeep } from "lodash";
import Day from '../Day';
import AppContext from '../../context/AppContext'

const Week = function ({ weekNum, drawDate }) {
	const AppData = useContext(AppContext);
	let dayTd = [];
	let weekNumTd = weekNum ? (
		<td weeknumber={weekNum}><span>{weekNum}</span></td>
	) : null;
	for (let i = 0; i <= 6; i++) {
		let dayClone = cloneDeep(drawDate);
		drawDate.add(1, "d");
		let otherMonth = dayClone.get('month') === Number(AppData.month);
		let weekEnd = dayClone.get('day') === 6;
		dayTd.push(<td key={i}><Day otherMonth={otherMonth} day={dayClone} weekEnd={weekEnd}></Day></td>);
	}
	console.info('Week rendered');
	return (
		<tr>
			{weekNumTd}
			{dayTd}
		</tr>
	);
};

export default Week;
