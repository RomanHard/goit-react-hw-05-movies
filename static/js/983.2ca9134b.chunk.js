"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[983],{551:function(t,r,e){e.d(r,{Hg:function(){return s},IQ:function(){return f},Jh:function(){return p},Mc:function(){return i},mv:function(){return o}});var n=e(861),a=e(757),u=e.n(a),c=e(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"c34d624783ee48c11b5d0b51da30f0d1"}}),s=function(){var t=(0,n.Z)(u().mark((function t(){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/trending/movie/day");case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(r));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/search/movie",{params:{query:r}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.cast);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},983:function(t,r,e){e.r(r);var n=e(439),a=e(791),u=e(689),c=e(87),s=e(551),i=e(184);r.default=function(){var t=(0,a.useState)([]),r=(0,n.Z)(t,2),e=r[0],o=r[1];(0,a.useEffect)((function(){(0,s.Hg)().then(o)}),[]);var f=(0,u.TH)(),p=e.map((function(t){return(0,i.jsx)("li",{children:(0,i.jsx)(c.rU,{to:"/movies/".concat(t.id),state:{from:f},children:t.title})},t.id)}));return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{children:p})})}}}]);
//# sourceMappingURL=983.2ca9134b.chunk.js.map