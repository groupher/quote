!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Quote=t():e.Quote=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=8)}([function(e,t,n){window,e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=7)}([function(e,t){function n(e,t,n){var o,r,i,a,c;function s(){var u=Date.now()-a;u<t&&u>=0?o=setTimeout(s,t-u):(o=null,n||(c=e.apply(i,r),i=r=null))}null==t&&(t=100);var u=function(){i=this,r=arguments,a=Date.now();var u=n&&!o;return o||(o=setTimeout(s,t)),u&&(c=e.apply(i,r),i=r=null),c};return u.clear=function(){o&&(clearTimeout(o),o=null)},u.flush=function(){o&&(c=e.apply(i,r),i=r=null,clearTimeout(o),o=null)},u}n.debounce=n,e.exports=n},function(e,t,n){(function(o){t.log=function(...e){return"object"==typeof console&&console.log&&console.log(...e)},t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let o=0,r=0;t[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&"%c"===e&&(r=++o)}),t.splice(r,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}return!e&&void 0!==o&&"env"in o&&(e=o.env.DEBUG),e},t.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},t.storage=function(){try{return localStorage}catch(e){}}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.exports=n(4)(t);const{formatters:r}=e.exports;r.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}}).call(this,n(3))},function(e,t,n){(function(e){!function(n,o){"use strict";var r={};n.PubSub=r;var i=n.define;!function(e){var t={},n=-1;function o(e){var t;for(t in e)if(e.hasOwnProperty(t))return!0;return!1}function r(e,t,n){try{e(t,n)}catch(e){setTimeout(function(e){return function(){throw e}}(e),0)}}function i(e,t,n){e(t,n)}function a(e,n,o,a){var c,s=t[n],u=a?i:r;if(t.hasOwnProperty(n))for(c in s)s.hasOwnProperty(c)&&u(s[c],e,o)}function c(e,n,r,i){var c=function(e,t,n){return function(){var o=String(e),r=o.lastIndexOf(".");for(a(e,e,t,n);-1!==r;)r=(o=o.substr(0,r)).lastIndexOf("."),a(e,o,t,n)}}(e="symbol"==typeof e?e.toString():e,n,i);return!!function(e){for(var n=String(e),r=Boolean(t.hasOwnProperty(n)&&o(t[n])),i=n.lastIndexOf(".");!r&&-1!==i;)i=(n=n.substr(0,i)).lastIndexOf("."),r=Boolean(t.hasOwnProperty(n)&&o(t[n]));return r}(e)&&(!0===r?c():setTimeout(c,0),!0)}e.publish=function(t,n){return c(t,n,!1,e.immediateExceptions)},e.publishSync=function(t,n){return c(t,n,!0,e.immediateExceptions)},e.subscribe=function(e,o){if("function"!=typeof o)return!1;e="symbol"==typeof e?e.toString():e,t.hasOwnProperty(e)||(t[e]={});var r="uid_"+String(++n);return t[e][r]=o,r},e.subscribeOnce=function(t,n){var o=e.subscribe(t,(function(){e.unsubscribe(o),n.apply(this,arguments)}));return e},e.clearAllSubscriptions=function(){t={}},e.clearSubscriptions=function(e){var n;for(n in t)t.hasOwnProperty(n)&&0===n.indexOf(e)&&delete t[n]},e.countSubscriptions=function(e){var n,o=0;for(n in t)t.hasOwnProperty(n)&&0===n.indexOf(e)&&o++;return o},e.getSubscriptions=function(e){var n,o=[];for(n in t)t.hasOwnProperty(n)&&0===n.indexOf(e)&&o.push(n);return o},e.unsubscribe=function(n){var o,r,i,a="string"==typeof n&&(t.hasOwnProperty(n)||function(e){var n;for(n in t)if(t.hasOwnProperty(n)&&0===n.indexOf(e))return!0;return!1}(n)),c=!a&&"string"==typeof n,s="function"==typeof n,u=!1;if(!a){for(o in t)if(t.hasOwnProperty(o)){if(r=t[o],c&&r[n]){delete r[n],u=n;break}if(s)for(i in r)r.hasOwnProperty(i)&&r[i]===n&&(delete r[i],u=!0)}return u}e.clearSubscriptions(n)}}(r),"function"==typeof i&&i.amd?i((function(){return r})):(void 0!==e&&e.exports&&(t=e.exports=r),t.PubSub=r,e.exports=t=r)}("object"==typeof window&&window||this)}).call(this,n(6)(e))},function(e,t){var n,o,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(e){o=a}}();var s,u=[],l=!1,d=-1;function f(){l&&s&&(l=!1,s.length?u=s.concat(u):d=-1,u.length&&p())}function p(){if(!l){var e=c(f);l=!0;for(var t=u.length;t;){for(s=u,u=[];++d<t;)s&&s[d].run();d=-1,t=u.length}s=null,l=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||l||c(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,t,n){e.exports=function(e){function t(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return o.colors[Math.abs(t)%o.colors.length]}function o(e){let n;function a(...e){if(!a.enabled)return;const t=a,r=Number(new Date),i=r-(n||r);t.diff=i,t.prev=n,t.curr=r,n=r,e[0]=o.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let c=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(n,r)=>{if("%%"===n)return n;c++;const i=o.formatters[r];if("function"==typeof i){const o=e[c];n=i.call(t,o),e.splice(c,1),c--}return n}),o.formatArgs.call(t,e),(t.log||o.log).apply(t,e)}return a.namespace=e,a.enabled=o.enabled(e),a.useColors=o.useColors(),a.color=t(e),a.destroy=r,a.extend=i,"function"==typeof o.init&&o.init(a),o.instances.push(a),a}function r(){const e=o.instances.indexOf(this);return-1!==e&&(o.instances.splice(e,1),!0)}function i(e,t){const n=o(this.namespace+(void 0===t?":":t)+e);return n.log=this.log,n}function a(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return o.debug=o,o.default=o,o.coerce=function(e){return e instanceof Error?e.stack||e.message:e},o.disable=function(){const e=[...o.names.map(a),...o.skips.map(a).map(e=>"-"+e)].join(",");return o.enable(""),e},o.enable=function(e){let t;o.save(e),o.names=[],o.skips=[];const n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length;for(t=0;t<r;t++)n[t]&&("-"===(e=n[t].replace(/\*/g,".*?"))[0]?o.skips.push(new RegExp("^"+e.substr(1)+"$")):o.names.push(new RegExp("^"+e+"$")));for(t=0;t<o.instances.length;t++){const e=o.instances[t];e.enabled=o.enabled(e.namespace)}},o.enabled=function(e){if("*"===e[e.length-1])return!0;let t,n;for(t=0,n=o.skips.length;t<n;t++)if(o.skips[t].test(e))return!1;for(t=0,n=o.names.length;t<n;t++)if(o.names[t].test(e))return!0;return!1},o.humanize=n(5),Object.keys(e).forEach(t=>{o[t]=e[t]}),o.instances=[],o.names=[],o.skips=[],o.formatters={},o.selectColor=t,o.enable(o.load()),o}},function(e,t){var n=1e3,o=6e4,r=60*o,i=24*r;function a(e,t,n,o){var r=t>=1.5*n;return Math.round(e/n)+" "+o+(r?"s":"")}e.exports=function(e,t){t=t||{};var c=typeof e;if("string"===c&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var t=/^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(t){var a=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*a;case"weeks":case"week":case"w":return 6048e5*a;case"days":case"day":case"d":return a*i;case"hours":case"hour":case"hrs":case"hr":case"h":return a*r;case"minutes":case"minute":case"mins":case"min":case"m":return a*o;case"seconds":case"second":case"secs":case"sec":case"s":return a*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}}}(e);if("number"===c&&!1===isNaN(e))return t.long?function(e){var t=Math.abs(e);return t>=i?a(e,t,i,"day"):t>=r?a(e,t,r,"hour"):t>=o?a(e,t,o,"minute"):t>=n?a(e,t,n,"second"):e+" ms"}(e):function(e){var t=Math.abs(e);return t>=i?Math.round(e/i)+"d":t>=r?Math.round(e/r)+"h":t>=o?Math.round(e/o)+"m":t>=n?Math.round(e/n)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o);const i="object"==typeof document&&null!==document,a="object"==typeof window&&null!==window&&window.self===window;if(()=>i&&a){let t;try{"undefined"!=typeof window&&(t=window.localStorage.debug)}catch(e){console.error("groupher could not enable debug.")}r.a.enable(t)}var c=(e,t="@editor/")=>r()(`${t}${e}`);const s={focusHolder:"focus-holder",mention:"cdx-mention",emoji:"cdx-emoji",editorInlineToolbarWrapper:"ce-inline-toolbar__toggler-and-button-wrapper",mentionContainer:"cdx-mention__container",emojiContainer:"cdx-emoji__container"},u={mention:"label",strike:"strike",lock:"addr",emoji:"i"},l="classList"in document.documentElement,d=e=>new RegExp("(^|\\s+)"+e+"(\\s+|$)"),f=(e,t)=>l?e.classList.contains(t):d(t).test(e.className),p=(e,t)=>{0!==t.trim().length&&(l?e.classList.add(t):f(e,t)||(e.className=e.className+" "+t))},h=(e,t)=>{0!==t.trim().length&&(l?e.classList.remove(t):e.className=e.className.replace(d(t)," "))};var m={has:f,add:p,remove:h,toggle:(e,t,n)=>{if(0===t.trim().length)return;let o;(o=void 0!==n?n?p:h:f(e,t)?h:p)(e,t)}};const g=c("utils/dom"),b=e=>e instanceof Element,y=(e,t=null,n={})=>{let o=document.createElement(e);Array.isArray(t)?o.classList.add(...t.filter(e=>!!e)):t&&o.classList.add(t);for(let e in n)"placeholder"===e?o.setAttribute("placeholder",n[e]):0===e.indexOf("data-")?o.setAttribute(e,n[e]):"for"===e?o.setAttribute("for",n[e]):o[e]=n[e];return o},v=(e,t=[])=>new Promise((n,o)=>{const r=document.createElement("script");r.setAttribute("src",e),r.addEventListener("load",()=>{n(t.map(e=>{const t=window[e];return void 0===t&&console.warn(`No external named '${e}' in window`),t}))}),r.addEventListener("error",o),document.body.appendChild(r)}),C=(e,t)=>{if(e.parentNode){const n=e.parentNode.querySelectorAll("."+t.styles.settingsButton);Array.from(n).forEach(e=>e.classList.remove(t.styles.settingsButtonActive))}e.classList.add(t.styles.settingsButtonActive)},x=e=>{if(e.focus(),void 0!==window.getSelection&&void 0!==document.createRange){var t=document.createRange();t.selectNodeContents(e),t.collapse(!1);var n=window.getSelection();n.removeAllRanges(),n.addRange(t)}else if(void 0!==document.body.createTextRange){var o=document.body.createTextRange();o.moveToElementText(e),o.collapse(!1),o.select()}},w=e=>{let t,n;if(window.getSelection&&(t=window.getSelection()).getRangeAt&&t.rangeCount){(n=t.getRangeAt(0)).deleteContents();const a=document.createElement("div");a.innerHTML=e;for(var o,r,i=document.createDocumentFragment();o=a.firstChild;)r=i.appendChild(o);n.insertNode(i),r&&((n=n.cloneRange()).setStartAfter(r),n.collapse(!0),t.removeAllRanges(),t.addRange(n))}},S=function(e){if(document.body.createTextRange){const t=document.body.createTextRange();t.moveToElementText(e),t.select()}else if(window.getSelection){const t=window.getSelection(),n=document.createRange();n.selectNodeContents(e),t.removeAllRanges(),t.addRange(n)}else console.warn("Could not select text in node: Unsupported browser.")},k=(e,t)=>{const n=document.querySelector("."+e);n&&(n.style.display=t)},E=(e,t)=>{const n=document.querySelector("."+e);n&&n.remove()},T=(e,t=s.editorInlineToolbarWrapper)=>{k(t,"none"),"mention"===e?(g("keepCustomInlineToolOnly for mention"),k(s.mentionContainer,"block"),k(s.emojiContainer,"none")):"emoji"===e&&(g("keepCustomInlineToolOnly for emoji"),k(s.emojiContainer,"block"),k(s.mentionContainer,"none"))},O=(e=s.editorInlineToolbarWrapper)=>{g("restoreDefaultInlineTools: ",e),k(e,"flex"),k(s.mentionContainer,"none"),k(s.emojiContainer,"none")},_=(e,t,n="@")=>{""===t.value.trim()&&(e.replaceWith(""),w(n))},j=(e,t,n="@")=>{t&&(e.replaceWith(""),w(n))},F=(e,t,n)=>{e.replaceWith(t),n&&(n.tooltip.hide(),n.toolbar.close())},L=(e,t,n="block")=>{if((!t[e]||t[e].style.display!==n)&&e>=0){for(let e=0;e<t.length;e+=1)t[e].style.display="none";setTimeout(()=>{t[e].style.display=n})}},A=e=>{for(let t=0;t<e.length;t+=1)e[t].style.display="none"},R="cdx-mention",M="cdx-emoji",I="inline_tmp_anchor",B=c("utils:markdown"),N="HEADER_1",D="HEADER_2",P="HEADER_3",q="UNORDERED_LIST",H="ORDERED_LIST",$="QUOTE",z="CODE",U={BOLD:new RegExp(/\*\*([\S]{1,})\*\*/),ITALIC:new RegExp(/__([\S]{1,})__/),MARKER:new RegExp(/==([\S]{1,})==/),INLINE_CODE:new RegExp(/\`([\S]{1,})\`/)},V=function(e){return{md:e[0],content:e[1],isValid:!0}},W=e=>{switch(e){case N:return{type:"header",toolData:{level:1},config:{}};case D:return{type:"header",toolData:{level:2},config:{}};case P:return{type:"header",toolData:{level:3},config:{}};case q:return{type:"list",toolData:{style:"unordered"},config:{}};case H:return{type:"list",toolData:{style:"ordered"},config:{}};case $:return{type:"quote",toolData:{},config:{}};case z:return{type:"code",toolData:{},config:{}};default:return{isInvalid:!1,type:"",toolData:"",config:""}}},Q=c("utils/emoji"),J=c("utils/emoji");c("utils:linkCard");const G=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");var K=n(0),Z=n.n(K);const X=function(e,t,n){let o=document.createElement("script");o.src=e,o.onload=t,o.onreadystatechange=t,n.appendChild(o)},Y=function(e,t,n){let o=document.createElement("link");o.rel="stylesheet",o.src=e,o.onload=t,o.onreadystatechange=t,n.appendChild(o)},ee=e=>{for(var t in e)return!1;return!0},te=(e,t)=>{const{length:n}=e;let o=-1;for(;++o<n;)if(t(e[o],o,e))return o;return-1},ne=(e,t,n)=>{const o=e.splice(t,1)[0];e.splice(n,0,o)},oe=(e,t,n)=>{const o=e[t];e[t]=e[n],e[n]=o},re=e=>"string"==typeof e||e instanceof String,ie=e=>{let t=0;for(let n=0,o=e.length;n<o;n++)t+=e.charCodeAt(n)<256?1:2;return t},ae=(e,t=20)=>re(e)?t>=ie(e)?e:e.slice(0,t)+"...":"??...",ce=e=>{const t=/^[a-zA-Z0-9,.:;!#$%&(){}=/<>\[\]`@+\|\*\?\s\-_ ’'‘ÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ]$/;for(let n=0,o=e.length;n<o;n++)if(!t.test(e[n]))return!1;return!0},se=c("utils:enhancer"),ue=(e,t,n)=>{n.markdown&&((e,t)=>{const n=t.blocks.getCurrentBlockIndex(),o=t.blocks.getBlockByIndex(n);if(n<0||!o)return!1;const{isValidMDStatus:r,MDType:i}=((e,t)=>{const n=e.holder.textContent.trim();let o=!0,r="";const i=" "===t;if(n.length>7)return{isValidMDStatus:!1,MDType:r};switch(!0){case"#"===n&&i:r=N;break;case"##"===n&&i:r=D;break;case("###"===n||"####"===n||"#####"===n||"######"===n)&&i:r=P;break;case"-"===n&&i:r=q;break;case"1"===n&&i:r=H;break;case">"===n&&i:r=$;break;case"```"===n:r=z;break;default:o=!1}return{isValidMDStatus:o,MDType:r}})(o,e.data);if(!r)return!1;const{isInvalid:a,type:c,toolData:s,config:u}=W(i);B("_markdownBlockConfig: ",W(i)),a||(t.blocks.delete(n),t.blocks.insert(c,s,u,n),t.caret.setToBlock(n,"start"))})(e,t),n.inlineMarkdown&&((e,t)=>{const n=t.blocks.getCurrentBlockIndex(),o=t.blocks.getBlockByIndex(n);if(n<0||!o)return!1;const{isValid:r,md:i,html:a}=((e,t)=>{const n=e.holder.textContent.trim(),{BOLD:o,ITALIC:r,MARKER:i,INLINE_CODE:a}=U,c=n.match(o);if(c){const{isValid:e,md:t,content:n}=V(c);return{isValid:e,md:t,html:`<b>${n}</b>`}}const s=n.match(i);if(s){const{isValid:e,md:t,content:n}=V(s);return{isValid:e,md:t,html:`<mark class=cdx-marker>${n}</mark>`}}const u=n.match(r);if(u){const{isValid:e,md:t,content:n}=V(u);return{isValid:e,md:t,html:`<i>${n}</i>`}}const l=n.match(a);if(l){const{isValid:e,md:t,content:n}=V(l);return{isValid:e,md:t,html:`<code class=inline-code>${n}</code>`}}return{isValid:!1,text:""}})(o,e.data);r&&(w(`<span id="${I}" />`),e.target.innerHTML=e.target.innerHTML.replace(i,a),S(document.querySelector("#"+I)),document.querySelector("#"+I).remove(),w("&nbsp;"))})(e,t),n.mention&&(e=>{if("@"===e.data){const e=`<${u.mention} data-sign="@" class="${R}" contenteditable="false" id="${R}" tabindex="1">&nbsp;</${u.mention}>`,t="#"+R;w(e);const n=document.querySelector(t).parentElement;Q("mentionParent: ",n),n.innerHTML=n.innerHTML.replace("@"+e,e),Q("selectNode mentionId: ",t),S(document.querySelector(t))}})(e),n.emoji&&(e=>{if(":"===e.data){J("handleEmoji: ",e.data);const t=`<${u.emoji} class="${M}" contenteditable="false" id="${M}" tabindex="1">&nbsp;</${u.emoji}>`,n="#"+M;w(t);const o=document.querySelector(n).parentElement;o.innerHTML=o.innerHTML.replace(":"+t,t),S(document.querySelector(n))}})(e),n.linkCard&&((e,t)=>{const n=t.blocks.getCurrentBlockIndex(),o=t.blocks.getBlockByIndex(n);!(n<0)&&o&&((e,t)=>{const n=e.holder.textContent.trim(),o=" "===t;return!(!G.test(n)||!o)})(o,e.data)&&(t.blocks.delete(n),t.blocks.insert("linkCard",{link:"https://codex.so",meta:{title:"CodeX Team",site_name:"CodeX",description:"Club of web-development, design and marketing. We build team learning how to build full-valued projects on the world market.",image:{url:"https://codex.so/public/app/img/meta_img.png"}}},{},n),t.caret.setToBlock(n,"start"))})(e,t)},le=(e,t,n={})=>{const o=Object.assign({markdown:!1,inlineMarkdown:!0,mention:!0,emoji:!0,linkCard:!1},n);t.listeners.on(e,"input",e=>Z()(ue(e,t,o),100))},de=(e,t)=>{t.listeners.off(e,"input",n=>ue(e,t),!1),t.listeners.off(e,"keyup",e=>(e=>{if("Backspace"===e.code||"Delete"===e.code)if(window.getSelection){let e=window.getSelection();e.anchorNode.parentNode.className===R&&e.anchorNode.parentNode.remove()}else se("window Selection is not supported.")})(e),!1)};var fe=n(2),pe=n.n(fe);const he=()=>(window.PubSub||(window.PubSub=pe.a),window.PubSub),me={KEEP_PARAGRAPH_AFTER_REMOVED:"KEEP_PARAGRAPH_AFTER_REMOVED"},ge=e=>!!new RegExp("^(https:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e);n.d(t,"debounce",(function(){return K.debounce})),n.d(t,"loadJS",(function(){return X})),n.d(t,"loadCSS",(function(){return Y})),n.d(t,"isEmptyObj",(function(){return ee})),n.d(t,"findIndex",(function(){return te})),n.d(t,"insertAndShift",(function(){return ne})),n.d(t,"swapArrayItems",(function(){return oe})),n.d(t,"isString",(function(){return re})),n.d(t,"cutFrom",(function(){return ae})),n.d(t,"strLen",(function(){return ie})),n.d(t,"isLatinString",(function(){return ce})),n.d(t,"isDOM",(function(){return b})),n.d(t,"make",(function(){return y})),n.d(t,"showElement",(function(){return L})),n.d(t,"hideElements",(function(){return A})),n.d(t,"replaceEl",(function(){return F})),n.d(t,"clazz",(function(){return m})),n.d(t,"importScript",(function(){return v})),n.d(t,"highlightSettingIcon",(function(){return C})),n.d(t,"moveCaretToEnd",(function(){return x})),n.d(t,"selectNode",(function(){return S})),n.d(t,"insertHtmlAtCaret",(function(){return w})),n.d(t,"keepCustomInlineToolOnly",(function(){return T})),n.d(t,"restoreDefaultInlineTools",(function(){return O})),n.d(t,"removeElementByClass",(function(){return E})),n.d(t,"convertElementToTextIfNeed",(function(){return _})),n.d(t,"convertElementToText",(function(){return j})),n.d(t,"enhanceBlock",(function(){return le})),n.d(t,"freeEnhanceBlock",(function(){return de})),n.d(t,"buildLog",(function(){return c})),n.d(t,"initEventBus",(function(){return he})),n.d(t,"EVENTS",(function(){return me})),n.d(t,"CSS",(function(){return s})),n.d(t,"INLINE_BLOCK_TAG",(function(){return u})),n.d(t,"isValidURL",(function(){return ge}))}])},function(e,t){e.exports='<svg width="20" t="1570603614482" class="icon" width="15" height="14" viewBox="0 0 1210 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4264" width="200" height="200"><path d="M517.587974 506.412527a134.482163 134.482163 0 0 0-98.857417-40.735469h-162.841665a69.545917 69.545917 0 0 1-69.796443-69.796443v-23.24878a186.14055 186.14055 0 0 1 186.14055-186.090444h46.497558a47.249136 47.249136 0 0 0 46.547664-46.547664V46.948505a47.249136 47.249136 0 0 0-46.547664-46.547664h-46.497558a362.159864 362.159864 0 0 0-144.302768 29.461815A368.423005 368.423005 0 0 0 29.463819 228.329067 362.310179 362.310179 0 0 0 0.002004 372.631835v511.773776a138.991625 138.991625 0 0 0 139.592886 139.592886h279.135667a138.991625 138.991625 0 0 0 139.592886-139.592886V605.269944a134.482163 134.482163 0 0 0-40.735469-98.857417z m651.366662 0a134.482163 134.482163 0 0 0-98.857417-40.735469h-162.841666a69.545917 69.545917 0 0 1-69.796443-69.796443v-23.24878a186.14055 186.14055 0 0 1 186.14055-186.090444h46.497559a47.249136 47.249136 0 0 0 46.547663-46.547664V46.948505a47.249136 47.249136 0 0 0-46.547663-46.547664h-46.497559a362.159864 362.159864 0 0 0-144.302768 29.461815 368.423005 368.423005 0 0 0-198.466411 198.466411A362.310179 362.310179 0 0 0 651.368666 372.631835v511.773776a138.991625 138.991625 0 0 0 139.592886 139.592886h279.135667a138.991625 138.991625 0 0 0 139.592886-139.592886V605.269944a134.482163 134.482163 0 0 0-40.735469-98.857417z" fill p-id="4265"></path></svg>'},function(e,t){e.exports='<svg width="20" t="1576569114943" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5988" width="200" height="200"><path d="M465.253 931.127H194.544V88.933h601.565v391.02c0 16.637 13.444 30.08 30.082 30.08s30.074-13.443 30.074-30.08V88.933c0-33.177-26.974-60.155-60.156-60.155H194.544c-33.178 0-60.155 26.978-60.155 60.155v842.194c0 33.176 26.978 60.154 60.155 60.154h270.71c16.636 0 30.074-13.437 30.074-30.072 0-16.642-13.438-30.082-30.075-30.082" p-id="5989"></path><path d="M705.874 269.405H284.781c-16.637 0-30.081 13.438-30.081 30.074 0 16.64 13.444 30.082 30.08 30.082h421.094c16.64 0 30.082-13.444 30.082-30.082 0-16.636-13.443-30.074-30.082-30.074m240.627 541.411H584.06c-0.378 0-0.755 0.092-1.125 0.092h-0.285c-14.29 1.316-25.661 12.688-27.071 27.07v0.284c0 0.375-0.097 0.752-0.097 1.13v3.57c0 0.279 0 0.562 0.097 0.845 0 0.285 0.094 0.564 0.094 0.843 0 0.19 0 0.377 0.096 0.566 0.092 0.374 0.092 0.658 0.188 1.038 0 0.092 0 0.28 0.092 0.371l0.283 1.13c0 0.097 0 0.188 0.091 0.188 0.098 0.377 0.19 0.85 0.38 1.22v0.187c0.095 0.475 0.284 0.853 0.376 1.32v0.097c0.188 0.467 0.278 0.933 0.466 1.312 1.604 3.947 4.046 7.426 6.958 10.34l84.687 84.69c11.75 11.75 30.736 11.75 42.582 0 11.75-11.749 11.75-30.738 0-42.584l-33.648-33.552h288.278c16.638 0 30.083-13.444 30.083-30.082-0.002-16.637-13.447-30.075-30.084-30.075M585.565 419.609H284.78c-16.637 0-30.081 13.437-30.081 30.075 0 16.636 13.444 30.08 30.08 30.08h300.785c16.636 0 30.08-13.444 30.08-30.08 0-16.638-13.444-30.075-30.08-30.075M465.253 570.092H284.781c-16.637 0-30.081 13.443-30.081 30.078 0 16.637 13.444 30.082 30.08 30.082h180.473c16.637 0 30.075-13.445 30.075-30.082 0-16.636-13.438-30.078-30.075-30.078m511.33 148.982v-0.564c0-0.28 0-0.564-0.096-0.847 0-0.282-0.092-0.561-0.092-0.842 0-0.19 0-0.378-0.096-0.564-0.095-0.376-0.095-0.755-0.191-1.04 0-0.09 0-0.277-0.092-0.37l-0.285-1.129c0-0.097 0-0.188-0.09-0.188-0.091-0.38-0.188-0.85-0.376-1.222v-0.189c-0.093-0.474-0.284-0.849-0.379-1.318v-0.097c-0.188-0.466-0.28-0.934-0.466-1.312-1.597-3.945-4.043-7.424-6.96-10.34l-84.685-84.691c-11.75-11.75-30.736-11.75-42.582 0-11.75 11.75-11.75 30.738 0 42.584l33.745 33.74H585.565c-16.638 0-30.082 13.445-30.082 30.083s13.444 30.076 30.082 30.076h362.441c0.38 0 0.753-0.095 1.13-0.095h0.283c14.288-1.316 25.66-12.688 27.07-27.069v-0.285c0-0.375 0.096-0.75 0.096-1.13v-3.19" p-id="5990"></path></svg>'},function(e,t,n){var o=n(4);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(5)(!1)).push([e.i,'.cdx-quote-icon svg {\n  transform: rotate(180deg);\n}\n\n.cdx-quote {\n  margin: 0;\n}\n\n/* .cdx-quote [contentEditable="true"][data-placeholder]::before {\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 1;\n} */\n\n.cdx-quote-short {\n  margin-left: 15px;\n  min-height: 0;\n  border: none;\n  border-radius: 0;\n  border-left: 4px solid;\n  border-left-color: #388ae5;\n  color: grey;\n  box-shadow: none;\n}\n\n.cdx-quote-long {\n  position: relative;\n  border: 2px solid;\n  border-left: 1px solid;\n  border-right: 1px solid;\n  border-bottom: 1px solid;\n  border-color: lightgrey;\n  margin: 15px;\n  margin-left: 22px;\n  margin-right: 42px;\n  min-height: 140px;\n  padding: 6px 30px;\n  padding-bottom: 60px;\n  border-top-right-radius: 12px;\n  border-bottom-left-radius: 12px;\n}\n\n.cdx-quote-long::before {\n  position: absolute;\n  content: "\\201C";\n  font-size: 50px;\n  color: #e8e7e7;\n  left: -16px;\n  top: 9px;\n  height: 35px;\n  background: white;\n}\n\n.cdx-quote-long::after {\n  position: absolute;\n  content: "\\201D";\n  font-size: 42px;\n  color: #e8e7e7;\n  right: -13px;\n  bottom: 9px;\n  height: 28px;\n  background: white;\n}\n\n.cdx-quote__text {\n  line-height: 1.8em;\n  min-height: 30px;\n  border: none;\n  border-radius: 0;\n  color: grey;\n  box-shadow: none;\n  padding: 10px 12px;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.cdx-quote__text[contenteditable="true"]:empty::before {\n  content: attr(placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 1;\n}\n\n.cdx-quote__text[contenteditable="true"]:focus:empty::before {\n  opacity: 0.5;\n}\n\n.cdx-quote-caption {\n  position: absolute;\n  bottom: 10px;\n  right: 42px;\n  display: flex;\n  align-items: center;\n}\n\n.cdx-quote-caption__line {\n  width: 30px;\n  height: 1px;\n  margin-right: 10px;\n  background: #bbb;\n}\n\n.cdx-quote-caption__text {\n  cursor: text;\n  outline: none;\n  color: grey;\n  font-size: 14px;\n}\n\n/*\n.cdx-quote-source::before {\n  content: \'---\';\n  margin-right: 10px; \n} \n*/\n\n.cdx-quote-caption__text[contenteditable="true"]:empty:before {\n  content: attr(placeholder);\n  color: #bbbbbb;\n  margin-right: 8px;\n}\n.cdx-quote-caption__text[contenteditable="true"]:focus:before {\n  content: "";\n  margin-right: 8px;\n}\n',""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map((function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"}));return[n].concat(i).concat([r]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),c=function(e){return document.querySelector(e)},s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=c.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),u=null,l=0,d=[],f=n(7);function p(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(v(o.parts[a],t))}else{var c=[];for(a=0;a<o.parts.length;a++)c.push(v(o.parts[a],t));i[o.id]={id:o.id,refs:1,parts:c}}}}function h(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(c):n.push(o[a]={id:a,parts:[c]})}return n}function m(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=d[d.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,r)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function b(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),y(t,e.attrs),m(e,t),t}function y(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function v(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=l++;n=u||(u=b(t)),o=w.bind(null,n,a,!1),r=w.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),m(e,t),t}(t),o=k.bind(null,n,t),r=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),o=S.bind(null,n),r=function(){g(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=h(e,t);return p(n,t),function(e){for(var o=[],r=0;r<n.length;r++){var a=n[r];(c=i[a.id]).refs--,o.push(c)}e&&p(h(e,t),t);for(r=0;r<o.length;r++){var c;if(0===(c=o[r]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}};var C,x=(C=[],function(e,t){return C[e]=t,C.filter(Boolean).join("\n")});function w(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function S(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function k(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=f(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var o=n(0),r=(n(3),n(2)),i=n.n(r),a=n(1),c=n.n(a),s="short",u="long";function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var d=function(){function e(t){var n=t.data,o=t.config,r=t.api;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=r,this.i18n=o.i18n||"en",this._data={text:n.text||"",mode:n.mode||s,caption:n.caption||""},this.settings=[{title:"短引用",raw:s,icon:c.a},{title:"长文引用",raw:u,icon:i.a}],this.element=null}var t,n,r;return t=e,r=[{key:"toolbox",get:function(){return{icon:c.a,title:"引用"}}},{key:"contentless",get:function(){return!0}},{key:"enableLineBreaks",get:function(){return!0}},{key:"conversionConfig",get:function(){return{import:"text",export:function(e){return e.caption?"".concat(e.text," — ").concat(e.caption):e.text}}}},{key:"sanitize2",get:function(){return{text:{br:!0}}}}],(n=[{key:"CSS",get:function(){return{block:this.api.styles.block,settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive,text:"cdx-quote__text",shortWrapper:"cdx-quote-short",longWrapper:"cdx-quote-long",caption:"cdx-quote-caption",captionLine:"cdx-quote-caption__line",captionText:"cdx-quote-caption__text"}}},{key:"render",value:function(){return this.element=this.drawShortQuote(),this.element}},{key:"drawShortQuote",value:function(){var e=this,t=Object(o.make)("div",[this.CSS.block]),n=Object(o.make)("blockquote",[this.CSS.shortWrapper]),r=Object(o.make)("div",[this.CSS.text],{innerText:this._data.text||"",contentEditable:!0,placeholder:"// 引用内容"});return r.addEventListener("input",(function(t){e._data.text=t.target.innerHTML})),n.appendChild(r),t.appendChild(n),this._data.mode=s,t}},{key:"drawLongQuote",value:function(){var e=this,t=Object(o.make)("div",[this.CSS.block]),n=Object(o.make)("blockquote",[this.CSS.longWrapper]),r=Object(o.make)("div",[this.CSS.text],{innerText:this._data.text||"",contentEditable:!0,placeholder:"// 引用内容"});r.addEventListener("input",(function(t){e._data.text=t.target.innerHTML}));var i=Object(o.make)("div",[this.CSS.caption]),a=Object(o.make)("div",[this.CSS.captionLine]),c=Object(o.make)("div",[this.CSS.captionText],{contentEditable:!0,innerText:"",placeholder:"// 引用说明"});return c.addEventListener("input",(function(t){e._data.caption=t.target.innerHTML})),i.appendChild(a),i.appendChild(c),n.appendChild(r),n.appendChild(i),t.appendChild(n),this._data.mode=u,t}},{key:"switchView",value:function(){var e=this._data.mode===s?this.drawLongQuote():this.drawShortQuote();this.replaceElement(e)}},{key:"replaceElement",value:function(e){this.element.replaceWith(e),this.element=e,this.api.tooltip.hide(),this.api.toolbar.close()}},{key:"renderSettings",value:function(){var e=this,t=Object(o.make)("div");return this.settings.forEach((function(n){var r=Object(o.make)("div",[e.CSS.settingsButton],{innerHTML:n.icon});e._data.mode===n.raw&&Object(o.highlightSettingIcon)(r,e.api),e.api.tooltip.onHover(r,n.title,{placement:"top"}),r.addEventListener("click",(function(){Object(o.highlightSettingIcon)(r,e.api),e.switchView()})),t.appendChild(r)})),t}},{key:"save",value:function(e){var t=e.querySelector(".".concat(this.CSS.text)),n=e.querySelector(".".concat(this.CSS.captionText));return Object.assign(this._data,{text:t.innerHTML,caption:n?n.innerHTML:""})}}])&&l(t.prototype,n),r&&l(t,r),e}()}]).default}));