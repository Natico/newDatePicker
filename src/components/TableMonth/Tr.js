import React from "react";
import { cloneDeep } from "lodash";
import TableMonthTD from "./Td";

const TableMonthTR = function({ weekNum, drawDate }) {
	let dayTd = [];
	let weekNumTd = weekNum ? (
		<TableMonthTD dayStr={weekNum}></TableMonthTD>
	) : null;
	for (let i = 0; i <= 6; i++) {
		let dayClone = cloneDeep(drawDate);
		drawDate.add(1, "d");
		dayTd.push(<TableMonthTD dayStr={dayClone.format("DD")}></TableMonthTD>);
	}

	return (
		<tr>
			{weekNumTd}
			{dayTd}
		</tr>
	);
};

export default TableMonthTR;
