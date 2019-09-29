import React from "react";
import Week from "./Week";

const Month = function ({ firstWeekNum, weeksCount, drawDate, currentMonth, events }) {
	let weekTr = [];
	for (let i = 0; i < weeksCount; i++) {
		weekTr.push(
			<Week
				key={i}
				weekNum={firstWeekNum + i}
				drawDate={drawDate}
				events={events}></Week>
		);
	}
	console.info('Month rendered');
	return <tbody>{weekTr}</tbody>;
};

export default Month;
