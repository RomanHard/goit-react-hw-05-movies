"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[185],{551:function(e,r,t){t.d(r,{Hg:function(){return i},IQ:function(){return d},Jh:function(){return f},Mc:function(){return u},mv:function(){return o}});var n=t(861),a=t(757),c=t.n(a),s=t(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"c34d624783ee48c11b5d0b51da30f0d1"}}),i=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/movie/day");case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/search/movie",{params:{query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},185:function(e,r,t){t.r(r),t.d(r,{default:function(){return v}});var n=t(861),a=t(439),c=t(757),s=t.n(c),i=t(791),u=t(689),o=t(551),d=t(87),f="MovieDetailsPage_movieInfo__RVh2B",p=t(184),v=function(){var e,r=function(){var e=(0,i.useState)(null),r=(0,a.Z)(e,2),t=r[0],c=r[1],d=(0,u.UO)().id;return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Mc)(d);case 3:r=e.sent,c(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[d]),t}(),t=(null===(e=(0,u.TH)().state)||void 0===e?void 0:e.from)||"/",c=(0,u.s0)();return(0,p.jsx)(p.Fragment,{children:r&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("button",{onClick:function(){return c(t)},type:"button",children:"Go back"}),(0,p.jsxs)("div",{className:f,children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(r.poster_path),alt:"",width:"300"}),(0,p.jsxs)("section",{children:[(0,p.jsx)("h1",{children:r.title}),(0,p.jsxs)("p",{children:["User Score: ",Math.round(10*r.vote_average),"%"]}),(0,p.jsx)("h2",{children:"Overview"}),(0,p.jsx)("p",{children:r.overview}),(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("ul",{children:r.genres.map((function(e){var r=e.id,t=e.name;return(0,p.jsx)("li",{children:t},r)}))})]})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Additional information"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(d.rU,{to:"/movies/".concat(r.id,"/cast"),state:{from:t},children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(d.rU,{to:"/movies/".concat(r.id,"/review"),state:{from:t},children:"Reviews"})})]})]}),(0,p.jsx)(u.j3,{})]})})}}}]);
//# sourceMappingURL=185.9477452e.chunk.js.map