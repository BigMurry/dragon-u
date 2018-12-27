import { all, put, takeEvery, select, call } from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import _get from 'lodash/get';
import _toLower from 'lodash/toLower';
import Web3 from 'web3';
import {tryEnableWeb3} from '../lib/share';
import {getContractInstance} from '../artifacts';
import {parse} from 'dragon-g';

import {
  setWeb3Store,
  setAccountStore,
  setParsedGeneStore,
  setErrorStore
} from './store';

function heartbeat(interval) {
  return eventChannel(emitter => {
    setTimeout(() => {
      emitter({type: 'HEART_BEAT'});
    }, 10000);
    const iv = setInterval(() => {
      emitter({
        type: 'HEART_BEAT'
      });
    }, interval);
    return () => {
      clearInterval(iv);
    };
  });
}

function * updateAccount(action) {
  let web3 = yield select(state => _get(state, 'web3', null));
  if (!web3 && typeof window !== 'undefined') {
    if (typeof window.web3 !== 'undefined') {
      web3 = new Web3(window.web3.currentProvider);
    } else {
      web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/bf28a9be07f4453bb111125224c1c9ba'));
    }
    yield put(setWeb3Store(web3));
  }
  if (web3) {
    try {
      const connected = yield call(web3.eth.net.isListening);
      if (connected) {
        yield call(tryEnableWeb3);
        const accounts = yield call(web3.eth.getAccounts);
        if (accounts && accounts.length > 0) {
          yield put(setAccountStore(_toLower(accounts[0])));
        }
      }
    } catch (e) {}
  }
}

function * fetchGeneSaga(action) {
  const {id} = action.payload;
  let web3 = yield select(state => _get(state, 'web3', null));
  if (web3) {
    try {
      const dragon721 = getContractInstance(web3, '721');
      const rawGenes = yield call(dragon721.methods.getGenome(id).call);
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
  const walletChann = heartbeat(1000); // 1s heartbeat
  yield all([
    takeEvery(walletChann, updateAccount),
    takeEvery('FETCH_GENE_SAGA', fetchGeneSaga)
  ]);
}
