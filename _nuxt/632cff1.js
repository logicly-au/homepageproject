(window.webpackJsonp=window.webpackJsonp||[]).push([[18,2,3,4,5,8,9,14],{254:function(t,e,n){"use strict";n.r(e);var r={name:"PageSection",props:{altrow:Boolean,normal:Boolean,overlay:Boolean,nooverlay:Boolean,black:Boolean,noblack:Boolean}},o=(n(257),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-full",class:{"bg-logiclylightgrey":t.altrow,"!bg-logiclylightgrey":t.normal}},[n("div",{staticClass:"object-contain object-center w-full h-full bg-cover",class:{"bg-black bg-opacity-40":t.overlay}},[n("div",{staticClass:"container h-full mx-auto"},[n("div",{staticClass:"grid h-full py-16 md:py-20 grid-cols-12 md:grid-cols-15 px-6 md:px-0 mobileres"},[n("div",{staticClass:"flex flex-col justify-center col-span-10 col-start-2 md:col-span-9 md:col-start-4"},[t._t("default")],2)])])])])}),[],!1,null,"2c60def4",null);e.default=component.exports},255:function(t,e,n){var content=n(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("41e69dda",content,!0,{sourceMap:!1})},256:function(t,e,n){var content=n(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("5310b0e0",content,!0,{sourceMap:!1})},257:function(t,e,n){"use strict";n(255)},258:function(t,e,n){var r=n(18)(!1);r.push([t.i,"@media only screen and (max-width:500px){.mobileres[data-v-2c60def4]{padding-left:.5rem;padding-right:.5rem}}",""]),t.exports=r},259:function(t,e,n){"use strict";n.r(e);var r=n(13),o=(n(35),n(100),n(263),n(260),{name:"VueAspectRatio",props:{ar:{type:String,default:"1:1",validator:function(t){var e=t.split(":").map((function(t){return parseInt(t)})),n=Object(r.a)(e,2),o=n[0],l=n[1];return!Number.isNaN(o)&&!Number.isNaN(l)}},width:String},data:function(){return{w:null,h:null}},computed:{componentStyle:function(){return this.width?{width:this.width}:{}},innerStyle:function(){return{paddingTop:this.h/this.w*100+"%"}}},created:function(){var t=this.ar.split(":").map((function(t){return parseInt(t)})),e=Object(r.a)(t,2),n=e[0],o=e[1];this.w=n,this.h=o}}),l=(n(264),n(3)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-aspect-ratio",style:t.componentStyle},[n("div",{staticClass:"vue-aspect-ratio__inner",style:t.innerStyle},[n("div",{staticClass:"vue-aspect-ratio__content"},[t._t("default")],2)])])}),[],!1,null,"007c4c7c",null);e.default=component.exports},260:function(t,e,n){"use strict";var r=n(6),o=n(36),l=n(37),c=n(161),d=n(78),h=n(12),m=n(58).f,f=n(59).f,x=n(15).f,v=n(261).trim,_="Number",w=r.Number,y=w,C=w.prototype,S=l(n(99)(C))==_,k="trim"in String.prototype,N=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=k?e.trim():v(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,h=c.length;i<h;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(S?h((function(){C.valueOf.call(n)})):l(n)!=_)?c(new y(N(e)),n,w):N(e)};for(var I,j=n(10)?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;j.length>E;E++)o(y,I=j[E])&&!o(w,I)&&x(w,I,f(y,I));w.prototype=C,C.constructor=w,n(20)(r,_,w)}},261:function(t,e,n){var r=n(5),o=n(41),l=n(12),c=n(262),d="["+c+"]",h=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),f=function(t,e,n){var o={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),h=o[t]=d?e(x):c[t];n&&(o[n]=h),r(r.P+r.F*d,"String",o)},x=f.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(m,"")),t};t.exports=f},262:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},263:function(t,e,n){var r=n(5);r(r.S,"Number",{isNaN:function(t){return t!=t}})},264:function(t,e,n){"use strict";n(256)},265:function(t,e,n){var r=n(18)(!1);r.push([t.i,".vue-aspect-ratio__inner[data-v-007c4c7c]{position:relative}.vue-aspect-ratio__content[data-v-007c4c7c]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=r},266:function(t,e,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("8282b48e",content,!0,{sourceMap:!1})},267:function(t,e,n){"use strict";n(266)},268:function(t,e,n){var r=n(18)(!1);r.push([t.i,"@media only screen and (max-width:520px){.textresponsive div[data-v-c6337172]{margin-top:-.7rem;margin-left:2rem;margin-right:2rem}}@media only screen and (max-width:450px){.textresponsive div[data-v-c6337172]{margin-top:-1.2rem}}@media only screen and (max-width:410px){.textresponsive div[data-v-c6337172]{margin-top:-2rem}.textresponsive div h1[data-v-c6337172]{font-size:.8rem}.textresponsive div h2[data-v-c6337172]{font-size:.9rem}}",""]),t.exports=r},269:function(t,e,n){"use strict";n.r(e);var r={name:"Hero",props:{heading:String,subheading:String,pageheroheading:String,backgroundUrl:String,right:Boolean,blacktext:Boolean,whitetext:Boolean,altrow:Boolean,overlay:Boolean}},o=(n(267),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AspectRatio",{style:{backgroundSize:"cover",backgroundImage:"url("+t.backgroundUrl+")"},attrs:{ar:"13:4",width:"100%"}},[n("page-section",{attrs:{altrow:t.altrow,overlay:t.overlay}},[n("div",{staticClass:"w-full h-full textresponsive grid content-center"},[n("div",{staticClass:"mt-0"},[n("h1",{staticClass:"text-xs md:text-sm xl:text-base font-medium text-center text-white"},[t._v(t._s(t.heading))]),t._v(" "),n("h2",{staticClass:"text-base sm:text-lg md:text-xl xl:text-2xl font-semibold text-center leading-tight text-white"},[t._v(t._s(t.subheading))]),t._v(" "),n("h1",{staticClass:"text-base sm:text-lg lg:text-xl text-center text-white"},[t._v(t._s(t.pageheroheading))])])])])],1)}),[],!1,null,"c6337172",null);e.default=component.exports;installComponents(component,{PageSection:n(254).default,AspectRatio:n(259).default})},270:function(t,e,n){var content=n(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("0ef0ef81",content,!0,{sourceMap:!1})},271:function(t,e,n){"use strict";n.r(e);var r={name:"Hero",props:{heading:String,subheading:String,iconurl:String,altrow:Boolean,imgwidth:String}},o=n(3),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-section",{staticClass:" lg:py-8",attrs:{altrow:t.altrow}},[n("div",{staticClass:"flex justify-center "},[n("div",{staticClass:"justify-center mb-6"},[n("img",{attrs:{width:t.imgwidth,src:t.iconurl}})])]),t._v(" "),n("div",{staticClass:"px-0 xl:px-6"},[n("div",{staticClass:"text-center text-logiclytextgrey"},[n("h1",{staticClass:"text-2xl font-semibold leading-snug text-center pb-2 pt-4 xl:pt-8"},[t._v(t._s(t.heading))]),t._v(" "),n("h2",{staticClass:"font-light text-lg"},[t._v(t._s(t.subheading))])])])])}),[],!1,null,"96bf9eac",null);e.default=component.exports;installComponents(component,{PageSection:n(254).default})},272:function(t,e,n){"use strict";n(270)},273:function(t,e,n){var r=n(18)(!1);r.push([t.i,"button>a[data-v-03699575]{text-transform:lowercase!important}",""]),t.exports=r},274:function(t,e,n){"use strict";n.r(e);var r={name:"CTA",props:{text:String,buttonLink:String,buttonText:String}},o=(n(272),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-section",[n("div",{staticClass:"content-center object-contain object-center w-full text-logiclytextgrey"},[n("h1",{staticClass:"text-2xl font-semibold leading-snug text-center text-logiclytextgrey"},[t._v(t._s(t.text))]),t._v(" "),n("div",{staticClass:"grid justify-center pt-4 align-center"},[n("button",{staticClass:"block w-40 h-12 my-5 font-medium text-center text-white bg-logiclyorange hover:bg-logiclyhover"},[n("NuxtLink",{attrs:{to:t.buttonLink}},[t._v(t._s(t.buttonText))])],1)])])])}),[],!1,null,"03699575",null);e.default=component.exports;installComponents(component,{Button:n(101).default,PageSection:n(254).default})},276:function(t,e,n){var content=n(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("45fcfb9d",content,!0,{sourceMap:!1})},283:function(t,e,n){"use strict";n(276)},284:function(t,e,n){var r=n(18)(!1);r.push([t.i,"@media only screen and (max-width:500px){div.textresponsive[data-v-5c31a48a]{margin-top:.7rem;padding-right:.2rem}}@media only screen and (max-width:424px){div.textresponsive[data-v-5c31a48a]{margin-top:.5rem;padding-right:0;margin-left:0;margin-right:-1.5rem}}@media only screen and (max-width:370px){div.textresponsive[data-v-5c31a48a]{margin-top:.3rem;padding-right:0;margin-left:-.5rem;margin-right:-1.8rem}}@media only screen and (max-width:500px){div.textresponsivemidpage[data-v-5c31a48a]{margin-top:.7rem;padding-right:.2rem;margin-left:-.5rem;margin-right:-.5rem}}@media only screen and (max-width:424px){div.textresponsivemidpage[data-v-5c31a48a]{margin-top:.5rem;padding-right:0}}@media only screen and (max-width:370px){div.textresponsivemidpage[data-v-5c31a48a]{margin-top:.3rem;padding-right:0}}",""]),t.exports=r},288:function(t,e,n){"use strict";n.r(e);var r={name:"HeroRight",props:{heading:String,subheading:String,midpageheading:String,backgroundUrl:String,right:Boolean,blacktext:Boolean,whitetext:Boolean,altrow:Boolean,overlay:Boolean}},o=(n(283),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AspectRatio",{style:{backgroundSize:"cover",backgroundImage:"url("+t.backgroundUrl+")"},attrs:{ar:"3:1",width:"100%"}},[n("div",{staticClass:"grid grid-cols-8 w-full h-full"},[n("div",{staticClass:"col-span-4 md:col-span-3 lg:col-span-2 col-start-5 md:col-start-5 lg:col-start-5 grid grid-rows-5 pr-12 sm:pr-20 md:pr-0 lg:-mr-10 pl-0 md:pl-8 lg:pl-16 xl:pl-20 "},[n("div",{staticClass:"row-start-1 md:row-start-2 mt-4 sm:mt-10 md:mt-0 md:-mt-4 textresponsive"},[n("h1",{staticClass:"font-normal sm:font-medium text-white text-xs md:text-sm xl:text-base"},[t._v(t._s(t.heading))]),t._v(" "),n("h2",{staticClass:"leading-tight md:leading-normal font-medium sm:font-semibold text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"},[t._v(t._s(t.subheading))])]),t._v(" "),n("div",{staticClass:"row-start-1 row-span-5 flex flex-wrap content-center textresponsivemidpage"},[n("h1",{staticClass:"text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal xl:font-medium text-white pl-2 lg:pl-0 -mr-8 lg:-mr-0"},[t._v(t._s(t.midpageheading))])])])])])}),[],!1,null,"5c31a48a",null);e.default=component.exports;installComponents(component,{AspectRatio:n(259).default})},316:function(t,e,n){"use strict";n.r(e);var r={name:"GridText",props:{heading:String,subheading1:String,subheading2:String,subheading3:String,subheading4:String,subheading5:String,subheading6:String,text1a:String,text1b:String,text2a:String,text2b:String,text3a:String,text3b:String,text4a:String,text4b:String,text5a:String,text5b:String,text6a:String,text6b:String}},o=n(3),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-section",{attrs:{altrow:t.altrow}},[n("div",{staticClass:"object-contain object-center w-full text-logiclytextgrey"},[n("div",[n("h2",{staticClass:"text-2xl font-semibold text-center"},[t._v(t._s(t.heading))])]),t._v(" "),n("div",{staticClass:"my-8 lg:my-12 -mx-0 lg:-mx-16 xl:-mx-0"},[n("div",{staticClass:"grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6 lg:pb-16"},[n("div",{staticClass:"col-span-1 pb-8 lg:pb-0"},[n("p",{staticClass:"text-lg font-semibold pb-2"},[t._v("\n                "+t._s(t.subheading1)+"\n              ")]),t._v(" "),n("p",{staticClass:"font-light pb-1"},[t._v("\n                "+t._s(t.text1a)+"\n              ")]),t._v(" "),n("p",{staticClass:"font-light"},[t._v("\n                "+t._s(t.text1b)+"\n              ")])]),t._v(" "),n("div",{staticClass:"col-span-1 pb-8 lg:pb-0"},[n("p",{staticClass:"text-lg font-semibold pb-2"},[t._v("\n                "+t._s(t.subheading2)+"\n              ")]),t._v(" "),n("p",{staticClass:"font-light pb-1"},[t._v("\n                "+t._s(t.text2a)+"\n              ")]),t._v(" "),n("p",{staticClass:"font-light"},[t._v("\n                "+t._s(t.text2b)+"\n              ")])]),t._v(" "),n("div",{staticClass:"col-span-1 pb-8 lg:pb-0"},[n("p",{staticClass:"text-lg font-semibold pb-2"},[t._v("\n                "+t._s(t.subheading3)+"\n              ")]),t._v(" "),n("p",{staticClass:"font-light pb-1"},[t._v("\n                "+t._s(t.text3a)+"\n              ")]),t._v(" "),n("p",{staticClass:"font-light"},[t._v("\n                "+t._s(t.text3b)+"\n              ")])])]),t._v(" "),n("div",{staticClass:"grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6 lg:pb-20"},[n("div",{staticClass:"col-span-1 pb-8 lg:pb-0"},[n("p",{staticClass:"text-lg font-semibold pb-2"},[t._v("\n                "+t._s(t.subheading4)+"\n              ")]),t._v(" "),n("p",{staticClass:"font-light pb-1"},[t._v("\n                "+t._s(t.text4a)+"\n              ")]),t._v(" "),n("p",{staticClass:"font-light"},[t._v("\n                "+t._s(t.text4b)+"\n              ")])]),t._v(" "),n("div",{staticClass:"col-span-1 pb-8 lg:pb-0"},[n("p",{staticClass:"text-lg font-semibold pb-2"},[t._v("\n                "+t._s(t.subheading5)+"\n              ")]),t._v(" "),n("p",{staticClass:"font-light pb-1"},[t._v("\n                "+t._s(t.text5a)+"\n              ")]),t._v(" "),n("p",{staticClass:"font-light"},[t._v("\n                "+t._s(t.text5b)+"\n              ")])]),t._v(" "),n("div",{staticClass:"col-span-1"},[n("p",{staticClass:"text-lg font-semibold pb-2"},[t._v("\n                "+t._s(t.subheading6)+"\n              ")]),t._v(" "),n("p",{staticClass:"font-light pb-1"},[t._v("\n                "+t._s(t.text6a)+"\n              ")]),t._v(" "),n("p",{staticClass:"font-light"},[t._v("\n                "+t._s(t.text6b)+"\n              ")])])])])])])}),[],!1,null,"5fddb2de",null);e.default=component.exports;installComponents(component,{PageSection:n(254).default})},377:function(t,e,n){"use strict";n.r(e);var r={head:function(){return{title:"Our approach · Logicly"}}},o=n(3),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Heroright",{attrs:{heading:"OUR APPROACH",subheading:"Understanding both the detail and larger picture","background-url":"/Logicly-our-approach-header-understanding-both-the-detail-and-larger-picture.jpg"}}),t._v(" "),n("Herotext",{attrs:{iconurl:"/Dissecting_your_information_problems.svg",imgwidth:"105px",heading:"We start by dissecting your information problems",subheading:"We help you navigate through your complex information problem and explore ideas and possibilities. We look at the larger context of your situation and recommend different approaches to research, design, develop, implement and maintain your digital system.",altrow:""}}),t._v(" "),n("GridText",{attrs:{heading:"We consider each project in the same way",subheading1:"Discovery",text1a:"We always take time at the start to deeply understand our clients' information problems but also pinpoint what they want to achieve and why.",text1b:"This holistic view helps us determine the right approach and the different pathways to meet their needs for now and the future.",subheading2:"Clear explanations",text2a:"We break down complex IT concepts into simple, straight forward explanations and stay clear from technical terms.",text2b:"We want our clients to clearly understand our approach and the benefits so they can make a fully informed decision.",subheading3:"Creating efficiencies",text3a:"We review how clients are working with their information and design and build digital systems that are faster, have checks and balances, and reduce human error. We use automated processes to cut costs in time and mistakes.",text3b:"",subheading4:"Sharing knowledge",text4a:"We achieve the best outcomes when we’re part of your team and understand the needs of everyone involved.",text4b:"We enjoy sharing our expertise and supporting our clients to develop their own capabilities.",subheading5:"No short cuts",text5a:"We won’t build a system without considering the context, but we also understand that there are times when you need to take a bypass.",text5b:"Our experience means we know when to raise issues with clients and how to help you manage the risks.",subheading6:"Intuitive, user friendly design",text6a:"We ensure the user is at the centre of any decisions when designing, developing and editing a digital system.",text6b:"Our team of UI, UX designers and staff with backgrounds in psychology, all work to ensure there are no barriers to access information for all users."}}),t._v(" "),n("Hero",{attrs:{pageheroheading:"It’s like a puzzle, gathering and piecing together all the information with clarity","background-url":"/Gathering-and-piecing-together-all-the-information-with-clarity.png"}}),t._v(" "),n("CTA",{attrs:{text:"View projects that bring our philosophy to life",buttonText:"Projects",buttonLink:"/projects"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Heroright:n(288).default,Herotext:n(271).default,GridText:n(316).default,Hero:n(269).default,CTA:n(274).default})}}]);