(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-550d6078"],{"0116":function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"08e8":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n("7a23"),a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e},a=Object(c["f"])({get:function(){return e.modelValue},set:function(e){t("update:modelValue",n(e))}});return{value:a}}},"159f":function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},1831:function(e,t,n){"use strict";var c=n("7a23"),a={class:"text-header"};function r(e,t){return Object(c["y"])(),Object(c["h"])("header",a,[Object(c["F"])(e.$slots,"default")])}n("ac6b");const o={};o.render=r;t["a"]=o},"334b":function(e,t,n){"use strict";var c=n("7a23"),a={key:0,class:"input__prepend"},r={class:"input__body"},o={class:"input__body-label"},i={key:1,class:"input__append"},f={key:2,class:"input__error-text"};function l(e,t,n,l,s,u){var d=Object(c["G"])("Container");return Object(c["y"])(),Object(c["h"])(d,{border:"","box-shadow":"",variant:"label",class:["input",{input__error:n.error,"input__read-only":n.readOnly,"input__hide-shadow":n.hideShadow||n.readOnly}],style:{"--opacity":n.fullOpacity}},{default:Object(c["S"])((function(){return[e.$slots.prepend?(Object(c["y"])(),Object(c["h"])("div",a,[Object(c["F"])(e.$slots,"prepend")])):Object(c["i"])("",!0),Object(c["k"])("div",r,[Object(c["k"])("span",o,Object(c["K"])(n.label),1),n.modelValue?Object(c["i"])("",!0):(Object(c["y"])(),Object(c["h"])("span",{key:0,class:"input__placeholder",style:n.placeholderStyles},Object(c["K"])(n.placeholder),5)),Object(c["T"])(Object(c["k"])("input",{class:["input__body-field",{"input__body-field__opacity":n.opacity}],readonly:n.readOnly,disabled:n.disabled,type:n.type,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.inputValue=e}),onBlur:t[2]||(t[2]=function(t){return e.$emit("blur")})},null,42,["readonly","disabled","type"]),[[c["N"],l.inputValue]])]),e.$slots.append?(Object(c["y"])(),Object(c["h"])("div",i,[Object(c["F"])(e.$slots,"append")])):Object(c["i"])("",!0),n.errorText&&n.error?(Object(c["y"])(),Object(c["h"])("div",f,Object(c["K"])(n.errorText),1)):Object(c["i"])("",!0)]})),_:1},8,["class","style"])}n("a9e3");var s=n("185a"),u=n("08e8"),d={name:"Input",components:{Container:s["a"]},emits:["update:modelValue","blur"],inheritAttrs:!0,props:{type:{type:String,default:"text"},label:{type:String,default:""},modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},placeholderStyles:{type:Object,default:function(){return{}}},errorText:{type:String,default:""},error:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},opacity:{type:Boolean,default:!1},fullOpacity:{type:[Number,String],default:1},hideShadow:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit,c=Object(u["a"])(e,n),a=c.value;return{inputValue:a}}};n("6fc1");d.render=l;t["a"]=d},3724:function(e,t,n){"use strict";var c=n("7a23"),a={class:"tooltip"};function r(e,t,n,r,o,i){return Object(c["y"])(),Object(c["h"])("div",a,[Object(c["F"])(e.$slots,"default"),Object(c["k"])("div",{class:["tooltip__content",{tooltip__content__arrow:n.showArrow}]},[Object(c["T"])(Object(c["k"])("span",{class:"text"},Object(c["K"])(n.text),513),[[c["P"],n.text]])],2)])}var o={name:"Tooltip",props:{text:{type:String,default:""},showArrow:{type:Boolean,default:!0}}};n("e14c");o.render=r;t["a"]=o},3932:function(e,t,n){"use strict";var c=n("7a23"),a={class:"button__label"};function r(e,t,n,r,o,i){return Object(c["y"])(),Object(c["h"])("button",{class:["button",{"button__default-padding":n.defaultPadding}],style:{"--background-color":r.StyleVariables[n.type],"--color":r.StyleVariables["t".concat(n.type)]}},[Object(c["k"])("span",a,[Object(c["F"])(e.$slots,"default")])],6)}var o=n("c07e"),i={name:"Button",props:{type:{type:String,default:"default"},defaultPadding:{type:Boolean,default:!1}},setup:function(){return{StyleVariables:o["a"]}}};n("b1ae");i.render=r;t["a"]=i},"3fb7":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a={class:"exchange-confirmation"},r={class:"exchange-confirmation__body"},o={class:"exchange-confirmation__body-estimate"},i={class:"exchange-confirmation__body-estimate__content"},f={class:"exchange-confirmation__body-estimate__content-bold"},l={class:"exchange-confirmation__actions"},s={class:"exchange-confirmation__actions__confirmation"};function u(e,t,n,u,d,b){var p,y,m,h=Object(c["G"])("TextHeader"),O=Object(c["G"])("ExchangeCoinInfo"),j=Object(c["G"])("Icon"),g=Object(c["G"])("Tooltip"),_=Object(c["G"])("Input"),k=Object(c["G"])("Checkbox"),x=Object(c["G"])("Button");return Object(c["y"])(),Object(c["h"])("section",a,[Object(c["k"])(h,{class:"exchange-confirmation__header"},{default:Object(c["S"])((function(){return[Object(c["j"])(Object(c["K"])(u.t("exchangeConfirmation.title")),1)]})),_:1}),Object(c["k"])("main",r,[Object(c["k"])(O,{class:"exchange-confirmation__body__info-item",coin:u.sendCoin,label:u.t("exchangeConfirmation.sendTitle"),rate:null===(p=u.sendCoin)||void 0===p?void 0:p.rate,sum:4.123},null,8,["coin","label","rate","sum"]),Object(c["k"])(O,{class:"exchange-confirmation__body__info-item",coin:u.receiveCoin,label:u.t("exchangeConfirmation.receiveTitle"),rate:null===(y=u.receiveCoin)||void 0===y?void 0:y.rate,sum:.0929345},null,8,["coin","label","rate","sum"]),Object(c["k"])("div",o,[Object(c["k"])(g,{text:u.t("exchangeConfirmation.tooltip"),"show-arrow":!1},{default:Object(c["S"])((function(){return[Object(c["k"])("div",i,[Object(c["k"])(j,{class:"exchange-confirmation__body-estimate__content-icon",name:"clock"}),Object(c["k"])("pre",null,[Object(c["j"])(" "+Object(c["K"])(u.t("exchangeConfirmation.estimatedArrival"))+" ≈ ",1),Object(c["k"])("span",f,"2 - 40 "+Object(c["K"])(u.t("common.minuteText",10)),1)])])]})),_:1},8,["text"])]),Object(c["k"])(_,{label:u.t("exchangeConfirmation.payoutAddress",{coin:(null===(m=u.receiveCoin)||void 0===m?void 0:m.title)||""}),modelValue:u.address,"onUpdate:modelValue":t[1]||(t[1]=function(e){return u.address=e}),error:u.error,"error-text":"Incorrect address format"},null,8,["label","modelValue","error"])]),Object(c["k"])("div",l,[Object(c["k"])(k,{class:"exchange-confirmation__actions-checkbox",label:u.t("exchangeConfirmation.termsPolicy")},null,8,["label"]),Object(c["k"])("div",s,[Object(c["k"])(x,{class:"exchange-confirmation__actions__confirmation-btn exchange-confirmation__action",type:"primary",onClick:u.makeDeposit},{default:Object(c["S"])((function(){return[Object(c["j"])(Object(c["K"])(u.t("common.confirm")),1)]})),_:1},8,["onClick"]),Object(c["k"])(x,{class:"exchange-confirmation__actions__confirmation-btn exchange-confirmation__action",onClick:u.goBack},{default:Object(c["S"])((function(){return[Object(c["j"])(Object(c["K"])(u.t("common.back")),1)]})),_:1},8,["onClick"])])])])}var d=n("5502"),b=n("47e2"),p=n("6c02"),y={class:"exchange-coin-info"},m={class:"exchange-coin-info__body"},h={class:"exchange-coin-info__body-label"},O={class:"exchange-coin-info__body-sum"},j={class:"exchange-coin-info__body-rate"},g={class:"exchange-coin-info__icon"};function _(e,t,n,a,r,o){var i=Object(c["G"])("Icon");return Object(c["y"])(),Object(c["h"])("div",y,[Object(c["k"])("div",m,[Object(c["k"])("div",h,Object(c["K"])(n.label),1),Object(c["k"])("div",O,Object(c["K"])(n.sum),1),Object(c["k"])("div",j," 1 "+Object(c["K"])(a.coinLabel)+" = $"+Object(c["K"])(n.rate),1)]),Object(c["k"])("div",g,[Object(c["k"])(i,{name:n.coin.icon+"-circle",height:"60px",width:"60px"},null,8,["name"])])])}n("a9e3");var k=n("00a1"),x={name:"ExchangeCoinInfo",components:{Icon:k["a"]},props:{coin:{type:Object,default:function(){}},rate:{type:Number,default:0},sum:{type:Number,default:0},label:{type:String,default:""}},setup:function(e){var t=Object(c["f"])((function(){var t,n;return null===(t=e.coin)||void 0===t||null===(n=t.key)||void 0===n?void 0:n.toUpperCase()}));return{coinLabel:t}}};n("dd2e");x.render=_;var v=x,E=n("334b"),B=n("edfa"),C=n("3932"),F=n("3724"),D=n("1831"),S=n("d046"),A={name:"ExchangeConfirmation",components:{TextHeader:D["a"],Tooltip:F["a"],Button:C["a"],Checkbox:B["a"],Input:E["a"],Icon:k["a"],ExchangeCoinInfo:v},setup:function(){var e=Object(d["b"])(),t=Object(p["d"])(),n=Object(b["b"])(),a=n.t,r=Object(c["D"])("3P3QsMVK89JBNqZQv5zMAKG8FK3kJM4rjt"),o=Object(c["D"])(!1),i=Object(c["f"])((function(){return e.getters["exchange/getReceiveCoin"]})),f=Object(c["f"])((function(){return e.getters["exchange/getSendCoin"]}));Object(c["Q"])(r,(function(e){o.value=8!==e.length}));var l=function(){return window.history.length>2},s=function(){l()?t.go(-1):t.push({name:S["c"].HOME})},u=function(){t.push({name:S["c"].DEPOSITS})};return{t:a,receiveCoin:i,sendCoin:f,address:r,error:o,goBack:s,makeDeposit:u}}};n("9aa6");A.render=u;t["default"]=A},5987:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"6c97":function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"6fc1":function(e,t,n){"use strict";n("5987")},"78c1":function(e,t,n){"use strict";n("a34d")},"9aa6":function(e,t,n){"use strict";n("159f")},"9d56":function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},a34d:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},a5c1:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},ac6b:function(e,t,n){"use strict";n("ca73")},b1ae:function(e,t,n){"use strict";n("9d56")},c07e:function(e,t,n){"use strict";var c=n("6c97"),a=n.n(c);t["a"]=a.a},ca73:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},dd2e:function(e,t,n){"use strict";n("0116")},e14c:function(e,t,n){"use strict";n("a5c1")},edfa:function(e,t,n){"use strict";var c=n("7a23"),a={class:"checkbox"};function r(e,t,n,r,o,i){var f=Object(c["G"])("Icon");return Object(c["y"])(),Object(c["h"])("label",a,[Object(c["T"])(Object(c["k"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.value=e}),class:"checkbox__field",type:"checkbox"},null,512),[[c["M"],r.value]]),Object(c["k"])(f,{class:"checkbox__icon",name:r.value?"checked":"unchecked"},null,8,["name"]),Object(c["k"])("span",{class:"checkbox__label",innerHTML:n.label},null,8,["innerHTML"])])}var o=n("00a1"),i=n("08e8"),f={name:"Checkbox",components:{Icon:o["a"]},emits:["update:modelValue"],props:{label:{type:String,require:!0},modelValue:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit,c=Object(i["a"])(e,n),a=c.value;return{value:a}}};n("78c1");f.render=r;t["a"]=f}}]);
//# sourceMappingURL=chunk-550d6078.af47d077.js.map