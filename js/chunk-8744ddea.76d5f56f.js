(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8744ddea"],{"0cb2":function(t,e,r){var n=r("7b0b"),i=Math.floor,a="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,f,l,u){var s=r+t.length,d=f.length,p=o;return void 0!==l&&(l=n(l),p=c),a.call(u,p,(function(n,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(s);case"<":c=l[a.slice(1,-1)];break;default:var o=+a;if(0===o)return n;if(o>d){var u=i(o/10);return 0===u?n:u<=d?void 0===f[u-1]?a.charAt(1):f[u-1]+a.charAt(1):n}c=f[o-1]}return void 0===c?"":c}))}},"0f35":function(t,e,r){"use strict";var n=r("ade3"),i=r("5530"),a=r("7a23");function c(t,e,r,c,o,f){return Object(a["y"])(),Object(a["h"])(Object(a["I"])(r.variant),{class:["text",Object(i["a"])(Object(n["a"])({},"text__"+r.type,r.type),c.classes)],style:{"--text-size":r.size,"--text-weight":r.weight,"--text-line-height":r.lineHeight,"--text-color":c.colorTheme,"--text-opacity":r.opacity,"--text-mt":r.mt,"--text-mr":r.mr,"--text-mb":r.mb,"--text-ml":r.ml}},{default:Object(a["S"])((function(){return[Object(a["F"])(t.$slots,"default")]})),_:3},8,["class","style"])}r("13d5"),r("b64b");var o=r("c07e"),f={name:"Text",inheritAttrs:!0,props:{variant:{type:String,default:"span"},type:{type:String,default:""},size:{type:String,default:"inherit"},weight:{type:String,default:"normal"},lineHeight:{type:String,default:"inherit"},mt:{type:String,default:"0"},mr:{type:String,default:"0"},mb:{type:String,default:"0"},ml:{type:String,default:"0"},color:{type:String,default:"black"},theme:{type:String,default:""},opacity:{type:String,default:"1"}},setup:function(t,e){var r=e.attrs,c=Object(a["f"])((function(){return Object.keys(r).reduce((function(t,e){return Object(i["a"])(Object(i["a"])({},t),{},Object(n["a"])({},"text__"+e,!0))}),{})})),f=Object(a["f"])((function(){return o["a"][t.theme]||t.color}));return{classes:c,colorTheme:f}}};r("1df5");f.render=c;e["a"]=f},"13d5":function(t,e,r){"use strict";var n=r("23e7"),i=r("d58f").left,a=r("a640"),c=r("2d00"),o=r("605d"),f=a("reduce"),l=!o&&c>79&&c<83;n({target:"Array",proto:!0,forced:!f||l},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"14c3":function(t,e,r){var n=r("c6b6"),i=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var a=r.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},1831:function(t,e,r){"use strict";var n=r("7a23"),i={class:"text-header"};function a(t,e){return Object(n["y"])(),Object(n["h"])("header",i,[Object(n["F"])(t.$slots,"default")])}r("8a98");const c={};c.render=a;e["a"]=c},"1df5":function(t,e,r){"use strict";r("d1c0")},"498a":function(t,e,r){"use strict";var n=r("23e7"),i=r("58a8").trim,a=r("c8d2");n({target:"String",proto:!0,forced:a("trim")},{trim:function(){return i(this)}})},5319:function(t,e,r){"use strict";var n=r("d784"),i=r("825a"),a=r("50c4"),c=r("a691"),o=r("1d80"),f=r("8aa5"),l=r("0cb2"),u=r("14c3"),s=Math.max,d=Math.min,p=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var h=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=n.REPLACE_KEEPS_$0,x=h?"$":"$0";return[function(r,n){var i=o(this),a=void 0==r?void 0:r[t];return void 0!==a?a.call(r,i,n):e.call(String(i),r,n)},function(t,n){if(!h&&b||"string"===typeof n&&-1===n.indexOf(x)){var o=r(e,t,this,n);if(o.done)return o.value}var g=i(t),m=String(this),y="function"===typeof n;y||(n=String(n));var v=g.global;if(v){var E=g.unicode;g.lastIndex=0}var O=[];while(1){var j=u(g,m);if(null===j)break;if(O.push(j),!v)break;var k=String(j[0]);""===k&&(g.lastIndex=f(m,a(g.lastIndex),E))}for(var S="",w=0,M=0;M<O.length;M++){j=O[M];for(var R=String(j[0]),F=s(d(c(j.index),m.length),0),_=[],A=1;A<j.length;A++)_.push(p(j[A]));var B=j.groups;if(y){var I=[R].concat(_,F,m);void 0!==B&&I.push(B);var W=String(n.apply(void 0,I))}else W=l(R,m,F,_,B,n);F>=w&&(S+=m.slice(w,F)+W,w=F+R.length)}return S+m.slice(w)}]}))},"56f3":function(t,e,r){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),i=r("5899"),a="["+i+"]",c=RegExp("^"+a+a+"*"),o=RegExp(a+a+"*$"),f=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(o,"")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},"6c97":function(t,e,r){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},7589:function(t,e,r){"use strict";var n=r("7a23"),i={class:"exchange-coin-info"},a={class:"exchange-coin-info__body"},c={key:0,class:"exchange-coin-info__body-rate"},o={class:"exchange-coin-info__icon"};function f(t,e,r,f,l,u){var s=Object(n["G"])("Text"),d=Object(n["G"])("Icon");return Object(n["y"])(),Object(n["h"])("div",i,[Object(n["k"])("div",a,[Object(n["k"])(s,{theme:"primary",size:"14px",weight:"500","line-height":"17px",mb:"6px"},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(r.label),1)]})),_:1}),Object(n["k"])(s,{variant:"p",size:f.isMobile?"28px":"32px","line-height":f.isMobile?"32px":"42px",weight:"bold",mb:f.isMobile?r.hideRate?"0":"8px":"0",mt:f.isMobile?r.hideRate?"11px":"8px":"0",color:"black"},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(r.sum),1)]})),_:1},8,["size","line-height","mb","mt"]),r.hideRate?Object(n["i"])("",!0):(Object(n["y"])(),Object(n["h"])("div",c," 1 "+Object(n["K"])(f.coinLabel)+" = $"+Object(n["K"])(r.rate),1))]),Object(n["k"])("div",o,[Object(n["k"])(d,{name:r.coin.icon+"-circle",height:"60px",width:"60px"},null,8,["name"])])])}r("a9e3");var l=r("00a1"),u=r("0f35"),s=r("cdbc"),d={name:"ExchangeCoinInfo",components:{Text:u["a"],Icon:l["a"]},props:{coin:{type:Object,default:function(){}},rate:{type:Number,default:0},hideRate:{type:Boolean,default:!1},sum:{type:Number,default:0},label:{type:String,default:""}},setup:function(t){var e=Object(s["a"])(),r=e.isMobile,i=Object(n["f"])((function(){var e,r;return null===(e=t.coin)||void 0===e||null===(r=e.key)||void 0===r?void 0:r.toUpperCase()}));return{isMobile:r,coinLabel:i}}};r("c989");d.render=f;e["a"]=d},"8a98":function(t,e,r){"use strict";r("56f3")},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9263:function(t,e,r){"use strict";var n=r("ad6d"),i=r("9f7f"),a=RegExp.prototype.exec,c=String.prototype.replace,o=a,f=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],s=f||u||l;s&&(o=function(t){var e,r,i,o,s=this,d=l&&s.sticky,p=n.call(s),h=s.source,b=0,x=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),x=String(t).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==t[s.lastIndex-1])&&(h="(?: "+h+")",x=" "+x,b++),r=new RegExp("^(?:"+h+")",p)),u&&(r=new RegExp("^"+h+"$(?!\\s)",p)),f&&(e=s.lastIndex),i=a.call(d?r:s,x),d?i?(i.input=i.input.slice(b),i[0]=i[0].slice(b),i.index=s.lastIndex,s.lastIndex+=i[0].length):s.lastIndex=0:f&&i&&(s.lastIndex=s.global?i.index+i[0].length:e),u&&i&&i.length>1&&c.call(i[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)})),i}),t.exports=o},"9f7f":function(t,e,r){"use strict";var n=r("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a434:function(t,e,r){"use strict";var n=r("23e7"),i=r("23cb"),a=r("a691"),c=r("50c4"),o=r("7b0b"),f=r("65f0"),l=r("8418"),u=r("1dde"),s=u("splice"),d=Math.max,p=Math.min,h=9007199254740991,b="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!s},{splice:function(t,e){var r,n,u,s,x,g,m=o(this),y=c(m.length),v=i(t,y),E=arguments.length;if(0===E?r=n=0:1===E?(r=0,n=y-v):(r=E-2,n=p(d(a(e),0),y-v)),y+r-n>h)throw TypeError(b);for(u=f(m,n),s=0;s<n;s++)x=v+s,x in m&&l(u,s,m[x]);if(u.length=n,r<n){for(s=v;s<y-n;s++)x=s+n,g=s+r,x in m?m[g]=m[x]:delete m[g];for(s=y;s>y-n+r;s--)delete m[s-1]}else if(r>n)for(s=y-n;s>v;s--)x=s+n-1,g=s+r-1,x in m?m[g]=m[x]:delete m[g];for(s=0;s<r;s++)m[s+v]=arguments[s+2];return m.length=y-n+r,u}})},ac1f:function(t,e,r){"use strict";var n=r("23e7"),i=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b6ce:function(t,e,r){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},c07e:function(t,e,r){"use strict";var n=r("6c97"),i=r.n(n);e["a"]=i.a},c8d2:function(t,e,r){var n=r("d039"),i=r("5899"),a="​᠎";t.exports=function(t){return n((function(){return!!i[t]()||a[t]()!=a||i[t].name!==t}))}},c989:function(t,e,r){"use strict";r("f90d")},cdbc:function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));r("5319"),r("ac1f");var n=r("b6ce"),i=r.n(n),a={mobile:{maxWidth:i.a.mobileMaxWidth.replace("px",""),minWidth:i.a.mobileMinWidth.replace("px","")},desktop:{minWidth:i.a.desktopMinWidth.replace("px","")}},c=r("7a23");r("498a"),r("a434"),r("159b"),r("b64b");function o(t){return isNaN(t)?t:"".concat(t,"px")}function f(t){var e="screen and ";return Array.isArray(t)?(e+="(min-width: ".concat(o(t[0]),")"),2===t.length&&(e+=" and (max-width: ".concat(o(t[1]),")")),e):isNaN(parseInt(t))?String(t).replace(/^@?media/i,"").trim():(e+="(max-width: ".concat(o(t),")"),e)}function l(t,e,r){if(!t[e])throw new Error('Event of type "'.concat(e,'" is not available for registration'));-1===t[e].indexOf(r)&&t[e].push(r)}function u(t,e,r){if(!t[e])throw new Error('Event of type "'.concat(e,'" is not available for unregistration'));if(void 0===r)t[e]=[];else{var n=t[e].indexOf(r);-1!==n&&t[e].splice(n,1)}}function s(t,e){t.forEach((function(t){return t(e)}))}function d(t,e,r){var n=window.matchMedia(f(e)),i={enter:[],leave:[]};r[t]={matches:n.matches,on:function(t,e){l(i,t,e)},off:function(t,e){u(i,t,e)}};var a=function(e){r[t].matches=e.matches,s(e.matches?i.enter:i.leave,n)};n.addListener(a),Object(c["u"])((function(){n.removeListener(a)}))}var p=function(t){var e=Object(c["C"])({});return Object.keys(t).forEach((function(r){d(r,t[r],e)})),e},h=p,b=function(){var t=h({mobile:[a.mobile.minWidth,a.mobile.maxWidth],desktop:[a.desktop.minWidth]}),e=Object(c["f"])((function(){return t.desktop.matches})),r=Object(c["f"])((function(){return t.mobile.matches}));return{breakpoints:t,isMobile:r,isDesktop:e}}},d1c0:function(t,e,r){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},d58f:function(t,e,r){var n=r("1c0b"),i=r("7b0b"),a=r("44ad"),c=r("50c4"),o=function(t){return function(e,r,o,f){n(r);var l=i(e),u=a(l),s=c(l.length),d=t?s-1:0,p=t?-1:1;if(o<2)while(1){if(d in u){f=u[d],d+=p;break}if(d+=p,t?d<0:s<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:s>d;d+=p)d in u&&(f=r(f,u[d],d,l));return f}};t.exports={left:o(!1),right:o(!0)}},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),i=r("d039"),a=r("b622"),c=r("9263"),o=r("9112"),f=a("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),s=a("replace"),d=function(){return!!/./[s]&&""===/./[s]("a","$0")}(),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,s){var h=a(t),b=!i((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),x=b&&!i((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[f]=function(){return r},r.flags="",r[h]=/./[h]),r.exec=function(){return e=!0,null},r[h](""),!e}));if(!b||!x||"replace"===t&&(!l||!u||d)||"split"===t&&!p){var g=/./[h],m=r(h,""[t],(function(t,e,r,n,i){return e.exec===c?b&&!i?{done:!0,value:g.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),y=m[0],v=m[1];n(String.prototype,t,y),n(RegExp.prototype,h,2==e?function(t,e){return v.call(t,this,e)}:function(t){return v.call(t,this)})}s&&o(RegExp.prototype[h],"sham",!0)}},f90d:function(t,e,r){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}}}]);
//# sourceMappingURL=chunk-8744ddea.76d5f56f.js.map