"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[158],{8467:function(e,t,a){var l=a(7294),r=a(4160);const n={email:"mailto:",phone:"tel:"};t.Z=e=>{let{children:t,general:a}=e;const{0:s,1:c}=(0,l.useState)(!1),m=[{text:"Home",href:"/"},{text:"Projects",href:"/#projects"},{text:"About",href:"/#about"},{text:"Contact",href:`mailto:${a.links.Email}`}],o=Object.keys(a.links).filter((e=>a.links[e])).map((e=>({text:e,href:`${n[e]||""}${a.links[e]}`})));return l.createElement("div",{className:"bg-slate-100 min-h-screen flex flex-col"},l.createElement("div",{className:"sticky z-10 top-0 left-0 right-0 bg-gray-700 text-white"},l.createElement("button",{className:"block md:hidden absolute top-4 right-4 z-10 p-2 bg-gray-800 text-white",onClick:()=>c((e=>!e))},l.createElement("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16m-7 6h7"}))),l.createElement("div",{className:"container p-4 mx-auto"},l.createElement("nav",{className:"block md:hidden "+(s?"":"hidden")},l.createElement("div",{className:"flex flex-col space-y-2"},m.map((e=>{let{text:t,href:a}=e;return l.createElement(r.rU,{to:a,className:"hover:text-gray-300"},t)})))),l.createElement("nav",{className:"hidden md:flex justify-end"},l.createElement("div",{className:"flex space-x-8"},m.map((e=>{let{text:t,href:a}=e;return l.createElement(r.rU,{to:a,className:"hover:text-gray-300"},t)})))))),l.createElement("main",{className:"container mx-auto p-4 flex-grow"},t),l.createElement("footer",null,l.createElement("div",{className:"bg-gray-200 text-gray-900 py-4"},l.createElement("div",{className:"container mx-auto p-4"},l.createElement("div",{className:"flex justify-center"},o.map((e=>{let{text:t,href:a}=e;return l.createElement(r.rU,{to:a,className:"hover:underline mx-4"},t)}))))),l.createElement("div",{className:"bg-gray-800 text-white text-center py-2"},l.createElement("div",{className:"container mx-auto p-4"},l.createElement("p",null,"© 2023 Portfolio. All rights reserved.")))))}},7881:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var l=a(7294),r=a(8467);const n={h1:"mb-6 text-4xl font-semibold leading-none tracking-tight text-gray-900 sm:text-5xl md:text-6xl",h2:"mt-4 mb-4 text-3xl font-semibold leading-none tracking-tight text-gray-900 sm:text-4xl md:text-5xl",h3:"mt-2 mb-4 text-2xl font-semibold leading-none tracking-tight text-gray-900 sm:text-3xl md:text-4xl",h4:"mb-4 text-1xl font-semibold leading-none tracking-tight text-gray-900 sm:text-2xl md:text-3xl",h5:"mb-2 text-1xl font-semibold leading-none tracking-tight text-gray-900 sm:text-1xl md:text-2xl",h6:"mb-2 text-1xl font-semibold leading-none tracking-tight text-gray-900"},s="text-lg leading-8 text-gray-600";var c=a(4160),m=a.p+"static/projectImageFallback-79ae87babaaa6581232f53261193c6c4.jpeg";var o=e=>{let{project:t}=e;return l.createElement("div",{className:"group"},l.createElement(c.rU,{to:`/project/${t.slug}`},l.createElement("div",{className:"overflow-hidden  mb-4 rounded-lg"},l.createElement("img",{src:t.imgSrc||m,className:"object-cover group-hover:scale-110 transition-all ease-out duration-300 w-full aspect-square",alt:`Illustration of ${t.title}`})),l.createElement("h3",{className:n.h5},t.title),l.createElement("p",{className:s},t.description)))};var i=e=>{let{pageContext:t}=e;const{general:a,data:c}=t;return l.createElement(r.Z,{general:a},l.createElement("div",{className:"mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"},l.createElement("div",{className:"text-center"},l.createElement("h1",{className:n.h1},a.greet),l.createElement("p",{className:s},a.greetSubText),l.createElement("div",{className:"mt-10 flex items-center justify-center gap-x-6"},l.createElement("a",{href:`mailto:${a.links.Email}?subject=Job opportunity`,className:"rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},a.cta),l.createElement("a",{href:"#projects",className:"text-sm font-semibold leading-6 text-gray-900"},"Learn more ",l.createElement("span",{"aria-hidden":"true"},"→"))))),l.createElement("div",{id:"projects",className:"py-16"},l.createElement("h2",{className:n.h2},"Projects"),l.createElement("div",{className:"mt-12 grid gap-6 grid-cols-1 md:grid-cols-2"},c.projects.map(((e,t)=>l.createElement(o,{project:e}))))),l.createElement("div",{id:"about",className:"py-32 max-w-screen-sm"},l.createElement("h2",{className:n.h2},"About"),l.createElement("p",{className:s},a.about)))}}}]);
//# sourceMappingURL=component---src-templates-homepage-template-tsx-7100900ff4bd8fef235d.js.map