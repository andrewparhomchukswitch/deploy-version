(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55b6fd37"],{"13c9":function(e,t,a){e.exports={primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"1b83":function(e,t,a){"use strict";a("13c9")},"440f":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),c={class:"news"},r={class:"news__header"},s={class:"news__item__header"},i={class:"news__item__title"},o={class:"news__item__date"},l={class:"news__item__text"};function u(e,t,a,u,f,d){var b=Object(n["B"])("BackBtn");return Object(n["v"])(),Object(n["f"])("section",c,[Object(n["i"])(b,{class:"news__backBtn"}),Object(n["i"])("h1",r,Object(n["F"])(u.t("news.title")),1),(Object(n["v"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(u.filteredNewsData,(function(e){return Object(n["v"])(),Object(n["f"])("div",{key:e.title,class:"news__item"},[Object(n["i"])("div",s,[Object(n["i"])("h2",i,Object(n["F"])(e.title),1),Object(n["i"])("h3",o,Object(n["F"])(e.date),1)]),Object(n["i"])("p",l,Object(n["F"])(e.text),1)])})),128)),u.showAllNews?Object(n["g"])("",!0):(Object(n["v"])(),Object(n["f"])("h2",{key:0,onClick:t[1]||(t[1]=function(e){return u.showAllNews=!0}),class:"news__more-news"},Object(n["F"])(u.t("news.moreNews")),1))])}a("4de4");var f=a("47e2"),d=a("c1df"),b=a.n(d);function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"DD MMM YYYY",a=Object(f["b"])(),c=a.locale,r=Object(n["y"])(b()(e).format(t));return Object(n["J"])(c,(function(){r.value=b()(e).format(t)})),r}var y=a("676a"),w={name:"News",components:{BackBtn:y["a"]},setup:function(){var e=Object(f["b"])(),t=e.t,a=Object(n["y"])(!1),c=Object(n["d"])((function(){return a.value?r.value:r.value.filter((function(e,t){return t<4}))})),r=Object(n["y"])([{title:"Merry Christmas!",date:h(new Date(Date.now()-864e5)),text:"Fees reduced to 1% till the 30th of December."},{title:"Reimagine the products",date:h(),text:"With the help of the Play Library, you can use Play early in your design process to build out fully functional pages with just a few taps."},{title:"Merry Christmas!",date:h(),text:"Fees reduced to 1% till the 30th of December."},{title:"Reimagine the products",date:h(),text:"With the help of the Play Library, you can use Play early in your design process to build out fully functional pages with just a few taps."},{title:"Merry Christmas!",date:h(),text:"Fees reduced to 1% till the 30th of December."},{title:"Reimagine the products",date:h(),text:"With the help of the Play Library, you can use Play early in your design process to build out fully functional pages with just a few taps."}]);return{t:t,newsData:r,showAllNews:a,filteredNewsData:c}}};a("1b83");w.render=u;t["default"]=w},"676a":function(e,t,a){"use strict";var n=a("7a23");function c(e,t,a,c,r,s){var i=Object(n["B"])("Icon");return Object(n["v"])(),Object(n["f"])(i,{name:"arrow-left",class:"back-btn",onClick:c.goBack},null,8,["onClick"])}var r=a("6c02"),s=a("00a1"),i={name:"BackBtn",components:{Icon:s["a"]},setup:function(){var e=Object(r["c"])(),t=function(){return window.history.length>2},a=function(){t()?e.go(-1):e.push("/")};return{goBack:a}}};a("8d44");i.render=c;t["a"]=i},"8d44":function(e,t,a){"use strict";a("a775")},a775:function(e,t,a){e.exports={primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}}}]);
//# sourceMappingURL=chunk-55b6fd37.911a9e0d.js.map