"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[691],{132:function(e,r,n){n.d(r,{Df:function(){return i},Jh:function(){return v},M1:function(){return f},TP:function(){return p},z1:function(){return o}});var t=n(861),a=n(757),c=n.n(a),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="b889b1f15800992b1379ee4939d9484c",i=function(){var e=(0,t.Z)(c().mark((function e(){var r,n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="trending/movie/day?api_key=".concat(s),e.next=3,u.Z.get(r);case 3:return n=e.sent,t=n.data,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="search/movie?api_key=".concat(s,"&page=1&query=").concat(r),e.next=3,u.Z.get(n);case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(r,"$?api_key=").concat(s),e.next=3,u.Z.get(n);case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(r,"/credits?api_key=").concat(s),e.next=3,u.Z.get(n);case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(r,"/reviews?api_key=").concat(s),e.next=3,u.Z.get(n);case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},323:function(e,r,n){n.d(r,{Z:function(){return u}});n(791);var t="Loader_backdrop__oBk0y",a="Loader_loader__Iv4Mh",c=n(184);function u(){return(0,c.jsx)("div",{className:t,children:(0,c.jsx)("div",{className:a})})}},691:function(e,r,n){n.r(r),n.d(r,{default:function(){return l}});var t=n(861),a=n(439),c=n(757),u=n.n(c),s=n(132),i=n(791),o=n(689),p=n(323),f="Reviews_reviewsInfo__6x0Th",v="Reviews_reviewsAuthor__wyXUp",h="Reviews_reviewList__AjQyA",d=n(184);function l(){var e=(0,i.useState)([]),r=(0,a.Z)(e,2),n=r[0],c=r[1],l=(0,i.useState)(!1),m=(0,a.Z)(l,2),w=m[0],x=m[1],_=(0,i.useState)(null),k=(0,a.Z)(_,2),y=k[0],Z=k[1],b=(0,o.UO)().movieId;return(0,i.useEffect)((function(){var e=function(){var e=(0,t.Z)(u().mark((function e(){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,s.Jh)(b);case 4:r=e.sent,n=r.results,c(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Z(e.t0);case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[b]),(0,d.jsxs)("div",{className:f,children:[w&&(0,d.jsx)(p.Z,{}),y&&(0,d.jsx)("p",{children:"Something wrong"}),n.length>0?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("ul",{className:h,children:n.map((function(e){var r=e.id,n=e.author,t=e.content;return(0,d.jsxs)("li",{children:[(0,d.jsx)("p",{className:v,children:n}),(0,d.jsx)("p",{children:t})]},r)}))})}):(0,d.jsx)("p",{children:"We don't have any reviews for this movie"})]})}}}]);
//# sourceMappingURL=691.c67d35fe.chunk.js.map