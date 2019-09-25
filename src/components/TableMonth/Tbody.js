import React from "react";
import TableMonthTR from "./Tr";

const TableMonthTbody = function({ firstWeekNum, weeksCount, drawDate }) {
	let weekTr = [];
	for (let i = 0; i < weeksCount; i++) {
		weekTr.push(
			<TableMonthTR
				weekNum={firstWeekNum + i}
				drawDate={drawDate}></TableMonthTR>
		);
	}
	return <tbody>{weekTr}</tbody>;
};

export default TableMonthTbody;
