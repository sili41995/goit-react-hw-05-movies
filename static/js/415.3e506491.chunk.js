"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{8500:function(n,e,t){t.d(e,{Z:function(){return f}});t(2791);var r,i=t(7689),o=t(1087),c=t(168),u=t(3081).Z.ul(r||(r=(0,c.Z)(["\n  margin-top: ","px;\n"])),(function(n){return 4*n.theme.spacing})),a=t(4671),s=t(184),f=function(n){var e=n.movies,t=(0,i.TH)();return(0,s.jsx)(u,{children:e.map((function(n){var e=n.id,r=n.title,i=void 0===r?"Unknown movie":r;return(0,s.jsx)("li",{children:(0,s.jsx)(o.rU,{state:{from:t},to:"/".concat(a.ki,"/").concat(e),children:i})},e)}))})}},8152:function(n,e,t){var r={movies:[],movie:null,cast:null,status:t(7199).Z.idle,reviews:[]};e.Z=r},7199:function(n,e){e.Z={idle:"idle",pending:"pending",resolved:"resolved",rejected:"rejected"}},5415:function(n,e,t){t.r(e);var r=t(5861),i=t(9439),o=t(4687),c=t.n(o),u=t(2791),a=t(9308),s=t(8500),f=t(8152),h=t(7199),l=t(1972),v=t(7972),d=t(184);e.default=function(){var n=(0,u.useState)((function(){return f.Z.movies})),e=(0,i.Z)(n,2),t=e[0],o=e[1],p=(0,u.useState)((function(){return f.Z.status})),Z=(0,i.Z)(p,2),w=Z[0],g=Z[1];return(0,u.useEffect)((function(){function n(){return(n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,g(h.Z.pending),n.next=4,l.Z.fetchTrendingMovies();case 4:e=n.sent,t=e.results,o(t),(0,v.Q)("Movies uploaded"),g(h.Z.resolved),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),(0,v.J)("HTTP request failed"),g(h.Z.rejected);case 15:case"end":return n.stop()}}),n,null,[[0,11]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{children:"Trending today"}),!!t.length&&(0,d.jsx)(s.Z,{movies:t}),w===h.Z.pending&&(0,d.jsx)(a.Z,{})]})}},1972:function(n,e,t){var r=t(5671),i=t(3144),o=t(6274),c=t(9359),u=(0,c.Z)("API_KEY"),a=(0,c.Z)("BASE_URL"),s=new(function(){function n(){(0,r.Z)(this,n),Object.defineProperty(this,u,{writable:!0,value:"2f4676f5b742582c83b7dc4456b7601c"}),Object.defineProperty(this,a,{writable:!0,value:"https://api.themoviedb.org/3"})}return(0,i.Z)(n,[{key:"fetchTrendingMovies",value:function(){return fetch("".concat((0,o.Z)(this,a)[a],"/trending/all/day?language=en-US&api_key=").concat((0,o.Z)(this,u)[u])).then((function(n){if(!n.ok)throw new Error;return n.json()}))}},{key:"fetchMovieDetails",value:function(n){return fetch("".concat((0,o.Z)(this,a)[a],"/movie/").concat(n,"?language=en-US&api_key=").concat((0,o.Z)(this,u)[u])).then((function(n){if(!n.ok)throw new Error;return n.json()}))}},{key:"fetchMovieCast",value:function(n){return fetch("".concat((0,o.Z)(this,a)[a],"/movie/").concat(n,"/credits?language=en-US&api_key=").concat((0,o.Z)(this,u)[u])).then((function(n){if(!n.ok)throw new Error;return n.json()}))}},{key:"fetchMovieReviews",value:function(n){return fetch("".concat((0,o.Z)(this,a)[a],"/movie/").concat(n,"/reviews?language=en-US&page=1&api_key=").concat((0,o.Z)(this,u)[u])).then((function(n){if(!n.ok)throw new Error;return n.json()}))}},{key:"fetchMoviesByTitle",value:function(n){return fetch("".concat((0,o.Z)(this,a)[a],"/search/movie?query=").concat(n,"&include_adult=false&language=en-US&page=1&api_key=").concat((0,o.Z)(this,u)[u])).then((function(n){if(!n.ok)throw new Error;return n.json()}))}}]),n}());e.Z=s},7972:function(n,e,t){t.d(e,{J:function(){return i},Q:function(){return o}});var r=t(9085),i=(t(5462),function(n){r.Am.error(n)}),o=function(n){r.Am.success(n)}},5462:function(){},5861:function(n,e,t){function r(n,e,t,r,i,o,c){try{var u=n[o](c),a=u.value}catch(s){return void t(s)}u.done?e(a):Promise.resolve(a).then(r,i)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(i,o){var c=n.apply(e,t);function u(n){r(c,i,o,u,a,"next",n)}function a(n){r(c,i,o,u,a,"throw",n)}u(void 0)}))}}t.d(e,{Z:function(){return i}})},6274:function(n,e,t){function r(n,e){if(!Object.prototype.hasOwnProperty.call(n,e))throw new TypeError("attempted to use private field on non-instance");return n}t.d(e,{Z:function(){return r}})},9359:function(n,e,t){t.d(e,{Z:function(){return i}});var r=0;function i(n){return"__private_"+r+++"_"+n}}}]);
//# sourceMappingURL=415.3e506491.chunk.js.map