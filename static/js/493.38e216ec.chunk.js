"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[493],{493:function(e,t,r){function n(e,t,r,n,s,a,i){try{var c=e[a](i),o=c.value}catch(u){return void r(u)}c.done?t(o):Promise.resolve(o).then(n,s)}r.r(t),r.d(t,{default:function(){return M}});var s=r(439),a=r(757),i=r.n(a),c=r(791),o=r(87),u=r(689),l="Movies_movie__HIhge",h="Movies_search__VjLZn",_="Movies_input__KrUqs",m="Movies_form__4ow+Z",f="Movies_list__hqYjd",v="Movies_item__Ba4aJ",d="Movies_itemThomb__CFpkn",p="Movies_img__8sw1H",j="Movies_title__MDLXB",g="Movies_placeholderImg__FeUgc",x=r(184),M=function(){var e=(0,c.useState)([]),t=(0,s.Z)(e,2),a=t[0],M=t[1],N=(0,o.lr)(),w=(0,s.Z)(N,2),I=w[0],b=w[1],y=I.get("q")||"",Z=(0,u.TH)(),J=r(359),T="https://api.themoviedb.org/3/search/movie?query=".concat(y,"&include_adult=false&language=en-US&page=1"),k=(0,c.useMemo)((function(){return function(){var e,t=(e=i().mark((function e(t,r){var n,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(t,r);case 2:return n=e.sent,e.next=5,n.json();case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(s,a){var i=e.apply(t,r);function c(e){n(i,s,a,c,o,"next",e)}function o(e){n(i,s,a,c,o,"throw",e)}c(void 0)}))});return function(e,r){return t.apply(this,arguments)}}()}),[J]);(0,c.useEffect)((function(){k(T,{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTQ0NDgyOGYwNjk5ZTMzNjcyZDA1MzE5MjZhMWQzOCIsInN1YiI6IjY0ZGZhNDIyYWFlYzcxMDNmYTQ4MWI0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yoq_TkMt1jtJtcXp72OXwP7KSig9Xfej9pwn74DL244"}}).then((function(e){return M(e.results)})).catch((function(e){return console.error("error:"+e)}))}),[T,k]);var z=a.filter((function(e){return e.title.toLowerCase().includes(y.toLowerCase())}));return(0,x.jsxs)("div",{className:l,children:[(0,x.jsxs)("form",{action:"submit",onSubmit:function(e){if(e.preventDefault(),!e.currentTarget.searchValue.value)return b({});b({q:e.currentTarget.searchValue.value}),e.currentTarget.searchValue.value=""},className:m,children:[(0,x.jsx)("label",{children:(0,x.jsx)("input",{name:"searchValue",type:"text",className:_})}),(0,x.jsx)("button",{className:h,children:"Search"})]}),a.length?(0,x.jsx)("ul",{className:f,children:z.map((function(e){return(0,x.jsx)("li",{className:v,children:(0,x.jsx)(o.OL,{to:"".concat(e.id),state:{from:Z},children:(0,x.jsxs)("div",{className:d,children:[(0,x.jsx)("div",{className:g,children:(0,x.jsx)("img",{className:p,src:"https://image.tmdb.org/t/p/w200/".concat(e.poster_path),alt:"poster"})}),(0,x.jsxs)("p",{className:j,children:[" ",e.title]})]})})},e.id)}))}):(0,x.jsx)("h2",{children:"Not Found"})]})}}}]);
//# sourceMappingURL=493.38e216ec.chunk.js.map