"use strict";

var _react = _interopRequireDefault(require("react"));

var _addons = require("@storybook/addons");

var _components = require("@storybook/components");

var _customEventPanel = _interopRequireDefault(require("./components/custom-event-panel/custom-event-panel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable  react/jsx-filename-extension */
var ADDON_ID = "custom-event";
var PANEL_ID = "".concat(ADDON_ID, "/panel");

_addons.addons.register(ADDON_ID, function () {
  _addons.addons.add(PANEL_ID, {
    type: _addons.types.PANEL,
    title: "Custom Events",
    render: function render(_ref) {
      var active = _ref.active,
          key = _ref.key;
      return /*#__PURE__*/_react["default"].createElement(_components.AddonPanel, {
        active: active,
        key: key
      }, /*#__PURE__*/_react["default"].createElement(_customEventPanel["default"], null));
    }
  });
});