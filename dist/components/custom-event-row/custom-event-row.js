"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("@storybook/components");

var _boxes = require("../../styled-components/boxes");

var _input = require("../../styled-components/input");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var fireEvent = function fireEvent(eventName, eventData) {
  var selector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var data = eventData || null;

  try {
    var parsedData = JSON.parse(data);
    var storyBookIframeDocument = document.getElementById( // the preview is inside a iframe
    "storybook-preview-iframe").contentWindow.document;

    if (selector.length > 0) {
      storyBookIframeDocument.querySelector(selector).dispatchEvent(new CustomEvent(eventName, parsedData));
    } else {
      storyBookIframeDocument.dispatchEvent(new CustomEvent(eventName, parsedData));
    }
  } catch (error) {
    console.log("Fire not successfull ", error); // eslint-disable-line no-console
  }
};

var CustomEventRow = /*#__PURE__*/(0, _react.memo)(function (_ref) {
  var _ref$selectorDefault = _ref.selectorDefault,
      selectorDefault = _ref$selectorDefault === void 0 ? "" : _ref$selectorDefault,
      _ref$eventNameDefault = _ref.eventNameDefault,
      eventNameDefault = _ref$eventNameDefault === void 0 ? "" : _ref$eventNameDefault,
      _ref$eventDataDefault = _ref.eventDataDefault,
      eventDataDefault = _ref$eventDataDefault === void 0 ? {} : _ref$eventDataDefault;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      displaySelector = _useState2[0],
      setDisplaySelector = _useState2[1];

  var _useState3 = (0, _react.useState)(selectorDefault),
      _useState4 = _slicedToArray(_useState3, 2),
      selector = _useState4[0],
      setSelector = _useState4[1];

  var _useState5 = (0, _react.useState)(eventNameDefault),
      _useState6 = _slicedToArray(_useState5, 2),
      eventName = _useState6[0],
      setEventName = _useState6[1];

  var _useState7 = (0, _react.useState)(eventDataDefault),
      _useState8 = _slicedToArray(_useState7, 2),
      eventData = _useState8[0],
      setEventData = _useState8[1];

  var displaySelectInput = function displaySelectInput() {
    setDisplaySelector(true);
  };

  var handleSelectorChange = function handleSelectorChange(event) {
    setSelector(event.target.value);
  };

  var handleEventNameChange = function handleEventNameChange(event) {
    setEventName(event.target.value);
  };

  var handleDataChange = function handleDataChange(event) {
    setEventData(event.target.value);
  };

  return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_input.StyledInput, {
    type: "text",
    value: eventName,
    onChange: handleEventNameChange
  })), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_input.StyledTextarea, {
    value: eventData,
    onChange: handleDataChange
  })), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_boxes.FlexedBox, null, displaySelector === false && selector.length === 0 ? [/*#__PURE__*/_react["default"].createElement(_boxes.IconBox, {
    key: "iconBox",
    className: "tooltip"
  }, /*#__PURE__*/_react["default"].createElement(_components.Icons, {
    icon: "add",
    onClick: displaySelectInput
  }), /*#__PURE__*/_react["default"].createElement("span", {
    tooltip: "message"
  }, "Add Selektor"))] : /*#__PURE__*/_react["default"].createElement(_input.StyledTextarea, {
    value: selector,
    onChange: handleSelectorChange
  }))), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_components.Button, {
    primary: true,
    onClick: function onClick() {
      return fireEvent(eventName, eventData, selector);
    }
  }, "send")));
});
CustomEventRow.propTypes = {
  selectorDefault: _propTypes["default"].string,
  eventNameDefault: _propTypes["default"].string.isRequired,
  eventDataDefault: _propTypes["default"].string
};
CustomEventRow.defaultProps = {
  selectorDefault: "",
  eventDataDefault: ""
};
var _default = CustomEventRow;
exports["default"] = _default;