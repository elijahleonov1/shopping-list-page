(this["webpackJsonpshopping-list"]=this["webpackJsonpshopping-list"]||[]).push([[0],{111:function(e,t,n){e.exports=n(132)},132:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"default",(function(){return p})),n.d(a,"getTask",(function(){return b}));var r={};n.r(r),n.d(r,"addTask",(function(){return X})),n.d(r,"deleteTask",(function(){return Y}));n(112);var c=n(16),l=n.n(c),i=n(0),u=n.n(i),o=n(26),s=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=n(29),m=n(18),f=n(42),E=n(54),v=[{id:0,name:"\u041f\u0440\u0438\u0432\u044b\u0447\u043a\u0430 \u21161"},{id:2,name:"\u041f\u0440\u0438\u0432\u044b\u0447\u043a\u0430 \u21162"},{id:3,name:"\u041f\u0440\u0438\u0432\u044b\u0447\u043a\u0430 \u21163"},{id:4,name:"\u041f\u0440\u0438\u0432\u044b\u0447\u043a\u0430 \u21164"}];function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"ADD_NEW_TASK":return h(e,t.payload);case"DELETE_TASK":default:return e}}function h(e,t){return e.map((function(e){return e.id===t.id})).lenght?e:[].concat(Object(E.a)(e),[t])}var b=function(e){return e.tasks},k=Object(m.c)({tasks:p}),j=n(17),O=n(5),g=n(28),w=n.n(g),T=n(49),y=n.n(T),A=function(e){var t=e.addTask,n=Object(i.useState)(!1),a=Object(j.a)(n,2),r=a[0],c=a[1],l=function(){return c(!r)};return u.a.createElement(u.a.Fragment,null,u.a.createElement(O.l,{right:u.a.createElement(O.p,{onClick:t},u.a.createElement(O.b,null,u.a.createElement(y.a,null)))},u.a.createElement(O.n,{aside:u.a.createElement(O.b,null,u.a.createElement(w.a,{style:{transform:"rotate(".concat(r?"180deg":"0",")")}})),onClick:l},"\u0422\u0440\u0435\u043a\u0435\u0440 \u043f\u0440\u0438\u0432\u044b\u0447\u0435\u043a")),u.a.createElement(O.o,{opened:r,onClose:l},u.a.createElement(O.g,null,u.a.createElement(O.a,null,"\u041e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438"))))},x=n(19),C=n(20),S=n(34),D=n.n(S),_=n(24),K=n.n(_),R=n(50),W=n.n(R);function M(){var e=Object(x.a)(["\n    width: 50px;\n"]);return M=function(){return e},e}function N(){var e=Object(x.a)(["\n    display: flex;\n    justify-content: flex-end;\n    width: 50%;\n"]);return N=function(){return e},e}function I(){var e=Object(x.a)(["\n    display: flex;\n    width: 50%;\n    max-height: 70px;\n\n    overflow: hidden;\n    white-space: break-spaces;\n    text-overflow: ellipsis;\n"]);return I=function(){return e},e}function B(){var e=Object(x.a)(["\n    display: flex;\n    justify-content: flex-start;\n"]);return B=function(){return e},e}var H=C.a.div(B()),J=C.a.div(I()),L=C.a.div(N()),V=C.a.div(M()),q=function(e){var t=e.itemHabits,n=(void 0===t?[]:t).map((function(e,t){return u.a.createElement(O.a,{key:t,before:u.a.createElement(W.a,null)},u.a.createElement(H,null,u.a.createElement(J,null,e.name),u.a.createElement(L,null,u.a.createElement(V,null,u.a.createElement(D.a,null)),u.a.createElement(V,null,u.a.createElement(D.a,null)),u.a.createElement(V,null,u.a.createElement(K.a,null)),u.a.createElement(V,null,u.a.createElement(K.a,null)))))}));return u.a.createElement(O.e,null,n)},F=n(37);function P(){var e=Object(x.a)(["\n    height: 200px;\n"]);return P=function(){return e},e}var U=C.a.div(P()),$=function(e){var t=e.activeModal,n=e.closeModal,a=e.saveTask,r=e.selectRepeat,c=e.closeSelectRepeat,l=[{id:1,title:"\u041a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c",isActive:!0},{id:2,title:"\u041a\u0430\u0436\u0434\u0443\u044e \u043d\u0435\u0434\u0435\u043b\u044e",isActive:!1},{id:3,title:"2 \u0440\u0430\u0437\u0430 \u0432 \u043d\u0435\u0434\u0435\u043b\u044e",isActive:!1},{id:4,title:"5 \u0440\u0430\u0437\u0430 \u0432 \u043d\u0435\u0434\u0435\u043b\u044e",isActive:!1}],o=Object(i.useState)(l),s=Object(j.a)(o,2),d=s[0],m=s[1],f=Object(i.useState)(""),E=Object(j.a)(f,2),v=E[0],p=E[1];return u.a.createElement(O.j,{activeModal:t,onClose:n},u.a.createElement(O.h,{id:"addTask",onClose:n,header:u.a.createElement(O.i,{right:u.a.createElement(O.m,{onClick:function(){a({id:0,name:v}),p("")}},"\u0413\u043e\u0442\u043e\u0432\u043e")},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0443")},u.a.createElement(O.c,null,u.a.createElement(O.d,null,u.a.createElement(O.f,{placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:v,onChange:function(e){return p(e.currentTarget.value)}}),u.a.createElement(O.r,{top:"\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c",onClick:r},"\u041a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c"))),u.a.createElement(U,null)),u.a.createElement(O.h,{id:"selectRepeat",onClose:c,header:u.a.createElement(O.i,{right:u.a.createElement(O.m,{onClick:c},"\u0413\u043e\u0442\u043e\u0432\u043e")},"\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c")},u.a.createElement(O.d,null,d.map((function(e){var t=e.id,n=e.title,a=e.isActive;return u.a.createElement(O.q,{key:t,name:"country",value:t,defaultChecked:a,onClick:function(){return function(e){var t=l.map((function(t){return Object(F.a)(Object(F.a)({},t),{},{isActive:e===t.id})}));m(t)}(t)}},n)}))),u.a.createElement(U,null)))},z=n(25),G=n.n(z),Q=n(35),X=function(e){return function(){var t=Object(Q.a)(G.a.mark((function t(n){return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"ADD_NEW_TASK",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Y=function(e){return function(){var e=Object(Q.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"DELETE_TASK"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Z=Object(d.b)((function(e){return{taskData:a.getTask(e)}}),(function(e){return{addNewTask:function(t){return e(r.addTask(t))}}}))((function(e){var t=e.taskData,n=e.addNewTask,a=Object(i.useState)("main"),r=Object(j.a)(a,2),c=r[0],o=(r[1],Object(i.useState)(null)),s=Object(j.a)(o,2),d=s[0],m=s[1],f=function(){return m(null)};return Object(i.useEffect)((function(){l.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var r=document.createAttribute("scheme");r.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(r)}}))}),[]),u.a.createElement(O.s,{activePanel:c,modal:u.a.createElement($,{activeModal:d,closeModal:f,saveTask:function(e){n(e),f()},selectRepeat:function(){return m("selectRepeat")},closeSelectRepeat:function(){return m("addTask")}})},u.a.createElement(O.k,{id:"main"},u.a.createElement(A,{addTask:function(){return m("addTask")}}),u.a.createElement(q,{itemHabits:t})))})),ee=Object(m.d)(k,Object(m.a)(f.a)),te=function(){return u.a.createElement(d.a,{store:ee},u.a.createElement(Z,null))};l.a.send("VKWebAppInit"),s.a.render(u.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[111,1,2]]]);
//# sourceMappingURL=main.e13841b6.chunk.js.map