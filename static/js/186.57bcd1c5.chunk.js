"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[186],{4186:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var i=t(2791),r=t(4087),a=t(1413),s=t(4942),c=t(4925),o=t(9439),l=t(4363),d=t(9886);var u=t(7872),h=t(9219),p=t(2996),f=t(2952),m=t(3329),x=["children","styleType","stylePosition","spacing"],g=["as"],v=["as"],j=(0,d.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),y=(0,o.Z)(j,2),Z=y[0],_=y[1],S=(0,u.G)((function(e,n){var t=(0,h.jC)("List",e),r=(0,p.Lr)(e),o=r.children,l=r.styleType,d=void 0===l?"none":l,u=r.stylePosition,g=r.spacing,v=(0,c.Z)(r,x),j=function(e){return i.Children.toArray(e).filter((function(e){return(0,i.isValidElement)(e)}))}(o),y=g?(0,s.Z)({},"& > *:not(style) ~ *:not(style)",{mt:g}):{};return(0,m.jsx)(Z,{value:t,children:(0,m.jsx)(f.m.ul,(0,a.Z)((0,a.Z)({ref:n,listStyleType:d,listStylePosition:u,role:"list",__css:(0,a.Z)((0,a.Z)({},t.container),y)},v),{},{children:j}))})}));S.displayName="List",(0,u.G)((function(e,n){e.as;var t=(0,c.Z)(e,g);return(0,m.jsx)(S,(0,a.Z)({ref:n,as:"ol",styleType:"decimal",marginStart:"1em"},t))})).displayName="OrderedList",(0,u.G)((function(e,n){e.as;var t=(0,c.Z)(e,v);return(0,m.jsx)(S,(0,a.Z)({ref:n,as:"ul",styleType:"initial",marginStart:"1em"},t))})).displayName="UnorderedList";var b=(0,u.G)((function(e,n){var t=_();return(0,m.jsx)(f.m.li,(0,a.Z)((0,a.Z)({ref:n},e),{},{__css:t.item}))}));b.displayName="ListItem",(0,u.G)((function(e,n){var t=_();return(0,m.jsx)(l.J,(0,a.Z)((0,a.Z)({ref:n,role:"presentation"},e),{},{__css:t.icon}))})).displayName="ListIcon";var N=t(9229),k=t(4224),L=t(1087),I=t(7689),C=t(2902),w=t(9434),T=t(478),z=t(7432),P=function(){var e=(0,w.I0)(),n=(0,w.v9)(T.dy);return(0,m.jsx)(b,{children:(0,m.jsxs)(r.xu,{display:"flex",alignItems:"center",gap:"20px",children:[(0,m.jsxs)(N.x,{color:"white",children:["Hello ( ",n.email," )"]}),(0,m.jsx)(k.z,{colorScheme:"red",variant:"ghost",onClick:function(){e((0,z.ni)())},children:"Logout"})]})})},A=function(){var e=(0,w.v9)(T.Qb);return(0,m.jsxs)(r.xu,{paddingTop:"20px",children:[e?(0,m.jsxs)(S,{display:"flex",gap:"50px",justifyContent:"center",children:[(0,m.jsx)(b,{children:(0,m.jsx)(N.x,{color:"red",fontSize:"30px",children:"Phonebook"})}),(0,m.jsx)(b,{children:(0,m.jsx)(L.OL,{to:"/contacts",children:(0,m.jsx)(k.z,{colorScheme:"red",variant:"ghost",children:"Contacts"})})}),(0,m.jsx)(P,{})]}):(0,m.jsxs)(S,{display:"flex",gap:"50px",justifyContent:"center",children:[(0,m.jsx)(b,{children:(0,m.jsx)(N.x,{color:"red",fontSize:"35px",children:"Phonebook"})}),(0,m.jsx)(b,{children:(0,m.jsx)(L.OL,{to:"/login",children:(0,m.jsx)(k.z,{colorScheme:"red",variant:"ghost",children:"Login"})})}),(0,m.jsx)(b,{children:(0,m.jsx)(L.OL,{to:"/register",children:(0,m.jsx)(k.z,{colorScheme:"red",variant:"ghost",children:"Register"})})})]}),(0,m.jsx)(i.Suspense,{fallback:(0,m.jsxs)("div",{children:[(0,m.jsx)(C.E,{hasStripe:!0,value:64}),"Loading page..."]}),children:(0,m.jsx)(I.j3,{})})]})}},4224:function(e,n,t){t.d(n,{z:function(){return b}});var i=t(4925),r=t(1413),a=t(9439),s=t(2791);var c=(0,t(9886).k)({strict:!1,name:"ButtonGroupContext"}),o=(0,a.Z)(c,2),l=(o[0],o[1]),d=t(2952),u=t(6992),h=t(3329),p=["children","className"];function f(e){var n=e.children,t=e.className,a=(0,i.Z)(e,p),c=(0,s.isValidElement)(n)?(0,s.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,o=(0,u.cx)("chakra-button__icon",t);return(0,h.jsx)(d.m.span,(0,r.Z)((0,r.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},a),{},{className:o,children:c}))}f.displayName="ButtonIcon";var m=t(4942),x=t(3204),g=["label","placement","spacing","children","className","__css"];function v(e){var n=e.label,t=e.placement,a=e.spacing,c=void 0===a?"0.5rem":a,o=e.children,l=void 0===o?(0,h.jsx)(x.$,{color:"currentColor",width:"1em",height:"1em"}):o,p=e.className,f=e.__css,v=(0,i.Z)(e,g),j=(0,u.cx)("chakra-button__spinner",p),y="start"===t?"marginEnd":"marginStart",Z=(0,s.useMemo)((function(){var e;return(0,r.Z)((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"},(0,m.Z)(e,y,n?c:0),(0,m.Z)(e,"fontSize","1em"),(0,m.Z)(e,"lineHeight","normal"),e),f)}),[f,n,y,c]);return(0,h.jsx)(d.m.div,(0,r.Z)((0,r.Z)({className:j},v),{},{__css:Z,children:l}))}v.displayName="ButtonSpinner";var j=t(4591),y=t(7872),Z=t(9219),_=t(2996),S=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],b=(0,y.G)((function(e,n){var t=l(),c=(0,Z.mq)("Button",(0,r.Z)((0,r.Z)({},t),e)),o=(0,_.Lr)(e),p=o.isDisabled,f=void 0===p?null==t?void 0:t.isDisabled:p,m=o.isLoading,x=o.isActive,g=o.children,y=o.leftIcon,b=o.rightIcon,k=o.loadingText,L=o.iconSpacing,I=void 0===L?"0.5rem":L,C=o.type,w=o.spinner,T=o.spinnerPlacement,z=void 0===T?"start":T,P=o.className,A=o.as,B=(0,i.Z)(o,S),E=(0,s.useMemo)((function(){var e=(0,r.Z)((0,r.Z)({},null==c?void 0:c._focus),{},{zIndex:1});return(0,r.Z)((0,r.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},c),!!t&&{_focus:e})}),[c,t]),G=function(e){var n=(0,s.useState)(!e),t=(0,a.Z)(n,2),i=t[0],r=t[1];return{ref:(0,s.useCallback)((function(e){e&&r("BUTTON"===e.tagName)}),[]),type:i?"button":void 0}}(A),q=G.ref,O=G.type,D={rightIcon:b,leftIcon:y,iconSpacing:I,children:g};return(0,h.jsxs)(d.m.button,(0,r.Z)((0,r.Z)({ref:(0,j.qq)(n,q),as:A,type:null!=C?C:O,"data-active":(0,u.PB)(x),"data-loading":(0,u.PB)(m),__css:E,className:(0,u.cx)("chakra-button",P)},B),{},{disabled:f||m,children:[m&&"start"===z&&(0,h.jsx)(v,{className:"chakra-button__spinner--start",label:k,placement:"start",spacing:I,children:w}),m?k||(0,h.jsx)(d.m.span,{opacity:0,children:(0,h.jsx)(N,(0,r.Z)({},D))}):(0,h.jsx)(N,(0,r.Z)({},D)),m&&"end"===z&&(0,h.jsx)(v,{className:"chakra-button__spinner--end",label:k,placement:"end",spacing:I,children:w})]}))}));function N(e){var n=e.leftIcon,t=e.rightIcon,i=e.children,r=e.iconSpacing;return(0,h.jsxs)(h.Fragment,{children:[n&&(0,h.jsx)(f,{marginEnd:r,children:n}),i,t&&(0,h.jsx)(f,{marginStart:r,children:t})]})}b.displayName="Button"},9229:function(e,n,t){t.d(n,{x:function(){return p}});var i=t(1413),r=t(4925),a=t(7872),s=t(9219),c=t(2996),o=t(2952),l=t(6992),d=t(5246),u=t(3329),h=["className","align","decoration","casing"],p=(0,a.G)((function(e,n){var t=(0,s.mq)("Text",e),a=(0,c.Lr)(e),p=(a.className,a.align,a.decoration,a.casing,(0,r.Z)(a,h)),f=(0,d.oA)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,u.jsx)(o.m.p,(0,i.Z)((0,i.Z)((0,i.Z)({ref:n,className:(0,l.cx)("chakra-text",e.className)},f),p),{},{__css:t}))}));p.displayName="Text"},4591:function(e,n,t){t.d(n,{lq:function(){return r},qq:function(){return a}});var i=t(2791);function r(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){n.forEach((function(n){!function(e,n){if(null!=e)if("function"!==typeof e)try{e.current=n}catch(t){throw new Error("Cannot assign value '".concat(n,"' to ref '").concat(e,"'"))}else e(n)}(n,e)}))}}function a(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,i.useMemo)((function(){return r.apply(void 0,n)}),n)}}}]);
//# sourceMappingURL=186.57bcd1c5.chunk.js.map