(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55985c9c"],{2098:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"28c3":function(e,t,n){"use strict";n("b048")},"2b2d":function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"334b":function(e,t,n){"use strict";var c=n("7a23"),r={key:0,class:"input__prepend"},o={class:"input__body"},i={class:"input__body-label"},a={key:1,class:"input__append"},f={key:2,class:"input__error-text"};function l(e,t,n,l,s,u){var d=Object(c["G"])("Container");return Object(c["y"])(),Object(c["h"])(d,{bordered:"","box-shadow":"",variant:"label",class:["input",{input__error:n.error,"input__read-only":n.readOnly,"input__hide-shadow":n.hideShadow||n.readOnly}],style:{"--opacity":n.fullOpacity}},{default:Object(c["S"])((function(){return[e.$slots.prepend?(Object(c["y"])(),Object(c["h"])("div",r,[Object(c["F"])(e.$slots,"prepend")])):Object(c["i"])("",!0),Object(c["k"])("div",o,[Object(c["k"])("span",i,Object(c["K"])(n.label),1),l.showPlaceholder?(Object(c["y"])(),Object(c["h"])("span",{key:0,class:"input__placeholder",style:n.placeholderStyles},Object(c["K"])(n.placeholder),5)):Object(c["i"])("",!0),Object(c["T"])(Object(c["k"])("input",{class:["input__body-field",{"input__body-field__opacity":n.opacity}],readonly:n.readOnly,disabled:n.disabled,type:n.type,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.inputValue=e}),onBlur:t[2]||(t[2]=function(t){return e.$emit("blur")})},null,42,["readonly","disabled","type"]),[[c["N"],l.inputValue]])]),e.$slots.append?(Object(c["y"])(),Object(c["h"])("div",a,[Object(c["F"])(e.$slots,"append")])):Object(c["i"])("",!0),n.errorText&&n.error?(Object(c["y"])(),Object(c["h"])("div",f,Object(c["K"])(n.errorText),1)):Object(c["i"])("",!0)]})),_:1},8,["class","style"])}n("a9e3");var s=n("185a"),u={name:"Input",components:{Container:s["a"]},emits:["update:modelValue","blur"],inheritAttrs:!0,props:{type:{type:String,default:"text"},label:{type:String,default:""},modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},placeholderStyles:{type:Object,default:function(){return{}}},errorText:{type:String,default:""},error:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},opacity:{type:Boolean,default:!1},fullOpacity:{type:[Number,String],default:1},hideShadow:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit,r=Object(c["D"])(e.modelValue),o=Object(c["f"])({get:function(){return e.modelValue||r.value},set:function(e){r.value=e,n("update:modelValue",e)}}),i=Object(c["f"])((function(){return!r.value}));return{showPlaceholder:i,inputValue:o}}};n("bca4");u.render=l;t["a"]=u},3643:function(e,t,n){"use strict";n("2b2d")},3724:function(e,t,n){"use strict";var c=n("7a23"),r={class:"tooltip"};function o(e,t,n,o,i,a){return Object(c["y"])(),Object(c["h"])("div",r,[Object(c["F"])(e.$slots,"default"),Object(c["k"])("div",{class:["tooltip__content",{tooltip__content__arrow:n.showArrow}]},[Object(c["T"])(Object(c["k"])("span",{class:"text"},Object(c["K"])(n.text),513),[[c["P"],n.text]])],2)])}var i={name:"Tooltip",props:{text:{type:String,default:""},showArrow:{type:Boolean,default:!0}}};n("e14c");i.render=o;t["a"]=i},3932:function(e,t,n){"use strict";var c=n("7a23"),r={class:"button__label"};function o(e,t,n,o,i,a){return Object(c["y"])(),Object(c["h"])("button",{class:["button",{"button__default-padding":n.defaultPadding}],style:{"--background-color":o.StyleVariables[n.type],"--color":o.StyleVariables["t".concat(n.type)],"--font-size":n.fontSize}},[Object(c["k"])("span",r,[Object(c["F"])(e.$slots,"default")])],6)}var i=n("c07e"),a={name:"Button",props:{type:{type:String,default:"default"},defaultPadding:{type:Boolean,default:!1},fontSize:{type:String,default:"16px"}},setup:function(){return{StyleVariables:i["a"]}}};n("ec23");a.render=o;t["a"]=a},5804:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"67f5":function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"6c97":function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"8a15":function(e,t,n){"use strict";n("fce0")},9430:function(e,t,n){"use strict";var c=n("7a23"),r={class:"tools"};function o(e,t,n,o,i,a){return Object(c["y"])(),Object(c["h"])("section",r,[(Object(c["y"])(!0),Object(c["h"])(c["a"],null,Object(c["E"])(n.tools,(function(e,t){return Object(c["y"])(),Object(c["h"])("div",{key:t,class:["tools__tool",{"tools__tool-hover":!e.component}],onClick:function(t){return o.handleClick(e)}},[(Object(c["y"])(),Object(c["h"])(Object(c["I"])(e.component||"Icon"),{name:e.icon},null,8,["name"]))],10,["onClick"])})),128))])}n("d3b7"),n("3ca3"),n("ddb0");var i=n("6c02"),a=n("00a1"),f=n("3756"),l=[{icon:"bell",title:"Notifications",component:"notifications"},{icon:"per-cent",title:"Per cents",to:f["c"].FEE_SCHEDULE}],s={name:"Tools",components:{Icon:a["a"],Notifications:Object(c["l"])((function(){return n.e("chunk-aca8a8c2").then(n.bind(null,"8cc6"))}))},props:{tools:{type:Array,default:function(){return l}}},setup:function(){var e=Object(i["d"])(),t=function(t){if(t.to)e.push({name:t.to});else if(t.copyUrl){var n=document.createElement("input"),c=window.location.href;document.body.appendChild(n),n.value=c,n.select(),document.execCommand("copy"),document.body.removeChild(n)}};return{handleClick:t}}};n("8a15");s.render=o;t["a"]=s},"977e":function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},a5c1:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},aef8:function(e,t,n){"use strict";n("2098")},b037:function(e,t,n){"use strict";n("977e")},b048:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},b1fe:function(e,t,n){"use strict";n("fa31")},b9cb:function(e,t,n){"use strict";n("67f5")},bca4:function(e,t,n){"use strict";n("5804")},c07e:function(e,t,n){"use strict";var c=n("6c97"),r=n.n(c);t["a"]=r.a},c1bc:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r={class:"home"};function o(e,t,n,o,i,a){var f=Object(c["G"])("Tools"),l=Object(c["G"])("CoinExchange"),s=Object(c["G"])("CoinForm");return Object(c["y"])(),Object(c["h"])("section",r,[Object(c["k"])(f),Object(c["k"])(l,{class:"home__exchange"}),Object(c["k"])(s,{onSubmit:o.confirmExchange,class:"home__form"},null,8,["onSubmit"])])}var i={class:"coin-exchange"},a={class:"coin-exchange__coin-block"},f={class:"coin-exchange__icon"},l={class:"coin-exchange__coin-block"};function s(e,t,n,r,o,s){var u,d,b=Object(c["G"])("CoinExchangeContainer"),y=Object(c["G"])("SelectCurrency"),p=Object(c["G"])("Icon"),O=Object(c["H"])("click-outside");return Object(c["y"])(),Object(c["h"])("div",i,[Object(c["T"])(Object(c["k"])("div",a,[Object(c["k"])(b,{label:r.t("common.send"),coin:null===(u=r.sendCoin)||void 0===u?void 0:u.key,rate:136.23,onClick:t[1]||(t[1]=function(e){return r.showSelectHandler("send")})},null,8,["label","coin","rate"]),"send"===r.showSelect?(Object(c["y"])(),Object(c["h"])(y,{key:0,class:"coin-exchange__select left",onSelect:t[2]||(t[2]=function(e){return r.onSelectCurrency(e,"send")})})):Object(c["i"])("",!0)],512),[[O,function(){return r.hideSelectHandler("send")}]]),Object(c["k"])("div",f,[Object(c["k"])(p,{name:"exchange",onClick:r.switchCoins},null,8,["onClick"])]),Object(c["T"])(Object(c["k"])("div",l,[Object(c["k"])(b,{label:r.t("common.receive"),coin:null===(d=r.receiveCoin)||void 0===d?void 0:d.key,rate:9036.23,onClick:t[3]||(t[3]=function(e){return r.showSelectHandler("receive")})},null,8,["label","coin","rate"]),"receive"===r.showSelect?(Object(c["y"])(),Object(c["h"])(y,{key:0,class:"coin-exchange__select right",onSelect:t[4]||(t[4]=function(e){return r.onSelectCurrency(e,"receive")})})):Object(c["i"])("",!0)],512),[[O,function(){return r.hideSelectHandler("receive")}]])])}var u=n("5530"),d=n("f5b6"),b=n("47e2"),y={class:"coin-exchange-container"},p={class:"coin-exchange-container__label"};function O(e,t,n,r,o,i){var a=Object(c["G"])("CoinContainer"),f=Object(c["G"])("Container");return Object(c["y"])(),Object(c["h"])("div",y,[Object(c["k"])("p",p,Object(c["K"])(n.label),1),Object(c["k"])(f,{bordered:"","box-shadow":"",class:"coin-exchange-container__body"},{default:Object(c["S"])((function(){return[Object(c["k"])(a,{title:r.coinLabel,subtitle:r.rateLabel,coin:n.coin},null,8,["title","subtitle","coin"])]})),_:1})])}n("a9e3");var h={class:"coin-container__info"},j={class:"coin-container__info-description"};function m(e,t,n,r,o,i){var a=Object(c["G"])("Icon");return Object(c["y"])(),Object(c["h"])("div",{class:["coin-container",{disabled:n.disabled}]},[Object(c["k"])(a,{name:n.coin+"-circle",class:"coin-container__icon"},null,8,["name"]),Object(c["k"])("div",h,[Object(c["k"])("h6",{class:[n.subtitle?"":"coin-container__info-header-empty","coin-container__info-header"]},Object(c["K"])(n.title),3),Object(c["k"])("h6",j,Object(c["K"])(n.subtitle),1)])],2)}var _=n("00a1"),g={name:"CoinContainer",components:{Icon:_["a"]},props:{coin:{type:String,required:!0},subtitle:{type:String,default:""},title:{type:String,default:""},disabled:{type:Boolean,default:!1}}};n("b037");g.render=m;var v=g,E=n("185a"),C={name:"CoinExchangeContainer",components:{Container:E["a"],CoinContainer:v},props:{coin:{type:String,required:!0},rate:{type:Number,default:0},label:{type:String,default:""}},setup:function(e){var t=Object(c["f"])((function(){var t;return null===(t=e.coin)||void 0===t?void 0:t.toUpperCase()})),n=Object(c["f"])((function(){return"$"+e.rate}));return{coinLabel:t,rateLabel:n}}};n("b9cb");C.render=O;var k=C;function F(e,t,n,r,o,i){var a=Object(c["G"])("CoinContainer"),f=Object(c["G"])("Container");return Object(c["y"])(),Object(c["h"])(f,{bordered:"","box-shadow":"",class:"select-currency"},{default:Object(c["S"])((function(){return[(Object(c["y"])(!0),Object(c["h"])(c["a"],null,Object(c["E"])(r.currencyList,(function(e){return Object(c["y"])(),Object(c["h"])("div",{key:e.key,class:["select-currency__item",e.disabled?"disabled":null],onClick:function(t){return r.selectCurrency(e)}},[Object(c["k"])(a,{title:e.title,subtitle:e.subtitle,coin:e.key,disabled:e.disabled},null,8,["title","subtitle","coin","disabled"])],10,["onClick"])})),128))]})),_:1})}var B=n("7f58"),S={name:"SelectCurrency",components:{CoinContainer:v,Container:E["a"]},setup:function(e,t){var n=t.emit,c=B["a"],r=function(e){e.disabled||n("select",e)};return{currencyList:c,selectCurrency:r}}};n("3643");S.render=F;var x=S,w=n("1a6c"),D=n("38a9"),A={name:"CoinExchange",components:{CoinExchangeContainer:k,Icon:_["a"],SelectCurrency:x},directives:{clickOutside:w["a"]},setup:function(){var e=Object(b["b"])(),t=e.t,n=Object(d["c"])(D["a"].EXCHANGE),r=n.getReceiveCoin,o=n.getSendCoin,i=Object(d["b"])(D["a"].EXCHANGE),a=i.setSendCoin,f=i.setReceiveCoin,l=Object(c["D"])(null),s=function(e){l.value!==e?l.value=e:y()},y=function(e){l.value!==e&&e||(l.value=null)},p=function(e,t){"send"===t?a(e):f(e),y()},O=function(){var e=Object(u["a"])({},o.value);p(Object(u["a"])({},r.value),"send"),p(e,"receive")};return{t:t,showSelect:l,receiveCoin:r,sendCoin:o,showSelectHandler:s,onSelectCurrency:p,hideSelectHandler:y,switchCoins:O}}};n("b1fe");A.render=s;var G=A,T={class:"coin-form"},I={class:"coin-form__title"},H={class:"coin-form__body"},V={class:"coin-form__body__info"},N={class:"coin-form__body__info__item"},K=Object(c["k"])("div",{class:"coin-form__body__info__item-label"}," 0.002 BTC ",-1),$={class:"coin-form__body__info__item"},L={class:"coin-form__body__info__item-label"};function P(e,t,n,r,o,i){var a,f,l=Object(c["G"])("Icon"),s=Object(c["G"])("Input"),u=Object(c["G"])("Tooltip"),d=Object(c["G"])("Button");return Object(c["y"])(),Object(c["h"])("section",T,[Object(c["k"])("h6",I,Object(c["K"])(r.t("common.enterAmount")),1),Object(c["k"])("div",H,[Object(c["k"])(s,{class:"coin-form__body__input",type:"number",label:r.t("homepage.currencyToSend",{currency:null===(a=r.sendCoin)||void 0===a?void 0:a.title})},{append:Object(c["S"])((function(){var e;return[Object(c["k"])(l,{name:(null===(e=r.sendCoin)||void 0===e?void 0:e.key)+"-circle"},null,8,["name"])]})),_:1},8,["label"]),Object(c["k"])(s,{class:"coin-form__body__input",type:"number",label:r.t("homepage.currencyToReceive",{currency:null===(f=r.receiveCoin)||void 0===f?void 0:f.title})},{append:Object(c["S"])((function(){var e;return[Object(c["k"])(l,{name:(null===(e=r.receiveCoin)||void 0===e?void 0:e.key)+"-circle"},null,8,["name"])]})),_:1},8,["label"]),Object(c["k"])("div",V,[Object(c["k"])("div",N,[Object(c["k"])(l,{class:"coin-form__body__info__item-icon",name:"coins"}),K]),Object(c["k"])("div",$,[Object(c["k"])(u,{text:r.t("coinForm.clockTooltip")},{default:Object(c["S"])((function(){return[Object(c["k"])(l,{class:"coin-form__body__info__item-icon",name:"clock"})]})),_:1},8,["text"]),Object(c["k"])("div",L,Object(c["K"])(r.t("common.minute",10)),1)])])]),Object(c["k"])(d,{class:"coin-form__action",type:"primary",onClick:t[1]||(t[1]=function(t){return e.$emit("submit")})},{default:Object(c["S"])((function(){return[Object(c["j"])(Object(c["K"])(r.t("common.continue")),1)]})),_:1})])}var R=n("3932"),U=n("334b"),z=n("3724"),X=n("5502"),q={name:"CoinForm",components:{Button:R["a"],Input:U["a"],Icon:_["a"],Tooltip:z["a"]},setup:function(){var e=Object(X["b"])(),t=Object(b["b"])(),n=t.t,r=Object(c["f"])((function(){return e.getters["exchange/getReceiveCoin"]})),o=Object(c["f"])((function(){return e.getters["exchange/getSendCoin"]}));return{t:n,receiveCoin:r,sendCoin:o}}};n("28c3");q.render=P;var J=q,M=n("9430"),Q=n("6c02"),W=n("3756"),Y={name:"Home",components:{CoinForm:J,CoinExchange:G,Tools:M["a"]},setup:function(){var e=Object(Q["d"])(),t=function(){e.push({name:W["c"].EXCHANGE_CONFIRMATION})};return{confirmExchange:t}}};n("aef8");Y.render=o;t["default"]=Y},e14c:function(e,t,n){"use strict";n("a5c1")},e9d5:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},ec23:function(e,t,n){"use strict";n("e9d5")},fa31:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},fce0:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}}}]);
//# sourceMappingURL=chunk-55985c9c.8a2d7239.js.map