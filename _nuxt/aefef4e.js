(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{258:function(t,e,n){var content=n(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("be620aee",content,!0,{sourceMap:!1})},261:function(t,e,n){"use strict";n.r(e);var r=n(13),o=(n(35),n(101),n(265),n(262),{name:"VueAspectRatio",props:{ar:{type:String,default:"1:1",validator:function(t){var e=t.split(":").map((function(t){return parseInt(t)})),n=Object(r.a)(e,2),o=n[0],c=n[1];return!Number.isNaN(o)&&!Number.isNaN(c)}},width:String},data:function(){return{w:null,h:null}},computed:{componentStyle:function(){return this.width?{width:this.width}:{}},innerStyle:function(){return{paddingTop:this.h/this.w*100+"%"}}},created:function(){var t=this.ar.split(":").map((function(t){return parseInt(t)})),e=Object(r.a)(t,2),n=e[0],o=e[1];this.w=n,this.h=o}}),c=(n(266),n(3)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vue-aspect-ratio",style:t.componentStyle},[e("div",{staticClass:"vue-aspect-ratio__inner",style:t.innerStyle},[e("div",{staticClass:"vue-aspect-ratio__content"},[t._t("default")],2)])])}),[],!1,null,"007c4c7c",null);e.default=component.exports},262:function(t,e,n){"use strict";var r=n(6),o=n(36),c=n(37),f=n(163),l=n(78),h=n(12),d=n(59).f,v=n(60).f,N=n(15).f,I=n(263).trim,_="Number",w=r.Number,m=w,S=w.prototype,E=c(n(100)(S))==_,y="trim"in String.prototype,A=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=y?e.trim():I(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,f=e.slice(2),i=0,h=f.length;i<h;i++)if((code=f.charCodeAt(i))<48||code>o)return NaN;return parseInt(f,r)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(E?h((function(){S.valueOf.call(n)})):c(n)!=_)?f(new m(A(e)),n,w):A(e)};for(var x,C=n(10)?d(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),F=0;C.length>F;F++)o(m,x=C[F])&&!o(w,x)&&N(w,x,v(m,x));w.prototype=S,S.constructor=w,n(20)(r,_,w)}},263:function(t,e,n){var r=n(5),o=n(41),c=n(12),f=n(264),l="["+f+"]",h=RegExp("^"+l+l+"*"),d=RegExp(l+l+"*$"),v=function(t,e,n){var o={},l=c((function(){return!!f[t]()||"​"!="​"[t]()})),h=o[t]=l?e(N):f[t];n&&(o[n]=h),r(r.P+r.F*l,"String",o)},N=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(d,"")),t};t.exports=v},264:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},265:function(t,e,n){var r=n(5);r(r.S,"Number",{isNaN:function(t){return t!=t}})},266:function(t,e,n){"use strict";n(258)},267:function(t,e,n){var r=n(18)(!1);r.push([t.i,".vue-aspect-ratio__inner[data-v-007c4c7c]{position:relative}.vue-aspect-ratio__content[data-v-007c4c7c]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=r}}]);