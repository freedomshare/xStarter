(()=>{var e={82318:(e,t,r)=>{"use strict";r(65363),r(10071);var n=r(98880),o=r(99592),a=r(83673);function s(e,t,r,n,o,s){const i=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(i)}const i=(0,a.aZ)({name:"App"});i.render=s;const c=i;var d=r(342),l=r(47083),u=r(79582);const h=[{path:"/",component:()=>Promise.all([r.e(736),r.e(64),r.e(230)]).then(r.bind(r,49410)),children:[{path:"",name:"index",component:()=>Promise.all([r.e(736),r.e(64),r.e(132)]).then(r.bind(r,31845))},{path:"ilo",name:"ilo_main",component:()=>Promise.all([r.e(736),r.e(64),r.e(745)]).then(r.bind(r,77527))},{path:"gov",name:"gov_main",component:()=>Promise.all([r.e(736),r.e(64),r.e(581)]).then(r.bind(r,49581))},{path:"nft",name:"nft_main",component:()=>Promise.all([r.e(736),r.e(226)]).then(r.bind(r,25226))},{path:"nft/mint/:ipfs_cid",name:"nft_mint",component:()=>Promise.all([r.e(736),r.e(64),r.e(109)]).then(r.bind(r,98109))},{path:"nft/deploy",name:"nft_deploy",component:()=>Promise.all([r.e(736),r.e(64),r.e(963)]).then(r.bind(r,7963))},{path:"nft/gen_mint_page",name:"nft_generate_mint_page",component:()=>Promise.all([r.e(736),r.e(64),r.e(935)]).then(r.bind(r,49935))},{path:"nft/gallery/:chainId/:contractAddress",name:"nft_gallery",component:()=>Promise.all([r.e(736),r.e(64),r.e(478)]).then(r.bind(r,32478))},{path:"tools",name:"tools",component:()=>Promise.all([r.e(736),r.e(64),r.e(27)]).then(r.bind(r,4027))},{path:"trading_tools",name:"trading_tools",component:()=>Promise.all([r.e(736),r.e(64),r.e(221)]).then(r.bind(r,15221))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(193)]).then(r.bind(r,32193))}],f=h,p=(0,l.BC)((function(){const e=u.r5,t=(0,u.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("")});return t}));async function g(e,t){const n="function"===typeof d.default?await(0,d.default)({}):d.default,{storeKey:a}=await Promise.resolve().then(r.bind(r,342)),s="function"===typeof p?await p({store:n}):p;n.$router=s;const i=e(c);return i.use(o.Z,t),{app:i,store:n,storeKey:a,router:s}}var b=r(7153),m=r(80589),v=r(64434);const y={config:{dark:"auto"},plugins:{SessionStorage:b.Z,LocalStorage:m.Z,Notify:v.Z}};var w=r(40019);const P="";async function S({app:e,router:t,store:r,storeKey:n},o){let a=!1;const s=e=>{a=!0;const r=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=r},i=window.location.href.replace(window.location.origin,"");for(let d=0;!1===a&&d<o.length;d++)try{await o[d]({app:e,router:t,store:r,ssrContext:null,redirect:s,urlPath:i,publicPath:P})}catch(c){return c&&c.url?void(window.location.href=c.url):void w.error("[Quasar] boot error:",c)}!0!==a&&(e.use(t),e.use(r,n),e.mount("#q-app"))}g(n.ri,y).then((e=>Promise.all([Promise.resolve().then(r.bind(r,94112)),Promise.resolve().then(r.bind(r,5474)),Promise.resolve().then(r.bind(r,76638)),Promise.resolve().then(r.bind(r,80602)),Promise.resolve().then(r.bind(r,38465)),Promise.resolve().then(r.bind(r,75097)),Promise.resolve().then(r.bind(r,42299))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));S(e,r)}))))},80602:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,abiUtils:()=>a});var n=r(47083),o=r(40019);const a={getFunctionObj(e,t,r){if("constructor"===r||"constructor"===t)return this.getConstructorObj(e);let n=e.filter((e=>e.type===r.toLowerCase()));return n.length?n.find((e=>e.name===t)):void 0},getConstructorObj(e){return o.log("type of",typeof e,e),e.find((e=>"constructor"===e.type))}},s=(0,n.xr)((({app:e})=>{e.config.globalProperties.$abiUtils=a}))},5474:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,axios:()=>a.a,api:()=>s});var n=r(47083),o=r(30052),a=r.n(o);const s=a().create({baseURL:"https://api.example.com"}),i=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=s}))},76638:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,ethers:()=>a});var n=r(47083),o=r(38573),a=r(98429);const s={weiBigNumberToFloatEther(e){return parseFloat(o.dF(e.toString()))}},i=(0,n.xr)((({app:e})=>{e.config.globalProperties.$ethers=a,e.config.globalProperties.$helper=s}))},75097:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(47083),o=r(11185);const a={logEvent(e,t,r,n){dataLayer.push({event:"customEvent",category:e,action:t,label:r,value:n,cid:this.getCid()})},logPage(e){dataLayer.push({event:"customPageView",path:e,cid:this.getCid()})},getCid(){return localStorage.cid||(localStorage.cid=(0,o.Z)()),localStorage.cid}};var s=r(40019);const i=(0,n.xr)((async({router:e})=>{e.afterEach(((e,t)=>{"www.xstarter.app"===window.location.hostname&&"xstarter.app"===window.location.hostname?a.logPage(e.path):s.log("please get a google analytics and tag manager account and update the required files including update src/boot/gtm-plugin.js")}))}))},94112:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,i18n:()=>i});var n=r(47083),o=r(9262);const a={failed:"Action failed",success:"Action was successful"},s={"en-US":a},i=(0,o.o)({locale:"en-US",messages:s}),c=(0,n.xr)((({app:e})=>{e.use(i)}))},42299:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,indexDBFactory:()=>i});r(10071);var n=r(47083),o=r(40019);r(82664);class a{constructor(){this.objectOfDbs={}}async deleteDatabase(e){await indexedDB.deleteDatabase(e);return!0}async setupDatabaseAndObjectStore(e,t,r,n){this.objectOfDbs[e]||(this.objectOfDbs[e]=new s,await this.objectOfDbs[e].setupDatabaseAndObjectStore(e,t,r,n),o.log("obj db is",this.objectOfDbs[e]))}async addData(e,t,r,n,a,s){this.objectOfDbs[e]?await this.objectOfDbs[e].addData(t,r,n,a,s):o.log("no database with that name created ")}async getNumberedIndexByRange(e,t,r,n,a,s){o.log("start num is",n),this.objectOfDbs[e]?await this.objectOfDbs[e].getNumberedIndexByRange(t,r,n,a,s):o.log("no database with that name created ")}async getPaginatedNumberedIndexByRange(e,t,r,n,a,s,i){o.log("start num is",n),this.objectOfDbs[e]?await this.objectOfDbs[e].getPaginatedNumberedIndexByRange(t,r,n,a,s,i):o.log("no database with that name created ")}}class s{constructor(){this.db=null,this.hasErrors=null,this.objectStore=null}async setupDatabaseAndObjectStore(e,t,r,n){const a=window.indexedDB.open(e,1);a.onerror=e=>{o.log("errors",e),this.hasErrors=!0},a.onsuccess=e=>{this.db=e.target.result,this.db.error=function(e){o.log("database error",e.target.errorCode)}},a.onupgradeneeded=e=>{o.log("on upgradeneeded"),this.db=e.target.result,this.db.error=function(e){o.log("database error",e.target.errorCode)},this.objectStore=r?this.db.createObjectStore(t,{keyPath:r}):this.db.createObjectStore(t,{autoIncrement:!0});for(const t of n)this.objectStore.createIndex(t[0],t[0],{unique:t[1]})}}async addData(e,t,r,n,o){const a=this.db.transaction([e],"readwrite");n&&(a.onerror=n),o&&(a.oncomplete=o);const s=a.objectStore(e);for(const i of t){let e=s.add(i);r&&(e.onsuccess=r)}}async removeData(e,t,r){const n=this.db.transaction([e],"readwrite").objectStore(e).delete(t);n.onsuccess=r}async getDataByKey(e,t,r){const n=this.db.transaction([e],"readwrite").objectStore(e).get(t);n.onsuccess=function(e){r(e.target.result)}}async getALlDataFromObjectStore(e,t){const r=this.db.transaction([e],"readwrite").objectStore(e);r.getAll().onsuccess=function(e){t(e.target.result)}}async getNumberedIndexByRange(e,t,r,n,o){const a=this.db.transaction([e],"readwrite").objectStore(e),s=a.index(t),i=IDBKeyRange.bound(r,n,!0,!0);s.openCursor(i).onsuccess=async function(e){const t=e.target.result;t&&(o(t.value),t.continue())}}async getPaginatedNumberedIndexByRange(e,t,r,n,a,s){const i=this.db.transaction([e],"readwrite").objectStore(e),c=i.index(t);let d=r,l=r+a>n?n:r+a;while(1){const e=IDBKeyRange.bound(d,l,!0,!0),t=c.getAll(e);if(t.onsuccess=function(e){o.log("event result is",e.target.result);const t=e.target.result;t.length&&s(t)},d=l,l=l+a>n?n:l+a,d>=n)break}}}const i=new a,c=(0,n.xr)((({app:e})=>{e.config.globalProperties.$indexDBFactory=i}))},38465:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l,ipfs_utils:()=>d});var n=r(87567),o=r.n(n),a=r(47083),s=r(40019);const i=r(82664);class c{constructor(){this.ipfsNode=null,this.isSet=!1,this.currentILO=""}async setUpIPFS(){return!!this.isSet||(this.ipfsNode=await i.create(),this.isSet=!!this.ipfsNode,this.isSet)}async saveILOInfo(e){await this.setUpIPFS();const t=JSON.stringify(e),r=await this.ipfsNode.add(t);return s.log("results is",r),r}async getILOInfo(e){await this.setUpIPFS();const t=await this.ipfsNode.cat(e);let r="";var n,a=!0,i=!1;try{for(var c,d,l=o()(t);c=await l.next(),a=c.done,d=await c.value,!a;a=!0){const e=d;r+=e.toString()}}catch(u){i=!0,n=u}finally{try{a||null==l.return||await l.return()}finally{if(i)throw n}}return r=JSON.parse(r),s.log("data is",r),r}}const d=new c,l=(0,a.xr)((({app:e})=>{e.config.globalProperties.$ipfs_utils=d}))},342:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P});var n={};r.r(n),r.d(n,{getConnectedAccounts:()=>h,getConnectedAndPermissioned:()=>f,getEthereumProvider:()=>u,getProvider:()=>d,getSigner:()=>l});var o={};r.r(o),r.d(o,{mutateConnectedAccounts:()=>m,mutateConnectedAndPermissioned:()=>v,mutateEthereumProvider:()=>b,mutateProvider:()=>p,mutateSigner:()=>g});var a={};r.r(a),r.d(a,{someAction:()=>y});var s=r(47083),i=r(93617);function c(){return{provider:void 0,ethereumProvider:void 0,signer:void 0,connectedAccounts:[],connectedAndPermissioned:!1,contracts:{launchPad:void 0}}}function d(e){return e.provider}function l(e){return e.signer}function u(e){return e.ethereumProvider}function h(e){return e.connectedAccounts}function f(e){return e.connectedAndPermissioned}function p(e,t){e.provider=t}function g(e,t){e.Signer=t}function b(e,t){return e.ethereumProvider=t}function m(e,t){return e.connectedAccounts=t}function v(e,t){return e.connectedAndPermissioned=t}function y(){}const w={namespaced:!0,getters:n,mutations:o,actions:a,state:c},P=(0,s.h)((function(){return(0,i.MT)({modules:{blockchain:w},strict:!1})}))},35883:()=>{},46601:()=>{},89214:()=>{},5696:()=>{},42246:()=>{},88795:()=>{},89408:()=>{},57600:()=>{},21724:()=>{},25819:()=>{},52361:()=>{},94616:()=>{}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,(()=>{r.amdO={}})(),(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var s=1/0;for(d=0;d<e.length;d++){for(var[n,o,a]=e[d],i=!0,c=0;c<n.length;c++)(!1&a||s>=a)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(i=!1,a<s&&(s=a));i&&(e.splice(d--,1),t=o())}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{27:"32674c2b",64:"a9005570",109:"ab271460",132:"14ecad2d",193:"31d0489e",221:"c9e3510c",226:"16d38d7b",230:"ed16bc86",478:"b0ad2310",581:"0156cc2d",745:"61804f5e",935:"37202fc6",963:"4ff9c65c"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{109:"f9687d5b",132:"6f8f850d",226:"52db43f8",581:"9dfc1bb0",736:"8b835321",745:"8b91d5f8"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="xstarter-frontend:";r.l=(n,o,a,s)=>{if(e[n])e[n].push(o);else{var i,c;if(void 0!==a)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){i=u;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+a),i.src=n),e[n]=[o];var h=(t,r)=>{i.onerror=i.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),c&&document.head.appendChild(i)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=i,o.parentNode.removeChild(o),n(c)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){o=s[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var s=r.miniCssF(n),i=r.p+s;if(t(s,i))return o();e(n,i,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={109:1,132:1,226:1,581:1,745:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var s=r.p+r.u(t),i=new Error,c=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,o[1](i)}};r.l(s,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[s,i,c]=n,d=0;for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(c)var l=c(r);for(t&&t(n);d<s.length;d++)a=s[d],r.o(e,a)&&e[a]&&e[a][0](),e[s[d]]=0;return r.O(l)},n=self["webpackChunkxstarter_frontend"]=self["webpackChunkxstarter_frontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(82318)));n=r.O(n)})();