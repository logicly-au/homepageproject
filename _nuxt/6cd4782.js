(window.webpackJsonp=window.webpackJsonp||[]).push([[13,3,15],{370:function(t,e,n){"use strict";n.r(e);var o={name:"PageSection",props:{altrow:Boolean,normal:Boolean,overlay:Boolean,nooverlay:Boolean,black:Boolean,noblack:Boolean}},l=(n(373),n(14)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-full",class:{"bg-logiclylightgrey":t.altrow,"!bg-logiclylightgrey":t.normal}},[e("div",{staticClass:"object-contain object-center w-full h-full bg-cover",class:{"bg-black bg-opacity-40":t.overlay}},[e("div",{staticClass:"container h-full mx-auto"},[e("div",{staticClass:"grid h-full py-16 md:py-20 grid-cols-12 md:grid-cols-15 px-6 md:px-0 mobileres"},[e("div",{staticClass:"flex flex-col justify-center col-span-10 col-start-2 md:col-span-9 md:col-start-4"},[t._t("default")],2)])])])])}),[],!1,null,"2c60def4",null);e.default=component.exports},371:function(t,e,n){var content=n(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("ce01e464",content,!0,{sourceMap:!1})},372:function(t,e,n){var content=n(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("6828059b",content,!0,{sourceMap:!1})},373:function(t,e,n){"use strict";n(371)},374:function(t,e,n){var o=n(31)((function(i){return i[1]}));o.push([t.i,"@media only screen and (max-width:500px){.mobileres[data-v-2c60def4]{padding-left:.5rem;padding-right:.5rem}}",""]),o.locals={},t.exports=o},375:function(t,e,n){"use strict";n.r(e);var o=n(19),l=(n(53),n(378),{name:"VueAspectRatio",props:{ar:{type:String,default:"1:1",validator:function(t){var e=t.split(":").map((function(t){return parseInt(t)})),n=Object(o.a)(e,2),l=n[0],r=n[1];return!Number.isNaN(l)&&!Number.isNaN(r)}},width:String},data:function(){return{w:null,h:null}},computed:{componentStyle:function(){return this.width?{width:this.width}:{}},innerStyle:function(){return{paddingTop:this.h/this.w*100+"%"}}},created:function(){var t=this.ar.split(":").map((function(t){return parseInt(t)})),e=Object(o.a)(t,2),n=e[0],l=e[1];this.w=n,this.h=l}}),r=(n(376),n(14)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vue-aspect-ratio",style:t.componentStyle},[e("div",{staticClass:"vue-aspect-ratio__inner",style:t.innerStyle},[e("div",{staticClass:"vue-aspect-ratio__content"},[t._t("default")],2)])])}),[],!1,null,"007c4c7c",null);e.default=component.exports},376:function(t,e,n){"use strict";n(372)},377:function(t,e,n){var o=n(31)((function(i){return i[1]}));o.push([t.i,".vue-aspect-ratio__inner[data-v-007c4c7c]{position:relative}.vue-aspect-ratio__content[data-v-007c4c7c]{height:100%;left:0;position:absolute;top:0;width:100%}",""]),o.locals={},t.exports=o},378:function(t,e,n){"use strict";n(2)({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},401:function(t,e,n){var content=n(416);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("a0c92e60",content,!0,{sourceMap:!1})},415:function(t,e,n){"use strict";n(401)},416:function(t,e,n){var o=n(31)((function(i){return i[1]}));o.push([t.i,".overlay[data-v-1d04ca78]{background-color:rgba(0,0,0,.25)!important;z-index:10}",""]),o.locals={},t.exports=o},460:function(t,e,n){"use strict";n.r(e);var o={name:"ImageUrl",props:{overlaytext:String,imageurl:String,right:Boolean,blacktext:Boolean,whitetext:Boolean,altrow:Boolean,overlay:Boolean}},l=(n(415),n(14)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("AspectRatio",{style:{backgroundSize:"cover",backgroundImage:"url(".concat(t.imageurl,")")},attrs:{ar:"7:4",width:"100%"}},[e("page-section",{attrs:{altrow:t.altrow,overlay:t.overlay}},[e("div",{staticClass:"w-full h-full textresponsive grid content-end"},[e("div",{staticClass:"text-xl font-medium text-center text-white leading-snug mt-8"},[e("span",{domProps:{innerHTML:t._s(t.overlaytext)}})])])])],1)}),[],!1,null,"1d04ca78",null);e.default=component.exports;installComponents(component,{PageSection:n(370).default,AspectRatio:n(375).default})}}]);