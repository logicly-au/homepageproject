(window.webpackJsonp=window.webpackJsonp||[]).push([[22,3,4,6,10,15],{370:function(t,e,n){"use strict";n.r(e);var o={name:"PageSection",props:{altrow:Boolean,normal:Boolean,overlay:Boolean,nooverlay:Boolean,black:Boolean,noblack:Boolean}},r=(n(373),n(14)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-full",class:{"bg-logiclylightgrey":t.altrow,"!bg-logiclylightgrey":t.normal}},[e("div",{staticClass:"object-contain object-center w-full h-full bg-cover",class:{"bg-black bg-opacity-40":t.overlay}},[e("div",{staticClass:"container h-full mx-auto"},[e("div",{staticClass:"grid h-full py-16 md:py-20 grid-cols-12 md:grid-cols-15 px-6 md:px-0 mobileres"},[e("div",{staticClass:"flex flex-col justify-center col-span-10 col-start-2 md:col-span-9 md:col-start-4"},[t._t("default")],2)])])])])}),[],!1,null,"2c60def4",null);e.default=component.exports},371:function(t,e,n){var content=n(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("ce01e464",content,!0,{sourceMap:!1})},372:function(t,e,n){var content=n(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("6828059b",content,!0,{sourceMap:!1})},373:function(t,e,n){"use strict";n(371)},374:function(t,e,n){var o=n(31)((function(i){return i[1]}));o.push([t.i,"@media only screen and (max-width:500px){.mobileres[data-v-2c60def4]{padding-left:.5rem;padding-right:.5rem}}",""]),o.locals={},t.exports=o},375:function(t,e,n){"use strict";n.r(e);var o=n(19),r=(n(53),n(378),{name:"VueAspectRatio",props:{ar:{type:String,default:"1:1",validator:function(t){var e=t.split(":").map((function(t){return parseInt(t)})),n=Object(o.a)(e,2),r=n[0],l=n[1];return!Number.isNaN(r)&&!Number.isNaN(l)}},width:String},data:function(){return{w:null,h:null}},computed:{componentStyle:function(){return this.width?{width:this.width}:{}},innerStyle:function(){return{paddingTop:this.h/this.w*100+"%"}}},created:function(){var t=this.ar.split(":").map((function(t){return parseInt(t)})),e=Object(o.a)(t,2),n=e[0],r=e[1];this.w=n,this.h=r}}),l=(n(376),n(14)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vue-aspect-ratio",style:t.componentStyle},[e("div",{staticClass:"vue-aspect-ratio__inner",style:t.innerStyle},[e("div",{staticClass:"vue-aspect-ratio__content"},[t._t("default")],2)])])}),[],!1,null,"007c4c7c",null);e.default=component.exports},376:function(t,e,n){"use strict";n(372)},377:function(t,e,n){var o=n(31)((function(i){return i[1]}));o.push([t.i,".vue-aspect-ratio__inner[data-v-007c4c7c]{position:relative}.vue-aspect-ratio__content[data-v-007c4c7c]{height:100%;left:0;position:absolute;top:0;width:100%}",""]),o.locals={},t.exports=o},378:function(t,e,n){"use strict";n(2)({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},379:function(t,e,n){var content=n(381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("2cc1a922",content,!0,{sourceMap:!1})},380:function(t,e,n){"use strict";n(379)},381:function(t,e,n){var o=n(31)((function(i){return i[1]}));o.push([t.i,"@media only screen and (max-width:520px){.textresponsive div[data-v-c6337172]{margin-left:2rem;margin-right:2rem;margin-top:-.7rem}}@media only screen and (max-width:450px){.textresponsive div[data-v-c6337172]{margin-top:-1.2rem}}@media only screen and (max-width:410px){.textresponsive div[data-v-c6337172]{margin-top:-2rem}.textresponsive div h1[data-v-c6337172]{font-size:.8rem}.textresponsive div h2[data-v-c6337172]{font-size:.9rem}}",""]),o.locals={},t.exports=o},382:function(t,e,n){"use strict";n.r(e);var o={name:"Hero",props:{heading:String,subheading:String,pageheroheading:String,backgroundUrl:String,right:Boolean,blacktext:Boolean,whitetext:Boolean,altrow:Boolean,overlay:Boolean}},r=(n(380),n(14)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("AspectRatio",{style:{backgroundSize:"cover",backgroundImage:"url(".concat(t.backgroundUrl,")")},attrs:{ar:"13:4",width:"100%"}},[e("page-section",{attrs:{altrow:t.altrow,overlay:t.overlay}},[e("div",{staticClass:"w-full h-full textresponsive grid content-center"},[e("div",{staticClass:"mt-0"},[e("h1",{staticClass:"text-xs md:text-sm xl:text-base font-medium text-center text-white"},[t._v(t._s(t.heading))]),t._v(" "),e("h2",{staticClass:"text-base sm:text-lg md:text-xl xl:text-2xl font-semibold text-center leading-tight text-white"},[t._v(t._s(t.subheading))]),t._v(" "),e("h1",{staticClass:"text-base sm:text-lg lg:text-xl text-center text-white"},[t._v(t._s(t.pageheroheading))])])])])],1)}),[],!1,null,"c6337172",null);e.default=component.exports;installComponents(component,{PageSection:n(370).default,AspectRatio:n(375).default})},383:function(t,e,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("7bd89f3c",content,!0,{sourceMap:!1})},384:function(t,e,n){"use strict";n.r(e);var o={name:"Hero",props:{heading:String,subheading:String,iconurl:String,altrow:Boolean,imgwidth:String}},r=n(14),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("page-section",{staticClass:"lg:py-8",attrs:{altrow:t.altrow}},[e("div",{staticClass:"flex justify-center"},[e("div",{staticClass:"justify-center mb-6"},[e("img",{attrs:{width:t.imgwidth,src:t.iconurl}})])]),t._v(" "),e("div",{staticClass:"px-0 xl:px-6"},[e("div",{staticClass:"text-center text-logiclytextgrey"},[e("h1",{staticClass:"text-2xl font-semibold leading-snug text-center pb-2 pt-4 xl:pt-8"},[t._v(t._s(t.heading))]),t._v(" "),e("h2",{staticClass:"font-light text-lg"},[t._v(t._s(t.subheading))])])])])}),[],!1,null,"96bf9eac",null);e.default=component.exports;installComponents(component,{PageSection:n(370).default})},387:function(t,e,n){"use strict";n(383)},388:function(t,e,n){var o=n(31)((function(i){return i[1]}));o.push([t.i,"button>a[data-v-03699575]{text-transform:lowercase!important}",""]),o.locals={},t.exports=o},390:function(t,e,n){"use strict";n.r(e);var o={name:"CTA",props:{text:String,buttonLink:String,buttonText:String}},r=(n(387),n(14)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("page-section",[e("div",{staticClass:"content-center object-contain object-center w-full text-logiclytextgrey"},[e("h1",{staticClass:"text-2xl font-semibold leading-snug text-center text-logiclytextgrey"},[t._v(t._s(t.text))]),t._v(" "),e("div",{staticClass:"grid justify-center pt-4 align-center"},[e("button",{staticClass:"block w-40 h-12 my-5 font-medium text-center text-white bg-logiclyorange hover:bg-logiclyhover"},[e("NuxtLink",{attrs:{to:t.buttonLink}},[t._v(t._s(t.buttonText))])],1)])])])}),[],!1,null,"03699575",null);e.default=component.exports;installComponents(component,{Button:n(158).default,PageSection:n(370).default})},548:function(t,e,n){"use strict";n.r(e);var o={head:function(){return{title:"Our team · Logicly"}}},r=n(14),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("Hero",{attrs:{heading:"OUR TEAM",subheading:"We share our diverse skills and knowledge","background-url":"/Logicly-Our-team-header-we-share-our-diverse-skills-and-knowledge.jpg",overlay:""}}),t._v(" "),e("Herotext",{attrs:{iconurl:"/Our-team-approaches-problems-from-different-angles.svg",imgwidth:"120px",heading:"Our team approaches problems from different angles",subheading:"Our diverse skills across strategic thinking, UX design, technology, management and customer support ensures we collectively bring a wholistic approach to every project. This creative thinking helps us conceptualise our clients' vision and provide different options to solve their complex information problems.",altrow:""}}),t._v(" "),e("page-section",[e("h1",{staticClass:"text-2xl font-semibold text-center text-logiclytextgrey pb-8 lg:pb-12"},[t._v("Everyone brings something different to the team")]),t._v(" "),e("div",{staticClass:"grid grid-cols-12 text-logiclytextgrey"},[e("div",{staticClass:"col-span-12 lg:col-span-8 col-start-1 lg:col-start-3 grid grid-cols-3 grid-rows-3 gap-4 mx-0 lg:-mx-8 xl:-mx-0"},[e("div",{staticClass:"items-center col-span-1"},[e("img",{staticClass:"h-8 sm:h-12 m-auto",attrs:{src:"/Everyone_brings_something_different_to_the_team/Researchers.svg"}}),t._v(" "),e("h3",{staticClass:"text-center font-medium text-xs sm:text-sm pt-3"},[t._v("Researchers")])]),t._v(" "),e("div",{staticClass:"items-center col-span-1"},[e("img",{staticClass:"h-8 sm:h-12 m-auto",attrs:{src:"/Everyone_brings_something_different_to_the_team/Psychologists.svg"}}),t._v(" "),e("h3",{staticClass:"text-center font-medium text-xs sm:text-sm pt-3"},[t._v("Psychologists")])]),t._v(" "),e("div",{staticClass:"items-center col-span-1"},[e("img",{staticClass:"h-8 sm:h-12 m-auto",attrs:{src:"/Everyone_brings_something_different_to_the_team/Mathematicians.svg"}}),t._v(" "),e("h3",{staticClass:"text-center font-medium text-xs sm:text-sm pt-3"},[t._v("Mathematicians")])]),t._v(" "),e("div",{staticClass:"items-center col-span-1"},[e("img",{staticClass:"h-8 sm:h-12 m-auto",attrs:{src:"/Everyone_brings_something_different_to_the_team/Project_managers.svg"}}),t._v(" "),e("h3",{staticClass:"text-center font-medium text-xs sm:text-sm pt-3"},[t._v("Project Managers")])]),t._v(" "),e("div",{staticClass:"items-center col-span-1"},[e("img",{staticClass:"h-8 sm:h-12 m-auto",attrs:{src:"/Everyone_brings_something_different_to_the_team/Support.svg"}}),t._v(" "),e("h3",{staticClass:"text-center font-medium text-xs sm:text-sm pt-3"},[t._v("Support")])]),t._v(" "),e("div",{staticClass:"items-center col-span-1"},[e("img",{staticClass:"h-8 sm:h-12 m-auto",attrs:{src:"/Everyone_brings_something_different_to_the_team/Security_experts.svg"}}),t._v(" "),e("h3",{staticClass:"text-center font-medium text-xs sm:text-sm pt-3"},[t._v("Security experts")])]),t._v(" "),e("div",{staticClass:"items-center col-span-1"},[e("img",{staticClass:"h-8 sm:h-12 m-auto",attrs:{src:"/Everyone_brings_something_different_to_the_team/User_experience_design_(UX).svg"}}),t._v(" "),e("h3",{staticClass:"text-center font-medium text-xs sm:text-sm pt-3"},[t._v("User experience"),e("br"),t._v(" design (UX)")])]),t._v(" "),e("div",{staticClass:"items-center col-span-1"},[e("img",{staticClass:"h-8 sm:h-12 m-auto",attrs:{src:"/Everyone_brings_something_different_to_the_team/Interface_design_(UI).svg"}}),t._v(" "),e("h3",{staticClass:"text-center font-medium text-xs sm:text-sm pt-3"},[t._v("Interface design (UI)")])]),t._v(" "),e("div",{staticClass:"items-center col-span-1"},[e("img",{staticClass:"h-8 sm:h-12 m-auto",attrs:{src:"/Everyone_brings_something_different_to_the_team/Developers.svg"}}),t._v(" "),e("h3",{staticClass:"text-center font-medium text-xs sm:text-sm pt-3"},[t._v("Developers")])])])])]),t._v(" "),e("page-section",{attrs:{altrow:""}},[e("div",[e("h1",{staticClass:"text-2xl font-semibold text-center text-logiclytextgrey pb-8"},[t._v("Meet the people who will advise and manage your projects")])]),t._v(" "),e("div",{staticClass:"grid grid-cols-2 col-gap-6 text-logiclytextgrey"},[e("div",{staticClass:"col-span-2 lg:col-span-1 lg:col-start-1 pb-16"},[e("div",{staticClass:"col-span-1 pb-6"},[e("img",{staticClass:"p-0",attrs:{src:"/logicly-adam.jpg"}})]),t._v(" "),e("div",{staticClass:"col-span-1"},[e("h2",{staticClass:"text-lg font-bold"},[t._v("\n            Adam Clarke\n          ")]),t._v(" "),e("h3",{staticClass:"text-sm font-medium pb-4"},[t._v("\n            Director / Senior Consultant / CTO\n          ")]),t._v(" "),e("p",{staticClass:"pb-2 text-sm"},[t._v("\n            Adam has worked in information technology, data management, and software delivery since 1991 while a Psychology student at Melbourne University. For 10 years prior to that it was his hobby. Adam has a diverse set of skills including research methods, programming, database design, internet technologies, and data analysis. He is a national leader in the design, implementation and support of IT systems for minimum data sets. Adam co-founded Logicly (then Strategic Data) in 1996 and is also our CTO and technical lead, managing all the work to keep systems relevant, running, and consistent with their security requirements.\n          ")]),t._v(" "),e("p",{staticClass:"text-sm"},[t._v("\n            When away from work Adam can often be found attending local gigs and music festivals. He has also recently rekindled a childhood obsession with planted aquaria, largely in lieu of the former, thanks to COVID-19.\n          ")])])]),t._v(" "),e("div",{staticClass:"col-span-2 lg:col-span-1 lg:col-start-2 pb-16"},[e("div",{staticClass:"col-span-1 pb-6"},[e("img",{staticClass:"p-0",attrs:{src:"/logicly-andrew.jpg"}})]),t._v(" "),e("div",{staticClass:"col-span-1"},[e("h2",{staticClass:"text-lg font-bold"},[t._v("\n            Andrew Gordon\n          ")]),t._v(" "),e("h3",{staticClass:"text-sm font-medium pb-4"},[t._v("\n            Director / Business Development Manager\n          ")]),t._v(" "),e("p",{staticClass:"pb-2 text-sm"},[t._v("\n            Prior to commencing at Logicly (then Strategic Data) Andrew worked as a psychologist and in management in vocational rehabilitation. His work at Logicly has covered project management, consulting and business management. As we have grown, his focus is now HR, compliance, finance and overseeing the administration and accounts team.\n          ")]),t._v(" "),e("p",{staticClass:"text-sm"},[t._v("\n            When not at work, he likes to be out on the bay sailing, up the country cycling, overseas travelling or in the mountains skiing, otherwise he’ll be having a quiet drink in a local bar.\n          ")])])]),t._v(" "),e("div",{staticClass:"col-span-2 lg:col-span-1 lg:col-start-1 pb-16"},[e("div",{staticClass:"col-span-1 pb-6"},[e("img",{staticClass:"p-0",attrs:{src:"/logicly-simon.jpg"}})]),t._v(" "),e("div",{staticClass:"col-span-1"},[e("h2",{staticClass:"text-lg font-bold"},[t._v("\n            Simon Palmer\n          ")]),t._v(" "),e("h3",{staticClass:"text-sm font-medium pb-4"},[t._v("\n            Director / Senior Consultant\n          ")]),t._v(" "),e("p",{staticClass:"pb-2 text-sm"},[t._v("\n            Prior to co-founding Logicly (then Strategic Data), Simon's professional career shifted from social research and program evaluation to issues of computer-interface design, usability and information presentation. For 15 years he was a registered psychologist, bringing a counseling-influenced approach to the collection, management, analysis and presentation of data. Simon’s particular expertise is in identifying the information required to support an objective, and specifying technical infrastructure to enable the collection and application of relevant data.\n          ")]),t._v(" "),e("p",{staticClass:"text-sm"},[t._v("\n            In his normal life Simon likes playing the guitar, riding his bike, and discussing off-beat topics over fine dinners.\n          ")])])]),t._v(" "),e("div",{staticClass:"col-span-2 lg:col-span-1 lg:col-start-2"},[e("div",{staticClass:"col-span-1 pb-6"},[e("img",{staticClass:"p-0",attrs:{src:"/logicly-michelle.jpg"}})]),t._v(" "),e("div",{staticClass:"col-span-1"},[e("h2",{staticClass:"text-lg font-bold"},[t._v("\n            Michelle Nicholson\n          ")]),t._v(" "),e("h3",{staticClass:"text-sm font-medium pb-4"},[t._v("\n            Director / Manager, Business Operations\n          ")]),t._v(" "),e("p",{staticClass:"pb-2 text-sm"},[t._v("\n            Michelle is the newest member of Logicly’s Board of Directors.\n          ")]),t._v(" "),e("p",{staticClass:"pb-2 text-sm"},[t._v("\n            Eleven years ago Michelle started as an account manager for WebSurvey. Since then she has added WebSurvey Manager and Project Manager to her list of titles, got her hands dirty ensuring that company policies and protocols were in place (and consistent), and helped Andrew keep an eye on the finance side of things. In 2018 her company wide involvement saw her take on a tailor made role as Manager of Business Operations, and in 2021 she added ‘Director’ to the tally. Michelle gets excited by strategy, operations and a quality approach to project delivery.\n          ")]),t._v(" "),e("p",{staticClass:"text-sm"},[t._v("\n            On the weekends Michelle can be found (or not) hiking in the bush, visiting art galleries, or drinking coffee.\n          ")])])])])]),t._v(" "),e("CTA",{attrs:{text:"View projects we've collaborated on",buttonText:"Projects",buttonLink:"/projects"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Hero:n(382).default,Herotext:n(384).default,PageSection:n(370).default,CTA:n(390).default})}}]);