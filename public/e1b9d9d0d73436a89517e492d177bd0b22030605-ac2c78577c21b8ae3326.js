(self.webpackChunkcustom_print=self.webpackChunkcustom_print||[]).push([[664],{7553:function(e,t,n){"use strict";n.d(t,{Z:function(){return D}});var o=n(8014),i=n(9519),a=n(2122),r=n(9968),s=n(6410),l=n(2961),d=n(8970);var c=n(8481),u=n(1253),p=n(7294),m=(n(8812),n(5505)),h=n(1423),f=n(638),g=n(381),b=n(9701),y=n(9355),w=n(1291),v=p.forwardRef((function(e,t){var n=e.children,o=e.classes,i=e.className,r=e.collapsedHeight,s=void 0===r?"0px":r,l=e.component,d=void 0===l?"div":l,f=e.disableStrictModeCompat,v=void 0!==f&&f,x=e.in,k=e.onEnter,E=e.onEntered,Z=e.onEntering,C=e.onExit,R=e.onExited,q=e.onExiting,N=e.style,T=e.timeout,W=void 0===T?g.x9.standard:T,A=e.TransitionComponent,I=void 0===A?h.ZP:A,S=(0,u.Z)(e,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),F=(0,y.Z)(),P=p.useRef(),B=p.useRef(null),H=p.useRef(),z="number"==typeof s?"".concat(s,"px"):s;p.useEffect((function(){return function(){clearTimeout(P.current)}}),[]);var D=F.unstable_strictMode&&!v,$=p.useRef(null),L=(0,w.Z)(t,D?$:void 0),M=function(e){return function(t,n){if(e){var o=D?[$.current,t]:[t,n],i=(0,c.Z)(o,2),a=i[0],r=i[1];void 0===r?e(a):e(a,r)}}},O=M((function(e,t){e.style.height=z,k&&k(e,t)})),U=M((function(e,t){var n=B.current?B.current.clientHeight:0,o=(0,b.C)({style:N,timeout:W},{mode:"enter"}).duration;if("auto"===W){var i=F.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(i,"ms"),H.current=i}else e.style.transitionDuration="string"==typeof o?o:"".concat(o,"ms");e.style.height="".concat(n,"px"),Z&&Z(e,t)})),V=M((function(e,t){e.style.height="auto",E&&E(e,t)})),j=M((function(e){var t=B.current?B.current.clientHeight:0;e.style.height="".concat(t,"px"),C&&C(e)})),Y=M(R),G=M((function(e){var t=B.current?B.current.clientHeight:0,n=(0,b.C)({style:N,timeout:W},{mode:"exit"}).duration;if("auto"===W){var o=F.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(o,"ms"),H.current=o}else e.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");e.style.height=z,q&&q(e)}));return p.createElement(I,(0,a.Z)({in:x,onEnter:O,onEntered:V,onEntering:U,onExit:j,onExited:Y,onExiting:G,addEndListener:function(e,t){var n=D?e:t;"auto"===W&&(P.current=setTimeout(n,H.current||0))},nodeRef:D?$:void 0,timeout:"auto"===W?null:W},S),(function(e,t){return p.createElement(d,(0,a.Z)({className:(0,m.Z)(o.container,i,{entered:o.entered,exited:!x&&"0px"===z&&o.hidden}[e]),style:(0,a.Z)({minHeight:z},N),ref:L},t),p.createElement("div",{className:o.wrapper,ref:B},p.createElement("div",{className:o.wrapperInner},n)))}))}));v.muiSupportAuto=!0;var x=(0,f.Z)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(v),k=n(8063);var E=p.createContext({});var Z=p.forwardRef((function(e,t){var n,o,i,h,f,g,b,y,w=e.children,v=e.classes,Z=e.className,C=e.defaultExpanded,R=void 0!==C&&C,q=e.disabled,N=void 0!==q&&q,T=e.expanded,W=e.onChange,A=e.square,I=void 0!==A&&A,S=e.TransitionComponent,F=void 0===S?x:S,P=e.TransitionProps,B=(0,u.Z)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),H=(o=(n={controlled:T,default:R,name:"Accordion",state:"expanded"}).controlled,i=n.default,n.name,n.state,h=p.useRef(void 0!==o).current,f=p.useState(i),g=f[0],b=f[1],[h?o:g,p.useCallback((function(e){h||b(e)}),[])]),z=(0,c.Z)(H,2),D=z[0],$=z[1],L=p.useCallback((function(e){$(!D),W&&W(e,!D)}),[D,W,$]),M=p.Children.toArray(w),O=(y=M,(0,r.Z)(y)||(0,s.Z)(y)||(0,l.Z)(y)||(0,d.Z)()),U=O[0],V=O.slice(1),j=p.useMemo((function(){return{expanded:D,disabled:N,toggle:L}}),[D,N,L]);return p.createElement(k.Z,(0,a.Z)({className:(0,m.Z)(v.root,Z,D&&v.expanded,N&&v.disabled,!I&&v.rounded),ref:t,square:I},B),p.createElement(E.Provider,{value:j},U),p.createElement(F,(0,a.Z)({in:D,timeout:"auto"},P),p.createElement("div",{"aria-labelledby":U.props.id,id:U.props["aria-controls"],role:"region"},V)))})),C=(0,f.Z)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiAccordion"})(Z),R=n(7826),q=n(7595),N=n(1664),T=p.forwardRef((function(e,t){var n=e.edge,o=void 0!==n&&n,i=e.children,r=e.classes,s=e.className,l=e.color,d=void 0===l?"default":l,c=e.disabled,h=void 0!==c&&c,f=e.disableFocusRipple,g=void 0!==f&&f,b=e.size,y=void 0===b?"medium":b,w=(0,u.Z)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return p.createElement(R.Z,(0,a.Z)({className:(0,m.Z)(r.root,s,"default"!==d&&r["color".concat((0,N.Z)(d))],h&&r.disabled,"small"===y&&r["size".concat((0,N.Z)(y))],{start:r.edgeStart,end:r.edgeEnd}[o]),centerRipple:!0,focusRipple:!g,disabled:h,ref:t},w),p.createElement("span",{className:r.label},i))})),W=(0,f.Z)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:(0,q.U1)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,q.U1)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,q.U1)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(T),A=p.forwardRef((function(e,t){var n=e.children,o=e.classes,i=e.className,r=e.expandIcon,s=e.IconButtonProps,l=e.onBlur,d=e.onClick,c=e.onFocusVisible,h=(0,u.Z)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),f=p.useState(!1),g=f[0],b=f[1],y=p.useContext(E),w=y.disabled,v=void 0!==w&&w,x=y.expanded,k=y.toggle;return p.createElement(R.Z,(0,a.Z)({focusRipple:!1,disableRipple:!0,disabled:v,component:"div","aria-expanded":x,className:(0,m.Z)(o.root,i,v&&o.disabled,x&&o.expanded,g&&o.focused),onFocusVisible:function(e){b(!0),c&&c(e)},onBlur:function(e){b(!1),l&&l(e)},onClick:function(e){k&&k(e),d&&d(e)},ref:t},h),p.createElement("div",{className:(0,m.Z)(o.content,x&&o.expanded)},n),r&&p.createElement(W,(0,a.Z)({className:(0,m.Z)(o.expandIcon,x&&o.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},s),r))})),I=(0,f.Z)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiAccordionSummary"})(A),S=p.forwardRef((function(e,t){var n=e.classes,o=e.className,i=(0,u.Z)(e,["classes","className"]);return p.createElement("div",(0,a.Z)({className:(0,m.Z)(n.root,o),ref:t},i))})),F=(0,f.Z)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiAccordionDetails"})(S),P=n(920),B=n(838),H=[{question:"What is powder coating?",description:"Powder coating is a modern paint application consisting of fine dry powder pigment and resin. It is applied electro-statically to metal parts by charging the substrate and power. It then heated to a temperature of about 400°F which will cure and adhere the power to the surface. Once it is baked, it is solid as a rock and flexible at same time resulting in a beautifully smooth, highly durable finish."},{question:"How quick is your turn-around?",description:"In many cases our turn-around is same-day, depending on the volume, color and masking requirements. However, in general, coating may take about three to four days after the product arrives. If you are in a bind and have small job that you need to turn around in required time then we do work with our clients as we understand the importance of deadlines."},{question:"Are there different choice of color and powder available?",description:"At Custom Paint there are endless possibilities of colors you can get it formulated. We can match thousands of colors using our powder suppliers ranging from high, medium, and low gloss, metallic, textured, and clear powders, there is no limitation on the selection of powder. Most common and universal system we work with is RAL and PAN chart. We can also get a custom match powder from a sample chip in variety of finishes. We can match any color of your choice in 3-5 business days as we work with our suppliers very closely to achieve the best turnaround time.\n The two main types of powder are polyester and epoxy. Epoxy is best for indoor applications because, while it provides a highly durable, shiny finish, it eventually forms a dull film in reaction to direct sunlight. However, polyester does not have this problem, so is well suited to outdoor applications."},{question:"What is the maximum size and weight that you can powder coat?",description:"The maximum size that we can coat is 60 inches wide (centered) by 72 inches high, by 12 feet long."},{question:"What advantages does powder coating have over wet painting methods?",description:"Powder coating has many advantages over liquid paint applications. This includes producing a more durable and corrosion resistant finish as you can apply as thick layer of power you want unlike wet paint. Powder coating is also a more environmentally-friendly choice as it eliminates the need for an evaporating liquid paint and cleaning solvents for cleaning guns and lines. Powder coating material is free of both flammable and vaporizing components, so they do not pose a danger to us or to our environment. Also, powder coating offers many kind of finish e.g. Smooth, textured, and pebble finish. It also last much longer than liquid paint applications, and with only a single application."},{question:"What are some examples of powder coated items?",description:"We are surrounded by powder coated parts. Patio furniture, store shelves, fencing, automobiles, light fixtures, appliances, and bridge materials are all items that are commonly powder coated for superior corrosion resistance and durability."},{question:"What does your powder base consist of?",description:"We coat with polyester, polyurethane, epoxy and hybrid powders. Our process requires powder to be electro-statically applied and cured in an oven with temperatures reaching 400°F."},{question:"I am looking for a very specific color, how large is your selection?",description:"As custom powder coaters, we can match thousands of colors using our many powder suppliers, and our large in-stock selection. With high, medium, and low gloss, metallic, textured, and clear powders, there is no limitation on the selection of powder coating finishes available."},{question:"Do you do any wet painting?",description:"Yes, at Custom paint we also offer wet painting application as lot of our client still requires wet painting due to the spec or type of material being painted they are binded by the spec on the drawing. We can get any color required from a sample chip. We can spray bake enamel or air dry paint in our facility."},{question:"What temperature does the wet paint bake?",description:"Different paint back at different temperature. Bake enamel 300f, air dry paint can surely air dry or can be force dried at 150f."},{question:"What are your requirements to do the silk screening?",description:"We require 1:1 PDF file for artwork generation for silk screening application. It is customer’s responsibilities to make sure the artwork file supplied matches the part 1:1 as we can not or will not manipulate with the file. The logos and the text must be sharp and filled in as distorted images will be silk screened distorted and hollow letters will be hollow in the process. WHAT YOU SEE IS WHAT YOU GET. The silk Screening is exact copy of the artwork. We will not go ahead with silk screening or send the artwork out for artwork generation if we see a problem. We will have to go back and forth and timing will be the costing factor."},{question:"Can you match different types of ink for silk screening?",description:"Yes, we can get the inks matched from the PAN color chart as long as we know what substrate or color of the substrate as ink will apply on as the ink will look different from substrate to substrate."},{question:"Do you create the artwork in you facility and what type of file do you require?",description:"No, we have to send the art work file out to our supplier who gets the artwork generated for us. They also do not do any editing within the art work as they will print straight 1:1 output. We require corner marks or hole reference on the artwork file so we can match and line up the artwork with the part being screened. The types of files we can work from are 1:1 PDF, eps, coral draw and illustrator. Please just print the artwork file on regular printer and place it on of the part to ensure it is 1:1."}],z=(0,P.Z)((function(){return{container:{backgroundColor:"#F5F5F5"},questionWrapper:{borderRadius:"5px",marginBottom:"5px"},question:{},description:{}}}));function D(e){var t=z(),n=e.small?H.filter((function(e,t){if(t<4)return e})):H;return p.createElement(p.Fragment,null,p.createElement(B.Z,{className:t.container,container:!0,xs:12},p.createElement(B.Z,{item:!0,xs:12},p.createElement(p.Fragment,null,n.map((function(e,n){return p.createElement(C,{key:n,className:t.questionWrapper},p.createElement(I,{className:t.question,expandIcon:p.createElement(i.G,{icon:o.ptq})},p.createElement("b",null,"Question ",n+1,":",e.question)),p.createElement(F,{className:t.description},"Answer: ",e.description))})))),p.createElement(B.Z,{item:!0,xs:12},e.small?p.createElement("div",null,p.createElement("a",{href:"/faqs"}," Click Here ")," to check all other faqs."):"")))}},9626:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var o=n(920),i=n(838),a=n(7294),r=n(2842),s=(0,o.Z)((function(){var e;return{container:{backgroundColor:"#F5F5F5"},textCenter:(e={textAlign:"center",textAlignVertical:"center",padding:35,paddingTop:15,fontFamily:"system-ui",fontSize:18},e.textAlign="justify",e["ul li:before"]={"list-style-type":"+"},e),mission:{fontSize:28,paddingTop:15,paddingLeft:35,fontFamily:"system-ui",fontWeight:"600",textAlign:"center",textAlignVertical:"center",borderRadius:30,color:"coral"},submission:{fontSize:20,paddingTop:-5,paddingLeft:35,fontFamily:"system-ui",fontWeight:"600",borderRadius:30,color:"coral"},image:{paddingTop:75,paddingBottom:75},children:{padding:35,paddingTop:15}}}));function l(e){var t=s();return a.createElement(i.Z,{item:!0,xs:12,container:!0,className:[t.container,"contentBox"]},a.createElement(i.Z,{item:!0,xs:e.image?8:12},e.header?a.createElement(i.Z,{item:!0,xs:12,className:t.mission},e.header):"",e.subheader?a.createElement(i.Z,{item:!0,xs:12,className:t.submission},e.subheader):"",e.message?a.createElement(i.Z,{item:!0,xs:12,className:t.textCenter},(0,r.qk)(e.message)):""),e.image?a.createElement(i.Z,{item:!0,xs:4,className:t.image},a.createElement("img",{src:e.image,border:"0",alt:"Link"})):"",e.children?a.createElement(i.Z,{item:!0,xs:12,className:t.children},e.children):"")}},2842:function(e,t,n){"use strict";n.d(t,{qk:function(){return r},vq:function(){return s}});var o=n(920),i=n(7294),a=(0,o.Z)((function(){return{content:{backgroundColor:"#EEEEEE",paddingTop:30,paddingRight:30,paddingBottom:30,borderRadius:30}}}));function r(e){var t=a();return i.createElement("ul",{className:t.content},e.split(".").map((function(e,t){return""!=e?i.createElement("li",null,e.trim()+"."):""})))}function s(e){a();return i.createElement("ul",null,e.split(".").map((function(e,t){return""!=e?i.createElement("li",null,e.trim()+"."):""})))}}}]);
//# sourceMappingURL=e1b9d9d0d73436a89517e492d177bd0b22030605-ac2c78577c21b8ae3326.js.map