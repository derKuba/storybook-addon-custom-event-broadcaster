"use strict";

var _react = _interopRequireDefault(require("react"));

var _addons = require("@storybook/addons");

var _components = require("@storybook/components");

var _derkubaCustomEventPanel = _interopRequireDefault(require("./components/derkuba-custom-event-panel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ADDON_ID = "myaddon";
var PANEL_ID = "".concat(ADDON_ID, "/panel");

_addons.addons.register(ADDON_ID, function (api) {
  _addons.addons.add(PANEL_ID, {
    type: _addons.types.PANEL,
    title: "My Addon2222",
    render: function render(_ref) {
      var active = _ref.active,
          key = _ref.key;
      return /*#__PURE__*/_react["default"].createElement(_components.AddonPanel, {
        active: active,
        key: key
      }, /*#__PURE__*/_react["default"].createElement(_derkubaCustomEventPanel["default"], null));
    }
  });
}); // https://github.com/babel/minify