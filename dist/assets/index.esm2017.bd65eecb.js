import{_ as Bh,C as $h,r as Eo,F as Kh,k as Ft,S as Gh,L as jh,I as zh,c as re,f as qa,l as Ua,j as Qh,J as Hh,z as Wh,e as Vr,K as Yh,M as Xh}from"./index.esm2017.efc6f271.js";var Jh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b,ai=ai||{},C=Jh||self;function As(){}function zs(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Kn(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Zh(n){return Object.prototype.hasOwnProperty.call(n,Sr)&&n[Sr]||(n[Sr]=++el)}var Sr="closure_uid_"+(1e9*Math.random()>>>0),el=0;function tl(n,e,t){return n.call.apply(n.bind,arguments)}function nl(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),n.apply(e,r)}}return function(){return n.apply(e,arguments)}}function de(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?de=tl:de=nl,de.apply(null,arguments)}function hs(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function le(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function He(){this.s=this.s,this.o=this.o}var sl=0;He.prototype.s=!1;He.prototype.na=function(){!this.s&&(this.s=!0,this.M(),sl!=0)&&Zh(this)};He.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ba=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function ui(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function bo(n,e){for(let t=1;t<arguments.length;t++){const s=arguments[t];if(zs(s)){const r=n.length||0,i=s.length||0;n.length=r+i;for(let o=0;o<i;o++)n[r+o]=s[o]}else n.push(s)}}function fe(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var rl=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{C.addEventListener("test",As,e),C.removeEventListener("test",As,e)}catch{}return n}();function Cs(n){return/^[\s\xa0]*$/.test(n)}var So=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function xr(n,e){return n<e?-1:n>e?1:0}function Qs(){var n=C.navigator;return n&&(n=n.userAgent)?n:""}function De(n){return Qs().indexOf(n)!=-1}function ci(n){return ci[" "](n),n}ci[" "]=As;function il(n){var e=ul;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var ol=De("Opera"),Pt=De("Trident")||De("MSIE"),$a=De("Edge"),Fr=$a||Pt,Ka=De("Gecko")&&!(Qs().toLowerCase().indexOf("webkit")!=-1&&!De("Edge"))&&!(De("Trident")||De("MSIE"))&&!De("Edge"),al=Qs().toLowerCase().indexOf("webkit")!=-1&&!De("Edge");function Ga(){var n=C.document;return n?n.documentMode:void 0}var Ns;e:{var Dr="",Ar=function(){var n=Qs();if(Ka)return/rv:([^\);]+)(\)|;)/.exec(n);if($a)return/Edge\/([\d\.]+)/.exec(n);if(Pt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(al)return/WebKit\/(\S+)/.exec(n);if(ol)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Ar&&(Dr=Ar?Ar[1]:""),Pt){var Cr=Ga();if(Cr!=null&&Cr>parseFloat(Dr)){Ns=String(Cr);break e}}Ns=Dr}var ul={};function cl(){return il(function(){let n=0;const e=So(String(Ns)).split("."),t=So("9").split("."),s=Math.max(e.length,t.length);for(let o=0;n==0&&o<s;o++){var r=e[o]||"",i=t[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;n=xr(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||xr(r[2].length==0,i[2].length==0)||xr(r[2],i[2]),r=r[3],i=i[3]}while(n==0)}return 0<=n})}var Pr;if(C.document&&Pt){var xo=Ga();Pr=xo||parseInt(Ns,10)||void 0}else Pr=void 0;var hl=Pr;function Dn(n,e){if(fe.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Ka){e:{try{ci(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:ll[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Dn.X.h.call(this)}}le(Dn,fe);var ll={2:"touch",3:"pen",4:"mouse"};Dn.prototype.h=function(){Dn.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Gn="closure_listenable_"+(1e6*Math.random()|0),dl=0;function fl(n,e,t,s,r){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.ha=r,this.key=++dl,this.ba=this.ea=!1}function Hs(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function hi(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function ja(n){const e={};for(const t in n)e[t]=n[t];return e}const Do="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function za(n,e){let t,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(t in s)n[t]=s[t];for(let i=0;i<Do.length;i++)t=Do[i],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function Ws(n){this.src=n,this.g={},this.h=0}Ws.prototype.add=function(n,e,t,s,r){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=Ur(n,e,s,r);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new fl(e,this.src,i,!!s,r),e.ea=t,n.push(e)),e};function qr(n,e){var t=e.type;if(t in n.g){var s=n.g[t],r=Ba(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Hs(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Ur(n,e,t,s){for(var r=0;r<n.length;++r){var i=n[r];if(!i.ba&&i.listener==e&&i.capture==!!t&&i.ha==s)return r}return-1}var li="closure_lm_"+(1e6*Math.random()|0),Nr={};function Qa(n,e,t,s,r){if(s&&s.once)return Wa(n,e,t,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Qa(n,e[i],t,s,r);return null}return t=mi(t),n&&n[Gn]?n.N(e,t,Kn(s)?!!s.capture:!!s,r):Ha(n,e,t,!1,s,r)}function Ha(n,e,t,s,r,i){if(!e)throw Error("Invalid event type");var o=Kn(r)?!!r.capture:!!r,a=fi(n);if(a||(n[li]=a=new Ws(n)),t=a.add(e,t,s,o,i),t.proxy)return t;if(s=ml(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)rl||(r=o),r===void 0&&(r=!1),n.addEventListener(e.toString(),s,r);else if(n.attachEvent)n.attachEvent(Xa(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function ml(){function n(t){return e.call(n.src,n.listener,t)}const e=gl;return n}function Wa(n,e,t,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Wa(n,e[i],t,s,r);return null}return t=mi(t),n&&n[Gn]?n.O(e,t,Kn(s)?!!s.capture:!!s,r):Ha(n,e,t,!0,s,r)}function Ya(n,e,t,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ya(n,e[i],t,s,r);else s=Kn(s)?!!s.capture:!!s,t=mi(t),n&&n[Gn]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=Ur(i,t,s,r),-1<t&&(Hs(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=fi(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Ur(e,t,s,r)),(t=-1<n?e[n]:null)&&di(t))}function di(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[Gn])qr(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(Xa(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=fi(e))?(qr(t,n),t.h==0&&(t.src=null,e[li]=null)):Hs(n)}}}function Xa(n){return n in Nr?Nr[n]:Nr[n]="on"+n}function gl(n,e){if(n.ba)n=!0;else{e=new Dn(e,this);var t=n.listener,s=n.ha||n.src;n.ea&&di(n),n=t.call(s,e)}return n}function fi(n){return n=n[li],n instanceof Ws?n:null}var kr="__closure_events_fn_"+(1e9*Math.random()>>>0);function mi(n){return typeof n=="function"?n:(n[kr]||(n[kr]=function(e){return n.handleEvent(e)}),n[kr])}function ie(){He.call(this),this.i=new Ws(this),this.P=this,this.I=null}le(ie,He);ie.prototype[Gn]=!0;ie.prototype.removeEventListener=function(n,e,t,s){Ya(this,n,e,t,s)};function he(n,e){var t,s=n.I;if(s)for(t=[];s;s=s.I)t.push(s);if(n=n.P,s=e.type||e,typeof e=="string")e=new fe(e,n);else if(e instanceof fe)e.target=e.target||n;else{var r=e;e=new fe(s,n),za(e,r)}if(r=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];r=ls(o,s,!0,e)&&r}if(o=e.g=n,r=ls(o,s,!0,e)&&r,r=ls(o,s,!1,e)&&r,t)for(i=0;i<t.length;i++)o=e.g=t[i],r=ls(o,s,!1,e)&&r}ie.prototype.M=function(){if(ie.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)Hs(t[s]);delete n.g[e],n.h--}}this.I=null};ie.prototype.N=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};ie.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function ls(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==t){var a=o.listener,u=o.ha||o.src;o.ea&&qr(n.i,o),r=a.call(u,s)!==!1&&r}}return r&&!s.defaultPrevented}var gi=C.JSON.stringify;function pl(){var n=eu;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class yl{constructor(){this.h=this.g=null}add(e,t){const s=Ja.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var Ja=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new wl,n=>n.reset());class wl{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function vl(n){C.setTimeout(()=>{throw n},0)}function Za(n,e){Br||Il(),$r||(Br(),$r=!0),eu.add(n,e)}var Br;function Il(){var n=C.Promise.resolve(void 0);Br=function(){n.then(Tl)}}var $r=!1,eu=new yl;function Tl(){for(var n;n=pl();){try{n.h.call(n.g)}catch(t){vl(t)}var e=Ja;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}$r=!1}function Ys(n,e){ie.call(this),this.h=n||1,this.g=e||C,this.j=de(this.lb,this),this.l=Date.now()}le(Ys,ie);b=Ys.prototype;b.ca=!1;b.R=null;b.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),he(this,"tick"),this.ca&&(pi(this),this.start()))}};b.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function pi(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}b.M=function(){Ys.X.M.call(this),pi(this),delete this.g};function yi(n,e,t){if(typeof n=="function")t&&(n=de(n,t));else if(n&&typeof n.handleEvent=="function")n=de(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:C.setTimeout(n,e||0)}function tu(n){n.g=yi(()=>{n.g=null,n.i&&(n.i=!1,tu(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class El extends He{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:tu(this)}M(){super.M(),this.g&&(C.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function An(n){He.call(this),this.h=n,this.g={}}le(An,He);var Ao=[];function nu(n,e,t,s){Array.isArray(t)||(t&&(Ao[0]=t.toString()),t=Ao);for(var r=0;r<t.length;r++){var i=Qa(e,t[r],s||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function su(n){hi(n.g,function(e,t){this.g.hasOwnProperty(t)&&di(e)},n),n.g={}}An.prototype.M=function(){An.X.M.call(this),su(this)};An.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xs(){this.g=!0}Xs.prototype.Aa=function(){this.g=!1};function bl(n,e,t,s,r,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+t+`
`+o})}function Sl(n,e,t,s,r,i,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+t+`
`+i+" "+o})}function Rt(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+Dl(n,t)+(s?" "+s:"")})}function xl(n,e){n.info(function(){return"TIMEOUT: "+e})}Xs.prototype.info=function(){};function Dl(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return gi(t)}catch{return e}}var Et={},Co=null;function Js(){return Co=Co||new ie}Et.Pa="serverreachability";function ru(n){fe.call(this,Et.Pa,n)}le(ru,fe);function Cn(n){const e=Js();he(e,new ru(e))}Et.STAT_EVENT="statevent";function iu(n,e){fe.call(this,Et.STAT_EVENT,n),this.stat=e}le(iu,fe);function ge(n){const e=Js();he(e,new iu(e,n))}Et.Qa="timingevent";function ou(n,e){fe.call(this,Et.Qa,n),this.size=e}le(ou,fe);function jn(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return C.setTimeout(function(){n()},e)}var Zs={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},au={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function wi(){}wi.prototype.h=null;function No(n){return n.h||(n.h=n.i())}function uu(){}var zn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function vi(){fe.call(this,"d")}le(vi,fe);function Ii(){fe.call(this,"c")}le(Ii,fe);var Kr;function er(){}le(er,wi);er.prototype.g=function(){return new XMLHttpRequest};er.prototype.i=function(){return{}};Kr=new er;function Qn(n,e,t,s){this.l=n,this.j=e,this.m=t,this.U=s||1,this.S=new An(this),this.O=Al,n=Fr?125:void 0,this.T=new Ys(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new cu}function cu(){this.i=null,this.g="",this.h=!1}var Al=45e3,Gr={},ks={};b=Qn.prototype;b.setTimeout=function(n){this.O=n};function jr(n,e,t){n.K=1,n.v=nr(Me(e)),n.s=t,n.P=!0,hu(n,null)}function hu(n,e){n.F=Date.now(),Hn(n),n.A=Me(n.v);var t=n.A,s=n.U;Array.isArray(s)||(s=[String(s)]),wu(t.i,"t",s),n.C=0,t=n.l.H,n.h=new cu,n.g=qu(n.l,t?e:null,!n.s),0<n.N&&(n.L=new El(de(n.La,n,n.g),n.N)),nu(n.S,n.g,"readystatechange",n.ib),e=n.H?ja(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),Cn(),bl(n.j,n.u,n.A,n.m,n.U,n.s)}b.ib=function(n){n=n.target;const e=this.L;e&&Re(n)==3?e.l():this.La(n)};b.La=function(n){try{if(n==this.g)e:{const h=Re(this.g);var e=this.g.Ea();const l=this.g.aa();if(!(3>h)&&(h!=3||Fr||this.g&&(this.h.h||this.g.fa()||Mo(this.g)))){this.I||h!=4||e==7||(e==8||0>=l?Cn(3):Cn(2)),tr(this);var t=this.g.aa();this.Y=t;t:if(lu(this)){var s=Mo(this.g);n="";var r=s.length,i=Re(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){at(this),In(this);var o="";break t}this.h.i=new C.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,Sl(this.j,this.u,this.A,this.m,this.U,h,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Cs(a)){var c=a;break t}}c=null}if(t=c)Rt(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,zr(this,t);else{this.i=!1,this.o=3,ge(12),at(this),In(this);break e}}this.P?(du(this,h,o),Fr&&this.i&&h==3&&(nu(this.S,this.T,"tick",this.hb),this.T.start())):(Rt(this.j,this.m,o,null),zr(this,o)),h==4&&at(this),this.i&&!this.I&&(h==4?Ou(this.l,this):(this.i=!1,Hn(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,ge(12)):(this.o=0,ge(13)),at(this),In(this)}}}catch{}finally{}};function lu(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function du(n,e,t){let s=!0,r;for(;!n.I&&n.C<t.length;)if(r=Cl(n,t),r==ks){e==4&&(n.o=4,ge(14),s=!1),Rt(n.j,n.m,null,"[Incomplete Response]");break}else if(r==Gr){n.o=4,ge(15),Rt(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else Rt(n.j,n.m,r,null),zr(n,r);lu(n)&&r!=ks&&r!=Gr&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,ge(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),Ai(e),e.K=!0,ge(11))):(Rt(n.j,n.m,t,"[Invalid Chunked Response]"),at(n),In(n))}b.hb=function(){if(this.g){var n=Re(this.g),e=this.g.fa();this.C<e.length&&(tr(this),du(this,n,e),this.i&&n!=4&&Hn(this))}};function Cl(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?ks:(t=Number(e.substring(t,s)),isNaN(t)?Gr:(s+=1,s+t>e.length?ks:(e=e.substr(s,t),n.C=s+t,e)))}b.cancel=function(){this.I=!0,at(this)};function Hn(n){n.V=Date.now()+n.O,fu(n,n.O)}function fu(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=jn(de(n.gb,n),e)}function tr(n){n.B&&(C.clearTimeout(n.B),n.B=null)}b.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(xl(this.j,this.A),this.K!=2&&(Cn(),ge(17)),at(this),this.o=2,In(this)):fu(this,this.V-n)};function In(n){n.l.G==0||n.I||Ou(n.l,n)}function at(n){tr(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,pi(n.T),su(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function zr(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||Qr(t.h,n))){if(!n.J&&Qr(t.h,n)&&t.G==3){try{var s=t.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Ms(t),ir(t);else break e;Di(t),ge(18)}}else t.Ba=r[1],0<t.Ba-t.T&&37500>r[2]&&t.L&&t.A==0&&!t.v&&(t.v=jn(de(t.cb,t),6e3));if(1>=Tu(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else ut(t,11)}else if((n.J||t.g==n)&&Ms(t),!Cs(e))for(r=t.Fa.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(t.T=c[0],c=c[1],t.G==2)if(c[0]=="c"){t.I=c[1],t.ka=c[2];const h=c[3];h!=null&&(t.ma=h,t.j.info("VER="+t.ma));const l=c[4];l!=null&&(t.Ca=l,t.j.info("SVER="+t.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.J=s,t.j.info("backChannelRequestTimeoutMs_="+s)),s=t;const g=n.g;if(g){const p=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=s.h;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ti(i,i.h),i.h=null))}if(s.D){const T=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.za=T,B(s.F,s.D,T))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),s=t;var o=n;if(s.sa=Pu(s,s.H?s.ka:null,s.V),o.J){Eu(s.h,o);var a=o,u=s.J;u&&a.setTimeout(u),a.B&&(tr(a),Hn(a)),s.g=o}else Mu(s);0<t.i.length&&or(t)}else c[0]!="stop"&&c[0]!="close"||ut(t,7);else t.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ut(t,7):xi(t):c[0]!="noop"&&t.l&&t.l.wa(c),t.A=0)}}Cn(4)}catch{}}function Nl(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(zs(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function kl(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(zs(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const s in n)e[t++]=s;return e}}}function mu(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(zs(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=kl(n),s=Nl(n),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],t&&t[i],n)}var gu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _l(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),r=null;if(0<=s){var i=n[t].substring(0,s);r=n[t].substring(s+1)}else i=n[t];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ht(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof ht){this.h=e!==void 0?e:n.h,_s(this,n.j),this.s=n.s,this.g=n.g,Rs(this,n.m),this.l=n.l,e=n.i;var t=new Nn;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),ko(this,t),this.o=n.o}else n&&(t=String(n).match(gu))?(this.h=!!e,_s(this,t[1]||"",!0),this.s=pn(t[2]||""),this.g=pn(t[3]||"",!0),Rs(this,t[4]),this.l=pn(t[5]||"",!0),ko(this,t[6]||"",!0),this.o=pn(t[7]||"")):(this.h=!!e,this.i=new Nn(null,this.h))}ht.prototype.toString=function(){var n=[],e=this.j;e&&n.push(yn(e,_o,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(yn(e,_o,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(yn(t,t.charAt(0)=="/"?Ll:Ml,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",yn(t,Vl)),n.join("")};function Me(n){return new ht(n)}function _s(n,e,t){n.j=t?pn(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Rs(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function ko(n,e,t){e instanceof Nn?(n.i=e,Fl(n.i,n.h)):(t||(e=yn(e,Ol)),n.i=new Nn(e,n.h))}function B(n,e,t){n.i.set(e,t)}function nr(n){return B(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function pn(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function yn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,Rl),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Rl(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var _o=/[#\/\?@]/g,Ml=/[#\?:]/g,Ll=/[#\?]/g,Ol=/[#\?@]/g,Vl=/#/g;function Nn(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function We(n){n.g||(n.g=new Map,n.h=0,n.i&&_l(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}b=Nn.prototype;b.add=function(n,e){We(this),this.i=null,n=Xt(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function pu(n,e){We(n),e=Xt(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function yu(n,e){return We(n),e=Xt(n,e),n.g.has(e)}b.forEach=function(n,e){We(this),this.g.forEach(function(t,s){t.forEach(function(r){n.call(e,r,s,this)},this)},this)};b.oa=function(){We(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let s=0;s<e.length;s++){const r=n[s];for(let i=0;i<r.length;i++)t.push(e[s])}return t};b.W=function(n){We(this);let e=[];if(typeof n=="string")yu(this,n)&&(e=e.concat(this.g.get(Xt(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};b.set=function(n,e){return We(this),this.i=null,n=Xt(this,n),yu(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};b.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function wu(n,e,t){pu(n,e),0<t.length&&(n.i=null,n.g.set(Xt(n,e),ui(t)),n.h+=t.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var s=e[t];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),n.push(r)}}return this.i=n.join("&")};function Xt(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function Fl(n,e){e&&!n.j&&(We(n),n.i=null,n.g.forEach(function(t,s){var r=s.toLowerCase();s!=r&&(pu(this,s),wu(this,r,t))},n)),n.j=e}var Pl=class{constructor(n,e){this.h=n,this.g=e}};function vu(n){this.l=n||ql,C.PerformanceNavigationTiming?(n=C.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(C.g&&C.g.Ga&&C.g.Ga()&&C.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ql=10;function Iu(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Tu(n){return n.h?1:n.g?n.g.size:0}function Qr(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Ti(n,e){n.g?n.g.add(e):n.h=e}function Eu(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}vu.prototype.cancel=function(){if(this.i=bu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function bu(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return ui(n.i)}function Ei(){}Ei.prototype.stringify=function(n){return C.JSON.stringify(n,void 0)};Ei.prototype.parse=function(n){return C.JSON.parse(n,void 0)};function Ul(){this.g=new Ei}function Bl(n,e,t){const s=t||"";try{mu(n,function(r,i){let o=r;Kn(r)&&(o=gi(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function $l(n,e){const t=new Xs;if(C.Image){const s=new Image;s.onload=hs(ds,t,s,"TestLoadImage: loaded",!0,e),s.onerror=hs(ds,t,s,"TestLoadImage: error",!1,e),s.onabort=hs(ds,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=hs(ds,t,s,"TestLoadImage: timeout",!1,e),C.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function ds(n,e,t,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Wn(n){this.l=n.ac||null,this.j=n.jb||!1}le(Wn,wi);Wn.prototype.g=function(){return new sr(this.l,this.j)};Wn.prototype.i=function(n){return function(){return n}}({});function sr(n,e){ie.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=bi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}le(sr,ie);var bi=0;b=sr.prototype;b.open=function(n,e){if(this.readyState!=bi)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,kn(this)};b.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||C).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yn(this)),this.readyState=bi};b.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof C.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Su(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function Su(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}b.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Yn(this):kn(this),this.readyState==3&&Su(this)}};b.Va=function(n){this.g&&(this.response=this.responseText=n,Yn(this))};b.Ua=function(n){this.g&&(this.response=n,Yn(this))};b.ga=function(){this.g&&Yn(this)};function Yn(n){n.readyState=4,n.l=null,n.j=null,n.A=null,kn(n)}b.setRequestHeader=function(n,e){this.v.append(n,e)};b.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function kn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(sr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Kl=C.JSON.parse;function z(n){ie.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=xu,this.K=this.L=!1}le(z,ie);var xu="",Gl=/^https?$/i,jl=["POST","PUT"];b=z.prototype;b.Ka=function(n){this.L=n};b.da=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Kr.g(),this.C=this.u?No(this.u):No(Kr),this.g.onreadystatechange=de(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(i){Ro(this,i);return}if(n=t||"",t=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)t.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())t.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(t.keys()).find(i=>i.toLowerCase()=="content-type"),r=C.FormData&&n instanceof C.FormData,!(0<=Ba(jl,e))||s||r||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of t)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Cu(this),0<this.B&&((this.K=zl(this.g))?(this.g.timeout=this.B,this.g.ontimeout=de(this.qa,this)):this.A=yi(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){Ro(this,i)}};function zl(n){return Pt&&cl()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}b.qa=function(){typeof ai<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,he(this,"timeout"),this.abort(8))};function Ro(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Du(n),rr(n)}function Du(n){n.D||(n.D=!0,he(n,"complete"),he(n,"error"))}b.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,he(this,"complete"),he(this,"abort"),rr(this))};b.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),rr(this,!0)),z.X.M.call(this)};b.Ha=function(){this.s||(this.F||this.v||this.l?Au(this):this.fb())};b.fb=function(){Au(this)};function Au(n){if(n.h&&typeof ai<"u"&&(!n.C[1]||Re(n)!=4||n.aa()!=2)){if(n.v&&Re(n)==4)yi(n.Ha,0,n);else if(he(n,"readystatechange"),Re(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=a===0){var r=String(n.H).match(gu)[1]||null;if(!r&&C.self&&C.self.location){var i=C.self.location.protocol;r=i.substr(0,i.length-1)}s=!Gl.test(r?r.toLowerCase():"")}t=s}if(t)he(n,"complete"),he(n,"success");else{n.m=6;try{var o=2<Re(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",Du(n)}}finally{rr(n)}}}}function rr(n,e){if(n.g){Cu(n);const t=n.g,s=n.C[0]?As:null;n.g=null,n.C=null,e||he(n,"ready");try{t.onreadystatechange=s}catch{}}}function Cu(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(C.clearTimeout(n.A),n.A=null)}function Re(n){return n.g?n.g.readyState:0}b.aa=function(){try{return 2<Re(this)?this.g.status:-1}catch{return-1}};b.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),Kl(e)}};function Mo(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case xu:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}b.Ea=function(){return this.m};b.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Nu(n){let e="";return hi(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function Si(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=Nu(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):B(n,e,t))}function cn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function ku(n){this.Ca=0,this.i=[],this.j=new Xs,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=cn("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=cn("baseRetryDelayMs",5e3,n),this.bb=cn("retryDelaySeedMs",1e4,n),this.$a=cn("forwardChannelMaxRetries",2,n),this.ta=cn("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new vu(n&&n.concurrentRequestLimit),this.Fa=new Ul,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}b=ku.prototype;b.ma=8;b.G=1;function xi(n){if(_u(n),n.G==3){var e=n.U++,t=Me(n.F);B(t,"SID",n.I),B(t,"RID",e),B(t,"TYPE","terminate"),Xn(n,t),e=new Qn(n,n.j,e,void 0),e.K=2,e.v=nr(Me(t)),t=!1,C.navigator&&C.navigator.sendBeacon&&(t=C.navigator.sendBeacon(e.v.toString(),"")),!t&&C.Image&&(new Image().src=e.v,t=!0),t||(e.g=qu(e.l,null),e.g.da(e.v)),e.F=Date.now(),Hn(e)}Fu(n)}function ir(n){n.g&&(Ai(n),n.g.cancel(),n.g=null)}function _u(n){ir(n),n.u&&(C.clearTimeout(n.u),n.u=null),Ms(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&C.clearTimeout(n.m),n.m=null)}function or(n){Iu(n.h)||n.m||(n.m=!0,Za(n.Ja,n),n.C=0)}function Ql(n,e){return Tu(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=jn(de(n.Ja,n,e),Vu(n,n.C)),n.C++,!0)}b.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const r=new Qn(this,this.j,n,void 0);let i=this.s;if(this.S&&(i?(i=ja(i),za(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var s=this.i[t];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Ru(this,r,e),t=Me(this.F),B(t,"RID",n),B(t,"CVER",22),this.D&&B(t,"X-HTTP-Session-Id",this.D),Xn(this,t),i&&(this.N?e="headers="+encodeURIComponent(String(Nu(i)))+"&"+e:this.o&&Si(t,this.o,i)),Ti(this.h,r),this.Ya&&B(t,"TYPE","init"),this.O?(B(t,"$req",e),B(t,"SID","null"),r.Z=!0,jr(r,t,null)):jr(r,t,e),this.G=2}}else this.G==3&&(n?Lo(this,n):this.i.length==0||Iu(this.h)||Lo(this))};function Lo(n,e){var t;e?t=e.m:t=n.U++;const s=Me(n.F);B(s,"SID",n.I),B(s,"RID",t),B(s,"AID",n.T),Xn(n,s),n.o&&n.s&&Si(s,n.o,n.s),t=new Qn(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=Ru(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),Ti(n.h,t),jr(t,s,e)}function Xn(n,e){n.ia&&hi(n.ia,function(t,s){B(e,s,t)}),n.l&&mu({},function(t,s){B(e,s,t)})}function Ru(n,e,t){t=Math.min(n.i.length,t);var s=n.l?de(n.l.Ra,n.l,n):null;e:{var r=n.i;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<t;u++){let c=r[u].h;const h=r[u].g;if(c-=i,0>c)i=Math.max(0,r[u].h-100),a=!1;else try{Bl(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,s}function Mu(n){n.g||n.u||(n.Z=1,Za(n.Ia,n),n.A=0)}function Di(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=jn(de(n.Ia,n),Vu(n,n.A)),n.A++,!0)}b.Ia=function(){if(this.u=null,Lu(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=jn(de(this.eb,this),n)}};b.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ge(10),ir(this),Lu(this))};function Ai(n){n.B!=null&&(C.clearTimeout(n.B),n.B=null)}function Lu(n){n.g=new Qn(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=Me(n.sa);B(e,"RID","rpc"),B(e,"SID",n.I),B(e,"CI",n.L?"0":"1"),B(e,"AID",n.T),B(e,"TYPE","xmlhttp"),Xn(n,e),n.o&&n.s&&Si(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=nr(Me(e)),t.s=null,t.P=!0,hu(t,n)}b.cb=function(){this.v!=null&&(this.v=null,ir(this),Di(this),ge(19))};function Ms(n){n.v!=null&&(C.clearTimeout(n.v),n.v=null)}function Ou(n,e){var t=null;if(n.g==e){Ms(n),Ai(n),n.g=null;var s=2}else if(Qr(n.h,e))t=e.D,Eu(n.h,e),s=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var r=n.C;s=Js(),he(s,new ou(s,t)),or(n)}else Mu(n);else if(r=e.o,r==3||r==0&&0<n.pa||!(s==1&&Ql(n,e)||s==2&&Di(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),r){case 1:ut(n,5);break;case 4:ut(n,10);break;case 3:ut(n,6);break;default:ut(n,2)}}}function Vu(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function ut(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var s=de(n.kb,n);t||(t=new ht("//www.google.com/images/cleardot.gif"),C.location&&C.location.protocol=="http"||_s(t,"https"),nr(t)),$l(t.toString(),s)}else ge(2);n.G=0,n.l&&n.l.va(e),Fu(n),_u(n)}b.kb=function(n){n?(this.j.info("Successfully pinged google.com"),ge(2)):(this.j.info("Failed to ping google.com"),ge(1))};function Fu(n){if(n.G=0,n.la=[],n.l){const e=bu(n.h);(e.length!=0||n.i.length!=0)&&(bo(n.la,e),bo(n.la,n.i),n.h.i.length=0,ui(n.i),n.i.length=0),n.l.ua()}}function Pu(n,e,t){var s=t instanceof ht?Me(t):new ht(t,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Rs(s,s.m);else{var r=C.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new ht(null,void 0);s&&_s(i,s),e&&(i.g=e),r&&Rs(i,r),t&&(i.l=t),s=i}return t=n.D,e=n.za,t&&e&&B(s,t,e),B(s,"VER",n.ma),Xn(n,s),s}function qu(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new z(new Wn({jb:!0})):new z(n.ra),e.Ka(n.H),e}function Uu(){}b=Uu.prototype;b.xa=function(){};b.wa=function(){};b.va=function(){};b.ua=function(){};b.Ra=function(){};function Ls(){if(Pt&&!(10<=Number(hl)))throw Error("Environmental error: no available transport.")}Ls.prototype.g=function(n,e){return new be(n,e)};function be(n,e){ie.call(this),this.g=new ku(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!Cs(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Cs(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Jt(this)}le(be,ie);be.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;ge(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=Pu(n,null,n.V),or(n)};be.prototype.close=function(){xi(this.g)};be.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=gi(n),n=t);e.i.push(new Pl(e.ab++,n)),e.G==3&&or(e)};be.prototype.M=function(){this.g.l=null,delete this.j,xi(this.g),delete this.g,be.X.M.call(this)};function Bu(n){vi.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}le(Bu,vi);function $u(){Ii.call(this),this.status=1}le($u,Ii);function Jt(n){this.g=n}le(Jt,Uu);Jt.prototype.xa=function(){he(this.g,"a")};Jt.prototype.wa=function(n){he(this.g,new Bu(n))};Jt.prototype.va=function(n){he(this.g,new $u)};Jt.prototype.ua=function(){he(this.g,"b")};Ls.prototype.createWebChannel=Ls.prototype.g;be.prototype.send=be.prototype.u;be.prototype.open=be.prototype.m;be.prototype.close=be.prototype.close;Zs.NO_ERROR=0;Zs.TIMEOUT=8;Zs.HTTP_ERROR=6;au.COMPLETE="complete";uu.EventType=zn;zn.OPEN="a";zn.CLOSE="b";zn.ERROR="c";zn.MESSAGE="d";ie.prototype.listen=ie.prototype.N;z.prototype.listenOnce=z.prototype.O;z.prototype.getLastError=z.prototype.Oa;z.prototype.getLastErrorCode=z.prototype.Ea;z.prototype.getStatus=z.prototype.aa;z.prototype.getResponseJson=z.prototype.Sa;z.prototype.getResponseText=z.prototype.fa;z.prototype.send=z.prototype.da;z.prototype.setWithCredentials=z.prototype.Ka;var Hl=function(){return new Ls},Wl=function(){return Js()},_r=Zs,Yl=au,Xl=Et,Oo={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Jl=Wn,fs=uu,Zl=z;const Vo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ne.UNAUTHENTICATED=new ne(null),ne.GOOGLE_CREDENTIALS=new ne("google-credentials-uid"),ne.FIRST_PARTY=new ne("first-party-uid"),ne.MOCK_USER=new ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zt="9.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke=new jh("@firebase/firestore");function Hr(){return Ke.logLevel}function bg(n){Ke.setLogLevel(n)}function w(n,...e){if(Ke.logLevel<=Ft.DEBUG){const t=e.map(Ci);Ke.debug(`Firestore (${Zt}): ${n}`,...t)}}function H(n,...e){if(Ke.logLevel<=Ft.ERROR){const t=e.map(Ci);Ke.error(`Firestore (${Zt}): ${n}`,...t)}}function qt(n,...e){if(Ke.logLevel<=Ft.WARN){const t=e.map(Ci);Ke.warn(`Firestore (${Zt}): ${n}`,...t)}}function Ci(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(n="Unexpected state"){const e=`FIRESTORE (${Zt}) INTERNAL ASSERTION FAILED: `+n;throw H(e),new Error(e)}function x(n,e){n||E()}function Sg(n,e){n||E()}function I(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Kh{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ed{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ne.UNAUTHENTICATED))}shutdown(){}}class td{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class nd{constructor(e){this.t=e,this.currentUser=ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const r=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let i=new Z;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Z,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},a=u=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Z)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(x(typeof s.accessToken=="string"),new Ku(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return x(e===null||typeof e=="string"),new ne(e)}}class sd{constructor(e,t,s,r){this.h=e,this.l=t,this.m=s,this.g=r,this.type="FirstParty",this.user=ne.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(x(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class rd{constructor(e,t,s,r){this.h=e,this.l=t,this.m=s,this.g=r}getToken(){return Promise.resolve(new sd(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class id{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const s=i=>{i.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(x(typeof t.token=="string"),this.A=t.token,new Gu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}class xg{getToken(){return Promise.resolve(new Gu(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=od(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%e.length))}return s}}function A(n,e){return n<e?-1:n>e?1:0}function Ut(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}function zu(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return G.fromMillis(Date.now())}static fromDate(e){return G.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new G(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?A(this.nanoseconds,e.nanoseconds):A(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.timestamp=e}static fromTimestamp(e){return new D(e)}static min(){return new D(new G(0,0))}static max(){return new D(new G(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t,s){t===void 0?t=0:t>e.length&&E(),s===void 0?s=e.length-t:s>e.length-t&&E(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return _n.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof _n?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=e.get(r),o=t.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class R extends _n{construct(e,t,s){return new R(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new y(m.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new R(t)}static emptyPath(){return new R([])}}const ad=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends _n{construct(e,t,s){return new W(e,t,s)}static isValidIdentifier(e){return ad.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new W(["__name__"])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new y(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new y(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new y(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new y(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new W(t)}static emptyPath(){return new W([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e){this.path=e}static fromPath(e){return new v(R.fromString(e))}static fromName(e){return new v(R.fromString(e).popFirst(5))}static empty(){return new v(R.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&R.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return R.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new v(new R(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t,s,r){this.indexId=e,this.collectionGroup=t,this.fields=s,this.indexState=r}}function Wr(n){return n.fields.find(e=>e.kind===2)}function nt(n){return n.fields.filter(e=>e.kind!==2)}function ud(n,e){let t=A(n.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let s=0;s<Math.min(n.fields.length,e.fields.length);++s)if(t=cd(n.fields[s],e.fields[s]),t!==0)return t;return A(n.fields.length,e.fields.length)}Os.UNKNOWN_ID=-1;class vs{constructor(e,t){this.fieldPath=e,this.kind=t}}function cd(n,e){const t=W.comparator(n.fieldPath,e.fieldPath);return t!==0?t:A(n.kind,e.kind)}class Rn{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Rn(0,Se.min())}}function Qu(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=D.fromTimestamp(s===1e9?new G(t+1,0):new G(t,s));return new Se(r,v.empty(),e)}function Hu(n){return new Se(n.readTime,n.key,-1)}class Se{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Se(D.min(),v.empty(),-1)}static max(){return new Se(D.max(),v.empty(),-1)}}function Ni(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=v.comparator(n.documentKey,e.documentKey),t!==0?t:A(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye(n){if(n.code!==m.FAILED_PRECONDITION||n.message!==Wu)throw n;w("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&E(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new f((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof f?t:f.resolve(t)}catch(t){return f.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):f.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):f.reject(t)}static resolve(e){return new f((t,s)=>{t(e)})}static reject(e){return new f((t,s)=>{s(e)})}static waitFor(e){return new f((t,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&t()},u=>s(u))}),o=!0,i===r&&t()})}static or(e){let t=f.resolve(!1);for(const s of e)t=t.next(r=>r?f.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new f((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;t(e[c]).next(h=>{o[c]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(e,t){return new f((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new Z,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new Tn(e,t.error)):this.P.resolve()},this.transaction.onerror=s=>{const r=ki(s.target.error);this.P.reject(new Tn(e,r))}}static open(e,t,s,r){try{return new ar(t,e.transaction(r,s))}catch(i){throw new Tn(t,i)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(w("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new ld(t)}}class xe{constructor(e,t,s){this.name=e,this.version=t,this.S=s,xe.D(Vr())===12.2&&H("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return w("SimpleDb","Removing database:",e),st(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Yh())return!1;if(xe.N())return!0;const e=Vr(),t=xe.D(e),s=0<t&&t<10,r=xe.k(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||i)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static k(e){const t=e.match(/Android ([\d.]+)/i),s=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async F(e){return this.db||(w("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,s)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=i=>{const o=i.target.result;t(o)},r.onblocked=()=>{s(new Tn(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=i=>{const o=i.target.error;o.name==="VersionError"?s(new y(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new y(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new Tn(e,o))},r.onupgradeneeded=i=>{w("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.S.$(o,r.transaction,i.oldVersion,this.version).next(()=>{w("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,s,r){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=ar.open(this.db,e,i?"readonly":"readwrite",s),u=r(a).next(c=>(a.V(),c)).catch(c=>(a.abort(c),f.reject(c))).toPromise();return u.catch(()=>{}),await a.v,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(w("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class hd{constructor(e){this.U=e,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(e){this.U=e}done(){this.q=!0}j(e){this.K=e}delete(){return st(this.U.delete())}}class Tn extends y{constructor(e,t){super(m.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Xe(n){return n.name==="IndexedDbTransactionError"}class ld{constructor(e){this.store=e}put(e,t){let s;return t!==void 0?(w("SimpleDb","PUT",this.store.name,e,t),s=this.store.put(t,e)):(w("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),st(s)}add(e){return w("SimpleDb","ADD",this.store.name,e,e),st(this.store.add(e))}get(e){return st(this.store.get(e)).next(t=>(t===void 0&&(t=null),w("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return w("SimpleDb","DELETE",this.store.name,e),st(this.store.delete(e))}count(){return w("SimpleDb","COUNT",this.store.name),st(this.store.count())}W(e,t){const s=this.options(e,t);if(s.index||typeof this.store.getAll!="function"){const r=this.cursor(s),i=[];return this.H(r,(o,a)=>{i.push(a)}).next(()=>i)}{const r=this.store.getAll(s.range);return new f((i,o)=>{r.onerror=a=>{o(a.target.error)},r.onsuccess=a=>{i(a.target.result)}})}}J(e,t){const s=this.store.getAll(e,t===null?void 0:t);return new f((r,i)=>{s.onerror=o=>{i(o.target.error)},s.onsuccess=o=>{r(o.target.result)}})}Y(e,t){w("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,t);s.X=!1;const r=this.cursor(s);return this.H(r,(i,o,a)=>a.delete())}Z(e,t){let s;t?s=e:(s={},t=e);const r=this.cursor(s);return this.H(r,t)}tt(e){const t=this.cursor({});return new f((s,r)=>{t.onerror=i=>{const o=ki(i.target.error);r(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}H(e,t){const s=[];return new f((r,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void r();const u=new hd(a),c=t(a.primaryKey,a.value,u);if(c instanceof f){const h=c.catch(l=>(u.done(),f.reject(l)));s.push(h)}u.isDone?r():u.G===null?a.continue():a.continue(u.G)}}).next(()=>f.waitFor(s))}options(e,t){let s;return e!==void 0&&(typeof e=="string"?s=e:t=e),{index:s,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const s=this.store.index(e.index);return e.X?s.openKeyCursor(e.range,t):s.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function st(n){return new f((e,t)=>{n.onsuccess=s=>{const r=s.target.result;e(r)},n.onerror=s=>{const r=ki(s.target.error);t(r)}})}let Fo=!1;function ki(n){const e=xe.D(Vr());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const s=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Fo||(Fo=!0,setTimeout(()=>{throw s},0)),s}}return n}class dd{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){w("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{w("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(t){Xe(t)?w("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await Ye(t)}await this.nt(6e4)})}}class fd{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.it(t,e))}it(e,t){const s=new Set;let r=t,i=!0;return f.doWhile(()=>i===!0&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!s.has(o))return w("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,r).next(a=>{r-=a,s.add(o)});i=!1})).next(()=>t-r)}rt(e,t,s){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,s).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(r,i)).next(a=>(w("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}ot(e,t){let s=e;return t.changes.forEach((r,i)=>{const o=Hu(i);Ni(o,s)>0&&(s=o)}),new Se(s.readTime,s.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>t.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function bt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Xu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ie.at=-1;class Q{constructor(e,t){this.comparator=e,this.root=t||ae.EMPTY}insert(e,t){return new Q(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ae.BLACK,null,null))}remove(e){return new Q(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ae.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ms(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ms(this.root,e,this.comparator,!1)}getReverseIterator(){return new ms(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ms(this.root,e,this.comparator,!0)}}class ms{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ae{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s!=null?s:ae.RED,this.left=r!=null?r:ae.EMPTY,this.right=i!=null?i:ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new ae(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return ae.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw E();const e=this.left.check();if(e!==this.right.check())throw E();return e+(this.isRed()?0:1)}}ae.EMPTY=null,ae.RED=!0,ae.BLACK=!1;ae.EMPTY=new class{constructor(){this.size=0}get key(){throw E()}get value(){throw E()}get color(){throw E()}get left(){throw E()}get right(){throw E()}copy(n,e,t,s,r){return this}insert(n,e,t){return new ae(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.comparator=e,this.data=new Q(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new qo(this.data.getIterator())}getIteratorFrom(e){return new qo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof L)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new L(this.comparator);return t.data=e,t}}class qo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ct(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.fields=e,e.sort(W.comparator)}static empty(){return new Ee([])}unionWith(e){let t=new L(W.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Ee(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ut(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new ee(t)}static fromUint8Array(e){const t=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ee(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return A(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ee.EMPTY_BYTE_STRING=new ee("");const md=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ge(n){if(x(!!n),typeof n=="string"){let e=0;const t=md.exec(n);if(x(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:j(n.seconds),nanos:j(n.nanos)}}function j(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function lt(n){return typeof n=="string"?ee.fromBase64String(n):ee.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ju(n){const e=n.mapValue.fields.__previous_value__;return _i(e)?Ju(e):e}function Mn(n){const e=Ge(n.mapValue.fields.__local_write_time__.timestampValue);return new G(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,t,s,r,i,o,a,u){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class dt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new dt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof dt&&e.projectId===this.projectId&&e.database===this.database}}function Jn(n){return n==null}function Ln(n){return n===0&&1/n==-1/0}function Zu(n){return typeof n=="number"&&Number.isInteger(n)&&!Ln(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Is={nullValue:"NULL_VALUE"};function ft(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?_i(n)?4:ec(n)?9007199254740991:10:E()}function _e(n,e){if(n===e)return!0;const t=ft(n);if(t!==ft(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Mn(n).isEqual(Mn(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Ge(s.timestampValue),o=Ge(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,r){return lt(s.bytesValue).isEqual(lt(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,r){return j(s.geoPointValue.latitude)===j(r.geoPointValue.latitude)&&j(s.geoPointValue.longitude)===j(r.geoPointValue.longitude)}(n,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return j(s.integerValue)===j(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=j(s.doubleValue),o=j(r.doubleValue);return i===o?Ln(i)===Ln(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return Ut(n.arrayValue.values||[],e.arrayValue.values||[],_e);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Po(i)!==Po(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!_e(i[a],o[a])))return!1;return!0}(n,e);default:return E()}}function On(n,e){return(n.values||[]).find(t=>_e(t,e))!==void 0}function je(n,e){if(n===e)return 0;const t=ft(n),s=ft(e);if(t!==s)return A(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return A(n.booleanValue,e.booleanValue);case 2:return function(r,i){const o=j(r.integerValue||r.doubleValue),a=j(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Uo(n.timestampValue,e.timestampValue);case 4:return Uo(Mn(n),Mn(e));case 5:return A(n.stringValue,e.stringValue);case 6:return function(r,i){const o=lt(r),a=lt(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=A(o[u],a[u]);if(c!==0)return c}return A(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,i){const o=A(j(r.latitude),j(i.latitude));return o!==0?o:A(j(r.longitude),j(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=je(o[u],a[u]);if(c)return c}return A(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Be.mapValue&&i===Be.mapValue)return 0;if(r===Be.mapValue)return 1;if(i===Be.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),u=i.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const l=A(a[h],c[h]);if(l!==0)return l;const d=je(o[a[h]],u[c[h]]);if(d!==0)return d}return A(a.length,c.length)}(n.mapValue,e.mapValue);default:throw E()}}function Uo(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return A(n,e);const t=Ge(n),s=Ge(e),r=A(t.seconds,s.seconds);return r!==0?r:A(t.nanos,s.nanos)}function Lt(n){return Yr(n)}function Yr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const r=Ge(s);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?lt(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,v.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Yr(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Yr(s.fields[a])}`;return i+"}"}(n.mapValue):E();var e,t}function mt(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Xr(n){return!!n&&"integerValue"in n}function Vn(n){return!!n&&"arrayValue"in n}function Bo(n){return!!n&&"nullValue"in n}function $o(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ts(n){return!!n&&"mapValue"in n}function En(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return bt(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=En(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=En(n.arrayValue.values[t]);return e}return Object.assign({},n)}function ec(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function pd(n){return"nullValue"in n?Is:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?mt(dt.empty(),v.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:E()}function yd(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?mt(dt.empty(),v.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Be:E()}function Ko(n,e){const t=je(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Go(n,e){const t=je(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.value=e}static empty(){return new ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ts(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=En(t)}setAll(e){let t=W.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,s,r),s={},r=[],t=a.popLast()}o?s[a.lastSegment()]=En(o):r.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Ts(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return _e(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Ts(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){bt(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ue(En(this.value))}}function tc(n){const e=[];return bt(n.fields,(t,s)=>{const r=new W([t]);if(Ts(s)){const i=tc(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ee(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t,s,r,i,o){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new P(e,0,D.min(),D.min(),ue.empty(),0)}static newFoundDocument(e,t,s){return new P(e,1,t,D.min(),s,0)}static newNoDocument(e,t){return new P(e,2,t,D.min(),ue.empty(),0)}static newUnknownDocument(e,t){return new P(e,3,t,D.min(),ue.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=D.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof P&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new P(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,t=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function jo(n,e=null,t=[],s=[],r=null,i=null,o=null){return new wd(n,e,t,s,r,i,o)}function gt(n){const e=I(n);if(e.ht===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Lt(r.value);var r}).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Jn(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Lt(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Lt(s)).join(",")),e.ht=t}return e.ht}function vd(n){let e=n.path.canonicalString();return n.collectionGroup!==null&&(e+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(e+=`, filters: [${n.filters.map(t=>{return`${(s=t).field.canonicalString()} ${s.op} ${Lt(s.value)}`;var s}).join(", ")}]`),Jn(n.limit)||(e+=", limit: "+n.limit),n.orderBy.length>0&&(e+=`, orderBy: [${n.orderBy.map(t=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(t)).join(", ")}]`),n.startAt&&(e+=", startAt: ",e+=n.startAt.inclusive?"b:":"a:",e+=n.startAt.position.map(t=>Lt(t)).join(",")),n.endAt&&(e+=", endAt: ",e+=n.endAt.inclusive?"a:":"b:",e+=n.endAt.position.map(t=>Lt(t)).join(",")),`Target(${e})`}function Zn(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<n.orderBy.length;r++)if(!Ad(n.orderBy[r],e.orderBy[r]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let r=0;r<n.filters.length;r++)if(t=n.filters[r],s=e.filters[r],t.op!==s.op||!t.field.isEqual(s.field)||!_e(t.value,s.value))return!1;var t,s;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Wo(n.startAt,e.startAt)&&Wo(n.endAt,e.endAt)}function Vs(n){return v.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Fs(n,e){return n.filters.filter(t=>t instanceof ce&&t.field.isEqual(e))}function zo(n,e,t){let s=Is,r=!0;for(const i of Fs(n,e)){let o=Is,a=!0;switch(i.op){case"<":case"<=":o=pd(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Is}Ko({value:s,inclusive:r},{value:o,inclusive:a})<0&&(s=o,r=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Ko({value:s,inclusive:r},{value:o,inclusive:t.inclusive})<0&&(s=o,r=t.inclusive);break}}return{value:s,inclusive:r}}function Qo(n,e,t){let s=Be,r=!0;for(const i of Fs(n,e)){let o=Be,a=!0;switch(i.op){case">=":case">":o=yd(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Be}Go({value:s,inclusive:r},{value:o,inclusive:a})>0&&(s=o,r=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Go({value:s,inclusive:r},{value:o,inclusive:t.inclusive})>0&&(s=o,r=t.inclusive);break}}return{value:s,inclusive:r}}class ce extends class{}{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.lt(e,t,s):new Id(e,t,s):t==="array-contains"?new bd(e,s):t==="in"?new Sd(e,s):t==="not-in"?new xd(e,s):t==="array-contains-any"?new Dd(e,s):new ce(e,t,s)}static lt(e,t,s){return t==="in"?new Td(e,s):new Ed(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.ft(je(t,this.value)):t!==null&&ft(this.value)===ft(t)&&this.ft(je(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return E()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Id extends ce{constructor(e,t,s){super(e,t,s),this.key=v.fromName(s.referenceValue)}matches(e){const t=v.comparator(e.key,this.key);return this.ft(t)}}class Td extends ce{constructor(e,t){super(e,"in",t),this.keys=nc("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ed extends ce{constructor(e,t){super(e,"not-in",t),this.keys=nc("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function nc(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>v.fromName(s.referenceValue))}class bd extends ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Vn(t)&&On(t.arrayValue,this.value)}}class Sd extends ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&On(this.value.arrayValue,t)}}class xd extends ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(On(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!On(this.value.arrayValue,t)}}class Dd extends ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Vn(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>On(this.value.arrayValue,s))}}class ze{constructor(e,t){this.position=e,this.inclusive=t}}class Ot{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ad(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function Ho(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=v.comparator(v.fromName(o.referenceValue),t.key):s=je(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Wo(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!_e(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t=null,s=[],r=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this._t=null,this.wt=null,this.startAt,this.endAt}}function sc(n,e,t,s,r,i,o,a){return new Le(n,e,t,s,r,i,o,a)}function en(n){return new Le(n)}function Yo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ri(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Mi(n){for(const e of n.filters)if(e.dt())return e.field;return null}function Li(n){return n.collectionGroup!==null}function Bt(n){const e=I(n);if(e._t===null){e._t=[];const t=Mi(e),s=Ri(e);if(t!==null&&s===null)t.isKeyField()||e._t.push(new Ot(t)),e._t.push(new Ot(W.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Ot(W.keyField(),i))}}}return e._t}function ye(n){const e=I(n);if(!e.wt)if(e.limitType==="F")e.wt=jo(e.path,e.collectionGroup,Bt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Bt(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new Ot(i.field,o))}const s=e.endAt?new ze(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ze(e.startAt.position,e.startAt.inclusive):null;e.wt=jo(e.path,e.collectionGroup,t,e.filters,e.limit,s,r)}return e.wt}function Ps(n,e,t){return new Le(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function es(n,e){return Zn(ye(n),ye(e))&&n.limitType===e.limitType}function rc(n){return`${gt(ye(n))}|lt:${n.limitType}`}function Jr(n){return`Query(target=${vd(ye(n))}; limitType=${n.limitType})`}function Oi(n,e){return e.isFoundDocument()&&function(t,s){const r=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(r):v.isDocumentKey(t.path)?t.path.isEqual(r):t.path.isImmediateParentOf(r)}(n,e)&&function(t,s){for(const r of t.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const r of t.filters)if(!r.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(r,i,o){const a=Ho(r,i,o);return r.inclusive?a<=0:a<0}(t.startAt,Bt(t),s)||t.endAt&&!function(r,i,o){const a=Ho(r,i,o);return r.inclusive?a>=0:a>0}(t.endAt,Bt(t),s))}(n,e)}function ic(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function oc(n){return(e,t)=>{let s=!1;for(const r of Bt(n)){const i=Cd(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Cd(n,e,t){const s=n.field.isKeyField()?v.comparator(e.key,t.key):function(r,i,o){const a=i.data.field(r),u=o.data.field(r);return a!==null&&u!==null?je(a,u):E()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return E()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(n,e){if(n.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ln(e)?"-0":e}}function uc(n){return{integerValue:""+n}}function cc(n,e){return Zu(e)?uc(e):ac(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this._=void 0}}function Nd(n,e,t){return n instanceof $t?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(t,e):n instanceof pt?lc(n,e):n instanceof yt?dc(n,e):function(s,r){const i=hc(s,r),o=Xo(i)+Xo(s.yt);return Xr(i)&&Xr(s.yt)?uc(o):ac(s.It,o)}(n,e)}function kd(n,e,t){return n instanceof pt?lc(n,e):n instanceof yt?dc(n,e):t}function hc(n,e){return n instanceof Kt?Xr(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class $t extends ur{}class pt extends ur{constructor(e){super(),this.elements=e}}function lc(n,e){const t=fc(e);for(const s of n.elements)t.some(r=>_e(r,s))||t.push(s);return{arrayValue:{values:t}}}class yt extends ur{constructor(e){super(),this.elements=e}}function dc(n,e){let t=fc(e);for(const s of n.elements)t=t.filter(r=>!_e(r,s));return{arrayValue:{values:t}}}class Kt extends ur{constructor(e,t){super(),this.It=e,this.yt=t}}function Xo(n){return j(n.integerValue||n.doubleValue)}function fc(n){return Vn(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t){this.field=e,this.transform=t}}function _d(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof pt&&s instanceof pt||t instanceof yt&&s instanceof yt?Ut(t.elements,s.elements,_e):t instanceof Kt&&s instanceof Kt?_e(t.yt,s.yt):t instanceof $t&&s instanceof $t}(n.transform,e.transform)}class Rd{constructor(e,t){this.version=e,this.transformResults=t}}class ${constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $}static exists(e){return new $(void 0,e)}static updateTime(e){return new $(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Es(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class cr{}function mc(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new nn(n.key,$.none()):new tn(n.key,n.data,$.none());{const t=n.data,s=ue.empty();let r=new L(W.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Oe(n.key,s,new Ee(r.toArray()),$.none())}}function Md(n,e,t){n instanceof tn?function(s,r,i){const o=s.value.clone(),a=Zo(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Oe?function(s,r,i){if(!Es(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Zo(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(gc(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(n,e,t):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function bn(n,e,t,s){return n instanceof tn?function(r,i,o,a){if(!Es(r.precondition,i))return o;const u=r.value.clone(),c=ea(r.fieldTransforms,a,i);return u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),null}(n,e,t,s):n instanceof Oe?function(r,i,o,a){if(!Es(r.precondition,i))return o;const u=ea(r.fieldTransforms,a,i),c=i.data;return c.setAll(gc(r)),c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(n,e,t,s):function(r,i,o){return Es(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(n,e,t)}function Ld(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=hc(s.transform,r||null);i!=null&&(t===null&&(t=ue.empty()),t.set(s.field,i))}return t||null}function Jo(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&Ut(t,s,(r,i)=>_d(r,i))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class tn extends cr{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Oe extends cr{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gc(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function Zo(n,e,t){const s=new Map;x(n.length===t.length);for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,kd(o,a,t[r]))}return s}function ea(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,Nd(i,o,e))}return s}class nn extends cr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vi extends cr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X,_;function pc(n){switch(n){default:return E();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function yc(n){if(n===void 0)return H("GRPC error has no .code"),m.UNKNOWN;switch(n){case X.OK:return m.OK;case X.CANCELLED:return m.CANCELLED;case X.UNKNOWN:return m.UNKNOWN;case X.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case X.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case X.INTERNAL:return m.INTERNAL;case X.UNAVAILABLE:return m.UNAVAILABLE;case X.UNAUTHENTICATED:return m.UNAUTHENTICATED;case X.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case X.NOT_FOUND:return m.NOT_FOUND;case X.ALREADY_EXISTS:return m.ALREADY_EXISTS;case X.PERMISSION_DENIED:return m.PERMISSION_DENIED;case X.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case X.ABORTED:return m.ABORTED;case X.OUT_OF_RANGE:return m.OUT_OF_RANGE;case X.UNIMPLEMENTED:return m.UNIMPLEMENTED;case X.DATA_LOSS:return m.DATA_LOSS;default:return E()}}(_=X||(X={}))[_.OK=0]="OK",_[_.CANCELLED=1]="CANCELLED",_[_.UNKNOWN=2]="UNKNOWN",_[_.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_[_.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_[_.NOT_FOUND=5]="NOT_FOUND",_[_.ALREADY_EXISTS=6]="ALREADY_EXISTS",_[_.PERMISSION_DENIED=7]="PERMISSION_DENIED",_[_.UNAUTHENTICATED=16]="UNAUTHENTICATED",_[_.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_[_.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_[_.ABORTED=10]="ABORTED",_[_.OUT_OF_RANGE=11]="OUT_OF_RANGE",_[_.UNIMPLEMENTED=12]="UNIMPLEMENTED",_[_.INTERNAL=13]="INTERNAL",_[_.UNAVAILABLE=14]="UNAVAILABLE",_[_.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){bt(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Xu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=new Q(v.comparator);function Te(){return Vd}const wc=new Q(v.comparator);function wn(...n){let e=wc;for(const t of n)e=e.insert(t.key,t);return e}function vc(n){let e=wc;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Ae(){return Sn()}function Ic(){return Sn()}function Sn(){return new Je(n=>n.toString(),(n,e)=>n.isEqual(e))}const Fd=new Q(v.comparator),Pd=new L(v.comparator);function N(...n){let e=Pd;for(const t of n)e=e.add(t);return e}const qd=new L(A);function hr(){return qd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,ss.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new ns(D.min(),r,hr(),Te(),N())}}class ss{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ss(s,t,N(),N(),N())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,t,s,r){this.Tt=e,this.removedTargetIds=t,this.key=s,this.Et=r}}class Tc{constructor(e,t){this.targetId=e,this.At=t}}class Ec{constructor(e,t,s=ee.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class ta{constructor(){this.Rt=0,this.bt=sa(),this.Pt=ee.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=N(),t=N(),s=N();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:E()}}),new ss(this.Pt,this.vt,e,t,s)}Nt(){this.Vt=!1,this.bt=sa()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Ud{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Te(),this.qt=na(),this.Kt=new L(A)}Gt(e){for(const t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(const t of e.removedTargetIds)this.jt(t,e.key,e.Et)}Wt(e){this.forEachTarget(e,t=>{const s=this.zt(t);switch(e.state){case 0:this.Ht(t)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),s.Ct(e.resumeToken));break;default:E()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach((s,r)=>{this.Ht(r)&&t(r)})}Yt(e){const t=e.targetId,s=e.At.count,r=this.Xt(t);if(r){const i=r.target;if(Vs(i))if(s===0){const o=new v(i.path);this.jt(t,o,P.newNoDocument(o,D.min()))}else x(s===1);else this.Zt(t)!==s&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){const t=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Vs(a.target)){const u=new v(a.target.path);this.Ut.get(u)!==null||this.ee(o,u)||this.jt(o,u,P.newNoDocument(u,e))}i.Dt&&(t.set(o,i.xt()),i.Nt())}});let s=N();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Xt(u);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new ns(e,t,this.Kt,this.Ut,s);return this.Ut=Te(),this.qt=na(),this.Kt=new L(A),r}Qt(e,t){if(!this.Ht(e))return;const s=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,s),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,t)?r.kt(t,1):r.Ot(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),s&&(this.Ut=this.Ut.insert(t,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let t=this.Lt.get(e);return t||(t=new ta,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new L(A),this.qt=this.qt.insert(e,t)),t}Ht(e){const t=this.Xt(e)!==null;return t||w("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){const t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new ta),this.Bt.getRemoteKeysForTarget(e).forEach(t=>{this.jt(e,t,null)})}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}}function na(){return new Q(v.comparator)}function sa(){return new Q(v.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$d=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Kd{constructor(e,t){this.databaseId=e,this.gt=t}}function Fn(n,e){return n.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bc(n,e){return n.gt?e.toBase64():e.toUint8Array()}function Gd(n,e){return Fn(n,e.toTimestamp())}function se(n){return x(!!n),D.fromTimestamp(function(e){const t=Ge(e);return new G(t.seconds,t.nanos)}(n))}function Fi(n,e){return function(t){return new R(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Sc(n){const e=R.fromString(n);return x(_c(e)),e}function Pn(n,e){return Fi(n.databaseId,e.path)}function Ne(n,e){const t=Sc(e);if(t.get(1)!==n.databaseId.projectId)throw new y(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new y(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new v(Dc(t))}function Zr(n,e){return Fi(n.databaseId,e)}function xc(n){const e=Sc(n);return e.length===4?R.emptyPath():Dc(e)}function qn(n){return new R(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Dc(n){return x(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ra(n,e,t){return{name:Pn(n,e),fields:t.value.mapValue.fields}}function Ac(n,e,t){const s=Ne(n,e.name),r=se(e.updateTime),i=new ue({mapValue:{fields:e.fields}}),o=P.newFoundDocument(s,r,i);return t&&o.setHasCommittedMutations(),t?o.setHasCommittedMutations():o}function jd(n,e){return"found"in e?function(t,s){x(!!s.found),s.found.name,s.found.updateTime;const r=Ne(t,s.found.name),i=se(s.found.updateTime),o=new ue({mapValue:{fields:s.found.fields}});return P.newFoundDocument(r,i,o)}(n,e):"missing"in e?function(t,s){x(!!s.missing),x(!!s.readTime);const r=Ne(t,s.missing),i=se(s.readTime);return P.newNoDocument(r,i)}(n,e):E()}function zd(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:E()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,c){return u.gt?(x(c===void 0||typeof c=="string"),ee.fromBase64String(c||"")):(x(c===void 0||c instanceof Uint8Array),ee.fromUint8Array(c||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?m.UNKNOWN:yc(u.code);return new y(c,u.message||"")}(o);t=new Ec(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ne(n,s.document.name),i=se(s.document.updateTime),o=new ue({mapValue:{fields:s.document.fields}}),a=P.newFoundDocument(r,i,o),u=s.targetIds||[],c=s.removedTargetIds||[];t=new bs(u,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ne(n,s.document),i=s.readTime?se(s.readTime):D.min(),o=P.newNoDocument(r,i),a=s.removedTargetIds||[];t=new bs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ne(n,s.document),i=s.removedTargetIds||[];t=new bs([],i,r,null)}else{if(!("filter"in e))return E();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Od(r),o=s.targetId;t=new Tc(o,i)}}return t}function Un(n,e){let t;if(e instanceof tn)t={update:ra(n,e.key,e.value)};else if(e instanceof nn)t={delete:Pn(n,e.key)};else if(e instanceof Oe)t={update:ra(n,e.key,e.data),updateMask:Zd(e.fieldMask)};else{if(!(e instanceof Vi))return E();t={verify:Pn(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof $t)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof pt)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof yt)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Kt)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw E()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Gd(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:E()}(n,e.precondition)),t}function ei(n,e){const t=e.currentDocument?function(r){return r.updateTime!==void 0?$.updateTime(se(r.updateTime)):r.exists!==void 0?$.exists(r.exists):$.none()}(e.currentDocument):$.none(),s=e.updateTransforms?e.updateTransforms.map(r=>function(i,o){let a=null;if("setToServerValue"in o)x(o.setToServerValue==="REQUEST_TIME"),a=new $t;else if("appendMissingElements"in o){const c=o.appendMissingElements.values||[];a=new pt(c)}else if("removeAllFromArray"in o){const c=o.removeAllFromArray.values||[];a=new yt(c)}else"increment"in o?a=new Kt(i,o.increment):E();const u=W.fromServerFormat(o.fieldPath);return new ts(u,a)}(n,r)):[];if(e.update){e.update.name;const r=Ne(n,e.update.name),i=new ue({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new Ee(u.map(c=>W.fromServerFormat(c)))}(e.updateMask);return new Oe(r,i,o,t,s)}return new tn(r,i,t,s)}if(e.delete){const r=Ne(n,e.delete);return new nn(r,t)}if(e.verify){const r=Ne(n,e.verify);return new Vi(r,t)}return E()}function Qd(n,e){return n&&n.length>0?(x(e!==void 0),n.map(t=>function(s,r){let i=s.updateTime?se(s.updateTime):se(r);return i.isEqual(D.min())&&(i=se(r)),new Rd(i,s.transformResults||[])}(t,e))):[]}function Cc(n,e){return{documents:[Zr(n,e.path)]}}function Pi(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=Zr(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Zr(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(u){if(u.length===0)return;const c=u.map(h=>function(l){if(l.op==="=="){if($o(l.value))return{unaryFilter:{field:Nt(l.field),op:"IS_NAN"}};if(Bo(l.value))return{unaryFilter:{field:Nt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if($o(l.value))return{unaryFilter:{field:Nt(l.field),op:"IS_NOT_NAN"}};if(Bo(l.value))return{unaryFilter:{field:Nt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nt(l.field),op:Yd(l.op),value:l.value}}}(h));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);r&&(t.structuredQuery.where=r);const i=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:Nt(h.field),direction:Wd(h.dir)}}(c))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(u,c){return u.gt||Jn(c)?c:{value:c}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),t}function Nc(n){let e=xc(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){x(s===1);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=kc(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(h=>function(l){return new Ot(Mt(l.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;t.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,Jn(l)?null:l}(t.limit));let u=null;t.startAt&&(u=function(h){const l=!!h.before,d=h.values||[];return new ze(d,l)}(t.startAt));let c=null;return t.endAt&&(c=function(h){const l=!h.before,d=h.values||[];return new ze(d,l)}(t.endAt)),sc(e,r,o,i,a,"F",u,c)}function Hd(n,e){const t=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return E()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function kc(n){return n?n.unaryFilter!==void 0?[Jd(n)]:n.fieldFilter!==void 0?[Xd(n)]:n.compositeFilter!==void 0?n.compositeFilter.filters.map(e=>kc(e)).reduce((e,t)=>e.concat(t)):E():[]}function Wd(n){return Bd[n]}function Yd(n){return $d[n]}function Nt(n){return{fieldPath:n.canonicalString()}}function Mt(n){return W.fromServerFormat(n.fieldPath)}function Xd(n){return ce.create(Mt(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return E()}}(n.fieldFilter.op),n.fieldFilter.value)}function Jd(n){switch(n.unaryFilter.op){case"IS_NAN":const e=Mt(n.unaryFilter.field);return ce.create(e,"==",{doubleValue:NaN});case"IS_NULL":const t=Mt(n.unaryFilter.field);return ce.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Mt(n.unaryFilter.field);return ce.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Mt(n.unaryFilter.field);return ce.create(r,"!=",{nullValue:"NULL_VALUE"});default:return E()}}function Zd(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function _c(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ia(e)),e=ef(n.get(t),e);return ia(e)}function ef(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function ia(n){return n+""}function Ce(n){const e=n.length;if(x(e>=2),e===2)return x(n.charAt(0)===""&&n.charAt(1)===""),R.emptyPath();const t=e-2,s=[];let r="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&E(),n.charAt(o+1)){case"":const a=n.substring(i,o);let u;r.length===0?u=a:(r+=a,u=r,r=""),s.push(u);break;case"":r+=n.substring(i,o),r+="\0";break;case"":r+=n.substring(i,o+1);break;default:E()}i=o+2}return new R(s)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(n,e){return[n,pe(e)]}function Rc(n,e,t){return[n,pe(e),t]}const tf={},nf=["prefixPath","collectionGroup","readTime","documentId"],sf=["prefixPath","collectionGroup","documentId"],rf=["collectionGroup","readTime","prefixPath","documentId"],of=["canonicalId","targetId"],af=["targetId","path"],uf=["path","targetId"],cf=["collectionId","parent"],hf=["indexId","uid"],lf=["uid","sequenceNumber"],df=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],ff=["indexId","uid","orderedDocumentKey"],mf=["userId","collectionPath","documentId"],gf=["userId","collectionPath","largestBatchId"],pf=["userId","collectionGroup","largestBatchId"],Mc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],yf=[...Mc,"documentOverlays"],Lc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Oc=Lc,wf=[...Oc,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Yu{constructor(e,t){super(),this.ie=e,this.currentSequenceNumber=t}}function oe(n,e){const t=I(n);return xe.M(t.ie,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Md(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=bn(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=bn(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Ic();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const u=mc(o,a);u!==null&&s.set(r.key,u),o.isValidDocument()||o.convertToNoDocument(D.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),N())}isEqual(e){return this.batchId===e.batchId&&Ut(this.mutations,e.mutations,(t,s)=>Jo(t,s))&&Ut(this.baseMutations,e.baseMutations,(t,s)=>Jo(t,s))}}class Ui{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){x(e.mutations.length===s.length);let r=Fd;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ui(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t,s,r,i=D.min(),o=D.min(),a=ee.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new $e(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new $e(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new $e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e){this.re=e}}function vf(n,e){let t;if(e.document)t=Ac(n.re,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const s=v.fromSegments(e.noDocument.path),r=vt(e.noDocument.readTime);t=P.newNoDocument(s,r),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return E();{const s=v.fromSegments(e.unknownDocument.path),r=vt(e.unknownDocument.version);t=P.newUnknownDocument(s,r)}}return e.readTime&&t.setReadTime(function(s){const r=new G(s[0],s[1]);return D.fromTimestamp(r)}(e.readTime)),t}function aa(n,e){const t=e.key,s={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:qs(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())s.document=function(r,i){return{name:Pn(r,i.key),fields:i.data.value.mapValue.fields,updateTime:Fn(r,i.version.toTimestamp())}}(n.re,e);else if(e.isNoDocument())s.noDocument={path:t.path.toArray(),readTime:wt(e.version)};else{if(!e.isUnknownDocument())return E();s.unknownDocument={path:t.path.toArray(),version:wt(e.version)}}return s}function qs(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function wt(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function vt(n){const e=new G(n.seconds,n.nanoseconds);return D.fromTimestamp(e)}function rt(n,e){const t=(e.baseMutations||[]).map(i=>ei(n.re,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const s=e.mutations.map(i=>ei(n.re,i)),r=G.fromMillis(e.localWriteTimeMs);return new qi(e.batchId,r,t,s)}function vn(n){const e=vt(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?vt(n.lastLimboFreeSnapshotVersion):D.min();let s;var r;return n.query.documents!==void 0?(x((r=n.query).documents.length===1),s=ye(en(xc(r.documents[0])))):s=function(i){return ye(Nc(i))}(n.query),new $e(s,n.targetId,0,n.lastListenSequenceNumber,e,t,ee.fromBase64String(n.resumeToken))}function Fc(n,e){const t=wt(e.snapshotVersion),s=wt(e.lastLimboFreeSnapshotVersion);let r;r=Vs(e.target)?Cc(n.re,e.target):Pi(n.re,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:gt(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:r}}function $i(n){const e=Nc({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ps(e,e.limit,"L"):e}function Rr(n,e){return new Bi(e.largestBatchId,ei(n.re,e.overlayMutation))}function ua(n,e){const t=e.path.lastSegment();return[n,pe(e.path.popLast()),t]}function ca(n,e,t,s){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:wt(s.readTime),documentKey:pe(s.documentKey.path),largestBatchId:s.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{getBundleMetadata(e,t){return ha(e).get(t).next(s=>{if(s)return{id:(r=s).bundleId,createTime:vt(r.createTime),version:r.version};var r})}saveBundleMetadata(e,t){return ha(e).put({bundleId:(s=t).id,createTime:wt(se(s.createTime)),version:s.version});var s}getNamedQuery(e,t){return la(e).get(t).next(s=>{if(s)return{name:(r=s).name,query:$i(r.bundledQuery),readTime:vt(r.readTime)};var r})}saveNamedQuery(e,t){return la(e).put(function(s){return{name:s.name,readTime:wt(se(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function ha(n){return oe(n,"bundles")}function la(n){return oe(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t){this.It=e,this.userId=t}static oe(e,t){const s=t.uid||"";return new lr(e,s)}getOverlay(e,t){return hn(e).get(ua(this.userId,t)).next(s=>s?Rr(this.It,s):null)}getOverlays(e,t){const s=Ae();return f.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){const r=[];return s.forEach((i,o)=>{const a=new Bi(t,o);r.push(this.ue(e,a))}),f.waitFor(r)}removeOverlaysForBatchId(e,t,s){const r=new Set;t.forEach(o=>r.add(pe(o.getCollectionPath())));const i=[];return r.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,s+1],!1,!0);i.push(hn(e).Y("collectionPathOverlayIndex",a))}),f.waitFor(i)}getOverlaysForCollection(e,t,s){const r=Ae(),i=pe(t),o=IDBKeyRange.bound([this.userId,i,s],[this.userId,i,Number.POSITIVE_INFINITY],!0);return hn(e).W("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=Rr(this.It,u);r.set(c.getKey(),c)}return r})}getOverlaysForCollectionGroup(e,t,s,r){const i=Ae();let o;const a=IDBKeyRange.bound([this.userId,t,s],[this.userId,t,Number.POSITIVE_INFINITY],!0);return hn(e).Z({index:"collectionGroupOverlayIndex",range:a},(u,c,h)=>{const l=Rr(this.It,c);i.size()<r||l.largestBatchId===o?(i.set(l.getKey(),l),o=l.largestBatchId):h.done()}).next(()=>i)}ue(e,t){return hn(e).put(function(s,r,i){const[o,a,u]=ua(r,i.mutation.key);return{userId:r,collectionPath:a,documentId:u,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:Un(s.re,i.mutation)}}(this.It,this.userId,t))}}function hn(n){return oe(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){}ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(j(e.integerValue));else if("doubleValue"in e){const s=j(e.doubleValue);isNaN(s)?this.le(t,13):(this.le(t,15),Ln(s)?t.fe(0):t.fe(s))}else if("timestampValue"in e){const s=e.timestampValue;this.le(t,20),typeof s=="string"?t.de(s):(t.de(`${s.seconds||""}`),t.fe(s.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(lt(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){const s=e.geoPointValue;this.le(t,45),t.fe(s.latitude||0),t.fe(s.longitude||0)}else"mapValue"in e?ec(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):E()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){const s=e.fields||{};this.le(t,55);for(const r of Object.keys(s))this._e(r,t),this.ae(s[r],t)}pe(e,t){const s=e.values||[];this.le(t,50);for(const r of s)this.ae(r,t)}ge(e,t){this.le(t,37),v.fromName(e).path.forEach(s=>{this.le(t,60),this.Ie(s,t)})}le(e,t){e.fe(t)}we(e){e.fe(2)}}it.Te=new it;function Tf(n){if(n===0)return 8;let e=0;return n>>4==0&&(e+=4,n<<=4),n>>6==0&&(e+=2,n<<=2),n>>7==0&&(e+=1),e}function da(n){const e=64-function(t){let s=0;for(let r=0;r<8;++r){const i=Tf(255&t[r]);if(s+=i,i!==8)break}return s}(n);return Math.ceil(e/8)}class Ef{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.Ae(s.value),s=t.next();this.Re()}be(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.Pe(s.value),s=t.next();this.ve()}Ve(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.Ae(s);else if(s<2048)this.Ae(960|s>>>6),this.Ae(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.Ae(480|s>>>12),this.Ae(128|63&s>>>6),this.Ae(128|63&s);else{const r=t.codePointAt(0);this.Ae(240|r>>>18),this.Ae(128|63&r>>>12),this.Ae(128|63&r>>>6),this.Ae(128|63&r)}}this.Re()}Se(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.Pe(s);else if(s<2048)this.Pe(960|s>>>6),this.Pe(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.Pe(480|s>>>12),this.Pe(128|63&s>>>6),this.Pe(128|63&s);else{const r=t.codePointAt(0);this.Pe(240|r>>>18),this.Pe(128|63&r>>>12),this.Pe(128|63&r>>>6),this.Pe(128|63&r)}}this.ve()}De(e){const t=this.Ce(e),s=da(t);this.xe(1+s),this.buffer[this.position++]=255&s;for(let r=t.length-s;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Ne(e){const t=this.Ce(e),s=da(t);this.xe(1+s),this.buffer[this.position++]=~(255&s);for(let r=t.length-s;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}ke(){this.Oe(255),this.Oe(255)}Me(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.xe(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Ce(e){const t=function(r){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,r,!1),new Uint8Array(i.buffer)}(e),s=(128&t[0])!=0;t[0]^=s?255:128;for(let r=1;r<t.length;++r)t[r]^=s?255:0;return t}Ae(e){const t=255&e;t===0?(this.Oe(0),this.Oe(255)):t===255?(this.Oe(255),this.Oe(0)):this.Oe(t)}Pe(e){const t=255&e;t===0?(this.Fe(0),this.Fe(255)):t===255?(this.Fe(255),this.Fe(0)):this.Fe(e)}Re(){this.Oe(0),this.Oe(1)}ve(){this.Fe(0),this.Fe(1)}Oe(e){this.xe(1),this.buffer[this.position++]=e}Fe(e){this.xe(1),this.buffer[this.position++]=~e}xe(e){const t=e+this.position;if(t<=this.buffer.length)return;let s=2*this.buffer.length;s<t&&(s=t);const r=new Uint8Array(s);r.set(this.buffer),this.buffer=r}}class bf{constructor(e){this.Be=e}me(e){this.Be.Ee(e)}de(e){this.Be.Ve(e)}fe(e){this.Be.De(e)}he(){this.Be.ke()}}class Sf{constructor(e){this.Be=e}me(e){this.Be.be(e)}de(e){this.Be.Se(e)}fe(e){this.Be.Ne(e)}he(){this.Be.Me()}}class ln{constructor(){this.Be=new Ef,this.Le=new bf(this.Be),this.Ue=new Sf(this.Be)}seed(e){this.Be.seed(e)}qe(e){return e===0?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t,s,r){this.indexId=e,this.documentKey=t,this.arrayValue=s,this.directionalValue=r}Ke(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,s=new Uint8Array(t);return s.set(this.directionalValue,0),t!==e?s.set([0],this.directionalValue.length):++s[s.length-1],new ot(this.indexId,this.documentKey,this.arrayValue,s)}}function et(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=fa(n.arrayValue,e.arrayValue),t!==0?t:(t=fa(n.directionalValue,e.directionalValue),t!==0?t:v.comparator(n.documentKey,e.documentKey)))}function fa(n,e){for(let t=0;t<n.length&&t<e.length;++t){const s=n[t]-e[t];if(s!==0)return s}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ge=e.orderBy,this.Qe=[];for(const t of e.filters){const s=t;s.dt()?this.je=s:this.Qe.push(s)}}We(e){const t=Wr(e);if(t!==void 0&&!this.ze(t))return!1;const s=nt(e);let r=0,i=0;for(;r<s.length&&this.ze(s[r]);++r);if(r===s.length)return!0;if(this.je!==void 0){const o=s[r];if(!this.He(this.je,o)||!this.Je(this.Ge[i++],o))return!1;++r}for(;r<s.length;++r){const o=s[r];if(i>=this.Ge.length||!this.Je(this.Ge[i++],o))return!1}return!0}ze(e){for(const t of this.Qe)if(this.He(t,e))return!0;return!1}He(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const s=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===s}Je(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(){this.Ye=new Ki}addToCollectionParentIndex(e,t){return this.Ye.add(t),f.resolve()}getCollectionParents(e,t){return f.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return f.resolve()}deleteFieldIndex(e,t){return f.resolve()}getDocumentsMatchingTarget(e,t){return f.resolve(null)}getIndexType(e,t){return f.resolve(0)}getFieldIndexes(e,t){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}getMinOffset(e,t){return f.resolve(Se.min())}getMinOffsetFromCollectionGroup(e,t){return f.resolve(Se.min())}updateCollectionGroup(e,t,s){return f.resolve()}updateIndexEntries(e,t){return f.resolve()}}class Ki{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new L(R.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new L(R.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new Uint8Array(0);class Af{constructor(e,t){this.user=e,this.databaseId=t,this.Xe=new Ki,this.Ze=new Je(s=>gt(s),(s,r)=>Zn(s,r)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Xe.has(t)){const s=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.Xe.add(t)});const i={collectionId:s,parent:pe(r)};return ma(e).put(i)}return f.resolve()}getCollectionParents(e,t){const s=[],r=IDBKeyRange.bound([t,""],[zu(t),""],!1,!0);return ma(e).W(r).next(i=>{for(const o of i){if(o.collectionId!==t)break;s.push(Ce(o.parent))}return s})}addFieldIndex(e,t){const s=ps(e),r=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete r.indexId;const i=s.add(r);if(t.indexState){const o=fn(e);return i.next(a=>{o.put(ca(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const s=ps(e),r=fn(e),i=dn(e);return s.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const s=dn(e);let r=!0;const i=new Map;return f.forEach(this.tn(t),o=>this.en(e,o).next(a=>{r&&(r=!!a),i.set(o,a)})).next(()=>{if(r){let o=N();const a=[];return f.forEach(i,(u,c)=>{var h;w("IndexedDbIndexManager",`Using index ${h=u,`id=${h.indexId}|cg=${h.collectionGroup}|f=${h.fields.map(V=>`${V.fieldPath}:${V.kind}`).join(",")}`} to execute ${gt(t)}`);const l=function(V,K){const F=Wr(K);if(F===void 0)return null;for(const U of Fs(V,F.fieldPath))switch(U.op){case"array-contains-any":return U.value.arrayValue.values||[];case"array-contains":return[U.value]}return null}(c,u),d=function(V,K){const F=new Map;for(const U of nt(K))for(const we of Fs(V,U.fieldPath))switch(we.op){case"==":case"in":F.set(U.fieldPath.canonicalString(),we.value);break;case"not-in":case"!=":return F.set(U.fieldPath.canonicalString(),we.value),Array.from(F.values())}return null}(c,u),g=function(V,K){const F=[];let U=!0;for(const we of nt(K)){const un=we.kind===0?zo(V,we.fieldPath,V.startAt):Qo(V,we.fieldPath,V.startAt);F.push(un.value),U&&(U=un.inclusive)}return new ze(F,U)}(c,u),p=function(V,K){const F=[];let U=!0;for(const we of nt(K)){const un=we.kind===0?Qo(V,we.fieldPath,V.endAt):zo(V,we.fieldPath,V.endAt);F.push(un.value),U&&(U=un.inclusive)}return new ze(F,U)}(c,u),T=this.nn(u,c,g),S=this.nn(u,c,p),M=this.sn(u,c,d),O=this.rn(u.indexId,l,T,g.inclusive,S,p.inclusive,M);return f.forEach(O,V=>s.J(V,t.limit).next(K=>{K.forEach(F=>{const U=v.fromSegments(F.documentKey);o.has(U)||(o=o.add(U),a.push(U))})}))}).next(()=>a)}return f.resolve(null)})}tn(e){let t=this.Ze.get(e);return t||(t=[e],this.Ze.set(e,t),t)}rn(e,t,s,r,i,o,a){const u=(t!=null?t.length:1)*Math.max(s.length,i.length),c=u/(t!=null?t.length:1),h=[];for(let l=0;l<u;++l){const d=t?this.on(t[l/c]):gs,g=this.un(e,d,s[l%c],r),p=this.cn(e,d,i[l%c],o),T=a.map(S=>this.un(e,d,S,!0));h.push(...this.createRange(g,p,T))}return h}un(e,t,s,r){const i=new ot(e,v.empty(),t,s);return r?i:i.Ke()}cn(e,t,s,r){const i=new ot(e,v.empty(),t,s);return r?i.Ke():i}en(e,t){const s=new xf(t),r=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(i=>{let o=null;for(const a of i)s.We(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let s=2;return f.forEach(this.tn(t),r=>this.en(e,r).next(i=>{i?s!==0&&i.fields.length<function(o){let a=new L(W.comparator),u=!1;for(const c of o.filters){const h=c;h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:a=a.add(h.field))}for(const c of o.orderBy)c.field.isKeyField()||(a=a.add(c.field));return a.size+(u?1:0)}(r)&&(s=1):s=0})).next(()=>s)}an(e,t){const s=new ln;for(const r of nt(e)){const i=t.data.field(r.fieldPath);if(i==null)return null;const o=s.qe(r.kind);it.Te.ce(i,o)}return s.$e()}on(e){const t=new ln;return it.Te.ce(e,t.qe(0)),t.$e()}hn(e,t){const s=new ln;return it.Te.ce(mt(this.databaseId,t),s.qe(function(r){const i=nt(r);return i.length===0?0:i[i.length-1].kind}(e))),s.$e()}sn(e,t,s){if(s===null)return[];let r=[];r.push(new ln);let i=0;for(const o of nt(e)){const a=s[i++];for(const u of r)if(this.ln(t,o.fieldPath)&&Vn(a))r=this.fn(r,o,a);else{const c=u.qe(o.kind);it.Te.ce(a,c)}}return this.dn(r)}nn(e,t,s){return this.sn(e,t,s.position)}dn(e){const t=[];for(let s=0;s<e.length;++s)t[s]=e[s].$e();return t}fn(e,t,s){const r=[...e],i=[];for(const o of s.arrayValue.values||[])for(const a of r){const u=new ln;u.seed(a.$e()),it.Te.ce(o,u.qe(t.kind)),i.push(u)}return i}ln(e,t){return!!e.filters.find(s=>s instanceof ce&&s.field.isEqual(t)&&(s.op==="in"||s.op==="not-in"))}getFieldIndexes(e,t){const s=ps(e),r=fn(e);return(t?s.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):s.W()).next(i=>{const o=[];return f.forEach(i,a=>r.get([a.indexId,this.uid]).next(u=>{o.push(function(c,h){const l=h?new Rn(h.sequenceNumber,new Se(vt(h.readTime),new v(Ce(h.documentKey)),h.largestBatchId)):Rn.empty(),d=c.fields.map(([g,p])=>new vs(W.fromServerFormat(g),p));return new Os(c.indexId,c.collectionGroup,d,l)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((s,r)=>{const i=s.indexState.sequenceNumber-r.indexState.sequenceNumber;return i!==0?i:A(s.collectionGroup,r.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,s){const r=ps(e),i=fn(e);return this._n(e).next(o=>r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>f.forEach(a,u=>i.put(ca(u.indexId,this.user,o,s)))))}updateIndexEntries(e,t){const s=new Map;return f.forEach(t,(r,i)=>{const o=s.get(r.collectionGroup);return(o?f.resolve(o):this.getFieldIndexes(e,r.collectionGroup)).next(a=>(s.set(r.collectionGroup,a),f.forEach(a,u=>this.wn(e,r,u).next(c=>{const h=this.mn(i,u);return c.isEqual(h)?f.resolve():this.gn(e,i,u,c,h)}))))})}yn(e,t,s,r){return dn(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.hn(s,t.key),documentKey:t.key.path.toArray()})}pn(e,t,s,r){return dn(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.hn(s,t.key),t.key.path.toArray()])}wn(e,t,s){const r=dn(e);let i=new L(et);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([s.indexId,this.uid,this.hn(s,t)])},(o,a)=>{i=i.add(new ot(s.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}mn(e,t){let s=new L(et);const r=this.an(t,e);if(r==null)return s;const i=Wr(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Vn(o))for(const a of o.arrayValue.values||[])s=s.add(new ot(t.indexId,e.key,this.on(a),r))}else s=s.add(new ot(t.indexId,e.key,gs,r));return s}gn(e,t,s,r,i){w("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,u,c,h,l){const d=a.getIterator(),g=u.getIterator();let p=Ct(d),T=Ct(g);for(;p||T;){let S=!1,M=!1;if(p&&T){const O=c(p,T);O<0?M=!0:O>0&&(S=!0)}else p!=null?M=!0:S=!0;S?(h(T),T=Ct(g)):M?(l(p),p=Ct(d)):(p=Ct(d),T=Ct(g))}}(r,i,et,a=>{o.push(this.yn(e,t,s,a))},a=>{o.push(this.pn(e,t,s,a))}),f.waitFor(o)}_n(e){let t=1;return fn(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,r,i)=>{i.done(),t=r.sequenceNumber+1}).next(()=>t)}createRange(e,t,s){s=s.sort((o,a)=>et(o,a)).filter((o,a,u)=>!a||et(o,u[a-1])!==0);const r=[];r.push(e);for(const o of s){const a=et(o,e),u=et(o,t);if(a===0)r[0]=e.Ke();else if(a>0&&u<0)r.push(o),r.push(o.Ke());else if(u>0)break}r.push(t);const i=[];for(let o=0;o<r.length;o+=2)i.push(IDBKeyRange.bound([r[o].indexId,this.uid,r[o].arrayValue,r[o].directionalValue,gs,[]],[r[o+1].indexId,this.uid,r[o+1].arrayValue,r[o+1].directionalValue,gs,[]]));return i}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(ga)}getMinOffset(e,t){return f.mapArray(this.tn(t),s=>this.en(e,s).next(r=>r||E())).next(ga)}}function ma(n){return oe(n,"collectionParents")}function dn(n){return oe(n,"indexEntries")}function ps(n){return oe(n,"indexConfiguration")}function fn(n){return oe(n,"indexState")}function ga(n){x(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let s=1;s<n.length;s++){const r=n[s].indexState.offset;Ni(r,e)<0&&(e=r),t<r.largestBatchId&&(t=r.largestBatchId)}return new Se(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ve{constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}static withCacheSize(e){return new ve(e,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(n,e,t){const s=n.store("mutations"),r=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const u=s.Z({range:o},(h,l,d)=>(a++,d.delete()));i.push(u.next(()=>{x(a===1)}));const c=[];for(const h of t.mutations){const l=Rc(e,h.key.path,t.batchId);i.push(r.delete(l)),c.push(h.key)}return f.waitFor(i).next(()=>c)}function Us(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw E();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ve.DEFAULT_COLLECTION_PERCENTILE=10,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ve.DEFAULT=new ve(41943040,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ve.DISABLED=new ve(-1,0,0);class dr{constructor(e,t,s,r){this.userId=e,this.It=t,this.indexManager=s,this.referenceDelegate=r,this.In={}}static oe(e,t,s,r){x(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new dr(i,t,s,r)}checkEmpty(e){let t=!0;const s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Pe(e).Z({index:"userMutationsIndex",range:s},(r,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,s,r){const i=_t(e),o=Pe(e);return o.add({}).next(a=>{x(typeof a=="number");const u=new qi(a,t,s,r),c=function(d,g,p){const T=p.baseMutations.map(M=>Un(d.re,M)),S=p.mutations.map(M=>Un(d.re,M));return{userId:g,batchId:p.batchId,localWriteTimeMs:p.localWriteTime.toMillis(),baseMutations:T,mutations:S}}(this.It,this.userId,u),h=[];let l=new L((d,g)=>A(d.canonicalString(),g.canonicalString()));for(const d of r){const g=Rc(this.userId,d.key.path,a);l=l.add(d.key.path.popLast()),h.push(o.put(c)),h.push(i.put(g,tf))}return l.forEach(d=>{h.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=u.keys()}),f.waitFor(h).next(()=>u)})}lookupMutationBatch(e,t){return Pe(e).get(t).next(s=>s?(x(s.userId===this.userId),rt(this.It,s)):null)}Tn(e,t){return this.In[t]?f.resolve(this.In[t]):this.lookupMutationBatch(e,t).next(s=>{if(s){const r=s.keys();return this.In[t]=r,r}return null})}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=IDBKeyRange.lowerBound([this.userId,s]);let i=null;return Pe(e).Z({index:"userMutationsIndex",range:r},(o,a,u)=>{a.userId===this.userId&&(x(a.batchId>=s),i=rt(this.It,a)),u.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let s=-1;return Pe(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(r,i,o)=>{s=i.batchId,o.done()}).next(()=>s)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Pe(e).W("userMutationsIndex",t).next(s=>s.map(r=>rt(this.It,r)))}getAllMutationBatchesAffectingDocumentKey(e,t){const s=Ss(this.userId,t.path),r=IDBKeyRange.lowerBound(s),i=[];return _t(e).Z({range:r},(o,a,u)=>{const[c,h,l]=o,d=Ce(h);if(c===this.userId&&t.path.isEqual(d))return Pe(e).get(l).next(g=>{if(!g)throw E();x(g.userId===this.userId),i.push(rt(this.It,g))});u.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new L(A);const r=[];return t.forEach(i=>{const o=Ss(this.userId,i.path),a=IDBKeyRange.lowerBound(o),u=_t(e).Z({range:a},(c,h,l)=>{const[d,g,p]=c,T=Ce(g);d===this.userId&&i.path.isEqual(T)?s=s.add(p):l.done()});r.push(u)}),f.waitFor(r).next(()=>this.En(e,s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1,i=Ss(this.userId,s),o=IDBKeyRange.lowerBound(i);let a=new L(A);return _t(e).Z({range:o},(u,c,h)=>{const[l,d,g]=u,p=Ce(d);l===this.userId&&s.isPrefixOf(p)?p.length===r&&(a=a.add(g)):h.done()}).next(()=>this.En(e,a))}En(e,t){const s=[],r=[];return t.forEach(i=>{r.push(Pe(e).get(i).next(o=>{if(o===null)throw E();x(o.userId===this.userId),s.push(rt(this.It,o))}))}),f.waitFor(r).next(()=>s)}removeMutationBatch(e,t){return Pc(e.ie,this.userId,t).next(s=>(e.addOnCommittedListener(()=>{this.An(t.batchId)}),f.forEach(s,r=>this.referenceDelegate.markPotentiallyOrphaned(e,r))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return f.resolve();const s=IDBKeyRange.lowerBound([this.userId]),r=[];return _t(e).Z({range:s},(i,o,a)=>{if(i[0]===this.userId){const u=Ce(i[1]);r.push(u)}else a.done()}).next(()=>{x(r.length===0)})})}containsKey(e,t){return qc(e,this.userId,t)}Rn(e){return Uc(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function qc(n,e,t){const s=Ss(e,t.path),r=s[1],i=IDBKeyRange.lowerBound(s);let o=!1;return _t(n).Z({range:i,X:!0},(a,u,c)=>{const[h,l,d]=a;h===e&&l===r&&(o=!0),c.done()}).next(()=>o)}function Pe(n){return oe(n,"mutations")}function _t(n){return oe(n,"documentMutations")}function Uc(n){return oe(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new It(0)}static vn(){return new It(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,t){this.referenceDelegate=e,this.It=t}allocateTargetId(e){return this.Vn(e).next(t=>{const s=new It(t.highestTargetId);return t.highestTargetId=s.next(),this.Sn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(t=>D.fromTimestamp(new G(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,s){return this.Vn(e).next(r=>(r.highestListenSequenceNumber=t,s&&(r.lastRemoteSnapshotVersion=s.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Sn(e,r)))}addTargetData(e,t){return this.Dn(e,t).next(()=>this.Vn(e).next(s=>(s.targetCount+=1,this.Cn(t,s),this.Sn(e,s))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>kt(e).delete(t.targetId)).next(()=>this.Vn(e)).next(s=>(x(s.targetCount>0),s.targetCount-=1,this.Sn(e,s)))}removeTargets(e,t,s){let r=0;const i=[];return kt(e).Z((o,a)=>{const u=vn(a);u.sequenceNumber<=t&&s.get(u.targetId)===null&&(r++,i.push(this.removeTargetData(e,u)))}).next(()=>f.waitFor(i)).next(()=>r)}forEachTarget(e,t){return kt(e).Z((s,r)=>{const i=vn(r);t(i)})}Vn(e){return ya(e).get("targetGlobalKey").next(t=>(x(t!==null),t))}Sn(e,t){return ya(e).put("targetGlobalKey",t)}Dn(e,t){return kt(e).put(Fc(this.It,t))}Cn(e,t){let s=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,s=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,s=!0),s}getTargetCount(e){return this.Vn(e).next(t=>t.targetCount)}getTargetData(e,t){const s=gt(t),r=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]);let i=null;return kt(e).Z({range:r,index:"queryTargetsIndex"},(o,a,u)=>{const c=vn(a);Zn(t,c.target)&&(i=c,u.done())}).next(()=>i)}addMatchingKeys(e,t,s){const r=[],i=qe(e);return t.forEach(o=>{const a=pe(o.path);r.push(i.put({targetId:s,path:a})),r.push(this.referenceDelegate.addReference(e,s,o))}),f.waitFor(r)}removeMatchingKeys(e,t,s){const r=qe(e);return f.forEach(t,i=>{const o=pe(i.path);return f.waitFor([r.delete([s,o]),this.referenceDelegate.removeReference(e,s,i)])})}removeMatchingKeysForTargetId(e,t){const s=qe(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return s.delete(r)}getMatchingKeysForTargetId(e,t){const s=IDBKeyRange.bound([t],[t+1],!1,!0),r=qe(e);let i=N();return r.Z({range:s,X:!0},(o,a,u)=>{const c=Ce(o[1]),h=new v(c);i=i.add(h)}).next(()=>i)}containsKey(e,t){const s=pe(t.path),r=IDBKeyRange.bound([s],[zu(s)],!1,!0);let i=0;return qe(e).Z({index:"documentTargetsIndex",X:!0,range:r},([o,a],u,c)=>{o!==0&&(i++,c.done())}).next(()=>i>0)}se(e,t){return kt(e).get(t).next(s=>s?vn(s):null)}}function kt(n){return oe(n,"targets")}function ya(n){return oe(n,"targetGlobal")}function qe(n){return oe(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa([n,e],[t,s]){const r=A(n,t);return r===0?A(e,s):r}class Nf{constructor(e){this.xn=e,this.buffer=new L(wa),this.Nn=0}kn(){return++this.Nn}On(e){const t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();wa(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class kf{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){w("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Xe(t)?w("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ye(t)}await this.Fn(3e5)})}}class _f{constructor(e,t){this.$n=e,this.params=t}calculateTargetCount(e,t){return this.$n.Bn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return f.resolve(Ie.at);const s=new Nf(t);return this.$n.forEachTarget(e,r=>s.On(r.sequenceNumber)).next(()=>this.$n.Ln(e,r=>s.On(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.$n.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(w("LruGarbageCollector","Garbage collection skipped; disabled"),f.resolve(pa)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(w("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pa):this.Un(e,t))}getCacheSize(e){return this.$n.getCacheSize(e)}Un(e,t){let s,r,i,o,a,u,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(l=>(l>this.params.maximumSequenceNumbersToCollect?(w("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${l}`),r=this.params.maximumSequenceNumbersToCollect):r=l,o=Date.now(),this.nthSequenceNumber(e,r))).next(l=>(s=l,a=Date.now(),this.removeTargets(e,s,t))).next(l=>(i=l,u=Date.now(),this.removeOrphanedDocuments(e,s))).next(l=>(c=Date.now(),Hr()<=Ft.DEBUG&&w("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(u-a)+`ms
	Removed ${l} documents in `+(c-u)+`ms
Total Duration: ${c-h}ms`),f.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:l})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,t){this.db=e,this.garbageCollector=function(s,r){return new _f(s,r)}(this,t)}Bn(e){const t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}qn(e){let t=0;return this.Ln(e,s=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,(s,r)=>t(r))}addReference(e,t,s){return ys(e,s)}removeReference(e,t,s){return ys(e,s)}removeTargets(e,t,s){return this.db.getTargetCache().removeTargets(e,t,s)}markPotentiallyOrphaned(e,t){return ys(e,t)}Gn(e,t){return function(s,r){let i=!1;return Uc(s).tt(o=>qc(s,o,r).next(a=>(a&&(i=!0),f.resolve(!a)))).next(()=>i)}(e,t)}removeOrphanedDocuments(e,t){const s=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Kn(e,(o,a)=>{if(a<=t){const u=this.Gn(e,o).next(c=>{if(!c)return i++,s.getEntry(e,o).next(()=>(s.removeEntry(o,D.min()),qe(e).delete([0,pe(o.path)])))});r.push(u)}}).next(()=>f.waitFor(r)).next(()=>s.apply(e)).next(()=>i)}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,s)}updateLimboDocument(e,t){return ys(e,t)}Kn(e,t){const s=qe(e);let r,i=Ie.at;return s.Z({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(i!==Ie.at&&t(new v(Ce(r)),i),i=c,r=u):i=Ie.at}).next(()=>{i!==Ie.at&&t(new v(Ce(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ys(n,e){return qe(n).put(function(t,s){return{targetId:0,path:pe(t.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this.changes=new Je(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,P.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?f.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this.It=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,s){return tt(e).put(s)}removeEntry(e,t,s){return tt(e).delete(function(r,i){const o=r.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],qs(i),o[o.length-1]]}(t,s))}updateMetadata(e,t){return this.getMetadata(e).next(s=>(s.byteSize+=t,this.Qn(e,s)))}getEntry(e,t){let s=P.newInvalidDocument(t);return tt(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(mn(t))},(r,i)=>{s=this.jn(t,i)}).next(()=>s)}Wn(e,t){let s={size:0,document:P.newInvalidDocument(t)};return tt(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(mn(t))},(r,i)=>{s={document:this.jn(t,i),size:Us(i)}}).next(()=>s)}getEntries(e,t){let s=Te();return this.zn(e,t,(r,i)=>{const o=this.jn(r,i);s=s.insert(r,o)}).next(()=>s)}Hn(e,t){let s=Te(),r=new Q(v.comparator);return this.zn(e,t,(i,o)=>{const a=this.jn(i,o);s=s.insert(i,a),r=r.insert(i,Us(o))}).next(()=>({documents:s,Jn:r}))}zn(e,t,s){if(t.isEmpty())return f.resolve();let r=new L(Ta);t.forEach(u=>r=r.add(u));const i=IDBKeyRange.bound(mn(r.first()),mn(r.last())),o=r.getIterator();let a=o.getNext();return tt(e).Z({index:"documentKeyIndex",range:i},(u,c,h)=>{const l=v.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&Ta(a,l)<0;)s(a,null),a=o.getNext();a&&a.isEqual(l)&&(s(a,c),a=o.hasNext()?o.getNext():null),a?h.j(mn(a)):h.done()}).next(()=>{for(;a;)s(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,t,s){const r=[t.popLast().toArray(),t.lastSegment(),qs(s.readTime),s.documentKey.path.isEmpty()?"":s.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return tt(e).W(IDBKeyRange.bound(r,i,!0)).next(o=>{let a=Te();for(const u of o){const c=this.jn(v.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);a=a.insert(c.key,c)}return a})}getAllFromCollectionGroup(e,t,s,r){let i=Te();const o=Ia(t,s),a=Ia(t,Se.max());return tt(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,h)=>{const l=this.jn(v.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);i=i.insert(l.key,l),i.size===r&&h.done()}).next(()=>i)}newChangeBuffer(e){return new Lf(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return va(e).get("remoteDocumentGlobalKey").next(t=>(x(!!t),t))}Qn(e,t){return va(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){const s=vf(this.It,t);if(!(s.isNoDocument()&&s.version.isEqual(D.min())))return s}return P.newInvalidDocument(e)}}function $c(n){return new Mf(n)}class Lf extends Bc{constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new Je(s=>s.toString(),(s,r)=>s.isEqual(r))}applyChanges(e){const t=[];let s=0,r=new L((i,o)=>A(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Xn.get(i);if(t.push(this.Yn.removeEntry(e,i,a.readTime)),o.isValidDocument()){const u=aa(this.Yn.It,o);r=r.add(i.path.popLast());const c=Us(u);s+=c-a.size,t.push(this.Yn.addEntry(e,i,u))}else if(s-=a.size,this.trackRemovals){const u=aa(this.Yn.It,o.convertToNoDocument(D.min()));t.push(this.Yn.addEntry(e,i,u))}}),r.forEach(i=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Yn.updateMetadata(e,s)),f.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next(s=>(this.Xn.set(t,{size:s.size,readTime:s.document.readTime}),s.document))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next(({documents:s,Jn:r})=>(r.forEach((i,o)=>{this.Xn.set(i,{size:o,readTime:s.get(i).readTime})}),s))}}function va(n){return oe(n,"remoteDocumentGlobal")}function tt(n){return oe(n,"remoteDocumentsV14")}function mn(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Ia(n,e){const t=e.documentKey.path.toArray();return[n,qs(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Ta(n,e){const t=n.path.toArray(),s=e.path.toArray();let r=0;for(let i=0;i<t.length-2&&i<s.length-2;++i)if(r=A(t[i],s[i]),r)return r;return r=A(t.length,s.length),r||(r=A(t[t.length-2],s[s.length-2]),r||A(t[t.length-1],s[s.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.getBaseDocument(e,t,s))).next(r=>(s!==null&&bn(s.mutation,r,Ee.empty(),G.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,N()).next(()=>s))}getLocalViewOfDocuments(e,t,s=N()){const r=Ae();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let o=wn();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=Ae();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,N()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,r){let i=Te();const o=Sn(),a=Sn();return t.forEach((u,c)=>{const h=s.get(c.key);r.has(c.key)&&(h===void 0||h.mutation instanceof Oe)?i=i.insert(c.key,c):h!==void 0&&(o.set(c.key,h.mutation.getFieldMask()),bn(h.mutation,c,h.mutation.getFieldMask(),G.now()))}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,h)=>o.set(c,h)),t.forEach((c,h)=>{var l;return a.set(c,new Of(h,(l=o.get(c))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(e,t){const s=Sn();let r=new Q((o,a)=>o-a),i=N();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let h=s.get(u)||Ee.empty();h=a.applyToLocalView(c,h),s.set(u,h);const l=(r.get(a.batchId)||N()).add(u);r=r.insert(a.batchId,l)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,l=Ic();h.forEach(d=>{if(!i.has(d)){const g=mc(t.get(d),s.get(d));g!==null&&l.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,l))}return f.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s){return function(r){return v.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Li(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):f.resolve(Ae());let a=-1,u=i;return o.next(c=>f.forEach(c,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),i.get(h)?f.resolve():this.getBaseDocument(e,h,l).next(d=>{u=u.insert(h,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,N())).next(h=>({batchId:a,changes:vc(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new v(t)).next(s=>{let r=wn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s){const r=t.collectionGroup;let i=wn();return this.indexManager.getCollectionParents(e,r).next(o=>f.forEach(o,a=>{const u=function(c,h){return new Le(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(t,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s).next(c=>{c.forEach((h,l)=>{i=i.insert(h,l)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId))).next(i=>{i.forEach((a,u)=>{const c=u.getKey();r.get(c)===null&&(r=r.insert(c,P.newInvalidDocument(c)))});let o=wn();return r.forEach((a,u)=>{const c=i.get(a);c!==void 0&&bn(c.mutation,u,Ee.empty(),G.now()),Oi(t,u)&&(o=o.insert(a,u))}),o})}getBaseDocument(e,t,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,t):f.resolve(P.newInvalidDocument(t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return f.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var s;return this.Zn.set(t.id,{id:(s=t).id,version:s.version,createTime:se(s.createTime)}),f.resolve()}getNamedQuery(e,t){return f.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(s){return{name:s.name,query:$i(s.bundledQuery),readTime:se(s.readTime)}}(t)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(){this.overlays=new Q(v.comparator),this.es=new Map}getOverlay(e,t){return f.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ae();return f.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.ue(e,t,i)}),f.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),f.resolve()}getOverlaysForCollection(e,t,s){const r=Ae(),i=t.length+1,o=new v(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return f.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new Q((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>s){let h=i.get(c.largestBatchId);h===null&&(h=Ae(),i=i.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Ae(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=r)););return f.resolve(a)}ue(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Bi(t,s));let i=this.es.get(t);i===void 0&&(i=N(),this.es.set(t,i)),this.es.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.ns=new L(te.ss),this.rs=new L(te.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const s=new te(e,t);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.cs(new te(e,t))}hs(e,t){e.forEach(s=>this.removeReference(s,t))}ls(e){const t=new v(new R([])),s=new te(t,e),r=new te(t,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new v(new R([])),s=new te(t,e),r=new te(t,e+1);let i=N();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new te(e,0),s=this.ns.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class te{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return v.comparator(e.key,t.key)||A(e._s,t._s)}static os(e,t){return A(e._s,t._s)||v.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new L(te.ss)}checkEmpty(e){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new qi(i,t,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new te(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,t){return f.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.ps(s),i=r<0?0:r;return f.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new te(t,0),r=new te(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),f.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new L(A);return t.forEach(r=>{const i=new te(r,0),o=new te(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),f.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;v.isDocumentKey(i)||(i=i.child(""));const o=new te(new v(i),0);let a=new L(A);return this.gs.forEachWhile(u=>{const c=u.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(u._s)),!0)},o),f.resolve(this.Is(a))}Is(e){const t=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){x(this.Ts(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return f.forEach(t.mutations,r=>{const i=new te(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,t){const s=new te(t,0),r=this.gs.firstAfterOrEqual(s);return f.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,f.resolve()}Ts(e,t){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e){this.Es=e,this.docs=new Q(v.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return f.resolve(s?s.document.mutableCopy():P.newInvalidDocument(t))}getEntries(e,t){let s=Te();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():P.newInvalidDocument(r))}),f.resolve(s)}getAllFromCollection(e,t,s){let r=Te();const i=new v(t.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||Ni(Hu(u),s)<=0||(r=r.insert(u.key,u.mutableCopy()))}return f.resolve(r)}getAllFromCollectionGroup(e,t,s,r){E()}As(e,t){return f.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Uf(this)}getSize(e){return f.resolve(this.size)}}class Uf extends Bc{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),f.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this.persistence=e,this.Rs=new Je(t=>gt(t),Zn),this.lastRemoteSnapshotVersion=D.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Gi,this.targetCount=0,this.vs=It.Pn()}forEachTarget(e,t){return this.Rs.forEach((s,r)=>t(r)),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.bs&&(this.bs=t),f.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new It(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,f.resolve()}updateTargetData(e,t){return this.Dn(t),f.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),f.waitFor(i).next(()=>r)}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,t){const s=this.Rs.get(t)||null;return f.resolve(s)}addMatchingKeys(e,t,s){return this.Ps.us(t,s),f.resolve()}removeMatchingKeys(e,t,s){this.Ps.hs(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),f.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),f.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Ps.ds(t);return f.resolve(s)}containsKey(e,t){return f.resolve(this.Ps.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new Ie(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Bf(this),this.indexManager=new Df,this.remoteDocumentCache=function(s){return new qf(s)}(s=>this.referenceDelegate.xs(s)),this.It=new Vc(t),this.Ns=new Vf(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ff,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Vs[e.toKey()];return s||(s=new Pf(t,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,s){w("MemoryPersistence","Starting transaction:",e);const r=new $f(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,t){return f.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,t)))}}class $f extends Yu{constructor(e){super(),this.currentSequenceNumber=e}}class fr{constructor(e){this.persistence=e,this.Fs=new Gi,this.$s=null}static Bs(e){return new fr(e)}get Ls(){if(this.$s)return this.$s;throw E()}addReference(e,t,s){return this.Fs.addReference(s,t),this.Ls.delete(s.toString()),f.resolve()}removeReference(e,t,s){return this.Fs.removeReference(s,t),this.Ls.add(s.toString()),f.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),f.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Ls,s=>{const r=v.fromPath(s);return this.Us(e,r).next(i=>{i||t.removeEntry(r,D.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.Us(e,t).next(s=>{s?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}Us(e,t){return f.or([()=>f.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e){this.It=e}$(e,t,s,r){const i=new ar("createOrUpgrade",t);s<1&&r>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",oa,{unique:!0}),a.createObjectStore("documentMutations")}(e),Ea(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=f.resolve();return s<3&&r>=3&&(s!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Ea(e)),o=o.next(()=>function(a){const u=a.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:D.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",c)}(i))),s<4&&r>=4&&(s!==0&&(o=o.next(()=>function(a,u){return u.store("mutations").W().next(c=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",oa,{unique:!0});const h=u.store("mutations"),l=c.map(d=>h.put(d));return f.waitFor(l)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),s<5&&r>=5&&(o=o.next(()=>this.qs(i))),s<6&&r>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(i)))),s<7&&r>=7&&(o=o.next(()=>this.Gs(i))),s<8&&r>=8&&(o=o.next(()=>this.Qs(e,i))),s<9&&r>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),s<10&&r>=10&&(o=o.next(()=>this.js(i))),s<11&&r>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),s<12&&r>=12&&(o=o.next(()=>{(function(a){const u=a.createObjectStore("documentOverlays",{keyPath:mf});u.createIndex("collectionPathOverlayIndex",gf,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",pf,{unique:!1})})(e)})),s<13&&r>=13&&(o=o.next(()=>function(a){const u=a.createObjectStore("remoteDocumentsV14",{keyPath:nf});u.createIndex("documentKeyIndex",sf),u.createIndex("collectionGroupIndex",rf)}(e)).next(()=>this.Ws(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),s<14&&r>=14&&(o=o.next(()=>this.zs(e,i))),s<15&&r>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:hf}).createIndex("sequenceNumberIndex",lf,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:df}).createIndex("documentKeyIndex",ff,{unique:!1})}(e))),o}Ks(e){let t=0;return e.store("remoteDocuments").Z((s,r)=>{t+=Us(r)}).next(()=>{const s={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",s)})}qs(e){const t=e.store("mutationQueues"),s=e.store("mutations");return t.W().next(r=>f.forEach(r,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return s.W("userMutationsIndex",o).next(a=>f.forEach(a,u=>{x(u.userId===i.userId);const c=rt(this.It,u);return Pc(e,i.userId,c).next(()=>{})}))}))}Gs(e){const t=e.store("targetDocuments"),s=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(r=>{const i=[];return s.Z((o,a)=>{const u=new R(o),c=function(h){return[0,pe(h)]}(u);i.push(t.get(c).next(h=>h?f.resolve():(l=>t.put({targetId:0,path:pe(l),sequenceNumber:r.highestListenSequenceNumber}))(u)))}).next(()=>f.waitFor(i))})}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:cf});const s=t.store("collectionParents"),r=new Ki,i=o=>{if(r.add(o)){const a=o.lastSegment(),u=o.popLast();return s.put({collectionId:a,parent:pe(u)})}};return t.store("remoteDocuments").Z({X:!0},(o,a)=>{const u=new R(o);return i(u.popLast())}).next(()=>t.store("documentMutations").Z({X:!0},([o,a,u],c)=>{const h=Ce(a);return i(h.popLast())}))}js(e){const t=e.store("targets");return t.Z((s,r)=>{const i=vn(r),o=Fc(this.It,i);return t.put(o)})}Ws(e,t){const s=t.store("remoteDocuments"),r=[];return s.Z((i,o)=>{const a=t.store("remoteDocumentsV14"),u=(c=o,c.document?new v(R.fromString(c.document.name).popFirst(5)):c.noDocument?v.fromSegments(c.noDocument.path):c.unknownDocument?v.fromSegments(c.unknownDocument.path):E()).path.toArray();var c;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const h={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};r.push(a.put(h))}).next(()=>f.waitFor(r))}zs(e,t){const s=t.store("mutations"),r=$c(this.It),i=new Gc(fr.Bs,this.It.re);return s.W().next(o=>{const a=new Map;return o.forEach(u=>{var c;let h=(c=a.get(u.userId))!==null&&c!==void 0?c:N();rt(this.It,u).keys().forEach(l=>h=h.add(l)),a.set(u.userId,h)}),f.forEach(a,(u,c)=>{const h=new ne(c),l=lr.oe(this.It,h),d=i.getIndexManager(h),g=dr.oe(h,this.It,d,i.referenceDelegate);return new Kc(r,g,l,d).recalculateAndSaveOverlaysForDocumentKeys(new ti(t,Ie.at),u).next()})})}}function Ea(n){n.createObjectStore("targetDocuments",{keyPath:af}).createIndex("documentTargetsIndex",uf,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",of,{unique:!0}),n.createObjectStore("targetGlobal")}const Mr="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ji{constructor(e,t,s,r,i,o,a,u,c,h,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=s,this.Hs=i,this.window=o,this.document=a,this.Js=c,this.Ys=h,this.Xs=l,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!ji.C())throw new y(m.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Rf(this,r),this.ii=t+"main",this.It=new Vc(u),this.ri=new xe(this.ii,this.Xs,new Kf(this.It)),this.Cs=new Cf(this.referenceDelegate,this.It),this.remoteDocumentCache=$c(this.It),this.Ns=new If,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,h===!1&&H("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new y(m.FAILED_PRECONDITION,Mr);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new Ie(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ws(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(t=>{t||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(t=>this.isPrimary&&!t?this._i(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(Xe(e))return w("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return w("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return gn(e).get("owner").next(t=>f.resolve(this.mi(t)))}gi(e){return ws(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const s=oe(t,"clientMetadata");return s.W().next(r=>{const i=this.Ii(r,18e5),o=r.filter(a=>i.indexOf(a)===-1);return f.forEach(o,a=>s.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?f.resolve(!0):gn(e).get("owner").next(t=>{if(t!==null&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new y(m.FAILED_PRECONDITION,Mr);return!1}}return!(!this.networkEnabled||!this.inForeground)||ws(e).W().next(s=>this.Ii(s,5e3).find(r=>{if(this.clientId!==r.clientId){const i=!this.networkEnabled&&r.networkEnabled,o=!this.inForeground&&r.inForeground,a=this.networkEnabled===r.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&w("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new ti(e,Ie.at);return this._i(t).next(()=>this.gi(t))}),this.ri.close(),this.Pi()}Ii(e,t){return e.filter(s=>this.pi(s.updateTimeMs,t)&&!this.Ei(s.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>ws(e).W().next(t=>this.Ii(t,18e5).map(s=>s.clientId)))}get started(){return this.Ds}getMutationQueue(e,t){return dr.oe(e,this.It,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Af(e,this.It.re.databaseId)}getDocumentOverlayCache(e){return lr.oe(this.It,e)}getBundleCache(){return this.Ns}runTransaction(e,t,s){w("IndexedDbPersistence","Starting transaction:",e);const r=t==="readonly"?"readonly":"readwrite",i=(o=this.Xs)===15?wf:o===14?Oc:o===13?Lc:o===12?yf:o===11?Mc:void E();var o;let a;return this.ri.runTransaction(e,r,i,u=>(a=new ti(u,this.Ss?this.Ss.next():Ie.at),t==="readwrite-primary"?this.fi(a).next(c=>!!c||this.di(a)).next(c=>{if(!c)throw H(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new y(m.FAILED_PRECONDITION,Wu);return s(a)}).next(c=>this.wi(a).next(()=>c)):this.Vi(a).next(()=>s(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Vi(e){return gn(e).get("owner").next(t=>{if(t!==null&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)&&!this.mi(t)&&!(this.Ys||this.allowTabSynchronization&&t.allowTabSynchronization))throw new y(m.FAILED_PRECONDITION,Mr)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return gn(e).put("owner",t)}static C(){return xe.C()}_i(e){const t=gn(e);return t.get("owner").next(s=>this.mi(s)?(w("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):f.resolve())}pi(e,t){const s=Date.now();return!(e<s-t)&&(!(e>s)||(H(`Detected an update time that is in the future: ${e} > ${s}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),Xh()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{const s=((t=this.oi)===null||t===void 0?void 0:t.getItem(this.Ti(e)))!==null;return w("IndexedDbPersistence",`Client '${e}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return H("IndexedDbPersistence","Failed to get zombied client id.",s),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){H("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function gn(n){return oe(n,"owner")}function ws(n){return oe(n,"clientMetadata")}function zi(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Si=s,this.Di=r}static Ci(e,t){let s=N(),r=N();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Qi(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,s,r){return this.ki(e,t).next(i=>i||this.Oi(e,t,r,s)).next(i=>i||this.Mi(e,t))}ki(e,t){if(Yo(t))return f.resolve(null);let s=ye(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Ps(t,null,"F"),s=ye(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=N(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(u=>{const c=this.Fi(t,a);return this.$i(t,c,o,u.readTime)?this.ki(e,Ps(t,null,"F")):this.Bi(e,c,t,u)}))})))}Oi(e,t,s,r){return Yo(t)||r.isEqual(D.min())?this.Mi(e,t):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(t,i);return this.$i(t,o,s,r)?this.Mi(e,t):(Hr()<=Ft.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Jr(t)),this.Bi(e,o,t,Qu(r,-1)))})}Fi(e,t){let s=new L(oc(e));return t.forEach((r,i)=>{Oi(e,i)&&(s=s.add(i))}),s}$i(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return Hr()<=Ft.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",Jr(t)),this.Ni.getDocumentsMatchingQuery(e,t,Se.min())}Bi(e,t,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t,s,r){this.persistence=e,this.Li=t,this.It=r,this.Ui=new Q(A),this.qi=new Je(i=>gt(i),Zn),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Kc(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ui))}}function zc(n,e,t,s){return new Gf(n,e,t,s)}async function Qc(n,e){const t=I(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Qi(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let u=N();for(const c of r){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of i){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return t.localDocuments.getDocuments(s,u).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function jf(n,e){const t=I(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const h=u.batch,l=h.keys();let d=f.resolve();return l.forEach(g=>{d=d.next(()=>c.getEntry(a,g)).next(p=>{const T=u.docVersions.get(g);x(T!==null),p.version.compareTo(T)<0&&(h.applyToRemoteDocument(p,u),p.isValidDocument()&&(p.setReadTime(u.commitVersion),c.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=N();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function Hc(n){const e=I(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function zf(n,e){const t=I(n),s=e.snapshotVersion;let r=t.Ui;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Gi.newChangeBuffer({trackRemovals:!0});r=t.Ui;const a=[];e.targetChanges.forEach((h,l)=>{const d=r.get(l);if(!d)return;a.push(t.Cs.removeMatchingKeys(i,h.removedDocuments,l).next(()=>t.Cs.addMatchingKeys(i,h.addedDocuments,l)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(l)?g=g.withResumeToken(ee.EMPTY_BYTE_STRING,D.min()).withLastLimboFreeSnapshotVersion(D.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),r=r.insert(l,g),function(p,T,S){return p.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,g,h)&&a.push(t.Cs.updateTargetData(i,g))});let u=Te(),c=N();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(Wc(i,o,e.documentUpdates).next(h=>{u=h.Wi,c=h.zi})),!s.isEqual(D.min())){const h=t.Cs.getLastRemoteSnapshotVersion(i).next(l=>t.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return f.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(t.Ui=r,i))}function Wc(n,e,t){let s=N(),r=N();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let o=Te();return t.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),u.isNoDocument()&&u.version.isEqual(D.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):w("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Wi:o,zi:r}})}function Qf(n,e){const t=I(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Gt(n,e){const t=I(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.Cs.getTargetData(s,e).next(i=>i?(r=i,f.resolve(r)):t.Cs.allocateTargetId(s).next(o=>(r=new $e(e,o,0,s.currentSequenceNumber),t.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ui=t.Ui.insert(s.targetId,s),t.qi.set(e,s.targetId)),s})}async function jt(n,e,t){const s=I(n),r=s.Ui.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Xe(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function Bs(n,e,t){const s=I(n);let r=D.min(),i=N();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const h=I(a),l=h.qi.get(c);return l!==void 0?f.resolve(h.Ui.get(l)):h.Cs.getTargetData(u,c)}(s,o,ye(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,t?r:D.min(),t?i:N())).next(a=>(Jc(s,ic(e),a),{documents:a,Hi:i})))}function Yc(n,e){const t=I(n),s=I(t.Cs),r=t.Ui.get(e);return r?Promise.resolve(r.target):t.persistence.runTransaction("Get target data","readonly",i=>s.se(i,e).next(o=>o?o.target:null))}function Xc(n,e){const t=I(n),s=t.Ki.get(e)||D.min();return t.persistence.runTransaction("Get new document changes","readonly",r=>t.Gi.getAllFromCollectionGroup(r,e,Qu(s,-1),Number.MAX_SAFE_INTEGER)).then(r=>(Jc(t,e,r),r))}function Jc(n,e,t){let s=n.Ki.get(e)||D.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.Ki.set(e,s)}async function Hf(n,e,t,s){const r=I(n);let i=N(),o=Te();for(const c of t){const h=e.Ji(c.metadata.name);c.document&&(i=i.add(h));const l=e.Yi(c);l.setReadTime(e.Xi(c.metadata.readTime)),o=o.insert(h,l)}const a=r.Gi.newChangeBuffer({trackRemovals:!0}),u=await Gt(r,function(c){return ye(en(R.fromString(`__bundle__/docs/${c}`)))}(s));return r.persistence.runTransaction("Apply bundle documents","readwrite",c=>Wc(c,a,o).next(h=>(a.apply(c),h)).next(h=>r.Cs.removeMatchingKeysForTargetId(c,u.targetId).next(()=>r.Cs.addMatchingKeys(c,i,u.targetId)).next(()=>r.localDocuments.getLocalViewOfDocuments(c,h.Wi,h.zi)).next(()=>h.Wi)))}async function Wf(n,e,t=N()){const s=await Gt(n,ye($i(e.bundledQuery))),r=I(n);return r.persistence.runTransaction("Save named query","readwrite",i=>{const o=se(e.readTime);if(s.snapshotVersion.compareTo(o)>=0)return r.Ns.saveNamedQuery(i,e);const a=s.withResumeToken(ee.EMPTY_BYTE_STRING,o);return r.Ui=r.Ui.insert(a.targetId,a),r.Cs.updateTargetData(i,a).next(()=>r.Cs.removeMatchingKeysForTargetId(i,s.targetId)).next(()=>r.Cs.addMatchingKeys(i,t,s.targetId)).next(()=>r.Ns.saveNamedQuery(i,e))})}function ba(n,e){return`firestore_clients_${n}_${e}`}function Sa(n,e,t){let s=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(s+=`_${e.uid}`),s}function Lr(n,e){return`firestore_targets_${n}_${e}`}class $s{constructor(e,t,s,r){this.user=e,this.batchId=t,this.state=s,this.error=r}static Zi(e,t,s){const r=JSON.parse(s);let i,o=typeof r=="object"&&["pending","acknowledged","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(i=new y(r.error.code,r.error.message))),o?new $s(e,t,r.state,i):(H("SharedClientState",`Failed to parse mutation state for ID '${t}': ${s}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class xn{constructor(e,t,s){this.targetId=e,this.state=t,this.error=s}static Zi(e,t){const s=JSON.parse(t);let r,i=typeof s=="object"&&["not-current","current","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return i&&s.error&&(i=typeof s.error.message=="string"&&typeof s.error.code=="string",i&&(r=new y(s.error.code,s.error.message))),i?new xn(e,s.state,r):(H("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ks{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const s=JSON.parse(t);let r=typeof s=="object"&&s.activeTargetIds instanceof Array,i=hr();for(let o=0;r&&o<s.activeTargetIds.length;++o)r=Zu(s.activeTargetIds[o]),i=i.add(s.activeTargetIds[o]);return r?new Ks(e,i):(H("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Hi{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Hi(t.clientId,t.onlineState):(H("SharedClientState",`Failed to parse online state: ${e}`),null)}}class ni{constructor(){this.activeTargetIds=hr()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Or{constructor(e,t,s,r,i){this.window=e,this.Hs=t,this.persistenceKey=s,this.sr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new Q(A),this.started=!1,this.cr=[];const o=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ar=ba(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new ni),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const s of e){if(s===this.sr)continue;const r=this.getItem(ba(this.persistenceKey,s));if(r){const i=Ks.Zi(s,r);i&&(this.ur=this.ur.insert(i.clientId,i))}}this.gr();const t=this.storage.getItem(this.wr);if(t){const s=this.yr(t);s&&this.pr(s)}for(const s of this.cr)this.rr(s);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach((s,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,s){this.Tr(e,t,s),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Lr(this.persistenceKey,e));if(s){const r=xn.Zi(e,s);r&&(t=r.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Lr(this.persistenceKey,e))}updateQueryState(e,t,s){this.Rr(e,t,s)}handleUserChange(e,t,s){t.forEach(r=>{this.Er(r)}),this.currentUser=e,s.forEach(r=>{this.addPendingMutation(r)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return w("SharedClientState","READ",e,t),t}setItem(e,t){w("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){w("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const t=e;if(t.storageArea===this.storage){if(w("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ar)return void H("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.lr.test(t.key)){if(t.newValue==null){const s=this.vr(t.key);return this.Vr(s,null)}{const s=this.Sr(t.key,t.newValue);if(s)return this.Vr(s.clientId,s)}}else if(this.dr.test(t.key)){if(t.newValue!==null){const s=this.Dr(t.key,t.newValue);if(s)return this.Cr(s)}}else if(this._r.test(t.key)){if(t.newValue!==null){const s=this.Nr(t.key,t.newValue);if(s)return this.kr(s)}}else if(t.key===this.wr){if(t.newValue!==null){const s=this.yr(t.newValue);if(s)return this.pr(s)}}else if(t.key===this.hr){const s=function(r){let i=Ie.at;if(r!=null)try{const o=JSON.parse(r);x(typeof o=="number"),i=o}catch(o){H("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(t.newValue);s!==Ie.at&&this.sequenceNumberHandler(s)}else if(t.key===this.mr){const s=this.Or(t.newValue);await Promise.all(s.map(r=>this.syncEngine.Mr(r)))}}}else this.cr.push(t)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,s){const r=new $s(this.currentUser,e,t,s),i=Sa(this.persistenceKey,this.currentUser,e);this.setItem(i,r.tr())}Er(e){const t=Sa(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){const t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,s){const r=Lr(this.persistenceKey,e),i=new xn(e,t,s);this.setItem(r,i.tr())}Pr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){const t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){const s=this.vr(e);return Ks.Zi(s,t)}Dr(e,t){const s=this.dr.exec(e),r=Number(s[1]),i=s[2]!==void 0?s[2]:null;return $s.Zi(new ne(i),r,t)}Nr(e,t){const s=this._r.exec(e),r=Number(s[1]);return xn.Zi(r,t)}yr(e){return Hi.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);w("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){const s=t?this.ur.insert(e,t):this.ur.remove(e),r=this.Ir(this.ur),i=this.Ir(s),o=[],a=[];return i.forEach(u=>{r.has(u)||o.push(u)}),r.forEach(u=>{i.has(u)||a.push(u)}),this.syncEngine.Br(o,a).then(()=>{this.ur=s})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=hr();return e.forEach((s,r)=>{t=t.unionWith(r.activeTargetIds)}),t}}class Zc{constructor(){this.Lr=new ni,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,s){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new ni,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,s,r,i){const o=this.ho(e,t);w("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(u=>(w("RestConnection","Received: ",u),u),u=>{throw qt("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",s),u})}_o(e,t,s,r,i,o){return this.ao(e,t,s,r,i)}lo(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Zt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,t){const s=Xf[e];return`${this.oo}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,s,r){return new Promise((i,o)=>{const a=new Zl;a.setWithCredentials(!0),a.listenOnce(Yl.COMPLETE,()=>{var c;try{switch(a.getLastErrorCode()){case _r.NO_ERROR:const h=a.getResponseJson();w("Connection","XHR received:",JSON.stringify(h)),i(h);break;case _r.TIMEOUT:w("Connection",'RPC "'+e+'" timed out'),o(new y(m.DEADLINE_EXCEEDED,"Request time out"));break;case _r.HTTP_ERROR:const l=a.getStatus();if(w("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=(c=d)===null||c===void 0?void 0:c.error;if(g&&g.status&&g.message){const p=function(T){const S=T.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(S)>=0?S:m.UNKNOWN}(g.status);o(new y(p,g.message))}else o(new y(m.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new y(m.UNAVAILABLE,"Connection failed."));break;default:E()}}finally{w("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(r);a.send(t,"POST",u,s,15)})}wo(e,t,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Hl(),o=Wl(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Jl({})),this.lo(a.initMessageHeaders,t,s),a.encodeInitMessageHeaders=!0;const u=r.join("");w("Connection","Creating WebChannel: "+u,a);const c=i.createWebChannel(u,a);let h=!1,l=!1;const d=new Jf({Hr:p=>{l?w("Connection","Not sending because WebChannel is closed:",p):(h||(w("Connection","Opening WebChannel transport."),c.open(),h=!0),w("Connection","WebChannel sending:",p),c.send(p))},Jr:()=>c.close()}),g=(p,T,S)=>{p.listen(T,M=>{try{S(M)}catch(O){setTimeout(()=>{throw O},0)}})};return g(c,fs.EventType.OPEN,()=>{l||w("Connection","WebChannel transport opened.")}),g(c,fs.EventType.CLOSE,()=>{l||(l=!0,w("Connection","WebChannel transport closed"),d.io())}),g(c,fs.EventType.ERROR,p=>{l||(l=!0,qt("Connection","WebChannel transport errored:",p),d.io(new y(m.UNAVAILABLE,"The operation could not be completed")))}),g(c,fs.EventType.MESSAGE,p=>{var T;if(!l){const S=p.data[0];x(!!S);const M=S,O=M.error||((T=M[0])===null||T===void 0?void 0:T.error);if(O){w("Connection","WebChannel received error:",O);const V=O.status;let K=function(U){const we=X[U];if(we!==void 0)return yc(we)}(V),F=O.message;K===void 0&&(K=m.INTERNAL,F="Unknown error status: "+V+" with message "+O.message),l=!0,d.io(new y(K,F)),c.close()}else w("Connection","WebChannel received:",S),d.ro(S)}}),g(o,Xl.STAT_EVENT,p=>{p.stat===Oo.PROXY?w("Connection","Detected buffering proxy"):p.stat===Oo.NOPROXY&&w("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(){return typeof window<"u"?window:null}function xs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(n){return new Kd(n,!0)}class Wi{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-s);r>0&&w("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,t,s,r,i,o,a,u){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Wi(e,t)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():t&&t.code===m.RESOURCE_EXHAUSTED?(H(t.toString()),H("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===t&&this.Go(s,r)},s=>{e(()=>{const r=new y(m.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,t){const s=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return w("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class em extends th{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.It=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=zd(this.It,e),s=function(r){if(!("targetChange"in r))return D.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?D.min():i.readTime?se(i.readTime):D.min()}(e);return this.listener.Wo(t,s)}zo(e){const t={};t.database=qn(this.It),t.addTarget=function(r,i){let o;const a=i.target;return o=Vs(a)?{documents:Cc(r,a)}:{query:Pi(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=bc(r,i.resumeToken):i.snapshotVersion.compareTo(D.min())>0&&(o.readTime=Fn(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=Hd(this.It,e);s&&(t.labels=s),this.Bo(t)}Ho(e){const t={};t.database=qn(this.It),t.removeTarget=e,this.Bo(t)}}class tm extends th{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(x(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=Qd(e.writeResults,e.commitTime),s=se(e.commitTime);return this.listener.Zo(s,t)}return x(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=qn(this.It),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Un(this.It,s))};this.Bo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm extends class{}{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,t,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new y(m.UNKNOWN,r.toString())})}_o(e,t,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,t,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(m.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}async function sm(n,e){const t=I(n),s=function(i,o){const a=Pi(i,o);return{structuredAggregationQuery:{aggregations:[{count:{},alias:"count_alias"}],structuredQuery:a.structuredQuery},parent:a.parent}}(t.It,ye(e)),r=s.parent;return t.connection.co||delete s.parent,(await t._o("RunAggregationQuery",r,s,1)).filter(i=>!!i.result).map(i=>i.result.aggregateFields)}class rm{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(H(t),this.ou=!1):w("OnlineStateTracker",t)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{Ve(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=I(a);u._u.add(4),await sn(u),u.gu.set("Unknown"),u._u.delete(4),await is(u)}(this))})}),this.gu=new rm(s,r)}}async function is(n){if(Ve(n))for(const e of n.wu)await e(!0)}async function sn(n){for(const e of n.wu)await e(!1)}function mr(n,e){const t=I(n);t.du.has(e.targetId)||(t.du.set(e.targetId,e),Ji(t)?Xi(t):on(t).ko()&&Yi(t,e))}function Bn(n,e){const t=I(n),s=on(t);t.du.delete(e),s.ko()&&nh(t,e),t.du.size===0&&(s.ko()?s.Fo():Ve(t)&&t.gu.set("Unknown"))}function Yi(n,e){n.yu.Mt(e.targetId),on(n).zo(e)}function nh(n,e){n.yu.Mt(e),on(n).Ho(e)}function Xi(n){n.yu=new Ud({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),se:e=>n.du.get(e)||null}),on(n).start(),n.gu.uu()}function Ji(n){return Ve(n)&&!on(n).No()&&n.du.size>0}function Ve(n){return I(n)._u.size===0}function sh(n){n.yu=void 0}async function om(n){n.du.forEach((e,t)=>{Yi(n,e)})}async function am(n,e){sh(n),Ji(n)?(n.gu.hu(e),Xi(n)):n.gu.set("Unknown")}async function um(n,e,t){if(n.gu.set("Online"),e instanceof Ec&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(n,e)}catch(s){w("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Gs(n,s)}else if(e instanceof bs?n.yu.Gt(e):e instanceof Tc?n.yu.Yt(e):n.yu.Wt(e),!t.isEqual(D.min()))try{const s=await Hc(n.localStore);t.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.du.get(u);c&&r.du.set(u,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const u=r.du.get(a);if(!u)return;r.du.set(a,u.withResumeToken(ee.EMPTY_BYTE_STRING,u.snapshotVersion)),nh(r,a);const c=new $e(u.target,a,1,u.sequenceNumber);Yi(r,c)}),r.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){w("RemoteStore","Failed to raise snapshot:",s),await Gs(n,s)}}async function Gs(n,e,t){if(!Xe(e))throw e;n._u.add(1),await sn(n),n.gu.set("Offline"),t||(t=()=>Hc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await t(),n._u.delete(1),await is(n)})}function rh(n,e){return e().catch(t=>Gs(n,t,e))}async function rn(n){const e=I(n),t=Qe(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;cm(e);)try{const r=await Qf(e.localStore,s);if(r===null){e.fu.length===0&&t.Fo();break}s=r.batchId,hm(e,r)}catch(r){await Gs(e,r)}ih(e)&&oh(e)}function cm(n){return Ve(n)&&n.fu.length<10}function hm(n,e){n.fu.push(e);const t=Qe(n);t.ko()&&t.Yo&&t.Xo(e.mutations)}function ih(n){return Ve(n)&&!Qe(n).No()&&n.fu.length>0}function oh(n){Qe(n).start()}async function lm(n){Qe(n).eu()}async function dm(n){const e=Qe(n);for(const t of n.fu)e.Xo(t.mutations)}async function fm(n,e,t){const s=n.fu.shift(),r=Ui.from(s,e,t);await rh(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await rn(n)}async function mm(n,e){e&&Qe(n).Yo&&await async function(t,s){if(r=s.code,pc(r)&&r!==m.ABORTED){const i=t.fu.shift();Qe(t).Mo(),await rh(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,s)),await rn(t)}var r}(n,e),ih(n)&&oh(n)}async function Da(n,e){const t=I(n);t.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const s=Ve(t);t._u.add(3),await sn(t),s&&t.gu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t._u.delete(3),await is(t)}async function si(n,e){const t=I(n);e?(t._u.delete(2),await is(t)):e||(t._u.add(2),await sn(t),t.gu.set("Unknown"))}function on(n){return n.pu||(n.pu=function(e,t,s){const r=I(e);return r.su(),new em(t,r.connection,r.authCredentials,r.appCheckCredentials,r.It,s)}(n.datastore,n.asyncQueue,{Yr:om.bind(null,n),Zr:am.bind(null,n),Wo:um.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Mo(),Ji(n)?Xi(n):n.gu.set("Unknown")):(await n.pu.stop(),sh(n))})),n.pu}function Qe(n){return n.Iu||(n.Iu=function(e,t,s){const r=I(e);return r.su(),new tm(t,r.connection,r.authCredentials,r.appCheckCredentials,r.It,s)}(n.datastore,n.asyncQueue,{Yr:lm.bind(null,n),Zr:mm.bind(null,n),tu:dm.bind(null,n),Zo:fm.bind(null,n)}),n.wu.push(async e=>{e?(n.Iu.Mo(),await rn(n)):(await n.Iu.stop(),n.fu.length>0&&(w("RemoteStore",`Stopping write stream with ${n.fu.length} pending writes`),n.fu=[]))})),n.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Z,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,a=new Zi(e,t,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function an(n,e){if(H("AsyncQueue",`${e}: ${n}`),Xe(n))return new y(m.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.comparator=e?(t,s)=>e(t,s)||v.comparator(t.key,s.key):(t,s)=>v.comparator(t.key,s.key),this.keyedMap=wn(),this.sortedSet=new Q(this.comparator)}static emptySet(e){return new Vt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Vt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(){this.Tu=new Q(v.comparator)}track(e){const t=e.doc.key,s=this.Tu.get(t);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(t,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(t):e.type===1&&s.type===2?this.Tu=this.Tu.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):E():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal((t,s)=>{e.push(s)}),e}}class zt{constructor(e,t,s,r,i,o,a,u,c){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,s,r,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new zt(e,t,Vt.emptySet(t),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&es(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(){this.Au=void 0,this.listeners=[]}}class pm{constructor(){this.queries=new Je(e=>rc(e),es),this.onlineState="Unknown",this.Ru=new Set}}async function eo(n,e){const t=I(n),s=e.query;let r=!1,i=t.queries.get(s);if(i||(r=!0,i=new gm),r)try{i.Au=await t.onListen(s)}catch(o){const a=an(o,`Initialization of query '${Jr(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.listeners.push(e),e.bu(t.onlineState),i.Au&&e.Pu(i.Au)&&no(t)}async function to(n,e){const t=I(n),s=e.query;let r=!1;const i=t.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return t.queries.delete(s),t.onUnlisten(s)}function ym(n,e){const t=I(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&no(t)}function wm(n,e,t){const s=I(n),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(t);s.queries.delete(e)}function no(n){n.Ru.forEach(e=>{e.next()})}class so{constructor(e,t,s){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new zt(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}xu(e){e=zt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,t){this.ku=e,this.byteLength=t}Ou(){return"metadata"in this.ku}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e){this.It=e}Ji(e){return Ne(this.It,e)}Yi(e){return e.metadata.exists?Ac(this.It,e.document,!1):P.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return se(e)}}class Im{constructor(e,t,s){this.Mu=e,this.localStore=t,this.It=s,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=ah(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++t;const s=R.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(s.get(s.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){const t=new Map,s=new Ca(this.It);for(const r of e)if(r.metadata.queries){const i=s.Ji(r.metadata.name);for(const o of r.metadata.queries){const a=(t.get(o)||N()).add(i);t.set(o,a)}}return t}async complete(){const e=await Hf(this.localStore,new Ca(this.It),this.documents,this.Mu.id),t=this.$u(this.documents);for(const s of this.queries)await Wf(this.localStore,s,t.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function ah(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e){this.key=e}}class ch{constructor(e){this.key=e}}class hh{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=N(),this.mutatedKeys=N(),this.Gu=oc(e),this.Qu=new Vt(this.Gu)}get ju(){return this.Uu}Wu(e,t){const s=t?t.zu:new Aa,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,l)=>{const d=r.get(h),g=Oi(this.query,l)?l:null,p=!!d&&this.mutatedKeys.has(d.key),T=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;d&&g?d.data.isEqual(g.data)?p!==T&&(s.track({type:3,doc:g}),S=!0):this.Hu(d,g)||(s.track({type:2,doc:g}),S=!0,(u&&this.Gu(g,u)>0||c&&this.Gu(g,c)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),S=!0):d&&!g&&(s.track({type:1,doc:d}),S=!0,(u||c)&&(a=!0)),S&&(g?(o=o.add(g),i=T?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((c,h)=>function(l,d){const g=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return E()}};return g(l)-g(d)}(c.type,h.type)||this.Gu(c.doc,h.doc)),this.Ju(s);const o=t?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,u=a!==this.qu;return this.qu=a,i.length!==0||u?{snapshot:new zt(this.query,e.Qu,r,i,e.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Aa,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(t=>this.Uu=this.Uu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Uu=this.Uu.delete(t)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=N(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const t=[];return e.forEach(s=>{this.Ku.has(s)||t.push(new ch(s))}),this.Ku.forEach(s=>{e.has(s)||t.push(new uh(s))}),t}tc(e){this.Uu=e.Hi,this.Ku=N();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return zt.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Tm{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Em{constructor(e){this.key=e,this.nc=!1}}class bm{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Je(a=>rc(a),es),this.rc=new Map,this.oc=new Set,this.uc=new Q(v.comparator),this.cc=new Map,this.ac=new Gi,this.hc={},this.lc=new Map,this.fc=It.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Sm(n,e){const t=uo(n);let s,r;const i=t.ic.get(e);if(i)s=i.targetId,t.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await Gt(t.localStore,ye(e));t.isPrimaryClient&&mr(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await ro(t,e,s,a==="current",o.resumeToken)}return r}async function ro(n,e,t,s,r){n._c=(l,d,g)=>async function(p,T,S,M){let O=T.view.Wu(S);O.$i&&(O=await Bs(p.localStore,T.query,!1).then(({documents:F})=>T.view.Wu(F,O)));const V=M&&M.targetChanges.get(T.targetId),K=T.view.applyChanges(O,p.isPrimaryClient,V);return ri(p,T.targetId,K.Xu),K.snapshot}(n,l,d,g);const i=await Bs(n.localStore,e,!0),o=new hh(e,i.Hi),a=o.Wu(i.documents),u=ss.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),c=o.applyChanges(a,n.isPrimaryClient,u);ri(n,t,c.Xu);const h=new Tm(e,t,o);return n.ic.set(e,h),n.rc.has(t)?n.rc.get(t).push(e):n.rc.set(t,[e]),c.snapshot}async function xm(n,e){const t=I(n),s=t.ic.get(e),r=t.rc.get(s.targetId);if(r.length>1)return t.rc.set(s.targetId,r.filter(i=>!es(i,e))),void t.ic.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await jt(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),Bn(t.remoteStore,s.targetId),Qt(t,s.targetId)}).catch(Ye)):(Qt(t,s.targetId),await jt(t.localStore,s.targetId,!0))}async function Dm(n,e,t){const s=co(n);try{const r=await function(i,o){const a=I(i),u=G.now(),c=o.reduce((d,g)=>d.add(g.key),N());let h,l;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Te(),p=N();return a.Gi.getEntries(d,c).next(T=>{g=T,g.forEach((S,M)=>{M.isValidDocument()||(p=p.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(T=>{h=T;const S=[];for(const M of o){const O=Ld(M,h.get(M.key).overlayedDocument);O!=null&&S.push(new Oe(M.key,O,tc(O.value.mapValue),$.exists(!0)))}return a.mutationQueue.addMutationBatch(d,u,S,o)}).next(T=>{l=T;const S=T.applyToLocalDocumentSet(h,p);return a.documentOverlayCache.saveOverlays(d,T.batchId,S)})}).then(()=>({batchId:l.batchId,changes:vc(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let u=i.hc[i.currentUser.toKey()];u||(u=new Q(A)),u=u.insert(o,a),i.hc[i.currentUser.toKey()]=u}(s,r.batchId,t),await Fe(s,r.changes),await rn(s.remoteStore)}catch(r){const i=an(r,"Failed to persist write");t.reject(i)}}async function lh(n,e){const t=I(n);try{const s=await zf(t.localStore,e);e.targetChanges.forEach((r,i)=>{const o=t.cc.get(i);o&&(x(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?x(o.nc):r.removedDocuments.size>0&&(x(o.nc),o.nc=!1))}),await Fe(t,s,e)}catch(s){await Ye(s)}}function Na(n,e,t){const s=I(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=I(i);a.onlineState=o;let u=!1;a.queries.forEach((c,h)=>{for(const l of h.listeners)l.bu(o)&&(u=!0)}),u&&no(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Am(n,e,t){const s=I(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Q(v.comparator);o=o.insert(i,P.newNoDocument(i,D.min()));const a=N().add(i),u=new ns(D.min(),new Map,new L(A),o,a);await lh(s,u),s.uc=s.uc.remove(i),s.cc.delete(e),ao(s)}else await jt(s.localStore,e,!1).then(()=>Qt(s,e,t)).catch(Ye)}async function Cm(n,e){const t=I(n),s=e.batch.batchId;try{const r=await jf(t.localStore,e);oo(t,s,null),io(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Fe(t,r)}catch(r){await Ye(r)}}async function Nm(n,e,t){const s=I(n);try{const r=await function(i,o){const a=I(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(h=>(x(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(u,h))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(s.localStore,e);oo(s,e,t),io(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Fe(s,r)}catch(r){await Ye(r)}}async function km(n,e){const t=I(n);Ve(t.remoteStore)||w("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const s=await function(i){const o=I(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(s===-1)return void e.resolve();const r=t.lc.get(s)||[];r.push(e),t.lc.set(s,r)}catch(s){const r=an(s,"Initialization of waitForPendingWrites() operation failed");e.reject(r)}}function io(n,e){(n.lc.get(e)||[]).forEach(t=>{t.resolve()}),n.lc.delete(e)}function oo(n,e,t){const s=I(n);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Qt(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.rc.get(e))n.ic.delete(s),t&&n.sc.wc(s,t);n.rc.delete(e),n.isPrimaryClient&&n.ac.ls(e).forEach(s=>{n.ac.containsKey(s)||dh(n,s)})}function dh(n,e){n.oc.delete(e.path.canonicalString());const t=n.uc.get(e);t!==null&&(Bn(n.remoteStore,t),n.uc=n.uc.remove(e),n.cc.delete(t),ao(n))}function ri(n,e,t){for(const s of t)s instanceof uh?(n.ac.addReference(s.key,e),_m(n,s)):s instanceof ch?(w("SyncEngine","Document no longer in limbo: "+s.key),n.ac.removeReference(s.key,e),n.ac.containsKey(s.key)||dh(n,s.key)):E()}function _m(n,e){const t=e.key,s=t.path.canonicalString();n.uc.get(t)||n.oc.has(s)||(w("SyncEngine","New document in limbo: "+t),n.oc.add(s),ao(n))}function ao(n){for(;n.oc.size>0&&n.uc.size<n.maxConcurrentLimboResolutions;){const e=n.oc.values().next().value;n.oc.delete(e);const t=new v(R.fromString(e)),s=n.fc.next();n.cc.set(s,new Em(t)),n.uc=n.uc.insert(t,s),mr(n.remoteStore,new $e(ye(en(t.path)),s,2,Ie.at))}}async function Fe(n,e,t){const s=I(n),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,u)=>{o.push(s._c(u,e,t).then(c=>{if((c||t)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const h=Qi.Ci(u.targetId,c);i.push(h)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,u){const c=I(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>f.forEach(u,l=>f.forEach(l.Si,d=>c.persistence.referenceDelegate.addReference(h,l.targetId,d)).next(()=>f.forEach(l.Di,d=>c.persistence.referenceDelegate.removeReference(h,l.targetId,d)))))}catch(h){if(!Xe(h))throw h;w("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const l=h.targetId;if(!h.fromCache){const d=c.Ui.get(l),g=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(g);c.Ui=c.Ui.insert(l,p)}}}(s.localStore,i))}async function Rm(n,e){const t=I(n);if(!t.currentUser.isEqual(e)){w("SyncEngine","User change. New user:",e.toKey());const s=await Qc(t.localStore,e);t.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new y(m.CANCELLED,i))})}),r.lc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Fe(t,s.ji)}}function Mm(n,e){const t=I(n),s=t.cc.get(e);if(s&&s.nc)return N().add(s.key);{let r=N();const i=t.rc.get(e);if(!i)return r;for(const o of i){const a=t.ic.get(o);r=r.unionWith(a.view.ju)}return r}}async function Lm(n,e){const t=I(n),s=await Bs(t.localStore,e.query,!0),r=e.view.tc(s);return t.isPrimaryClient&&ri(t,e.targetId,r.Xu),r}async function Om(n,e){const t=I(n);return Xc(t.localStore,e).then(s=>Fe(t,s))}async function Vm(n,e,t,s){const r=I(n),i=await function(o,a){const u=I(o),c=I(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>c.Tn(h,a).next(l=>l?u.localDocuments.getDocuments(h,l):f.resolve(null)))}(r.localStore,e);i!==null?(t==="pending"?await rn(r.remoteStore):t==="acknowledged"||t==="rejected"?(oo(r,e,s||null),io(r,e),function(o,a){I(I(o).mutationQueue).An(a)}(r.localStore,e)):E(),await Fe(r,i)):w("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Fm(n,e){const t=I(n);if(uo(t),co(t),e===!0&&t.dc!==!0){const s=t.sharedClientState.getAllActiveQueryTargets(),r=await ka(t,s.toArray());t.dc=!0,await si(t.remoteStore,!0);for(const i of r)mr(t.remoteStore,i)}else if(e===!1&&t.dc!==!1){const s=[];let r=Promise.resolve();t.rc.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?s.push(o):r=r.then(()=>(Qt(t,o),jt(t.localStore,o,!0))),Bn(t.remoteStore,o)}),await r,await ka(t,s),function(i){const o=I(i);o.cc.forEach((a,u)=>{Bn(o.remoteStore,u)}),o.ac.fs(),o.cc=new Map,o.uc=new Q(v.comparator)}(t),t.dc=!1,await si(t.remoteStore,!1)}}async function ka(n,e,t){const s=I(n),r=[],i=[];for(const o of e){let a;const u=s.rc.get(o);if(u&&u.length!==0){a=await Gt(s.localStore,ye(u[0]));for(const c of u){const h=s.ic.get(c),l=await Lm(s,h);l.snapshot&&i.push(l.snapshot)}}else{const c=await Yc(s.localStore,o);a=await Gt(s.localStore,c),await ro(s,fh(c),o,!1,a.resumeToken)}r.push(a)}return s.sc.Wo(i),r}function fh(n){return sc(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function Pm(n){const e=I(n);return I(I(e.localStore).persistence).vi()}async function qm(n,e,t,s){const r=I(n);if(r.dc)return void w("SyncEngine","Ignoring unexpected query state notification.");const i=r.rc.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await Xc(r.localStore,ic(i[0])),a=ns.createSynthesizedRemoteEventForCurrentChange(e,t==="current",ee.EMPTY_BYTE_STRING);await Fe(r,o,a);break}case"rejected":await jt(r.localStore,e,!0),Qt(r,e,s);break;default:E()}}async function Um(n,e,t){const s=uo(n);if(s.dc){for(const r of e){if(s.rc.has(r)){w("SyncEngine","Adding an already active target "+r);continue}const i=await Yc(s.localStore,r),o=await Gt(s.localStore,i);await ro(s,fh(i),o.targetId,!1,o.resumeToken),mr(s.remoteStore,o)}for(const r of t)s.rc.has(r)&&await jt(s.localStore,r,!1).then(()=>{Bn(s.remoteStore,r),Qt(s,r)}).catch(Ye)}}function uo(n){const e=I(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=lh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Mm.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Am.bind(null,e),e.sc.Wo=ym.bind(null,e.eventManager),e.sc.wc=wm.bind(null,e.eventManager),e}function co(n){const e=I(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Cm.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Nm.bind(null,e),e}function Bm(n,e,t){const s=I(n);(async function(r,i,o){try{const a=await i.getMetadata();if(await function(l,d){const g=I(l),p=se(d.createTime);return g.persistence.runTransaction("hasNewerBundle","readonly",T=>g.Ns.getBundleMetadata(T,d.id)).then(T=>!!T&&T.createTime.compareTo(p)>=0)}(r.localStore,a))return await i.close(),o._completeWith(function(l){return{taskState:"Success",documentsLoaded:l.totalDocuments,bytesLoaded:l.totalBytes,totalDocuments:l.totalDocuments,totalBytes:l.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(ah(a));const u=new Im(a,r.localStore,i.It);let c=await i.mc();for(;c;){const l=await u.Fu(c);l&&o._updateProgress(l),c=await i.mc()}const h=await u.complete();return await Fe(r,h.Lu,void 0),await function(l,d){const g=I(l);return g.persistence.runTransaction("Save bundle","readwrite",p=>g.Ns.saveBundleMetadata(p,d))}(r.localStore,a),o._completeWith(h.progress),Promise.resolve(h.Bu)}catch(a){return qt("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(s,e,t).then(r=>{s.sharedClientState.notifyBundleLoaded(r)})}class mh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=rs(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return zc(this.persistence,new jc,e.initialUser,this.It)}yc(e){return new Gc(fr.Bs,this.It)}gc(e){return new Zc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gh extends mh{constructor(e,t,s){super(),this.Ac=e,this.cacheSizeBytes=t,this.forceOwnership=s,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await co(this.Ac.syncEngine),await rn(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return zc(this.persistence,new jc,e.initialUser,this.It)}Tc(e,t){const s=this.persistence.referenceDelegate.garbageCollector;return new kf(s,e.asyncQueue,t)}Ec(e,t){const s=new fd(t,this.persistence);return new dd(e.asyncQueue,s)}yc(e){const t=zi(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?ve.withCacheSize(this.cacheSizeBytes):ve.DEFAULT;return new ji(this.synchronizeTabs,t,e.clientId,s,e.asyncQueue,eh(),xs(),this.It,this.sharedClientState,!!this.forceOwnership)}gc(e){return new Zc}}class $m extends gh{constructor(e,t){super(e,t,!1),this.Ac=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ac.syncEngine;this.sharedClientState instanceof Or&&(this.sharedClientState.syncEngine={Fr:Vm.bind(null,t),$r:qm.bind(null,t),Br:Um.bind(null,t),vi:Pm.bind(null,t),Mr:Om.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li(async s=>{await Fm(this.Ac.syncEngine,s),this.gcScheduler&&(s&&!this.gcScheduler.started?this.gcScheduler.start():s||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(s&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():s||this.indexBackfillerScheduler.stop())})}gc(e){const t=eh();if(!Or.C(t))throw new y(m.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const s=zi(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Or(t,e.asyncQueue,s,e.clientId,e.initialUser)}}class ho{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Na(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rm.bind(null,this.syncEngine),await si(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new pm}createDatastore(e){const t=rs(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Zf(r));var r;return function(i,o,a,u){return new nm(i,o,a,u)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Na(this.syncEngine,a,0),o=xa.C()?new xa:new Yf,new im(t,s,r,i,o);var t,s,r,i,o}createSyncEngine(e,t){return function(s,r,i,o,a,u,c){const h=new bm(s,r,i,o,a,u);return c&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=I(e);w("RemoteStore","RemoteStore shutting down."),t._u.add(5),await sn(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(n,e,t){if(!t)throw new y(m.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Km(n,e,t,s){if(e===!0&&s===!0)throw new y(m.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function _a(n){if(!v.isDocumentKey(n))throw new y(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ra(n){if(v.isDocumentKey(n))throw new y(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function gr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":E()}function k(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new y(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=gr(n);throw new y(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function ph(n,e){if(e<=0)throw new y(m.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=new Map;class La{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new y(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Km("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new La({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new y(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new La(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new ed;switch(t.type){case"gapi":const s=t.client;return new rd(s,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new y(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ma.get(e);t&&(w("ComponentProvider","Removing Datastore"),Ma.delete(e),t.terminate())}(this),Promise.resolve()}}function Gm(n,e,t,s={}){var r;const i=(n=k(n,os))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&qt("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ne.MOCK_USER;else{o=zh(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new y(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ne(u)}n._authCredentials=new td(new Ku(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ke(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Y(this.firestore,e,this._key)}}class me{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new me(this.firestore,e,this._query)}}class ke extends me{constructor(e,t,s){super(e,t,en(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Y(this.firestore,null,new v(e))}withConverter(e){return new ke(this.firestore,e,this._path)}}function Ag(n,e,...t){if(n=re(n),lo("collection","path",e),n instanceof os){const s=R.fromString(e,...t);return Ra(s),new ke(n,null,s)}{if(!(n instanceof Y||n instanceof ke))throw new y(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(R.fromString(e,...t));return Ra(s),new ke(n.firestore,null,s)}}function Cg(n,e){if(n=k(n,os),lo("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new y(m.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new me(n,null,function(t){return new Le(R.emptyPath(),t)}(e))}function jm(n,e,...t){if(n=re(n),arguments.length===1&&(e=ju.R()),lo("doc","path",e),n instanceof os){const s=R.fromString(e,...t);return _a(s),new Y(n,null,new v(s))}{if(!(n instanceof Y||n instanceof ke))throw new y(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(R.fromString(e,...t));return _a(s),new Y(n.firestore,n instanceof ke?n.converter:null,new v(s))}}function Ng(n,e){return n=re(n),e=re(e),(n instanceof Y||n instanceof ke)&&(e instanceof Y||e instanceof ke)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function yh(n,e){return n=re(n),e=re(e),n instanceof me&&e instanceof me&&n.firestore===e.firestore&&es(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const s={value:n.slice(t,t+e),done:!1};return t+=e,s}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):H("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,t){this.Pc=e,this.It=t,this.metadata=new Z,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(s=>{s&&s.Ou()?this.metadata.resolve(s.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(s==null?void 0:s.ku)}`))},s=>this.metadata.reject(s))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const t=this.vc.decode(e),s=Number(t);isNaN(s)&&this.Dc(`length string (${t}) is not valid number`);const r=await this.Cc(s);return new vm(JSON.parse(r),e.length+s)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const t=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.type="AggregateField"}}class Qm{constructor(e,t){this._data=t,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._data}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,t,s){this.query=e,this.datastore=t,this.userDataWriter=s}run(){return sm(this.datastore,this.query._query).then(e=>{x(e[0]!==void 0);const t=Object.entries(e[0]).filter(([s,r])=>s==="count_alias").map(([s,r])=>this.userDataWriter.convertValue(r))[0];return x(typeof t=="number"),Promise.resolve(new Qm(this.query,{count:t}))})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new y(m.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(s,r){const i=I(s),o=qn(i.It)+"/documents",a={documents:r.map(l=>Pn(i.It,l))},u=await i._o("BatchGetDocuments",o,a,r.length),c=new Map;u.forEach(l=>{const d=jd(i.It,l);c.set(d.key.toString(),d)});const h=[];return r.forEach(l=>{const d=c.get(l.toString());x(!!d),h.push(d)}),h}(this.datastore,e);return t.forEach(s=>this.recordVersion(s)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new nn(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,s)=>{const r=v.fromPath(s);this.mutations.push(new Vi(r,this.precondition(r)))}),await async function(t,s){const r=I(t),i=qn(r.It)+"/documents",o={writes:s.map(a=>Un(r.It,a))};await r.ao("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw E();t=D.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!t.isEqual(s))throw new y(m.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(D.min())?$.exists(!1):$.updateTime(t):$.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(D.min()))throw new y(m.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return $.updateTime(t)}return $.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,t,s,r,i){this.asyncQueue=e,this.datastore=t,this.options=s,this.updateFunction=r,this.deferred=i,this.kc=s.maxAttempts,this.xo=new Wi(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new Wm(this.datastore),t=this.Mc(e);t&&t.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(r=>{this.Fc(r)}))}).catch(s=>{this.Fc(s)})})}Mc(e){try{const t=this.updateFunction(e);return!Jn(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!pc(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,t,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=ne.UNAUTHENTICATED,this.clientId=ju.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{w("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(w("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Z;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=an(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function wh(n,e){n.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Qc(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function vh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await fo(n);w("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(r=>Da(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Da(e.remoteStore,i)),n.onlineComponents=e}async function fo(n){return n.offlineComponents||(w("FirestoreClient","Using default OfflineComponentProvider"),await wh(n,new mh)),n.offlineComponents}async function yr(n){return n.onlineComponents||(w("FirestoreClient","Using default OnlineComponentProvider"),await vh(n,new ho)),n.onlineComponents}function Ih(n){return fo(n).then(e=>e.persistence)}function wr(n){return fo(n).then(e=>e.localStore)}function mo(n){return yr(n).then(e=>e.remoteStore)}function go(n){return yr(n).then(e=>e.syncEngine)}function Th(n){return yr(n).then(e=>e.datastore)}async function Ht(n){const e=await yr(n),t=e.eventManager;return t.onListen=Sm.bind(null,e.syncEngine),t.onUnlisten=xm.bind(null,e.syncEngine),t}function Jm(n){return n.asyncQueue.enqueue(async()=>{const e=await Ih(n),t=await mo(n);return e.setNetworkEnabled(!0),function(s){const r=I(s);return r._u.delete(0),is(r)}(t)})}function Zm(n){return n.asyncQueue.enqueue(async()=>{const e=await Ih(n),t=await mo(n);return e.setNetworkEnabled(!1),async function(s){const r=I(s);r._u.add(0),await sn(r),r.gu.set("Offline")}(t)})}function eg(n,e){const t=new Z;return n.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await function(a,u){const c=I(a);return c.persistence.runTransaction("read document","readonly",h=>c.localDocuments.getDocument(h,u))}(s,r);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new y(m.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=an(o,`Failed to get document '${r} from cache`);i.reject(a)}}(await wr(n),e,t)),t.promise}function Eh(n,e,t={}){const s=new Z;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,u){const c=new pr({next:l=>{i.enqueueAndForget(()=>to(r,h));const d=l.docs.has(o);!d&&l.fromCache?u.reject(new y(m.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&l.fromCache&&a&&a.source==="server"?u.reject(new y(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(l)},error:l=>u.reject(l)}),h=new so(en(o.path),c,{includeMetadataChanges:!0,Nu:!0});return eo(r,h)}(await Ht(n),n.asyncQueue,e,t,s)),s.promise}function tg(n,e){const t=new Z;return n.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await Bs(s,r,!0),a=new hh(r,o.Hi),u=a.Wu(o.documents),c=a.applyChanges(u,!1);i.resolve(c.snapshot)}catch(o){const a=an(o,`Failed to execute query '${r} against cache`);i.reject(a)}}(await wr(n),e,t)),t.promise}function bh(n,e,t={}){const s=new Z;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,u){const c=new pr({next:l=>{i.enqueueAndForget(()=>to(r,h)),l.fromCache&&a.source==="server"?u.reject(new y(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(l)},error:l=>u.reject(l)}),h=new so(o,c,{includeMetadataChanges:!0,Nu:!0});return eo(r,h)}(await Ht(n),n.asyncQueue,e,t,s)),s.promise}function ng(n,e){const t=new pr(e);return n.asyncQueue.enqueueAndForget(async()=>function(s,r){I(s).Ru.add(r),r.next()}(await Ht(n),t)),()=>{t.bc(),n.asyncQueue.enqueueAndForget(async()=>function(s,r){I(s).Ru.delete(r)}(await Ht(n),t))}}function sg(n,e,t,s){const r=function(i,o){let a;return a=typeof i=="string"?new TextEncoder().encode(i):i,function(u,c){return new zm(u,c)}(function(u,c){if(u instanceof Uint8Array)return Oa(u,c);if(u instanceof ArrayBuffer)return Oa(new Uint8Array(u),c);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,rs(e));n.asyncQueue.enqueueAndForget(async()=>{Bm(await go(n),r,s)})}function rg(n,e){return n.asyncQueue.enqueue(async()=>function(t,s){const r=I(t);return r.persistence.runTransaction("Get named query","readonly",i=>r.Ns.getNamedQuery(i,s))}(await wr(n),e))}class ig{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Wi(this,"async_queue_retry"),this.Wc=()=>{const t=xs();t&&w("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const e=xs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const t=xs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const t=new Z;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Xe(e))throw e;w("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const t=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw H("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=t,t}enqueueAfterDelay(e,t,s){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const r=Zi.createAndSchedule(this,e,t,s,i=>this.Yc(i));return this.qc.push(r),r}zc(){this.Kc&&E()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const t of this.qc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.qc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const t=this.qc.indexOf(e);this.qc.splice(t,1)}}function ii(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of t)if(r in s&&typeof s[r]=="function")return!0;return!1}(n,["next","error","complete"])}class og{constructor(){this._progressObserver={},this._taskCompletionResolver=new Z,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,s){this._progressObserver={next:e,error:t,complete:s}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=-1;class q extends os{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new ig,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Sh(this),this._firestoreClient.terminate()}}function Rg(n,e,t){t||(t="(default)");const s=qa(n,"firestore");if(s.isInitialized(t)){const r=s.getImmediate({identifier:t}),i=s.getOptions(t);if(Ua(i,e))return r;throw new y(m.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return s.initialize({options:e,instanceIdentifier:t})}function Mg(n,e){const t=typeof n=="object"?n:Qh(),s=typeof n=="string"?n:e||"(default)",r=qa(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Hh("firestore");i&&Gm(r,...i)}return r}function J(n){return n._firestoreClient||Sh(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Sh(n){var e;const t=n._freezeSettings(),s=function(r,i,o,a){return new gd(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new Xm(n._authCredentials,n._appCheckCredentials,n._queue,s)}function Lg(n,e){Dh(n=k(n,q));const t=J(n),s=n._freezeSettings(),r=new ho;return xh(t,r,new gh(r,s.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function Og(n){Dh(n=k(n,q));const e=J(n),t=n._freezeSettings(),s=new ho;return xh(e,s,new $m(s,t.cacheSizeBytes))}function xh(n,e,t){const s=new Z;return n.asyncQueue.enqueue(async()=>{try{await wh(n,t),await vh(n,e),s.resolve()}catch(r){const i=r;if(!function(o){return o.name==="FirebaseError"?o.code===m.FAILED_PRECONDITION||o.code===m.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(i))throw i;qt("Error enabling offline persistence. Falling back to persistence disabled: "+i),s.reject(i)}}).then(()=>s.promise)}function Vg(n){if(n._initialized&&!n._terminated)throw new y(m.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Z;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!xe.C())return Promise.resolve();const s=t+"main";await xe.delete(s)}(zi(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function Fg(n){return function(e){const t=new Z;return e.asyncQueue.enqueueAndForget(async()=>km(await go(e),t)),t.promise}(J(n=k(n,q)))}function Pg(n){return Jm(J(n=k(n,q)))}function qg(n){return Zm(J(n=k(n,q)))}function Ug(n){return Wh(n.app,"firestore",n._databaseId.database),n._delete()}function Bg(n,e){const t=J(n=k(n,q)),s=new og;return sg(t,n._databaseId,e,s),s}function $g(n,e){return rg(J(n=k(n,q)),e).then(t=>t?new me(n,null,t.query):null)}function Dh(n){if(n._initialized||n._terminated)throw new y(m.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tt(ee.fromBase64String(e))}catch(t){throw new y(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Tt(ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new y(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function Kg(){return new St("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new y(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new y(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return A(this._lat,e._lat)||A(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=/^__.*__$/;class ug{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Oe(e,this.data,this.fieldMask,t,this.fieldTransforms):new tn(e,this.data,t,this.fieldTransforms)}}class Ah{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Oe(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ch(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E()}}class vr{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new vr(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return js(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Ch(this.sa)&&ag.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class cg{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.It=s||rs(e)}da(e,t,s,r=!1){return new vr({sa:e,methodName:t,fa:s,path:W.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Dt(n){const e=n._freezeSettings(),t=rs(n._databaseId);return new cg(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ir(n,e,t,s,r,i={}){const o=n.da(i.merge||i.mergeFields?2:0,e,t,r);Io("Data must be an object, but it was:",o,s);const a=_h(s,o);let u,c;if(i.merge)u=new Ee(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const l of i.mergeFields){const d=oi(e,l,t);if(!o.contains(d))throw new y(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Mh(h,d)||h.push(d)}u=new Ee(h),c=o.fieldTransforms.filter(l=>u.covers(l.field))}else u=null,c=o.fieldTransforms;return new ug(new ue(a),u,c)}class as extends xt{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof as}}function Nh(n,e,t){return new vr({sa:3,fa:e.settings.fa,methodName:n._methodName,oa:t},e.databaseId,e.It,e.ignoreUndefinedProperties)}class yo extends xt{_toFieldTransform(e){return new ts(e.path,new $t)}isEqual(e){return e instanceof yo}}class hg extends xt{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=Nh(this,e,!0),s=this._a.map(i=>At(i,t)),r=new pt(s);return new ts(e.path,r)}isEqual(e){return this===e}}class lg extends xt{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=Nh(this,e,!0),s=this._a.map(i=>At(i,t)),r=new yt(s);return new ts(e.path,r)}isEqual(e){return this===e}}class dg extends xt{constructor(e,t){super(e),this.wa=t}_toFieldTransform(e){const t=new Kt(e.It,cc(e.It,this.wa));return new ts(e.path,t)}isEqual(e){return this===e}}function wo(n,e,t,s){const r=n.da(1,e,t);Io("Data must be an object, but it was:",r,s);const i=[],o=ue.empty();bt(s,(u,c)=>{const h=Tr(e,u,t);c=re(c);const l=r.ca(h);if(c instanceof as)i.push(h);else{const d=At(c,l);d!=null&&(i.push(h),o.set(h,d))}});const a=new Ee(i);return new Ah(o,a,r.fieldTransforms)}function vo(n,e,t,s,r,i){const o=n.da(1,e,t),a=[oi(e,s,t)],u=[r];if(i.length%2!=0)throw new y(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(oi(e,i[d])),u.push(i[d+1]);const c=[],h=ue.empty();for(let d=a.length-1;d>=0;--d)if(!Mh(c,a[d])){const g=a[d];let p=u[d];p=re(p);const T=o.ca(g);if(p instanceof as)c.push(g);else{const S=At(p,T);S!=null&&(c.push(g),h.set(g,S))}}const l=new Ee(c);return new Ah(h,l,o.fieldTransforms)}function kh(n,e,t,s=!1){return At(t,n.da(s?4:3,e))}function At(n,e){if(Rh(n=re(n)))return Io("Unsupported field value:",e,n),_h(n,e);if(n instanceof xt)return function(t,s){if(!Ch(s.sa))throw s.ha(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${t._methodName}() is not currently supported inside arrays`);const r=t._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(t,s){const r=[];let i=0;for(const o of t){let a=At(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(n,e)}return function(t,s){if((t=re(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return cc(s.It,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const r=G.fromDate(t);return{timestampValue:Fn(s.It,r)}}if(t instanceof G){const r=new G(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Fn(s.It,r)}}if(t instanceof po)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Tt)return{bytesValue:bc(s.It,t._byteString)};if(t instanceof Y){const r=s.databaseId,i=t.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Fi(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s.ha(`Unsupported field value: ${gr(t)}`)}(n,e)}function _h(n,e){const t={};return Xu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bt(n,(s,r)=>{const i=At(r,e.ra(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function Rh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof G||n instanceof po||n instanceof Tt||n instanceof Y||n instanceof xt)}function Io(n,e,t){if(!Rh(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=gr(t);throw s==="an object"?e.ha(n+" a custom object"):e.ha(n+" "+s)}}function oi(n,e,t){if((e=re(e))instanceof St)return e._internalPath;if(typeof e=="string")return Tr(n,e);throw js("Field path arguments must be of type string or ",n,!1,void 0,t)}const fg=new RegExp("[~\\*/\\[\\]]");function Tr(n,e,t){if(e.search(fg)>=0)throw js(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new St(...e.split("."))._internalPath}catch{throw js(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function js(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${s}`),o&&(u+=` in document ${r}`),u+=")"),new y(m.INVALID_ARGUMENT,a+n+u)}function Mh(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Y(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Er("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class mg extends $n{data(){return super.data()}}function Er(n,e){return typeof e=="string"?Tr(n,e):e instanceof St?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new y(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class us{}function Gg(n,...e){for(const t of e)n=t._apply(n);return n}class gg extends us{constructor(e,t,s){super(),this.ma=e,this.ga=t,this.ya=s,this.type="where"}_apply(e){const t=Dt(e.firestore),s=function(r,i,o,a,u,c,h){let l;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new y(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Fa(h,c);const g=[];for(const p of h)g.push(Va(a,r,p));l={arrayValue:{values:g}}}else l=Va(a,r,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Fa(h,c),l=kh(o,i,h,c==="in"||c==="not-in");const d=ce.create(u,c,l);return function(g,p){if(p.dt()){const S=Mi(g);if(S!==null&&!S.isEqual(p.field))throw new y(m.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${S.toString()}' and '${p.field.toString()}'`);const M=Ri(g);M!==null&&qh(g,p.field,M)}const T=function(S,M){for(const O of S.filters)if(M.indexOf(O.op)>=0)return O.op;return null}(g,function(S){switch(S){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(p.op));if(T!==null)throw T===p.op?new y(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${p.op.toString()}' filter.`):new y(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${p.op.toString()}' filters with '${T.toString()}' filters.`)}(r,d),d}(e._query,"where",t,e.firestore._databaseId,this.ma,this.ga,this.ya);return new me(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new Le(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function jg(n,e,t){const s=e,r=Er("where",n);return new gg(r,s,t)}class pg extends us{constructor(e,t){super(),this.ma=e,this.pa=t,this.type="orderBy"}_apply(e){const t=function(s,r,i){if(s.startAt!==null)throw new y(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new y(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ot(r,i);return function(a,u){if(Ri(a)===null){const c=Mi(a);c!==null&&qh(a,c,u.field)}}(s,o),o}(e._query,this.ma,this.pa);return new me(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Le(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function zg(n,e="asc"){const t=e,s=Er("orderBy",n);return new pg(s,t)}class Oh extends us{constructor(e,t,s){super(),this.type=e,this.Ia=t,this.Ta=s}_apply(e){return new me(e.firestore,e.converter,Ps(e._query,this.Ia,this.Ta))}}function Qg(n){return ph("limit",n),new Oh("limit",n,"F")}function Hg(n){return ph("limitToLast",n),new Oh("limitToLast",n,"L")}class Vh extends us{constructor(e,t,s){super(),this.type=e,this.Ea=t,this.Aa=s}_apply(e){const t=Ph(e,this.type,this.Ea,this.Aa);return new me(e.firestore,e.converter,function(s,r){return new Le(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,t))}}function Wg(...n){return new Vh("startAt",n,!0)}function Yg(...n){return new Vh("startAfter",n,!1)}class Fh extends us{constructor(e,t,s){super(),this.type=e,this.Ea=t,this.Aa=s}_apply(e){const t=Ph(e,this.type,this.Ea,this.Aa);return new me(e.firestore,e.converter,function(s,r){return new Le(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,t))}}function Xg(...n){return new Fh("endBefore",n,!1)}function Jg(...n){return new Fh("endAt",n,!0)}function Ph(n,e,t,s){if(t[0]=re(t[0]),t[0]instanceof $n)return function(r,i,o,a,u){if(!a)throw new y(m.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const c=[];for(const h of Bt(r))if(h.field.isKeyField())c.push(mt(i,a.key));else{const l=a.data.field(h.field);if(_i(l))throw new y(m.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(l===null){const d=h.field.canonicalString();throw new y(m.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}c.push(l)}return new ze(c,u)}(n._query,n.firestore._databaseId,e,t[0]._document,s);{const r=Dt(n.firestore);return function(i,o,a,u,c,h){const l=i.explicitOrderBy;if(c.length>l.length)throw new y(m.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let g=0;g<c.length;g++){const p=c[g];if(l[g].field.isKeyField()){if(typeof p!="string")throw new y(m.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof p}`);if(!Li(i)&&p.indexOf("/")!==-1)throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${p}' contains a slash.`);const T=i.path.child(R.fromString(p));if(!v.isDocumentKey(T))throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${T}' is not because it contains an odd number of segments.`);const S=new v(T);d.push(mt(o,S))}else{const T=kh(a,u,p);d.push(T)}}return new ze(d,h)}(n._query,n.firestore._databaseId,r,e,t,s)}}function Va(n,e,t){if(typeof(t=re(t))=="string"){if(t==="")throw new y(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Li(e)&&t.indexOf("/")!==-1)throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(R.fromString(t));if(!v.isDocumentKey(s))throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return mt(n,new v(s))}if(t instanceof Y)return mt(n,t._key);throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gr(t)}.`)}function Fa(n,e){if(!Array.isArray(n)||n.length===0)throw new y(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new y(m.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function qh(n,e,t){if(!t.isEqual(e))throw new y(m.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{convertValue(e,t="none"){switch(ft(e)){case 0:return null;case 1:return e.booleanValue;case 2:return j(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(lt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw E()}}convertObject(e,t){const s={};return bt(e.fields,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertGeoPoint(e){return new po(j(e.latitude),j(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ju(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Mn(e));default:return null}}convertTimestamp(e){const t=Ge(e);return new G(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=R.fromString(e);x(_c(s));const r=new dt(s.get(1),s.get(3)),i=new v(s.popFirst(5));return r.isEqual(t)||H(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class yg extends Uh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Y(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Wt extends $n{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ds(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Er("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Ds extends Wt{data(e={}){return super.data(e)}}class Yt{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ct(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Ds(this._firestore,this._userDataWriter,s.key,s,new ct(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new y(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Ds(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ct(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ds(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ct(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,c=-1;return o.type!==0&&(u=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:wg(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function wg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return E()}}function Zg(n,e){return n instanceof Wt&&e instanceof Wt?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Yt&&e instanceof Yt&&n._firestore===e._firestore&&yh(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(n){n=k(n,Y);const e=k(n.firestore,q);return Eh(J(e),n._key).then(t=>To(e,n,t))}class Ze extends Uh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Y(this.firestore,null,t)}}function tp(n){n=k(n,Y);const e=k(n.firestore,q),t=J(e),s=new Ze(e);return eg(t,n._key).then(r=>new Wt(e,s,n._key,r,new ct(r!==null&&r.hasLocalMutations,!0),n.converter))}function np(n){n=k(n,Y);const e=k(n.firestore,q);return Eh(J(e),n._key,{source:"server"}).then(t=>To(e,n,t))}function sp(n){n=k(n,me);const e=k(n.firestore,q),t=J(e),s=new Ze(e);return Lh(n._query),bh(t,n._query).then(r=>new Yt(e,s,n,r))}function rp(n){n=k(n,me);const e=k(n.firestore,q),t=J(e),s=new Ze(e);return tg(t,n._query).then(r=>new Yt(e,s,n,r))}function ip(n){n=k(n,me);const e=k(n.firestore,q),t=J(e),s=new Ze(e);return bh(t,n._query,{source:"server"}).then(r=>new Yt(e,s,n,r))}function op(n,e,t){n=k(n,Y);const s=k(n.firestore,q),r=br(n.converter,e,t);return cs(s,[Ir(Dt(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,$.none())])}function ap(n,e,t,...s){n=k(n,Y);const r=k(n.firestore,q),i=Dt(r);let o;return o=typeof(e=re(e))=="string"||e instanceof St?vo(i,"updateDoc",n._key,e,t,s):wo(i,"updateDoc",n._key,e),cs(r,[o.toMutation(n._key,$.exists(!0))])}function up(n){return cs(k(n.firestore,q),[new nn(n._key,$.none())])}function cp(n,e){const t=k(n.firestore,q),s=jm(n),r=br(n.converter,e);return cs(t,[Ir(Dt(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,$.exists(!1))]).then(()=>s)}function hp(n,...e){var t,s,r;n=re(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ii(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ii(e[o])){const l=e[o];e[o]=(t=l.next)===null||t===void 0?void 0:t.bind(l),e[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),e[o+2]=(r=l.complete)===null||r===void 0?void 0:r.bind(l)}let u,c,h;if(n instanceof Y)c=k(n.firestore,q),h=en(n._key.path),u={next:l=>{e[o]&&e[o](To(c,n,l))},error:e[o+1],complete:e[o+2]};else{const l=k(n,me);c=k(l.firestore,q),h=l._query;const d=new Ze(c);u={next:g=>{e[o]&&e[o](new Yt(c,d,l,g))},error:e[o+1],complete:e[o+2]},Lh(n._query)}return function(l,d,g,p){const T=new pr(p),S=new so(d,T,g);return l.asyncQueue.enqueueAndForget(async()=>eo(await Ht(l),S)),()=>{T.bc(),l.asyncQueue.enqueueAndForget(async()=>to(await Ht(l),S))}}(J(c),h,a,u)}function lp(n,e){return ng(J(n=k(n,q)),ii(e)?e:{next:e})}function cs(n,e){return function(t,s){const r=new Z;return t.asyncQueue.enqueueAndForget(async()=>Dm(await go(t),s,r)),r.promise}(J(n),e)}function To(n,e,t){const s=t.docs.get(e._key),r=new Ze(n);return new Wt(n,r,e._key,s,new ct(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(n,e){return yh(n.query,e.query)&&Ua(n.data(),e.data())}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(n){const e=k(n.firestore,q);return function(t,s,r){const i=new Z;return t.asyncQueue.enqueueAndForget(async()=>{try{if(Ve(await mo(t))){const o=await Th(t),a=new Hm(s,o,r).run();i.resolve(a)}else i.reject(new y(m.UNAVAILABLE,"Failed to get count result because the client is offline."))}catch(o){i.reject(o)}}),i.promise}(J(e),n,new Ze(e))}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Dt(e)}set(e,t,s){this._verifyNotCommitted();const r=Ue(e,this._firestore),i=br(r.converter,t,s),o=Ir(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(o.toMutation(r._key,$.none())),this}update(e,t,s,...r){this._verifyNotCommitted();const i=Ue(e,this._firestore);let o;return o=typeof(t=re(t))=="string"||t instanceof St?vo(this._dataReader,"WriteBatch.update",i._key,t,s,r):wo(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,$.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ue(e,this._firestore);return this._mutations=this._mutations.concat(new nn(t._key,$.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new y(m.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ue(n,e){if((n=re(n)).firestore!==e)throw new y(m.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Dt(e)}get(e){const t=Ue(e,this._firestore),s=new yg(this._firestore);return this._transaction.lookup([t._key]).then(r=>{if(!r||r.length!==1)return E();const i=r[0];if(i.isFoundDocument())return new $n(this._firestore,s,i.key,i,t.converter);if(i.isNoDocument())return new $n(this._firestore,s,t._key,null,t.converter);throw E()})}set(e,t,s){const r=Ue(e,this._firestore),i=br(r.converter,t,s),o=Ir(this._dataReader,"Transaction.set",r._key,i,r.converter!==null,s);return this._transaction.set(r._key,o),this}update(e,t,s,...r){const i=Ue(e,this._firestore);let o;return o=typeof(t=re(t))=="string"||t instanceof St?vo(this._dataReader,"Transaction.update",i._key,t,s,r):wo(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=Ue(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Ue(e,this._firestore),s=new Ze(this._firestore);return super.get(e).then(r=>new Wt(this._firestore,s,t._key,r._document,new ct(!1,!1),t.converter))}}function mp(n,e,t){n=k(n,q);const s=Object.assign(Object.assign({},vg),t);return function(r){if(r.maxAttempts<1)throw new y(m.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(r,i,o){const a=new Z;return r.asyncQueue.enqueueAndForget(async()=>{const u=await Th(r);new Ym(r.asyncQueue,u,o,i,a).run()}),a.promise}(J(n),r=>e(new Tg(n,r)),s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(){return new as("deleteField")}function pp(){return new yo("serverTimestamp")}function yp(...n){return new hg("arrayUnion",n)}function wp(...n){return new lg("arrayRemove",n)}function vp(n){return new dg("increment",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(n){return J(n=k(n,q)),new Ig(n,e=>cs(n,e))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(n,e){var t;const s=J(n=k(n,q));if(!(!((t=s.offlineComponents)===null||t===void 0)&&t.indexBackfillerScheduler))return qt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=function(i){const o=typeof i=="string"?function(u){var c;try{return JSON.parse(u)}catch(h){throw new y(m.INVALID_ARGUMENT,"Failed to parse JSON: "+((c=h)===null||c===void 0?void 0:c.message))}}(i):i,a=[];if(Array.isArray(o.indexes))for(const u of o.indexes){const c=Pa(u,"collectionGroup"),h=[];if(Array.isArray(u.fields))for(const l of u.fields){const d=Tr("setIndexConfiguration",Pa(l,"fieldPath"));l.arrayConfig==="CONTAINS"?h.push(new vs(d,2)):l.order==="ASCENDING"?h.push(new vs(d,0)):l.order==="DESCENDING"&&h.push(new vs(d,1))}a.push(new Os(Os.UNKNOWN_ID,c,h,Rn.empty()))}return a}(e);return wr(s).then(i=>async function(o,a){const u=I(o),c=u.indexManager,h=[];return u.persistence.runTransaction("Configure indexes","readwrite",l=>c.getFieldIndexes(l).next(d=>function(g,p,T,S,M){g=[...g],p=[...p],g.sort(T),p.sort(T);const O=g.length,V=p.length;let K=0,F=0;for(;K<V&&F<O;){const U=T(g[F],p[K]);U<0?M(g[F++]):U>0?S(p[K++]):(K++,F++)}for(;K<V;)S(p[K++]);for(;F<O;)M(g[F++])}(d,a,ud,g=>{h.push(c.addFieldIndex(l,g))},g=>{h.push(c.deleteFieldIndex(l,g))})).next(()=>f.waitFor(h)))}(i,r))}function Pa(n,e){if(typeof n[e]!="string")throw new y(m.INVALID_ARGUMENT,"Missing string value for: "+e);return n[e]}(function(n,e=!0){(function(t){Zt=t})(Gh),Bh(new $h("firestore",(t,{instanceIdentifier:s,options:r})=>{const i=t.getProvider("app").getImmediate(),o=new q(new nd(t.getProvider("auth-internal")),new id(t.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new y(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dt(a.options.projectId,u)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Eo(Vo,"3.7.3",n),Eo(Vo,"3.7.3","esm2017")})();export{q as $,wp as A,yp as B,Vg as C,Cg as D,up as E,_g as F,gp as G,qg as H,hp as I,xg as J,ed as K,Mg as L,Gg as M,qt as N,us as O,jm as P,Kg as Q,dp as R,Tg as S,Lg as T,Og as U,Pg as V,Jg as W,Y as X,Gm as Y,me as Z,Xg as _,kg as a,J as a0,cs as a1,fp as a2,ep as a3,tp as a4,np as a5,rp as a6,ip as a7,vp as a8,Rg as a9,Qg as aa,Hg as ab,Bg as ac,$g as ad,lp as ae,zg as af,yh as ag,Ng as ah,mp as ai,pp as aj,op as ak,Tp as al,bg as am,Zg as an,Yg as ao,Wg as ap,Ug as aq,ap as ar,Fg as as,jg as at,Ip as au,Tt as b,ke as c,sp as d,Ag as e,St as f,y as g,Qm as h,Wt as i,po as j,og as k,ct as l,dt as m,G as n,Yt as o,v as p,k as q,Ds as r,xt as s,Uh as t,W as u,Ig as v,Sg as w,Dg as x,Km as y,cp as z};
