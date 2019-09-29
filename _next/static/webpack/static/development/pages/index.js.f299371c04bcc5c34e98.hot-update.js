webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/DragonCell.js":
/*!**********************************!*\
  !*** ./components/DragonCell.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var mdi_material_ui_StarCircle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mdi-material-ui/StarCircle */ "./node_modules/mdi-material-ui/StarCircle.js");
/* harmony import */ var mdi_material_ui_StarCircle__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_StarCircle__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var mdi_material_ui_Mushroom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! mdi-material-ui/Mushroom */ "./node_modules/mdi-material-ui/Mushroom.js");
/* harmony import */ var mdi_material_ui_Mushroom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Mushroom__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var mdi_material_ui_HeartMultiple__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! mdi-material-ui/HeartMultiple */ "./node_modules/mdi-material-ui/HeartMultiple.js");
/* harmony import */ var mdi_material_ui_HeartMultiple__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_HeartMultiple__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var mdi_material_ui_WeatherHurricane__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! mdi-material-ui/WeatherHurricane */ "./node_modules/mdi-material-ui/WeatherHurricane.js");
/* harmony import */ var mdi_material_ui_WeatherHurricane__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_WeatherHurricane__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var mdi_material_ui_LinkVariant__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! mdi-material-ui/LinkVariant */ "./node_modules/mdi-material-ui/LinkVariant.js");
/* harmony import */ var mdi_material_ui_LinkVariant__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_LinkVariant__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var mdi_material_ui_Pin__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! mdi-material-ui/Pin */ "./node_modules/mdi-material-ui/Pin.js");
/* harmony import */ var mdi_material_ui_Pin__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Pin__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var mdi_material_ui_PinOff__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! mdi-material-ui/PinOff */ "./node_modules/mdi-material-ui/PinOff.js");
/* harmony import */ var mdi_material_ui_PinOff__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_PinOff__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! lodash/chunk */ "./node_modules/lodash/chunk.js");
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(lodash_chunk__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var dragon_g__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! dragon-g */ "./node_modules/dragon-g/index.js");
/* harmony import */ var dragon_g__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(dragon_g__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _artifacts__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../artifacts */ "./artifacts/index.js");
/* harmony import */ var _artifacts__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_artifacts__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");




var _jsxFileName = "/Users/admin/Projects/dragon-u/components/DragonCell.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;























var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    container: {},
    cont: {
      marginTop: '30px'
    },
    dragons: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    info: {
      marginBottom: '20px',
      padding: '15px',
      backgroundColor: 'rgba(247, 51, 120, 0.05)'
    },
    head: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    id: {
      display: 'flex',
      alignItems: 'center'
    },
    link: {
      textDecoration: 'none',
      marginRight: '10px',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    linkIcon: {
      fontSize: '0.8em'
    },
    score: {
      margin: '20px 0'
    },
    chip: {
      margin: '0 5px 4px 0'
    },
    skills: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    skill: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    skLabel: {
      color: 'rgba(150, 150, 150, 0.8)'
    },
    dragon: {},
    genes: {
      padding: '10px'
    },
    part: {
      display: 'flex',
      alignItems: 'center'
    },
    label: {
      flexBasis: '40px',
      fontSize: '0.8em'
    },
    codes: {
      flex: 1,
      display: 'flex',
      justifyContent: 'space-between'
    },
    cell: {
      padding: '4px',
      margin: '2px 2px',
      borderRadius: '2px',
      display: 'flex',
      alignItems: 'flex-end',
      backgroundColor: 'rgba(220, 220, 220, 0.2)'
    },
    gene: {
      fontSize: '0.6em',
      marginRight: '5px'
    },
    level: {
      fontSize: '0.7em'
    },
    domi: {
      fontWeight: '600'
    },
    inbreed: {
      color: 'rgba(100, 100, 100, 0.7)'
    },
    rare: {
      color: 'purple'
    },
    epic: {
      color: 'orange'
    },
    active: {
      backgroundColor: 'rgba(220, 200, 200, 0.8)'
    },
    avatarCont: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    avatar: {
      width: '50%'
    }
  };
});
var SKILL_NAME = ['Attack', 'Defense', 'Stamina', 'Speed', 'Intelligence'];
var AVATAR_PRIX = 'https://api.dragonereum.io/images/dragons/large/';

function fetchHealthAndMana(_x, _x2) {
  return _fetchHealthAndMana.apply(this, arguments);
}

