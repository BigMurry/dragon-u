webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Web3Provider.js":
/*!************************************!*\
  !*** ./components/Web3Provider.js ***!
  \************************************/
/*! exports provided: tryEnableWeb3, Web3Provider, useWeb3Provider, useAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryEnableWeb3", function() { return tryEnableWeb3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3Provider", function() { return Web3Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWeb3Provider", function() { return useWeb3Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAccount", function() { return useAccount; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/dist/ethers.min.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "/Users/admin/Projects/dragon-u/components/Web3Provider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



var globalStore = {
  rawWeb3: null,
  web3: null,
  jsonRpcUrl: null,
  jsonRpc: null
};

function denyMetamask() {
  var expire = window.localStorage.getItem('metamask-deny');
  return new Date(expire) > new Date();
}

function setDenyMetamask() {
  var d = new Date();
  d.setHours(d.getHours() - 12);
  window.localStorage.setItem('metamask-deny', d);
} // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1102.md
// https://github.com/MetaMask/metamask-extension/issues/5715


var enabled = false;
function tryEnableWeb3(_x) {
  return _tryEnableWeb.apply(this, arguments);
}

function _tryEnableWeb() {
  _tryEnableWeb = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(forceEnable) {
    var accounts, _accounts;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            if (!(window && window.ethereum && (forceEnable || !enabled && !denyMetamask()))) {
              _context3.next = 19;
              break;
            }

            if (!window.ethereum.enable) {
              _context3.next = 8;
              break;
            }

            _context3.next = 5;
            return window.ethereum.enable();

          case 5:
            enabled = true;
            _context3.next = 19;
            break;

          case 8:
            if (!window.ethereum.sendAsync) {
              _context3.next = 15;
              break;
            }

            _context3.next = 11;
            return window.ethereum.sendAsync('eth_requestAccounts');

          case 11:
            accounts = _context3.sent;

            if (accounts && accounts.length > 0) {
              enabled = true;
            }

            _context3.next = 19;
            break;

          case 15:
            _context3.next = 17;
            return window.ethereum.send('eth_requestAccounts');

          case 17:
            _accounts = _context3.sent;

            if (_accounts && _accounts.length > 0) {
              enabled = true;
            }

          case 19:
            _context3.next = 26;
            break;

          case 21:
            _context3.prev = 21;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            setDenyMetamask();
            enabled = false;

          case 26:
            return _context3.abrupt("return", enabled);

          case 27:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 21]]);
  }));
  return _tryEnableWeb.apply(this, arguments);
}

function setProvider(jsonRpcUrl) {
  if (false) {}

  var current = lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(window, ['ethereum'], lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(window, ['web3', 'currentProvider'], null)); // create browser web3 provider


  if (!globalStore.web3 && current && current !== globalStore.rawWeb3) {
    globalStore.web3 = new ethers__WEBPACK_IMPORTED_MODULE_5__["providers"].Web3Provider(current);
  } // set web3 raw provider


  globalStore.rawWeb3 = current; // create JsonRpc web3 provider

  if (!globalStore.jsonRpc && jsonRpcUrl && jsonRpcUrl !== globalStore.jsonRpcUrl) {
    globalStore.jsonRpc = new ethers__WEBPACK_IMPORTED_MODULE_5__["providers"].JsonRpcProvider(jsonRpcUrl);
  }

  globalStore.jsonRpcUrl = jsonRpcUrl;
}

function getProvider() {
  return globalStore.web3 || globalStore.jsonRpc;
}

function activeProvider() {
  return _activeProvider.apply(this, arguments);
}

function _activeProvider() {
  _activeProvider = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
    var networks,
        backupJsonRpcUrl,
        provd,
        ok,
        network,
        _args4 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            networks = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : [1, 3, 4, 5];
            backupJsonRpcUrl = _args4.length > 1 ? _args4[1] : undefined;
            setProvider(backupJsonRpcUrl);
            provd = getProvider();
            ok = false;

            if (!provd) {
              _context4.next = 16;
              break;
            }

            ok = true;
            _context4.t0 = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default.a;
            _context4.next = 10;
            return provd.getNetwork();

          case 10:
            _context4.t1 = _context4.sent;
            network = (0, _context4.t0)(_context4.t1, 10);

            if (!~networks.indexOf(network)) {
              _context4.next = 16;
              break;
            }

            _context4.next = 15;
            return tryEnableWeb3();

          case 15:
            ok = _context4.sent;

          case 16:
            return _context4.abrupt("return", ok);

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _activeProvider.apply(this, arguments);
}

function sleep(ms) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
    setTimeout(function () {
      return resolve('schedule');
    }, ms);
  });
}

function retry(fn, times, delay) {
  return (
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var tried,
          ok,
          err,
          _args = arguments;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              tried = 0;
              ok = false;

            case 2:
              if (!(tried <= times)) {
                _context.next = 20;
                break;
              }

              _context.prev = 3;
              _context.next = 6;
              return fn.apply(void 0, _args);

            case 6:
              ok = _context.sent;

              if (!ok) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("break", 20);

            case 9:
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](3);
              ok = false;
              err = _context.t0;

            case 15:
              ++tried;
              _context.next = 18;
              return sleep(delay);

            case 18:
              _context.next = 2;
              break;

            case 20:
              return _context.abrupt("return", {
                ok: ok,
                err: err
              });

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 11]]);
    }))
  );
}

var Web3Context = react__WEBPACK_IMPORTED_MODULE_4___default.a.createContext();
var retryActiveProvider = retry(activeProvider, 5, 1000);
var Web3Provider = function Web3Provider(_ref2) {
  var networks = _ref2.networks,
      backupJsonRpcUrl = _ref2.backupJsonRpcUrl,
      ms = _ref2.ms,
      children = _ref2.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      provider = _useState[0],
      setProvider = _useState[1];

  var updateProvider =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var currentProvider;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return retryActiveProvider(networks, backupJsonRpcUrl);

            case 2:
              currentProvider = getProvider();

              if (currentProvider && currentProvider !== provider) {
                setProvider(currentProvider);
              }

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function updateProvider() {
      return _ref3.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var interval;
    updateProvider().then(function () {
      var running = false;
      interval = setInterval(function () {
        if (!running) {
          running = true;
          updateProvider().then(function () {
            running = false;
          });
        }
      }, ms);
    });
    return function () {
      clearInterval(interval);
    };
  }, [networks, backupJsonRpcUrl]);
  return __jsx(Web3Context.Provider, {
    value: provider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, children);
};
function useWeb3Provider() {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.useContext(Web3Context);
}
function useAccount(provider) {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      account = _useState2[0],
      setAccount = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (provider) {
      var signer = provider.getSigner();
      signer.getAddress().then(function (add) {
        if (add && add !== '0x0000000000000000000000000000000000000000') {
          setAccount(add);
        }
      });
    }
  }, [provider]);
  return account;
}

/***/ })

})
//# sourceMappingURL=index.js.f7edcef6e972e0a59fd5.hot-update.js.map