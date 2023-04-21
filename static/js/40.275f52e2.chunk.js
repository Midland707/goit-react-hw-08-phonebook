"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[40],{2040:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var r=t(2791),i=t(4270),a=t(9434),o=t(6052),u="NOT_FOUND";var c=function(e,n){return e===n};function s(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,i=void 0===r?c:r,a=t.maxSize,o=void 0===a?1:a,s=t.resultEqualityCheck,l=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,i=0;i<r;i++)if(!e(n[i],t[i]))return!1;return!0}}(i),f=1===o?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:u},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return u}return{get:r,put:function(n,i){r(n)===u&&(t.unshift({key:n,value:i}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,l);function p(){var n=f.get(arguments);if(n===u){if(n=e.apply(null,arguments),s){var t=f.getEntries().find((function(e){return s(e.value,n)}));t&&(n=t.value)}f.put(arguments,n)}return n}return p.clearCache=function(){return f.clear()},p}function l(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a,o=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=u.memoizeOptions,l=void 0===s?t:s,f=Array.isArray(l)?l:[l],p=function(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}(r),d=e.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(f)),m=e((function(){for(var e=[],n=p.length,t=0;t<n;t++)e.push(p[t].apply(null,arguments));return a=d.apply(null,e)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:d,dependencies:p,lastResult:function(){return a},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),m}}var f=l(s),p=function(e){return e.contacts.contactItems},d=function(e){return e.contacts.isLoading},m=function(e){return e.contacts.error},h=f([p,function(e){return e.filter.value}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase().trim())}))})),x=t(1413),y=t(4087),v=t(9229),g=t(8208),j=t(5442),b=t(4224),Z=t(5705),w=t(3329);function C(){var e=(0,a.I0)(),n=(0,a.v9)(p);return(0,w.jsxs)(y.xu,{w:"400px",children:[(0,w.jsx)(v.x,{color:"white",fontSize:"30px",textAlign:"center",children:"Add contact"}),(0,w.jsx)(Z.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){n.find((function(e){return e.name===t.name}))?alert("".concat(t.name," is already in contacts")):(e((0,o.uK)({name:t.name,number:t.number})),r.setSubmitting(!1),r.resetForm())},children:function(e){return(0,w.jsx)(Z.l0,{children:(0,w.jsxs)(y.xu,{color:"white",w:"300px",mr:"auto",ml:"auto",children:[(0,w.jsx)(Z.gN,{name:"name",children:function(e){var n=e.field;return(0,w.jsxs)(g.l,{margin:"0px",marginTop:"20px",children:["Name",(0,w.jsx)(j.I,(0,x.Z)((0,x.Z)({},n),{},{placeholder:". . . name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Jacob Mercer...",required:!0}))]})}}),(0,w.jsx)(Z.gN,{name:"number",children:function(e){var n=e.field;return(0,w.jsxs)(g.l,{margin:"0px",marginTop:"20px",children:["Number phone",(0,w.jsx)(j.I,(0,x.Z)((0,x.Z)({},n),{},{placeholder:". . . number phone",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}))]})}}),(0,w.jsx)(b.z,{type:"submit",w:"300px",marginTop:"20px",color:"white",colorScheme:"green",children:"Add contact"})]})})}})]})}var A=t(4808),S=function(){var e=(0,a.I0)();return(0,w.jsxs)(g.l,{color:"white",margin:"0px",marginTop:"20px",children:["Find contacts by name",(0,w.jsx)(j.I,{placeholder:". . . name to find",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(n){return e((0,A.T)(n.target.value))}})]})},z=t(1844),k=function(e){var n=e.id,t=e.name,r=e.number,i=(0,a.I0)();return(0,w.jsxs)(z.HC,{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"10px",children:[(0,w.jsxs)(v.x,{children:[t,": "]}),(0,w.jsx)(v.x,{children:r}),(0,w.jsx)(b.z,{colorScheme:"red",onClick:function(){return i((0,o.GK)(n))},children:"Delete"})]})},_=function(){var e=(0,a.v9)(h);return(0,w.jsx)(z.aV,{children:e.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,w.jsx)(k,{id:n,name:t,number:r},n)}))})},L=t(2902),N=function(){var e=(0,a.v9)(p),n=(0,a.I0)(),t=(0,a.v9)(d),u=(0,a.v9)(m);return(0,r.useEffect)((function(){n((0,o.K2)())}),[n]),(0,w.jsxs)(y.xu,{color:"white",marginTop:"20px",display:"flex",justifyContent:"center",fontSize:"20px",mr:"auto",ml:"auto",children:[(0,w.jsx)(i.q,{children:(0,w.jsx)("title",{children:"Contacts"})}),(0,w.jsx)(C,{}),t&&!u?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(L.E,{hasStripe:!0,value:64}),(0,w.jsx)(v.x,{margin:"0",marginBottom:"15px",children:"Request in progress..."})]}):0===e.length?(0,w.jsx)(v.x,{children:"Contacts list is empty ... "}):(0,w.jsxs)(y.xu,{children:[(0,w.jsx)(v.x,{margin:"0",marginBottom:"15px",fontSize:"30px",textAlign:"center",children:"Contacts"}),(0,w.jsx)(S,{}),(0,w.jsx)(_,{})]})]})}},1844:function(e,n,t){t.d(n,{aV:function(){return Z},HC:function(){return w}});var r=t(1413),i=t(4942),a=t(4925),o=t(9439),u=t(4363),c=t(9886),s=t(2791);var l=t(7872),f=t(9219),p=t(2996),d=t(2952),m=t(3329),h=["children","styleType","stylePosition","spacing"],x=["as"],y=["as"],v=(0,c.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),g=(0,o.Z)(v,2),j=g[0],b=g[1],Z=(0,l.G)((function(e,n){var t=(0,f.jC)("List",e),o=(0,p.Lr)(e),u=o.children,c=o.styleType,l=void 0===c?"none":c,x=o.stylePosition,y=o.spacing,v=(0,a.Z)(o,h),g=function(e){return s.Children.toArray(e).filter((function(e){return(0,s.isValidElement)(e)}))}(u),b=y?(0,i.Z)({},"& > *:not(style) ~ *:not(style)",{mt:y}):{};return(0,m.jsx)(j,{value:t,children:(0,m.jsx)(d.m.ul,(0,r.Z)((0,r.Z)({ref:n,listStyleType:l,listStylePosition:x,role:"list",__css:(0,r.Z)((0,r.Z)({},t.container),b)},v),{},{children:g}))})}));Z.displayName="List",(0,l.G)((function(e,n){e.as;var t=(0,a.Z)(e,x);return(0,m.jsx)(Z,(0,r.Z)({ref:n,as:"ol",styleType:"decimal",marginStart:"1em"},t))})).displayName="OrderedList",(0,l.G)((function(e,n){e.as;var t=(0,a.Z)(e,y);return(0,m.jsx)(Z,(0,r.Z)({ref:n,as:"ul",styleType:"initial",marginStart:"1em"},t))})).displayName="UnorderedList";var w=(0,l.G)((function(e,n){var t=b();return(0,m.jsx)(d.m.li,(0,r.Z)((0,r.Z)({ref:n},e),{},{__css:t.item}))}));w.displayName="ListItem",(0,l.G)((function(e,n){var t=b();return(0,m.jsx)(u.J,(0,r.Z)((0,r.Z)({ref:n,role:"presentation"},e),{},{__css:t.icon}))})).displayName="ListIcon"}}]);
//# sourceMappingURL=40.275f52e2.chunk.js.map