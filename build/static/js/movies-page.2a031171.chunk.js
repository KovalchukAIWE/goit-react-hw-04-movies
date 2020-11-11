(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{32:function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return f}));var r=n(37),c=n.n(r),a="dda59f4936591e74cda44d0ee157e8ca";c.a.defaults.baseURL="https://api.themoviedb.org";var o=function(){return c.a.get("/3/trending/all/day?api_key=".concat(a)).then((function(e){return e.data.results}))},u=function(e){return c.a.get("/3/search/movie?api_key=".concat(a,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.data.results}))},i=function(e){return c.a.get("/3/movie/".concat(e,"?api_key=").concat(a,"&language=en-US")).then((function(e){return e.data}))},s=function(e){return c.a.get("/3/movie/".concat(e,"/credits?api_key=").concat(a)).then((function(e){return e.data.cast}))},f=function(e){return c.a.get("/3/movie/".concat(e,"/reviews?api_key=").concat(a,"&language=en-US&page=1")).then((function(e){return e.data.results}))}},64:function(e,t,n){"use strict";var r=n(65),c=n(11);function a(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function o(e){return Array.isArray(e)?e.sort():"object"===typeof e?o(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=c({arrayFormat:"none"},t)),r=Object.create(null);return"string"!==typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),c=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),n(decodeURIComponent(c),a,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?e[t]=o(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[a(t,e),"[",r,"]"].join(""):[a(t,e),"[",a(r,e),"]=",a(n,e)].join("")};case"bracket":return function(t,n){return null===n?a(t,e):[a(t,e),"[]=",a(n,e)].join("")};default:return function(t,n){return null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}}(t=c({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var c=e[r];if(void 0===c)return"";if(null===c)return a(r,t);if(Array.isArray(c)){var o=[];return c.slice().forEach((function(e){void 0!==e&&o.push(n(r,e,o.length))})),o.join("&")}return a(r,t)+"="+a(c,t)})).filter((function(e){return e.length>0})).join("&"):""}},65:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}},66:function(e,t,n){e.exports={container:"movies_container__2MUuj",Form:"movies_Form__2qKlN"}},69:function(e,t,n){"use strict";n.r(t);var r=n(35),c=n(1),a=n(0),o=n(2),u=n(9),i=n(64),s=n.n(i),f=n(32),l=n(66),d=n.n(l);t.default=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),i=n[0],l=n[1],h=Object(a.useState)([]),p=Object(r.a)(h,2),j=p[0],m=p[1],b=Object(a.useState)(""),v=Object(r.a)(b,2),y=v[0],g=v[1],O=Object(o.f)(),x=s.a.parse(O.search);return Object(a.useEffect)((function(){x.query&&Object(f.d)(x.query).then((function(e){e.length?(g(""),m(e)):(m([]),g("Sorry, we can't find anything for your request"))})).catch((function(e){return g(e.response.data.status_message)}))}),[x.query]),Object(c.jsxs)("div",{className:d.a.container,children:[Object(c.jsx)("h2",{children:"MoviesPage"}),Object(c.jsxs)("form",{className:d.a.Form,onSubmit:function(t){t.preventDefault(),e.history.push({search:"query=".concat(i)}),l("")},children:[Object(c.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",name:"query",value:i,onChange:function(e){var t=e.target.value;l(t)}}),Object(c.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(c.jsx)("span",{className:"SearchForm-button-label",children:"Search"})})]}),Object(c.jsx)("ul",{children:j.map((function(t){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:{pathname:"/movies/".concat(t.id),state:{search:O&&O.search?O.search:"",from:e.location.pathname}},children:t.title||t.name})},t.id)}))}),y&&Object(c.jsx)("p",{children:y})]})}}}]);
//# sourceMappingURL=movies-page.2a031171.chunk.js.map