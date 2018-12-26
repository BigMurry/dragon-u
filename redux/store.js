import { createStore, applyMiddleware } from 'redux';
import {createActions, handleActions} from 'redux-actions';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

export const {
  fetchDataSaga,
  setWeb3Store,
  setAccountStore,
  fetchGeneSaga,
  setParsedGeneStore
} = createActions({
  FETCH_DATA_SAGA: (uri, pathname, key, showLoading, expire, method, body) => ({
    uri, pathname, key, showLoading, expire, method, body
  }),
  SET_WEB3_STORE: (web3) => ({web3}),
  SET_ACCOUNT_STORE: (account) => ({account}),
  FETCH_GENE_SAGA: (id) => ({id}),
  SET_PARSED_GENE_STORE: (id, parsedGene) => ({id, parsedGene})
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
  }
}, {});

export const initStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);
  return store;
};