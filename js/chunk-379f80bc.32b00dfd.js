(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-379f80bc"],{"2ec6":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),n={class:"fee-schedule"},r={class:"fee-schedule__header"},i={class:"fee-schedule__descriptions"},l={class:"fee-schedule__table"},f={class:"fee-schedule__table__header"},o={class:"fee-schedule__table__body-item"},s={class:"fee-schedule__table__body-value"};function d(e,t,c,d,u,b){var p=Object(a["H"])("BackBtn"),h=Object(a["H"])("Icon"),y=Object(a["H"])("Container");return Object(a["z"])(),Object(a["h"])("section",n,[Object(a["l"])(p,{class:"fee-schedule__backBtn"}),Object(a["l"])("h1",r,Object(a["L"])(d.t("feeSchedule.title")),1),Object(a["l"])("div",i,[Object(a["l"])(y,{muted:"",class:"fee-schedule__description-item"},{default:Object(a["T"])((function(){return[Object(a["l"])(h,{name:"clock-schedule"}),Object(a["k"])(" "+Object(a["L"])(d.t("feeSchedule.descriptionFirstItem")),1)]})),_:1})]),Object(a["l"])("div",l,[Object(a["l"])("div",f,[Object(a["l"])("span",null,Object(a["L"])(d.t("feeSchedule.youSend")),1),Object(a["l"])("span",null,Object(a["L"])(d.t("feeSchedule.fees")),1)]),(Object(a["z"])(!0),Object(a["h"])(a["a"],null,Object(a["F"])(d.coinsSchedule,(function(e){return Object(a["z"])(),Object(a["h"])("div",{key:e.label,class:"fee-schedule__table__body"},[Object(a["l"])("div",o,[Object(a["l"])(h,{name:e.icon},null,8,["name"]),Object(a["l"])("span",null,Object(a["L"])(e.label),1)]),Object(a["l"])("div",s,[Object(a["l"])("span",null,Object(a["L"])(e.percentage)+"%",1)])])})),128))])])}var u=c("383b"),b=c("cbc2"),p=c("ac64"),h=c("eaf2"),y={name:"FeeSchedule",components:{Container:h["a"],Icon:b["a"],BackBtn:p["a"]},setup:function(){var e=Object(u["a"])(),t=e.t,c=Object(a["E"])([{label:"BTC",icon:"btc-circle",percentage:"2.0"},{label:"LTC",icon:"ltc-circle",percentage:"2.0"},{label:"XMR",icon:"xmr-circle",percentage:"2.0"},{label:"ETH",icon:"eth-circle",percentage:"3.5"},{label:"USDT",icon:"usdt-circle",percentage:"3.0"},{label:"Perfect Money",icon:"pm-circle",percentage:"2.5"}]);return{t:t,coinsSchedule:c}}};c("e2cf");y.render=d;t["default"]=y},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,c){var a=c("1d80"),n=c("5899"),r="["+n+"]",i=RegExp("^"+r+r+"*"),l=RegExp(r+r+"*$"),f=function(e){return function(t){var c=String(a(t));return 1&e&&(c=c.replace(i,"")),2&e&&(c=c.replace(l,"")),c}};e.exports={start:f(1),end:f(2),trim:f(3)}},"7d12":function(e,t,c){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},"9db5":function(e,t,c){"use strict";c("7d12")},a814:function(e,t,c){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},ac64:function(e,t,c){"use strict";var a=c("7a23");function n(e,t,c,n,r,i){var l=Object(a["H"])("Icon");return Object(a["z"])(),Object(a["h"])(l,{name:"arrow-left",class:"back-btn",onClick:n.goBack},null,8,["onClick"])}var r=c("6c02"),i=c("cbc2"),l=c("f659"),f={name:"BackBtn",components:{Icon:i["a"]},setup:function(){var e=Object(r["e"])(),t=function(){return window.history.length>2},c=function(){t()?e.go(-1):e.push({name:l["a"].HOME})};return{goBack:c}}};c("ce1f");f.render=n;t["a"]=f},ce1f:function(e,t,c){"use strict";c("e03a")},e03a:function(e,t,c){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},e2cf:function(e,t,c){"use strict";c("a814")},eaf2:function(e,t,c){"use strict";var a=c("7a23");function n(e,t,c,n,r,i){return Object(a["z"])(),Object(a["h"])(Object(a["J"])(c.variant),Object(a["s"])(e.$attrs,{class:[{container__boxShadow:c.boxShadow,container__muted:c.muted,container__border:c.bordered,container__active:c.active},"container"],style:{"--border-radius":c.radius,"--bg":c.backgroundColor}}),{default:Object(a["T"])((function(){return[Object(a["G"])(e.$slots,"default")]})),_:3},16,["class","style"])}var r={name:"Container",inheritAttrs:!0,props:{variant:{type:String,default:"div"},boxShadow:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},active:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},radius:{type:String,default:"6px"},backgroundColor:{type:String,default:"transparent"}}};c("9db5");r.render=n;t["a"]=r}}]);
//# sourceMappingURL=chunk-379f80bc.32b00dfd.js.map