(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,14],{254:function(t,e,r){"use strict";r.r(e);var n={name:"PageSection",props:{altrow:Boolean,normal:Boolean,overlay:Boolean,nooverlay:Boolean,black:Boolean,noblack:Boolean}},o=(r(257),r(3)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-full",class:{"bg-logiclylightgrey":t.altrow,"!bg-logiclylightgrey":t.normal}},[e("div",{staticClass:"object-contain object-center w-full h-full bg-cover",class:{"bg-black bg-opacity-40":t.overlay}},[e("div",{staticClass:"container h-full mx-auto"},[e("div",{staticClass:"grid h-full py-16 md:py-20 grid-cols-12 md:grid-cols-15 px-6 md:px-0 mobileres"},[e("div",{staticClass:"flex flex-col justify-center col-span-10 col-start-2 md:col-span-9 md:col-start-4"},[t._t("default")],2)])])])])}),[],!1,null,"2c60def4",null);e.default=component.exports},255:function(t,e,r){var content=r(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("7eaa22dc",content,!0,{sourceMap:!1})},256:function(t,e,r){var content=r(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("be620aee",content,!0,{sourceMap:!1})},257:function(t,e,r){"use strict";r(255)},258:function(t,e,r){var n=r(18)(!1);n.push([t.i,"@media only screen and (max-width:500px){.mobileres[data-v-2c60def4]{padding-left:.5rem;padding-right:.5rem}}",""]),t.exports=n},259:function(t,e,r){"use strict";r.r(e);var n=r(13),o=(r(35),r(100),r(263),r(260),{name:"VueAspectRatio",props:{ar:{type:String,default:"1:1",validator:function(t){var e=t.split(":").map((function(t){return parseInt(t)})),r=Object(n.a)(e,2),o=r[0],l=r[1];return!Number.isNaN(o)&&!Number.isNaN(l)}},width:String},data:function(){return{w:null,h:null}},computed:{componentStyle:function(){return this.width?{width:this.width}:{}},innerStyle:function(){return{paddingTop:this.h/this.w*100+"%"}}},created:function(){var t=this.ar.split(":").map((function(t){return parseInt(t)})),e=Object(n.a)(t,2),r=e[0],o=e[1];this.w=r,this.h=o}}),l=(r(264),r(3)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vue-aspect-ratio",style:t.componentStyle},[e("div",{staticClass:"vue-aspect-ratio__inner",style:t.innerStyle},[e("div",{staticClass:"vue-aspect-ratio__content"},[t._t("default")],2)])])}),[],!1,null,"007c4c7c",null);e.default=component.exports},260:function(t,e,r){"use strict";var n=r(6),o=r(36),l=r(37),c=r(161),d=r(78),f=r(12),m=r(59).f,v=r(60).f,h=r(15).f,x=r(261).trim,y="Number",_=n.Number,N=_,w=_.prototype,I=l(r(99)(w))==y,S="trim"in String.prototype,k=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,l=(e=S?e.trim():x(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,n)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof _&&(I?f((function(){w.valueOf.call(r)})):l(r)!=y)?c(new N(k(e)),r,_):k(e)};for(var C,A=r(10)?m(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;A.length>E;E++)o(N,C=A[E])&&!o(_,C)&&h(_,C,v(N,C));_.prototype=w,w.constructor=_,r(20)(n,y,_)}},261:function(t,e,r){var n=r(5),o=r(41),l=r(12),c=r(262),d="["+c+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),v=function(t,e,r){var o={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),f=o[t]=d?e(h):c[t];r&&(o[r]=f),n(n.P+n.F*d,"String",o)},h=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(m,"")),t};t.exports=v},262:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},263:function(t,e,r){var n=r(5);n(n.S,"Number",{isNaN:function(t){return t!=t}})},264:function(t,e,r){"use strict";r(256)},265:function(t,e,r){var n=r(18)(!1);n.push([t.i,".vue-aspect-ratio__inner[data-v-007c4c7c]{position:relative}.vue-aspect-ratio__content[data-v-007c4c7c]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=n},285:function(t,e,r){var content=r(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("3b9d0678",content,!0,{sourceMap:!1})},296:function(t,e,r){"use strict";r(285)},297:function(t,e,r){var n=r(18)(!1);n.push([t.i,"@media only screen and (max-width:519px){.textresponsiveblack div[data-v-e5b74d8e]{margin-left:-1rem;margin-right:-1rem}}@media only screen and (max-width:450px){.textresponsiveblack div[data-v-e5b74d8e]{margin-left:-1.5rem;margin-right:-1.5rem}.textresponsiveblack h1[data-v-e5b74d8e]{font-size:.9rem}}@media only screen and (max-width:380px){.textresponsiveblack div[data-v-e5b74d8e]{margin-left:-3rem;margin-right:-3rem}}",""]),t.exports=n},319:function(t,e,r){"use strict";r.r(e);var n={name:"Hero",props:{heading:String,backgroundUrl:String,altrow:Boolean,overlay:Boolean}},o=(r(296),r(3)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("AspectRatio",{style:{backgroundSize:"cover",backgroundImage:"url(".concat(t.backgroundUrl,")")},attrs:{ar:"3:1",width:"100%"}},[e("page-section",{attrs:{altrow:t.altrow,overlay:t.overlay}},[e("div",{staticClass:"-mt-20 sm:-mt-32 md:-mt-40 lg:-mt-48 mx-12 sm:mx-20 md:mx-24 lg:mx-40 xl:mx-56 px-8 md:px-0 xl:px-2 textresponsiveblack"},[e("div",[e("h1",{staticClass:"text-base sm:text-lg lg:text-xl font-semibold text-center text-black"},[t._v(t._s(t.heading))])])])])],1)}),[],!1,null,"e5b74d8e",null);e.default=component.exports;installComponents(component,{PageSection:r(254).default,AspectRatio:r(259).default})}}]);