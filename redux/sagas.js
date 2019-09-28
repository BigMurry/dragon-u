import { all, put, takeEvery, call } from 'redux-saga/effects';
import {getContractInstance} from '../artifacts';
import {parse} from 'dragon-g';

import {
  setParsedGeneStore,
  setErrorStore
} from './store';

function * fetchGeneSaga(action) {
  const {id, provider} = action.payload;
  if (provider) {
    try {
      const dragon721 = getContractInstance(provider, '721');
      const rawGenes = yield call(dragon721.getGenome, id);
      const parsedGene = parse(rawGenes);
      yield put(setParsedGeneStore(id, parsedGene));
    } catch (e) {
      yield put(setErrorStore(new Date().getTime(), 'web3 request failed.', 'error'));
    }
  } else {
    yield put(setErrorStore(new Date().getTime(), 'web3 not ready.', 'info'));
  }
}

export default function * rootSaga() {
  if (typeof window === 'undefined') {
    return;
  }
  // const walletChann = heartbeat(1000); // 1s heartbeat
  yield all([
    // takeEvery(walletChann, updateAccount),
    takeEvery('FETCH_GENE_SAGA', fetchGeneSaga)
  ]);
}
