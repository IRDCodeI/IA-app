"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/components/upload.js":
/*!**********************************!*\
  !*** ./src/components/upload.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UploadFile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction UploadFile(props) {\n    _s();\n    let file = null;\n    const hiddenFileInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const fileName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const get_csv = (event)=>{\n        file = event.target.files[0];\n        if (file != undefined) {\n            fileName.current.innerText = file.name;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    children: [\n                        \"Upload File\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            ref: hiddenFileInput,\n                            accept: \".csv\",\n                            onChange: (e)=>get_csv(e),\n                            style: {\n                                display: \"none\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\DATA\\\\projects\\\\ia-app\\\\src\\\\components\\\\upload.js\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\DATA\\\\projects\\\\ia-app\\\\src\\\\components\\\\upload.js\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\DATA\\\\projects\\\\ia-app\\\\src\\\\components\\\\upload.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    ref: fileName\n                }, void 0, false, {\n                    fileName: \"D:\\\\DATA\\\\projects\\\\ia-app\\\\src\\\\components\\\\upload.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\DATA\\\\projects\\\\ia-app\\\\src\\\\components\\\\upload.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\DATA\\\\projects\\\\ia-app\\\\src\\\\components\\\\upload.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_s(UploadFile, \"7c1c+ByfuTHJewvV3GmXpf4lEw0=\");\n_c = UploadFile;\nvar _c;\n$RefreshReg$(_c, \"UploadFile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvdXBsb2FkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUN1QztBQUNSO0FBRWhCLFNBQVNFLFdBQVdDLEtBQUssRUFBRTs7SUFFdEMsSUFBSUMsT0FBTyxJQUFJO0lBRWYsTUFBTUMsa0JBQWtCSiw2Q0FBTUEsQ0FBQyxJQUFJO0lBQ25DLE1BQU1LLFdBQVdMLDZDQUFNQSxDQUFDLElBQUk7SUFFNUIsTUFBTU0sVUFBVUMsQ0FBQUEsUUFBUztRQUNyQkosT0FBT0ksTUFBTUMsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRTtRQUU1QixJQUFHTixRQUFRTyxXQUFVO1lBQ2pCTCxTQUFTTSxPQUFPLENBQUNDLFNBQVMsR0FBR1QsS0FBS1UsSUFBSTtRQUMxQyxDQUFDO0lBQ0w7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDQztvQkFDR0MsTUFBSzs7d0JBQVM7c0NBRWQsOERBQUNDOzRCQUNHRCxNQUFLOzRCQUNMRSxLQUFLZjs0QkFDTGdCLFFBQU87NEJBQ1BDLFVBQVUsQ0FBQ0MsSUFBTWhCLFFBQVFnQjs0QkFDekJDLE9BQU87Z0NBQUVDLFNBQVM7NEJBQU87Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdyQyw4REFBQ1Y7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNVO29CQUFLTixLQUFLZDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0IsQ0FBQztHQWxDdUJKO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3VwbG9hZC5qcz9mYzFhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBsb2FkRmlsZShwcm9wcykge1xyXG5cclxuICAgIGxldCBmaWxlID0gbnVsbFxyXG5cclxuICAgIGNvbnN0IGhpZGRlbkZpbGVJbnB1dCA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGZpbGVOYW1lID0gdXNlUmVmKG51bGwpXHJcblxyXG4gICAgY29uc3QgZ2V0X2NzdiA9IGV2ZW50ID0+IHtcclxuICAgICAgICBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXHJcblxyXG4gICAgICAgIGlmKGZpbGUgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgZmlsZU5hbWUuY3VycmVudC5pbm5lclRleHQgPSBmaWxlLm5hbWVcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctc2NyZWVuIGZsZXgnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCI+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBVcGxvYWQgRmlsZSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtoaWRkZW5GaWxlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD0nLmNzdidcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBnZXRfY3N2KGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0vPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHJlZj17ZmlsZU5hbWV9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiQnV0dG9uIiwidXNlUmVmIiwiVXBsb2FkRmlsZSIsInByb3BzIiwiZmlsZSIsImhpZGRlbkZpbGVJbnB1dCIsImZpbGVOYW1lIiwiZ2V0X2NzdiIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJ1bmRlZmluZWQiLCJjdXJyZW50IiwiaW5uZXJUZXh0IiwibmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsInR5cGUiLCJpbnB1dCIsInJlZiIsImFjY2VwdCIsIm9uQ2hhbmdlIiwiZSIsInN0eWxlIiwiZGlzcGxheSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/components/upload.js\n"));

/***/ })

});