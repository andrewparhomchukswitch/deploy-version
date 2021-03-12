(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-799d4cd1"],{"0116":function(e,n,t){e.exports={primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},1831:function(e,n,t){"use strict";var c=t("7a23"),o={class:"text-header"};function a(e,n){return Object(c["v"])(),Object(c["f"])("header",o,[Object(c["A"])(e.$slots,"default")])}t("ac6b");const i={};i.render=a;n["a"]=i},"3bf9":function(e,n,t){e.exports={primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"3fb7":function(e,n,t){"use strict";t.r(n);var c=t("7a23"),o={class:"exchange-confirmation"},a={class:"exchange-confirmation__body"},i={class:"exchange-confirmation__body-estimate"},r={class:"exchange-confirmation__body-estimate__content"},l={class:"exchange-confirmation__body-estimate__content-bold"},s={class:"exchange-confirmation__actions"},b={class:"exchange-confirmation__actions__confirmation"};function f(e,n,t,f,u,d){var m,j,O,_=Object(c["B"])("TextHeader"),h=Object(c["B"])("ExchangeCoinInfo"),x=Object(c["B"])("Icon"),p=Object(c["B"])("Tooltip"),g=Object(c["B"])("Input"),v=Object(c["B"])("Checkbox"),y=Object(c["B"])("Button");return Object(c["v"])(),Object(c["f"])("section",o,[Object(c["i"])(_,{class:"exchange-confirmation__header"},{default:Object(c["K"])((function(){return[Object(c["h"])(Object(c["F"])(f.t("exchangeConfirmation.title")),1)]})),_:1}),Object(c["i"])("main",a,[Object(c["i"])(h,{class:"exchange-confirmation__body__info-item",coin:f.sendCoin,label:f.t("exchangeConfirmation.sendTitle"),rate:null===(m=f.sendCoin)||void 0===m?void 0:m.rate,sum:4.123},null,8,["coin","label","rate","sum"]),Object(c["i"])(h,{class:"exchange-confirmation__body__info-item",coin:f.receiveCoin,label:f.t("exchangeConfirmation.receiveTitle"),rate:null===(j=f.receiveCoin)||void 0===j?void 0:j.rate,sum:.0929345},null,8,["coin","label","rate","sum"]),Object(c["i"])("div",i,[Object(c["i"])(p,{text:f.t("exchangeConfirmation.tooltip"),"show-arrow":!1},{default:Object(c["K"])((function(){return[Object(c["i"])("div",r,[Object(c["i"])(x,{class:"exchange-confirmation__body-estimate__content-icon",name:"clock"}),Object(c["i"])("pre",null,[Object(c["h"])(" "+Object(c["F"])(f.t("exchangeConfirmation.estimatedArrival"))+" ≈ ",1),Object(c["i"])("span",l,"2 - 40 "+Object(c["F"])(f.t("common.minuteText",10)),1)])])]})),_:1},8,["text"])]),Object(c["i"])(g,{label:f.t("exchangeConfirmation.payoutAddress",{coin:(null===(O=f.receiveCoin)||void 0===O?void 0:O.title)||""}),modelValue:f.address,"onUpdate:modelValue":n[1]||(n[1]=function(e){return f.address=e}),error:f.error,"error-text":"Incorrect address format"},null,8,["label","modelValue","error"])]),Object(c["i"])("div",s,[Object(c["i"])(v,{class:"exchange-confirmation__actions-checkbox",label:f.t("exchangeConfirmation.termsPolicy")},null,8,["label"]),Object(c["i"])("div",b,[Object(c["i"])(y,{class:"exchange-confirmation__actions__confirmation-btn exchange-confirmation__action",type:"primary",onClick:f.makeDeposit},{default:Object(c["K"])((function(){return[Object(c["h"])(Object(c["F"])(f.t("common.confirm")),1)]})),_:1},8,["onClick"]),Object(c["i"])(y,{class:"exchange-confirmation__actions__confirmation-btn exchange-confirmation__action",onClick:f.goBack},{default:Object(c["K"])((function(){return[Object(c["h"])(Object(c["F"])(f.t("common.back")),1)]})),_:1},8,["onClick"])])])])}var u=t("5502"),d=t("47e2"),m=t("6c02"),j={class:"exchange-coin-info"},O={class:"exchange-coin-info__body"},_={class:"exchange-coin-info__body-label"},h={class:"exchange-coin-info__body-sum"},x={class:"exchange-coin-info__body-rate"},p={class:"exchange-coin-info__icon"};function g(e,n,t,o,a,i){var r=Object(c["B"])("Icon");return Object(c["v"])(),Object(c["f"])("div",j,[Object(c["i"])("div",O,[Object(c["i"])("div",_,Object(c["F"])(t.label),1),Object(c["i"])("div",h,Object(c["F"])(t.sum),1),Object(c["i"])("div",x," 1 "+Object(c["F"])(o.coinLabel)+" = $"+Object(c["F"])(t.rate),1)]),Object(c["i"])("div",p,[Object(c["i"])(r,{name:t.coin.icon+"-circle",height:"60px",width:"60px"},null,8,["name"])])])}t("a9e3");var v=t("00a1"),y={name:"ExchangeCoinInfo",components:{Icon:v["a"]},props:{coin:{type:Object,default:function(){}},rate:{type:Number,default:0},sum:{type:Number,default:0},label:{type:String,default:""}},setup:function(e){var n=Object(c["d"])((function(){var n,t;return null===(n=e.coin)||void 0===n||null===(t=n.key)||void 0===t?void 0:t.toUpperCase()}));return{coinLabel:n}}};t("dd2e");y.render=g;var C=y,k=t("334b"),F={class:"checkbox"};function B(e,n,t,o,a,i){var r=Object(c["B"])("Icon");return Object(c["v"])(),Object(c["f"])("label",F,[Object(c["L"])(Object(c["i"])("input",{"onUpdate:modelValue":n[1]||(n[1]=function(e){return o.value=e}),class:"checkbox__field",type:"checkbox"},null,512),[[c["H"],o.value]]),Object(c["i"])(r,{class:"checkbox__icon",name:o.value?"checked":"unchecked"},null,8,["name"]),Object(c["i"])("span",{class:"checkbox__label",innerHTML:t.label},null,8,["innerHTML"])])}var E={name:"Checkbox",components:{Icon:v["a"]},props:{label:{type:String,require:!0}},setup:function(){var e=Object(c["y"])(!1);return{value:e}}};t("e82b");E.render=B;var I=E,w=t("3932"),D=t("3724"),T=t("1831"),A={name:"ExchangeConfirmation",components:{TextHeader:T["a"],Tooltip:D["a"],Button:w["a"],Checkbox:I,Input:k["a"],Icon:v["a"],ExchangeCoinInfo:C},setup:function(){var e=Object(u["b"])(),n=Object(m["c"])(),t=Object(d["b"])(),o=t.t,a=Object(c["y"])("3P3QsMVK89JBNqZQv5zMAKG8FK3kJM4rjt"),i=Object(c["y"])(!1),r=Object(c["d"])((function(){return e.getters["exchange/getReceiveCoin"]})),l=Object(c["d"])((function(){return e.getters["exchange/getSendCoin"]}));Object(c["J"])(a,(function(e){i.value=8!==e.length}));var s=function(){return window.history.length>2},b=function(){s()?n.go(-1):n.push("/")},f=function(){n.push("/deposit")};return{t:o,receiveCoin:r,sendCoin:l,address:a,error:i,goBack:b,makeDeposit:f}}};t("9cbc");A.render=f;n["default"]=A},"9cbc":function(e,n,t){"use strict";t("eab0")},ac6b:function(e,n,t){"use strict";t("ca73")},ca73:function(e,n,t){e.exports={primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},dd2e:function(e,n,t){"use strict";t("0116")},e82b:function(e,n,t){"use strict";t("3bf9")},eab0:function(e,n,t){e.exports={primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}}}]);
//# sourceMappingURL=chunk-799d4cd1.96223ad2.js.map