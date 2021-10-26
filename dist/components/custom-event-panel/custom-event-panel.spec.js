"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _customEventPanel = _interopRequireDefault(require("./custom-event-panel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

jest.mock("@storybook/api", function () {
  return {
    __esModule: true,
    useParameter: function useParameter() {
      return null;
    }
  };
});
describe("CustomEventPanel", function () {
  test("should render", function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_customEventPanel["default"], null));
    expect(wrapper).toMatchSnapshot();
  });
});