function _fetchHealthAndMana() {
  _fetchHealthAndMana = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(provider, id) {
    var res, getterContract;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = {};

            if (!(provider && id)) {
              _context.next = 6;
              break;
            }

            getterContract = Object(_artifacts__WEBPACK_IMPORTED_MODULE_25__["getContractInstance"])(provider, 'Getter');
            _context.next = 5;
            return getterContract.getDragonCurrentHealthAndMana(id);

          case 5:
            res = _context.sent;

          case 6:
            return _context.abrupt("return", res);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchHealthAndMana.apply(this, arguments);
}

function dominantSlot() {
  var genes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var _genes = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(genes, 2),
      gene0 = _genes[0],
      gene1 = _genes[1];

  if (gene1.isDominant && !gene0.isDominant) {
    return 1;
  }

  return 0;
}

var DragonCell = function DragonCell(_ref) {
  var genes = _ref.genes,
      id = _ref.id,
      web3 = _ref.web3,
      refetch = _ref.refetch,
      onPin = _ref.onPin,
      offPin = _ref.offPin,
      isPin = _ref.isPin;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('...'),
      health = _useState[0],
      setHealth = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('...'),
      mana = _useState2[0],
      setMana = _useState2[1];

  var codes = lodash_chunk__WEBPACK_IMPORTED_MODULE_23___default()(lodash_get__WEBPACK_IMPORTED_MODULE_22___default()(genes, [id, 'allCodes'], []), 4);

  var parsed = lodash_get__WEBPACK_IMPORTED_MODULE_22___default()(genes, id);

  var coolnessScore;
  var skills;
  var ds;

  if (parsed) {
    coolnessScore = Object(dragon_g__WEBPACK_IMPORTED_MODULE_24__["getCoolnessScore"])(parsed);
    skills = Object(dragon_g__WEBPACK_IMPORTED_MODULE_24__["getSkills"])(parsed.dominants);
    ds = Object(dragon_g__WEBPACK_IMPORTED_MODULE_24__["getDS"])(skills);
  }

  function handleFetchHealthAndMana(e) {
    fetchHealthAndMana(web3, id).then(function (_ref2) {
      var health = _ref2.health,
          mana = _ref2.mana,
          healthPercentage = _ref2.healthPercentage,
          manaPercentage = _ref2.manaPercentage;
      setHealth("".concat(health / 100, "(").concat(healthPercentage, "%)"));
      setMana("".concat(mana / 100, "(").concat(manaPercentage, "%)"));
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (web3) {
      handleFetchHealthAndMana();
    }
  }, [refetch, web3]);
  return __jsx("div", {
    className: classes.cont,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, codes.length > 0 && __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.dragon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx("div", {
    className: classes.info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx("div", {
    className: classes.head,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx("div", {
    className: classes.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx("a", {
    href: "https://dapp.dragonereum.io/dragons/".concat(id),
    className: classes.link,
    target: '_blank',
    title: 'dapp.dragonereum.io',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: 'h6',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "#".concat(id))), __jsx(mdi_material_ui_LinkVariant__WEBPACK_IMPORTED_MODULE_16___default.a, {
    className: classes.linkIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  })), __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_19__["default"], {
    size: 'small',
    color: 'primary',
    "aria-label": 'Add',
    className: classes.margin,
    onClick: function onClick(e) {
      if (isPin) {
        offPin(id);
      } else {
        onPin(id);
      }

      e.preventDefault();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, isPin ? __jsx(mdi_material_ui_PinOff__WEBPACK_IMPORTED_MODULE_21___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }) : __jsx(mdi_material_ui_Pin__WEBPACK_IMPORTED_MODULE_20___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }))), __jsx("div", {
    className: classes.avatarCont,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, __jsx("img", {
    className: classes.avatar,
    src: "".concat(AVATAR_PRIX).concat(id, ".png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }), __jsx("div", {
    className: classes.score,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: 'Coolness score',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_17__["default"], {
    icon: __jsx(mdi_material_ui_StarCircle__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }),
    label: coolnessScore / 100,
    className: classes.chip,
    color: "secondary",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  })), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: 'Strength score',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_17__["default"], {
    icon: __jsx(mdi_material_ui_Mushroom__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }),
    label: ds,
    className: classes.chip,
    color: "secondary",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  })), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: 'Health',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_17__["default"], {
    icon: __jsx(mdi_material_ui_HeartMultiple__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }),
    label: health,
    className: classes.chip,
    onClick: handleFetchHealthAndMana,
    color: "secondary",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  })), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: 'Mana',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_17__["default"], {
    icon: __jsx(mdi_material_ui_WeatherHurricane__WEBPACK_IMPORTED_MODULE_15___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }),
    label: mana,
    className: classes.chip,
    onClick: handleFetchHealthAndMana,
    color: "secondary",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  })))), __jsx("div", {
    className: classes.skills,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, skills.map(function (sk, idx) {
    return __jsx("div", {
      className: classes.skill,
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: classes.skLabel,
      variant: 'caption',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    }, SKILL_NAME[idx]), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: classes.skValue,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262
      },
      __self: this
    }, sk / 100));
  }))), __jsx("div", {
    className: classes.genes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, codes.map(function (c, idx) {
    var activeSlot = dominantSlot(c);
    return __jsx("div", {
      className: classes.part,
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: classes.label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: this
    }, c[0].bodyPart), __jsx("div", {
      className: classes.codes,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: this
    }, c.map(function (item, slot) {
      var _cn2, _cn3;

      return __jsx("div", {
        key: "".concat(idx, "-").concat(slot),
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(classes.cell, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.active, activeSlot === slot)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(classes.gene, (_cn2 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cn2, classes.domi, item.isDominant), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cn2, classes.inbreed, item.geneVariatyIdx === 0), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cn2, classes.rare, item.geneVariatyIdx >= 5), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cn2, classes.epic, item.geneVariatyIdx >= 8), _cn2)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, item.geneVariaty), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(classes.level, (_cn3 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cn3, classes.domi, item.isDominant), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cn3, classes.inbreed, item.geneVariatyIdx === 0), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cn3, classes.rare, item.geneVariatyIdx >= 5), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cn3, classes.epic, item.geneVariatyIdx >= 8), _cn3)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, item.geneLevel));
    })));
  }))));
};

DragonCell = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (_ref3) {
  var web3 = _ref3.web3;
  return {
    web3: web3
  };
}, function (dispatch) {
  return {
    onPin: Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])(_redux_store__WEBPACK_IMPORTED_MODULE_26__["onPinStore"], dispatch),
    offPin: Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])(_redux_store__WEBPACK_IMPORTED_MODULE_26__["offPinStore"], dispatch)
  };
})(DragonCell);
/* harmony default export */ __webpack_exports__["default"] = (DragonCell);

/***/ })

})
//# sourceMappingURL=index.js.f299371c04bcc5c34e98.hot-update.js.map