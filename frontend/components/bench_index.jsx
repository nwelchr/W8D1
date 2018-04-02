import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
	componentDidMount() {
		this.props.fetchBenches();
	}

	render() {
		if(this.props.loading) return (<h1>Loading...</h1>);
		else return this.props.benches.map( (bench, idx) => <BenchIndexItem key={idx} bench={bench} />);
	}
}

export default BenchIndex;
