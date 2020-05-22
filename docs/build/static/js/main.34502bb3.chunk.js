(this["webpackJsonpmedical-app"]=this["webpackJsonpmedical-app"]||[]).push([[0],{30:function(e,t,a){e.exports=a(56)},35:function(e,t,a){},36:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),i=a.n(l),c=(a(35),a(21),a(10)),o=a(1),s=(a(36),a(8));var u=function(){return r.a.createElement("header",{className:"App__header"},r.a.createElement("h1",{className:"App__header--title"},"Test App eB2"),r.a.createElement("nav",{className:"App__header--nav-ul"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.b,{className:"App__header--link",to:"/"},"Home")))))};var m=function(e){return r.a.createElement("div",{className:"App__box2"},r.a.createElement("div",{className:"App__box2--image"},r.a.createElement("img",{alt:"foto de perfil",className:"img",src:e.info.picture.medium})),r.a.createElement("div",{className:"App__box2--text"},r.a.createElement("h4",null,e.info.name.first," ",e.info.name.last),r.a.createElement("p",null,e.info.location.city),r.a.createElement("p",null,e.info.dob.age),r.a.createElement(s.b,{to:"/PersonDetail/"+e.info.login.uuid},"M\xe1s info")))};var d=function(e){var t=e.list.filter((function(t){return 0===e.citySelected.length||e.citySelected.includes(t.location.city)})).filter((function(t){return 0===e.sexSelected.length||e.sexSelected.includes(t.gender)})).map((function(e,t){return r.a.createElement(m,{info:e,key:t})}));return r.a.createElement("div",{className:"App__list"},t)};var p=function(){return r.a.createElement("div",{className:"App__footer"},r.a.createElement("small",{className:"App__footer--text"},"Sara Ju\xe1rez-2020"))},f=a(20),E=a(26),h=a(27),g=a(29),v=a(28),_=a(14),b={width:"50%",height:"50%"},O=function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).displayMarkers=function(){return n.state.stores.map((function(e,t){return r.a.createElement(_.Marker,{key:t,id:t,position:{lat:e.latitude,lng:e.longitude},onClick:function(){return console.log("You clicked me!")}})}))},n.state={stores:[{lat:40.4165,lng:-3.70256}]},n}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement(_.Map,{google:this.props.google,zoom:8,style:b,initialCenter:{lat:40.4165,lng:-3.70256}},this.displayMarkers())}}]),a}(r.a.Component);Object(_.GoogleApiWrapper)({apiKey:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_KEY})(O);var S=function(e){var t=e.list.find((function(t){return t.login.uuid===e.match.params.id}));if(void 0===t){var a=localStorage.getItem("person");t=JSON.parse(a)}else void 0!=t&&localStorage.setItem("person",JSON.stringify(t));function n(e,t){return Math.floor(Math.random()*(t-e))+e}return console.log(t),r.a.createElement("div",{className:"person-detail"},r.a.createElement("div",{className:"person-detail__person-info"},r.a.createElement("div",{className:"person-detail__person-info--image"},r.a.createElement("img",{src:t.picture.medium})),r.a.createElement("div",{className:"person-detail__person-info--text"},r.a.createElement("p",null,t.name.first),r.a.createElement("p",null,t.location.city),r.a.createElement("p",null,t.dob.age))),r.a.createElement("div",{className:"person-detail__graphics"},r.a.createElement("div",null,r.a.createElement(f.a,{width:800,height:500,chartType:"ColumnChart",loader:r.a.createElement("div",null,"Loading Chart"),data:[["D\xeda","Horas de sue\xf1o"],["Lunes",n(1,15)],["Martes",n(1,15)],["Mi\xe9rcoles",n(1,15)],["Jueves",n(1,15)],["Viernes",n(1,15)],["S\xe1bado",n(1,15)],["Domingo",n(1,15)]],options:{title:"Horas de sue\xf1o a la semana",chartArea:{width:"30%"},hAxis:{title:"D\xedas de la semana",minValue:0},vAxis:{title:"Horas de sue\xf1o"}},legendToggle:!0})),r.a.createElement(f.a,{width:800,height:500,chartType:"PieChart",loader:r.a.createElement("div",null,"Loading Chart"),data:[["Lugar","Horas al d\xeda"],["Trabajo",8],["Casa",12],["Iglesia",2],["Tiendas",2]],options:{title:"Lugares frecuentados"},rootProps:{"data-testid":"1"}})))};var N=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)([]),s=Object(c.a)(i,2),m=(s[0],s[1]),f=Object(n.useState)([]),E=Object(c.a)(f,2),h=(E[0],E[1]),g=Object(n.useState)([]),v=Object(c.a)(g,2),_=v[0],b=(v[1],Object(n.useState)([])),O=Object(c.a)(b,2),N=O[0];return O[1],Object(n.useEffect)((function(){fetch("https://randomuser.me/api/?results=5").then((function(e){return e.json()})).then((function(e){l(e.results),m(e.results.map((function(e){return e.location.city}))),h(e.results.map((function(e){return e.gender})))}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement("main",null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",render:function(){return r.a.createElement("div",{className:"List"},r.a.createElement(d,{sexSelected:N,citySelected:_,list:a}))}}),r.a.createElement(o.a,{path:"/PersonDetail/:id",render:function(e){return r.a.createElement(S,{list:a,match:e.match})}})))),r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(s.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.34502bb3.chunk.js.map