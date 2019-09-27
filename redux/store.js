import { createStore, applyMiddleware } from 'redux';
import {createActions, handleActions} from 'redux-actions';
import createSagaMiddleware from 'redux-saga';
import _get from 'lodash/get';
import rootSaga from './sagas';

export const {
  fetchDataSaga,
  setWeb3Store,
  setAccountStore,
  fetchGeneSaga,
  setParsedGeneStore,
  setErrorStore,
  clearErrorStore,
  onPinStore,
  offPinStore
} = createActions({
  FETCH_DATA_SAGA: (uri, pathname, key, showLoading, expire, method, body) => ({
    uri, pathname, key, showLoading, expire, method, body
  }),
  SET_WEB3_STORE: (web3) => ({web3}),
  SET_ACCOUNT_STORE: (account) => ({account}),
  FETCH_GENE_SAGA: (id) => ({id}),
  SET_PARSED_GENE_STORE: (id, parsedGene) => ({id, parsedGene}),
  SET_ERROR_STORE: (errId, msg, variant) => ({errId, msg, variant}),
  CLEAR_ERROR_STORE: (errId) => ({errId}),
  ON_PIN_STORE: (id) => ({id}),
  OFF_PIN_STORE: (id) => ({id})
});

const reducer = handleActions({
  SET_WEB3_STORE: (state, {payload: {web3}}) => {
    return {...state, web3};
  },
  SET_ACCOUNT_STORE: (state, {payload: {account}}) => {
    return {...state, account};
  },
  SET_PARSED_GENE_STORE: (state, {payload: {id, parsedGene}}) => {
    const genes = state.genes;
    return {...state, genes: {...genes, [id]: parsedGene}};
  },
  SET_ERROR_STORE: (state, {payload: {errId, msg, variant}}) => {
    return {...state, error: {id: errId, msg, variant}};
  },
  CLEAR_ERROR_STORE: (state, {payload: {errId}}) => {
    const error = _get(state, 'error', {});
    if (errId === error.id) {
      return {...state, error: null};
    }
    return state;
  },
  ON_PIN_STORE: (state, {payload: {id}}) => {
    const pinned = _get(state, 'pinnedDragons', []);
    const pinnedDragons = [...pinned, id];
    return {...state, pinnedDragons};
  },
  OFF_PIN_STORE: (state, {payload: {id}}) => {
    let pinnedDragons = _get(state, 'pinnedDragons', []);
    pinnedDragons = pinnedDragons.filter(d => d !== id);
    return {...state, pinnedDragons};
  }
}, {});

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const initStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};
