"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[275],{275:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var c=a(439),i=a(791),n=a(689),r="Cast_list__GlWio",s="Cast_item__a0CDL",o="Cast_img__-isbW",h="Cast_placeholderImg__tvaAI",l=a(184),u=function(){var e=(0,i.useState)([]),t=(0,c.Z)(e,2),u=t[0],_=t[1],m=(0,n.UO)().id,d=a(359),p="https://api.themoviedb.org/3/movie/".concat(m,"/credits?language=en-US");return(0,i.useEffect)((function(){d(p,{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTQ0NDgyOGYwNjk5ZTMzNjcyZDA1MzE5MjZhMWQzOCIsInN1YiI6IjY0ZGZhNDIyYWFlYzcxMDNmYTQ4MWI0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yoq_TkMt1jtJtcXp72OXwP7KSig9Xfej9pwn74DL244"}}).then((function(e){return e.json()})).then((function(e){return _(e.cast)})).catch((function(e){return console.error("error:"+e)}))}),[p,d]),(0,l.jsx)("ul",{className:r,children:u.map((function(e){return(0,l.jsxs)("li",{className:s,children:[(0,l.jsx)("div",{className:h,children:(0,l.jsx)("img",{className:o,src:"https://image.tmdb.org/t/p/w200/".concat(e.profile_path),alt:e.name})}),(0,l.jsx)("p",{children:e.name}),(0,l.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))})}}}]);
//# sourceMappingURL=275.3fe1561a.chunk.js.map