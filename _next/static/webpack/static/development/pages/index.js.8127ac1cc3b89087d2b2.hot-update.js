webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Root.js":
/*!****************************!*\
  !*** ./components/Root.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/dist/ethers.min.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var mdi_material_ui_HeartCircle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mdi-material-ui/HeartCircle */ "./node_modules/mdi-material-ui/HeartCircle.js");
/* harmony import */ var mdi_material_ui_HeartCircle__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_HeartCircle__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var mdi_material_ui_GithubCircle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mdi-material-ui/GithubCircle */ "./node_modules/mdi-material-ui/GithubCircle.js");
/* harmony import */ var mdi_material_ui_GithubCircle__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_GithubCircle__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! qrcode.react */ "./node_modules/qrcode.react/lib/index.js");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var mdi_material_ui_Heart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! mdi-material-ui/Heart */ "./node_modules/mdi-material-ui/Heart.js");
/* harmony import */ var mdi_material_ui_Heart__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Heart__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var _Web3Provider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Web3Provider */ "./components/Web3Provider.js");

var _jsxFileName = "/Users/admin/Projects/dragon-u/components/Root.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


















var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    container: {
      margin: '0 10px'
    },
    contWrapper: {
      minHeight: '500px'
    },
    dialogWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '30px'
    },
    dialog: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px'
    },
    footer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '30px 0 20px 0'
    },
    by: {
      fontSize: '0.7em'
    },
    icons: {
      display: 'flex'
    },
    chip: {
      margin: '10px'
    },
    donate: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px 20px 20px'
    },
    donateTitle: {
      display: 'flex',
      padding: '20px 10px',
      alignItems: 'center'
    },
    titleMsg: {
      color: 'rgba(90, 90, 90, 0.8)'
    },
    donateIcon: {
      marginRight: '2px',
      color: '#f50057'
    },
    addressWrapper: {
      margin: '10px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    address: {
      fontSize: '0.5em',
      color: 'rgba(90, 90, 90, 0.4)',
      padding: '2px',
      '&:hover': {
        backgroundColor: 'rgba(200, 200, 200, 0.2)',
        cursor: 'pointer'
      }
    },
    notify: {
      color: '#f50057',
      fontSize: '0.5em'
    }
  };
});
var DONATOR_ACCOUNT = '0xCC6a7D642B66aFeed091B87b9175c61F8993cb3b';

function sendEther(signer, cb) {
  if (signer) {
    signer.sendTransaction({
      to: DONATOR_ACCOUNT,
      value: ethers__WEBPACK_IMPORTED_MODULE_4__["utils"].parseEther('0.006') // 0.006 ether

    }).then(cb);
  }
}

function _short() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var len = arguments.length > 1 ? arguments[1] : undefined;
  return str.substring(0, len) + '...';
}

var Msg = function Msg(_ref) {
  var enqueueSnackbar = _ref.enqueueSnackbar,
      error = _ref.error,
      clearError = _ref.clearError;

  if (error) {
    enqueueSnackbar(error.msg, {
      variant: error.variant,
      onClose: function onClose() {
        return clearError(error.id);
      }
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  });
};

Msg = Object(notistack__WEBPACK_IMPORTED_MODULE_9__["withSnackbar"])(Msg);
Msg = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (_ref2) {
  var error = _ref2.error;
  return {
    error: error
  };
}, function (dispatch) {
  return {
    clearError: Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])(_redux_store__WEBPACK_IMPORTED_MODULE_17__["clearErrorStore"], dispatch)
  };
})(Msg);

var Root = function Root(_ref3) {
  var children = _ref3.children,
      setError = _ref3.setError;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      qrcode = _useState[0],
      showQrcode = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      thankDialog = _useState2[0],
      showThankDialog = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      copied = _useState3[0],
      setCopied = _useState3[1];

  var provider = Object(_Web3Provider__WEBPACK_IMPORTED_MODULE_18__["useWeb3Provider"])();
  var account = Object(_Web3Provider__WEBPACK_IMPORTED_MODULE_18__["useAccount"])(provider);

  if (!provider) {
    return __jsx("div", {
      className: classes.dialogWrapper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: classes.dialog,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, "Waiting for web3 connecting..."), __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    })));
  }

  var signer = provider.getSigner();
  var isLogin = !!account;
  return __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx("div", {
    className: classes.contWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, children), __jsx(Msg, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }), __jsx("div", {
    className: classes.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.by,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "diaomouren@gmail.com"), __jsx("div", {
    className: classes.icons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_10__["default"], {
    icon: __jsx(mdi_material_ui_HeartCircle__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }),
    label: isLogin ? '0.006 ETH' : _short(DONATOR_ACCOUNT, 7),
    className: classes.chip,
    onClick: function onClick(e) {
      if (isLogin) {
        sendEther(signer, function (e) {
          if (e) {
            console.log(e);
            setError(new Date().getTime(), e.message, 'error');
          } else {
            showThankDialog(true);
          }
        });
      } else {
        showQrcode(true);
      }
    },
    color: "secondary",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_10__["default"], {
    icon: __jsx(mdi_material_ui_GithubCircle__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }),
    label: 'Star',
    className: classes.chip,
    component: "a",
    href: "https://github.com/BigMurry/dragon-u",
    target: '_blank',
    clickable: true,
    color: "secondary",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  })), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_13__["default"], {
    open: thankDialog,
    onClose: function onClose(e) {
      return showThankDialog(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx("div", {
    className: classes.donateTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx(mdi_material_ui_Heart__WEBPACK_IMPORTED_MODULE_16___default.a, {
    className: classes.donateIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.titleMsg,
    variant: 'h6',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "Thank you!"), __jsx(mdi_material_ui_Heart__WEBPACK_IMPORTED_MODULE_16___default.a, {
    className: classes.donateIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }))), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_13__["default"], {
    open: qrcode,
    onClose: function onClose(e) {
      showQrcode(false);
      setCopied(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, __jsx("div", {
    className: classes.donateTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, __jsx(mdi_material_ui_Heart__WEBPACK_IMPORTED_MODULE_16___default.a, {
    className: classes.donateIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.titleMsg,
    variant: 'h6',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "Thanks a lot"), __jsx(mdi_material_ui_Heart__WEBPACK_IMPORTED_MODULE_16___default.a, {
    className: classes.donateIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  })), __jsx("div", {
    className: classes.donate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx("div", {
    className: classes.addressWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_14__["CopyToClipboard"], {
    text: DONATOR_ACCOUNT,
    onCopy: function onCopy() {
      return setCopied(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.address,
    variant: 'caption',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, DONATOR_ACCOUNT)), copied && __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: 'caption',
    className: classes.notify,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, 'copied!')), __jsx(qrcode_react__WEBPACK_IMPORTED_MODULE_15___default.a, {
    value: DONATOR_ACCOUNT,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  })))));
};

Root = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (_ref4) {
  var web3 = _ref4.web3,
      account = _ref4.account;
  return {
    web3: web3,
    account: account
  };
}, function (dispatch) {
  return {
    setError: Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])(_redux_store__WEBPACK_IMPORTED_MODULE_17__["setErrorStore"], dispatch)
  };
})(Root);

var RootWrapper = function RootWrapper(props) {
  return __jsx(notistack__WEBPACK_IMPORTED_MODULE_9__["SnackbarProvider"], {
    maxSnack: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, __jsx(Root, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RootWrapper);

/***/ })

})
//# sourceMappingURL=index.js.8127ac1cc3b89087d2b2.hot-update.js.map