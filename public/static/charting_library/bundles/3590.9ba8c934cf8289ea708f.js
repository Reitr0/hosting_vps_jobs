(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[3590],{17241:e=>{e.exports={dialog:"dialog-2cMrvu9r",wrapper:"wrapper-2cMrvu9r",separator:"separator-2cMrvu9r"}},13459:e=>{e.exports={"small-height-breakpoint":"screen and (max-height: 360px)",container:"container-2sL5JydP",unsetAlign:"unsetAlign-2sL5JydP",title:"title-2sL5JydP",subtitle:"subtitle-2sL5JydP",ellipsis:"ellipsis-2sL5JydP",close:"close-2sL5JydP"}},68552:e=>{e.exports={separator:"separator-3No0pWrk"}},93590:(e,t,n)=>{"use strict";n.d(t,{AdaptivePopupDialog:()=>A});var r=n(67294),s=n(16282);var i=n(94184),a=n.n(i),o=n(42998),l=n(15738),d=n(32402),c=n(10284),u=n(72923),h=n(68521),p=n(90714),m=n(28164),v=n(18437),g=n(49775);const _=r.createContext({setHideClose:()=>{}});var f=n(83124),C=n(13459);function w(e){const{title:t,subtitle:n,showCloseIcon:s=!0,onClose:i,renderBefore:o,renderAfter:l,draggable:d,className:c,unsetAlign:u}=e,[h,p]=(0,r.useState)(!1);return r.createElement(_.Provider,{value:{setHideClose:p}},r.createElement("div",{className:a()(C.container,c,(n||u)&&C.unsetAlign)},o,r.createElement("div",{"data-dragg-area":d,className:C.title},r.createElement("div",{className:C.ellipsis},t),n&&r.createElement("div",{className:a()(C.ellipsis,C.subtitle)},n)),l,s&&!h&&r.createElement(g.Icon,{className:C.close,icon:f,onClick:i,"data-name":"close","data-role":"button"})))}var E=n(17241);const b={vertical:20},N={vertical:0};class A extends r.PureComponent{constructor(){super(...arguments),this._controller=null,this._reference=null,this._orientationMediaQuery=null,this._renderChildren=(e,t)=>(this._controller=e,this.props.render({requestResize:this._requestResize,centerAndFit:this._centerAndFit,isSmallWidth:t})),this._handleReference=e=>this._reference=e,this._handleClose=()=>{this.props.onClose()},this._handleOpen=()=>{void 0!==this.props.onOpen&&this.props.isOpened&&this.props.onOpen(this.props.fullScreen||window.matchMedia(u.DialogBreakpoints.TabletSmall).matches)},this._handleKeyDown=e=>{var t;if(!e.defaultPrevented)switch(this.props.onKeyDown&&this.props.onKeyDown(e),(0,o.hashFromEvent)(e)){case 27:if(e.defaultPrevented)return;if(this.props.forceCloseOnEsc&&this.props.forceCloseOnEsc())return void this._handleClose();const{activeElement:n}=document,r=(0,s.ensureNotNull)(this._reference);if(null!==n){if(e.preventDefault(),"true"===(t=n).getAttribute("data-haspopup")&&"true"!==t.getAttribute("data-expanded"))return void this._handleClose();if((0,l.isTextEditingField)(n))return void r.focus();if(r.contains(n))return void this._handleClose()}}},this._requestResize=()=>{null!==this._controller&&this._controller.recalculateBounds()},this._centerAndFit=()=>{null!==this._controller&&this._controller.centerAndFit()}}componentDidMount(){var e,t;v.subscribe(m.CLOSE_POPUPS_AND_DIALOGS_COMMAND,this._handleClose,null),this._handleOpen(),void 0!==this.props.onOpen&&(this._orientationMediaQuery=window.matchMedia("(orientation: portrait)"),e=this._orientationMediaQuery,t=this._handleOpen,
(null==e?void 0:e.addEventListener)?e.addEventListener("change",t):e.addListener(t))}componentWillUnmount(){var e,t;v.unsubscribe(m.CLOSE_POPUPS_AND_DIALOGS_COMMAND,this._handleClose,null),null!==this._orientationMediaQuery&&(e=this._orientationMediaQuery,t=this._handleOpen,(null==e?void 0:e.removeEventListener)?e.removeEventListener("change",t):e.removeListener(t))}focus(){(0,s.ensureNotNull)(this._reference).focus()}getElement(){return this._reference}contains(e){var t,n;return null!==(n=null===(t=this._reference)||void 0===t?void 0:t.contains(e))&&void 0!==n&&n}render(){const{className:e,headerClassName:t,isOpened:n,title:s,dataName:i,onClickOutside:o,additionalElementPos:l,additionalHeaderElement:m,backdrop:v,shouldForceFocus:g=!0,showSeparator:_,subtitle:f,draggable:C=!0,fullScreen:A=!1,showCloseIcon:O=!0,rounded:P=!0,isAnimationEnabled:D,growPoint:M,dialogTooltip:S,unsetHeaderAlign:k,onDragStart:y}=this.props,L="after"!==l?m:void 0,x="after"===l?m:void 0;return r.createElement(h.MatchMedia,{rule:u.DialogBreakpoints.SmallHeight},l=>r.createElement(h.MatchMedia,{rule:u.DialogBreakpoints.TabletSmall},u=>r.createElement(d.PopupDialog,{rounded:!(u||A)&&P,className:a()(E.dialog,e),isOpened:n,reference:this._handleReference,onKeyDown:this._handleKeyDown,onClickOutside:o,onClickBackdrop:o,fullscreen:u||A,guard:l?N:b,boundByScreen:u||A,shouldForceFocus:g,backdrop:v,draggable:C,isAnimationEnabled:D,growPoint:M,name:this.props.dataName,dialogTooltip:S,onDragStart:y},r.createElement("div",{className:E.wrapper,"data-name":i,"data-dialog-name":"string"==typeof s?s:""},void 0!==s&&r.createElement(w,{draggable:C&&!(u||A),onClose:this._handleClose,renderAfter:x,renderBefore:L,subtitle:f,title:s,showCloseIcon:O,className:t,unsetAlign:k}),_&&r.createElement(c.Separator,{className:E.separator}),r.createElement(p.PopupContext.Consumer,null,e=>this._renderChildren(e,u||A))))))}}},10284:(e,t,n)=>{"use strict";n.d(t,{Separator:()=>a});var r=n(67294),s=n(94184),i=n(68552);function a(e){return r.createElement("div",{className:s(i.separator,e.className)})}},83124:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="none"><path stroke="currentColor" strokeWidth="1.2" d="M1 1l15 15m0-15L1 16"/></svg>'}}]);