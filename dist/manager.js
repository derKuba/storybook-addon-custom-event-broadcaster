'use strict';

var managerApi = require('@storybook/manager-api');
var r = require('react');
var components = require('@storybook/components');
var theming = require('@storybook/theming');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var r__default = /*#__PURE__*/_interopDefault(r);

var G=Object.create;var w=Object.defineProperty;var X=Object.getOwnPropertyDescriptor;var Z=Object.getOwnPropertyNames;var ee=Object.getPrototypeOf,te=Object.prototype.hasOwnProperty;var T=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var oe=(e,t,o,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Z(t))!te.call(e,n)&&n!==o&&w(e,n,{get:()=>t[n],enumerable:!(a=X(t,n))||a.enumerable});return e};var ne=(e,t,o)=>(o=e!=null?G(ee(e)):{},oe(t||!e||!e.__esModule?w(o,"default",{value:e,enumerable:!0}):o,e));var N=T((Ee,k)=>{var re="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";k.exports=re;});var A=T((De,_)=>{var le=N();function F(){}function I(){}I.resetWarningCache=F;_.exports=function(){function e(a,n,s,D,h,v){if(v!==le){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:I,resetWarningCache:F};return o.PropTypes=o,o};});var O=T((ke,B)=>{B.exports=A()();});var i="storybook/storybook-addon-custom-event-broadcaster",P=`${i}/panel`;var S=ne(O());var u=theming.styled.div({display:"flex",justifyContent:"flex-start",alignItems:"center"}),x=theming.styled.div`
  width: 18px;
  height: 18px;
  &.tooltip {
    position: relative;
    &:hover {
      cursor: pointer;
      > [tooltip] {
        visibility: visible;
        opacity: 1;
      }
    }
    > [tooltip] {
      user-select: none;
      pointer-events: none;
      position: absolute;
      opacity: 0;
      visibility: hidden;
      font-size: 0.75rem;
      line-height: 1;
      min-width: 3em;
      max-width: 21em;
      width: max-content;
      background: rgba(51, 51, 51, 0.7);
      color: white;
      padding: 8px 10px;
      z-index: 1001;
      left: 22px;
      top: -6px;
    }
  }
`;var L={appearance:"none",border:"0 none",display:"block",margin:"0",background:"#FFFFFF",padding:"6px 10px",fontSize:"13px",position:"relative",color:"#333333",boxShadow:"rgb(0 0 0 / 10%) 0 0 0 1px inset",borderRadius:"4px",lineHeight:" 20px",flex:"1",textAlign:"left",overflow:"visible",maxHeight:"400px"},$=theming.styled.input(L),C=theming.styled.textarea(L);var ae={borderCollapse:"collapse",borderSpacing:"0px",color:"rgb(0, 0, 0)",fontSize:"13px",lineHeight:"20px",textAlign:"left",width:"100%",margin:"0px"},W=theming.styled.table(ae),se={borderTop:"1px solid rgb(230, 230, 230)"},f=theming.styled.tr(se),z={paddingTop:"10px",paddingBottom:"10px"},m=theming.styled.td(z),U=theming.styled(m)`
  padding-left: 20px;
`,y=theming.styled.th(z),j=theming.styled(y)`
  padding-left: 20px;
`;var ce=(e,t,o="")=>{let a=t||null;try{let n=JSON.parse(a),s=document.getElementById("storybook-preview-iframe").contentWindow.document;o.length>0?s.querySelector(o).dispatchEvent(new CustomEvent(e,n)):s.dispatchEvent(new CustomEvent(e,n));}catch(n){console.log("Fire not successfull ",n);}},E=r.memo(({selectorDefault:e="",eventNameDefault:t="",eventDataDefault:o={}})=>{let[a,n]=r.useState(!1),[s,D]=r.useState(e),[h,v]=r.useState(t),[d,Y]=r.useState(o),M=()=>{n(!0);},Q=c=>{D(c.target.value);};return r__default.default.createElement(f,null,r__default.default.createElement(U,null,r__default.default.createElement($,{type:"text",value:h,onChange:c=>{v(c.target.value);}})),r__default.default.createElement(m,null,r__default.default.createElement(C,{value:d,onChange:c=>{Y(c.target.value);}})),r__default.default.createElement(m,null,r__default.default.createElement(u,null,a===!1&&s.length===0?[r__default.default.createElement(x,{key:"iconBox",className:"tooltip"},r__default.default.createElement(components.Icons,{icon:"add",onClick:M}),r__default.default.createElement("span",{tooltip:"message"},"Add Selektor"))]:r__default.default.createElement(C,{value:s,onChange:Q}))),r__default.default.createElement(m,null,r__default.default.createElement(components.Button,{primary:!0,onClick:()=>ce(h,d,s)},"send")))});E.propTypes={selectorDefault:S.default.string,eventNameDefault:S.default.string,eventDataDefault:S.default.string};E.defaultProps={selectorDefault:"",eventDataDefault:""};var g=E;var xe=e=>e!==null&&e.length>0?e.map((o,a)=>{let n={selectorDefault:o.selector,eventNameDefault:o.eventName,eventDataDefault:JSON.stringify(o.eventData)||""};return r__default.default.createElement(g,{key:`key__${o.eventName}__${a}`,...n})}):r__default.default.createElement(g,{key:"single"});function fe(){let e=managerApi.useParameter("customEventPanel",null),[t,o]=r.useState(0),a=()=>{let n=t+1;o(n);};return r__default.default.createElement(W,null,r__default.default.createElement("thead",null,r__default.default.createElement("tr",null,r__default.default.createElement(j,null,"EventName"),r__default.default.createElement(y,null,"Data"),r__default.default.createElement(y,null,"(opt.) Selector"),r__default.default.createElement(y,null," "))),r__default.default.createElement("tbody",null,xe(e),[...Array(t).keys()].map((n,s)=>r__default.default.createElement(g,{key:`addRow_${s+1}`})),r__default.default.createElement(f,null,r__default.default.createElement("td",null,r__default.default.createElement(u,{onClick:a},r__default.default.createElement(x,{key:"iconBox"},r__default.default.createElement(components.Icons,{icon:"add"})))))))}var V=fe;var K=e=>r__default.default.createElement(components.AddonPanel,{...e},r__default.default.createElement(V,null));managerApi.addons.register(i,()=>{managerApi.addons.add(P,{type:managerApi.types.PANEL,title:"Custom Events",match:({viewMode:e})=>e==="story",render:K});});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=manager.js.map