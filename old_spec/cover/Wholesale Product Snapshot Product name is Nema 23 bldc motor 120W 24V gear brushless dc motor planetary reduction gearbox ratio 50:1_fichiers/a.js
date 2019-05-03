(function(){var e=function(){var e={},r={exports:e};(function(){if(typeof document.createElement("canvas").getContext==="undefined"){var e="abbr, article, aside, audio, canvas, datalist, details, dialog, eventsource, figure, footer, header, hgroup, m, mark, menu, meter, nav, output, progress, section, time, video".split(", ");var r=e.length;while(r--){document.createElement(e[r])}}})();return r.exports}();var r=function(){var e={},r={exports:e};(function(e,r){if(e.seajs){return}var t=e.seajs={version:"2.3.0"};var n=t.data={};function a(e){return function(r){return{}.toString.call(r)=="[object "+e+"]"}}var i=a("Object");var o=a("String");var s=Array.isArray||a("Array");var u=a("Function");var c=0;function f(){return c++}var l=n.events={};t.on=function(e,r){var n=l[e]||(l[e]=[]);n.push(r);return t};t.off=function(e,r){if(!(e||r)){l=n.events={};return t}var a=l[e];if(a){if(r){for(var i=a.length-1;i>=0;i--){if(a[i]===r){a.splice(i,1)}}}else{delete l[e]}}return t};var v=t.emit=function(e,r){var n=l[e],a;if(n){n=n.slice();for(var i=0,o=n.length;i<o;i++){n[i](r)}}return t};var d=/[^?#]*\//;var p=/\/\.\//g;var g=/\/[^\/]+\/\.\.\//;var h=/([^:\/])\/+\//g;function m(e){return e.match(d)[0]}function w(e){e=e.replace(p,"/");e=e.replace(h,"$1/");while(e.match(g)){e=e.replace(g,"/")}return e}function _(e){var r=e.length-1;var t=e.charAt(r);if(t==="#"){return e.substring(0,r)}return e.substring(r-2)===".js"||e.indexOf("?")>0||t==="/"?e:e+".js"}var y=/^([^\/:]+)(\/.+)$/;var x=/{([^{]+)}/g;function b(e){var r=n.alias;return r&&o(r[e])?r[e]:e}function E(e){var r=n.paths;var t;if(r&&(t=e.match(y))&&o(r[t[1]])){e=r[t[1]]+t[2]}return e}function T(e){var r=n.vars;if(r&&e.indexOf("{")>-1){e=e.replace(x,function(e,t){return o(r[t])?r[t]:e})}return e}function I(e){var r=n.map;var t=e;if(r){for(var a=0,i=r.length;a<i;a++){var o=r[a];t=u(o)?o(e)||e:e.replace(o[0],o[1]);if(t!==e)break}}return t}var j=/^\/\/.|:\//;var S=/^.*?\/\/.*?\//;function A(e,r){var t;var a=e.charAt(0);if(j.test(e)){t=e}else if(a==="."){t=w((r?m(r):n.cwd)+e)}else if(a==="/"){var i=n.cwd.match(S);t=i?i[0]+e.substring(1):e}else{t=n.base+e}if(t.indexOf("//")===0){t=location.protocol+t}return t}function C(e,r){if(!e)return"";e=b(e);e=E(e);e=T(e);e=_(e);var t=A(e,r);t=I(t);return t}var R=document;var k=!location.href||location.href.indexOf("about:")===0?"":m(location.href);var P=R.scripts;var q=R.getElementById("seajsnode")||P[P.length-1];var U=m(L(q)||k);function L(e){return e.hasAttribute?e.src:e.getAttribute("src",4)}t.resolve=C;var O=R.head||R.getElementsByTagName("head")[0]||R.documentElement;var D=O.getElementsByTagName("base")[0];var N;var F;function G(e,r,t){var n=R.createElement("script");if(t){var a=u(t)?t(e):t;if(a){n.charset=a}}$(n,r,e);n.async=true;n.src=e;N=n;D?O.insertBefore(n,D):O.appendChild(n);N=null}function $(e,r,t){var a="onload"in e;if(a){e.onload=i;e.onerror=function(){v("error",{uri:t,node:e});i()}}else{e.onreadystatechange=function(){if(/loaded|complete/.test(e.readyState)){i()}}}function i(){e.onload=e.onerror=e.onreadystatechange=null;if(!n.debug){O.removeChild(e)}e=null;r()}}function M(){if(N){return N}if(F&&F.readyState==="interactive"){return F}var e=O.getElementsByTagName("script");for(var r=e.length-1;r>=0;r--){var t=e[r];if(t.readyState==="interactive"){F=t;return F}}}t.request=G;var H=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g;var B=/\\\\/g;function X(e){var r=[];e.replace(B,"").replace(H,function(e,t,n){if(n){r.push(n)}});return r}var z=t.cache={};var J;var V={};var W={};var K={};var Q=Y.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6};function Y(e,r){this.uri=e;this.dependencies=r||[];this.exports=null;this.status=0;this._waitings={};this._remain=0}Y.prototype.resolve=function(){var e=this;var r=e.dependencies;var t=[];for(var n=0,a=r.length;n<a;n++){t[n]=Y.resolve(r[n],e.uri)}return t};Y.prototype.load=function(){var e=this;if(e.status>=Q.LOADING){return}e.status=Q.LOADING;var r=e.resolve();v("load",r);var t=e._remain=r.length;var n;for(var a=0;a<t;a++){n=Y.get(r[a]);if(n.status<Q.LOADED){n._waitings[e.uri]=(n._waitings[e.uri]||0)+1}else{e._remain--}}if(e._remain===0){e.onload();return}var i={};for(a=0;a<t;a++){n=z[r[a]];if(n.status<Q.FETCHING){n.fetch(i)}else if(n.status===Q.SAVED){n.load()}}for(var o in i){if(i.hasOwnProperty(o)){i[o]()}}};Y.prototype.onload=function(){var e=this;e.status=Q.LOADED;if(e.callback){e.callback()}var r=e._waitings;var t,n;for(t in r){if(r.hasOwnProperty(t)){n=z[t];n._remain-=r[t];if(n._remain===0){n.onload()}}}delete e._waitings;delete e._remain};Y.prototype.fetch=function(e){var r=this;var a=r.uri;r.status=Q.FETCHING;var i={uri:a};v("fetch",i);var o=i.requestUri||a;if(!o||W[o]){r.load();return}if(V[o]){K[o].push(r);return}V[o]=true;K[o]=[r];v("request",i={uri:a,requestUri:o,onRequest:u,charset:n.charset});if(!i.requested){e?e[i.requestUri]=s:s()}function s(){t.request(i.requestUri,i.onRequest,i.charset)}function u(){delete V[o];W[o]=true;if(J){Y.save(a,J);J=null}var e,r=K[o];delete K[o];while(e=r.shift())e.load()}};Y.prototype.exec=function(){var e=this;if(e.status>=Q.EXECUTING){return e.exports}e.status=Q.EXECUTING;var t=e.uri;function require(e){return Y.get(require.resolve(e)).exec()}require.resolve=function(e){return Y.resolve(e,t)};require.async=function(e,r){Y.use(e,r,t+"_async_"+f());return require};var n=e.factory;var a=u(n)?n(require,e.exports={},e):n;if(a===r){a=e.exports}delete e.factory;e.exports=a;e.status=Q.EXECUTED;v("exec",e);return a};Y.resolve=function(e,r){var n={id:e,refUri:r};v("resolve",n);return n.uri||t.resolve(n.id,r)};Y.define=function(e,t,n){var a=arguments.length;if(a===1){n=e;e=r}else if(a===2){n=t;if(s(e)){t=e;e=r}else{t=r}}if(!s(t)&&u(n)){t=X(n.toString())}var i={id:e,uri:Y.resolve(e),deps:t,factory:n};if(!i.uri&&R.attachEvent){var o=M();if(o){i.uri=o.src}}v("define",i);i.uri?Y.save(i.uri,i):J=i};Y.save=function(e,r){var t=Y.get(e);if(t.status<Q.SAVED){t.id=r.id||e;t.dependencies=r.deps||[];t.factory=r.factory;t.status=Q.SAVED;v("save",t)}};Y.get=function(e,r){return z[e]||(z[e]=new Y(e,r))};Y.use=function(r,t,n){var a=Y.get(n,s(r)?r:[r]);a.callback=function(){var r=[];var n=a.resolve();for(var i=0,o=n.length;i<o;i++){r[i]=z[n[i]].exec()}if(t){t.apply(e,r)}delete a.callback};a.load()};t.use=function(e,r){Y.use(e,r,n.cwd+"_use_"+f());return t};Y.define.cmd={};e.define=Y.define;t.Module=Y;n.fetchedList=W;n.cid=f;t.require=function(e){var r=Y.get(Y.resolve(e));if(r.status<Q.EXECUTING){r.onload();r.exec()}return r.exports};n.base=U;n.dir=U;n.cwd=k;n.charset="utf-8";t.config=function(e){for(var r in e){var a=e[r];var o=n[r];if(o&&i(o)){for(var u in a){o[u]=a[u]}}else{if(s(o)){a=o.concat(a)}else if(r==="base"){if(a.slice(-1)!=="/"){a+="/"}a=A(a)}n[r]=a}}v("config",e);return t}})(this);return r.exports}();var t=function(){var e={},r={exports:e};(function(e){if(!e){return}var r="//i.alicdn.com/";e.config({vars:{locale:"en-us"},base:r})})(seajs);return r.exports}();var n=function(){var e={},r={exports:e};(function(e){var r=function(e){var r=e.split(".");return r[0]===e?"":"."+r[r.length-1]};e.on("resolve",function(e){var t=r(e.id);if(t!=".js"&&t!=""){e.id+="#"}})})(seajs);return r.exports}();var a=function(){var e={},r={exports:e};var t=seajs.data;var n=seajs.Module;var a={};seajs._bundle=function(e){for(var r in e){if(!e.hasOwnProperty(r)){continue}var t=e[r];var i=n.resolve(r);for(var o=0,s=t.length;o<s;o++){var u=n.resolve(t[o]);if(!a[u]){a[u]=i}}}};t.bundlesMap=a;seajs.on("fetch",function(e){var r=e.uri;e.requestUri=c(a[r]||r)});var i={};seajs.on("request",function(e){var r=s();var t=e.requestUri;if(r[t]){e.requested=true;i[f(t)]=e.onRequest}});seajs.on("save",function(e){var r=c(e.uri);if(i[r]){i[r]()}});var o;function s(){if(!o){o={};var e=document.scripts;for(var r=0,t=e.length;r<t;r++){var n=e[r];if(n._fetched||!p(n)){continue}var a=m(d(n));for(var i=0,s=a.length;i<s;i++){var u=f(a[i]);if(!v(u)){continue}o[u]=true}n._fetched=true}}return o}var u=/^(.*)(?:\.[0-9a-f]{8})(\.\w+)(\??.*)$/;var c=function(e){return e};var f=function(e){return e.replace(u,"$1$2$3")};var l=/(\.\w*)$/;seajs._hash=function(e){var r={};t(e);c=function(e){return r[e]||e};f=function(e){return e};seajs._hash=t;function t(e){for(var t in e){if(!e.hasOwnProperty(t)){continue}var a=n.resolve(t);r[a]=a.replace(l,"."+e[t]+"$1")}}};function v(e){return e&&e.indexOf(t.base)!=-1}function d(e){return e.hasAttribute?e.src:e.getAttribute("src",4)}function p(e){return e.async||e.defer}var g=t.comboSyntax||["??",","];var h=/\.js(\?.+?)$/i;function m(e){var r=[];if(!e){return r}e=e.replace(h,".js").replace(":443","");var t=e.split(g[0]);var n=t[0];var a=(t[1]||"").split(g[1]);var i,o;for(i=0,o=a.length;i<o;i++){r[i]=n+a[i]}return r}return r.exports}();var i=function(){var e={},r={exports:e};(function(e){var r=e.data;var t=false;var n=function(){if(!t){a();e.off("resolve",n)}};e.on("resolve",n);function a(){var r=document.scripts;var n,a;var o;for(n=0,a=r.length;n<a;n++){o=r[n];if(i(o,"data-locale")){var s=o.getAttribute("data-locale");if(s){e.config({vars:{locale:s.toLowerCase().replace(/\_/g,"-")}});break}}}t=true}function i(e,r){return e.hasAttribute?e.hasAttribute(r):e.getAttribute(r)!==""}})(seajs);return r.exports}();var o=function(){var e={},r={exports:e};(function(e){var r=e.use;e.iuse=function(e){var t=[];var n;var a;r.call(this,e,function(){if(n){n.apply(this,arguments)}else{var e,r;a=this;for(e=0,r=arguments.length;e<r;e++){t[e]=arguments[e]}}});return a?function(e){return e.apply(a,t)}:function(e){n=e}}})(seajs);return r.exports}();var s=function(){var e={},r={exports:e};"use strict";var t={};var n={};var a;i();function i(){var e=document;var r=[window,e.createElement("form")];try{r.push(e.createElement("img"));r.push(e.createElement("iframe"));r.push(e.createElement("object"));r.push(e.createElement("embed"));r.push(e.createElement("audio"))}catch(t){}var i;for(var o=0,s=r.length;o<s;o++){i=r[o];for(var u in i){if(/^on/.test(u)){n[u.substring(2)]=1}}}var c=[];for(var u in n){c.push(u)}a=new RegExp("(['\"`\\s\\/]on(?:"+c.join("|")+"))\\s*=","ig")}t.isAlibabaAppUrl=function(e){var r=/^https?:\/\/([^\:\/]+\.)?(alibaba|aliexpress)\.com(\:\d+)?\//i;var t=/^https?:\/\/(style|img)\.(alibaba|aliexpress)\.com(\:\d+)?\//i;return(r.test(e)||/^(\w+):\/\//i.test(e)===false&&r.test(location.href))&&t.test(e)===false};t.encodeHTML=function(e){return String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/`/g,"&#96;").replace(/</g,"&lt;").replace(/>/g,"&gt;")};t.htmlFilter=function(e,r){var t=/<(script|link|frame)([^\w])/gi;try{var n=window.dmtrack&&dmtrack.clickstat;var i=r.callee.caller||"";var o=i.toString().substr(0,200);var s=e.match(t);var u=e.match(a);var c=s||u;if(n&&c!==null){n(location.protocol+"//stat.alibaba.com/event/common.html",{id:15669,ext:"url="+encodeURIComponent(location.href)+"|caller="+encodeURIComponent(o)+"|html="+encodeURIComponent(c[0])+"|ver=0308"})}}catch(f){}e=String(e);e=e.replace(t,"<$10$2");e=e.replace(a,"$10=");return e};t.mixCsrfToken=function(e){var r=document.cookie;var n=r&&r.match(/(?:^|;)\s*xman_us_t\s*=\s*([^;]+)/);if(n){n=n[1].match(/(?:^|&)\s*ctoken\s*=\s*([^&]+)/)}var a=window["_intl_csrf_token_"]||n&&n[1];if(a&&t.isAlibabaAppUrl(e)&&/(\?|&)ctoken=/.test(e)===false){e+=(/\?/.test(e)?"&":"?")+"ctoken="+a}return e};seajs.on("exec",function(e){var r;if(e.id==="js/6v/lib/gallery/jquery/jquery.js"){r=e.exports;if(!r.fn.rawHtml){r.fn.rawHtml=r.fn.html;r.fn.html=function(e){if(typeof e==="string"&&/^https?:\/\/[^\/]+\.alibaba\.com\//.test(location.href)===true){arguments[0]=t.htmlFilter(e,arguments)}return r.fn.rawHtml.apply(this,arguments)};r.fn.rawLoad=function(e,t,n){if(typeof e!=="string"){return r.fn.load.apply(this,arguments)}var a=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;if(!this.length){return this}var i,o,s,u=this,c=e.indexOf(" ");if(c>=0){i=e.slice(c,e.length);e=e.slice(0,c)}if(r.isFunction(t)){n=t;t=undefined}else if(t&&typeof t==="object"){o="POST"}r.ajax({url:e,type:o,dataType:"html",data:t,complete:function(e,r){if(n){u.each(n,s||[e.responseText,r,e])}}}).done(function(e){s=arguments;u.rawHtml(i?r("<div>").append(e.replace(a,"")).find(i):e)});return this};r.ajaxPrefilter("*",function(e){e.url=t.mixCsrfToken(e.url)})}}if(e.id==="mobile/js/2v/lib/gallery/zepto/zepto.js"||e.id==="partner/hawk-mobile/common/js/v2/lib/zepto/zepto-mix-min.js"){r=e.exports;if(!r.fn.rawHtml){r.fn.rawHtml=r.fn.html;r.fn.html=function(e){if(typeof e==="string"&&/^https?:\/\/[^\/]+\.alibaba\.com\//.test(location.href)===true){arguments[0]=t.htmlFilter(e,arguments)}return r.fn.rawHtml.apply(this,arguments)};r.rawAjax=r.ajax;r.ajax=function(e){if(e&&e.url){e.url=t.mixCsrfToken(e.url)}return r.rawAjax.call(this,e)};r.rawAjaxJSONP=r.ajaxJSONP;r.ajaxJSONP=function(e){if(e&&e.url){e.url=t.mixCsrfToken(e.url)}return r.rawAjaxJSONP.call(this,e)}}}});r.exports=t;return r.exports}();var u=function(){var e={},r={exports:e};(function(){var e=function(){this.param=null;this.config={rate:10,resourceRate:2,filterRegular:"googlebot|bingbot|yahoo|baidu",receiverUrl:"perf.mmstat.com/p.gif"};this.context={isSend:false,timing:null}};var r=function(e){return e.replace(/(^\s*)|(\s*$)/g,"")};e.prototype={init:function(e){this.config=e||this.config;var r=this;try{if(document.addEventListener){window.addEventListener("load",function(){r._onloadAction.apply(r)},false)}else if(document.attachEvent){window.attachEvent("onload",function(){r._onloadAction.apply(r)})}}catch(t){}},_onloadAction:function(){if(!this._validate()){return}var e=this;setTimeout(function(){if(!e.context.isSend){e._sendFWIP();e._send();e.context.isSend=true}},100)},_sendFWIP:function(){if(location.protocol==="https:")return;var e=/(chrome)\//.exec(navigator.userAgent.toLowerCase());if(e==null||!e.length)return;var r=(new Date).getTime();var t=this;var n=new XMLHttpRequest;n.open("get","//u.alicdn.com/wimg/common/single/fwip.png?t=0_0",true);n.onreadystatechange=function(){if(n.readyState==4){var e=n.getAllResponseHeaders().match(/\sFW_IP:\s?([0-9\.]{7,15}),?\s/);if(!e||e.length<2||!e[1])return;e=e[1];r=(new Date).getTime()-r;var a="//"+t.config.receiverUrl;a+="?type=cdnserver&serverIp="+e+"&pageId="+t._getPageId().pageId+"&cost="+r;var i=new Image;i.onload=function(){i=null};i.src=a}};n.send()},_validate:function(){if(!this._filter()){return false}this.param=window["PAGE_TIMING"];if(!this.param){return false}var e=this.config.rate;if(!this._lottery(e)){return false}return true},_lottery:function(e){var r=this._getCookie("ali_apache_id");if(r==""||r=="-"){return false}var t=r.substring(r.length-1);var n=false;if(e==0){n=false}else if(e==10){n=true}else if(t<=e){n=true}return n},_lotteryResource:function(e){var r=Math.floor(Math.random()*1e3)%100;var t=false;if(e==0){t=false}else if(e==100){t=true}else if(r<=e-1&&r>=0){t=true}return t},_serial:function(e){var r=[];for(var t in e){r.push(t+"="+encodeURIComponent(e[t]))}return r.join("&")},_send:function(){var e={userInfo:this._getUserInfo(),pageInfo:this._getPageInfo(),pageTimeingInfo:this._getPageTiming()};var r=this._serial(e.userInfo)+"&"+this._serial(e.pageInfo)+"&"+this._serial(e.pageTimeingInfo);var t=("https:"===document.location.protocol?"https://":"http://")+this.config.receiverUrl+"?"+r;var n=new Image;n.onload=function(){n=null};n.src=t;try{this._sendResource()}catch(a){}},_serialResource:function(e){var r=[];var t="|-|";for(var n in e){r.push(n+"="+encodeURIComponent(e[n]))}return r.join(t)},_sendResource:function(){if(!this._resourceFilter()){return}var e=this.config.resourceRate;var r=this._lotteryResource(e);if(!r){return}var t=this._getResourceTiming(),n=50;if(t.length>n){var a=[],i=[];for(var o=0;o<t.length;o++){if(o<n){a.push(t[o])}else{i.push(t[o])}}this._sendResourceData(a,1,2);this._sendResourceData(i,2,2)}else{this._sendResourceData(t,1,1)}},_sendResourceData:function(e,r,t){var n={pageInfo:this._getPageId(),resourceTimeingInfo:e,index:{index:r},total:{total:t}};var a="|--|";var i=this._serial(n.pageInfo)+a+this._serial(n.index)+a+this._serial(n.total)+a+"resoucecount="+n.resourceTimeingInfo.length;for(var o=0;o<n.resourceTimeingInfo.length;o++){i+=a+this._serialResource(n.resourceTimeingInfo[o])}var s="new-page-timing-iframe"+r;if(document.getElementById(s)){return}var u=("https:"===document.location.protocol?"https://":"http://")+this.config.receiverUrl;var c=document.createElement("div");c.innerHTML='<iframe width="0" height="0" id="'+s+'"name="'+s+'" frameBorder="0" style="top: -100%; position: absolute;"></iframe>';document.body.appendChild(c);var f=document.createElement("form");f.style.display="none";f.target=s;f.method="POST";f.action=u;var l=document.createElement("input");l.type="hidden";l.name="resourcetiming";l.value=i;f.appendChild(l);var v=document.createElement("input");v.type="submit";v.value="";f.appendChild(v);document.body.appendChild(f);f.submit()},_filter:function(){var e=navigator.userAgent.toLowerCase();if(new RegExp(this.config.filterRegular).test(e)){return false}if(!window.performance||!window.performance.timing){return false}this.context.timing=window.performance.timing;return true},_resourceFilter:function(){if(!("performance"in window)||!("getEntriesByType"in window.performance)||!(window.performance.getEntriesByType("resource")instanceof Array)){return false}var e=navigator.userAgent.toLowerCase();var r=/(msie\s|trident.*rv:)([\w.]+)/;var t=r.exec(e);if(t!=null&&t.length>=2&&parseInt(t[2],10)>=10){return true}var n=/(opr|opera)\/([\w.]+)/;t=n.exec(e);if(t!=null&&t.length>=2&&parseInt(t[2],10)>=27){return true}var a=/(chrome)\/([\w.]+)/;t=a.exec(e);if(t!=null&&t.length>=2&&parseInt(t[2],10)>=36){return true}return false},_getCookie:function(e){var t="(?:; )?"+e+"=([^;]*);?";var n=new RegExp(t);if(n.test(document.cookie)){var a=decodeURIComponent(RegExp["$1"]);if(r(a).length>0){return a}else{return"-"}}else{return"-"}},_getUserInfo:function(){var e={};var r="",t=true;var n=this._getCookie("xman_us_f");if(n=="-"){n=""}var a=/x_user=([^&"]+)/;if(n&&a.test(n)){n.match(a);n=RegExp.$1;n=n.split("|");if(n.length>=5){r=n[4]}}if(r!==""){t=false}else{t=true}e.memberSeq=r;e.isNewUser=t;return e},_getPageId:function(){var e={};if(window&&window.dmtrack_pageid){e.pageId=window.dmtrack_pageid}else{e.pageId=""}return e},_getPageInfo:function(){var e={};if(window&&window.dmtrack_pageid){e.pageId=window.dmtrack_pageid}else{e.pageId=""}var r=this._getCookie("aep_usuc_f");if(r=="-"){r=""}var t=/site=([^&"]+)/;if(r&&t.test(r)){r.match(t);e.site=RegExp.$1}else{e.site=""}if(PAGE_TIMING&&PAGE_TIMING.pageType){e.pageType=PAGE_TIMING.pageType}else{e.pageType=""}return e},_getUaMonitor:function(){var e={}},_getPageTiming:function(){var e=this.context.timing;var r={ns:e.navigationStart,ules:e.unloadEventStart,ulee:e.unloadEventEnd,rs:e.redirectStart,re:e.redirectEnd,fs:e.fetchStart,dls:e.domainLookupStart,dle:e.domainLookupEnd,cs:e.connectStart,ce:e.connectEnd,scs:e.secureConnectionStart||0,resqs:e.requestStart,resps:e.responseStart,respe:e.responseEnd,dl:e.domLoading,di:e.domInteractive,dcles:e.domContentLoadedEventStart,dclee:e.domContentLoadedEventEnd,domc:e.domComplete,les:e.loadEventStart,lee:e.loadEventEnd,srt:this._getStartRenderTiming(),fst:this._getFirstPageTiming()};return r},_getResourceTiming:function(){var e=[];var r=window.performance.getEntriesByType("resource");var t=function(e){if(e==undefined||e==0){return 0}else{return Math.floor(e)}};for(var n in r){var a=r[n];if(a.initiatorType==undefined){continue}e.push({rs:t(a.redirectStart),re:t(a.redirectEnd),fs:t(a.fetchStart),st:t(a.startTime),dls:t(a.domainLookupStart),dle:t(a.domainLookupEnd),cs:t(a.connectStart),ce:t(a.connectEnd),scs:t(a.secureConnectionStart),resqs:t(a.requestStart),resps:t(a.responseStart),respe:t(a.responseEnd),restype:a.initiatorType,n:a.name})}return e},_getStartRenderTiming:function(){var e=this.context.timing;var r=this.param["startRender"];if(e.msFirstPaint&&e.msFirstPaint>0){return e.msFirstPaint}else if(window&&window.chrome&&typeof window.chrome.loadTimes==="function"&&window.chrome.loadTimes().firstPaintTime>0&&(!e.responseStart||window.chrome.loadTimes().firstPaintTime*1e3>e.responseStart)){return Math.ceil(window.chrome.loadTimes().firstPaintTime*1e3)}else if(r>0&&(!e.responseStart||r>e.responseStart)){return r}else{return 0}},_getFirstPageTiming:function(){var e=this.param["firstScreen"];if(e>0){return e}else{return 0}}};(new e).init()})();return r.exports}();var c=function(){var e={},r={exports:e};var t={};var n="__defined"+(new Date).getTime(),a;var i=e.get=function(e){var r;if(e){var i=t[e];if(i!==a&&i!==n){r=i}}return r};var o=e.set=function(e,r){if(t[e]===a){setTimeout(function(){throw new Error(e+" is undefined!")},0)}else{t[e]=r}};var s=e.define=function(e,r){if(t[e]!==a){setTimeout(function(){throw new Error(e+" is defined!")},0)}else{t[e]=r!==a?r:n}};return r.exports}();var f=function(){var f={},l={exports:f};e;r;t;n;a;i;o;s;u;c;return l.exports}();var l=function(){var e={},r={exports:e};var t=seajs.Module;var n={"beta-base/base":"ae-global/core/base","beta-class/class":"ae-global/core/class","beta-events/events":"ae-global/core/events","beta-jquery/jquery":"ae-global/core/jquery","beta-widget/widget":"ae-global/core/widget"};seajs.config({alias:n});var a=[];for(var i in n){if(!n.hasOwnProperty(i)){continue}a.push(n[i])}seajs._bundle({"ae-global/core/package":a});return r.exports}();var v=function(){var e={},r={exports:e};
seajs._hash({"ae-global/core/package.js":"c178f6c3"});
;seajs.use("beta-jquery/jquery");return r.exports}();var d=function(){var e={},r={exports:e};f;l;v;return r.exports}()})();;
