"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[275],{551:function(t,r,e){e.d(r,{Hg:function(){return s},IQ:function(){return f},Jh:function(){return p},Mc:function(){return i},mv:function(){return o}});var n=e(861),a=e(757),u=e.n(a),c=e(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"c34d624783ee48c11b5d0b51da30f0d1"}}),s=function(){var t=(0,n.Z)(u().mark((function t(){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/trending/movie/day");case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(r));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/search/movie",{params:{query:r}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.cast);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},275:function(t,r,e){e.r(r),e.d(r,{default:function(){return f}});var n=e(439),a=e(87),u=e(689),c=e(791),s=e(551),i=e(184),o=function(t){t.searchParams,t.setSearchParams;var r=t.onSubmit;return(0,i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=t.currentTarget;r(e.elements.keyword.value),e.reset()},children:[(0,i.jsx)("input",{type:"text",name:"keyword"}),(0,i.jsx)("button",{type:"submit",children:"Search"})]})},f=function(){var t=(0,c.useState)([]),r=(0,n.Z)(t,2),e=r[0],f=r[1],p=(0,u.TH)(),v=(0,a.lr)(),d=(0,n.Z)(v,2),m=d[0],h=d[1],l=m.get("keyword");(0,c.useEffect)((function(){""!==l&&null!==l&&(0,s.mv)(l).then(f)}),[l]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o,{searchParams:m,setSearchParams:h,onSubmit:function(t){h({keyword:t})}}),(0,i.jsx)("ul",{children:e.map((function(t){return(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{to:"/movies/".concat(t.id),state:{from:p},children:t.title})},t.id)}))})]})}}}]);
//# sourceMappingURL=275.c06a75e9.chunk.js.map