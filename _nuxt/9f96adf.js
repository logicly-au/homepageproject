(window.webpackJsonp=window.webpackJsonp||[]).push([[24,2,3,5,9,14],{245:function(t,e,n){"use strict";n.r(e);var l={name:"PageSection",props:{altrow:Boolean,normal:Boolean,overlay:Boolean,nooverlay:Boolean,black:Boolean,noblack:Boolean}},o=(n(248),n(3)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-full",class:{"bg-logiclylightgrey":t.altrow,"!bg-logiclylightgrey":t.normal}},[n("div",{staticClass:"object-contain object-center w-full h-full bg-cover",class:{"bg-black bg-opacity-40":t.overlay}},[n("div",{staticClass:"container h-full mx-auto"},[n("div",{staticClass:"grid h-full py-16 md:py-20 grid-cols-12 md:grid-cols-15 px-6 md:px-0 mobileres"},[n("div",{staticClass:"flex flex-col justify-center col-span-10 col-start-2 md:col-span-9 md:col-start-4"},[t._t("default")],2)])])])])}),[],!1,null,"2c60def4",null);e.default=component.exports},246:function(t,e,n){var content=n(249);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("41e69dda",content,!0,{sourceMap:!1})},247:function(t,e,n){var content=n(256);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("5310b0e0",content,!0,{sourceMap:!1})},248:function(t,e,n){"use strict";n(246)},249:function(t,e,n){var l=n(19)(!1);l.push([t.i,"@media only screen and (max-width:500px){.mobileres[data-v-2c60def4]{padding-left:.5rem;padding-right:.5rem}}",""]),t.exports=l},250:function(t,e,n){"use strict";n.r(e);n(251),n(254),n(96),n(35);var l=n(11),o={name:"VueAspectRatio",props:{ar:{type:String,default:"1:1",validator:function(t){var e=t.split(":").map((function(t){return parseInt(t)})),n=Object(l.a)(e,2),o=n[0],r=n[1];return!Number.isNaN(o)&&!Number.isNaN(r)}},width:String},data:function(){return{w:null,h:null}},computed:{componentStyle:function(){return this.width?{width:this.width}:{}},innerStyle:function(){return{paddingTop:this.h/this.w*100+"%"}}},created:function(){var t=this.ar.split(":").map((function(t){return parseInt(t)})),e=Object(l.a)(t,2),n=e[0],o=e[1];this.w=n,this.h=o}},r=(n(255),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-aspect-ratio",style:t.componentStyle},[n("div",{staticClass:"vue-aspect-ratio__inner",style:t.innerStyle},[n("div",{staticClass:"vue-aspect-ratio__content"},[t._t("default")],2)])])}),[],!1,null,"007c4c7c",null);e.default=component.exports},251:function(t,e,n){"use strict";var l=n(6),o=n(36),r=n(37),c=n(156),d=n(73),v=n(10),m=n(57).f,x=n(74).f,f=n(14).f,h=n(252).trim,_="Number",y=l.Number,C=y,w=y.prototype,S=r(n(95)(w))==_,k="trim"in String.prototype,j=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,l,o,r=(e=k?e.trim():h(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:l=2,o=49;break;case 79:case 111:l=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,v=c.length;i<v;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,l)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(S?v((function(){w.valueOf.call(n)})):r(n)!=_)?c(new C(j(e)),n,y):j(e)};for(var N,I=n(8)?m(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),M=0;I.length>M;M++)o(C,N=I[M])&&!o(y,N)&&f(y,N,x(C,N));y.prototype=w,w.constructor=y,n(16)(l,_,y)}},252:function(t,e,n){var l=n(5),o=n(44),r=n(10),c=n(253),d="["+c+"]",v=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),x=function(t,e,n){var o={},d=r((function(){return!!c[t]()||"​"!="​"[t]()})),v=o[t]=d?e(f):c[t];n&&(o[n]=v),l(l.P+l.F*d,"String",o)},f=x.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(m,"")),t};t.exports=x},253:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},254:function(t,e,n){var l=n(5);l(l.S,"Number",{isNaN:function(t){return t!=t}})},255:function(t,e,n){"use strict";n(247)},256:function(t,e,n){var l=n(19)(!1);l.push([t.i,".vue-aspect-ratio__inner[data-v-007c4c7c]{position:relative}.vue-aspect-ratio__content[data-v-007c4c7c]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=l},257:function(t,e,n){var content=n(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("8282b48e",content,!0,{sourceMap:!1})},258:function(t,e,n){"use strict";n(257)},259:function(t,e,n){var l=n(19)(!1);l.push([t.i,"@media only screen and (max-width:520px){.textresponsive div[data-v-c6337172]{margin-top:-.7rem;margin-left:2rem;margin-right:2rem}}@media only screen and (max-width:450px){.textresponsive div[data-v-c6337172]{margin-top:-1.2rem}}@media only screen and (max-width:410px){.textresponsive div[data-v-c6337172]{margin-top:-2rem}.textresponsive div h1[data-v-c6337172]{font-size:.8rem}.textresponsive div h2[data-v-c6337172]{font-size:.9rem}}",""]),t.exports=l},260:function(t,e,n){"use strict";n.r(e);var l={name:"Hero",props:{heading:String,subheading:String,pageheroheading:String,backgroundUrl:String,right:Boolean,blacktext:Boolean,whitetext:Boolean,altrow:Boolean,overlay:Boolean}},o=(n(258),n(3)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AspectRatio",{style:{backgroundSize:"cover",backgroundImage:"url("+t.backgroundUrl+")"},attrs:{ar:"13:4",width:"100%"}},[n("page-section",{attrs:{altrow:t.altrow,overlay:t.overlay}},[n("div",{staticClass:"w-full h-full textresponsive grid content-center"},[n("div",{staticClass:"mt-0"},[n("h1",{staticClass:"text-xs md:text-sm xl:text-base font-medium text-center text-white"},[t._v(t._s(t.heading))]),t._v(" "),n("h2",{staticClass:"text-base sm:text-lg md:text-xl xl:text-2xl font-semibold text-center leading-tight text-white"},[t._v(t._s(t.subheading))]),t._v(" "),n("h1",{staticClass:"text-base sm:text-lg lg:text-xl text-center text-white"},[t._v(t._s(t.pageheroheading))])])])])],1)}),[],!1,null,"c6337172",null);e.default=component.exports;installComponents(component,{PageSection:n(245).default,AspectRatio:n(250).default})},261:function(t,e,n){"use strict";n.r(e);var l={name:"Hero",props:{heading:String,subheading:String,iconurl:String,altrow:Boolean,imgwidth:String}},o=n(3),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-section",{staticClass:" lg:py-8",attrs:{altrow:t.altrow}},[n("div",{staticClass:"flex justify-center "},[n("div",{staticClass:"justify-center mb-6"},[n("img",{attrs:{width:t.imgwidth,src:t.iconurl}})])]),t._v(" "),n("div",{staticClass:"px-0 xl:px-6"},[n("div",{staticClass:"text-center text-logiclytextgrey"},[n("h1",{staticClass:"text-2xl font-semibold leading-snug text-center pb-2 pt-4 xl:pt-8"},[t._v(t._s(t.heading))]),t._v(" "),n("h2",{staticClass:"font-light text-lg"},[t._v(t._s(t.subheading))])])])])}),[],!1,null,"96bf9eac",null);e.default=component.exports;installComponents(component,{PageSection:n(245).default})},262:function(t,e,n){"use strict";n.r(e);var l={name:"CTA",props:{text:String,buttonLink:String,buttonText:String}},o=n(3),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-section",[n("div",{staticClass:"object-contain object-center content-center w-full text-logiclytextgrey"},[n("h1",{staticClass:"text-2xl font-semibold text-center leading-snug text-logiclytextgrey"},[t._v(t._s(t.text))]),t._v(" "),n("div",{staticClass:"grid justify-center align-center pt-4"},[n("button",{staticClass:"block h-12 w-40 my-5 text-center text-white font-medium bg-logiclyorange hover:bg-logiclyhover"},[n("NuxtLink",{attrs:{to:t.buttonLink}},[t._v(t._s(t.buttonText))])],1)])])])}),[],!1,null,"af5bd4ea",null);e.default=component.exports;installComponents(component,{Button:n(97).default,PageSection:n(245).default})},315:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NS40MSAyMy40MSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiNiMWIxYjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fTwvc3R5bGU+PC9kZWZzPjxwb2x5bGluZSBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNDUuMDUgMC4zNSAyMi43IDIyLjcgMC4zNSAwLjM1Ii8+PC9zdmc+"},316:function(t,e,n){t.exports=n.p+"img/1_Research.bda1437.jpg"},317:function(t,e,n){t.exports=n.p+"img/2_Design.1e6e93b.jpg"},318:function(t,e,n){t.exports=n.p+"img/3_Build.129fbfc.jpg"},319:function(t,e,n){t.exports=n.p+"img/4_Maintain_and_improve.1c79dbb.jpg"},320:function(t,e,n){t.exports=n.p+"img/Continual_reviews.c60a773.svg"},352:function(t,e,n){"use strict";n.r(e);var l={head:function(){return{title:"How we work · Logicly"}}},o=n(3),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("Hero",{attrs:{heading:"HOW WE WORK",subheading:"A continuous cycle of learning, defining and refining","background-url":"/Logicly_how-we-work-header.jpg",overlay:""}}),t._v(" "),l("Herotext",{attrs:{iconurl:"Our-pathway-to-build-your-digital-system.svg",imgwidth:"200px",heading:"Our pathway to build your digital system",subheading:"Our digital systems are a collaborative process. The people we collaborate with in an organisation varies\n              depending on the expertise and content needed for the project. We regularly present concepts to gain\n              client feedback, refine and guide them through the next phase of the journey.",altrow:""}}),t._v(" "),l("page-section",[l("div",{staticClass:"grid grid-cols-12 px-0 pb-0 mb-0 xl:gap-x-6 text-logiclytextgrey lg:px-20 xl:px-0 xl:-mx-20 xl:-mb-20"},[l("div",{staticClass:"col-span-12 text-center"},[l("h1",{staticClass:"pb-6 text-2xl font-semibold text-center text-logiclytextgrey"},[t._v("Our collaborative journey")])]),t._v(" "),l("div",{staticClass:"col-span-12 pb-6 border-t-2 border-logiclygreytwo md:pb-8"}),t._v(" "),l("div",{staticClass:"grid justify-center col-span-12 pb-6 md:pb-8 xl:pb-20"},[l("img",{staticClass:"h-4 p-0 md:h-5 xl:h-6",attrs:{src:n(315)}})]),t._v(" "),l("div",{staticClass:"col-span-12 xl:col-span-5"},[l("img",{staticClass:"p-0",attrs:{src:n(316)}})]),t._v(" "),l("div",{staticClass:"hidden col-span-1 ml-2 border-l-2 xl:block border-logiclygreythree"},[l("div",{staticClass:"w-6 h-6 -ml-3 rounded-full bg-logiclytheme1"})]),t._v(" "),l("div",{staticClass:"col-span-12 pb-2 pl-0 xl:col-span-4 xl:pl-4 xl:-ml-12 xl:pb-16"},[l("h3",{staticClass:"pt-4 pb-3 text-xl font-bold text-logiclytheme1 xl:pt-0 xl:-mt-2"},[t._v("1. Research")]),t._v(" "),l("p",{staticClass:"text-sm font-light"},[t._v("In order to develop a thoughtful solution to a complex information problem, it’s essential to have a\n         thorough understanding of what the data needs to inform and the best pathway to get there.")]),t._v(" "),l("h4",{staticClass:"text-base font-semibold pt-2"},[t._v("Understanding")]),t._v(" "),l("p",{staticClass:"text-sm font-light"},[t._v("To get started, we deep-dive into the contributing factors, working with all the stakeholders to\n         define the problem and it’s complexities.")]),t._v(" "),l("h4",{staticClass:"text-base font-semibold pt-2"},[t._v("Strategy")]),t._v(" "),l("p",{staticClass:"text-sm font-light"},[t._v("Our senior team distill the key findings and develop a high-level strategy with a human-centered\n         focus. The deliverables are prioritised into short, medium and long term stages.")]),t._v(" "),l("h4",{staticClass:"text-base font-semibold pt-2"},[t._v("Clear pathway")]),t._v(" "),l("p",{staticClass:"text-sm font-light"},[t._v("Working with our clients, we set agreed priorities, timelines, and a clear pathway so everyone is on\n         the same page.")])]),t._v(" "),l("div",{staticClass:"col-span-12 pb-12 xl:col-span-2 mt-1 xl:mt-8 xl:pb-0"},[l("h4",{staticClass:"text-sm font-semibold"},[t._v("Scoping Team")]),t._v(" "),l("p",{staticClass:"xl:pb-2 text-xs font-light"},[t._v("\n         Product Managers"),l("br"),t._v("\n         Adam Clarke, Director/CTO"),l("br"),t._v("\n         Simon Palmer, Director/"),l("br"),t._v("\n         Senior consultant\n       ")]),t._v(" "),l("p",{staticClass:"text-xs font-light"},[t._v("\n         Project Manager"),l("br"),t._v("\n         Senior developers\n       ")])]),t._v(" "),l("div",{staticClass:"col-span-12 xl:col-span-5"},[l("img",{staticClass:"p-0",attrs:{src:n(317)}})]),t._v(" "),l("div",{staticClass:"hidden col-span-1 ml-2 border-l-2 xl:block border-logiclygreythree"},[l("div",{staticClass:"w-6 h-6 -ml-3 rounded-full bg-logiclytheme2"})]),t._v(" "),l("div",{staticClass:"col-span-12 pb-2 pl-0 xl:col-span-4 xl:pl-4 xl:-ml-12 xl:pb-16"},[l("h3",{staticClass:"pt-4 pb-3 text-xl font-bold text-logiclytheme2 xl:pt-0 xl:-mt-2"},[t._v("2. Design")]),t._v(" "),l("p",{staticClass:"text-sm font-light"},[t._v("\n         We design with flexibility to make room for refinements and changes down the track. Our collaborative process takes into consideration many different design factors.\n       ")]),t._v(" "),l("h4",{staticClass:"text-base font-semibold pt-2"},[t._v("\n         User friendly interface design\n       ")]),t._v(" "),l("p",{staticClass:"text-sm font-light"},[t._v("\n         We design interfaces based on the user experience, making the process\n         clear and easy to navigate for non-digital people. Our design process considers different users,\n         workflows and business constraints.\n       ")]),t._v(" "),l("h4",{staticClass:"text-base font-semibold pt-2"},[t._v("\n         System & database design\n       ")]),t._v(" "),l("p",{staticClass:"text-sm font-light"},[t._v("\n         The system is designed to support the technical needs of the interface and the database design is based\n         on the information and outcomes required by our clients.\n       ")]),t._v(" "),l("h4",{staticClass:"text-base font-semibold pt-2"},[t._v("\n         Dataflow design\n       ")]),t._v(" "),l("p",{staticClass:"text-sm font-light"},[t._v("\n         Logicly designs the flow of data through the system to ensure the efficient transformation and use of data, minimising processing time and safeguarding data integrity to drives system processes.\n       ")])]),t._v(" "),l("div",{staticClass:"col-span-12 pb-12 lg:col-span-7 xl:col-span-2 mt-1 xl:mt-8 xl:pb-0"},[l("h4",{staticClass:"text-sm font-semibold"},[t._v("Design team")]),t._v(" "),l("p",{staticClass:"xl:pb-2 text-xs font-light"},[t._v("\n         Product Managers"),l("br"),t._v("\n         Adam Clarke, Director/CTO"),l("br"),t._v("\n         Simon Palmer, Director/"),l("br"),t._v("\n         Senior consultant\n       ")]),t._v(" "),l("p",{staticClass:"xl:pb-2 text-xs font-light"},[t._v("\n         UX Designers"),l("br"),t._v("\n         Senior developers\n       ")])]),t._v(" "),l("div",{staticClass:"col-span-12 xl:col-span-5"},[l("img",{staticClass:"p-0",attrs:{src:n(318)}})]),t._v(" "),l("div",{staticClass:"hidden col-span-1 ml-2 border-l-2 xl:block border-logiclygreythree"},[l("div",{staticClass:"w-6 h-6 -ml-3 rounded-full bg-logiclytheme4"})]),t._v(" "),l("div",{staticClass:"col-span-12 pb-2 pl-0 xl:col-span-4 xl:pl-4 xl:-ml-12 xl:pb-16"},[l("h3",{staticClass:"pt-4 pb-3 text-xl font-bold text-logiclytheme4 xl:pt-0 xl:-mt-2"},[t._v("3. Build")]),t._v(" "),l("p",{staticClass:"text-sm font-light"},[t._v("\n         This stage is about building the interface, systems infrastructure and databases. We get constant\n         feedback along the way to identify possible ways to add value or innovation to enhance the system.\n       ")]),t._v(" "),l("h4",{staticClass:"text-base font-semibold pt-2"},[t._v("\n         Stepped process\n       ")]),t._v(" "),l("p",{staticClass:"text-sm font-light"},[t._v("\n         Early on we develop mockups for clients to experience the system and identify any\n         usability issues and ways to add value.\n       ")]),t._v(" "),l("h4",{staticClass:"text-base font-semibold pt-2"},[t._v("\n         Collaboration\n       ")]),t._v(" "),l("p",{staticClass:"text-sm font-light"},[t._v("\n         Our multidisciplinary team work together from start to finish and only launch the\n         platform when all team members sign off with their approval. Their combined skills and expertise enables\n         dynamic problem solving.\n       ")]),t._v(" "),l("h4",{staticClass:"text-base font-semibold pt-2"},[t._v("\n         Project management\n       ")]),t._v(" "),l("p",{staticClass:"text-sm font-light"},[t._v("\n         Logicly simplifies and streamlines complex projects. We have a proven track record\n         delivering on time with clear, efficient and personalised communications.\n       ")]),t._v(" "),l("h4",{staticClass:"text-base font-semibold pt-2"},[t._v("\n         Automated software\n       ")]),t._v(" "),l("p",{staticClass:"text-sm font-light"},[t._v("\n         We use software to detect any bugs, test the user experience and maintain the level\n         of quality.\n       ")])]),t._v(" "),l("div",{staticClass:"col-span-12 pb-12 lg:col-span-8 xl:col-span-2 mt-1 xl:mt-8 xl:pb-0"},[l("h4",{staticClass:"text-sm font-semibold"},[t._v("Development team")]),t._v(" "),l("p",{staticClass:"xl:pb-2 text-xs font-light"},[t._v("\n         Product Manager "),l("br"),t._v("\n         Adam Clarke, Director/CTO\n       ")]),t._v(" "),l("p",{staticClass:"text-xs font-light"},[t._v("\n         Project manager, developers, database architects, systems administrator-architects, quality assurance team\n       ")])]),t._v(" "),l("div",{staticClass:"col-span-12 xl:col-span-5"},[l("img",{staticClass:"p-0",attrs:{src:n(319)}})]),t._v(" "),l("div",{staticClass:"hidden col-span-1 ml-2 border-l-2 xl:block border-logiclygreythree"},[l("div",{staticClass:"w-6 h-6 -ml-3 rounded-full bg-logiclytheme3"})]),t._v(" "),l("div",{staticClass:"col-span-12 pb-2 pl-0 xl:col-span-4 xl:pl-4 xl:-ml-12 xl:pb-24"},[l("h3",{staticClass:"pt-4 pb-3 text-xl font-bold text-logiclytheme3 xl:pt-0 xl:-mt-2"},[t._v("4. Maintain & Improve")]),t._v(" "),l("p",{staticClass:"pb-2 text-sm font-light"},[t._v("\n         Once the digital solution is launched and live, we continue to work with our clients to gain the most\n         from their digital system.\n       ")]),t._v(" "),l("h4",{staticClass:"text-base font-semibold pt-2"},[t._v("\n         Training tools\n       ")]),t._v(" "),l("p",{staticClass:"text-sm font-light"},[t._v("\n         We can provide training guides, videos and user documentation.\n       ")]),t._v(" "),l("h4",{staticClass:"text-base font-semibold pt-2"},[t._v("\n         Problem solving\n       ")]),t._v(" "),l("p",{staticClass:"text-sm font-light"},[t._v("\n         We respond efficiently to any problems and confidently offer compensation in the unlikely event of a\n         major issue.\n       ")]),t._v(" "),l("h4",{staticClass:"text-base font-semibold pt-2"},[t._v("\n         System management\n       ")]),t._v(" "),l("p",{staticClass:"text-sm font-light"},[t._v("\n         Logicly maintain the highest possible standards of security and care. We have numerous checks and\n         safeguards in place, including automated issue-detection software and regularly-audited security\n         systems.\n       ")]),t._v(" "),l("h4",{staticClass:"text-base font-semibold pt-2"},[t._v("\n         Updating & improving\n       ")]),t._v(" "),l("p",{staticClass:"text-sm font-light"},[t._v("\n         We update the software libraries and systems according to best practice but we also\n         look for new ways to improve on the user experience, efficiencies and speed.\n       ")]),t._v(" "),l("h4",{staticClass:"text-base font-semibold pt-2"},[t._v("\n         Help Desk\n       ")]),t._v(" "),l("p",{staticClass:"text-sm font-light"},[t._v("\n         We provide personalised support during business hours, 24/7 support in case of emergencies and\n         a dedicated help desk for larger projects.\n       ")])]),t._v(" "),l("div",{staticClass:"col-span-12 xl:col-span-2 mt-1 xl:mt-8"},[l("h4",{staticClass:"text-sm font-semibold"},[t._v("Support team")]),t._v(" "),l("p",{staticClass:"xl:pb-2 text-xs font-light"},[t._v("\n         Led by the project manager\n       ")]),t._v(" "),l("p",{staticClass:"xl:pb-2 text-xs font-light"},[t._v("\n         Dedicated project support\n       ")]),t._v(" "),l("p",{staticClass:"text-xs font-light"},[t._v("\n         IT infrastructure, development operations, developers\n       ")])])])]),t._v(" "),l("page-section",{attrs:{altrow:""}},[l("div",{staticClass:"flex grid items-center grid-cols-12 px-0 pb-0 xl:gap-x-6 lg:px-20 xl:px-0 xl:-mx-20 xl:-mt-32 xl:pb-12"},[l("div",{staticClass:"col-span-12 pt-0 xl:col-span-5 xl:pt-32"},[l("img",{attrs:{src:n(320)}})]),t._v(" "),l("div",{staticClass:"hidden xl:block col-span-1 border-l-2 border-logiclygreythree ml-2 h-1/2 -mb-24"},[l("div",{staticClass:"rounded-full h-6 w-6 bg-logiclygreythree -ml-3 mt-56"})]),t._v(" "),l("div",{staticClass:"col-span-12 pt-4 pl-0 xl:col-span-5 text-logiclytextgrey xl:pl-4 xl:-ml-12 xl:pt-32"},[l("h2",{staticClass:"pb-2 text-xl font-semibold"},[t._v("\n         An evolving process\n       ")]),t._v(" "),l("p",{staticClass:"text-lg xl:text-base"},[t._v("\n         We get together with clients as questions evolve and gaps arise. It is a fluid process of discussions, building, testing and refining.\n       ")])])])]),t._v(" "),l("CTA",{attrs:{text:"Follow some of our clients' journeys",buttonText:"View our projects",buttonLink:"/projects"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Hero:n(260).default,Herotext:n(261).default,PageSection:n(245).default,CTA:n(262).default})}}]);