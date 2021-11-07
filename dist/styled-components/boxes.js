"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconLabelBox = exports.IconBox = exports.FlexedBox = void 0;

var _theming = require("@storybook/theming");

var FlexedBox = _theming.styled.div({
  display: "flex"
});

exports.FlexedBox = FlexedBox;

var IconBox = _theming.styled.div({
  width: "25px",
  height: "25px"
});

exports.IconBox = IconBox;

var IconLabelBox = _theming.styled.div({
  marginLeft: "5px",
  marginTop: "3px"
});

exports.IconLabelBox = IconLabelBox;