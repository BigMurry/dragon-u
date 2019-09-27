webpackHotUpdate("static/development/pages/dragon/[id].js",{

/***/ "./pages/dragon/[id].js":
/*!******************************!*\
  !*** ./pages/dragon/[id].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/uniq */ "./node_modules/lodash/uniq.js");
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.js");
/* harmony import */ var _components_Root__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Root */ "./components/Root.js");
/* harmony import */ var _components_DragonCell__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/DragonCell */ "./components/DragonCell.js");


var _jsxFileName = "/Users/admin/Projects/dragon-u/pages/dragon/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;














var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    upper: {
      marginTop: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputCont: {
      display: 'flex'
    },
    input: {
      flex: 1,
      padding: '0 3px 0 10px'
    },
    dragons: {
      display: 'flex',
      justifyContent: 'center'
    },
    cell: {
      margin: '0 15px'
    }
  };
});

function jumpTo(query) {
  var url = "".concat("", "/dragon/[id]");
  var as = "".concat("", "/dragon/").concat(query);
  next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(url, as, {
    shallow: true
  });
}

function useDragonId() {
  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])(),
      query = _useRouter.query;

  console.log(query);

  if (query && query.id) {
    return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(query.id);
  }

  return '';
}

var Index = function Index(_ref) {
  var dispatchGeneFetch = _ref.dispatchGeneFetch,
      _ref$pinnedDragons = _ref.pinnedDragons,
      pinnedDragons = _ref$pinnedDragons === void 0 ? [] : _ref$pinnedDragons,
      _ref$genes = _ref.genes,
      genes = _ref$genes === void 0 ? {} : _ref$genes,
      web3 = _ref.web3,
      refetch = _ref.refetch;
  var classes = useStyles();
  var initDragon = useDragonId();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initDragon),
      dragonId = _useState[0],
      setDragonId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(new Date().getTime()),
      _r = _useState2[0]; // console.log(`${_r}#${initDragon}`);


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (web3 && initDragon) {
      dispatchGeneFetch(initDragon);
    }
  }, [_r, web3, initDragon]);

  var dragons = lodash_uniq__WEBPACK_IMPORTED_MODULE_12___default()([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(pinnedDragons), [initDragon]));

  return __jsx(_components_Root__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    className: classes.upper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12,
    sm: 12,
    md: 6,
    lg: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.inputCont,
    elevation: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.input,
    placeholder: 'dragon id #',
    value: dragonId,
    spellCheck: false,
    onChange: function onChange(e) {
      return setDragonId(e.target.value);
    },
    onKeyDown: function onKeyDown(event) {
      if (event.key === 'Enter') {
        jumpTo(dragonId);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.iconButton,
    "aria-label": 'Search',
    onClick: function onClick(e) {
      return jumpTo(dragonId);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    className: classes.dragons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, dragons.map(function (dragon) {
    var isPin = !!~pinnedDragons.indexOf(dragon);
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__["default"], {
      item: true,
      xs: 12,
      sm: 12,
      md: 6,
      lg: 4,
      key: dragon,
      className: classes.cell,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx(_components_DragonCell__WEBPACK_IMPORTED_MODULE_15__["default"], {
      genes: genes,
      id: dragon,
      isPin: isPin,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }));
  })));
};

Index = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(function (_ref2) {
  var genes = _ref2.genes,
      web3 = _ref2.web3,
      pinnedDragons = _ref2.pinnedDragons;
  return {
    genes: genes,
    web3: web3,
    pinnedDragons: pinnedDragons
  };
}, function (dispatch) {
  return {
    dispatchGeneFetch: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_store__WEBPACK_IMPORTED_MODULE_13__["fetchGeneSaga"], dispatch)
  };
})(Index);
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=[id].js.24b8dfcda86f722bc17d.hot-update.js.map