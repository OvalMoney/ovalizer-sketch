var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/commands/lint.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/commands/lint.js":
/*!******************************!*\
  !*** ./src/commands/lint.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validateAndFix; });
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/ui */ "sketch/ui");
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/pages */ "./src/lib/pages/index.js");
/* harmony import */ var _lib_artboards_autoalign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/artboards/autoalign */ "./src/lib/artboards/autoalign.js");
/* harmony import */ var _lib_artboards_fix_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/artboards/fix-title */ "./src/lib/artboards/fix-title.js");
/* harmony import */ var _lib_artboards_check_artboards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/artboards/check-artboards */ "./src/lib/artboards/check-artboards.js");
/* eslint-disable-next-line import/no-unresolved */





function validateAndFix(context) {
  var _getPages = Object(_lib_pages__WEBPACK_IMPORTED_MODULE_1__["getPages"])(context),
      itPage = _getPages.itPage,
      enPage = _getPages.enPage;

  if (!itPage && !enPage) {
    sketch_ui__WEBPACK_IMPORTED_MODULE_0___default.a.message('⚠️ Missing IT or ENG page');
    return;
  }

  if (itPage) {
    Object(_lib_artboards_autoalign__WEBPACK_IMPORTED_MODULE_2__["default"])(itPage);
    Object(_lib_artboards_fix_title__WEBPACK_IMPORTED_MODULE_3__["default"])(itPage);
  }

  if (enPage) {
    Object(_lib_artboards_autoalign__WEBPACK_IMPORTED_MODULE_2__["default"])(enPage);
    Object(_lib_artboards_fix_title__WEBPACK_IMPORTED_MODULE_3__["default"])(enPage);
  }

  if (itPage && enPage) {
    var _checkArtboards = Object(_lib_artboards_check_artboards__WEBPACK_IMPORTED_MODULE_4__["default"])(itPage, enPage),
        message = _checkArtboards.message;

    sketch_ui__WEBPACK_IMPORTED_MODULE_0___default.a.message(message);
  }
}

/***/ }),

/***/ "./src/lib/artboards/autoalign.js":
/*!****************************************!*\
  !*** ./src/lib/artboards/autoalign.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return autoalign; });
/* harmony import */ var _rows_by_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rows-by-position */ "./src/lib/artboards/rows-by-position.js");

function autoalign(page) {
  var rows = Object(_rows_by_position__WEBPACK_IMPORTED_MODULE_0__["default"])(page);
  var rowNames = Object.keys(rows).sort(function (a, b) {
    return parseInt(a, 10) - parseInt(b, 10);
  });
  var y = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = rowNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var rowName = _step.value;
      var row = rows[rowName];
      var x = 0;
      var nextYOffset = 1000;
      var sequenceNumber = 0;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = row[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var artboard = _step2.value;
          // Make sure they're in the right order, so the list on the left is sorted
          var parent = artboard.parentGroup();
          artboard.removeFromParent();
          parent.insertLayer_atIndex(artboard, 0); // Update name

          var artboardNumber = parseInt(rowName, 10) + sequenceNumber;
          artboard.name = artboardNumber.toString(); // Update artboard's position
          // artboard.frame().{x,y}() isn't always relatively to (0,0), and using
          // absoluteRect.ruler{X,Y} seems to solve this

          artboard.absoluteRect().rulerX = x;
          artboard.absoluteRect().rulerY = y; // Use the height of the largest artboard on this row to determine the
          // y-offset of the next row (plus a small buffer for labels)

          var height = artboard.frame().height() + 100;

          if (height > nextYOffset) {
            // Snap to a 500 unit grid
            nextYOffset = height + (500 - height % 500);
          }

          x += 500;
          sequenceNumber++;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      y += nextYOffset;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/***/ }),

/***/ "./src/lib/artboards/check-artboards.js":
/*!**********************************************!*\
  !*** ./src/lib/artboards/check-artboards.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkArtoboards; });
/* harmony import */ var _rows_by_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rows-by-position */ "./src/lib/artboards/rows-by-position.js");


var getArtboards = function getArtboards(rows) {
  return Object.keys(rows).map(function (rowName) {
    return rows[rowName];
  });
};

var filterArtboards = function filterArtboards(artboardToFilter, invalidArtboards) {
  return artboardToFilter.filter(function (artboard) {
    return invalidArtboards.find(function (invalid) {
      return invalid.name === artboard.name;
    });
  });
};

