"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[970],{132:function(t,e,n){n.d(e,{Df:function(){return s},Jh:function(){return v},M1:function(){return f},TP:function(){return p},z1:function(){return o}});var r=n(861),a=n(757),c=n.n(a),i=n(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="b889b1f15800992b1379ee4939d9484c",s=function(){var t=(0,r.Z)(c().mark((function t(){var e,n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="trending/movie/day?api_key=".concat(u),t.next=3,i.Z.get(e);case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="search/movie?api_key=".concat(u,"&page=1&query=").concat(e),t.next=3,i.Z.get(n);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="movie/".concat(e,"$?api_key=").concat(u),t.next=3,i.Z.get(n);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="movie/".concat(e,"/credits?api_key=").concat(u),t.next=3,i.Z.get(n);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="movie/".concat(e,"/reviews?api_key=").concat(u),t.next=3,i.Z.get(n);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},318:function(t,e,n){n.d(e,{Z:function(){return f}});n(791);var r=n(87),a=n(925),c="MovieList_moviesList__YUmyH",i="MovieList_list__3qPgi",u="MovieList_link__-y3uU",s="MovieList_img__p2OKV",o="MovieList_movieName__m8+kT",p=n(184);function f(t){var e=t.movies,n=t.location;return(0,p.jsx)("ul",{className:c,children:e.length>0&&e.map((function(t){var e=t.id,c=t.title,f=t.poster_path;return(0,p.jsx)("li",{className:i,id:e,children:(0,p.jsxs)(r.rU,{className:u,to:{pathname:"/movies/".concat(e),state:{from:{location:n}}},children:[(0,p.jsx)("img",{className:s,src:f?"https://image.tmdb.org/t/p/w500".concat(f):a,alt:"poster",width:"",height:""}),(0,p.jsx)("p",{className:o,children:c})]})},e)}))})}},970:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r=n(861),a=n(439),c=n(757),i=n.n(c),u=n(791),s=n(132),o=n(689),p="Home_homeTitle__u8ZOw",f=n(318),v=n(184);function m(){var t=(0,o.TH)(),e=(0,u.useState)([]),n=(0,a.Z)(e,2),c=n[0],m=n[1];return(0,u.useEffect)((function(){var t=function(){var t=(0,r.Z)(i().mark((function t(){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Df)();case 2:e=t.sent,n=e.results,m(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{className:p,children:"Trending today"}),(0,v.jsx)(f.Z,{movies:c,location:t})]})}},925:function(t,e,n){t.exports=n.p+"static/media/No_image.1df5fc527de38273724e.jpg"}}]);
//# sourceMappingURL=970.a620103b.chunk.js.map