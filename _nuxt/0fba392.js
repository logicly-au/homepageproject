(window.webpackJsonp=window.webpackJsonp||[]).push([[22,2,3,5,9,15],{245:function(t,e,n){"use strict";n.r(e);var r={name:"PageSection",props:{altrow:Boolean,normal:Boolean,overlay:Boolean,nooverlay:Boolean,black:Boolean,noblack:Boolean}},o=(n(248),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-full",class:{"bg-logiclylightgrey":t.altrow,"!bg-logiclylightgrey":t.normal}},[n("div",{staticClass:"object-contain object-center w-full h-full bg-cover",class:{"bg-black bg-opacity-40":t.overlay}},[n("div",{staticClass:"container h-full mx-auto"},[n("div",{staticClass:"grid h-full py-16 md:py-20 grid-cols-12 md:grid-cols-15 px-6 md:px-0 mobileres"},[n("div",{staticClass:"flex flex-col justify-center col-span-10 col-start-2 md:col-span-9 md:col-start-4"},[t._t("default")],2)])])])])}),[],!1,null,"2c60def4",null);e.default=component.exports},246:function(t,e,n){var content=n(249);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("41e69dda",content,!0,{sourceMap:!1})},247:function(t,e,n){var content=n(257);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("5310b0e0",content,!0,{sourceMap:!1})},248:function(t,e,n){"use strict";n(246)},249:function(t,e,n){var r=n(19)(!1);r.push([t.i,"@media only screen and (max-width:500px){.mobileres[data-v-2c60def4]{padding-left:.5rem;padding-right:.5rem}}",""]),t.exports=r},250:function(t,e,n){"use strict";var r=n(6),o=n(36),l=n(37),c=n(156),d=n(73),m=n(10),v=n(57).f,h=n(74).f,f=n(14).f,_=n(252).trim,x="Number",y=r.Number,C=y,w=y.prototype,S=l(n(95)(w))==x,k="trim"in String.prototype,j=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=k?e.trim():_(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,m=c.length;i<m;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(S?m((function(){w.valueOf.call(n)})):l(n)!=x)?c(new C(j(e)),n,y):j(e)};for(var E,N=n(8)?v(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;N.length>I;I++)o(C,E=N[I])&&!o(y,E)&&f(y,E,h(C,E));y.prototype=w,w.constructor=y,n(16)(r,x,y)}},251:function(t,e,n){"use strict";n.r(e);n(250),n(255),n(96),n(35);var r=n(11),o={name:"VueAspectRatio",props:{ar:{type:String,default:"1:1",validator:function(t){var e=t.split(":").map((function(t){return parseInt(t)})),n=Object(r.a)(e,2),o=n[0],l=n[1];return!Number.isNaN(o)&&!Number.isNaN(l)}},width:String},data:function(){return{w:null,h:null}},computed:{componentStyle:function(){return this.width?{width:this.width}:{}},innerStyle:function(){return{paddingTop:this.h/this.w*100+"%"}}},created:function(){var t=this.ar.split(":").map((function(t){return parseInt(t)})),e=Object(r.a)(t,2),n=e[0],o=e[1];this.w=n,this.h=o}},l=(n(256),n(3)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-aspect-ratio",style:t.componentStyle},[n("div",{staticClass:"vue-aspect-ratio__inner",style:t.innerStyle},[n("div",{staticClass:"vue-aspect-ratio__content"},[t._t("default")],2)])])}),[],!1,null,"007c4c7c",null);e.default=component.exports},252:function(t,e,n){var r=n(5),o=n(44),l=n(10),c=n(253),d="["+c+"]",m=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),h=function(t,e,n){var o={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),m=o[t]=d?e(f):c[t];n&&(o[n]=m),r(r.P+r.F*d,"String",o)},f=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(m,"")),2&e&&(t=t.replace(v,"")),t};t.exports=h},253:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},254:function(t,e,n){var content=n(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("8282b48e",content,!0,{sourceMap:!1})},255:function(t,e,n){var r=n(5);r(r.S,"Number",{isNaN:function(t){return t!=t}})},256:function(t,e,n){"use strict";n(247)},257:function(t,e,n){var r=n(19)(!1);r.push([t.i,".vue-aspect-ratio__inner[data-v-007c4c7c]{position:relative}.vue-aspect-ratio__content[data-v-007c4c7c]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=r},258:function(t,e,n){"use strict";n(254)},259:function(t,e,n){var r=n(19)(!1);r.push([t.i,"@media only screen and (max-width:520px){.textresponsive div[data-v-c6337172]{margin-top:-.7rem;margin-left:2rem;margin-right:2rem}}@media only screen and (max-width:450px){.textresponsive div[data-v-c6337172]{margin-top:-1.2rem}}@media only screen and (max-width:410px){.textresponsive div[data-v-c6337172]{margin-top:-2rem}.textresponsive div h1[data-v-c6337172]{font-size:.8rem}.textresponsive div h2[data-v-c6337172]{font-size:.9rem}}",""]),t.exports=r},260:function(t,e,n){"use strict";n.r(e);var r={name:"Hero",props:{heading:String,subheading:String,pageheroheading:String,backgroundUrl:String,right:Boolean,blacktext:Boolean,whitetext:Boolean,altrow:Boolean,overlay:Boolean}},o=(n(258),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AspectRatio",{style:{backgroundSize:"cover",backgroundImage:"url("+t.backgroundUrl+")"},attrs:{ar:"13:4",width:"100%"}},[n("page-section",{attrs:{altrow:t.altrow,overlay:t.overlay}},[n("div",{staticClass:"w-full h-full textresponsive grid content-center"},[n("div",{staticClass:"mt-0"},[n("h1",{staticClass:"text-xs md:text-sm xl:text-base font-medium text-center text-white"},[t._v(t._s(t.heading))]),t._v(" "),n("h2",{staticClass:"text-base sm:text-lg md:text-xl xl:text-2xl font-semibold text-center leading-tight text-white"},[t._v(t._s(t.subheading))]),t._v(" "),n("h1",{staticClass:"text-base sm:text-lg lg:text-xl text-center text-white"},[t._v(t._s(t.pageheroheading))])])])])],1)}),[],!1,null,"c6337172",null);e.default=component.exports;installComponents(component,{PageSection:n(245).default,AspectRatio:n(251).default})},261:function(t,e,n){"use strict";n.r(e);var r={name:"Hero",props:{heading:String,subheading:String,iconurl:String,altrow:Boolean,imgwidth:String}},o=n(3),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-section",{staticClass:" lg:py-8",attrs:{altrow:t.altrow}},[n("div",{staticClass:"flex justify-center "},[n("div",{staticClass:"justify-center mb-6"},[n("img",{attrs:{width:t.imgwidth,src:t.iconurl}})])]),t._v(" "),n("div",{staticClass:"px-0 xl:px-6"},[n("div",{staticClass:"text-center text-logiclytextgrey"},[n("h1",{staticClass:"text-2xl font-semibold leading-snug text-center pb-2 pt-4 xl:pt-8"},[t._v(t._s(t.heading))]),t._v(" "),n("h2",{staticClass:"font-light text-lg"},[t._v(t._s(t.subheading))])])])])}),[],!1,null,"96bf9eac",null);e.default=component.exports;installComponents(component,{PageSection:n(245).default})},263:function(t,e,n){"use strict";n.r(e);var r={name:"CTA",props:{text:String,buttonLink:String,buttonText:String}},o=n(3),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-section",[n("div",{staticClass:"object-contain object-center content-center w-full text-logiclytextgrey"},[n("h1",{staticClass:"text-2xl font-semibold text-center leading-snug text-logiclytextgrey"},[t._v(t._s(t.text))]),t._v(" "),n("div",{staticClass:"grid justify-center align-center pt-4"},[n("button",{staticClass:"block h-12 w-40 my-5 text-center text-white font-medium bg-logiclyorange hover:bg-logiclyhover"},[n("NuxtLink",{attrs:{to:t.buttonLink}},[t._v(t._s(t.buttonText))])],1)])])])}),[],!1,null,"af5bd4ea",null);e.default=component.exports;installComponents(component,{Button:n(97).default,PageSection:n(245).default})},376:function(t,e,n){"use strict";n.r(e);var r={head:function(){return{title:"Our team · Logicly"}}},o=n(3),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Hero",{attrs:{heading:"OUR TEAM",subheading:"We share our diverse skills and knowledge","background-url":"/Logicly-Our-team-header-we-share-our-diverse-skills-and-knowledge.jpg",overlay:""}}),t._v(" "),n("Herotext",{attrs:{iconurl:"/Our-team-approaches-problems-from-different-angles.svg",imgwidth:"120px",heading:"Our team approaches problems from different angles",subheading:"Our diverse skills across strategic thinking, UX design, technology, management and customer support ensures we collectively bring a wholistic approach to every project. This creative thinking helps us conceptualise our clients' vision and provide different options to solve their complex information problems.",altrow:""}}),t._v(" "),n("page-section",[n("h1",{staticClass:"text-2xl font-semibold text-center text-logiclytextgrey pb-8 lg:pb-12"},[t._v("Everyone brings something different to the team")]),t._v(" "),n("div",{staticClass:"grid grid-cols-12 text-logiclytextgrey"},[n("div",{staticClass:"col-span-12 lg:col-span-8 col-start-1 lg:col-start-3 grid grid-cols-3 grid-rows-3 gap-4 mx-0 lg:-mx-8 xl:-mx-0"},[n("div",{staticClass:"items-center col-span-1"},[n("img",{staticClass:"h-8 sm:h-12 m-auto",attrs:{src:"/Everyone_brings_something_different_to_the_team/Researchers.svg"}}),t._v(" "),n("h3",{staticClass:"text-center font-medium text-xs sm:text-sm pt-3"},[t._v("Researchers")])]),t._v(" "),n("div",{staticClass:"items-center col-span-1"},[n("img",{staticClass:"h-8 sm:h-12 m-auto",attrs:{src:"/Everyone_brings_something_different_to_the_team/Psychologists.svg"}}),t._v(" "),n("h3",{staticClass:"text-center font-medium text-xs sm:text-sm pt-3"},[t._v("Psychologists")])]),t._v(" "),n("div",{staticClass:"items-center col-span-1"},[n("img",{staticClass:"h-8 sm:h-12 m-auto",attrs:{src:"/Everyone_brings_something_different_to_the_team/Mathematicians.svg"}}),t._v(" "),n("h3",{staticClass:"text-center font-medium text-xs sm:text-sm pt-3"},[t._v("Mathematicians")])]),t._v(" "),n("div",{staticClass:"items-center col-span-1"},[n("img",{staticClass:"h-8 sm:h-12 m-auto",attrs:{src:"/Everyone_brings_something_different_to_the_team/Project_managers.svg"}}),t._v(" "),n("h3",{staticClass:"text-center font-medium text-xs sm:text-sm pt-3"},[t._v("Project Managers")])]),t._v(" "),n("div",{staticClass:"items-center col-span-1"},[n("img",{staticClass:"h-8 sm:h-12 m-auto",attrs:{src:"/Everyone_brings_something_different_to_the_team/Support.svg"}}),t._v(" "),n("h3",{staticClass:"text-center font-medium text-xs sm:text-sm pt-3"},[t._v("Support")])]),t._v(" "),n("div",{staticClass:"items-center col-span-1"},[n("img",{staticClass:"h-8 sm:h-12 m-auto",attrs:{src:"/Everyone_brings_something_different_to_the_team/Security_experts.svg"}}),t._v(" "),n("h3",{staticClass:"text-center font-medium text-xs sm:text-sm pt-3"},[t._v("Security experts")])]),t._v(" "),n("div",{staticClass:"items-center col-span-1"},[n("img",{staticClass:"h-8 sm:h-12 m-auto",attrs:{src:"/Everyone_brings_something_different_to_the_team/User_experience_design_(UX).svg"}}),t._v(" "),n("h3",{staticClass:"text-center font-medium text-xs sm:text-sm pt-3"},[t._v("User experience"),n("br"),t._v(" design (UX)")])]),t._v(" "),n("div",{staticClass:"items-center col-span-1"},[n("img",{staticClass:"h-8 sm:h-12 m-auto",attrs:{src:"/Everyone_brings_something_different_to_the_team/Interface_design_(UI).svg"}}),t._v(" "),n("h3",{staticClass:"text-center font-medium text-xs sm:text-sm pt-3"},[t._v("Interface design (UI)")])]),t._v(" "),n("div",{staticClass:"items-center col-span-1"},[n("img",{staticClass:"h-8 sm:h-12 m-auto",attrs:{src:"/Everyone_brings_something_different_to_the_team/Developers.svg"}}),t._v(" "),n("h3",{staticClass:"text-center font-medium text-xs sm:text-sm pt-3"},[t._v("Developers")])])])])]),t._v(" "),n("page-section",{attrs:{altrow:""}},[n("div",[n("h1",{staticClass:"text-2xl font-semibold text-center text-logiclytextgrey pb-8"},[t._v("Meet the people who will advise and manage your projects")])]),t._v(" "),n("div",{staticClass:"grid grid-cols-2 col-gap-6 text-logiclytextgrey"},[n("div",{staticClass:"col-span-2 lg:col-span-1 lg:col-start-1 pb-16"},[n("div",{staticClass:"col-span-1 pb-6"},[n("img",{staticClass:"p-0",attrs:{src:"/logicly-adam.jpg"}})]),t._v(" "),n("div",{staticClass:"col-span-1"},[n("h2",{staticClass:"text-lg font-bold"},[t._v("\n            Adam Clarke\n          ")]),t._v(" "),n("h3",{staticClass:"text-sm font-medium pb-4"},[t._v("\n            Director / Senior Consultant / CTO\n          ")]),t._v(" "),n("p",{staticClass:"pb-2 text-sm"},[t._v("\n            Adam has worked in information technology, data management, and software delivery since 1991 while a Psychology student at Melbourne University. For 10 years prior to that it was his hobby. Adam has a diverse set of skills including research methods, programming, database design, internet technologies, and data analysis. He is a national leader in the design, implementation and support of IT systems for minimum data sets. Adam co-founded Logicly (then Strategic Data) in 1996 and is also our CTO and technical lead, managing all the work to keep systems relevant, running, and consistent with their security requirements.\n          ")]),t._v(" "),n("p",{staticClass:"text-sm"},[t._v("\n            When away from work Adam can often be found attending local gigs and music festivals. He has also recently rekindled a childhood obsession with planted aquaria, largely in lieu of the former, thanks to COVID-19.\n          ")])])]),t._v(" "),n("div",{staticClass:"col-span-2 lg:col-span-1 lg:col-start-2 pb-16"},[n("div",{staticClass:"col-span-1 pb-6"},[n("img",{staticClass:"p-0",attrs:{src:"/logicly-andrew.jpg"}})]),t._v(" "),n("div",{staticClass:"col-span-1"},[n("h2",{staticClass:"text-lg font-bold"},[t._v("\n            Andrew Gordon\n          ")]),t._v(" "),n("h3",{staticClass:"text-sm font-medium pb-4"},[t._v("\n            Director / Business Development Manager\n          ")]),t._v(" "),n("p",{staticClass:"pb-2 text-sm"},[t._v("\n            Prior to commencing at Logicly (then Strategic Data) Andrew worked as a psychologist and in management in vocational rehabilitation. His work at Logicly has covered project management, consulting and business management. As we have grown, his focus is now HR, compliance, finance and overseeing the administration and accounts team.\n          ")]),t._v(" "),n("p",{staticClass:"text-sm"},[t._v("\n            When not at work, he likes to be out on the bay sailing, up the country cycling, overseas travelling or in the mountains skiing, otherwise he’ll be having a quiet drink in a local bar.\n          ")])])]),t._v(" "),n("div",{staticClass:"col-span-2 lg:col-span-1 lg:col-start-1 pb-16"},[n("div",{staticClass:"col-span-1 pb-6"},[n("img",{staticClass:"p-0",attrs:{src:"/logicly-simon.jpg"}})]),t._v(" "),n("div",{staticClass:"col-span-1"},[n("h2",{staticClass:"text-lg font-bold"},[t._v("\n            Simon Palmer\n          ")]),t._v(" "),n("h3",{staticClass:"text-sm font-medium pb-4"},[t._v("\n            Director / Senior Consultant\n          ")]),t._v(" "),n("p",{staticClass:"pb-2 text-sm"},[t._v("\n            Prior to co-founding Logicly (then Strategic Data), Simon's professional career shifted from social research and program evaluation to issues of computer-interface design, usability and information presentation. For 15 years he was a registered psychologist, bringing a counseling-influenced approach to the collection, management, analysis and presentation of data. Simon’s particular expertise is in identifying the information required to support an objective, and specifying technical infrastructure to enable the collection and application of relevant data.\n          ")]),t._v(" "),n("p",{staticClass:"text-sm"},[t._v("\n            In his normal life Simon likes playing the guitar, riding his bike, and discussing off-beat topics over fine dinners.\n          ")])])]),t._v(" "),n("div",{staticClass:"col-span-2 lg:col-span-1 lg:col-start-2"},[n("div",{staticClass:"col-span-1 pb-6"},[n("img",{staticClass:"p-0",attrs:{src:"/logicly-michelle.jpg"}})]),t._v(" "),n("div",{staticClass:"col-span-1"},[n("h2",{staticClass:"text-lg font-bold"},[t._v("\n            Michelle Nicholson\n          ")]),t._v(" "),n("h3",{staticClass:"text-sm font-medium pb-4"},[t._v("\n            Director / Manager, Business Operations\n          ")]),t._v(" "),n("p",{staticClass:"pb-2 text-sm"},[t._v("\n            Michelle is the newest member of Logicly’s Board of Directors.\n          ")]),t._v(" "),n("p",{staticClass:"pb-2 text-sm"},[t._v("\n            Eleven years ago Michelle started as an account manager for WebSurvey. Since then she has added WebSurvey Manager and Project Manager to her list of titles, got her hands dirty ensuring that company policies and protocols were in place (and consistent), and helped Andrew keep an eye on the finance side of things. In 2018 her company wide involvement saw her take on a tailor made role as Manager of Business Operations, and in 2021 she added ‘Director’ to the tally. Michelle gets excited by strategy, operations and a quality approach to project delivery.\n          ")]),t._v(" "),n("p",{staticClass:"text-sm"},[t._v("\n            On the weekends Michelle can be found (or not) hiking in the bush, visiting art galleries, or drinking coffee.\n          ")])])])])]),t._v(" "),n("CTA",{attrs:{text:"View projects we've collaborated on",buttonText:"Projects",buttonLink:"/projects"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Hero:n(260).default,Herotext:n(261).default,PageSection:n(245).default,CTA:n(263).default})}}]);