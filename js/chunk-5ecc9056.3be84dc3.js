(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ecc9056","chunk-022932cc"],{"06e3":function(t,e,a){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"0ab4":function(t,e,a){"use strict";a.r(e);a("b0c0");var n=a("7a23"),c={class:"deposits-history"},r={class:"deposits-history__filters"},o={class:"deposits-history__filters-main"},i={class:"deposits-history__filters-secondary"};function s(t,e,a,s,u,l){var f=Object(n["G"])("Icon"),d=Object(n["G"])("Input"),b=Object(n["G"])("SelectInput"),p=Object(n["G"])("RadioButtons"),O=Object(n["G"])("SelectColumns"),j=Object(n["G"])("Badge"),y=Object(n["G"])("Date"),m=Object(n["G"])("Table"),g=Object(n["G"])("Pagination");return Object(n["y"])(),Object(n["h"])("section",c,[Object(n["k"])("div",r,[Object(n["k"])("div",o,[Object(n["k"])(d,{class:"deposits-history__filters-main__search","hide-shadow":"",placeholder:s.t("common.search")},{prepend:Object(n["S"])((function(){return[Object(n["k"])(f,{name:"search"})]})),_:1},8,["placeholder"]),Object(n["k"])(b,{muted:"",placeholder:s.t("common.crypto"),icon:"chevron-down",class:"deposits-history__filters-main__crypto"},null,8,["placeholder"]),Object(n["k"])(b,{muted:"",placeholder:s.t("common.to"),icon:"chevron-down",class:"deposits-history__filters-main__to"},null,8,["placeholder"]),Object(n["k"])(b,{muted:"",placeholder:s.t("common.from"),icon:"chevron-down",class:"deposits-history__filters-main__from"},null,8,["placeholder"])]),Object(n["k"])("div",i,[Object(n["k"])(p,{modelValue:s.depositsStatus,"onUpdate:modelValue":e[1]||(e[1]=function(t){return s.depositsStatus=t}),data:s.radioFilter},{default:Object(n["S"])((function(t){var e=t.item;return[Object(n["j"])(Object(n["K"])(s.t(e.title)),1)]})),_:1},8,["modelValue","data"]),Object(n["k"])(O,{columns:s.columns},null,8,["columns"])])]),Object(n["k"])(m,{columns:s.columns,data:s.data},{column:Object(n["S"])((function(t){var e=t.column;return[Object(n["j"])(Object(n["K"])(s.t(e.title)),1)]})),cell:Object(n["S"])((function(t){var e=t.item,a=t.column;return["status"===a.name?(Object(n["y"])(),Object(n["h"])(j,{key:0,type:s.COLORS[e]},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(s.t(s.STATUS[e])),1)]})),_:2},1032,["type"])):"date"===a.type?(Object(n["y"])(),Object(n["h"])(y,{key:1,date:e,format:"DD MMM YYYY HH:mm"},null,8,["date"])):(Object(n["y"])(),Object(n["h"])(n["a"],{key:2},[Object(n["j"])(Object(n["K"])(e),1)],64))]})),_:1},8,["columns","data"]),Object(n["k"])(g,{class:"deposits-history__pagination",modelValue:s.page,"onUpdate:modelValue":e[2]||(e[2]=function(t){return s.page=t}),"per-page":s.perPage,"total-count":s.totalCount},null,8,["modelValue","per-page","total-count"])])}var u=a("47e2"),l=a("f5b6"),f=a("334b"),d=a("00a1"),b=a("e739"),p=a("3123"),O=a("eb69"),j=a("e91f"),y=a("4cb3"),m=a("b010"),g=a("b08e"),h=a("2a74"),_=a("ee86");function v(t,e,a,c,r,o){var i=Object(n["G"])("Text");return Object(n["y"])(),Object(n["h"])(i,Object(n["r"])(t.$attrs,{class:"date"}),{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(c.formattedDate),1)]})),_:1},16)}var k=a("c1df"),E=a.n(k),S=a("0f35"),D={name:"Date",inheritAttrs:!0,components:{Text:S["a"]},props:{date:{type:[Date,String],default:""},format:{type:String,default:""}},setup:function(t){var e=Object(n["f"])((function(){return E()(t.date).format(t.format)}));return{formattedDate:e}}};D.render=v;var F=D,B={name:"DepositsHistoryTab",components:{Date:F,Pagination:_["a"],Table:j["a"],SelectColumns:O["a"],SelectInput:b["a"],Input:f["a"],Icon:d["a"],RadioButtons:p["a"],Badge:y["default"]},setup:function(){var t=Object(u["b"])(),e=t.t,a=Object(n["D"])({}),c=Object(l["c"])(h["a"].DEPOSITS),r=c.getHistoryColumns,o=c.getHistoryData,i=c.getHistoryPage,s=c.getHistoryPerPage,f=c.getHistoryTotalCount,d=Object(l["e"])(h["a"].DEPOSITS),b=d.SET_HISTORY_PAGE,p=Object(l["b"])(h["a"].DEPOSITS),O=p.setMockHistoryData,j=Object(n["f"])({get:function(){return i.value},set:b});return O(),{t:e,depositsStatus:a,page:j,perPage:s,totalCount:f,radioFilter:g["c"],columns:r,data:o,COLORS:m["a"],STATUS:m["b"]}}};a("1033");B.render=s;e["default"]=B},1033:function(t,e,a){"use strict";a("06e3")},"2dda":function(t,e,a){"use strict";a("9f82")},3932:function(t,e,a){"use strict";var n=a("7a23"),c={class:"button__label"};function r(t,e,a,r,o,i){return Object(n["y"])(),Object(n["h"])("button",{class:["button",{"button__default-padding":a.defaultPadding}],style:{"--background-color":r.StyleVariables[a.type],"--color":r.StyleVariables["t".concat(a.type)]}},[Object(n["k"])("span",c,[Object(n["F"])(t.$slots,"default")])],6)}var o=a("c07e"),i={name:"Button",props:{type:{type:String,default:"default"},defaultPadding:{type:Boolean,default:!1}},setup:function(){return{StyleVariables:o["a"]}}};a("b1ae");i.render=r;e["a"]=i},"45a0":function(t,e,a){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"4cb3":function(t,e,a){"use strict";a.r(e);var n=a("7a23");function c(t,e,a,c,r,o){return Object(n["y"])(),Object(n["h"])(Object(n["I"])(a.variant),{class:"badge",style:{"--background-color":c.StyleVariables[a.type],"--color":c.StyleVariables["t".concat(a.type)]}},{default:Object(n["S"])((function(){return[Object(n["F"])(t.$slots,"default")]})),_:3},8,["style"])}var r=a("c07e"),o={name:"Badge",props:{variant:{type:String,default:"div"},type:{type:String,default:"default"}},setup:function(){return{StyleVariables:r["a"]}}};a("abd0");o.render=c;e["default"]=o},"7ffd":function(t,e,a){"use strict";a("ea53")},"9d56":function(t,e,a){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"9f82":function(t,e,a){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},abd0:function(t,e,a){"use strict";a("45a0")},b010:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return r}));a("dca8"),a("d81d"),a("b64b");var n="status.",c=Object.freeze({unconfirmed:"".concat(n,"unconfirmed"),new:"".concat(n,"new"),expired:"".concat(n,"expired"),complete:"".concat(n,"complete"),confirmed:"".concat(n,"confirmed"),progress:"".concat(n,"progress")}),r=Object.freeze({unconfirmed:"primary-light",new:"info",expired:"secondary-light",complete:"success",confirmed:"success",progress:"success"});Object.keys(c).map((function(t){return{id:t,key:t,title:c[t],color:r[t]}}))},b1ae:function(t,e,a){"use strict";a("9d56")},bb2f:function(t,e,a){var n=a("d039");t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},dca8:function(t,e,a){var n=a("23e7"),c=a("bb2f"),r=a("d039"),o=a("861d"),i=a("f183").onFreeze,s=Object.freeze,u=r((function(){s(1)}));n({target:"Object",stat:!0,forced:u,sham:!c},{freeze:function(t){return s&&o(t)?s(i(t)):t}})},e739:function(t,e,a){"use strict";var n=a("7a23"),c={key:1,class:"select-input__placeholder"};function r(t,e,a,r,o,i){var s=Object(n["G"])("Icon"),u=Object(n["G"])("Container"),l=Object(n["H"])("click-outside");return Object(n["T"])((Object(n["y"])(),Object(n["h"])(u,{muted:a.muted,border:a.border,class:"select-input"},{default:Object(n["S"])((function(){return[Object(n["k"])("div",{class:"select-input__body",onClick:e[1]||(e[1]=function(t){return r.showDropdown=!r.showDropdown})},[a.modelValue.value?Object(n["F"])(t.$slots,"selected",{key:0,item:{modelValue:a.modelValue}}):(Object(n["y"])(),Object(n["h"])("span",c,Object(n["K"])(a.placeholder),1)),a.icon?(Object(n["y"])(),Object(n["h"])(s,{key:2,name:a.icon,class:"select-input__body__append"},null,8,["name"])):Object(n["i"])("",!0),Object(n["F"])(t.$slots,"append",{class:"select-input__body__append"})]),r.showDropdown?(Object(n["y"])(),Object(n["h"])(u,{key:0,class:"select-input__options"},{default:Object(n["S"])((function(){return[(Object(n["y"])(!0),Object(n["h"])(n["a"],null,Object(n["E"])(r.filteredOptions,(function(e){return Object(n["y"])(),Object(n["h"])("div",{key:e.value,class:"select-input__options__item",onClick:function(t){return r.handleChange(e)}},[Object(n["F"])(t.$slots,"option",{option:e})],8,["onClick"])})),128))]})),_:1})):Object(n["i"])("",!0)]})),_:3},8,["muted","border"])),[[l,r.hideDropdown]])}a("4de4");var o=a("08e8"),i=a("185a"),s=a("00a1"),u=a("1a6c"),l={name:"SelectInput",directives:{clickOutside:u["a"]},components:{Container:i["a"],Icon:s["a"]},props:{placeholder:{type:String,default:""},modelValue:{type:Object,default:function(){return{}}},icon:{type:String,default:""},muted:{type:Boolean,default:!1},border:{type:Boolean,default:!1}},setup:function(t,e){var a=e.emit,c=Object(n["D"])(!1),r=Object(o["a"])(t,a),i=r.value,s=Object(n["f"])((function(){var e;return(null===(e=t.options)||void 0===e?void 0:e.filter((function(e){var a;return e.value!==(null===(a=t.modelValue)||void 0===a?void 0:a.value)})))||[]})),u=function(){c.value=!1},l=function(t){i.value=t};return{showDropdown:c,filteredOptions:s,hideDropdown:u,handleChange:l}}};a("7ffd");l.render=r;e["a"]=l},ea53:function(t,e,a){t.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},ee86:function(t,e,a){"use strict";var n=a("7a23"),c={class:"pagination"},r={class:"pagination__pages"},o=Object(n["k"])("div",{class:"pagination__pages-item pagination__page-divider"}," ... ",-1),i={class:"pagination__pages-item pagination__page-last"},s={class:"pagination__goto"};function u(t,e,a,u,l,f){var d=Object(n["G"])("Icon"),b=Object(n["G"])("Button"),p=Object(n["G"])("Text"),O=Object(n["G"])("Input");return Object(n["y"])(),Object(n["h"])("div",c,[Object(n["k"])(b,{type:"primary",class:"pagination__page-next"},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(u.t("pagination.nextPage"))+" ",1),Object(n["k"])(d,{name:"arrow-right-full"})]})),_:1}),Object(n["k"])("div",r,[(Object(n["y"])(!0),Object(n["h"])(n["a"],null,Object(n["E"])(u.pageSlots,(function(t){return Object(n["y"])(),Object(n["h"])("div",{key:t,class:"pagination__pages-item"},Object(n["K"])(t),1)})),128)),o,Object(n["k"])("div",i,Object(n["K"])(u.pagesCount),1)]),Object(n["k"])("div",s,[Object(n["k"])(p,{variant:"p",type:"muted",mr:"10px"},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(u.t("pagination.goTo")),1)]})),_:1}),Object(n["k"])(O,{placeholder:u.t("pagination.page"),type:"number","hide-shadow":""},null,8,["placeholder"])])])}a("a9e3");var l=a("00a1"),f=a("3932"),d=a("0f35"),b=a("334b"),p=a("47e2"),O={name:"Pagination",components:{Input:b["a"],Button:f["a"],Icon:l["a"],Text:d["a"]},emits:["update:modelValue"],props:{modelValue:{type:Number,default:1},perPage:{type:Number,default:100},totalCount:{type:Number,default:100},slotsCount:{type:Number,default:6}},setup:function(t){var e=Object(p["b"])(),a=e.t,c=Object(n["f"])((function(){return Math.ceil(t.totalCount/t.perPage)})),r=Object(n["f"])((function(){for(var e=[],a=0;a<t.slotsCount;a++)e.push(t.modelValue+a);return e}));return{t:a,pagesCount:c,pageSlots:r}}};a("2dda");O.render=u;e["a"]=O},f183:function(t,e,a){var n=a("d012"),c=a("861d"),r=a("5135"),o=a("9bf2").f,i=a("90e3"),s=a("bb2f"),u=i("meta"),l=0,f=Object.isExtensible||function(){return!0},d=function(t){o(t,u,{value:{objectID:"O"+ ++l,weakData:{}}})},b=function(t,e){if(!c(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!r(t,u)){if(!f(t))return"F";if(!e)return"E";d(t)}return t[u].objectID},p=function(t,e){if(!r(t,u)){if(!f(t))return!0;if(!e)return!1;d(t)}return t[u].weakData},O=function(t){return s&&j.REQUIRED&&f(t)&&!r(t,u)&&d(t),t},j=t.exports={REQUIRED:!1,fastKey:b,getWeakData:p,onFreeze:O};n[u]=!0}}]);
//# sourceMappingURL=chunk-5ecc9056.3be84dc3.js.map