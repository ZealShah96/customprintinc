(self.webpackChunkcustom_print=self.webpackChunkcustom_print||[]).push([[486,630],{7418:function(e,t,n){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var s=o(n(7294)),c=n(7294),l=function(e){var t=e.cardStyles,n=t.back,r=t.front,a=e.cardZIndex,o=e.containerStyle,l=e.containerClassName,u=e.flipDirection,d=e.flipSpeedFrontToBack,p=e.flipSpeedBackToFront,f=e.infinite,h=c.useState(e.isFlipped),m=h[0],g=h[1],b=c.useState(0),y=b[0],v=b[1];c.useEffect((function(){e.isFlipped!==m&&(g(e.isFlipped),v((function(e){return e+180})))}),[e.isFlipped]);var k=c.useMemo((function(){var e="react-card-flip";return l&&(e+=" "+l),e}),[l]),w=function(t){if(2!==e.children.length)throw new Error("Component ReactCardFlip requires 2 children to function");return e.children[t]},C="rotateY("+(f?y:m?180:0)+"deg)",E="rotateX("+(f?y:m?180:0)+"deg)",S={back:i({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:"0",position:m?"relative":"absolute",top:"0",transform:"horizontal"===u?"rotateY("+(f?y+180:m?0:-180)+"deg)":"rotateX("+(f?y+180:m?0:-180)+"deg)",transformStyle:"preserve-3d",transition:d+"s",width:"100%"},n),container:{perspective:"1000px",zIndex:""+a},flipper:{height:"100%",position:"relative",width:"100%"},front:i({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:"0",position:m?"absolute":"relative",top:"0",transform:"horizontal"===u?C:E,transformStyle:"preserve-3d",transition:p+"s",width:"100%",zIndex:"2"},r)};return s.createElement("div",{className:k,style:i(i({},S.container),o)},s.createElement("div",{className:"react-card-flipper",style:S.flipper},s.createElement("div",{className:"react-card-front",style:S.front},w(0)),s.createElement("div",{className:"react-card-back",style:S.back},w(1))))};l.defaultProps={cardStyles:{back:{},front:{}},cardZIndex:"auto",containerStyle:{},flipDirection:"horizontal",flipSpeedBackToFront:.6,flipSpeedFrontToBack:.6,infinite:!1,isFlipped:!1},t.default=l},3726:function(e,t,n){"use strict";n.r(t);var i=n(7294),r=(n(5444),n(838)),a=n(5549),o=n(920),s=n(6045),c=n(9456),l=(0,o.Z)((function(e){return{root:{},control:{},background:{padding:10,backgroundColor:"#eee"},contentBackground:{backgroundColor:"#eee"},contentCenter:{alignItems:"center"},text:{color:"red",fontSize:"50px"}}})),u='<p>Custom Paint &amp; Silk Screen Inc. was established in 2001. Our service and facility provide customers with the flexibility to meet just about any of your requirements. We are able to efficiently provide services which include powder coating, silk screening and spray painting. We can match colors to your specifications in powder or wet paint. Your parts are monitored throughout the production process from receiving to coating and finally, packaging. At Custom Paint, our trained professional ensure that your parts are carefully inspected and counted to ensure the highest quality results within the customers’ demanding schedule. Our emphasis is on producing the highest quality work possible. The bottom line is superior finish, competitive pricing and best of all our consistent quick turn around time, which enables us to meet our customer’s demanding time schedule. Custom is truly your one stop coating shop as we have powder coating, liquid (wet) painting, and state of the art silk screening in house. <br><br>Our extensive customer base continues to grow and we are working on making improvements to our production process everyday. Our facility is constantly upgrading to the latest equipment and standards as well as developing more efficient techniques. Our goal is to provide customers with the best quality and service in the industry. <br><br>If you have any questions, or would like to discuss a future project, please&nbsp;<a title="Contact us" href="http://www.custompaintinc.com/contact-us/">Contact Us</a>. <br><br><strong>Deadlines and Quality:</strong> <br>Your deadline is our deadline. We strive to give you the best quality and service possible as we highly value both hand in hand. We will only make promises that we can keep as we do not like making any false promises. We pride ourselves in providing superior custom painting, powder coating and silk screening services. We take full pride in our work therefore your work will be fully taken care of from start to finish. After our Q.C. is done then we go one step further to make sure the parts are packaged with thrall packaging materials and thoughts to make sure the parts do not get damaged in the transportation.<br><br>Custom Paint distinguishes itself from our competition in three main areas; (1) Superior Quality (2) Competitive pricing (3) Unmatched turnaround times <br><br><strong>Your Privacy<br></strong>At Custom Paint we abide by the provisions of the Privacy Act and the privacy of our customers, suppliers, and inquirers is always a first priority. We will not disclose or share any personal and confidential information unless you have given your prior consent, and the information we collect is used only for the purpose it was originally intended. <br><br>We greatly appreciate and value your continued business and service. <br><br>For any questions or concern in regards to the process, advantages and disadvantages please visit our <a title="FAQ" href="http://www.custompaintinc.com/faq/">FAQ</a> page which would answer majority of the question.<br><br>For any quotation or any other inquires you many have please do not hesitate to <a title="Contact us" href="http://www.custompaintinc.com/contact-us/">contact us</a> as we will assist you best to our abilities.</p>',d="About Us";t.default=function(){var e,t=l();return i.createElement(r.Z,((e={item:!0,sm:12,className:t.background,container:!0}).className="Profile",e),i.createElement("head",null,i.createElement("title",null,"Profile")),i.createElement(r.Z,{item:!0,sm:12,className:t.background},i.createElement(a.Z,null),i.createElement(s.Z,null)),i.createElement(r.Z,{item:!0,sm:12,className:t.background},i.createElement(r.Z,{item:!0,sm:12,className:t.text},d),i.createElement(r.Z,{item:!0,sm:12,className:t.content},i.createElement("div",{dangerouslySetInnerHTML:{__html:u}})),i.createElement(r.Z,null,i.createElement(c.default,null))))}},9456:function(e,t,n){"use strict";n.r(t);var i=n(7294),r=(n(5444),n(838)),a=(n(5549),n(920)),o=(n(6045),n(7418)),s=n.n(o),c=(0,a.Z)((function(e){return{root:{},control:{},background:{padding:10,backgroundColor:"#eee"},contentBackground:{backgroundColor:"#eee"},contentCenter:{alignItems:"center"},text:{color:"red",fontSize:"50px"}}}));t.default=function(){var e,t=c(),n=(0,i.useState)(!1),a=n[0],o=n[1];return i.createElement(r.Z,((e={item:!0,sm:12,className:t.background,container:!0}).className="Tile",e),i.createElement(s(),{isFlipped:a,flipDirection:"vertical"},i.createElement("div",null,"This is the front of the card.",i.createElement("button",{onClick:function(e){e.preventDefault(),o(!1)}},"Click to flip")),i.createElement("div",null,"This is the back of the card.",i.createElement("button",{onClick:function(e){e.preventDefault(),o(!0)}},"Click to flip"))))}}}]);
//# sourceMappingURL=component---src-pages-profile-js-db512ce6eac13ecf2d55.js.map