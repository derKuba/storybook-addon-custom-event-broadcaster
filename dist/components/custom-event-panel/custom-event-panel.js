"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _components = require("@storybook/components");

var _customEventRow = _interopRequireDefault(require("../custom-event-row/custom-event-row"));

var _boxes = require("../../styled-components/boxes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CustomEventPanel = function CustomEventPanel() {
  var args = {};
  return /*#__PURE__*/_react["default"].createElement(_components.ResetWrapper, null, /*#__PURE__*/_react["default"].createElement(_components.TableWrapper, {
    inAddonPanel: true
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "EventName"), /*#__PURE__*/_react["default"].createElement("th", null, "Data"), /*#__PURE__*/_react["default"].createElement("th", null, "(opt.) Selector"), /*#__PURE__*/_react["default"].createElement("th", null))), /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement(_customEventRow["default"], null), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "hello", /*#__PURE__*/_react["default"].createElement(_boxes.FlexedBox, null, /*#__PURE__*/_react["default"].createElement(_boxes.IconBox, null, /*#__PURE__*/_react["default"].createElement(_components.Icons, {
    icon: "add"
  })), /*#__PURE__*/_react["default"].createElement("span", null, "Add new Line")))))));
};

var _default = CustomEventPanel;
exports["default"] = _default;