"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[185],{551:function(r,t,e){e.d(t,{Hg:function(){return o},IQ:function(){return d},Jh:function(){return h},Mc:function(){return u},mv:function(){return i}});var n=e(861),a=e(757),s=e.n(a),c=e(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"c34d624783ee48c11b5d0b51da30f0d1"}}),o=function(){var r=(0,n.Z)(s().mark((function r(){var t,e;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/trending/movie/day");case 2:return t=r.sent,e=t.data,r.abrupt("return",e.results);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),u=function(){var r=(0,n.Z)(s().mark((function r(t){var e,n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(s().mark((function r(t){var e,n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/search/movie",{params:{query:t}});case 2:return e=r.sent,n=e.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),d=function(){var r=(0,n.Z)(s().mark((function r(t){var e,n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return e=r.sent,n=e.data,r.abrupt("return",n.cast);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(s().mark((function r(t){var e,n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return e=r.sent,n=e.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},185:function(r,t,e){e.r(t),e.d(t,{default:function(){return v}});var n=e(861),a=e(439),s=e(757),c=e.n(s),o=e(791),u=e(689),i=e(551),d=e(87),h=e(586),p="MovieDetailsPage_movieInfo__RVh2B",f=e(184),v=function(){var r,t=function(){var r=(0,o.useState)(null),t=(0,a.Z)(r,2),e=t[0],s=t[1],d=(0,u.UO)().id;return(0,o.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i.Mc)(d);case 3:t=r.sent,s(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0.message);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[d]),e}(),e=(null===(r=(0,u.TH)().state)||void 0===r?void 0:r.from)||"/",s=(0,u.s0)();return(0,f.jsx)(f.Fragment,{children:t&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("button",{onClick:function(){return s(e)},type:"button",children:"Go back"}),(0,f.jsxs)("div",{className:p,children:[(0,f.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w500/".concat(t.poster_path):h,alt:"",width:"300",onError:function(r){r.target.onerror=null,r.target.src=h}}),(0,f.jsxs)("section",{children:[(0,f.jsx)("h1",{children:t.title}),(0,f.jsxs)("p",{children:["User Score: ",Math.round(10*t.vote_average),"%"]}),(0,f.jsx)("h2",{children:"Overview"}),(0,f.jsx)("p",{children:t.overview}),(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("ul",{children:t.genres.map((function(r){var t=r.id,e=r.name;return(0,f.jsx)("li",{children:e},t)}))})]})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(d.rU,{to:"/movies/".concat(t.id,"/cast"),state:{from:e},children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(d.rU,{to:"/movies/".concat(t.id,"/review"),state:{from:e},children:"Reviews"})})]})]}),(0,f.jsx)(u.j3,{})]})})}},586:function(r){r.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=185.de6b124f.chunk.js.map