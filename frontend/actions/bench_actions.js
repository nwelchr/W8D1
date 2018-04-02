import * as BenchApiUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const START_LOADING_ALL_BENCHES = "START_LOADING_ALL_BENCHES";

export const startLoadingAllBenches = () => ({
  type: START_LOADING_ALL_BENCHES,
});

const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches
});

export const fetchBenches = () => dispatch => {
  dispatch(startLoadingAllBenches());
  return BenchApiUtil.fetchBenches().then(benches => dispatch(receiveBenches(benches)));
};
