(self.webpackChunkcustom_print=self.webpackChunkcustom_print||[]).push([[678],{8620:function(e,t,r){var n;"undefined"!=typeof self&&self,n=function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(t,r){t.exports=e},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var p=u(r(0)),d=function(e){i(r,e);var t=c(r);function r(){return o(this,r),t.apply(this,arguments)}return r}(p.default.Component);t.Parallax=d;var f=function(e){i(r,e);var t=c(r);function r(){return o(this,r),t.apply(this,arguments)}return r}(p.default.Component);t.Background=f},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.getNodeHeight=t.isScrolledIntoView=t.getWindowHeight=void 0,t.getWindowHeight=function(e){if(!e)return 0;var t=window,r=document,n=r.documentElement,o=r.getElementsByTagName("body")[0];return t.innerHeight||n.clientHeight||o.clientHeight},t.isScrolledIntoView=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0;if(!n)return!1;var o=e.getBoundingClientRect().top-r,i=e.getBoundingClientRect().bottom+r;return o<=t.getWindowHeight(n)&&i>=0},t.getNodeHeight=function(e,r){return e?r&&"clientHeight"in r?r.clientHeight:t.getWindowHeight(e):0},t.canUseDOM=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var o=n(r(4));t.Parallax=o.default;var i=n(r(7));t.Background=i.default},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=s(r(0)),u=r(1),p=r(5),d=r(2),f=s(r(6)),m={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(r,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}(r);function r(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(n=t.call(this,e)).onWindowResize=function(){n.parentHeight=d.getNodeHeight(n.canUseDOM,n.parent),n.updatePosition()},n.onWindowLoad=function(){n.updatePosition()},n.onScroll=function(){if(n.canUseDOM){var e=Date.now();e-n.timestamp>=10&&d.isScrolledIntoView(n.node,100,n.canUseDOM)&&(window.requestAnimationFrame(n.updatePosition),n.timestamp=e)}},n.onContentMount=function(e){n.content=e},n.updatePosition=function(){if(n.content){var e=!1;n.contentHeight=n.content.getBoundingClientRect().height,n.contentWidth=n.node.getBoundingClientRect().width,n.img&&n.img.naturalWidth/n.img.naturalHeight<n.contentWidth/n.getImageHeight()&&(e=!0);var t=p.getRelativePosition(n.node,n.canUseDOM),r=!!n.img,o=n.bg&&n.state.splitChildren.bgChildren.length>0;r&&n.setImagePosition(t,e),o&&n.setBackgroundPosition(t),r||o||n.setState({percentage:t})}},n.state={bgImage:e.bgImage,bgImageSrcSet:e.bgImageSrcSet,bgImageSizes:e.bgImageSizes,imgStyle:m,bgStyle:Object.assign(Object.assign({},m),e.bgStyle),percentage:0,splitChildren:p.getSplitChildren(e)},n.canUseDOM=d.canUseDOM(),n.node=null,n.content=null,n.bgImageLoaded=!1,n.bgImageRef=void 0,n.parent=e.parent,n.parentHeight=d.getNodeHeight(n.canUseDOM,n.parent),n.timestamp=Date.now(),n.isDynamicBlur=p.getHasDynamicBlur(e.blur),n}return function(e,t,r){t&&o(e.prototype,t),r&&o(e,r)}(r,[{key:"componentDidMount",value:function(){var e=this.props.parent,t=this.state,r=t.bgImage,n=t.bgImageSrcSet,o=t.bgImageSizes;this.parent=e||document,this.addListeners(),r?this.loadImage(r,n,o):this.updatePosition()}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.parent,n=t.bgImage,o=t.bgImageSrcSet,i=t.bgImageSizes,a=this.state.bgImage;e.parent!==r&&(this.removeListeners(this.parent),this.parent=r,r&&this.addListeners()),this.parentHeight=d.getNodeHeight(this.canUseDOM,this.parent),a!==n&&this.loadImage(n,o,i)}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function(e){var t=this.props,r=t.disabled,n=t.strength,o=Object.assign({},this.state.bgStyle);if(!r){var i="translate3d(-50%, ".concat((n<0?n:0)-n*e,"px, 0)");o.WebkitTransform=i,o.transform=i}this.setState({bgStyle:o,percentage:e})}},{key:"setImagePosition",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.props,n=r.disabled,o=r.strength,i=r.blur,a=t?"auto":"".concat(this.getImageHeight(),"px"),c=t?"".concat(this.contentWidth,"px"):"auto",s=Object.assign(Object.assign({},this.state.imgStyle),{height:a,width:c});if(!n){var l=o<0,u=(l?o:0)-o*e,d="translate3d(-50%, ".concat(u,"px, 0)"),f="none";i&&(f="blur(".concat(p.getBlurValue(this.isDynamicBlur,i,e),"px)")),s.WebkitTransform=d,s.transform=d,s.WebkitFilter=f,s.filter=f}this.setState({imgStyle:s,percentage:e})}},{key:"getImageHeight",value:function(){var e=this.props.strength,t=(e<0?2.5:1)*Math.abs(e);return Math.floor(this.contentHeight+t)}},{key:"loadImage",value:function(e,t,r){var n=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(o){n.setState({bgImage:e,bgImageSrcSet:t,bgImageSizes:r},(function(){return n.updatePosition()})),n.props.onLoad&&n.props.onLoad(o)},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=e,this.bgImageRef.srcset=t||"",this.bgImageRef.sizes=r||""}},{key:"releaseImage",value:function(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(e){this.canUseDOM&&(e&&e.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"render",value:function(){var e=this,t=this.props,r=t.className,n=t.style,o=t.bgClassName,i=t.contentClassName,a=t.bgImageAlt,c=t.renderLayer,s=t.bgImageStyle,u=this.state,p=u.bgImage,d=u.bgImageSrcSet,m=u.bgImageSizes,g=u.percentage,h=u.imgStyle,b=u.bgStyle,y=u.splitChildren;return l.default.createElement("div",{className:"react-parallax ".concat(r),style:Object.assign({position:"relative",overflow:"hidden"},n),ref:function(t){e.node=t}},p?l.default.createElement("img",{className:o,src:p,srcSet:d,sizes:m,ref:function(t){e.img=t},alt:a,style:Object.assign(Object.assign({},h),s)}):null,c?c(-(g-1)):null,y.bgChildren.length>0?l.default.createElement("div",{className:"react-parallax-background-children",ref:function(t){e.bg=t},style:b},y.bgChildren):null,l.default.createElement(f.default,{onMount:this.onContentMount,className:i},y.children))}}],[{key:"getDerivedStateFromProps",value:function(e){return{splitChildren:p.getSplitChildren(e)}}}]),r}(u.Parallax);g.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",contentClassName:"",disabled:!1,strength:100},t.default=g},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.setBlur=t.getBlurValue=t.getHasDynamicBlur=t.getSplitChildren=t.getRelativePosition=t.getPercentage=void 0;var o=r(0),i=r(2);t.getPercentage=function(e,t,r){return(r-e)/(t-e)||0},t.getRelativePosition=function(e,r){if(!r)return 0;var n=e.getBoundingClientRect(),o=n.top,a=n.height,c=i.getNodeHeight(r),s=a>c?a:c,l=Math.round(o>s?s:o);return t.getPercentage(0,s,l)},t.getSplitChildren=function(e){var t=[],r=o.Children.toArray(e.children);return r.forEach((function(e,n){var o=e;o.type&&o.type.isParallaxBackground&&(t=t.concat(r.splice(n,1)))})),{bgChildren:t,children:r}},t.getHasDynamicBlur=function(e){return"object"===n(e)&&void 0!==e.min&&void 0!==e.max},t.getBlurValue=function(e,t,r){return e?t.min+(1-r)*t.max:t},t.setBlur=function(e,t){e.style.webkitFilter="blur(".concat(t,"px)"),e.style.filter="blur(".concat(t,"px)")}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(0));t.default=function(e){var t=e.children,r=e.onMount,n=e.className;return o.default.createElement("div",{ref:function(e){return r(e)},className:n||"react-parallax-content",style:{position:"relative"}},t)}},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=l(r(0)),p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(r,e);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}(r);function r(){return o(this,r),t.apply(this,arguments)}return function(e,t,r){t&&i(e.prototype,t),r&&i(e,r)}(r,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.children;return u.default.createElement("div",{className:"react-parallax-background ".concat(t)},r)}}]),r}(r(1).Background);p.defaultProps={className:""},p.isParallaxBackground=!0,t.default=p}])},e.exports=n(r(7294))},7933:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Re}});var n=r(920),o=r(838),i=r(7294),a=r(8620),c=r(8014),s=r(9519),l=r(3433),u=r(7462),p=(r(5697),r(4131));function d(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}function f(e){var t=function(t){var r=e(t);return t.css?(0,u.Z)({},(0,p.Z)(r,e((0,u.Z)({theme:t.theme},t.css))),d(t.css,[e.filterProps])):t.sx?(0,u.Z)({},(0,p.Z)(r,e((0,u.Z)({theme:t.theme},t.sx))),d(t.sx,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css","sx"].concat((0,l.Z)(e.filterProps)),t}var m=f;var g=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=function(e){return t.reduce((function(t,r){var n=r(e);return n?(0,p.Z)(t,n):t}),{})};return n.propTypes={},n.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),n},h=r(4942),b=r(3592);function y(e,t){return t&&"string"==typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var v=function(e){var t=e.prop,r=e.cssProperty,n=void 0===r?e.prop:r,o=e.themeKey,i=e.transform,a=function(e){if(null==e[t])return null;var r=e[t],a=y(e.theme,o)||{};return(0,b.k)(e,r,(function(e){var t;return"function"==typeof a?t=a(e):Array.isArray(a)?t=a[e]||e:(t=y(a,e)||e,i&&(t=i(t))),!1===n?t:(0,h.Z)({},n,t)}))};return a.propTypes={},a.filterProps=[t],a};function w(e){return"number"!=typeof e?e:"".concat(e,"px solid")}var S=g(v({prop:"border",themeKey:"borders",transform:w}),v({prop:"borderTop",themeKey:"borders",transform:w}),v({prop:"borderRight",themeKey:"borders",transform:w}),v({prop:"borderBottom",themeKey:"borders",transform:w}),v({prop:"borderLeft",themeKey:"borders",transform:w}),v({prop:"borderColor",themeKey:"palette"}),v({prop:"borderRadius",themeKey:"shape"})),x=g(v({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),v({prop:"display"}),v({prop:"overflow"}),v({prop:"textOverflow"}),v({prop:"visibility"}),v({prop:"whiteSpace"})),k=g(v({prop:"flexBasis"}),v({prop:"flexDirection"}),v({prop:"flexWrap"}),v({prop:"justifyContent"}),v({prop:"alignItems"}),v({prop:"alignContent"}),v({prop:"order"}),v({prop:"flex"}),v({prop:"flexGrow"}),v({prop:"flexShrink"}),v({prop:"alignSelf"}),v({prop:"justifyItems"}),v({prop:"justifySelf"})),P=g(v({prop:"gridGap"}),v({prop:"gridColumnGap"}),v({prop:"gridRowGap"}),v({prop:"gridColumn"}),v({prop:"gridRow"}),v({prop:"gridAutoFlow"}),v({prop:"gridAutoColumns"}),v({prop:"gridAutoRows"}),v({prop:"gridTemplateColumns"}),v({prop:"gridTemplateRows"}),v({prop:"gridTemplateAreas"}),v({prop:"gridArea"})),C=g(v({prop:"position"}),v({prop:"zIndex",themeKey:"zIndex"}),v({prop:"top"}),v({prop:"right"}),v({prop:"bottom"}),v({prop:"left"})),O=g(v({prop:"color",themeKey:"palette"}),v({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),E=v({prop:"boxShadow",themeKey:"shadows"});function R(e){return e<=1?"".concat(100*e,"%"):e}var _=v({prop:"width",transform:R}),I=v({prop:"maxWidth",transform:R}),j=v({prop:"minWidth",transform:R}),Z=v({prop:"height",transform:R}),N=v({prop:"maxHeight",transform:R}),z=v({prop:"minHeight",transform:R}),M=(v({prop:"size",cssProperty:"width",transform:R}),v({prop:"size",cssProperty:"height",transform:R}),g(_,I,j,Z,N,z,v({prop:"boxSizing"}))),T=r(5408),D=g(v({prop:"fontFamily",themeKey:"typography"}),v({prop:"fontSize",themeKey:"typography"}),v({prop:"fontStyle",themeKey:"typography"}),v({prop:"fontWeight",themeKey:"typography"}),v({prop:"letterSpacing"}),v({prop:"lineHeight"}),v({prop:"textAlign"})),W=r(5987),B=r(5505),L=r(5706),H=r.n(L),F=r(2847);function A(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}var V=r(4782),q=function(e){var t=function(e){return function(t){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.name,a=(0,W.Z)(n,["name"]),c=o,s="function"==typeof t?function(e){return{root:function(r){return t((0,u.Z)({theme:e},r))}}}:{root:t},l=(0,F.Z)(s,(0,u.Z)({Component:e,name:o||e.displayName,classNamePrefix:c},a));t.filterProps&&(r=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var p=i.forwardRef((function(t,n){var o=t.children,a=t.className,c=t.clone,s=t.component,p=(0,W.Z)(t,["children","className","clone","component"]),d=l(t),f=(0,B.Z)(d.root,a),m=p;if(r&&(m=A(m,r)),c)return i.cloneElement(o,(0,u.Z)({className:(0,B.Z)(o.props.className,f)},m));if("function"==typeof o)return o((0,u.Z)({className:f},m));var g=s||e;return i.createElement(g,(0,u.Z)({ref:n,className:f},m),o)}));return H()(p,e),p}}(e);return function(e,r){return t(e,(0,u.Z)({defaultTheme:V.Z},r))}},K=m(g(S,x,k,P,C,O,E,M,T.Z,D)),U=q("div")(K,{name:"MuiBox"}),$=r(638),G=(0,r(9123).Z)(i.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var J=i.forwardRef((function(e,t){var r=e.alt,n=e.children,o=e.classes,a=e.className,c=e.component,s=void 0===c?"div":c,l=e.imgProps,p=e.sizes,d=e.src,f=e.srcSet,m=e.variant,g=void 0===m?"circular":m,h=(0,W.Z)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),b=null,y=function(e){var t=e.src,r=e.srcSet,n=i.useState(!1),o=n[0],a=n[1];return i.useEffect((function(){if(t||r){a(!1);var e=!0,n=new Image;return n.src=t,n.srcSet=r,n.onload=function(){e&&a("loaded")},n.onerror=function(){e&&a("error")},function(){e=!1}}}),[t,r]),o}({src:d,srcSet:f}),v=d||f,w=v&&"error"!==y;return b=w?i.createElement("img",(0,u.Z)({alt:r,src:d,srcSet:f,sizes:p,className:o.img},l)):null!=n?n:v&&r?r[0]:i.createElement(G,{className:o.fallback}),i.createElement(s,(0,u.Z)({className:(0,B.Z)(o.root,o.system,o[g],a,!w&&o.colorDefault),ref:t},h),b)})),Q=(0,$.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(J),X=r(7595),Y=r(7055),ee=r(1664),te=i.forwardRef((function(e,t){var r=e.children,n=e.classes,o=e.className,a=e.color,c=void 0===a?"default":a,s=e.component,l=void 0===s?"button":s,p=e.disabled,d=void 0!==p&&p,f=e.disableElevation,m=void 0!==f&&f,g=e.disableFocusRipple,h=void 0!==g&&g,b=e.endIcon,y=e.focusVisibleClassName,v=e.fullWidth,w=void 0!==v&&v,S=e.size,x=void 0===S?"medium":S,k=e.startIcon,P=e.type,C=void 0===P?"button":P,O=e.variant,E=void 0===O?"text":O,R=(0,W.Z)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),_=k&&i.createElement("span",{className:(0,B.Z)(n.startIcon,n["iconSize".concat((0,ee.Z)(x))])},k),I=b&&i.createElement("span",{className:(0,B.Z)(n.endIcon,n["iconSize".concat((0,ee.Z)(x))])},b);return i.createElement(Y.Z,(0,u.Z)({className:(0,B.Z)(n.root,n[E],o,"inherit"===c?n.colorInherit:"default"!==c&&n["".concat(E).concat((0,ee.Z)(c))],"medium"!==x&&[n["".concat(E,"Size").concat((0,ee.Z)(x))],n["size".concat((0,ee.Z)(x))]],m&&n.disableElevation,d&&n.disabled,w&&n.fullWidth),component:l,disabled:d,focusRipple:!h,focusVisibleClassName:(0,B.Z)(n.focusVisible,y),ref:t,type:C},R),i.createElement("span",{className:n.label},_,r,I))})),re=(0,$.Z)((function(e){return{root:(0,u.Z)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:(0,X.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,X.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,X.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat((0,X.Fq)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:(0,X.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat((0,X.Fq)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:(0,X.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(te),ne=r(8063),oe=i.forwardRef((function(e,t){var r=e.classes,n=e.className,o=e.raised,a=void 0!==o&&o,c=(0,W.Z)(e,["classes","className","raised"]);return i.createElement(ne.Z,(0,u.Z)({className:(0,B.Z)(r.root,n),elevation:a?8:1,ref:t},c))})),ie=(0,$.Z)({root:{overflow:"hidden"}},{name:"MuiCard"})(oe),ae=i.forwardRef((function(e,t){var r=e.classes,n=e.className,o=e.component,a=void 0===o?"div":o,c=(0,W.Z)(e,["classes","className","component"]);return i.createElement(a,(0,u.Z)({className:(0,B.Z)(r.root,n),ref:t},c))})),ce=(0,$.Z)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(ae),se=r(453),le=r(3475),ue=r(9626),pe=r(2842),de=(0,n.Z)((function(){return{cardWrapper:{borderRadius:"20px",minHeight:"350px",margin:10,background:"#EEEEEE","&:hover":{background:"coral",color:"#FFFFFF"}},cardContent:{marginTop:"10%"},cardDescription:{textAlign:"left",justifyContent:"center",padding:0},cardTitle:{textAlign:"center",marginTop:"10px"},cardIcon:{margin:"auto"},learnMore:{alignSelf:"center",margin:"3%",marginLeft:"24%",borderColor:"coral"},Link:{paddingBottom:10}}})),fe={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:5},tablet:{breakpoint:{max:1024,min:464},items:1},mobile:{breakpoint:{max:464,min:0},items:1}},me=[{icon:c.SvR,header:"Washing",subTitle:"Automated 360 degree tunnel cleansing system. Manual pressure washing.",link:"/Washing",buttonTitle:"Read More"},{icon:c.k_F,header:"Masking",subTitle:"Precision part masking as per design specifications.",link:"/Masking",buttonTitle:"Read More"},{icon:c.SvR,header:"Liquid Paint Coating",subTitle:"Electrostatic spray (wet) paint coating.Various types of paints available. Custom colors and textures accomodated",link:"/LiquidCoating",buttonTitle:"Read More"},{icon:c.k_F,header:"Powder Coating",subTitle:"Manual electrostatic powder coating.Various types of powder paints available.Custom colors and textures accomodated.",link:"/PowderCoating",buttonTitle:"Read More"},{icon:c.k_F,header:"Silk Screening",subTitle:"Precision silk screening.",link:"/SilkScreening",buttonTitle:"Read More"}];function ge(e){var t=de();return i.createElement(ue.Z,{header:"Services",classname:"ServicesComponent"},i.createElement(le.default,{responsive:fe,showDots:!1,autoPlay:!0,infinite:!0,autoPlaySpeed:3e3},me.map((function(e,r){return i.createElement(U,{key:r,item:!0,xs:4},i.createElement(ie,{className:[t.cardWrapper,"cardWrapper"],key:r},i.createElement(ce,{className:t.cardContent},i.createElement(Q,{className:t.cardIcon,sx:{bgcolor:"red"},"aria-label":"recipe"},i.createElement(s.G,{icon:e.icon})),i.createElement(se.Z,{gutterBottom:!0,variant:"h5",component:"h3",className:t.cardTitle},e.header),i.createElement(se.Z,{className:t.cardDescription,variant:"body2",color:"textSecondary",component:"p"},(0,pe.vq)(e.subTitle)),i.createElement("a",{href:e.link,className:t.Link},i.createElement(re,{variant:"outlined",className:t.learnMore},e.buttonTitle)))))}))))}var he=r(5561),be=r(3330);function ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ve(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(r),!0).forEach((function(t){(0,h.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ye(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var we=(0,n.Z)((function(){return{textCenter:{textAlign:"center",textAlignVertical:"center",padding:"10px",fontSize:25,color:"coral"},suppliersData:{justifyContent:"center"}}}));function Se(e){var t=(0,i.useState)({mobileView:!1,drawerOpen:!1}),r=t[0],n=t[1],a=r.mobileView;r.drawerOpen;(0,i.useEffect)((function(){var e=function(){return window.innerWidth<900?n((function(e){return ve(ve({},e),{},{mobileView:!0})})):n((function(e){return ve(ve({},e),{},{mobileView:!1})}))};return e(),window.addEventListener("resize",(function(){return e()})),function(){window.removeEventListener("resize",(function(){return e()}))}}),[]);var c=we(),s=a?12:2;return i.createElement(o.Z,{container:!0,xs:12,className:c.block},i.createElement(o.Z,{item:!0,xs:12,className:c.textCenter},e.header),i.createElement(o.Z,{item:!0,xs:12,container:!0,className:[c.textCenter,c.suppliersData]},e.linkObject.map((function(e,t){return i.createElement(o.Z,{item:!0,xs:s},i.createElement("a",{href:e.image_link,target:"_blank",rel:"noreferrer"},i.createElement("img",{src:e.image,border:"0",height:"80px",alt:"Link"})))}))))}var xe=r.p+"static/2-ec970e6cf3a49b0daa7518ae6ca1fd29.png",ke=r.p+"static/4-71e09dbe9a613f71b4d2e8b1e97e7997.gif",Pe=[{image_link:"http://www.prismpowder.com/",image:"https://i.ibb.co/x6ScctB/p1.jpg",alt:"Prism powder coatings ltd."},{image_link:"http://www.tiger-coatings.us/",image:"https://i.ibb.co/df039gW/tiger-drylac-powder-coatings.jpg",alt:"Tiger Drylac Powder Coatings"},{image_link:"http://www.sherwin-williams.com/",image:"https://i.ibb.co/yS78Cd2/sherwin-williams.jpg",alt:"Sherwin-Williams"},{image_link:"http://www.protechpowder.com/",image:"https://i.ibb.co/NtXwxfv/the-protech-group.jpg",alt:"Protech Oxyplast"},{image_link:"http://www.tcipowder.com/",image:"https://i.ibb.co/84J66qJ/tci-powder-coatings.jpg",alt:"TCI Powder Coatings"}],Ce={color:"#FFFEFE",paddingTop:76,fontFamily:"-apple-system, Roboto, sans-serif, serif",height:500},Oe=(0,n.Z)((function(e){return{root:{},control:{},background:{padding:10,img:{opacity:.6}},suppliers:{height:"auto",alignItems:"center",justifyContent:"center"}}})),Ee=xe,Re=function(){var e=Oe();return i.createElement(be.Z,{pageName:"Home Page"},i.createElement(o.Z,{item:!0,sm:12,className:e.background},i.createElement("title",null,"Home Page")),i.createElement(o.Z,{item:!0,sm:12,className:e.background},i.createElement(ue.Z,{header:"Our Mission",image:ke,message:"Custom paint is one stop shop for Custom Powder Coating, Liquid Spray Painting, Silk Screening. Our key suppliers Prism Power, Tiger Drylac, Erie Powder, Protech Powder and TCI enables us to provide our clients with superior durable finish with unmatched timing to get the job done right every time. Custom Paint & Silk Screen Inc was established in 2001.  Our service and facility provide customers with the flexibility to meet just about any of your requirements. We are able to efficiently provide services which include powder coating, silk screening and spray painting.  We can match colors to your specifications in powder or wet paint.  Your parts are monitored throughout the production process from receiving to coating and finally, packaging.  At Custom Paint, our trained professional ensure that your parts are carefully inspected and counted to ensure the highest quality results within the customers’ demanding schedule.  Our emphasis is on producing the highest quality work possible.  The bottom line is superior finish, competitive pricing and best of all our consistent quick turn around time, which enables us to meet our customer’s demanding time schedule.  Custom is truly your one stop coating shop as we have powder coating, liquid (wet) painting, and state of the art silk screening in house."})),i.createElement(o.Z,{item:!0,sm:12,className:e.background},i.createElement(o.Z,{item:!0,sm:12,className:e.background},i.createElement(ge,null))),i.createElement(o.Z,{item:!0,sm:12,className:e.background},i.createElement(a.Parallax,{bgImage:Ee,strength:300,className:e.suppliers},i.createElement("div",{style:Ce},i.createElement(Se,{header:"Our Suppliers",linkObject:Pe,className:[e.suppliersData,"suppliersData"]})))),i.createElement(o.Z,{item:!0,sm:12,className:e.background},i.createElement(ue.Z,{header:"FAQS"},i.createElement(he.Z,{small:"true"}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-ec3fcf7bdbe53b6c05c8.js.map