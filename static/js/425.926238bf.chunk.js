"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[425],{132:function(e,t,r){r.d(t,{Df:function(){return s},Jh:function(){return l},M1:function(){return f},TP:function(){return p},z1:function(){return i}});var n=r(861),a=r(757),c=r.n(a),u=r(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="b889b1f15800992b1379ee4939d9484c",s=function(){var e=(0,n.Z)(c().mark((function e(){var t,r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="trending/movie/day?api_key=".concat(o),e.next=3,u.Z.get(t);case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="search/movie?api_key=".concat(o,"&page=1&query=").concat(t),e.next=3,u.Z.get(r);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(t,"$?api_key=").concat(o),e.next=3,u.Z.get(r);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(t,"/credits?api_key=").concat(o),e.next=3,u.Z.get(r);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(t,"/reviews?api_key=").concat(o),e.next=3,u.Z.get(r);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},318:function(e,t,r){r.d(t,{Z:function(){return f}});r(791);var n=r(87),a=r(925),c="MovieList_moviesList__YUmyH",u="MovieList_list__3qPgi",o="MovieList_link__-y3uU",s="MovieList_img__p2OKV",i="MovieList_movieName__m8+kT",p=r(184);function f(e){var t=e.movies,r=e.location;return(0,p.jsx)("ul",{className:c,children:t.length>0&&t.map((function(e){var t=e.id,c=e.title,f=e.poster_path;return(0,p.jsx)("li",{className:u,id:t,children:(0,p.jsxs)(n.rU,{className:o,to:{pathname:"/movies/".concat(t),state:{from:{location:r}}},children:[(0,p.jsx)("img",{className:s,src:f?"https://image.tmdb.org/t/p/w500".concat(f):a,alt:"poster",width:"",height:""}),(0,p.jsx)("p",{className:i,children:c})]})},t)}))})}},425:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t),r.d(t,{default:function(){return _}});var u=r(861),o=r(439),s=r(757),i=r.n(s),p=r(791),f=r(689),l=r(132),v="Movies_searchForm__RjJqH",m="Movies_searchInput__mxayf",h="Movies_searchButton__cozX1",d=r(318),b=r(184);function _(){var e=(0,p.useState)(""),t=(0,o.Z)(e,2),r=t[0],n=t[1],a=(0,p.useState)([]),s=(0,o.Z)(a,2),_=s[0],y=s[1],w=(0,f.TH)(),g=(0,f.s0)();(0,p.useEffect)((function(){var e=new URLSearchParams(w.search).get("query");if(e){var t=function(){var t=(0,u.Z)(i().mark((function t(){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,l.z1)(e);case 2:r=t.sent,a=r.results,y(a),n(e);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[w.search]);var x=function(){var e=(0,u.Z)(i().mark((function e(t){var a,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!r.trim()){e.next=10;break}return e.next=4,(0,l.z1)(r);case 4:a=e.sent,u=a.results,y(u),n(""),0===u.length&&window.alert("We do not have such films"),g(c(c({},w),{},{search:"query=".concat(r)}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("header",{children:(0,b.jsxs)("form",{className:v,onSubmit:x,children:[(0,b.jsx)("input",{onChange:function(e){return n(e.target.value)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:r,className:m}),(0,b.jsx)("button",{className:h,type:"submit",children:"\ud83d\udd0d"})]})}),(0,b.jsx)(d.Z,{movies:_,location:w})]})}},925:function(e,t,r){e.exports=r.p+"static/media/No_image.1df5fc527de38273724e.jpg"}}]);
//# sourceMappingURL=425.926238bf.chunk.js.map