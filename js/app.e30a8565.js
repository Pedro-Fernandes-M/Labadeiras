(function(){var e={586:function(e,t,n){"use strict";var a=n(751),r=n(564),o=n(641),u={__name:"App",setup(e){return document.addEventListener("contextmenu",(e=>e.preventDefault())),document.addEventListener("keydown",(e=>{("F12"===e.key||e.ctrlKey&&e.shiftKey&&"I"===e.key||e.ctrlKey&&"J"===e.key||e.ctrlKey&&"U"===e.key)&&e.preventDefault()})),(e,t)=>{const n=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(n)}}};const l=u;var i=l,s=n.p+"img/Tanque do Pobo (1).298f2f92.png";const c={class:"container"};function d(e,t){const n=(0,o.g2)("RouterLink");return(0,o.uX)(),(0,o.CE)(o.FK,null,[t[3]||(t[3]=(0,o.Lk)("div",{class:"container1"},[(0,o.Lk)("img",{class:"logo",src:s,alt:"Tanque do Pobo"})],-1)),(0,o.Lk)("div",c,[(0,o.bF)(n,{to:"/day"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Diário")]))),_:1}),(0,o.bF)(n,{to:"/year",class:"item"},{default:(0,o.k6)((()=>t[1]||(t[1]=[(0,o.eW)(" Explorar ")]))),_:1}),(0,o.bF)(n,{to:"/previsions"},{default:(0,o.k6)((()=>t[2]||(t[2]=[(0,o.eW)("Futuro")]))),_:1})])],64)}var v=n(262);const p={},h=(0,v.A)(p,[["render",d],["__scopeId","data-v-59e97bb8"]]);var m=h,g={__name:"PrevisionView",setup(e){return(e,t)=>((0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(m),t[0]||(t[0]=(0,o.Lk)("br",null,null,-1)),t[1]||(t[1]=(0,o.Lk)("div",null,"Future Update",-1))]))}};const f=g;var k=f,y={__name:"YearView",setup(e){return(e,t)=>((0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(m),t[0]||(t[0]=(0,o.Lk)("br",null,null,-1)),t[1]||(t[1]=(0,o.Lk)("div",null,"Future Update",-1))]))}};const b=y;var w=b,A=n(33),W=n(278);const L={class:"flex"},E={class:"container"},_={class:"container"};var C={__name:"ActiveCount",setup(e){const t=(0,W.Pj)(),n=(0,o.EW)((()=>-1==t.getters.getCount?"--":null==t.getters.getCount?"-":t.getters.getCount));let a=0;const r=(0,o.EW)((()=>{const e=t.getters.getDaily;return null==e?"--":(e.forEach((e=>{a+=parseInt(e.count)})),(a/e.length).toFixed(2))})),u=new Date,l=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],i=`${u.getDate()} de ${l[u.getMonth()]}`,s=(0,o.EW)((()=>{const e=t.getters.getDaily;if(null==e)return"--";const n=e.filter((e=>e.count>0)).length;return(n/e.length*100).toFixed(0)+"%"})),c=(0,o.EW)((()=>"green"===t.getters.getBg?(d(),"bg-green"):"red"===t.getters.getBg?(d(),"bg-red"):null));function d(){setTimeout((()=>{t.commit("setBg","bg")}),600)}return(e,t)=>((0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",{class:"container1"},[(0,o.Lk)("h2",null,(0,A.v_)(i))]),(0,o.Lk)("div",L,[(0,o.Lk)("div",{class:(0,A.C4)(["container",[c.value]])},[(0,o.Lk)("h3",null,[(0,o.eW)((0,A.v_)(n.value)+" ",1),t[0]||(t[0]=(0,o.Lk)("br",null,null,-1)),t[1]||(t[1]=(0,o.eW)(" Ativos "))]),t[2]||(t[2]=(0,o.Lk)("div",{class:"line"},null,-1))],2),(0,o.Lk)("div",E,[(0,o.Lk)("h3",null,[(0,o.eW)((0,A.v_)("NaN"==isNaN(s.value)?"--":s.value)+" ",1),t[3]||(t[3]=(0,o.Lk)("br",null,null,-1)),t[4]||(t[4]=(0,o.eW)(" Ocupação "))]),t[5]||(t[5]=(0,o.Lk)("div",{class:"line"},null,-1))]),(0,o.Lk)("div",_,[(0,o.Lk)("h3",null,[(0,o.eW)((0,A.v_)(isNaN(r.value)?"--":r.value)+" ",1),t[6]||(t[6]=(0,o.Lk)("br",null,null,-1)),t[7]||(t[7]=(0,o.eW)(" Média "))]),t[8]||(t[8]=(0,o.Lk)("div",{class:"line"},null,-1))])])],64))}};const S=(0,v.A)(C,[["__scopeId","data-v-06ed90a2"]]);var O=S,D=n(953);const P={class:"warning"};var x={__name:"WarningPop",props:["nome"],setup(e){const t=e;return(e,n)=>((0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("div",P,(0,A.v_)(t.nome)+" indisponível! ",1)]))}};const F=(0,v.A)(x,[["__scopeId","data-v-76efdd9e"]]);var T=F;const R={key:0,class:"container"};var I={__name:"CountChart",setup(e){const t=(0,W.Pj)(),n=(0,o.EW)((()=>t.getters.getDaily)),a=(0,o.EW)((()=>{const e=[];return n.value.forEach((t=>{e.push(t.hour)})),e})),r=(0,o.EW)((()=>{const e=[];return n.value.forEach((t=>{e.push(t.count)})),e})),u=(0,D.KR)({chart:{toolbar:{show:!1}},xaxis:{categories:a}}),l=(0,D.KR)([{name:"count",data:r}]);return(e,t)=>{const a=(0,o.g2)("apexchart");return null!=n.value&&n.value.length>1?((0,o.uX)(),(0,o.CE)("div",R,[t[0]||(t[0]=(0,o.Lk)("h3",{class:"margin"}," Contagem ",-1)),(0,o.bF)(a,{width:"100%",height:"350",type:"bar",options:u.value,series:l.value},null,8,["options","series"])])):((0,o.uX)(),(0,o.Wv)(T,{key:1,nome:"Contagem"}))}}};const q=(0,v.A)(I,[["__scopeId","data-v-185469f0"]]);var X=q;const j={class:"margin"};var B={__name:"MultiChart",setup(e){const t=(0,W.Pj)(),n=(0,o.EW)((()=>t.getters.getWeather)),r=(0,D.KR)("Temperatura"),u=(0,o.EW)((()=>{const e=n.value.daily.time,t=Object.values(e),a=[];return t.forEach((e=>{const[,t,n]=e.split("-");a.push(`${n}-${t}`)})),a})),l=(0,o.EW)((()=>{if("Temperatura"===r.value){const e=n.value.daily.temperature_2m_max;return Object.values(e)}if("Precipitação"===r.value){const e=n.value.daily.precipitation_probability_max;return Object.values(e)}if("Chuva/Vento"===r.value){const e=n.value.daily.wind_speed_10m_max;return Object.values(e)}return[]})),i=(0,o.EW)((()=>{if("Temperatura"===r.value){const e=n.value.daily.temperature_2m_min;return Object.values(e)}if("Precipitação"===r.value){const e=n.value.daily.precipitation_hours;return Object.values(e)}if("Chuva/Vento"===r.value){const e=n.value.daily.rain_sum;return Object.values(e)}if("Evaporação"===r.value){const e=n.value.daily.et0_fao_evapotranspiration;return Object.values(e)}return null})),s=(0,o.EW)((()=>"Temperatura"===r.value?(d(),"Temperatura_Max(°C)"):"Precipitação"===r.value?(d(),"Precipitação_Prob_Máx(%)"):"Chuva/Vento"===r.value?(d(),"Velocidade_Vento_Max(Km/H)"):"Evaporação"===r.value?(d(),"Evapotranspiração(mm)"):null)),c=(0,o.EW)((()=>"Temperatura"===r.value?"Temperatura_Min(°C)":"Precipitação"===r.value?"Precipitação_Horas":"Chuva/Vento"===r.value?"Chuva_Sum(mm)":""));function d(){"Temperatura"===r.value||"Precipitação"===r.value||"Chuva/Vento"===r.value?v.value=[{name:s,data:l},{name:c,data:i}]:v.value=[{name:s,data:i}]}const v=(0,D.KR)([{name:c,data:l},{name:s,data:i}]);function p(){const e=document.getElementById("multiChart");return e?e.offsetHeight+"px":null}let h=(0,D.KR)(null);setTimeout((()=>{h=p()}),100);const m=(0,D.KR)({chart:{toolbar:{show:!1},zoom:{enabled:!1}},xaxis:{categories:u}});return(e,t)=>{const u=(0,o.g2)("apexchart");return(0,o.uX)(),(0,o.CE)("div",null,[null!=n.value&&null!=v.value?((0,o.uX)(),(0,o.CE)("div",{key:0,id:"multiChart",style:(0,A.Tr)({height:(0,D.R1)(h)})},[(0,o.Lk)("h3",j,(0,A.v_)(r.value),1),(0,o.bF)(u,{width:"100%",height:"350",type:"line",options:m.value,series:v.value},null,8,["options","series"])],4)):((0,o.uX)(),(0,o.Wv)(T,{key:1,nome:r.value},null,8,["nome"])),(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),class:"options",id:"options"},t[1]||(t[1]=[(0,o.Lk)("option",null,"Temperatura",-1),(0,o.Lk)("option",null,"Precipitação",-1),(0,o.Lk)("option",null,"Chuva/Vento",-1),(0,o.Lk)("option",null,"Evaporação",-1)]),512),[[a.u1,r.value]])])}}};const H=(0,v.A)(B,[["__scopeId","data-v-77403ca1"]]);var M=H;const K={key:0,class:"flex"},G={class:"container"},Q={class:"container"};var V={__name:"StatesSpec",setup(e){const t=(0,W.Pj)(),n=(0,o.EW)((()=>t.getters.getWeather.current.apparent_temperature)),a=(0,o.EW)((()=>t.getters.getWeather.current.relative_humidity_2m));return(e,r)=>((0,o.uX)(),(0,o.CE)("div",null,[null!=(0,D.R1)(t).getters.getWeather?((0,o.uX)(),(0,o.CE)("div",K,[(0,o.Lk)("div",G,[(0,o.Lk)("h3",null,[(0,o.eW)((0,A.v_)(n.value)+"°C ",1),r[0]||(r[0]=(0,o.Lk)("br",null,null,-1)),r[1]||(r[1]=(0,o.eW)(" Temperatura "))]),r[2]||(r[2]=(0,o.Lk)("div",{class:"line"},null,-1))]),(0,o.Lk)("div",Q,[(0,o.Lk)("h3",null,[(0,o.eW)((0,A.v_)(a.value)+"% ",1),r[3]||(r[3]=(0,o.Lk)("br",null,null,-1)),r[4]||(r[4]=(0,o.eW)(" Humidade "))]),r[5]||(r[5]=(0,o.Lk)("div",{class:"line"},null,-1))])])):(0,o.Q3)("",!0)]))}};const z=(0,v.A)(V,[["__scopeId","data-v-4cf21240"]]);var U=z,N={__name:"DayView",setup(e){const t=(0,W.Pj)(),n=new Date,a=new Date(n);a.setDate(n.getDate()-5);const r=n.toISOString().split("T")[0],u=a.toISOString().split("T")[0],[,l,i]=r.split("-"),s=(0,o.EW)((()=>t.getters.getDaily));null===s.value&&localStorage.getItem("csv")-Date.now()<36e5&&!0===t.getters.getAuth&&t.dispatch("fetch",`daily?day=${i}&month=${l}`);const c=(0,o.EW)((()=>t.getters.getWeather));null===c.value&&localStorage.getItem("weather")-Date.now()<36e5&&!0===t.getters.getAuth&&t.dispatch("weather",[`${u}`,`${r}`]);const d=(0,o.EW)((()=>t.getters.getSocket));return(0,o.wB)(d,(e=>{null===e&&!0===t.getters.getAuth&&t.dispatch("connectToWebSocket")})),(e,t)=>((0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(m),(0,o.bF)(O),(0,o.bF)(U),(0,o.bF)(X),(0,o.bF)(M)]))}};const J=(0,v.A)(N,[["__scopeId","data-v-492cbbe9"]]);var Y=J,Z="data:image/png;base64,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",$=n(661),ee=n(220);const te={class:"center"},ne={key:0},ae={key:1},re={key:2};var oe={__name:"AutoLogin",setup(e){const t=(0,ee.rd)(),n=(0,W.Pj)();let a=null;async function r(){try{const e=await $.Ay.load(),t=await e.get();a=t.visitorId}catch(e){console.error("FingerprintJS Error:",e)}if(null!=a){const e=await fetch("https://frequently-direct-flea.ngrok-free.app/auth?auth="+a,{headers:{"ngrok-skip-browser-warning":"true"}}),r=await e.json();n.commit("setAuth",r.auth),!0===r.auth&&(n.dispatch("connectToWebSocket"),t.replace("/day"),setTimeout((()=>{n.commit("setAuth",null),t.replace("/")}),18e5))}}r();const u=(0,o.EW)((()=>n.getters.getAuth));return(e,t)=>((0,o.uX)(),(0,o.CE)("div",te,[null===u.value?((0,o.uX)(),(0,o.CE)("div",ne,t[0]||(t[0]=[(0,o.Lk)("h2",null,"Login in",-1)]))):(0,o.Q3)("",!0),null===u.value?((0,o.uX)(),(0,o.CE)("div",ae,t[1]||(t[1]=[(0,o.Lk)("div",{class:"spinner-container"},[(0,o.Lk)("div",{class:"spinner"})],-1)]))):(0,o.Q3)("",!0),!1===u.value?((0,o.uX)(),(0,o.CE)("div",re,t[2]||(t[2]=[(0,o.Lk)("img",{src:Z,alt:"cross"},null,-1)]))):(0,o.Q3)("",!0)]))}};const ue=(0,v.A)(oe,[["__scopeId","data-v-bcd51726"]]);var le=ue,ie=n(396),se=n.n(ie),ce=(0,W.y$)({state:{auth:null,count:-1,socket:null,yearly:null,daily:null,weather:null,bg:null},getters:{getAuth(e){return e.auth},getCount(e){return e.count},getYearly(e){return e.yearly},getDaily(e){return e.daily},getWeather(e){return e.weather},getBg(e){return e.bg},getSocket(e){return e.socket}},mutations:{setAuth(e,t){e.auth=t},setCount(e,t){e.count=t},setSocket(e,t){e.socket=t},setyearly(e,t){e.yearly=t},setdaily(e,t){e.daily=t},setWeather(e,t){e.weather=t},setBg(e,t){e.bg=t}},actions:{async fetchWebSocketURL(){try{const e=await fetch("https://frequently-direct-flea.ngrok-free.app/websocket-url?token=2024",{headers:{"ngrok-skip-browser-warning":"true"}});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.text()}catch(e){console.error("Error fetching WebSocket URL:",e)}},async connectToWebSocket({commit:e,state:t,dispatch:n}){const a=await n("fetchWebSocketURL");if(!a)throw new Error("WebSocket URL is undefined or empty");if(t.socket)console.log("WebSocket já está conectado.");else try{const n=new WebSocket(a);n.onopen=()=>{console.log("Conexão WebSocket estabelecida!")},n.onmessage=n=>{try{const a=JSON.parse(n.data);console.log("data:"+a),void 0!==a.count?(t.count<=a.count?e("setBg","green"):t.count>a.count&&e("setBg","red"),e("setCount",a.count)):console.warn("Mensagem WebSocket recebida não contém count:",a)}catch(a){console.error("Erro ao processar mensagem WebSocket:",a)}},n.onclose=()=>{console.log("Conexão WebSocket encerrada."),e("setSocket",null)},n.onerror=e=>{console.error("Erro no WebSocket:",e)},e("setSocket",n)}catch(r){console.error("Erro ao conectar ao WebSocket:",r)}},disconnectWebSocket({commit:e,state:t}){t.socket?(t.socket.close(),e("setSocket",null),console.log("Conexão WebSocket encerrada manualmente.")):console.log("Nenhuma conexão WebSocket ativa para encerrar.")},async fetch({commit:e},t){const n=new Date,a=n.getFullYear().toString()+(n.getMonth()+1).toString().padStart(2,"0")+n.getDate().toString().padStart(2,"0"),r="labadeiras"+a;try{const n=await fetch("https://frequently-direct-flea.ngrok-free.app/"+t,{headers:{"ngrok-skip-browser-warning":"true"}}),a=await n.json(),o=new Promise(((e,t)=>{(async()=>{try{if(!r||!a||!a.data)return t(console.error("Missing required fields in the data."));const[o,u]=a.data.split(":");if(!o||!u)return t(new Error("Invalid base64 string format"));let l,i;try{l=se().enc.Base64.parse(o),i=se().enc.Base64.parse(u)}catch(n){return t(new Error("Failed to decode base64: "+n.message))}const s=se().SHA256(r).toString(se().enc.Hex),c=se().AES.decrypt({ciphertext:i},se().enc.Hex.parse(s),{iv:l}),d=JSON.parse(c.toString(se().enc.Utf8));e(d)}catch(o){t(o)}})()}));o.then((n=>{let r=t.replace("?",",").split(",");e(`set${r[0]}`,n),"daily"===r[0]&&localStorage.setItem("csv",a.stamp)}))}catch(o){console.error("Error fetching data:",o)}},async weather({commit:e},t){const n=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=41.625&longitude=-8.4375&elevation=35.4&current=relative_humidity_2m,apparent_temperature&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,showers_sum,wind_speed_10m_max,precipitation_hours,precipitation_probability_max,sunrise,sunset,et0_fao_evapotranspiration&timezone=Europe%2FLondon&start_date=${t[0]}&end_date=${t[1]}`),a=await n.json();a&&(e("setWeather",a),localStorage.setItem("weather",Date.now()))}},modules:{}});const de=[{path:"/",name:"login",component:le},{path:"/day",name:"day",component:Y,meta:{requiresAuth:!0}},{path:"/year",name:"year",component:w,meta:{requiresAuth:!0}},{path:"/previsions",name:"previsions",component:k,meta:{requiresAuth:!0}}],ve=(0,ee.aE)({history:(0,ee.LA)("/Labadeiras/"),routes:de});ve.beforeEach(((e,t,n)=>{const a=ce.state.auth;e.matched.some((e=>e.meta.requiresAuth))?a?n():n({name:"login"}):n()}));var pe=ve;const he=(0,a.Ef)(i);he.use(ce),he.use(pe),he.use(r.A),he.config.devtools=!1,he.mount("#app")},477:function(){}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var u=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],o=e[c][2];for(var l=!0,i=0;i<a.length;i++)(!1&o||u>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[i])}))?a.splice(i--,1):(l=!1,o<u&&(u=o));if(l){e.splice(c--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/Labadeiras/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,u=a[0],l=a[1],i=a[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(i)var c=i(n)}for(t&&t(a);s<u.length;s++)o=u[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},a=self["webpackChunkdetection"]=self["webpackChunkdetection"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(586)}));a=n.O(a)})();