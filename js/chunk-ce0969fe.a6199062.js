(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce0969fe"],{"0028":function(t,e,r){"use strict";var n=r("c6c8"),a=r.n(n);e["a"]=a.a},"0cb2":function(t,e,r){var n=r("7b0b"),a=Math.floor,i="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,l,s,u){var f=r+t.length,d=l.length,p=c;return void 0!==s&&(s=n(s),p=o),i.call(u,p,(function(n,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(f);case"<":o=s[i.slice(1,-1)];break;default:var c=+i;if(0===c)return n;if(c>d){var u=a(c/10);return 0===u?n:u<=d?void 0===l[u-1]?i.charAt(1):l[u-1]+i.charAt(1):n}o=l[c-1]}return void 0===o?"":o}))}},"13d5":function(t,e,r){"use strict";var n=r("23e7"),a=r("d58f").left,i=r("a640"),o=r("2d00"),c=r("605d"),l=i("reduce"),s=!c&&o>79&&o<83;n({target:"Array",proto:!0,forced:!l||s},{reduce:function(t){return a(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"14c3":function(t,e,r){var n=r("c6b6"),a=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"233a":function(t,e,r){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},"284d":function(t,e,r){"use strict";var n=r("ade3"),a=r("5530"),i=r("7a23");function o(t,e,r,o,c,l){return Object(i["y"])(),Object(i["h"])(Object(i["I"])(r.variant),{class:["text",Object(a["a"])(Object(n["a"])({},"text__"+r.type,r.type),o.classes)],style:{"--text-size":r.size,"--text-weight":r.weight,"--text-line-height":r.lineHeight,"--text-color":o.colorTheme,"--text-opacity":r.opacity,"--text-mt":r.mt,"--text-mr":r.mr,"--text-mb":r.mb,"--text-ml":r.ml}},{default:Object(i["S"])((function(){return[Object(i["F"])(t.$slots,"default")]})),_:3},8,["class","style"])}r("13d5"),r("b64b");var c=r("0028"),l={name:"Text",inheritAttrs:!0,props:{variant:{type:String,default:"span"},type:{type:String,default:""},size:{type:String,default:"inherit"},weight:{type:String,default:"normal"},lineHeight:{type:String,default:"inherit"},mt:{type:String,default:"0"},mr:{type:String,default:"0"},mb:{type:String,default:"0"},ml:{type:String,default:"0"},color:{type:String,default:"black"},theme:{type:String,default:""},opacity:{type:String,default:"1"}},setup:function(t,e){var r=e.attrs,o=Object(i["f"])((function(){return Object.keys(r).reduce((function(t,e){return Object(a["a"])(Object(a["a"])({},t),{},Object(n["a"])({},"text__"+e,!0))}),{})})),l=Object(i["f"])((function(){return c["a"][t.theme]||t.color}));return{classes:o,colorTheme:l}}};r("8285");l.render=o;e["a"]=l},"456f":function(t,e,r){"use strict";var n=r("7a23"),a={key:0,class:"input__prepend"},i={class:"input__body"},o={class:"input__body-label",style:{position:"relative",opacity:0}},c={class:"input__body__field"},l={key:1,class:"input__append"},s={key:2,class:"input__error-text"};function u(t,e,r,u,f,d){var p=Object(n["G"])("Container"),h=Object(n["H"])("click-outside");return Object(n["T"])((Object(n["y"])(),Object(n["h"])(p,{bordered:"","box-shadow":"",variant:"label",class:["input",{input__error:r.error,"input__read-only":r.readOnly,"input__hide-shadow":r.hideShadow||r.readOnly}],style:{"--opacity":r.fullOpacity},onClick:u.onInputFocus},{default:Object(n["S"])((function(){return[t.$slots.prepend?(Object(n["y"])(),Object(n["h"])("div",a,[Object(n["F"])(t.$slots,"prepend")])):Object(n["i"])("",!0),Object(n["k"])("div",i,[Object(n["k"])("span",{class:["input__body-label",{"input__body-label_focused":u.isFocused||r.modelValue}]},Object(n["K"])(r.label),3),Object(n["k"])("span",o,Object(n["K"])(r.label),1),Object(n["k"])("div",c,[u.showPlaceholder?(Object(n["y"])(),Object(n["h"])("span",{key:0,class:"input__body__field-placeholder",style:r.placeholderStyles},Object(n["K"])(r.placeholder),5)):Object(n["i"])("",!0),Object(n["T"])(Object(n["k"])("input",{ref:"input",class:["input__body__field-input",{"input__body-field__opacity":r.opacity}],readonly:r.readOnly,disabled:r.disabled,type:r.type,"onUpdate:modelValue":e[1]||(e[1]=function(t){return u.inputValue=t})},null,10,["readonly","disabled","type"]),[[n["N"],u.inputValue]])])]),t.$slots.append?(Object(n["y"])(),Object(n["h"])("div",l,[Object(n["F"])(t.$slots,"append")])):Object(n["i"])("",!0),r.errorText&&r.error?(Object(n["y"])(),Object(n["h"])("div",s,Object(n["K"])(r.errorText),1)):Object(n["i"])("",!0)]})),_:1},8,["class","style","onClick"])),[[h,u.onInputBlur]])}r("a9e3");var f=r("eaf2"),d=r("dd7a"),p={name:"Input",directives:{clickOutside:d["a"]},components:{Container:f["a"]},emits:["update:modelValue","blur","focus"],inheritAttrs:!0,props:{type:{type:String,default:"text"},label:{type:String,default:""},modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},placeholderStyles:{type:Object,default:function(){return{}}},errorText:{type:String,default:""},error:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},opacity:{type:Boolean,default:!1},fullOpacity:{type:[Number,String],default:1},hideShadow:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup:function(t,e){var r=e.emit,a=Object(n["D"])(),i=Object(n["D"])(!1),o=Object(n["f"])({get:function(){return t.modelValue},set:function(t){r("update:modelValue",t)}}),c=Object(n["f"])((function(){return!o.value})),l=function(){i.value=!0,r("focus"),a.value.focus()},s=function(){i.value=!1,r("blur"),a.value.blur()};return{input:a,isFocused:i,inputValue:o,showPlaceholder:c,onInputBlur:s,onInputFocus:l}}};r("469f");p.render=u;e["a"]=p},"469f":function(t,e,r){"use strict";r("aeae")},"46dc":function(t,e,r){"use strict";r("233a")},"498a":function(t,e,r){"use strict";var n=r("23e7"),a=r("58a8").trim,i=r("c8d2");n({target:"String",proto:!0,forced:i("trim")},{trim:function(){return a(this)}})},5319:function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),i=r("50c4"),o=r("a691"),c=r("1d80"),l=r("8aa5"),s=r("0cb2"),u=r("14c3"),f=Math.max,d=Math.min,p=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var h=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=n.REPLACE_KEEPS_$0,b=h?"$":"$0";return[function(r,n){var a=c(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,a,n):e.call(String(a),r,n)},function(t,n){if(!h&&y||"string"===typeof n&&-1===n.indexOf(b)){var c=r(e,t,this,n);if(c.done)return c.value}var m=a(t),v=String(this),g="function"===typeof n;g||(n=String(n));var x=m.global;if(x){var O=m.unicode;m.lastIndex=0}var E=[];while(1){var _=u(m,v);if(null===_)break;if(E.push(_),!x)break;var w=String(_[0]);""===w&&(m.lastIndex=l(v,i(m.lastIndex),O))}for(var j="",k=0,S=0;S<E.length;S++){_=E[S];for(var F=String(_[0]),A=f(d(o(_.index),v.length),0),B=[],C=1;C<_.length;C++)B.push(p(_[C]));var M=_.groups;if(g){var T=[F].concat(B,A,v);void 0!==M&&T.push(M);var W=String(n.apply(void 0,T))}else W=s(F,v,A,B,M,n);A>=k&&(j+=v.slice(k,A)+W,k=A+F.length)}return j+v.slice(k)}]}))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),a=r("5899"),i="["+a+"]",o=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),l=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:l(1),end:l(2),trim:l(3)}},"7d12":function(t,e,r){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},8285:function(t,e,r){"use strict";r("cac1")},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9263:function(t,e,r){"use strict";var n=r("ad6d"),a=r("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,c=i,l=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=l||u||s;f&&(c=function(t){var e,r,a,c,f=this,d=s&&f.sticky,p=n.call(f),h=f.source,y=0,b=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),b=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(h="(?: "+h+")",b=" "+b,y++),r=new RegExp("^(?:"+h+")",p)),u&&(r=new RegExp("^"+h+"$(?!\\s)",p)),l&&(e=f.lastIndex),a=i.call(d?r:f,b),d?a?(a.input=a.input.slice(y),a[0]=a[0].slice(y),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:l&&a&&(f.lastIndex=f.global?a.index+a[0].length:e),u&&a&&a.length>1&&o.call(a[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),t.exports=c},"96ce":function(t,e,r){"use strict";r.r(e);var n=r("7a23"),a={class:"faq"};function i(t,e,r,i,o,c){var l=Object(n["G"])("Icon"),s=Object(n["G"])("Input"),u=Object(n["G"])("Text"),f=Object(n["G"])("Container");return Object(n["y"])(),Object(n["h"])("section",a,[Object(n["k"])(s,{placeholder:i.t("faq.placeholder"),opacity:!0,class:"faq__search"},{prepend:Object(n["S"])((function(){return[Object(n["k"])(l,{class:"deposit-page__email-notify-bell",name:"search"})]})),_:1},8,["placeholder"]),(Object(n["y"])(!0),Object(n["h"])(n["a"],null,Object(n["E"])(i.faqData,(function(t){return Object(n["y"])(),Object(n["h"])(f,{key:t.title,muted:i.isFaqActive(t),radius:"0",class:["faq__item",{"faq__item__off-shadow":i.isFaqActive(t)}]},{default:Object(n["S"])((function(){return[Object(n["k"])("div",{class:"faq__item__group",onClick:function(e){return i.setActiveFaq(t)}},[Object(n["k"])(u,{variant:"h2",class:"faq__item__title",size:i.isMobile?"14px":"16px",color:i.isFaqActive(t)?i.StyleVariables.primary:i.StyleVariables.black,weight:"500","line-height":"21px"},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(t.title),1)]})),_:2},1032,["size","color"]),Object(n["k"])(l,{class:"faq__item__expand",name:i.isFaqActive(t)?"close":"plus"},null,8,["name"])],8,["onClick"]),Object(n["T"])(Object(n["k"])("p",{class:"faq__item__text"},Object(n["K"])(t.text),513),[[n["P"],i.isFaqActive(t)]])]})),_:2},1032,["muted","class"])})),128))])}var o=r("47e2"),c=r("ac84"),l=r("cbc2"),s=r("284d"),u=r("456f"),f=r("eaf2"),d=r("0028"),p={name:"Faq",components:{Text:s["a"],Container:f["a"],Input:u["a"],Icon:l["a"]},setup:function(){var t=Object(o["b"])(),e=t.t,r=Object(c["a"])(),a=r.isMobile,i=Object(n["D"])([{title:"About forwarding limits",text:"When you want to sign into your account, you are prompted to authenticate with a username and a password – that’s the first verification layer.\n          Two-factor authentication works as an extra step in the process, a second security layer, that will reconfirm your identity.",isShow:!1},{title:"Using two-step verification",text:"When you want to sign into your account, you are prompted to authenticate with a username and a password – that’s the first verification layer.\n          Two-factor authentication works as an extra step in the process, a second security layer, that will reconfirm your identity.",isShow:!1},{title:"Usage of your phone number and address book",text:"When you want to sign into your account, you are prompted to authenticate with a username and a password – that’s the first verification layer.\n          Two-factor authentication works as an extra step in the process, a second security layer, that will reconfirm your identity.",isShow:!1},{title:"Use strong password",text:"When you want to sign into your account, you are prompted to authenticate with a username and a password – that’s the first verification layer.\n          Two-factor authentication works as an extra step in the process, a second security layer, that will reconfirm your identity.",isShow:!1},{title:"End-to-end encryption for business messages",text:"When you want to sign into your account, you are prompted to authenticate with a username and a password – that’s the first verification layer.\n          Two-factor authentication works as an extra step in the process, a second security layer, that will reconfirm your identity.",isShow:!1},{title:"How to link and use the security key",text:"When you want to sign into your account, you are prompted to authenticate with a username and a password – that’s the first verification layer.\n          Two-factor authentication works as an extra step in the process, a second security layer, that will reconfirm your identity.",isShow:!1}]),l=Object(n["D"])(null),s=function(t){l.value!==t.title?l.value=t.title:l.value=null},u=function(t){return l.value===t.title};return{t:e,faqData:i,isMobile:a,activeFaq:l,StyleVariables:d["a"],isFaqActive:u,setActiveFaq:s}}};r("46dc");p.render=i;e["default"]=p},"9db5":function(t,e,r){"use strict";r("7d12")},"9f7f":function(t,e,r){"use strict";var n=r("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a434:function(t,e,r){"use strict";var n=r("23e7"),a=r("23cb"),i=r("a691"),o=r("50c4"),c=r("7b0b"),l=r("65f0"),s=r("8418"),u=r("1dde"),f=u("splice"),d=Math.max,p=Math.min,h=9007199254740991,y="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f},{splice:function(t,e){var r,n,u,f,b,m,v=c(this),g=o(v.length),x=a(t,g),O=arguments.length;if(0===O?r=n=0:1===O?(r=0,n=g-x):(r=O-2,n=p(d(i(e),0),g-x)),g+r-n>h)throw TypeError(y);for(u=l(v,n),f=0;f<n;f++)b=x+f,b in v&&s(u,f,v[b]);if(u.length=n,r<n){for(f=x;f<g-n;f++)b=f+n,m=f+r,b in v?v[m]=v[b]:delete v[m];for(f=g;f>g-n+r;f--)delete v[f-1]}else if(r>n)for(f=g-n;f>x;f--)b=f+n-1,m=f+r-1,b in v?v[m]=v[b]:delete v[m];for(f=0;f<r;f++)v[f+x]=arguments[f+2];return v.length=g-n+r,u}})},ac1f:function(t,e,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ac84:function(t,e,r){"use strict";r.d(e,"a",(function(){return y}));r("5319"),r("ac1f");var n=r("b238"),a=r.n(n),i={mobile:{maxWidth:a.a.mobileMaxWidth.replace("px",""),minWidth:a.a.mobileMinWidth.replace("px","")},desktop:{minWidth:a.a.desktopMinWidth.replace("px","")}},o=r("7a23");r("498a"),r("a434"),r("159b"),r("b64b");function c(t){return isNaN(t)?t:"".concat(t,"px")}function l(t){var e="screen and ";return Array.isArray(t)?(e+="(min-width: ".concat(c(t[0]),")"),2===t.length&&(e+=" and (max-width: ".concat(c(t[1]),")")),e):isNaN(parseInt(t))?String(t).replace(/^@?media/i,"").trim():(e+="(max-width: ".concat(c(t),")"),e)}function s(t,e,r){if(!t[e])throw new Error('Event of type "'.concat(e,'" is not available for registration'));-1===t[e].indexOf(r)&&t[e].push(r)}function u(t,e,r){if(!t[e])throw new Error('Event of type "'.concat(e,'" is not available for unregistration'));if(void 0===r)t[e]=[];else{var n=t[e].indexOf(r);-1!==n&&t[e].splice(n,1)}}function f(t,e){t.forEach((function(t){return t(e)}))}function d(t,e,r){var n=window.matchMedia(l(e)),a={enter:[],leave:[]};r[t]={matches:n.matches,on:function(t,e){s(a,t,e)},off:function(t,e){u(a,t,e)}};var i=function(e){r[t].matches=e.matches,f(e.matches?a.enter:a.leave,n)};n.addListener(i),Object(o["u"])((function(){n.removeListener(i)}))}var p=function(t){var e=Object(o["C"])({});return Object.keys(t).forEach((function(r){d(r,t[r],e)})),e},h=p,y=function(){var t=h({mobile:[i.mobile.minWidth,i.mobile.maxWidth],desktop:[i.desktop.minWidth]}),e=Object(o["f"])((function(){return t.desktop.matches})),r=Object(o["f"])((function(){return t.mobile.matches}));return{breakpoints:t,isMobile:r,isDesktop:e}}},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},aeae:function(t,e,r){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},b238:function(t,e,r){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},c6c8:function(t,e,r){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},c8d2:function(t,e,r){var n=r("d039"),a=r("5899"),i="​᠎";t.exports=function(t){return n((function(){return!!a[t]()||i[t]()!=i||a[t].name!==t}))}},cac1:function(t,e,r){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},d58f:function(t,e,r){var n=r("1c0b"),a=r("7b0b"),i=r("44ad"),o=r("50c4"),c=function(t){return function(e,r,c,l){n(r);var s=a(e),u=i(s),f=o(s.length),d=t?f-1:0,p=t?-1:1;if(c<2)while(1){if(d in u){l=u[d],d+=p;break}if(d+=p,t?d<0:f<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:f>d;d+=p)d in u&&(l=r(l,u[d],d,s));return l}};t.exports={left:c(!1),right:c(!0)}},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),i=r("b622"),o=r("9263"),c=r("9112"),l=i("species"),s=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=i("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,f){var h=i(t),y=!a((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),b=y&&!a((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[l]=function(){return r},r.flags="",r[h]=/./[h]),r.exec=function(){return e=!0,null},r[h](""),!e}));if(!y||!b||"replace"===t&&(!s||!u||d)||"split"===t&&!p){var m=/./[h],v=r(h,""[t],(function(t,e,r,n,a){return e.exec===o?y&&!a?{done:!0,value:m.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),g=v[0],x=v[1];n(String.prototype,t,g),n(RegExp.prototype,h,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}f&&c(RegExp.prototype[h],"sham",!0)}},dd7a:function(t,e,r){"use strict";r("159b"),r("caad"),r("2532");e["a"]={beforeMount:function(t,e){var r,n,a=(null===(r=e.value)||void 0===r?void 0:r.handler)||e.value,i=(null===(n=e.value)||void 0===n?void 0:n.related)||[];t.clickOutsideEvent=function(e){var r=!0;i.forEach((function(t){(t===e.target||t.contains(e.target)||e.path.includes(t))&&(r=!1)})),(t===e.target||t.contains(e.target))&&(r=!1),r&&a(e,t)},document.body.addEventListener("click",t.clickOutsideEvent)},unmounted:function(t){document.body.removeEventListener("click",t.clickOutsideEvent)}}},eaf2:function(t,e,r){"use strict";var n=r("7a23");function a(t,e,r,a,i,o){return Object(n["y"])(),Object(n["h"])(Object(n["I"])(r.variant),Object(n["r"])(t.$attrs,{class:[{container__boxShadow:r.boxShadow,container__muted:r.muted,container__border:r.bordered,container__active:r.active},"container"],style:{"--border-radius":r.radius,"--bg":r.backgroundColor}}),{default:Object(n["S"])((function(){return[Object(n["F"])(t.$slots,"default")]})),_:3},16,["class","style"])}var i={name:"Container",inheritAttrs:!0,props:{variant:{type:String,default:"div"},boxShadow:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},active:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},radius:{type:String,default:"6px"},backgroundColor:{type:String,default:"transparent"}}};r("9db5");i.render=a;e["a"]=i}}]);
//# sourceMappingURL=chunk-ce0969fe.a6199062.js.map