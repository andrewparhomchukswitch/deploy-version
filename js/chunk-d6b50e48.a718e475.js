(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d6b50e48","chunk-c20af29a"],{"123e":function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},"13d5":function(e,t,n){"use strict";var c=n("23e7"),r=n("d58f").left,a=n("a640"),o=n("2d00"),i=n("605d"),l=a("reduce"),u=!i&&o>79&&o<83;c({target:"Array",proto:!0,forced:!l||u},{reduce:function(e){return r(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},1626:function(e,t,n){"use strict";n("e73e")},"1f0d":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));n("dca8"),n("d81d"),n("b64b");var c="status.",r=Object.freeze({unconfirmed:"".concat(c,"unconfirmed"),new:"".concat(c,"new"),expired:"".concat(c,"expired"),complete:"".concat(c,"complete"),confirmed:"".concat(c,"confirmed"),progress:"".concat(c,"progress")}),a=Object.freeze({unconfirmed:"primary-light",new:"info",expired:"secondary-light",complete:"success",confirmed:"success",progress:"success"});Object.keys(r).map((function(e){return{id:e,key:e,title:r[e],color:a[e]}}))},"222d":function(e,t,n){"use strict";n("6740")},"284d":function(e,t,n){"use strict";var c=n("ade3"),r=n("5530"),a=n("7a23");function o(e,t,n,o,i,l){return Object(a["z"])(),Object(a["h"])(Object(a["J"])(n.variant),{class:["text",Object(r["a"])(Object(c["a"])({},"text__"+n.type,n.type),o.classes)],style:{"--text-size":n.size,"--text-weight":n.weight,"--text-line-height":n.lineHeight,"--text-color":o.colorTheme,"--text-opacity":n.opacity,"--text-mt":n.mt,"--text-mr":n.mr,"--text-mb":n.mb,"--text-ml":n.ml}},{default:Object(a["T"])((function(){return[Object(a["G"])(e.$slots,"default")]})),_:3},8,["class","style"])}n("13d5"),n("b64b");var i=n("0028"),l={name:"Text",inheritAttrs:!0,props:{variant:{type:String,default:"span"},type:{type:String,default:""},size:{type:String,default:"inherit"},weight:{type:String,default:"normal"},lineHeight:{type:String,default:"inherit"},mt:{type:String,default:"0"},mr:{type:String,default:"0"},mb:{type:String,default:"0"},ml:{type:String,default:"0"},color:{type:String,default:"black"},theme:{type:String,default:""},opacity:{type:String,default:"1"}},setup:function(e,t){var n=t.attrs,o=Object(a["f"])((function(){return Object.keys(n).reduce((function(e,t){return Object(r["a"])(Object(r["a"])({},e),{},Object(c["a"])({},"text__"+t,!0))}),{})})),l=Object(a["f"])((function(){return i["a"][e.theme]||e.color}));return{classes:o,colorTheme:l}}};n("8285");l.render=o;t["a"]=l},"2ca3":function(e,t,n){"use strict";var c=n("7a23"),r={class:"checkbox"};function a(e,t,n,a,o,i){var l=Object(c["H"])("Icon");return Object(c["z"])(),Object(c["h"])("label",r,[Object(c["U"])(Object(c["l"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.value=e}),class:"checkbox__field",type:"checkbox"},null,512),[[c["N"],a.value]]),Object(c["l"])(l,{class:"checkbox__icon",name:a.value?"checked":"unchecked"},null,8,["name"]),Object(c["l"])("span",{class:"checkbox__label",innerHTML:n.label},null,8,["innerHTML"])])}var o=n("cbc2"),i=n("5473"),l={name:"Checkbox",components:{Icon:o["a"]},emits:["update:modelValue"],props:{label:{type:String,require:!0},modelValue:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit,c=Object(i["a"])(e,n),r=c.value;return{value:r}}};n("bb8f");l.render=a;t["a"]=l},"431a":function(e,t,n){"use strict";n("a61d")},"5d85":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r={class:"withdrawal-history"},a={class:"withdrawal-history__filters"},o={class:"withdrawal-history__filters-main"},i={class:"withdrawal-history__filters-secondary"},l={class:"withdrawal-history__expand-table"},u={class:"withdrawal-history__expand-table__row"},d=Object(c["k"])("10:51 PM"),s=Object(c["k"])("Transaction Initiated"),f={class:"withdrawal-history__expand-table__row"},b=Object(c["k"])("10:51 PM"),p=Object(c["k"])("Signing transaction"),h={class:"withdrawal-history__expand-table__row"},m=Object(c["k"])("10:51 PM");function O(e,t,n,O,y,j){var g=Object(c["H"])("Icon"),_=Object(c["H"])("Input"),v=Object(c["H"])("SelectInput"),w=Object(c["H"])("RadioButtons"),x=Object(c["H"])("SelectColumns"),k=Object(c["H"])("Badge"),E=Object(c["H"])("Date"),D=Object(c["H"])("Text"),F=Object(c["H"])("Table");return Object(c["z"])(),Object(c["h"])("section",r,[Object(c["l"])("div",a,[Object(c["l"])("div",o,[Object(c["l"])(_,{class:"withdrawal-history__filters-main__search","hide-shadow":"",placeholder:O.t("common.search")},{prepend:Object(c["T"])((function(){return[Object(c["l"])(g,{name:"search"})]})),_:1},8,["placeholder"]),Object(c["l"])(v,{muted:"",placeholder:O.t("common.crypto"),icon:"chevron-down",class:"withdrawal-history__filters-main__crypto"},null,8,["placeholder"]),Object(c["l"])(v,{muted:"",placeholder:O.t("common.to"),icon:"chevron-down",class:"withdrawal-history__filters-main__to"},null,8,["placeholder"]),Object(c["l"])(v,{muted:"",placeholder:O.t("common.from"),icon:"chevron-down",class:"withdrawal-history__filters-main__from"},null,8,["placeholder"])]),Object(c["l"])("div",i,[Object(c["l"])(w,{modelValue:O.withdrawalStatus,"onUpdate:modelValue":t[1]||(t[1]=function(e){return O.withdrawalStatus=e}),data:O.radioFilter},{default:Object(c["T"])((function(e){var t=e.item;return[Object(c["k"])(Object(c["L"])(O.t(t.title)),1)]})),_:1},8,["modelValue","data"]),Object(c["l"])(x,{columns:O.columns},null,8,["columns"])])]),Object(c["l"])(F,{columns:O.columns,data:O.data,expand:""},{column:Object(c["T"])((function(e){var t=e.column;return[Object(c["k"])(Object(c["L"])(O.t(t.title)),1)]})),cell:Object(c["T"])((function(e){var t=e.item,n=e.column;return["status"===n.type?(Object(c["z"])(),Object(c["h"])(k,{key:0,type:O.COLORS[t]},{default:Object(c["T"])((function(){return[Object(c["k"])(Object(c["L"])(O.t(O.STATUS[t])),1)]})),_:2},1032,["type"])):"date"===n.type?(Object(c["z"])(),Object(c["h"])(E,{key:1,date:t,format:"DD MMM YYYY HH:mm"},null,8,["date"])):(Object(c["z"])(),Object(c["h"])(c["a"],{key:2},[Object(c["k"])(Object(c["L"])(t),1)],64))]})),expand:Object(c["T"])((function(e){var t=e.item;return[Object(c["l"])("div",l,[Object(c["l"])("div",u,[Object(c["l"])(D,{type:"muted",mr:"20px"},{default:Object(c["T"])((function(){return[d]})),_:1}),Object(c["l"])(D,null,{default:Object(c["T"])((function(){return[s]})),_:1})]),Object(c["l"])("div",f,[Object(c["l"])(D,{type:"muted",mr:"20px"},{default:Object(c["T"])((function(){return[b]})),_:1}),Object(c["l"])(D,null,{default:Object(c["T"])((function(){return[p]})),_:1})]),Object(c["l"])("div",h,[Object(c["l"])(D,{type:"muted",mr:"20px"},{default:Object(c["T"])((function(){return[m]})),_:1}),Object(c["l"])(D,null,{default:Object(c["T"])((function(){return[Object(c["k"])("Transaction published with hash "+Object(c["L"])(t.hash),1)]})),_:2},1024)])])]})),_:1},8,["columns","data"])])}var y=n("4b2d"),j=n("383b"),g=n("456f"),_=n("cbc2"),v=n("72a0"),w=n("d85e"),x=n("76f8"),k=n("50d3"),E=n("dbba"),D=n("1f0d"),F=n("3be6"),S=n("284d"),B=n("0070"),T=n("f5f5"),C={name:"WithdrawalHistory",components:{Date:T["a"],Text:S["a"],Table:k["a"],SelectColumns:x["a"],SelectInput:v["a"],Input:g["a"],Icon:_["a"],RadioButtons:w["a"],Badge:E["default"]},setup:function(){var e=Object(j["a"])(),t=e.t,n=Object(c["E"])({}),r=Object(y["c"])(B["a"].WITHDRAWALS),a=r.getHistoryColumns,o=r.getHistoryData,i=Object(y["b"])(B["a"].WITHDRAWALS),l=i.setMockHistoryData;return l(),{t:t,withdrawalStatus:n,radioFilter:F["c"],columns:a,data:o,COLORS:D["a"],STATUS:D["b"]}}};n("e580");C.render=O;t["default"]=C},6740:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},"6ab8":function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},"72a0":function(e,t,n){"use strict";var c=n("7a23"),r={class:"d-flex align-items-center"},a={key:0,class:"select-input__body__prepend"},o={key:2,class:"select-input__placeholder"},i={key:0,class:"select-input__body__append"};function l(e,t,n,l,u,d){var s=Object(c["H"])("Icon"),f=Object(c["H"])("Container"),b=Object(c["H"])("Dropdown");return Object(c["z"])(),Object(c["h"])(b,{"hide-on-click":"","body-width":"100%",class:"select-input"},{label:Object(c["T"])((function(){return[Object(c["l"])(f,Object(c["s"])({muted:n.muted,bordered:n.bordered},l.filteredAttrs,{class:"select-input__body"}),{default:Object(c["T"])((function(){return[Object(c["l"])("div",r,[e.$slots.prepend?(Object(c["z"])(),Object(c["h"])("div",a,[Object(c["G"])(e.$slots,"prepend")])):Object(c["i"])("",!0),l.getModalValue[n.valueLabel]?Object(c["G"])(e.$slots,"selected",{key:1,item:l.getModalValue}):(Object(c["z"])(),Object(c["h"])("span",o,Object(c["L"])(n.placeholder),1))]),e.$slots.append?(Object(c["z"])(),Object(c["h"])("div",i,[Object(c["G"])(e.$slots,"append")])):Object(c["i"])("",!0),n.icon&&!e.$slots.append?(Object(c["z"])(),Object(c["h"])(s,{key:1,name:n.icon,class:"select-input__body__append"},null,8,["name"])):Object(c["i"])("",!0)]})),_:1},16,["muted","bordered"])]})),body:Object(c["T"])((function(){return[Object(c["l"])(f,{"box-shadow":"",bordered:"","background-color":"white",class:"select-input__options"},{default:Object(c["T"])((function(){return[(Object(c["z"])(!0),Object(c["h"])(c["a"],null,Object(c["F"])(l.filteredOptions,(function(t){return Object(c["z"])(),Object(c["h"])("div",{key:t.value,class:"select-input__options__item",onClick:function(e){return l.handleChange(t)}},[Object(c["G"])(e.$slots,"option",{option:t})],8,["onClick"])})),128))]})),_:1})]})),_:1})}var u=n("5530"),d=(n("4de4"),n("5473")),s=n("dd7a"),f=n("eaf2"),b=n("cbc2"),p=n("b75e"),h={name:"SelectInput",inheritAttrs:!0,directives:{clickOutside:s["a"]},components:{Dropdown:p["a"],Container:f["a"],Icon:b["a"]},emits:["update:modelValue"],props:{placeholder:{type:String,default:""},modelValue:{type:[Object,null],default:function(){return{}}},options:{type:Array,default:function(){return[]}},icon:{type:String,default:""},valueLabel:{type:String,default:"value"},muted:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit,r=t.attrs,a=Object(d["a"])(e,n),o=a.value,i=Object(c["f"])((function(){return e.modelValue||{}})),l=Object(c["f"])((function(){return Object(u["a"])(Object(u["a"])({},r),{},{class:""})})),s=Object(c["f"])((function(){return e.options.filter((function(t){return t[e.valueLabel]!==(e.modelValue||{})[e.valueLabel]}))||[]})),f=function(e){o.value=e};return{filteredOptions:s,getModalValue:i,filteredAttrs:l,handleChange:f}}};n("222d");h.render=l;t["a"]=h},"76f8":function(e,t,n){"use strict";var c=n("7a23"),r={class:"select-columns__label"};function a(e,t,n,a,o,i){var l=Object(c["H"])("Icon"),u=Object(c["H"])("Checkbox"),d=Object(c["H"])("Container"),s=Object(c["H"])("Dropdown");return Object(c["z"])(),Object(c["h"])(s,{class:"select-columns"},{label:Object(c["T"])((function(){return[Object(c["l"])("span",r,[Object(c["l"])(l,{name:"settings",class:"select-columns__label-icon"}),Object(c["k"])(" "+Object(c["L"])(a.t("table.column",3)),1)])]})),body:Object(c["T"])((function(){return[Object(c["l"])(d,{bordered:"","box-shadow":"","background-color":"white",class:"select-columns__body"},{default:Object(c["T"])((function(){return[(Object(c["z"])(!0),Object(c["h"])(c["a"],null,Object(c["F"])(n.columns,(function(e){return Object(c["z"])(),Object(c["h"])("div",{key:e.id,class:"select-columns__item"},[Object(c["l"])(u,{modelValue:e.isShow,"onUpdate:modelValue":function(t){return e.isShow=t},label:a.t(e.title)},null,8,["modelValue","onUpdate:modelValue","label"])])})),128))]})),_:1})]})),_:1})}var o=n("b75e"),i=n("eaf2"),l=n("2ca3"),u=n("cbc2"),d=n("383b"),s={name:"SelectColumns",components:{Dropdown:o["a"],Container:i["a"],Checkbox:l["a"],Icon:u["a"]},props:{columns:{type:Array,required:!0}},setup:function(){var e=Object(d["a"])(),t=e.t;return{t:t}}};n("1626");s.render=a;t["a"]=s},"825b":function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},8285:function(e,t,n){"use strict";n("cac1")},"86c6":function(e,t,n){"use strict";n("825b")},a61d:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},b75e:function(e,t,n){"use strict";var c=n("7a23");function r(e,t,n,r,a,o){var i=Object(c["I"])("click-outside");return Object(c["U"])((Object(c["z"])(),Object(c["h"])("div",{class:"dropdown",style:{"--dropdown-body-width":n.bodyWidth},onClick:t[3]||(t[3]=function(){return r.showDropdown&&r.showDropdown.apply(r,arguments)})},[Object(c["l"])("div",{class:"dropdown__label",onClick:t[1]||(t[1]=Object(c["W"])((function(){return r.toggleDropdown&&r.toggleDropdown.apply(r,arguments)}),["stop"]))},[Object(c["G"])(e.$slots,"label")]),Object(c["U"])(Object(c["l"])("div",{ref:"body",class:"dropdown__body",style:r.position,onClick:t[2]||(t[2]=Object(c["W"])((function(e){return n.hideOnClick&&r.hideDropdown()}),["stop"]))},[Object(c["G"])(e.$slots,"body")],4),[[c["Q"],r.isShowDropdown]])],4)),[[i,r.hideDropdown]])}var a=n("dd7a"),o=function(e){var t=e.getBoundingClientRect();return{left:t.left>=0,top:t.top>=0,bottom:t.bottom<=(window.innerHeight||document.documentElement.clientHeight),right:t.right<=(window.innerWidth||document.documentElement.clientWidth)}},i={name:"Dropdown",directives:{clickOutside:a["a"]},emits:["update:modelValue"],props:{bodyWidth:{type:String,default:"unset"},modelValue:{type:[Boolean,null],default:null},hideOnClick:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit,r=Object(c["E"])(!1),a=Object(c["E"])(),i=Object(c["E"])({}),l=Object(c["f"])({get:function(){return null===e.modelValue?r.value:e.modelValue},set:function(e){r.value=!!e,n("update:modelValue",!!e)}}),u=Object(c["f"])((function(){var e={};return e})),d=function(){l.value=!r.value},s=function(){l.value=!1},f=function(){l.value=!0};return Object(c["x"])((function(){i.value=o(a.value)})),{isShowDropdown:l,body:a,position:u,view:i,showDropdown:f,hideDropdown:s,toggleDropdown:d}}};n("431a");i.render=r;t["a"]=i},b8cd:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},bb8f:function(e,t,n){"use strict";n("123e")},cac1:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},d1e4:function(e,t,n){"use strict";n("b8cd")},d58f:function(e,t,n){var c=n("1c0b"),r=n("7b0b"),a=n("44ad"),o=n("50c4"),i=function(e){return function(t,n,i,l){c(n);var u=r(t),d=a(u),s=o(u.length),f=e?s-1:0,b=e?-1:1;if(i<2)while(1){if(f in d){l=d[f],f+=b;break}if(f+=b,e?f<0:s<=f)throw TypeError("Reduce of empty array with no initial value")}for(;e?f>=0:s>f;f+=b)f in d&&(l=n(l,d[f],f,u));return l}};e.exports={left:i(!1),right:i(!0)}},d85e:function(e,t,n){"use strict";var c=n("7a23"),r={class:"radio-buttons"};function a(e,t,n,a,o,i){return Object(c["z"])(),Object(c["h"])("div",r,[(Object(c["z"])(!0),Object(c["h"])(c["a"],null,Object(c["F"])(n.data,(function(t){var n;return Object(c["z"])(),Object(c["h"])("div",{key:t.key,class:["radio-buttons__item",{"radio-buttons__item_selected":(null===(n=a.value)||void 0===n?void 0:n.key)===t.key}],onClick:function(e){return a.selectItem(t)}},[Object(c["G"])(e.$slots,"default",{item:t})],10,["onClick"])})),128))])}var o=n("5473"),i={name:"RadioButtons",emits:["update:modelValue"],props:{data:{type:Array,require:!0},modelValue:{type:[Object,null],default:null,validate:function(e){return!e||!!e.key}}},setup:function(e,t){var n=t.emit,c=Object(o["a"])(e,n),r=c.value,a=function(e){r.value=e};return{value:r,selectItem:a}}};n("86c6");i.render=a;t["a"]=i},dbba:function(e,t,n){"use strict";n.r(t);var c=n("7a23");function r(e,t,n,r,a,o){return Object(c["z"])(),Object(c["h"])(Object(c["J"])(n.variant),{class:"badge",style:{"--badge-background-color":r.StyleVariables[n.type],"--badge-color":r.StyleVariables["t".concat(n.type)],"--badge-cursor":n.cursorPointer?"pointer":"unset"}},{default:Object(c["T"])((function(){return[Object(c["G"])(e.$slots,"default")]})),_:3},8,["style"])}var a=n("0028"),o={name:"Badge",props:{variant:{type:String,default:"div"},type:{type:String,default:"default"},cursorPointer:{type:Boolean,default:!1}},setup:function(){return{StyleVariables:a["a"]}}};n("d1e4");o.render=r;t["default"]=o},dca8:function(e,t,n){var c=n("23e7"),r=n("bb2f"),a=n("d039"),o=n("861d"),i=n("f183").onFreeze,l=Object.freeze,u=a((function(){l(1)}));c({target:"Object",stat:!0,forced:u,sham:!r},{freeze:function(e){return l&&o(e)?l(i(e)):e}})},e580:function(e,t,n){"use strict";n("6ab8")},e73e:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},f5f5:function(e,t,n){"use strict";var c=n("7a23");function r(e,t,n,r,a,o){var i=Object(c["H"])("Text");return Object(c["z"])(),Object(c["h"])(i,Object(c["s"])(e.$attrs,{class:"date"}),{default:Object(c["T"])((function(){return[Object(c["k"])(Object(c["L"])(r.formattedDate),1)]})),_:1},16)}var a=n("c1df"),o=n.n(a),i=n("284d"),l={name:"Date",inheritAttrs:!0,components:{Text:i["a"]},props:{date:{type:[Date,String],default:""},format:{type:String,default:""}},setup:function(e){var t=Object(c["f"])((function(){return o()(new Date(e.date)).format(e.format)}));return{formattedDate:t}}};l.render=r;t["a"]=l}}]);
//# sourceMappingURL=chunk-d6b50e48.a718e475.js.map