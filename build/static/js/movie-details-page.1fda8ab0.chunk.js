(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{32:function(t,e,r){"use strict";r.d(e,"e",(function(){return i})),r.d(e,"d",(function(){return c})),r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return u})),r.d(e,"c",(function(){return h}));var n=r(37),a=r.n(n),o="dda59f4936591e74cda44d0ee157e8ca";a.a.defaults.baseURL="https://api.themoviedb.org";var i=function(){return a.a.get("/3/trending/all/day?api_key=".concat(o)).then((function(t){return t.data.results}))},c=function(t){return a.a.get("/3/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false")).then((function(t){return t.data.results}))},s=function(t){return a.a.get("/3/movie/".concat(t,"?api_key=").concat(o,"&language=en-US")).then((function(t){return t.data}))},u=function(t){return a.a.get("/3/movie/".concat(t,"/credits?api_key=").concat(o)).then((function(t){return t.data.cast}))},h=function(t){return a.a.get("/3/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1")).then((function(t){return t.data.results}))}},33:function(t,e,r){t.exports=r(36)},34:function(t,e,r){"use strict";function n(t,e,r,n,a,o,i){try{var c=t[o](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,s,"next",t)}function s(t){n(i,a,o,c,s,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return a}))},36:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(G){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,o=Object.create(a.prototype),i=new N(n||[]);return o._invoke=function(t,e,r){var n=l;return function(a,o){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=h(t,e,r);if("normal"===s.type){if(n=r.done?p:f,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(t,r,i),o}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(G){return{type:"throw",arg:G}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function m(){}function j(){}function g(){}var b={};b[o]=function(){return this};var y=Object.getPrototypeOf,O=y&&y(y(I([])));O&&O!==r&&n.call(O,o)&&(b=O);var x=g.prototype=m.prototype=Object.create(b);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(a,o,i,c){var s=h(t[a],t,o);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var a;this._invoke=function(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=h(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function I(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:S}}function S(){return{value:e,done:!0}}return j.prototype=x.constructor=g,g.constructor=j,j.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(_.prototype),_.prototype[i]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new _(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(x),s(x,c,"Generator"),x[o]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=I,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},67:function(t,e,r){t.exports={movieCard:"movieDetails_movieCard__3KXYa",genreList:"movieDetails_genreList__pZovZ",genreListItem:"movieDetails_genreListItem__1IodG",addInf:"movieDetails_addInf__1a4da"}},71:function(t,e,r){"use strict";r.r(e);var n=r(33),a=r.n(n),o=r(34),i=r(35),c=r(1),s=r(0),u=r(2),h=r(9),l=r(32);function f(){var t=Object(s.useState)([]),e=Object(i.a)(t,2),r=e[0],n=e[1],h=Object(u.g)().params.movieId;return Object(s.useEffect)((function(){Object(o.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.a)(h);case 2:e=t.sent,n(e);case 4:case"end":return t.stop()}}),t)})))()}),[h]),Object(c.jsx)(c.Fragment,{children:r.length&&Object(c.jsx)("ul",{children:r.map((function(t){return Object(c.jsxs)("li",{children:[t.profile_path&&Object(c.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(t.profile_path),width:"200",alt:t.name}),Object(c.jsx)("h3",{children:t.name}),Object(c.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})||Object(c.jsx)("p",{className:"descr",children:"The resource you requested could not be found."})})}function d(){var t=Object(s.useState)([]),e=Object(i.a)(t,2),r=e[0],n=e[1],h=Object(u.g)().params.movieId;return Object(s.useEffect)((function(){Object(o.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.c)(h);case 2:e=t.sent,n(e);case 4:case"end":return t.stop()}}),t)})))()}),[h]),Object(c.jsx)(c.Fragment,{children:r.length&&Object(c.jsx)("ul",{children:r.map((function(t){return Object(c.jsxs)("li",{children:[Object(c.jsxs)("h3",{children:["Author: ",t.author]}),Object(c.jsx)("p",{children:t.content})]},t.id)}))})||Object(c.jsx)("p",{className:"descr",children:"We don't have any reviews for this movie."})})}var p=r(67),v=r.n(p);e.default=function(t){var e=Object(s.useState)({}),r=Object(i.a)(e,2),n=r[0],p=r[1],m=Object(s.useState)(""),j=Object(i.a)(m,2),g=j[0],b=j[1],y=Object(s.useState)(""),O=Object(i.a)(y,2),x=O[0],w=O[1],_=Object(s.useState)(""),L=Object(i.a)(_,2),E=L[0],k=L[1],N=Object(u.f)(),I=Object(u.g)().params.movieId;return Object(s.useEffect)((function(){Object(o.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(l.b)(I);case 3:e=t.sent,p(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),t.t0.response&&k(t.t0.response.data.status_message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}),[I]),Object(s.useEffect)((function(){b(N.state&&N.state.from?N.state.from:"/"),w(N.state&&N.state.search?N.state.search:"")}),[N.state]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{type:"button",onClick:function(){return t.history.push({pathname:g,search:x})},className:"btn",children:"Go back"}),n.id&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:v.a.movieCard,children:[n.poster_path&&Object(c.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(n.poster_path),width:"300",alt:n.title||n.name}),Object(c.jsxs)("div",{className:"descr",children:[Object(c.jsx)("h2",{children:n.title||n.name}),Object(c.jsxs)("p",{children:["User score: ",10*n.vote_average,"%"]}),Object(c.jsx)("h3",{children:"Overview"}),Object(c.jsx)("p",{children:n.overview||"This movie has no overview yet."}),Object(c.jsx)("h3",{children:"Genres"}),Object(c.jsx)("ul",{className:v.a.genreList,children:n.genres.map((function(t){return Object(c.jsx)("li",{className:v.a.genreListItem,children:t.name},t.id)}))})]})]}),Object(c.jsxs)("div",{className:v.a.addInf,children:[Object(c.jsx)("p",{children:"Additional information"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:{pathname:"/movies/".concat(n.id,"/cast"),state:{search:x,from:g}},children:"Cast"})})," ",Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:{pathname:"/movies/".concat(n.id,"/reviews"),state:{search:x,from:g}},children:"Reviews"})})]})]}),Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{path:"/movies/:movieId/cast",component:f}),Object(c.jsx)(u.a,{path:"/movies/:movieId/reviews",component:d})]})]})||E&&Object(c.jsx)("p",{className:"descr",children:E})]})}}}]);
//# sourceMappingURL=movie-details-page.1fda8ab0.chunk.js.map