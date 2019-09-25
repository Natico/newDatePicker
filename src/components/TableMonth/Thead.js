import React, { useContext } from "react";
import TableMonthTH from "./Th";

const TableMonthThead = function({ weekdaysShort, weekNum }, context) {
	let Ths = [];
	let weekNumTh = weekNum ? (
		<TableMonthTH dayStr={"week"}></TableMonthTH>
	) : null;
	for (let i = 0; i < 7; i++) {
		Ths.push(<TableMonthTH dayStr={weekdaysShort[i]}></TableMonthTH>);
	}

	return (
		<thead>
			<tr>
				{weekNumTh}
				{Ths}
			</tr>
		</thead>
	);
};

export default TableMonthThead;
