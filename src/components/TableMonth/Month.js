import React from "react";
import Week from "./Week";

const Month = function ({ firstWeekNum, weeksCount, drawDate, currentMonth }) {
	let weekTr = [];
	for (let i = 0; i < weeksCount; i++) {
		weekTr.push(
			<Week
				key={i}
				weekNum={firstWeekNum + i}
				drawDate={drawDate}></Week>
		);
	}
	console.info('Month rendered');
	return <tbody>{weekTr}</tbody>;
};

export default Month;
