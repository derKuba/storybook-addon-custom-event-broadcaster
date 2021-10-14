"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _theming = require("@storybook/theming");

var _components = require("@storybook/components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FlexedBox = _theming.styled.div({
  display: "flex"
});

var IconBox = _theming.styled.div({
  width: "25px",
  height: "25px"
});

var DerKubaCustomEventPanel = function DerKubaCustomEventPanel() {
  var args = {};
  return /*#__PURE__*/_react["default"].createElement(_components.ResetWrapper, null, /*#__PURE__*/_react["default"].createElement(_components.TableWrapper, {
    inAddonPanel: true
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "EventName"), /*#__PURE__*/_react["default"].createElement("th", null, "Data"), /*#__PURE__*/_react["default"].createElement("th", null, "(opt.) Selector"), /*#__PURE__*/_react["default"].createElement("th", null))), /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text"
  })), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text"
  })), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(FlexedBox, null, /*#__PURE__*/_react["default"].createElement(IconBox, null, /*#__PURE__*/_react["default"].createElement(_components.Icons, {
    icon: "add"
  })), /*#__PURE__*/_react["default"].createElement("span", null, "Add Selektor"))), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_components.Button, {
    primary: true
  }, "FIRE"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement(FlexedBox, null, /*#__PURE__*/_react["default"].createElement(IconBox, null, /*#__PURE__*/_react["default"].createElement(_components.Icons, {
    icon: "add"
  })), /*#__PURE__*/_react["default"].createElement("span", null, "Add new Line"))))));
};

var _default = DerKubaCustomEventPanel;
exports["default"] = _default;