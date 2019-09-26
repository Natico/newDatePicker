import React from "react";

const Header = function ({ weekdaysShort, weekNum }, context) {
	let Ths = [];
	let weekNumTh = weekNum ? (
		<th>{"week"}</th>
	) : null;
	for (let i = 0; i < 7; i++) {
		Ths.push(<th key={i}>{weekdaysShort[i]}</th>);
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

export default Header;
