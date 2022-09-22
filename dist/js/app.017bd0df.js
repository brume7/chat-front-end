(function(){"use strict";var e={3595:function(e,t,s){var o=s(9242),a=s(3396),n=s(7718),r=s(702),u=s(9271),l=s(7471),i=s(5030);const c=(0,a.Uk)("Messenger"),d=(0,a.Uk)("Messages"),m=(0,a.Uk)("New messages"),f=(0,a.Uk)("Register"),p=(0,a.Uk)("LOGIN"),g=(0,a.Uk)("LOG OUT");function h(e,t,s,o,h,w){const _=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(n.q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l.iv,{color:"white",height:"50",app:""},{default:(0,a.w5)((()=>[(0,a.Wm)(i.q,null,{default:(0,a.w5)((()=>[c])),_:1}),e.$store.state.token?((0,a.wg)(),(0,a.j4)(r.T,{key:0,flat:"",to:"/"},{default:(0,a.w5)((()=>[d])),_:1})):(0,a.kq)("",!0),e.$store.state.token?((0,a.wg)(),(0,a.j4)(r.T,{key:1,flat:"",to:"/newmessage"},{default:(0,a.w5)((()=>[m])),_:1})):(0,a.kq)("",!0),e.$store.state.token?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(r.T,{key:2,flat:"",to:"/register"},{default:(0,a.w5)((()=>[f])),_:1})),e.$store.state.token?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(r.T,{key:3,flat:"",to:"/login"},{default:(0,a.w5)((()=>[p])),_:1})),e.$store.state.token?((0,a.wg)(),(0,a.j4)(r.T,{key:4,flat:"",color:"danger",onClick:t[0]||(t[0]=()=>{e.$store.dispatch("LOGOUT"),e.$router.push("/login")})},{default:(0,a.w5)((()=>[g])),_:1})):(0,a.kq)("",!0)])),_:1}),(0,a.Wm)(u.O,null,{default:(0,a.w5)((()=>[(0,a.Wm)(_)])),_:1})])),_:1})}var w=s(7139),_=s(3324),v=s(1539),k=s(6094),b=s(9457),y=s(2127),S=s(7754);const E=(0,a.Uk)("Messages");function O(e,t,s,o,n,r){return(0,a.wg)(),(0,a.j4)(v.K,{class:"col-sm-8 offset-sm-2"},{default:(0,a.w5)((()=>[(0,a.Wm)(_._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l.iv,{color:"dark",app:""},{default:(0,a.w5)((()=>[(0,a.Wm)(i.q,{class:"text-light"},{default:(0,a.w5)((()=>[E])),_:1})])),_:1}),(0,a.Wm)(k.i,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.$store.state.messages.data,((e,t)=>((0,a.wg)(),(0,a.j4)(b.l,{key:t,to:"message/"+t},{default:(0,a.w5)((()=>[(0,a.Wm)(y.V,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,w.zw)(e.user),1)])),_:2},1024),(0,a.Wm)(S.b,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,w.zw)(e.text),1)])),_:2},1024)])),_:2},1032,["to"])))),128))])),_:1})])),_:1})])),_:1})}var T={name:"Messages",beforeCreate(){this.$store.state.token||this.$router.push("/register"),this.$store.dispatch("GET_MESSAGES")}},W=s(89);const N=(0,W.Z)(T,[["render",O]]);var j=N,M=s(6422),U=s(2719);const $=(0,a.Uk)(" Send ");function G(e,t,s,n,u,l){return(0,a.wg)(),(0,a.j4)(v.K,{class:"form col-sm-8 offset-sm-2"},{default:(0,a.w5)((()=>[(0,a.Wm)(M.O,{onSubmit:(0,o.iM)(l.submit,["prevent"])},{default:(0,a.w5)((()=>[(0,a.Wm)(_._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(v.K,null,{default:(0,a.w5)((()=>[(0,a.Wm)(U.h,{modelValue:u.messageBody,"onUpdate:modelValue":t[0]||(t[0]=e=>u.messageBody=e),label:"message",required:""},null,8,["modelValue"]),(0,a.Wm)(r.T,{color:"success",class:"mr-4",onClick:(0,o.iM)(l.submit,["stop"])},{default:(0,a.w5)((()=>[$])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["onSubmit"])])),_:1})}var q=s(6265),C=s.n(q),V={name:"NewMessage",data(){return{messageBody:""}},methods:{async submit(){if(""==this.messageBody)return"";try{await C().post("http://localhost:3000/messages",{message:this.messageBody}),this.$store.dispatch("GET_MESSAGES"),this.messageBody="",this.$router.push("/messages")}catch(e){alert("disconnected")}}}};const A=(0,W.Z)(V,[["render",G]]);var K=A,P={name:"App",components:{Messages:j,NewMessage:K},data:()=>({})};const x=(0,W.Z)(P,[["render",h]]);var I=x,L=(s(9773),s(8685)),R=(0,L.Rd)(),B=s(65);const Z=(0,B.MT)({state(){return{messages:[],token:localStorage.getItem("token")||""}},mutations:{SET_MESSAGES:(e,t)=>{e.messages=t},SET_TOKEN:(e,t)=>{e.token=t}},actions:{GET_MESSAGES:async function({commit:e}){const t=await C().get("http://localhost:3000/messages");e("SET_MESSAGES",t)},GET_MESSAGE:async function({commit:e},t){return C().get(`http://localhost:3000/messages/${t}`)},REGISTER:async function({commit:e},t){try{let s=(await C().post("http://localhost:3000/register",t)).data;localStorage.setItem("token",s),C().defaults.headers.common.Auth=s,e("SET_TOKEN",s)}catch(s){console.log(s),s.response.data?alert(s.response.data):alert("disconnected")}},LOGIN:async function({commit:e},t){try{let s=(await C().post("http://localhost:3000/login",t)).data;localStorage.setItem("token",s),C().defaults.headers.common.Auth=s,e("SET_TOKEN",s)}catch(s){alert("username or password incorrect")}},LOGOUT:function({commit:e}){e("SET_TOKEN",""),localStorage.removeItem("token")}}});var z=Z;async function F(){const e=await s.e(461).then(s.t.bind(s,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var D=s(2483),H=(s(2166),s(1888));const Y=(0,a.Uk)("Message");function J(e,t,s,o,n,r){return(0,a.wg)(),(0,a.j4)(v.K,{class:"form col-sm-8 offset-sm-2"},{default:(0,a.w5)((()=>[(0,a.Wm)(_._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l.iv,{color:"dark",app:""},{default:(0,a.w5)((()=>[(0,a.Wm)(i.q,{class:"text-light"},{default:(0,a.w5)((()=>[Y])),_:1})])),_:1}),(0,a.Wm)(H.Z,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,w.zw)(n.message.text),1)])),_:1})])),_:1})])),_:1})}var Q={name:"NewMessage",data(){return{message:""}},async created(){this.message=(await this.$store.dispatch("GET_MESSAGE",this.$route.params.id)).data},methods:{}};const X=(0,W.Z)(Q,[["render",J]]);var ee=X;const te=(0,a.Uk)("Login"),se=(0,a.Uk)(" Login ");function oe(e,t,s,n,u,c){return(0,a.wg)(),(0,a.j4)(v.K,{class:"form col-sm-8 offset-sm-2"},{default:(0,a.w5)((()=>[(0,a.Wm)(M.O,{onSubmit:(0,o.iM)(c.login,["prevent"])},{default:(0,a.w5)((()=>[(0,a.Wm)(_._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l.iv,{color:"dark",app:""},{default:(0,a.w5)((()=>[(0,a.Wm)(i.q,{class:"text-light"},{default:(0,a.w5)((()=>[te])),_:1})])),_:1}),(0,a.Wm)(v.K,null,{default:(0,a.w5)((()=>[(0,a.Wm)(U.h,{modelValue:u.userName,"onUpdate:modelValue":t[0]||(t[0]=e=>u.userName=e),name:"username",label:"User Name",required:""},null,8,["modelValue"]),(0,a.Wm)(U.h,{type:"password",modelValue:u.password,"onUpdate:modelValue":t[1]||(t[1]=e=>u.password=e),label:"Password",required:""},null,8,["modelValue"]),(0,a.Wm)(r.T,{color:"success",class:"mr-4",onClick:(0,o.iM)(c.login,["stop"])},{default:(0,a.w5)((()=>[se])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["onSubmit"])])),_:1})}var ae={name:"NewMessage",data(){return{userName:"",password:""}},methods:{async login(){await this.$store.dispatch("LOGIN",{userName:this.userName,password:this.password}),this.userName="",this.password="",this.$router.push("/messages")}},beforeCreate(){this.$store.state.token&&this.$router.push("/")}};const ne=(0,W.Z)(ae,[["render",oe]]);var re=ne;const ue=(0,a.Uk)("Register"),le=(0,a.Uk)(" Register ");function ie(e,t,s,n,u,c){return(0,a.wg)(),(0,a.j4)(v.K,{class:"form col-sm-8 offset-sm-2"},{default:(0,a.w5)((()=>[(0,a.Wm)(M.O,{onSubmit:(0,o.iM)(c.register,["prevent"])},{default:(0,a.w5)((()=>[(0,a.Wm)(_._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l.iv,{color:"dark",app:""},{default:(0,a.w5)((()=>[(0,a.Wm)(i.q,{class:"text-light"},{default:(0,a.w5)((()=>[ue])),_:1})])),_:1}),(0,a.Wm)(v.K,null,{default:(0,a.w5)((()=>[(0,a.Wm)(U.h,{modelValue:u.userName,"onUpdate:modelValue":t[0]||(t[0]=e=>u.userName=e),name:"username",label:"User Name",required:""},null,8,["modelValue"]),(0,a.Wm)(U.h,{type:"password",modelValue:u.password,"onUpdate:modelValue":t[1]||(t[1]=e=>u.password=e),label:"Password",required:""},null,8,["modelValue"]),(0,a.Wm)(r.T,{color:"success",class:"mr-4",onClick:(0,o.iM)(c.register,["stop"])},{default:(0,a.w5)((()=>[le])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["onSubmit"])])),_:1})}var ce={name:"NewMessage",data(){return{userName:"",password:""}},methods:{async register(){await this.$store.dispatch("REGISTER",{userName:this.userName,password:this.password}),this.userName="",this.password="",this.$router.push("/messages")}},beforeCreate(){this.$store.state.token&&this.$router.push("/")}};const de=(0,W.Z)(ce,[["render",ie],["__scopeId","data-v-7116dff1"]]);var me=de;const fe=[{path:"/",component:j},{path:"/message/:id",component:ee},{path:"/newmessage",component:K},{path:"/login",component:re},{path:"/register",component:me},{path:"/:catchAll(.*)",redirect:"/"}],pe=new D.p7({history:(0,D.PO)("/"),routes:fe});F(),(0,o.ri)(I).use(z).use(pe).use(R).mount("#app")}},t={};function s(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,s),n.exports}s.m=e,function(){var e=[];s.O=function(t,o,a,n){if(!o){var r=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],n=e[c][2];for(var u=!0,l=0;l<o.length;l++)(!1&n||r>=n)&&Object.keys(s.O).every((function(e){return s.O[e](o[l])}))?o.splice(l--,1):(u=!1,n<r&&(r=n));if(u){e.splice(c--,1);var i=a();void 0!==i&&(t=i)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[o,a,n]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};s.t=function(o,a){if(1&a&&(o=this(o)),8&a)return o;if("object"===typeof o&&o){if(4&a&&o.__esModule)return o;if(16&a&&"function"===typeof o.then)return o}var n=Object.create(null);s.r(n);var r={};e=e||[null,t({}),t([]),t(t)];for(var u=2&a&&o;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){r[e]=function(){return o[e]}}));return r["default"]=function(){return o},s.d(n,r),n}}(),function(){s.d=function(e,t){for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,o){return s.f[o](e,t),t}),[]))}}(),function(){s.u=function(e){return"js/webfontloader.ed8ec939.js"}}(),function(){s.miniCssF=function(e){}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-messages:";s.l=function(o,a,n,r){if(e[o])e[o].push(a);else{var u,l;if(void 0!==n)for(var i=document.getElementsByTagName("script"),c=0;c<i.length;c++){var d=i[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+n){u=d;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.setAttribute("data-webpack",t+n),u.src=o),e[o]=[a];var m=function(t,s){u.onerror=u.onload=null,clearTimeout(f);var a=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((function(e){return e(s)})),t)return t(s)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=m.bind(null,u.onerror),u.onload=m.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var e={143:0};s.f.j=function(t,o){var a=s.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var n=new Promise((function(s,o){a=e[t]=[s,o]}));o.push(a[2]=n);var r=s.p+s.u(t),u=new Error,l=function(o){if(s.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var n=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,a[1](u)}};s.l(r,l,"chunk-"+t,t)}},s.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,n,r=o[0],u=o[1],l=o[2],i=0;if(r.some((function(t){return 0!==e[t]}))){for(a in u)s.o(u,a)&&(s.m[a]=u[a]);if(l)var c=l(s)}for(t&&t(o);i<r.length;i++)n=r[i],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(c)},o=self["webpackChunkvue_messages"]=self["webpackChunkvue_messages"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(3595)}));o=s.O(o)})();
//# sourceMappingURL=app.017bd0df.js.map