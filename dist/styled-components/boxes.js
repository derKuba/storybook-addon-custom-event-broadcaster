"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconBox = exports.FlexedBox = void 0;

var _theming = require("@storybook/theming");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FlexedBox = _theming.styled.div({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center"
});

exports.FlexedBox = FlexedBox;

var IconBox = _theming.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 18px;\n  height: 18px;\n  &.tooltip {\n    position: relative;\n    &:hover {\n      cursor: pointer;\n      > [tooltip] {\n        visibility: visible;\n        opacity: 1;\n      }\n    }\n    > [tooltip] {\n      user-select: none;\n      pointer-events: none;\n      position: absolute;\n      opacity: 0;\n      visibility: hidden;\n      font-size: 0.75rem;\n      line-height: 1;\n      min-width: 3em;\n      max-width: 21em;\n      width: max-content;\n      background: rgba(51, 51, 51, 0.7);\n      color: white;\n      padding: 8px 10px;\n      z-index: 1001;\n      left: 22px;\n      top: -6px;\n    }\n  }\n"])));

exports.IconBox = IconBox;