function checkArtoboards(pageIt, pageEn) {
  var rowsIt = Object(_rows_by_position__WEBPACK_IMPORTED_MODULE_0__["default"])(pageIt);
  var rowsEn = Object(_rows_by_position__WEBPACK_IMPORTED_MODULE_0__["default"])(pageEn);
  var artboardsIt = getArtboards(rowsIt);
  var artboardsEn = getArtboards(rowsEn);

  if (artboardsEn.length !== artboardsIt.length) {
    var isEnInvalid = artboardsEn.length < artboardsIt.length; // If ENG is invalid filter on IT to find what's missing

    var missingArtboards = isEnInvalid ? filterArtboards(artboardsIt, artboardsEn) : filterArtboards(artboardsEn, artboardsIt);
    var missingArtboardsNames = missingArtboards.map(function (artboardGroup) {
      return artboardGroup.map(function (artboard) {
        return artboard.name();
      });
    });
    var invalidPage = isEnInvalid ? 'ENG' : 'IT';
    return {
      message: "\u26A0\uFE0F pages are missing in \"".concat(invalidPage, "\": ").concat(missingArtboardsNames)
    };
  }
}

/***/ }),

/***/ "./src/lib/artboards/fix-title.js":
/*!****************************************!*\
  !*** ./src/lib/artboards/fix-title.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return autoalign; });
/* harmony import */ var _rows_by_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rows-by-position */ "./src/lib/artboards/rows-by-position.js");

var placeholder = '{{artboardName}}';
function autoalign(page) {
  var rows = Object(_rows_by_position__WEBPACK_IMPORTED_MODULE_0__["default"])(page);
  var rowNames = Object.keys(rows);

  for (var _i = 0; _i < rowNames.length; _i++) {
    var rowName = rowNames[_i];
    var row = rows[rowName];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var artboard = _step.value;
        var layers = artboard.layers();
        layers.forEach(function (item) {
          if (String(item.name()) === placeholder) {
            item.setStringValue(artboard.name());
          }
        });
      };

      for (var _iterator = row[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
}

/***/ }),

/***/ "./src/lib/artboards/rows-by-position.js":
/*!***********************************************!*\
  !*** ./src/lib/artboards/rows-by-position.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rowsByPosition; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function rowsByPosition(page) {
  var artboards = page.artboards(); // Find the row covers

  var rowCovers = artboards.reduce(function (acc, artboard) {
    var number = parseInt(artboard.name(), 10);
    return number % 100 === 0 ? acc.concat(artboard) : acc;
  }, []); // Sort the existing covers

  rowCovers.sort(function (a, b) {
    return a.frame().y() - b.frame().y();
  }); // Build up the rows, starting with their covers

  var rows = rowCovers.reduce(function (acc, row, index) {
    var rowName = ((index + 1) * 100).toString();
    acc[rowName] = [row];
    return acc;
  }, {});
  var yPositions = Object.entries(rows).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        row = _ref2[1];

    return [name, row[0].frame().y()];
  }); // Add other artboards into the rows

  for (var i = 0; i < artboards.length; i++) {
    // Skip row covers, obvs...
    if (rowCovers.includes(artboards[i])) {
      continue;
    }

    var yPos = artboards[i].frame().y();
    var closestRow = void 0;
    var smallestDist = Infinity;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = yPositions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2),
            rowName = _step$value[0],
            rowYPos = _step$value[1];

        var yDist = Math.abs(yPos - rowYPos);

        if (yDist < smallestDist) {
          closestRow = rowName;
          smallestDist = yDist;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    rows[closestRow].push(artboards[i]);
  } // Sort rows by board x position


  Object.values(rows).forEach(function (row) {
    return row.sort(function (a, b) {
      return a.frame().x() - b.frame().x();
    });
  });
  return rows;
}

/***/ }),

/***/ "./src/lib/pages/index.js":
/*!********************************!*\
  !*** ./src/lib/pages/index.js ***!
  \********************************/
/*! exports provided: getPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPages", function() { return getPages; });
function getPages(context) {
  var pages = context.document.pages();
  var itPage = pages.find(function (page) {
    return String(page.name).includes('ITA');
  });
  var enPage = pages.find(function (page) {
    return String(page.name).includes('ENG');
  });
  return {
    itPage: itPage,
    enPage: enPage
  };
}

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=lint.js.map