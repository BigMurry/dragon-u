webpackHotUpdate("static/development/pages/index.js",{

/***/ "./redux/sagas.js":
/*!************************!*\
  !*** ./redux/sagas.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_toLower__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/toLower */ "./node_modules/lodash/toLower.js");
/* harmony import */ var lodash_toLower__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_toLower__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/share */ "./lib/share.js");
/* harmony import */ var _artifacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../artifacts */ "./artifacts/index.js");
/* harmony import */ var dragon_g__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dragon-g */ "./node_modules/dragon-g/index.js");
/* harmony import */ var dragon_g__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dragon_g__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store */ "./redux/store.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(updateAccount),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(fetchGeneSaga),
    _marked3 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);











function heartbeat(interval) {
  return Object(redux_saga__WEBPACK_IMPORTED_MODULE_2__["eventChannel"])(function (emitter) {
    setTimeout(function () {
      emitter({
        type: 'HEART_BEAT'
      });
    }, 10000);
    var iv = setInterval(function () {
      emitter({
        type: 'HEART_BEAT'
      });
    }, interval);
    return function () {
      clearInterval(iv);
    };
  });
}

function updateAccount(action) {
  var web3, connected, accounts;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function updateAccount$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(function (state) {
            return lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(state, 'web3', null);
          });

        case 2:
          web3 = _context.sent;

          if (!(!web3 && true)) {
            _context.next = 7;
            break;
          }

          if (typeof window.web3 !== 'undefined') {
            web3 = new web3__WEBPACK_IMPORTED_MODULE_5___default.a(window.web3.currentProvider);
          } else {
            web3 = new web3__WEBPACK_IMPORTED_MODULE_5___default.a(new web3__WEBPACK_IMPORTED_MODULE_5___default.a.providers.HttpProvider('https://mainnet.infura.io/v3/bf28a9be07f4453bb111125224c1c9ba'));
          }

          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_store__WEBPACK_IMPORTED_MODULE_9__["setWeb3Store"])(web3));

        case 7:
          if (!web3) {
            _context.next = 25;
            break;
          }

          _context.prev = 8;
          _context.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(web3.eth.net.isListening);

        case 11:
          connected = _context.sent;

          if (!connected) {
            _context.next = 21;
            break;
          }

          _context.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_lib_share__WEBPACK_IMPORTED_MODULE_6__["tryEnableWeb3"]);

        case 15:
          _context.next = 17;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(web3.eth.getAccounts);

        case 17:
          accounts = _context.sent;

          if (!(accounts && accounts.length > 0)) {
            _context.next = 21;
            break;
          }

          _context.next = 21;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_store__WEBPACK_IMPORTED_MODULE_9__["setAccountStore"])(lodash_toLower__WEBPACK_IMPORTED_MODULE_4___default()(accounts[0])));

        case 21:
          _context.next = 25;
          break;

        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](8);

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[8, 23]]);
}

function fetchGeneSaga(action) {
  var id, web3, dragon721, rawGenes, parsedGene;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function fetchGeneSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = action.payload.id;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(function (state) {
            return lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(state, 'web3', null);
          });

        case 3:
          web3 = _context2.sent;

          if (!web3) {
            _context2.next = 21;
            break;
          }

          _context2.prev = 5;
          dragon721 = Object(_artifacts__WEBPACK_IMPORTED_MODULE_7__["getContractInstance"])(web3, '721');
          _context2.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(dragon721.methods.getGenome(id).call);

        case 9:
          rawGenes = _context2.sent;
          parsedGene = Object(dragon_g__WEBPACK_IMPORTED_MODULE_8__["parse"])(rawGenes);
          _context2.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_store__WEBPACK_IMPORTED_MODULE_9__["setParsedGeneStore"])(id, parsedGene));

        case 13:
          _context2.next = 19;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](5);
          _context2.next = 19;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_store__WEBPACK_IMPORTED_MODULE_9__["setErrorStore"])(new Date().getTime(), 'web3 request failed.', 'error'));

        case 19:
          _context2.next = 23;
          break;

        case 21:
          _context2.next = 23;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_store__WEBPACK_IMPORTED_MODULE_9__["setErrorStore"])(new Date().getTime(), 'web3 not ready.', 'info'));

        case 23:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[5, 15]]);
}

function rootSaga() {
  var walletChann;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (true) {
            _context3.next = 2;
            break;
          }

          return _context3.abrupt("return");

        case 2:
          walletChann = heartbeat(1000); // 1s heartbeat

          _context3.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(walletChann, updateAccount), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])('FETCH_GENE_SAGA', fetchGeneSaga)]);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

/***/ })

})
//# sourceMappingURL=index.js.d1d1d0ae56f0b49b75cf.hot-update.js.map