(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10d63c83"],{"0cb2":function(e,t,n){var c=n("7b0b"),r=Math.floor,i="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,a=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,l,f,u){var s=n+e.length,d=l.length,b=a;return void 0!==f&&(f=c(f),b=o),i.call(u,b,(function(c,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(s);case"<":o=f[i.slice(1,-1)];break;default:var a=+i;if(0===a)return c;if(a>d){var u=r(a/10);return 0===u?c:u<=d?void 0===l[u-1]?i.charAt(1):l[u-1]+i.charAt(1):c}o=l[a-1]}return void 0===o?"":o}))}},"14c3":function(e,t,n){var c=n("c6b6"),r=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==c(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"185a":function(e,t,n){"use strict";var c=n("7a23");function r(e,t,n,r,i,o){return Object(c["y"])(),Object(c["h"])(Object(c["I"])(n.variant),{class:[{container__boxShadow:n.boxShadow,container__muted:n.muted,container__border:n.bordered,container__active:n.active},"container"],style:{"--border-radius":n.radius,"--bg":n.backgroundColor}},{default:Object(c["S"])((function(){return[Object(c["F"])(e.$slots,"default")]})),_:3},8,["class","style"])}var i={name:"Container",props:{variant:{type:String,default:"div"},boxShadow:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},active:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},radius:{type:String,default:"6px"},backgroundColor:{type:String,default:"transparent"}}};n("6886");i.render=r;t["a"]=i},"1a6c":function(e,t,n){"use strict";t["a"]={beforeMount:function(e,t){e.clickOutsideEvent=function(n){e===n.target||e.contains(n.target)||t.value(n,e)},document.body.addEventListener("click",e.clickOutsideEvent)},unmounted:function(e){document.body.removeEventListener("click",e.clickOutsideEvent)}}},2098:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"28c3":function(e,t,n){"use strict";n("b048")},"334b":function(e,t,n){"use strict";var c=n("7a23"),r={key:0,class:"input__prepend"},i={class:"input__body"},o={class:"input__body-label"},a={class:"input__body__field"},l={key:1,class:"input__append"},f={key:2,class:"input__error-text"};function u(e,t,n,u,s,d){var b=Object(c["G"])("Container");return Object(c["y"])(),Object(c["h"])(b,{bordered:"","box-shadow":"",variant:"label",class:["input",{input__error:n.error,"input__read-only":n.readOnly,"input__hide-shadow":n.hideShadow||n.readOnly}],style:{"--opacity":n.fullOpacity}},{default:Object(c["S"])((function(){return[e.$slots.prepend?(Object(c["y"])(),Object(c["h"])("div",r,[Object(c["F"])(e.$slots,"prepend")])):Object(c["i"])("",!0),Object(c["k"])("div",i,[Object(c["k"])("span",o,Object(c["K"])(n.label),1),Object(c["k"])("div",a,[u.showPlaceholder?(Object(c["y"])(),Object(c["h"])("span",{key:0,class:"input__body__field-placeholder",style:n.placeholderStyles},Object(c["K"])(n.placeholder),5)):Object(c["i"])("",!0),Object(c["T"])(Object(c["k"])("input",{class:["input__body__field-input",{"input__body-field__opacity":n.opacity}],readonly:n.readOnly,disabled:n.disabled,type:n.type,"onUpdate:modelValue":t[1]||(t[1]=function(e){return u.inputValue=e}),onBlur:t[2]||(t[2]=function(t){return e.$emit("blur")})},null,42,["readonly","disabled","type"]),[[c["N"],u.inputValue]])])]),e.$slots.append?(Object(c["y"])(),Object(c["h"])("div",l,[Object(c["F"])(e.$slots,"append")])):Object(c["i"])("",!0),n.errorText&&n.error?(Object(c["y"])(),Object(c["h"])("div",f,Object(c["K"])(n.errorText),1)):Object(c["i"])("",!0)]})),_:1},8,["class","style"])}n("a9e3");var s=n("185a"),d={name:"Input",components:{Container:s["a"]},emits:["update:modelValue","blur"],inheritAttrs:!0,props:{type:{type:String,default:"text"},label:{type:String,default:""},modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},placeholderStyles:{type:Object,default:function(){return{}}},errorText:{type:String,default:""},error:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},opacity:{type:Boolean,default:!1},fullOpacity:{type:[Number,String],default:1},hideShadow:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit,r=Object(c["f"])({get:function(){return e.modelValue},set:function(e){n("update:modelValue",e)}}),i=Object(c["f"])((function(){return!r.value}));return{showPlaceholder:i,inputValue:r}}};n("bb4a");d.render=u;t["a"]=d},3724:function(e,t,n){"use strict";var c=n("7a23"),r={class:"tooltip"};function i(e,t,n,i,o,a){return Object(c["y"])(),Object(c["h"])("div",r,[Object(c["F"])(e.$slots,"default"),Object(c["k"])("div",{class:["tooltip__content",{tooltip__content__arrow:n.showArrow}]},[Object(c["T"])(Object(c["k"])("span",{class:"text"},Object(c["K"])(n.text),513),[[c["P"],n.text]])],2)])}var o={name:"Tooltip",props:{text:{type:String,default:""},showArrow:{type:Boolean,default:!0}}};n("e14c");o.render=i;t["a"]=o},3932:function(e,t,n){"use strict";var c=n("7a23"),r={class:"button__label"};function i(e,t,n,i,o,a){return Object(c["y"])(),Object(c["h"])("button",{class:["button",{"button__default-padding":n.defaultPadding}],style:{"--background-color":i.StyleVariables[n.type],"--color":i.StyleVariables["t".concat(n.type)],"--font-size":n.fontSize}},[Object(c["k"])("span",r,[Object(c["F"])(e.$slots,"default")])],6)}var o=n("c07e"),a={name:"Button",props:{type:{type:String,default:"default"},defaultPadding:{type:Boolean,default:!1},fontSize:{type:String,default:"16px"}},setup:function(){return{StyleVariables:o["a"]}}};n("ec23");a.render=i;t["a"]=a},5319:function(e,t,n){"use strict";var c=n("d784"),r=n("825a"),i=n("50c4"),o=n("a691"),a=n("1d80"),l=n("8aa5"),f=n("0cb2"),u=n("14c3"),s=Math.max,d=Math.min,b=function(e){return void 0===e?e:String(e)};c("replace",2,(function(e,t,n,c){var y=c.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,p=c.REPLACE_KEEPS_$0,h=y?"$":"$0";return[function(n,c){var r=a(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r,c):t.call(String(r),n,c)},function(e,c){if(!y&&p||"string"===typeof c&&-1===c.indexOf(h)){var a=n(t,e,this,c);if(a.done)return a.value}var v=r(e),m=String(this),O="function"===typeof c;O||(c=String(c));var g=v.global;if(g){var _=v.unicode;v.lastIndex=0}var j=[];while(1){var E=u(v,m);if(null===E)break;if(j.push(E),!g)break;var k=String(E[0]);""===k&&(v.lastIndex=l(m,i(v.lastIndex),_))}for(var C="",x=0,S=0;S<j.length;S++){E=j[S];for(var F=String(E[0]),B=s(d(o(E.index),m.length),0),w=[],A=1;A<E.length;A++)w.push(b(E[A]));var D=E.groups;if(O){var T=[F].concat(w,B,m);void 0!==D&&T.push(D);var I=String(c.apply(void 0,T))}else I=f(F,m,B,w,D,c);B>=x&&(C+=m.slice(x,B)+I,x=B+F.length)}return C+m.slice(x)}]}))},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var c=n("1d80"),r=n("5899"),i="["+r+"]",o=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),l=function(e){return function(t){var n=String(c(t));return 1&e&&(n=n.replace(o,"")),2&e&&(n=n.replace(a,"")),n}};e.exports={start:l(1),end:l(2),trim:l(3)}},"67f5":function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},6886:function(e,t,n){"use strict";n("ba74")},"6c97":function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"790a":function(e,t,n){"use strict";n("b90e")},"7f58":function(e,t,n){"use strict";t["a"]=[{title:"BTC",subtitle:"Litecoin",key:"btc",icon:"btc",rate:36251.42},{title:"LTC",subtitle:"Litecoin",key:"ltc",icon:"ltc",rate:160.51},{title:"ETH",subtitle:"Litecoin",disabled:!0,key:"eth",icon:"eth",rate:36251.42},{title:"XMR",subtitle:"Monero",key:"xmr",rate:36251.42,icon:"xmr"},{title:"USDT",subtitle:"ERC-20",key:"usdt",rate:36251.42,icon:"usdt"},{title:"Perfect Money",subtitle:null,key:"pm",rate:36251.42,icon:"pm"}]},"8a15":function(e,t,n){"use strict";n("fce0")},"8aa5":function(e,t,n){"use strict";var c=n("6547").charAt;e.exports=function(e,t,n){return t+(n?c(e,t).length:1)}},9263:function(e,t,n){"use strict";var c=n("ad6d"),r=n("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,a=i,l=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),f=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],s=l||u||f;s&&(a=function(e){var t,n,r,a,s=this,d=f&&s.sticky,b=c.call(s),y=s.source,p=0,h=e;return d&&(b=b.replace("y",""),-1===b.indexOf("g")&&(b+="g"),h=String(e).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==e[s.lastIndex-1])&&(y="(?: "+y+")",h=" "+h,p++),n=new RegExp("^(?:"+y+")",b)),u&&(n=new RegExp("^"+y+"$(?!\\s)",b)),l&&(t=s.lastIndex),r=i.call(d?n:s,h),d?r?(r.input=r.input.slice(p),r[0]=r[0].slice(p),r.index=s.lastIndex,s.lastIndex+=r[0].length):s.lastIndex=0:l&&r&&(s.lastIndex=s.global?r.index+r[0].length:t),u&&r&&r.length>1&&o.call(r[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(r[a]=void 0)})),r}),e.exports=a},9430:function(e,t,n){"use strict";var c=n("7a23"),r={class:"tools"};function i(e,t,n,i,o,a){return Object(c["y"])(),Object(c["h"])("section",r,[(Object(c["y"])(!0),Object(c["h"])(c["a"],null,Object(c["E"])(n.tools,(function(e,t){return Object(c["y"])(),Object(c["h"])("div",{key:t,class:["tools__tool",{"tools__tool-hover":!e.component}],onClick:function(t){return i.handleClick(e)}},[(Object(c["y"])(),Object(c["h"])(Object(c["I"])(e.component||"Icon"),{name:e.icon},null,8,["name"]))],10,["onClick"])})),128))])}n("d3b7"),n("3ca3"),n("ddb0");var o=n("6c02"),a=n("00a1"),l=n("3756"),f=[{icon:"bell",title:"Notifications",component:"notifications"},{icon:"per-cent",title:"Per cents",to:l["c"].FEE_SCHEDULE}],u={name:"Tools",components:{Icon:a["a"],Notifications:Object(c["l"])((function(){return n.e("chunk-601da48f").then(n.bind(null,"8cc6"))}))},props:{tools:{type:Array,default:function(){return f}}},setup:function(){var e=Object(o["d"])(),t=function(t){if(t.to)e.push({name:t.to});else if(t.copyUrl){var n=document.createElement("input"),c=window.location.href;document.body.appendChild(n),n.value=c,n.select(),document.execCommand("copy"),document.body.removeChild(n)}};return{handleClick:t}}};n("8a15");u.render=i;t["a"]=u},"977e":function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"9f7f":function(e,t,n){"use strict";var c=n("d039");function r(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=c((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=c((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a5c1:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},ac1f:function(e,t,n){"use strict";var c=n("23e7"),r=n("9263");c({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,t,n){"use strict";var c=n("825a");e.exports=function(){var e=c(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},aef8:function(e,t,n){"use strict";n("2098")},b037:function(e,t,n){"use strict";n("977e")},b048:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},b1fe:function(e,t,n){"use strict";n("fa31")},b65e:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},b90e:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},b9cb:function(e,t,n){"use strict";n("67f5")},ba74:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},bb4a:function(e,t,n){"use strict";n("b65e")},c07e:function(e,t,n){"use strict";var c=n("6c97"),r=n.n(c);t["a"]=r.a},c1bc:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r={class:"home"};function i(e,t,n,i,o,a){var l=Object(c["G"])("Tools"),f=Object(c["G"])("CoinExchange"),u=Object(c["G"])("CoinForm");return Object(c["y"])(),Object(c["h"])("section",r,[Object(c["k"])(l),Object(c["k"])(f,{class:"home__exchange"}),Object(c["k"])(u,{onSubmit:i.confirmExchange,class:"home__form"},null,8,["onSubmit"])])}var o={class:"coin-exchange"},a={class:"coin-exchange__coin-block"},l={class:"coin-exchange__icon"},f={class:"coin-exchange__coin-block"};function u(e,t,n,r,i,u){var s,d,b=Object(c["G"])("CoinExchangeContainer"),y=Object(c["G"])("SelectCurrency"),p=Object(c["G"])("Icon"),h=Object(c["H"])("click-outside");return Object(c["y"])(),Object(c["h"])("div",o,[Object(c["T"])(Object(c["k"])("div",a,[Object(c["k"])(b,{label:r.t("common.send"),coin:null===(s=r.sendCoin)||void 0===s?void 0:s.key,rate:136.23,onClick:t[1]||(t[1]=function(e){return r.showSelectHandler("send")})},null,8,["label","coin","rate"]),"send"===r.showSelect?(Object(c["y"])(),Object(c["h"])(y,{key:0,class:"coin-exchange__select left",onSelect:t[2]||(t[2]=function(e){return r.onSelectCurrency(e,"send")})})):Object(c["i"])("",!0)],512),[[h,function(){return r.hideSelectHandler("send")}]]),Object(c["k"])("div",l,[Object(c["k"])(p,{name:"exchange",onClick:r.switchCoins},null,8,["onClick"])]),Object(c["T"])(Object(c["k"])("div",f,[Object(c["k"])(b,{label:r.t("common.receive"),coin:null===(d=r.receiveCoin)||void 0===d?void 0:d.key,rate:9036.23,onClick:t[3]||(t[3]=function(e){return r.showSelectHandler("receive")})},null,8,["label","coin","rate"]),"receive"===r.showSelect?(Object(c["y"])(),Object(c["h"])(y,{key:0,class:"coin-exchange__select right",onSelect:t[4]||(t[4]=function(e){return r.onSelectCurrency(e,"receive")})})):Object(c["i"])("",!0)],512),[[h,function(){return r.hideSelectHandler("receive")}]])])}var s=n("5530"),d=n("f5b6"),b=n("47e2"),y={class:"coin-exchange-container"},p={class:"coin-exchange-container__label"};function h(e,t,n,r,i,o){var a=Object(c["G"])("CoinContainer"),l=Object(c["G"])("Container");return Object(c["y"])(),Object(c["h"])("div",y,[Object(c["k"])("p",p,Object(c["K"])(n.label),1),Object(c["k"])(l,{bordered:"","box-shadow":"",class:"coin-exchange-container__body"},{default:Object(c["S"])((function(){return[Object(c["k"])(a,{title:r.coinLabel,subtitle:r.rateLabel,coin:n.coin},null,8,["title","subtitle","coin"])]})),_:1})])}n("a9e3");var v={class:"coin-container__info"},m={class:"coin-container__info-description"};function O(e,t,n,r,i,o){var a=Object(c["G"])("Icon");return Object(c["y"])(),Object(c["h"])("div",{class:["coin-container",{disabled:n.disabled}]},[Object(c["k"])(a,{name:n.coin+"-circle",class:"coin-container__icon"},null,8,["name"]),Object(c["k"])("div",v,[Object(c["k"])("h6",{class:[n.subtitle?"":"coin-container__info-header-empty","coin-container__info-header"]},Object(c["K"])(n.title),3),Object(c["k"])("h6",m,Object(c["K"])(n.subtitle),1)])],2)}var g=n("00a1"),_={name:"CoinContainer",components:{Icon:g["a"]},props:{coin:{type:String,required:!0},subtitle:{type:String,default:""},title:{type:String,default:""},disabled:{type:Boolean,default:!1}}};n("b037");_.render=O;var j=_,E=n("185a"),k={name:"CoinExchangeContainer",components:{Container:E["a"],CoinContainer:j},props:{coin:{type:String,required:!0},rate:{type:Number,default:0},label:{type:String,default:""}},setup:function(e){var t=Object(c["f"])((function(){var t;return null===(t=e.coin)||void 0===t?void 0:t.toUpperCase()})),n=Object(c["f"])((function(){return"$"+e.rate}));return{coinLabel:t,rateLabel:n}}};n("b9cb");k.render=h;var C=k;function x(e,t,n,r,i,o){var a=Object(c["G"])("CoinContainer"),l=Object(c["G"])("Container");return Object(c["y"])(),Object(c["h"])(l,{bordered:"","box-shadow":"","background-color":"white",class:"select-currency"},{default:Object(c["S"])((function(){return[(Object(c["y"])(!0),Object(c["h"])(c["a"],null,Object(c["E"])(r.currencyList,(function(e){return Object(c["y"])(),Object(c["h"])("div",{key:e.key,class:["select-currency__item",e.disabled?"disabled":null],onClick:function(t){return r.selectCurrency(e)}},[Object(c["k"])(a,{title:e.title,subtitle:e.subtitle,coin:e.key,disabled:e.disabled},null,8,["title","subtitle","coin","disabled"])],10,["onClick"])})),128))]})),_:1})}var S=n("7f58"),F={name:"SelectCurrency",components:{CoinContainer:j,Container:E["a"]},setup:function(e,t){var n=t.emit,c=S["a"],r=function(e){e.disabled||n("select",e)};return{currencyList:c,selectCurrency:r}}};n("790a");F.render=x;var B=F,w=n("1a6c"),A=n("38a9"),D={name:"CoinExchange",components:{CoinExchangeContainer:C,Icon:g["a"],SelectCurrency:B},directives:{clickOutside:w["a"]},setup:function(){var e=Object(b["b"])(),t=e.t,n=Object(d["c"])(A["a"].EXCHANGE),r=n.getReceiveCoin,i=n.getSendCoin,o=Object(d["b"])(A["a"].EXCHANGE),a=o.setSendCoin,l=o.setReceiveCoin,f=Object(c["D"])(null),u=function(e){f.value!==e?f.value=e:y()},y=function(e){f.value!==e&&e||(f.value=null)},p=function(e,t){"send"===t?a(e):l(e),y()},h=function(){var e=Object(s["a"])({},i.value);p(Object(s["a"])({},r.value),"send"),p(e,"receive")};return{t:t,showSelect:f,receiveCoin:r,sendCoin:i,showSelectHandler:u,onSelectCurrency:p,hideSelectHandler:y,switchCoins:h}}};n("b1fe");D.render=u;var T=D,I={class:"coin-form"},G={class:"coin-form__title"},R={class:"coin-form__body"},$={class:"coin-form__body__info"},P={class:"coin-form__body__info__item"},N=Object(c["k"])("div",{class:"coin-form__body__info__item-label"}," 0.002 BTC ",-1),L={class:"coin-form__body__info__item"},U={class:"coin-form__body__info__item-label"};function K(e,t,n,r,i,o){var a,l,f=Object(c["G"])("Icon"),u=Object(c["G"])("Input"),s=Object(c["G"])("Tooltip"),d=Object(c["G"])("Button");return Object(c["y"])(),Object(c["h"])("section",I,[Object(c["k"])("h6",G,Object(c["K"])(r.t("common.enterAmount")),1),Object(c["k"])("div",R,[Object(c["k"])(u,{class:"coin-form__body__input",type:"number",label:r.t("homepage.currencyToSend",{currency:null===(a=r.sendCoin)||void 0===a?void 0:a.title})},{append:Object(c["S"])((function(){var e;return[Object(c["k"])(f,{name:(null===(e=r.sendCoin)||void 0===e?void 0:e.key)+"-circle"},null,8,["name"])]})),_:1},8,["label"]),Object(c["k"])(u,{class:"coin-form__body__input",type:"number",label:r.t("homepage.currencyToReceive",{currency:null===(l=r.receiveCoin)||void 0===l?void 0:l.title})},{append:Object(c["S"])((function(){var e;return[Object(c["k"])(f,{name:(null===(e=r.receiveCoin)||void 0===e?void 0:e.key)+"-circle"},null,8,["name"])]})),_:1},8,["label"]),Object(c["k"])("div",$,[Object(c["k"])("div",P,[Object(c["k"])(f,{class:"coin-form__body__info__item-icon",name:"coins"}),N]),Object(c["k"])("div",L,[Object(c["k"])(s,{text:r.t("coinForm.clockTooltip")},{default:Object(c["S"])((function(){return[Object(c["k"])(f,{class:"coin-form__body__info__item-icon",name:"clock"})]})),_:1},8,["text"]),Object(c["k"])("div",U,Object(c["K"])(r.t("common.minute",10)),1)])])]),Object(c["k"])(d,{class:"coin-form__action",type:"primary",onClick:t[1]||(t[1]=function(t){return e.$emit("submit")})},{default:Object(c["S"])((function(){return[Object(c["j"])(Object(c["K"])(r.t("common.continue")),1)]})),_:1})])}var H=n("3932"),V=n("334b"),M=n("3724"),X=n("5502"),z={name:"CoinForm",components:{Button:H["a"],Input:V["a"],Icon:g["a"],Tooltip:M["a"]},setup:function(){var e=Object(X["b"])(),t=Object(b["b"])(),n=t.t,r=Object(c["f"])((function(){return e.getters["exchange/getReceiveCoin"]})),i=Object(c["f"])((function(){return e.getters["exchange/getSendCoin"]}));return{t:n,receiveCoin:r,sendCoin:i}}};n("28c3");z.render=K;var q=z,J=n("9430"),Y=n("6c02"),Q=n("3756"),W={name:"Home",components:{CoinForm:q,CoinExchange:T,Tools:J["a"]},setup:function(){var e=Object(Y["d"])(),t=function(){e.push({name:Q["c"].EXCHANGE_CONFIRMATION})};return{confirmExchange:t}}};n("aef8");W.render=i;t["default"]=W},d784:function(e,t,n){"use strict";n("ac1f");var c=n("6eeb"),r=n("d039"),i=n("b622"),o=n("9263"),a=n("9112"),l=i("species"),f=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),s=i("replace"),d=function(){return!!/./[s]&&""===/./[s]("a","$0")}(),b=!r((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,s){var y=i(e),p=!r((function(){var t={};return t[y]=function(){return 7},7!=""[e](t)})),h=p&&!r((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[y]=/./[y]),n.exec=function(){return t=!0,null},n[y](""),!t}));if(!p||!h||"replace"===e&&(!f||!u||d)||"split"===e&&!b){var v=/./[y],m=n(y,""[e],(function(e,t,n,c,r){return t.exec===o?p&&!r?{done:!0,value:v.call(t,n,c)}:{done:!0,value:e.call(n,t,c)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),O=m[0],g=m[1];c(String.prototype,e,O),c(RegExp.prototype,y,2==t?function(e,t){return g.call(e,this,t)}:function(e){return g.call(e,this)})}s&&a(RegExp.prototype[y],"sham",!0)}},e14c:function(e,t,n){"use strict";n("a5c1")},e9d5:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},ec23:function(e,t,n){"use strict";n("e9d5")},fa31:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},fce0:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}}}]);
//# sourceMappingURL=chunk-10d63c83.1c79b38f.js.map