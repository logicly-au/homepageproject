(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,14],{254:function(t,e,n){"use strict";n.r(e);var r={name:"PageSection",props:{altrow:Boolean,normal:Boolean,overlay:Boolean,nooverlay:Boolean,black:Boolean,noblack:Boolean}},o=(n(257),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-full",class:{"bg-logiclylightgrey":t.altrow,"!bg-logiclylightgrey":t.normal}},[e("div",{staticClass:"object-contain object-center w-full h-full bg-cover",class:{"bg-black bg-opacity-40":t.overlay}},[e("div",{staticClass:"container h-full mx-auto"},[e("div",{staticClass:"grid h-full py-16 md:py-20 grid-cols-12 md:grid-cols-15 px-6 md:px-0 mobileres"},[e("div",{staticClass:"flex flex-col justify-center col-span-10 col-start-2 md:col-span-9 md:col-start-4"},[t._t("default")],2)])])])])}),[],!1,null,"2c60def4",null);e.default=component.exports},255:function(t,e,n){var content=n(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("7eaa22dc",content,!0,{sourceMap:!1})},256:function(t,e,n){var content=n(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("be620aee",content,!0,{sourceMap:!1})},257:function(t,e,n){"use strict";n(255)},258:function(t,e,n){var r=n(18)(!1);r.push([t.i,"@media only screen and (max-width:500px){.mobileres[data-v-2c60def4]{padding-left:.5rem;padding-right:.5rem}}",""]),t.exports=r},259:function(t,e,n){"use strict";n.r(e);var r=n(13),o=(n(35),n(100),n(263),n(260),{name:"VueAspectRatio",props:{ar:{type:String,default:"1:1",validator:function(t){var e=t.split(":").map((function(t){return parseInt(t)})),n=Object(r.a)(e,2),o=n[0],l=n[1];return!Number.isNaN(o)&&!Number.isNaN(l)}},width:String},data:function(){return{w:null,h:null}},computed:{componentStyle:function(){return this.width?{width:this.width}:{}},innerStyle:function(){return{paddingTop:this.h/this.w*100+"%"}}},created:function(){var t=this.ar.split(":").map((function(t){return parseInt(t)})),e=Object(r.a)(t,2),n=e[0],o=e[1];this.w=n,this.h=o}}),l=(n(264),n(3)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vue-aspect-ratio",style:t.componentStyle},[e("div",{staticClass:"vue-aspect-ratio__inner",style:t.innerStyle},[e("div",{staticClass:"vue-aspect-ratio__content"},[t._t("default")],2)])])}),[],!1,null,"007c4c7c",null);e.default=component.exports},260:function(t,e,n){"use strict";var r=n(6),o=n(36),l=n(37),c=n(161),d=n(78),f=n(12),v=n(59).f,h=n(60).f,m=n(15).f,x=n(261).trim,_="Number",y=r.Number,w=y,N=y.prototype,I=l(n(99)(N))==_,S="trim"in String.prototype,C=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=S?e.trim():x(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(I?f((function(){N.valueOf.call(n)})):l(n)!=_)?c(new w(C(e)),n,y):C(e)};for(var A,E=n(10)?v(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;E.length>k;k++)o(w,A=E[k])&&!o(y,A)&&m(y,A,h(w,A));y.prototype=N,N.constructor=y,n(20)(r,_,y)}},261:function(t,e,n){var r=n(5),o=n(41),l=n(12),c=n(262),d="["+c+"]",f=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),h=function(t,e,n){var o={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),f=o[t]=d?e(m):c[t];n&&(o[n]=f),r(r.P+r.F*d,"String",o)},m=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(v,"")),t};t.exports=h},262:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},263:function(t,e,n){var r=n(5);r(r.S,"Number",{isNaN:function(t){return t!=t}})},264:function(t,e,n){"use strict";n(256)},265:function(t,e,n){var r=n(18)(!1);r.push([t.i,".vue-aspect-ratio__inner[data-v-007c4c7c]{position:relative}.vue-aspect-ratio__content[data-v-007c4c7c]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=r},266:function(t,e,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("7d16d390",content,!0,{sourceMap:!1})},267:function(t,e,n){"use strict";n(266)},268:function(t,e,n){var r=n(18)(!1);r.push([t.i,"@media only screen and (max-width:520px){.textresponsive div[data-v-c6337172]{margin-top:-.7rem;margin-left:2rem;margin-right:2rem}}@media only screen and (max-width:450px){.textresponsive div[data-v-c6337172]{margin-top:-1.2rem}}@media only screen and (max-width:410px){.textresponsive div[data-v-c6337172]{margin-top:-2rem}.textresponsive div h1[data-v-c6337172]{font-size:.8rem}.textresponsive div h2[data-v-c6337172]{font-size:.9rem}}",""]),t.exports=r},269:function(t,e,n){"use strict";n.r(e);var r={name:"Hero",props:{heading:String,subheading:String,pageheroheading:String,backgroundUrl:String,right:Boolean,blacktext:Boolean,whitetext:Boolean,altrow:Boolean,overlay:Boolean}},o=(n(267),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("AspectRatio",{style:{backgroundSize:"cover",backgroundImage:"url(".concat(t.backgroundUrl,")")},attrs:{ar:"13:4",width:"100%"}},[e("page-section",{attrs:{altrow:t.altrow,overlay:t.overlay}},[e("div",{staticClass:"w-full h-full textresponsive grid content-center"},[e("div",{staticClass:"mt-0"},[e("h1",{staticClass:"text-xs md:text-sm xl:text-base font-medium text-center text-white"},[t._v(t._s(t.heading))]),t._v(" "),e("h2",{staticClass:"text-base sm:text-lg md:text-xl xl:text-2xl font-semibold text-center leading-tight text-white"},[t._v(t._s(t.subheading))]),t._v(" "),e("h1",{staticClass:"text-base sm:text-lg lg:text-xl text-center text-white"},[t._v(t._s(t.pageheroheading))])])])])],1)}),[],!1,null,"c6337172",null);e.default=component.exports;installComponents(component,{PageSection:n(254).default,AspectRatio:n(259).default})}}]);