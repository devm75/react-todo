(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{43:function(e,t,o){e.exports={form:"ToDoForm_form__14r-O",input:"ToDoForm_input__2A8wr",addtask:"ToDoForm_addtask__2BaS4"}},44:function(e,t,o){e.exports={listitem:"Todo_listitem__3rC4x",taskcontent:"Todo_taskcontent__3swGu",close:"Todo_close__3xNI5"}},45:function(e,t,o){e.exports={app:"App_app__1kX79",header:"App_header__3ZZ1n",content:"App_content__3La4L"}},62:function(e,t,o){e.exports={instruction:"ShowInstructions_instruction__22GOH"}},73:function(e,t,o){},84:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o(10),c=o.n(a),i=(o(73),o(17)),r=o(63),s=o(30),d=o(55),l=o.n(d),u=o(121),f=o(117),j=o(43),b=o.n(j),p=o(7);var h=function(e){var t=e.addTodo,o=Object(n.useState)({id:"",task:"",completed:!1}),a=Object(s.a)(o,2),c=a[0],r=a[1];return Object(p.jsxs)("form",{className:b.a.form,onSubmit:function(e){e.preventDefault(),c.task.trim()&&(t(Object(i.a)(Object(i.a)({},c),{},{id:l.a.v4()})),r(Object(i.a)(Object(i.a)({},c),{},{task:""})))},children:[Object(p.jsx)(u.a,{label:"What needs to be done ?",type:"text",name:"task",value:c.task,onChange:function(e){r(Object(i.a)(Object(i.a)({},c),{},{task:e.target.value}))},className:b.a.input}),Object(p.jsx)("div",{className:b.a.addtask,children:Object(p.jsx)(f.a,{disabled:!c.task,type:"submit",children:"Add Task"})})]})},m=o(118),O=o(122),g=o(120),v=o(119),x=o(61),_=o.n(x),k=o(44),w=o.n(k);var T=function(e){var t=e.todo,o=e.toggleComplete,a=e.deleteTodo,c=Object(n.useState)(!1),i=Object(s.a)(c,2),r=i[0],d=i[1];return Object(p.jsxs)(m.a,{className:w.a.listitem,onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:[Object(p.jsx)(O.a,{checked:t.completed,onClick:function(){o(t.id)}}),Object(p.jsx)(g.a,{className:w.a.taskcontent,style:{textDecoration:t.completed?"line-through":null},children:t.task}),r&&Object(p.jsx)(v.a,{className:w.a.close,onClick:function(){a(t.id)},children:Object(p.jsx)(_.a,{})})]})},N=o(116);var S=function(e){var t=e.todos,o=e.toggleComplete,n=e.deleteTodo;return Object(p.jsx)(N.a,{children:t.map((function(e){return Object(p.jsx)(T,{todo:e,toggleComplete:o,deleteTodo:n},e.id)}))})},y=o(62),C=o.n(y);var D=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(g.a,{className:C.a.instruction,children:"\u270d\ufe0f Just type in above box and press enter to start saving ToDos! \u270d\ufe0f"})})},A=o(45),E=o.n(A),W="react-todo-list-todos",I=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),o=t[0],a=t[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem(W));e&&a(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem(W,JSON.stringify(o))}),[o]);return Object(p.jsxs)("div",{className:E.a.app,children:[Object(p.jsx)("div",{className:E.a.header,children:Object(p.jsx)(g.a,{variant:"h1",children:"React ToDo"})}),Object(p.jsxs)("div",{className:E.a.content,children:[Object(p.jsx)(h,{addTodo:function(e){a([e].concat(Object(r.a)(o)))}}),o.length>0?Object(p.jsx)(S,{todos:o,toggleComplete:function(e){a(o.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{completed:!t.completed}):t})))},deleteTodo:function(e){a(o.filter((function(t){return t.id!==e})))}}):Object(p.jsx)(D,{})]})]})},J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(p.jsx)(I,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-todo",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-todo","/service-worker.js");J?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):L(e)}))}}()}},[[84,1,2]]]);
//# sourceMappingURL=main.cb0c077f.chunk.js.map