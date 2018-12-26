const _ = require('lodash');
const DistributionABI = require('./abi/DragonDistribution.json').abi;
const MainBaseABI = require('./abi/DragonMainBase.json').abi;
const EventsABI = require('./abi/Events.json').abi;
const Dragon721ABI = require('./abi/Dragon721.json').abi;

const Conf = {
  'Distribution': {
    abi: DistributionABI,
    networks: {
      3: {
        addr: '',
        initBlock: 4380226
      },
      1: {
        addr: '0xb5b67b0bd9f0f188e900d6a50cd1d66a6d9932f7',
        initBlock: 6790276
      }
    }
  },
  'MainBase': {
    abi: MainBaseABI,
    networks: {
      3: {
        addr: '',
        initBlock: 4380226
      },
      1: {
        addr: '0xad3cdf38ccace151cdf5f03fa64c1518a75cf7af',
        initBlock: 6790307
      }
    }
  },
  'Events': {
    abi: EventsABI,
    networks: {
      1: {
        addr: '0xd31b8e0219bd83678978f6db531d9a3f45608894',
        initBlock: 6790305
      }
    }
  },
  '721': {
    abi: Dragon721ABI,
    networks: {
      1: {
        addr: '0x960f401aed58668ef476ef02b2a2d43b83c261d8',
        initBlock: 6790234
      }
    }
  }
};

function getContractInstance(web3, name, network = 1) {
  const abi = _.get(Conf, [name, 'abi']);
  const addr = _.get(Conf, [name, 'networks', network, 'addr']);
  if (!abi || !addr) {
    throw new Error(`Contract [${name}] not found or Network [${network}] not found.`);
  }
  return new web3.eth.Contract(abi, addr);
}

function getInitBlock(name, _network = 1) {
  return _.get(Conf, [name, 'networks', _network, 'initBlock'], 0);
}

function getAddr(name, _network = 1) {
  return _.get(Conf, [name, 'networks', _network, 'addr']);
}

function getAbi(name) {
  return _.get(Conf, [name, 'abi']);
}

export {
  getContractInstance,
  getInitBlock,
  getAddr,
  getAbi
};
