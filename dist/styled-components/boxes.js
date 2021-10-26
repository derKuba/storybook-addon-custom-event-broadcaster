"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconBox = exports.FlexedBox = void 0;

var _theming = require("@storybook/theming");

var FlexedBox = _theming.styled.div({
  display: 'flex'
});

exports.FlexedBox = FlexedBox;

var IconBox = _theming.styled.div({
  width: '25px',
  height: '25px'
});

exports.IconBox = IconBox;