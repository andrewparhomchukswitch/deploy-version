(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d566377"],{"0cb2":function(t,e,n){var c=n("7b0b"),r=Math.floor,i="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,a=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,l,s,u){var f=n+t.length,d=l.length,p=a;return void 0!==s&&(s=c(s),p=o),i.call(u,p,(function(c,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(f);case"<":o=s[i.slice(1,-1)];break;default:var a=+i;if(0===a)return c;if(a>d){var u=r(a/10);return 0===u?c:u<=d?void 0===l[u-1]?i.charAt(1):l[u-1]+i.charAt(1):c}o=l[a-1]}return void 0===o?"":o}))}},"14c3":function(t,e,n){var c=n("c6b6"),r=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==c(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"484e":function(t,e,n){"use strict";n("4d8a")},"4d8a":function(t,e,n){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},5319:function(t,e,n){"use strict";var c=n("d784"),r=n("825a"),i=n("50c4"),o=n("a691"),a=n("1d80"),l=n("8aa5"),s=n("0cb2"),u=n("14c3"),f=Math.max,d=Math.min,p=function(t){return void 0===t?t:String(t)};c("replace",2,(function(t,e,n,c){var b=c.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,h=c.REPLACE_KEEPS_$0,g=b?"$":"$0";return[function(n,c){var r=a(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,r,c):e.call(String(r),n,c)},function(t,c){if(!b&&h||"string"===typeof c&&-1===c.indexOf(g)){var a=n(e,t,this,c);if(a.done)return a.value}var O=r(t),j=String(this),v="function"===typeof c;v||(c=String(c));var x=O.global;if(x){var m=O.unicode;O.lastIndex=0}var y=[];while(1){var _=u(O,j);if(null===_)break;if(y.push(_),!x)break;var E=String(_[0]);""===E&&(O.lastIndex=l(j,i(O.lastIndex),m))}for(var w="",k=0,A=0;A<y.length;A++){_=y[A];for(var C=String(_[0]),I=f(d(o(_.index),j.length),0),B=[],F=1;F<_.length;F++)B.push(p(_[F]));var T=_.groups;if(v){var R=[C].concat(B,I,j);void 0!==T&&R.push(T);var S=String(c.apply(void 0,R))}else S=s(C,j,I,B,T,c);I>=k&&(w+=j.slice(k,I)+S,k=I+C.length)}return w+j.slice(k)}]}))},"54bd":function(t,e,n){"use strict";var c=n("7a23"),r={key:0,class:"lang__selected"},i={class:"d-flex justify-content-center align-items-center"};function o(t,e,n,o,a,l){var s=Object(c["H"])("Icon"),u=Object(c["H"])("Text"),f=Object(c["H"])("Select");return Object(c["z"])(),Object(c["h"])(f,Object(c["s"])(t.$attrs,{modelValue:o.lang,"onUpdate:modelValue":e[1]||(e[1]=function(t){return o.lang=t}),options:o.selectOptions,"hide-on-click":"","show-arrow":n.showArrow,class:"lang"}),{selected:Object(c["T"])((function(){return[t.$slots.default?Object(c["G"])(t.$slots,"default",{key:1,lang:o.lang}):(Object(c["z"])(),Object(c["h"])("div",r,[Object(c["l"])(s,{name:o.lang.label},null,8,["name"])]))]})),option:Object(c["T"])((function(t){var e=t.option;return[Object(c["l"])("div",i,[Object(c["l"])(s,{name:e.label},null,8,["name"]),Object(c["l"])(u,{type:"uppercase",ml:"8px",weight:"500",size:"14px"},{default:Object(c["T"])((function(){return[Object(c["k"])(Object(c["L"])(e.value),1)]})),_:2},1024)])]})),_:1},16,["modelValue","options","show-arrow"])}var a=n("47e2"),l=n("c1df"),s=n.n(l),u=n("cbc2");function f(t,e,n,r,i,o){var a=Object(c["H"])("Icon"),l=Object(c["H"])("Container"),s=Object(c["I"])("click-outside");return Object(c["U"])((Object(c["z"])(),Object(c["h"])(l,Object(c["s"])(t.$attrs,{"background-color":"white",class:"select"}),{default:Object(c["T"])((function(){return[Object(c["l"])("div",{class:"select__body",onClick:e[1]||(e[1]=function(t){return r.showDropdown=!r.showDropdown})},[Object(c["G"])(t.$slots,"selected"),n.showArrow?(Object(c["z"])(),Object(c["h"])(a,{key:0,name:"chevron-down",class:"select__body__arrow"})):Object(c["i"])("",!0)]),r.showDropdown?(Object(c["z"])(),Object(c["h"])(l,{key:0,"box-shadow":"","background-color":"white",class:["select__options","select__options-"+n.dropdownSide]},{default:Object(c["T"])((function(){return[(Object(c["z"])(!0),Object(c["h"])(c["a"],null,Object(c["F"])(r.filteredOptions,(function(e){return Object(c["z"])(),Object(c["h"])("div",{key:e.value,class:["select__options__item",{select__options__item_selected:e.value===n.modelValue.value}],onClick:function(t){return r.handleChange(e)}},[Object(c["G"])(t.$slots,"option",{option:e})],10,["onClick"])})),128))]})),_:1},8,["class"])):Object(c["i"])("",!0)]})),_:3},16)),[[s,r.hideDropdown]])}n("4de4");var d=n("eaf2"),p=n("dd7a"),b={name:"Select",components:{Container:d["a"],Icon:u["a"]},inheritAttrs:!0,emits:["update:modelValue"],props:{options:{type:Array,default:function(){return[]}},modelValue:{type:Object,default:function(){return{}}},showArrow:{type:Boolean,default:!1},dropdownSide:{type:String,default:"top"},isFilterOption:{type:Boolean,default:!1},hideOnClick:{type:Boolean,default:!1}},directives:{clickOutside:p["a"]},setup:function(t,e){var n=e.emit,r=Object(c["E"])(!1),i=function(){r.value=!1},o=function(e){t.hideOnClick&&i(),a.value=e},a=Object(c["f"])({get:function(){return t.modelValue},set:function(t){n("update:modelValue",t)}}),l=Object(c["f"])((function(){return t.isFilterOption?t.options.filter((function(e){return e.value!==t.modelValue.value})):t.options}));return{showDropdown:r,filteredOptions:l,hideDropdown:i,handleChange:o}}};n("f166");b.render=f;var h=b,g=n("284d"),O={name:"Lang",inheritAttrs:!0,components:{Text:g["a"],Select:h,Icon:u["a"]},props:{showArrow:{type:Boolean,default:!1}},setup:function(){var t=Object(a["b"])(),e=t.locale,n=Object(c["E"])([{label:"us",value:"en",text:"English"},{label:"ru",value:"ru",text:"Russian"},{label:"cn",value:"cn",text:"Chinese"}]),r=Object(c["E"])(n.value[0]);return Object(c["R"])(r,(function(t){s.a.locale(t.value),e.value=t.value})),{lang:r,selectOptions:n}}};n("7ac7");O.render=o;e["a"]=O},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var c=n("1d80"),r=n("5899"),i="["+r+"]",o=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),l=function(t){return function(e){var n=String(c(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:l(1),end:l(2),trim:l(3)}},"7ac7":function(t,e,n){"use strict";n("c744")},"88e5":function(t,e,n){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},"8aa5":function(t,e,n){"use strict";var c=n("6547").charAt;t.exports=function(t,e,n){return e+(n?c(t,e).length:1)}},"8d6f":function(t,e,n){"use strict";n("f53a")},"8ff1":function(t,e,n){"use strict";n.r(e);var c=n("7a23"),r={class:"sign-in"},i={class:"sign-in-container"},o={class:"sign-in__lang"},a={class:"sign-in__logo"},l={class:"sign-in__info"},s={class:"sign-in__info__text"};function u(t,e,n,u,f,d){var p=Object(c["H"])("Lang"),b=Object(c["H"])("Icon");return Object(c["z"])(),Object(c["h"])("section",r,[Object(c["l"])("main",i,[Object(c["l"])("div",o,[Object(c["l"])(p,{"show-arrow":"",bordered:"","box-shadow":""})]),Object(c["l"])("div",a,[Object(c["l"])(b,{class:"sign-in__logo-icon",name:"logo-icon"})]),(Object(c["z"])(),Object(c["h"])(c["b"],null,[(Object(c["z"])(),Object(c["h"])(Object(c["J"])(u.activeComponent),{onToAuthentication:u.changeComponent,onToLogin:u.changeComponent},null,8,["onToAuthentication","onToLogin"]))],1024))]),Object(c["l"])("div",l,[Object(c["l"])(b,{class:"sign-in__icon__access",name:"access"}),Object(c["l"])("div",s,Object(c["L"])(u.t("signIn.access")),1)])])}var f=n("47e2"),d=n("cbc2"),p=n("54bd"),b={class:"login"},h={key:0,class:"login__errorText"};function g(t,e,n,r,i,o){var a=Object(c["H"])("Icon"),l=Object(c["H"])("Input"),s=Object(c["H"])("Button");return Object(c["z"])(),Object(c["h"])("section",b,[Object(c["l"])(l,{class:"login__username",placeholder:r.t("signIn.username"),opacity:!0},{prepend:Object(c["T"])((function(){return[Object(c["l"])(a,{class:"login__username__icon",name:"username"})]})),_:1},8,["placeholder"]),Object(c["l"])(l,{class:"login__password",placeholder:r.t("signIn.password"),opacity:!0},{prepend:Object(c["T"])((function(){return[Object(c["l"])(a,{class:"login__password__icon",name:"password"})]})),_:1},8,["placeholder"]),r.error?(Object(c["z"])(),Object(c["h"])("p",h,Object(c["L"])(r.t("signIn.errorMessage")),1)):Object(c["i"])("",!0),Object(c["l"])(s,{class:"login__btn",type:"primary",onClick:r.toAuthentication},{default:Object(c["T"])((function(){return[Object(c["k"])(Object(c["L"])(r.t("signIn.signInButton")),1)]})),_:1},8,["onClick"])])}var O=n("456f"),j=n("0dc7"),v={name:"Login",components:{Icon:d["a"],Input:O["a"],Button:j["a"]},setup:function(t,e){var n=e.emit,r=Object(f["b"])(),i=r.t,o=Object(c["E"])(!0),a=function(){n("toAuthentication","Authentication")};return{t:i,toAuthentication:a,error:o}}};n("8d6f");v.render=g;var x=v,m={class:"authentication"},y={class:"authentication__text"},_={class:"authentication__sub-text"},E={key:0,class:"authentication__error-message"},w={class:"authentication__group"};function k(t,e,n,r,i,o){var a=Object(c["H"])("InputCode"),l=Object(c["H"])("Button");return Object(c["z"])(),Object(c["h"])("section",m,[Object(c["l"])("p",y,Object(c["L"])(r.t("authentication.twoFactor")),1),Object(c["l"])("p",_,Object(c["L"])(r.t("authentication.subText",{app:r.authenticationApp||""})),1),Object(c["l"])(a,{class:"authentication__input"}),r.error?(Object(c["z"])(),Object(c["h"])("p",E,Object(c["L"])(r.t("authentication.invalidCode")),1)):Object(c["i"])("",!0),Object(c["l"])("div",w,[Object(c["l"])(l,{class:"authentication__group-btn",type:"primary"},{default:Object(c["T"])((function(){return[Object(c["k"])(Object(c["L"])(r.t("authentication.verifyBtn")),1)]})),_:1}),Object(c["l"])(l,{class:"authentication__group-btn",onClick:r.goBack},{default:Object(c["T"])((function(){return[Object(c["k"])(Object(c["L"])(r.t("authentication.backBtn")),1)]})),_:1},8,["onClick"])])])}var A=n("7109"),C={name:"Authentication",components:{Button:j["a"],InputCode:A["a"]},setup:function(t,e){var n=e.emit,r=Object(f["b"])(),i=r.t,o=Object(c["E"])("2FA"),a=Object(c["E"])(!0),l=function(){n("toLogin","Login")};return{t:i,authenticationApp:o,error:a,goBack:l}}};n("a3ca");C.render=k;var I=C,B={name:"SignIn",components:{Icon:d["a"],Lang:p["a"],Login:x,Authentication:I},setup:function(){var t=Object(f["b"])(),e=t.t,n=Object(c["E"])("Login"),r=function(t){n.value=t};return{t:e,activeComponent:n,changeComponent:r}}};n("484e");B.render=u;e["default"]=B},9263:function(t,e,n){"use strict";var c=n("ad6d"),r=n("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,a=i,l=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=l||u||s;f&&(a=function(t){var e,n,r,a,f=this,d=s&&f.sticky,p=c.call(f),b=f.source,h=0,g=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(b="(?: "+b+")",g=" "+g,h++),n=new RegExp("^(?:"+b+")",p)),u&&(n=new RegExp("^"+b+"$(?!\\s)",p)),l&&(e=f.lastIndex),r=i.call(d?n:f,g),d?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=f.lastIndex,f.lastIndex+=r[0].length):f.lastIndex=0:l&&r&&(f.lastIndex=f.global?r.index+r[0].length:e),u&&r&&r.length>1&&o.call(r[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(r[a]=void 0)})),r}),t.exports=a},"9f7f":function(t,e,n){"use strict";var c=n("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=c((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=c((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a3ca:function(t,e,n){"use strict";n("e701")},ac1f:function(t,e,n){"use strict";var c=n("23e7"),r=n("9263");c({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,n){"use strict";var c=n("825a");t.exports=function(){var t=c(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},c744:function(t,e,n){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},d784:function(t,e,n){"use strict";n("ac1f");var c=n("6eeb"),r=n("d039"),i=n("b622"),o=n("9263"),a=n("9112"),l=i("species"),s=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=i("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var b=i(t),h=!r((function(){var e={};return e[b]=function(){return 7},7!=""[t](e)})),g=h&&!r((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[b]=/./[b]),n.exec=function(){return e=!0,null},n[b](""),!e}));if(!h||!g||"replace"===t&&(!s||!u||d)||"split"===t&&!p){var O=/./[b],j=n(b,""[t],(function(t,e,n,c,r){return e.exec===o?h&&!r?{done:!0,value:O.call(e,n,c)}:{done:!0,value:t.call(n,e,c)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),v=j[0],x=j[1];c(String.prototype,t,v),c(RegExp.prototype,b,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}f&&a(RegExp.prototype[b],"sham",!0)}},e701:function(t,e,n){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},f166:function(t,e,n){"use strict";n("88e5")},f53a:function(t,e,n){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}}}]);
//# sourceMappingURL=chunk-6d566377.b5f769cb.js.map