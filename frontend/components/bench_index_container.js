import BenchIndex from './bench_index';
import { fetchBenches } from '../actions/bench_actions';
import { connect } from 'react-redux';
import { benchesAsArray } from '../reducers/selectors';

const mapStateToProps = (state) => {
  let benches = state.entities.benches;
  if (Object.keys(benches)) benches = benchesAsArray(benches);
  return {
    benches: benches,
    loading: state.ui.loading.indexLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBenches: () => dispatch(fetchBenches())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);
