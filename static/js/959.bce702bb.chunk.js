"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[959],{132:function(e,t,r){r.d(t,{Df:function(){return i},Jh:function(){return h},M1:function(){return f},TP:function(){return p},z1:function(){return o}});var n=r(861),a=r(757),c=r.n(a),u=r(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="b889b1f15800992b1379ee4939d9484c",i=function(){var e=(0,n.Z)(c().mark((function e(){var t,r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="trending/movie/day?api_key=".concat(s),e.next=3,u.Z.get(t);case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="search/movie?api_key=".concat(s,"&page=1&query=").concat(t),e.next=3,u.Z.get(r);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(t,"$?api_key=").concat(s),e.next=3,u.Z.get(r);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(t,"/credits?api_key=").concat(s),e.next=3,u.Z.get(r);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(t,"/reviews?api_key=").concat(s),e.next=3,u.Z.get(r);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},318:function(e,t,r){r.d(t,{Z:function(){return f}});r(791);var n=r(87),a=r(925),c="MovieList_moviesList__YUmyH",u="MovieList_list__3qPgi",s="MovieList_link__-y3uU",i="MovieList_img__p2OKV",o="MovieList_movieName__m8+kT",p=r(184);function f(e){var t=e.movies,r=e.location;return(0,p.jsx)("ul",{className:c,children:t.length>0&&t.map((function(e){var t=e.id,c=e.title,f=e.poster_path;return(0,p.jsx)("li",{className:u,id:t,children:(0,p.jsxs)(n.rU,{className:s,to:{pathname:"/movies/".concat(t),state:{from:{location:r}}},children:[(0,p.jsx)("img",{className:i,src:f?"https://image.tmdb.org/t/p/w500".concat(f):a,alt:"poster",width:"",height:""}),(0,p.jsx)("p",{className:o,children:c})]})},t)}))})}},959:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(791),i=r(87),o=r(689),p=r(132),f=r(318),h="SearchForm_searchForm__Rrjro",v="SearchForm_searchInput__y1z-I",m="SearchForm_searchButton__WNmhq",l=r(184);function d(e){var t=e.handleSubmit,r=e.searchMovie,n=e.setSearchMovie;return(0,l.jsxs)("form",{className:h,onSubmit:function(e){e.preventDefault(),t()},children:[(0,l.jsx)("input",{onChange:function(e){return n(e.target.value)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:r,className:v}),(0,l.jsx)("button",{className:m,type:"submit",children:"\ud83d\udd0d"})]})}function _(){var e=(0,s.useState)(""),t=(0,a.Z)(e,2),r=t[0],c=t[1],h=(0,s.useState)([]),v=(0,a.Z)(h,2),m=v[0],_=v[1],x=(0,i.lr)(),w=(0,a.Z)(x,1)[0],g=(0,o.s0)();(0,s.useEffect)((function(){var e=w.get("query");if(e){var t=function(){var t=(0,n.Z)(u().mark((function t(){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.z1)(e);case 2:r=t.sent,n=r.results,_(n),c(e);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[w]);var y=function(){var e=(0,n.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.trim()){e.next=9;break}return e.next=3,(0,p.z1)(r);case 3:t=e.sent,n=t.results,_(n),c(""),0===n.length&&window.alert("Sorry, we do not have such movie"),g({search:"query=".concat(r)});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("header",{children:(0,l.jsx)(d,{handleSubmit:y,searchMovie:r,setSearchMovie:c})}),(0,l.jsx)(f.Z,{movies:m})]})}},925:function(e,t,r){e.exports=r.p+"static/media/No_image.1df5fc527de38273724e.jpg"}}]);
//# sourceMappingURL=959.bce702bb.chunk.js.map