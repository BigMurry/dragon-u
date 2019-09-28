import * as ethers from 'ethers';
import _get from 'lodash/get';
import abis from './abi';

function getContractInstance(providerOrSigner, name, network = 1) {
  const abi = _get(abis, [name, 'abi']);
  const addr = _get(abis, [name, 'networks', network, 'address']);
  if (!abi || !addr) {
    throw new Error('abi or address not found.');
  }
  return new ethers.Contract(addr, abi, providerOrSigner);
}

function getContractIface(name) {
  const abi = _get(abis, [name, 'abi']);
  return new ethers.utils.Interface(abi);
}

function getAddr(name, network) {
  return _get(abis, [name, 'networks', network, 'address']);
}

function getInitBlock(name, network) {
  return _get(abis, [name, 'networks', network, 'block']);
}

module.exports = {
  getContractInstance,
  getContractIface,
  getAddr,
  getInitBlock
};
