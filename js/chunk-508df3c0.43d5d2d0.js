(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-508df3c0"],{"01f6":function(e,t,r){"use strict";r("d93e")},"08e8":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("7a23"),a=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e},a=Object(n["f"])({get:function(){return e.modelValue},set:function(e){t("update:modelValue",r(e))}});return{value:a}}},"0ece":function(e,t,r){"use strict";r("c7df")},"0f35":function(e,t,r){"use strict";var n=r("ade3"),a=r("5530"),c=r("7a23");function i(e,t,r,i,o,l){return Object(c["y"])(),Object(c["h"])(Object(c["I"])(r.variant),{class:["text",Object(a["a"])(Object(n["a"])({},"text__"+r.type,r.type),i.classes)],style:{"--size":r.size,"--weight":r.weight,"--line-height":r.lineHeight,"--color":i.colorTheme,"--mt":r.mt,"--mr":r.mr,"--mb":r.mb,"--ml":r.ml}},{default:Object(c["S"])((function(){return[Object(c["F"])(e.$slots,"default")]})),_:3},8,["class","style"])}r("13d5"),r("b64b");var o=r("c07e"),l={name:"Text",inheritAttrs:!0,props:{variant:{type:String,default:"span"},type:{type:String,default:""},size:{type:String,default:"inherit"},weight:{type:String,default:"normal"},lineHeight:{type:String,default:"inherit"},mt:{type:String,default:"0"},mr:{type:String,default:"0"},mb:{type:String,default:"0"},ml:{type:String,default:"0"},color:{type:String,default:"black"},theme:{type:String,default:""}},setup:function(e,t){var r=t.attrs,i=Object(c["f"])((function(){return Object.keys(r).reduce((function(e,t){return Object(a["a"])(Object(a["a"])({},e),{},Object(n["a"])({},"text__"+t,!0))}),{})})),l=Object(c["f"])((function(){return o["a"][e.theme]||e.color}));return{classes:i,colorTheme:l}}};r("d649");l.render=i;t["a"]=l},"13d5":function(e,t,r){"use strict";var n=r("23e7"),a=r("d58f").left,c=r("a640"),i=r("2d00"),o=r("605d"),l=c("reduce"),d=!o&&i>79&&i<83;n({target:"Array",proto:!0,forced:!l||d},{reduce:function(e){return a(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"16e1":function(e,t,r){"use strict";r("5e35")},"19e1":function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"1c3a":function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"2e20":function(e,t,r){"use strict";r("7c34")},3123:function(e,t,r){"use strict";var n=r("7a23"),a={class:"radio-buttons"};function c(e,t,r,c,i,o){return Object(n["y"])(),Object(n["h"])("div",a,[(Object(n["y"])(!0),Object(n["h"])(n["a"],null,Object(n["E"])(r.data,(function(t){var r;return Object(n["y"])(),Object(n["h"])("div",{key:t.key,class:["radio-buttons__item",{"radio-buttons__item_selected":(null===(r=c.value)||void 0===r?void 0:r.key)===t.key}],onClick:function(e){return c.selectItem(t)}},[Object(n["F"])(e.$slots,"default",{item:t})],10,["onClick"])})),128))])}var i=r("08e8"),o={name:"RadioButtons",emits:["update:modelValue"],props:{data:{type:Array,require:!0},modelValue:{type:[Object,null],default:null,validate:function(e){return!e||!!e.key}}},setup:function(e,t){var r=t.emit,n=Object(i["a"])(e,r),a=n.value,c=function(e){a.value=e};return{value:a,selectItem:c}}};r("16e1");o.render=c;t["a"]=o},"315a":function(e,t,r){"use strict";r("dd27")},"334b":function(e,t,r){"use strict";var n=r("7a23"),a={key:0,class:"input__prepend"},c={class:"input__body"},i={class:"input__body-label"},o={key:1,class:"input__append"},l={key:2,class:"input__error-text"};function d(e,t,r,d,u,s){var f=Object(n["G"])("Container");return Object(n["y"])(),Object(n["h"])(f,{bordered:"","box-shadow":"",variant:"label",class:["input",{input__error:r.error,"input__read-only":r.readOnly,"input__hide-shadow":r.hideShadow||r.readOnly}],style:{"--opacity":r.fullOpacity}},{default:Object(n["S"])((function(){return[e.$slots.prepend?(Object(n["y"])(),Object(n["h"])("div",a,[Object(n["F"])(e.$slots,"prepend")])):Object(n["i"])("",!0),Object(n["k"])("div",c,[Object(n["k"])("span",i,Object(n["K"])(r.label),1),d.showPlaceholder?(Object(n["y"])(),Object(n["h"])("span",{key:0,class:"input__placeholder",style:r.placeholderStyles},Object(n["K"])(r.placeholder),5)):Object(n["i"])("",!0),Object(n["T"])(Object(n["k"])("input",{class:["input__body-field",{"input__body-field__opacity":r.opacity}],readonly:r.readOnly,disabled:r.disabled,type:r.type,"onUpdate:modelValue":t[1]||(t[1]=function(e){return d.inputValue=e}),onBlur:t[2]||(t[2]=function(t){return e.$emit("blur")})},null,42,["readonly","disabled","type"]),[[n["N"],d.inputValue]])]),e.$slots.append?(Object(n["y"])(),Object(n["h"])("div",o,[Object(n["F"])(e.$slots,"append")])):Object(n["i"])("",!0),r.errorText&&r.error?(Object(n["y"])(),Object(n["h"])("div",l,Object(n["K"])(r.errorText),1)):Object(n["i"])("",!0)]})),_:1},8,["class","style"])}r("a9e3");var u=r("185a"),s={name:"Input",components:{Container:u["a"]},emits:["update:modelValue","blur"],inheritAttrs:!0,props:{type:{type:String,default:"text"},label:{type:String,default:""},modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},placeholderStyles:{type:Object,default:function(){return{}}},errorText:{type:String,default:""},error:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},opacity:{type:Boolean,default:!1},fullOpacity:{type:[Number,String],default:1},hideShadow:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup:function(e,t){var r=t.emit,a=Object(n["D"])(e.modelValue),c=Object(n["f"])({get:function(){return e.modelValue||a.value},set:function(e){a.value=e,r("update:modelValue",e)}}),i=Object(n["f"])((function(){return!a.value}));return{showPlaceholder:i,inputValue:c}}};r("bca4");s.render=d;t["a"]=s},3932:function(e,t,r){"use strict";var n=r("7a23"),a={class:"button__label"};function c(e,t,r,c,i,o){return Object(n["y"])(),Object(n["h"])("button",{class:["button",{"button__default-padding":r.defaultPadding}],style:{"--background-color":c.StyleVariables[r.type],"--color":c.StyleVariables["t".concat(r.type)],"--font-size":r.fontSize}},[Object(n["k"])("span",a,[Object(n["F"])(e.$slots,"default")])],6)}var i=r("c07e"),o={name:"Button",props:{type:{type:String,default:"default"},defaultPadding:{type:Boolean,default:!1},fontSize:{type:String,default:"16px"}},setup:function(){return{StyleVariables:i["a"]}}};r("ec23");o.render=c;t["a"]=o},"4b04":function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"55a5":function(e,t,r){"use strict";var n=r("7a23");function a(e,t,r,a,c,i){var o=Object(n["H"])("click-outside");return Object(n["T"])((Object(n["y"])(),Object(n["h"])("div",{class:"dropdown",style:{"--dropdown-body-width":r.bodyWidth},onClick:t[3]||(t[3]=function(){return a.showDropdown&&a.showDropdown.apply(a,arguments)})},[Object(n["k"])("div",{class:"dropdown__label",onClick:t[1]||(t[1]=Object(n["V"])((function(){return a.toggleDropdown&&a.toggleDropdown.apply(a,arguments)}),["stop"]))},[Object(n["F"])(e.$slots,"label")]),Object(n["T"])(Object(n["k"])("div",{ref:"body",class:"dropdown__body",style:a.position,onClick:t[2]||(t[2]=Object(n["V"])((function(e){return r.hideOnClick&&a.hideDropdown()}),["stop"]))},[Object(n["F"])(e.$slots,"body")],4),[[n["P"],a.isShowDropdown]])],4)),[[o,a.hideDropdown]])}var c=r("1a6c"),i=function(e){var t=e.getBoundingClientRect();return{left:t.left>=0,top:t.top>=0,bottom:t.bottom<=(window.innerHeight||document.documentElement.clientHeight),right:t.right<=(window.innerWidth||document.documentElement.clientWidth)}},o={name:"Dropdown",directives:{clickOutside:c["a"]},emits:["update:modelValue"],props:{bodyWidth:{type:String,default:"unset"},modelValue:{type:[Boolean,null],default:null},hideOnClick:{type:Boolean,default:!1}},setup:function(e,t){var r=t.emit,a=Object(n["D"])(!1),c=Object(n["D"])(),o=Object(n["D"])({}),l=Object(n["f"])({get:function(){return null===e.modelValue?a.value:e.modelValue},set:function(e){a.value=!!e,r("update:modelValue",!!e)}}),d=Object(n["f"])((function(){var e={};return e})),u=function(){l.value=!a.value},s=function(){l.value=!1},f=function(){l.value=!0};return Object(n["w"])((function(){o.value=i(c.value)})),{isShowDropdown:l,body:c,position:d,view:o,showDropdown:f,hideDropdown:s,toggleDropdown:u}}};r("e518");o.render=a;t["a"]=o},5804:function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"5a7a":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a={class:"add-new-withdrawal"},c={class:"add-new-withdrawal__main"},i={class:"add-new-withdrawal__select-currency"},o={class:"d-flex align-items-center"},l={class:"switcher-option"},d={class:"switcher-option"},u={class:"add-new-withdrawal__amount"},s={class:"add-new-withdrawal__label add-new-withdrawal__amount__label"},f={class:"add-new-withdrawal__amount__fields"},b=Object(n["k"])("p",null,"BTC",-1),p=Object(n["k"])("p",null,"USD",-1),j={class:"add-new-withdrawal__address"},O={class:"add-new-withdrawal__label add-new-withdrawal__address__label"},y={class:"add-new-withdrawal__priority"},h={class:"add-new-withdrawal__priority__label"},m={class:"radio-buttons__text"},w=Object(n["j"])("$80,131.00"),_=Object(n["j"])("0.001231 BTC"),v=Object(n["j"])(" ~ $316.91"),k={class:"add-new-withdrawal__process__balance"},g=Object(n["j"])(" 100.01231 BTC "),E=Object(n["j"])(" ~ $56,180,131.00 "),S={class:"add-new-withdrawal__authentication__actions"},F={class:"add-new-withdrawal__aside"};function B(e,t,r,B,x,D){var C=Object(n["G"])("Icon"),A=Object(n["G"])("Text"),V=Object(n["G"])("SelectInput"),G=Object(n["G"])("Switcher"),I=Object(n["G"])("Input"),K=Object(n["G"])("RadioButtons"),z=Object(n["G"])("Button"),T=Object(n["G"])("Container"),$=Object(n["G"])("InputCode"),L=Object(n["G"])("PreviousAddressesList");return Object(n["y"])(),Object(n["h"])("section",a,[Object(n["k"])("div",c,[Object(n["k"])("div",i,[Object(n["k"])(V,{modelValue:B.crypto,"onUpdate:modelValue":t[1]||(t[1]=function(e){return B.crypto=e}),options:B.coinsMock,"value-label":"key",bordered:"",placeholder:B.t("withdrawals.selectCrypto"),class:"add-new-withdrawal__select-currency__input"},{prepend:Object(n["S"])((function(){var e;return[Object(n["k"])(C,{width:"28px",height:"28px",name:(null===(e=B.crypto)||void 0===e?void 0:e.icon)+"-circle"},null,8,["name"])]})),selected:Object(n["S"])((function(e){var t=e.item;return[Object(n["k"])(A,{size:"16px",weight:"500"},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(t.title),1)]})),_:2},1024)]})),append:Object(n["S"])((function(){return[Object(n["k"])(C,{width:"8px",height:"5px",name:"arrow-down"})]})),option:Object(n["S"])((function(e){var t=e.option;return[Object(n["k"])("div",o,[Object(n["k"])(C,{name:t.icon+"-circle",width:"28px",height:"28px"},null,8,["name"]),Object(n["k"])(A,{size:"16px",weight:"500",ml:"8px"},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(t.title),1)]})),_:2},1024)])]})),_:1},8,["modelValue","options","placeholder"]),Object(n["k"])(G,{modelValue:B.isManual,"onUpdate:modelValue":t[2]||(t[2]=function(e){return B.isManual=e}),class:"add-new-withdrawal__select-currency__switcher"},{first:Object(n["S"])((function(){return[Object(n["k"])("div",l,[Object(n["k"])(C,{name:"lightning"}),Object(n["j"])(" "+Object(n["K"])(B.t("common.quick")),1)])]})),second:Object(n["S"])((function(){return[Object(n["k"])("div",d,[Object(n["k"])(C,{name:"settings"}),Object(n["j"])(" "+Object(n["K"])(B.t("common.manual")),1)])]})),_:1},8,["modelValue"])]),Object(n["k"])("div",u,[Object(n["k"])("div",s,Object(n["K"])(B.t("commands.enterAmount")),1),Object(n["k"])("div",f,[Object(n["k"])(I,{placeholder:B.t("amount.currency",{currency:"BTC"}),"hide-shadow":"","full-opacity":"0.5"},{append:Object(n["S"])((function(){return[b]})),_:1},8,["placeholder"]),Object(n["k"])(C,{name:"arrows"}),Object(n["k"])(I,{placeholder:B.t("amount.usd"),"hide-shadow":"","full-opacity":"0.5"},{append:Object(n["S"])((function(){return[p]})),_:1},8,["placeholder"])])]),Object(n["k"])("div",j,[Object(n["k"])("div",O,Object(n["K"])(B.t("places.address")),1),Object(n["k"])(I,{modelValue:B.withdrawal.address.value,"onUpdate:modelValue":[t[3]||(t[3]=function(e){return B.withdrawal.address.value=e}),t[4]||(t[4]=function(e){return B.validate(B.withdrawal.address)})],error:B.withdrawal.address.error,"error-text":B.withdrawal.address.errorText,placeholder:"E.g. c15pJxcAIzaSyB9puDplMxJ62vYlFruxmmIAez3","placeholder-styles":{opacity:.2},"hide-shadow":""},{append:Object(n["S"])((function(){return[Object(n["k"])(C,{name:B.withdrawal.address.error?"red-close":"green-checked"},null,8,["name"])]})),_:1},8,["modelValue","error","error-text","placeholder-styles"])]),Object(n["k"])("div",y,[Object(n["k"])("div",null,[Object(n["k"])("div",h,Object(n["K"])(B.t("priority.title")),1),Object(n["k"])(K,{modelValue:B.priority,"onUpdate:modelValue":t[5]||(t[5]=function(e){return B.priority=e}),data:B.radioButtons},{default:Object(n["S"])((function(e){var t=e.item;return[Object(n["k"])("span",m,Object(n["K"])(t.title),1)]})),_:1},8,["modelValue","data"])]),Object(n["k"])("div",null,[Object(n["k"])(A,{variant:"p",type:"muted",size:"14px",mb:"12px"},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(B.t("withdrawals.currentRate")),1)]})),_:1}),Object(n["k"])(A,{size:"16px"},{default:Object(n["S"])((function(){return[w]})),_:1})]),Object(n["k"])("div",null,[Object(n["k"])(A,{variant:"p",type:"muted",size:"14px",mb:"12px"},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(B.t("withdrawals.networkFee"))+":",1)]})),_:1}),Object(n["k"])(A,{size:"16px"},{default:Object(n["S"])((function(){return[_]})),_:1}),Object(n["k"])(A,{size:"16px",type:"muted"},{default:Object(n["S"])((function(){return[v]})),_:1})])]),Object(n["k"])(T,{radius:"8px",muted:"",class:"add-new-withdrawal__process"},{default:Object(n["S"])((function(){return[Object(n["k"])(z,{type:"primary",onClick:B.showAlert},{default:Object(n["S"])((function(){return[Object(n["k"])(A,{size:"14px",color:"white"},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(B.t("withdrawals.process")),1)]})),_:1})]})),_:1},8,["onClick"]),Object(n["k"])(A,{type:"muted",size:"14px",mr:"20px"},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(B.t("withdrawals.balanceAfterTransaction"))+":",1)]})),_:1}),Object(n["k"])("div",k,[Object(n["k"])(A,{variant:"p"},{default:Object(n["S"])((function(){return[g]})),_:1}),Object(n["k"])(A,{variant:"p",size:"14px",type:"muted"},{default:Object(n["S"])((function(){return[E]})),_:1})])]})),_:1}),Object(n["k"])(T,{radius:"8px",muted:"",class:"add-new-withdrawal__authentication"},{default:Object(n["S"])((function(){return[Object(n["k"])(A,{weight:"500",size:"18px",mb:"10px"},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(B.t("authentication.twoFactor")),1)]})),_:1}),Object(n["k"])(A,{size:"14px",mb:"20px"},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(B.t("authentication.subText",{app:"2FA"})),1)]})),_:1}),Object(n["k"])($,{class:"add-new-withdrawal__authentication__code"}),Object(n["k"])("div",S,[Object(n["k"])(z,{type:"primary",onClick:B.showAlert},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(B.t("withdrawals.process")),1)]})),_:1},8,["onClick"]),Object(n["k"])(z,{class:"add-new-withdrawal__authentication__actions-cancel"},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(B.t("common.cancel")),1)]})),_:1})])]})),_:1})]),Object(n["k"])("aside",F,[Object(n["k"])(L)])])}var x=r("00a1"),D=r("334b");function C(e,t,r,a,c,i){return Object(n["y"])(),Object(n["h"])("div",{class:["switcher",{switcher__left:!r.modelValue,switcher__right:r.modelValue}],styles:{"--width":r.width}},[Object(n["k"])("div",{class:["switcher__option switcher__first",{switcher__option_active:!r.modelValue}],onClick:t[1]||(t[1]=function(e){return a.onSwitch(!1)})},[Object(n["F"])(e.$slots,"first")],2),Object(n["k"])("div",{class:["switcher__option",{switcher__option_active:r.modelValue}],onClick:t[2]||(t[2]=function(e){return a.onSwitch(!0)})},[Object(n["F"])(e.$slots,"second")],2)],10,["styles"])}var A=r("08e8"),V={name:"Switcher",props:{modelValue:{type:Boolean,require:!0},width:{type:String,default:""}},setup:function(e,t){var r=t.emit,n=Object(A["a"])(e,r),a=n.value,c=function(e){a.value=e};return{onSwitch:c}}};r("608a");V.render=C;var G=V,I=r("3123"),K=r("47e2"),z=r("3932"),T=r("5502"),$=r("0f35"),L=r("185a"),P=r("c02d"),M=(r("b0c0"),{class:"previous-addresses"}),U={class:"previous-addresses__header"},J={class:"previous-addresses__list"},H={class:"previous-addresses__list__item-info"};function N(e,t,r,a,c,i){var o=Object(n["G"])("Text"),l=Object(n["G"])("Icon"),d=Object(n["G"])("ButtonLink"),u=Object(n["G"])("Input"),s=Object(n["G"])("AddAddress"),f=Object(n["G"])("Container");return Object(n["y"])(),Object(n["h"])("section",M,[Object(n["k"])("div",U,[Object(n["k"])(o,{type:"muted",uppercase:"",size:"14px"},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(a.t("withdrawals.previousAddresses")),1)]})),_:1}),Object(n["k"])(d,{class:"previous-addresses__header-add",onClick:a.onShowAddForm},{default:Object(n["S"])((function(){return[Object(n["k"])(l,{name:"plus"}),Object(n["k"])("div",null,[Object(n["j"])(Object(n["K"])(a.t("common.new"))+" ",1),Object(n["k"])(o,{lowercase:""},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(a.t("common.contact")),1)]})),_:1})])]})),_:1},8,["onClick"])]),Object(n["k"])(u,{"hide-shadow":"",placeholder:a.t("common.search")},{prepend:Object(n["S"])((function(){return[Object(n["k"])(l,{name:"search"})]})),_:1},8,["placeholder"]),a.showAddForm?(Object(n["y"])(),Object(n["h"])(s,{key:0})):Object(n["i"])("",!0),Object(n["k"])("div",J,[(Object(n["y"])(!0),Object(n["h"])(n["a"],null,Object(n["E"])(a.addressesList,(function(e){return Object(n["y"])(),Object(n["h"])("div",{key:e.id,class:"previous-addresses__list__item"},[Object(n["k"])(l,{name:e.crypto+"-circle"},null,8,["name"]),Object(n["k"])("div",H,[Object(n["k"])(o,{variant:"p",mb:"7px"},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(e.name),1)]})),_:2},1024),Object(n["k"])(o,{type:"muted"},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(e.address),1)]})),_:2},1024)]),Object(n["k"])(f,{"background-color":"white","box-shadow":"",class:"disable-btn"},{default:Object(n["S"])((function(){return[Object(n["k"])(l,{name:"ban",opacity:"0.4"})]})),_:1})])})),128))])])}var R={class:"button-link"};function q(e,t,r,a,c,i){return Object(n["y"])(),Object(n["h"])("button",R,[Object(n["F"])(e.$slots,"default")])}var W={name:"ButtonLink"};r("01f6");W.render=q;var Y=W;function X(e,t,r,a,c,i){var o=Object(n["G"])("SelectInput"),l=Object(n["G"])("Input"),d=Object(n["G"])("Button"),u=Object(n["G"])("Container");return Object(n["y"])(),Object(n["h"])(u,{class:"add-withdrawals-address","box-shadow":"",radius:"8px"},{default:Object(n["S"])((function(){return[Object(n["k"])(o,{bordered:"",icon:"chevron-down",placeholder:"Crypto",class:"add-withdrawals-address__crypto"}),Object(n["k"])(l,{"hide-shadow":"",placeholder:a.t("common.name"),class:"add-withdrawals-address__name"},null,8,["placeholder"]),Object(n["k"])(l,{"hide-shadow":"",placeholder:a.t("places.address"),class:"add-withdrawals-address__address"},null,8,["placeholder"]),Object(n["k"])(d,{"default-padding":"",type:"primary",class:"add-withdrawals-address__action"},{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(a.t("common.add")),1)]})),_:1})]})),_:1})}var Q=r("6204"),Z={name:"AddAddress",components:{SelectInput:Q["a"],Button:z["a"],Input:D["a"],Container:L["a"]},setup:function(){var e=Object(K["b"])(),t=e.t;return{t:t}}};r("0ece");Z.render=X;var ee=Z,te={name:"PreviousAddressesList",components:{Container:L["a"],AddAddress:ee,Input:D["a"],Icon:x["a"],ButtonLink:Y,Text:$["a"]},setup:function(){var e=Object(K["b"])(),t=e.t,r=Object(n["D"])(!1),a=Object(n["f"])((function(){for(var e=[],t=0;t<10;t++)e.push({id:t+new Date,name:"John Doe",address:"c15pJxcAIzaSyB9puDplMxJ62vYlFruxmmIAez3",crypto:"btc"});return e})),c=function(){r.value=!r.value};return{t:t,addressesList:a,showAddForm:r,onShowAddForm:c}}};r("a113");te.render=N;var re=te,ne=r("7f58"),ae={name:"AddNewWithdrawal",components:{SelectInput:Q["a"],PreviousAddressesList:re,InputCode:P["a"],Container:L["a"],Text:$["a"],Button:z["a"],RadioButtons:I["a"],Switcher:G,Input:D["a"],Icon:x["a"]},setup:function(){var e=Object(K["b"])(),t=e.t,r=Object(T["b"])(),a=Object(n["D"])(!1),c=Object(n["D"])(null),i=Object(n["D"])(null),o=Object(n["C"])({address:{value:"",required:!0,error:!1,errorText:"Detailed error message"}}),l=Object(n["C"])([{title:t("priority.values.low"),key:"low"},{title:t("priority.values.medium"),key:"medium"},{title:t("priority.values.high"),key:"high"}]),d=function(){r.dispatch("alert/showAlert",{id:new Date,time:3e3,type:"success",title:"Successful withdrawal"})},u=function(e){e.required&&(e.error=!e.value)};return{t:t,priority:c,isManual:a,radioButtons:l,withdrawal:o,crypto:i,coinsMock:ne["a"],showAlert:d,validate:u}}};r("2e20");ae.render=B;t["default"]=ae},"5e35":function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"608a":function(e,t,r){"use strict";r("95cf")},6204:function(e,t,r){"use strict";var n=r("7a23"),a={class:"d-flex align-items-center"},c={key:0,class:"select-input__body__prepend"},i={key:2,class:"select-input__placeholder"},o={key:0,class:"select-input__body__append"};function l(e,t,r,l,d,u){var s=Object(n["G"])("Icon"),f=Object(n["G"])("Container"),b=Object(n["G"])("Dropdown");return Object(n["y"])(),Object(n["h"])(b,{"hide-on-click":"","body-width":"100%",class:"select-input"},{label:Object(n["S"])((function(){return[Object(n["k"])(f,Object(n["r"])({muted:r.muted,bordered:r.bordered},l.filteredAttrs,{class:"select-input__body"}),{default:Object(n["S"])((function(){return[Object(n["k"])("div",a,[e.$slots.prepend?(Object(n["y"])(),Object(n["h"])("div",c,[Object(n["F"])(e.$slots,"prepend")])):Object(n["i"])("",!0),l.getModalValue[r.valueLabel]?Object(n["F"])(e.$slots,"selected",{key:1,item:l.getModalValue}):(Object(n["y"])(),Object(n["h"])("span",i,Object(n["K"])(r.placeholder),1))]),e.$slots.append?(Object(n["y"])(),Object(n["h"])("div",o,[Object(n["F"])(e.$slots,"append")])):Object(n["i"])("",!0),r.icon&&!e.$slots.append?(Object(n["y"])(),Object(n["h"])(s,{key:1,name:r.icon,class:"select-input__body__append"},null,8,["name"])):Object(n["i"])("",!0)]})),_:1},16,["muted","bordered"])]})),body:Object(n["S"])((function(){return[Object(n["k"])(f,{"box-shadow":"",bordered:"","background-color":"white",class:"select-input__options"},{default:Object(n["S"])((function(){return[(Object(n["y"])(!0),Object(n["h"])(n["a"],null,Object(n["E"])(l.filteredOptions,(function(t){return Object(n["y"])(),Object(n["h"])("div",{key:t.value,class:"select-input__options__item",onClick:function(e){return l.handleChange(t)}},[Object(n["F"])(e.$slots,"option",{option:t})],8,["onClick"])})),128))]})),_:1})]})),_:1})}var d=r("5530"),u=(r("4de4"),r("08e8")),s=r("1a6c"),f=r("185a"),b=r("00a1"),p=r("55a5"),j={name:"SelectInput",inheritAttrs:!0,directives:{clickOutside:s["a"]},components:{Dropdown:p["a"],Container:f["a"],Icon:b["a"]},emits:["update:modelValue"],props:{placeholder:{type:String,default:""},modelValue:{type:[Object,null],default:function(){return{}}},options:{type:Array,default:function(){return[]}},icon:{type:String,default:""},valueLabel:{type:String,default:"value"},muted:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1}},setup:function(e,t){var r=t.emit,a=t.attrs,c=Object(u["a"])(e,r),i=c.value,o=Object(n["f"])((function(){return e.modelValue||{}})),l=Object(n["f"])((function(){return Object(d["a"])(Object(d["a"])({},a),{},{class:""})})),s=Object(n["f"])((function(){return e.options.filter((function(t){return t[e.valueLabel]!==(e.modelValue||{})[e.valueLabel]}))||[]})),f=function(e){i.value=e};return{filteredOptions:s,getModalValue:o,filteredAttrs:l,handleChange:f}}};r("315a");j.render=l;t["a"]=j},"6c97":function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"7c34":function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"81d5":function(e,t,r){"use strict";var n=r("7b0b"),a=r("23cb"),c=r("50c4");e.exports=function(e){var t=n(this),r=c(t.length),i=arguments.length,o=a(i>1?arguments[1]:void 0,r),l=i>2?arguments[2]:void 0,d=void 0===l?r:a(l,r);while(d>o)t[o++]=e;return t}},"95cf":function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},a113:function(e,t,r){"use strict";r("c8d24")},a15b:function(e,t,r){"use strict";var n=r("23e7"),a=r("44ad"),c=r("fc6a"),i=r("a640"),o=[].join,l=a!=Object,d=i("join",",");n({target:"Array",proto:!0,forced:l||!d},{join:function(e){return o.call(c(this),void 0===e?",":e)}})},bca4:function(e,t,r){"use strict";r("5804")},c02d:function(e,t,r){"use strict";var n=r("7a23"),a={class:"input-code"};function c(e,t,r,c,i,o){var l=Object(n["H"])("focus");return Object(n["y"])(),Object(n["h"])("div",a,[(Object(n["y"])(!0),Object(n["h"])(n["a"],null,Object(n["E"])(r.amount,(function(e){return Object(n["y"])(),Object(n["h"])("div",{class:"input-code__wrapper",key:e},[Object(n["T"])(Object(n["k"])("input",{"onUpdate:modelValue":function(t){return c.code[e-1]=t},class:"input-code__field",title:"code",maxlength:"1",placeholder:"X",onInput:function(t){return c.handleInput(t,e-1)},onKeyup:Object(n["U"])((function(t){return c.onDelete(t,e-1)}),["delete"]),onPaste:t[1]||(t[1]=function(){return c.handlePaste&&c.handlePaste.apply(c,arguments)})},null,40,["onUpdate:modelValue","onInput","onKeyup"]),[[n["O"],c.code[e-1]],[l,e-1===c.currentIndex]])])})),128))])}r("a9e3"),r("cb29"),r("caad"),r("2532"),r("a15b"),r("5319"),r("ac1f");var i=r("47e2"),o={name:"InputCode",props:{amount:{type:Number,default:6}},directives:{focus:{updated:function(e,t){t.value&&e.focus()}}},setup:function(e,t){var r=t.emit,a=Object(i["b"])(),c=a.t,o=Object(n["D"])(new Array(e.amount).fill("")),l=Object(n["D"])(0),d=function(e,t){l.value=t,e.target.value=s(e.target.value),""!==e.target.value&&++l.value,!o.value.includes("")&&r("onCompleted",o.value.join(""))},u=function(e,t){""===e.target.value&&(l.value=t-1)},s=function(e){return e.replace(/\D/g,"")},f=function(e){e.preventDefault()};return{t:c,code:o,currentIndex:l,validateNumber:s,handleInput:d,onDelete:u,handlePaste:f}}};r("e01b");o.render=c;t["a"]=o},c07e:function(e,t,r){"use strict";var n=r("6c97"),a=r.n(n);t["a"]=a.a},c7df:function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},c8d24:function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},cb29:function(e,t,r){var n=r("23e7"),a=r("81d5"),c=r("44d2");n({target:"Array",proto:!0},{fill:a}),c("fill")},d58f:function(e,t,r){var n=r("1c0b"),a=r("7b0b"),c=r("44ad"),i=r("50c4"),o=function(e){return function(t,r,o,l){n(r);var d=a(t),u=c(d),s=i(d.length),f=e?s-1:0,b=e?-1:1;if(o<2)while(1){if(f in u){l=u[f],f+=b;break}if(f+=b,e?f<0:s<=f)throw TypeError("Reduce of empty array with no initial value")}for(;e?f>=0:s>f;f+=b)f in u&&(l=r(l,u[f],f,d));return l}};e.exports={left:o(!1),right:o(!0)}},d649:function(e,t,r){"use strict";r("4b04")},d93e:function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},dd27:function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},e01b:function(e,t,r){"use strict";r("1c3a")},e518:function(e,t,r){"use strict";r("19e1")},e9d5:function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},ec23:function(e,t,r){"use strict";r("e9d5")}}]);
//# sourceMappingURL=chunk-508df3c0.43d5d2d0.js.map