(function(){var e={36:function(e,t,n){"use strict";var a=n(751),o=n(564),r=n(641),l=n(278),u={__name:"App",setup(e){const t=(0,l.Pj)(),n=(0,r.EW)((()=>t.getters.getSocket));return t.dispatch("connectToWebSocket"),(0,r.wB)(n,(e=>{null==e&&t.dispatch("connectToWebSocket")})),(e,t)=>{const n=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.Wv)(n)}}};const s=u;var c=s,i=n.p+"img/Tanque do Povo (1).9cb7278f.png";const p={class:"container"};function v(e,t){const n=(0,r.g2)("RouterLink");return(0,r.uX)(),(0,r.CE)(r.FK,null,[t[3]||(t[3]=(0,r.Lk)("div",{class:"container1"},[(0,r.Lk)("img",{class:"logo",src:i,alt:"Tanque do Pobo"})],-1)),(0,r.Lk)("div",p,[(0,r.bF)(n,{to:"/"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)("Diário")]))),_:1}),(0,r.bF)(n,{to:"/year",class:"item"},{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.eW)(" Explorar ")]))),_:1}),(0,r.bF)(n,{to:"/previsions"},{default:(0,r.k6)((()=>t[2]||(t[2]=[(0,r.eW)("Futuro")]))),_:1})])],64)}var d=n(262);const g={},m=(0,d.A)(g,[["render",v],["__scopeId","data-v-456c7658"]]);var h=m,f={__name:"PrevisionView",setup(e){return(e,t)=>((0,r.uX)(),(0,r.CE)("div",null,[(0,r.bF)(h),t[0]||(t[0]=(0,r.Lk)("br",null,null,-1)),t[1]||(t[1]=(0,r.Lk)("div",null,"Future Update",-1))]))}};const b=f;var _=b,k={__name:"YearView",setup(e){return(e,t)=>((0,r.uX)(),(0,r.CE)("div",null,[(0,r.bF)(h),t[0]||(t[0]=(0,r.Lk)("br",null,null,-1)),t[1]||(t[1]=(0,r.Lk)("div",null,"Future Update",-1))]))}};const y=k;var W=y,w=n(33);const E={class:"flex"},S={class:"container"},L={class:"container"};var C={__name:"ActiveCount",setup(e){const t=(0,l.Pj)(),n=(0,r.EW)((()=>-1==t.getters.getCount?"--":null==t.getters.getCount?"-":t.getters.getCount));let a=0;const o=(0,r.EW)((()=>{const e=t.getters.getDaily;return null==e?"--":(e.forEach((e=>{a+=parseInt(e.count)})),(a/e.length).toFixed(2))})),u=new Date,s=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],c=`${u.getDate()} de ${s[u.getMonth()]}`,i=(0,r.EW)((()=>{const e=t.getters.getDaily;if(null==e)return"--";const n=e.filter((e=>e.count>0)).length;return(n/10*100).toFixed(0)+"%"})),p=(0,r.EW)((()=>"green"===t.getters.getBg?(v(),"bg-green"):"red"===t.getters.getBg?(v(),"bg-red"):null));function v(){setTimeout((()=>{t.commit("setBg","bg")}),600)}return(e,t)=>((0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",{class:"container1"},[(0,r.Lk)("h2",null,(0,w.v_)(c))]),(0,r.Lk)("div",E,[(0,r.Lk)("div",{class:(0,w.C4)(["container",[p.value]])},[(0,r.Lk)("h3",null,[(0,r.eW)((0,w.v_)(n.value)+" ",1),t[0]||(t[0]=(0,r.Lk)("br",null,null,-1)),t[1]||(t[1]=(0,r.eW)(" Ativos "))]),t[2]||(t[2]=(0,r.Lk)("div",{class:"line"},null,-1))],2),(0,r.Lk)("div",S,[(0,r.Lk)("h3",null,[(0,r.eW)((0,w.v_)("NaN"==i.value?"--":i.value)+" ",1),t[3]||(t[3]=(0,r.Lk)("br",null,null,-1)),t[4]||(t[4]=(0,r.eW)(" Ocupação "))]),t[5]||(t[5]=(0,r.Lk)("div",{class:"line"},null,-1))]),(0,r.Lk)("div",L,[(0,r.Lk)("h3",null,[(0,r.eW)((0,w.v_)("NaN"==o.value?"--":o.value)+" ",1),t[6]||(t[6]=(0,r.Lk)("br",null,null,-1)),t[7]||(t[7]=(0,r.eW)(" Média "))]),t[8]||(t[8]=(0,r.Lk)("div",{class:"line"},null,-1))])])],64))}};const x=(0,d.A)(C,[["__scopeId","data-v-6b1ee66f"]]);var O=x,F=n(953);const T={class:"warning"};var j={__name:"WarningPop",props:["nome"],setup(e){const t=e;return(e,n)=>((0,r.uX)(),(0,r.CE)("div",null,[(0,r.Lk)("div",T,(0,w.v_)(t.nome)+" indisponível! ",1)]))}};const P=(0,d.A)(j,[["__scopeId","data-v-76efdd9e"]]);var D=P;const A={key:0,class:"container"};var I={__name:"CountChart",setup(e){const t=(0,l.Pj)(),n=(0,r.EW)((()=>t.getters.getDaily)),a=(0,r.EW)((()=>{const e=[];return n.value.forEach((t=>{e.push(t.hour)})),e})),o=(0,r.EW)((()=>{const e=[];return n.value.forEach((t=>{e.push(t.count)})),e})),u=(0,F.KR)({chart:{toolbar:{show:!1}},title:{text:"Contagem",align:"center",style:{fontSize:"18px",fontWeight:"bold"}},xaxis:{categories:a}}),s=(0,F.KR)([{name:"count",data:o}]);return(e,t)=>{const a=(0,r.g2)("apexchart");return null!=n.value&&n.value.length>1?((0,r.uX)(),(0,r.CE)("div",A,[(0,r.bF)(a,{width:"100%",height:"350",type:"bar",options:u.value,series:s.value},null,8,["options","series"])])):((0,r.uX)(),(0,r.Wv)(D,{key:1,nome:"Contagem"}))}}};const $=(0,d.A)(I,[["__scopeId","data-v-65c7e4a6"]]);var M=$,X={__name:"MultiChart",setup(e){const t=(0,l.Pj)(),n=(0,r.EW)((()=>t.getters.getWeather)),o=(0,F.KR)("Temperatura"),u=(0,r.EW)((()=>{const e=n.value.daily.time,t=Object.values(e),a=[];return t.forEach((e=>{const[,t,n]=e.split("-");a.push(`${n}-${t}`)})),a})),s=(0,F.KR)({chart:{toolbar:{show:!1},zoom:{enabled:!1}},title:{text:`${o.value}`,align:"center",style:{fontSize:"18px",fontWeight:"bold"}},xaxis:{categories:u}}),c=(0,r.EW)((()=>{if("Temperatura"===o.value){const e=n.value.daily.temperature_2m_max;return Object.values(e)}if("Precipitação"===o.value){const e=n.value.daily.precipitation_probability_max;return Object.values(e)}if("Chuva/Vento"===o.value){const e=n.value.daily.wind_speed_10m_max;return Object.values(e)}return[]})),i=(0,r.EW)((()=>{if("Temperatura"===o.value){const e=n.value.daily.temperature_2m_min;return Object.values(e)}if("Precipitação"===o.value){const e=n.value.daily.precipitation_hours;return Object.values(e)}if("Chuva/Vento"===o.value){const e=n.value.daily.rain_sum;return Object.values(e)}if("Evaporação"===o.value){const e=n.value.daily.et0_fao_evapotranspiration;return Object.values(e)}return null})),p=(0,r.EW)((()=>"Temperatura"===o.value?(d(),"Temperatura_Max(°C)"):"Precipitação"===o.value?(d(),"Precipitação_Horas"):"Chuva/Vento"===o.value?(d(),"Chuva_Sum(mm)"):"Evaporação"===o.value?(d(),"Evapotranspiração(mm)"):null)),v=(0,r.EW)((()=>"Temperatura"===o.value?"Temperatura_Min(°C)":"Precipitação"===o.value?"Precipitação_Prob_Máx(%)":"Chuva/Vento"===o.value?"Velocidade_Vento_Max(KM/H)":""));function d(){"Temperatura"===o.value||"Precipitação"===o.value||"Chuva/Vento"===o.value?g.value=[{name:p,data:c},{name:v,data:i}]:g.value=[{name:p,data:i}]}const g=(0,F.KR)([{name:p,data:c},{name:v,data:i}]);function m(){const e=document.getElementById("multiChart");return e?e.offsetHeight+"px":null}let h=(0,F.KR)(null);return setTimeout((()=>{h=m()}),100),(e,t)=>{const l=(0,r.g2)("apexchart");return(0,r.uX)(),(0,r.CE)("div",null,[null!=n.value&&null!=g.value?((0,r.uX)(),(0,r.CE)("div",{key:0,id:"multiChart",style:(0,w.Tr)({height:(0,F.R1)(h)})},[(0,r.bF)(l,{width:"100%",height:"350",type:"line",options:s.value,series:g.value},null,8,["options","series"])],4)):((0,r.uX)(),(0,r.Wv)(D,{key:1,nome:o.value},null,8,["nome"])),(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e),class:"options"},t[1]||(t[1]=[(0,r.Lk)("option",null,"Temperatura",-1),(0,r.Lk)("option",null,"Precipitação",-1),(0,r.Lk)("option",null,"Chuva/Vento",-1),(0,r.Lk)("option",null,"Evaporação",-1)]),512),[[a.u1,o.value]])])}}};const R=(0,d.A)(X,[["__scopeId","data-v-735ca276"]]);var V=R;const B={key:0,class:"flex"},K={class:"container"},H={class:"container"};var N={__name:"StatesSpec",setup(e){const t=(0,l.Pj)(),n=(0,r.EW)((()=>t.getters.getWeather.current.apparent_temperature)),a=(0,r.EW)((()=>t.getters.getWeather.current.relative_humidity_2m));return(e,o)=>((0,r.uX)(),(0,r.CE)("div",null,[null!=(0,F.R1)(t).getters.getWeather?((0,r.uX)(),(0,r.CE)("div",B,[(0,r.Lk)("div",K,[(0,r.Lk)("h3",null,[(0,r.eW)((0,w.v_)(n.value)+"°C ",1),o[0]||(o[0]=(0,r.Lk)("br",null,null,-1)),o[1]||(o[1]=(0,r.eW)(" Temperatura "))]),o[2]||(o[2]=(0,r.Lk)("div",{class:"line"},null,-1))]),(0,r.Lk)("div",H,[(0,r.Lk)("h3",null,[(0,r.eW)((0,w.v_)(a.value)+"% ",1),o[3]||(o[3]=(0,r.Lk)("br",null,null,-1)),o[4]||(o[4]=(0,r.eW)(" Humidade "))]),o[5]||(o[5]=(0,r.Lk)("div",{class:"line"},null,-1))])])):(0,r.Q3)("",!0)]))}};const U=(0,d.A)(N,[["__scopeId","data-v-4cf21240"]]);var z=U,J={__name:"DayView",setup(e){const t=(0,l.Pj)(),n=new Date,a=new Date(n);a.setDate(n.getDate()-5);const o=n.toISOString().split("T")[0],u=a.toISOString().split("T")[0],[,s,c]=o.split("-"),i=(0,r.EW)((()=>t.getters.getDaily));null==i.value&&localStorage.getItem("csv")-Date.now()<36e5&&t.dispatch("fetch",`daily?day=${c}&month=${s}`);const p=(0,r.EW)((()=>t.getters.getWeather));return null==p.value&&localStorage.getItem("weather")-Date.now()<36e5&&t.dispatch("weather",[`${u}`,`${o}`]),(e,t)=>((0,r.uX)(),(0,r.CE)("div",null,[(0,r.bF)(h),(0,r.bF)(O),(0,r.bF)(z),(0,r.bF)(M),(0,r.bF)(V)]))}};const q=(0,d.A)(J,[["__scopeId","data-v-0d38cea0"]]);var Y=q,Q=n(220);const G=[{path:"/",name:"day",component:Y},{path:"/year",name:"year",component:W},{path:"/previsions",name:"previsions",component:_}],Z=(0,Q.aE)({history:(0,Q.LA)("/Labadeiras/"),routes:G});var ee=Z,te=n(396),ne=n.n(te),ae=(0,l.y$)({state:{count:-1,socket:null,yearly:null,daily:null,weather:null,bg:null},getters:{getCount(e){return e.count},getYearly(e){return e.yearly},getDaily(e){return e.daily},getWeather(e){return e.weather},getBg(e){return e.bg},getSocket(e){return e.socket}},mutations:{setCount(e,t){e.count=t},setSocket(e,t){e.socket=t},setyearly(e,t){e.yearly=t},setdaily(e,t){e.daily=t},setWeather(e,t){e.weather=t},setBg(e,t){e.bg=t}},actions:{async fetchWebSocketURL(){try{const e=await fetch("https://ghoul-optimal-bird.ngrok-free.app/websocket-url?token=2024",{headers:{"ngrok-skip-browser-warning":"true"}});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return await e.text()}catch(e){console.error("Error fetching WebSocket URL:",e)}},async connectToWebSocket({commit:e,state:t,dispatch:n}){const a=await n("fetchWebSocketURL");if(console.log(a),!a)throw new Error("WebSocket URL is undefined or empty");if(t.socket)console.log("WebSocket já está conectado.");else try{const n=new WebSocket(a);n.onopen=()=>{console.log("Conexão WebSocket estabelecida!")},n.onmessage=n=>{try{const a=JSON.parse(n.data);void 0!==a.person_count?(console.log("Atualização de person_count recebida:",a.person_count),t.count<=a.person_count?e("setBg","green"):t.count>a.person_count&&e("setBg","red"),e("setCount",a.person_count)):console.warn("Mensagem WebSocket recebida não contém person_count:",a)}catch(a){console.error("Erro ao processar mensagem WebSocket:",a)}},n.onclose=()=>{console.log("Conexão WebSocket encerrada."),e("setSocket",null)},n.onerror=e=>{console.error("Erro no WebSocket:",e)},e("setSocket",n)}catch(o){console.error("Erro ao conectar ao WebSocket:",o)}},disconnectWebSocket({commit:e,state:t}){t.socket?(t.socket.close(),e("setSocket",null),console.log("Conexão WebSocket encerrada manualmente.")):console.log("Nenhuma conexão WebSocket ativa para encerrar.")},async fetch({commit:e},t){const n=new Date,a=n.getFullYear().toString()+(n.getMonth()+1).toString().padStart(2,"0")+n.getDate().toString().padStart(2,"0"),o="labadeiras"+a;try{const n=await fetch("https://ghoul-optimal-bird.ngrok-free.app/"+t,{headers:{"ngrok-skip-browser-warning":"true"}}),a=await n.json(),r=new Promise(((e,t)=>{(async()=>{try{if(!o||!a||!a.data)return t(console.error("Missing required fields in the data."));const[r,l]=a.data.split(":");if(!r||!l)return t(new Error("Invalid base64 string format"));let u,s;try{u=ne().enc.Base64.parse(r),s=ne().enc.Base64.parse(l)}catch(n){return t(new Error("Failed to decode base64: "+n.message))}const c=ne().SHA256(o).toString(ne().enc.Hex),i=ne().AES.decrypt({ciphertext:s},ne().enc.Hex.parse(c),{iv:u}),p=JSON.parse(i.toString(ne().enc.Utf8));e(p)}catch(r){t(r)}})()}));r.then((n=>{let a=t.replace("?",",").split(",");e(`set${a[0]}`,n),localStorage.setItem("csv",Date.now()),console.log(`${a[0]}:`,n)}))}catch(r){console.error("Error fetching data:",r)}},async weather({commit:e},t){const n=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=41.625&longitude=-8.4375&elevation=35.4&current=relative_humidity_2m,apparent_temperature&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,showers_sum,wind_speed_10m_max,precipitation_hours,precipitation_probability_max,sunrise,sunset,et0_fao_evapotranspiration&timezone=Europe%2FLondon&start_date=${t[0]}&end_date=${t[1]}`),a=await n.json();a&&(e("setWeather",a),localStorage.setItem("weather",Date.now()))}},modules:{}});(0,a.Ef)(c).use(ae).use(ee).use(o.A).mount("#app")},477:function(){}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var l=1/0;for(i=0;i<e.length;i++){a=e[i][0],o=e[i][1],r=e[i][2];for(var u=!0,s=0;s<a.length;s++)(!1&r||l>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(u=!1,r<l&&(l=r));if(u){e.splice(i--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[a,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/Labadeiras/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,l=a[0],u=a[1],s=a[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var i=s(n)}for(t&&t(a);c<l.length;c++)r=l[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(i)},a=self["webpackChunkdetection"]=self["webpackChunkdetection"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(36)}));a=n.O(a)})();
//# sourceMappingURL=app.a4fc8f7c.js.map