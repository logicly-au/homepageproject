(window.webpackJsonp=window.webpackJsonp||[]).push([[19,2,5,9,14],{254:function(t,e,n){"use strict";n.r(e);var o={name:"PageSection",props:{altrow:Boolean,normal:Boolean,overlay:Boolean,nooverlay:Boolean,black:Boolean,noblack:Boolean}},r=(n(257),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-full",class:{"bg-logiclylightgrey":t.altrow,"!bg-logiclylightgrey":t.normal}},[e("div",{staticClass:"object-contain object-center w-full h-full bg-cover",class:{"bg-black bg-opacity-40":t.overlay}},[e("div",{staticClass:"container h-full mx-auto"},[e("div",{staticClass:"grid h-full py-16 md:py-20 grid-cols-12 md:grid-cols-15 px-6 md:px-0 mobileres"},[e("div",{staticClass:"flex flex-col justify-center col-span-10 col-start-2 md:col-span-9 md:col-start-4"},[t._t("default")],2)])])])])}),[],!1,null,"2c60def4",null);e.default=component.exports},255:function(t,e,n){var content=n(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("7eaa22dc",content,!0,{sourceMap:!1})},256:function(t,e,n){var content=n(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("be620aee",content,!0,{sourceMap:!1})},257:function(t,e,n){"use strict";n(255)},258:function(t,e,n){var o=n(18)(!1);o.push([t.i,"@media only screen and (max-width:500px){.mobileres[data-v-2c60def4]{padding-left:.5rem;padding-right:.5rem}}",""]),t.exports=o},259:function(t,e,n){"use strict";n.r(e);var o=n(13),r=(n(35),n(100),n(263),n(260),{name:"VueAspectRatio",props:{ar:{type:String,default:"1:1",validator:function(t){var e=t.split(":").map((function(t){return parseInt(t)})),n=Object(o.a)(e,2),r=n[0],l=n[1];return!Number.isNaN(r)&&!Number.isNaN(l)}},width:String},data:function(){return{w:null,h:null}},computed:{componentStyle:function(){return this.width?{width:this.width}:{}},innerStyle:function(){return{paddingTop:this.h/this.w*100+"%"}}},created:function(){var t=this.ar.split(":").map((function(t){return parseInt(t)})),e=Object(o.a)(t,2),n=e[0],r=e[1];this.w=n,this.h=r}}),l=(n(264),n(3)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vue-aspect-ratio",style:t.componentStyle},[e("div",{staticClass:"vue-aspect-ratio__inner",style:t.innerStyle},[e("div",{staticClass:"vue-aspect-ratio__content"},[t._t("default")],2)])])}),[],!1,null,"007c4c7c",null);e.default=component.exports},260:function(t,e,n){"use strict";var o=n(6),r=n(36),l=n(37),c=n(161),d=n(78),f=n(12),v=n(59).f,h=n(60).f,m=n(15).f,x=n(261).trim,y="Number",w=o.Number,_=w,C=w.prototype,k=l(n(99)(C))==y,N="trim"in String.prototype,S=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,o,r,l=(e=N?e.trim():x(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>r)return NaN;return parseInt(c,o)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(k?f((function(){C.valueOf.call(n)})):l(n)!=y)?c(new _(S(e)),n,w):S(e)};for(var I,j=n(10)?v(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;j.length>A;A++)r(_,I=j[A])&&!r(w,I)&&m(w,I,h(_,I));w.prototype=C,C.constructor=w,n(20)(o,y,w)}},261:function(t,e,n){var o=n(5),r=n(41),l=n(12),c=n(262),d="["+c+"]",f=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),h=function(t,e,n){var r={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),f=r[t]=d?e(m):c[t];n&&(r[n]=f),o(o.P+o.F*d,"String",r)},m=h.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(v,"")),t};t.exports=h},262:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},263:function(t,e,n){var o=n(5);o(o.S,"Number",{isNaN:function(t){return t!=t}})},264:function(t,e,n){"use strict";n(256)},265:function(t,e,n){var o=n(18)(!1);o.push([t.i,".vue-aspect-ratio__inner[data-v-007c4c7c]{position:relative}.vue-aspect-ratio__content[data-v-007c4c7c]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=o},266:function(t,e,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("7d16d390",content,!0,{sourceMap:!1})},267:function(t,e,n){"use strict";n(266)},268:function(t,e,n){var o=n(18)(!1);o.push([t.i,"@media only screen and (max-width:520px){.textresponsive div[data-v-c6337172]{margin-top:-.7rem;margin-left:2rem;margin-right:2rem}}@media only screen and (max-width:450px){.textresponsive div[data-v-c6337172]{margin-top:-1.2rem}}@media only screen and (max-width:410px){.textresponsive div[data-v-c6337172]{margin-top:-2rem}.textresponsive div h1[data-v-c6337172]{font-size:.8rem}.textresponsive div h2[data-v-c6337172]{font-size:.9rem}}",""]),t.exports=o},269:function(t,e,n){"use strict";n.r(e);var o={name:"Hero",props:{heading:String,subheading:String,pageheroheading:String,backgroundUrl:String,right:Boolean,blacktext:Boolean,whitetext:Boolean,altrow:Boolean,overlay:Boolean}},r=(n(267),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("AspectRatio",{style:{backgroundSize:"cover",backgroundImage:"url(".concat(t.backgroundUrl,")")},attrs:{ar:"13:4",width:"100%"}},[e("page-section",{attrs:{altrow:t.altrow,overlay:t.overlay}},[e("div",{staticClass:"w-full h-full textresponsive grid content-center"},[e("div",{staticClass:"mt-0"},[e("h1",{staticClass:"text-xs md:text-sm xl:text-base font-medium text-center text-white"},[t._v(t._s(t.heading))]),t._v(" "),e("h2",{staticClass:"text-base sm:text-lg md:text-xl xl:text-2xl font-semibold text-center leading-tight text-white"},[t._v(t._s(t.subheading))]),t._v(" "),e("h1",{staticClass:"text-base sm:text-lg lg:text-xl text-center text-white"},[t._v(t._s(t.pageheroheading))])])])])],1)}),[],!1,null,"c6337172",null);e.default=component.exports;installComponents(component,{PageSection:n(254).default,AspectRatio:n(259).default})},271:function(t,e,n){"use strict";n.r(e);var o={name:"Hero",props:{heading:String,subheading:String,iconurl:String,altrow:Boolean,imgwidth:String}},r=n(3),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("page-section",{staticClass:"lg:py-8",attrs:{altrow:t.altrow}},[e("div",{staticClass:"flex justify-center"},[e("div",{staticClass:"justify-center mb-6"},[e("img",{attrs:{width:t.imgwidth,src:t.iconurl}})])]),t._v(" "),e("div",{staticClass:"px-0 xl:px-6"},[e("div",{staticClass:"text-center text-logiclytextgrey"},[e("h1",{staticClass:"text-2xl font-semibold leading-snug text-center pb-2 pt-4 xl:pt-8"},[t._v(t._s(t.heading))]),t._v(" "),e("h2",{staticClass:"font-light text-lg"},[t._v(t._s(t.subheading))])])])])}),[],!1,null,"96bf9eac",null);e.default=component.exports;installComponents(component,{PageSection:n(254).default})},386:function(t,e,n){"use strict";n.r(e);var o={head:function(){return{title:"Our culture · Logicly"}}},r=n(3),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("Hero",{attrs:{heading:"OUR CULTURE",subheading:"Everyone has a say","background-url":"/Logicly-Our-culture-header-everyone-has-a-say.jpg",overlay:""}}),t._v(" "),e("Herotext",{attrs:{iconurl:"/Together-at-logicly.svg",imgwidth:"90px",heading:"Together at Logicly",subheading:"We are a diverse team who encourages sharing of knowledge and ideas to always improve, streamline our way of working and add value to the systems we design and build for our clients.",altrow:""}}),t._v(" "),e("page-section",[e("h1",{staticClass:"pb-10 text-2xl font-semibold text-center text-logiclytextgrey"},[t._v("We continually build, share and leverage our knowledge")]),t._v(" "),e("img",{staticClass:"p-0 mb-4",attrs:{src:"/Continually-build-share-leverage-our-knowledge.jpg"}}),t._v(" "),e("div",{staticClass:"grid grid-cols-8 gap-6 mt-8 -mb-16 lg:gap-x-12 lg:gap-y-10 text-logiclytextgrey lg:-mb-10"},[e("div",{staticClass:"col-span-8 lg:col-span-4"},[e("h2",{staticClass:"pb-1 text-lg font-bold"},[t._v("A family environment")]),t._v(" "),e("p",{staticClass:"font-light"},[t._v("At Logicly, we create a workplace where everyone feels welcome and encouraged to produce their best work. We have a flat structure where discussions and sharing of ideas is encouraged. The directors join in, listening and contributing to the mix of feedback and suggestions for improvements. The senior staff mentor the less experienced to share their skills and knowledge.")])]),t._v(" "),e("div",{staticClass:"col-span-8 lg:col-span-4 lg:col-start-5"},[e("h2",{staticClass:"pb-1 text-lg font-bold"},[t._v("The freedom to try new things")]),t._v(" "),e("p",{staticClass:"font-light"},[t._v("Logicly is all about the spirit of exploration, being playful with technology and discovering new ways of doing things that are quicker, easier or more suited for our team or clients. We believe that growth and knowledge comes from having a curious nature and we encourage our team to discover, experiment and learn from our successes, failures and each other.")])]),t._v(" "),e("div",{staticClass:"col-span-8 lg:col-span-4"},[e("h2",{staticClass:"pb-1 text-lg font-bold"},[t._v("Work/life balance")]),t._v(" "),e("p",{staticClass:"font-light"},[t._v("We believe that quality time outside the office is vital to our employees’ satisfaction at work. That’s why we offer flexitime to support family and study needs. A normal working day and taking time off to remain refreshed is encouraged.")])]),t._v(" "),e("div",{staticClass:"col-span-8 lg:col-span-4 lg:col-start-5"},[e("h2",{staticClass:"pb-1 text-lg font-bold"},[t._v("Pride and openness in what we do")]),t._v(" "),e("p",{staticClass:"font-light"},[t._v("From the start of a project we’re invested in meeting the needs of our clients and making sure we are the best fit for the work. We give realistic expectations and timings for a project or stage and will always communicate any concerns. We go the extra mile to get the product right.")])])])]),t._v(" "),e("page-section",[e("div",{staticClass:"grid grid-cols-12 bg-logiclylightgrey"},[e("div",{staticClass:"col-span-12"},[e("img",{staticClass:"p-0 mb-5",attrs:{src:"/Join-our-team.jpg"}})]),t._v(" "),e("div",{staticClass:"col-span-10 col-start-2 mt-4 lg:mt-8"},[e("h1",{staticClass:"mb-1 text-2xl font-semibold lg:mb-4 text-logiclytheme2"},[t._v("Join our team")])]),t._v(" "),e("div",{staticClass:"col-span-10 col-start-2 mb-4 lg:col-span-5 lg:col-start-2"},[e("h2",{staticClass:"pr-0 text-xl font-semibold leading-snug text-logiclytextgrey lg:pr-8"},[t._v("Are you excited about learning, sharing knowledge and solving information problems?")])]),t._v(" "),e("div",{staticClass:"col-span-10 col-start-2 pb-8 mb-5 lg:col-span-5 lg:col-start-7 lg:pb-12"},[e("p",{staticClass:"pb-6 text-logiclytextgrey lg:pb-8"},[t._v("Logicly is always looking for strategic thinkers, designers and technology experts interested in working collaboratively to develop digital systems that improve businesses, government departments and communities.")]),t._v(" "),e("NuxtLink",{staticClass:"block p-3 font-medium text-center text-white lowercase bg-logiclyorange hover:bg-logiclyhover",attrs:{to:"/contactus"}},[t._v("Enquire about joining us")])],1)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Hero:n(269).default,Herotext:n(271).default,PageSection:n(254).default})}}]);