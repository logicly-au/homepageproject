(window.webpackJsonp=window.webpackJsonp||[]).push([[28,2,5,14,15],{254:function(t,e,n){"use strict";n.r(e);var o={name:"PageSection",props:{altrow:Boolean,normal:Boolean,overlay:Boolean,nooverlay:Boolean,black:Boolean,noblack:Boolean}},r=(n(257),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-full",class:{"bg-logiclylightgrey":t.altrow,"!bg-logiclylightgrey":t.normal}},[e("div",{staticClass:"object-contain object-center w-full h-full bg-cover",class:{"bg-black bg-opacity-40":t.overlay}},[e("div",{staticClass:"container h-full mx-auto"},[e("div",{staticClass:"grid h-full py-16 md:py-20 grid-cols-12 md:grid-cols-15 px-6 md:px-0 mobileres"},[e("div",{staticClass:"flex flex-col justify-center col-span-10 col-start-2 md:col-span-9 md:col-start-4"},[t._t("default")],2)])])])])}),[],!1,null,"2c60def4",null);e.default=component.exports},255:function(t,e,n){var content=n(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("7eaa22dc",content,!0,{sourceMap:!1})},256:function(t,e,n){var content=n(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("be620aee",content,!0,{sourceMap:!1})},257:function(t,e,n){"use strict";n(255)},258:function(t,e,n){var o=n(18)(!1);o.push([t.i,"@media only screen and (max-width:500px){.mobileres[data-v-2c60def4]{padding-left:.5rem;padding-right:.5rem}}",""]),t.exports=o},259:function(t,e,n){"use strict";n.r(e);var o=n(13),r=(n(35),n(100),n(263),n(260),{name:"VueAspectRatio",props:{ar:{type:String,default:"1:1",validator:function(t){var e=t.split(":").map((function(t){return parseInt(t)})),n=Object(o.a)(e,2),r=n[0],l=n[1];return!Number.isNaN(r)&&!Number.isNaN(l)}},width:String},data:function(){return{w:null,h:null}},computed:{componentStyle:function(){return this.width?{width:this.width}:{}},innerStyle:function(){return{paddingTop:this.h/this.w*100+"%"}}},created:function(){var t=this.ar.split(":").map((function(t){return parseInt(t)})),e=Object(o.a)(t,2),n=e[0],r=e[1];this.w=n,this.h=r}}),l=(n(264),n(3)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vue-aspect-ratio",style:t.componentStyle},[e("div",{staticClass:"vue-aspect-ratio__inner",style:t.innerStyle},[e("div",{staticClass:"vue-aspect-ratio__content"},[t._t("default")],2)])])}),[],!1,null,"007c4c7c",null);e.default=component.exports},260:function(t,e,n){"use strict";var o=n(6),r=n(36),l=n(37),c=n(161),d=n(78),f=n(12),m=n(59).f,v=n(60).f,h=n(15).f,x=n(261).trim,_="Number",y=o.Number,w=y,C=y.prototype,k=l(n(99)(C))==_,N="trim"in String.prototype,S=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,o,r,l=(e=N?e.trim():x(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>r)return NaN;return parseInt(c,o)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(k?f((function(){C.valueOf.call(n)})):l(n)!=_)?c(new w(S(e)),n,y):S(e)};for(var I,E=n(10)?m(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;E.length>A;A++)r(w,I=E[A])&&!r(y,I)&&h(y,I,v(w,I));y.prototype=C,C.constructor=y,n(20)(o,_,y)}},261:function(t,e,n){var o=n(5),r=n(41),l=n(12),c=n(262),d="["+c+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),v=function(t,e,n){var r={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),f=r[t]=d?e(h):c[t];n&&(r[n]=f),o(o.P+o.F*d,"String",r)},h=v.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(m,"")),t};t.exports=v},262:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},263:function(t,e,n){var o=n(5);o(o.S,"Number",{isNaN:function(t){return t!=t}})},264:function(t,e,n){"use strict";n(256)},265:function(t,e,n){var o=n(18)(!1);o.push([t.i,".vue-aspect-ratio__inner[data-v-007c4c7c]{position:relative}.vue-aspect-ratio__content[data-v-007c4c7c]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=o},266:function(t,e,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("7d16d390",content,!0,{sourceMap:!1})},267:function(t,e,n){"use strict";n(266)},268:function(t,e,n){var o=n(18)(!1);o.push([t.i,"@media only screen and (max-width:520px){.textresponsive div[data-v-c6337172]{margin-top:-.7rem;margin-left:2rem;margin-right:2rem}}@media only screen and (max-width:450px){.textresponsive div[data-v-c6337172]{margin-top:-1.2rem}}@media only screen and (max-width:410px){.textresponsive div[data-v-c6337172]{margin-top:-2rem}.textresponsive div h1[data-v-c6337172]{font-size:.8rem}.textresponsive div h2[data-v-c6337172]{font-size:.9rem}}",""]),t.exports=o},269:function(t,e,n){"use strict";n.r(e);var o={name:"Hero",props:{heading:String,subheading:String,pageheroheading:String,backgroundUrl:String,right:Boolean,blacktext:Boolean,whitetext:Boolean,altrow:Boolean,overlay:Boolean}},r=(n(267),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("AspectRatio",{style:{backgroundSize:"cover",backgroundImage:"url(".concat(t.backgroundUrl,")")},attrs:{ar:"13:4",width:"100%"}},[e("page-section",{attrs:{altrow:t.altrow,overlay:t.overlay}},[e("div",{staticClass:"w-full h-full textresponsive grid content-center"},[e("div",{staticClass:"mt-0"},[e("h1",{staticClass:"text-xs md:text-sm xl:text-base font-medium text-center text-white"},[t._v(t._s(t.heading))]),t._v(" "),e("h2",{staticClass:"text-base sm:text-lg md:text-xl xl:text-2xl font-semibold text-center leading-tight text-white"},[t._v(t._s(t.subheading))]),t._v(" "),e("h1",{staticClass:"text-base sm:text-lg lg:text-xl text-center text-white"},[t._v(t._s(t.pageheroheading))])])])])],1)}),[],!1,null,"c6337172",null);e.default=component.exports;installComponents(component,{PageSection:n(254).default,AspectRatio:n(259).default})},275:function(t,e,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("1403519e",content,!0,{sourceMap:!1})},277:function(t,e,n){"use strict";n(275)},278:function(t,e,n){var o=n(18)(!1);o.push([t.i,"@media only screen and (max-width:500px){.mobileres[data-v-24287930]{padding-left:.5rem;padding-right:.5rem}}input[data-v-24287930]::-moz-placeholder{--text-opacity:1;color:#3c3c3b;color:rgba(60,60,59,var(--text-opacity))}input[data-v-24287930]::placeholder{--text-opacity:1;color:#3c3c3b;color:rgba(60,60,59,var(--text-opacity))}",""]),t.exports=o},279:function(t,e,n){"use strict";n.r(e);var o={name:"PageSectionEmail",props:{altrow:Boolean,normal:Boolean,overlay:Boolean,nooverlay:Boolean,black:Boolean,noblack:Boolean}},r=(n(277),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-full bg-logiclybeige"},[e("div",{staticClass:"object-contain object-center w-full h-full bg-cover",class:{"bg-black bg-opacity-50":t.overlay}},[t._m(0)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container h-full mx-auto"},[e("div",{staticClass:"grid grid-cols-12 subscriberesponsive"},[e("div",{staticClass:"grid items-end grid-cols-4 col-span-10 col-start-2 gap-4 px-6 py-16 lg:py-24 md:px-0 mobileres"},[e("div",{staticClass:"col-span-4 -mr-0 lg:col-span-1 lg:-mr-6"},[e("div",[e("h2",{staticClass:"pb-2 text-lg font-semibold text-logiclytheme4"},[t._v("\n                New thinking & digital updates\n              ")])]),t._v(" "),e("div",{staticClass:"pb-4 lg:pb-0 text-logiclytextgrey"},[t._v("\n              Discover new ways of thinking and innovative digital systems to solve complex information challenges\n            ")])]),t._v(" "),e("div",{staticClass:"grid grid-cols-6 col-span-4 lg:col-span-3",attrs:{id:"mc_embed_signup"}},[e("form",{staticClass:"grid grid-cols-6 col-span-6 validate",attrs:{action:"https://strategicdata.us1.list-manage.com/subscribe/post?u=663055cd81f98613f231b3880&id=dcc63d296b",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",novalidate:""}},[e("div",{staticClass:"grid content-end col-span-6 pb-6 mr-4 lg:col-span-2 lg:pb-0 lg:pl-6 mc-field-group"},[e("span",{staticClass:"self-end block"},[e("label",{staticClass:"hidden",attrs:{for:"mce-NAME"}},[t._v("Name")]),t._v(" "),e("input",{staticClass:"block w-full placeholder-opacity-100 bg-transparent border-b border-logiclyorange required",attrs:{type:"text",value:"",name:"NAME",placeholder:"Name",id:"mce-NAME"}})])]),t._v(" "),e("div",{staticClass:"grid content-end col-span-6 pb-8 mr-4 lg:col-span-2 lg:pb-0 mc-field-group"},[e("span",{staticClass:"self-end block"},[e("label",{staticClass:"hidden",attrs:{for:"mce-EMAIL"}},[t._v("Email Address")]),t._v(" "),e("input",{staticClass:"block w-full placeholder-opacity-100 bg-transparent border-b border-logiclyorange required email",attrs:{type:"email",placeholder:"Email",value:"",name:"EMAIL",id:"mce-EMAIL"}})])]),t._v(" "),e("div",{staticClass:"self-end block clear"},[e("button",{staticClass:"block h-12 px-8 border-2 border-logiclyorange text-logiclytheme2 hover:border-logiclyhover hover:text-logiclyhover"},[e("input",{staticClass:"font-semibold lowercase",staticStyle:{background:"none"},attrs:{type:"submit",value:"Subscribe",name:"subscribe",id:"mc-embedded-subscribe"}})])])])])])]),t._v(" "),e("div",{staticClass:"col-span-2"},[e("div",{staticClass:"clear",attrs:{id:"mce-responses"}},[e("div",{staticClass:"response",staticStyle:{display:"none"},attrs:{id:"mce-error-response"}}),t._v(" "),e("div",{staticClass:"response",staticStyle:{display:"none"},attrs:{id:"mce-success-response"}})]),t._v(" "),e("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[e("input",{attrs:{type:"text",name:"b_663055cd81f98613f231b3880_dcc63d296b",tabindex:"-1",value:""}})])])])}],!1,null,"24287930",null);e.default=component.exports;installComponents(component,{Button:n(101).default})},280:function(t,e,n){var o=n(16);t.exports=function(t,e){if(!o(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},289:function(t,e,n){"use strict";var strong=n(290),o=n(280);t.exports=n(291)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return strong.def(o(this,"Set"),t=0===t?0:t,t)}},strong)},290:function(t,e,n){"use strict";var o=n(15).f,r=n(99),l=n(165),c=n(38),d=n(163),f=n(164),m=n(104),v=n(166),h=n(105),x=n(10),_=n(162).fastKey,y=n(280),w=x?"_s":"size",C=function(t,e){var n,o=_(e);if("F"!==o)return t._i[o];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,m){var v=t((function(t,o){d(t,v,e,"_i"),t._t=e,t._i=r(null),t._f=void 0,t._l=void 0,t[w]=0,null!=o&&f(o,n,t[m],t)}));return l(v.prototype,{clear:function(){for(var t=y(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[w]=0},delete:function(t){var n=y(this,e),o=C(n,t);if(o){var r=o.n,l=o.p;delete n._i[o.i],o.r=!0,l&&(l.n=r),r&&(r.p=l),n._f==o&&(n._f=r),n._l==o&&(n._l=l),n[w]--}return!!o},forEach:function(t){y(this,e);for(var n,o=c(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(o(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!C(y(this,e),t)}}),x&&o(v.prototype,"size",{get:function(){return y(this,e)[w]}}),v},def:function(t,e,n){var o,r,l=C(t,e);return l?l.v=n:(t._l=l={i:r=_(e,!0),k:e,v:n,p:o=t._l,n:void 0,r:!1},t._f||(t._f=l),o&&(o.n=l),t[w]++,"F"!==r&&(t._i[r]=l)),t},getEntry:C,setStrong:function(t,e,n){m(t,e,(function(t,n){this._t=y(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this,e=t._k,n=t._l;n&&n.r;)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?v(0,"keys"==e?n.k:"values"==e?n.v:[n.k,n.v]):(t._t=void 0,v(1))}),n?"entries":"values",!n,!0),h(e)}}},291:function(t,e,n){"use strict";var o=n(6),r=n(5),l=n(20),c=n(165),meta=n(162),d=n(164),f=n(163),m=n(16),v=n(12),h=n(103),x=n(61),_=n(161);t.exports=function(t,e,n,y,w,C){var k=o[t],N=k,S=w?"set":"add",I=N&&N.prototype,E={},A=function(t){var e=I[t];l(I,t,"delete"==t||"has"==t?function(a){return!(C&&!m(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return C&&!m(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof N&&(C||I.forEach&&!v((function(){(new N).entries().next()})))){var M=new N,j=M[S](C?{}:-0,1)!=M,B=v((function(){M.has(1)})),L=h((function(t){new N(t)})),z=!C&&v((function(){for(var t=new N,e=5;e--;)t[S](e,e);return!t.has(-0)}));L||((N=e((function(e,n){f(e,N,t);var o=_(new k,e,N);return null!=n&&d(n,w,o[S],o),o}))).prototype=I,I.constructor=N),(B||z)&&(A("delete"),A("has"),w&&A("get")),(z||j)&&A(S),C&&I.clear&&delete I.clear}else N=y.getConstructor(e,t,w,S),c(N.prototype,n),meta.NEED=!0;return x(N,t),E[t]=N,r(r.G+r.W+r.F*(N!=k),E),C||y.setStrong(N,t,w),N}},304:function(t,e,n){var content=n(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("29f9df76",content,!0,{sourceMap:!1})},335:function(t,e,n){"use strict";n(304)},336:function(t,e,n){var o=n(18)(!1);o.push([t.i,".insights-page p{font-weight:300;font-size:1rem}.insights-page h1{font-weight:700!important;font-size:1.25rem!important;padding-bottom:.3rem!important}.insights-page h2{padding-top:1rem!important;padding-bottom:.25rem!important;font-weight:700!important;font-size:1.3rem!important}.insights-page h3{padding-top:.6rem!important;padding-bottom:.25rem!important;font-size:1rem!important;font-weight:600!important}.insights-page h4{text-align:left;color:#e94e1b;font-weight:600}.insights-page h5{text-align:left;color:#3c3c3b;font-weight:500;font-size:.85em}.blog-sidebar-author{border-top:2px solid #e94e1b;border-bottom:2px solid #dedede;padding-top:1rem;padding-bottom:1rem}.blog-sidebar{padding-bottom:3rem}.blog-social-media{font-weight:600;font-size:.9rem;color:#3c3c3b;padding-top:1.5rem}.blog-text{margin-left:1rem}@media only screen and (max-width:1024px){.blog-text{margin-left:0;padding-bottom:3rem}}.blogheading{margin-left:1rem}@media only screen and (max-width:1024px){.blogheading{margin-left:0}}.blog-text p{padding-bottom:.5rem}.blog-text-list ul li{list-style:disc;margin-left:1.25rem;font-weight:300}ul.nav.nav-tabs{display:flex;justify-content:space-between}.insights-page li>a>div>img{margin:auto auto .5rem}.insights-page .blog-text img{padding:10px 0 20px}.blog-text-list{padding-bottom:.5rem}.blog-text a{color:#e6332a!important;font-weight:400;text-decoration:none}.blog-text a:hover{text-decoration:underline}.blog-text a:visited{color:#a83914!important}.articles{padding-bottom:3em}.logiclysquare{width:8px;height:8px;margin-top:.4rem;float:left;transform:rotate(45deg);background:#e94e1b}.blog-img{width:100%;height:200px}.first-blog-img{width:100%;height:auto}.most-recent-insight{grid-column:span 3/span 3}.blog-graphic{height:7rem;margin:8px auto auto}@media only screen and (max-width:1279px){.blog-img{height:auto}}",""]),t.exports=o},376:function(t,e,n){"use strict";n.r(e);n(35),n(30);var o=n(2),r=(n(29),n(289),n(23),n(8),n(24),n(21),n(48),{data:function(){return{category:"",articles:[]}},head:function(){return{title:"Insights · Logicly"}},computed:{categories:function(){var t=this.articles.reduce((function(t,e){return t.concat(e.categories)}),[]);return new Set(t)},filteredArticles:function(){var t=this;return this.category?this.articles.filter((function(article){return-1!==article.categories.indexOf(t.category)})):this.articles}},methods:{updateHash:function(){this.$router.push({name:this.$route.name,hash:"#".concat(this.category)})}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("insights").fetch();case 2:t.articles=e.sent,(n=decodeURIComponent(t.$route.hash.replace(/^#/,"")))&&t.categories.has(n)&&(t.category=n);case 5:case"end":return e.stop()}}),e)})))()}}),l=(n(335),n(3)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"insights_new"},[e("Hero",{staticClass:"hidden sm:block",attrs:{heading:"INSIGHTS",subheading:"In depth articles, discussions and thoughts on innovative digital systems, projects and topics of interest from our team.","background-url":"/Logicly_website_photos_header-14.jpg",black:"",overlay:""}}),t._v(" "),e("Hero",{staticClass:"block sm:hidden",attrs:{heading:"INSIGHTS","background-url":"/Logicly_website_photos_header-14.jpg",black:"",overlay:""}}),t._v(" "),e("page-section",{attrs:{altrow:""}},[e("div",{staticClass:"grid grid-cols-3 mx-0 text-logiclytextgrey xl:-mx-20"},[e("div",{staticClass:"col-span-3 sm:col-span-1"},[e("p",{staticClass:"pb-4 text-2xl font-semibold text-left text-logiclytextgrey sm:pb-0"},[t._v("\n          Topics\n        ")])]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"col-span-3 col-start-1 pb-2 border-b-2 sm:col-span-1 sm:col-start-3 border-logiclyorange bg-logiclylightgrey sm:pb-0",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.category=e.target.multiple?n:n[0]},function(e){return t.updateHash()}]}},[e("option",{attrs:{value:""}},[t._v("All categories")]),t._v(" "),t._l(t.categories,(function(n){return e("option",{domProps:{value:n}},[t._v(t._s(n))])}))],2)])]),t._v(" "),e("page-section",[e("div",{staticClass:"grid grid-cols-12 pt-6 mx-0 -mb-16 text-logiclytextgrey insights-page xl:-mx-20"},[e("div",{staticClass:"col-span-12 projects-list"},[e("ul",{staticClass:"articles"},[e("div",{staticClass:"grid gap-0 pb-4 xl:gap-5 xl:grid-cols-3 grid-rows-auto"},t._l(t.filteredArticles,(function(article,n){return e("li",{staticClass:"col-span-3 xl:col-span-1",class:{"xl:col-span-3":0===n}},[e("div",{staticClass:"grid grid-cols-1 pb-12",class:{"grid-cols-3":0===n}},[e("div",{staticClass:"col-span-1",class:{"col-span-3 xl:col-span-2":0===n}},[e("NuxtLink",{attrs:{to:{name:"insights-slug",params:{slug:article.slug}}}},[e("img",{staticClass:"object-cover h-full blog-img",class:{"first-blog-img":0===n},attrs:{src:article.img,alt:article.alt}})])],1),t._v(" "),e("div",{staticClass:"col-span-1 pt-6",class:{"col-span-3 xl:col-span-1 border-t-2 border-logiclyorange pl-2 xl:pl-6 pt-8 pr-2 xl:pr-8 pb-6 xl:pb-12 bg-logiclylightgrey":0===n}},[e("div",{class:{"mx-4 xl:mx-0 mb-6 xl:mb-0":0===n}},[e("NuxtLink",{attrs:{to:{name:"insights-slug",params:{slug:article.slug}}}},[e("span",{staticClass:"text-lg font-semibold sm:text-xl xl:text-base text-logiclyorange"},[t._v(t._s(article.title))])]),t._v(" "),e("div",{staticClass:"pt-1 pb-4 xl:pt-0 xl:pb-2",class:{"xl:pb-2 mt-4":0===n}},[e("span",{staticClass:"text-sm font-medium"},[t._v(t._s(article.author))]),t._v(" "),e("span",{staticClass:"text-logiclyorange"},[t._v("|")]),t._v(" "),e("span",{staticClass:"text-sm font-normal"},[t._v(t._s(article.date))])]),t._v(" "),e("div",{staticClass:"pb-1"},[e("span",{staticClass:"text-base font-light xl:text-sm",domProps:{innerHTML:t._s("".concat(article.description))}})]),t._v(" "),e("div",[e("span",{staticClass:"text-base xl:text-sm text-logiclyorange hover:underline"},[e("NuxtLink",{attrs:{to:{name:"insights-slug",params:{slug:article.slug}}}},[t._v("Read more")])],1)])],1)])])])})),0)])])])]),t._v(" "),e("PageSectionEmail")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Hero:n(269).default,PageSection:n(254).default,PageSectionEmail:n(279).default})}}]);