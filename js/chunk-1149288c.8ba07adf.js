(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1149288c"],{"0028":function(e,t,r){"use strict";var n=r("c6c8"),i=r.n(n);t["a"]=i.a},"045d":function(e,t,r){"use strict";r("6eb6")},"091e":function(e,t,r){"use strict";r("ee61")},"0cb2":function(e,t,r){var n=r("7b0b"),i=Math.floor,a="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,f,l,u){var s=r+e.length,d=f.length,p=o;return void 0!==l&&(l=n(l),p=c),a.call(u,p,(function(n,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(s);case"<":c=l[a.slice(1,-1)];break;default:var o=+a;if(0===o)return n;if(o>d){var u=i(o/10);return 0===u?n:u<=d?void 0===f[u-1]?a.charAt(1):f[u-1]+a.charAt(1):n}c=f[o-1]}return void 0===c?"":c}))}},"13d5":function(e,t,r){"use strict";var n=r("23e7"),i=r("d58f").left,a=r("a640"),c=r("2d00"),o=r("605d"),f=a("reduce"),l=!o&&c>79&&c<83;n({target:"Array",proto:!0,forced:!f||l},{reduce:function(e){return i(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"14c3":function(e,t,r){var n=r("c6b6"),i=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var a=r.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"284d":function(e,t,r){"use strict";var n=r("ade3"),i=r("5530"),a=r("7a23");function c(e,t,r,c,o,f){return Object(a["z"])(),Object(a["h"])(Object(a["J"])(r.variant),{class:["text",Object(i["a"])(Object(n["a"])({},"text__"+r.type,r.type),c.classes)],style:{"--text-size":r.size,"--text-weight":r.weight,"--text-line-height":r.lineHeight,"--text-color":c.colorTheme,"--text-opacity":r.opacity,"--text-mt":r.mt,"--text-mr":r.mr,"--text-mb":r.mb,"--text-ml":r.ml}},{default:Object(a["T"])((function(){return[Object(a["G"])(e.$slots,"default")]})),_:3},8,["class","style"])}r("a9e3"),r("13d5"),r("b64b");var o=r("0028"),f={name:"Text",inheritAttrs:!0,props:{variant:{type:String,default:"span"},type:{type:String,default:""},size:{type:String,default:"inherit"},weight:{type:String,default:"normal"},lineHeight:{type:String,default:"inherit"},mt:{type:String,default:"0"},mr:{type:String,default:"0"},mb:{type:String,default:"0"},ml:{type:String,default:"0"},color:{type:String,default:"inherit"},theme:{type:String,default:""},opacity:{type:[String,Number],default:"1"}},setup:function(e,t){var r=t.attrs,c=Object(a["f"])((function(){return Object.keys(r).reduce((function(e,t){return Object(i["a"])(Object(i["a"])({},e),{},Object(n["a"])({},"text__"+t,!0))}),{})})),f=Object(a["f"])((function(){return o["a"][e.theme]||e.color}));return{classes:c,colorTheme:f}}};r("045d");f.render=c;t["a"]=f},"498a":function(e,t,r){"use strict";var n=r("23e7"),i=r("58a8").trim,a=r("c8d2");n({target:"String",proto:!0,forced:a("trim")},{trim:function(){return i(this)}})},5319:function(e,t,r){"use strict";var n=r("d784"),i=r("825a"),a=r("50c4"),c=r("a691"),o=r("1d80"),f=r("8aa5"),l=r("0cb2"),u=r("14c3"),s=Math.max,d=Math.min,p=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var h=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=n.REPLACE_KEEPS_$0,x=h?"$":"$0";return[function(r,n){var i=o(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,i,n):t.call(String(i),r,n)},function(e,n){if(!h&&b||"string"===typeof n&&-1===n.indexOf(x)){var o=r(t,e,this,n);if(o.done)return o.value}var g=i(e),m=String(this),y="function"===typeof n;y||(n=String(n));var v=g.global;if(v){var E=g.unicode;g.lastIndex=0}var O=[];while(1){var j=u(g,m);if(null===j)break;if(O.push(j),!v)break;var k=String(j[0]);""===k&&(g.lastIndex=f(m,a(g.lastIndex),E))}for(var w="",S=0,M=0;M<O.length;M++){j=O[M];for(var R=String(j[0]),_=s(d(c(j.index),m.length),0),A=[],F=1;F<j.length;F++)A.push(p(j[F]));var B=j.groups;if(y){var T=[R].concat(A,_,m);void 0!==B&&T.push(B);var W=String(n.apply(void 0,T))}else W=l(R,m,_,A,B,n);_>=S&&(w+=m.slice(S,_)+W,S=_+R.length)}return w+m.slice(S)}]}))},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("1d80"),i=r("5899"),a="["+i+"]",c=RegExp("^"+a+a+"*"),o=RegExp(a+a+"*$"),f=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(c,"")),2&e&&(r=r.replace(o,"")),r}};e.exports={start:f(1),end:f(2),trim:f(3)}},"66c1":function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},"6d2b":function(e,t,r){"use strict";r("66c1")},"6eb6":function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("ad6d"),i=r("9f7f"),a=RegExp.prototype.exec,c=String.prototype.replace,o=a,f=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],s=f||u||l;s&&(o=function(e){var t,r,i,o,s=this,d=l&&s.sticky,p=n.call(s),h=s.source,b=0,x=e;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),x=String(e).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==e[s.lastIndex-1])&&(h="(?: "+h+")",x=" "+x,b++),r=new RegExp("^(?:"+h+")",p)),u&&(r=new RegExp("^"+h+"$(?!\\s)",p)),f&&(t=s.lastIndex),i=a.call(d?r:s,x),d?i?(i.input=i.input.slice(b),i[0]=i[0].slice(b),i.index=s.lastIndex,s.lastIndex+=i[0].length):s.lastIndex=0:f&&i&&(s.lastIndex=s.global?i.index+i[0].length:t),u&&i&&i.length>1&&c.call(i[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)})),i}),e.exports=o},"9f7f":function(e,t,r){"use strict";var n=r("d039");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a434:function(e,t,r){"use strict";var n=r("23e7"),i=r("23cb"),a=r("a691"),c=r("50c4"),o=r("7b0b"),f=r("65f0"),l=r("8418"),u=r("1dde"),s=u("splice"),d=Math.max,p=Math.min,h=9007199254740991,b="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!s},{splice:function(e,t){var r,n,u,s,x,g,m=o(this),y=c(m.length),v=i(e,y),E=arguments.length;if(0===E?r=n=0:1===E?(r=0,n=y-v):(r=E-2,n=p(d(a(t),0),y-v)),y+r-n>h)throw TypeError(b);for(u=f(m,n),s=0;s<n;s++)x=v+s,x in m&&l(u,s,m[x]);if(u.length=n,r<n){for(s=v;s<y-n;s++)x=s+n,g=s+r,x in m?m[g]=m[x]:delete m[g];for(s=y;s>y-n+r;s--)delete m[s-1]}else if(r>n)for(s=y-n;s>v;s--)x=s+n-1,g=s+r-1,x in m?m[g]=m[x]:delete m[g];for(s=0;s<r;s++)m[s+v]=arguments[s+2];return m.length=y-n+r,u}})},ac1f:function(e,t,r){"use strict";var n=r("23e7"),i=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ac84:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));r("5319"),r("ac1f");var n=r("b238"),i=r.n(n),a={mobile:{maxWidth:i.a.mobileMaxWidth.replace("px",""),minWidth:i.a.mobileMinWidth.replace("px","")},desktop:{minWidth:i.a.desktopMinWidth.replace("px","")}},c=r("7a23");r("498a"),r("a434"),r("159b"),r("b64b");function o(e){return isNaN(e)?e:"".concat(e,"px")}function f(e){var t="screen and ";return Array.isArray(e)?(t+="(min-width: ".concat(o(e[0]),")"),2===e.length&&(t+=" and (max-width: ".concat(o(e[1]),")")),t):isNaN(parseInt(e))?String(e).replace(/^@?media/i,"").trim():(t+="(max-width: ".concat(o(e),")"),t)}function l(e,t,r){if(!e[t])throw new Error('Event of type "'.concat(t,'" is not available for registration'));-1===e[t].indexOf(r)&&e[t].push(r)}function u(e,t,r){if(!e[t])throw new Error('Event of type "'.concat(t,'" is not available for unregistration'));if(void 0===r)e[t]=[];else{var n=e[t].indexOf(r);-1!==n&&e[t].splice(n,1)}}function s(e,t){e.forEach((function(e){return e(t)}))}function d(e,t,r){var n=window.matchMedia(f(t)),i={enter:[],leave:[]};r[e]={matches:n.matches,on:function(e,t){l(i,e,t)},off:function(e,t){u(i,e,t)}};var a=function(t){r[e].matches=t.matches,s(t.matches?i.enter:i.leave,n)};n.addListener(a),Object(c["v"])((function(){n.removeListener(a)}))}var p=function(e){var t=Object(c["D"])({});return Object.keys(e).forEach((function(r){d(r,e[r],t)})),t},h=p,b=function(){var e=h({mobile:[a.mobile.minWidth,a.mobile.maxWidth],desktop:[a.desktop.minWidth]}),t=Object(c["f"])((function(){return e.desktop.matches})),r=Object(c["f"])((function(){return e.mobile.matches}));return{breakpoints:e,isMobile:r,isDesktop:t}}},ad6d:function(e,t,r){"use strict";var n=r("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b238:function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},c6c8:function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},c8d2:function(e,t,r){var n=r("d039"),i=r("5899"),a="​᠎";e.exports=function(e){return n((function(){return!!i[e]()||a[e]()!=a||i[e].name!==e}))}},d1c0:function(e,t,r){"use strict";var n=r("7a23"),i={class:"text-header"};function a(e,t){return Object(n["z"])(),Object(n["h"])("header",i,[Object(n["G"])(e.$slots,"default")])}r("091e");const c={};c.render=a;t["a"]=c},d58f:function(e,t,r){var n=r("1c0b"),i=r("7b0b"),a=r("44ad"),c=r("50c4"),o=function(e){return function(t,r,o,f){n(r);var l=i(t),u=a(l),s=c(l.length),d=e?s-1:0,p=e?-1:1;if(o<2)while(1){if(d in u){f=u[d],d+=p;break}if(d+=p,e?d<0:s<=d)throw TypeError("Reduce of empty array with no initial value")}for(;e?d>=0:s>d;d+=p)d in u&&(f=r(f,u[d],d,l));return f}};e.exports={left:o(!1),right:o(!0)}},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),i=r("d039"),a=r("b622"),c=r("9263"),o=r("9112"),f=a("species"),l=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),s=a("replace"),d=function(){return!!/./[s]&&""===/./[s]("a","$0")}(),p=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,s){var h=a(e),b=!i((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),x=b&&!i((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[f]=function(){return r},r.flags="",r[h]=/./[h]),r.exec=function(){return t=!0,null},r[h](""),!t}));if(!b||!x||"replace"===e&&(!l||!u||d)||"split"===e&&!p){var g=/./[h],m=r(h,""[e],(function(e,t,r,n,i){return t.exec===c?b&&!i?{done:!0,value:g.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),y=m[0],v=m[1];n(String.prototype,e,y),n(RegExp.prototype,h,2==t?function(e,t){return v.call(e,this,t)}:function(e){return v.call(e,this)})}s&&o(RegExp.prototype[h],"sham",!0)}},ee61:function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},f2b0:function(e,t,r){"use strict";var n=r("7a23"),i={class:"exchange-coin-info"},a={class:"exchange-coin-info__body"},c={key:0,class:"exchange-coin-info__body-rate"},o={class:"exchange-coin-info__icon"};function f(e,t,r,f,l,u){var s=Object(n["H"])("Text"),d=Object(n["H"])("Icon");return Object(n["z"])(),Object(n["h"])("div",i,[Object(n["l"])("div",a,[Object(n["l"])(s,{theme:"primary",size:"14px",weight:"500","line-height":"17px",mb:"6px"},{default:Object(n["T"])((function(){return[Object(n["k"])(Object(n["L"])(r.label),1)]})),_:1}),Object(n["l"])(s,{variant:"p",size:f.isMobile?"28px":"32px","line-height":f.isMobile?"32px":"42px",weight:"bold",mb:f.isMobile?r.hideRate?"0":"8px":"0",mt:f.isMobile?r.hideRate?"11px":"8px":"0",color:"black"},{default:Object(n["T"])((function(){return[Object(n["k"])(Object(n["L"])(r.sum),1)]})),_:1},8,["size","line-height","mb","mt"]),r.hideRate?Object(n["i"])("",!0):(Object(n["z"])(),Object(n["h"])("div",c," 1 "+Object(n["L"])(f.coinLabel)+" = $"+Object(n["L"])(r.rate),1))]),Object(n["l"])("div",o,[Object(n["l"])(d,{name:r.coin.icon+"-circle",height:"60px",width:"60px"},null,8,["name"])])])}r("a9e3");var l=r("cbc2"),u=r("284d"),s=r("ac84"),d={name:"ExchangeCoinInfo",components:{Text:u["a"],Icon:l["a"]},props:{coin:{type:Object,default:function(){}},rate:{type:Number,default:0},hideRate:{type:Boolean,default:!1},sum:{type:Number,default:0},label:{type:String,default:""}},setup:function(e){var t=Object(s["a"])(),r=t.isMobile,i=Object(n["f"])((function(){var t,r;return null===(t=e.coin)||void 0===t||null===(r=t.key)||void 0===r?void 0:r.toUpperCase()}));return{isMobile:r,coinLabel:i}}};r("6d2b");d.render=f;t["a"]=d}}]);
//# sourceMappingURL=chunk-1149288c.8ba07adf.js.map