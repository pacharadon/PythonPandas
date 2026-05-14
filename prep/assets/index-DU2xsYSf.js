(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))x(v);new MutationObserver(v=>{for(const I of v)if(I.type==="childList")for(const A of I.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&x(A)}).observe(document,{childList:!0,subtree:!0});function a(v){const I={};return v.integrity&&(I.integrity=v.integrity),v.referrerPolicy&&(I.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?I.credentials="include":v.crossOrigin==="anonymous"?I.credentials="omit":I.credentials="same-origin",I}function x(v){if(v.ep)return;v.ep=!0;const I=a(v);fetch(v.href,I)}})();function pc(f){return f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f}var Wi={exports:{}},jr={},$i={exports:{}},Q={};var Zu;function Nf(){if(Zu)return Q;Zu=1;var f=Symbol.for("react.element"),h=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),A=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),J=Symbol.iterator;function se(p){return p===null||typeof p!="object"?null:(p=J&&p[J]||p["@@iterator"],typeof p=="function"?p:null)}var ge={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},De=Object.assign,ie={};function X(p,w,V){this.props=p,this.context=w,this.refs=ie,this.updater=V||ge}X.prototype.isReactComponent={},X.prototype.setState=function(p,w){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,w,"setState")},X.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function Oe(){}Oe.prototype=X.prototype;function $e(p,w,V){this.props=p,this.context=w,this.refs=ie,this.updater=V||ge}var ke=$e.prototype=new Oe;ke.constructor=$e,De(ke,X.prototype),ke.isPureReactComponent=!0;var Ne=Array.isArray,Te=Object.prototype.hasOwnProperty,Ee={current:null},_e={key:!0,ref:!0,__self:!0,__source:!0};function Ve(p,w,V){var Y,Z={},ee=null,ce=null;if(w!=null)for(Y in w.ref!==void 0&&(ce=w.ref),w.key!==void 0&&(ee=""+w.key),w)Te.call(w,Y)&&!_e.hasOwnProperty(Y)&&(Z[Y]=w[Y]);var T=arguments.length-2;if(T===1)Z.children=V;else if(1<T){for(var b=Array(T),Pe=0;Pe<T;Pe++)b[Pe]=arguments[Pe+2];Z.children=b}if(p&&p.defaultProps)for(Y in T=p.defaultProps,T)Z[Y]===void 0&&(Z[Y]=T[Y]);return{$$typeof:f,type:p,key:ee,ref:ce,props:Z,_owner:Ee.current}}function Be(p,w){return{$$typeof:f,type:p.type,key:w,ref:p.ref,props:p.props,_owner:p._owner}}function W(p){return typeof p=="object"&&p!==null&&p.$$typeof===f}function fe(p){var w={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(V){return w[V]})}var $=/\/+/g;function G(p,w){return typeof p=="object"&&p!==null&&p.key!=null?fe(""+p.key):w.toString(36)}function ae(p,w,V,Y,Z){var ee=typeof p;(ee==="undefined"||ee==="boolean")&&(p=null);var ce=!1;if(p===null)ce=!0;else switch(ee){case"string":case"number":ce=!0;break;case"object":switch(p.$$typeof){case f:case h:ce=!0}}if(ce)return ce=p,Z=Z(ce),p=Y===""?"."+G(ce,0):Y,Ne(Z)?(V="",p!=null&&(V=p.replace($,"$&/")+"/"),ae(Z,w,V,"",function(Pe){return Pe})):Z!=null&&(W(Z)&&(Z=Be(Z,V+(!Z.key||ce&&ce.key===Z.key?"":(""+Z.key).replace($,"$&/")+"/")+p)),w.push(Z)),1;if(ce=0,Y=Y===""?".":Y+":",Ne(p))for(var T=0;T<p.length;T++){ee=p[T];var b=Y+G(ee,T);ce+=ae(ee,w,V,b,Z)}else if(b=se(p),typeof b=="function")for(p=b.call(p),T=0;!(ee=p.next()).done;)ee=ee.value,b=Y+G(ee,T++),ce+=ae(ee,w,V,b,Z);else if(ee==="object")throw w=String(p),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.");return ce}function Ce(p,w,V){if(p==null)return p;var Y=[],Z=0;return ae(p,Y,"","",function(ee){return w.call(V,ee,Z++)}),Y}function ue(p){if(p._status===-1){var w=p._result;w=w(),w.then(function(V){(p._status===0||p._status===-1)&&(p._status=1,p._result=V)},function(V){(p._status===0||p._status===-1)&&(p._status=2,p._result=V)}),p._status===-1&&(p._status=0,p._result=w)}if(p._status===1)return p._result.default;throw p._result}var pe={current:null},_={transition:null},F={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:_,ReactCurrentOwner:Ee};function R(){throw Error("act(...) is not supported in production builds of React.")}return Q.Children={map:Ce,forEach:function(p,w,V){Ce(p,function(){w.apply(this,arguments)},V)},count:function(p){var w=0;return Ce(p,function(){w++}),w},toArray:function(p){return Ce(p,function(w){return w})||[]},only:function(p){if(!W(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},Q.Component=X,Q.Fragment=a,Q.Profiler=v,Q.PureComponent=$e,Q.StrictMode=x,Q.Suspense=D,Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,Q.act=R,Q.cloneElement=function(p,w,V){if(p==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+p+".");var Y=De({},p.props),Z=p.key,ee=p.ref,ce=p._owner;if(w!=null){if(w.ref!==void 0&&(ee=w.ref,ce=Ee.current),w.key!==void 0&&(Z=""+w.key),p.type&&p.type.defaultProps)var T=p.type.defaultProps;for(b in w)Te.call(w,b)&&!_e.hasOwnProperty(b)&&(Y[b]=w[b]===void 0&&T!==void 0?T[b]:w[b])}var b=arguments.length-2;if(b===1)Y.children=V;else if(1<b){T=Array(b);for(var Pe=0;Pe<b;Pe++)T[Pe]=arguments[Pe+2];Y.children=T}return{$$typeof:f,type:p.type,key:Z,ref:ee,props:Y,_owner:ce}},Q.createContext=function(p){return p={$$typeof:A,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},p.Provider={$$typeof:I,_context:p},p.Consumer=p},Q.createElement=Ve,Q.createFactory=function(p){var w=Ve.bind(null,p);return w.type=p,w},Q.createRef=function(){return{current:null}},Q.forwardRef=function(p){return{$$typeof:M,render:p}},Q.isValidElement=W,Q.lazy=function(p){return{$$typeof:ne,_payload:{_status:-1,_result:p},_init:ue}},Q.memo=function(p,w){return{$$typeof:K,type:p,compare:w===void 0?null:w}},Q.startTransition=function(p){var w=_.transition;_.transition={};try{p()}finally{_.transition=w}},Q.unstable_act=R,Q.useCallback=function(p,w){return pe.current.useCallback(p,w)},Q.useContext=function(p){return pe.current.useContext(p)},Q.useDebugValue=function(){},Q.useDeferredValue=function(p){return pe.current.useDeferredValue(p)},Q.useEffect=function(p,w){return pe.current.useEffect(p,w)},Q.useId=function(){return pe.current.useId()},Q.useImperativeHandle=function(p,w,V){return pe.current.useImperativeHandle(p,w,V)},Q.useInsertionEffect=function(p,w){return pe.current.useInsertionEffect(p,w)},Q.useLayoutEffect=function(p,w){return pe.current.useLayoutEffect(p,w)},Q.useMemo=function(p,w){return pe.current.useMemo(p,w)},Q.useReducer=function(p,w,V){return pe.current.useReducer(p,w,V)},Q.useRef=function(p){return pe.current.useRef(p)},Q.useState=function(p){return pe.current.useState(p)},Q.useSyncExternalStore=function(p,w,V){return pe.current.useSyncExternalStore(p,w,V)},Q.useTransition=function(){return pe.current.useTransition()},Q.version="18.3.1",Q}var ec;function Zi(){return ec||(ec=1,$i.exports=Nf()),$i.exports}var tc;function Tf(){if(tc)return jr;tc=1;var f=Zi(),h=Symbol.for("react.element"),a=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,v=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I={key:!0,ref:!0,__self:!0,__source:!0};function A(M,D,K){var ne,J={},se=null,ge=null;K!==void 0&&(se=""+K),D.key!==void 0&&(se=""+D.key),D.ref!==void 0&&(ge=D.ref);for(ne in D)x.call(D,ne)&&!I.hasOwnProperty(ne)&&(J[ne]=D[ne]);if(M&&M.defaultProps)for(ne in D=M.defaultProps,D)J[ne]===void 0&&(J[ne]=D[ne]);return{$$typeof:h,type:M,key:se,ref:ge,props:J,_owner:v.current}}return jr.Fragment=a,jr.jsx=A,jr.jsxs=A,jr}var nc;function _f(){return nc||(nc=1,Wi.exports=Tf()),Wi.exports}var l=_f(),te=Zi();const Cf=pc(te);var $o={},Vi={exports:{}},ot={},Gi={exports:{}},Yi={};var rc;function Rf(){return rc||(rc=1,(function(f){function h(_,F){var R=_.length;_.push(F);e:for(;0<R;){var p=R-1>>>1,w=_[p];if(0<v(w,F))_[p]=F,_[R]=w,R=p;else break e}}function a(_){return _.length===0?null:_[0]}function x(_){if(_.length===0)return null;var F=_[0],R=_.pop();if(R!==F){_[0]=R;e:for(var p=0,w=_.length,V=w>>>1;p<V;){var Y=2*(p+1)-1,Z=_[Y],ee=Y+1,ce=_[ee];if(0>v(Z,R))ee<w&&0>v(ce,Z)?(_[p]=ce,_[ee]=R,p=ee):(_[p]=Z,_[Y]=R,p=Y);else if(ee<w&&0>v(ce,R))_[p]=ce,_[ee]=R,p=ee;else break e}}return F}function v(_,F){var R=_.sortIndex-F.sortIndex;return R!==0?R:_.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var I=performance;f.unstable_now=function(){return I.now()}}else{var A=Date,M=A.now();f.unstable_now=function(){return A.now()-M}}var D=[],K=[],ne=1,J=null,se=3,ge=!1,De=!1,ie=!1,X=typeof setTimeout=="function"?setTimeout:null,Oe=typeof clearTimeout=="function"?clearTimeout:null,$e=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ke(_){for(var F=a(K);F!==null;){if(F.callback===null)x(K);else if(F.startTime<=_)x(K),F.sortIndex=F.expirationTime,h(D,F);else break;F=a(K)}}function Ne(_){if(ie=!1,ke(_),!De)if(a(D)!==null)De=!0,ue(Te);else{var F=a(K);F!==null&&pe(Ne,F.startTime-_)}}function Te(_,F){De=!1,ie&&(ie=!1,Oe(Ve),Ve=-1),ge=!0;var R=se;try{for(ke(F),J=a(D);J!==null&&(!(J.expirationTime>F)||_&&!fe());){var p=J.callback;if(typeof p=="function"){J.callback=null,se=J.priorityLevel;var w=p(J.expirationTime<=F);F=f.unstable_now(),typeof w=="function"?J.callback=w:J===a(D)&&x(D),ke(F)}else x(D);J=a(D)}if(J!==null)var V=!0;else{var Y=a(K);Y!==null&&pe(Ne,Y.startTime-F),V=!1}return V}finally{J=null,se=R,ge=!1}}var Ee=!1,_e=null,Ve=-1,Be=5,W=-1;function fe(){return!(f.unstable_now()-W<Be)}function $(){if(_e!==null){var _=f.unstable_now();W=_;var F=!0;try{F=_e(!0,_)}finally{F?G():(Ee=!1,_e=null)}}else Ee=!1}var G;if(typeof $e=="function")G=function(){$e($)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,Ce=ae.port2;ae.port1.onmessage=$,G=function(){Ce.postMessage(null)}}else G=function(){X($,0)};function ue(_){_e=_,Ee||(Ee=!0,G())}function pe(_,F){Ve=X(function(){_(f.unstable_now())},F)}f.unstable_IdlePriority=5,f.unstable_ImmediatePriority=1,f.unstable_LowPriority=4,f.unstable_NormalPriority=3,f.unstable_Profiling=null,f.unstable_UserBlockingPriority=2,f.unstable_cancelCallback=function(_){_.callback=null},f.unstable_continueExecution=function(){De||ge||(De=!0,ue(Te))},f.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Be=0<_?Math.floor(1e3/_):5},f.unstable_getCurrentPriorityLevel=function(){return se},f.unstable_getFirstCallbackNode=function(){return a(D)},f.unstable_next=function(_){switch(se){case 1:case 2:case 3:var F=3;break;default:F=se}var R=se;se=F;try{return _()}finally{se=R}},f.unstable_pauseExecution=function(){},f.unstable_requestPaint=function(){},f.unstable_runWithPriority=function(_,F){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var R=se;se=_;try{return F()}finally{se=R}},f.unstable_scheduleCallback=function(_,F,R){var p=f.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?p+R:p):R=p,_){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=R+w,_={id:ne++,callback:F,priorityLevel:_,startTime:R,expirationTime:w,sortIndex:-1},R>p?(_.sortIndex=R,h(K,_),a(D)===null&&_===a(K)&&(ie?(Oe(Ve),Ve=-1):ie=!0,pe(Ne,R-p))):(_.sortIndex=w,h(D,_),De||ge||(De=!0,ue(Te))),_},f.unstable_shouldYield=fe,f.unstable_wrapCallback=function(_){var F=se;return function(){var R=se;se=F;try{return _.apply(this,arguments)}finally{se=R}}}})(Yi)),Yi}var oc;function If(){return oc||(oc=1,Gi.exports=Rf()),Gi.exports}var sc;function Lf(){if(sc)return ot;sc=1;var f=Zi(),h=If();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var x=new Set,v={};function I(e,t){A(e,t),A(e+"Capture",t)}function A(e,t){for(v[e]=t,e=0;e<t.length;e++)x.add(t[e])}var M=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),D=Object.prototype.hasOwnProperty,K=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ne={},J={};function se(e){return D.call(J,e)?!0:D.call(ne,e)?!1:K.test(e)?J[e]=!0:(ne[e]=!0,!1)}function ge(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function De(e,t,n,r){if(t===null||typeof t>"u"||ge(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ie(e,t,n,r,o,s,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=i}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){X[e]=new ie(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];X[t]=new ie(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){X[e]=new ie(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){X[e]=new ie(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){X[e]=new ie(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){X[e]=new ie(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){X[e]=new ie(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){X[e]=new ie(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){X[e]=new ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var Oe=/[\-:]([a-z])/g;function $e(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Oe,$e);X[t]=new ie(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Oe,$e);X[t]=new ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Oe,$e);X[t]=new ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){X[e]=new ie(e,1,!1,e.toLowerCase(),null,!1,!1)}),X.xlinkHref=new ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){X[e]=new ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function ke(e,t,n,r){var o=X.hasOwnProperty(t)?X[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(De(t,n,o,r)&&(n=null),r||o===null?se(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ne=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Te=Symbol.for("react.element"),Ee=Symbol.for("react.portal"),_e=Symbol.for("react.fragment"),Ve=Symbol.for("react.strict_mode"),Be=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),fe=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),Ce=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),_=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=_&&e[_]||e["@@iterator"],typeof e=="function"?e:null)}var R=Object.assign,p;function w(e){if(p===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);p=t&&t[1]||""}return`
`+p+e}var V=!1;function Y(e,t){if(!e||V)return"";V=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var r=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){r=g}e.call(t.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var o=g.stack.split(`
`),s=r.stack.split(`
`),i=o.length-1,u=s.length-1;1<=i&&0<=u&&o[i]!==s[u];)u--;for(;1<=i&&0<=u;i--,u--)if(o[i]!==s[u]){if(i!==1||u!==1)do if(i--,u--,0>u||o[i]!==s[u]){var c=`
`+o[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=u);break}}}finally{V=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?w(e):""}function Z(e){switch(e.tag){case 5:return w(e.type);case 16:return w("Lazy");case 13:return w("Suspense");case 19:return w("SuspenseList");case 0:case 2:case 15:return e=Y(e.type,!1),e;case 11:return e=Y(e.type.render,!1),e;case 1:return e=Y(e.type,!0),e;default:return""}}function ee(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _e:return"Fragment";case Ee:return"Portal";case Be:return"Profiler";case Ve:return"StrictMode";case G:return"Suspense";case ae:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fe:return(e.displayName||"Context")+".Consumer";case W:return(e._context.displayName||"Context")+".Provider";case $:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ce:return t=e.displayName||null,t!==null?t:ee(e.type)||"Memo";case ue:t=e._payload,e=e._init;try{return ee(e(t))}catch{}}return null}function ce(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(t);case 8:return t===Ve?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function T(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function b(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pe(e){var t=b(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function St(e){e._valueTracker||(e._valueTracker=Pe(e))}function Re(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=b(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Lt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wn(e,t){var n=t.checked;return R({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function kn(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=T(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ll(e,t){t=t.checked,t!=null&&ke(e,"checked",t,!1)}function Xo(e,t){ll(e,t);var n=T(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Jo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Jo(e,t.type,T(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function al(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Jo(e,t,n){(t!=="number"||Lt(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qn=Array.isArray;function En(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+T(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Zo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return R({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ul(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(a(92));if(qn(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:T(n)}}function cl(e,t){var n=T(t.value),r=T(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function dl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function es(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var br,pl=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(br=br||document.createElement("div"),br.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=br.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cc=["Webkit","ms","Moz","O"];Object.keys(Kn).forEach(function(e){Cc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kn[t]=Kn[e]})});function ml(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kn.hasOwnProperty(e)&&Kn[e]?(""+t).trim():t+"px"}function hl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ml(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Rc=R({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ts(e,t){if(t){if(Rc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function ns(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rs=null;function os(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ss=null,Sn=null,Nn=null;function yl(e){if(e=vr(e)){if(typeof ss!="function")throw Error(a(280));var t=e.stateNode;t&&(t=oo(t),ss(e.stateNode,e.type,t))}}function gl(e){Sn?Nn?Nn.push(e):Nn=[e]:Sn=e}function vl(){if(Sn){var e=Sn,t=Nn;if(Nn=Sn=null,yl(e),t)for(e=0;e<t.length;e++)yl(t[e])}}function xl(e,t){return e(t)}function wl(){}var is=!1;function kl(e,t,n){if(is)return e(t,n);is=!0;try{return xl(e,t,n)}finally{is=!1,(Sn!==null||Nn!==null)&&(wl(),vl())}}function Xn(e,t){var n=e.stateNode;if(n===null)return null;var r=oo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,t,typeof n));return n}var ls=!1;if(M)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){ls=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{ls=!1}function Ic(e,t,n,r,o,s,i,u,c){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(E){this.onError(E)}}var Zn=!1,Mr=null,Dr=!1,as=null,Lc={onError:function(e){Zn=!0,Mr=e}};function Oc(e,t,n,r,o,s,i,u,c){Zn=!1,Mr=null,Ic.apply(Lc,arguments)}function Pc(e,t,n,r,o,s,i,u,c){if(Oc.apply(this,arguments),Zn){if(Zn){var g=Mr;Zn=!1,Mr=null}else throw Error(a(198));Dr||(Dr=!0,as=g)}}function ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function El(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sl(e){if(ln(e)!==e)throw Error(a(188))}function jc(e){var t=e.alternate;if(!t){if(t=ln(e),t===null)throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return Sl(o),e;if(s===r)return Sl(o),t;s=s.sibling}throw Error(a(188))}if(n.return!==r.return)n=o,r=s;else{for(var i=!1,u=o.child;u;){if(u===n){i=!0,n=o,r=s;break}if(u===r){i=!0,r=o,n=s;break}u=u.sibling}if(!i){for(u=s.child;u;){if(u===n){i=!0,n=s,r=o;break}if(u===r){i=!0,r=s,n=o;break}u=u.sibling}if(!i)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function Nl(e){return e=jc(e),e!==null?Tl(e):null}function Tl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tl(e);if(t!==null)return t;e=e.sibling}return null}var _l=h.unstable_scheduleCallback,Cl=h.unstable_cancelCallback,Ac=h.unstable_shouldYield,bc=h.unstable_requestPaint,Ie=h.unstable_now,Mc=h.unstable_getCurrentPriorityLevel,us=h.unstable_ImmediatePriority,Rl=h.unstable_UserBlockingPriority,Fr=h.unstable_NormalPriority,Dc=h.unstable_LowPriority,Il=h.unstable_IdlePriority,Ur=null,Nt=null;function Fc(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Ur,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Bc,Uc=Math.log,zc=Math.LN2;function Bc(e){return e>>>=0,e===0?32:31-(Uc(e)/zc|0)|0}var zr=64,Br=4194304;function er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,s=e.pingedLanes,i=n&268435455;if(i!==0){var u=i&~o;u!==0?r=er(u):(s&=i,s!==0&&(r=er(s)))}else i=n&~o,i!==0?r=er(i):s!==0&&(r=er(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),o=1<<n,r|=e[n],t&=~o;return r}function Hc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-ht(s),u=1<<i,c=o[i];c===-1?((u&n)===0||(u&r)!==0)&&(o[i]=Hc(u,t)):c<=t&&(e.expiredLanes|=u),s&=~u}}function cs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ll(){var e=zr;return zr<<=1,(zr&4194240)===0&&(zr=64),e}function ds(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function $c(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ht(n),s=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~s}}function fs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var le=0;function Ol(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Pl,ps,jl,Al,bl,ms=!1,Wr=[],zt=null,Bt=null,Ht=null,nr=new Map,rr=new Map,Wt=[],Vc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ml(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(t.pointerId)}}function or(e,t,n,r,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[o]},t!==null&&(t=vr(t),t!==null&&ps(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Gc(e,t,n,r,o){switch(t){case"focusin":return zt=or(zt,e,t,n,r,o),!0;case"dragenter":return Bt=or(Bt,e,t,n,r,o),!0;case"mouseover":return Ht=or(Ht,e,t,n,r,o),!0;case"pointerover":var s=o.pointerId;return nr.set(s,or(nr.get(s)||null,e,t,n,r,o)),!0;case"gotpointercapture":return s=o.pointerId,rr.set(s,or(rr.get(s)||null,e,t,n,r,o)),!0}return!1}function Dl(e){var t=an(e.target);if(t!==null){var n=ln(t);if(n!==null){if(t=n.tag,t===13){if(t=El(n),t!==null){e.blockedOn=t,bl(e.priority,function(){jl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ys(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);rs=r,n.target.dispatchEvent(r),rs=null}else return t=vr(n),t!==null&&ps(t),e.blockedOn=n,!1;t.shift()}return!0}function Fl(e,t,n){$r(e)&&n.delete(t)}function Yc(){ms=!1,zt!==null&&$r(zt)&&(zt=null),Bt!==null&&$r(Bt)&&(Bt=null),Ht!==null&&$r(Ht)&&(Ht=null),nr.forEach(Fl),rr.forEach(Fl)}function sr(e,t){e.blockedOn===t&&(e.blockedOn=null,ms||(ms=!0,h.unstable_scheduleCallback(h.unstable_NormalPriority,Yc)))}function ir(e){function t(o){return sr(o,e)}if(0<Wr.length){sr(Wr[0],e);for(var n=1;n<Wr.length;n++){var r=Wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zt!==null&&sr(zt,e),Bt!==null&&sr(Bt,e),Ht!==null&&sr(Ht,e),nr.forEach(t),rr.forEach(t),n=0;n<Wt.length;n++)r=Wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wt.length&&(n=Wt[0],n.blockedOn===null);)Dl(n),n.blockedOn===null&&Wt.shift()}var Tn=Ne.ReactCurrentBatchConfig,Vr=!0;function qc(e,t,n,r){var o=le,s=Tn.transition;Tn.transition=null;try{le=1,hs(e,t,n,r)}finally{le=o,Tn.transition=s}}function Qc(e,t,n,r){var o=le,s=Tn.transition;Tn.transition=null;try{le=4,hs(e,t,n,r)}finally{le=o,Tn.transition=s}}function hs(e,t,n,r){if(Vr){var o=ys(e,t,n,r);if(o===null)js(e,t,r,Gr,n),Ml(e,r);else if(Gc(o,e,t,n,r))r.stopPropagation();else if(Ml(e,r),t&4&&-1<Vc.indexOf(e)){for(;o!==null;){var s=vr(o);if(s!==null&&Pl(s),s=ys(e,t,n,r),s===null&&js(e,t,r,Gr,n),s===o)break;o=s}o!==null&&r.stopPropagation()}else js(e,t,r,null,n)}}var Gr=null;function ys(e,t,n,r){if(Gr=null,e=os(r),e=an(e),e!==null)if(t=ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=El(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gr=e,null}function Ul(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mc()){case us:return 1;case Rl:return 4;case Fr:case Dc:return 16;case Il:return 536870912;default:return 16}default:return 16}}var $t=null,gs=null,Yr=null;function zl(){if(Yr)return Yr;var e,t=gs,n=t.length,r,o="value"in $t?$t.value:$t.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[s-r];r++);return Yr=o.slice(e,1<r?1-r:void 0)}function qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qr(){return!0}function Bl(){return!1}function st(e){function t(n,r,o,s,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qr:Bl,this.isPropagationStopped=Bl,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qr)},persist:function(){},isPersistent:Qr}),t}var _n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vs=st(_n),lr=R({},_n,{view:0,detail:0}),Kc=st(lr),xs,ws,ar,Kr=R({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Es,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(xs=e.screenX-ar.screenX,ws=e.screenY-ar.screenY):ws=xs=0,ar=e),xs)},movementY:function(e){return"movementY"in e?e.movementY:ws}}),Hl=st(Kr),Xc=R({},Kr,{dataTransfer:0}),Jc=st(Xc),Zc=R({},lr,{relatedTarget:0}),ks=st(Zc),ed=R({},_n,{animationName:0,elapsedTime:0,pseudoElement:0}),td=st(ed),nd=R({},_n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rd=st(nd),od=R({},_n,{data:0}),Wl=st(od),sd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},id={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ld={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ad(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ld[e])?!!t[e]:!1}function Es(){return ad}var ud=R({},lr,{key:function(e){if(e.key){var t=sd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?id[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Es,charCode:function(e){return e.type==="keypress"?qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cd=st(ud),dd=R({},Kr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$l=st(dd),fd=R({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Es}),pd=st(fd),md=R({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0}),hd=st(md),yd=R({},Kr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gd=st(yd),vd=[9,13,27,32],Ss=M&&"CompositionEvent"in window,ur=null;M&&"documentMode"in document&&(ur=document.documentMode);var xd=M&&"TextEvent"in window&&!ur,Vl=M&&(!Ss||ur&&8<ur&&11>=ur),Gl=" ",Yl=!1;function ql(e,t){switch(e){case"keyup":return vd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ql(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function wd(e,t){switch(e){case"compositionend":return Ql(t);case"keypress":return t.which!==32?null:(Yl=!0,Gl);case"textInput":return e=t.data,e===Gl&&Yl?null:e;default:return null}}function kd(e,t){if(Cn)return e==="compositionend"||!Ss&&ql(e,t)?(e=zl(),Yr=gs=$t=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vl&&t.locale!=="ko"?null:t.data;default:return null}}var Ed={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ed[e.type]:t==="textarea"}function Xl(e,t,n,r){gl(r),t=to(t,"onChange"),0<t.length&&(n=new vs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var cr=null,dr=null;function Sd(e){ha(e,0)}function Xr(e){var t=Pn(e);if(Re(t))return e}function Nd(e,t){if(e==="change")return t}var Jl=!1;if(M){var Ns;if(M){var Ts="oninput"in document;if(!Ts){var Zl=document.createElement("div");Zl.setAttribute("oninput","return;"),Ts=typeof Zl.oninput=="function"}Ns=Ts}else Ns=!1;Jl=Ns&&(!document.documentMode||9<document.documentMode)}function ea(){cr&&(cr.detachEvent("onpropertychange",ta),dr=cr=null)}function ta(e){if(e.propertyName==="value"&&Xr(dr)){var t=[];Xl(t,dr,e,os(e)),kl(Sd,t)}}function Td(e,t,n){e==="focusin"?(ea(),cr=t,dr=n,cr.attachEvent("onpropertychange",ta)):e==="focusout"&&ea()}function _d(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xr(dr)}function Cd(e,t){if(e==="click")return Xr(t)}function Rd(e,t){if(e==="input"||e==="change")return Xr(t)}function Id(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:Id;function fr(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!D.call(t,o)||!yt(e[o],t[o]))return!1}return!0}function na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ra(e,t){var n=na(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=na(n)}}function oa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?oa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sa(){for(var e=window,t=Lt();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lt(e.document)}return t}function _s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ld(e){var t=sa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&oa(n.ownerDocument.documentElement,n)){if(r!==null&&_s(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,s=Math.min(r.start,o);r=r.end===void 0?s:Math.min(r.end,o),!e.extend&&s>r&&(o=r,r=s,s=o),o=ra(n,s);var i=ra(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Od=M&&"documentMode"in document&&11>=document.documentMode,Rn=null,Cs=null,pr=null,Rs=!1;function ia(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rs||Rn==null||Rn!==Lt(r)||(r=Rn,"selectionStart"in r&&_s(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pr&&fr(pr,r)||(pr=r,r=to(Cs,"onSelect"),0<r.length&&(t=new vs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Rn)))}function Jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var In={animationend:Jr("Animation","AnimationEnd"),animationiteration:Jr("Animation","AnimationIteration"),animationstart:Jr("Animation","AnimationStart"),transitionend:Jr("Transition","TransitionEnd")},Is={},la={};M&&(la=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function Zr(e){if(Is[e])return Is[e];if(!In[e])return e;var t=In[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in la)return Is[e]=t[n];return e}var aa=Zr("animationend"),ua=Zr("animationiteration"),ca=Zr("animationstart"),da=Zr("transitionend"),fa=new Map,pa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vt(e,t){fa.set(e,t),I(t,[e])}for(var Ls=0;Ls<pa.length;Ls++){var Os=pa[Ls],Pd=Os.toLowerCase(),jd=Os[0].toUpperCase()+Os.slice(1);Vt(Pd,"on"+jd)}Vt(aa,"onAnimationEnd"),Vt(ua,"onAnimationIteration"),Vt(ca,"onAnimationStart"),Vt("dblclick","onDoubleClick"),Vt("focusin","onFocus"),Vt("focusout","onBlur"),Vt(da,"onTransitionEnd"),A("onMouseEnter",["mouseout","mouseover"]),A("onMouseLeave",["mouseout","mouseover"]),A("onPointerEnter",["pointerout","pointerover"]),A("onPointerLeave",["pointerout","pointerover"]),I("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),I("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),I("onBeforeInput",["compositionend","keypress","textInput","paste"]),I("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),I("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),I("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ad=new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));function ma(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Pc(r,t,void 0,e),e.currentTarget=null}function ha(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var i=r.length-1;0<=i;i--){var u=r[i],c=u.instance,g=u.currentTarget;if(u=u.listener,c!==s&&o.isPropagationStopped())break e;ma(o,u,g),s=c}else for(i=0;i<r.length;i++){if(u=r[i],c=u.instance,g=u.currentTarget,u=u.listener,c!==s&&o.isPropagationStopped())break e;ma(o,u,g),s=c}}}if(Dr)throw e=as,Dr=!1,as=null,e}function me(e,t){var n=t[Us];n===void 0&&(n=t[Us]=new Set);var r=e+"__bubble";n.has(r)||(ya(t,e,2,!1),n.add(r))}function Ps(e,t,n){var r=0;t&&(r|=4),ya(n,e,r,t)}var eo="_reactListening"+Math.random().toString(36).slice(2);function hr(e){if(!e[eo]){e[eo]=!0,x.forEach(function(n){n!=="selectionchange"&&(Ad.has(n)||Ps(n,!1,e),Ps(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[eo]||(t[eo]=!0,Ps("selectionchange",!1,t))}}function ya(e,t,n,r){switch(Ul(t)){case 1:var o=qc;break;case 4:o=Qc;break;default:o=hs}n=o.bind(null,t,n,e),o=void 0,!ls||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function js(e,t,n,r,o){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;i=i.return}for(;u!==null;){if(i=an(u),i===null)return;if(c=i.tag,c===5||c===6){r=s=i;continue e}u=u.parentNode}}r=r.return}kl(function(){var g=s,E=os(n),S=[];e:{var k=fa.get(e);if(k!==void 0){var C=vs,O=e;switch(e){case"keypress":if(qr(n)===0)break e;case"keydown":case"keyup":C=cd;break;case"focusin":O="focus",C=ks;break;case"focusout":O="blur",C=ks;break;case"beforeblur":case"afterblur":C=ks;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Hl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Jc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=pd;break;case aa:case ua:case ca:C=td;break;case da:C=hd;break;case"scroll":C=Kc;break;case"wheel":C=gd;break;case"copy":case"cut":case"paste":C=rd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=$l}var P=(t&4)!==0,Le=!P&&e==="scroll",m=P?k!==null?k+"Capture":null:k;P=[];for(var d=g,y;d!==null;){y=d;var N=y.stateNode;if(y.tag===5&&N!==null&&(y=N,m!==null&&(N=Xn(d,m),N!=null&&P.push(yr(d,N,y)))),Le)break;d=d.return}0<P.length&&(k=new C(k,O,null,n,E),S.push({event:k,listeners:P}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",k&&n!==rs&&(O=n.relatedTarget||n.fromElement)&&(an(O)||O[Ot]))break e;if((C||k)&&(k=E.window===E?E:(k=E.ownerDocument)?k.defaultView||k.parentWindow:window,C?(O=n.relatedTarget||n.toElement,C=g,O=O?an(O):null,O!==null&&(Le=ln(O),O!==Le||O.tag!==5&&O.tag!==6)&&(O=null)):(C=null,O=g),C!==O)){if(P=Hl,N="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(P=$l,N="onPointerLeave",m="onPointerEnter",d="pointer"),Le=C==null?k:Pn(C),y=O==null?k:Pn(O),k=new P(N,d+"leave",C,n,E),k.target=Le,k.relatedTarget=y,N=null,an(E)===g&&(P=new P(m,d+"enter",O,n,E),P.target=y,P.relatedTarget=Le,N=P),Le=N,C&&O)t:{for(P=C,m=O,d=0,y=P;y;y=Ln(y))d++;for(y=0,N=m;N;N=Ln(N))y++;for(;0<d-y;)P=Ln(P),d--;for(;0<y-d;)m=Ln(m),y--;for(;d--;){if(P===m||m!==null&&P===m.alternate)break t;P=Ln(P),m=Ln(m)}P=null}else P=null;C!==null&&ga(S,k,C,P,!1),O!==null&&Le!==null&&ga(S,Le,O,P,!0)}}e:{if(k=g?Pn(g):window,C=k.nodeName&&k.nodeName.toLowerCase(),C==="select"||C==="input"&&k.type==="file")var j=Nd;else if(Kl(k))if(Jl)j=Rd;else{j=_d;var U=Td}else(C=k.nodeName)&&C.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(j=Cd);if(j&&(j=j(e,g))){Xl(S,j,n,E);break e}U&&U(e,k,g),e==="focusout"&&(U=k._wrapperState)&&U.controlled&&k.type==="number"&&Jo(k,"number",k.value)}switch(U=g?Pn(g):window,e){case"focusin":(Kl(U)||U.contentEditable==="true")&&(Rn=U,Cs=g,pr=null);break;case"focusout":pr=Cs=Rn=null;break;case"mousedown":Rs=!0;break;case"contextmenu":case"mouseup":case"dragend":Rs=!1,ia(S,n,E);break;case"selectionchange":if(Od)break;case"keydown":case"keyup":ia(S,n,E)}var z;if(Ss)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else Cn?ql(e,n)&&(B="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(Vl&&n.locale!=="ko"&&(Cn||B!=="onCompositionStart"?B==="onCompositionEnd"&&Cn&&(z=zl()):($t=E,gs="value"in $t?$t.value:$t.textContent,Cn=!0)),U=to(g,B),0<U.length&&(B=new Wl(B,e,null,n,E),S.push({event:B,listeners:U}),z?B.data=z:(z=Ql(n),z!==null&&(B.data=z)))),(z=xd?wd(e,n):kd(e,n))&&(g=to(g,"onBeforeInput"),0<g.length&&(E=new Wl("onBeforeInput","beforeinput",null,n,E),S.push({event:E,listeners:g}),E.data=z))}ha(S,t)})}function yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function to(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=Xn(e,n),s!=null&&r.unshift(yr(e,s,o)),s=Xn(e,t),s!=null&&r.push(yr(e,s,o))),e=e.return}return r}function Ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ga(e,t,n,r,o){for(var s=t._reactName,i=[];n!==null&&n!==r;){var u=n,c=u.alternate,g=u.stateNode;if(c!==null&&c===r)break;u.tag===5&&g!==null&&(u=g,o?(c=Xn(n,s),c!=null&&i.unshift(yr(n,c,u))):o||(c=Xn(n,s),c!=null&&i.push(yr(n,c,u)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var bd=/\r\n?/g,Md=/\u0000|\uFFFD/g;function va(e){return(typeof e=="string"?e:""+e).replace(bd,`
`).replace(Md,"")}function no(e,t,n){if(t=va(t),va(e)!==t&&n)throw Error(a(425))}function ro(){}var As=null,bs=null;function Ms(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ds=typeof setTimeout=="function"?setTimeout:void 0,Dd=typeof clearTimeout=="function"?clearTimeout:void 0,xa=typeof Promise=="function"?Promise:void 0,Fd=typeof queueMicrotask=="function"?queueMicrotask:typeof xa<"u"?function(e){return xa.resolve(null).then(e).catch(Ud)}:Ds;function Ud(e){setTimeout(function(){throw e})}function Fs(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ir(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ir(t)}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var On=Math.random().toString(36).slice(2),Tt="__reactFiber$"+On,gr="__reactProps$"+On,Ot="__reactContainer$"+On,Us="__reactEvents$"+On,zd="__reactListeners$"+On,Bd="__reactHandles$"+On;function an(e){var t=e[Tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[Tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wa(e);e!==null;){if(n=e[Tt])return n;e=wa(e)}return t}e=n,n=e.parentNode}return null}function vr(e){return e=e[Tt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function oo(e){return e[gr]||null}var zs=[],jn=-1;function Yt(e){return{current:e}}function he(e){0>jn||(e.current=zs[jn],zs[jn]=null,jn--)}function de(e,t){jn++,zs[jn]=e.current,e.current=t}var qt={},Ge=Yt(qt),Ze=Yt(!1),un=qt;function An(e,t){var n=e.type.contextTypes;if(!n)return qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in n)o[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function et(e){return e=e.childContextTypes,e!=null}function so(){he(Ze),he(Ge)}function ka(e,t,n){if(Ge.current!==qt)throw Error(a(168));de(Ge,t),de(Ze,n)}function Ea(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(a(108,ce(e)||"Unknown",o));return R({},n,r)}function io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qt,un=Ge.current,de(Ge,e),de(Ze,Ze.current),!0}function Sa(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=Ea(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,he(Ze),he(Ge),de(Ge,e)):he(Ze),de(Ze,n)}var Pt=null,lo=!1,Bs=!1;function Na(e){Pt===null?Pt=[e]:Pt.push(e)}function Hd(e){lo=!0,Na(e)}function Qt(){if(!Bs&&Pt!==null){Bs=!0;var e=0,t=le;try{var n=Pt;for(le=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,lo=!1}catch(o){throw Pt!==null&&(Pt=Pt.slice(e+1)),_l(us,Qt),o}finally{le=t,Bs=!1}}return null}var bn=[],Mn=0,ao=null,uo=0,ut=[],ct=0,cn=null,jt=1,At="";function dn(e,t){bn[Mn++]=uo,bn[Mn++]=ao,ao=e,uo=t}function Ta(e,t,n){ut[ct++]=jt,ut[ct++]=At,ut[ct++]=cn,cn=e;var r=jt;e=At;var o=32-ht(r)-1;r&=~(1<<o),n+=1;var s=32-ht(t)+o;if(30<s){var i=o-o%5;s=(r&(1<<i)-1).toString(32),r>>=i,o-=i,jt=1<<32-ht(t)+o|n<<o|r,At=s+e}else jt=1<<s|n<<o|r,At=e}function Hs(e){e.return!==null&&(dn(e,1),Ta(e,1,0))}function Ws(e){for(;e===ao;)ao=bn[--Mn],bn[Mn]=null,uo=bn[--Mn],bn[Mn]=null;for(;e===cn;)cn=ut[--ct],ut[ct]=null,At=ut[--ct],ut[ct]=null,jt=ut[--ct],ut[ct]=null}var it=null,lt=null,ve=!1,gt=null;function _a(e,t){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ca(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,lt=Gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cn!==null?{id:jt,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,it=e,lt=null,!0):!1;default:return!1}}function $s(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vs(e){if(ve){var t=lt;if(t){var n=t;if(!Ca(e,t)){if($s(e))throw Error(a(418));t=Gt(n.nextSibling);var r=it;t&&Ca(e,t)?_a(r,n):(e.flags=e.flags&-4097|2,ve=!1,it=e)}}else{if($s(e))throw Error(a(418));e.flags=e.flags&-4097|2,ve=!1,it=e}}}function Ra(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function co(e){if(e!==it)return!1;if(!ve)return Ra(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ms(e.type,e.memoizedProps)),t&&(t=lt)){if($s(e))throw Ia(),Error(a(418));for(;t;)_a(e,t),t=Gt(t.nextSibling)}if(Ra(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=Gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=it?Gt(e.stateNode.nextSibling):null;return!0}function Ia(){for(var e=lt;e;)e=Gt(e.nextSibling)}function Dn(){lt=it=null,ve=!1}function Gs(e){gt===null?gt=[e]:gt.push(e)}var Wd=Ne.ReactCurrentBatchConfig;function xr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var o=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(i){var u=o.refs;i===null?delete u[s]:u[s]=i},t._stringRef=s,t)}if(typeof e!="string")throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function fo(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function La(e){var t=e._init;return t(e._payload)}function Oa(e){function t(m,d){if(e){var y=m.deletions;y===null?(m.deletions=[d],m.flags|=16):y.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function o(m,d){return m=rn(m,d),m.index=0,m.sibling=null,m}function s(m,d,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<d?(m.flags|=2,d):y):(m.flags|=2,d)):(m.flags|=1048576,d)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function u(m,d,y,N){return d===null||d.tag!==6?(d=Di(y,m.mode,N),d.return=m,d):(d=o(d,y),d.return=m,d)}function c(m,d,y,N){var j=y.type;return j===_e?E(m,d,y.props.children,N,y.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===ue&&La(j)===d.type)?(N=o(d,y.props),N.ref=xr(m,d,y),N.return=m,N):(N=Mo(y.type,y.key,y.props,null,m.mode,N),N.ref=xr(m,d,y),N.return=m,N)}function g(m,d,y,N){return d===null||d.tag!==4||d.stateNode.containerInfo!==y.containerInfo||d.stateNode.implementation!==y.implementation?(d=Fi(y,m.mode,N),d.return=m,d):(d=o(d,y.children||[]),d.return=m,d)}function E(m,d,y,N,j){return d===null||d.tag!==7?(d=xn(y,m.mode,N,j),d.return=m,d):(d=o(d,y),d.return=m,d)}function S(m,d,y){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Di(""+d,m.mode,y),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Te:return y=Mo(d.type,d.key,d.props,null,m.mode,y),y.ref=xr(m,null,d),y.return=m,y;case Ee:return d=Fi(d,m.mode,y),d.return=m,d;case ue:var N=d._init;return S(m,N(d._payload),y)}if(qn(d)||F(d))return d=xn(d,m.mode,y,null),d.return=m,d;fo(m,d)}return null}function k(m,d,y,N){var j=d!==null?d.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return j!==null?null:u(m,d,""+y,N);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Te:return y.key===j?c(m,d,y,N):null;case Ee:return y.key===j?g(m,d,y,N):null;case ue:return j=y._init,k(m,d,j(y._payload),N)}if(qn(y)||F(y))return j!==null?null:E(m,d,y,N,null);fo(m,y)}return null}function C(m,d,y,N,j){if(typeof N=="string"&&N!==""||typeof N=="number")return m=m.get(y)||null,u(d,m,""+N,j);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Te:return m=m.get(N.key===null?y:N.key)||null,c(d,m,N,j);case Ee:return m=m.get(N.key===null?y:N.key)||null,g(d,m,N,j);case ue:var U=N._init;return C(m,d,y,U(N._payload),j)}if(qn(N)||F(N))return m=m.get(y)||null,E(d,m,N,j,null);fo(d,N)}return null}function O(m,d,y,N){for(var j=null,U=null,z=d,B=d=0,ze=null;z!==null&&B<y.length;B++){z.index>B?(ze=z,z=null):ze=z.sibling;var oe=k(m,z,y[B],N);if(oe===null){z===null&&(z=ze);break}e&&z&&oe.alternate===null&&t(m,z),d=s(oe,d,B),U===null?j=oe:U.sibling=oe,U=oe,z=ze}if(B===y.length)return n(m,z),ve&&dn(m,B),j;if(z===null){for(;B<y.length;B++)z=S(m,y[B],N),z!==null&&(d=s(z,d,B),U===null?j=z:U.sibling=z,U=z);return ve&&dn(m,B),j}for(z=r(m,z);B<y.length;B++)ze=C(z,m,B,y[B],N),ze!==null&&(e&&ze.alternate!==null&&z.delete(ze.key===null?B:ze.key),d=s(ze,d,B),U===null?j=ze:U.sibling=ze,U=ze);return e&&z.forEach(function(on){return t(m,on)}),ve&&dn(m,B),j}function P(m,d,y,N){var j=F(y);if(typeof j!="function")throw Error(a(150));if(y=j.call(y),y==null)throw Error(a(151));for(var U=j=null,z=d,B=d=0,ze=null,oe=y.next();z!==null&&!oe.done;B++,oe=y.next()){z.index>B?(ze=z,z=null):ze=z.sibling;var on=k(m,z,oe.value,N);if(on===null){z===null&&(z=ze);break}e&&z&&on.alternate===null&&t(m,z),d=s(on,d,B),U===null?j=on:U.sibling=on,U=on,z=ze}if(oe.done)return n(m,z),ve&&dn(m,B),j;if(z===null){for(;!oe.done;B++,oe=y.next())oe=S(m,oe.value,N),oe!==null&&(d=s(oe,d,B),U===null?j=oe:U.sibling=oe,U=oe);return ve&&dn(m,B),j}for(z=r(m,z);!oe.done;B++,oe=y.next())oe=C(z,m,B,oe.value,N),oe!==null&&(e&&oe.alternate!==null&&z.delete(oe.key===null?B:oe.key),d=s(oe,d,B),U===null?j=oe:U.sibling=oe,U=oe);return e&&z.forEach(function(Sf){return t(m,Sf)}),ve&&dn(m,B),j}function Le(m,d,y,N){if(typeof y=="object"&&y!==null&&y.type===_e&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Te:e:{for(var j=y.key,U=d;U!==null;){if(U.key===j){if(j=y.type,j===_e){if(U.tag===7){n(m,U.sibling),d=o(U,y.props.children),d.return=m,m=d;break e}}else if(U.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===ue&&La(j)===U.type){n(m,U.sibling),d=o(U,y.props),d.ref=xr(m,U,y),d.return=m,m=d;break e}n(m,U);break}else t(m,U);U=U.sibling}y.type===_e?(d=xn(y.props.children,m.mode,N,y.key),d.return=m,m=d):(N=Mo(y.type,y.key,y.props,null,m.mode,N),N.ref=xr(m,d,y),N.return=m,m=N)}return i(m);case Ee:e:{for(U=y.key;d!==null;){if(d.key===U)if(d.tag===4&&d.stateNode.containerInfo===y.containerInfo&&d.stateNode.implementation===y.implementation){n(m,d.sibling),d=o(d,y.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=Fi(y,m.mode,N),d.return=m,m=d}return i(m);case ue:return U=y._init,Le(m,d,U(y._payload),N)}if(qn(y))return O(m,d,y,N);if(F(y))return P(m,d,y,N);fo(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,d!==null&&d.tag===6?(n(m,d.sibling),d=o(d,y),d.return=m,m=d):(n(m,d),d=Di(y,m.mode,N),d.return=m,m=d),i(m)):n(m,d)}return Le}var Fn=Oa(!0),Pa=Oa(!1),po=Yt(null),mo=null,Un=null,Ys=null;function qs(){Ys=Un=mo=null}function Qs(e){var t=po.current;he(po),e._currentValue=t}function Ks(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zn(e,t){mo=e,Ys=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(tt=!0),e.firstContext=null)}function dt(e){var t=e._currentValue;if(Ys!==e)if(e={context:e,memoizedValue:t,next:null},Un===null){if(mo===null)throw Error(a(308));Un=e,mo.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return t}var fn=null;function Xs(e){fn===null?fn=[e]:fn.push(e)}function ja(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Xs(t)):(n.next=o.next,o.next=n),t.interleaved=n,bt(e,r)}function bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kt=!1;function Js(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Aa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(re&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,bt(e,n)}return o=r.interleaved,o===null?(t.next=t,Xs(r)):(t.next=o.next,o.next=t),r.interleaved=t,bt(e,n)}function ho(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fs(e,n)}}function ba(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?o=s=i:s=s.next=i,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function yo(e,t,n,r){var o=e.updateQueue;Kt=!1;var s=o.firstBaseUpdate,i=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var c=u,g=c.next;c.next=null,i===null?s=g:i.next=g,i=c;var E=e.alternate;E!==null&&(E=E.updateQueue,u=E.lastBaseUpdate,u!==i&&(u===null?E.firstBaseUpdate=g:u.next=g,E.lastBaseUpdate=c))}if(s!==null){var S=o.baseState;i=0,E=g=c=null,u=s;do{var k=u.lane,C=u.eventTime;if((r&k)===k){E!==null&&(E=E.next={eventTime:C,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var O=e,P=u;switch(k=t,C=n,P.tag){case 1:if(O=P.payload,typeof O=="function"){S=O.call(C,S,k);break e}S=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=P.payload,k=typeof O=="function"?O.call(C,S,k):O,k==null)break e;S=R({},S,k);break e;case 2:Kt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,k=o.effects,k===null?o.effects=[u]:k.push(u))}else C={eventTime:C,lane:k,tag:u.tag,payload:u.payload,callback:u.callback,next:null},E===null?(g=E=C,c=S):E=E.next=C,i|=k;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;k=u,u=k.next,k.next=null,o.lastBaseUpdate=k,o.shared.pending=null}}while(!0);if(E===null&&(c=S),o.baseState=c,o.firstBaseUpdate=g,o.lastBaseUpdate=E,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);hn|=i,e.lanes=i,e.memoizedState=S}}function Ma(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(a(191,o));o.call(r)}}}var wr={},_t=Yt(wr),kr=Yt(wr),Er=Yt(wr);function pn(e){if(e===wr)throw Error(a(174));return e}function Zs(e,t){switch(de(Er,t),de(kr,e),de(_t,wr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:es(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=es(t,e)}he(_t),de(_t,t)}function Bn(){he(_t),he(kr),he(Er)}function Da(e){pn(Er.current);var t=pn(_t.current),n=es(t,e.type);t!==n&&(de(kr,e),de(_t,n))}function ei(e){kr.current===e&&(he(_t),he(kr))}var xe=Yt(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ti=[];function ni(){for(var e=0;e<ti.length;e++)ti[e]._workInProgressVersionPrimary=null;ti.length=0}var vo=Ne.ReactCurrentDispatcher,ri=Ne.ReactCurrentBatchConfig,mn=0,we=null,be=null,Fe=null,xo=!1,Sr=!1,Nr=0,$d=0;function Ye(){throw Error(a(321))}function oi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function si(e,t,n,r,o,s){if(mn=s,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vo.current=e===null||e.memoizedState===null?qd:Qd,e=n(r,o),Sr){s=0;do{if(Sr=!1,Nr=0,25<=s)throw Error(a(301));s+=1,Fe=be=null,t.updateQueue=null,vo.current=Kd,e=n(r,o)}while(Sr)}if(vo.current=Eo,t=be!==null&&be.next!==null,mn=0,Fe=be=we=null,xo=!1,t)throw Error(a(300));return e}function ii(){var e=Nr!==0;return Nr=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?we.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function ft(){if(be===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Fe===null?we.memoizedState:Fe.next;if(t!==null)Fe=t,be=e;else{if(e===null)throw Error(a(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Fe===null?we.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Tr(e,t){return typeof t=="function"?t(e):t}function li(e){var t=ft(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=be,o=r.baseQueue,s=n.pending;if(s!==null){if(o!==null){var i=o.next;o.next=s.next,s.next=i}r.baseQueue=o=s,n.pending=null}if(o!==null){s=o.next,r=r.baseState;var u=i=null,c=null,g=s;do{var E=g.lane;if((mn&E)===E)c!==null&&(c=c.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var S={lane:E,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};c===null?(u=c=S,i=r):c=c.next=S,we.lanes|=E,hn|=E}g=g.next}while(g!==null&&g!==s);c===null?i=r:c.next=u,yt(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do s=o.lane,we.lanes|=s,hn|=s,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ai(e){var t=ft(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do s=e(s,i.action),i=i.next;while(i!==o);yt(s,t.memoizedState)||(tt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Fa(){}function Ua(e,t){var n=we,r=ft(),o=t(),s=!yt(r.memoizedState,o);if(s&&(r.memoizedState=o,tt=!0),r=r.queue,ui(Ha.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,_r(9,Ba.bind(null,n,r,o,t),void 0,null),Ue===null)throw Error(a(349));(mn&30)!==0||za(n,t,o)}return o}function za(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ba(e,t,n,r){t.value=n,t.getSnapshot=r,Wa(t)&&$a(e)}function Ha(e,t,n){return n(function(){Wa(t)&&$a(e)})}function Wa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function $a(e){var t=bt(e,1);t!==null&&kt(t,e,1,-1)}function Va(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:e},t.queue=e,e=e.dispatch=Yd.bind(null,we,e),[t.memoizedState,e]}function _r(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ga(){return ft().memoizedState}function wo(e,t,n,r){var o=Ct();we.flags|=e,o.memoizedState=_r(1|t,n,void 0,r===void 0?null:r)}function ko(e,t,n,r){var o=ft();r=r===void 0?null:r;var s=void 0;if(be!==null){var i=be.memoizedState;if(s=i.destroy,r!==null&&oi(r,i.deps)){o.memoizedState=_r(t,n,s,r);return}}we.flags|=e,o.memoizedState=_r(1|t,n,s,r)}function Ya(e,t){return wo(8390656,8,e,t)}function ui(e,t){return ko(2048,8,e,t)}function qa(e,t){return ko(4,2,e,t)}function Qa(e,t){return ko(4,4,e,t)}function Ka(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xa(e,t,n){return n=n!=null?n.concat([e]):null,ko(4,4,Ka.bind(null,t,e),n)}function ci(){}function Ja(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Za(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function eu(e,t,n){return(mn&21)===0?(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n):(yt(n,t)||(n=Ll(),we.lanes|=n,hn|=n,e.baseState=!0),t)}function Vd(e,t){var n=le;le=n!==0&&4>n?n:4,e(!0);var r=ri.transition;ri.transition={};try{e(!1),t()}finally{le=n,ri.transition=r}}function tu(){return ft().memoizedState}function Gd(e,t,n){var r=tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nu(e))ru(t,n);else if(n=ja(e,t,n,r),n!==null){var o=Je();kt(n,e,r,o),ou(n,t,r)}}function Yd(e,t,n){var r=tn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nu(e))ru(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,u=s(i,n);if(o.hasEagerState=!0,o.eagerState=u,yt(u,i)){var c=t.interleaved;c===null?(o.next=o,Xs(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}n=ja(e,t,o,r),n!==null&&(o=Je(),kt(n,e,r,o),ou(n,t,r))}}function nu(e){var t=e.alternate;return e===we||t!==null&&t===we}function ru(e,t){Sr=xo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ou(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fs(e,n)}}var Eo={readContext:dt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},qd={readContext:dt,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:Ya,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wo(4194308,4,Ka.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wo(4194308,4,e,t)},useInsertionEffect:function(e,t){return wo(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Gd.bind(null,we,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:Va,useDebugValue:ci,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=Va(!1),t=e[0];return e=Vd.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=we,o=Ct();if(ve){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),Ue===null)throw Error(a(349));(mn&30)!==0||za(r,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,Ya(Ha.bind(null,r,s,e),[e]),r.flags|=2048,_r(9,Ba.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Ct(),t=Ue.identifierPrefix;if(ve){var n=At,r=jt;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$d++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qd={readContext:dt,useCallback:Ja,useContext:dt,useEffect:ui,useImperativeHandle:Xa,useInsertionEffect:qa,useLayoutEffect:Qa,useMemo:Za,useReducer:li,useRef:Ga,useState:function(){return li(Tr)},useDebugValue:ci,useDeferredValue:function(e){var t=ft();return eu(t,be.memoizedState,e)},useTransition:function(){var e=li(Tr)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Fa,useSyncExternalStore:Ua,useId:tu,unstable_isNewReconciler:!1},Kd={readContext:dt,useCallback:Ja,useContext:dt,useEffect:ui,useImperativeHandle:Xa,useInsertionEffect:qa,useLayoutEffect:Qa,useMemo:Za,useReducer:ai,useRef:Ga,useState:function(){return ai(Tr)},useDebugValue:ci,useDeferredValue:function(e){var t=ft();return be===null?t.memoizedState=e:eu(t,be.memoizedState,e)},useTransition:function(){var e=ai(Tr)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Fa,useSyncExternalStore:Ua,useId:tu,unstable_isNewReconciler:!1};function vt(e,t){if(e&&e.defaultProps){t=R({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function di(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:R({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var So={isMounted:function(e){return(e=e._reactInternals)?ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),o=tn(e),s=Mt(r,o);s.payload=t,n!=null&&(s.callback=n),t=Xt(e,s,o),t!==null&&(kt(t,e,o,r),ho(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),o=tn(e),s=Mt(r,o);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Xt(e,s,o),t!==null&&(kt(t,e,o,r),ho(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=tn(e),o=Mt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Xt(e,o,r),t!==null&&(kt(t,e,r,n),ho(t,e,r))}};function su(e,t,n,r,o,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,i):t.prototype&&t.prototype.isPureReactComponent?!fr(n,r)||!fr(o,s):!0}function iu(e,t,n){var r=!1,o=qt,s=t.contextType;return typeof s=="object"&&s!==null?s=dt(s):(o=et(t)?un:Ge.current,r=t.contextTypes,s=(r=r!=null)?An(e,o):qt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=So,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function lu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&So.enqueueReplaceState(t,t.state,null)}function fi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Js(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=dt(s):(s=et(t)?un:Ge.current,o.context=An(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(di(e,t,s,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&So.enqueueReplaceState(o,o.state,null),yo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Hn(e,t){try{var n="",r=t;do n+=Z(r),r=r.return;while(r);var o=n}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function pi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function mi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Xd=typeof WeakMap=="function"?WeakMap:Map;function au(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Lo||(Lo=!0,Ii=r),mi(e,t)},n}function uu(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){mi(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){mi(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function cu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Xd;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ff.bind(null,e,t,n),t.then(e,e))}function du(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fu(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,Xt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Jd=Ne.ReactCurrentOwner,tt=!1;function Xe(e,t,n,r){t.child=e===null?Pa(t,null,n,r):Fn(t,e.child,n,r)}function pu(e,t,n,r,o){n=n.render;var s=t.ref;return zn(t,o),r=si(e,t,n,r,s,o),n=ii(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Dt(e,t,o)):(ve&&n&&Hs(t),t.flags|=1,Xe(e,t,r,o),t.child)}function mu(e,t,n,r,o){if(e===null){var s=n.type;return typeof s=="function"&&!Mi(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,hu(e,t,s,r,o)):(e=Mo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&o)===0){var i=s.memoizedProps;if(n=n.compare,n=n!==null?n:fr,n(i,r)&&e.ref===t.ref)return Dt(e,t,o)}return t.flags|=1,e=rn(s,r),e.ref=t.ref,e.return=t,t.child=e}function hu(e,t,n,r,o){if(e!==null){var s=e.memoizedProps;if(fr(s,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=s,(e.lanes&o)!==0)(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,Dt(e,t,o)}return hi(e,t,n,r,o)}function yu(e,t,n){var r=t.pendingProps,o=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de($n,at),at|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de($n,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de($n,at),at|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,de($n,at),at|=r;return Xe(e,t,o,n),t.child}function gu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hi(e,t,n,r,o){var s=et(n)?un:Ge.current;return s=An(t,s),zn(t,o),n=si(e,t,n,r,s,o),r=ii(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Dt(e,t,o)):(ve&&r&&Hs(t),t.flags|=1,Xe(e,t,n,o),t.child)}function vu(e,t,n,r,o){if(et(n)){var s=!0;io(t)}else s=!1;if(zn(t,o),t.stateNode===null)To(e,t),iu(t,n,r),fi(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,u=t.memoizedProps;i.props=u;var c=i.context,g=n.contextType;typeof g=="object"&&g!==null?g=dt(g):(g=et(n)?un:Ge.current,g=An(t,g));var E=n.getDerivedStateFromProps,S=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function";S||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||c!==g)&&lu(t,i,r,g),Kt=!1;var k=t.memoizedState;i.state=k,yo(t,r,i,o),c=t.memoizedState,u!==r||k!==c||Ze.current||Kt?(typeof E=="function"&&(di(t,n,E,r),c=t.memoizedState),(u=Kt||su(t,n,u,r,k,c,g))?(S||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),i.props=r,i.state=c,i.context=g,r=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Aa(e,t),u=t.memoizedProps,g=t.type===t.elementType?u:vt(t.type,u),i.props=g,S=t.pendingProps,k=i.context,c=n.contextType,typeof c=="object"&&c!==null?c=dt(c):(c=et(n)?un:Ge.current,c=An(t,c));var C=n.getDerivedStateFromProps;(E=typeof C=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==S||k!==c)&&lu(t,i,r,c),Kt=!1,k=t.memoizedState,i.state=k,yo(t,r,i,o);var O=t.memoizedState;u!==S||k!==O||Ze.current||Kt?(typeof C=="function"&&(di(t,n,C,r),O=t.memoizedState),(g=Kt||su(t,n,g,r,k,O,c)||!1)?(E||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,O,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,O,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=O),i.props=r,i.state=O,i.context=c,r=g):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),r=!1)}return yi(e,t,n,r,s,o)}function yi(e,t,n,r,o,s){gu(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Sa(t,n,!1),Dt(e,t,s);r=t.stateNode,Jd.current=t;var u=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Fn(t,e.child,null,s),t.child=Fn(t,null,u,s)):Xe(e,t,u,s),t.memoizedState=r.state,o&&Sa(t,n,!0),t.child}function xu(e){var t=e.stateNode;t.pendingContext?ka(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ka(e,t.context,!1),Zs(e,t.containerInfo)}function wu(e,t,n,r,o){return Dn(),Gs(o),t.flags|=256,Xe(e,t,n,r),t.child}var gi={dehydrated:null,treeContext:null,retryLane:0};function vi(e){return{baseLanes:e,cachePool:null,transitions:null}}function ku(e,t,n){var r=t.pendingProps,o=xe.current,s=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),de(xe,o&1),e===null)return Vs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,s?(r=t.mode,s=t.child,i={mode:"hidden",children:i},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=i):s=Do(i,r,0,null),e=xn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=vi(n),t.memoizedState=gi,e):xi(t,i));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return Zd(e,t,i,r,u,o,n);if(s){s=r.fallback,i=t.mode,o=e.child,u=o.sibling;var c={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=rn(o,c),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?s=rn(u,s):(s=xn(s,i,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,i=e.child.memoizedState,i=i===null?vi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~n,t.memoizedState=gi,r}return s=e.child,e=s.sibling,r=rn(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function xi(e,t){return t=Do({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function No(e,t,n,r){return r!==null&&Gs(r),Fn(t,e.child,null,n),e=xi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zd(e,t,n,r,o,s,i){if(n)return t.flags&256?(t.flags&=-257,r=pi(Error(a(422))),No(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,o=t.mode,r=Do({mode:"visible",children:r.children},o,0,null),s=xn(s,o,i,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&Fn(t,e.child,null,i),t.child.memoizedState=vi(i),t.memoizedState=gi,s);if((t.mode&1)===0)return No(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,s=Error(a(419)),r=pi(s,r,void 0),No(e,t,i,r)}if(u=(i&e.childLanes)!==0,tt||u){if(r=Ue,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,bt(e,o),kt(r,e,o,-1))}return bi(),r=pi(Error(a(421))),No(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=pf.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,lt=Gt(o.nextSibling),it=t,ve=!0,gt=null,e!==null&&(ut[ct++]=jt,ut[ct++]=At,ut[ct++]=cn,jt=e.id,At=e.overflow,cn=t),t=xi(t,r.children),t.flags|=4096,t)}function Eu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ks(e.return,t,n)}function wi(e,t,n,r,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=o)}function Su(e,t,n){var r=t.pendingProps,o=r.revealOrder,s=r.tail;if(Xe(e,t,r.children,n),r=xe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eu(e,n,t);else if(e.tag===19)Eu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(xe,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),wi(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&go(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}wi(t,!0,n,null,s);break;case"together":wi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function To(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ef(e,t,n){switch(t.tag){case 3:xu(t),Dn();break;case 5:Da(t);break;case 1:et(t.type)&&io(t);break;case 4:Zs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;de(po,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(de(xe,xe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?ku(e,t,n):(de(xe,xe.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);de(xe,xe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Su(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),de(xe,xe.current),r)break;return null;case 22:case 23:return t.lanes=0,yu(e,t,n)}return Dt(e,t,n)}var Nu,ki,Tu,_u;Nu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ki=function(){},Tu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,pn(_t.current);var s=null;switch(n){case"input":o=wn(e,o),r=wn(e,r),s=[];break;case"select":o=R({},o,{value:void 0}),r=R({},r,{value:void 0}),s=[];break;case"textarea":o=Zo(e,o),r=Zo(e,r),s=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ro)}ts(n,r);var i;n=null;for(g in o)if(!r.hasOwnProperty(g)&&o.hasOwnProperty(g)&&o[g]!=null)if(g==="style"){var u=o[g];for(i in u)u.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(v.hasOwnProperty(g)?s||(s=[]):(s=s||[]).push(g,null));for(g in r){var c=r[g];if(u=o?.[g],r.hasOwnProperty(g)&&c!==u&&(c!=null||u!=null))if(g==="style")if(u){for(i in u)!u.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&u[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(s||(s=[]),s.push(g,n)),n=c;else g==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(s=s||[]).push(g,c)):g==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(g,""+c):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(v.hasOwnProperty(g)?(c!=null&&g==="onScroll"&&me("scroll",e),s||u===c||(s=[])):(s=s||[]).push(g,c))}n&&(s=s||[]).push("style",n);var g=s;(t.updateQueue=g)&&(t.flags|=4)}},_u=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cr(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function tf(e,t,n){var r=t.pendingProps;switch(Ws(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return et(t.type)&&so(),qe(t),null;case 3:return r=t.stateNode,Bn(),he(Ze),he(Ge),ni(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(co(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,gt!==null&&(Pi(gt),gt=null))),ki(e,t),qe(t),null;case 5:ei(t);var o=pn(Er.current);if(n=t.type,e!==null&&t.stateNode!=null)Tu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(a(166));return qe(t),null}if(e=pn(_t.current),co(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Tt]=t,r[gr]=s,e=(t.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(o=0;o<mr.length;o++)me(mr[o],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":kn(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":ul(r,s),me("invalid",r)}ts(n,s),o=null;for(var i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="children"?typeof u=="string"?r.textContent!==u&&(s.suppressHydrationWarning!==!0&&no(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(s.suppressHydrationWarning!==!0&&no(r.textContent,u,e),o=["children",""+u]):v.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&me("scroll",r)}switch(n){case"input":St(r),al(r,s,!0);break;case"textarea":St(r),dl(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ro)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Tt]=t,e[gr]=r,Nu(e,t,!1,!1),t.stateNode=e;e:{switch(i=ns(n,r),n){case"dialog":me("cancel",e),me("close",e),o=r;break;case"iframe":case"object":case"embed":me("load",e),o=r;break;case"video":case"audio":for(o=0;o<mr.length;o++)me(mr[o],e);o=r;break;case"source":me("error",e),o=r;break;case"img":case"image":case"link":me("error",e),me("load",e),o=r;break;case"details":me("toggle",e),o=r;break;case"input":kn(e,r),o=wn(e,r),me("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=R({},r,{value:void 0}),me("invalid",e);break;case"textarea":ul(e,r),o=Zo(e,r),me("invalid",e);break;default:o=r}ts(n,o),u=o;for(s in u)if(u.hasOwnProperty(s)){var c=u[s];s==="style"?hl(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&pl(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Qn(e,c):typeof c=="number"&&Qn(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(v.hasOwnProperty(s)?c!=null&&s==="onScroll"&&me("scroll",e):c!=null&&ke(e,s,c,i))}switch(n){case"input":St(e),al(e,r,!1);break;case"textarea":St(e),dl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+T(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?En(e,!!r.multiple,s,!1):r.defaultValue!=null&&En(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ro)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)_u(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(a(166));if(n=pn(Er.current),pn(_t.current),co(t)){if(r=t.stateNode,n=t.memoizedProps,r[Tt]=t,(s=r.nodeValue!==n)&&(e=it,e!==null))switch(e.tag){case 3:no(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&no(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=t,t.stateNode=r}return qe(t),null;case 13:if(he(xe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&lt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Ia(),Dn(),t.flags|=98560,s=!1;else if(s=co(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(a(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(a(317));s[Tt]=t}else Dn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),s=!1}else gt!==null&&(Pi(gt),gt=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(xe.current&1)!==0?Me===0&&(Me=3):bi())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return Bn(),ki(e,t),e===null&&hr(t.stateNode.containerInfo),qe(t),null;case 10:return Qs(t.type._context),qe(t),null;case 17:return et(t.type)&&so(),qe(t),null;case 19:if(he(xe),s=t.memoizedState,s===null)return qe(t),null;if(r=(t.flags&128)!==0,i=s.rendering,i===null)if(r)Cr(s,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=go(e),i!==null){for(t.flags|=128,Cr(s,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return de(xe,xe.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ie()>Vn&&(t.flags|=128,r=!0,Cr(s,!1),t.lanes=4194304)}else{if(!r)if(e=go(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!ve)return qe(t),null}else 2*Ie()-s.renderingStartTime>Vn&&n!==1073741824&&(t.flags|=128,r=!0,Cr(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(n=s.last,n!==null?n.sibling=i:t.child=i,s.last=i)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ie(),t.sibling=null,n=xe.current,de(xe,r?n&1|2:n&1),t):(qe(t),null);case 22:case 23:return Ai(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(at&1073741824)!==0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function nf(e,t){switch(Ws(t),t.tag){case 1:return et(t.type)&&so(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bn(),he(Ze),he(Ge),ni(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ei(t),null;case 13:if(he(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));Dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(xe),null;case 4:return Bn(),null;case 10:return Qs(t.type._context),null;case 22:case 23:return Ai(),null;case 24:return null;default:return null}}var _o=!1,Qe=!1,rf=typeof WeakSet=="function"?WeakSet:Set,L=null;function Wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(e,t,r)}else n.current=null}function Ei(e,t,n){try{n()}catch(r){Se(e,t,r)}}var Cu=!1;function of(e,t){if(As=Vr,e=sa(),_s(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var i=0,u=-1,c=-1,g=0,E=0,S=e,k=null;t:for(;;){for(var C;S!==n||o!==0&&S.nodeType!==3||(u=i+o),S!==s||r!==0&&S.nodeType!==3||(c=i+r),S.nodeType===3&&(i+=S.nodeValue.length),(C=S.firstChild)!==null;)k=S,S=C;for(;;){if(S===e)break t;if(k===n&&++g===o&&(u=i),k===s&&++E===r&&(c=i),(C=S.nextSibling)!==null)break;S=k,k=S.parentNode}S=C}n=u===-1||c===-1?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(bs={focusedElem:e,selectionRange:n},Vr=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var O=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(O!==null){var P=O.memoizedProps,Le=O.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?P:vt(t.type,P),Le);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(N){Se(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return O=Cu,Cu=!1,O}function Rr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&Ei(t,n,s)}o=o.next}while(o!==r)}}function Co(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Si(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function Ru(e){var t=e.alternate;t!==null&&(e.alternate=null,Ru(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tt],delete t[gr],delete t[Us],delete t[zd],delete t[Bd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Iu(e){return e.tag===5||e.tag===3||e.tag===4}function Lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Iu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ni(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ro));else if(r!==4&&(e=e.child,e!==null))for(Ni(e,t,n),e=e.sibling;e!==null;)Ni(e,t,n),e=e.sibling}function Ti(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ti(e,t,n),e=e.sibling;e!==null;)Ti(e,t,n),e=e.sibling}var He=null,xt=!1;function Jt(e,t,n){for(n=n.child;n!==null;)Ou(e,t,n),n=n.sibling}function Ou(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Ur,n)}catch{}switch(n.tag){case 5:Qe||Wn(n,t);case 6:var r=He,o=xt;He=null,Jt(e,t,n),He=r,xt=o,He!==null&&(xt?(e=He,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(xt?(e=He,n=n.stateNode,e.nodeType===8?Fs(e.parentNode,n):e.nodeType===1&&Fs(e,n),ir(e)):Fs(He,n.stateNode));break;case 4:r=He,o=xt,He=n.stateNode.containerInfo,xt=!0,Jt(e,t,n),He=r,xt=o;break;case 0:case 11:case 14:case 15:if(!Qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var s=o,i=s.destroy;s=s.tag,i!==void 0&&((s&2)!==0||(s&4)!==0)&&Ei(n,t,i),o=o.next}while(o!==r)}Jt(e,t,n);break;case 1:if(!Qe&&(Wn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Se(n,t,u)}Jt(e,t,n);break;case 21:Jt(e,t,n);break;case 22:n.mode&1?(Qe=(r=Qe)||n.memoizedState!==null,Jt(e,t,n),Qe=r):Jt(e,t,n);break;default:Jt(e,t,n)}}function Pu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new rf),t.forEach(function(r){var o=mf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function wt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var s=e,i=t,u=i;e:for(;u!==null;){switch(u.tag){case 5:He=u.stateNode,xt=!1;break e;case 3:He=u.stateNode.containerInfo,xt=!0;break e;case 4:He=u.stateNode.containerInfo,xt=!0;break e}u=u.return}if(He===null)throw Error(a(160));Ou(s,i,o),He=null,xt=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(g){Se(o,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ju(t,e),t=t.sibling}function ju(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wt(t,e),Rt(e),r&4){try{Rr(3,e,e.return),Co(3,e)}catch(P){Se(e,e.return,P)}try{Rr(5,e,e.return)}catch(P){Se(e,e.return,P)}}break;case 1:wt(t,e),Rt(e),r&512&&n!==null&&Wn(n,n.return);break;case 5:if(wt(t,e),Rt(e),r&512&&n!==null&&Wn(n,n.return),e.flags&32){var o=e.stateNode;try{Qn(o,"")}catch(P){Se(e,e.return,P)}}if(r&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,i=n!==null?n.memoizedProps:s,u=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{u==="input"&&s.type==="radio"&&s.name!=null&&ll(o,s),ns(u,i);var g=ns(u,s);for(i=0;i<c.length;i+=2){var E=c[i],S=c[i+1];E==="style"?hl(o,S):E==="dangerouslySetInnerHTML"?pl(o,S):E==="children"?Qn(o,S):ke(o,E,S,g)}switch(u){case"input":Xo(o,s);break;case"textarea":cl(o,s);break;case"select":var k=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var C=s.value;C!=null?En(o,!!s.multiple,C,!1):k!==!!s.multiple&&(s.defaultValue!=null?En(o,!!s.multiple,s.defaultValue,!0):En(o,!!s.multiple,s.multiple?[]:"",!1))}o[gr]=s}catch(P){Se(e,e.return,P)}}break;case 6:if(wt(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(a(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(P){Se(e,e.return,P)}}break;case 3:if(wt(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ir(t.containerInfo)}catch(P){Se(e,e.return,P)}break;case 4:wt(t,e),Rt(e);break;case 13:wt(t,e),Rt(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(Ri=Ie())),r&4&&Pu(e);break;case 22:if(E=n!==null&&n.memoizedState!==null,e.mode&1?(Qe=(g=Qe)||E,wt(t,e),Qe=g):wt(t,e),Rt(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!E&&(e.mode&1)!==0)for(L=e,E=e.child;E!==null;){for(S=L=E;L!==null;){switch(k=L,C=k.child,k.tag){case 0:case 11:case 14:case 15:Rr(4,k,k.return);break;case 1:Wn(k,k.return);var O=k.stateNode;if(typeof O.componentWillUnmount=="function"){r=k,n=k.return;try{t=r,O.props=t.memoizedProps,O.state=t.memoizedState,O.componentWillUnmount()}catch(P){Se(r,n,P)}}break;case 5:Wn(k,k.return);break;case 22:if(k.memoizedState!==null){Mu(S);continue}}C!==null?(C.return=k,L=C):Mu(S)}E=E.sibling}e:for(E=null,S=e;;){if(S.tag===5){if(E===null){E=S;try{o=S.stateNode,g?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(u=S.stateNode,c=S.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=ml("display",i))}catch(P){Se(e,e.return,P)}}}else if(S.tag===6){if(E===null)try{S.stateNode.nodeValue=g?"":S.memoizedProps}catch(P){Se(e,e.return,P)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;E===S&&(E=null),S=S.return}E===S&&(E=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:wt(t,e),Rt(e),r&4&&Pu(e);break;case 21:break;default:wt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Iu(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Qn(o,""),r.flags&=-33);var s=Lu(e);Ti(e,s,o);break;case 3:case 4:var i=r.stateNode.containerInfo,u=Lu(e);Ni(e,u,i);break;default:throw Error(a(161))}}catch(c){Se(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sf(e,t,n){L=e,Au(e)}function Au(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,s=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||_o;if(!i){var u=o.alternate,c=u!==null&&u.memoizedState!==null||Qe;u=_o;var g=Qe;if(_o=i,(Qe=c)&&!g)for(L=o;L!==null;)i=L,c=i.child,i.tag===22&&i.memoizedState!==null?Du(o):c!==null?(c.return=i,L=c):Du(o);for(;s!==null;)L=s,Au(s),s=s.sibling;L=o,_o=u,Qe=g}bu(e)}else(o.subtreeFlags&8772)!==0&&s!==null?(s.return=o,L=s):bu(e)}}function bu(e){for(;L!==null;){var t=L;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Qe||Co(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Qe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:vt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Ma(t,s,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ma(t,i,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var E=g.memoizedState;if(E!==null){var S=E.dehydrated;S!==null&&ir(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Qe||t.flags&512&&Si(t)}catch(k){Se(t,t.return,k)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Mu(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Du(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Co(4,t)}catch(c){Se(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){Se(t,o,c)}}var s=t.return;try{Si(t)}catch(c){Se(t,s,c)}break;case 5:var i=t.return;try{Si(t)}catch(c){Se(t,i,c)}}}catch(c){Se(t,t.return,c)}if(t===e){L=null;break}var u=t.sibling;if(u!==null){u.return=t.return,L=u;break}L=t.return}}var lf=Math.ceil,Ro=Ne.ReactCurrentDispatcher,_i=Ne.ReactCurrentOwner,pt=Ne.ReactCurrentBatchConfig,re=0,Ue=null,je=null,We=0,at=0,$n=Yt(0),Me=0,Ir=null,hn=0,Io=0,Ci=0,Lr=null,nt=null,Ri=0,Vn=1/0,Ft=null,Lo=!1,Ii=null,Zt=null,Oo=!1,en=null,Po=0,Or=0,Li=null,jo=-1,Ao=0;function Je(){return(re&6)!==0?Ie():jo!==-1?jo:jo=Ie()}function tn(e){return(e.mode&1)===0?1:(re&2)!==0&&We!==0?We&-We:Wd.transition!==null?(Ao===0&&(Ao=Ll()),Ao):(e=le,e!==0||(e=window.event,e=e===void 0?16:Ul(e.type)),e)}function kt(e,t,n,r){if(50<Or)throw Or=0,Li=null,Error(a(185));tr(e,n,r),((re&2)===0||e!==Ue)&&(e===Ue&&((re&2)===0&&(Io|=n),Me===4&&nn(e,We)),rt(e,r),n===1&&re===0&&(t.mode&1)===0&&(Vn=Ie()+500,lo&&Qt()))}function rt(e,t){var n=e.callbackNode;Wc(e,t);var r=Hr(e,e===Ue?We:0);if(r===0)n!==null&&Cl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Cl(n),t===1)e.tag===0?Hd(Uu.bind(null,e)):Na(Uu.bind(null,e)),Fd(function(){(re&6)===0&&Qt()}),n=null;else{switch(Ol(r)){case 1:n=us;break;case 4:n=Rl;break;case 16:n=Fr;break;case 536870912:n=Il;break;default:n=Fr}n=Yu(n,Fu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Fu(e,t){if(jo=-1,Ao=0,(re&6)!==0)throw Error(a(327));var n=e.callbackNode;if(Gn()&&e.callbackNode!==n)return null;var r=Hr(e,e===Ue?We:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=bo(e,r);else{t=r;var o=re;re|=2;var s=Bu();(Ue!==e||We!==t)&&(Ft=null,Vn=Ie()+500,gn(e,t));do try{cf();break}catch(u){zu(e,u)}while(!0);qs(),Ro.current=s,re=o,je!==null?t=0:(Ue=null,We=0,t=Me)}if(t!==0){if(t===2&&(o=cs(e),o!==0&&(r=o,t=Oi(e,o))),t===1)throw n=Ir,gn(e,0),nn(e,r),rt(e,Ie()),n;if(t===6)nn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!af(o)&&(t=bo(e,r),t===2&&(s=cs(e),s!==0&&(r=s,t=Oi(e,s))),t===1))throw n=Ir,gn(e,0),nn(e,r),rt(e,Ie()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:vn(e,nt,Ft);break;case 3:if(nn(e,r),(r&130023424)===r&&(t=Ri+500-Ie(),10<t)){if(Hr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ds(vn.bind(null,e,nt,Ft),t);break}vn(e,nt,Ft);break;case 4:if(nn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-ht(r);s=1<<i,i=t[i],i>o&&(o=i),r&=~s}if(r=o,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lf(r/1960))-r,10<r){e.timeoutHandle=Ds(vn.bind(null,e,nt,Ft),r);break}vn(e,nt,Ft);break;case 5:vn(e,nt,Ft);break;default:throw Error(a(329))}}}return rt(e,Ie()),e.callbackNode===n?Fu.bind(null,e):null}function Oi(e,t){var n=Lr;return e.current.memoizedState.isDehydrated&&(gn(e,t).flags|=256),e=bo(e,t),e!==2&&(t=nt,nt=n,t!==null&&Pi(t)),e}function Pi(e){nt===null?nt=e:nt.push.apply(nt,e)}function af(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],s=o.getSnapshot;o=o.value;try{if(!yt(s(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t){for(t&=~Ci,t&=~Io,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function Uu(e){if((re&6)!==0)throw Error(a(327));Gn();var t=Hr(e,0);if((t&1)===0)return rt(e,Ie()),null;var n=bo(e,t);if(e.tag!==0&&n===2){var r=cs(e);r!==0&&(t=r,n=Oi(e,r))}if(n===1)throw n=Ir,gn(e,0),nn(e,t),rt(e,Ie()),n;if(n===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vn(e,nt,Ft),rt(e,Ie()),null}function ji(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===0&&(Vn=Ie()+500,lo&&Qt())}}function yn(e){en!==null&&en.tag===0&&(re&6)===0&&Gn();var t=re;re|=1;var n=pt.transition,r=le;try{if(pt.transition=null,le=1,e)return e()}finally{le=r,pt.transition=n,re=t,(re&6)===0&&Qt()}}function Ai(){at=$n.current,he($n)}function gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Dd(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(Ws(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&so();break;case 3:Bn(),he(Ze),he(Ge),ni();break;case 5:ei(r);break;case 4:Bn();break;case 13:he(xe);break;case 19:he(xe);break;case 10:Qs(r.type._context);break;case 22:case 23:Ai()}n=n.return}if(Ue=e,je=e=rn(e.current,null),We=at=t,Me=0,Ir=null,Ci=Io=hn=0,nt=Lr=null,fn!==null){for(t=0;t<fn.length;t++)if(n=fn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,s=n.pending;if(s!==null){var i=s.next;s.next=o,r.next=i}n.pending=r}fn=null}return e}function zu(e,t){do{var n=je;try{if(qs(),vo.current=Eo,xo){for(var r=we.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}xo=!1}if(mn=0,Fe=be=we=null,Sr=!1,Nr=0,_i.current=null,n===null||n.return===null){Me=1,Ir=t,je=null;break}e:{var s=e,i=n.return,u=n,c=t;if(t=We,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var g=c,E=u,S=E.tag;if((E.mode&1)===0&&(S===0||S===11||S===15)){var k=E.alternate;k?(E.updateQueue=k.updateQueue,E.memoizedState=k.memoizedState,E.lanes=k.lanes):(E.updateQueue=null,E.memoizedState=null)}var C=du(i);if(C!==null){C.flags&=-257,fu(C,i,u,s,t),C.mode&1&&cu(s,g,t),t=C,c=g;var O=t.updateQueue;if(O===null){var P=new Set;P.add(c),t.updateQueue=P}else O.add(c);break e}else{if((t&1)===0){cu(s,g,t),bi();break e}c=Error(a(426))}}else if(ve&&u.mode&1){var Le=du(i);if(Le!==null){(Le.flags&65536)===0&&(Le.flags|=256),fu(Le,i,u,s,t),Gs(Hn(c,u));break e}}s=c=Hn(c,u),Me!==4&&(Me=2),Lr===null?Lr=[s]:Lr.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=au(s,c,t);ba(s,m);break e;case 1:u=c;var d=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Zt===null||!Zt.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var N=uu(s,u,t);ba(s,N);break e}}s=s.return}while(s!==null)}Wu(n)}catch(j){t=j,je===n&&n!==null&&(je=n=n.return);continue}break}while(!0)}function Bu(){var e=Ro.current;return Ro.current=Eo,e===null?Eo:e}function bi(){(Me===0||Me===3||Me===2)&&(Me=4),Ue===null||(hn&268435455)===0&&(Io&268435455)===0||nn(Ue,We)}function bo(e,t){var n=re;re|=2;var r=Bu();(Ue!==e||We!==t)&&(Ft=null,gn(e,t));do try{uf();break}catch(o){zu(e,o)}while(!0);if(qs(),re=n,Ro.current=r,je!==null)throw Error(a(261));return Ue=null,We=0,Me}function uf(){for(;je!==null;)Hu(je)}function cf(){for(;je!==null&&!Ac();)Hu(je)}function Hu(e){var t=Gu(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?Wu(e):je=t,_i.current=null}function Wu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=tf(n,t,at),n!==null){je=n;return}}else{if(n=nf(n,t),n!==null){n.flags&=32767,je=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,je=null;return}}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);Me===0&&(Me=5)}function vn(e,t,n){var r=le,o=pt.transition;try{pt.transition=null,le=1,df(e,t,n,r)}finally{pt.transition=o,le=r}return null}function df(e,t,n,r){do Gn();while(en!==null);if((re&6)!==0)throw Error(a(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if($c(e,s),e===Ue&&(je=Ue=null,We=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Oo||(Oo=!0,Yu(Fr,function(){return Gn(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=pt.transition,pt.transition=null;var i=le;le=1;var u=re;re|=4,_i.current=null,of(e,n),ju(n,e),Ld(bs),Vr=!!As,bs=As=null,e.current=n,sf(n),bc(),re=u,le=i,pt.transition=s}else e.current=n;if(Oo&&(Oo=!1,en=e,Po=o),s=e.pendingLanes,s===0&&(Zt=null),Fc(n.stateNode),rt(e,Ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Lo)throw Lo=!1,e=Ii,Ii=null,e;return(Po&1)!==0&&e.tag!==0&&Gn(),s=e.pendingLanes,(s&1)!==0?e===Li?Or++:(Or=0,Li=e):Or=0,Qt(),null}function Gn(){if(en!==null){var e=Ol(Po),t=pt.transition,n=le;try{if(pt.transition=null,le=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,Po=0,(re&6)!==0)throw Error(a(331));var o=re;for(re|=4,L=e.current;L!==null;){var s=L,i=s.child;if((L.flags&16)!==0){var u=s.deletions;if(u!==null){for(var c=0;c<u.length;c++){var g=u[c];for(L=g;L!==null;){var E=L;switch(E.tag){case 0:case 11:case 15:Rr(8,E,s)}var S=E.child;if(S!==null)S.return=E,L=S;else for(;L!==null;){E=L;var k=E.sibling,C=E.return;if(Ru(E),E===g){L=null;break}if(k!==null){k.return=C,L=k;break}L=C}}}var O=s.alternate;if(O!==null){var P=O.child;if(P!==null){O.child=null;do{var Le=P.sibling;P.sibling=null,P=Le}while(P!==null)}}L=s}}if((s.subtreeFlags&2064)!==0&&i!==null)i.return=s,L=i;else e:for(;L!==null;){if(s=L,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Rr(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,L=m;break e}L=s.return}}var d=e.current;for(L=d;L!==null;){i=L;var y=i.child;if((i.subtreeFlags&2064)!==0&&y!==null)y.return=i,L=y;else e:for(i=d;L!==null;){if(u=L,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:Co(9,u)}}catch(j){Se(u,u.return,j)}if(u===i){L=null;break e}var N=u.sibling;if(N!==null){N.return=u.return,L=N;break e}L=u.return}}if(re=o,Qt(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Ur,e)}catch{}r=!0}return r}finally{le=n,pt.transition=t}}return!1}function $u(e,t,n){t=Hn(n,t),t=au(e,t,1),e=Xt(e,t,1),t=Je(),e!==null&&(tr(e,1,t),rt(e,t))}function Se(e,t,n){if(e.tag===3)$u(e,e,n);else for(;t!==null;){if(t.tag===3){$u(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=Hn(n,e),e=uu(t,e,1),t=Xt(t,e,1),e=Je(),t!==null&&(tr(t,1,e),rt(t,e));break}}t=t.return}}function ff(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,Ue===e&&(We&n)===n&&(Me===4||Me===3&&(We&130023424)===We&&500>Ie()-Ri?gn(e,0):Ci|=n),rt(e,t)}function Vu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Br,Br<<=1,(Br&130023424)===0&&(Br=4194304)));var n=Je();e=bt(e,t),e!==null&&(tr(e,t,n),rt(e,n))}function pf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vu(e,n)}function mf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}r!==null&&r.delete(t),Vu(e,n)}var Gu;Gu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)tt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return tt=!1,ef(e,t,n);tt=(e.flags&131072)!==0}else tt=!1,ve&&(t.flags&1048576)!==0&&Ta(t,uo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;To(e,t),e=t.pendingProps;var o=An(t,Ge.current);zn(t,n),o=si(null,t,r,e,o,n);var s=ii();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(r)?(s=!0,io(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Js(t),o.updater=So,t.stateNode=o,o._reactInternals=t,fi(t,r,e,n),t=yi(null,t,r,!0,s,n)):(t.tag=0,ve&&s&&Hs(t),Xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(To(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=yf(r),e=vt(r,e),o){case 0:t=hi(null,t,r,e,n);break e;case 1:t=vu(null,t,r,e,n);break e;case 11:t=pu(null,t,r,e,n);break e;case 14:t=mu(null,t,r,vt(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),hi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),vu(e,t,r,o,n);case 3:e:{if(xu(t),e===null)throw Error(a(387));r=t.pendingProps,s=t.memoizedState,o=s.element,Aa(e,t),yo(t,r,null,n);var i=t.memoizedState;if(r=i.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=Hn(Error(a(423)),t),t=wu(e,t,r,n,o);break e}else if(r!==o){o=Hn(Error(a(424)),t),t=wu(e,t,r,n,o);break e}else for(lt=Gt(t.stateNode.containerInfo.firstChild),it=t,ve=!0,gt=null,n=Pa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Dn(),r===o){t=Dt(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return Da(t),e===null&&Vs(t),r=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,i=o.children,Ms(r,o)?i=null:s!==null&&Ms(r,s)&&(t.flags|=32),gu(e,t),Xe(e,t,i,n),t.child;case 6:return e===null&&Vs(t),null;case 13:return ku(e,t,n);case 4:return Zs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fn(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),pu(e,t,r,o,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,s=t.memoizedProps,i=o.value,de(po,r._currentValue),r._currentValue=i,s!==null)if(yt(s.value,i)){if(s.children===o.children&&!Ze.current){t=Dt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var u=s.dependencies;if(u!==null){i=s.child;for(var c=u.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Mt(-1,n&-n),c.tag=2;var g=s.updateQueue;if(g!==null){g=g.shared;var E=g.pending;E===null?c.next=c:(c.next=E.next,E.next=c),g.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Ks(s.return,n,t),u.lanes|=n;break}c=c.next}}else if(s.tag===10)i=s.type===t.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(a(341));i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ks(i,n,t),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===t){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}Xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,zn(t,n),o=dt(o),r=r(o),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,o=vt(r,t.pendingProps),o=vt(r.type,o),mu(e,t,r,o,n);case 15:return hu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),To(e,t),t.tag=1,et(r)?(e=!0,io(t)):e=!1,zn(t,n),iu(t,r,o),fi(t,r,o,n),yi(null,t,r,!0,e,n);case 19:return Su(e,t,n);case 22:return yu(e,t,n)}throw Error(a(156,t.tag))};function Yu(e,t){return _l(e,t)}function hf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,r){return new hf(e,t,n,r)}function Mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yf(e){if(typeof e=="function")return Mi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$)return 11;if(e===Ce)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mo(e,t,n,r,o,s){var i=2;if(r=e,typeof e=="function")Mi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case _e:return xn(n.children,o,s,t);case Ve:i=8,o|=8;break;case Be:return e=mt(12,n,t,o|2),e.elementType=Be,e.lanes=s,e;case G:return e=mt(13,n,t,o),e.elementType=G,e.lanes=s,e;case ae:return e=mt(19,n,t,o),e.elementType=ae,e.lanes=s,e;case pe:return Do(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case W:i=10;break e;case fe:i=9;break e;case $:i=11;break e;case Ce:i=14;break e;case ue:i=16,r=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=mt(i,n,t,o),t.elementType=e,t.type=r,t.lanes=s,t}function xn(e,t,n,r){return e=mt(7,e,r,t),e.lanes=n,e}function Do(e,t,n,r){return e=mt(22,e,r,t),e.elementType=pe,e.lanes=n,e.stateNode={isHidden:!1},e}function Di(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function Fi(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ds(0),this.expirationTimes=ds(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ds(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ui(e,t,n,r,o,s,i,u,c){return e=new gf(e,t,n,u,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=mt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Js(s),e}function vf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ee,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qu(e){if(!e)return qt;e=e._reactInternals;e:{if(ln(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var n=e.type;if(et(n))return Ea(e,n,t)}return t}function Qu(e,t,n,r,o,s,i,u,c){return e=Ui(n,r,!0,e,o,s,i,u,c),e.context=qu(null),n=e.current,r=Je(),o=tn(n),s=Mt(r,o),s.callback=t??null,Xt(n,s,o),e.current.lanes=o,tr(e,o,r),rt(e,r),e}function Fo(e,t,n,r){var o=t.current,s=Je(),i=tn(o);return n=qu(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(s,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Xt(o,t,i),e!==null&&(kt(e,o,i,s),ho(e,o,i)),i}function Uo(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Ku(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zi(e,t){Ku(e,t),(e=e.alternate)&&Ku(e,t)}function xf(){return null}var Xu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bi(e){this._internalRoot=e}zo.prototype.render=Bi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));Fo(e,t,null,null)},zo.prototype.unmount=Bi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yn(function(){Fo(null,e,null,null)}),t[Ot]=null}};function zo(e){this._internalRoot=e}zo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Al();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wt.length&&t!==0&&t<Wt[n].priority;n++);Wt.splice(n,0,e),n===0&&Dl(e)}};function Hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ju(){}function wf(e,t,n,r,o){if(o){if(typeof r=="function"){var s=r;r=function(){var g=Uo(i);s.call(g)}}var i=Qu(t,r,e,0,null,!1,!1,"",Ju);return e._reactRootContainer=i,e[Ot]=i.current,hr(e.nodeType===8?e.parentNode:e),yn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var g=Uo(c);u.call(g)}}var c=Ui(e,0,!1,null,null,!1,!1,"",Ju);return e._reactRootContainer=c,e[Ot]=c.current,hr(e.nodeType===8?e.parentNode:e),yn(function(){Fo(t,c,n,r)}),c}function Ho(e,t,n,r,o){var s=n._reactRootContainer;if(s){var i=s;if(typeof o=="function"){var u=o;o=function(){var c=Uo(i);u.call(c)}}Fo(t,i,e,o)}else i=wf(n,t,e,o,r);return Uo(i)}Pl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=er(t.pendingLanes);n!==0&&(fs(t,n|1),rt(t,Ie()),(re&6)===0&&(Vn=Ie()+500,Qt()))}break;case 13:yn(function(){var r=bt(e,1);if(r!==null){var o=Je();kt(r,e,1,o)}}),zi(e,1)}},ps=function(e){if(e.tag===13){var t=bt(e,134217728);if(t!==null){var n=Je();kt(t,e,134217728,n)}zi(e,134217728)}},jl=function(e){if(e.tag===13){var t=tn(e),n=bt(e,t);if(n!==null){var r=Je();kt(n,e,t,r)}zi(e,t)}},Al=function(){return le},bl=function(e,t){var n=le;try{return le=e,t()}finally{le=n}},ss=function(e,t,n){switch(t){case"input":if(Xo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=oo(r);if(!o)throw Error(a(90));Re(r),Xo(r,o)}}}break;case"textarea":cl(e,n);break;case"select":t=n.value,t!=null&&En(e,!!n.multiple,t,!1)}},xl=ji,wl=yn;var kf={usingClientEntryPoint:!1,Events:[vr,Pn,oo,gl,vl,ji]},Pr={findFiberByHostInstance:an,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ef={bundleType:Pr.bundleType,version:Pr.version,rendererPackageName:Pr.rendererPackageName,rendererConfig:Pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nl(e),e===null?null:e.stateNode},findFiberByHostInstance:Pr.findFiberByHostInstance||xf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wo.isDisabled&&Wo.supportsFiber)try{Ur=Wo.inject(Ef),Nt=Wo}catch{}}return ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kf,ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hi(t))throw Error(a(200));return vf(e,t,null,n)},ot.createRoot=function(e,t){if(!Hi(e))throw Error(a(299));var n=!1,r="",o=Xu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ui(e,1,!1,null,null,n,!1,r,o),e[Ot]=t.current,hr(e.nodeType===8?e.parentNode:e),new Bi(t)},ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=Nl(t),e=e===null?null:e.stateNode,e},ot.flushSync=function(e){return yn(e)},ot.hydrate=function(e,t,n){if(!Bo(t))throw Error(a(200));return Ho(null,e,t,!0,n)},ot.hydrateRoot=function(e,t,n){if(!Hi(e))throw Error(a(405));var r=n!=null&&n.hydratedSources||null,o=!1,s="",i=Xu;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Qu(t,null,e,1,n??null,o,!1,s,i),e[Ot]=t.current,hr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new zo(t)},ot.render=function(e,t,n){if(!Bo(t))throw Error(a(200));return Ho(null,e,t,!1,n)},ot.unmountComponentAtNode=function(e){if(!Bo(e))throw Error(a(40));return e._reactRootContainer?(yn(function(){Ho(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1},ot.unstable_batchedUpdates=ji,ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Bo(n))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return Ho(e,t,n,!1,r)},ot.version="18.3.1-next-f1338f8080-20240426",ot}var ic;function Of(){if(ic)return Vi.exports;ic=1;function f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)}catch(h){console.error(h)}}return f(),Vi.exports=Lf(),Vi.exports}var lc;function Pf(){if(lc)return $o;lc=1;var f=Of();return $o.createRoot=f.createRoot,$o.hydrateRoot=f.hydrateRoot,$o}var jf=Pf();const Af=pc(jf);const bf=f=>f.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mc=(...f)=>f.filter((h,a,x)=>!!h&&x.indexOf(h)===a).join(" ");var Mf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Df=te.forwardRef(({color:f="currentColor",size:h=24,strokeWidth:a=2,absoluteStrokeWidth:x,className:v="",children:I,iconNode:A,...M},D)=>te.createElement("svg",{ref:D,...Mf,width:h,height:h,stroke:f,strokeWidth:x?Number(a)*24/Number(h):a,className:mc("lucide",v),...M},[...A.map(([K,ne])=>te.createElement(K,ne)),...Array.isArray(I)?I:[I]]));const ye=(f,h)=>{const a=te.forwardRef(({className:x,...v},I)=>te.createElement(Df,{ref:I,iconNode:h,className:mc(`lucide-${bf(f)}`,x),...v}));return a.displayName=`${f}`,a};const hc=ye("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);const Ff=ye("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);const Uf=ye("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);const zf=ye("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);const ac=ye("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const Go=ye("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);const uc=ye("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);const cc=ye("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);const Bf=ye("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);const Hf=ye("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);const Qo=ye("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);const el=ye("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);const Wf=ye("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);const yc=ye("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);const $f=ye("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);const dc=ye("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);const Yn=ye("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);const Vf=ye("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const tl=ye("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);const Xi=ye("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);const Ji=ye("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);const Gf=ye("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const Yf=ye("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);const nl=ye("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);const gc=ye("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),It=[{id:"m1",title:"Foundations",icon:"Code2",topics:[{id:"m1-t1",title:"1.1 Variables, Types & Coercion",kind:"python",content:`A variable points to a value. No declaration. No type written. Python figures it out.

price = 250
name  = 'Don'

The 5 types that cover 95% of real work:

- int    — 5, 1800, -3
- float  — 3.14, 0.0
- str    — 'paid'
- bool   — True / False
- None   — "nothing here" — what missing values often start life as

Check a type:  type(price)  →  <class 'int'>

Coercion matters when CSVs arrive dirty. Strings that look like numbers won't math:

'250' + '100'  →  '250100'        (concatenation, not addition)
int('250') + 100  →  350           (now it adds)
float('3.14')  →  3.14
str(250)       →  '250'

In pandas this becomes  df['gmv'].astype(int)  or  pd.to_numeric(df['gmv']).`,exercisePrompt:"Create a variable customer_age set to the integer 35. Then write the one-liner that prints its type."},{id:"m1-t2",title:"1.2 F-strings & String Methods",kind:"python",content:`F-strings are the modern way to build strings. Prefix the quote with f, drop variables in { }:

city = 'Bangkok'
print(f'Welcome to {city.upper()}')   # → Welcome to BANGKOK

Five string methods pandas applies across whole columns via .str:

.strip()             remove leading/trailing whitespace
.lower() / .upper()  change case
.replace('a','b')    substitute
.split(',')          → list
.startswith('TH')    → bool

In pandas:  df['country'].str.lower().str.strip()
This is column-wide vectorised work. No loops.`,exercisePrompt:"Using an f-string, build the string 'Welcome to BANGKOK' from a variable city = 'bangkok'. Use .upper() inside the f-string."},{id:"m1-t3",title:"1.3 Numbers & Arithmetic",kind:"python",content:`The operators:  +  -  *  /  //  %  **

  /    true division     7 / 2  → 3.5
  //   floor division    7 // 2 → 3
  %    modulo            7 % 2  → 1
  **   exponent          2 ** 8 → 256

divmod(a, b) → (a // b, a % b) — one call for both. Useful for unit conversion.

round(x, n) — banker's rounding (round-half-to-even). round(2.5) → 2, round(3.5) → 4. Surprises people. For ordinary rounding use math.floor / math.ceil when you mean it specifically.

Order of operations follows maths:  **  before  *  /  before  +  -. When in doubt, parens.

Integers are arbitrary-precision in Python (no overflow). Floats are IEEE 754 — 0.1 + 0.2 != 0.3. We'll fix that in 1.4.`,exercisePrompt:"Compute the total number of seconds in 2 hr 15 min 7 sec using arithmetic (no string parsing). End with the expression to print it."},{id:"m1-t4",title:"1.4 Comparison & Equality",kind:"python",content:`Operators:  ==  !=  <  >  <=  >=

==  vs  is :
  ==   compares VALUES.   'abc' == 'abc'  → True
  is   compares IDENTITY (same object in memory). Use only for None, True, False.

  x = [1,2,3]; y = [1,2,3]
  x == y  → True
  x is y  → False   (different objects)

Floating-point trap:
  0.1 + 0.2 == 0.3   → False    (it's 0.30000000000000004)
  import math
  math.isclose(0.1 + 0.2, 0.3)   → True

Chained comparisons read naturally:
  if 0 < score < 100:    # instead of:  if score > 0 and score < 100:

In pandas you never use == on series for missing values — use .isna() / .notna(). NaN == NaN is False, always.`,exercisePrompt:'In one expression, check whether (0.1 + 0.2) and 0.3 are "equal enough". Use math.isclose. End with the expression.'},{id:"m1-t5",title:"1.5 if / elif / else",kind:"python",content:`Branch on a condition. Python uses indentation, no braces.

  if gmv > 1000:
      tier = 'large'
  elif gmv > 100:
      tier = 'medium'
  else:
      tier = 'small'

Conditions are anything Truthy / Falsy (covered in 1.9).

PROFESSIONAL TIP — prefer EARLY RETURNS over deeply nested ifs:

  # painful
  def grade(x):
      if x is not None:
          if x > 0:
              if x < 100:
                  return 'ok'
              return 'too big'
          return 'negative'
      return None

  # readable
  def grade(x):
      if x is None: return None
      if x <= 0:    return 'negative'
      if x >= 100:  return 'too big'
      return 'ok'

When you find yourself 3+ levels deep, refactor.`,exercisePrompt:"Write a function tier(gmv) that returns 'small' if gmv < 100, 'medium' if 100 <= gmv < 1000, and 'large' if gmv >= 1000. Then call tier(750) at the end so Run shows the result."},{id:"m1-t6",title:"1.6 for Loops & range",kind:"python",content:`The Python for loop iterates over a sequence — it's a foreach, not a counter loop.

  for status in ['paid', 'cancelled', 'pending']:
      print(status)

range(stop) / range(start, stop) / range(start, stop, step):

  for i in range(5):          # 0, 1, 2, 3, 4
  for i in range(1, 6):       # 1, 2, 3, 4, 5
  for i in range(0, 10, 2):   # 0, 2, 4, 6, 8

Looping a dict yields keys (use .items() for key + value):

  for k in customer:           # k = 'name', 'spend', ...
  for k, v in customer.items():

WHY YOU'LL ABANDON FOR LOOPS LATER: in pandas, iterating row-by-row is 100× slower than vectorised ops. We learn loops to read code, not to write data pipelines.`,exercisePrompt:"Given  prices = [250, 480, 1200, 99], compute the total using a for loop and end with that total. (Yes — vectorised is better; this is the for-loop drill.)"},{id:"m1-t7",title:"1.7 while + break / continue",kind:"python",content:`A while loop runs until its condition is False. Use when you don't know the iteration count in advance.

  total = 0
  i = 0
  while total < 1000 and i < len(prices):
      total += prices[i]
      i += 1

break exits the loop entirely. continue skips to the next iteration.

  for p in prices:
      if p < 50:        continue       # skip small ones
      if p > 5000:      break          # stop if outlier
      process(p)

INFINITE LOOP HAZARD — if you forget to advance the loop variable:

  while True:
      do_thing()        # never exits without break inside

Use while sparingly. 90% of the time a for + range is clearer.`,exercisePrompt:"Given  prices = [250, 480, 1200, 99, 1500]: use a while loop to find the FIRST INDEX where the running total exceeds 1000. End with that index."},{id:"m1-t8",title:"1.8 Functions: def, return, defaults",kind:"python",content:`A function is a named block of code that takes inputs and returns an output.

  def aov(gmv_list):
      if not gmv_list:
          return 0
      return sum(gmv_list) / len(gmv_list)

  aov([250, 480, 1200])   # → 643.33

Default arguments:
  def greet(name, greeting='Hello'):
      return f'{greeting}, {name}!'

THE MUTABLE-DEFAULT TRAP — bites every beginner once:

  def add(item, bag=[]):       # SHARED across all calls!
      bag.append(item)
      return bag

  add(1)  # [1]
  add(2)  # [1, 2]   ← surprise

Fix: use None as the sentinel.

  def add(item, bag=None):
      if bag is None: bag = []
      bag.append(item)
      return bag`,exercisePrompt:"Write a function aov(gmv_list) that returns the mean of the list, or 0 if the list is empty. Then call  aov([250, 480, 1200])  at the end so Run shows the result."},{id:"m1-t9",title:"1.9 None, Truthiness & Falsy Values",kind:"python",content:`None is Python's "no value." Different from False, 0, and ''.

The SIX FALSY values you should memorise — these are False in a boolean context:

  False
  None
  0     (and 0.0)
  ''    (empty string)
  []    (empty list)
  {}    (empty dict / set)

Everything else is Truthy.

Idiomatic null checks:

  if x is None:          # always use 'is' for None, not '=='
  if not items:          # empty list/None — both handled
  result = x if x is not None else fallback

In pandas, None-vs-NaN distinction blurs — both register as missing via .isna(). Don't compare to None with == on a column; use the methods.`,exercisePrompt:"Write a function  first_present(values)  that returns the first non-None value, or None if all are None. Call it with  [None, None, 42, None]  so Run shows the result."},{id:"m1-t10",title:"1.10 print vs return — Debugging Right",kind:"python",content:`THIS IS THE #1 BEGINNER CONFUSION.

print(x) puts a string on the console — it's for humans looking at output.
return x hands a value back to whoever called the function — it's for the program.

  def add(a, b):
      print(a + b)        # prints — but returns None!

  result = add(2, 3)      # prints 5
  result + 1              # TypeError: unsupported operand type(s)

  def add(a, b):
      return a + b        # now it RETURNS

  result = add(2, 3)
  result + 1              # → 6

Rule of thumb: in a function body, use return for values, print only for ad-hoc debugging.

In notebooks (Jupyter, this sandbox), the LAST expression is auto-displayed — no print needed for inspection.`,exercisePrompt:"Here is broken code:  def gmv_sum(x, y): print(x + y) . In one sentence, why is it wrong? Then write the fixed version and end with  gmv_sum(250, 480) + 100 ."},{id:"m1-t11",title:"1.11 try / except — Handling Dirty Data",kind:"python",content:`Code that touches real-world data WILL hit exceptions: malformed CSVs, missing keys, weird Unicode. Handle them on purpose, not by crashing.

  try:
      n = int(raw_value)
  except ValueError:
      n = None        # default for un-parseable input

Catch SPECIFIC exceptions — never  except:  bare (it eats KeyboardInterrupt and bugs).

The common ones for data work:
  ValueError       — parse failures (int(), float())
  KeyError         — dict missing key
  IndexError       — list out of range
  TypeError        — wrong type passed
  ZeroDivisionError — denom is 0

finally — runs no matter what (cleanup):
  try:
      f = open(path)
      ...
  finally:
      f.close()

In pandas you rarely write try/except — you use .fillna() or pd.to_numeric(errors='coerce') instead. Knowing both gives you options.`,exercisePrompt:"Write a function  safe_int(x)  that returns int(x) on success and None on ValueError. Call  safe_int('250')  and  safe_int('oops')  and end with  [safe_int('250'), safe_int('oops')] ."},{id:"m1-t12",title:"1.12 Imports & the Stdlib You'll Actually Use",kind:"python",content:`Three import forms:

  import math               # full module — call as math.sqrt(9)
  from datetime import date # named import — call as date.today()
  import numpy as np        # aliased — np.array(...)

NEVER  from x import *  — pollutes your namespace, breaks tooling.

The standard-library modules that show up in analyst work:

  math        — sqrt, ceil, floor, isclose, log, exp
  datetime    — date, datetime, timedelta
  json        — loads (parse), dumps (serialise)
  collections — Counter, defaultdict, OrderedDict
  itertools   — chain, combinations, groupby
  csv         — reader, writer (rarely needed once you have pandas)
  statistics  — mean, median, stdev (small samples)
  re          — regex — sparingly

External essentials: pandas (pd), numpy (np), matplotlib (plt), seaborn (sns).`,exercisePrompt:"Using only the standard library (datetime), compute the number of days between  date(2025, 1, 1)  and  date(2025, 5, 14) . End with that integer."}]},{id:"m2",title:"Collections",icon:"Layers",topics:[{id:"m2-t1",title:"2.1 Lists & Slicing",kind:"python",content:`A list is an ordered, mutable sequence in square brackets.

prices = [250, 480, 1200, 99]

This is structurally a pandas Series — values + positional index starting at 0.

Indexing:
  prices[0]    → 250        (first)
  prices[-1]   → 99         (last)

Slicing  list[start:stop]  — stop is EXCLUSIVE:
  prices[1:3]  → [480, 1200]
  prices[:2]   → [250, 480]
  prices[-2:]  → [1200, 99]

A list of lists is a 2D table — which is exactly what pd.DataFrame() will turn into rows and columns.`,exercisePrompt:"Given  nums = [10, 20, 30, 40, 50]  — write the slice expression that returns [20, 30, 40]. (Define nums first so Run works.)"},{id:"m2-t2",title:"2.2 Dictionaries → DataFrames",kind:"concept",content:`A dict is a key→value lookup in curly braces.

customer = {'name': 'Don', 'spend': 1250}
customer['name']            → 'Don'
customer.get('phone','n/a') → 'n/a'  (safe — no crash if key missing)

A LIST OF DICTS is the most common raw-data shape — every API response, every JSON file. It feeds straight into pandas:

orders = [
  {'order_id': 1, 'gmv': 250, 'status': 'paid'},
  {'order_id': 2, 'gmv': 1800, 'status': 'cancelled'},
]
df = pd.DataFrame(orders)

Each dict becomes a row. Each key becomes a column. This is the bridge from raw JSON to a queryable table.`,exercisePrompt:"In your own words: what's the difference between  customer['email']  and  customer.get('email')  when the key 'email' doesn't exist? Which one is safer and why?"},{id:"m2-t3",title:"2.3 List Methods: append, extend, sort, reverse",kind:"python",content:`prices = [250, 480]

  prices.append(99)         # → [250, 480, 99]
  prices.extend([1, 2])     # → [250, 480, 99, 1, 2]   adds elements
  prices + [1, 2]           # → new list, doesn't mutate
  prices.insert(0, 0)       # at index 0
  prices.remove(250)        # by value, first match (ValueError if absent)
  prices.pop()              # remove + return last
  prices.pop(0)             # remove + return first

Sorting:
  prices.sort()             # IN-PLACE, returns None
  prices.sort(reverse=True)
  sorted(prices)            # NEW list, leaves original alone
  prices.reverse()          # in-place
  list(reversed(prices))    # new reversed list

GOTCHA: list.sort() returns None. This bites people:

  result = my_list.sort()   # result is None!
  result = sorted(my_list)  # correct

Default to sorted() unless you specifically need in-place for performance.`,exercisePrompt:"Given  prices = [250, 480, 1200, 99] , return a NEW list sorted DESCENDING without modifying  prices . End with the sorted-descending list."},{id:"m2-t4",title:"2.4 Tuples vs Lists",kind:"python",content:`Tuple: ordered, IMMUTABLE.
  point = (3, 5)
  point[0]      # → 3
  point[0] = 4  # TypeError

List: ordered, mutable.
  scores = [90, 85]
  scores[0] = 95

When to use TUPLES:
- Fixed-size records: (lat, lon), (year, month, day)
- Multiple return values: return min_val, max_val
- Dict keys (lists can't be dict keys — they're mutable)

UNPACKING — works on tuples, lists, any iterable:
  lo, hi = (10, 90)
  for k, v in customer.items():   # tuple unpacking
  a, *rest = [1, 2, 3, 4]         # a=1, rest=[2,3,4]

Named tuples (when you want field names without writing a class):
  from collections import namedtuple
  Order = namedtuple('Order', 'id gmv status')
  o = Order(5001, 250, 'paid')
  o.gmv  # → 250

In real work, dataclasses or just dicts often beat namedtuples — but you'll see them in interview code.`,exercisePrompt:"Write a function  minmax(values)  that returns  (min, max)  as a tuple. Call it on  [3, 1, 4, 1, 5, 9, 2, 6]  and end with the result."},{id:"m2-t5",title:"2.5 Sets — Uniqueness Operations",kind:"python",content:`A set is an unordered collection of UNIQUE items.

  countries = {'TH', 'SG', 'MY'}
  countries.add('VN')           # add one
  countries.remove('VN')        # KeyError if missing
  countries.discard('XX')       # silent if missing
  'TH' in countries             # O(1) membership test

SET MATH — mirrors SQL set operators:
  a | b      union           (UNION)
  a & b      intersection    (INTERSECT)
  a - b      difference      (EXCEPT)
  a ^ b      symmetric diff  (XOR)

PERFORMANCE WIN — \`x in some_set\` is O(1); \`x in some_list\` is O(n). For "is this value in this big collection?" use a set.

Dedupe a list:
  list(set(items))             # order NOT preserved
  list(dict.fromkeys(items))   # order-preserving dedupe (Py 3.7+)

Empty set literal is  set()  — \`{}\` is an empty DICT.`,exercisePrompt:"Given  a = [1, 2, 3, 4, 5]  and  b = [4, 5, 6, 7] , return a list of values that appear in BOTH (intersection). Use sets. End with the result."},{id:"m2-t6",title:"2.6 Dict Iteration: keys / values / items",kind:"python",content:`customer = {'name': 'Don', 'spend': 1250, 'country': 'TH'}

Three views:
  customer.keys()    # → dict_keys(['name', 'spend', 'country'])
  customer.values()  # → dict_values(['Don', 1250, 'TH'])
  customer.items()   # → dict_items([('name','Don'), ...])

Iteration:
  for k in customer:               # implicit .keys()
  for v in customer.values():
  for k, v in customer.items():    # most common

Membership:
  'name' in customer               # checks KEYS (not values)
  1250 in customer.values()

Sort a dict by value (returns list of tuples):
  sorted(customer.items(), key=lambda kv: kv[1])

Reverse a dict (swap keys/values):
  {v: k for k, v in customer.items()}

(Assumes values are unique — duplicates silently overwrite.)`,exercisePrompt:"Given  orders_by_status = {'paid': 12, 'cancelled': 3, 'pending': 7} , return the status with the HIGHEST count. End with the status string."},{id:"m2-t7",title:"2.7 Dict Merging",kind:"python",content:`Three ways, modern-first:

Python 3.9+ pipe operator:
  combined = a | b          # right wins on conflicts

Python 3.5+ spread:
  combined = {**a, **b}     # same semantics — right wins

dict.update (MUTATES left):
  a.update(b)               # a now also contains b's keys

The bread-and-butter pattern — merge a defaults dict with overrides:

  defaults = {'limit': 100, 'offset': 0, 'order': 'asc'}
  user_opts = {'limit': 50}
  config = defaults | user_opts
  # → {'limit': 50, 'offset': 0, 'order': 'asc'}

For NESTED dicts, the merge is SHALLOW — inner dicts get replaced, not merged. Use a recursive helper if you need deep merge.`,exercisePrompt:"Define  defaults = {'limit': 100, 'offset': 0}  and  overrides = {'limit': 50, 'sort': 'gmv'} . Merge so overrides win, without mutating either. End with the merged dict."},{id:"m2-t8",title:"2.8 Nested Data: lists of dicts, dicts of dicts",kind:"python",content:`Real-world data is rarely flat.

LIST OF DICTS — JSON arrays, the natural shape for tables:

  orders = [
      {'order_id': 1, 'gmv': 250, 'status': 'paid'},
      {'order_id': 2, 'gmv': 1800, 'status': 'cancelled'},
  ]
  orders[0]['gmv']            # → 250

  # filter
  [o for o in orders if o['status'] == 'paid']

  # convert to pandas
  pd.DataFrame(orders)

DICT OF DICTS — when you want O(1) lookup by a key:

  by_id = {o['order_id']: o for o in orders}
  by_id[2]['gmv']             # → 1800

Going from list-of-dicts to dict-of-dicts is a one-liner with a dict comprehension — a pattern you'll use constantly.`,exercisePrompt:"Define  records = [{'order_id': 1, 'gmv': 250}, {'order_id': 2, 'gmv': 1800}, {'order_id': 3, 'gmv': 99}] . Build a dict keyed by order_id with the full record as value. End with the dict."},{id:"m2-t9",title:"2.9 zip, enumerate, range",kind:"python",content:`The three iteration helpers you use every day.

zip — pair up two (or more) iterables:
  ids    = [1, 2, 3]
  prices = [250, 480, 1200]
  list(zip(ids, prices))     # [(1, 250), (2, 480), (3, 1200)]

  for i, p in zip(ids, prices):
      print(i, p)

  # build a dict
  dict(zip(ids, prices))      # → {1: 250, 2: 480, 3: 1200}

enumerate — index + value:
  for i, item in enumerate(['a', 'b', 'c']):
      print(i, item)          # 0 a / 1 b / 2 c

  for i, item in enumerate(items, start=1):    # 1-indexed

zip STOPS AT THE SHORTEST input. Need otherwise:
  from itertools import zip_longest
  zip_longest(short, long, fillvalue=0)

range — covered in 1.6. range is lazy; convert with list() if needed.`,exercisePrompt:"Given  names = ['Don', 'Ali', 'Mei']  and  spends = [1250, 800, 1900] , build a list of dicts of the form  {'name': ..., 'spend': ...}  using zip. End with the list."},{id:"m2-t10",title:"2.10 sorted() with key=",kind:"python",content:`sorted(iterable, key=fn, reverse=False)

key is the SECRET WEAPON — a function that maps each item to the value you want to sort by.

Sort dicts by a field:
  sorted(orders, key=lambda o: o['gmv'])               # ascending
  sorted(orders, key=lambda o: o['gmv'], reverse=True) # descending

Sort by MULTIPLE fields (Python sort is STABLE — equal keys keep their original order):
  # first by status, within status by gmv descending
  sorted(orders, key=lambda o: (o['status'], -o['gmv']))

Sort strings case-insensitively:
  sorted(names, key=str.lower)

operator.itemgetter is faster than a lambda for simple field-by-field:
  from operator import itemgetter
  sorted(orders, key=itemgetter('gmv'), reverse=True)

Trick: to reverse on one column only in a multi-key sort, negate numeric values.`,exercisePrompt:"Define  records = [{'id': 1, 'gmv': 250}, {'id': 2, 'gmv': 1800}, {'id': 3, 'gmv': 99}] . Return them sorted by gmv DESCENDING. End with the sorted list."},{id:"m2-t11",title:"2.11 Counter — Counting Frequencies",kind:"python",content:`collections.Counter — a dict subclass tuned for tallies.

  from collections import Counter

  statuses = ['paid', 'paid', 'cancelled', 'paid', 'pending']
  Counter(statuses)
  # → Counter({'paid': 3, 'cancelled': 1, 'pending': 1})

  Counter(statuses).most_common(2)
  # → [('paid', 3), ('cancelled', 1)]

For a pandas column, the moral equivalent is:
  df['status'].value_counts()

Counter MATH (add or subtract tallies):
  a = Counter(week1)
  b = Counter(week2)
  diff = b - a               # what counts increased this week

Use Counter when you need a frequency table off a plain list and don't want to spin up pandas just to count.`,exercisePrompt:"Given  statuses = ['paid','paid','cancelled','paid','pending','cancelled','paid'] , use Counter to return the 2 most common statuses with their counts (a list of tuples). End with the list."},{id:"m2-t12",title:"2.12 defaultdict — When KeyError Hurts",kind:"python",content:`A dict that auto-creates missing keys with a default factory. Skips the "is this key here yet?" boilerplate.

  from collections import defaultdict

  # group orders by country
  by_country = defaultdict(list)
  for o in orders:
      by_country[o['country']].append(o)   # no KeyError on first sight

  # tally with defaultdict(int)
  counts = defaultdict(int)
  for s in statuses:
      counts[s] += 1                       # 0 default

Without defaultdict you'd write the awkward:
  if key not in d:
      d[key] = []
  d[key].append(value)

In pandas, the equivalent is:
  df.groupby('country').agg(list)

But defaultdict is the right tool for pure-Python pipelines before pandas is in play.`,exercisePrompt:"Define  orders = [{'country': 'TH', 'gmv': 250}, {'country': 'SG', 'gmv': 480}, {'country': 'TH', 'gmv': 1200}, {'country': 'MY', 'gmv': 99}, {'country': 'TH', 'gmv': 80}] . Use  defaultdict(list)  to group orders by country. End with the resulting dict."}]},{id:"m3",title:"Logic & Comprehensions",icon:"GitBranch",topics:[{id:"m3-t1",title:"3.1 Booleans + The Pandas Operator Trap",kind:"python",content:`Comparisons:  >  <  ==  !=  >=  <=
Reminder:  =  assigns,  ==  compares. Mixing them is the #1 beginner bug.

Plain Python combines logic with the words and / or / not.

PANDAS IS DIFFERENT — and this trips up every new analyst:

  &   (and)        |   (or)        ~   (not)

Every condition must be wrapped in parentheses, because & has higher precedence than > :

  df[(df['gmv'] > 1000) & (df['status'] == 'paid')]    ✓ correct
  df[df['gmv'] > 1000 & df['status'] == 'paid']        ✗ silent bug

A seeded  orders  DataFrame is pre-loaded in the sandbox (columns: order_id, customer_id, gmv, status, country, created_at, category) so your filter will actually run.`,exercisePrompt:"Using the pre-loaded  orders  DataFrame: write the filter that returns rows where  gmv > 500  AND  country == 'TH'. End your snippet with the filter expression itself so Run shows the result."},{id:"m3-t2",title:"3.2 List Comprehensions",kind:"python",content:`The single most important syntax for thinking like pandas. A one-line for-loop that builds a list.

doubled = [x * 2 for x in [1, 2, 3]]          # → [2, 4, 6]

Read as:  "for each x in the list, give me x * 2."

With a filter:
  expensive = [p for p in prices if p > 500]

With a transform AND a filter:
  rounded_high = [round(p) for p in prices if p > 500]

A pre-loaded  sales = [120, 480, 75, 1500, 60, 230, 880]  is in the sandbox.

This is the same mental model as a pandas vectorised operation:

  Python:  [p for p in prices if p > 500]
  Pandas:  prices[prices > 500]`,exercisePrompt:"Write a list comprehension over the pre-loaded  sales  list that returns 10% of each value (s * 0.10) for every s in sales. End with the expression so Run shows the result."},{id:"m3-t3",title:"3.3 Dict Comprehensions",kind:"python",content:`{ key_expr: val_expr for x in iterable [if cond] }

Examples:
  squares = {n: n*n for n in range(5)}
  # → {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

Build a lookup from a list of dicts:
  by_id = {o['order_id']: o['gmv'] for o in orders}

Filter while building:
  paid_only = {o['order_id']: o['gmv'] for o in orders if o['status'] == 'paid'}

Invert a dict (swap keys and values):
  inverted = {v: k for k, v in d.items()}
  # (assumes values are unique — duplicates silently overwrite)

Same mental model as list comp, but two expressions separated by  : .`,exercisePrompt:"Define  orders = [{'order_id': 1, 'gmv': 250}, {'order_id': 2, 'gmv': 1800}, {'order_id': 3, 'gmv': 99}] . Build a dict  {order_id: gmv}  using a dict comprehension. End with the dict."},{id:"m3-t4",title:"3.4 Set Comprehensions",kind:"python",content:`{ expr for x in iterable [if cond] }

Get unique values from a list of dicts:
  countries = {o['country'] for o in orders}

vs. the loop version:
  countries = set()
  for o in orders:
      countries.add(o['country'])

DON'T confuse with dict comp — a dict comp has a colon  :  between key and value. A set comp has no colon.

  {x for x in range(5)}       # set {0,1,2,3,4}
  {x: x for x in range(5)}    # dict {0:0, 1:1, ...}

Empty literals:
  set()    # empty SET
  {}       # empty DICT
  set       # the type itself`,exercisePrompt:"Define  orders = [{'country': 'TH'}, {'country': 'SG'}, {'country': 'TH'}, {'country': 'MY'}, {'country': 'SG'}] . Build a SET of unique countries using a set comp. End with the set."},{id:"m3-t5",title:"3.5 Generator Expressions",kind:"python",content:`(expr for x in iterable)              # parens — not brackets

Like a list comp but LAZY — yields one value at a time instead of materialising a whole list in memory.

  total = sum(o['gmv'] for o in orders if o['status'] == 'paid')

Why this matters: when iterating over millions of rows, you don't want to build a giant list just to sum it. Generator expressions consume only what they yield.

When functions take a single iterable arg, you can drop the outer parens:
  sum(o['gmv'] for o in orders)              # clean
  any(o['gmv'] > 1000 for o in orders)
  max(orders, key=lambda o: o['gmv'])

Trade-off: you can iterate only ONCE. After that the generator is exhausted — convert to list() if you need to scan twice.`,exercisePrompt:"Define  orders = [{'gmv': 250, 'status': 'paid'}, {'gmv': 1800, 'status': 'cancelled'}, {'gmv': 480, 'status': 'paid'}, {'gmv': 99, 'status': 'pending'}] . Use a generator expression with sum() to total gmv of PAID orders only. End with the sum."},{id:"m3-t6",title:"3.6 Nested Comprehensions",kind:"python",content:`Looping inside looping inside a comp.

FLATTEN a 2-D list:
  flat = [x for row in matrix for x in row]
  # [[1,2],[3,4]] → [1, 2, 3, 4]

Read left-to-right as nested for loops.

With a filter on the inner:
  [o for batch in batches for o in batch if o['status'] == 'paid']

The for-loop equivalent:
  flat = []
  for batch in batches:
      for o in batch:
          if o['status'] == 'paid':
              flat.append(o)

Beyond 2 levels: USE A LOOP. Nested comps become unreadable fast.

A matrix TRANSFORM (NOT a flatten — returns a list of lists):
  [[x * 2 for x in row] for row in matrix]`,exercisePrompt:"Given  matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] , use a nested list comp to flatten it into [1,2,3,4,5,6,7,8,9]. End with the flat list."},{id:"m3-t7",title:"3.7 Conditional Expressions (Ternary)",kind:"python",content:`value_if_true  if  condition  else  value_if_false

Used inline for a one-line branch:
  tier = 'high' if gmv > 1000 else 'low'

In a comprehension:
  [('high' if g > 1000 else 'low') for g in gmvs]

CHAINED ternaries are legal but UNREADABLE — use elif instead:
  # avoid
  tier = 'L' if g < 100 else 'M' if g < 1000 else 'H'
  # prefer
  if g < 100:     tier = 'L'
  elif g < 1000:  tier = 'M'
  else:           tier = 'H'

In pandas, the column-wide equivalent is np.where (next topics):
  df['tier'] = np.where(df['gmv'] > 1000, 'high', 'low')`,exercisePrompt:"Given  gmvs = [250, 1200, 99, 1800, 480] , use a list comprehension with a ternary to build a list of 'high' (>1000) or 'low' tags. End with the list."},{id:"m3-t8",title:"3.8 any() and all()",kind:"python",content:`any(iterable)  → True if AT LEAST ONE element is truthy
all(iterable)  → True if EVERY element is truthy (empty iterable → True)

  any(o['status'] == 'paid' for o in orders)
  all(o['gmv'] > 0 for o in orders)

Both SHORT-CIRCUIT — they stop as soon as the answer is known. Pair with a generator expression for cheap "is any of these true?" checks over millions of rows.

Empty-case quirk:
  any([])  → False
  all([])  → True       (vacuous truth — a quirk worth remembering)

In pandas the column-wise equivalents:
  (df['status'] == 'paid').any()
  (df['gmv'] > 0).all()`,exercisePrompt:"Define  orders = [{'status': 'paid'}, {'status': 'paid'}, {'status': 'cancelled'}, {'status': 'pending'}] . Use any() with a generator to check whether ANY order has status == 'cancelled'. End with the boolean."},{id:"m3-t9",title:"3.9 Walrus Operator :=",kind:"python",content:`Assign + use in the same expression. Python 3.8+.

Useful when you'd otherwise compute the same value twice:

  # before
  data = fetch()
  if len(data) > 10:
      process(data)

  # with walrus
  if (n := len(fetch())) > 10:
      process(fetch())          # (or store fetch result first)

In a while loop reading chunks:
  while (chunk := stream.read(1024)):
      handle(chunk)

In a comprehension:
  [y for x in data if (y := compute(x)) > 0]

USE SPARINGLY — overuse makes code hard to read. Rule of thumb: if it makes the intent CLEARER, use it. If it just makes the line shorter, don't.`,exercisePrompt:"Define  orders = [{'status': 'paid'}, {'status': 'paid'}, {'status': 'cancelled'}] . Use the walrus operator inside an if to count paid orders into  n  and print  f'{n} paid' . End with the print statement's effect (just call it)."},{id:"m3-t10",title:"3.10 Short-Circuit in Pandas Masks",kind:"python",content:`THIS IS A CLASSIC EXAM TRAP.

In plain Python,  and  and  or  short-circuit:
  x and y       → x if x is falsy, else y
  x or y        → x if x is truthy, else y

In pandas,  &  and  |  are ELEMENT-WISE — they evaluate BOTH sides for EVERY row. There is no short-circuit on a Series.

  df[(df['gmv'] > 1000) & (df['status'] == 'paid')]
  # ↑ both conditions computed for every row

If one side is expensive, that cost is paid in full. Either:
  - filter once, then filter again (composable, more readable), or
  - rearrange to do the expensive work AFTER the cheap filter (df.loc on the smaller set)

Don't put a slow Python lookup inside a Boolean mask — use  .map()  or  pd.merge  to precompute.

CHEATSHEET:
  scalar:  if x > 1000 and status == 'paid':
  series:  df[(df['gmv'] > 1000) & (df['status'] == 'paid')]`,exercisePrompt:"In one or two sentences: why does pandas use  &  instead of  and  for combining row-level conditions? Hint — think about element-wise vs scalar evaluation."},{id:"m3-t11",title:"3.11 np.where & np.select",kind:"python",content:`Vectorised conditionals — the fastest path to "compute a new column from rules."

np.where(cond, if_true, if_false):
  import numpy as np
  df['tier'] = np.where(df['gmv'] > 1000, 'high', 'low')

Multiple bins — np.select scales:
  conditions = [
      df['gmv'] < 100,
      df['gmv'] < 1000,
      df['gmv'] >= 1000,
  ]
  choices = ['small', 'medium', 'large']
  df['tier'] = np.select(conditions, choices, default='unknown')

When NOT to use them:
- Single condition with categorical output    → np.where
- 2–6 buckets                                  → np.select
- Many arbitrary string-to-string mappings     → .map() with a dict (next topic)

Avoid  .apply(lambda)  for these — 10× slower than np.where on numeric columns.`,exercisePrompt:"Using the pre-loaded  orders  DataFrame, add a column  tier  that is 'large' when  gmv > 1000  else 'small'. Use np.where. End with  orders[['gmv','tier']].head() ."},{id:"m3-t12",title:"3.12 Dict-as-Mapper + .map()",kind:"python",content:`The cleanest way to translate categorical values.

  status_emoji = {
      'paid':      '+',
      'cancelled': 'x',
      'pending':   '?',
  }
  df['icon'] = df['status'].map(status_emoji)

Values not in the mapping become NaN. Add a default with .fillna():
  df['icon'] = df['status'].map(status_emoji).fillna('?')

For functions instead of dicts (less common — prefer dicts when possible):
  df['name_len'] = df['name'].map(len)

When you have a SECOND dataframe with the mapping, use  pd.merge  instead.  .map()  is the lightweight option for small key→value lookups.

This pattern beats nested np.where chains when you have more than 3-4 categories.`,exercisePrompt:"Using the pre-loaded  orders  DataFrame, define a dict  {'paid': 1, 'cancelled': 0, 'pending': 0}  and use  .map  to make a new column  is_paid . End with  orders[['status', 'is_paid']].head() ."}]},{id:"m4",title:"Pandas Core",icon:"BarChart3",topics:[{id:"m4-t1",title:"4.1 Series, DataFrames & First Inspection",kind:"python",content:`A Series is one labelled column. A DataFrame is many Series glued together — a table.

import pandas as pd
df = pd.read_csv('orders.csv')

The first 30 seconds with any new dataset — memorise this drill:

  df.head()       first 5 rows
  df.tail(10)     last 10 rows
  df.shape        (rows, columns)  — no parens, it's an attribute
  df.info()       dtypes + null counts per column
  df.describe()   summary stats for numeric columns
  df.columns      list of column names
  df.dtypes       type per column

Building one by hand (interview favourite):

  df = pd.DataFrame({
      'order_id': [1, 2, 3],
      'gmv':      [250, 1800, 99],
      'status':   ['paid', 'cancelled', 'paid']
  })

Why pandas wins: every method works on the whole column at once. Never write a for-loop over rows.`,exercisePrompt:"Build a DataFrame called bookings with two columns:  hotel_id = [101, 102, 103]  and  nights = [3, 1, 7].  Then end your snippet with  bookings.shape  so Run shows it."},{id:"m4-t2",title:"4.2 Selecting & Boolean Masking",kind:"python",content:`Selecting columns:
  df['gmv']                one column → Series
  df[['gmv', 'status']]    multiple   → DataFrame (note: double brackets)

Filtering rows with a boolean mask:
  df[df['gmv'] > 1000]

Multiple conditions — parentheses MANDATORY, & not 'and':
  df[(df['gmv'] > 1000) & (df['status'] == 'paid')]

Negation with ~ :
  df[~(df['status'] == 'cancelled')]

.isin() for many values:
  df[df['status'].isin(['paid', 'pending'])]

Null checks:
  df[df['phone'].isna()]        rows where phone is missing
  df[df['phone'].notna()]       rows where phone exists

A pre-loaded  orders  DataFrame is in the sandbox (TH/SG/MY · paid/cancelled/pending).`,exercisePrompt:"Filter the pre-loaded  orders  DataFrame to rows where  country == 'TH'  AND  gmv > 500. End your snippet with the filter expression so Run shows it."},{id:"m4-t3",title:"4.3 GroupBy & Aggregation",kind:"python",content:`The single most-tested pandas concept. Pattern:  split → apply → combine.

Basic:
  df.groupby('country')['gmv'].sum()

Read as: "split rows by country, then sum gmv within each group."

Multiple aggregations:
  df.groupby('country')['gmv'].agg(['sum', 'mean', 'count'])

Grouping by multiple columns:
  df.groupby(['country', 'status'])['gmv'].sum()

NAMED aggregations — cleanest, what senior interviewers want to see:

  df.groupby('country').agg(
      total_gmv   = ('gmv', 'sum'),
      avg_order   = ('gmv', 'mean'),
      order_count = ('order_id', 'count')
  ).reset_index()

reset_index() — chain it 90% of the time so the result is a flat DataFrame, not a multi-level index.

Pre-loaded  orders  in the sandbox.`,exercisePrompt:"Using the pre-loaded  orders  DataFrame: get the TOTAL gmv per customer, counting ONLY rows where status == 'paid'. End with the result expression so Run shows it."},{id:"m4-t4",title:"4.4 Merge & Concat",kind:"python",content:`Combining tables in pandas. Same mental model as SQL JOINs.

  pd.merge(left, right, how='left', on='customer_id')

Four 'how' values:
  'inner'  intersection           keeps rows with a match in both
  'left'   keep all from left     NULL on right where no match (most common)
  'right'  mirror of left
  'outer'  union                  rows from either, NULL on missing side

Multi-key join:
  pd.merge(a, b, on=['country', 'category'])

Different column names per side:
  pd.merge(orders, ref, left_on='customer_id', right_on='cust_id')

Suffixes when both sides share a column name (e.g. 'country' appears in both):
  pd.merge(orders, customers, on='customer_id', suffixes=('_ord', '_cust'))

CONCAT — vertical stack, not a join:
  pd.concat([df_2024, df_2025], ignore_index=True)

Use concat when schemas line up. Use merge when combining different tables on a key.`,exercisePrompt:"Using the pre-loaded  orders  and  customers  DataFrames: LEFT MERGE them on customer_id (use suffixes ('_ord', '_cust') since both have a 'country' column), then end with  .head()  on the merged frame so Run shows the first 5 rows."},{id:"m4-t5",title:"4.5 Reshape — pivot, melt, stack",kind:"python",content:`Wide vs long. Every assessment tests one direction.

LONG → WIDE with pivot_table:

  df.pivot_table(
      index='country',
      columns='status',
      values='gmv',
      aggfunc='sum',
      fill_value=0,
  )

Rows are unique countries, columns are unique statuses, cells are sum of gmv.

WIDE → LONG with melt — the inverse:

  pd.melt(df, id_vars=['country'], value_vars=['gmv', 'aov'])

stack / unstack: same idea but operates on MultiIndex levels:

  df.set_index(['country', 'status'])['gmv'].unstack()

When to use which:
- pivot_table  → aggregate while reshaping
- melt         → from wide form (one row per entity, many metric columns) to long (one row per entity-metric pair) for plotting or further groupby

Default to long form for analysis pipelines. Wide is for display.`,exercisePrompt:"Pivot the pre-loaded  orders  DataFrame into a country × status matrix of TOTAL gmv. Use  pivot_table  with index='country', columns='status', values='gmv', aggfunc='sum', fill_value=0. End with the expression so Run shows it."},{id:"m4-t6",title:"4.6 Time Series — dates & resampling",kind:"python",content:`Dates from a CSV arrive as strings. Convert them or nothing time-related works.

  orders['created_at'] = pd.to_datetime(orders['created_at'])

The .dt accessor — string-method-style accessors for datetimes:

  orders['created_at'].dt.year
  orders['created_at'].dt.month
  orders['created_at'].dt.day_name()
  orders['created_at'].dt.to_period('M')      # → 2025-03 etc

Resampling — groupby for time:

  orders.set_index('created_at').resample('ME')['gmv'].sum()

Common periods (pandas 2.x): 'D' day · 'W' week · 'ME' month-end · 'QE' quarter-end · 'YE' year-end.
(In pandas < 2.2, plain 'M' / 'Q' / 'Y' worked — now they emit a FutureWarning.)

Date math is vectorised:
  orders['days_since'] = (pd.Timestamp.now() - orders['created_at']).dt.days

Time series sits at the heart of cohort retention, run-rate forecasts, and seasonal decomposition — all of which Shopee/Lazada test.`,exercisePrompt:"Convert  orders['created_at']  to datetime, then return the count of PAID orders per month (use  .dt.to_period('M')  or  resample('ME')). End with the result expression so Run shows it."},{id:"m4-t7",title:"4.7 Missing Data: dropna, fillna, isna",kind:"python",content:`Missing values arrive as NaN (for numeric) or None / NaT in pandas. Both register via .isna() / .notna().

DETECT:
  df.isna().sum()                    # null count per column
  df['phone'].isna()                 # boolean series
  df[df['phone'].isna()]             # rows where phone is missing

DROP:
  df.dropna()                        # any column NaN → drop row
  df.dropna(subset=['phone'])        # only consider these cols
  df.dropna(thresh=3)                # keep rows with ≥3 non-null values

FILL:
  df['phone'].fillna('unknown')                  # constant
  df['gmv'].fillna(df['gmv'].median())           # statistic
  df.fillna({'phone': 'unknown', 'gmv': 0})      # column-specific
  df['gmv'].ffill()                              # forward fill (time series — pandas 2.x)
  df['gmv'].bfill()                              # back fill

A SENSIBLE PIPELINE: detect missing first → decide drop or fill per column → never blanket-impute without thinking. Imputed values affect every downstream statistic.`,exercisePrompt:"Using the pre-loaded  orders  DataFrame, return a Series of null counts per column. Use  .isna().sum() . End with that expression."},{id:"m4-t8",title:"4.8 apply vs map vs transform",kind:"python",content:`Three methods that LOOK similar but behave differently.

.map (Series only):
  - Element-wise.
  - Takes a dict, Series, or function.
  - Returns a Series of the same length.
    df['status'].map({'paid': 1, 'cancelled': 0})

.apply (Series OR DataFrame):
  - On a Series: like .map but accepts a function only.
  - On a DataFrame: applies along an axis (rows by default).
    df.apply(np.sum, axis=0)      # column sums
    df.apply(my_fn, axis=1)       # ROW BY ROW — slow

.transform (mostly with groupby):
  - Returns a Series the SAME SHAPE as input (broadcasts group result back).
  - The pandas way to "compute group mean and assign back to each row":
    df['gmv_vs_avg'] = df['gmv'] - df.groupby('country')['gmv'].transform('mean')

PERF order: vectorised ops >> .map / .apply on Series > .apply on DataFrame rows. Avoid  axis=1  apply where you can — it's row-by-row Python.`,exercisePrompt:"Using the pre-loaded  orders , add a column  gmv_vs_country_mean  equal to  gmv  minus the country's mean  gmv  via  groupby('country')['gmv'].transform('mean') . End with  orders[['country','gmv','gmv_vs_country_mean']].head() ."},{id:"m4-t9",title:"4.9 Sorting & Ranking",kind:"python",content:`Sort:
  df.sort_values('gmv')                                    # ascending
  df.sort_values('gmv', ascending=False)
  df.sort_values(['country','gmv'], ascending=[True, False])

Sort by index:
  df.sort_index()

Rank — assign rank to each value within a column:
  df['gmv_rank'] = df['gmv'].rank()                  # ties → mean rank
  df['gmv_rank'] = df['gmv'].rank(method='dense')    # ties same int, no gaps
  df['gmv_rank'] = df['gmv'].rank(method='min')      # ties → lowest rank
  df['gmv_rank'] = df['gmv'].rank(ascending=False)

PER-GROUP RANK — the pandas equivalent of SQL  ROW_NUMBER() PARTITION BY :
  df['rank_in_country'] =
      df.groupby('country')['gmv'].rank(method='dense', ascending=False)

Top-N PER GROUP:
  mask = df.groupby('country')['gmv'].rank(method='dense', ascending=False) <= 3
  df[mask]`,exercisePrompt:"Using the pre-loaded  orders , return the rows where each order is in its country's TOP 3 by gmv. Use  groupby('country')['gmv'].rank(method='dense', ascending=False) <= 3 . End with that filtered frame's  .head(10) ."},{id:"m4-t10",title:"4.10 String Columns — .str Deep Dive",kind:"python",content:`The .str accessor vectorises every string method across a column.

  df['country'].str.lower()
  df['country'].str.strip()
  df['country'].str.upper()
  df['email'].str.contains('@')              # regex by default
  df['email'].str.contains('@', regex=False) # literal — faster
  df['name'].str.startswith('A')
  df['name'].str.endswith('.csv')
  df['name'].str.replace('_', ' ', regex=False)
  df['name'].str.split(' ')                  # → Series of lists
  df['name'].str.len()
  df['name'].str.zfill(5)                    # pad with zeros

EXTRACTION via regex returns a DataFrame of capture groups:
  df['phone'].str.extract(r'(\\d{3})-(\\d{4})')

Chain in order — each .str step returns a new Series.

For pandas 2.0+, consider  pd.StringDtype()  for marginally better perf + clearer null handling.`,exercisePrompt:"Using the pre-loaded  orders , count how many  category  values start with 'b' (case-insensitive). Use  orders['category'].str.lower().str.startswith('b').sum() . End with the count."},{id:"m4-t11",title:"4.11 Categorical dtype",kind:"python",content:`A Categorical column stores values as integer codes against a category list — saves memory and enables ORDERING for ordinal data.

  df['status'] = df['status'].astype('category')
  df['status'].cat.categories       # → Index(['cancelled','paid','pending'])
  df['status'].memory_usage()       # much less than object dtype

ORDERED categoricals:
  df['tier'] = pd.Categorical(df['tier'],
                              categories=['low','med','high'],
                              ordered=True)
  df[df['tier'] > 'low']            # comparison now meaningful

When to use:
- Repeated low-cardinality strings ('status', 'country', 'category')
- Ordinal data ('low/med/high', 'q1/q2/q3/q4')

When NOT to:
- High-cardinality (basically as bad as object)
- Free-text fields

GroupBy on categoricals defaults to including unused categories — set  observed=True  to suppress.`,exercisePrompt:"Using the pre-loaded  orders , cast the  status  column to a Categorical and end with  orders['status'].astype('category').cat.categories  so Run displays the category index."},{id:"m4-t12",title:"4.12 Memory & dtype Optimization",kind:"python",content:`For interview-grade analysis, df.info() reveals the cheap wins.

  df.info()
  df.memory_usage(deep=True)    # accurate for object columns

OPTIMISATIONS:
- object → category for low-cardinality strings (10×–100× memory win)
- int64 → int32 / int16 when values fit
- float64 → float32 when precision tolerable
- Dates → datetime64 (slicing, .dt accessor, faster)

When loading large CSVs, pre-declare dtypes:
  pd.read_csv('big.csv', dtype={
      'status':     'category',
      'gmv':        'float32',
      'created_at': 'string',
  }, parse_dates=['created_at'])

CHUNKED iteration for files that won't fit in memory:
  for chunk in pd.read_csv('big.csv', chunksize=100_000):
      process(chunk)

A clean dtype layout is THE THING that turns a sluggish notebook into one that runs in seconds.`,exercisePrompt:"Using the pre-loaded  orders , return the memory usage PER COLUMN with deep counting. Use  orders.memory_usage(deep=True) . End with that Series."}]},{id:"m5",title:"SQL Essentials",icon:"Database",topics:[{id:"m5-t1",title:"5.1 SELECT, WHERE, ORDER BY",kind:"sql",content:`SQL is READ top-to-bottom but EXECUTED in this order:

  FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT

Knowing this kills 80% of bugs and aliasing errors.

  SELECT order_id, gmv
  FROM orders
  WHERE status = 'paid' AND gmv > 1000
  ORDER BY gmv DESC
  LIMIT 10;

Things to internalise:

  =  for equality (NOT == like Python)
  Strings in 'single quotes', not double
  NULL is checked with  IS NULL  or  IS NOT NULL  — never  = NULL
  LIKE '%th%'         pattern match (% = any chars)
  BETWEEN 100 AND 500 inclusive both ends
  IN ('TH','SG','MY') membership

DESC and ASC apply per column:  ORDER BY country ASC, gmv DESC.`,exercisePrompt:"Write a SQL query that returns the top 5 bookings — ordered by nights descending — from a table 'bookings' where country = 'TH'. Show only the booking_id and nights columns."},{id:"m5-t2",title:"5.2 GROUP BY & HAVING",kind:"sql",content:`SQL GROUP BY = pandas .groupby(). Same mental model, different syntax.

  SELECT country,
         SUM(gmv)    AS total_gmv,
         COUNT(*)    AS order_count,
         AVG(gmv)    AS avg_order
  FROM orders
  WHERE status = 'paid'
  GROUP BY country
  HAVING SUM(gmv) > 100000
  ORDER BY total_gmv DESC;

The rules every interviewer probes:

1. Every column in SELECT must be either in GROUP BY or wrapped in an aggregate (SUM, COUNT, AVG, MIN, MAX).

2. WHERE filters rows BEFORE grouping. HAVING filters groups AFTER. This is the most common interview question — be able to explain it cold.

3. COUNT(*)  counts all rows in the group.
   COUNT(col) counts rows where col IS NOT NULL.
   COUNT(DISTINCT customer_id)  counts unique customers — used constantly.`,exercisePrompt:"Write SQL against an orders(customer_id, gmv, status) table that returns each customer's order count and average gmv, but only shows customers with MORE THAN 5 orders. Sort by avg gmv descending."},{id:"m5-t3",title:"5.3 JOINs & Window Functions",kind:"sql",content:`JOINs combine tables on a key:

  INNER JOIN  — only rows that match in both
  LEFT JOIN   — all rows from left, NULL where right has no match
  RIGHT JOIN  — mirror of LEFT (rarely used; rewrite as LEFT)
  FULL JOIN   — everything from both, NULL where missing

  SELECT o.order_id, c.country
  FROM orders o
  LEFT JOIN customers c ON o.customer_id = c.customer_id;

WINDOW FUNCTIONS — aggregations that do NOT collapse rows. Alooba loves these.

  SELECT
    order_id,
    customer_id,
    gmv,
    ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY created_at) AS order_rank,
    SUM(gmv)     OVER (PARTITION BY customer_id) AS customer_total
  FROM orders;

The killer patterns:

- First / Nth purchase per customer →
    ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY created_at)
- Previous row's value →  LAG(gmv) OVER (PARTITION BY customer_id ORDER BY created_at)
- Running total →  SUM(gmv) OVER (PARTITION BY customer_id ORDER BY created_at)
- Top-N per group →  filter on ROW_NUMBER() <= N in an outer query`,exercisePrompt:"Using the seeded  orders  table, write a SQL query that returns each customer's FIRST order (earliest created_at). Show  customer_id, order_id, gmv. Use  ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY created_at)  in a subquery or CTE and filter to rank = 1."},{id:"m5-t4",title:"5.4 CTEs & Subqueries",kind:"sql",content:`A CTE — Common Table Expression — is a named subquery defined with WITH. It makes complex queries readable and is Alooba's favourite pattern.

  WITH top_customers AS (
    SELECT customer_id, SUM(gmv) AS total_gmv
    FROM orders
    WHERE status = 'paid'
    GROUP BY customer_id
  )
  SELECT t.customer_id, t.total_gmv, c.country
  FROM top_customers t
  JOIN customers c USING (customer_id)
  ORDER BY t.total_gmv DESC
  LIMIT 10;

Multiple CTEs in one query — chain with commas (only one WITH keyword):

  WITH paid AS ( SELECT * FROM orders WHERE status = 'paid' ),
       by_cust AS ( SELECT customer_id, SUM(gmv) AS s FROM paid GROUP BY customer_id )
  SELECT * FROM by_cust ORDER BY s DESC;

Subquery in WHERE — "customers who have at least one paid order":

  SELECT *
  FROM customers
  WHERE customer_id IN (SELECT DISTINCT customer_id FROM orders WHERE status='paid');

Rule of thumb: when a query has more than one aggregation step, reach for a CTE. The result is the same; the readability isn't.`,exercisePrompt:"Using a CTE, find the top 3 customers by total PAID gmv. Return  customer_id, total_gmv, country  (joining from the  customers  table). Sort by total_gmv descending and limit to 3."},{id:"m5-t5",title:"5.5 Self-Joins",kind:"sql",content:`A self-join joins a table to itself — used for hierarchies and pair-finding.

The pattern always uses TWO aliases for the same table:

  SELECT a.booking_id, b.booking_id
  FROM bookings a
  JOIN bookings b
    ON a.hotel_id   = b.hotel_id
   AND a.created_at = b.created_at
   AND a.booking_id < b.booking_id;       -- de-dupe + drop self-pairs

The  a.id < b.id  trick stops (1,2) and (2,1) from both appearing — and also drops the (1,1) self-pair.

Hierarchies — classic interview question:

  -- employees(id, name, manager_id)
  SELECT e.name AS employee, m.name AS manager
  FROM employees e
  LEFT JOIN employees m ON e.manager_id = m.id;

Self-joins are slow on big tables — every match scans both sides. If the question is really "find duplicates", a window function (COUNT(*) OVER (PARTITION BY ...)) is usually cheaper.`,exercisePrompt:"Find pairs of bookings at the SAME hotel_id on the SAME created_at, returning  a.booking_id, b.booking_id, a.hotel_id, a.created_at. Use the  a.booking_id < b.booking_id  trick so each pair appears once. (May return zero rows — that's a valid result if no collisions.)"},{id:"m5-t6",title:"5.6 UNION, INTERSECT, EXCEPT",kind:"sql",content:`SET OPERATORS combine the rowsets of two queries. Both sides must have the SAME number of columns with COMPATIBLE types.

UNION (remove duplicates):
  SELECT country FROM customers
  UNION
  SELECT country FROM bookings;

UNION ALL (keep duplicates — usually faster, prefer when you know there are no dups):
  SELECT customer_id FROM orders WHERE status='paid'
  UNION ALL
  SELECT customer_id FROM orders WHERE status='pending';

INTERSECT — rows in BOTH:
  SELECT customer_id FROM orders
  INTERSECT
  SELECT customer_id FROM customers WHERE country='TH';

EXCEPT (a.k.a. MINUS in Oracle) — rows in LEFT, not in RIGHT:
  SELECT customer_id FROM customers
  EXCEPT
  SELECT DISTINCT customer_id FROM orders;
  -- → customers who have never ordered

USE CASES:
- UNION ALL — concatenate partition / time-range queries
- INTERSECT — overlap analysis (paid AND pending customers)
- EXCEPT — gap analysis (signed up, never ordered)

Most analysts default to UNION when UNION ALL would be cheaper. Pick deliberately.`,exercisePrompt:"Using  customers  and  orders , return the customer_ids that exist in  customers  but have NO orders. Use EXCEPT."},{id:"m5-t7",title:"5.7 CASE WHEN — Branching in SELECT",kind:"sql",content:`The SQL way to compute a column from rules.

  SELECT
      order_id,
      gmv,
      CASE
          WHEN gmv >= 1000 THEN 'large'
          WHEN gmv >= 100  THEN 'medium'
          ELSE 'small'
      END AS tier
  FROM orders;

Shorthand for equality on one column:
  CASE status
      WHEN 'paid'      THEN 1
      WHEN 'cancelled' THEN 0
      ELSE NULL
  END AS is_paid

USE INSIDE AGGREGATES — conditional aggregation, the #1 SQL pattern:

  SELECT country,
         COUNT(*)                                          AS total,
         COUNT(CASE WHEN status='paid'      THEN 1 END)    AS paid,
         SUM(CASE WHEN status='paid' THEN gmv ELSE 0 END)  AS paid_gmv
  FROM orders
  GROUP BY country;

That's "show paid vs cancelled counts side by side" — one query, one scan. Easier on the database than UNIONing two GROUP BYs.`,exercisePrompt:"Write a SQL query that returns each country's TOTAL order count, PAID order count, and PAID GMV in one row. Use CASE WHEN inside COUNT and SUM. Group by country."},{id:"m5-t8",title:"5.8 COALESCE & NULLIF",kind:"sql",content:`Null handling without verbose CASE WHEN.

COALESCE — returns the FIRST non-NULL argument:

  SELECT COALESCE(phone, alt_phone, 'unknown') AS contact
  FROM customers;

  -- The classic LEFT JOIN guard:
  SELECT c.customer_id, COALESCE(SUM(o.gmv), 0) AS total
  FROM customers c
  LEFT JOIN orders o ON o.customer_id = c.customer_id
  GROUP BY c.customer_id;

NULLIF — returns NULL when two args are EQUAL, else the first arg.
Most common use: avoid division by zero.

  SELECT total_revenue / NULLIF(total_orders, 0) AS aov FROM …;
  -- if total_orders is 0, the divisor becomes NULL → result is NULL, not an error

REMEMBER — NULL is not a value, it's "unknown."  NULL = NULL  is NULL, not TRUE. Use  IS NULL  /  IS NOT NULL  for boolean tests.`,exercisePrompt:"Write a SQL query that returns AOV (avg gmv among PAID orders) per country, using  SUM(gmv) / NULLIF(COUNT(*), 0)  to guard against division by zero. Group by country."},{id:"m5-t9",title:"5.9 Date Functions",kind:"sql",content:`Every dialect has slightly different names. The sandbox is SQLite — here's its flavour, plus the standard / Postgres equivalents you'll see at Shopee/Lazada/Agoda.

SQLite (this sandbox):
  strftime('%Y', created_at)               -- year as text
  strftime('%m', created_at)               -- month
  strftime('%Y-%m', created_at)            -- year-month bucket
  strftime('%w', created_at)               -- weekday (0=Sun)
  date(created_at, 'start of month')       -- first day of month
  date(created_at, '+7 days')
  date('now')
  julianday('now') - julianday(created_at) -- days difference

Postgres / Snowflake (read these, you'll see them):
  DATE_TRUNC('month', created_at)
  EXTRACT(YEAR FROM created_at)
  created_at + INTERVAL '7 days'
  DATEDIFF(day, start, end)

MySQL:
  YEAR(created_at), MONTH(created_at)
  DATE_FORMAT(created_at, '%Y-%m')
  DATEDIFF(end, start)

For interviews: know the standard SQL (Postgres style) + your target's dialect.`,exercisePrompt:"Using the sandbox  orders , return the count of PAID orders per MONTH using  strftime('%Y-%m', created_at) . Group by that month bucket, sort ascending."},{id:"m5-t10",title:"5.10 LAG / LEAD",kind:"sql",content:`Window functions that peek at the PREVIOUS or NEXT row within a partition.

  LAG(col, offset, default)   -- value from N rows BEFORE in the ORDER BY
  LEAD(col, offset, default)  -- value from N rows AFTER

  SELECT
      order_id, customer_id, created_at, gmv,
      LAG(gmv)  OVER (PARTITION BY customer_id ORDER BY created_at) AS prev_gmv,
      LEAD(gmv) OVER (PARTITION BY customer_id ORDER BY created_at) AS next_gmv
  FROM orders;

WHAT YOU USE THEM FOR:
- Period-over-period change:   gmv - LAG(gmv) OVER (…)   → growth amount
- Status transitions:          LAG(status) → was it 'paid' last time?
- Time gaps:                   julianday(created_at) - julianday(LAG(created_at) OVER (…))

Default value for the first row (where LAG has nothing to look back to):
  LAG(gmv, 1, 0) OVER (…)   -- 0 instead of NULL

ALOOBA bread and butter. Memorise the syntax.`,exercisePrompt:"Write a SQL query that for each customer's orders (ordered by created_at) shows  customer_id, order_id, gmv, prev_gmv  where  prev_gmv  is the previous order's gmv (NULL on first). Limit to 20 rows."},{id:"m5-t11",title:"5.11 NTILE & Rank Variants",kind:"sql",content:`Three rank functions that look similar — pick deliberately:

ROW_NUMBER()    — unique 1, 2, 3 per partition. Ties broken by ORDER BY order.
RANK()          — same value → same rank. Next rank SKIPS ahead. (1, 1, 3, 4)
DENSE_RANK()    — same value → same rank. Next rank continues. (1, 1, 2, 3)
PERCENT_RANK()  — 0.0 to 1.0 — percentile rank within the partition.
NTILE(n)        — splits rows into n equal-sized buckets, returns 1..n.

  SELECT
      customer_id, gmv,
      ROW_NUMBER() OVER (ORDER BY gmv DESC) AS rn,
      RANK()       OVER (ORDER BY gmv DESC) AS rk,
      DENSE_RANK() OVER (ORDER BY gmv DESC) AS dr,
      NTILE(4)     OVER (ORDER BY gmv DESC) AS quartile
  FROM orders;

NTILE is the lazy way to make tiers:
  -- top 25% by spend become quartile 1
  NTILE(4) OVER (ORDER BY total_spend DESC) AS spend_quartile

Heads-up: NTILE buckets may have UNEVEN sizes when total_rows isn't divisible by n.`,exercisePrompt:"Write a SQL query that assigns each order to a quartile (1–4) by gmv DESC using NTILE(4). Return order_id, gmv, quartile. Limit to 20 rows."},{id:"m5-t12",title:"5.12 Query Plans & EXPLAIN",kind:"sql",content:`When a query is slow, the database can tell you why.

  EXPLAIN SELECT … FROM orders WHERE country = 'TH';

It shows the EXECUTION PLAN — what indexes are used, what joins happen, in what order, with row estimates.

THE 5 PATTERNS TO RECOGNISE (regardless of dialect):

1. SEQUENTIAL SCAN (Seq Scan / Full Scan)
   Reading every row. Fine for tiny tables, expensive for big ones.
   FIX: add an index on the column you filter / join on.

2. INDEX SCAN
   Using an index. Fast — what you want.

3. NESTED LOOP JOIN
   For each row on the left, scan the right. OK for small × indexed-large.

4. HASH JOIN
   Build a hash of one side, probe with the other. Great for big joins on equality.

5. SORT
   Often dominates runtime. Avoid  ORDER BY  before  LIMIT  in subqueries you don't actually need ordered.

In interviews you don't write EXPLAIN — you ANTICIPATE it:
- "I'd add an index on (customer_id, created_at) for this query."
- "Pushing the WHERE down into the CTE prevents a full scan of orders."

That's the senior-analyst answer.`,exercisePrompt:"In 2–3 sentences, explain why adding an INDEX on  orders.customer_id  could speed up  SELECT customer_id, COUNT(*) FROM orders GROUP BY customer_id . Think about scan vs index lookup, and whether the grouping needs all rows."}]},{id:"m6",title:"Business & Stats",icon:"Briefcase",topics:[{id:"m6-t1",title:"6.1 E-commerce & Travel Metrics",kind:"concept",content:`The metrics interviewers at Shopee, Lazada and Agoda actually test:

GMV — Gross Merchandise Value. Total order value before refunds. What e-commerce reports as "revenue" (it isn't really — but it's the headline number).

Conversion Rate (CR) — bookings ÷ visitors. Computed per funnel step:
  search → detail → checkout → pay.  Drop-off between any two steps is the diagnostic.

AOV — Average Order Value =  GMV ÷ order_count.

Take Rate — platform commission ÷ GMV.  Agoda's economics question.

Repeat Purchase Rate — customers with 2+ orders ÷ total customers in period. The headline retention metric.

Cohort Retention — bucket users by signup month, track % still active each subsequent month. Reveals whether a fix actually improved retention or just inflated short-term numbers.

LTV — total spend per customer over their lifetime (or capped window).

THE decomposition every analyst should know cold:

  GMV  =  visitors  ×  conversion_rate  ×  AOV

When GMV drops, check each factor in that equation first.`,exercisePrompt:"Last week GMV dropped 15% on a Shopee category page. Traffic was flat week-over-week. Which two metrics from the GMV decomposition would you investigate first, and why? One or two sentences."},{id:"m6-t2",title:"6.2 A/B Testing Foundations",kind:"concept",content:`Setup — split users randomly into A (control) and B (variant). Run for a fixed period. Compare a primary metric.

Sample size intuition — you need MORE data when:
- The effect you want to detect is small
- The baseline metric is noisy (high variance)
- You demand higher confidence

Rough order-of-magnitude: detecting a 5% RELATIVE lift on a 5% baseline conversion at 95% confidence needs roughly 30,000+ users per variant. Smaller effects → exponentially more data.

Significance ≠ importance. A 0.1% lift on huge traffic can be "statistically significant" and still worthless to ship.

Common ways A/B tests lie to you:

- Peeking — checking results daily then stopping when significant ("p-hacking")
- Sample ratio mismatch — your 50/50 split came out 47/53; something is broken upstream
- Novelty effect — users behave oddly in week 1; let it stabilise
- Wrong granularity — running a user-level test but measuring at session-level (or vice versa)
- Underpowered test — calling a flat result a "no difference" when you didn't have enough samples to detect one`,exercisePrompt:"Variant B shows 3.0% conversion vs control at 2.8%, with n = 2,000 per variant. Would you ship B? Give your reasoning in 2–3 sentences — think about effect size, sample size, and what could be wrong here."},{id:"m6-t3",title:"6.3 Cohort Retention",kind:"concept",content:`A retention cohort answers: "of the users who signed up in month X, how many came back in month X+1, X+2, …"

Why it beats a single retention rate: it isolates the effect of WHEN a user joined, so you can tell whether a fix improved retention for new users or just inflated short-term numbers with returning veterans.

How to build it (SQL pseudocode):

  WITH cohort AS (
    SELECT customer_id,
           DATE_TRUNC('month', signup_date) AS cohort_month
    FROM customers
  ),
  activity AS (
    SELECT c.customer_id, c.cohort_month,
           DATE_TRUNC('month', o.created_at) AS active_month
    FROM cohort c
    JOIN orders o USING (customer_id)
  )
  SELECT cohort_month,
         active_month,
         COUNT(DISTINCT customer_id) AS active_users
  FROM activity
  GROUP BY 1, 2;

Pivot the result to a triangular matrix (rows = cohorts, columns = months since signup). The diagonal pattern reveals whether retention is decaying faster than it should.

Cohort retention is THE long-term health metric — leaders care more about month-6 retention than week-1 conversion.`,exercisePrompt:"Walk through, in plain English: what columns and aggregations would you need to build a monthly cohort retention table from  customers  and  orders? Mention the cohort definition, the active-month calculation, and the final shape (rows × columns × cell value). 3–5 sentences."},{id:"m6-t4",title:"6.4 Pricing & Elasticity",kind:"concept",content:`Price elasticity of demand =  (% change in quantity)  /  (% change in price).

  |elasticity| > 1  → demand is ELASTIC.    Lowering price boosts revenue.
  |elasticity| < 1  → demand is INELASTIC.  Raising price boosts revenue.
  |elasticity| = 1  → revenue is flat across price changes.

Elasticity is nearly always negative (raise price → demand drops) so we report the absolute value.

Real-world wrinkles:
- Brand effect — premium positioning lets you stay inelastic
- Substitutes — a competitor one click away pushes elasticity up
- Segmentation — business travellers low-elasticity, leisure high
- Time horizon — short-run inelastic, long-run elastic (people adjust)

Pricing decisions analysts get asked:
- Should we cut price? Compute elasticity from past changes. If |e| > 1, yes.
- Where on the curve are we? Look at A/B price experiments — without one you're guessing.
- Are we leaving money on the table? Compare ADR + cancellation rate to comparable hotels.

Lazada/Shopee ask price-cut reasoning. Agoda asks hotel ADR optimisation.`,exercisePrompt:"A hotel raises ADR (average daily rate) by 10% and bookings drop 8% the following month. What is the (absolute) price elasticity here, is demand elastic or inelastic, and would you recommend they hold the higher price? 2–3 sentences."},{id:"m6-t5",title:"6.5 Funnel Analysis",kind:"concept",content:`A funnel splits a single user journey into stages and measures drop-off at each step.

E-commerce funnel:
  visit → product detail → add to cart → checkout → pay

For each adjacent pair: step conversion = step_N / step_(N-1).

Why funnels matter:
- They isolate WHERE you're losing users, not just THAT you are.
- Optimising the worst step has the biggest revenue impact.
- They expose drop-off cliffs that an aggregate CR hides.

PITFALLS:
- Time window — does the user need to complete in one session? a week? define it.
- User-level vs session-level — different denominators, different numbers.
- Order assumption — "did they cart THEN view"? Real users back-and-forth.
- New vs returning — funnel shape differs by segment.

Computing it in SQL (sketch):
  WITH steps AS (
    SELECT user_id, MAX(event='view')     AS viewed,
                   MAX(event='cart')      AS carted,
                   MAX(event='checkout')  AS checked,
                   MAX(event='pay')       AS paid
    FROM events GROUP BY user_id
  )
  SELECT SUM(viewed), SUM(carted), SUM(checked), SUM(paid) FROM steps;`,exercisePrompt:"A Shopee funnel last week: 10,000 visits → 4,000 product views → 800 carts → 600 checkouts → 400 paid. Where is the biggest drop-off in ABSOLUTE users, and where is the worst step-conversion in PERCENTAGE terms? 2–3 sentences."},{id:"m6-t6",title:"6.6 P-values — Intuition without the Maths",kind:"concept",content:`The number you'll be asked about in every A/B-test interview.

DEFINITION (plain English): "Assuming the variant has NO real effect, what's the probability we'd see a difference at least as large as the one we observed, just by chance?"

  Low p-value (e.g. p = 0.01) → observed difference is UNLIKELY under no-effect → evidence the effect is real.
  High p-value (e.g. p = 0.4) → difference is well within what random noise produces → no evidence of an effect.

Standard threshold: p < 0.05  → "statistically significant."

WHAT P-VALUES ARE NOT:
- NOT the probability the variant works.
- NOT the probability you'd see this result if you re-ran the test.
- They do NOT tell you HOW BIG the effect is — they only address "is it likely random?"

THE TWO MISUSES INTERVIEWERS PROBE:
1. PEEKING — checking p daily, stopping when significant. Inflates the false-positive rate.
2. CONFUSING SIGNIFICANCE WITH IMPORTANCE — at high traffic, p=0.0001 on a 0.1% lift is still a worthless lift (significance comes from huge n, not from the effect being meaningful).

Senior take: "p-value is one input. I also want effect size, confidence interval, and a sanity check on sample ratio."`,exercisePrompt:"A test shows variant B with a 7% relative lift, p = 0.02, but only 500 users per arm. In 2–3 sentences, would you ship and why or why not? Consider what a p-value addresses vs what it ignores."},{id:"m6-t7",title:"6.7 Confidence Intervals",kind:"concept",content:`The interval gives you the EFFECT SIZE picture a p-value alone doesn't.

A 95% CI for the variant lift, like  [+0.4%, +3.6%] , reads as: "We're 95% confident the true effect is somewhere in this range."

Tighter intervals = more data = more confidence.

THE 3 SCENARIOS YOU'LL SEE:
- Wide CI CONTAINING 0     →  underpowered, can't conclude anything
- Narrow CI NOT containing 0 → real effect, with size you can plan around
- CI on BOTH sides of 0 close to it →  effect may exist or may not — collect more data

PRACTICAL READING:
- Lift CI: [-0.5%, +0.5%]   →  flat. Don't ship.
- Lift CI: [+0.1%, +5.0%]   →  effect positive but uncertain how big.
- Lift CI: [+2.0%, +2.4%]   →  ship it. Strong, narrow signal.

INTERVAL > P-VALUE in interviews. P-value is binary (yes/no); CI shows MAGNITUDE.`,exercisePrompt:"A test reports a +1.2% lift with 95% CI of [-0.3%, +2.7%], p = 0.08. The PM wants to ship. In 2–3 sentences, what do you recommend and why?"},{id:"m6-t8",title:"6.8 Power & Sample Size",kind:"concept",content:`Before you run a test, decide how big it needs to be.

The 4 levers:
- BASELINE rate (e.g. 5% conversion)
- MINIMUM DETECTABLE EFFECT — the smallest lift you'd care to catch (e.g. detect a 10% relative lift = 5.5%)
- SIGNIFICANCE α — usually 0.05
- POWER 1-β — usually 0.80 — the prob you'd detect the effect if it's real

Rough rule for proportions at α=0.05, power=0.80:

  Smaller effect or smaller baseline → MUCH bigger sample required.

  For a 5% baseline, detecting a 10% relative lift (5.0% → 5.5%) needs ≈ 30,000 per variant.
  For a 1% baseline, detecting a 10% relative lift needs closer to 150,000 per variant.

Sample-size calculators (Evan Miller, statsig.com, your internal tool) make the maths trivial. The skill is knowing to USE one before the test starts.

UNDERPOWERED TESTS waste calendar time without producing decisions. Calling a flat result "no difference" when you only had power 0.30 is the canonical analyst mistake.`,exercisePrompt:"Your team wants to detect a 5% RELATIVE lift on a 3% baseline conversion (so 3.0% → 3.15%). Are 5,000 users per variant enough? In 2–3 sentences, what's your answer and what would you tell the PM?"},{id:"m6-t9",title:"6.9 Sample Ratio Mismatch (SRM)",kind:"concept",content:`You ran a 50/50 A/B test. You expected 50,000 users per variant. You got 47,212 vs 52,788.

That difference is too large for random assignment alone to explain — your test is BROKEN. Conclusions from an SRM test are UNRELIABLE no matter what the p-value says on the primary metric.

WHY IT HAPPENS:
- Buggy randomisation (hash modulo on a non-uniform key)
- Cookie / client-side bucketing collisions
- Bot traffic landing predominantly on one variant
- Different feature flags shipping at different times
- One variant errors out → user retries → ends up in the other

HOW TO DETECT:
- Chi-square test on the bucket counts vs expected ratio.
- Most experimentation platforms surface SRM automatically — TRUST THE WARNING.

WHAT TO DO:
- DON'T pretend the metric result is valid.
- Investigate the bucketing pipeline. Talk to engineering.
- Re-run after fix. Don't slip and say "close enough."

This is the #1 thing that turns a "winning" experiment into an embarrassing rollback.`,exercisePrompt:"An A/B test with 50/50 design shows a 48% / 52% split with 100,000 total users. Should you trust the conversion comparison? In 2–3 sentences, justify your answer."},{id:"m6-t10",title:"6.10 Cannibalization vs Incrementality",kind:"concept",content:`You launched a new product. It made $1M. Did you make $1M MORE, or did you shift $1M from your existing products?

That's the cannibalization question.

INCREMENTAL revenue   = revenue that wouldn't have happened otherwise.
CANNIBALIZED revenue  = revenue that shifted between channels/products with no net change.

HOW YOU MEASURE IT:
- A/B HOLDOUT — keep a control group from seeing the new feature. Compare TOTAL spend, not feature-specific spend.
- PRE/POST with CONTROL MARKET — compare cities or segments that did vs didn't get the rollout.
- CAUSAL MODELING — diff-in-diff, synthetic control. Used when randomisation isn't possible.

A LAZADA / SHOPEE INTERVIEW QUESTION SHAPE: "We launched a flash-sale feature. GMV in the flash-sale category went up 30%. What do you want to know before celebrating?"

Right answer: incrementality. Maybe regular-price GMV in the same category dropped 25%. Net lift is +5%, not +30%.

This separates senior analysts from junior ones.`,exercisePrompt:'Lazada launched a "flash sale" feature. Category GMV rose 30% in flash-sale weeks. In 2–3 sentences, what additional data do you need to know if this was real growth or just cannibalization of existing demand?'},{id:"m6-t11",title:"6.11 Forecasting Methods at a Glance",kind:"concept",content:`You don't need to be a forecasting expert. You need to RECOGNISE the methods.

NAIVE / MOVING AVERAGE — last value, or mean of last N. Baseline; useful sanity check.

EXPONENTIAL SMOOTHING — weighted average giving recent values more weight. Variants:
  - Simple smoothing      (level only)
  - Holt                  (level + trend)
  - Holt-Winters          (level + trend + seasonality)

ARIMA — auto-regressive integrated moving average. Time-series workhorse when residuals are stationary.

PROPHET (Meta) — additive decomposition with seasonality + holiday regressors. Good for business data.

ML methods — XGBoost on time-shifted features, LSTM, etc. Overkill for most analyst work.

THE QUESTIONS TO ASK BEFORE PICKING:
- Is there a trend?
- Is there seasonality? Weekly? Yearly?
- Is there a holiday effect?
- How far ahead do I need to forecast?
- What's the cost of being wrong by 10%? 50%?

For Shopee/Lazada/Agoda — DEMAND FORECASTING usually means Prophet or seasonal-naive baselines, not deep learning.`,exercisePrompt:"You're forecasting hotel bookings 30 days out for Agoda. Bookings have strong weekly seasonality (weekends > weekdays) and rise around holidays. In 2–3 sentences, which method would you start with and why?"},{id:"m6-t12",title:"6.12 Diagnosing a Metric Drop — Case Study",kind:"concept",content:`THE INTERVIEW STAPLE. "GMV dropped 20% week-over-week. What do you do?"

A 5-step framework that signals "I think like a senior analyst":

1. CONFIRM IT'S REAL
   - Is the metric calculation broken? Tracking issue?
   - Is the comparison window correct?
   - Cross-check against an independent data source.

2. DECOMPOSE
   - GMV = visitors × CR × AOV. Which factor changed?
   - Split by country, category, device, new vs returning users.
   - Look at funnel-step-level conversion.

3. SEGMENT
   - Is the drop uniform, or concentrated in one segment?
   - "iOS only" → an app release bug.
   - "TH only" → marketing change or payment outage.

4. CORRELATE WITH EXTERNAL
   - What shipped this week? Product, marketing, pricing, payments.
   - Competitor promo? Holiday? Outage?
   - Cross-reference against the change log.

5. PROPOSE FIX & QUANTIFY IMPACT
   - "Rollback flag X — estimated lift +12%."
   - "Add SKU search results back; A/B test estimates +3%."

SAY THIS FRAMEWORK OUT LOUD in the interview. Don't just "I'd look at the data" — name the steps.`,exercisePrompt:"GMV dropped 20% week-over-week. Traffic was flat. AOV was flat. In 3–4 sentences, what's your hypothesis and which specific data would you pull next?"}]}],qf="claude-haiku-4-5-20251001",rl="pds_prep_api_key";function Yo(){try{return localStorage.getItem(rl)||""}catch{return""}}function Qf(f){try{localStorage.setItem(rl,f)}catch{}}function Kf(){try{localStorage.removeItem(rl)}catch{}}async function ol(f){const h=Yo();if(!h)throw new Error('No API key configured. Click "Set API key" in the header and paste your Anthropic key.');const a=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":h,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:qf,max_tokens:1e3,messages:[{role:"user",content:f}]})});if(!a.ok){const v=await a.text().catch(()=>"");throw new Error(`Grader API ${a.status}: ${v.slice(0,200)}`)}return(await a.json()).content.filter(v=>v.type==="text").map(v=>v.text).join(`
`)}function Ar(f,h=1500){return f?f.length>h?f.slice(0,h)+`
…(truncated, ${f.length-h} more chars)`:f:""}function Xf(f,h){if(!f)return"";const a=["EXECUTION OUTPUT (what their code actually printed / returned):"];if(h==="sql")if(f.error)a.push(`error:
${Ar(f.error)}`);else{const x=f.results||[];x.length===0?a.push("(query ran but returned no rows)"):x.forEach((v,I)=>{const A=(v.columns||[]).join(" | "),M=(v.values||[]).slice(0,20).map(K=>K.join(" | ")),D=(v.values||[]).length>20?`
…(${(v.values||[]).length-20} more rows)`:"";a.push(`statement ${I+1}:
${A}
${M.join(`
`)}${D}`)})}else a.push(`stdout:
${Ar(f.stdout)||"(empty)"}`),a.push(`stderr:
${Ar(f.stderr)||"(empty)"}`),a.push(`last-expression result:
${Ar(f.result)||"(none)"}`),f.error&&a.push(`traceback:
${Ar(f.error)}`);return a.join(`
`)}async function vc({topic:f,submission:h,runOutput:a}){const x=Xf(a,f.kind),v=`You are grading a beginner Python / Pandas / SQL exercise. The student is preparing for data analyst assessments at Shopee, Lazada, and Agoda (Alooba platform).

LESSON CONTEXT:
${f.content}

EXERCISE:
${f.exercisePrompt}

STUDENT SUBMISSION:
${h}
${x?`
`+x+`
`:""}
Grade leniently on syntax (missing semicolons, minor typos, equivalent variable names are fine). Grade strictly on the CONCEPT — did they demonstrate the idea the lesson taught? For conceptual questions, look for the right reasoning, not specific wording.${x?" Treat the execution output as evidence: if it shows a traceback the submission cannot pass; if the result is implausible for the question, lean towards needs_work.":""}

Return ONLY valid JSON, no markdown fences, in exactly this shape:
{"status": "passed" or "needs_work", "feedback": "1-2 sentences. Encouraging. Specific. If they missed something, name the concept (not the keyword)."}`,I=(await ol(v)).replace(/```json|```/g,"").trim(),A=JSON.parse(I);if(A.status!=="passed"&&A.status!=="needs_work")throw new Error("Unexpected grader response shape");return A}async function Jf({questions:f,grades:h}){const a=f.map((A,M)=>{const D=h[M]||{status:"unknown",feedback:""};return`Q${M+1} (${A.kind} · ${A.title}): ${D.status} — ${D.feedback}`}).join(`
`),x=h.filter(A=>A.status==="passed").length,v=h.length,I=`A student just completed a 6-question timed mock assessment preparing for data analyst roles at Shopee, Lazada, and Agoda (Alooba). Results:

${a}

Score: ${x}/${v} passed.

In 3-4 sentences, give an HONEST, useful overall takeaway:
- What patterns are strongest / weakest across their answers?
- 1-2 specific concept areas they should review before the real assessment.
- Encouraging but blunt. Don't sugar-coat a low score; don't oversell a high one.

Return ONLY the takeaway prose, no JSON, no fences, no preamble.`;return(await ol(I)).trim()}async function Zf({topic:f}){const h=`You are giving a hint for a beginner exercise. Do NOT give the answer. Nudge the student.

EXERCISE: ${f.exercisePrompt}

Give one sentence that points them toward the right concept or syntax pattern without solving it.`;return(await ol(h)).trim()}function ep(f){let h=f>>>0;return function(){h=h+1831565813>>>0;let a=h;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296}}const Ko=ep(42),qo=f=>f[Math.floor(Ko()*f.length)],Ut=(f,h)=>f+Math.floor(Ko()*(h-f+1)),xc=["TH","TH","TH","SG","SG","MY"],tp=["paid","paid","paid","paid","cancelled","pending"],np=["electronics","fashion","home","beauty","grocery"],wc=60,rp=200,op=120;function sl(f,h,a){const x=String(h).padStart(2,"0"),v=String(a).padStart(2,"0");return`${f}-${x}-${v}`}const il=Array.from({length:wc},(f,h)=>({customer_id:1001+h,country:qo(xc),signup_date:sl(2024,Ut(1,12),Ut(1,28))})),kc=Array.from({length:rp},(f,h)=>{const a=il[Ut(0,wc-1)];return{order_id:5001+h,customer_id:a.customer_id,gmv:Number((50+Ko()*2950).toFixed(2)),status:qo(tp),country:a.country,created_at:sl(2025,Ut(1,5),Ut(1,28)),category:qo(np)}}),sp=Array.from({length:op},(f,h)=>{const a=qo(xc),x=Ut(1,14),v=800+Math.floor(Ko()*4200);return{booking_id:9001+h,hotel_id:200+Ut(0,19),nights:x,price:Number((x*v).toFixed(2)),country:a,created_at:sl(2025,Ut(1,5),Ut(1,28))}}),ip=[120,480,75,1500,60,230,880],lp="0.26.4",Ec=`https://cdn.jsdelivr.net/pyodide/v${lp}/full/`;let qi=null;function ap(){return new Promise((f,h)=>{if(window.loadPyodide)return f();const a="pyodide-cdn-script";if(document.getElementById(a)){const v=document.getElementById(a);v.addEventListener("load",()=>f()),v.addEventListener("error",()=>h(new Error("Pyodide script failed to load")));return}const x=document.createElement("script");x.id=a,x.src=`${Ec}pyodide.js`,x.onload=()=>f(),x.onerror=()=>h(new Error("Pyodide script failed to load")),document.head.appendChild(x)})}const up=`
import ast, io, contextlib, traceback

def _run_user(code, ns):
    stdout = io.StringIO()
    stderr = io.StringIO()
    result_repr = ''
    error = ''
    try:
        tree = ast.parse(code, mode='exec')
        last_expr = None
        if tree.body and isinstance(tree.body[-1], ast.Expr):
            last_expr = tree.body.pop()
        with contextlib.redirect_stdout(stdout), contextlib.redirect_stderr(stderr):
            if tree.body:
                exec(compile(ast.Module(body=tree.body, type_ignores=[]), '<user>', 'exec'), ns)
            if last_expr is not None:
                value = eval(compile(ast.Expression(body=last_expr.value), '<user>', 'eval'), ns)
                if value is not None:
                    try:
                        import pandas as pd
                        if isinstance(value, (pd.DataFrame, pd.Series)):
                            result_repr = value.head(10).to_string()
                        else:
                            result_repr = repr(value)
                    except Exception:
                        result_repr = repr(value)
    except Exception:
        error = traceback.format_exc()
    return {
        'stdout': stdout.getvalue(),
        'stderr': stderr.getvalue(),
        'result': result_repr,
        'error': error,
    }
`;async function cp(f){f&&f("Downloading Pyodide…"),await ap(),f&&f("Booting Python…");const h=await window.loadPyodide({indexURL:Ec});return f&&f("Loading pandas…"),await h.loadPackage(["pandas"]),f&&f("Seeding dataset…"),h.globals.set("_orders_json",JSON.stringify(kc)),h.globals.set("_customers_json",JSON.stringify(il)),h.globals.set("_sales_json",JSON.stringify(ip)),h.runPython(`
import json
import pandas as pd

orders = pd.DataFrame(json.loads(_orders_json))
customers = pd.DataFrame(json.loads(_customers_json))
sales = json.loads(_sales_json)
`),h.runPython(up),h.runPython(`
_user_ns = {
    'pd': pd,
    'orders': orders,
    'customers': customers,
    'sales': sales,
}
`),h}function dp(f){return qi||(qi=cp(f)),qi}async function Sc(f,h){const a=await dp(h),x=a.globals.get("_run_user"),v=a.globals.get("_user_ns");try{const I=x(f,v),A=I.toJs({dict_converter:Object.fromEntries});return I.destroy&&I.destroy(),A}finally{x.destroy&&x.destroy(),v.destroy&&v.destroy()}}const fp="1.10.3",Nc=`https://cdn.jsdelivr.net/npm/sql.js@${fp}/dist/`;let Qi=null;function pp(){return new Promise((f,h)=>{if(window.initSqlJs)return f();const a="sqljs-cdn-script";if(document.getElementById(a)){const v=document.getElementById(a);v.addEventListener("load",()=>f()),v.addEventListener("error",()=>h(new Error("sql.js script failed to load")));return}const x=document.createElement("script");x.id=a,x.src=`${Nc}sql-wasm.js`,x.onload=()=>f(),x.onerror=()=>h(new Error("sql.js script failed to load")),document.head.appendChild(x)})}const mp=`
CREATE TABLE orders (
  order_id    INTEGER PRIMARY KEY,
  customer_id INTEGER,
  gmv         REAL,
  status      TEXT,
  country     TEXT,
  created_at  TEXT,
  category    TEXT
);
CREATE TABLE customers (
  customer_id INTEGER PRIMARY KEY,
  country     TEXT,
  signup_date TEXT
);
CREATE TABLE bookings (
  booking_id INTEGER PRIMARY KEY,
  hotel_id   INTEGER,
  nights     INTEGER,
  price      REAL,
  country    TEXT,
  created_at TEXT
);
`;function hp(f){f.exec(mp);const h=(a,x)=>{const v=f.prepare(a);f.exec("BEGIN");try{for(const I of x)v.run(I);f.exec("COMMIT")}finally{v.free()}};h("INSERT INTO orders (order_id, customer_id, gmv, status, country, created_at, category) VALUES (?,?,?,?,?,?,?)",kc.map(a=>[a.order_id,a.customer_id,a.gmv,a.status,a.country,a.created_at,a.category])),h("INSERT INTO customers (customer_id, country, signup_date) VALUES (?,?,?)",il.map(a=>[a.customer_id,a.country,a.signup_date])),h("INSERT INTO bookings (booking_id, hotel_id, nights, price, country, created_at) VALUES (?,?,?,?,?,?)",sp.map(a=>[a.booking_id,a.hotel_id,a.nights,a.price,a.country,a.created_at]))}async function yp(f){f&&f("Downloading SQLite…"),await pp(),f&&f("Booting SQLite…");const h=await window.initSqlJs({locateFile:x=>`${Nc}${x}`}),a=new h.Database;return f&&f("Seeding tables…"),hp(a),a}function gp(f){return Qi||(Qi=yp(f)),Qi}async function Tc(f,h){const a=await gp(h);try{return{results:a.exec(f),error:""}}catch(x){return{results:[],error:x.message||String(x)}}}const fc=2700*1e3,_c=4;function Ki(f,h){const a=[...f],x=[];for(let v=0;v<h&&a.length;v++){const I=Math.floor(Math.random()*a.length);x.push(a.splice(I,1)[0])}return x}function vp(f){const h=f.find(M=>M.id==="m4")?.topics||[],a=f.find(M=>M.id==="m5")?.topics||[],x=f.find(M=>M.id==="m6")?.topics||[],v=Ki(h,1),I=Ki(a,3),A=Ki(x,2);return[...v,...I,...A]}function xp(f){const h=f.filter(x=>x.status==="passed").length,a=f.length;return{passed:h,total:a,score:Math.round(h/a*100),verdict:h>=_c?"would_pass":"would_not_pass"}}function wp(f){f<0&&(f=0);const h=Math.floor(f/1e3),a=Math.floor(h/60),x=h%60;return`${String(a).padStart(2,"0")}:${String(x).padStart(2,"0")}`}const Ke="#0f1729",Et="#1a2440",Ae="#222e4d",H="#2a3654",q="#3b82f6",sn="#60a5fa";function kp({onExit:f}){const[h,a]=te.useState(null),[x,v]=te.useState({}),[I,A]=te.useState({}),[M,D]=te.useState({}),[K,ne]=te.useState({}),[J,se]=te.useState(Date.now()),[ge,De]=te.useState(!1),[ie,X]=te.useState(""),[Oe,$e]=te.useState(null);te.useEffect(()=>{if(!h||Oe)return;const W=setInterval(()=>se(Date.now()),1e3);return()=>clearInterval(W)},[h,Oe]);const ke=h?fc-(J-h.startedAt):fc;te.useEffect(()=>{!h||Oe||ge||ke<=0&&Ee()},[ke,h,Oe,ge]);const Ne=()=>{a({questions:vp(It),startedAt:Date.now()}),v({}),A({}),$e(null),se(Date.now())},Te=async W=>{const fe=x[W.id]||"";if(fe.trim()){D($=>({...$,[W.id]:!0})),ne($=>({...$,[W.id]:W.kind==="sql"?"Booting SQLite…":"Booting Python…"}));try{const $=W.kind==="sql"?await Tc(fe,G=>ne(ae=>({...ae,[W.id]:G}))):await Sc(fe,G=>ne(ae=>({...ae,[W.id]:G})));A(G=>({...G,[W.id]:$}))}catch($){console.error($),A(G=>({...G,[W.id]:W.kind==="sql"?{results:[],error:`Sandbox error: ${$.message||$}`}:{stdout:"",stderr:"",result:"",error:`Sandbox error: ${$.message||$}`}}))}finally{D($=>({...$,[W.id]:!1})),ne($=>({...$,[W.id]:""}))}}},Ee=async()=>{if(!(!h||Oe||ge)){De(!0),X(`Grading 0/${h.questions.length}…`);try{const W=[];for(let G=0;G<h.questions.length;G++){const ae=h.questions[G];X(`Grading ${G+1}/${h.questions.length}…`);try{const Ce=await vc({topic:ae,submission:x[ae.id]||"(no answer)",runOutput:ae.kind==="concept"?void 0:I[ae.id]});W.push(Ce)}catch(Ce){W.push({status:"needs_work",feedback:`Grader error: ${Ce.message||Ce}`})}}X("Generating overall takeaway…");let fe=null;try{fe=await Jf({questions:h.questions,grades:W})}catch{fe="(Overall takeaway unavailable — see per-question feedback below.)"}const $=xp(W);$e({grades:W,summary:fe,verdict:$,finishedAt:Date.now()})}finally{De(!1),X("")}}},_e=()=>{window.confirm("Start a fresh mock? Your current results will be cleared.")&&(a(null),v({}),A({}),$e(null))};if(!h)return l.jsx(Ep,{onStart:Ne,onExit:f});if(Oe)return l.jsx(Sp,{session:h,drafts:x,results:Oe,onNewMock:_e,onExit:f});const Ve=h.questions.filter(W=>(x[W.id]||"").trim().length>0).length,Be=ke<300*1e3;return l.jsxs("div",{className:"flex flex-col h-screen overflow-hidden",style:{background:Ke,color:"#e2e8f0",fontFamily:"'Plus Jakarta Sans', system-ui, sans-serif"},children:[l.jsxs("header",{className:"px-6 py-3.5 flex items-center justify-between flex-shrink-0",style:{background:Et,borderBottom:`1px solid ${H}`},children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-8 h-8 rounded-lg flex items-center justify-center",style:{background:`${q}22`,border:`1px solid ${q}55`},children:l.jsx(el,{className:"w-4 h-4",style:{color:q}})}),l.jsxs("div",{children:[l.jsx("div",{className:"text-base font-extrabold tracking-tight text-slate-100",children:"Mock Assessment"}),l.jsx("div",{className:"text-[11px] text-slate-500 uppercase tracking-wider",children:"45-min · 6 questions · no hints"})]})]}),l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-lg font-bold text-sm",style:{background:Be?"#7f1d1d22":Ae,color:Be?"#fca5a5":"#3b82f6",border:Be?"1px solid #7f1d1d55":`1px solid ${H}`,fontFamily:"'JetBrains Mono', monospace"},children:[l.jsx(Bf,{className:"w-4 h-4"}),wp(ke)]}),l.jsxs("div",{className:"text-xs text-slate-400 font-semibold",children:[Ve,"/",h.questions.length," answered"]}),l.jsx("button",{onClick:Ee,disabled:ge,className:"px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 disabled:opacity-60",style:{background:q,color:"#ffffff"},children:ge?l.jsxs(l.Fragment,{children:[l.jsx(Yn,{className:"w-4 h-4 animate-spin"}),ie||"Grading…"]}):l.jsxs(l.Fragment,{children:[l.jsx(Ji,{className:"w-4 h-4"}),"Submit all"]})}),l.jsx("button",{onClick:()=>{window.confirm("Abandon this mock and return to Practice mode?")&&f()},className:"p-2 rounded-lg text-slate-500 hover:text-slate-100",style:{border:`1px solid ${H}`},children:l.jsx(gc,{className:"w-4 h-4"})})]})]}),l.jsx("div",{className:"flex-1 overflow-y-auto",children:l.jsxs("div",{className:"max-w-3xl mx-auto px-6 md:px-10 py-8 md:py-12 space-y-8",children:[h.questions.map((W,fe)=>l.jsx(Tp,{index:fe+1,total:h.questions.length,topic:W,draft:x[W.id]||"",onDraft:$=>v(G=>({...G,[W.id]:$})),onRun:()=>Te(W),isRunning:!!M[W.id],runStage:K[W.id]||"",runOutput:I[W.id],disabled:ge},W.id)),l.jsx("div",{className:"pb-12",children:l.jsx("button",{onClick:Ee,disabled:ge,className:"w-full px-5 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-60",style:{background:q,color:"#ffffff"},children:ge?l.jsxs(l.Fragment,{children:[l.jsx(Yn,{className:"w-4 h-4 animate-spin"}),ie||"Grading…"]}):l.jsxs(l.Fragment,{children:[l.jsx(Ji,{className:"w-4 h-4"}),"Submit all & grade"]})})})]})})]})}function Ep({onStart:f,onExit:h}){return l.jsx("div",{className:"flex flex-col h-screen overflow-hidden items-center justify-center px-6",style:{background:Ke,color:"#e2e8f0",fontFamily:"'Plus Jakarta Sans', system-ui, sans-serif"},children:l.jsxs("div",{className:"max-w-xl w-full rounded-2xl p-8 md:p-10",style:{background:Et,border:`1px solid ${H}`},children:[l.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[l.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center",style:{background:`${q}22`,border:`1px solid ${q}55`},children:l.jsx(el,{className:"w-5 h-5",style:{color:q}})}),l.jsx("h1",{className:"text-3xl text-slate-100",style:{fontFamily:"'Fraunces', Georgia, serif",fontWeight:800},children:"Mock Assessment"})]}),l.jsxs("div",{className:"space-y-3 text-[15px] text-slate-300 leading-relaxed mb-8",children:[l.jsxs("p",{children:[l.jsx("strong",{className:"text-slate-100",children:"45 minutes. 6 questions."})," Roughly the same shape and pressure as an Alooba timed screen."]}),l.jsxs("ul",{className:"text-[14px] text-slate-400 space-y-1 ml-1",children:[l.jsx("li",{children:"· 1 pandas exercise (Module 4)"}),l.jsx("li",{children:"· 3 SQL exercises (Module 5)"}),l.jsx("li",{children:"· 2 business / stats questions (Module 6)"})]}),l.jsxs("p",{children:[l.jsx("strong",{className:"text-slate-100",children:"Run is enabled, hints are off."})," Submit when you're done (or when the timer hits zero) and the grader scores all 6 at once with an honest pass/fail estimate."]}),l.jsxs("p",{className:"text-[13px] text-slate-500",children:["Pass threshold: ",_c,"/6. Questions are sampled freshly each session."]})]}),l.jsxs("div",{className:"flex gap-3",children:[l.jsxs("button",{onClick:f,className:"flex-1 px-5 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2",style:{background:q,color:"#ffffff"},children:[l.jsx(tl,{className:"w-4 h-4"}),"Start mock"]}),l.jsx("button",{onClick:h,className:"px-5 py-3 rounded-lg text-sm font-semibold",style:{background:"transparent",color:"#64748b",border:`1px solid ${H}`},children:"Back to Practice"})]})]})})}function Sp({session:f,drafts:h,results:a,onNewMock:x,onExit:v}){const{grades:I,summary:A,verdict:M}=a,D=M.verdict==="would_pass";return l.jsxs("div",{className:"flex flex-col h-screen overflow-hidden",style:{background:Ke,color:"#e2e8f0",fontFamily:"'Plus Jakarta Sans', system-ui, sans-serif"},children:[l.jsxs("header",{className:"px-6 py-3.5 flex items-center justify-between flex-shrink-0",style:{background:Et,borderBottom:`1px solid ${H}`},children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-8 h-8 rounded-lg flex items-center justify-center",style:{background:`${q}22`,border:`1px solid ${q}55`},children:l.jsx(hc,{className:"w-4 h-4",style:{color:q}})}),l.jsx("span",{className:"text-base font-extrabold tracking-tight text-slate-100",children:"Mock results"})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("button",{onClick:x,className:"px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2",style:{background:Ae,color:"#94a3b8",border:`1px solid ${H}`},children:[l.jsx(Xi,{className:"w-3.5 h-3.5"}),"New mock"]}),l.jsx("button",{onClick:v,className:"px-3 py-1.5 rounded-lg text-xs font-semibold",style:{background:"transparent",color:"#64748b",border:`1px solid ${H}`},children:"Back to Practice"})]})]}),l.jsx("div",{className:"flex-1 overflow-y-auto",children:l.jsxs("div",{className:"max-w-3xl mx-auto px-6 md:px-10 py-8 md:py-12 space-y-6",children:[l.jsxs("div",{className:"rounded-2xl p-6 md:p-8",style:{background:D?"#10b9811a":"#f59e0b1a",border:D?"1px solid #10b98155":"1px solid #f59e0b55"},children:[l.jsx("div",{className:"text-[11px] font-bold uppercase tracking-widest mb-2",style:{color:D?"#34d399":"#fbbf24"},children:D?"Would likely pass":"Would likely not pass"}),l.jsxs("div",{className:"flex items-baseline gap-3 mb-4",children:[l.jsxs("span",{className:"text-5xl",style:{fontFamily:"'Fraunces', Georgia, serif",fontWeight:800,color:D?"#34d399":"#fbbf24"},children:[M.passed,"/",M.total]}),l.jsxs("span",{className:"text-lg text-slate-400 font-semibold",children:["· ",M.score,"%"]})]}),A&&l.jsx("p",{className:"text-[15px] text-slate-200 leading-relaxed",children:A})]}),f.questions.map((K,ne)=>l.jsx(Np,{index:ne+1,topic:K,draft:h[K.id]||"",grade:I[ne]},K.id)),l.jsxs("div",{className:"pb-12 flex gap-3",children:[l.jsxs("button",{onClick:x,className:"flex-1 px-5 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2",style:{background:q,color:"#ffffff"},children:[l.jsx(Xi,{className:"w-4 h-4"}),"Start a new mock"]}),l.jsx("button",{onClick:v,className:"px-5 py-3 rounded-lg text-sm font-semibold",style:{background:"transparent",color:"#64748b",border:`1px solid ${H}`},children:"Back to Practice"})]})]})})]})}function Np({index:f,topic:h,draft:a,grade:x}){const v=x?.status==="passed";return l.jsxs("div",{className:"rounded-xl overflow-hidden",style:{background:Et,border:`1px solid ${H}`},children:[l.jsxs("div",{className:"px-5 py-3 flex items-center gap-3",style:{borderBottom:`1px solid ${H}`,background:Ae},children:[l.jsxs("span",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-500",children:["Q",f," · ",h.kind]}),l.jsx("span",{className:"text-[13px] font-semibold text-slate-200 truncate",children:h.title}),l.jsx("span",{className:"ml-auto px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider",style:{background:v?"#10b9811a":"#f59e0b1a",color:v?"#34d399":"#fbbf24",border:v?"1px solid #10b98155":"1px solid #f59e0b55"},children:v?"passed":"needs work"})]}),l.jsxs("div",{className:"p-5 space-y-4",children:[l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1",children:"Prompt"}),l.jsx("p",{className:"text-[13.5px] text-slate-300 leading-relaxed",children:h.exercisePrompt})]}),l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1",children:"Your answer"}),l.jsx("pre",{className:"text-[12.5px] leading-relaxed whitespace-pre-wrap break-words p-3 rounded-md",style:{background:Ke,border:`1px solid ${H}`,fontFamily:"'JetBrains Mono', monospace",color:"#e2e8f0"},children:a.trim()||"(no answer submitted)"})]}),l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] font-bold uppercase tracking-widest mb-1",style:{color:v?"#34d399":"#fbbf24"},children:"Feedback"}),l.jsx("p",{className:"text-[13.5px] text-slate-200 leading-relaxed",children:x?.feedback||"(no feedback)"})]})]})]})}function Tp({index:f,total:h,topic:a,draft:x,onDraft:v,onRun:I,isRunning:A,runStage:M,runOutput:D,disabled:K}){const ne=a.kind==="python"||a.kind==="sql";return l.jsxs("div",{className:"rounded-xl overflow-hidden",style:{background:Et,border:`1px solid ${H}`},children:[l.jsxs("div",{className:"px-5 py-3 flex items-center gap-3",style:{borderBottom:`1px solid ${H}`,background:Ae},children:[l.jsxs("span",{className:"text-[11px] font-bold uppercase tracking-wider",style:{color:q},children:["Q",f,"/",h]}),l.jsx("span",{className:"text-[13px] font-semibold text-slate-200 truncate",children:a.title}),l.jsx("span",{className:"ml-auto text-[10px] font-bold uppercase tracking-widest",style:{color:a.kind==="concept"?"#64748b":"#3b82f6"},children:a.kind})]}),l.jsxs("div",{className:"p-5 space-y-3",children:[l.jsx("p",{className:"text-[14.5px] text-slate-200 leading-relaxed",children:a.exercisePrompt}),a.kind==="python"&&l.jsxs("div",{className:"px-3 py-2 rounded-md text-[11px] text-slate-400 flex items-center gap-2",style:{background:Ae,border:`1px solid ${H}`},children:[l.jsx(nl,{className:"w-3.5 h-3.5",style:{color:sn}}),l.jsxs("span",{children:["Sandbox: ",l.jsx("code",{style:{color:"#3b82f6"},children:"orders"}),","," ",l.jsx("code",{style:{color:"#3b82f6"},children:"customers"}),","," ",l.jsx("code",{style:{color:"#3b82f6"},children:"pd"})]})]}),a.kind==="sql"&&l.jsxs("div",{className:"px-3 py-2 rounded-md text-[11px] text-slate-400 flex items-center gap-2",style:{background:Ae,border:`1px solid ${H}`},children:[l.jsx(Qo,{className:"w-3.5 h-3.5",style:{color:sn}}),l.jsxs("span",{children:["Tables: ",l.jsx("code",{style:{color:"#3b82f6"},children:"orders"}),","," ",l.jsx("code",{style:{color:"#3b82f6"},children:"customers"}),","," ",l.jsx("code",{style:{color:"#3b82f6"},children:"bookings"})]})]}),l.jsx("textarea",{className:"w-full h-36 p-4 rounded-lg outline-none resize-y",placeholder:a.kind==="concept"?"Plain English answer…":"Your code here.",value:x,onChange:J=>v(J.target.value),disabled:K,style:{background:Ke,border:`1px solid ${H}`,color:"#e2e8f0",fontFamily:"'JetBrains Mono', monospace",fontSize:"13.5px",lineHeight:1.6}}),ne&&l.jsx("div",{children:l.jsx("button",{onClick:I,disabled:A||K||!x.trim(),className:"px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 disabled:opacity-60",style:{background:Ae,color:"#3b82f6",border:"1px solid #3b82f655"},children:A?l.jsxs(l.Fragment,{children:[l.jsx(Yn,{className:"w-4 h-4 animate-spin"}),M||"Running…"]}):l.jsxs(l.Fragment,{children:[l.jsx(tl,{className:"w-4 h-4"}),"Run"]})})}),D&&l.jsx(_p,{output:D,kind:a.kind})]})]})}function _p({output:f,kind:h}){if(h==="sql"){if(f.error)return l.jsx("pre",{className:"mt-2 p-3 rounded-md text-[12px] whitespace-pre-wrap",style:{background:Ke,border:"1px solid #7f1d1d55",color:"#fca5a5",fontFamily:"'JetBrains Mono', monospace"},children:f.error});const x=(f.results||[])[0];return x?l.jsxs("div",{className:"mt-2 rounded-md overflow-x-auto",style:{background:Ke,border:`1px solid ${H}`},children:[l.jsxs("table",{className:"w-full text-[12px]",style:{fontFamily:"'JetBrains Mono', monospace",borderCollapse:"collapse"},children:[l.jsx("thead",{children:l.jsx("tr",{style:{background:Ae},children:x.columns.map(v=>l.jsx("th",{className:"text-left px-3 py-1 font-bold",style:{color:"#3b82f6",borderBottom:`1px solid ${H}`},children:v},v))})}),l.jsx("tbody",{children:x.values.slice(0,15).map((v,I)=>l.jsx("tr",{style:{borderBottom:`1px solid ${H}`},children:v.map((A,M)=>l.jsx("td",{className:"px-3 py-1",style:{color:A===null?"#94a3b8":"#e2e8f0"},children:A===null?"NULL":String(A)},M))},I))})]}),x.values.length>15&&l.jsxs("div",{className:"px-3 py-1 text-[11px] text-slate-500",children:["…",x.values.length-15," more rows"]})]}):l.jsx("div",{className:"text-[11px] text-slate-500 mt-1",children:"(Query ran, no rows.)"})}const a=[];return f.stdout&&a.push(["stdout",f.stdout,"#e2e8f0"]),f.result&&a.push(["result",f.result,"#3b82f6"]),f.stderr&&a.push(["stderr",f.stderr,"#fb923c"]),f.error&&a.push(["traceback",f.error,"#fca5a5"]),a.length===0?l.jsx("div",{className:"text-[11px] text-slate-500 mt-1",children:"(Ran. No output.)"}):l.jsx("div",{className:"mt-2 p-3 rounded-md space-y-2",style:{background:Ke,border:`1px solid ${H}`},children:a.map(([x,v,I])=>l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] font-bold uppercase tracking-widest",style:{color:I},children:x}),l.jsx("pre",{className:"text-[12px] leading-relaxed whitespace-pre-wrap break-words mt-1",style:{fontFamily:"'JetBrains Mono', monospace",color:"#e2e8f0",margin:0},children:v})]},x))})}const Cp={Code2:Hf,Database:Qo,BarChart3:Ff,Layers:$f,GitBranch:Wf,Briefcase:Uf};function Rp(){const[f,h]=te.useState("practice"),[a,x]=te.useState({modId:It[0].id,topId:It[0].topics[0].id}),[v,I]=te.useState({}),[A,M]=te.useState({}),[D,K]=te.useState({}),[ne,J]=te.useState(""),[se,ge]=te.useState(!1),[De,ie]=te.useState(!1),[X,Oe]=te.useState(!1),[$e,ke]=te.useState(""),[Ne,Te]=te.useState(""),[Ee,_e]=te.useState(!1),[Ve,Be]=te.useState(()=>!Yo()),W=te.useRef(null);if(te.useEffect(()=>{const T="course-platform-fonts";if(document.getElementById(T))return;const b=document.createElement("link");b.id=T,b.rel="stylesheet",b.href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap",document.head.appendChild(b)},[]),te.useEffect(()=>{J(""),Te(""),ke(""),W.current&&(W.current.scrollTop=0)},[a.topId]),f==="mock")return l.jsx(kp,{onExit:()=>h("practice")});const fe=It.find(T=>T.id===a.modId),$=fe.topics.find(T=>T.id===a.topId),G=v[$.id],ae=A[$.id]??G?.code??"",Ce=D[$.id],ue=$.kind||"concept",pe=It.reduce((T,b)=>T+b.topics.length,0),_=Object.values(v).filter(T=>T.status==="passed").length,F=Math.round(_/pe*100)||0,R=(T,b)=>{x({modId:T,topId:b}),_e(!1)},p=()=>{const T=It.findIndex(Re=>Re.id===a.modId),b=fe.topics.findIndex(Re=>Re.id===a.topId);let Pe=null,St=null;if(b>0)Pe={modId:a.modId,topId:fe.topics[b-1].id};else if(T>0){const Re=It[T-1];Pe={modId:Re.id,topId:Re.topics[Re.topics.length-1].id}}if(b<fe.topics.length-1)St={modId:a.modId,topId:fe.topics[b+1].id};else if(T<It.length-1){const Re=It[T+1];St={modId:Re.id,topId:Re.topics[0].id}}return{prev:Pe,next:St}},{prev:w,next:V}=p(),Y=async()=>{if(!ae.trim()){Te("Write something first — even a partial answer.");return}Oe(!0),Te(""),ke(ue==="sql"?"Booting SQLite…":"Booting Python…");try{const T=ue==="sql"?await Tc(ae,b=>ke(b)):await Sc(ae,b=>ke(b));K(b=>({...b,[$.id]:T}))}catch(T){console.error(T),K(b=>({...b,[$.id]:ue==="sql"?{results:[],error:`Sandbox error: ${T.message||T}`}:{stdout:"",stderr:"",result:"",error:`Sandbox error: ${T.message||T}`}}))}finally{Oe(!1),ke("")}},Z=async()=>{if(!ae.trim()){Te("Write something first — even a partial answer.");return}ge(!0),Te(""),J("");try{const T=await vc({topic:$,submission:ae,runOutput:ue==="concept"?void 0:Ce});I(b=>({...b,[$.id]:{code:ae,status:T.status,feedback:T.feedback}}))}catch(T){console.error(T),Te(T.message||"Grader unavailable right now. Try again in a moment.")}finally{ge(!1)}},ee=async()=>{ie(!0),J("");try{const T=await Zf({topic:$});J(T)}catch{J("Hint unavailable right now.")}finally{ie(!1)}},ce=()=>{window.confirm("Clear all progress and drafts? This cannot be undone.")&&(I({}),M({}),K({}),J(""),Te(""))};return l.jsxs("div",{className:"flex h-screen overflow-hidden",style:{background:Ke,color:"#e2e8f0",fontFamily:"'Plus Jakarta Sans', system-ui, sans-serif"},children:[Ve&&l.jsx(Ip,{onSave:T=>{Qf(T),Be(!1)},onClose:()=>Be(!1),onClear:()=>{Kf(),Be(!1)},hasExisting:!!Yo()}),l.jsx("div",{className:`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 md:hidden ${Ee?"opacity-100":"opacity-0 pointer-events-none"}`,onClick:()=>_e(!1)}),l.jsxs("aside",{className:`fixed inset-y-0 left-0 w-80 z-50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 overflow-y-auto ${Ee?"translate-x-0":"-translate-x-full"}`,style:{background:Et,borderRight:`1px solid ${H}`},children:[l.jsxs("div",{className:"p-6",style:{borderBottom:`1px solid ${H}`},children:[l.jsxs("div",{className:"flex items-center justify-between mb-1",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-8 h-8 rounded-lg flex items-center justify-center",style:{background:`${q}22`,border:`1px solid ${q}55`},children:l.jsx(el,{className:"w-4 h-4",style:{color:q}})}),l.jsx("span",{className:"text-base font-extrabold tracking-tight text-slate-100",children:"Data Analyst Prep"})]}),l.jsx("button",{className:"md:hidden text-slate-500 hover:text-slate-100",onClick:()=>_e(!1),children:l.jsx(gc,{className:"w-5 h-5"})})]}),l.jsx("div",{className:"text-[11px] font-semibold text-slate-500 tracking-wider uppercase mt-3",children:"Targets · Shopee · Lazada · Agoda / Alooba"}),l.jsxs("div",{className:"text-[10px] text-slate-500 mt-1.5",children:["built by"," ",l.jsx("a",{href:"https://github.com/pacharadon",target:"_blank",rel:"noreferrer",style:{color:sn,textDecoration:"none"},children:"danny_pachara_DS"})]}),l.jsxs("div",{className:"mt-4 flex p-0.5 rounded-lg",style:{background:Ae,border:`1px solid ${H}`},children:[l.jsx("button",{onClick:()=>h("practice"),className:"flex-1 px-3 py-1.5 rounded-md text-xs font-bold transition-colors",style:f==="practice"?{background:q,color:"#ffffff"}:{background:"transparent",color:"#64748b"},children:"Practice"}),l.jsx("button",{onClick:()=>h("mock"),className:"flex-1 px-3 py-1.5 rounded-md text-xs font-bold transition-colors flex items-center justify-center gap-1.5",style:f==="mock"?{background:q,color:"#ffffff"}:{background:"transparent",color:"#64748b"},children:"Mock · 45min"})]}),l.jsxs("div",{className:"mt-5",children:[l.jsxs("div",{className:"flex justify-between items-baseline text-xs mb-2",children:[l.jsx("span",{className:"text-slate-400 font-medium",children:"Course progress"}),l.jsxs("span",{className:"font-bold",style:{color:q},children:[_,"/",pe," · ",F,"%"]})]}),l.jsx("div",{className:"w-full h-1.5 rounded-full overflow-hidden",style:{background:Ae},children:l.jsx("div",{className:"h-full rounded-full transition-all duration-500",style:{width:`${F}%`,background:q}})})]})]}),l.jsxs("nav",{className:"p-4",children:[It.map((T,b)=>{const Pe=Cp[T.icon]||cc,St=T.topics.filter(Re=>v[Re.id]?.status==="passed").length;return l.jsxs("div",{className:"mb-5",children:[l.jsxs("div",{className:"flex items-center gap-2 px-2 mb-2",children:[l.jsx(Pe,{className:"w-3.5 h-3.5 text-slate-400"}),l.jsxs("h2",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-wider",children:["Part ",b+1," · ",T.title]}),l.jsxs("span",{className:"text-[10px] text-slate-500 ml-auto",children:[St,"/",T.topics.length]})]}),l.jsx("div",{className:"space-y-0.5",children:T.topics.map(Re=>{const Lt=a.topId===Re.id,wn=v[Re.id]?.status;return l.jsxs("button",{onClick:()=>R(T.id,Re.id),className:"w-full text-left px-3 py-2 rounded-md flex items-center gap-3 transition-colors",style:Lt?{background:`${q}1a`,color:q,border:`1px solid ${q}44`}:{background:"transparent",color:"#64748b",border:"1px solid transparent"},onMouseEnter:kn=>{Lt||(kn.currentTarget.style.background=Ae)},onMouseLeave:kn=>{Lt||(kn.currentTarget.style.background="transparent")},children:[wn==="passed"?l.jsx(uc,{className:"w-4 h-4 flex-shrink-0",style:{color:"#10b981"}}):wn==="needs_work"?l.jsx(Go,{className:"w-4 h-4 flex-shrink-0",style:{color:"#f59e0b"}}):l.jsx(cc,{className:"w-4 h-4 flex-shrink-0",style:{color:Lt?sn:"#404040"}}),l.jsx("span",{className:"text-sm font-medium truncate",children:Re.title})]},Re.id)})})]},T.id)}),l.jsxs("button",{onClick:()=>Be(!0),className:"w-full mt-4 px-3 py-2 rounded-md flex items-center gap-2 text-xs text-slate-500 hover:text-slate-200 transition-colors",style:{background:Ae,border:`1px solid ${H}`},children:[l.jsx(yc,{className:"w-3.5 h-3.5"}),Yo()?"Change API key":"Set API key"]}),l.jsxs("button",{onClick:ce,className:"w-full mt-2 px-3 py-2 rounded-md flex items-center gap-2 text-xs text-slate-500 hover:text-slate-200 transition-colors",style:{background:Ae,border:`1px solid ${H}`},children:[l.jsx(Xi,{className:"w-3.5 h-3.5"}),"Reset progress"]})]})]}),l.jsxs("main",{className:"flex-1 flex flex-col h-screen overflow-hidden",children:[l.jsxs("header",{className:"px-6 py-3.5 flex items-center justify-between flex-shrink-0",style:{background:Et,borderBottom:`1px solid ${H}`},children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("button",{className:"md:hidden text-slate-400 hover:text-slate-100",onClick:()=>_e(!0),children:l.jsx(Vf,{className:"w-5 h-5"})}),l.jsxs("div",{className:"hidden sm:flex text-xs text-slate-500 items-center gap-2",children:[l.jsx("span",{children:fe.title}),l.jsx(ac,{className:"w-3 h-3"}),l.jsx("span",{className:"text-slate-200 font-semibold",children:$.title})]})]}),F===100&&l.jsxs("div",{className:"flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold",style:{background:"#10b98122",color:"#34d399",border:"1px solid #10b98155"},children:[l.jsx(hc,{className:"w-3.5 h-3.5"}),"Complete"]})]}),l.jsx("div",{className:"flex-1 overflow-y-auto",ref:W,children:l.jsxs("div",{className:"max-w-3xl mx-auto px-6 md:px-10 py-10 md:py-14",children:[l.jsxs("div",{className:"mb-5 flex items-center gap-2",children:[l.jsx("span",{className:"inline-block text-[11px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full",style:{color:q,background:`${q}14`,border:`1px solid ${q}44`},children:fe.title}),l.jsx(Lp,{kind:ue})]}),l.jsx("h1",{className:"text-4xl md:text-5xl tracking-tight text-slate-100 mb-8 leading-[1.05]",style:{fontFamily:"'Fraunces', Georgia, serif",fontWeight:800},children:$.title}),l.jsx("div",{className:"mb-10",children:$.content.split(`

`).map((T,b)=>/^\s{2,}/.test(T)||/^[a-z_]+\s*=/m.test(T)||/SELECT|FROM|WHERE/.test(T)||/df\./.test(T)?l.jsx("pre",{className:"my-5 p-4 rounded-lg text-[13px] leading-relaxed overflow-x-auto",style:{background:Et,border:`1px solid ${H}`,fontFamily:"'JetBrains Mono', monospace",color:"#e2e8f0"},children:T},b):l.jsx("p",{className:"my-4 text-[15.5px] leading-[1.75] text-slate-300",children:T},b))}),l.jsxs("div",{className:"rounded-xl overflow-hidden mb-8",style:{background:Et,border:`1px solid ${H}`},children:[l.jsxs("div",{className:"px-5 py-3 flex items-center gap-2",style:{borderBottom:`1px solid ${H}`,background:Ae},children:[l.jsx(Yf,{className:"w-4 h-4",style:{color:q}}),l.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-slate-300",children:"Exercise"}),l.jsxs("span",{className:"ml-auto text-[11px] text-slate-500 flex items-center gap-1",children:[l.jsx(Gf,{className:"w-3 h-3",style:{color:q}}),"Auto-graded"]})]}),l.jsxs("div",{className:"p-5 md:p-6",children:[l.jsx("p",{className:"text-[15px] text-slate-200 mb-4 leading-relaxed",children:$.exercisePrompt}),ue==="python"&&l.jsxs("div",{className:"mb-3 px-3 py-2 rounded-md text-[11px] text-slate-400 flex items-center gap-2",style:{background:Ae,border:`1px solid ${H}`},children:[l.jsx(nl,{className:"w-3.5 h-3.5",style:{color:sn}}),l.jsxs("span",{children:["Sandbox loaded: ",l.jsx("code",{style:{color:"#3b82f6"},children:"orders"})," (200 rows) ·"," ",l.jsx("code",{style:{color:"#3b82f6"},children:"customers"})," (60 rows) ·"," ",l.jsx("code",{style:{color:"#3b82f6"},children:"sales"})," (list) · ",l.jsx("code",{style:{color:"#3b82f6"},children:"pd"})]})]}),ue==="sql"&&l.jsxs("div",{className:"mb-3 px-3 py-2 rounded-md text-[11px] text-slate-400 flex items-center gap-2",style:{background:Ae,border:`1px solid ${H}`},children:[l.jsx(Qo,{className:"w-3.5 h-3.5",style:{color:sn}}),l.jsxs("span",{children:["Tables: ",l.jsx("code",{style:{color:"#3b82f6"},children:"orders"})," (200) ·"," ",l.jsx("code",{style:{color:"#3b82f6"},children:"customers"})," (60) ·"," ",l.jsx("code",{style:{color:"#3b82f6"},children:"bookings"})," (120). SQLite dialect."]})]}),l.jsx("textarea",{className:"w-full h-44 md:h-52 p-4 rounded-lg outline-none resize-y",placeholder:ue==="sql"?"-- Your SQL here. SQLite dialect. End with the SELECT — Run shows the rows.":ue==="concept"?"Your answer in plain English…":"Your Python here. End with an expression to inspect it.",value:ae,onChange:T=>M(b=>({...b,[$.id]:T.target.value})),style:{background:Ke,border:`1px solid ${H}`,color:"#e2e8f0",fontFamily:"'JetBrains Mono', monospace",fontSize:"13.5px",lineHeight:1.6}}),l.jsxs("div",{className:"mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-wrap",children:[(ue==="python"||ue==="sql")&&l.jsx("button",{onClick:Y,disabled:X,className:"px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-60",style:{background:Ae,color:"#3b82f6",border:"1px solid #3b82f655"},children:X?l.jsxs(l.Fragment,{children:[l.jsx(Yn,{className:"w-4 h-4 animate-spin"}),$e||"Running…"]}):l.jsxs(l.Fragment,{children:[l.jsx(tl,{className:"w-4 h-4"}),"Run"]})}),l.jsx("button",{onClick:Z,disabled:se,className:"px-5 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-60",style:{background:q,color:"#ffffff"},children:se?l.jsxs(l.Fragment,{children:[l.jsx(Yn,{className:"w-4 h-4 animate-spin"}),"Grading…"]}):l.jsxs(l.Fragment,{children:[l.jsx(Ji,{className:"w-4 h-4"}),"Submit"]})}),l.jsxs("button",{onClick:ee,disabled:De,className:"px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-60",style:{background:"transparent",color:"#64748b",border:`1px solid ${H}`},children:[De?l.jsx(Yn,{className:"w-4 h-4 animate-spin"}):l.jsx(dc,{className:"w-4 h-4"}),"Get a hint"]}),l.jsx("span",{className:"text-[11px] text-slate-500 sm:ml-auto",children:"Draft auto-saves in this session"})]}),Ce&&ue==="python"&&l.jsx(Op,{output:Ce}),Ce&&ue==="sql"&&l.jsx(Pp,{output:Ce}),Ne&&l.jsxs("div",{className:"mt-5 p-3 rounded-lg text-sm flex items-start gap-2",style:{background:"#7f1d1d22",border:"1px solid #7f1d1d55",color:"#fca5a5"},children:[l.jsx(Go,{className:"w-4 h-4 flex-shrink-0 mt-0.5"}),Ne]}),ne&&l.jsxs("div",{className:"mt-5 p-4 rounded-lg flex items-start gap-3",style:{background:`${q}10`,border:`1px solid ${q}44`},children:[l.jsx(dc,{className:"w-5 h-5 flex-shrink-0 mt-0.5",style:{color:q}}),l.jsxs("div",{children:[l.jsx("div",{className:"text-[11px] font-bold uppercase tracking-wider mb-1",style:{color:q},children:"Hint"}),l.jsx("p",{className:"text-sm text-slate-200 leading-relaxed",children:ne})]})]}),G&&G.status&&!se&&l.jsxs("div",{className:"mt-5 p-4 rounded-lg flex items-start gap-3",style:{background:G.status==="passed"?"#10b9811a":"#f59e0b1a",border:G.status==="passed"?"1px solid #10b98155":"1px solid #f59e0b55"},children:[G.status==="passed"?l.jsx(uc,{className:"w-5 h-5 flex-shrink-0 mt-0.5",style:{color:"#34d399"}}):l.jsx(Go,{className:"w-5 h-5 flex-shrink-0 mt-0.5",style:{color:"#fbbf24"}}),l.jsxs("div",{children:[l.jsx("div",{className:"text-[11px] font-bold uppercase tracking-wider mb-1",style:{color:G.status==="passed"?"#34d399":"#fbbf24"},children:G.status==="passed"?"Passed":"Needs work"}),l.jsx("p",{className:"text-sm text-slate-200 leading-relaxed",children:G.feedback})]})]})]})]}),l.jsxs("div",{className:"flex items-center justify-between pt-2 pb-12",children:[l.jsxs("button",{onClick:()=>w&&R(w.modId,w.topId),disabled:!w,className:"px-4 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors disabled:opacity-30 disabled:cursor-not-allowed",style:{background:"transparent",color:"#64748b",border:`1px solid ${H}`},children:[l.jsx(zf,{className:"w-4 h-4"}),"Previous"]}),l.jsxs("button",{onClick:()=>V&&R(V.modId,V.topId),disabled:!V,className:"px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors disabled:opacity-30 disabled:cursor-not-allowed",style:{background:q,color:"#ffffff"},children:["Next",l.jsx(ac,{className:"w-4 h-4"})]})]})]})})]})]})}function Ip({onSave:f,onClose:h,onClear:a,hasExisting:x}){const[v,I]=te.useState(""),A=v.trim(),M=A.startsWith("sk-ant-")&&A.length>30;return l.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center px-4",style:{background:"rgba(0,0,0,0.65)"},children:l.jsxs("div",{className:"max-w-md w-full rounded-2xl p-7",style:{background:Et,border:`1px solid ${H}`},children:[l.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[l.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center",style:{background:`${q}22`,border:`1px solid ${q}55`},children:l.jsx(yc,{className:"w-5 h-5",style:{color:q}})}),l.jsx("h2",{className:"text-xl text-slate-100",style:{fontFamily:"'Fraunces', Georgia, serif",fontWeight:800},children:x?"Update API key":"Set your API key"})]}),l.jsxs("div",{className:"text-[13.5px] text-slate-300 leading-relaxed mb-4 space-y-2",children:[l.jsxs("p",{children:["Grading, hints, and mock summaries call an external model API. The key stays in your browser (",l.jsx("code",{style:{color:sn},children:"localStorage"}),") — it never leaves your machine except in the outbound model request."]}),l.jsxs("p",{className:"text-[12.5px] text-slate-400",children:["Get a key at"," ",l.jsx("a",{href:"https://console.anthropic.com/settings/keys",target:"_blank",rel:"noreferrer",style:{color:sn,textDecoration:"underline"},children:"console.anthropic.com/settings/keys"})," ","(the model identifier the app sends is configurable in ",l.jsx("code",{children:"src/api/grader.js"}),")."]})]}),l.jsx("input",{type:"password",autoFocus:!0,value:v,onChange:D=>I(D.target.value),onKeyDown:D=>{D.key==="Enter"&&M&&f(A)},placeholder:"sk-ant-api03-...",className:"w-full p-3 rounded-lg outline-none",style:{background:Ke,border:`1px solid ${H}`,color:"#e2e8f0",fontFamily:"'JetBrains Mono', monospace",fontSize:"13px"}}),v&&!M&&l.jsxs("div",{className:"mt-2 text-[11px]",style:{color:"#fbbf24"},children:["Keys start with ",l.jsx("code",{children:"sk-ant-"})," and are longer than that."]}),l.jsxs("div",{className:"mt-5 flex gap-2",children:[l.jsx("button",{onClick:()=>f(A),disabled:!M,className:"flex-1 px-4 py-2.5 rounded-lg text-sm font-bold disabled:opacity-50",style:{background:q,color:"#ffffff"},children:"Save"}),x&&l.jsx("button",{onClick:a,className:"px-4 py-2.5 rounded-lg text-sm font-semibold",style:{background:"transparent",color:"#fca5a5",border:"1px solid #7f1d1d55"},children:"Clear"}),l.jsx("button",{onClick:h,className:"px-4 py-2.5 rounded-lg text-sm font-semibold",style:{background:"transparent",color:"#94a3b8",border:`1px solid ${H}`},children:x?"Cancel":"Skip"})]}),!x&&l.jsx("p",{className:"mt-4 text-[11px] text-slate-500",children:"You can skip and browse the curriculum, but Submit / Get a hint / Mock-grading will fail until a key is set."})]})})}function Lp({kind:f}){const h={python:{label:"Python · runnable",color:"#3b82f6"},sql:{label:"SQL · runnable",color:"#3b82f6"},concept:{label:"Concept · text answer",color:"#64748b"}},a=h[f]||h.concept;return l.jsx("span",{className:"inline-block text-[11px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full",style:{color:a.color,background:`${a.color}14`,border:`1px solid ${a.color}44`},children:a.label})}function Op({output:f}){const{stdout:h,stderr:a,result:x,error:v}=f;return h||a||x||v?l.jsxs("div",{className:"mt-5 rounded-lg overflow-hidden",style:{background:Ke,border:`1px solid ${H}`},children:[l.jsxs("div",{className:"px-4 py-2 flex items-center gap-2",style:{background:Ae,borderBottom:`1px solid ${H}`},children:[l.jsx(nl,{className:"w-3.5 h-3.5",style:{color:v?"#fca5a5":"#3b82f6"}}),l.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:v?"Run · error":"Run · output"})]}),l.jsxs("div",{className:"p-4 space-y-3",children:[h&&l.jsx(Vo,{label:"stdout",body:h,color:"#e5e5e5"}),x&&l.jsx(Vo,{label:"result",body:x,color:"#fcd34d"}),a&&l.jsx(Vo,{label:"stderr",body:a,color:"#fb923c"}),v&&l.jsx(Vo,{label:"traceback",body:v,color:"#fca5a5"})]})]}):l.jsx("div",{className:"mt-5 p-4 rounded-lg text-xs text-slate-500",style:{background:Ke,border:`1px solid ${H}`},children:"Ran. No output. (Tip: end your snippet with an expression to inspect it.)"})}function Pp({output:f}){const{results:h,error:a}=f;return a?l.jsxs("div",{className:"mt-5 rounded-lg overflow-hidden",style:{background:Ke,border:"1px solid #7f1d1d55"},children:[l.jsxs("div",{className:"px-4 py-2 flex items-center gap-2",style:{background:Ae,borderBottom:`1px solid ${H}`},children:[l.jsx(Go,{className:"w-3.5 h-3.5",style:{color:"#fca5a5"}}),l.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider",style:{color:"#fca5a5"},children:"SQL · error"})]}),l.jsx("pre",{className:"p-4 text-[12.5px] leading-relaxed whitespace-pre-wrap break-words",style:{fontFamily:"'JetBrains Mono', monospace",color:"#fca5a5",margin:0},children:a})]}):!h||h.length===0?l.jsx("div",{className:"mt-5 p-4 rounded-lg text-xs text-slate-500",style:{background:Ke,border:`1px solid ${H}`},children:"Query ran. No rows returned. (Tip: ensure your SELECT actually projects columns.)"}):l.jsx("div",{className:"mt-5 space-y-4",children:h.map((x,v)=>l.jsx(jp,{columns:x.columns,values:x.values,index:v+1,total:h.length},v))})}function jp({columns:f,values:h,index:a,total:x}){const I=h.slice(0,50),A=h.length>50;return l.jsxs("div",{className:"rounded-lg overflow-hidden",style:{background:Ke,border:`1px solid ${H}`},children:[l.jsxs("div",{className:"px-4 py-2 flex items-center gap-2",style:{background:Ae,borderBottom:`1px solid ${H}`},children:[l.jsx(Qo,{className:"w-3.5 h-3.5",style:{color:"#3b82f6"}}),l.jsxs("span",{className:"text-[11px] font-bold uppercase tracking-wider text-slate-400",children:[x>1?`Result ${a}/${x} · `:"Result · ",h.length," ",h.length===1?"row":"rows",A?" (showing first 50)":""]})]}),l.jsx("div",{className:"overflow-x-auto",children:l.jsxs("table",{className:"w-full text-[12.5px]",style:{fontFamily:"'JetBrains Mono', monospace",borderCollapse:"collapse"},children:[l.jsx("thead",{children:l.jsx("tr",{style:{background:Et},children:f.map(M=>l.jsx("th",{className:"text-left px-3 py-1.5 font-bold",style:{color:"#3b82f6",borderBottom:`1px solid ${H}`},children:M},M))})}),l.jsx("tbody",{children:I.map((M,D)=>l.jsx("tr",{style:{borderBottom:`1px solid ${H}`},children:M.map((K,ne)=>l.jsx("td",{className:"px-3 py-1.5",style:{color:K===null?"#475569":"#e2e8f0"},children:K===null?"NULL":String(K)},ne))},D))})]})})]})}function Vo({label:f,body:h,color:a}){return l.jsxs("div",{children:[l.jsx("div",{className:"text-[10px] font-bold uppercase tracking-widest mb-1",style:{color:a},children:f}),l.jsx("pre",{className:"text-[12.5px] leading-relaxed whitespace-pre-wrap break-words",style:{fontFamily:"'JetBrains Mono', monospace",color:"#e2e8f0",margin:0},children:h})]})}Af.createRoot(document.getElementById("root")).render(l.jsx(Cf.StrictMode,{children:l.jsx(Rp,{})}));
