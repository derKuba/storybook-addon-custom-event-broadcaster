"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _api = require("@storybook/api");

var _components = require("@storybook/components");

var _customEventRow = _interopRequireDefault(require("../custom-event-row/custom-event-row"));

var _boxes = require("../../styled-components/boxes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var renderTableRows = function renderTableRows(_parameterData) {
  if (_parameterData !== null && _parameterData.length > 0) {
    var rows = _parameterData.map(function (row, index) {
      var attributes = {
        selectorDefault: row.selector,
        eventNameDefault: row.eventName,
        eventDataDefault: JSON.stringify(row.eventData) || ''
      };
      return /*#__PURE__*/_react["default"].createElement(_customEventRow["default"], _extends({
        key: "key__".concat(row.eventName, "__").concat(index) // eslint-disable-line react/no-array-index-key

      }, attributes));
    });

    return rows;
  }

  return /*#__PURE__*/_react["default"].createElement(_customEventRow["default"], {
    key: "single"
  });
};

function CustomEventPanel() {
  var customEventPanelParameterData = (0, _api.useParameter)('customEventPanel', null);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      additionalRows = _useState2[0],
      setAdditionalRows = _useState2[1];

  var addNewRow = function addNewRow() {
    var count = additionalRows + 1;
    setAdditionalRows(count);
  };

  return /*#__PURE__*/_react["default"].createElement(_components.ResetWrapper, null, /*#__PURE__*/_react["default"].createElement(_components.TableWrapper, {
    inAddonPanel: true
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "EventName"), /*#__PURE__*/_react["default"].createElement("th", null, "Data"), /*#__PURE__*/_react["default"].createElement("th", null, "(opt.) Selector"), /*#__PURE__*/_react["default"].createElement("th", null, " "))), /*#__PURE__*/_react["default"].createElement("tbody", null, renderTableRows(customEventPanelParameterData), _toConsumableArray(Array(additionalRows).keys()).map(function (_, index) {
    return /*#__PURE__*/_react["default"].createElement(_customEventRow["default"], {
      key: "addRow_".concat(index + 1) // eslint-disable-line react/no-array-index-key

    });
  }), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_boxes.FlexedBox, {
    onClick: addNewRow
  }, /*#__PURE__*/_react["default"].createElement(_boxes.IconBox, {
    key: "iconBox"
  }, /*#__PURE__*/_react["default"].createElement(_components.Icons, {
    icon: "add"
  }))))))));
}

var _default = CustomEventPanel;
exports["default"] = _default;