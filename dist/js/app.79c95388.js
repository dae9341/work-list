(function(){"use strict";var n={5654:function(n,t,e){var o=e(9017),r=e(8935),i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),e("Login")],1)},a=[],c=function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)},u=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("header",{staticClass:"header"},[e("h1",[n._v("Hello ! My Work")]),e("div",[e("i",[n._v("Me")]),e("button",{staticClass:"-line"},[n._v("로그아웃")])])])}],s={name:"Header"},l=s,f=e(3736),d=(0,f.Z)(l,c,u,!1,null,"290517e1",null),p=d.exports,h=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"loginForm"},[e("button",{staticClass:"loginForm__button -login",on:{click:function(t){return n.login()}}},[n._v("Google 계정으로 로그인")])])},v=[],g=e(6196),b={name:"Login",created(){},mounted:function(){this.loginCheck()},methods:{loginCheck:function(){const n=(0,g.v0)();(0,g.Aj)(n,(n=>{n?console.log(n):console.log("없음")}))},login:function(){const n=new g.hJ;n.addScope("https://www.googleapis.com/auth/contacts.readonly");const t=(0,g.v0)();(0,g.F6)(t,n)},logout:function(){}}},m=b,_=(0,f.Z)(m,h,v,!1,null,"5c5325a0",null),w=_.exports,k={name:"App",components:{Header:p,Login:w}},y=k,C=(0,f.Z)(y,i,a,!1,null,null,null),O=C.exports;const j={apiKey:"AIzaSyDcsIRnfoshTi0ekIlRcCwLCRbLijalgas",authDomain:"todolist-e8b0d.firebaseapp.com",databaseURL:"https://todolist-e8b0d-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"todolist-e8b0d",storageBucket:"todolist-e8b0d.appspot.com",messagingSenderId:"610067574429",appId:"1:610067574429:web:646102d20c1d54c3f76e74",measurementId:"G-C995XJXW05"};(0,o.ZF)(j);r.Z.config.productionTip=!1,new r.Z({render:n=>n(O)}).$mount("#app")}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return n[o](i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,o,r,i){if(!o){var a=1/0;for(l=0;l<n.length;l++){o=n[l][0],r=n[l][1],i=n[l][2];for(var c=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(e.O).every((function(n){return e.O[n](o[u])}))?o.splice(u--,1):(c=!1,i<a&&(a=i));if(c){n.splice(l--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[o,r,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,o){var r,i,a=o[0],c=o[1],u=o[2],s=0;if(a.some((function(t){return 0!==n[t]}))){for(r in c)e.o(c,r)&&(e.m[r]=c[r]);if(u)var l=u(e)}for(t&&t(o);s<a.length;s++)i=a[s],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(l)},o=self["webpackChunkwork_list"]=self["webpackChunkwork_list"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(5654)}));o=e.O(o)})();
//# sourceMappingURL=app.79c95388.js.map