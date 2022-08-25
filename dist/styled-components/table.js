"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTableRow = exports.StyledTableHeadCellFirst = exports.StyledTableHeadCell = exports.StyledTableCellFirst = exports.StyledTableCell = exports.StyledTable = void 0;

var _theming = require("@storybook/theming");

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var tableStyle = {
  borderCollapse: "collapse",
  borderSpacing: "0px",
  color: "rgb(0, 0, 0)",
  fontSize: "13px",
  lineHeight: "20px",
  textAlign: "left",
  width: "100%",
  margin: "0px"
};

var StyledTable = _theming.styled.table(tableStyle);

exports.StyledTable = StyledTable;
var tableRowStyle = {
  borderTop: "1px solid rgb(230, 230, 230)"
};

var StyledTableRow = _theming.styled.tr(tableRowStyle);

exports.StyledTableRow = StyledTableRow;
var tableCellStyle = {
  paddingTop: "10px",
  paddingBottom: "10px"
};

var StyledTableCell = _theming.styled.td(tableCellStyle);

exports.StyledTableCell = StyledTableCell;
var StyledTableCellFirst = (0, _theming.styled)(StyledTableCell)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding-left: 20px;\n"])));
exports.StyledTableCellFirst = StyledTableCellFirst;

var StyledTableHeadCell = _theming.styled.th(tableCellStyle);

exports.StyledTableHeadCell = StyledTableHeadCell;
var StyledTableHeadCellFirst = (0, _theming.styled)(StyledTableHeadCell)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding-left: 20px;\n"])));
exports.StyledTableHeadCellFirst = StyledTableHeadCellFirst;