"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[608],{608:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var a=s(439),r=s(791),i=s(87),c=s(689),n="Movies_movie__HIhge",o="Movies_search__VjLZn",l="Movies_input__KrUqs",u="Movies_form__4ow+Z",h="Movies_list__hqYjd",_="Movies_item__Ba4aJ",m="Movies_itemThomb__CFpkn",d="Movies_img__8sw1H",f="Movies_title__MDLXB",j="Movies_placeholderImg__FeUgc",v=s(184),p=function(){var e=(0,r.useState)([]),t=(0,a.Z)(e,2),p=t[0],g=t[1],M=(0,i.lr)(),N=(0,a.Z)(M,2),x=N[0],I=N[1],w=x.get("q")||"",Z=(0,c.TH)(),b=s(359),J="https://api.themoviedb.org/3/search/movie?query=".concat(w,"&include_adult=false&language=en-US&page=1");(0,r.useEffect)((function(){b(J,{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTQ0NDgyOGYwNjk5ZTMzNjcyZDA1MzE5MjZhMWQzOCIsInN1YiI6IjY0ZGZhNDIyYWFlYzcxMDNmYTQ4MWI0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yoq_TkMt1jtJtcXp72OXwP7KSig9Xfej9pwn74DL244"}}).then((function(e){return e.json()})).then((function(e){return g(e.results)})).catch((function(e){return console.error("error:"+e)}))}),[J,b]);var T=p.filter((function(e){return e.title.toLowerCase().includes(w.toLowerCase())}));return(0,v.jsxs)("div",{className:n,children:[(0,v.jsxs)("form",{action:"submit",onSubmit:function(e){if(e.preventDefault(),!e.currentTarget.searchValue.value)return I({});I({q:e.currentTarget.searchValue.value}),e.currentTarget.searchValue.value=""},className:u,children:[(0,v.jsx)("label",{children:(0,v.jsx)("input",{name:"searchValue",type:"text",className:l})}),(0,v.jsx)("button",{className:o,children:"Search"})]}),p.length?(0,v.jsx)("ul",{className:h,children:T.map((function(e){return(0,v.jsx)("li",{className:_,children:(0,v.jsx)(i.OL,{to:"".concat(e.id),state:{from:Z},children:(0,v.jsxs)("div",{className:m,children:[(0,v.jsx)("div",{className:j,children:(0,v.jsx)("img",{className:d,src:"https://image.tmdb.org/t/p/w200/".concat(e.poster_path),alt:"poster"})}),(0,v.jsxs)("p",{className:f,children:[" ",e.title]})]})})},e.id)}))}):(0,v.jsx)("h2",{children:"Not Found"})]})}}}]);
//# sourceMappingURL=608.69505ae6.chunk.js.map