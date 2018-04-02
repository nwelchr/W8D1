import React from 'react';

const BenchIndexItem = (props) => {
  const bench = props.bench;
	return (
			<ul>
				<li>Latitude: {bench.lat}</li>
				<li>Longitude: {bench.lng}</li>
				<li>Description: {bench.description}</li>
			</ul>
	);
};

export default BenchIndexItem;
