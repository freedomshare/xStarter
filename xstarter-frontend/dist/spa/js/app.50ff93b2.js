(()=>{var e={82318:(e,t,r)=>{"use strict";r(65363),r(10071);var n=r(98880),o=r(42424),a=r(7153),i=r(80589);const s={config:{dark:"auto"},plugins:{SessionStorage:a.Z,LocalStorage:i.Z}};var c=r(83673);function l(e,t,r,n,o,a){const i=(0,c.up)("router-view");return(0,c.wg)(),(0,c.j4)(i)}const d=(0,c.aZ)({name:"App"});d.render=l;const u=d;var f=r(342),p=r(47083),h=r(79582);const g=[{path:"/",component:()=>Promise.all([r.e(736),r.e(64),r.e(619)]).then(r.bind(r,798)),children:[{path:"",name:"ilo_main",component:()=>Promise.all([r.e(736),r.e(64),r.e(873)]).then(r.bind(r,54873))},{path:"gov",name:"gov_main",component:()=>Promise.all([r.e(736),r.e(64),r.e(581)]).then(r.bind(r,49581))},{path:"nft",name:"nft_main",component:()=>Promise.all([r.e(736),r.e(64),r.e(515)]).then(r.bind(r,1515))},{path:"nft/mint/:ipfs_cid",name:"nft_mint",component:()=>Promise.all([r.e(736),r.e(64),r.e(204)]).then(r.bind(r,12204))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(193)]).then(r.bind(r,32193))}],m=g,v=(0,p.BC)((function(){const e=h.r5,t=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("")});return t}));async function b(e){const t="function"===typeof f.default?await(0,f.default)({}):f.default,{storeKey:n}=await Promise.resolve().then(r.bind(r,342)),a="function"===typeof v?await v({store:t}):v;t.$router=a;const i=e(u);return i.use(o.Z,s),{app:i,store:t,storeKey:n,router:a}}var y=r(40019);const w="";async function P({app:e,router:t,store:r,storeKey:n},o){let a=!1;const i=e=>{a=!0;const r=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=r},s=window.location.href.replace(window.location.origin,"");for(let l=0;!1===a&&l<o.length;l++)try{await o[l]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:s,publicPath:w})}catch(c){return c&&c.url?void(window.location.href=c.url):void y.error("[Quasar] boot error:",c)}!0!==a&&(e.use(t),e.use(r,n),e.mount("#q-app"))}b(n.ri).then((e=>Promise.all([Promise.resolve().then(r.bind(r,94112)),Promise.resolve().then(r.bind(r,5474)),Promise.resolve().then(r.bind(r,76638)),Promise.resolve().then(r.bind(r,80602)),Promise.resolve().then(r.bind(r,38465)),Promise.resolve().then(r.bind(r,75097))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));P(e,r)}))))},80602:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,abiUtils:()=>a});var n=r(47083),o=r(40019);const a={getFunctionObj(e,t,r){if("constructor"===r||"constructor"===t)return this.getConstructorObj(e);let n=e.filter((e=>e.type===r.toLowerCase()));return n.length?n.find((e=>e.name===t)):void 0},getConstructorObj(e){return o.log("type of",typeof e,e),e.find((e=>"constructor"===e.type))}},i=(0,n.xr)((({app:e})=>{e.config.globalProperties.$abiUtils=a}))},5474:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,axios:()=>a.a,api:()=>i});var n=r(47083),o=r(30052),a=r.n(o);const i=a().create({baseURL:"https://api.example.com"}),s=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},76638:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,ethers:()=>a});var n=r(47083),o=r(38573),a=r(98429);const i={weiBigNumberToFloatEther(e){return parseFloat(o.dF(e.toString()))}},s=(0,n.xr)((({app:e})=>{e.config.globalProperties.$ethers=a,e.config.globalProperties.$helper=i}))},75097:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(47083),o=r(11185);const a={logEvent(e,t,r,n){dataLayer.push({event:"customEvent",category:e,action:t,label:r,value:n,cid:this.getCid()})},logPage(e){dataLayer.push({event:"customPageView",path:e,cid:this.getCid()})},getCid(){return localStorage.cid||(localStorage.cid=(0,o.Z)()),localStorage.cid}};var i=r(40019);const s=(0,n.xr)((async({router:e})=>{e.afterEach(((e,t)=>{"www.xstarter.app"===window.location.hostname&&"xstarter.app"===window.location.hostname?a.logPage(e.path):i.log("please get a google analytics and tag manager account and update the required files including update src/boot/gtm-plugin.js")}))}))},94112:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,i18n:()=>s});var n=r(47083),o=r(83414);const a={failed:"Action failed",success:"Action was successful"},i={"en-US":a},s=(0,o.o)({locale:"en-US",messages:i}),c=(0,n.xr)((({app:e})=>{e.use(s)}))},38465:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d,ipfs_utils:()=>l});var n=r(87567),o=r.n(n),a=r(47083),i=r(40019);const s=r(82664);class c{constructor(){this.ipfsNode=null,this.isSet=!1,this.currentILO=""}async setUpIPFS(){return!!this.isSet||(this.ipfsNode=await s.create(),this.isSet=!!this.ipfsNode,this.isSet)}async saveILOInfo(e){await this.setUpIPFS();const t=JSON.stringify(e),r=await this.ipfsNode.add(t);return i.log("results is",r),r}async getILOInfo(e){await this.setUpIPFS();const t=await this.ipfsNode.cat(e);let r="";var n,a=!0,s=!1;try{for(var c,l,d=o()(t);c=await d.next(),a=c.done,l=await c.value,!a;a=!0){const e=l;r+=e.toString()}}catch(u){s=!0,n=u}finally{try{a||null==d.return||await d.return()}finally{if(s)throw n}}return r=JSON.parse(r),i.log("data is",r),r}}const l=new c,d=(0,a.xr)((({app:e})=>{e.config.globalProperties.$ipfs_utils=l}))},342:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P});var n={};r.r(n),r.d(n,{getConnectedAccounts:()=>f,getConnectedAndPermissioned:()=>p,getEthereumProvider:()=>u,getProvider:()=>l,getSigner:()=>d});var o={};r.r(o),r.d(o,{mutateConnectedAccounts:()=>v,mutateConnectedAndPermissioned:()=>b,mutateEthereumProvider:()=>m,mutateProvider:()=>h,mutateSigner:()=>g});var a={};r.r(a),r.d(a,{someAction:()=>y});var i=r(47083),s=r(55250);function c(){return{provider:void 0,ethereumProvider:void 0,signer:void 0,connectedAccounts:[],connectedAndPermissioned:!1,contracts:{launchPad:void 0}}}function l(e){return e.provider}function d(e){return e.signer}function u(e){return e.ethereumProvider}function f(e){return e.connectedAccounts}function p(e){return e.connectedAndPermissioned}function h(e,t){e.provider=t}function g(e,t){e.Signer=t}function m(e,t){return e.ethereumProvider=t}function v(e,t){return e.connectedAccounts=t}function b(e,t){return e.connectedAndPermissioned=t}function y(){}const w={namespaced:!0,getters:n,mutations:o,actions:a,state:c},P=(0,i.h)((function(){return(0,s.MT)({modules:{blockchain:w},strict:!1})}))},35883:()=>{},46601:()=>{},89214:()=>{},5696:()=>{},42246:()=>{},88795:()=>{},89408:()=>{},57600:()=>{},21724:()=>{},25819:()=>{},52361:()=>{},94616:()=>{}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,(()=>{r.amdO={}})(),(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(l=0;l<e.length;l++){for(var[n,o,a]=e[l],s=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(s=!1,a<i&&(i=a));s&&(e.splice(l--,1),t=o())}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{64:"86bd66e5",193:"6122fd38",204:"c5f1d6b2",515:"d2f2d0a1",581:"f7f6fbcd",619:"af63bd4c",873:"47966add"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{204:"d6845eed",515:"a4d4407a",581:"9dfc1bb0",736:"ddbd67c6",873:"9d0b2bd9"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="xstarter-frontend:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var s,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){s=u;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[o];var f=(t,r)=>{s.onerror=s.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,o.parentNode.removeChild(o),n(c)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),s=r.p+i;if(t(i,s))return o();e(n,s,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={204:1,515:1,581:1,873:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),s=new Error,c=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,s,c]=n,l=0;for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var d=c(r);for(t&&t(n);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[i[l]]=0;return r.O(d)},n=self["webpackChunkxstarter_frontend"]=self["webpackChunkxstarter_frontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(82318)));n=r.O(n)})();