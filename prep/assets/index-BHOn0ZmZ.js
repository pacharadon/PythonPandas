(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))x(v);new MutationObserver(v=>{for(const T of v)if(T.type==="childList")for(const j of T.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&x(j)}).observe(document,{childList:!0,subtree:!0});function l(v){const T={};return v.integrity&&(T.integrity=v.integrity),v.referrerPolicy&&(T.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?T.credentials="include":v.crossOrigin==="anonymous"?T.credentials="omit":T.credentials="same-origin",T}function x(v){if(v.ep)return;v.ep=!0;const T=l(v);fetch(v.href,T)}})();function vd(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var $i={exports:{}},Fr={},qi={exports:{}},K={};var nd;function Of(){if(nd)return K;nd=1;var d=Symbol.for("react.element"),h=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),j=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),$=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),Y=Symbol.iterator;function ae(p){return p===null||typeof p!="object"?null:(p=Y&&p[Y]||p["@@iterator"],typeof p=="function"?p:null)}var Ue={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},we=Object.assign,de={};function oe(p,w,G){this.props=p,this.context=w,this.refs=de,this.updater=G||Ue}oe.prototype.isReactComponent={},oe.prototype.setState=function(p,w){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,w,"setState")},oe.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function We(){}We.prototype=oe.prototype;function Pe(p,w,G){this.props=p,this.context=w,this.refs=de,this.updater=G||Ue}var Ce=Pe.prototype=new We;Ce.constructor=Pe,we(Ce,oe.prototype),Ce.isPureReactComponent=!0;var Ee=Array.isArray,Le=Object.prototype.hasOwnProperty,Me={current:null},Ne={key:!0,ref:!0,__self:!0,__source:!0};function Ye(p,w,G){var q,J={},Z=null,me=null;if(w!=null)for(q in w.ref!==void 0&&(me=w.ref),w.key!==void 0&&(Z=""+w.key),w)Le.call(w,q)&&!Ne.hasOwnProperty(q)&&(J[q]=w[q]);var ue=arguments.length-2;if(ue===1)J.children=G;else if(1<ue){for(var he=Array(ue),Ze=0;Ze<ue;Ze++)he[Ze]=arguments[Ze+2];J.children=he}if(p&&p.defaultProps)for(q in ue=p.defaultProps,ue)J[q]===void 0&&(J[q]=ue[q]);return{$$typeof:d,type:p,key:Z,ref:me,props:J,_owner:Me.current}}function Je(p,w){return{$$typeof:d,type:p.type,key:w,ref:p.ref,props:p.props,_owner:p._owner}}function D(p){return typeof p=="object"&&p!==null&&p.$$typeof===d}function V(p){var w={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(G){return w[G]})}var ke=/\/+/g;function ee(p,w){return typeof p=="object"&&p!==null&&p.key!=null?V(""+p.key):w.toString(36)}function te(p,w,G,q,J){var Z=typeof p;(Z==="undefined"||Z==="boolean")&&(p=null);var me=!1;if(p===null)me=!0;else switch(Z){case"string":case"number":me=!0;break;case"object":switch(p.$$typeof){case d:case h:me=!0}}if(me)return me=p,J=J(me),p=q===""?"."+ee(me,0):q,Ee(J)?(G="",p!=null&&(G=p.replace(ke,"$&/")+"/"),te(J,w,G,"",function(Ze){return Ze})):J!=null&&(D(J)&&(J=Je(J,G+(!J.key||me&&me.key===J.key?"":(""+J.key).replace(ke,"$&/")+"/")+p)),w.push(J)),1;if(me=0,q=q===""?".":q+":",Ee(p))for(var ue=0;ue<p.length;ue++){Z=p[ue];var he=q+ee(Z,ue);me+=te(Z,w,G,he,J)}else if(he=ae(p),typeof he=="function")for(p=he.call(p),ue=0;!(Z=p.next()).done;)Z=Z.value,he=q+ee(Z,ue++),me+=te(Z,w,G,he,J);else if(Z==="object")throw w=String(p),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.");return me}function re(p,w,G){if(p==null)return p;var q=[],J=0;return te(p,q,"","",function(Z){return w.call(G,Z,J++)}),q}function fe(p){if(p._status===-1){var w=p._result;w=w(),w.then(function(G){(p._status===0||p._status===-1)&&(p._status=1,p._result=G)},function(G){(p._status===0||p._status===-1)&&(p._status=2,p._result=G)}),p._status===-1&&(p._status=0,p._result=w)}if(p._status===1)return p._result.default;throw p._result}var ce={current:null},_={transition:null},A={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:_,ReactCurrentOwner:Me};function L(){throw Error("act(...) is not supported in production builds of React.")}return K.Children={map:re,forEach:function(p,w,G){re(p,function(){w.apply(this,arguments)},G)},count:function(p){var w=0;return re(p,function(){w++}),w},toArray:function(p){return re(p,function(w){return w})||[]},only:function(p){if(!D(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},K.Component=oe,K.Fragment=l,K.Profiler=v,K.PureComponent=Pe,K.StrictMode=x,K.Suspense=U,K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,K.act=L,K.cloneElement=function(p,w,G){if(p==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+p+".");var q=we({},p.props),J=p.key,Z=p.ref,me=p._owner;if(w!=null){if(w.ref!==void 0&&(Z=w.ref,me=Me.current),w.key!==void 0&&(J=""+w.key),p.type&&p.type.defaultProps)var ue=p.type.defaultProps;for(he in w)Le.call(w,he)&&!Ne.hasOwnProperty(he)&&(q[he]=w[he]===void 0&&ue!==void 0?ue[he]:w[he])}var he=arguments.length-2;if(he===1)q.children=G;else if(1<he){ue=Array(he);for(var Ze=0;Ze<he;Ze++)ue[Ze]=arguments[Ze+2];q.children=ue}return{$$typeof:d,type:p.type,key:J,ref:Z,props:q,_owner:me}},K.createContext=function(p){return p={$$typeof:j,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},p.Provider={$$typeof:T,_context:p},p.Consumer=p},K.createElement=Ye,K.createFactory=function(p){var w=Ye.bind(null,p);return w.type=p,w},K.createRef=function(){return{current:null}},K.forwardRef=function(p){return{$$typeof:F,render:p}},K.isValidElement=D,K.lazy=function(p){return{$$typeof:X,_payload:{_status:-1,_result:p},_init:fe}},K.memo=function(p,w){return{$$typeof:$,type:p,compare:w===void 0?null:w}},K.startTransition=function(p){var w=_.transition;_.transition={};try{p()}finally{_.transition=w}},K.unstable_act=L,K.useCallback=function(p,w){return ce.current.useCallback(p,w)},K.useContext=function(p){return ce.current.useContext(p)},K.useDebugValue=function(){},K.useDeferredValue=function(p){return ce.current.useDeferredValue(p)},K.useEffect=function(p,w){return ce.current.useEffect(p,w)},K.useId=function(){return ce.current.useId()},K.useImperativeHandle=function(p,w,G){return ce.current.useImperativeHandle(p,w,G)},K.useInsertionEffect=function(p,w){return ce.current.useInsertionEffect(p,w)},K.useLayoutEffect=function(p,w){return ce.current.useLayoutEffect(p,w)},K.useMemo=function(p,w){return ce.current.useMemo(p,w)},K.useReducer=function(p,w,G){return ce.current.useReducer(p,w,G)},K.useRef=function(p){return ce.current.useRef(p)},K.useState=function(p){return ce.current.useState(p)},K.useSyncExternalStore=function(p,w,G){return ce.current.useSyncExternalStore(p,w,G)},K.useTransition=function(){return ce.current.useTransition()},K.version="18.3.1",K}var rd;function ra(){return rd||(rd=1,qi.exports=Of()),qi.exports}var od;function If(){if(od)return Fr;od=1;var d=ra(),h=Symbol.for("react.element"),l=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,v=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T={key:!0,ref:!0,__self:!0,__source:!0};function j(F,U,$){var X,Y={},ae=null,Ue=null;$!==void 0&&(ae=""+$),U.key!==void 0&&(ae=""+U.key),U.ref!==void 0&&(Ue=U.ref);for(X in U)x.call(U,X)&&!T.hasOwnProperty(X)&&(Y[X]=U[X]);if(F&&F.defaultProps)for(X in U=F.defaultProps,U)Y[X]===void 0&&(Y[X]=U[X]);return{$$typeof:h,type:F,key:ae,ref:Ue,props:Y,_owner:v.current}}return Fr.Fragment=l,Fr.jsx=j,Fr.jsxs=j,Fr}var sd;function Af(){return sd||(sd=1,$i.exports=If()),$i.exports}var a=Af(),ne=ra();const bf=vd(ne);var Qo={},Qi={exports:{}},at={},Ki={exports:{}},Xi={};var id;function Pf(){return id||(id=1,(function(d){function h(_,A){var L=_.length;_.push(A);e:for(;0<L;){var p=L-1>>>1,w=_[p];if(0<v(w,A))_[p]=A,_[L]=w,L=p;else break e}}function l(_){return _.length===0?null:_[0]}function x(_){if(_.length===0)return null;var A=_[0],L=_.pop();if(L!==A){_[0]=L;e:for(var p=0,w=_.length,G=w>>>1;p<G;){var q=2*(p+1)-1,J=_[q],Z=q+1,me=_[Z];if(0>v(J,L))Z<w&&0>v(me,J)?(_[p]=me,_[Z]=L,p=Z):(_[p]=J,_[q]=L,p=q);else if(Z<w&&0>v(me,L))_[p]=me,_[Z]=L,p=Z;else break e}}return A}function v(_,A){var L=_.sortIndex-A.sortIndex;return L!==0?L:_.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var T=performance;d.unstable_now=function(){return T.now()}}else{var j=Date,F=j.now();d.unstable_now=function(){return j.now()-F}}var U=[],$=[],X=1,Y=null,ae=3,Ue=!1,we=!1,de=!1,oe=typeof setTimeout=="function"?setTimeout:null,We=typeof clearTimeout=="function"?clearTimeout:null,Pe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ce(_){for(var A=l($);A!==null;){if(A.callback===null)x($);else if(A.startTime<=_)x($),A.sortIndex=A.expirationTime,h(U,A);else break;A=l($)}}function Ee(_){if(de=!1,Ce(_),!we)if(l(U)!==null)we=!0,fe(Le);else{var A=l($);A!==null&&ce(Ee,A.startTime-_)}}function Le(_,A){we=!1,de&&(de=!1,We(Ye),Ye=-1),Ue=!0;var L=ae;try{for(Ce(A),Y=l(U);Y!==null&&(!(Y.expirationTime>A)||_&&!V());){var p=Y.callback;if(typeof p=="function"){Y.callback=null,ae=Y.priorityLevel;var w=p(Y.expirationTime<=A);A=d.unstable_now(),typeof w=="function"?Y.callback=w:Y===l(U)&&x(U),Ce(A)}else x(U);Y=l(U)}if(Y!==null)var G=!0;else{var q=l($);q!==null&&ce(Ee,q.startTime-A),G=!1}return G}finally{Y=null,ae=L,Ue=!1}}var Me=!1,Ne=null,Ye=-1,Je=5,D=-1;function V(){return!(d.unstable_now()-D<Je)}function ke(){if(Ne!==null){var _=d.unstable_now();D=_;var A=!0;try{A=Ne(!0,_)}finally{A?ee():(Me=!1,Ne=null)}}else Me=!1}var ee;if(typeof Pe=="function")ee=function(){Pe(ke)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,re=te.port2;te.port1.onmessage=ke,ee=function(){re.postMessage(null)}}else ee=function(){oe(ke,0)};function fe(_){Ne=_,Me||(Me=!0,ee())}function ce(_,A){Ye=oe(function(){_(d.unstable_now())},A)}d.unstable_IdlePriority=5,d.unstable_ImmediatePriority=1,d.unstable_LowPriority=4,d.unstable_NormalPriority=3,d.unstable_Profiling=null,d.unstable_UserBlockingPriority=2,d.unstable_cancelCallback=function(_){_.callback=null},d.unstable_continueExecution=function(){we||Ue||(we=!0,fe(Le))},d.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Je=0<_?Math.floor(1e3/_):5},d.unstable_getCurrentPriorityLevel=function(){return ae},d.unstable_getFirstCallbackNode=function(){return l(U)},d.unstable_next=function(_){switch(ae){case 1:case 2:case 3:var A=3;break;default:A=ae}var L=ae;ae=A;try{return _()}finally{ae=L}},d.unstable_pauseExecution=function(){},d.unstable_requestPaint=function(){},d.unstable_runWithPriority=function(_,A){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var L=ae;ae=_;try{return A()}finally{ae=L}},d.unstable_scheduleCallback=function(_,A,L){var p=d.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?p+L:p):L=p,_){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=L+w,_={id:X++,callback:A,priorityLevel:_,startTime:L,expirationTime:w,sortIndex:-1},L>p?(_.sortIndex=L,h($,_),l(U)===null&&_===l($)&&(de?(We(Ye),Ye=-1):de=!0,ce(Ee,L-p))):(_.sortIndex=w,h(U,_),we||Ue||(we=!0,fe(Le))),_},d.unstable_shouldYield=V,d.unstable_wrapCallback=function(_){var A=ae;return function(){var L=ae;ae=A;try{return _.apply(this,arguments)}finally{ae=L}}}})(Xi)),Xi}var ad;function Mf(){return ad||(ad=1,Ki.exports=Pf()),Ki.exports}var ld;function Df(){if(ld)return at;ld=1;var d=ra(),h=Mf();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var x=new Set,v={};function T(e,t){j(e,t),j(e+"Capture",t)}function j(e,t){for(v[e]=t,e=0;e<t.length;e++)x.add(t[e])}var F=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),U=Object.prototype.hasOwnProperty,$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,X={},Y={};function ae(e){return U.call(Y,e)?!0:U.call(X,e)?!1:$.test(e)?Y[e]=!0:(X[e]=!0,!1)}function Ue(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function we(e,t,n,r){if(t===null||typeof t>"u"||Ue(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,o,s,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=i}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new de(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new de(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new de(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new de(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){oe[e]=new de(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){oe[e]=new de(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){oe[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var We=/[\-:]([a-z])/g;function Pe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(We,Pe);oe[t]=new de(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(We,Pe);oe[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(We,Pe);oe[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)}),oe.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){oe[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ce(e,t,n,r){var o=oe.hasOwnProperty(t)?oe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(we(t,n,o,r)&&(n=null),r||o===null?ae(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ee=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Le=Symbol.for("react.element"),Me=Symbol.for("react.portal"),Ne=Symbol.for("react.fragment"),Ye=Symbol.for("react.strict_mode"),Je=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),V=Symbol.for("react.context"),ke=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),_=Symbol.iterator;function A(e){return e===null||typeof e!="object"?null:(e=_&&e[_]||e["@@iterator"],typeof e=="function"?e:null)}var L=Object.assign,p;function w(e){if(p===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);p=t&&t[1]||""}return`
`+p+e}var G=!1;function q(e,t){if(!e||G)return"";G=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(y){var r=y}Reflect.construct(e,[],t)}else{try{t.call()}catch(y){r=y}e.call(t.prototype)}else{try{throw Error()}catch(y){r=y}e()}}catch(y){if(y&&r&&typeof y.stack=="string"){for(var o=y.stack.split(`
`),s=r.stack.split(`
`),i=o.length-1,u=s.length-1;1<=i&&0<=u&&o[i]!==s[u];)u--;for(;1<=i&&0<=u;i--,u--)if(o[i]!==s[u]){if(i!==1||u!==1)do if(i--,u--,0>u||o[i]!==s[u]){var c=`
`+o[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=u);break}}}finally{G=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?w(e):""}function J(e){switch(e.tag){case 5:return w(e.type);case 16:return w("Lazy");case 13:return w("Suspense");case 19:return w("SuspenseList");case 0:case 2:case 15:return e=q(e.type,!1),e;case 11:return e=q(e.type.render,!1),e;case 1:return e=q(e.type,!0),e;default:return""}}function Z(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ne:return"Fragment";case Me:return"Portal";case Je:return"Profiler";case Ye:return"StrictMode";case ee:return"Suspense";case te:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case V:return(e.displayName||"Context")+".Consumer";case D:return(e._context.displayName||"Context")+".Provider";case ke:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case re:return t=e.displayName||null,t!==null?t:Z(e.type)||"Memo";case fe:t=e._payload,e=e._init;try{return Z(e(t))}catch{}}return null}function me(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(t);case 8:return t===Ye?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function he(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ze(e){var t=he(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function P(e){e._valueTracker||(e._valueTracker=Ze(e))}function se(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=he(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bt(e,t){var n=t.checked;return L({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Oe(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ue(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cn(e,t){t=t.checked,t!=null&&Ce(e,"checked",t,!1)}function Tn(e,t){cn(e,t);var n=ue(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ns(e,t.type,n):t.hasOwnProperty("defaultValue")&&ns(e,t.type,ue(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _n(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ns(e,t,n){(t!=="number"||vt(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zn=Array.isArray;function Rn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ue(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function rs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return L({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if(Zn(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ue(n)}}function pa(e,t){var n=ue(t.value),r=ue(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ma(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ha(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function os(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ha(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Br,ga=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Br=Br||document.createElement("div"),Br.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Br.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bd=["Webkit","ms","Moz","O"];Object.keys(tr).forEach(function(e){bd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),tr[t]=tr[e]})});function ya(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||tr.hasOwnProperty(e)&&tr[e]?(""+t).trim():t+"px"}function va(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ya(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Pd=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ss(e,t){if(t){if(Pd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function is(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var as=null;function ls(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var us=null,Cn=null,Ln=null;function xa(e){if(e=Sr(e)){if(typeof us!="function")throw Error(l(280));var t=e.stateNode;t&&(t=uo(t),us(e.stateNode,e.type,t))}}function wa(e){Cn?Ln?Ln.push(e):Ln=[e]:Cn=e}function Ea(){if(Cn){var e=Cn,t=Ln;if(Ln=Cn=null,xa(e),t)for(e=0;e<t.length;e++)xa(t[e])}}function ka(e,t){return e(t)}function Sa(){}var ds=!1;function Na(e,t,n){if(ds)return e(t,n);ds=!0;try{return ka(e,t,n)}finally{ds=!1,(Cn!==null||Ln!==null)&&(Sa(),Ea())}}function nr(e,t){var n=e.stateNode;if(n===null)return null;var r=uo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var cs=!1;if(F)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){cs=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{cs=!1}function Md(e,t,n,r,o,s,i,u,c){var y=Array.prototype.slice.call(arguments,3);try{t.apply(n,y)}catch(k){this.onError(k)}}var or=!1,zr=null,Hr=!1,fs=null,Dd={onError:function(e){or=!0,zr=e}};function jd(e,t,n,r,o,s,i,u,c){or=!1,zr=null,Md.apply(Dd,arguments)}function Fd(e,t,n,r,o,s,i,u,c){if(jd.apply(this,arguments),or){if(or){var y=zr;or=!1,zr=null}else throw Error(l(198));Hr||(Hr=!0,fs=y)}}function fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ta(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _a(e){if(fn(e)!==e)throw Error(l(188))}function Ud(e){var t=e.alternate;if(!t){if(t=fn(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return _a(o),e;if(s===r)return _a(o),t;s=s.sibling}throw Error(l(188))}if(n.return!==r.return)n=o,r=s;else{for(var i=!1,u=o.child;u;){if(u===n){i=!0,n=o,r=s;break}if(u===r){i=!0,r=o,n=s;break}u=u.sibling}if(!i){for(u=s.child;u;){if(u===n){i=!0,n=s,r=o;break}if(u===r){i=!0,r=s,n=o;break}u=u.sibling}if(!i)throw Error(l(189))}}if(n.alternate!==r)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function Ra(e){return e=Ud(e),e!==null?Ca(e):null}function Ca(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ca(e);if(t!==null)return t;e=e.sibling}return null}var La=h.unstable_scheduleCallback,Oa=h.unstable_cancelCallback,Bd=h.unstable_shouldYield,zd=h.unstable_requestPaint,Ie=h.unstable_now,Hd=h.unstable_getCurrentPriorityLevel,ps=h.unstable_ImmediatePriority,Ia=h.unstable_UserBlockingPriority,Wr=h.unstable_NormalPriority,Wd=h.unstable_LowPriority,Aa=h.unstable_IdlePriority,Gr=null,Rt=null;function Gd(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Gr,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:$d,Vd=Math.log,Yd=Math.LN2;function $d(e){return e>>>=0,e===0?32:31-(Vd(e)/Yd|0)|0}var Vr=64,Yr=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $r(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,s=e.pingedLanes,i=n&268435455;if(i!==0){var u=i&~o;u!==0?r=sr(u):(s&=i,s!==0&&(r=sr(s)))}else i=n&~o,i!==0?r=sr(i):s!==0&&(r=sr(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),o=1<<n,r|=e[n],t&=~o;return r}function qd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-xt(s),u=1<<i,c=o[i];c===-1?((u&n)===0||(u&r)!==0)&&(o[i]=qd(u,t)):c<=t&&(e.expiredLanes|=u),s&=~u}}function ms(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ba(){var e=Vr;return Vr<<=1,(Vr&4194240)===0&&(Vr=64),e}function hs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ir(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function Kd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-xt(n),s=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~s}}function gs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var pe=0;function Pa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ma,ys,Da,ja,Fa,vs=!1,qr=[],Gt=null,Vt=null,Yt=null,ar=new Map,lr=new Map,$t=[],Xd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ua(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":Yt=null;break;case"pointerover":case"pointerout":ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":lr.delete(t.pointerId)}}function ur(e,t,n,r,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[o]},t!==null&&(t=Sr(t),t!==null&&ys(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Jd(e,t,n,r,o){switch(t){case"focusin":return Gt=ur(Gt,e,t,n,r,o),!0;case"dragenter":return Vt=ur(Vt,e,t,n,r,o),!0;case"mouseover":return Yt=ur(Yt,e,t,n,r,o),!0;case"pointerover":var s=o.pointerId;return ar.set(s,ur(ar.get(s)||null,e,t,n,r,o)),!0;case"gotpointercapture":return s=o.pointerId,lr.set(s,ur(lr.get(s)||null,e,t,n,r,o)),!0}return!1}function Ba(e){var t=pn(e.target);if(t!==null){var n=fn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ta(n),t!==null){e.blockedOn=t,Fa(e.priority,function(){Da(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ws(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);as=r,n.target.dispatchEvent(r),as=null}else return t=Sr(n),t!==null&&ys(t),e.blockedOn=n,!1;t.shift()}return!0}function za(e,t,n){Qr(e)&&n.delete(t)}function Zd(){vs=!1,Gt!==null&&Qr(Gt)&&(Gt=null),Vt!==null&&Qr(Vt)&&(Vt=null),Yt!==null&&Qr(Yt)&&(Yt=null),ar.forEach(za),lr.forEach(za)}function dr(e,t){e.blockedOn===t&&(e.blockedOn=null,vs||(vs=!0,h.unstable_scheduleCallback(h.unstable_NormalPriority,Zd)))}function cr(e){function t(o){return dr(o,e)}if(0<qr.length){dr(qr[0],e);for(var n=1;n<qr.length;n++){var r=qr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&dr(Gt,e),Vt!==null&&dr(Vt,e),Yt!==null&&dr(Yt,e),ar.forEach(t),lr.forEach(t),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)Ba(n),n.blockedOn===null&&$t.shift()}var On=Ee.ReactCurrentBatchConfig,Kr=!0;function ec(e,t,n,r){var o=pe,s=On.transition;On.transition=null;try{pe=1,xs(e,t,n,r)}finally{pe=o,On.transition=s}}function tc(e,t,n,r){var o=pe,s=On.transition;On.transition=null;try{pe=4,xs(e,t,n,r)}finally{pe=o,On.transition=s}}function xs(e,t,n,r){if(Kr){var o=ws(e,t,n,r);if(o===null)js(e,t,r,Xr,n),Ua(e,r);else if(Jd(o,e,t,n,r))r.stopPropagation();else if(Ua(e,r),t&4&&-1<Xd.indexOf(e)){for(;o!==null;){var s=Sr(o);if(s!==null&&Ma(s),s=ws(e,t,n,r),s===null&&js(e,t,r,Xr,n),s===o)break;o=s}o!==null&&r.stopPropagation()}else js(e,t,r,null,n)}}var Xr=null;function ws(e,t,n,r){if(Xr=null,e=ls(r),e=pn(e),e!==null)if(t=fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ta(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xr=e,null}function Ha(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hd()){case ps:return 1;case Ia:return 4;case Wr:case Wd:return 16;case Aa:return 536870912;default:return 16}default:return 16}}var qt=null,Es=null,Jr=null;function Wa(){if(Jr)return Jr;var e,t=Es,n=t.length,r,o="value"in qt?qt.value:qt.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[s-r];r++);return Jr=o.slice(e,1<r?1-r:void 0)}function Zr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function eo(){return!0}function Ga(){return!1}function lt(e){function t(n,r,o,s,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?eo:Ga,this.isPropagationStopped=Ga,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=eo)},persist:function(){},isPersistent:eo}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ks=lt(In),fr=L({},In,{view:0,detail:0}),nc=lt(fr),Ss,Ns,pr,to=L({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_s,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pr&&(pr&&e.type==="mousemove"?(Ss=e.screenX-pr.screenX,Ns=e.screenY-pr.screenY):Ns=Ss=0,pr=e),Ss)},movementY:function(e){return"movementY"in e?e.movementY:Ns}}),Va=lt(to),rc=L({},to,{dataTransfer:0}),oc=lt(rc),sc=L({},fr,{relatedTarget:0}),Ts=lt(sc),ic=L({},In,{animationName:0,elapsedTime:0,pseudoElement:0}),ac=lt(ic),lc=L({},In,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uc=lt(lc),dc=L({},In,{data:0}),Ya=lt(dc),cc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pc[e])?!!t[e]:!1}function _s(){return mc}var hc=L({},fr,{key:function(e){if(e.key){var t=cc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_s,charCode:function(e){return e.type==="keypress"?Zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gc=lt(hc),yc=L({},to,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$a=lt(yc),vc=L({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_s}),xc=lt(vc),wc=L({},In,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ec=lt(wc),kc=L({},to,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sc=lt(kc),Nc=[9,13,27,32],Rs=F&&"CompositionEvent"in window,mr=null;F&&"documentMode"in document&&(mr=document.documentMode);var Tc=F&&"TextEvent"in window&&!mr,qa=F&&(!Rs||mr&&8<mr&&11>=mr),Qa=" ",Ka=!1;function Xa(e,t){switch(e){case"keyup":return Nc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ja(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var An=!1;function _c(e,t){switch(e){case"compositionend":return Ja(t);case"keypress":return t.which!==32?null:(Ka=!0,Qa);case"textInput":return e=t.data,e===Qa&&Ka?null:e;default:return null}}function Rc(e,t){if(An)return e==="compositionend"||!Rs&&Xa(e,t)?(e=Wa(),Jr=Es=qt=null,An=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qa&&t.locale!=="ko"?null:t.data;default:return null}}var Cc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Za(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cc[e.type]:t==="textarea"}function el(e,t,n,r){wa(r),t=io(t,"onChange"),0<t.length&&(n=new ks("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function Lc(e){vl(e,0)}function no(e){var t=jn(e);if(se(t))return e}function Oc(e,t){if(e==="change")return t}var tl=!1;if(F){var Cs;if(F){var Ls="oninput"in document;if(!Ls){var nl=document.createElement("div");nl.setAttribute("oninput","return;"),Ls=typeof nl.oninput=="function"}Cs=Ls}else Cs=!1;tl=Cs&&(!document.documentMode||9<document.documentMode)}function rl(){hr&&(hr.detachEvent("onpropertychange",ol),gr=hr=null)}function ol(e){if(e.propertyName==="value"&&no(gr)){var t=[];el(t,gr,e,ls(e)),Na(Lc,t)}}function Ic(e,t,n){e==="focusin"?(rl(),hr=t,gr=n,hr.attachEvent("onpropertychange",ol)):e==="focusout"&&rl()}function Ac(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return no(gr)}function bc(e,t){if(e==="click")return no(t)}function Pc(e,t){if(e==="input"||e==="change")return no(t)}function Mc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:Mc;function yr(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!U.call(t,o)||!wt(e[o],t[o]))return!1}return!0}function sl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function il(e,t){var n=sl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sl(n)}}function al(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?al(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ll(){for(var e=window,t=vt();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vt(e.document)}return t}function Os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Dc(e){var t=ll(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&al(n.ownerDocument.documentElement,n)){if(r!==null&&Os(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,s=Math.min(r.start,o);r=r.end===void 0?s:Math.min(r.end,o),!e.extend&&s>r&&(o=r,r=s,s=o),o=il(n,s);var i=il(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jc=F&&"documentMode"in document&&11>=document.documentMode,bn=null,Is=null,vr=null,As=!1;function ul(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;As||bn==null||bn!==vt(r)||(r=bn,"selectionStart"in r&&Os(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vr&&yr(vr,r)||(vr=r,r=io(Is,"onSelect"),0<r.length&&(t=new ks("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=bn)))}function ro(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pn={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},bs={},dl={};F&&(dl=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function oo(e){if(bs[e])return bs[e];if(!Pn[e])return e;var t=Pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in dl)return bs[e]=t[n];return e}var cl=oo("animationend"),fl=oo("animationiteration"),pl=oo("animationstart"),ml=oo("transitionend"),hl=new Map,gl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){hl.set(e,t),T(t,[e])}for(var Ps=0;Ps<gl.length;Ps++){var Ms=gl[Ps],Fc=Ms.toLowerCase(),Uc=Ms[0].toUpperCase()+Ms.slice(1);Qt(Fc,"on"+Uc)}Qt(cl,"onAnimationEnd"),Qt(fl,"onAnimationIteration"),Qt(pl,"onAnimationStart"),Qt("dblclick","onDoubleClick"),Qt("focusin","onFocus"),Qt("focusout","onBlur"),Qt(ml,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),T("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),T("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),T("onBeforeInput",["compositionend","keypress","textInput","paste"]),T("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),T("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),T("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bc=new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));function yl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Fd(r,t,void 0,e),e.currentTarget=null}function vl(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var i=r.length-1;0<=i;i--){var u=r[i],c=u.instance,y=u.currentTarget;if(u=u.listener,c!==s&&o.isPropagationStopped())break e;yl(o,u,y),s=c}else for(i=0;i<r.length;i++){if(u=r[i],c=u.instance,y=u.currentTarget,u=u.listener,c!==s&&o.isPropagationStopped())break e;yl(o,u,y),s=c}}}if(Hr)throw e=fs,Hr=!1,fs=null,e}function ye(e,t){var n=t[Ws];n===void 0&&(n=t[Ws]=new Set);var r=e+"__bubble";n.has(r)||(xl(t,e,2,!1),n.add(r))}function Ds(e,t,n){var r=0;t&&(r|=4),xl(n,e,r,t)}var so="_reactListening"+Math.random().toString(36).slice(2);function wr(e){if(!e[so]){e[so]=!0,x.forEach(function(n){n!=="selectionchange"&&(Bc.has(n)||Ds(n,!1,e),Ds(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[so]||(t[so]=!0,Ds("selectionchange",!1,t))}}function xl(e,t,n,r){switch(Ha(t)){case 1:var o=ec;break;case 4:o=tc;break;default:o=xs}n=o.bind(null,t,n,e),o=void 0,!cs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function js(e,t,n,r,o){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;i=i.return}for(;u!==null;){if(i=pn(u),i===null)return;if(c=i.tag,c===5||c===6){r=s=i;continue e}u=u.parentNode}}r=r.return}Na(function(){var y=s,k=ls(n),S=[];e:{var E=hl.get(e);if(E!==void 0){var R=ks,I=e;switch(e){case"keypress":if(Zr(n)===0)break e;case"keydown":case"keyup":R=gc;break;case"focusin":I="focus",R=Ts;break;case"focusout":I="blur",R=Ts;break;case"beforeblur":case"afterblur":R=Ts;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=oc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=xc;break;case cl:case fl:case pl:R=ac;break;case ml:R=Ec;break;case"scroll":R=nc;break;case"wheel":R=Sc;break;case"copy":case"cut":case"paste":R=uc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=$a}var b=(t&4)!==0,Ae=!b&&e==="scroll",m=b?E!==null?E+"Capture":null:E;b=[];for(var f=y,g;f!==null;){g=f;var N=g.stateNode;if(g.tag===5&&N!==null&&(g=N,m!==null&&(N=nr(f,m),N!=null&&b.push(Er(f,N,g)))),Ae)break;f=f.return}0<b.length&&(E=new R(E,I,null,n,k),S.push({event:E,listeners:b}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",E&&n!==as&&(I=n.relatedTarget||n.fromElement)&&(pn(I)||I[Pt]))break e;if((R||E)&&(E=k.window===k?k:(E=k.ownerDocument)?E.defaultView||E.parentWindow:window,R?(I=n.relatedTarget||n.toElement,R=y,I=I?pn(I):null,I!==null&&(Ae=fn(I),I!==Ae||I.tag!==5&&I.tag!==6)&&(I=null)):(R=null,I=y),R!==I)){if(b=Va,N="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(b=$a,N="onPointerLeave",m="onPointerEnter",f="pointer"),Ae=R==null?E:jn(R),g=I==null?E:jn(I),E=new b(N,f+"leave",R,n,k),E.target=Ae,E.relatedTarget=g,N=null,pn(k)===y&&(b=new b(m,f+"enter",I,n,k),b.target=g,b.relatedTarget=Ae,N=b),Ae=N,R&&I)t:{for(b=R,m=I,f=0,g=b;g;g=Mn(g))f++;for(g=0,N=m;N;N=Mn(N))g++;for(;0<f-g;)b=Mn(b),f--;for(;0<g-f;)m=Mn(m),g--;for(;f--;){if(b===m||m!==null&&b===m.alternate)break t;b=Mn(b),m=Mn(m)}b=null}else b=null;R!==null&&wl(S,E,R,b,!1),I!==null&&Ae!==null&&wl(S,Ae,I,b,!0)}}e:{if(E=y?jn(y):window,R=E.nodeName&&E.nodeName.toLowerCase(),R==="select"||R==="input"&&E.type==="file")var M=Oc;else if(Za(E))if(tl)M=Pc;else{M=Ac;var B=Ic}else(R=E.nodeName)&&R.toLowerCase()==="input"&&(E.type==="checkbox"||E.type==="radio")&&(M=bc);if(M&&(M=M(e,y))){el(S,M,n,k);break e}B&&B(e,E,y),e==="focusout"&&(B=E._wrapperState)&&B.controlled&&E.type==="number"&&ns(E,"number",E.value)}switch(B=y?jn(y):window,e){case"focusin":(Za(B)||B.contentEditable==="true")&&(bn=B,Is=y,vr=null);break;case"focusout":vr=Is=bn=null;break;case"mousedown":As=!0;break;case"contextmenu":case"mouseup":case"dragend":As=!1,ul(S,n,k);break;case"selectionchange":if(jc)break;case"keydown":case"keyup":ul(S,n,k)}var z;if(Rs)e:{switch(e){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else An?Xa(e,n)&&(W="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(W="onCompositionStart");W&&(qa&&n.locale!=="ko"&&(An||W!=="onCompositionStart"?W==="onCompositionEnd"&&An&&(z=Wa()):(qt=k,Es="value"in qt?qt.value:qt.textContent,An=!0)),B=io(y,W),0<B.length&&(W=new Ya(W,e,null,n,k),S.push({event:W,listeners:B}),z?W.data=z:(z=Ja(n),z!==null&&(W.data=z)))),(z=Tc?_c(e,n):Rc(e,n))&&(y=io(y,"onBeforeInput"),0<y.length&&(k=new Ya("onBeforeInput","beforeinput",null,n,k),S.push({event:k,listeners:y}),k.data=z))}vl(S,t)})}function Er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function io(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=nr(e,n),s!=null&&r.unshift(Er(e,s,o)),s=nr(e,t),s!=null&&r.push(Er(e,s,o))),e=e.return}return r}function Mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wl(e,t,n,r,o){for(var s=t._reactName,i=[];n!==null&&n!==r;){var u=n,c=u.alternate,y=u.stateNode;if(c!==null&&c===r)break;u.tag===5&&y!==null&&(u=y,o?(c=nr(n,s),c!=null&&i.unshift(Er(n,c,u))):o||(c=nr(n,s),c!=null&&i.push(Er(n,c,u)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var zc=/\r\n?/g,Hc=/\u0000|\uFFFD/g;function El(e){return(typeof e=="string"?e:""+e).replace(zc,`
`).replace(Hc,"")}function ao(e,t,n){if(t=El(t),El(e)!==t&&n)throw Error(l(425))}function lo(){}var Fs=null,Us=null;function Bs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zs=typeof setTimeout=="function"?setTimeout:void 0,Wc=typeof clearTimeout=="function"?clearTimeout:void 0,kl=typeof Promise=="function"?Promise:void 0,Gc=typeof queueMicrotask=="function"?queueMicrotask:typeof kl<"u"?function(e){return kl.resolve(null).then(e).catch(Vc)}:zs;function Vc(e){setTimeout(function(){throw e})}function Hs(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),cr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);cr(t)}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Dn=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Dn,kr="__reactProps$"+Dn,Pt="__reactContainer$"+Dn,Ws="__reactEvents$"+Dn,Yc="__reactListeners$"+Dn,$c="__reactHandles$"+Dn;function pn(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pt]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sl(e);e!==null;){if(n=e[Ct])return n;e=Sl(e)}return t}e=n,n=e.parentNode}return null}function Sr(e){return e=e[Ct]||e[Pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function uo(e){return e[kr]||null}var Gs=[],Fn=-1;function Xt(e){return{current:e}}function ve(e){0>Fn||(e.current=Gs[Fn],Gs[Fn]=null,Fn--)}function ge(e,t){Fn++,Gs[Fn]=e.current,e.current=t}var Jt={},$e=Xt(Jt),nt=Xt(!1),mn=Jt;function Un(e,t){var n=e.type.contextTypes;if(!n)return Jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in n)o[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function rt(e){return e=e.childContextTypes,e!=null}function co(){ve(nt),ve($e)}function Nl(e,t,n){if($e.current!==Jt)throw Error(l(168));ge($e,t),ge(nt,n)}function Tl(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(l(108,me(e)||"Unknown",o));return L({},n,r)}function fo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jt,mn=$e.current,ge($e,e),ge(nt,nt.current),!0}function _l(e,t,n){var r=e.stateNode;if(!r)throw Error(l(169));n?(e=Tl(e,t,mn),r.__reactInternalMemoizedMergedChildContext=e,ve(nt),ve($e),ge($e,e)):ve(nt),ge(nt,n)}var Mt=null,po=!1,Vs=!1;function Rl(e){Mt===null?Mt=[e]:Mt.push(e)}function qc(e){po=!0,Rl(e)}function Zt(){if(!Vs&&Mt!==null){Vs=!0;var e=0,t=pe;try{var n=Mt;for(pe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Mt=null,po=!1}catch(o){throw Mt!==null&&(Mt=Mt.slice(e+1)),La(ps,Zt),o}finally{pe=t,Vs=!1}}return null}var Bn=[],zn=0,mo=null,ho=0,ft=[],pt=0,hn=null,Dt=1,jt="";function gn(e,t){Bn[zn++]=ho,Bn[zn++]=mo,mo=e,ho=t}function Cl(e,t,n){ft[pt++]=Dt,ft[pt++]=jt,ft[pt++]=hn,hn=e;var r=Dt;e=jt;var o=32-xt(r)-1;r&=~(1<<o),n+=1;var s=32-xt(t)+o;if(30<s){var i=o-o%5;s=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Dt=1<<32-xt(t)+o|n<<o|r,jt=s+e}else Dt=1<<s|n<<o|r,jt=e}function Ys(e){e.return!==null&&(gn(e,1),Cl(e,1,0))}function $s(e){for(;e===mo;)mo=Bn[--zn],Bn[zn]=null,ho=Bn[--zn],Bn[zn]=null;for(;e===hn;)hn=ft[--pt],ft[pt]=null,jt=ft[--pt],ft[pt]=null,Dt=ft[--pt],ft[pt]=null}var ut=null,dt=null,Se=!1,Et=null;function Ll(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ol(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,dt=Kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=hn!==null?{id:Dt,overflow:jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ut=e,dt=null,!0):!1;default:return!1}}function qs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qs(e){if(Se){var t=dt;if(t){var n=t;if(!Ol(e,t)){if(qs(e))throw Error(l(418));t=Kt(n.nextSibling);var r=ut;t&&Ol(e,t)?Ll(r,n):(e.flags=e.flags&-4097|2,Se=!1,ut=e)}}else{if(qs(e))throw Error(l(418));e.flags=e.flags&-4097|2,Se=!1,ut=e}}}function Il(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function go(e){if(e!==ut)return!1;if(!Se)return Il(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Bs(e.type,e.memoizedProps)),t&&(t=dt)){if(qs(e))throw Al(),Error(l(418));for(;t;)Ll(e,t),t=Kt(t.nextSibling)}if(Il(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){dt=Kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ut?Kt(e.stateNode.nextSibling):null;return!0}function Al(){for(var e=dt;e;)e=Kt(e.nextSibling)}function Hn(){dt=ut=null,Se=!1}function Ks(e){Et===null?Et=[e]:Et.push(e)}var Qc=Ee.ReactCurrentBatchConfig;function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var r=n.stateNode}if(!r)throw Error(l(147,e));var o=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(i){var u=o.refs;i===null?delete u[s]:u[s]=i},t._stringRef=s,t)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bl(e){var t=e._init;return t(e._payload)}function Pl(e){function t(m,f){if(e){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function o(m,f){return m=ln(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function u(m,f,g,N){return f===null||f.tag!==6?(f=zi(g,m.mode,N),f.return=m,f):(f=o(f,g),f.return=m,f)}function c(m,f,g,N){var M=g.type;return M===Ne?k(m,f,g.props.children,N,g.key):f!==null&&(f.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===fe&&bl(M)===f.type)?(N=o(f,g.props),N.ref=Nr(m,f,g),N.return=m,N):(N=zo(g.type,g.key,g.props,null,m.mode,N),N.ref=Nr(m,f,g),N.return=m,N)}function y(m,f,g,N){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Hi(g,m.mode,N),f.return=m,f):(f=o(f,g.children||[]),f.return=m,f)}function k(m,f,g,N,M){return f===null||f.tag!==7?(f=Nn(g,m.mode,N,M),f.return=m,f):(f=o(f,g),f.return=m,f)}function S(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=zi(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Le:return g=zo(f.type,f.key,f.props,null,m.mode,g),g.ref=Nr(m,null,f),g.return=m,g;case Me:return f=Hi(f,m.mode,g),f.return=m,f;case fe:var N=f._init;return S(m,N(f._payload),g)}if(Zn(f)||A(f))return f=Nn(f,m.mode,g,null),f.return=m,f;yo(m,f)}return null}function E(m,f,g,N){var M=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return M!==null?null:u(m,f,""+g,N);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Le:return g.key===M?c(m,f,g,N):null;case Me:return g.key===M?y(m,f,g,N):null;case fe:return M=g._init,E(m,f,M(g._payload),N)}if(Zn(g)||A(g))return M!==null?null:k(m,f,g,N,null);yo(m,g)}return null}function R(m,f,g,N,M){if(typeof N=="string"&&N!==""||typeof N=="number")return m=m.get(g)||null,u(f,m,""+N,M);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Le:return m=m.get(N.key===null?g:N.key)||null,c(f,m,N,M);case Me:return m=m.get(N.key===null?g:N.key)||null,y(f,m,N,M);case fe:var B=N._init;return R(m,f,g,B(N._payload),M)}if(Zn(N)||A(N))return m=m.get(g)||null,k(f,m,N,M,null);yo(f,N)}return null}function I(m,f,g,N){for(var M=null,B=null,z=f,W=f=0,He=null;z!==null&&W<g.length;W++){z.index>W?(He=z,z=null):He=z.sibling;var le=E(m,z,g[W],N);if(le===null){z===null&&(z=He);break}e&&z&&le.alternate===null&&t(m,z),f=s(le,f,W),B===null?M=le:B.sibling=le,B=le,z=He}if(W===g.length)return n(m,z),Se&&gn(m,W),M;if(z===null){for(;W<g.length;W++)z=S(m,g[W],N),z!==null&&(f=s(z,f,W),B===null?M=z:B.sibling=z,B=z);return Se&&gn(m,W),M}for(z=r(m,z);W<g.length;W++)He=R(z,m,W,g[W],N),He!==null&&(e&&He.alternate!==null&&z.delete(He.key===null?W:He.key),f=s(He,f,W),B===null?M=He:B.sibling=He,B=He);return e&&z.forEach(function(un){return t(m,un)}),Se&&gn(m,W),M}function b(m,f,g,N){var M=A(g);if(typeof M!="function")throw Error(l(150));if(g=M.call(g),g==null)throw Error(l(151));for(var B=M=null,z=f,W=f=0,He=null,le=g.next();z!==null&&!le.done;W++,le=g.next()){z.index>W?(He=z,z=null):He=z.sibling;var un=E(m,z,le.value,N);if(un===null){z===null&&(z=He);break}e&&z&&un.alternate===null&&t(m,z),f=s(un,f,W),B===null?M=un:B.sibling=un,B=un,z=He}if(le.done)return n(m,z),Se&&gn(m,W),M;if(z===null){for(;!le.done;W++,le=g.next())le=S(m,le.value,N),le!==null&&(f=s(le,f,W),B===null?M=le:B.sibling=le,B=le);return Se&&gn(m,W),M}for(z=r(m,z);!le.done;W++,le=g.next())le=R(z,m,W,le.value,N),le!==null&&(e&&le.alternate!==null&&z.delete(le.key===null?W:le.key),f=s(le,f,W),B===null?M=le:B.sibling=le,B=le);return e&&z.forEach(function(Lf){return t(m,Lf)}),Se&&gn(m,W),M}function Ae(m,f,g,N){if(typeof g=="object"&&g!==null&&g.type===Ne&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Le:e:{for(var M=g.key,B=f;B!==null;){if(B.key===M){if(M=g.type,M===Ne){if(B.tag===7){n(m,B.sibling),f=o(B,g.props.children),f.return=m,m=f;break e}}else if(B.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===fe&&bl(M)===B.type){n(m,B.sibling),f=o(B,g.props),f.ref=Nr(m,B,g),f.return=m,m=f;break e}n(m,B);break}else t(m,B);B=B.sibling}g.type===Ne?(f=Nn(g.props.children,m.mode,N,g.key),f.return=m,m=f):(N=zo(g.type,g.key,g.props,null,m.mode,N),N.ref=Nr(m,f,g),N.return=m,m=N)}return i(m);case Me:e:{for(B=g.key;f!==null;){if(f.key===B)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=o(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=Hi(g,m.mode,N),f.return=m,m=f}return i(m);case fe:return B=g._init,Ae(m,f,B(g._payload),N)}if(Zn(g))return I(m,f,g,N);if(A(g))return b(m,f,g,N);yo(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=o(f,g),f.return=m,m=f):(n(m,f),f=zi(g,m.mode,N),f.return=m,m=f),i(m)):n(m,f)}return Ae}var Wn=Pl(!0),Ml=Pl(!1),vo=Xt(null),xo=null,Gn=null,Xs=null;function Js(){Xs=Gn=xo=null}function Zs(e){var t=vo.current;ve(vo),e._currentValue=t}function ei(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Vn(e,t){xo=e,Xs=Gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ot=!0),e.firstContext=null)}function mt(e){var t=e._currentValue;if(Xs!==e)if(e={context:e,memoizedValue:t,next:null},Gn===null){if(xo===null)throw Error(l(308));Gn=e,xo.dependencies={lanes:0,firstContext:e}}else Gn=Gn.next=e;return t}var yn=null;function ti(e){yn===null?yn=[e]:yn.push(e)}function Dl(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ti(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ft(e,r)}function Ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var en=!1;function ni(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ie&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ft(e,n)}return o=r.interleaved,o===null?(t.next=t,ti(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ft(e,n)}function wo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gs(e,n)}}function Fl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?o=s=i:s=s.next=i,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Eo(e,t,n,r){var o=e.updateQueue;en=!1;var s=o.firstBaseUpdate,i=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var c=u,y=c.next;c.next=null,i===null?s=y:i.next=y,i=c;var k=e.alternate;k!==null&&(k=k.updateQueue,u=k.lastBaseUpdate,u!==i&&(u===null?k.firstBaseUpdate=y:u.next=y,k.lastBaseUpdate=c))}if(s!==null){var S=o.baseState;i=0,k=y=c=null,u=s;do{var E=u.lane,R=u.eventTime;if((r&E)===E){k!==null&&(k=k.next={eventTime:R,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var I=e,b=u;switch(E=t,R=n,b.tag){case 1:if(I=b.payload,typeof I=="function"){S=I.call(R,S,E);break e}S=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=b.payload,E=typeof I=="function"?I.call(R,S,E):I,E==null)break e;S=L({},S,E);break e;case 2:en=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,E=o.effects,E===null?o.effects=[u]:E.push(u))}else R={eventTime:R,lane:E,tag:u.tag,payload:u.payload,callback:u.callback,next:null},k===null?(y=k=R,c=S):k=k.next=R,i|=E;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;E=u,u=E.next,E.next=null,o.lastBaseUpdate=E,o.shared.pending=null}}while(!0);if(k===null&&(c=S),o.baseState=c,o.firstBaseUpdate=y,o.lastBaseUpdate=k,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);wn|=i,e.lanes=i,e.memoizedState=S}}function Ul(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(l(191,o));o.call(r)}}}var Tr={},Lt=Xt(Tr),_r=Xt(Tr),Rr=Xt(Tr);function vn(e){if(e===Tr)throw Error(l(174));return e}function ri(e,t){switch(ge(Rr,t),ge(_r,e),ge(Lt,Tr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:os(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=os(t,e)}ve(Lt),ge(Lt,t)}function Yn(){ve(Lt),ve(_r),ve(Rr)}function Bl(e){vn(Rr.current);var t=vn(Lt.current),n=os(t,e.type);t!==n&&(ge(_r,e),ge(Lt,n))}function oi(e){_r.current===e&&(ve(Lt),ve(_r))}var Te=Xt(0);function ko(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var si=[];function ii(){for(var e=0;e<si.length;e++)si[e]._workInProgressVersionPrimary=null;si.length=0}var So=Ee.ReactCurrentDispatcher,ai=Ee.ReactCurrentBatchConfig,xn=0,_e=null,je=null,Be=null,No=!1,Cr=!1,Lr=0,Kc=0;function qe(){throw Error(l(321))}function li(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function ui(e,t,n,r,o,s){if(xn=s,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,So.current=e===null||e.memoizedState===null?ef:tf,e=n(r,o),Cr){s=0;do{if(Cr=!1,Lr=0,25<=s)throw Error(l(301));s+=1,Be=je=null,t.updateQueue=null,So.current=nf,e=n(r,o)}while(Cr)}if(So.current=Ro,t=je!==null&&je.next!==null,xn=0,Be=je=_e=null,No=!1,t)throw Error(l(300));return e}function di(){var e=Lr!==0;return Lr=0,e}function Ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?_e.memoizedState=Be=e:Be=Be.next=e,Be}function ht(){if(je===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Be===null?_e.memoizedState:Be.next;if(t!==null)Be=t,je=e;else{if(e===null)throw Error(l(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Be===null?_e.memoizedState=Be=e:Be=Be.next=e}return Be}function Or(e,t){return typeof t=="function"?t(e):t}function ci(e){var t=ht(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=je,o=r.baseQueue,s=n.pending;if(s!==null){if(o!==null){var i=o.next;o.next=s.next,s.next=i}r.baseQueue=o=s,n.pending=null}if(o!==null){s=o.next,r=r.baseState;var u=i=null,c=null,y=s;do{var k=y.lane;if((xn&k)===k)c!==null&&(c=c.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),r=y.hasEagerState?y.eagerState:e(r,y.action);else{var S={lane:k,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};c===null?(u=c=S,i=r):c=c.next=S,_e.lanes|=k,wn|=k}y=y.next}while(y!==null&&y!==s);c===null?i=r:c.next=u,wt(r,t.memoizedState)||(ot=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do s=o.lane,_e.lanes|=s,wn|=s,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fi(e){var t=ht(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do s=e(s,i.action),i=i.next;while(i!==o);wt(s,t.memoizedState)||(ot=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function zl(){}function Hl(e,t){var n=_e,r=ht(),o=t(),s=!wt(r.memoizedState,o);if(s&&(r.memoizedState=o,ot=!0),r=r.queue,pi(Vl.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Ir(9,Gl.bind(null,n,r,o,t),void 0,null),ze===null)throw Error(l(349));(xn&30)!==0||Wl(n,t,o)}return o}function Wl(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gl(e,t,n,r){t.value=n,t.getSnapshot=r,Yl(t)&&$l(e)}function Vl(e,t,n){return n(function(){Yl(t)&&$l(e)})}function Yl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function $l(e){var t=Ft(e,1);t!==null&&Tt(t,e,1,-1)}function ql(e){var t=Ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Or,lastRenderedState:e},t.queue=e,e=e.dispatch=Zc.bind(null,_e,e),[t.memoizedState,e]}function Ir(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ql(){return ht().memoizedState}function To(e,t,n,r){var o=Ot();_e.flags|=e,o.memoizedState=Ir(1|t,n,void 0,r===void 0?null:r)}function _o(e,t,n,r){var o=ht();r=r===void 0?null:r;var s=void 0;if(je!==null){var i=je.memoizedState;if(s=i.destroy,r!==null&&li(r,i.deps)){o.memoizedState=Ir(t,n,s,r);return}}_e.flags|=e,o.memoizedState=Ir(1|t,n,s,r)}function Kl(e,t){return To(8390656,8,e,t)}function pi(e,t){return _o(2048,8,e,t)}function Xl(e,t){return _o(4,2,e,t)}function Jl(e,t){return _o(4,4,e,t)}function Zl(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function eu(e,t,n){return n=n!=null?n.concat([e]):null,_o(4,4,Zl.bind(null,t,e),n)}function mi(){}function tu(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&li(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nu(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&li(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ru(e,t,n){return(xn&21)===0?(e.baseState&&(e.baseState=!1,ot=!0),e.memoizedState=n):(wt(n,t)||(n=ba(),_e.lanes|=n,wn|=n,e.baseState=!0),t)}function Xc(e,t){var n=pe;pe=n!==0&&4>n?n:4,e(!0);var r=ai.transition;ai.transition={};try{e(!1),t()}finally{pe=n,ai.transition=r}}function ou(){return ht().memoizedState}function Jc(e,t,n){var r=sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},su(e))iu(t,n);else if(n=Dl(e,t,n,r),n!==null){var o=tt();Tt(n,e,r,o),au(n,t,r)}}function Zc(e,t,n){var r=sn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(su(e))iu(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,u=s(i,n);if(o.hasEagerState=!0,o.eagerState=u,wt(u,i)){var c=t.interleaved;c===null?(o.next=o,ti(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}n=Dl(e,t,o,r),n!==null&&(o=tt(),Tt(n,e,r,o),au(n,t,r))}}function su(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function iu(e,t){Cr=No=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function au(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gs(e,n)}}var Ro={readContext:mt,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},ef={readContext:mt,useCallback:function(e,t){return Ot().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:Kl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,To(4194308,4,Zl.bind(null,t,e),n)},useLayoutEffect:function(e,t){return To(4194308,4,e,t)},useInsertionEffect:function(e,t){return To(4,2,e,t)},useMemo:function(e,t){var n=Ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Jc.bind(null,_e,e),[r.memoizedState,e]},useRef:function(e){var t=Ot();return e={current:e},t.memoizedState=e},useState:ql,useDebugValue:mi,useDeferredValue:function(e){return Ot().memoizedState=e},useTransition:function(){var e=ql(!1),t=e[0];return e=Xc.bind(null,e[1]),Ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=_e,o=Ot();if(Se){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),ze===null)throw Error(l(349));(xn&30)!==0||Wl(r,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,Kl(Vl.bind(null,r,s,e),[e]),r.flags|=2048,Ir(9,Gl.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Ot(),t=ze.identifierPrefix;if(Se){var n=jt,r=Dt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kc++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tf={readContext:mt,useCallback:tu,useContext:mt,useEffect:pi,useImperativeHandle:eu,useInsertionEffect:Xl,useLayoutEffect:Jl,useMemo:nu,useReducer:ci,useRef:Ql,useState:function(){return ci(Or)},useDebugValue:mi,useDeferredValue:function(e){var t=ht();return ru(t,je.memoizedState,e)},useTransition:function(){var e=ci(Or)[0],t=ht().memoizedState;return[e,t]},useMutableSource:zl,useSyncExternalStore:Hl,useId:ou,unstable_isNewReconciler:!1},nf={readContext:mt,useCallback:tu,useContext:mt,useEffect:pi,useImperativeHandle:eu,useInsertionEffect:Xl,useLayoutEffect:Jl,useMemo:nu,useReducer:fi,useRef:Ql,useState:function(){return fi(Or)},useDebugValue:mi,useDeferredValue:function(e){var t=ht();return je===null?t.memoizedState=e:ru(t,je.memoizedState,e)},useTransition:function(){var e=fi(Or)[0],t=ht().memoizedState;return[e,t]},useMutableSource:zl,useSyncExternalStore:Hl,useId:ou,unstable_isNewReconciler:!1};function kt(e,t){if(e&&e.defaultProps){t=L({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function hi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:L({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Co={isMounted:function(e){return(e=e._reactInternals)?fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tt(),o=sn(e),s=Ut(r,o);s.payload=t,n!=null&&(s.callback=n),t=tn(e,s,o),t!==null&&(Tt(t,e,o,r),wo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tt(),o=sn(e),s=Ut(r,o);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=tn(e,s,o),t!==null&&(Tt(t,e,o,r),wo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tt(),r=sn(e),o=Ut(n,r);o.tag=2,t!=null&&(o.callback=t),t=tn(e,o,r),t!==null&&(Tt(t,e,r,n),wo(t,e,r))}};function lu(e,t,n,r,o,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,i):t.prototype&&t.prototype.isPureReactComponent?!yr(n,r)||!yr(o,s):!0}function uu(e,t,n){var r=!1,o=Jt,s=t.contextType;return typeof s=="object"&&s!==null?s=mt(s):(o=rt(t)?mn:$e.current,r=t.contextTypes,s=(r=r!=null)?Un(e,o):Jt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Co,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function du(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Co.enqueueReplaceState(t,t.state,null)}function gi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ni(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=mt(s):(s=rt(t)?mn:$e.current,o.context=Un(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(hi(e,t,s,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Co.enqueueReplaceState(o,o.state,null),Eo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function $n(e,t){try{var n="",r=t;do n+=J(r),r=r.return;while(r);var o=n}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function yi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function vi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rf=typeof WeakMap=="function"?WeakMap:Map;function cu(e,t,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Mo||(Mo=!0,bi=r),vi(e,t)},n}function fu(e,t,n){n=Ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){vi(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vi(e,t),typeof r!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function pu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=vf.bind(null,e,t,n),t.then(e,e))}function mu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function hu(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ut(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var of=Ee.ReactCurrentOwner,ot=!1;function et(e,t,n,r){t.child=e===null?Ml(t,null,n,r):Wn(t,e.child,n,r)}function gu(e,t,n,r,o){n=n.render;var s=t.ref;return Vn(t,o),r=ui(e,t,n,r,s,o),n=di(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Bt(e,t,o)):(Se&&n&&Ys(t),t.flags|=1,et(e,t,r,o),t.child)}function yu(e,t,n,r,o){if(e===null){var s=n.type;return typeof s=="function"&&!Bi(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,vu(e,t,s,r,o)):(e=zo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&o)===0){var i=s.memoizedProps;if(n=n.compare,n=n!==null?n:yr,n(i,r)&&e.ref===t.ref)return Bt(e,t,o)}return t.flags|=1,e=ln(s,r),e.ref=t.ref,e.return=t,t.child=e}function vu(e,t,n,r,o){if(e!==null){var s=e.memoizedProps;if(yr(s,r)&&e.ref===t.ref)if(ot=!1,t.pendingProps=r=s,(e.lanes&o)!==0)(e.flags&131072)!==0&&(ot=!0);else return t.lanes=e.lanes,Bt(e,t,o)}return xi(e,t,n,r,o)}function xu(e,t,n){var r=t.pendingProps,o=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Qn,ct),ct|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(Qn,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(Qn,ct),ct|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,ge(Qn,ct),ct|=r;return et(e,t,o,n),t.child}function wu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function xi(e,t,n,r,o){var s=rt(n)?mn:$e.current;return s=Un(t,s),Vn(t,o),n=ui(e,t,n,r,s,o),r=di(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Bt(e,t,o)):(Se&&r&&Ys(t),t.flags|=1,et(e,t,n,o),t.child)}function Eu(e,t,n,r,o){if(rt(n)){var s=!0;fo(t)}else s=!1;if(Vn(t,o),t.stateNode===null)Oo(e,t),uu(t,n,r),gi(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,u=t.memoizedProps;i.props=u;var c=i.context,y=n.contextType;typeof y=="object"&&y!==null?y=mt(y):(y=rt(n)?mn:$e.current,y=Un(t,y));var k=n.getDerivedStateFromProps,S=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function";S||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||c!==y)&&du(t,i,r,y),en=!1;var E=t.memoizedState;i.state=E,Eo(t,r,i,o),c=t.memoizedState,u!==r||E!==c||nt.current||en?(typeof k=="function"&&(hi(t,n,k,r),c=t.memoizedState),(u=en||lu(t,n,u,r,E,c,y))?(S||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),i.props=r,i.state=c,i.context=y,r=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,jl(e,t),u=t.memoizedProps,y=t.type===t.elementType?u:kt(t.type,u),i.props=y,S=t.pendingProps,E=i.context,c=n.contextType,typeof c=="object"&&c!==null?c=mt(c):(c=rt(n)?mn:$e.current,c=Un(t,c));var R=n.getDerivedStateFromProps;(k=typeof R=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==S||E!==c)&&du(t,i,r,c),en=!1,E=t.memoizedState,i.state=E,Eo(t,r,i,o);var I=t.memoizedState;u!==S||E!==I||nt.current||en?(typeof R=="function"&&(hi(t,n,R,r),I=t.memoizedState),(y=en||lu(t,n,y,r,E,I,c)||!1)?(k||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,I,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,I,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=I),i.props=r,i.state=I,i.context=c,r=y):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),r=!1)}return wi(e,t,n,r,s,o)}function wi(e,t,n,r,o,s){wu(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&_l(t,n,!1),Bt(e,t,s);r=t.stateNode,of.current=t;var u=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Wn(t,e.child,null,s),t.child=Wn(t,null,u,s)):et(e,t,u,s),t.memoizedState=r.state,o&&_l(t,n,!0),t.child}function ku(e){var t=e.stateNode;t.pendingContext?Nl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nl(e,t.context,!1),ri(e,t.containerInfo)}function Su(e,t,n,r,o){return Hn(),Ks(o),t.flags|=256,et(e,t,n,r),t.child}var Ei={dehydrated:null,treeContext:null,retryLane:0};function ki(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nu(e,t,n){var r=t.pendingProps,o=Te.current,s=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ge(Te,o&1),e===null)return Qs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,s?(r=t.mode,s=t.child,i={mode:"hidden",children:i},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=i):s=Ho(i,r,0,null),e=Nn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ki(n),t.memoizedState=Ei,e):Si(t,i));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return sf(e,t,i,r,u,o,n);if(s){s=r.fallback,i=t.mode,o=e.child,u=o.sibling;var c={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=ln(o,c),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?s=ln(u,s):(s=Nn(s,i,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,i=e.child.memoizedState,i=i===null?ki(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~n,t.memoizedState=Ei,r}return s=e.child,e=s.sibling,r=ln(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Si(e,t){return t=Ho({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lo(e,t,n,r){return r!==null&&Ks(r),Wn(t,e.child,null,n),e=Si(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sf(e,t,n,r,o,s,i){if(n)return t.flags&256?(t.flags&=-257,r=yi(Error(l(422))),Lo(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,o=t.mode,r=Ho({mode:"visible",children:r.children},o,0,null),s=Nn(s,o,i,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&Wn(t,e.child,null,i),t.child.memoizedState=ki(i),t.memoizedState=Ei,s);if((t.mode&1)===0)return Lo(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,s=Error(l(419)),r=yi(s,r,void 0),Lo(e,t,i,r)}if(u=(i&e.childLanes)!==0,ot||u){if(r=ze,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,Ft(e,o),Tt(r,e,o,-1))}return Ui(),r=yi(Error(l(421))),Lo(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=xf.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,dt=Kt(o.nextSibling),ut=t,Se=!0,Et=null,e!==null&&(ft[pt++]=Dt,ft[pt++]=jt,ft[pt++]=hn,Dt=e.id,jt=e.overflow,hn=t),t=Si(t,r.children),t.flags|=4096,t)}function Tu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ei(e.return,t,n)}function Ni(e,t,n,r,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=o)}function _u(e,t,n){var r=t.pendingProps,o=r.revealOrder,s=r.tail;if(et(e,t,r.children,n),r=Te.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tu(e,n,t);else if(e.tag===19)Tu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(Te,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ko(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ni(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ko(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ni(t,!0,n,null,s);break;case"together":Ni(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function af(e,t,n){switch(t.tag){case 3:ku(t),Hn();break;case 5:Bl(t);break;case 1:rt(t.type)&&fo(t);break;case 4:ri(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ge(vo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(Te,Te.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Nu(e,t,n):(ge(Te,Te.current&1),e=Bt(e,t,n),e!==null?e.sibling:null);ge(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return _u(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ge(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,xu(e,t,n)}return Bt(e,t,n)}var Ru,Ti,Cu,Lu;Ru=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ti=function(){},Cu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,vn(Lt.current);var s=null;switch(n){case"input":o=bt(e,o),r=bt(e,r),s=[];break;case"select":o=L({},o,{value:void 0}),r=L({},r,{value:void 0}),s=[];break;case"textarea":o=rs(e,o),r=rs(e,r),s=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=lo)}ss(n,r);var i;n=null;for(y in o)if(!r.hasOwnProperty(y)&&o.hasOwnProperty(y)&&o[y]!=null)if(y==="style"){var u=o[y];for(i in u)u.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(v.hasOwnProperty(y)?s||(s=[]):(s=s||[]).push(y,null));for(y in r){var c=r[y];if(u=o?.[y],r.hasOwnProperty(y)&&c!==u&&(c!=null||u!=null))if(y==="style")if(u){for(i in u)!u.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&u[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(s||(s=[]),s.push(y,n)),n=c;else y==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(s=s||[]).push(y,c)):y==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(y,""+c):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(v.hasOwnProperty(y)?(c!=null&&y==="onScroll"&&ye("scroll",e),s||u===c||(s=[])):(s=s||[]).push(y,c))}n&&(s=s||[]).push("style",n);var y=s;(t.updateQueue=y)&&(t.flags|=4)}},Lu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ar(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lf(e,t,n){var r=t.pendingProps;switch($s(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return rt(t.type)&&co(),Qe(t),null;case 3:return r=t.stateNode,Yn(),ve(nt),ve($e),ii(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Et!==null&&(Di(Et),Et=null))),Ti(e,t),Qe(t),null;case 5:oi(t);var o=vn(Rr.current);if(n=t.type,e!==null&&t.stateNode!=null)Cu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(l(166));return Qe(t),null}if(e=vn(Lt.current),go(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Ct]=t,r[kr]=s,e=(t.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(o=0;o<xr.length;o++)ye(xr[o],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Oe(r,s),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ye("invalid",r);break;case"textarea":fa(r,s),ye("invalid",r)}ss(n,s),o=null;for(var i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="children"?typeof u=="string"?r.textContent!==u&&(s.suppressHydrationWarning!==!0&&ao(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(s.suppressHydrationWarning!==!0&&ao(r.textContent,u,e),o=["children",""+u]):v.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&ye("scroll",r)}switch(n){case"input":P(r),_n(r,s,!0);break;case"textarea":P(r),ma(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=lo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ha(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ct]=t,e[kr]=r,Ru(e,t,!1,!1),t.stateNode=e;e:{switch(i=is(n,r),n){case"dialog":ye("cancel",e),ye("close",e),o=r;break;case"iframe":case"object":case"embed":ye("load",e),o=r;break;case"video":case"audio":for(o=0;o<xr.length;o++)ye(xr[o],e);o=r;break;case"source":ye("error",e),o=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),o=r;break;case"details":ye("toggle",e),o=r;break;case"input":Oe(e,r),o=bt(e,r),ye("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=L({},r,{value:void 0}),ye("invalid",e);break;case"textarea":fa(e,r),o=rs(e,r),ye("invalid",e);break;default:o=r}ss(n,o),u=o;for(s in u)if(u.hasOwnProperty(s)){var c=u[s];s==="style"?va(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ga(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&er(e,c):typeof c=="number"&&er(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(v.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ye("scroll",e):c!=null&&Ce(e,s,c,i))}switch(n){case"input":P(e),_n(e,r,!1);break;case"textarea":P(e),ma(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ue(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Rn(e,!!r.multiple,s,!1):r.defaultValue!=null&&Rn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)Lu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(l(166));if(n=vn(Rr.current),vn(Lt.current),go(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(s=r.nodeValue!==n)&&(e=ut,e!==null))switch(e.tag){case 3:ao(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ao(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return Qe(t),null;case 13:if(ve(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&dt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Al(),Hn(),t.flags|=98560,s=!1;else if(s=go(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(l(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[Ct]=t}else Hn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Qe(t),s=!1}else Et!==null&&(Di(Et),Et=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Te.current&1)!==0?Fe===0&&(Fe=3):Ui())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return Yn(),Ti(e,t),e===null&&wr(t.stateNode.containerInfo),Qe(t),null;case 10:return Zs(t.type._context),Qe(t),null;case 17:return rt(t.type)&&co(),Qe(t),null;case 19:if(ve(Te),s=t.memoizedState,s===null)return Qe(t),null;if(r=(t.flags&128)!==0,i=s.rendering,i===null)if(r)Ar(s,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ko(e),i!==null){for(t.flags|=128,Ar(s,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(Te,Te.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ie()>Kn&&(t.flags|=128,r=!0,Ar(s,!1),t.lanes=4194304)}else{if(!r)if(e=ko(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ar(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!Se)return Qe(t),null}else 2*Ie()-s.renderingStartTime>Kn&&n!==1073741824&&(t.flags|=128,r=!0,Ar(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(n=s.last,n!==null?n.sibling=i:t.child=i,s.last=i)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ie(),t.sibling=null,n=Te.current,ge(Te,r?n&1|2:n&1),t):(Qe(t),null);case 22:case 23:return Fi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ct&1073741824)!==0&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function uf(e,t){switch($s(t),t.tag){case 1:return rt(t.type)&&co(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yn(),ve(nt),ve($e),ii(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return oi(t),null;case 13:if(ve(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(Te),null;case 4:return Yn(),null;case 10:return Zs(t.type._context),null;case 22:case 23:return Fi(),null;case 24:return null;default:return null}}var Io=!1,Ke=!1,df=typeof WeakSet=="function"?WeakSet:Set,O=null;function qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(e,t,r)}else n.current=null}function _i(e,t,n){try{n()}catch(r){Re(e,t,r)}}var Ou=!1;function cf(e,t){if(Fs=Kr,e=ll(),Os(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var i=0,u=-1,c=-1,y=0,k=0,S=e,E=null;t:for(;;){for(var R;S!==n||o!==0&&S.nodeType!==3||(u=i+o),S!==s||r!==0&&S.nodeType!==3||(c=i+r),S.nodeType===3&&(i+=S.nodeValue.length),(R=S.firstChild)!==null;)E=S,S=R;for(;;){if(S===e)break t;if(E===n&&++y===o&&(u=i),E===s&&++k===r&&(c=i),(R=S.nextSibling)!==null)break;S=E,E=S.parentNode}S=R}n=u===-1||c===-1?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Us={focusedElem:e,selectionRange:n},Kr=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var I=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var b=I.memoizedProps,Ae=I.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?b:kt(t.type,b),Ae);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(N){Re(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return I=Ou,Ou=!1,I}function br(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&_i(t,n,s)}o=o.next}while(o!==r)}}function Ao(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ri(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function Iu(e){var t=e.alternate;t!==null&&(e.alternate=null,Iu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[kr],delete t[Ws],delete t[Yc],delete t[$c])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Au(e){return e.tag===5||e.tag===3||e.tag===4}function bu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Au(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ci(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=lo));else if(r!==4&&(e=e.child,e!==null))for(Ci(e,t,n),e=e.sibling;e!==null;)Ci(e,t,n),e=e.sibling}function Li(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Li(e,t,n),e=e.sibling;e!==null;)Li(e,t,n),e=e.sibling}var Ge=null,St=!1;function nn(e,t,n){for(n=n.child;n!==null;)Pu(e,t,n),n=n.sibling}function Pu(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Gr,n)}catch{}switch(n.tag){case 5:Ke||qn(n,t);case 6:var r=Ge,o=St;Ge=null,nn(e,t,n),Ge=r,St=o,Ge!==null&&(St?(e=Ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(St?(e=Ge,n=n.stateNode,e.nodeType===8?Hs(e.parentNode,n):e.nodeType===1&&Hs(e,n),cr(e)):Hs(Ge,n.stateNode));break;case 4:r=Ge,o=St,Ge=n.stateNode.containerInfo,St=!0,nn(e,t,n),Ge=r,St=o;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var s=o,i=s.destroy;s=s.tag,i!==void 0&&((s&2)!==0||(s&4)!==0)&&_i(n,t,i),o=o.next}while(o!==r)}nn(e,t,n);break;case 1:if(!Ke&&(qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Re(n,t,u)}nn(e,t,n);break;case 21:nn(e,t,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,nn(e,t,n),Ke=r):nn(e,t,n);break;default:nn(e,t,n)}}function Mu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new df),t.forEach(function(r){var o=wf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var s=e,i=t,u=i;e:for(;u!==null;){switch(u.tag){case 5:Ge=u.stateNode,St=!1;break e;case 3:Ge=u.stateNode.containerInfo,St=!0;break e;case 4:Ge=u.stateNode.containerInfo,St=!0;break e}u=u.return}if(Ge===null)throw Error(l(160));Pu(s,i,o),Ge=null,St=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(y){Re(o,t,y)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Du(t,e),t=t.sibling}function Du(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),It(e),r&4){try{br(3,e,e.return),Ao(3,e)}catch(b){Re(e,e.return,b)}try{br(5,e,e.return)}catch(b){Re(e,e.return,b)}}break;case 1:Nt(t,e),It(e),r&512&&n!==null&&qn(n,n.return);break;case 5:if(Nt(t,e),It(e),r&512&&n!==null&&qn(n,n.return),e.flags&32){var o=e.stateNode;try{er(o,"")}catch(b){Re(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,i=n!==null?n.memoizedProps:s,u=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{u==="input"&&s.type==="radio"&&s.name!=null&&cn(o,s),is(u,i);var y=is(u,s);for(i=0;i<c.length;i+=2){var k=c[i],S=c[i+1];k==="style"?va(o,S):k==="dangerouslySetInnerHTML"?ga(o,S):k==="children"?er(o,S):Ce(o,k,S,y)}switch(u){case"input":Tn(o,s);break;case"textarea":pa(o,s);break;case"select":var E=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?Rn(o,!!s.multiple,R,!1):E!==!!s.multiple&&(s.defaultValue!=null?Rn(o,!!s.multiple,s.defaultValue,!0):Rn(o,!!s.multiple,s.multiple?[]:"",!1))}o[kr]=s}catch(b){Re(e,e.return,b)}}break;case 6:if(Nt(t,e),It(e),r&4){if(e.stateNode===null)throw Error(l(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(b){Re(e,e.return,b)}}break;case 3:if(Nt(t,e),It(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{cr(t.containerInfo)}catch(b){Re(e,e.return,b)}break;case 4:Nt(t,e),It(e);break;case 13:Nt(t,e),It(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(Ai=Ie())),r&4&&Mu(e);break;case 22:if(k=n!==null&&n.memoizedState!==null,e.mode&1?(Ke=(y=Ke)||k,Nt(t,e),Ke=y):Nt(t,e),It(e),r&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!k&&(e.mode&1)!==0)for(O=e,k=e.child;k!==null;){for(S=O=k;O!==null;){switch(E=O,R=E.child,E.tag){case 0:case 11:case 14:case 15:br(4,E,E.return);break;case 1:qn(E,E.return);var I=E.stateNode;if(typeof I.componentWillUnmount=="function"){r=E,n=E.return;try{t=r,I.props=t.memoizedProps,I.state=t.memoizedState,I.componentWillUnmount()}catch(b){Re(r,n,b)}}break;case 5:qn(E,E.return);break;case 22:if(E.memoizedState!==null){Uu(S);continue}}R!==null?(R.return=E,O=R):Uu(S)}k=k.sibling}e:for(k=null,S=e;;){if(S.tag===5){if(k===null){k=S;try{o=S.stateNode,y?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(u=S.stateNode,c=S.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=ya("display",i))}catch(b){Re(e,e.return,b)}}}else if(S.tag===6){if(k===null)try{S.stateNode.nodeValue=y?"":S.memoizedProps}catch(b){Re(e,e.return,b)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;k===S&&(k=null),S=S.return}k===S&&(k=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:Nt(t,e),It(e),r&4&&Mu(e);break;case 21:break;default:Nt(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Au(n)){var r=n;break e}n=n.return}throw Error(l(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(er(o,""),r.flags&=-33);var s=bu(e);Li(e,s,o);break;case 3:case 4:var i=r.stateNode.containerInfo,u=bu(e);Ci(e,u,i);break;default:throw Error(l(161))}}catch(c){Re(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ff(e,t,n){O=e,ju(e)}function ju(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var o=O,s=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Io;if(!i){var u=o.alternate,c=u!==null&&u.memoizedState!==null||Ke;u=Io;var y=Ke;if(Io=i,(Ke=c)&&!y)for(O=o;O!==null;)i=O,c=i.child,i.tag===22&&i.memoizedState!==null?Bu(o):c!==null?(c.return=i,O=c):Bu(o);for(;s!==null;)O=s,ju(s),s=s.sibling;O=o,Io=u,Ke=y}Fu(e)}else(o.subtreeFlags&8772)!==0&&s!==null?(s.return=o,O=s):Fu(e)}}function Fu(e){for(;O!==null;){var t=O;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ke||Ao(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:kt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Ul(t,s,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ul(t,i,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var y=t.alternate;if(y!==null){var k=y.memoizedState;if(k!==null){var S=k.dehydrated;S!==null&&cr(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ke||t.flags&512&&Ri(t)}catch(E){Re(t,t.return,E)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Uu(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function Bu(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ao(4,t)}catch(c){Re(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){Re(t,o,c)}}var s=t.return;try{Ri(t)}catch(c){Re(t,s,c)}break;case 5:var i=t.return;try{Ri(t)}catch(c){Re(t,i,c)}}}catch(c){Re(t,t.return,c)}if(t===e){O=null;break}var u=t.sibling;if(u!==null){u.return=t.return,O=u;break}O=t.return}}var pf=Math.ceil,bo=Ee.ReactCurrentDispatcher,Oi=Ee.ReactCurrentOwner,gt=Ee.ReactCurrentBatchConfig,ie=0,ze=null,De=null,Ve=0,ct=0,Qn=Xt(0),Fe=0,Pr=null,wn=0,Po=0,Ii=0,Mr=null,st=null,Ai=0,Kn=1/0,zt=null,Mo=!1,bi=null,rn=null,Do=!1,on=null,jo=0,Dr=0,Pi=null,Fo=-1,Uo=0;function tt(){return(ie&6)!==0?Ie():Fo!==-1?Fo:Fo=Ie()}function sn(e){return(e.mode&1)===0?1:(ie&2)!==0&&Ve!==0?Ve&-Ve:Qc.transition!==null?(Uo===0&&(Uo=ba()),Uo):(e=pe,e!==0||(e=window.event,e=e===void 0?16:Ha(e.type)),e)}function Tt(e,t,n,r){if(50<Dr)throw Dr=0,Pi=null,Error(l(185));ir(e,n,r),((ie&2)===0||e!==ze)&&(e===ze&&((ie&2)===0&&(Po|=n),Fe===4&&an(e,Ve)),it(e,r),n===1&&ie===0&&(t.mode&1)===0&&(Kn=Ie()+500,po&&Zt()))}function it(e,t){var n=e.callbackNode;Qd(e,t);var r=$r(e,e===ze?Ve:0);if(r===0)n!==null&&Oa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Oa(n),t===1)e.tag===0?qc(Hu.bind(null,e)):Rl(Hu.bind(null,e)),Gc(function(){(ie&6)===0&&Zt()}),n=null;else{switch(Pa(r)){case 1:n=ps;break;case 4:n=Ia;break;case 16:n=Wr;break;case 536870912:n=Aa;break;default:n=Wr}n=Ku(n,zu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zu(e,t){if(Fo=-1,Uo=0,(ie&6)!==0)throw Error(l(327));var n=e.callbackNode;if(Xn()&&e.callbackNode!==n)return null;var r=$r(e,e===ze?Ve:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Bo(e,r);else{t=r;var o=ie;ie|=2;var s=Gu();(ze!==e||Ve!==t)&&(zt=null,Kn=Ie()+500,kn(e,t));do try{gf();break}catch(u){Wu(e,u)}while(!0);Js(),bo.current=s,ie=o,De!==null?t=0:(ze=null,Ve=0,t=Fe)}if(t!==0){if(t===2&&(o=ms(e),o!==0&&(r=o,t=Mi(e,o))),t===1)throw n=Pr,kn(e,0),an(e,r),it(e,Ie()),n;if(t===6)an(e,r);else{if(o=e.current.alternate,(r&30)===0&&!mf(o)&&(t=Bo(e,r),t===2&&(s=ms(e),s!==0&&(r=s,t=Mi(e,s))),t===1))throw n=Pr,kn(e,0),an(e,r),it(e,Ie()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(l(345));case 2:Sn(e,st,zt);break;case 3:if(an(e,r),(r&130023424)===r&&(t=Ai+500-Ie(),10<t)){if($r(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){tt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=zs(Sn.bind(null,e,st,zt),t);break}Sn(e,st,zt);break;case 4:if(an(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-xt(r);s=1<<i,i=t[i],i>o&&(o=i),r&=~s}if(r=o,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pf(r/1960))-r,10<r){e.timeoutHandle=zs(Sn.bind(null,e,st,zt),r);break}Sn(e,st,zt);break;case 5:Sn(e,st,zt);break;default:throw Error(l(329))}}}return it(e,Ie()),e.callbackNode===n?zu.bind(null,e):null}function Mi(e,t){var n=Mr;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=Bo(e,t),e!==2&&(t=st,st=n,t!==null&&Di(t)),e}function Di(e){st===null?st=e:st.push.apply(st,e)}function mf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],s=o.getSnapshot;o=o.value;try{if(!wt(s(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~Ii,t&=~Po,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function Hu(e){if((ie&6)!==0)throw Error(l(327));Xn();var t=$r(e,0);if((t&1)===0)return it(e,Ie()),null;var n=Bo(e,t);if(e.tag!==0&&n===2){var r=ms(e);r!==0&&(t=r,n=Mi(e,r))}if(n===1)throw n=Pr,kn(e,0),an(e,t),it(e,Ie()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Sn(e,st,zt),it(e,Ie()),null}function ji(e,t){var n=ie;ie|=1;try{return e(t)}finally{ie=n,ie===0&&(Kn=Ie()+500,po&&Zt())}}function En(e){on!==null&&on.tag===0&&(ie&6)===0&&Xn();var t=ie;ie|=1;var n=gt.transition,r=pe;try{if(gt.transition=null,pe=1,e)return e()}finally{pe=r,gt.transition=n,ie=t,(ie&6)===0&&Zt()}}function Fi(){ct=Qn.current,ve(Qn)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wc(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch($s(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&co();break;case 3:Yn(),ve(nt),ve($e),ii();break;case 5:oi(r);break;case 4:Yn();break;case 13:ve(Te);break;case 19:ve(Te);break;case 10:Zs(r.type._context);break;case 22:case 23:Fi()}n=n.return}if(ze=e,De=e=ln(e.current,null),Ve=ct=t,Fe=0,Pr=null,Ii=Po=wn=0,st=Mr=null,yn!==null){for(t=0;t<yn.length;t++)if(n=yn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,s=n.pending;if(s!==null){var i=s.next;s.next=o,r.next=i}n.pending=r}yn=null}return e}function Wu(e,t){do{var n=De;try{if(Js(),So.current=Ro,No){for(var r=_e.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}No=!1}if(xn=0,Be=je=_e=null,Cr=!1,Lr=0,Oi.current=null,n===null||n.return===null){Fe=1,Pr=t,De=null;break}e:{var s=e,i=n.return,u=n,c=t;if(t=Ve,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var y=c,k=u,S=k.tag;if((k.mode&1)===0&&(S===0||S===11||S===15)){var E=k.alternate;E?(k.updateQueue=E.updateQueue,k.memoizedState=E.memoizedState,k.lanes=E.lanes):(k.updateQueue=null,k.memoizedState=null)}var R=mu(i);if(R!==null){R.flags&=-257,hu(R,i,u,s,t),R.mode&1&&pu(s,y,t),t=R,c=y;var I=t.updateQueue;if(I===null){var b=new Set;b.add(c),t.updateQueue=b}else I.add(c);break e}else{if((t&1)===0){pu(s,y,t),Ui();break e}c=Error(l(426))}}else if(Se&&u.mode&1){var Ae=mu(i);if(Ae!==null){(Ae.flags&65536)===0&&(Ae.flags|=256),hu(Ae,i,u,s,t),Ks($n(c,u));break e}}s=c=$n(c,u),Fe!==4&&(Fe=2),Mr===null?Mr=[s]:Mr.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=cu(s,c,t);Fl(s,m);break e;case 1:u=c;var f=s.type,g=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(rn===null||!rn.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var N=fu(s,u,t);Fl(s,N);break e}}s=s.return}while(s!==null)}Yu(n)}catch(M){t=M,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function Gu(){var e=bo.current;return bo.current=Ro,e===null?Ro:e}function Ui(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),ze===null||(wn&268435455)===0&&(Po&268435455)===0||an(ze,Ve)}function Bo(e,t){var n=ie;ie|=2;var r=Gu();(ze!==e||Ve!==t)&&(zt=null,kn(e,t));do try{hf();break}catch(o){Wu(e,o)}while(!0);if(Js(),ie=n,bo.current=r,De!==null)throw Error(l(261));return ze=null,Ve=0,Fe}function hf(){for(;De!==null;)Vu(De)}function gf(){for(;De!==null&&!Bd();)Vu(De)}function Vu(e){var t=Qu(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?Yu(e):De=t,Oi.current=null}function Yu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=lf(n,t,ct),n!==null){De=n;return}}else{if(n=uf(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,De=null;return}}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Fe===0&&(Fe=5)}function Sn(e,t,n){var r=pe,o=gt.transition;try{gt.transition=null,pe=1,yf(e,t,n,r)}finally{gt.transition=o,pe=r}return null}function yf(e,t,n,r){do Xn();while(on!==null);if((ie&6)!==0)throw Error(l(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Kd(e,s),e===ze&&(De=ze=null,Ve=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Do||(Do=!0,Ku(Wr,function(){return Xn(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=gt.transition,gt.transition=null;var i=pe;pe=1;var u=ie;ie|=4,Oi.current=null,cf(e,n),Du(n,e),Dc(Us),Kr=!!Fs,Us=Fs=null,e.current=n,ff(n),zd(),ie=u,pe=i,gt.transition=s}else e.current=n;if(Do&&(Do=!1,on=e,jo=o),s=e.pendingLanes,s===0&&(rn=null),Gd(n.stateNode),it(e,Ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Mo)throw Mo=!1,e=bi,bi=null,e;return(jo&1)!==0&&e.tag!==0&&Xn(),s=e.pendingLanes,(s&1)!==0?e===Pi?Dr++:(Dr=0,Pi=e):Dr=0,Zt(),null}function Xn(){if(on!==null){var e=Pa(jo),t=gt.transition,n=pe;try{if(gt.transition=null,pe=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,jo=0,(ie&6)!==0)throw Error(l(331));var o=ie;for(ie|=4,O=e.current;O!==null;){var s=O,i=s.child;if((O.flags&16)!==0){var u=s.deletions;if(u!==null){for(var c=0;c<u.length;c++){var y=u[c];for(O=y;O!==null;){var k=O;switch(k.tag){case 0:case 11:case 15:br(8,k,s)}var S=k.child;if(S!==null)S.return=k,O=S;else for(;O!==null;){k=O;var E=k.sibling,R=k.return;if(Iu(k),k===y){O=null;break}if(E!==null){E.return=R,O=E;break}O=R}}}var I=s.alternate;if(I!==null){var b=I.child;if(b!==null){I.child=null;do{var Ae=b.sibling;b.sibling=null,b=Ae}while(b!==null)}}O=s}}if((s.subtreeFlags&2064)!==0&&i!==null)i.return=s,O=i;else e:for(;O!==null;){if(s=O,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:br(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,O=m;break e}O=s.return}}var f=e.current;for(O=f;O!==null;){i=O;var g=i.child;if((i.subtreeFlags&2064)!==0&&g!==null)g.return=i,O=g;else e:for(i=f;O!==null;){if(u=O,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:Ao(9,u)}}catch(M){Re(u,u.return,M)}if(u===i){O=null;break e}var N=u.sibling;if(N!==null){N.return=u.return,O=N;break e}O=u.return}}if(ie=o,Zt(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Gr,e)}catch{}r=!0}return r}finally{pe=n,gt.transition=t}}return!1}function $u(e,t,n){t=$n(n,t),t=cu(e,t,1),e=tn(e,t,1),t=tt(),e!==null&&(ir(e,1,t),it(e,t))}function Re(e,t,n){if(e.tag===3)$u(e,e,n);else for(;t!==null;){if(t.tag===3){$u(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rn===null||!rn.has(r))){e=$n(n,e),e=fu(t,e,1),t=tn(t,e,1),e=tt(),t!==null&&(ir(t,1,e),it(t,e));break}}t=t.return}}function vf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=tt(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(Ve&n)===n&&(Fe===4||Fe===3&&(Ve&130023424)===Ve&&500>Ie()-Ai?kn(e,0):Ii|=n),it(e,t)}function qu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Yr,Yr<<=1,(Yr&130023424)===0&&(Yr=4194304)));var n=tt();e=Ft(e,t),e!==null&&(ir(e,t,n),it(e,n))}function xf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function wf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(l(314))}r!==null&&r.delete(t),qu(e,n)}var Qu;Qu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)ot=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ot=!1,af(e,t,n);ot=(e.flags&131072)!==0}else ot=!1,Se&&(t.flags&1048576)!==0&&Cl(t,ho,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Oo(e,t),e=t.pendingProps;var o=Un(t,$e.current);Vn(t,n),o=ui(null,t,r,e,o,n);var s=di();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(s=!0,fo(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ni(t),o.updater=Co,t.stateNode=o,o._reactInternals=t,gi(t,r,e,n),t=wi(null,t,r,!0,s,n)):(t.tag=0,Se&&s&&Ys(t),et(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Oo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=kf(r),e=kt(r,e),o){case 0:t=xi(null,t,r,e,n);break e;case 1:t=Eu(null,t,r,e,n);break e;case 11:t=gu(null,t,r,e,n);break e;case 14:t=yu(null,t,r,kt(r.type,e),n);break e}throw Error(l(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),xi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),Eu(e,t,r,o,n);case 3:e:{if(ku(t),e===null)throw Error(l(387));r=t.pendingProps,s=t.memoizedState,o=s.element,jl(e,t),Eo(t,r,null,n);var i=t.memoizedState;if(r=i.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=$n(Error(l(423)),t),t=Su(e,t,r,n,o);break e}else if(r!==o){o=$n(Error(l(424)),t),t=Su(e,t,r,n,o);break e}else for(dt=Kt(t.stateNode.containerInfo.firstChild),ut=t,Se=!0,Et=null,n=Ml(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hn(),r===o){t=Bt(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 5:return Bl(t),e===null&&Qs(t),r=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,i=o.children,Bs(r,o)?i=null:s!==null&&Bs(r,s)&&(t.flags|=32),wu(e,t),et(e,t,i,n),t.child;case 6:return e===null&&Qs(t),null;case 13:return Nu(e,t,n);case 4:return ri(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wn(t,null,r,n):et(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),gu(e,t,r,o,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,s=t.memoizedProps,i=o.value,ge(vo,r._currentValue),r._currentValue=i,s!==null)if(wt(s.value,i)){if(s.children===o.children&&!nt.current){t=Bt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var u=s.dependencies;if(u!==null){i=s.child;for(var c=u.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Ut(-1,n&-n),c.tag=2;var y=s.updateQueue;if(y!==null){y=y.shared;var k=y.pending;k===null?c.next=c:(c.next=k.next,k.next=c),y.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),ei(s.return,n,t),u.lanes|=n;break}c=c.next}}else if(s.tag===10)i=s.type===t.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(l(341));i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ei(i,n,t),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===t){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}et(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Vn(t,n),o=mt(o),r=r(o),t.flags|=1,et(e,t,r,n),t.child;case 14:return r=t.type,o=kt(r,t.pendingProps),o=kt(r.type,o),yu(e,t,r,o,n);case 15:return vu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),Oo(e,t),t.tag=1,rt(r)?(e=!0,fo(t)):e=!1,Vn(t,n),uu(t,r,o),gi(t,r,o,n),wi(null,t,r,!0,e,n);case 19:return _u(e,t,n);case 22:return xu(e,t,n)}throw Error(l(156,t.tag))};function Ku(e,t){return La(e,t)}function Ef(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new Ef(e,t,n,r)}function Bi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kf(e){if(typeof e=="function")return Bi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ke)return 11;if(e===re)return 14}return 2}function ln(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zo(e,t,n,r,o,s){var i=2;if(r=e,typeof e=="function")Bi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ne:return Nn(n.children,o,s,t);case Ye:i=8,o|=8;break;case Je:return e=yt(12,n,t,o|2),e.elementType=Je,e.lanes=s,e;case ee:return e=yt(13,n,t,o),e.elementType=ee,e.lanes=s,e;case te:return e=yt(19,n,t,o),e.elementType=te,e.lanes=s,e;case ce:return Ho(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:i=10;break e;case V:i=9;break e;case ke:i=11;break e;case re:i=14;break e;case fe:i=16,r=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=yt(i,n,t,o),t.elementType=e,t.type=r,t.lanes=s,t}function Nn(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function Ho(e,t,n,r){return e=yt(22,e,r,t),e.elementType=ce,e.lanes=n,e.stateNode={isHidden:!1},e}function zi(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function Hi(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Sf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hs(0),this.expirationTimes=hs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hs(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Wi(e,t,n,r,o,s,i,u,c){return e=new Sf(e,t,n,u,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=yt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ni(s),e}function Nf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Me,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xu(e){if(!e)return Jt;e=e._reactInternals;e:{if(fn(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(rt(n))return Tl(e,n,t)}return t}function Ju(e,t,n,r,o,s,i,u,c){return e=Wi(n,r,!0,e,o,s,i,u,c),e.context=Xu(null),n=e.current,r=tt(),o=sn(n),s=Ut(r,o),s.callback=t??null,tn(n,s,o),e.current.lanes=o,ir(e,o,r),it(e,r),e}function Wo(e,t,n,r){var o=t.current,s=tt(),i=sn(o);return n=Xu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ut(s,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(o,t,i),e!==null&&(Tt(e,o,i,s),wo(e,o,i)),i}function Go(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Zu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gi(e,t){Zu(e,t),(e=e.alternate)&&Zu(e,t)}function Tf(){return null}var ed=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vi(e){this._internalRoot=e}Vo.prototype.render=Vi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));Wo(e,t,null,null)},Vo.prototype.unmount=Vi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;En(function(){Wo(null,e,null,null)}),t[Pt]=null}};function Vo(e){this._internalRoot=e}Vo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ja();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&t!==0&&t<$t[n].priority;n++);$t.splice(n,0,e),n===0&&Ba(e)}};function Yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function td(){}function _f(e,t,n,r,o){if(o){if(typeof r=="function"){var s=r;r=function(){var y=Go(i);s.call(y)}}var i=Ju(t,r,e,0,null,!1,!1,"",td);return e._reactRootContainer=i,e[Pt]=i.current,wr(e.nodeType===8?e.parentNode:e),En(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var y=Go(c);u.call(y)}}var c=Wi(e,0,!1,null,null,!1,!1,"",td);return e._reactRootContainer=c,e[Pt]=c.current,wr(e.nodeType===8?e.parentNode:e),En(function(){Wo(t,c,n,r)}),c}function $o(e,t,n,r,o){var s=n._reactRootContainer;if(s){var i=s;if(typeof o=="function"){var u=o;o=function(){var c=Go(i);u.call(c)}}Wo(t,i,e,o)}else i=_f(n,t,e,o,r);return Go(i)}Ma=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sr(t.pendingLanes);n!==0&&(gs(t,n|1),it(t,Ie()),(ie&6)===0&&(Kn=Ie()+500,Zt()))}break;case 13:En(function(){var r=Ft(e,1);if(r!==null){var o=tt();Tt(r,e,1,o)}}),Gi(e,1)}},ys=function(e){if(e.tag===13){var t=Ft(e,134217728);if(t!==null){var n=tt();Tt(t,e,134217728,n)}Gi(e,134217728)}},Da=function(e){if(e.tag===13){var t=sn(e),n=Ft(e,t);if(n!==null){var r=tt();Tt(n,e,t,r)}Gi(e,t)}},ja=function(){return pe},Fa=function(e,t){var n=pe;try{return pe=e,t()}finally{pe=n}},us=function(e,t,n){switch(t){case"input":if(Tn(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=uo(r);if(!o)throw Error(l(90));se(r),Tn(r,o)}}}break;case"textarea":pa(e,n);break;case"select":t=n.value,t!=null&&Rn(e,!!n.multiple,t,!1)}},ka=ji,Sa=En;var Rf={usingClientEntryPoint:!1,Events:[Sr,jn,uo,wa,Ea,ji]},jr={findFiberByHostInstance:pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cf={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ra(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||Tf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qo.isDisabled&&qo.supportsFiber)try{Gr=qo.inject(Cf),Rt=qo}catch{}}return at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rf,at.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yi(t))throw Error(l(200));return Nf(e,t,null,n)},at.createRoot=function(e,t){if(!Yi(e))throw Error(l(299));var n=!1,r="",o=ed;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Wi(e,1,!1,null,null,n,!1,r,o),e[Pt]=t.current,wr(e.nodeType===8?e.parentNode:e),new Vi(t)},at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Ra(t),e=e===null?null:e.stateNode,e},at.flushSync=function(e){return En(e)},at.hydrate=function(e,t,n){if(!Yo(t))throw Error(l(200));return $o(null,e,t,!0,n)},at.hydrateRoot=function(e,t,n){if(!Yi(e))throw Error(l(405));var r=n!=null&&n.hydratedSources||null,o=!1,s="",i=ed;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Ju(t,null,e,1,n??null,o,!1,s,i),e[Pt]=t.current,wr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Vo(t)},at.render=function(e,t,n){if(!Yo(t))throw Error(l(200));return $o(null,e,t,!1,n)},at.unmountComponentAtNode=function(e){if(!Yo(e))throw Error(l(40));return e._reactRootContainer?(En(function(){$o(null,null,e,!1,function(){e._reactRootContainer=null,e[Pt]=null})}),!0):!1},at.unstable_batchedUpdates=ji,at.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Yo(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return $o(e,t,n,!1,r)},at.version="18.3.1-next-f1338f8080-20240426",at}var ud;function jf(){if(ud)return Qi.exports;ud=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(h){console.error(h)}}return d(),Qi.exports=Df(),Qi.exports}var dd;function Ff(){if(dd)return Qo;dd=1;var d=jf();return Qo.createRoot=d.createRoot,Qo.hydrateRoot=d.hydrateRoot,Qo}var Uf=Ff();const Bf=vd(Uf);const zf=d=>d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),xd=(...d)=>d.filter((h,l,x)=>!!h&&x.indexOf(h)===l).join(" ");var Hf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Wf=ne.forwardRef(({color:d="currentColor",size:h=24,strokeWidth:l=2,absoluteStrokeWidth:x,className:v="",children:T,iconNode:j,...F},U)=>ne.createElement("svg",{ref:U,...Hf,width:h,height:h,stroke:d,strokeWidth:x?Number(l)*24/Number(h):l,className:xd("lucide",v),...F},[...j.map(([$,X])=>ne.createElement($,X)),...Array.isArray(T)?T:[T]]));const xe=(d,h)=>{const l=ne.forwardRef(({className:x,...v},T)=>ne.createElement(Wf,{ref:T,iconNode:h,className:xd(`lucide-${zf(d)}`,x),...v}));return l.displayName=`${d}`,l};const wd=xe("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);const Gf=xe("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);const Vf=xe("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);const Yf=xe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);const cd=xe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const Xo=xe("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);const fd=xe("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);const pd=xe("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);const $f=xe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);const qf=xe("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);const es=xe("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);const oa=xe("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);const Qf=xe("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);const Ed=xe("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);const Kf=xe("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);const md=xe("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);const Jn=xe("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);const Xf=xe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const sa=xe("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);const ta=xe("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);const na=xe("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);const Jf=xe("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const Zf=xe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);const ia=xe("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);const kd=xe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),At=[{id:"m1",title:{en:"Foundations",th:"พื้นฐาน"},icon:"Code2",topics:[{id:"m1-t1",title:{en:"1.1 Variables, Types & Coercion",th:"1.1 ตัวแปร ประเภท และ Coercion"},kind:"python",content:`A variable points to a value. No declaration. No type written. Python figures it out.

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

In pandas this becomes  df['gmv'].astype(int)  or  pd.to_numeric(df['gmv']).`,exercisePrompt:"Create a variable customer_age set to the integer 35. Then write the one-liner that prints its type."},{id:"m1-t2",title:{en:"1.2 F-strings & String Methods",th:"1.2 F-strings และ String Methods"},kind:"python",content:`F-strings are the modern way to build strings. Prefix the quote with f, drop variables in { }:

city = 'Bangkok'
print(f'Welcome to {city.upper()}')   # → Welcome to BANGKOK

Five string methods pandas applies across whole columns via .str:

.strip()             remove leading/trailing whitespace
.lower() / .upper()  change case
.replace('a','b')    substitute
.split(',')          → list
.startswith('TH')    → bool

In pandas:  df['country'].str.lower().str.strip()
This is column-wide vectorised work. No loops.`,exercisePrompt:"Using an f-string, build the string 'Welcome to BANGKOK' from a variable city = 'bangkok'. Use .upper() inside the f-string."},{id:"m1-t3",title:{en:"1.3 Numbers & Arithmetic",th:"1.3 ตัวเลขและการคำนวณ"},kind:"python",content:`The operators:  +  -  *  /  //  %  **

  /    true division     7 / 2  → 3.5
  //   floor division    7 // 2 → 3
  %    modulo            7 % 2  → 1
  **   exponent          2 ** 8 → 256

divmod(a, b) → (a // b, a % b) — one call for both. Useful for unit conversion.

round(x, n) — banker's rounding (round-half-to-even). round(2.5) → 2, round(3.5) → 4. Surprises people. For ordinary rounding use math.floor / math.ceil when you mean it specifically.

Order of operations follows maths:  **  before  *  /  before  +  -. When in doubt, parens.

Integers are arbitrary-precision in Python (no overflow). Floats are IEEE 754 — 0.1 + 0.2 != 0.3. We'll fix that in 1.4.`,exercisePrompt:"Compute the total number of seconds in 2 hr 15 min 7 sec using arithmetic (no string parsing). End with the expression to print it."},{id:"m1-t4",title:{en:"1.4 Comparison & Equality",th:"1.4 การเปรียบเทียบและความเท่ากัน"},kind:"python",content:`Operators:  ==  !=  <  >  <=  >=

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

In pandas you never use == on series for missing values — use .isna() / .notna(). NaN == NaN is False, always.`,exercisePrompt:'In one expression, check whether (0.1 + 0.2) and 0.3 are "equal enough". Use math.isclose. End with the expression.'},{id:"m1-t5",title:{en:"1.5 if / elif / else",th:"1.5 if / elif / else"},kind:"python",content:`Branch on a condition. Python uses indentation, no braces.

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

When you find yourself 3+ levels deep, refactor.`,exercisePrompt:"Write a function tier(gmv) that returns 'small' if gmv < 100, 'medium' if 100 <= gmv < 1000, and 'large' if gmv >= 1000. Then call tier(750) at the end so Run shows the result."},{id:"m1-t6",title:{en:"1.6 for Loops & range",th:"1.6 for Loop และ range"},kind:"python",content:`The Python for loop iterates over a sequence — it's a foreach, not a counter loop.

  for status in ['paid', 'cancelled', 'pending']:
      print(status)

range(stop) / range(start, stop) / range(start, stop, step):

  for i in range(5):          # 0, 1, 2, 3, 4
  for i in range(1, 6):       # 1, 2, 3, 4, 5
  for i in range(0, 10, 2):   # 0, 2, 4, 6, 8

Looping a dict yields keys (use .items() for key + value):

  for k in customer:           # k = 'name', 'spend', ...
  for k, v in customer.items():

WHY YOU'LL ABANDON FOR LOOPS LATER: in pandas, iterating row-by-row is 100× slower than vectorised ops. We learn loops to read code, not to write data pipelines.`,exercisePrompt:"Given  prices = [250, 480, 1200, 99], compute the total using a for loop and end with that total. (Yes — vectorised is better; this is the for-loop drill.)"},{id:"m1-t7",title:{en:"1.7 while + break / continue",th:"1.7 while + break / continue"},kind:"python",content:`A while loop runs until its condition is False. Use when you don't know the iteration count in advance.

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

Use while sparingly. 90% of the time a for + range is clearer.`,exercisePrompt:"Given  prices = [250, 480, 1200, 99, 1500]: use a while loop to find the FIRST INDEX where the running total exceeds 1000. End with that index."},{id:"m1-t8",title:{en:"1.8 Functions: def, return, defaults",th:"1.8 ฟังก์ชัน: def, return, defaults"},kind:"python",content:`A function is a named block of code that takes inputs and returns an output.

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
      return bag`,exercisePrompt:"Write a function aov(gmv_list) that returns the mean of the list, or 0 if the list is empty. Then call  aov([250, 480, 1200])  at the end so Run shows the result."},{id:"m1-t9",title:{en:"1.9 None, Truthiness & Falsy Values",th:"1.9 None, Truthiness และค่า Falsy"},kind:"python",content:`None is Python's "no value." Different from False, 0, and ''.

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

In pandas, None-vs-NaN distinction blurs — both register as missing via .isna(). Don't compare to None with == on a column; use the methods.`,exercisePrompt:"Write a function  first_present(values)  that returns the first non-None value, or None if all are None. Call it with  [None, None, 42, None]  so Run shows the result."},{id:"m1-t10",title:{en:"1.10 print vs return — Debugging Right",th:"1.10 print vs return — Debug ให้ถูก"},kind:"python",content:`THIS IS THE #1 BEGINNER CONFUSION.

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

In notebooks (Jupyter, this sandbox), the LAST expression is auto-displayed — no print needed for inspection.`,exercisePrompt:"Here is broken code:  def gmv_sum(x, y): print(x + y) . In one sentence, why is it wrong? Then write the fixed version and end with  gmv_sum(250, 480) + 100 ."},{id:"m1-t11",title:{en:"1.11 try / except — Handling Dirty Data",th:"1.11 try / except — จัดการข้อมูลสกปรก"},kind:"python",content:`Code that touches real-world data WILL hit exceptions: malformed CSVs, missing keys, weird Unicode. Handle them on purpose, not by crashing.

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

In pandas you rarely write try/except — you use .fillna() or pd.to_numeric(errors='coerce') instead. Knowing both gives you options.`,exercisePrompt:"Write a function  safe_int(x)  that returns int(x) on success and None on ValueError. Call  safe_int('250')  and  safe_int('oops')  and end with  [safe_int('250'), safe_int('oops')] ."},{id:"m1-t12",title:{en:"1.12 Imports & the Stdlib You'll Actually Use",th:"1.12 Imports และ Stdlib ที่ใช้จริง"},kind:"python",content:`Three import forms:

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

External essentials: pandas (pd), numpy (np), matplotlib (plt), seaborn (sns).`,exercisePrompt:"Using only the standard library (datetime), compute the number of days between  date(2025, 1, 1)  and  date(2025, 5, 14) . End with that integer."}]},{id:"m2",title:{en:"Collections",th:"คอลเลกชัน"},icon:"Layers",topics:[{id:"m2-t1",title:{en:"2.1 Lists & Slicing",th:"2.1 List และ Slicing"},kind:"python",content:`A list is an ordered, mutable sequence in square brackets.

prices = [250, 480, 1200, 99]

This is structurally a pandas Series — values + positional index starting at 0.

Indexing:
  prices[0]    → 250        (first)
  prices[-1]   → 99         (last)

Slicing  list[start:stop]  — stop is EXCLUSIVE:
  prices[1:3]  → [480, 1200]
  prices[:2]   → [250, 480]
  prices[-2:]  → [1200, 99]

A list of lists is a 2D table — which is exactly what pd.DataFrame() will turn into rows and columns.`,exercisePrompt:"Given  nums = [10, 20, 30, 40, 50]  — write the slice expression that returns [20, 30, 40]. (Define nums first so Run works.)"},{id:"m2-t2",title:{en:"2.2 Dictionaries → DataFrames",th:"2.2 Dictionary → DataFrame"},kind:"concept",content:`A dict is a key→value lookup in curly braces.

customer = {'name': 'Don', 'spend': 1250}
customer['name']            → 'Don'
customer.get('phone','n/a') → 'n/a'  (safe — no crash if key missing)

A LIST OF DICTS is the most common raw-data shape — every API response, every JSON file. It feeds straight into pandas:

orders = [
  {'order_id': 1, 'gmv': 250, 'status': 'paid'},
  {'order_id': 2, 'gmv': 1800, 'status': 'cancelled'},
]
df = pd.DataFrame(orders)

Each dict becomes a row. Each key becomes a column. This is the bridge from raw JSON to a queryable table.`,exercisePrompt:"In your own words: what's the difference between  customer['email']  and  customer.get('email')  when the key 'email' doesn't exist? Which one is safer and why?"},{id:"m2-t3",title:{en:"2.3 List Methods: append, extend, sort, reverse",th:"2.3 List Methods: append, extend, sort, reverse"},kind:"python",content:`prices = [250, 480]

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

Default to sorted() unless you specifically need in-place for performance.`,exercisePrompt:"Given  prices = [250, 480, 1200, 99] , return a NEW list sorted DESCENDING without modifying  prices . End with the sorted-descending list."},{id:"m2-t4",title:{en:"2.4 Tuples vs Lists",th:"2.4 Tuple vs List"},kind:"python",content:`Tuple: ordered, IMMUTABLE.
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

In real work, dataclasses or just dicts often beat namedtuples — but you'll see them in interview code.`,exercisePrompt:"Write a function  minmax(values)  that returns  (min, max)  as a tuple. Call it on  [3, 1, 4, 1, 5, 9, 2, 6]  and end with the result."},{id:"m2-t5",title:{en:"2.5 Sets — Uniqueness Operations",th:"2.5 Set — การจัดการค่า Unique"},kind:"python",content:`A set is an unordered collection of UNIQUE items.

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

Empty set literal is  set()  — \`{}\` is an empty DICT.`,exercisePrompt:"Given  a = [1, 2, 3, 4, 5]  and  b = [4, 5, 6, 7] , return a list of values that appear in BOTH (intersection). Use sets. End with the result."},{id:"m2-t6",title:{en:"2.6 Dict Iteration: keys / values / items",th:"2.6 Dict Iteration: keys / values / items"},kind:"python",content:`customer = {'name': 'Don', 'spend': 1250, 'country': 'TH'}

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

(Assumes values are unique — duplicates silently overwrite.)`,exercisePrompt:"Given  orders_by_status = {'paid': 12, 'cancelled': 3, 'pending': 7} , return the status with the HIGHEST count. End with the status string."},{id:"m2-t7",title:{en:"2.7 Dict Merging",th:"2.7 การรวม Dict"},kind:"python",content:`Three ways, modern-first:

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

For NESTED dicts, the merge is SHALLOW — inner dicts get replaced, not merged. Use a recursive helper if you need deep merge.`,exercisePrompt:"Define  defaults = {'limit': 100, 'offset': 0}  and  overrides = {'limit': 50, 'sort': 'gmv'} . Merge so overrides win, without mutating either. End with the merged dict."},{id:"m2-t8",title:{en:"2.8 Nested Data: lists of dicts, dicts of dicts",th:"2.8 Nested Data: list ของ dict, dict ของ dict"},kind:"python",content:`Real-world data is rarely flat.

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

Going from list-of-dicts to dict-of-dicts is a one-liner with a dict comprehension — a pattern you'll use constantly.`,exercisePrompt:"Define  records = [{'order_id': 1, 'gmv': 250}, {'order_id': 2, 'gmv': 1800}, {'order_id': 3, 'gmv': 99}] . Build a dict keyed by order_id with the full record as value. End with the dict."},{id:"m2-t9",title:{en:"2.9 zip, enumerate, range",th:"2.9 zip, enumerate, range"},kind:"python",content:`The three iteration helpers you use every day.

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

range — covered in 1.6. range is lazy; convert with list() if needed.`,exercisePrompt:"Given  names = ['Don', 'Ali', 'Mei']  and  spends = [1250, 800, 1900] , build a list of dicts of the form  {'name': ..., 'spend': ...}  using zip. End with the list."},{id:"m2-t10",title:{en:"2.10 sorted() with key=",th:"2.10 sorted() กับ key="},kind:"python",content:`sorted(iterable, key=fn, reverse=False)

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

Trick: to reverse on one column only in a multi-key sort, negate numeric values.`,exercisePrompt:"Define  records = [{'id': 1, 'gmv': 250}, {'id': 2, 'gmv': 1800}, {'id': 3, 'gmv': 99}] . Return them sorted by gmv DESCENDING. End with the sorted list."},{id:"m2-t11",title:{en:"2.11 Counter — Counting Frequencies",th:"2.11 Counter — นับความถี่"},kind:"python",content:`collections.Counter — a dict subclass tuned for tallies.

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

Use Counter when you need a frequency table off a plain list and don't want to spin up pandas just to count.`,exercisePrompt:"Given  statuses = ['paid','paid','cancelled','paid','pending','cancelled','paid'] , use Counter to return the 2 most common statuses with their counts (a list of tuples). End with the list."},{id:"m2-t12",title:{en:"2.12 defaultdict — When KeyError Hurts",th:"2.12 defaultdict — เมื่อ KeyError กวนใจ"},kind:"python",content:`A dict that auto-creates missing keys with a default factory. Skips the "is this key here yet?" boilerplate.

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

But defaultdict is the right tool for pure-Python pipelines before pandas is in play.`,exercisePrompt:"Define  orders = [{'country': 'TH', 'gmv': 250}, {'country': 'SG', 'gmv': 480}, {'country': 'TH', 'gmv': 1200}, {'country': 'MY', 'gmv': 99}, {'country': 'TH', 'gmv': 80}] . Use  defaultdict(list)  to group orders by country. End with the resulting dict."}]},{id:"m3",title:{en:"Logic & Comprehensions",th:"ลอจิก & Comprehensions"},icon:"GitBranch",topics:[{id:"m3-t1",title:{en:"3.1 Booleans + The Pandas Operator Trap",th:"3.1 Boolean + กับดัก Operator ของ Pandas"},kind:"python",content:`Comparisons:  >  <  ==  !=  >=  <=
Reminder:  =  assigns,  ==  compares. Mixing them is the #1 beginner bug.

Plain Python combines logic with the words and / or / not.

PANDAS IS DIFFERENT — and this trips up every new analyst:

  &   (and)        |   (or)        ~   (not)

Every condition must be wrapped in parentheses, because & has higher precedence than > :

  df[(df['gmv'] > 1000) & (df['status'] == 'paid')]    ✓ correct
  df[df['gmv'] > 1000 & df['status'] == 'paid']        ✗ silent bug

A seeded  orders  DataFrame is pre-loaded in the sandbox (columns: order_id, customer_id, gmv, status, country, created_at, category) so your filter will actually run.`,exercisePrompt:"Using the pre-loaded  orders  DataFrame: write the filter that returns rows where  gmv > 500  AND  country == 'TH'. End your snippet with the filter expression itself so Run shows the result."},{id:"m3-t2",title:{en:"3.2 List Comprehensions",th:"3.2 List Comprehensions"},kind:"python",content:`The single most important syntax for thinking like pandas. A one-line for-loop that builds a list.

doubled = [x * 2 for x in [1, 2, 3]]          # → [2, 4, 6]

Read as:  "for each x in the list, give me x * 2."

With a filter:
  expensive = [p for p in prices if p > 500]

With a transform AND a filter:
  rounded_high = [round(p) for p in prices if p > 500]

A pre-loaded  sales = [120, 480, 75, 1500, 60, 230, 880]  is in the sandbox.

This is the same mental model as a pandas vectorised operation:

  Python:  [p for p in prices if p > 500]
  Pandas:  prices[prices > 500]`,exercisePrompt:"Write a list comprehension over the pre-loaded  sales  list that returns 10% of each value (s * 0.10) for every s in sales. End with the expression so Run shows the result."},{id:"m3-t3",title:{en:"3.3 Dict Comprehensions",th:"3.3 Dict Comprehensions"},kind:"python",content:`{ key_expr: val_expr for x in iterable [if cond] }

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

Same mental model as list comp, but two expressions separated by  : .`,exercisePrompt:"Define  orders = [{'order_id': 1, 'gmv': 250}, {'order_id': 2, 'gmv': 1800}, {'order_id': 3, 'gmv': 99}] . Build a dict  {order_id: gmv}  using a dict comprehension. End with the dict."},{id:"m3-t4",title:{en:"3.4 Set Comprehensions",th:"3.4 Set Comprehensions"},kind:"python",content:`{ expr for x in iterable [if cond] }

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
  set       # the type itself`,exercisePrompt:"Define  orders = [{'country': 'TH'}, {'country': 'SG'}, {'country': 'TH'}, {'country': 'MY'}, {'country': 'SG'}] . Build a SET of unique countries using a set comp. End with the set."},{id:"m3-t5",title:{en:"3.5 Generator Expressions",th:"3.5 Generator Expressions"},kind:"python",content:`(expr for x in iterable)              # parens — not brackets

Like a list comp but LAZY — yields one value at a time instead of materialising a whole list in memory.

  total = sum(o['gmv'] for o in orders if o['status'] == 'paid')

Why this matters: when iterating over millions of rows, you don't want to build a giant list just to sum it. Generator expressions consume only what they yield.

When functions take a single iterable arg, you can drop the outer parens:
  sum(o['gmv'] for o in orders)              # clean
  any(o['gmv'] > 1000 for o in orders)
  max(orders, key=lambda o: o['gmv'])

Trade-off: you can iterate only ONCE. After that the generator is exhausted — convert to list() if you need to scan twice.`,exercisePrompt:"Define  orders = [{'gmv': 250, 'status': 'paid'}, {'gmv': 1800, 'status': 'cancelled'}, {'gmv': 480, 'status': 'paid'}, {'gmv': 99, 'status': 'pending'}] . Use a generator expression with sum() to total gmv of PAID orders only. End with the sum."},{id:"m3-t6",title:{en:"3.6 Nested Comprehensions",th:"3.6 Nested Comprehensions"},kind:"python",content:`Looping inside looping inside a comp.

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
  [[x * 2 for x in row] for row in matrix]`,exercisePrompt:"Given  matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] , use a nested list comp to flatten it into [1,2,3,4,5,6,7,8,9]. End with the flat list."},{id:"m3-t7",title:{en:"3.7 Conditional Expressions (Ternary)",th:"3.7 Conditional Expressions (Ternary)"},kind:"python",content:`value_if_true  if  condition  else  value_if_false

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
  df['tier'] = np.where(df['gmv'] > 1000, 'high', 'low')`,exercisePrompt:"Given  gmvs = [250, 1200, 99, 1800, 480] , use a list comprehension with a ternary to build a list of 'high' (>1000) or 'low' tags. End with the list."},{id:"m3-t8",title:{en:"3.8 any() and all()",th:"3.8 any() และ all()"},kind:"python",content:`any(iterable)  → True if AT LEAST ONE element is truthy
all(iterable)  → True if EVERY element is truthy (empty iterable → True)

  any(o['status'] == 'paid' for o in orders)
  all(o['gmv'] > 0 for o in orders)

Both SHORT-CIRCUIT — they stop as soon as the answer is known. Pair with a generator expression for cheap "is any of these true?" checks over millions of rows.

Empty-case quirk:
  any([])  → False
  all([])  → True       (vacuous truth — a quirk worth remembering)

In pandas the column-wise equivalents:
  (df['status'] == 'paid').any()
  (df['gmv'] > 0).all()`,exercisePrompt:"Define  orders = [{'status': 'paid'}, {'status': 'paid'}, {'status': 'cancelled'}, {'status': 'pending'}] . Use any() with a generator to check whether ANY order has status == 'cancelled'. End with the boolean."},{id:"m3-t9",title:{en:"3.9 Walrus Operator :=",th:"3.9 Walrus Operator :="},kind:"python",content:`Assign + use in the same expression. Python 3.8+.

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

USE SPARINGLY — overuse makes code hard to read. Rule of thumb: if it makes the intent CLEARER, use it. If it just makes the line shorter, don't.`,exercisePrompt:"Define  orders = [{'status': 'paid'}, {'status': 'paid'}, {'status': 'cancelled'}] . Use the walrus operator inside an if to count paid orders into  n  and print  f'{n} paid' . End with the print statement's effect (just call it)."},{id:"m3-t10",title:{en:"3.10 Short-Circuit in Pandas Masks",th:"3.10 Short-Circuit ใน Pandas Masks"},kind:"python",content:`THIS IS A CLASSIC EXAM TRAP.

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
  series:  df[(df['gmv'] > 1000) & (df['status'] == 'paid')]`,exercisePrompt:"In one or two sentences: why does pandas use  &  instead of  and  for combining row-level conditions? Hint — think about element-wise vs scalar evaluation."},{id:"m3-t11",title:{en:"3.11 np.where & np.select",th:"3.11 np.where และ np.select"},kind:"python",content:`Vectorised conditionals — the fastest path to "compute a new column from rules."

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

Avoid  .apply(lambda)  for these — 10× slower than np.where on numeric columns.`,exercisePrompt:"Using the pre-loaded  orders  DataFrame, add a column  tier  that is 'large' when  gmv > 1000  else 'small'. Use np.where. End with  orders[['gmv','tier']].head() ."},{id:"m3-t12",title:{en:"3.12 Dict-as-Mapper + .map()",th:"3.12 Dict-as-Mapper + .map()"},kind:"python",content:`The cleanest way to translate categorical values.

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

This pattern beats nested np.where chains when you have more than 3-4 categories.`,exercisePrompt:"Using the pre-loaded  orders  DataFrame, define a dict  {'paid': 1, 'cancelled': 0, 'pending': 0}  and use  .map  to make a new column  is_paid . End with  orders[['status', 'is_paid']].head() ."}]},{id:"m4",title:{en:"Pandas Core",th:"Pandas หลัก"},icon:"BarChart3",topics:[{id:"m4-t1",title:{en:"4.1 Series, DataFrames & First Inspection",th:"4.1 Series, DataFrame และการตรวจสอบเบื้องต้น"},kind:"python",content:`A Series is one labelled column. A DataFrame is many Series glued together — a table.

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

Why pandas wins: every method works on the whole column at once. Never write a for-loop over rows.`,exercisePrompt:"Build a DataFrame called bookings with two columns:  hotel_id = [101, 102, 103]  and  nights = [3, 1, 7].  Then end your snippet with  bookings.shape  so Run shows it."},{id:"m4-t2",title:{en:"4.2 Selecting & Boolean Masking",th:"4.2 การเลือกและ Boolean Masking"},kind:"python",content:`Selecting columns:
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

A pre-loaded  orders  DataFrame is in the sandbox (TH/SG/MY · paid/cancelled/pending).`,exercisePrompt:"Filter the pre-loaded  orders  DataFrame to rows where  country == 'TH'  AND  gmv > 500. End your snippet with the filter expression so Run shows it."},{id:"m4-t3",title:{en:"4.3 GroupBy & Aggregation",th:"4.3 GroupBy และ Aggregation"},kind:"python",content:`The single most-tested pandas concept. Pattern:  split → apply → combine.

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

Pre-loaded  orders  in the sandbox.`,exercisePrompt:"Using the pre-loaded  orders  DataFrame: get the TOTAL gmv per customer, counting ONLY rows where status == 'paid'. End with the result expression so Run shows it."},{id:"m4-t4",title:{en:"4.4 Merge & Concat",th:"4.4 Merge และ Concat"},kind:"python",content:`Combining tables in pandas. Same mental model as SQL JOINs.

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

Use concat when schemas line up. Use merge when combining different tables on a key.`,exercisePrompt:"Using the pre-loaded  orders  and  customers  DataFrames: LEFT MERGE them on customer_id (use suffixes ('_ord', '_cust') since both have a 'country' column), then end with  .head()  on the merged frame so Run shows the first 5 rows."},{id:"m4-t5",title:{en:"4.5 Reshape — pivot, melt, stack",th:"4.5 Reshape — pivot, melt, stack"},kind:"python",content:`Wide vs long. Every assessment tests one direction.

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

Default to long form for analysis pipelines. Wide is for display.`,exercisePrompt:"Pivot the pre-loaded  orders  DataFrame into a country × status matrix of TOTAL gmv. Use  pivot_table  with index='country', columns='status', values='gmv', aggfunc='sum', fill_value=0. End with the expression so Run shows it."},{id:"m4-t6",title:{en:"4.6 Time Series — dates & resampling",th:"4.6 Time Series — วันที่และ resampling"},kind:"python",content:`Dates from a CSV arrive as strings. Convert them or nothing time-related works.

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

Time series sits at the heart of cohort retention, run-rate forecasts, and seasonal decomposition — all of which Shopee/Lazada test.`,exercisePrompt:"Convert  orders['created_at']  to datetime, then return the count of PAID orders per month (use  .dt.to_period('M')  or  resample('ME')). End with the result expression so Run shows it."},{id:"m4-t7",title:{en:"4.7 Missing Data: dropna, fillna, isna",th:"4.7 Missing Data: dropna, fillna, isna"},kind:"python",content:`Missing values arrive as NaN (for numeric) or None / NaT in pandas. Both register via .isna() / .notna().

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

A SENSIBLE PIPELINE: detect missing first → decide drop or fill per column → never blanket-impute without thinking. Imputed values affect every downstream statistic.`,exercisePrompt:"Using the pre-loaded  orders  DataFrame, return a Series of null counts per column. Use  .isna().sum() . End with that expression."},{id:"m4-t8",title:{en:"4.8 apply vs map vs transform",th:"4.8 apply vs map vs transform"},kind:"python",content:`Three methods that LOOK similar but behave differently.

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

PERF order: vectorised ops >> .map / .apply on Series > .apply on DataFrame rows. Avoid  axis=1  apply where you can — it's row-by-row Python.`,exercisePrompt:"Using the pre-loaded  orders , add a column  gmv_vs_country_mean  equal to  gmv  minus the country's mean  gmv  via  groupby('country')['gmv'].transform('mean') . End with  orders[['country','gmv','gmv_vs_country_mean']].head() ."},{id:"m4-t9",title:{en:"4.9 Sorting & Ranking",th:"4.9 Sorting และ Ranking"},kind:"python",content:`Sort:
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
  df[mask]`,exercisePrompt:"Using the pre-loaded  orders , return the rows where each order is in its country's TOP 3 by gmv. Use  groupby('country')['gmv'].rank(method='dense', ascending=False) <= 3 . End with that filtered frame's  .head(10) ."},{id:"m4-t10",title:{en:"4.10 String Columns — .str Deep Dive",th:"4.10 String Columns — .str เจาะลึก"},kind:"python",content:`The .str accessor vectorises every string method across a column.

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

For pandas 2.0+, consider  pd.StringDtype()  for marginally better perf + clearer null handling.`,exercisePrompt:"Using the pre-loaded  orders , count how many  category  values start with 'b' (case-insensitive). Use  orders['category'].str.lower().str.startswith('b').sum() . End with the count."},{id:"m4-t11",title:{en:"4.11 Categorical dtype",th:"4.11 Categorical dtype"},kind:"python",content:`A Categorical column stores values as integer codes against a category list — saves memory and enables ORDERING for ordinal data.

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

GroupBy on categoricals defaults to including unused categories — set  observed=True  to suppress.`,exercisePrompt:"Using the pre-loaded  orders , cast the  status  column to a Categorical and end with  orders['status'].astype('category').cat.categories  so Run displays the category index."},{id:"m4-t12",title:{en:"4.12 Memory & dtype Optimization",th:"4.12 ปรับ Memory และ dtype"},kind:"python",content:`For interview-grade analysis, df.info() reveals the cheap wins.

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

A clean dtype layout is THE THING that turns a sluggish notebook into one that runs in seconds.`,exercisePrompt:"Using the pre-loaded  orders , return the memory usage PER COLUMN with deep counting. Use  orders.memory_usage(deep=True) . End with that Series."}]},{id:"m5",title:{en:"SQL Essentials",th:"SQL พื้นฐาน"},icon:"Database",topics:[{id:"m5-t1",title:{en:"5.1 SELECT, WHERE, ORDER BY",th:"5.1 SELECT, WHERE, ORDER BY"},kind:"sql",content:`SQL is READ top-to-bottom but EXECUTED in this order:

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

DESC and ASC apply per column:  ORDER BY country ASC, gmv DESC.`,exercisePrompt:"Write a SQL query that returns the top 5 bookings — ordered by nights descending — from a table 'bookings' where country = 'TH'. Show only the booking_id and nights columns."},{id:"m5-t2",title:{en:"5.2 GROUP BY & HAVING",th:"5.2 GROUP BY และ HAVING"},kind:"sql",content:`SQL GROUP BY = pandas .groupby(). Same mental model, different syntax.

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
   COUNT(DISTINCT customer_id)  counts unique customers — used constantly.`,exercisePrompt:"Write SQL against an orders(customer_id, gmv, status) table that returns each customer's order count and average gmv, but only shows customers with MORE THAN 5 orders. Sort by avg gmv descending."},{id:"m5-t3",title:{en:"5.3 JOINs & Window Functions",th:"5.3 JOIN และ Window Functions"},kind:"sql",content:`JOINs combine tables on a key:

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
- Top-N per group →  filter on ROW_NUMBER() <= N in an outer query`,exercisePrompt:"Using the seeded  orders  table, write a SQL query that returns each customer's FIRST order (earliest created_at). Show  customer_id, order_id, gmv. Use  ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY created_at)  in a subquery or CTE and filter to rank = 1."},{id:"m5-t4",title:{en:"5.4 CTEs & Subqueries",th:"5.4 CTE และ Subquery"},kind:"sql",content:`A CTE — Common Table Expression — is a named subquery defined with WITH. It makes complex queries readable and is Alooba's favourite pattern.

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

Rule of thumb: when a query has more than one aggregation step, reach for a CTE. The result is the same; the readability isn't.`,exercisePrompt:"Using a CTE, find the top 3 customers by total PAID gmv. Return  customer_id, total_gmv, country  (joining from the  customers  table). Sort by total_gmv descending and limit to 3."},{id:"m5-t5",title:{en:"5.5 Self-Joins",th:"5.5 Self-Join"},kind:"sql",content:`A self-join joins a table to itself — used for hierarchies and pair-finding.

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

Self-joins are slow on big tables — every match scans both sides. If the question is really "find duplicates", a window function (COUNT(*) OVER (PARTITION BY ...)) is usually cheaper.`,exercisePrompt:"Find pairs of bookings at the SAME hotel_id on the SAME created_at, returning  a.booking_id, b.booking_id, a.hotel_id, a.created_at. Use the  a.booking_id < b.booking_id  trick so each pair appears once. (May return zero rows — that's a valid result if no collisions.)"},{id:"m5-t6",title:{en:"5.6 UNION, INTERSECT, EXCEPT",th:"5.6 UNION, INTERSECT, EXCEPT"},kind:"sql",content:`SET OPERATORS combine the rowsets of two queries. Both sides must have the SAME number of columns with COMPATIBLE types.

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

Most analysts default to UNION when UNION ALL would be cheaper. Pick deliberately.`,exercisePrompt:"Using  customers  and  orders , return the customer_ids that exist in  customers  but have NO orders. Use EXCEPT."},{id:"m5-t7",title:{en:"5.7 CASE WHEN — Branching in SELECT",th:"5.7 CASE WHEN — แตก Branch ใน SELECT"},kind:"sql",content:`The SQL way to compute a column from rules.

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

That's "show paid vs cancelled counts side by side" — one query, one scan. Easier on the database than UNIONing two GROUP BYs.`,exercisePrompt:"Write a SQL query that returns each country's TOTAL order count, PAID order count, and PAID GMV in one row. Use CASE WHEN inside COUNT and SUM. Group by country."},{id:"m5-t8",title:{en:"5.8 COALESCE & NULLIF",th:"5.8 COALESCE และ NULLIF"},kind:"sql",content:`Null handling without verbose CASE WHEN.

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

REMEMBER — NULL is not a value, it's "unknown."  NULL = NULL  is NULL, not TRUE. Use  IS NULL  /  IS NOT NULL  for boolean tests.`,exercisePrompt:"Write a SQL query that returns AOV (avg gmv among PAID orders) per country, using  SUM(gmv) / NULLIF(COUNT(*), 0)  to guard against division by zero. Group by country."},{id:"m5-t9",title:{en:"5.9 Date Functions",th:"5.9 ฟังก์ชันเกี่ยวกับวันที่"},kind:"sql",content:`Every dialect has slightly different names. The sandbox is SQLite — here's its flavour, plus the standard / Postgres equivalents you'll see at Shopee/Lazada/Agoda.

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

For interviews: know the standard SQL (Postgres style) + your target's dialect.`,exercisePrompt:"Using the sandbox  orders , return the count of PAID orders per MONTH using  strftime('%Y-%m', created_at) . Group by that month bucket, sort ascending."},{id:"m5-t10",title:{en:"5.10 LAG / LEAD",th:"5.10 LAG / LEAD"},kind:"sql",content:`Window functions that peek at the PREVIOUS or NEXT row within a partition.

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

ALOOBA bread and butter. Memorise the syntax.`,exercisePrompt:"Write a SQL query that for each customer's orders (ordered by created_at) shows  customer_id, order_id, gmv, prev_gmv  where  prev_gmv  is the previous order's gmv (NULL on first). Limit to 20 rows."},{id:"m5-t11",title:{en:"5.11 NTILE & Rank Variants",th:"5.11 NTILE และ Rank แบบต่างๆ"},kind:"sql",content:`Three rank functions that look similar — pick deliberately:

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

Heads-up: NTILE buckets may have UNEVEN sizes when total_rows isn't divisible by n.`,exercisePrompt:"Write a SQL query that assigns each order to a quartile (1–4) by gmv DESC using NTILE(4). Return order_id, gmv, quartile. Limit to 20 rows."},{id:"m5-t12",title:{en:"5.12 Query Plans & EXPLAIN",th:"5.12 Query Plan และ EXPLAIN"},kind:"sql",content:`When a query is slow, the database can tell you why.

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

That's the senior-analyst answer.`,exercisePrompt:"In 2–3 sentences, explain why adding an INDEX on  orders.customer_id  could speed up  SELECT customer_id, COUNT(*) FROM orders GROUP BY customer_id . Think about scan vs index lookup, and whether the grouping needs all rows."}]},{id:"m6",title:{en:"Business & Stats",th:"ธุรกิจ & สถิติ"},icon:"Briefcase",topics:[{id:"m6-t1",title:{en:"6.1 E-commerce & Travel Metrics",th:"6.1 E-commerce และ Travel Metrics"},kind:"concept",content:`The metrics interviewers at Shopee, Lazada and Agoda actually test:

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

When GMV drops, check each factor in that equation first.`,exercisePrompt:"Last week GMV dropped 15% on a Shopee category page. Traffic was flat week-over-week. Which two metrics from the GMV decomposition would you investigate first, and why? One or two sentences."},{id:"m6-t2",title:{en:"6.2 A/B Testing Foundations",th:"6.2 พื้นฐาน A/B Testing"},kind:"concept",content:`Setup — split users randomly into A (control) and B (variant). Run for a fixed period. Compare a primary metric.

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
- Underpowered test — calling a flat result a "no difference" when you didn't have enough samples to detect one`,exercisePrompt:"Variant B shows 3.0% conversion vs control at 2.8%, with n = 2,000 per variant. Would you ship B? Give your reasoning in 2–3 sentences — think about effect size, sample size, and what could be wrong here."},{id:"m6-t3",title:{en:"6.3 Cohort Retention",th:"6.3 Cohort Retention"},kind:"concept",content:`A retention cohort answers: "of the users who signed up in month X, how many came back in month X+1, X+2, …"

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

Cohort retention is THE long-term health metric — leaders care more about month-6 retention than week-1 conversion.`,exercisePrompt:"Walk through, in plain English: what columns and aggregations would you need to build a monthly cohort retention table from  customers  and  orders? Mention the cohort definition, the active-month calculation, and the final shape (rows × columns × cell value). 3–5 sentences."},{id:"m6-t4",title:{en:"6.4 Pricing & Elasticity",th:"6.4 Pricing และ Elasticity"},kind:"concept",content:`Price elasticity of demand =  (% change in quantity)  /  (% change in price).

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

Lazada/Shopee ask price-cut reasoning. Agoda asks hotel ADR optimisation.`,exercisePrompt:"A hotel raises ADR (average daily rate) by 10% and bookings drop 8% the following month. What is the (absolute) price elasticity here, is demand elastic or inelastic, and would you recommend they hold the higher price? 2–3 sentences."},{id:"m6-t5",title:{en:"6.5 Funnel Analysis",th:"6.5 Funnel Analysis"},kind:"concept",content:`A funnel splits a single user journey into stages and measures drop-off at each step.

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
  SELECT SUM(viewed), SUM(carted), SUM(checked), SUM(paid) FROM steps;`,exercisePrompt:"A Shopee funnel last week: 10,000 visits → 4,000 product views → 800 carts → 600 checkouts → 400 paid. Where is the biggest drop-off in ABSOLUTE users, and where is the worst step-conversion in PERCENTAGE terms? 2–3 sentences."},{id:"m6-t6",title:{en:"6.6 P-values — Intuition without the Maths",th:"6.6 P-value — เข้าใจโดยไม่ต้องคำนวณ"},kind:"concept",content:`The number you'll be asked about in every A/B-test interview.

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

Senior take: "p-value is one input. I also want effect size, confidence interval, and a sanity check on sample ratio."`,exercisePrompt:"A test shows variant B with a 7% relative lift, p = 0.02, but only 500 users per arm. In 2–3 sentences, would you ship and why or why not? Consider what a p-value addresses vs what it ignores."},{id:"m6-t7",title:{en:"6.7 Confidence Intervals",th:"6.7 Confidence Interval"},kind:"concept",content:`The interval gives you the EFFECT SIZE picture a p-value alone doesn't.

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

INTERVAL > P-VALUE in interviews. P-value is binary (yes/no); CI shows MAGNITUDE.`,exercisePrompt:"A test reports a +1.2% lift with 95% CI of [-0.3%, +2.7%], p = 0.08. The PM wants to ship. In 2–3 sentences, what do you recommend and why?"},{id:"m6-t8",title:{en:"6.8 Power & Sample Size",th:"6.8 Power และ Sample Size"},kind:"concept",content:`Before you run a test, decide how big it needs to be.

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

UNDERPOWERED TESTS waste calendar time without producing decisions. Calling a flat result "no difference" when you only had power 0.30 is the canonical analyst mistake.`,exercisePrompt:"Your team wants to detect a 5% RELATIVE lift on a 3% baseline conversion (so 3.0% → 3.15%). Are 5,000 users per variant enough? In 2–3 sentences, what's your answer and what would you tell the PM?"},{id:"m6-t9",title:{en:"6.9 Sample Ratio Mismatch (SRM)",th:"6.9 Sample Ratio Mismatch (SRM)"},kind:"concept",content:`You ran a 50/50 A/B test. You expected 50,000 users per variant. You got 47,212 vs 52,788.

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

This is the #1 thing that turns a "winning" experiment into an embarrassing rollback.`,exercisePrompt:"An A/B test with 50/50 design shows a 48% / 52% split with 100,000 total users. Should you trust the conversion comparison? In 2–3 sentences, justify your answer."},{id:"m6-t10",title:{en:"6.10 Cannibalization vs Incrementality",th:"6.10 Cannibalization vs Incrementality"},kind:"concept",content:`You launched a new product. It made $1M. Did you make $1M MORE, or did you shift $1M from your existing products?

That's the cannibalization question.

INCREMENTAL revenue   = revenue that wouldn't have happened otherwise.
CANNIBALIZED revenue  = revenue that shifted between channels/products with no net change.

HOW YOU MEASURE IT:
- A/B HOLDOUT — keep a control group from seeing the new feature. Compare TOTAL spend, not feature-specific spend.
- PRE/POST with CONTROL MARKET — compare cities or segments that did vs didn't get the rollout.
- CAUSAL MODELING — diff-in-diff, synthetic control. Used when randomisation isn't possible.

A LAZADA / SHOPEE INTERVIEW QUESTION SHAPE: "We launched a flash-sale feature. GMV in the flash-sale category went up 30%. What do you want to know before celebrating?"

Right answer: incrementality. Maybe regular-price GMV in the same category dropped 25%. Net lift is +5%, not +30%.

This separates senior analysts from junior ones.`,exercisePrompt:'Lazada launched a "flash sale" feature. Category GMV rose 30% in flash-sale weeks. In 2–3 sentences, what additional data do you need to know if this was real growth or just cannibalization of existing demand?'},{id:"m6-t11",title:{en:"6.11 Forecasting Methods at a Glance",th:"6.11 ภาพรวมวิธี Forecasting"},kind:"concept",content:`You don't need to be a forecasting expert. You need to RECOGNISE the methods.

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

For Shopee/Lazada/Agoda — DEMAND FORECASTING usually means Prophet or seasonal-naive baselines, not deep learning.`,exercisePrompt:"You're forecasting hotel bookings 30 days out for Agoda. Bookings have strong weekly seasonality (weekends > weekdays) and rise around holidays. In 2–3 sentences, which method would you start with and why?"},{id:"m6-t12",title:{en:"6.12 Diagnosing a Metric Drop — Case Study",th:"6.12 วินิจฉัย Metric ตก — Case Study"},kind:"concept",content:`THE INTERVIEW STAPLE. "GMV dropped 20% week-over-week. What do you do?"

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

SAY THIS FRAMEWORK OUT LOUD in the interview. Don't just "I'd look at the data" — name the steps.`,exercisePrompt:"GMV dropped 20% week-over-week. Traffic was flat. AOV was flat. In 3–4 sentences, what's your hypothesis and which specific data would you pull next?"}]}],ep="claude-haiku-4-5-20251001",aa="pds_prep_api_key";function Jo(){try{return localStorage.getItem(aa)||""}catch{return""}}function tp(d){try{localStorage.setItem(aa,d)}catch{}}function np(){try{localStorage.removeItem(aa)}catch{}}async function la(d){const h=Jo();if(!h)throw new Error('No API key configured. Click "Set API key" in the header and paste your Anthropic key.');const l=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":h,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:ep,max_tokens:1e3,messages:[{role:"user",content:d}]})});if(!l.ok){const v=await l.text().catch(()=>"");throw new Error(`Grader API ${l.status}: ${v.slice(0,200)}`)}return(await l.json()).content.filter(v=>v.type==="text").map(v=>v.text).join(`
`)}function Ur(d,h=1500){return d?d.length>h?d.slice(0,h)+`
…(truncated, ${d.length-h} more chars)`:d:""}function rp(d,h){if(!d)return"";const l=["EXECUTION OUTPUT (what their code actually printed / returned):"];if(h==="sql")if(d.error)l.push(`error:
${Ur(d.error)}`);else{const x=d.results||[];x.length===0?l.push("(query ran but returned no rows)"):x.forEach((v,T)=>{const j=(v.columns||[]).join(" | "),F=(v.values||[]).slice(0,20).map($=>$.join(" | ")),U=(v.values||[]).length>20?`
…(${(v.values||[]).length-20} more rows)`:"";l.push(`statement ${T+1}:
${j}
${F.join(`
`)}${U}`)})}else l.push(`stdout:
${Ur(d.stdout)||"(empty)"}`),l.push(`stderr:
${Ur(d.stderr)||"(empty)"}`),l.push(`last-expression result:
${Ur(d.result)||"(none)"}`),d.error&&l.push(`traceback:
${Ur(d.error)}`);return l.join(`
`)}async function Sd({topic:d,submission:h,runOutput:l}){const x=rp(l,d.kind),v=`You are grading a beginner Python / Pandas / SQL exercise. The student is preparing for data analyst assessments at Shopee, Lazada, and Agoda (Alooba platform).

LESSON CONTEXT:
${d.content}

EXERCISE:
${d.exercisePrompt}

STUDENT SUBMISSION:
${h}
${x?`
`+x+`
`:""}
Grade leniently on syntax (missing semicolons, minor typos, equivalent variable names are fine). Grade strictly on the CONCEPT — did they demonstrate the idea the lesson taught? For conceptual questions, look for the right reasoning, not specific wording.${x?" Treat the execution output as evidence: if it shows a traceback the submission cannot pass; if the result is implausible for the question, lean towards needs_work.":""}

Return ONLY valid JSON, no markdown fences, in exactly this shape:
{"status": "passed" or "needs_work", "feedback": "1-2 sentences. Encouraging. Specific. If they missed something, name the concept (not the keyword)."}`,T=(await la(v)).replace(/```json|```/g,"").trim(),j=JSON.parse(T);if(j.status!=="passed"&&j.status!=="needs_work")throw new Error("Unexpected grader response shape");return j}async function op({questions:d,grades:h}){const l=d.map((j,F)=>{const U=h[F]||{status:"unknown",feedback:""};return`Q${F+1} (${j.kind} · ${j.title}): ${U.status} — ${U.feedback}`}).join(`
`),x=h.filter(j=>j.status==="passed").length,v=h.length,T=`A student just completed a 6-question timed mock assessment preparing for data analyst roles at Shopee, Lazada, and Agoda (Alooba). Results:

${l}

Score: ${x}/${v} passed.

In 3-4 sentences, give an HONEST, useful overall takeaway:
- What patterns are strongest / weakest across their answers?
- 1-2 specific concept areas they should review before the real assessment.
- Encouraging but blunt. Don't sugar-coat a low score; don't oversell a high one.

Return ONLY the takeaway prose, no JSON, no fences, no preamble.`;return(await la(T)).trim()}async function sp({topic:d}){const h=`You are giving a hint for a beginner exercise. Do NOT give the answer. Nudge the student.

EXERCISE: ${d.exercisePrompt}

Give one sentence that points them toward the right concept or syntax pattern without solving it.`;return(await la(h)).trim()}const hd={"m1-t1":`Variable หมายถึงตัวแปรที่ชี้ไปยังค่าใดค่าหนึ่ง ใน Python ไม่ต้องประกาศชนิด ไม่ต้องเขียน type Python คิดเองได้

price = 250
name  = 'Don'

5 ชนิดข้อมูลหลักที่ครอบคลุมงานจริง 95%:

- int    — 5, 1800, -3
- float  — 3.14, 0.0
- str    — 'paid'
- bool   — True / False
- None   — "ไม่มีค่า" — ค่าที่หายไปมักจะเริ่มต้นเป็น None

ตรวจชนิดข้อมูล:  type(price)  →  <class 'int'>

เรื่อง Coercion สำคัญตอนอ่าน CSV ที่ข้อมูลสกปรก สตริงที่หน้าตาเหมือนตัวเลขแต่บวกกันไม่ได้:

'250' + '100'  →  '250100'        (ต่อสตริงกัน ไม่ใช่บวกเลข)
int('250') + 100  →  350           (พอ cast เป็น int ก็บวกได้)
float('3.14')  →  3.14
str(250)       →  '250'

ใน pandas เรื่องนี้กลายเป็น  df['gmv'].astype(int)  หรือ  pd.to_numeric(df['gmv'])`,"m1-t2":`F-strings เป็นวิธีสร้างสตริงแบบสมัยใหม่ใส่ตัว f นำหน้าเครื่องหมายคำพูด แล้วใส่ตัวแปรใน { }:

city = 'Bangkok'
print(f'Welcome to {city.upper()}')   # → Welcome to BANGKOK

5 string methods ที่ pandas ใช้กับคอลัมน์ทั้งคอลัมน์ผ่าน .str:

.strip()             ตัด whitespace หัวท้าย
.lower() / .upper()  เปลี่ยน case
.replace('a','b')    แทนที่
.split(',')          → list
.startswith('TH')    → bool

ใน pandas:  df['country'].str.lower().str.strip()
นี่คือการทำงานแบบ vectorised ทั้งคอลัมน์ ไม่ต้อง loop`,"m1-t3":`Operators ที่ใช้:  +  -  *  /  //  %  **

  /    หารธรรมดา        7 / 2  → 3.5
  //   floor division   7 // 2 → 3
  %    modulo           7 % 2  → 1
  **   ยกกำลัง           2 ** 8 → 256

divmod(a, b) → (a // b, a % b) — เรียกครั้งเดียวได้สองค่า มีประโยชน์ตอนแปลงหน่วย

round(x, n) — ใช้ banker's rounding (round-half-to-even) round(2.5) → 2, round(3.5) → 4 คนใหม่งงเสมอ ถ้าอยากปัดเลขแบบปกติให้ใช้ math.floor / math.ceil ตามต้องการ

ลำดับการคำนวณตามคณิตศาสตร์:  **  มาก่อน  *  /  มาก่อน  +  - ถ้าไม่แน่ใจให้ใส่วงเล็บ

Integer ใน Python เก็บความแม่นยำได้ไม่จำกัด (ไม่มี overflow) ส่วน Float เป็น IEEE 754 — 0.1 + 0.2 ไม่เท่ากับ 0.3 จะแก้กันใน 1.4`,"m1-t4":`Operators เปรียบเทียบ:  ==  !=  <  >  <=  >=

==  vs  is :
  ==   เทียบ "ค่า"          'abc' == 'abc'  → True
  is   เทียบ "ตัวเดียวกันในหน่วยความจำ" ใช้กับ None, True, False เท่านั้น

  x = [1,2,3]; y = [1,2,3]
  x == y  → True
  x is y  → False   (คนละ object กัน)

กับดัก Floating-point:
  0.1 + 0.2 == 0.3   → False    (จริงๆ คือ 0.30000000000000004)
  import math
  math.isclose(0.1 + 0.2, 0.3)   → True

Chained comparison อ่านเป็นธรรมชาติ:
  if 0 < score < 100:    # แทนที่จะเขียน  if score > 0 and score < 100:

ใน pandas อย่าใช้ == เปรียบเทียบ Series กับ None ให้ใช้ .isna() / .notna() แทน เพราะ NaN == NaN จะได้ False เสมอ`,"m1-t5":`Branch ตามเงื่อนไข Python ใช้ indentation ไม่มีปีกกา

  if gmv > 1000:
      tier = 'large'
  elif gmv > 100:
      tier = 'medium'
  else:
      tier = 'small'

เงื่อนไขรับค่า Truthy / Falsy อะไรก็ได้ (อธิบายใน 1.9)

PRO TIP — ใช้ EARLY RETURN ดีกว่าซ้อน if ลึกๆ:

  # อ่านยาก
  def grade(x):
      if x is not None:
          if x > 0:
              if x < 100:
                  return 'ok'
              return 'too big'
          return 'negative'
      return None

  # อ่านง่ายขึ้นเยอะ
  def grade(x):
      if x is None: return None
      if x <= 0:    return 'negative'
      if x >= 100:  return 'too big'
      return 'ok'

ถ้าซ้อนเกิน 3 ชั้นเมื่อไหร่ ให้รีแฟกเตอร์`,"m1-t6":`for loop ใน Python วน iterate ผ่าน sequence — เป็นแบบ foreach ไม่ใช่ counter loop

  for status in ['paid', 'cancelled', 'pending']:
      print(status)

range(stop) / range(start, stop) / range(start, stop, step):

  for i in range(5):          # 0, 1, 2, 3, 4
  for i in range(1, 6):       # 1, 2, 3, 4, 5
  for i in range(0, 10, 2):   # 0, 2, 4, 6, 8

วน dict จะได้ key ออกมา (ใช้ .items() ถ้าอยากได้ทั้ง key + value):

  for k in customer:               # k = 'name', 'spend', ...
  for k, v in customer.items():

ทำไมถึงจะเลิกใช้ for loop ในเร็วๆ นี้: ใน pandas การวนทีละแถวช้ากว่า vectorised op 100 เท่า เราเรียนรู้ loop เพื่ออ่าน code ได้ ไม่ใช่เพื่อใช้เขียน data pipeline`,"m1-t7":`while loop รันจนกว่าเงื่อนไขเป็น False ใช้ตอนที่ไม่รู้จำนวนรอบล่วงหน้า

  total = 0
  i = 0
  while total < 1000 and i < len(prices):
      total += prices[i]
      i += 1

break ออกจาก loop ทันที continue ข้ามไปรอบถัดไป

  for p in prices:
      if p < 50:        continue       # ข้ามค่าน้อยไป
      if p > 5000:      break          # หยุดถ้าเจอ outlier
      process(p)

กับดัก INFINITE LOOP — ถ้าลืมเลื่อนตัวแปร loop:

  while True:
      do_thing()        # ไม่มีทางออกถ้าไม่มี break ข้างใน

ใช้ while เท่าที่จำเป็น 90% ของกรณี for + range เคลียร์กว่า`,"m1-t8":`Function คือบล็อกของ code ที่มีชื่อ รับ input ส่ง output ออกมา

  def aov(gmv_list):
      if not gmv_list:
          return 0
      return sum(gmv_list) / len(gmv_list)

  aov([250, 480, 1200])   # → 643.33

Default arguments:
  def greet(name, greeting='Hello'):
      return f'{greeting}, {name}!'

กับดัก MUTABLE-DEFAULT — โดนทุกคนสักครั้ง:

  def add(item, bag=[]):       # bag ถูก SHARE ทุก call!
      bag.append(item)
      return bag

  add(1)  # [1]
  add(2)  # [1, 2]   ← เซอร์ไพรส์

แก้: ใช้ None เป็น sentinel

  def add(item, bag=None):
      if bag is None: bag = []
      bag.append(item)
      return bag`,"m1-t9":`None คือ "ไม่มีค่า" ของ Python คนละอย่างกับ False, 0, ''

6 ค่าที่เป็น Falsy ต้องจำให้ได้ ค่าพวกนี้จะถือว่า False ใน boolean context:

  False
  None
  0     (และ 0.0)
  ''    (สตริงว่าง)
  []    (list ว่าง)
  {}    (dict / set ว่าง)

นอกจากนั้นทั้งหมดเป็น Truthy

วิธี check null แบบมาตรฐาน:

  if x is None:          # เทียบ None ด้วย 'is' เสมอ ไม่ใช่ '=='
  if not items:          # ครอบคลุมทั้ง list ว่างและ None
  result = x if x is not None else fallback

ใน pandas เส้นแบ่ง None กับ NaN เบลอ ทั้งคู่ขึ้นเป็น "หาย" ใน .isna() อย่าเทียบ None ด้วย == บน column ให้ใช้ method แทน`,"m1-t10":`เรื่องนี้คือสิ่งที่คนใหม่งงที่สุด

print(x) แสดงผลที่ console — ไว้ดูเฉยๆ
return x ส่งค่ากลับให้ตัวที่เรียก function — ไว้ใช้ต่อในโปรแกรม

  def add(a, b):
      print(a + b)        # print แต่ return เป็น None!

  result = add(2, 3)      # print 5 ออกมา
  result + 1              # TypeError: unsupported operand type(s)

  def add(a, b):
      return a + b        # คราวนี้ RETURN จริง

  result = add(2, 3)
  result + 1              # → 6

กฎ: ใน function ใช้ return เพื่อส่งค่า ใช้ print แค่ตอน debug

ใน notebook (Jupyter, sandbox นี้) บรรทัดสุดท้ายถ้าเป็น expression จะแสดงผลให้อัตโนมัติ ไม่ต้อง print`,"m1-t11":`code ที่จับข้อมูลจริงจะเจอ exception แน่ๆ: CSV เพี้ยน, key ไม่มี, Unicode พิลึก ต้องจัดการอย่างตั้งใจ ไม่ใช่ปล่อยให้ crash

  try:
      n = int(raw_value)
  except ValueError:
      n = None        # default ถ้า parse ไม่ได้

จับ exception แบบเจาะจง อย่าใช้  except:  เปล่าๆ (มันจะกิน KeyboardInterrupt และ bug ที่เราต้องเห็น)

ที่พบบ่อยในงานข้อมูล:
  ValueError       — parse ไม่ผ่าน (int(), float())
  KeyError         — dict ไม่มี key
  IndexError       — list หา index ไม่เจอ
  TypeError        — ส่ง type ผิด
  ZeroDivisionError — หารด้วย 0

finally — รันแน่ๆ ไม่ว่าจะ error หรือไม่ (ใช้ cleanup):
  try:
      f = open(path)
      ...
  finally:
      f.close()

ใน pandas เราแทบไม่ใช้ try/except — ใช้ .fillna() หรือ pd.to_numeric(errors='coerce') แทน รู้ทั้งสองวิธีเอาไว้ใช้เลือก`,"m1-t12":`รูปแบบ import 3 แบบ:

  import math               # ทั้งโมดูล — เรียก math.sqrt(9)
  from datetime import date # นำชื่อมาเฉพาะ — เรียก date.today()
  import numpy as np        # ตั้ง alias — np.array(...)

อย่าใช้  from x import *  — มันโผล่ชื่อมั่วใน namespace ทำให้ tooling พัง

โมดูลใน standard library ที่งาน analyst ใช้บ่อย:

  math        — sqrt, ceil, floor, isclose, log, exp
  datetime    — date, datetime, timedelta
  json        — loads (parse), dumps (serialise)
  collections — Counter, defaultdict, OrderedDict
  itertools   — chain, combinations, groupby
  csv         — reader, writer (พอใช้ pandas ก็ไม่ค่อยใช้)
  statistics  — mean, median, stdev (sample เล็กๆ)
  re          — regex — ใช้พอประมาณ

External essentials: pandas (pd), numpy (np), matplotlib (plt), seaborn (sns)`,"m2-t1":`List คือลำดับที่แก้ไขได้ ใส่ใน []

prices = [250, 480, 1200, 99]

โครงสร้างเหมือน pandas Series — มีค่า + positional index เริ่มที่ 0

Indexing:
  prices[0]    → 250        (ตัวแรก)
  prices[-1]   → 99         (ตัวสุดท้าย)

Slicing list[start:stop] — stop ไม่รวม:
  prices[1:3]  → [480, 1200]
  prices[:2]   → [250, 480]
  prices[-2:]  → [1200, 99]

List ของ list คือตาราง 2 มิติ ซึ่งคือสิ่งที่ pd.DataFrame() จะแปลงเป็น row และ column`,"m2-t2":`Dict คือ key→value lookup ใน { }

customer = {'name': 'Don', 'spend': 1250}
customer['name']            → 'Don'
customer.get('phone','n/a') → 'n/a'  (ปลอดภัย — ไม่ crash ถ้าไม่มี key)

LIST OF DICTS คือรูปแบบข้อมูลดิบที่พบบ่อยที่สุด — ทุก API response, ทุกไฟล์ JSON เป็นรูปแบบนี้ ใส่เข้า pandas ได้ทันที:

orders = [
  {'order_id': 1, 'gmv': 250, 'status': 'paid'},
  {'order_id': 2, 'gmv': 1800, 'status': 'cancelled'},
]
df = pd.DataFrame(orders)

แต่ละ dict กลายเป็น 1 row แต่ละ key กลายเป็น 1 column นี่คือสะพานระหว่าง JSON ดิบกับตารางที่ query ได้`,"m2-t3":`prices = [250, 480]

  prices.append(99)         # → [250, 480, 99]
  prices.extend([1, 2])     # → [250, 480, 99, 1, 2]   เพิ่มหลายตัว
  prices + [1, 2]           # → list ใหม่ ไม่ mutate ของเดิม
  prices.insert(0, 0)       # ใส่ที่ index 0
  prices.remove(250)        # ลบตามค่า ตัวแรกที่เจอ
  prices.pop()              # ดึงตัวสุดท้ายออก
  prices.pop(0)             # ดึงตัวแรกออก

Sorting:
  prices.sort()             # IN-PLACE, return None
  prices.sort(reverse=True)
  sorted(prices)            # list ใหม่ ของเดิมไม่ถูกแตะ
  prices.reverse()          # in-place
  list(reversed(prices))    # list ใหม่ที่ reversed

GOTCHA: list.sort() return None ทำให้คนพลาดกันบ่อย:

  result = my_list.sort()   # result เป็น None!
  result = sorted(my_list)  # ที่ถูกคือแบบนี้

ส่วนใหญ่ใช้ sorted() ไปเลย ยกเว้นต้องการ in-place เพื่อ performance`,"m2-t4":`Tuple: ลำดับ IMMUTABLE
  point = (3, 5)
  point[0]      # → 3
  point[0] = 4  # TypeError

List: ลำดับ mutable
  scores = [90, 85]
  scores[0] = 95

ใช้ TUPLES เมื่อ:
- record ขนาดคงที่: (lat, lon), (year, month, day)
- return ค่าหลายตัว: return min_val, max_val
- ใช้เป็น dict key (list เป็น key ไม่ได้เพราะ mutate ได้)

UNPACKING — ใช้ได้กับ tuple, list, iterable ทุกแบบ:
  lo, hi = (10, 90)
  for k, v in customer.items():   # tuple unpacking
  a, *rest = [1, 2, 3, 4]         # a=1, rest=[2,3,4]

Named tuple (ใส่ชื่อ field โดยไม่ต้องเขียน class):
  from collections import namedtuple
  Order = namedtuple('Order', 'id gmv status')
  o = Order(5001, 250, 'paid')
  o.gmv  # → 250

ในงานจริง dataclasses หรือ dict ก็ใช้ได้ดีกว่า แต่จะเจอ namedtuple ใน code สัมภาษณ์เป็นประจำ`,"m2-t5":`Set คือ collection ที่ไม่เรียงลำดับ และเก็บแต่ค่า UNIQUE

  countries = {'TH', 'SG', 'MY'}
  countries.add('VN')           # เพิ่ม
  countries.remove('VN')        # KeyError ถ้าไม่มี
  countries.discard('XX')       # เงียบถ้าไม่มี
  'TH' in countries             # ทดสอบ O(1)

SET MATH — ตรงกับ SQL set operators:
  a | b      union           (UNION)
  a & b      intersection    (INTERSECT)
  a - b      difference      (EXCEPT)
  a ^ b      symmetric diff  (XOR)

จุดเด่น performance — \`x in some_set\` เป็น O(1); \`x in some_list\` เป็น O(n) ถ้าจะถามว่า "ค่านี้อยู่ใน collection ใหญ่นี้หรือเปล่า" ให้ใช้ set

Dedupe list:
  list(set(items))             # ลำดับ NOT preserved
  list(dict.fromkeys(items))   # รักษาลำดับ (Py 3.7+)

Empty set ใช้ set() — \`{}\` คือ empty DICT`,"m2-t6":`customer = {'name': 'Don', 'spend': 1250, 'country': 'TH'}

3 views:
  customer.keys()    # → dict_keys(['name', 'spend', 'country'])
  customer.values()  # → dict_values(['Don', 1250, 'TH'])
  customer.items()   # → dict_items([('name','Don'), ...])

วน iterate:
  for k in customer:               # implicit .keys()
  for v in customer.values():
  for k, v in customer.items():    # ใช้บ่อยที่สุด

ทดสอบ membership:
  'name' in customer               # ตรวจ KEY (ไม่ใช่ value)
  1250 in customer.values()

Sort dict ตาม value (return list ของ tuple):
  sorted(customer.items(), key=lambda kv: kv[1])

Reverse dict (สลับ key/value):
  {v: k for k, v in customer.items()}
  (ต้องมั่นใจว่า value ไม่ซ้ำกัน ไม่งั้นจะทับกัน)`,"m2-t7":`มี 3 วิธี เรียงจากใหม่ไปเก่า:

Python 3.9+ pipe operator:
  combined = a | b          # ฝั่งขวาชนะถ้าซ้ำกัน

Python 3.5+ spread:
  combined = {**a, **b}     # semantics เหมือนกัน — ขวาชนะ

dict.update (MUTATE ตัวซ้าย):
  a.update(b)               # a มี key ของ b เพิ่มเข้ามา

Pattern ที่ใช้บ่อยที่สุด — merge default กับ override:

  defaults = {'limit': 100, 'offset': 0, 'order': 'asc'}
  user_opts = {'limit': 50}
  config = defaults | user_opts
  # → {'limit': 50, 'offset': 0, 'order': 'asc'}

ถ้าเป็น NESTED dict การ merge เป็นแบบ SHALLOW — inner dict ถูกแทน ไม่ใช่ merge ด้านใน ถ้าอยาก deep merge ต้องเขียน helper เอง`,"m2-t8":`ข้อมูลจริงไม่ flat

LIST OF DICTS — JSON array, รูปแบบธรรมชาติของตาราง:

  orders = [
      {'order_id': 1, 'gmv': 250, 'status': 'paid'},
      {'order_id': 2, 'gmv': 1800, 'status': 'cancelled'},
  ]
  orders[0]['gmv']            # → 250

  # filter
  [o for o in orders if o['status'] == 'paid']

  # แปลงเป็น pandas
  pd.DataFrame(orders)

DICT OF DICTS — เวลาที่ต้อง lookup โดย key แบบ O(1):

  by_id = {o['order_id']: o for o in orders}
  by_id[2]['gmv']             # → 1800

จาก list-of-dicts ไปเป็น dict-of-dicts เป็น one-liner ของ dict comprehension เป็น pattern ที่ใช้บ่อยมาก`,"m2-t9":`3 ตัวช่วย iterate ที่ใช้ทุกวัน

zip — จับคู่ iterable สองตัวขึ้นไป:
  ids    = [1, 2, 3]
  prices = [250, 480, 1200]
  list(zip(ids, prices))     # [(1, 250), (2, 480), (3, 1200)]

  for i, p in zip(ids, prices):
      print(i, p)

  # สร้าง dict
  dict(zip(ids, prices))      # → {1: 250, 2: 480, 3: 1200}

enumerate — index + value:
  for i, item in enumerate(['a', 'b', 'c']):
      print(i, item)          # 0 a / 1 b / 2 c

  for i, item in enumerate(items, start=1):    # เริ่มที่ 1

zip หยุดที่ตัวสั้นที่สุด ถ้าอยากต่อ:
  from itertools import zip_longest
  zip_longest(short, long, fillvalue=0)

range — ดูใน 1.6 range เป็น lazy ใช้ list() แปลงถ้าต้องการ`,"m2-t10":`sorted(iterable, key=fn, reverse=False)

key คืออาวุธลับ — ฟังก์ชันที่ map item ไปเป็นค่าที่อยากใช้ sort

Sort dict ตาม field:
  sorted(orders, key=lambda o: o['gmv'])               # น้อย→มาก
  sorted(orders, key=lambda o: o['gmv'], reverse=True) # มาก→น้อย

Sort หลาย field (Python sort เป็น STABLE — key เท่ากันรักษาลำดับเดิม):
  # ก่อน status, ภายใน status ตาม gmv มาก→น้อย
  sorted(orders, key=lambda o: (o['status'], -o['gmv']))

Sort string แบบ ignore case:
  sorted(names, key=str.lower)

operator.itemgetter เร็วกว่า lambda สำหรับ field ตรงๆ:
  from operator import itemgetter
  sorted(orders, key=itemgetter('gmv'), reverse=True)

Trick: ถ้าอยาก reverse แค่ field เดียวใน multi-key sort ให้ใส่ลบ`,"m2-t11":`collections.Counter — dict subclass สำหรับนับ

  from collections import Counter

  statuses = ['paid', 'paid', 'cancelled', 'paid', 'pending']
  Counter(statuses)
  # → Counter({'paid': 3, 'cancelled': 1, 'pending': 1})

  Counter(statuses).most_common(2)
  # → [('paid', 3), ('cancelled', 1)]

ในระดับ pandas column สิ่งที่ทำหน้าที่เดียวกันคือ:
  df['status'].value_counts()

Counter MATH (บวก/ลบ tallies):
  a = Counter(week1)
  b = Counter(week2)
  diff = b - a               # count ที่เพิ่มในสัปดาห์นี้

ใช้ Counter เมื่อต้องการ frequency table จาก list ดิบๆ ไม่ต้องเปิด pandas`,"m2-t12":`dict ที่สร้าง key หายไปอัตโนมัติด้วย default factory ลดความรำคาญของการเช็ค "key นี้มีหรือยัง"

  from collections import defaultdict

  # จัดกลุ่ม orders ตาม country
  by_country = defaultdict(list)
  for o in orders:
      by_country[o['country']].append(o)   # ไม่เจอ KeyError

  # นับด้วย defaultdict(int)
  counts = defaultdict(int)
  for s in statuses:
      counts[s] += 1                       # default 0

ถ้าไม่ใช้ defaultdict จะต้องเขียนยุ่งยาก:
  if key not in d:
      d[key] = []
  d[key].append(value)

ใน pandas เทียบเคียง:
  df.groupby('country').agg(list)

แต่ defaultdict เหมาะกับ pure-Python pipeline ก่อนเข้า pandas`,"m3-t1":`เปรียบเทียบ:  >  <  ==  !=  >=  <=
เตือน:  =  คือ assign, ==  คือ compare ผสมกันคือ bug ของมือใหม่อันดับหนึ่ง

Python ใช้ and / or / not เป็นคำเชื่อม logic

PANDAS แตกต่าง — และเป็นกับดักของ analyst หน้าใหม่ทุกคน:

  &   (and)        |   (or)        ~   (not)

ทุกเงื่อนไขต้องล้อมด้วยวงเล็บ เพราะ & มี precedence สูงกว่า > :

  df[(df['gmv'] > 1000) & (df['status'] == 'paid')]    ✓ ถูก
  df[df['gmv'] > 1000 & df['status'] == 'paid']        ✗ bug แบบเงียบ

ตอนเริ่มเขียน pandas filter ทุกครั้ง จำรูปแบบนี้ให้ขึ้นใจ`,"m3-t2":`Syntax สำคัญที่สุดของการคิดแบบ pandas เป็น for loop บรรทัดเดียวที่สร้าง list

doubled = [x * 2 for x in [1, 2, 3]]          # → [2, 4, 6]

อ่านว่า:  "สำหรับ x แต่ละตัวใน list ให้ x * 2"

มี filter:
  expensive = [p for p in prices if p > 500]

มี transform + filter:
  rounded_high = [round(p) for p in prices if p > 500]

list pre-loaded ใน sandbox  sales = [120, 480, 75, 1500, 60, 230, 880]

นี่คือ mental model เดียวกับ pandas vectorised operation พอ comprehension อ่านเป็นธรรมชาติ pandas filter ก็จะง่ายเอง:

  Python:  [p for p in prices if p > 500]
  Pandas:  prices[prices > 500]`,"m3-t3":`{ key_expr: val_expr for x in iterable [if cond] }

ตัวอย่าง:
  squares = {n: n*n for n in range(5)}
  # → {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

สร้าง lookup จาก list of dicts:
  by_id = {o['order_id']: o['gmv'] for o in orders}

Filter ระหว่างสร้าง:
  paid_only = {o['order_id']: o['gmv'] for o in orders if o['status'] == 'paid'}

Invert dict (สลับ key กับ value):
  inverted = {v: k for k, v in d.items()}
  (สมมุติว่า value ไม่ซ้ำ ไม่งั้นจะทับ)

Mental model เหมือน list comp แต่มี 2 expression คั่นด้วย :`,"m3-t4":`{ expr for x in iterable [if cond] }

หาค่า unique จาก list of dicts:
  countries = {o['country'] for o in orders}

เทียบกับเขียน loop:
  countries = set()
  for o in orders:
      countries.add(o['country'])

อย่าสับสนกับ dict comp — dict comp มี colon : ระหว่าง key กับ value ส่วน set comp ไม่มี :

  {x for x in range(5)}       # set {0,1,2,3,4}
  {x: x for x in range(5)}    # dict {0:0, 1:1, ...}

Empty literals:
  set()    # empty SET
  {}       # empty DICT
  set      # type ของมันเอง`,"m3-t5":`(expr for x in iterable)              # parens — ไม่ใช่ bracket

เหมือน list comp แต่เป็น LAZY — สร้างค่าทีละตัวไม่ build list ใหญ่ในหน่วยความจำ

  total = sum(o['gmv'] for o in orders if o['status'] == 'paid')

ทำไมสำคัญ: ตอนวนหลายล้านแถว ไม่อยาก build list ใหญ่ๆ แค่จะ sum generator expression ใช้แค่ที่ yield

ถ้าฟังก์ชันรับ iterable ตัวเดียว ดร็อปวงเล็บข้างนอกได้:
  sum(o['gmv'] for o in orders)              # สะอาด
  any(o['gmv'] > 1000 for o in orders)
  max(orders, key=lambda o: o['gmv'])

Trade-off: iterate ได้ครั้งเดียว หลังจากนั้น generator หมด ถ้าต้อง scan สองรอบให้ list() ก่อน`,"m3-t6":`loop ซ้อน loop ซ้อนใน comprehension

FLATTEN list 2 มิติ:
  flat = [x for row in matrix for x in row]
  # [[1,2],[3,4]] → [1, 2, 3, 4]

อ่านจากซ้ายไปขวาเหมือน nested for loops

มี filter ด้านใน:
  [o for batch in batches for o in batch if o['status'] == 'paid']

เทียบเป็น for loop:
  flat = []
  for batch in batches:
      for o in batch:
          if o['status'] == 'paid':
              flat.append(o)

เกิน 2 ระดับ: ใช้ loop เถอะ nested comp อ่านไม่ออกง่ายๆ

ถ้าจะ TRANSFORM matrix (ไม่ใช่ flatten — return list ของ list):
  [[x * 2 for x in row] for row in matrix]`,"m3-t7":`value_if_true  if  condition  else  value_if_false

ใช้ inline เป็น branch บรรทัดเดียว:
  tier = 'high' if gmv > 1000 else 'low'

ใน comprehension:
  [('high' if g > 1000 else 'low') for g in gmvs]

Chained ternary เขียนได้แต่อ่านไม่ออก ใช้ elif แทน:
  # หลีกเลี่ยง
  tier = 'L' if g < 100 else 'M' if g < 1000 else 'H'
  # แทนด้วย
  if g < 100:     tier = 'L'
  elif g < 1000:  tier = 'M'
  else:           tier = 'H'

ใน pandas ตัวเทียบเคียงสำหรับ column คือ np.where (เรียนในหัวข้อถัดไป):
  df['tier'] = np.where(df['gmv'] > 1000, 'high', 'low')`,"m3-t8":`any(iterable)  → True ถ้ามีอย่างน้อย 1 ตัวเป็น truthy
all(iterable)  → True ถ้าทุกตัว truthy (iterable ว่าง → True)

  any(o['status'] == 'paid' for o in orders)
  all(o['gmv'] > 0 for o in orders)

ทั้งคู่ SHORT-CIRCUIT — หยุดทันทีที่รู้คำตอบ คู่กับ generator expression สำหรับเช็ค "มีตัวไหนเป็นแบบนี้ไหม" ใน data ใหญ่ๆ

ควรรู้: empty iterable ทำตัวยังไง
  any([])  → False
  all([])  → True       (vacuous truth — แปลกแต่จริง)

ใน pandas ระดับ column:
  (df['status'] == 'paid').any()
  (df['gmv'] > 0).all()`,"m3-t9":`Assign + ใช้งานใน expression เดียว Python 3.8+

ใช้เมื่อต้องคำนวณค่าเดิมซ้ำ 2 ครั้ง:

  # ก่อน walrus
  data = fetch()
  if len(data) > 10:
      process(data)

  # ใช้ walrus
  if (n := len(fetch())) > 10:
      process(fetch())          # (หรือเก็บผล fetch ก่อน)

ใน while loop อ่าน chunk:
  while (chunk := stream.read(1024)):
      handle(chunk)

ใน comprehension:
  [y for x in data if (y := compute(x)) > 0]

ใช้พอประมาณ — ใช้มากเกินทำให้อ่านยาก กฎ: ถ้าทำให้ intent ชัดขึ้นให้ใช้ ถ้าแค่ทำให้บรรทัดสั้นลง อย่าใช้`,"m3-t10":`กับดักของผู้สอบมาร่ำๆ ในข้อสัมภาษณ์

ใน Python ปกติ  and  และ  or  short-circuit:
  x and y       → x ถ้า x falsy, ไม่งั้น y
  x or y        → x ถ้า x truthy, ไม่งั้น y

ใน pandas  &  และ  |  เป็น ELEMENT-WISE — evaluate ทั้งสองข้างทุกแถว ไม่มี short-circuit บน Series

  df[(df['gmv'] > 1000) & (df['status'] == 'paid')]
  # ↑ คำนวณทั้งสองเงื่อนไขกับทุกแถว

ถ้าข้างหนึ่งหนัก ก็เสีย performance เต็มๆ ทางออก:
  - filter ทีละขั้น (composable, อ่านง่าย), หรือ
  - จัดให้งานหนักทำหลัง filter เบาๆ ก่อน (.loc บน set ที่เล็กลง)

อย่าใส่ lookup ช้าๆ ของ Python ใน Boolean mask ให้ใช้ .map() หรือ pd.merge precompute ไว้

CHEATSHEET:
  scalar:  if x > 1000 and status == 'paid':
  series:  df[(df['gmv'] > 1000) & (df['status'] == 'paid')]`,"m3-t11":`Vectorised conditional — ทางเร็วสุดสำหรับ "คำนวณ column ใหม่จาก rule"

np.where(cond, if_true, if_false):
  import numpy as np
  df['tier'] = np.where(df['gmv'] > 1000, 'high', 'low')

หลาย bin — np.select scale ได้:
  conditions = [
      df['gmv'] < 100,
      df['gmv'] < 1000,
      df['gmv'] >= 1000,
  ]
  choices = ['small', 'medium', 'large']
  df['tier'] = np.select(conditions, choices, default='unknown')

เมื่อไหร่ไม่ใช้:
- 1 เงื่อนไข แค่ 2 categorical output    → np.where
- 2–6 bins                                  → np.select
- mapping string→string เยอะ              → .map() ด้วย dict (หัวข้อถัดไป)

อย่าใช้ .apply(lambda) สำหรับงานพวกนี้ — ช้ากว่า np.where 10 เท่าใน numeric column`,"m3-t12":`วิธี translate categorical ที่สะอาดที่สุด

  status_emoji = {
      'paid':      '+',
      'cancelled': 'x',
      'pending':   '?',
  }
  df['icon'] = df['status'].map(status_emoji)

ค่าที่ไม่อยู่ใน mapping จะกลายเป็น NaN ใส่ default ด้วย .fillna():
  df['icon'] = df['status'].map(status_emoji).fillna('?')

ใช้ function แทน dict (พบน้อยกว่า — เลือก dict ถ้าทำได้):
  df['name_len'] = df['name'].map(len)

ถ้ามี DataFrame ที่ 2 ที่ใช้เป็น mapping ให้ใช้ pd.merge แทน .map() เหมาะกับ lookup เล็กๆ

Pattern นี้ดีกว่า np.where chain ยาวๆ เมื่อ category เกิน 3-4 ตัว`,"m4-t1":`Series คือ column ที่มี label DataFrame คือ Series หลายตัวต่อกัน — ตาราง

import pandas as pd
df = pd.read_csv('orders.csv')

30 วินาทีแรกกับ dataset ใหม่ — drill ที่ต้องจำให้ได้:

  df.head()       5 แถวแรก
  df.tail(10)     10 แถวสุดท้าย
  df.shape        (rows, columns)  — ไม่มี parens, เป็น attribute
  df.info()       dtype + nullcount ต่อ column
  df.describe()   summary stat ของ numeric column
  df.columns      ชื่อ column
  df.dtypes       type ต่อ column

สร้างเอง (สัมภาษณ์ชอบถาม):

  df = pd.DataFrame({
      'order_id': [1, 2, 3],
      'gmv':      [250, 1800, 99],
      'status':   ['paid', 'cancelled', 'paid']
  })

ทำไม pandas ถึงดี: ทุก method ทำงานทั้ง column พร้อมกัน ไม่ต้อง for loop ทีละแถว`,"m4-t2":`เลือก column:
  df['gmv']                column เดียว → Series
  df[['gmv', 'status']]    หลาย column   → DataFrame (สังเกตวงเล็บคู่)

filter row ด้วย boolean mask:
  df[df['gmv'] > 1000]

หลายเงื่อนไข — ต้องมีวงเล็บ ใช้ & ไม่ใช่ 'and':
  df[(df['gmv'] > 1000) & (df['status'] == 'paid')]

Negate ด้วย ~:
  df[~(df['status'] == 'cancelled')]

.isin() สำหรับหลายค่า:
  df[df['status'].isin(['paid', 'pending'])]

ตรวจ null:
  df[df['phone'].isna()]        rows ที่ phone หาย
  df[df['phone'].notna()]       rows ที่ phone มี

orders DataFrame pre-loaded ใน sandbox (TH/SG/MY · paid/cancelled/pending)`,"m4-t3":`Concept ของ pandas ที่ถูกสอบบ่อยที่สุด pattern: split → apply → combine

พื้นฐาน:
  df.groupby('country')['gmv'].sum()

อ่านว่า: "แยก row ตาม country แล้ว sum gmv ของแต่ละกลุ่ม"

หลาย aggregation:
  df.groupby('country')['gmv'].agg(['sum', 'mean', 'count'])

groupby หลาย column:
  df.groupby(['country', 'status'])['gmv'].sum()

NAMED aggregations — สะอาดสุด สัมภาษณ์ senior อยากเห็น:

  df.groupby('country').agg(
      total_gmv   = ('gmv', 'sum'),
      avg_order   = ('gmv', 'mean'),
      order_count = ('order_id', 'count')
  ).reset_index()

reset_index() — chain ไว้ 90% ของเวลา ให้ผลลัพธ์เป็น flat DataFrame ไม่ใช่ multi-level index

orders pre-loaded ใน sandbox`,"m4-t4":`รวมตารางใน pandas mental model เดียวกับ SQL JOIN

  pd.merge(left, right, how='left', on='customer_id')

4 ค่า 'how':
  'inner'  intersection           เก็บแถวที่ตรงกันสองข้าง
  'left'   ทั้งหมดจากซ้าย          NULL ขวาเมื่อไม่ตรง (ใช้บ่อย)
  'right'  mirror ของ left
  'outer'  union                  ทุกแถว NULL ตรงที่หาย

Multi-key join:
  pd.merge(a, b, on=['country', 'category'])

ชื่อ column ต่างข้าง:
  pd.merge(orders, ref, left_on='customer_id', right_on='cust_id')

Suffixes เมื่อสองข้างมี column ชื่อเดียวกัน (เช่น 'country' มีทั้งสองข้าง):
  pd.merge(orders, customers, on='customer_id', suffixes=('_ord', '_cust'))

CONCAT — stack แนวตั้ง ไม่ใช่ join:
  pd.concat([df_2024, df_2025], ignore_index=True)

ใช้ concat เมื่อ schema เหมือนกัน ใช้ merge เมื่อรวมตารางต่างๆ ด้วย key`,"m4-t5":`Wide vs long ทุกข้อสอบเทสทิศใดทิศหนึ่ง

LONG → WIDE ด้วย pivot_table:

  df.pivot_table(
      index='country',
      columns='status',
      values='gmv',
      aggfunc='sum',
      fill_value=0,
  )

แต่ละแถวเป็น country unique, แต่ละ column เป็น status unique, cell คือ sum gmv

WIDE → LONG ด้วย melt — ตรงกันข้าม:

  pd.melt(df, id_vars=['country'], value_vars=['gmv', 'aov'])

stack / unstack: idea เดียวกัน แต่ทำงานบน MultiIndex level:

  df.set_index(['country', 'status'])['gmv'].unstack()

เลือกอันไหน:
- pivot_table  → aggregate ขณะ reshape
- melt         → จาก wide (แถวต่อ entity, หลาย metric column) ไป long (แถวต่อ entity-metric pair) สำหรับ plot หรือ groupby ต่อ

Default ใช้ long form สำหรับ pipeline analysis Wide ไว้สำหรับ display`,"m4-t6":`วันที่จาก CSV มาเป็น string convert ก่อน ไม่งั้นทำอะไรเกี่ยวเวลาไม่ได้

  orders['created_at'] = pd.to_datetime(orders['created_at'])

.dt accessor — accessor แบบ string-method สำหรับ datetime:

  orders['created_at'].dt.year
  orders['created_at'].dt.month
  orders['created_at'].dt.day_name()
  orders['created_at'].dt.to_period('M')      # → 2025-03 etc

Resampling — groupby สำหรับเวลา:

  orders.set_index('created_at').resample('ME')['gmv'].sum()

period ที่ใช้บ่อย (pandas 2.x): 'D' day · 'W' week · 'ME' month-end · 'QE' quarter-end · 'YE' year-end
(ใน pandas < 2.2 ใช้ 'M' / 'Q' / 'Y' ได้ ปัจจุบัน FutureWarning)

Date math เป็น vectorised:
  orders['days_since'] = (pd.Timestamp.now() - orders['created_at']).dt.days

Time series คือหัวใจของ cohort retention, run-rate forecast, seasonal decomposition — ทั้งหมดที่ Shopee/Lazada สอบ`,"m4-t7":`ค่าหายมาเป็น NaN (numeric) หรือ None / NaT ใน pandas ทั้งคู่ขึ้นใน .isna() / .notna()

DETECT:
  df.isna().sum()                    # null count ต่อ column
  df['phone'].isna()                 # boolean series
  df[df['phone'].isna()]             # rows ที่ phone หาย

DROP:
  df.dropna()                        # column ไหน NaN → drop row
  df.dropna(subset=['phone'])        # ดูแค่ column นี้
  df.dropna(thresh=3)                # เก็บ row ที่มี ≥3 non-null

FILL:
  df['phone'].fillna('unknown')                  # ค่าคงที่
  df['gmv'].fillna(df['gmv'].median())           # ค่าสถิติ
  df.fillna({'phone': 'unknown', 'gmv': 0})      # column-specific
  df['gmv'].ffill()                              # forward fill (time series — pandas 2.x)
  df['gmv'].bfill()                              # back fill

Pipeline ที่ใช้จริง: detect ก่อน → ตัดสินใจ drop/fill ต่อ column → อย่า impute ทั้งหมดโดยไม่คิด ค่าที่ impute มาส่งผลทุก statistic ปลายทาง`,"m4-t8":`3 method ที่หน้าตาคล้ายกัน แต่ทำงานต่างกัน

.map (Series เท่านั้น):
  - Element-wise
  - รับ dict, Series, หรือ function
  - return Series ความยาวเท่าเดิม
    df['status'].map({'paid': 1, 'cancelled': 0})

.apply (Series หรือ DataFrame):
  - บน Series: เหมือน .map แต่รับเฉพาะ function
  - บน DataFrame: apply ตาม axis (default คือ row).
    df.apply(np.sum, axis=0)      # column sum
    df.apply(my_fn, axis=1)       # ROW BY ROW — ช้า

.transform (ใช้กับ groupby เป็นหลัก):
  - return Series ขนาด SAME SHAPE กับ input (broadcast ค่ากลับ)
  - วิธี pandas สำหรับ "คำนวณ mean ของ group แล้วใส่กลับทุกแถว":
    df['gmv_vs_avg'] = df['gmv'] - df.groupby('country')['gmv'].transform('mean')

ลำดับ performance: vectorised op >> .map / .apply บน Series > .apply บน DataFrame row หลีกเลี่ยง axis=1 apply เพราะเป็น Python ทีละแถว`,"m4-t9":`Sort:
  df.sort_values('gmv')                                    # น้อย→มาก
  df.sort_values('gmv', ascending=False)
  df.sort_values(['country','gmv'], ascending=[True, False])

Sort ตาม index:
  df.sort_index()

Rank — ใส่ rank ให้แต่ละค่าใน column:
  df['gmv_rank'] = df['gmv'].rank()                  # tie → mean rank
  df['gmv_rank'] = df['gmv'].rank(method='dense')    # tie → int เดียวกัน ไม่กระโดด
  df['gmv_rank'] = df['gmv'].rank(method='min')      # tie → rank ต่ำสุด
  df['gmv_rank'] = df['gmv'].rank(ascending=False)

PER-GROUP RANK — เทียบเท่า SQL ROW_NUMBER() PARTITION BY:
  df['rank_in_country'] =
      df.groupby('country')['gmv'].rank(method='dense', ascending=False)

Top-N PER GROUP:
  mask = df.groupby('country')['gmv'].rank(method='dense', ascending=False) <= 3
  df[mask]`,"m4-t10":`.str accessor vectorise ทุก string method ผ่าน column

  df['country'].str.lower()
  df['country'].str.strip()
  df['country'].str.upper()
  df['email'].str.contains('@')              # regex by default
  df['email'].str.contains('@', regex=False) # literal — เร็วกว่า
  df['name'].str.startswith('A')
  df['name'].str.endswith('.csv')
  df['name'].str.replace('_', ' ', regex=False)
  df['name'].str.split(' ')                  # → Series ของ list
  df['name'].str.len()
  df['name'].str.zfill(5)                    # pad zero

EXTRACT ด้วย regex return DataFrame ของ capture group:
  df['phone'].str.extract(r'(\\d{3})-(\\d{4})')

Chain ตามลำดับ — แต่ละ .str step return Series ใหม่

pandas 2.0+ ลองใช้ pd.StringDtype() ให้ performance ดีขึ้นเล็กน้อย + null handling ชัดขึ้น`,"m4-t11":`Categorical column เก็บค่าเป็น integer code mapped ไป category list — ประหยัด memory + enable ORDERING สำหรับ ordinal data

  df['status'] = df['status'].astype('category')
  df['status'].cat.categories       # → Index(['cancelled','paid','pending'])
  df['status'].memory_usage()       # น้อยกว่า object เยอะ

ORDERED categorical:
  df['tier'] = pd.Categorical(df['tier'],
                              categories=['low','med','high'],
                              ordered=True)
  df[df['tier'] > 'low']            # เปรียบเทียบได้

ใช้เมื่อ:
- string ค่าซ้ำๆ low-cardinality ('status', 'country', 'category')
- Ordinal data ('low/med/high', 'q1/q2/q3/q4')

อย่าใช้เมื่อ:
- high-cardinality (พอๆ กับ object)
- free-text

GroupBy บน categorical default รวม unused category — ใส่ observed=True เพื่อตัด`,"m4-t12":`สำหรับ analysis ระดับสัมภาษณ์ df.info() บอกที่ optimize ได้

  df.info()
  df.memory_usage(deep=True)    # แม่นยำสำหรับ object column

OPTIMISE:
- object → category สำหรับ string low-cardinality (memory ลด 10-100 เท่า)
- int64 → int32 / int16 เมื่อค่าพอดี
- float64 → float32 เมื่อ precision พอ
- Date → datetime64 (slicing, .dt, เร็วกว่า)

โหลด CSV ใหญ่ ประกาศ dtype ก่อน:
  pd.read_csv('big.csv', dtype={
      'status':     'category',
      'gmv':        'float32',
      'created_at': 'string',
  }, parse_dates=['created_at'])

CHUNK iterate สำหรับไฟล์ที่ไม่ fit memory:
  for chunk in pd.read_csv('big.csv', chunksize=100_000):
      process(chunk)

dtype layout ที่ clean คือสิ่งที่ทำให้ notebook ช้าๆ กลายเป็นรันในไม่กี่วินาที`,"m5-t1":`SQL อ่านจากบนลงล่าง แต่ EXECUTE ตามลำดับนี้:

  FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT

รู้ลำดับนี้กำจัด bug 80% และ aliasing error

  SELECT order_id, gmv
  FROM orders
  WHERE status = 'paid' AND gmv > 1000
  ORDER BY gmv DESC
  LIMIT 10;

ต้องจำ:

  =  สำหรับเท่ากัน (ไม่ใช่ == แบบ Python)
  String ใช้ 'single quote' ไม่ใช่ double
  NULL ใช้  IS NULL  หรือ  IS NOT NULL  — ห้ามใช้  = NULL
  LIKE '%th%'         pattern match (% = any chars)
  BETWEEN 100 AND 500 inclusive ทั้งสองข้าง
  IN ('TH','SG','MY') membership

DESC และ ASC ใช้ต่อ column:  ORDER BY country ASC, gmv DESC`,"m5-t2":`SQL GROUP BY = pandas .groupby() Mental model เดียวกัน syntax ต่าง

  SELECT country,
         SUM(gmv)    AS total_gmv,
         COUNT(*)    AS order_count,
         AVG(gmv)    AS avg_order
  FROM orders
  WHERE status = 'paid'
  GROUP BY country
  HAVING SUM(gmv) > 100000
  ORDER BY total_gmv DESC;

กฎที่สัมภาษณ์ถามทุกครั้ง:

1. ทุก column ใน SELECT ต้องอยู่ใน GROUP BY หรือ wrap ด้วย aggregate (SUM, COUNT, AVG, MIN, MAX)

2. WHERE filter row ก่อน group HAVING filter group หลัง group นี่คือคำถามสัมภาษณ์ที่พบบ่อยสุด — ต้องอธิบายได้ทันที

3. COUNT(*)  นับทุกแถวใน group
   COUNT(col) นับแถวที่ col IS NOT NULL
   COUNT(DISTINCT customer_id)  นับ customer unique — ใช้บ่อย`,"m5-t3":`JOIN รวมตารางด้วย key:

  INNER JOIN  — เฉพาะแถวที่ตรงกันสองข้าง
  LEFT JOIN   — ทุกแถวจากซ้าย NULL ตรงที่ขวาไม่มี
  RIGHT JOIN  — mirror ของ LEFT (ใช้น้อย เขียนเป็น LEFT แทน)
  FULL JOIN   — ทุกแถวสองข้าง NULL ตรงที่หาย

  SELECT o.order_id, c.country
  FROM orders o
  LEFT JOIN customers c ON o.customer_id = c.customer_id;

WINDOW FUNCTIONS — aggregate ที่ไม่ collapse row Alooba ชอบมาก

  SELECT
    order_id,
    customer_id,
    gmv,
    ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY created_at) AS order_rank,
    SUM(gmv)     OVER (PARTITION BY customer_id) AS customer_total
  FROM orders;

Pattern ระดับสังหาร:

- First / Nth purchase ต่อ customer →
    ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY created_at)
- ค่า row ก่อนหน้า →  LAG(gmv) OVER (PARTITION BY customer_id ORDER BY created_at)
- running total →  SUM(gmv) OVER (PARTITION BY customer_id ORDER BY created_at)
- Top-N per group →  filter ที่ ROW_NUMBER() <= N ใน outer query`,"m5-t4":`CTE = Common Table Expression = subquery มีชื่อที่กำหนดด้วย WITH ทำให้ query ซับซ้อนอ่านง่ายขึ้น เป็น pattern ที่ Alooba ชอบ

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

หลาย CTE ใน query เดียว — chain ด้วย comma (WITH เขียนครั้งเดียว):

  WITH paid AS ( SELECT * FROM orders WHERE status = 'paid' ),
       by_cust AS ( SELECT customer_id, SUM(gmv) AS s FROM paid GROUP BY customer_id )
  SELECT * FROM by_cust ORDER BY s DESC;

Subquery ใน WHERE — "customers ที่มีออเดอร์ paid อย่างน้อย 1 ตัว":

  SELECT *
  FROM customers
  WHERE customer_id IN (SELECT DISTINCT customer_id FROM orders WHERE status='paid');

กฎ: เมื่อ query มี aggregation มากกว่า 1 step ให้ใช้ CTE ผลลัพธ์เหมือนกัน ความง่ายต่างกัน`,"m5-t5":`Self-join คือ join ตารางตัวเองเข้ากับตัวเอง ใช้กับ hierarchy และหา pair

Pattern ใช้ 2 alias สำหรับตารางเดียว:

  SELECT a.booking_id, b.booking_id
  FROM bookings a
  JOIN bookings b
    ON a.hotel_id   = b.hotel_id
   AND a.created_at = b.created_at
   AND a.booking_id < b.booking_id;       -- de-dupe + ตัด self-pair

Trick  a.id < b.id  กันไม่ให้ (1,2) และ (2,1) ปรากฏทั้งคู่ — และตัด (1,1) self-pair ด้วย

Hierarchy — คำถามสัมภาษณ์คลาสสิก:

  -- employees(id, name, manager_id)
  SELECT e.name AS employee, m.name AS manager
  FROM employees e
  LEFT JOIN employees m ON e.manager_id = m.id;

Self-join ช้าบนตารางใหญ่ — ทุก match scan ทั้งสองข้าง ถ้าจะ "หา duplicate" จริงๆ window function (COUNT(*) OVER (PARTITION BY ...)) ถูกกว่า`,"m5-t6":`SET OPERATOR รวม rowset ของ 2 query สองข้างต้องมี column ENTSAME จำนวน + type ที่ compatible

UNION (ตัด duplicate):
  SELECT country FROM customers
  UNION
  SELECT country FROM bookings;

UNION ALL (เก็บ duplicate — เร็วกว่า เลือกเมื่อรู้ว่าไม่มี dup):
  SELECT customer_id FROM orders WHERE status='paid'
  UNION ALL
  SELECT customer_id FROM orders WHERE status='pending';

INTERSECT — row ที่อยู่ทั้งสองข้าง:
  SELECT customer_id FROM orders
  INTERSECT
  SELECT customer_id FROM customers WHERE country='TH';

EXCEPT (Oracle เรียก MINUS) — row ใน LEFT ที่ไม่ใน RIGHT:
  SELECT customer_id FROM customers
  EXCEPT
  SELECT DISTINCT customer_id FROM orders;
  -- → customer ที่ไม่เคยสั่ง

USE CASE:
- UNION ALL — รวม query แบ่งตาม partition / time-range
- INTERSECT — analysis overlap (paid และ pending customers)
- EXCEPT — gap analysis (สมัครแล้วไม่เคยสั่ง)

หลายคน default ใช้ UNION ทั้งที่ UNION ALL พอ เลือกอย่างตั้งใจ`,"m5-t7":`วิธี SQL คำนวณ column จาก rule

  SELECT
      order_id,
      gmv,
      CASE
          WHEN gmv >= 1000 THEN 'large'
          WHEN gmv >= 100  THEN 'medium'
          ELSE 'small'
      END AS tier
  FROM orders;

แบบย่อสำหรับ equality หนึ่ง column:
  CASE status
      WHEN 'paid'      THEN 1
      WHEN 'cancelled' THEN 0
      ELSE NULL
  END AS is_paid

ใช้ INSIDE AGGREGATE — conditional aggregation, pattern อันดับ 1:

  SELECT country,
         COUNT(*)                                          AS total,
         COUNT(CASE WHEN status='paid'      THEN 1 END)    AS paid,
         SUM(CASE WHEN status='paid' THEN gmv ELSE 0 END)  AS paid_gmv
  FROM orders
  GROUP BY country;

นี่คือ "แสดง paid vs cancelled count ข้างกัน" — query เดียว scan เดียว สบายกว่า UNION 2 GROUP BY`,"m5-t8":`จัดการ null โดยไม่ต้อง CASE WHEN ยาวๆ

COALESCE — return arg แรกที่ไม่ใช่ NULL:

  SELECT COALESCE(phone, alt_phone, 'unknown') AS contact
  FROM customers;

  -- guard คลาสสิกของ LEFT JOIN:
  SELECT c.customer_id, COALESCE(SUM(o.gmv), 0) AS total
  FROM customers c
  LEFT JOIN orders o ON o.customer_id = c.customer_id
  GROUP BY c.customer_id;

NULLIF — return NULL ถ้า 2 arg เท่ากัน ไม่งั้น return arg แรก
ใช้บ่อยที่สุด: กัน divide by zero

  SELECT total_revenue / NULLIF(total_orders, 0) AS aov FROM …;
  -- ถ้า total_orders = 0 ตัวหารกลายเป็น NULL → result NULL, ไม่ใช่ error

จำ — NULL ไม่ใช่ value มันคือ "unknown" NULL = NULL คือ NULL, ไม่ใช่ TRUE ใช้  IS NULL  /  IS NOT NULL  สำหรับ boolean test`,"m5-t9":`แต่ละ dialect ใช้ฟังก์ชันต่างชื่อ sandbox นี้คือ SQLite — นี่ของ SQLite + standard / Postgres ที่จะเจอ Shopee/Lazada/Agoda

SQLite (sandbox):
  strftime('%Y', created_at)               -- year text
  strftime('%m', created_at)               -- month
  strftime('%Y-%m', created_at)            -- year-month bucket
  strftime('%w', created_at)               -- weekday (0=Sun)
  date(created_at, 'start of month')       -- วันแรกของเดือน
  date(created_at, '+7 days')
  date('now')
  julianday('now') - julianday(created_at) -- ผลต่างวัน

Postgres / Snowflake (อ่านได้ จะเจอ):
  DATE_TRUNC('month', created_at)
  EXTRACT(YEAR FROM created_at)
  created_at + INTERVAL '7 days'
  DATEDIFF(day, start, end)

MySQL:
  YEAR(created_at), MONTH(created_at)
  DATE_FORMAT(created_at, '%Y-%m')
  DATEDIFF(end, start)

สำหรับสัมภาษณ์: รู้ standard SQL (Postgres style) + dialect ของบริษัทเป้าหมาย`,"m5-t10":`Window function ที่ดู row ก่อนหน้า / ถัดไปใน partition

  LAG(col, offset, default)   -- ค่าจาก N row ก่อนใน ORDER BY
  LEAD(col, offset, default)  -- ค่าจาก N row ถัดไป

  SELECT
      order_id, customer_id, created_at, gmv,
      LAG(gmv)  OVER (PARTITION BY customer_id ORDER BY created_at) AS prev_gmv,
      LEAD(gmv) OVER (PARTITION BY customer_id ORDER BY created_at) AS next_gmv
  FROM orders;

ใช้สำหรับ:
- การเปลี่ยนแปลง period-over-period:   gmv - LAG(gmv) OVER (…)   → growth amount
- transition ของ status:               LAG(status) → เมื่อก่อนเป็น 'paid' ไหม
- ช่วงเวลา:                            julianday(created_at) - julianday(LAG(created_at) OVER (…))

Default value สำหรับ row แรก (ที่ LAG ไม่มีอะไรย้อนหลัง):
  LAG(gmv, 1, 0) OVER (…)   -- 0 แทน NULL

ALOOBA bread and butter จำ syntax ให้ได้`,"m5-t11":`3 rank function หน้าตาคล้ายกัน เลือกอย่างตั้งใจ:

ROW_NUMBER()    — 1, 2, 3 unique ต่อ partition Tie แตกตาม ORDER BY
RANK()          — ค่าเท่า → rank เท่ากัน rank ถัดไป SKIP (1, 1, 3, 4)
DENSE_RANK()    — ค่าเท่า → rank เท่ากัน rank ถัดไปต่อ (1, 1, 2, 3)
PERCENT_RANK()  — 0.0 ถึง 1.0 — percentile rank ใน partition
NTILE(n)        — แบ่ง row เป็น n bucket ขนาดเท่ากัน return 1..n

  SELECT
      customer_id, gmv,
      ROW_NUMBER() OVER (ORDER BY gmv DESC) AS rn,
      RANK()       OVER (ORDER BY gmv DESC) AS rk,
      DENSE_RANK() OVER (ORDER BY gmv DESC) AS dr,
      NTILE(4)     OVER (ORDER BY gmv DESC) AS quartile
  FROM orders;

NTILE เป็นวิธีง่ายสำหรับสร้าง tier:
  -- top 25% by spend → quartile 1
  NTILE(4) OVER (ORDER BY total_spend DESC) AS spend_quartile

ระวัง: bucket ของ NTILE อาจ UNEVEN size ถ้า total row หารด้วย n ไม่ลงตัว`,"m5-t12":`เมื่อ query ช้า database บอกได้ว่าทำไม

  EXPLAIN SELECT … FROM orders WHERE country = 'TH';

มันแสดง EXECUTION PLAN — index ที่ใช้, join order, row estimate

5 PATTERN ที่ต้องจำ (ไม่ว่า dialect ไหน):

1. SEQUENTIAL SCAN (Seq Scan / Full Scan)
   อ่านทุกแถว ตารางเล็กไม่เป็นไร ตารางใหญ่แพง
   แก้: ทำ index ใน column ที่ filter / join

2. INDEX SCAN
   ใช้ index เร็ว — ที่อยากได้

3. NESTED LOOP JOIN
   แต่ละ row ฝั่งซ้าย scan ฝั่งขวา OK ถ้า small × indexed-large

4. HASH JOIN
   build hash ฝั่งหนึ่ง probe ด้วยอีกฝั่ง เร็วสำหรับ join equality ใหญ่ๆ

5. SORT
   มักจะกินเวลา หลีกเลี่ยง  ORDER BY  ก่อน  LIMIT  ใน subquery ที่ไม่ต้องเรียง

ในสัมภาษณ์ไม่ได้เขียน EXPLAIN — ต้อง ANTICIPATE:
- "ผมจะเพิ่ม index บน (customer_id, created_at) สำหรับ query นี้"
- "push WHERE ลงไปใน CTE กัน full scan ของ orders"

นั่นคือคำตอบระดับ senior analyst`,"m6-t1":`Metric ที่สัมภาษณ์ Shopee, Lazada, Agoda ถามจริง:

GMV — Gross Merchandise Value มูลค่ารวมก่อนคืน ที่ e-commerce รายงานเป็น "revenue" (จริงๆ ไม่ใช่ — แต่มันคือเลขหัวข้อ)

Conversion Rate (CR) — bookings ÷ visitors คำนวณต่อ funnel step:
  search → detail → checkout → pay drop-off ระหว่าง 2 step คือ diagnostic

AOV — Average Order Value =  GMV ÷ order_count

Take Rate — commission ÷ GMV คำถาม economics ของ Agoda

Repeat Purchase Rate — customer ที่สั่ง 2+ ÷ total customer ใน period metric retention หัวข้อ

Cohort Retention — bucket user ตาม signup month ติดตาม % active ในแต่ละเดือนถัดไป เผยให้เห็นว่าการแก้ไขปรับ retention ขึ้นจริง หรือแค่ปั่นเลขสั้นๆ

LTV — total spend ต่อ customer ตลอดอายุ (หรือ window จำกัด)

THE DECOMPOSITION ที่ทุก analyst ต้องรู้ขึ้นใจ:

  GMV  =  visitors  ×  conversion_rate  ×  AOV

เมื่อ GMV ตก เช็คแต่ละ factor ใน equation ก่อนเสมอ`,"m6-t2":`Setup — สุ่มแยก user เป็น A (control) กับ B (variant) รันช่วงเวลาที่กำหนด เปรียบเทียบ primary metric

Sample size intuition — ต้องใช้ data มากขึ้นเมื่อ:
- effect ที่อยากตรวจจับเล็ก
- baseline metric noisy (variance สูง)
- ต้องการ confidence สูง

ระดับขนาดคร่าวๆ: ตรวจจับ 5% RELATIVE lift บน baseline 5% ที่ confidence 95% ต้องการประมาณ 30,000+ user/variant เล็กลงต้องการ exponentially มากขึ้น

Significance ≠ importance Lift 0.1% บน traffic ใหญ่ "statistically significant" ได้ แต่ไม่คุ้ม ship

วิธี A/B test โกหกเราที่พบบ่อย:

- Peeking — เช็ค daily หยุดตอน significant ("p-hacking")
- Sample ratio mismatch — split 50/50 ออกมา 47/53 — ต้นน้ำพัง
- Novelty effect — user แปลกๆ ในสัปดาห์ 1 รอให้ stabilise
- Wrong granularity — test ระดับ user แต่วัดระดับ session (หรือกลับกัน)
- Underpowered test — เรียก flat result ว่า "ไม่ต่าง" ทั้งที่ sample ไม่พอจะตรวจจับ`,"m6-t3":`Cohort retention ตอบคำถาม: "user ที่ signup เดือน X, กลับมาในเดือน X+1, X+2, … ได้กี่ %"

ทำไมดีกว่า single retention rate: แยก effect ของ WHEN user join บอกได้ว่า fix ปรับ retention ของ new user ขึ้นจริงไหม หรือแค่ปั่นเลข short-term กับ veteran

วิธีสร้าง (SQL pseudocode):

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

pivot ผลให้เป็น matrix สามเหลี่ยม (row = cohort, column = month since signup) pattern แนวทแยงเผยว่า retention ลดเร็วกว่าที่ควร

Cohort retention คือ metric สุขภาพ long-term — leader สนใจ month-6 retention มากกว่า week-1 conversion`,"m6-t4":`Price elasticity of demand =  (% เปลี่ยน quantity)  /  (% เปลี่ยน price)

  |elasticity| > 1  → demand ELASTIC      ลดราคา → revenue เพิ่ม
  |elasticity| < 1  → demand INELASTIC    ขึ้นราคา → revenue เพิ่ม
  |elasticity| = 1  → revenue flat ทุกราคา

Elasticity เกือบลบเสมอ (ขึ้นราคา → demand ลด) เราเลยรายงาน absolute value

ปัจจัย real-world ที่ต้องคำนึง:
- Brand effect — premium positioning ทำให้ inelastic ได้
- Substitute — คู่แข่งห่างคลิกเดียว → elasticity สูง
- Segmentation — business traveller low-elasticity, leisure high
- Time horizon — short-run inelastic, long-run elastic (คนปรับตัว)

คำถาม pricing ที่ analyst โดน:
- ลดราคาดีไหม? คำนวณ elasticity จาก change ในอดีต ถ้า |e| > 1 ลด
- อยู่ตรงไหนใน curve? ดู A/B price experiment ถ้าไม่มีคือเดา
- เสีย revenue อยู่บนโต๊ะหรือเปล่า? เทียบ ADR + cancellation rate กับ hotel ใกล้เคียง

Lazada/Shopee ถามเรื่อง price-cut Agoda ถามเรื่อง hotel ADR optimisation`,"m6-t5":`Funnel แบ่ง user journey เดียวเป็น stage วัด drop-off แต่ละ step

E-commerce funnel:
  visit → product detail → add to cart → checkout → pay

สำหรับแต่ละคู่: step conversion = step_N / step_(N-1)

ทำไม funnel สำคัญ:
- แยกได้ว่า "เสีย user ตรงไหน" ไม่ใช่แค่ "เสีย"
- optimise step แย่ที่สุดให้ revenue impact ใหญ่ที่สุด
- เปิดเผย drop-off ที่ aggregate CR ซ่อนไว้

ระวัง:
- Time window — ต้องจบใน 1 session ไหม 1 สัปดาห์ไหม ต้องกำหนด
- user-level vs session-level — denominator ต่าง เลขต่าง
- order assumption — "cart ก่อน view" จริงไหม user จริงไปกลับไปมา
- new vs returning — funnel shape ต่างกันตาม segment

คำนวณใน SQL (sketch):
  WITH steps AS (
    SELECT user_id, MAX(event='view')     AS viewed,
                   MAX(event='cart')      AS carted,
                   MAX(event='checkout')  AS checked,
                   MAX(event='pay')       AS paid
    FROM events GROUP BY user_id
  )
  SELECT SUM(viewed), SUM(carted), SUM(checked), SUM(paid) FROM steps;`,"m6-t6":`เลขที่จะโดนถามในทุก A/B-test interview

นิยาม (ภาษาธรรมดา): "สมมุติว่า variant ไม่มีผลจริง, prob ที่จะเห็น difference อย่างน้อยขนาดที่สังเกตได้โดยบังเอิญคือเท่าไหร่"

  p-value ต่ำ (เช่น p = 0.01) → difference UNLIKELY ภายใต้ no-effect → evidence ว่า effect จริง
  p-value สูง (เช่น p = 0.4) → difference อยู่ในช่วงที่ noise ทั่วไปสร้างได้ → ไม่มี evidence

Standard threshold: p < 0.05  → "statistically significant"

P-VALUE ไม่ใช่:
- ไม่ใช่ prob ว่า variant work
- ไม่ใช่ prob ที่จะเห็นผลเดิมถ้ารัน test ใหม่
- ไม่บอกว่า effect ใหญ่แค่ไหน — บอกแค่ว่า "น่าจะ random ไหม"

2 misuse ที่สัมภาษณ์ probe:
1. PEEKING — เช็ค p daily หยุดตอน significant ทำให้ false-positive rate สูงขึ้น
2. CONFUSING SIGNIFICANCE WITH IMPORTANCE — ที่ traffic สูง p=0.0001 บน lift 0.1% ยังคงไม่คุ้ม ship (significance มาจาก n ใหญ่ ไม่ใช่ effect มีความหมาย)

senior take: "p-value คือ input หนึ่ง ต้องดู effect size, confidence interval, และ sample ratio sanity ด้วย"`,"m6-t7":`Interval ให้ภาพ EFFECT SIZE ที่ p-value อย่างเดียวไม่ให้

95% CI ของ variant lift เช่น  [+0.4%, +3.6%] อ่านว่า: "เรา 95% confident ว่า true effect อยู่ในช่วงนี้"

Interval แคบ = data มาก = confidence สูง

3 SCENARIO ที่จะเจอ:
- CI กว้าง CONTAINING 0     →  underpowered สรุปไม่ได้
- CI แคบ NOT containing 0 → effect จริง ขนาดวัดได้ใช้วางแผน
- CI ทั้งสองข้างของ 0 ใกล้ 0 →  effect อาจมีหรือไม่มี เก็บ data เพิ่ม

อ่าน CI แบบ practical:
- Lift CI: [-0.5%, +0.5%]   →  flat อย่า ship
- Lift CI: [+0.1%, +5.0%]   →  effect บวกแต่ไม่แน่ใจขนาด
- Lift CI: [+2.0%, +2.4%]   →  ship signal แรงและแคบ

INTERVAL > P-VALUE ในสัมภาษณ์ P-value binary (yes/no), CI บอก MAGNITUDE`,"m6-t8":`ก่อนรัน test ตัดสินใจว่าต้องใหญ่แค่ไหน

4 lever:
- BASELINE rate (เช่น 5% conversion)
- MINIMUM DETECTABLE EFFECT — lift เล็กที่สุดที่ care จะตรวจจับ (เช่น 10% relative lift = 5.5%)
- SIGNIFICANCE α — มักจะ 0.05
- POWER 1-β — มักจะ 0.80 — prob ที่ detect effect ถ้ามันจริง

กฎคร่าวๆ สำหรับ proportion ที่ α=0.05, power=0.80:

  effect เล็กลง หรือ baseline เล็กลง → ต้องการ sample ใหญ่ขึ้นเยอะ

  baseline 5%, detect 10% relative lift (5.0% → 5.5%) ต้องการ ≈ 30,000 per variant
  baseline 1%, detect 10% relative lift ต้องการประมาณ 150,000 per variant

Sample-size calculator (Evan Miller, statsig.com, internal tool) ทำคณิตศาสตร์ง่ายๆ skill คือรู้ว่าต้องใช้ก่อนเริ่ม test

UNDERPOWERED TEST เสียเวลา calendar โดยไม่ตัดสินใจได้ เรียก flat result ว่า "ไม่ต่าง" ทั้งที่ power = 0.30 คือ mistake ระดับ analyst เริ่มต้น`,"m6-t9":`รัน A/B test split 50/50 คาดว่าได้ 50,000 user/variant ได้ 47,212 vs 52,788

ความต่างนี้ใหญ่เกินกว่า random assignment อธิบายได้ — test BROKEN ข้อสรุปจาก SRM test UNRELIABLE ไม่ว่า p-value primary metric จะบอกอะไร

ทำไมเกิด:
- random algorithm bug (hash modulo บน key ที่ไม่ uniform)
- Cookie / client-side bucketing collision
- Bot traffic ไปฝั่งใดฝั่งหนึ่ง
- feature flag deploy ต่างเวลา
- variant หนึ่ง error → user retry → ไปอีกฝั่ง

ตรวจจับ:
- Chi-square test บน bucket count vs ratio ที่คาดหวัง
- ส่วนใหญ่ experimentation platform จะแสดง SRM warning อัตโนมัติ — เชื่อมัน

ทำอะไร:
- อย่าทำเป็น metric result ใช้ได้
- investigate bucketing pipeline คุยกับ engineering
- รันใหม่หลัง fix อย่าพูดว่า "ใกล้พอ"

นี่คือเรื่องอันดับ 1 ที่ทำให้ experiment "ชนะ" กลายเป็น rollback อันน่าอับอาย`,"m6-t10":`Launch product ใหม่ ทำเงิน $1M ทำเงินเพิ่ม $1M จริงๆ หรือแค่ย้าย $1M จาก product เก่า

นั่นคือคำถาม cannibalization

INCREMENTAL revenue   = revenue ที่จะไม่เกิดถ้าไม่ launch
CANNIBALIZED revenue  = revenue ที่ย้ายระหว่าง channel/product net change 0

วิธีวัด:
- A/B HOLDOUT — เก็บ control group ไม่ให้เห็น feature ใหม่ เทียบ TOTAL spend ไม่ใช่ feature-specific spend
- PRE/POST กับ CONTROL MARKET — เทียบ city/segment ที่ launch กับไม่ launch
- CAUSAL MODELING — diff-in-diff, synthetic control ใช้เมื่อ randomise ไม่ได้

รูปร่างคำถามสัมภาษณ์ของ Lazada / Shopee: "เรา launch flash-sale feature, GMV ใน flash-sale category +30% อยากรู้อะไรก่อนฉลอง"

คำตอบ: incrementality บางทีปกติ GMV ใน category เดียวกันลง 25% Net lift จริงคือ +5% ไม่ใช่ +30%

แยก senior analyst กับ junior คือเรื่องนี้`,"m6-t11":`ไม่ต้องเป็น forecasting expert แค่รู้จัก method

NAIVE / MOVING AVERAGE — ค่าล่าสุด หรือ mean ของ N ล่าสุด baseline, sanity check

EXPONENTIAL SMOOTHING — weighted average เน้นค่าล่าสุด มี variant:
  - Simple smoothing      (level เท่านั้น)
  - Holt                  (level + trend)
  - Holt-Winters          (level + trend + seasonality)

ARIMA — auto-regressive integrated moving average ที่ใช้กับ time series ที่ residual stationary

PROPHET (Meta) — additive decomposition กับ seasonality + holiday regressors เหมาะกับ business data

ML methods — XGBoost บน time-shifted feature, LSTM, etc. overkill สำหรับงาน analyst ส่วนใหญ่

คำถามที่ต้องถามก่อนเลือก:
- มี trend ไหม
- มี seasonality ไหม weekly? yearly?
- มี holiday effect ไหม
- ต้อง forecast ไกลกี่วัน
- ผิด 10% / 50% เสียหายเท่าไหร่

สำหรับ Shopee/Lazada/Agoda — DEMAND FORECASTING ส่วนใหญ่ใช้ Prophet หรือ seasonal-naive baseline ไม่ใช่ deep learning`,"m6-t12":`คำถามสัมภาษณ์อันดับฮิต: "GMV ลง 20% เทียบสัปดาห์ก่อน คุณทำอะไร"

5-step framework ที่ signal "ผมคิดแบบ senior analyst":

1. CONFIRM IT'S REAL
   - calculation พังไหม tracking issue?
   - comparison window ถูกไหม
   - cross-check กับ data source อิสระ

2. DECOMPOSE
   - GMV = visitors × CR × AOV factor ไหนเปลี่ยน
   - split ตาม country, category, device, new vs returning user
   - ดู conversion ระดับ funnel-step

3. SEGMENT
   - drop uniform หรือกระจุกใน segment เดียว
   - "iOS only" → app release bug
   - "TH only" → marketing change หรือ payment outage

4. CORRELATE WITH EXTERNAL
   - สัปดาห์นี้ ship อะไร product, marketing, pricing, payment
   - competitor promo? holiday? outage?
   - cross-reference change log

5. PROPOSE FIX & QUANTIFY IMPACT
   - "Rollback flag X — ประมาณการ lift +12%"
   - "เพิ่ม SKU search กลับ A/B test estimate +3%"

พูด framework นี้ DIALOG OUT LOUD ในสัมภาษณ์ ไม่ใช่แค่ "I'd look at the data" — บอกขั้นตอนเป็นชื่อ`},gd={"m1-t1":"สร้างตัวแปร customer_age ให้มีค่าเป็น integer 35 จากนั้นเขียนคำสั่งบรรทัดเดียวที่ print ชนิดข้อมูลของมันออกมา","m1-t2":"ใช้ f-string สร้างสตริง 'Welcome to BANGKOK' จากตัวแปร city = 'bangkok' โดยเรียก .upper() ภายใน {} ของ f-string","m1-t3":"คำนวณจำนวนวินาทีรวมใน 2 ชั่วโมง 15 นาที 7 วินาที โดยใช้แค่ arithmetic (ห้าม parse string) จบด้วย expression ที่แสดงค่าผลลัพธ์","m1-t4":'เขียน expression บรรทัดเดียวเช็คว่า (0.1 + 0.2) กับ 0.3 "ใกล้เคียงพอ" หรือเปล่า ใช้ math.isclose จบด้วย expression',"m1-t5":"เขียนฟังก์ชัน tier(gmv) ที่ return 'small' ถ้า gmv < 100, 'medium' ถ้า 100 <= gmv < 1000, และ 'large' ถ้า gmv >= 1000 จากนั้นเรียก tier(750) ที่ท้าย code เพื่อให้ Run แสดงผล","m1-t6":"กำหนด prices = [250, 480, 1200, 99] คำนวณยอดรวมโดยใช้ for loop จบด้วยค่ายอดรวมนั้น (รู้ว่า vectorised ดีกว่า แต่นี่คือแบบฝึก for-loop)","m1-t7":"กำหนด prices = [250, 480, 1200, 99, 1500] ใช้ while loop หา INDEX แรกที่ running total เกิน 1000 จบด้วย index นั้น","m1-t8":"เขียนฟังก์ชัน aov(gmv_list) ที่ return ค่าเฉลี่ยของ list หรือ 0 ถ้า list ว่าง จากนั้นเรียก aov([250, 480, 1200]) ที่ท้าย code เพื่อให้ Run แสดงผล","m1-t9":"เขียนฟังก์ชัน first_present(values) ที่ return ค่าแรกที่ไม่ใช่ None หรือ return None ถ้าทุกค่าเป็น None เรียกด้วย [None, None, 42, None] เพื่อให้ Run แสดงผล","m1-t10":"code ผิด:  def gmv_sum(x, y): print(x + y)  ในประโยคเดียวบอกว่าทำไมผิด แล้วเขียนเวอร์ชันที่ถูก จบด้วย  gmv_sum(250, 480) + 100","m1-t11":"เขียนฟังก์ชัน safe_int(x) ที่ return int(x) ถ้าสำเร็จ และ return None ถ้าเจอ ValueError เรียก safe_int('250') และ safe_int('oops') จบด้วย [safe_int('250'), safe_int('oops')]","m1-t12":"ใช้แค่ standard library (datetime) คำนวณจำนวนวันระหว่าง date(2025, 1, 1) ถึง date(2025, 5, 14) จบด้วยจำนวน integer นั้น","m2-t1":"กำหนด nums = [10, 20, 30, 40, 50] เขียน slice expression ที่ return [20, 30, 40] (กำหนด nums ก่อนเพื่อให้ Run ทำงาน)","m2-t2":"อธิบายในคำของคุณเอง: customer['email'] กับ customer.get('email') ต่างกันยังไงเมื่อ key 'email' ไม่มี อันไหนปลอดภัยกว่าและเพราะอะไร","m2-t3":"กำหนด prices = [250, 480, 1200, 99] return list ใหม่ที่ sort DESCENDING โดยไม่แก้ prices ของเดิม จบด้วย list ที่ sort แล้ว","m2-t4":"เขียนฟังก์ชัน minmax(values) ที่ return (min, max) เป็น tuple เรียกด้วย [3, 1, 4, 1, 5, 9, 2, 6] จบด้วยผลลัพธ์","m2-t5":"กำหนด a = [1, 2, 3, 4, 5] และ b = [4, 5, 6, 7] return list ของค่าที่อยู่ใน BOTH (intersection) ใช้ set จบด้วยผลลัพธ์","m2-t6":"กำหนด orders_by_status = {'paid': 12, 'cancelled': 3, 'pending': 7} return status ที่ count สูงสุด จบด้วย status string","m2-t7":"กำหนด defaults = {'limit': 100, 'offset': 0} และ overrides = {'limit': 50, 'sort': 'gmv'} merge ให้ overrides ชนะ โดยไม่ mutate ตัวใดตัวหนึ่ง จบด้วย merged dict","m2-t8":"กำหนด records = [{'order_id': 1, 'gmv': 250}, {'order_id': 2, 'gmv': 1800}, {'order_id': 3, 'gmv': 99}] สร้าง dict ที่ key คือ order_id และ value คือ record ทั้ง record จบด้วย dict","m2-t9":"กำหนด names = ['Don', 'Ali', 'Mei'] และ spends = [1250, 800, 1900] สร้าง list ของ dict รูปแบบ {'name': ..., 'spend': ...} ใช้ zip จบด้วย list","m2-t10":"กำหนด records = [{'id': 1, 'gmv': 250}, {'id': 2, 'gmv': 1800}, {'id': 3, 'gmv': 99}] return sorted ตาม gmv DESC จบด้วย sorted list","m2-t11":"กำหนด statuses = ['paid','paid','cancelled','paid','pending','cancelled','paid'] ใช้ Counter return 2 status ที่พบบ่อยสุดพร้อม count (list ของ tuple) จบด้วย list","m2-t12":"กำหนด orders = [{'country': 'TH', 'gmv': 250}, {'country': 'SG', 'gmv': 480}, {'country': 'TH', 'gmv': 1200}, {'country': 'MY', 'gmv': 99}, {'country': 'TH', 'gmv': 80}] ใช้ defaultdict(list) จัดกลุ่ม orders ตาม country จบด้วย dict ผลลัพธ์","m3-t1":"ใช้ orders DataFrame ที่ pre-loaded: เขียน filter ที่ return rows ที่ gmv > 500 AND country == 'TH' จบ snippet ด้วย filter expression เพื่อให้ Run แสดงผล","m3-t2":"เขียน list comprehension บน sales list ที่ pre-loaded return 10% ของแต่ละค่า (s * 0.10) จบด้วย expression เพื่อให้ Run แสดงผล","m3-t3":"กำหนด orders = [{'order_id': 1, 'gmv': 250}, {'order_id': 2, 'gmv': 1800}, {'order_id': 3, 'gmv': 99}] สร้าง dict {order_id: gmv} ด้วย dict comprehension จบด้วย dict","m3-t4":"กำหนด orders = [{'country': 'TH'}, {'country': 'SG'}, {'country': 'TH'}, {'country': 'MY'}, {'country': 'SG'}] สร้าง SET ของ country unique ด้วย set comp จบด้วย set","m3-t5":"กำหนด orders = [{'gmv': 250, 'status': 'paid'}, {'gmv': 1800, 'status': 'cancelled'}, {'gmv': 480, 'status': 'paid'}, {'gmv': 99, 'status': 'pending'}] ใช้ generator expression กับ sum() รวม gmv ของ PAID orders เท่านั้น จบด้วย sum","m3-t6":"กำหนด matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] ใช้ nested list comp flatten เป็น [1,2,3,4,5,6,7,8,9] จบด้วย flat list","m3-t7":"กำหนด gmvs = [250, 1200, 99, 1800, 480] ใช้ list comprehension กับ ternary สร้าง list ของ 'high' (>1000) หรือ 'low' จบด้วย list","m3-t8":"กำหนด orders = [{'status': 'paid'}, {'status': 'paid'}, {'status': 'cancelled'}, {'status': 'pending'}] ใช้ any() กับ generator เช็คว่ามี order ใดที่ status == 'cancelled' หรือไม่ จบด้วย boolean","m3-t9":"กำหนด orders = [{'status': 'paid'}, {'status': 'paid'}, {'status': 'cancelled'}] ใช้ walrus operator ภายใน if นับ paid orders เก็บใน n แล้ว print f'{n} paid' จบด้วยการเรียก print นั้น","m3-t10":"อธิบายสั้นๆ 1-2 ประโยค: ทำไม pandas ใช้ & แทน and เมื่อรวม row-level conditions hint — คิดถึง element-wise vs scalar","m3-t11":"ใช้ orders DataFrame ที่ pre-loaded เพิ่ม column tier ที่เป็น 'large' เมื่อ gmv > 1000 อื่นๆ 'small' ใช้ np.where จบด้วย orders[['gmv','tier']].head()","m3-t12":"ใช้ orders DataFrame ที่ pre-loaded กำหนด dict {'paid': 1, 'cancelled': 0, 'pending': 0} และใช้ .map สร้าง column ใหม่ is_paid จบด้วย orders[['status', 'is_paid']].head()","m4-t1":"สร้าง DataFrame ชื่อ bookings ที่มี 2 columns: hotel_id = [101, 102, 103] และ nights = [3, 1, 7] จบ snippet ด้วย bookings.shape เพื่อให้ Run แสดง","m4-t2":"Filter orders DataFrame ที่ pre-loaded ให้ได้ rows ที่ country == 'TH' AND gmv > 500 จบ snippet ด้วย filter expression เพื่อให้ Run แสดง","m4-t3":"ใช้ orders DataFrame ที่ pre-loaded: หา TOTAL gmv ต่อ customer นับเฉพาะ rows ที่ status == 'paid' จบด้วย result expression เพื่อให้ Run แสดง","m4-t4":"ใช้ orders และ customers DataFrames ที่ pre-loaded: LEFT MERGE ใน customer_id (ใช้ suffixes ('_ord', '_cust') เพราะมี column 'country' ทั้งสอง) จบด้วย .head() บน merged frame เพื่อให้ Run แสดง 5 แถวแรก","m4-t5":"Pivot orders DataFrame ที่ pre-loaded เป็น matrix country × status ของ TOTAL gmv ใช้ pivot_table กับ index='country', columns='status', values='gmv', aggfunc='sum', fill_value=0 จบด้วย expression เพื่อให้ Run แสดง","m4-t6":"แปลง orders['created_at'] เป็น datetime แล้ว return count ของ PAID orders ต่อเดือน (ใช้ .dt.to_period('M') หรือ resample('ME')) จบด้วย result expression เพื่อให้ Run แสดง","m4-t7":"ใช้ orders DataFrame ที่ pre-loaded return Series ของ null counts ต่อ column ใช้ .isna().sum() จบด้วย expression นั้น","m4-t8":"ใช้ orders ที่ pre-loaded เพิ่ม column gmv_vs_country_mean เท่ากับ gmv ลบ mean ของ country นั้น ผ่าน groupby('country')['gmv'].transform('mean') จบด้วย orders[['country','gmv','gmv_vs_country_mean']].head()","m4-t9":"ใช้ orders ที่ pre-loaded return rows ที่แต่ละ order อยู่ใน TOP 3 ของ country นั้นโดย gmv ใช้ groupby('country')['gmv'].rank(method='dense', ascending=False) <= 3 จบด้วย .head(10) ของ filtered frame","m4-t10":"ใช้ orders ที่ pre-loaded นับว่า category ขึ้นด้วย 'b' (case-insensitive) มีกี่ค่า ใช้ orders['category'].str.lower().str.startswith('b').sum() จบด้วย count","m4-t11":"ใช้ orders ที่ pre-loaded cast column status เป็น Categorical จบด้วย orders['status'].astype('category').cat.categories เพื่อให้ Run แสดง category index","m4-t12":"ใช้ orders ที่ pre-loaded return memory usage ต่อ column ด้วย deep counting ใช้ orders.memory_usage(deep=True) จบด้วย Series","m5-t1":"เขียน SQL query ที่ return top 5 bookings — sort ด้วย nights DESC — จาก table 'bookings' ที่ country = 'TH' แสดงเฉพาะ booking_id และ nights","m5-t2":"เขียน SQL กับ orders(customer_id, gmv, status) table ที่ return order_count และ avg gmv ต่อ customer แต่แสดงเฉพาะ customer ที่มี MORE THAN 5 orders sort by avg gmv DESC","m5-t3":"ใช้ orders table ที่ seeded เขียน SQL query ที่ return order แรกของแต่ละ customer (earliest created_at) แสดง customer_id, order_id, gmv ใช้ ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY created_at) ใน subquery หรือ CTE แล้ว filter ที่ rank = 1","m5-t4":"ใช้ CTE หา top 3 customers by total PAID gmv return customer_id, total_gmv, country (join จาก customers table) sort by total_gmv DESC limit 3","m5-t5":"หา pair ของ bookings ที่ hotel_id เดียวกัน วันเดียวกัน return a.booking_id, b.booking_id, a.hotel_id, a.created_at ใช้ trick a.booking_id < b.booking_id เพื่อให้แต่ละ pair ปรากฏครั้งเดียว (อาจ return 0 rows — ผลที่ valid ถ้าไม่มี collision)","m5-t6":"ใช้ customers และ orders return customer_ids ที่อยู่ใน customers แต่ไม่มี orders ใช้ EXCEPT","m5-t7":"เขียน SQL query ที่ return order count, paid order count, และ paid GMV ต่อ country ใน row เดียว ใช้ CASE WHEN ภายใน COUNT และ SUM group by country","m5-t8":"เขียน SQL query ที่ return AOV (avg gmv ของ PAID orders) ต่อ country ใช้ SUM(gmv) / NULLIF(COUNT(*), 0) เพื่อกัน divide by zero group by country","m5-t9":"ใช้ orders ใน sandbox return count ของ PAID orders ต่อเดือน ใช้ strftime('%Y-%m', created_at) group by month bucket sort ascending","m5-t10":"เขียน SQL query สำหรับ orders ของแต่ละ customer (sort by created_at) แสดง customer_id, order_id, gmv, prev_gmv ที่ prev_gmv คือ gmv ของ order ก่อนหน้า (NULL ใน order แรก) limit 20 rows","m5-t11":"เขียน SQL query ที่ assign แต่ละ order ไปยัง quartile (1-4) by gmv DESC ใช้ NTILE(4) return order_id, gmv, quartile limit 20 rows","m5-t12":"อธิบาย 2-3 ประโยค: ทำไมเพิ่ม INDEX บน orders.customer_id อาจทำให้ SELECT customer_id, COUNT(*) FROM orders GROUP BY customer_id เร็วขึ้น คิดถึง scan vs index lookup และว่า grouping ต้องใช้ทุก row หรือไม่","m6-t1":"สัปดาห์ก่อน GMV ลด 15% บน Shopee category page Traffic flat week-over-week จะ investigate 2 metric ไหนจาก GMV decomposition ก่อน และทำไม 1-2 ประโยค","m6-t2":"Variant B แสดง conversion 3.0% vs control 2.8%, n = 2,000 per variant ship B ไหม ให้เหตุผล 2-3 ประโยค — คิดถึง effect size, sample size, และอะไรอาจผิด","m6-t3":"อธิบายเป็นภาษาธรรมดา: column และ aggregation ไหนที่ต้องใช้สร้าง monthly cohort retention table จาก customers และ orders พูดถึง cohort definition, active-month calculation, และ shape สุดท้าย (row × column × cell value) 3-5 ประโยค","m6-t4":"Hotel ขึ้น ADR 10% bookings ลด 8% ในเดือนถัดไป price elasticity (absolute) คือเท่าไหร่ demand elastic หรือ inelastic และจะแนะนำให้คงราคาสูงไหม 2-3 ประโยค","m6-t5":"Shopee funnel สัปดาห์ก่อน: 10,000 visits → 4,000 product views → 800 carts → 600 checkouts → 400 paid drop-off ใหญ่ที่สุดใน ABSOLUTE users อยู่ที่ไหน และ step-conversion แย่ที่สุดเป็น PERCENTAGE อยู่ที่ไหน 2-3 ประโยค","m6-t6":"Test แสดง variant B มี relative lift 7%, p = 0.02 แต่มีแค่ 500 users per arm ship ไหมและทำไม 2-3 ประโยค คิดว่า p-value บอกอะไร vs ไม่บอกอะไร","m6-t7":"Test report lift +1.2% กับ 95% CI [-0.3%, +2.7%], p = 0.08 PM อยาก ship แนะนำอะไรและทำไม 2-3 ประโยค","m6-t8":"ทีมอยาก detect 5% RELATIVE lift บน baseline 3% (3.0% → 3.15%) 5,000 users per variant พอไหม คำตอบและจะบอก PM ว่าอะไร 2-3 ประโยค","m6-t9":"A/B test design 50/50 แสดง split 48% / 52% กับ 100,000 total users เชื่อ conversion comparison ได้ไหม จัสติฟายคำตอบ 2-3 ประโยค","m6-t10":"Lazada launch flash sale feature GMV ของ category +30% ในสัปดาห์ flash sale ต้องการ data เพิ่มอะไรเพื่อรู้ว่าเป็น growth จริงหรือ cannibalization 2-3 ประโยค","m6-t11":"Forecast hotel bookings 30 วันข้างหน้าสำหรับ Agoda Bookings มี weekly seasonality แข็ง (weekend > weekday) และขึ้นช่วง holidays method ไหนเริ่มก่อนและทำไม 2-3 ประโยค","m6-t12":"GMV ลด 20% week-over-week traffic flat AOV flat hypothesis คืออะไรและ data เฉพาะใดที่จะ pull ต่อ 3-4 ประโยค"},Nd="pds_prep_lang";function ip(){try{const d=localStorage.getItem(Nd);if(d==="en"||d==="th")return d}catch{}return typeof navigator<"u"&&navigator.language&&navigator.language.startsWith("th")?"th":"en"}function ap(d){try{localStorage.setItem(Nd,d)}catch{}}function dn(d,h){return d?typeof d=="string"?d:d[h]||d.en||"":""}function lp(d,h){return h==="th"&&hd[d.id]?hd[d.id]:typeof d.content=="string"?d.content:d.content?.[h]||d.content?.en||""}function ua(d,h){return h==="th"&&gd[d.id]?gd[d.id]:typeof d.exercisePrompt=="string"?d.exercisePrompt:d.exercisePrompt?.[h]||d.exercisePrompt?.en||""}const up={brandTitle:{en:"Data Analyst Prep",th:"ติว Data Analyst"},targetsLine:{en:"Targets · Shopee · Lazada · Agoda / Alooba",th:"เป้าหมาย · Shopee · Lazada · Agoda / Alooba"},builtBy:{en:"built by",th:"สร้างโดย"},courseProgress:{en:"Course progress",th:"ความคืบหน้า"},resetProgress:{en:"Reset progress",th:"รีเซ็ตความคืบหน้า"},setApiKey:{en:"Set API key",th:"ตั้งค่า API key"},changeApiKey:{en:"Change API key",th:"เปลี่ยน API key"},practice:{en:"Practice",th:"ฝึกฝน"},mockTab:{en:"Mock · 45min",th:"สอบจริง · 45 นาที"},complete:{en:"Complete",th:"จบครบ"},exercise:{en:"Exercise",th:"โจทย์"},autoGraded:{en:"Auto-graded",th:"ตรวจอัตโนมัติ"},run:{en:"Run",th:"รัน"},running:{en:"Running…",th:"กำลังรัน…"},submit:{en:"Submit",th:"ส่งคำตอบ"},grading:{en:"Grading…",th:"กำลังตรวจ…"},getHint:{en:"Get a hint",th:"ขอใบ้"},hint:{en:"Hint",th:"ใบ้"},passed:{en:"Passed",th:"ผ่าน"},needsWork:{en:"Needs work",th:"ต้องปรับปรุง"},previous:{en:"Previous",th:"ก่อนหน้า"},next:{en:"Next",th:"ถัดไป"},draftAutoSaves:{en:"Draft auto-saves in this session",th:"คำตอบบันทึกอัตโนมัติในเซสชันนี้"},writeSomethingFirst:{en:"Write something first — even a partial answer.",th:"พิมพ์อะไรลงไปก่อน — แม้แต่คำตอบไม่เต็มก็ได้"},kindPython:{en:"Python · runnable",th:"Python · รันได้"},kindSql:{en:"SQL · runnable",th:"SQL · รันได้"},kindConcept:{en:"Concept · text answer",th:"แนวคิด · ตอบเป็นข้อความ"},sandboxPython:{en:"Sandbox loaded",th:"Sandbox โหลดแล้ว"},sandboxSql:{en:"Tables",th:"ตารางที่มี"},sqliteDialect:{en:"SQLite dialect.",th:"ไวยากรณ์ SQLite"},placeholderConcept:{en:"Your answer in plain English…",th:"พิมพ์คำตอบเป็นภาษาไทยหรืออังกฤษ…"},placeholderPython:{en:"Your Python here. End with an expression to inspect it.",th:"พิมพ์ Python ที่นี่ จบด้วย expression เพื่อดูผลลัพธ์"},placeholderSql:{en:"-- Your SQL here. SQLite dialect. End with the SELECT — Run shows the rows.",th:"-- พิมพ์ SQL ที่นี่ ใช้ไวยากรณ์ SQLite จบด้วย SELECT แล้วกด Run"},runOutput:{en:"Run · output",th:"ผลการรัน"},runError:{en:"Run · error",th:"รันแล้วเจอ error"},sqlError:{en:"SQL · error",th:"SQL · error"},ranNoOutput:{en:"Ran. No output. (Tip: end your snippet with an expression to inspect it.)",th:"รันแล้วไม่มีผลลัพธ์ — จบด้วย expression เพื่อดูค่า"},queryRanNoRows:{en:"Query ran. No rows returned. (Tip: ensure your SELECT actually projects columns.)",th:"รัน query แล้วแต่ไม่มีแถวกลับมา — เช็ค SELECT ว่า project column ถูกหรือไม่"},resultRows:{en:"Result · {n} rows",th:"ผลลัพธ์ · {n} แถว"},mockTitle:{en:"Mock Assessment",th:"สอบจำลอง"},mockSubtitle:{en:"45-min · 6 questions · no hints",th:"45 นาที · 6 ข้อ · ไม่มีใบ้"},startMock:{en:"Start mock",th:"เริ่มสอบ"},backToPractice:{en:"Back to Practice",th:"กลับไปฝึกฝน"},submitAll:{en:"Submit all",th:"ส่งทั้งหมด"},submitAllAndGrade:{en:"Submit all & grade",th:"ส่งและตรวจทั้งหมด"},newMock:{en:"New mock",th:"สอบรอบใหม่"},startNewMock:{en:"Start a new mock",th:"เริ่มสอบรอบใหม่"},mockResults:{en:"Mock results",th:"ผลสอบจำลอง"},wouldPass:{en:"Would likely pass",th:"มีแนวโน้มจะผ่าน"},wouldNotPass:{en:"Would likely not pass",th:"มีแนวโน้มจะไม่ผ่าน"},answered:{en:"answered",th:"ตอบแล้ว"},promptLabel:{en:"Prompt",th:"โจทย์"},yourAnswer:{en:"Your answer",th:"คำตอบของคุณ"},feedback:{en:"Feedback",th:"ความเห็นจากผู้ตรวจ"},noAnswer:{en:"(no answer submitted)",th:"(ไม่ได้ตอบ)"},mockIntroP1:{en:"45 minutes. 6 questions.",th:"45 นาที 6 ข้อ"},mockIntroP1b:{en:"Roughly the same shape and pressure as an Alooba timed screen.",th:"รูปแบบและความกดดันใกล้เคียงกับการสอบ Alooba จริง"},mockIntroL1:{en:"· 1 pandas exercise (Module 4)",th:"· 1 ข้อ pandas (โมดูล 4)"},mockIntroL2:{en:"· 3 SQL exercises (Module 5)",th:"· 3 ข้อ SQL (โมดูล 5)"},mockIntroL3:{en:"· 2 business / stats questions (Module 6)",th:"· 2 ข้อ business / stats (โมดูล 6)"},mockIntroP2:{en:"Run is enabled, hints are off. Submit when you're done (or when the timer hits zero) and the grader scores all 6 at once with an honest pass/fail estimate.",th:"รันได้ ใบ้ไม่ได้ ส่งเมื่อพร้อม หรือรอเวลาหมด ระบบจะตรวจทั้ง 6 ข้อพร้อมประเมินว่ามีแนวโน้มจะผ่านหรือไม่"},passThreshold:{en:"Pass threshold: {n}/6. Questions are sampled freshly each session.",th:"เกณฑ์ผ่าน {n}/6 ข้อ สุ่มข้อใหม่ทุกครั้งที่เริ่มสอบ"},confirmReset:{en:"Clear all progress and drafts? This cannot be undone.",th:"ล้างความคืบหน้าและคำตอบทั้งหมด? กู้กลับไม่ได้นะ"},confirmExitMock:{en:"Abandon this mock and return to Practice mode?",th:"ยกเลิกการสอบนี้ กลับไปโหมดฝึกฝน?"},confirmNewMock:{en:"Start a fresh mock? Your current results will be cleared.",th:"เริ่มสอบรอบใหม่? ผลรอบนี้จะถูกล้าง"},graderUnavailable:{en:"Grader unavailable right now. Try again in a moment.",th:"ระบบตรวจไม่พร้อมใช้งาน ลองอีกครั้งใน 1 นาที"},hintUnavailable:{en:"Hint unavailable right now.",th:"ตอนนี้ขอใบ้ไม่ได้ ลองใหม่อีกครั้ง"},bootingPython:{en:"Booting Python…",th:"กำลังเปิด Python…"},bootingSqlite:{en:"Booting SQLite…",th:"กำลังเปิด SQLite…"},downloadingPyodide:{en:"Downloading Pyodide…",th:"กำลังดาวน์โหลด Pyodide…"},downloadingSqlite:{en:"Downloading SQLite…",th:"กำลังดาวน์โหลด SQLite…"},loadingPandas:{en:"Loading pandas…",th:"กำลังโหลด pandas…"},seedingDataset:{en:"Seeding dataset…",th:"กำลังเตรียมข้อมูลตัวอย่าง…"},seedingTables:{en:"Seeding tables…",th:"กำลังเตรียมตารางตัวอย่าง…"},module:{en:"Part",th:"ส่วนที่"}};function C(d,h,l){const x=up[d];if(!x)return d;let v=x[h]||x.en||"";if(l)for(const T in l)v=v.replaceAll(`{${T}}`,String(l[T]));return v}function dp(d){let h=d>>>0;return function(){h=h+1831565813>>>0;let l=h;return l=Math.imul(l^l>>>15,l|1),l^=l+Math.imul(l^l>>>7,l|61),((l^l>>>14)>>>0)/4294967296}}const ts=dp(42),Zo=d=>d[Math.floor(ts()*d.length)],Wt=(d,h)=>d+Math.floor(ts()*(h-d+1)),Td=["TH","TH","TH","SG","SG","MY"],cp=["paid","paid","paid","paid","cancelled","pending"],fp=["electronics","fashion","home","beauty","grocery"],_d=60,pp=200,mp=120;function da(d,h,l){const x=String(h).padStart(2,"0"),v=String(l).padStart(2,"0");return`${d}-${x}-${v}`}const ca=Array.from({length:_d},(d,h)=>({customer_id:1001+h,country:Zo(Td),signup_date:da(2024,Wt(1,12),Wt(1,28))})),Rd=Array.from({length:pp},(d,h)=>{const l=ca[Wt(0,_d-1)];return{order_id:5001+h,customer_id:l.customer_id,gmv:Number((50+ts()*2950).toFixed(2)),status:Zo(cp),country:l.country,created_at:da(2025,Wt(1,5),Wt(1,28)),category:Zo(fp)}}),hp=Array.from({length:mp},(d,h)=>{const l=Zo(Td),x=Wt(1,14),v=800+Math.floor(ts()*4200);return{booking_id:9001+h,hotel_id:200+Wt(0,19),nights:x,price:Number((x*v).toFixed(2)),country:l,created_at:da(2025,Wt(1,5),Wt(1,28))}}),gp=[120,480,75,1500,60,230,880],yp="0.26.4",Cd=`https://cdn.jsdelivr.net/pyodide/v${yp}/full/`;let Ji=null;function vp(){return new Promise((d,h)=>{if(window.loadPyodide)return d();const l="pyodide-cdn-script";if(document.getElementById(l)){const v=document.getElementById(l);v.addEventListener("load",()=>d()),v.addEventListener("error",()=>h(new Error("Pyodide script failed to load")));return}const x=document.createElement("script");x.id=l,x.src=`${Cd}pyodide.js`,x.onload=()=>d(),x.onerror=()=>h(new Error("Pyodide script failed to load")),document.head.appendChild(x)})}const xp=`
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
`;async function wp(d){d&&d("Downloading Pyodide…"),await vp(),d&&d("Booting Python…");const h=await window.loadPyodide({indexURL:Cd});return d&&d("Loading pandas…"),await h.loadPackage(["pandas"]),d&&d("Seeding dataset…"),h.globals.set("_orders_json",JSON.stringify(Rd)),h.globals.set("_customers_json",JSON.stringify(ca)),h.globals.set("_sales_json",JSON.stringify(gp)),h.runPython(`
import json
import pandas as pd

orders = pd.DataFrame(json.loads(_orders_json))
customers = pd.DataFrame(json.loads(_customers_json))
sales = json.loads(_sales_json)
`),h.runPython(xp),h.runPython(`
_user_ns = {
    'pd': pd,
    'orders': orders,
    'customers': customers,
    'sales': sales,
}
`),h}function Ep(d){return Ji||(Ji=wp(d)),Ji}async function Ld(d,h){const l=await Ep(h),x=l.globals.get("_run_user"),v=l.globals.get("_user_ns");try{const T=x(d,v),j=T.toJs({dict_converter:Object.fromEntries});return T.destroy&&T.destroy(),j}finally{x.destroy&&x.destroy(),v.destroy&&v.destroy()}}const kp="1.10.3",Od=`https://cdn.jsdelivr.net/npm/sql.js@${kp}/dist/`;let Zi=null;function Sp(){return new Promise((d,h)=>{if(window.initSqlJs)return d();const l="sqljs-cdn-script";if(document.getElementById(l)){const v=document.getElementById(l);v.addEventListener("load",()=>d()),v.addEventListener("error",()=>h(new Error("sql.js script failed to load")));return}const x=document.createElement("script");x.id=l,x.src=`${Od}sql-wasm.js`,x.onload=()=>d(),x.onerror=()=>h(new Error("sql.js script failed to load")),document.head.appendChild(x)})}const Np=`
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
`;function Tp(d){d.exec(Np);const h=(l,x)=>{const v=d.prepare(l);d.exec("BEGIN");try{for(const T of x)v.run(T);d.exec("COMMIT")}finally{v.free()}};h("INSERT INTO orders (order_id, customer_id, gmv, status, country, created_at, category) VALUES (?,?,?,?,?,?,?)",Rd.map(l=>[l.order_id,l.customer_id,l.gmv,l.status,l.country,l.created_at,l.category])),h("INSERT INTO customers (customer_id, country, signup_date) VALUES (?,?,?)",ca.map(l=>[l.customer_id,l.country,l.signup_date])),h("INSERT INTO bookings (booking_id, hotel_id, nights, price, country, created_at) VALUES (?,?,?,?,?,?)",hp.map(l=>[l.booking_id,l.hotel_id,l.nights,l.price,l.country,l.created_at]))}async function _p(d){d&&d("Downloading SQLite…"),await Sp(),d&&d("Booting SQLite…");const h=await window.initSqlJs({locateFile:x=>`${Od}${x}`}),l=new h.Database;return d&&d("Seeding tables…"),Tp(l),l}function Rp(d){return Zi||(Zi=_p(d)),Zi}async function Id(d,h){const l=await Rp(h);try{return{results:l.exec(d),error:""}}catch(x){return{results:[],error:x.message||String(x)}}}const yd=2700*1e3,Ad=4;function ea(d,h){const l=[...d],x=[];for(let v=0;v<h&&l.length;v++){const T=Math.floor(Math.random()*l.length);x.push(l.splice(T,1)[0])}return x}function Cp(d){const h=d.find(F=>F.id==="m4")?.topics||[],l=d.find(F=>F.id==="m5")?.topics||[],x=d.find(F=>F.id==="m6")?.topics||[],v=ea(h,1),T=ea(l,3),j=ea(x,2);return[...v,...T,...j]}function Lp(d){const h=d.filter(x=>x.status==="passed").length,l=d.length;return{passed:h,total:l,score:Math.round(h/l*100),verdict:h>=Ad?"would_pass":"would_not_pass"}}function Op(d){d<0&&(d=0);const h=Math.floor(d/1e3),l=Math.floor(h/60),x=h%60;return`${String(l).padStart(2,"0")}:${String(x).padStart(2,"0")}`}const Xe="#1c1917",_t="#292524",be="#3a342f",H="#44403c",Q="#ee4d2d",Ht="#f97316";function Ip({onExit:d,lang:h="en"}){const[l,x]=ne.useState(null),[v,T]=ne.useState({}),[j,F]=ne.useState({}),[U,$]=ne.useState({}),[X,Y]=ne.useState({}),[ae,Ue]=ne.useState(Date.now()),[we,de]=ne.useState(!1),[oe,We]=ne.useState(""),[Pe,Ce]=ne.useState(null);ne.useEffect(()=>{if(!l||Pe)return;const V=setInterval(()=>Ue(Date.now()),1e3);return()=>clearInterval(V)},[l,Pe]);const Ee=l?yd-(ae-l.startedAt):yd;ne.useEffect(()=>{!l||Pe||we||Ee<=0&&Ne()},[Ee,l,Pe,we]);const Le=()=>{x({questions:Cp(At),startedAt:Date.now()}),T({}),F({}),Ce(null),Ue(Date.now())},Me=async V=>{const ke=v[V.id]||"";if(ke.trim()){$(ee=>({...ee,[V.id]:!0})),Y(ee=>({...ee,[V.id]:V.kind==="sql"?"Booting SQLite…":"Booting Python…"}));try{const ee=V.kind==="sql"?await Id(ke,te=>Y(re=>({...re,[V.id]:te}))):await Ld(ke,te=>Y(re=>({...re,[V.id]:te})));F(te=>({...te,[V.id]:ee}))}catch(ee){console.error(ee),F(te=>({...te,[V.id]:V.kind==="sql"?{results:[],error:`Sandbox error: ${ee.message||ee}`}:{stdout:"",stderr:"",result:"",error:`Sandbox error: ${ee.message||ee}`}}))}finally{$(ee=>({...ee,[V.id]:!1})),Y(ee=>({...ee,[V.id]:""}))}}},Ne=async()=>{if(!(!l||Pe||we)){de(!0),We(`Grading 0/${l.questions.length}…`);try{const V=[];for(let te=0;te<l.questions.length;te++){const re=l.questions[te];We(`Grading ${te+1}/${l.questions.length}…`);try{const fe=await Sd({topic:re,submission:v[re.id]||"(no answer)",runOutput:re.kind==="concept"?void 0:j[re.id]});V.push(fe)}catch(fe){V.push({status:"needs_work",feedback:`Grader error: ${fe.message||fe}`})}}We("Generating overall takeaway…");let ke=null;try{ke=await op({questions:l.questions,grades:V})}catch{ke="(Overall takeaway unavailable — see per-question feedback below.)"}const ee=Lp(V);Ce({grades:V,summary:ke,verdict:ee,finishedAt:Date.now()})}finally{de(!1),We("")}}},Ye=()=>{window.confirm(C("confirmNewMock",h))&&(x(null),T({}),F({}),Ce(null))};if(!l)return a.jsx(Ap,{onStart:Le,onExit:d,lang:h});if(Pe)return a.jsx(bp,{session:l,drafts:v,results:Pe,onNewMock:Ye,onExit:d,lang:h});const Je=l.questions.filter(V=>(v[V.id]||"").trim().length>0).length,D=Ee<300*1e3;return a.jsxs("div",{className:"flex flex-col h-screen overflow-hidden",style:{background:Xe,color:"#f5f5f4",fontFamily:"'Plus Jakarta Sans', system-ui, sans-serif"},children:[a.jsxs("header",{className:"px-6 py-3.5 flex items-center justify-between flex-shrink-0",style:{background:_t,borderBottom:`1px solid ${H}`},children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-8 h-8 rounded-lg flex items-center justify-center",style:{background:`${Q}22`,border:`1px solid ${Q}55`},children:a.jsx(oa,{className:"w-4 h-4",style:{color:Q}})}),a.jsxs("div",{children:[a.jsx("div",{className:"text-base font-extrabold tracking-tight text-stone-100",children:C("mockTitle",h)}),a.jsx("div",{className:"text-[11px] text-stone-500 uppercase tracking-wider",children:C("mockSubtitle",h)})]})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-lg font-bold text-sm",style:{background:D?"#7f1d1d22":be,color:D?"#fca5a5":"#f97316",border:D?"1px solid #7f1d1d55":`1px solid ${H}`,fontFamily:"'JetBrains Mono', monospace"},children:[a.jsx($f,{className:"w-4 h-4"}),Op(Ee)]}),a.jsxs("div",{className:"text-xs text-stone-400 font-semibold",children:[Je,"/",l.questions.length," ",C("answered",h)]}),a.jsx("button",{onClick:Ne,disabled:we,className:"px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 disabled:opacity-60",style:{background:Q,color:"#ffffff"},children:we?a.jsxs(a.Fragment,{children:[a.jsx(Jn,{className:"w-4 h-4 animate-spin"}),oe||C("grading",h)]}):a.jsxs(a.Fragment,{children:[a.jsx(na,{className:"w-4 h-4"}),C("submitAll",h)]})}),a.jsx("button",{onClick:()=>{window.confirm(C("confirmExitMock",h))&&d()},className:"p-2 rounded-lg text-stone-500 hover:text-stone-100",style:{border:`1px solid ${H}`},children:a.jsx(kd,{className:"w-4 h-4"})})]})]}),a.jsx("div",{className:"flex-1 overflow-y-auto",children:a.jsxs("div",{className:"max-w-3xl mx-auto px-6 md:px-10 py-8 md:py-12 space-y-8",children:[l.questions.map((V,ke)=>a.jsx(Mp,{index:ke+1,total:l.questions.length,topic:V,draft:v[V.id]||"",onDraft:ee=>T(te=>({...te,[V.id]:ee})),onRun:()=>Me(V),isRunning:!!U[V.id],runStage:X[V.id]||"",runOutput:j[V.id],disabled:we,lang:h},V.id)),a.jsx("div",{className:"pb-12",children:a.jsx("button",{onClick:Ne,disabled:we,className:"w-full px-5 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-60",style:{background:Q,color:"#ffffff"},children:we?a.jsxs(a.Fragment,{children:[a.jsx(Jn,{className:"w-4 h-4 animate-spin"}),oe||C("grading",h)]}):a.jsxs(a.Fragment,{children:[a.jsx(na,{className:"w-4 h-4"}),C("submitAllAndGrade",h)]})})})]})})]})}function Ap({onStart:d,onExit:h,lang:l="en"}){return a.jsx("div",{className:"flex flex-col h-screen overflow-hidden items-center justify-center px-6",style:{background:Xe,color:"#f5f5f4",fontFamily:"'Plus Jakarta Sans', system-ui, sans-serif"},children:a.jsxs("div",{className:"max-w-xl w-full rounded-2xl p-8 md:p-10",style:{background:_t,border:`1px solid ${H}`},children:[a.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[a.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center",style:{background:`${Q}22`,border:`1px solid ${Q}55`},children:a.jsx(oa,{className:"w-5 h-5",style:{color:Q}})}),a.jsx("h1",{className:"text-3xl text-stone-100",style:{fontFamily:"'Fraunces', Georgia, serif",fontWeight:800},children:C("mockTitle",l)})]}),a.jsxs("div",{className:"space-y-3 text-[15px] text-stone-300 leading-relaxed mb-8",children:[a.jsxs("p",{children:[a.jsx("strong",{className:"text-stone-100",children:C("mockIntroP1",l)})," ",C("mockIntroP1b",l)]}),a.jsxs("ul",{className:"text-[14px] text-stone-400 space-y-1 ml-1",children:[a.jsx("li",{children:C("mockIntroL1",l)}),a.jsx("li",{children:C("mockIntroL2",l)}),a.jsx("li",{children:C("mockIntroL3",l)})]}),a.jsx("p",{children:C("mockIntroP2",l)}),a.jsx("p",{className:"text-[13px] text-stone-500",children:C("passThreshold",l,{n:Ad})})]}),a.jsxs("div",{className:"flex gap-3",children:[a.jsxs("button",{onClick:d,className:"flex-1 px-5 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2",style:{background:Q,color:"#ffffff"},children:[a.jsx(sa,{className:"w-4 h-4"}),C("startMock",l)]}),a.jsx("button",{onClick:h,className:"px-5 py-3 rounded-lg text-sm font-semibold",style:{background:"transparent",color:"#78716c",border:`1px solid ${H}`},children:C("backToPractice",l)})]})]})})}function bp({session:d,drafts:h,results:l,onNewMock:x,onExit:v,lang:T="en"}){const{grades:j,summary:F,verdict:U}=l,$=U.verdict==="would_pass";return a.jsxs("div",{className:"flex flex-col h-screen overflow-hidden",style:{background:Xe,color:"#f5f5f4",fontFamily:"'Plus Jakarta Sans', system-ui, sans-serif"},children:[a.jsxs("header",{className:"px-6 py-3.5 flex items-center justify-between flex-shrink-0",style:{background:_t,borderBottom:`1px solid ${H}`},children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-8 h-8 rounded-lg flex items-center justify-center",style:{background:`${Q}22`,border:`1px solid ${Q}55`},children:a.jsx(wd,{className:"w-4 h-4",style:{color:Q}})}),a.jsx("span",{className:"text-base font-extrabold tracking-tight text-stone-100",children:C("mockResults",T)})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsxs("button",{onClick:x,className:"px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2",style:{background:be,color:"#a8a29e",border:`1px solid ${H}`},children:[a.jsx(ta,{className:"w-3.5 h-3.5"}),C("newMock",T)]}),a.jsx("button",{onClick:v,className:"px-3 py-1.5 rounded-lg text-xs font-semibold",style:{background:"transparent",color:"#78716c",border:`1px solid ${H}`},children:C("backToPractice",T)})]})]}),a.jsx("div",{className:"flex-1 overflow-y-auto",children:a.jsxs("div",{className:"max-w-3xl mx-auto px-6 md:px-10 py-8 md:py-12 space-y-6",children:[a.jsxs("div",{className:"rounded-2xl p-6 md:p-8",style:{background:$?"#10b9811a":"#f59e0b1a",border:$?"1px solid #10b98155":"1px solid #f59e0b55"},children:[a.jsx("div",{className:"text-[11px] font-bold uppercase tracking-widest mb-2",style:{color:$?"#34d399":"#fbbf24"},children:C($?"wouldPass":"wouldNotPass",T)}),a.jsxs("div",{className:"flex items-baseline gap-3 mb-4",children:[a.jsxs("span",{className:"text-5xl",style:{fontFamily:"'Fraunces', Georgia, serif",fontWeight:800,color:$?"#34d399":"#fbbf24"},children:[U.passed,"/",U.total]}),a.jsxs("span",{className:"text-lg text-stone-400 font-semibold",children:["· ",U.score,"%"]})]}),F&&a.jsx("p",{className:"text-[15px] text-stone-200 leading-relaxed",children:F})]}),d.questions.map((X,Y)=>a.jsx(Pp,{index:Y+1,topic:X,draft:h[X.id]||"",grade:j[Y],lang:T},X.id)),a.jsxs("div",{className:"pb-12 flex gap-3",children:[a.jsxs("button",{onClick:x,className:"flex-1 px-5 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2",style:{background:Q,color:"#ffffff"},children:[a.jsx(ta,{className:"w-4 h-4"}),C("startNewMock",T)]}),a.jsx("button",{onClick:v,className:"px-5 py-3 rounded-lg text-sm font-semibold",style:{background:"transparent",color:"#78716c",border:`1px solid ${H}`},children:C("backToPractice",T)})]})]})})]})}function Pp({index:d,topic:h,draft:l,grade:x,lang:v="en"}){const T=x?.status==="passed";return a.jsxs("div",{className:"rounded-xl overflow-hidden",style:{background:_t,border:`1px solid ${H}`},children:[a.jsxs("div",{className:"px-5 py-3 flex items-center gap-3",style:{borderBottom:`1px solid ${H}`,background:be},children:[a.jsxs("span",{className:"text-[11px] font-bold uppercase tracking-wider text-stone-500",children:["Q",d," · ",h.kind]}),a.jsx("span",{className:"text-[13px] font-semibold text-stone-200 truncate",children:dn(h.title,v)}),a.jsx("span",{className:"ml-auto px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider",style:{background:T?"#10b9811a":"#f59e0b1a",color:T?"#34d399":"#fbbf24",border:T?"1px solid #10b98155":"1px solid #f59e0b55"},children:T?C("passed",v).toLowerCase():C("needsWork",v).toLowerCase()})]}),a.jsxs("div",{className:"p-5 space-y-4",children:[a.jsxs("div",{children:[a.jsx("div",{className:"text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1",children:C("promptLabel",v)}),a.jsx("p",{className:"text-[13.5px] text-stone-300 leading-relaxed",children:ua(h,v)})]}),a.jsxs("div",{children:[a.jsx("div",{className:"text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1",children:C("yourAnswer",v)}),a.jsx("pre",{className:"text-[12.5px] leading-relaxed whitespace-pre-wrap break-words p-3 rounded-md",style:{background:Xe,border:`1px solid ${H}`,fontFamily:"'JetBrains Mono', monospace",color:"#f5f5f4"},children:l.trim()||C("noAnswer",v)})]}),a.jsxs("div",{children:[a.jsx("div",{className:"text-[10px] font-bold uppercase tracking-widest mb-1",style:{color:T?"#34d399":"#fbbf24"},children:C("feedback",v)}),a.jsx("p",{className:"text-[13.5px] text-stone-200 leading-relaxed",children:x?.feedback||"(no feedback)"})]})]})]})}function Mp({index:d,total:h,topic:l,draft:x,onDraft:v,onRun:T,isRunning:j,runStage:F,runOutput:U,disabled:$,lang:X="en"}){const Y=l.kind==="python"||l.kind==="sql";return a.jsxs("div",{className:"rounded-xl overflow-hidden",style:{background:_t,border:`1px solid ${H}`},children:[a.jsxs("div",{className:"px-5 py-3 flex items-center gap-3",style:{borderBottom:`1px solid ${H}`,background:be},children:[a.jsxs("span",{className:"text-[11px] font-bold uppercase tracking-wider",style:{color:Q},children:["Q",d,"/",h]}),a.jsx("span",{className:"text-[13px] font-semibold text-stone-200 truncate",children:dn(l.title,X)}),a.jsx("span",{className:"ml-auto text-[10px] font-bold uppercase tracking-widest",style:{color:l.kind==="concept"?"#78716c":"#f97316"},children:l.kind})]}),a.jsxs("div",{className:"p-5 space-y-3",children:[a.jsx("p",{className:"text-[14.5px] text-stone-200 leading-relaxed",children:ua(l,X)}),l.kind==="python"&&a.jsxs("div",{className:"px-3 py-2 rounded-md text-[11px] text-stone-400 flex items-center gap-2",style:{background:be,border:`1px solid ${H}`},children:[a.jsx(ia,{className:"w-3.5 h-3.5",style:{color:Ht}}),a.jsxs("span",{children:["Sandbox: ",a.jsx("code",{style:{color:"#f97316"},children:"orders"}),","," ",a.jsx("code",{style:{color:"#f97316"},children:"customers"}),","," ",a.jsx("code",{style:{color:"#f97316"},children:"pd"})]})]}),l.kind==="sql"&&a.jsxs("div",{className:"px-3 py-2 rounded-md text-[11px] text-stone-400 flex items-center gap-2",style:{background:be,border:`1px solid ${H}`},children:[a.jsx(es,{className:"w-3.5 h-3.5",style:{color:Ht}}),a.jsxs("span",{children:["Tables: ",a.jsx("code",{style:{color:"#f97316"},children:"orders"}),","," ",a.jsx("code",{style:{color:"#f97316"},children:"customers"}),","," ",a.jsx("code",{style:{color:"#f97316"},children:"bookings"})]})]}),a.jsx("textarea",{className:"w-full h-36 p-4 rounded-lg outline-none resize-y",placeholder:l.kind==="concept"?C("placeholderConcept",X):l.kind==="sql"?C("placeholderSql",X):C("placeholderPython",X),value:x,onChange:ae=>v(ae.target.value),disabled:$,style:{background:Xe,border:`1px solid ${H}`,color:"#f5f5f4",fontFamily:"'JetBrains Mono', monospace",fontSize:"13.5px",lineHeight:1.6}}),Y&&a.jsx("div",{children:a.jsx("button",{onClick:T,disabled:j||$||!x.trim(),className:"px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 disabled:opacity-60",style:{background:be,color:"#f97316",border:"1px solid #f9731655"},children:j?a.jsxs(a.Fragment,{children:[a.jsx(Jn,{className:"w-4 h-4 animate-spin"}),F||C("running",X)]}):a.jsxs(a.Fragment,{children:[a.jsx(sa,{className:"w-4 h-4"}),C("run",X)]})})}),U&&a.jsx(Dp,{output:U,kind:l.kind})]})]})}function Dp({output:d,kind:h}){if(h==="sql"){if(d.error)return a.jsx("pre",{className:"mt-2 p-3 rounded-md text-[12px] whitespace-pre-wrap",style:{background:Xe,border:"1px solid #7f1d1d55",color:"#fca5a5",fontFamily:"'JetBrains Mono', monospace"},children:d.error});const x=(d.results||[])[0];return x?a.jsxs("div",{className:"mt-2 rounded-md overflow-x-auto",style:{background:Xe,border:`1px solid ${H}`},children:[a.jsxs("table",{className:"w-full text-[12px]",style:{fontFamily:"'JetBrains Mono', monospace",borderCollapse:"collapse"},children:[a.jsx("thead",{children:a.jsx("tr",{style:{background:be},children:x.columns.map(v=>a.jsx("th",{className:"text-left px-3 py-1 font-bold",style:{color:"#f97316",borderBottom:`1px solid ${H}`},children:v},v))})}),a.jsx("tbody",{children:x.values.slice(0,15).map((v,T)=>a.jsx("tr",{style:{borderBottom:`1px solid ${H}`},children:v.map((j,F)=>a.jsx("td",{className:"px-3 py-1",style:{color:j===null?"#a8a29e":"#f5f5f4"},children:j===null?"NULL":String(j)},F))},T))})]}),x.values.length>15&&a.jsxs("div",{className:"px-3 py-1 text-[11px] text-stone-500",children:["…",x.values.length-15," more rows"]})]}):a.jsx("div",{className:"text-[11px] text-stone-500 mt-1",children:"(Query ran, no rows.)"})}const l=[];return d.stdout&&l.push(["stdout",d.stdout,"#f5f5f4"]),d.result&&l.push(["result",d.result,"#f97316"]),d.stderr&&l.push(["stderr",d.stderr,"#fb923c"]),d.error&&l.push(["traceback",d.error,"#fca5a5"]),l.length===0?a.jsx("div",{className:"text-[11px] text-stone-500 mt-1",children:"(Ran. No output.)"}):a.jsx("div",{className:"mt-2 p-3 rounded-md space-y-2",style:{background:Xe,border:`1px solid ${H}`},children:l.map(([x,v,T])=>a.jsxs("div",{children:[a.jsx("div",{className:"text-[10px] font-bold uppercase tracking-widest",style:{color:T},children:x}),a.jsx("pre",{className:"text-[12px] leading-relaxed whitespace-pre-wrap break-words mt-1",style:{fontFamily:"'JetBrains Mono', monospace",color:"#f5f5f4",margin:0},children:v})]},x))})}const jp={Code2:qf,Database:es,BarChart3:Gf,Layers:Kf,GitBranch:Qf,Briefcase:Vf};function Fp(){const[d,h]=ne.useState("practice"),[l,x]=ne.useState({modId:At[0].id,topId:At[0].topics[0].id}),[v,T]=ne.useState({}),[j,F]=ne.useState({}),[U,$]=ne.useState({}),[X,Y]=ne.useState(""),[ae,Ue]=ne.useState(!1),[we,de]=ne.useState(!1),[oe,We]=ne.useState(!1),[Pe,Ce]=ne.useState(""),[Ee,Le]=ne.useState(""),[Me,Ne]=ne.useState(!1),[Ye,Je]=ne.useState(()=>!Jo()),[D,V]=ne.useState(ip),ke=ne.useRef(null),ee=P=>{V(P),ap(P)};if(ne.useEffect(()=>{const P="course-platform-fonts";if(document.getElementById(P))return;const se=document.createElement("link");se.id=P,se.rel="stylesheet",se.href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap",document.head.appendChild(se)},[]),ne.useEffect(()=>{Y(""),Le(""),Ce(""),ke.current&&(ke.current.scrollTop=0)},[l.topId]),d==="mock")return a.jsx(Ip,{onExit:()=>h("practice"),lang:D});const te=At.find(P=>P.id===l.modId),re=te.topics.find(P=>P.id===l.topId),fe=v[re.id],ce=j[re.id]??fe?.code??"",_=U[re.id],A=re.kind||"concept",L=At.reduce((P,se)=>P+se.topics.length,0),p=Object.values(v).filter(P=>P.status==="passed").length,w=Math.round(p/L*100)||0,G=(P,se)=>{x({modId:P,topId:se}),Ne(!1)},q=()=>{const P=At.findIndex(Oe=>Oe.id===l.modId),se=te.topics.findIndex(Oe=>Oe.id===l.topId);let vt=null,bt=null;if(se>0)vt={modId:l.modId,topId:te.topics[se-1].id};else if(P>0){const Oe=At[P-1];vt={modId:Oe.id,topId:Oe.topics[Oe.topics.length-1].id}}if(se<te.topics.length-1)bt={modId:l.modId,topId:te.topics[se+1].id};else if(P<At.length-1){const Oe=At[P+1];bt={modId:Oe.id,topId:Oe.topics[0].id}}return{prev:vt,next:bt}},{prev:J,next:Z}=q(),me=async()=>{if(!ce.trim()){Le(C("writeSomethingFirst",D));return}We(!0),Le(""),Ce(A==="sql"?"Booting SQLite…":"Booting Python…");try{const P=A==="sql"?await Id(ce,se=>Ce(se)):await Ld(ce,se=>Ce(se));$(se=>({...se,[re.id]:P}))}catch(P){console.error(P),$(se=>({...se,[re.id]:A==="sql"?{results:[],error:`Sandbox error: ${P.message||P}`}:{stdout:"",stderr:"",result:"",error:`Sandbox error: ${P.message||P}`}}))}finally{We(!1),Ce("")}},ue=async()=>{if(!ce.trim()){Le(C("writeSomethingFirst",D));return}Ue(!0),Le(""),Y("");try{const P=await Sd({topic:re,submission:ce,runOutput:A==="concept"?void 0:_});T(se=>({...se,[re.id]:{code:ce,status:P.status,feedback:P.feedback}}))}catch(P){console.error(P),Le(P.message||C("graderUnavailable",D))}finally{Ue(!1)}},he=async()=>{de(!0),Y("");try{const P=await sp({topic:re});Y(P)}catch{Y(C("hintUnavailable",D))}finally{de(!1)}},Ze=()=>{window.confirm(C("confirmReset",D))&&(T({}),F({}),$({}),Y(""),Le(""))};return a.jsxs("div",{className:"flex h-screen overflow-hidden",style:{background:Xe,color:"#f5f5f4",fontFamily:"'Plus Jakarta Sans', system-ui, sans-serif"},children:[Ye&&a.jsx(Up,{onSave:P=>{tp(P),Je(!1)},onClose:()=>Je(!1),onClear:()=>{np(),Je(!1)},hasExisting:!!Jo()}),a.jsx("div",{className:`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 md:hidden ${Me?"opacity-100":"opacity-0 pointer-events-none"}`,onClick:()=>Ne(!1)}),a.jsxs("aside",{className:`fixed inset-y-0 left-0 w-80 z-50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 overflow-y-auto ${Me?"translate-x-0":"-translate-x-full"}`,style:{background:_t,borderRight:`1px solid ${H}`},children:[a.jsxs("div",{className:"p-6",style:{borderBottom:`1px solid ${H}`},children:[a.jsxs("div",{className:"flex items-center justify-between mb-1",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"w-8 h-8 rounded-lg flex items-center justify-center",style:{background:`${Q}22`,border:`1px solid ${Q}55`},children:a.jsx(oa,{className:"w-4 h-4",style:{color:Q}})}),a.jsx("span",{className:"text-base font-extrabold tracking-tight text-stone-100",children:C("brandTitle",D)})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("button",{onClick:()=>ee(D==="en"?"th":"en"),className:"px-2 py-1 rounded text-[11px] font-bold tracking-wider",style:{background:be,color:Ht,border:`1px solid ${H}`},title:"Toggle language / สลับภาษา",children:D==="en"?"EN · TH":"TH · EN"}),a.jsx("button",{className:"md:hidden text-stone-500 hover:text-stone-100",onClick:()=>Ne(!1),children:a.jsx(kd,{className:"w-5 h-5"})})]})]}),a.jsx("div",{className:"text-[11px] font-semibold text-stone-500 tracking-wider uppercase mt-3",children:C("targetsLine",D)}),a.jsxs("div",{className:"text-[10px] text-stone-500 mt-1.5",children:[C("builtBy",D)," ",a.jsx("a",{href:"https://github.com/pacharadon",target:"_blank",rel:"noreferrer",style:{color:Ht,textDecoration:"none"},children:"danny_pachara_DS"})]}),a.jsxs("div",{className:"mt-4 flex p-0.5 rounded-lg",style:{background:be,border:`1px solid ${H}`},children:[a.jsx("button",{onClick:()=>h("practice"),className:"flex-1 px-3 py-1.5 rounded-md text-xs font-bold transition-colors",style:d==="practice"?{background:Q,color:"#ffffff"}:{background:"transparent",color:"#78716c"},children:C("practice",D)}),a.jsx("button",{onClick:()=>h("mock"),className:"flex-1 px-3 py-1.5 rounded-md text-xs font-bold transition-colors flex items-center justify-center gap-1.5",style:d==="mock"?{background:Q,color:"#ffffff"}:{background:"transparent",color:"#78716c"},children:C("mockTab",D)})]}),a.jsxs("div",{className:"mt-5",children:[a.jsxs("div",{className:"flex justify-between items-baseline text-xs mb-2",children:[a.jsx("span",{className:"text-stone-400 font-medium",children:C("courseProgress",D)}),a.jsxs("span",{className:"font-bold",style:{color:Q},children:[p,"/",L," · ",w,"%"]})]}),a.jsx("div",{className:"w-full h-1.5 rounded-full overflow-hidden",style:{background:be},children:a.jsx("div",{className:"h-full rounded-full transition-all duration-500",style:{width:`${w}%`,background:Q}})})]})]}),a.jsxs("nav",{className:"p-4",children:[At.map((P,se)=>{const vt=jp[P.icon]||pd,bt=P.topics.filter(Oe=>v[Oe.id]?.status==="passed").length;return a.jsxs("div",{className:"mb-5",children:[a.jsxs("div",{className:"flex items-center gap-2 px-2 mb-2",children:[a.jsx(vt,{className:"w-3.5 h-3.5 text-stone-400"}),a.jsxs("h2",{className:"text-[10px] font-bold text-stone-500 uppercase tracking-wider",children:[C("module",D)," ",se+1," · ",dn(P.title,D)]}),a.jsxs("span",{className:"text-[10px] text-stone-500 ml-auto",children:[bt,"/",P.topics.length]})]}),a.jsx("div",{className:"space-y-0.5",children:P.topics.map(Oe=>{const cn=l.topId===Oe.id,Tn=v[Oe.id]?.status;return a.jsxs("button",{onClick:()=>G(P.id,Oe.id),className:"w-full text-left px-3 py-2 rounded-md flex items-center gap-3 transition-colors",style:cn?{background:`${Q}1a`,color:Q,border:`1px solid ${Q}44`}:{background:"transparent",color:"#78716c",border:"1px solid transparent"},onMouseEnter:_n=>{cn||(_n.currentTarget.style.background=be)},onMouseLeave:_n=>{cn||(_n.currentTarget.style.background="transparent")},children:[Tn==="passed"?a.jsx(fd,{className:"w-4 h-4 flex-shrink-0",style:{color:"#10b981"}}):Tn==="needs_work"?a.jsx(Xo,{className:"w-4 h-4 flex-shrink-0",style:{color:"#f59e0b"}}):a.jsx(pd,{className:"w-4 h-4 flex-shrink-0",style:{color:cn?Ht:"#404040"}}),a.jsx("span",{className:"text-sm font-medium truncate",children:dn(Oe.title,D)})]},Oe.id)})})]},P.id)}),a.jsxs("button",{onClick:()=>Je(!0),className:"w-full mt-4 px-3 py-2 rounded-md flex items-center gap-2 text-xs text-stone-500 hover:text-stone-200 transition-colors",style:{background:be,border:`1px solid ${H}`},children:[a.jsx(Ed,{className:"w-3.5 h-3.5"}),Jo()?C("changeApiKey",D):C("setApiKey",D)]}),a.jsxs("button",{onClick:Ze,className:"w-full mt-2 px-3 py-2 rounded-md flex items-center gap-2 text-xs text-stone-500 hover:text-stone-200 transition-colors",style:{background:be,border:`1px solid ${H}`},children:[a.jsx(ta,{className:"w-3.5 h-3.5"}),C("resetProgress",D)]})]})]}),a.jsxs("main",{className:"flex-1 flex flex-col h-screen overflow-hidden",children:[a.jsxs("header",{className:"px-6 py-3.5 flex items-center justify-between flex-shrink-0",style:{background:_t,borderBottom:`1px solid ${H}`},children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("button",{className:"md:hidden text-stone-400 hover:text-stone-100",onClick:()=>Ne(!0),children:a.jsx(Xf,{className:"w-5 h-5"})}),a.jsxs("div",{className:"hidden sm:flex text-xs text-stone-500 items-center gap-2",children:[a.jsx("span",{children:dn(te.title,D)}),a.jsx(cd,{className:"w-3 h-3"}),a.jsx("span",{className:"text-stone-200 font-semibold",children:dn(re.title,D)})]})]}),w===100&&a.jsxs("div",{className:"flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold",style:{background:"#10b98122",color:"#34d399",border:"1px solid #10b98155"},children:[a.jsx(wd,{className:"w-3.5 h-3.5"}),C("complete",D)]})]}),a.jsx("div",{className:"flex-1 overflow-y-auto",ref:ke,children:a.jsxs("div",{className:"max-w-3xl mx-auto px-6 md:px-10 py-10 md:py-14",children:[a.jsxs("div",{className:"mb-5 flex items-center gap-2",children:[a.jsx("span",{className:"inline-block text-[11px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full",style:{color:Q,background:`${Q}14`,border:`1px solid ${Q}44`},children:dn(te.title,D)}),a.jsx(Bp,{kind:A,lang:D})]}),a.jsx("h1",{className:"text-4xl md:text-5xl tracking-tight text-stone-100 mb-8 leading-[1.05]",style:{fontFamily:"'Fraunces', Georgia, serif",fontWeight:800},children:dn(re.title,D)}),a.jsx("div",{className:"mb-10",children:lp(re,D).split(`

`).map((P,se)=>/^\s{2,}/.test(P)||/^[a-z_]+\s*=/m.test(P)||/SELECT|FROM|WHERE/.test(P)||/df\./.test(P)?a.jsx("pre",{className:"my-5 p-4 rounded-lg text-[13px] leading-relaxed overflow-x-auto",style:{background:_t,border:`1px solid ${H}`,fontFamily:"'JetBrains Mono', monospace",color:"#f5f5f4"},children:P},se):a.jsx("p",{className:"my-4 text-[15.5px] leading-[1.75] text-stone-300",children:P},se))}),a.jsxs("div",{className:"rounded-xl overflow-hidden mb-8",style:{background:_t,border:`1px solid ${H}`},children:[a.jsxs("div",{className:"px-5 py-3 flex items-center gap-2",style:{borderBottom:`1px solid ${H}`,background:be},children:[a.jsx(Zf,{className:"w-4 h-4",style:{color:Q}}),a.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-stone-300",children:C("exercise",D)}),a.jsxs("span",{className:"ml-auto text-[11px] text-stone-500 flex items-center gap-1",children:[a.jsx(Jf,{className:"w-3 h-3",style:{color:Q}}),C("autoGraded",D)]})]}),a.jsxs("div",{className:"p-5 md:p-6",children:[a.jsx("p",{className:"text-[15px] text-stone-200 mb-4 leading-relaxed",children:ua(re,D)}),A==="python"&&a.jsxs("div",{className:"mb-3 px-3 py-2 rounded-md text-[11px] text-stone-400 flex items-center gap-2",style:{background:be,border:`1px solid ${H}`},children:[a.jsx(ia,{className:"w-3.5 h-3.5",style:{color:Ht}}),a.jsxs("span",{children:["Sandbox loaded: ",a.jsx("code",{style:{color:"#f97316"},children:"orders"})," (200 rows) ·"," ",a.jsx("code",{style:{color:"#f97316"},children:"customers"})," (60 rows) ·"," ",a.jsx("code",{style:{color:"#f97316"},children:"sales"})," (list) · ",a.jsx("code",{style:{color:"#f97316"},children:"pd"})]})]}),A==="sql"&&a.jsxs("div",{className:"mb-3 px-3 py-2 rounded-md text-[11px] text-stone-400 flex items-center gap-2",style:{background:be,border:`1px solid ${H}`},children:[a.jsx(es,{className:"w-3.5 h-3.5",style:{color:Ht}}),a.jsxs("span",{children:["Tables: ",a.jsx("code",{style:{color:"#f97316"},children:"orders"})," (200) ·"," ",a.jsx("code",{style:{color:"#f97316"},children:"customers"})," (60) ·"," ",a.jsx("code",{style:{color:"#f97316"},children:"bookings"})," (120). SQLite dialect."]})]}),a.jsx("textarea",{className:"w-full h-44 md:h-52 p-4 rounded-lg outline-none resize-y",placeholder:C(A==="sql"?"placeholderSql":A==="concept"?"placeholderConcept":"placeholderPython",D),value:ce,onChange:P=>F(se=>({...se,[re.id]:P.target.value})),style:{background:Xe,border:`1px solid ${H}`,color:"#f5f5f4",fontFamily:"'JetBrains Mono', monospace",fontSize:"13.5px",lineHeight:1.6}}),a.jsxs("div",{className:"mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-wrap",children:[(A==="python"||A==="sql")&&a.jsx("button",{onClick:me,disabled:oe,className:"px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-60",style:{background:be,color:"#f97316",border:"1px solid #f9731655"},children:oe?a.jsxs(a.Fragment,{children:[a.jsx(Jn,{className:"w-4 h-4 animate-spin"}),Pe||C("running",D)]}):a.jsxs(a.Fragment,{children:[a.jsx(sa,{className:"w-4 h-4"}),C("run",D)]})}),a.jsx("button",{onClick:ue,disabled:ae,className:"px-5 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-60",style:{background:Q,color:"#ffffff"},children:ae?a.jsxs(a.Fragment,{children:[a.jsx(Jn,{className:"w-4 h-4 animate-spin"}),C("grading",D)]}):a.jsxs(a.Fragment,{children:[a.jsx(na,{className:"w-4 h-4"}),C("submit",D)]})}),a.jsxs("button",{onClick:he,disabled:we,className:"px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-60",style:{background:"transparent",color:"#78716c",border:`1px solid ${H}`},children:[we?a.jsx(Jn,{className:"w-4 h-4 animate-spin"}):a.jsx(md,{className:"w-4 h-4"}),C("getHint",D)]}),a.jsx("span",{className:"text-[11px] text-stone-500 sm:ml-auto",children:C("draftAutoSaves",D)})]}),_&&A==="python"&&a.jsx(zp,{output:_}),_&&A==="sql"&&a.jsx(Hp,{output:_}),Ee&&a.jsxs("div",{className:"mt-5 p-3 rounded-lg text-sm flex items-start gap-2",style:{background:"#7f1d1d22",border:"1px solid #7f1d1d55",color:"#fca5a5"},children:[a.jsx(Xo,{className:"w-4 h-4 flex-shrink-0 mt-0.5"}),Ee]}),X&&a.jsxs("div",{className:"mt-5 p-4 rounded-lg flex items-start gap-3",style:{background:`${Q}10`,border:`1px solid ${Q}44`},children:[a.jsx(md,{className:"w-5 h-5 flex-shrink-0 mt-0.5",style:{color:Q}}),a.jsxs("div",{children:[a.jsx("div",{className:"text-[11px] font-bold uppercase tracking-wider mb-1",style:{color:Q},children:C("hint",D)}),a.jsx("p",{className:"text-sm text-stone-200 leading-relaxed",children:X})]})]}),fe&&fe.status&&!ae&&a.jsxs("div",{className:"mt-5 p-4 rounded-lg flex items-start gap-3",style:{background:fe.status==="passed"?"#10b9811a":"#f59e0b1a",border:fe.status==="passed"?"1px solid #10b98155":"1px solid #f59e0b55"},children:[fe.status==="passed"?a.jsx(fd,{className:"w-5 h-5 flex-shrink-0 mt-0.5",style:{color:"#34d399"}}):a.jsx(Xo,{className:"w-5 h-5 flex-shrink-0 mt-0.5",style:{color:"#fbbf24"}}),a.jsxs("div",{children:[a.jsx("div",{className:"text-[11px] font-bold uppercase tracking-wider mb-1",style:{color:fe.status==="passed"?"#34d399":"#fbbf24"},children:fe.status==="passed"?C("passed",D):C("needsWork",D)}),a.jsx("p",{className:"text-sm text-stone-200 leading-relaxed",children:fe.feedback})]})]})]})]}),a.jsxs("div",{className:"flex items-center justify-between pt-2 pb-12",children:[a.jsxs("button",{onClick:()=>J&&G(J.modId,J.topId),disabled:!J,className:"px-4 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors disabled:opacity-30 disabled:cursor-not-allowed",style:{background:"transparent",color:"#78716c",border:`1px solid ${H}`},children:[a.jsx(Yf,{className:"w-4 h-4"}),C("previous",D)]}),a.jsxs("button",{onClick:()=>Z&&G(Z.modId,Z.topId),disabled:!Z,className:"px-4 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors disabled:opacity-30 disabled:cursor-not-allowed",style:{background:Q,color:"#ffffff"},children:[C("next",D),a.jsx(cd,{className:"w-4 h-4"})]})]})]})})]})]})}function Up({onSave:d,onClose:h,onClear:l,hasExisting:x}){const[v,T]=ne.useState(""),j=v.trim(),F=j.startsWith("sk-ant-")&&j.length>30;return a.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center px-4",style:{background:"rgba(0,0,0,0.65)"},children:a.jsxs("div",{className:"max-w-md w-full rounded-2xl p-7",style:{background:_t,border:`1px solid ${H}`},children:[a.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[a.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center",style:{background:`${Q}22`,border:`1px solid ${Q}55`},children:a.jsx(Ed,{className:"w-5 h-5",style:{color:Q}})}),a.jsx("h2",{className:"text-xl text-stone-100",style:{fontFamily:"'Fraunces', Georgia, serif",fontWeight:800},children:x?"Update API key":"Set your API key"})]}),a.jsxs("div",{className:"text-[13.5px] text-stone-300 leading-relaxed mb-4 space-y-2",children:[a.jsxs("p",{children:["Grading, hints, and mock summaries call an external model API. The key stays in your browser (",a.jsx("code",{style:{color:Ht},children:"localStorage"}),") — it never leaves your machine except in the outbound model request."]}),a.jsxs("p",{className:"text-[12.5px] text-stone-400",children:["Get a key at"," ",a.jsx("a",{href:"https://console.anthropic.com/settings/keys",target:"_blank",rel:"noreferrer",style:{color:Ht,textDecoration:"underline"},children:"console.anthropic.com/settings/keys"})," ","(the model identifier the app sends is configurable in ",a.jsx("code",{children:"src/api/grader.js"}),")."]})]}),a.jsx("input",{type:"password",autoFocus:!0,value:v,onChange:U=>T(U.target.value),onKeyDown:U=>{U.key==="Enter"&&F&&d(j)},placeholder:"sk-ant-api03-...",className:"w-full p-3 rounded-lg outline-none",style:{background:Xe,border:`1px solid ${H}`,color:"#f5f5f4",fontFamily:"'JetBrains Mono', monospace",fontSize:"13px"}}),v&&!F&&a.jsxs("div",{className:"mt-2 text-[11px]",style:{color:"#fbbf24"},children:["Keys start with ",a.jsx("code",{children:"sk-ant-"})," and are longer than that."]}),a.jsxs("div",{className:"mt-5 flex gap-2",children:[a.jsx("button",{onClick:()=>d(j),disabled:!F,className:"flex-1 px-4 py-2.5 rounded-lg text-sm font-bold disabled:opacity-50",style:{background:Q,color:"#ffffff"},children:"Save"}),x&&a.jsx("button",{onClick:l,className:"px-4 py-2.5 rounded-lg text-sm font-semibold",style:{background:"transparent",color:"#fca5a5",border:"1px solid #7f1d1d55"},children:"Clear"}),a.jsx("button",{onClick:h,className:"px-4 py-2.5 rounded-lg text-sm font-semibold",style:{background:"transparent",color:"#a8a29e",border:`1px solid ${H}`},children:x?"Cancel":"Skip"})]}),!x&&a.jsx("p",{className:"mt-4 text-[11px] text-stone-500",children:"You can skip and browse the curriculum, but Submit / Get a hint / Mock-grading will fail until a key is set."})]})})}function Bp({kind:d,lang:h}){const l={python:"#f97316",sql:"#f97316",concept:"#78716c"},v={label:C(d==="python"?"kindPython":d==="sql"?"kindSql":"kindConcept",h||"en"),color:l[d]||l.concept};return a.jsx("span",{className:"inline-block text-[11px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full",style:{color:v.color,background:`${v.color}14`,border:`1px solid ${v.color}44`},children:v.label})}function zp({output:d}){const{stdout:h,stderr:l,result:x,error:v}=d;return h||l||x||v?a.jsxs("div",{className:"mt-5 rounded-lg overflow-hidden",style:{background:Xe,border:`1px solid ${H}`},children:[a.jsxs("div",{className:"px-4 py-2 flex items-center gap-2",style:{background:be,borderBottom:`1px solid ${H}`},children:[a.jsx(ia,{className:"w-3.5 h-3.5",style:{color:v?"#fca5a5":"#f97316"}}),a.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-stone-400",children:v?"Run · error":"Run · output"})]}),a.jsxs("div",{className:"p-4 space-y-3",children:[h&&a.jsx(Ko,{label:"stdout",body:h,color:"#e5e5e5"}),x&&a.jsx(Ko,{label:"result",body:x,color:"#fcd34d"}),l&&a.jsx(Ko,{label:"stderr",body:l,color:"#fb923c"}),v&&a.jsx(Ko,{label:"traceback",body:v,color:"#fca5a5"})]})]}):a.jsx("div",{className:"mt-5 p-4 rounded-lg text-xs text-stone-500",style:{background:Xe,border:`1px solid ${H}`},children:"Ran. No output. (Tip: end your snippet with an expression to inspect it.)"})}function Hp({output:d}){const{results:h,error:l}=d;return l?a.jsxs("div",{className:"mt-5 rounded-lg overflow-hidden",style:{background:Xe,border:"1px solid #7f1d1d55"},children:[a.jsxs("div",{className:"px-4 py-2 flex items-center gap-2",style:{background:be,borderBottom:`1px solid ${H}`},children:[a.jsx(Xo,{className:"w-3.5 h-3.5",style:{color:"#fca5a5"}}),a.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider",style:{color:"#fca5a5"},children:"SQL · error"})]}),a.jsx("pre",{className:"p-4 text-[12.5px] leading-relaxed whitespace-pre-wrap break-words",style:{fontFamily:"'JetBrains Mono', monospace",color:"#fca5a5",margin:0},children:l})]}):!h||h.length===0?a.jsx("div",{className:"mt-5 p-4 rounded-lg text-xs text-stone-500",style:{background:Xe,border:`1px solid ${H}`},children:"Query ran. No rows returned. (Tip: ensure your SELECT actually projects columns.)"}):a.jsx("div",{className:"mt-5 space-y-4",children:h.map((x,v)=>a.jsx(Wp,{columns:x.columns,values:x.values,index:v+1,total:h.length},v))})}function Wp({columns:d,values:h,index:l,total:x}){const T=h.slice(0,50),j=h.length>50;return a.jsxs("div",{className:"rounded-lg overflow-hidden",style:{background:Xe,border:`1px solid ${H}`},children:[a.jsxs("div",{className:"px-4 py-2 flex items-center gap-2",style:{background:be,borderBottom:`1px solid ${H}`},children:[a.jsx(es,{className:"w-3.5 h-3.5",style:{color:"#f97316"}}),a.jsxs("span",{className:"text-[11px] font-bold uppercase tracking-wider text-stone-400",children:[x>1?`Result ${l}/${x} · `:"Result · ",h.length," ",h.length===1?"row":"rows",j?" (showing first 50)":""]})]}),a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full text-[12.5px]",style:{fontFamily:"'JetBrains Mono', monospace",borderCollapse:"collapse"},children:[a.jsx("thead",{children:a.jsx("tr",{style:{background:_t},children:d.map(F=>a.jsx("th",{className:"text-left px-3 py-1.5 font-bold",style:{color:"#f97316",borderBottom:`1px solid ${H}`},children:F},F))})}),a.jsx("tbody",{children:T.map((F,U)=>a.jsx("tr",{style:{borderBottom:`1px solid ${H}`},children:F.map(($,X)=>a.jsx("td",{className:"px-3 py-1.5",style:{color:$===null?"#57534e":"#f5f5f4"},children:$===null?"NULL":String($)},X))},U))})]})})]})}function Ko({label:d,body:h,color:l}){return a.jsxs("div",{children:[a.jsx("div",{className:"text-[10px] font-bold uppercase tracking-widest mb-1",style:{color:l},children:d}),a.jsx("pre",{className:"text-[12.5px] leading-relaxed whitespace-pre-wrap break-words",style:{fontFamily:"'JetBrains Mono', monospace",color:"#f5f5f4",margin:0},children:h})]})}Bf.createRoot(document.getElementById("root")).render(a.jsx(bf.StrictMode,{children:a.jsx(Fp,{})}));
