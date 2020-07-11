var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,o){if(t){const r=l(t,e,n,o);return t[0](r)}}function l(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function a(t,e,n,o,r,s,c){const i=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,s);if(i){const r=l(e,n,o,c);t.p(r,i)}}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function f(t,e){const n={};e=new Set(e);for(const o in t)e.has(o)||"$"===o[0]||(n[o]=t[o]);return n}function d(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function $(t){return document.createTextNode(t)}function w(){return $(" ")}function y(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:v(t,o,e[o])}function b(t,e){for(const n in e)v(t,n,e[n])}function E(t){return Array.from(t.childNodes)}function C(t,e,n,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===e){let e=0;const s=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)r.removeAttribute(s[t]);return t.splice(o,1)[0]}}return o?m(e):g(e)}function L(t,e){for(let n=0;n<t.length;n+=1){const o=t[n];if(3===o.nodeType)return o.data=""+e,t.splice(n,1)[0]}return $(e)}function _(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function j(t,e,n){t.classList[n?"add":"remove"](e)}let k;function N(t){k=t}function M(){if(!k)throw new Error("Function called outside component initialization");return k}function T(){const t=M();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach(e=>{e.call(t,r)})}}}const A=[],H=[],S=[],z=[],P=Promise.resolve();let B=!1;function D(t){S.push(t)}let O=!1;const F=new Set;function G(){if(!O){O=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];N(e),I(e.$$)}for(A.length=0;H.length;)H.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];F.has(e)||(F.add(e),e())}S.length=0}while(A.length);for(;z.length;)z.pop()();B=!1,O=!1,F.clear()}}function I(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const W=new Set;let q;function K(t,e){t&&t.i&&(W.delete(t),t.i(e))}function Y(t,e,n,o){if(t&&t.o){if(W.has(t))return;W.add(t),q.c.push(()=>{W.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function Z(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=e[s];if(i){for(const t in c)t in i||(o[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[s]=i}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function J(t){t&&t.c()}function Q(t,e,o){const{fragment:c,on_mount:i,on_destroy:l,after_update:a}=t.$$;c&&c.m(e,o),D(()=>{const e=i.map(n).filter(s);l?l.push(...e):r(e),t.$$.on_mount=[]}),a.forEach(D)}function R(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function U(t,e){-1===t.$$.dirty[0]&&(A.push(t),B||(B=!0,P.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,n,s,c,i,l,a=[-1]){const u=k;N(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:a};let h=!1;if(d.ctx=s?s(e,f,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),h&&U(e,t)),n}):[],d.update(),h=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=E(n.target);d.fragment&&d.fragment.l(t),t.forEach(p)}else d.fragment&&d.fragment.c();n.intro&&K(e.$$.fragment),Q(e,n.target,n.anchor),G()}N(u)}class X{$destroy(){R(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function tt(n){let o,r,s,c,i,l,a,u,f,g,w,y,x,_,j=[{id:"Logo"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 962 962"},n[0]],k={};for(let t=0;t<j.length;t+=1)k=e(k,j[t]);return{c(){o=m("svg"),r=m("defs"),s=m("style"),c=$(".cls-1{fill:none;}.cls-2{fill:#1da1eb;}"),i=m("title"),l=$("logoLogo"),a=m("path"),u=m("polygon"),f=m("rect"),g=m("rect"),w=m("rect"),y=m("rect"),x=m("rect"),_=m("rect"),this.h()},l(t){o=C(t,"svg",{id:!0,xmlns:!0,viewBox:!0},1);var e=E(o);r=C(e,"defs",{},1);var n=E(r);s=C(n,"style",{},1);var d=E(s);c=L(d,".cls-1{fill:none;}.cls-2{fill:#1da1eb;}"),d.forEach(p),n.forEach(p),i=C(e,"title",{},1);var h=E(i);l=L(h,"logoLogo"),h.forEach(p),a=C(e,"path",{class:!0,d:!0,transform:!0},1),E(a).forEach(p),u=C(e,"polygon",{class:!0,points:!0},1),E(u).forEach(p),f=C(e,"rect",{class:!0,width:!0,height:!0},1),E(f).forEach(p),g=C(e,"rect",{class:!0,y:!0,width:!0,height:!0},1),E(g).forEach(p),w=C(e,"rect",{class:!0,x:!0,width:!0,height:!0},1),E(w).forEach(p),y=C(e,"rect",{class:!0,x:!0,width:!0,height:!0},1),E(y).forEach(p),x=C(e,"rect",{class:!0,x:!0,y:!0,width:!0,height:!0},1),E(x).forEach(p),_=C(e,"rect",{class:!0,x:!0,y:!0,width:!0,height:!0},1),E(_).forEach(p),e.forEach(p),this.h()},h(){v(a,"class","cls-1"),v(a,"d","M563,1019v0Z"),v(a,"transform","translate(-563 -57)"),v(u,"class","cls-1"),v(u,"points","962 962 962 785.02 173.47 785.02 173.47 0 0 0 0 962 962 962"),v(f,"class","cls-2"),v(f,"width","173.48"),v(f,"height","962"),v(g,"class","cls-2"),v(g,"y","785.02"),v(g,"width","962"),v(g,"height","176.98"),v(w,"class","cls-2"),v(w,"x","262.84"),v(w,"width","699.16"),v(w,"height","173.48"),v(y,"class","cls-2"),v(y,"x","788.52"),v(y,"width","173.48"),v(y,"height","700.91"),v(x,"class","cls-2"),v(x,"x","262.84"),v(x,"y","261.09"),v(x,"width","697.16"),v(x,"height","175.23"),v(_,"class","cls-2"),v(_,"x","262.84"),v(_,"y","523.93"),v(_,"width","697.16"),v(_,"height","176.98"),b(o,k)},m(t,e){h(t,o,e),d(o,r),d(r,s),d(s,c),d(o,i),d(i,l),d(o,a),d(o,u),d(o,f),d(o,g),d(o,w),d(o,y),d(o,x),d(o,_)},p(t,[e]){b(o,k=Z(j,[{id:"Logo"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 962 962"},1&e&&t[0]]))},i:t,o:t,d(t){t&&p(o)}}}function et(t,n,o){return t.$set=t=>{o(0,n=e(e({},n),u(t)))},[n=u(n)]}class nt extends X{constructor(t){super(),V(this,t,et,tt,c,{})}}function ot(t){let e,n,o;return n=new nt({props:{height:t[0]}}),{c(){e=g("div"),J(n.$$.fragment),v(e,"class","logo svelte-c2p9gc")},m(t,r){h(t,e,r),Q(n,e,null),o=!0},p(t,[e]){const o={};1&e&&(o.height=t[0]),n.$set(o)},i(t){o||(K(n.$$.fragment,t),o=!0)},o(t){Y(n.$$.fragment,t),o=!1},d(t){t&&p(e),R(n)}}}function rt(t,e,n){let{height:o}=e;return t.$set=t=>{"height"in t&&n(0,o=t.height)},[o]}class st extends X{constructor(t){super(),V(this,t,rt,ot,c,{height:0})}}function ct(e){let n,o,r;return o=new st({props:{height:"50"}}),{c(){n=g("section"),J(o.$$.fragment),v(n,"id","header"),v(n,"class","svelte-4fx93g")},m(t,e){h(t,n,e),Q(o,n,null),r=!0},p:t,i(t){r||(K(o.$$.fragment,t),r=!0)},o(t){Y(o.$$.fragment,t),r=!1},d(t){t&&p(n),R(o)}}}class it extends X{constructor(t){super(),V(this,t,null,ct,c,{})}}function lt(t){let e,n;const o=t[6].default,r=i(o,t,t[5],null);return{c(){e=g("div"),r&&r.c(),_(e,"--cursor-color","string"==typeof t[0]?t[0]:"black"),v(e,"class","svelte-1ten72p"),j(e,"cursor",t[0])},m(o,s){h(o,e,s),r&&r.m(e,null),t[7](e),n=!0},p(t,[s]){r&&r.p&&32&s&&a(r,o,t,t[5],s,null,null),(!n||1&s)&&_(e,"--cursor-color","string"==typeof t[0]?t[0]:"black"),1&s&&j(e,"cursor",t[0])},i(t){n||(K(r,t),n=!0)},o(t){Y(r,t),n=!1},d(n){n&&p(e),r&&r.d(n),t[7](null)}}}function at(t,e,n){let{interval:o=30}=e,{cascade:r=!1}=e,{loop:s=!1}=e,{cursor:c=!0}=e,i="",l=[];const a=T();if(r&&s)throw new Error("`cascade` mode should not be used with `loop`!");const u=t=>new Promise(e=>setTimeout(e,t)),f=t=>1===t.childNodes.length&&3===t.childNodes[0].nodeType,d=async()=>{return Array.isArray(o)?await u(o[(t=0,e=o.length,Math.floor(Math.random()*(e-t)+t))]):await u(o);var t,e},h=async({currentNode:t,text:e},{loopAnimation:n}={loopAnimation:!1})=>{t.textContent="",t.classList.add("typing");for(const o of e){t.textContent+=o;if(n&&t.textContent===e.join("")){for("number"==typeof s?await u(s):await u(1500);""!==t.textContent;)t.textContent=t.textContent.slice(0,-1),await d();return}await d()}null===t.nextSibling&&r||(1==t.classList.length?t.removeAttribute("class"):t.classList.remove("typing"))};var p;p=async()=>{if(f(i))throw new Error("<Typewriter /> must have at least one element");(t=>{const e=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT);let n=e.nextNode();for(;n;){const t=n.textContent.split("");f(n)&&l.push(s?t:{currentNode:n,text:t}),n=e.nextNode()}})(i),r?(async()=>{l.forEach(({currentNode:t})=>t.textContent="");for(const t of l)await h(t);a("done")})():s?(async()=>{const t=i.firstChild.tagName.toLowerCase(),e=document.createElement(t);for(i.childNodes.forEach(t=>t.remove()),i.appendChild(e);s;){for(const t of l)console.log(t),e.textContent=t.join(""),await h({currentNode:e,text:t},{loopAnimation:!0});a("done")}})():(async()=>{await new Promise(t=>{l.forEach(async(e,n)=>{await h(e),n+1===l.length&&t()})}),a("done")})()},M().$$.on_mount.push(p),function(t){M().$$.on_destroy.push(t)}(()=>n(2,s=!1));let{$$slots:g={},$$scope:m}=e;return t.$set=t=>{"interval"in t&&n(3,o=t.interval),"cascade"in t&&n(4,r=t.cascade),"loop"in t&&n(2,s=t.loop),"cursor"in t&&n(0,c=t.cursor),"$$scope"in t&&n(5,m=t.$$scope)},[c,i,s,o,r,m,g,function(t){H[t?"unshift":"push"](()=>{i=t,n(1,i)})}]}class ut extends X{constructor(t){super(),V(this,t,at,lt,c,{interval:3,cascade:4,loop:2,cursor:0})}}function ft(t){let e;function n(t,e){return"en"==t[0]?ht:dt}let o=n(t),r=o(t);return{c(){r.c(),e=$("")},m(t,n){r.m(t,n),h(t,e,n)},p(t,s){o===(o=n(t))&&r?r.p(t,s):(r.d(1),r=o(t),r&&(r.c(),r.m(e.parentNode,e)))},d(t){r.d(t),t&&p(e)}}}function dt(e){let n,o,r;return{c(){n=g("p"),n.textContent="EN"},m(t,s){h(t,n,s),o||(r=y(n,"click",e[4]),o=!0)},p:t,d(t){t&&p(n),o=!1,r()}}}function ht(e){let n,o,r;return{c(){n=g("p"),n.textContent="EN",v(n,"class","selected svelte-tchylh")},m(t,s){h(t,n,s),o||(r=y(n,"click",e[4]),o=!0)},p:t,d(t){t&&p(n),o=!1,r()}}}function pt(t){let e,n,o,r,s,c,i,l,a,u,f,m;return a=new ut({props:{loop:!0,interval:70,cursor:"#1da1f2",$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){e=g("p"),e.textContent="Howdy!",n=w(),o=g("p"),o.innerHTML='My name is <strong class="highlight svelte-tchylh">Lauren</strong>',r=w(),s=g("p"),c=$("and I'm a "),i=g("strong"),i.textContent=t[3]+" year old",l=w(),J(a.$$.fragment),u=w(),f=g("p"),f.innerHTML='based in <strong class="highlight svelte-tchylh">São Paulo</strong>, <strong class="highlight svelte-tchylh">Brazil</strong>.',v(i,"class","highlight svelte-tchylh")},m(t,p){h(t,e,p),h(t,n,p),h(t,o,p),h(t,r,p),h(t,s,p),d(s,c),d(s,i),h(t,l,p),Q(a,t,p),h(t,u,p),h(t,f,p),m=!0},p(t,e){const n={};2048&e&&(n.$$scope={dirty:e,ctx:t}),a.$set(n)},i(t){m||(K(a.$$.fragment,t),m=!0)},o(t){Y(a.$$.fragment,t),m=!1},d(t){t&&p(e),t&&p(n),t&&p(o),t&&p(r),t&&p(s),t&&p(l),R(a,t),t&&p(u),t&&p(f)}}}function gt(t){let e,n,o,r,s,c,i,l,a;return{c(){e=g("p"),e.textContent="sofware developer",n=w(),o=g("p"),o.textContent="Computer Engineering student",r=w(),s=g("p"),s.textContent="Gopher",c=w(),i=g("p"),i.textContent="Korra fangirl",l=w(),a=g("p"),a.textContent="amazon in training"},m(t,u){h(t,e,u),h(t,n,u),h(t,o,u),h(t,r,u),h(t,s,u),h(t,c,u),h(t,i,u),h(t,l,u),h(t,a,u)},d(t){t&&p(e),t&&p(n),t&&p(o),t&&p(r),t&&p(s),t&&p(c),t&&p(i),t&&p(l),t&&p(a)}}}function mt(t){let e,n,o,s,c,i,l,a,u,f,m=t[1]&&ft(t),$="en"==t[0]&&pt(t);return{c(){e=g("section"),n=g("h4"),o=g("i"),s=w(),m&&m.c(),i=w(),l=g("h1"),$&&$.c(),v(o,"title",t[2]),v(o,"class","fa fa-language svelte-tchylh"),v(n,"class",c="languages "+t[0]+" svelte-tchylh"),v(l,"class","svelte-tchylh"),v(e,"id","body"),v(e,"class","svelte-tchylh")},m(r,c){h(r,e,c),d(e,n),d(n,o),d(n,s),m&&m.m(n,null),d(e,i),d(e,l),$&&$.m(l,null),a=!0,u||(f=y(o,"click",t[5]),u=!0)},p(t,[e]){(!a||4&e)&&v(o,"title",t[2]),t[1]?m?m.p(t,e):(m=ft(t),m.c(),m.m(n,null)):m&&(m.d(1),m=null),(!a||1&e&&c!==(c="languages "+t[0]+" svelte-tchylh"))&&v(n,"class",c),"en"==t[0]?$?($.p(t,e),1&e&&K($,1)):($=pt(t),$.c(),K($,1),$.m(l,null)):$&&(q={r:0,c:[],p:q},Y($,1,1,()=>{$=null}),q.r||r(q.c),q=q.p)},i(t){a||(K($),a=!0)},o(t){Y($),a=!1},d(t){t&&p(e),m&&m.d(),$&&$.d(),u=!1,f()}}}function $t(t,e,n){let o=new Date("1997/07/05"),r=new Date-o,s=Math.floor(r/315576e5),c="en",i=!1,l={pt:"Mudar o idioma",en:"Change language",es:"Cambiar el idioma"},a=l[c];return[c,i,a,s,function(){n(0,c="en"),n(2,a=l[c])},function(){n(1,i=!i)}]}class wt extends X{constructor(t){super(),V(this,t,$t,mt,c,{})}}function yt(t){let n,o;const r=t[7].default,s=i(r,t,t[6],null);let c=[t[1],{class:t[0]}],l={};for(let t=0;t<c.length;t+=1)l=e(l,c[t]);return{c(){n=g("div"),s&&s.c(),x(n,l),j(n,"svelte-f66dpe",!0)},m(t,e){h(t,n,e),s&&s.m(n,null),o=!0},p(t,[e]){s&&s.p&&64&e&&a(s,r,t,t[6],e,null,null),x(n,l=Z(c,[2&e&&t[1],(!o||1&e)&&{class:t[0]}])),j(n,"svelte-f66dpe",!0)},i(t){o||(K(s,t),o=!0)},o(t){Y(s,t),o=!1},d(t){t&&p(n),s&&s.d(t)}}}function vt(t,n,o){const r=["direction","align","justify","reverse"];let s,c=f(n,r),{direction:i="row"}=n,{align:l="center"}=n,{justify:a="center"}=n,{reverse:d=!1}=n,{$$slots:h={},$$scope:p}=n;return t.$set=t=>{n=e(e({},n),u(t)),o(1,c=f(n,r)),"direction"in t&&o(2,i=t.direction),"align"in t&&o(3,l=t.align),"justify"in t&&o(4,a=t.justify),"reverse"in t&&o(5,d=t.reverse),"$$scope"in t&&o(6,p=t.$$scope)},t.$$.update=()=>{o(0,s=["flex",`flex-direction--${i}${d?"--reverse":""}`,"flex-align--"+l,"flex-justify--"+a,c.class?c.class:""].join(" "))},[s,c,i,l,a,d,p,h]}class xt extends X{constructor(t){super(),V(this,t,vt,yt,c,{direction:2,align:3,justify:4,reverse:5})}}function bt(e){let n;return{c(){n=g("p"),n.textContent=`© ${e[0]} Lauren Ferreira`,v(n,"class","svelte-i1exto")},m(t,e){h(t,n,e)},p:t,i:t,o:t,d(t){t&&p(n)}}}function Et(t){return[(new Date).getFullYear()]}class Ct extends X{constructor(t){super(),V(this,t,Et,bt,c,{})}}function Lt(t){let e;return{c(){e=g("a"),e.innerHTML='<i class="fa fa-github"></i>',v(e,"title","GitHub"),v(e,"href","https://github.com/larien"),v(e,"class","svelte-1jbdpm")},m(t,n){h(t,e,n)},d(t){t&&p(e)}}}function _t(t){let e;return{c(){e=g("a"),e.innerHTML='<i class="fa fa-twitter"></i>',v(e,"title","Twitter"),v(e,"href","http://www.twitter.com/larienmf"),v(e,"class","svelte-1jbdpm")},m(t,n){h(t,e,n)},d(t){t&&p(e)}}}function jt(t){let e;return{c(){e=g("a"),e.innerHTML='<i class="fa fa-linkedin"></i>',v(e,"title","LinkedIn"),v(e,"href","https://www.linkedin.com/in/lauren-ferreira-9836914b/"),v(e,"class","svelte-1jbdpm")},m(t,n){h(t,e,n)},d(t){t&&p(e)}}}function kt(t){let e;return{c(){e=g("a"),e.innerHTML='<i class="fa fa-envelope"></i>',v(e,"title","E-mail"),v(e,"href","mailto:lauren.ferremch@gmail.com"),v(e,"class","svelte-1jbdpm")},m(t,n){h(t,e,n)},d(t){t&&p(e)}}}function Nt(e){let n,o;function r(t,e){return"email"==t[0]?kt:"linkedin"==t[0]?jt:"twitter"==t[0]?_t:"github"==t[0]?Lt:void 0}let s=r(e),c=s&&s(e);return{c(){n=g("div"),c&&c.c(),v(n,"class",o="contact "+e[0]+" svelte-1jbdpm")},m(t,e){h(t,n,e),c&&c.m(n,null)},p(t,[e]){s!==(s=r(t))&&(c&&c.d(1),c=s&&s(t),c&&(c.c(),c.m(n,null))),1&e&&o!==(o="contact "+t[0]+" svelte-1jbdpm")&&v(n,"class",o)},i:t,o:t,d(t){t&&p(n),c&&c.d()}}}function Mt(t,e,n){let{icon:o}=e;return t.$set=t=>{"icon"in t&&n(0,o=t.icon)},[o]}class Tt extends X{constructor(t){super(),V(this,t,Mt,Nt,c,{icon:0})}}function At(e){let n;return{c(){n=g("p"),n.textContent="v1.0",v(n,"class","svelte-15aefnf")},m(t,e){h(t,n,e)},p:t,i:t,o:t,d(t){t&&p(n)}}}class Ht extends X{constructor(t){super(),V(this,t,null,At,c,{})}}function St(e){let n,o,r,s,c,i,l,a;return n=new Tt({props:{icon:"github"}}),r=new Tt({props:{icon:"twitter"}}),c=new Tt({props:{icon:"email"}}),l=new Tt({props:{icon:"linkedin"}}),{c(){J(n.$$.fragment),o=w(),J(r.$$.fragment),s=w(),J(c.$$.fragment),i=w(),J(l.$$.fragment)},m(t,e){Q(n,t,e),h(t,o,e),Q(r,t,e),h(t,s,e),Q(c,t,e),h(t,i,e),Q(l,t,e),a=!0},p:t,i(t){a||(K(n.$$.fragment,t),K(r.$$.fragment,t),K(c.$$.fragment,t),K(l.$$.fragment,t),a=!0)},o(t){Y(n.$$.fragment,t),Y(r.$$.fragment,t),Y(c.$$.fragment,t),Y(l.$$.fragment,t),a=!1},d(t){R(n,t),t&&p(o),R(r,t),t&&p(s),R(c,t),t&&p(i),R(l,t)}}}function zt(t){let e,n,o,r,s,c,i;return n=new Ct({}),r=new xt({props:{direction:"row",align:"center",$$slots:{default:[St]},$$scope:{ctx:t}}}),c=new Ht({}),{c(){e=g("section"),J(n.$$.fragment),o=w(),J(r.$$.fragment),s=w(),J(c.$$.fragment),v(e,"id","footer"),v(e,"class","svelte-1gcu89c")},m(t,l){h(t,e,l),Q(n,e,null),d(e,o),Q(r,e,null),d(e,s),Q(c,e,null),i=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),r.$set(n)},i(t){i||(K(n.$$.fragment,t),K(r.$$.fragment,t),K(c.$$.fragment,t),i=!0)},o(t){Y(n.$$.fragment,t),Y(r.$$.fragment,t),Y(c.$$.fragment,t),i=!1},d(t){t&&p(e),R(n),R(r),R(c)}}}class Pt extends X{constructor(t){super(),V(this,t,null,zt,c,{})}}function Bt(t){let e,n,o,r,s,c,i,l,a,u,f,d,m,$;return i=new it({}),a=new wt({}),f=new Pt({}),{c(){e=g("link"),n=w(),o=g("link"),r=w(),s=g("i"),c=w(),J(i.$$.fragment),l=w(),J(a.$$.fragment),u=w(),J(f.$$.fragment),v(e,"rel","stylesheet"),v(e,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"),v(e,"class","svelte-z2n8iw"),v(o,"href","https://fonts.googleapis.com/css?family=Coda"),v(o,"rel","stylesheet"),v(o,"class","svelte-z2n8iw"),v(s,"title",t[0]),v(s,"class","fa fa-moon-o svelte-z2n8iw")},m(p,g){h(p,e,g),h(p,n,g),h(p,o,g),h(p,r,g),h(p,s,g),h(p,c,g),Q(i,p,g),h(p,l,g),Q(a,p,g),h(p,u,g),Q(f,p,g),d=!0,m||($=y(s,"click",t[1]),m=!0)},p(t,[e]){(!d||1&e)&&v(s,"title",t[0])},i(t){d||(K(i.$$.fragment,t),K(a.$$.fragment,t),K(f.$$.fragment,t),d=!0)},o(t){Y(i.$$.fragment,t),Y(a.$$.fragment,t),Y(f.$$.fragment,t),d=!1},d(t){t&&p(e),t&&p(n),t&&p(o),t&&p(r),t&&p(s),t&&p(c),R(i,t),t&&p(l),R(a,t),t&&p(u),R(f,t),m=!1,$()}}}function Dt(t,e,n){let o,r=!0;function s(){r=!r,n(0,o=r?"Dark mode":"Light mode"),window.document.body.classList.toggle("dark-mode")}return s(),[o,s]}return new class extends X{constructor(t){super(),V(this,t,Dt,Bt,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
