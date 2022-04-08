import React from "react";

function Guarantee({ source, service, description }) {
	return (
		<div className="card-container">
			<img src={source} alt={service} />
			<h3>{service}</h3>
			<p>{description}</p>
		</div>
	);
}

export default Guarantee;
