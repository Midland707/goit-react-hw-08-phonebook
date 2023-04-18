"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[57],{3057:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var i=t(2791),r=t(1413),s=t(4925),a=t(9834),c=t(7872),l=t(3329),o=["size","centerContent"],d=["size"],u=(0,a.m)("div");u.displayName="Box";var f=(0,c.G)((function(e,n){var t=e.size,i=e.centerContent,a=void 0===i||i,c=(0,s.Z)(e,o),d=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,l.jsx)(u,(0,r.Z)({ref:n,boxSize:t,__css:(0,r.Z)((0,r.Z)({},d),{},{flexShrink:0,flexGrow:0})},c))}));f.displayName="Square",(0,c.G)((function(e,n){var t=e.size,i=(0,s.Z)(e,d);return(0,l.jsx)(f,(0,r.Z)({size:t,ref:n,borderRadius:"9999px"},i))})).displayName="Circle";var p=t(4942),h=t(9439),m=t(4363),x=t(9886);var j=t(9219),v=t(2996),g=["children","styleType","stylePosition","spacing"],y=["as"],Z=["as"],_=(0,x.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),b=(0,h.Z)(_,2),S=b[0],N=b[1],L=(0,c.G)((function(e,n){var t=(0,j.jC)("List",e),c=(0,v.Lr)(e),o=c.children,d=c.styleType,u=void 0===d?"none":d,f=c.stylePosition,h=c.spacing,m=(0,s.Z)(c,g),x=function(e){return i.Children.toArray(e).filter((function(e){return(0,i.isValidElement)(e)}))}(o),y=h?(0,p.Z)({},"& > *:not(style) ~ *:not(style)",{mt:h}):{};return(0,l.jsx)(S,{value:t,children:(0,l.jsx)(a.m.ul,(0,r.Z)((0,r.Z)({ref:n,listStyleType:u,listStylePosition:f,role:"list",__css:(0,r.Z)((0,r.Z)({},t.container),y)},m),{},{children:x}))})}));L.displayName="List",(0,c.G)((function(e,n){e.as;var t=(0,s.Z)(e,y);return(0,l.jsx)(L,(0,r.Z)({ref:n,as:"ol",styleType:"decimal",marginStart:"1em"},t))})).displayName="OrderedList",(0,c.G)((function(e,n){e.as;var t=(0,s.Z)(e,Z);return(0,l.jsx)(L,(0,r.Z)({ref:n,as:"ul",styleType:"initial",marginStart:"1em"},t))})).displayName="UnorderedList";var k=(0,c.G)((function(e,n){var t=N();return(0,l.jsx)(a.m.li,(0,r.Z)((0,r.Z)({ref:n},e),{},{__css:t.item}))}));k.displayName="ListItem",(0,c.G)((function(e,n){var t=N();return(0,l.jsx)(m.J,(0,r.Z)((0,r.Z)({ref:n,role:"presentation"},e),{},{__css:t.icon}))})).displayName="ListIcon";var C=t(4224),z=t(1087),I=t(7689),w=t(2902),G=t(9434),B=t(478),T=t(7432),E=function(){return(0,l.jsxs)(k,{children:[(0,l.jsx)("p",{children:"mango@mail.com"}),(0,l.jsx)(C.z,{onClick:function(){(0,T.ni)()},children:"Logout"})]})},q=function(){var e=(0,G.v9)(B.Qb);return(0,l.jsxs)(u,{children:[e?(0,l.jsxs)(L,{display:"flex",gap:"50px",justifyContent:"center",children:[(0,l.jsx)(k,{children:(0,l.jsx)(z.OL,{to:"/",children:(0,l.jsx)(C.z,{children:"Home"})})}),(0,l.jsx)(k,{children:(0,l.jsx)(z.OL,{to:"/contacts",children:(0,l.jsx)(C.z,{children:"Contacts"})})}),(0,l.jsx)(E,{})]}):(0,l.jsxs)(L,{display:"flex",gap:"50px",justifyContent:"center",children:[(0,l.jsx)(k,{children:(0,l.jsx)(z.OL,{to:"/",children:(0,l.jsx)(C.z,{children:"Home"})})}),(0,l.jsx)(k,{children:(0,l.jsx)(z.OL,{to:"/login",children:(0,l.jsx)(C.z,{children:"Login"})})}),(0,l.jsx)(k,{children:(0,l.jsx)(z.OL,{to:"/register",children:(0,l.jsx)(C.z,{children:"Register"})})})]}),(0,l.jsx)(i.Suspense,{fallback:(0,l.jsxs)("div",{children:[(0,l.jsx)(w.E,{hasStripe:!0,value:64}),"Loading page..."]}),children:(0,l.jsx)(I.j3,{})})]})}},4224:function(e,n,t){t.d(n,{z:function(){return S}});var i=t(4925),r=t(1413),s=t(9439),a=t(2791);var c=(0,t(9886).k)({strict:!1,name:"ButtonGroupContext"}),l=(0,s.Z)(c,2),o=(l[0],l[1]),d=t(9834),u=t(6992),f=t(3329),p=["children","className"];function h(e){var n=e.children,t=e.className,s=(0,i.Z)(e,p),c=(0,a.isValidElement)(n)?(0,a.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,l=(0,u.cx)("chakra-button__icon",t);return(0,f.jsx)(d.m.span,(0,r.Z)((0,r.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},s),{},{className:l,children:c}))}h.displayName="ButtonIcon";var m=t(4942),x=t(3204),j=["label","placement","spacing","children","className","__css"];function v(e){var n=e.label,t=e.placement,s=e.spacing,c=void 0===s?"0.5rem":s,l=e.children,o=void 0===l?(0,f.jsx)(x.$,{color:"currentColor",width:"1em",height:"1em"}):l,p=e.className,h=e.__css,v=(0,i.Z)(e,j),g=(0,u.cx)("chakra-button__spinner",p),y="start"===t?"marginEnd":"marginStart",Z=(0,a.useMemo)((function(){var e;return(0,r.Z)((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"},(0,m.Z)(e,y,n?c:0),(0,m.Z)(e,"fontSize","1em"),(0,m.Z)(e,"lineHeight","normal"),e),h)}),[h,n,y,c]);return(0,f.jsx)(d.m.div,(0,r.Z)((0,r.Z)({className:g},v),{},{__css:Z,children:o}))}v.displayName="ButtonSpinner";var g=t(4591),y=t(7872),Z=t(9219),_=t(2996),b=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],S=(0,y.G)((function(e,n){var t=o(),c=(0,Z.mq)("Button",(0,r.Z)((0,r.Z)({},t),e)),l=(0,_.Lr)(e),p=l.isDisabled,h=void 0===p?null==t?void 0:t.isDisabled:p,m=l.isLoading,x=l.isActive,j=l.children,y=l.leftIcon,S=l.rightIcon,L=l.loadingText,k=l.iconSpacing,C=void 0===k?"0.5rem":k,z=l.type,I=l.spinner,w=l.spinnerPlacement,G=void 0===w?"start":w,B=l.className,T=l.as,E=(0,i.Z)(l,b),q=(0,a.useMemo)((function(){var e=(0,r.Z)((0,r.Z)({},null==c?void 0:c._focus),{},{zIndex:1});return(0,r.Z)((0,r.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},c),!!t&&{_focus:e})}),[c,t]),O=function(e){var n=(0,a.useState)(!e),t=(0,s.Z)(n,2),i=t[0],r=t[1];return{ref:(0,a.useCallback)((function(e){e&&r("BUTTON"===e.tagName)}),[]),type:i?"button":void 0}}(T),P=O.ref,A=O.type,M={rightIcon:S,leftIcon:y,iconSpacing:C,children:j};return(0,f.jsxs)(d.m.button,(0,r.Z)((0,r.Z)({ref:(0,g.qq)(n,P),as:T,type:null!=z?z:A,"data-active":(0,u.PB)(x),"data-loading":(0,u.PB)(m),__css:q,className:(0,u.cx)("chakra-button",B)},E),{},{disabled:h||m,children:[m&&"start"===G&&(0,f.jsx)(v,{className:"chakra-button__spinner--start",label:L,placement:"start",spacing:C,children:I}),m?L||(0,f.jsx)(d.m.span,{opacity:0,children:(0,f.jsx)(N,(0,r.Z)({},M))}):(0,f.jsx)(N,(0,r.Z)({},M)),m&&"end"===G&&(0,f.jsx)(v,{className:"chakra-button__spinner--end",label:L,placement:"end",spacing:C,children:I})]}))}));function N(e){var n=e.leftIcon,t=e.rightIcon,i=e.children,r=e.iconSpacing;return(0,f.jsxs)(f.Fragment,{children:[n&&(0,f.jsx)(h,{marginEnd:r,children:n}),i,t&&(0,f.jsx)(h,{marginStart:r,children:t})]})}S.displayName="Button"},4591:function(e,n,t){t.d(n,{lq:function(){return r},qq:function(){return s}});var i=t(2791);function r(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){n.forEach((function(n){!function(e,n){if(null!=e)if("function"!==typeof e)try{e.current=n}catch(t){throw new Error("Cannot assign value '".concat(n,"' to ref '").concat(e,"'"))}else e(n)}(n,e)}))}}function s(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,i.useMemo)((function(){return r.apply(void 0,n)}),n)}}}]);
//# sourceMappingURL=57.7ef137d7.chunk.js.map