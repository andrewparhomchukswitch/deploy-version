(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13d0f378"],{"08e8":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("7a23"),r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e},r=Object(a["f"])({get:function(){return e.modelValue},set:function(e){t("update:modelValue",n(e))}});return{value:r}}},"0c70":function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},1831:function(e,t,n){"use strict";var a=n("7a23"),r={class:"text-header"};function c(e,t){return Object(a["y"])(),Object(a["h"])("header",r,[Object(a["F"])(e.$slots,"default")])}n("ac6b");const i={};i.render=c;t["a"]=i},"334b":function(e,t,n){"use strict";var a=n("7a23"),r={key:0,class:"input__prepend"},c={class:"input__body"},i={class:"input__body-label"},l={key:1,class:"input__append"},o={key:2,class:"input__error-text"};function s(e,t,n,s,d,f){var u=Object(a["G"])("Container");return Object(a["y"])(),Object(a["h"])(u,{border:"","box-shadow":"",variant:"label",class:["input",{input__error:n.error,"input__read-only":n.readOnly,"input__hide-shadow":n.hideShadow||n.readOnly}],style:{"--opacity":n.fullOpacity}},{default:Object(a["S"])((function(){return[e.$slots.prepend?(Object(a["y"])(),Object(a["h"])("div",r,[Object(a["F"])(e.$slots,"prepend")])):Object(a["i"])("",!0),Object(a["k"])("div",c,[Object(a["k"])("span",i,Object(a["K"])(n.label),1),n.modelValue?Object(a["i"])("",!0):(Object(a["y"])(),Object(a["h"])("span",{key:0,class:"input__placeholder",style:n.placeholderStyles},Object(a["K"])(n.placeholder),5)),Object(a["T"])(Object(a["k"])("input",{class:["input__body-field",{"input__body-field__opacity":n.opacity}],readonly:n.readOnly,disabled:n.disabled,type:n.type,"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.inputValue=e}),onBlur:t[2]||(t[2]=function(t){return e.$emit("blur")})},null,42,["readonly","disabled","type"]),[[a["N"],s.inputValue]])]),e.$slots.append?(Object(a["y"])(),Object(a["h"])("div",l,[Object(a["F"])(e.$slots,"append")])):Object(a["i"])("",!0),n.errorText&&n.error?(Object(a["y"])(),Object(a["h"])("div",o,Object(a["K"])(n.errorText),1)):Object(a["i"])("",!0)]})),_:1},8,["class","style"])}n("a9e3");var d=n("185a"),f=n("08e8"),u={name:"Input",components:{Container:d["a"]},emits:["update:modelValue","blur"],inheritAttrs:!0,props:{type:{type:String,default:"text"},label:{type:String,default:""},modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},placeholderStyles:{type:Object,default:function(){return{}}},errorText:{type:String,default:""},error:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},opacity:{type:Boolean,default:!1},fullOpacity:{type:[Number,String],default:1},hideShadow:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit,a=Object(f["a"])(e,n),r=a.value;return{inputValue:r}}};n("6fc1");u.render=s;t["a"]=u},3932:function(e,t,n){"use strict";var a=n("7a23"),r={class:"button__label"};function c(e,t,n,c,i,l){return Object(a["y"])(),Object(a["h"])("button",{class:["button",{"button__default-padding":n.defaultPadding}],style:{"--background-color":c.StyleVariables[n.type],"--color":c.StyleVariables["t".concat(n.type)]}},[Object(a["k"])("span",r,[Object(a["F"])(e.$slots,"default")])],6)}var i=n("b59c"),l={name:"Button",props:{type:{type:String,default:"default"},defaultPadding:{type:Boolean,default:!1}},setup:function(){return{StyleVariables:i["a"]}}};n("ff6a");l.render=c;t["a"]=l},5371:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},5376:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),r={class:"deposit-page"},c={class:"deposit-page__main"},i={class:"deposit-page__main__credentials"},l={class:"deposit-page__main__credentials__qrcode"},o={class:"deposit-page__main__credentials-title"},s=Object(a["k"])("div",{class:"deposit-page__main__credentials__qrcode__body"},[Object(a["k"])("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"144",height:"142",viewBox:"0 0 144 142",fill:"none"},[Object(a["k"])("rect",{width:"144",height:"142",fill:"url(#pattern0)"}),Object(a["k"])("defs",null,[Object(a["k"])("pattern",{id:"pattern0",patternContentUnits:"objectBoundingBox",width:"1",height:"1"},[Object(a["k"])("use",{"xlink:href":"#image0",transform:"translate(-0.125 -0.133803) scale(0.00563063)"})]),Object(a["k"])("image",{id:"image0",width:"222",height:"222","xlink:href":"data:image/png;base64,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"})])])],-1),d={class:"deposit-page__main__credentials__divider"},f={class:"deposit-page__main__credentials__manually"},u={class:"deposit-page__main__credentials-title"},p={class:"deposit-page__main__credentials__manually__inputs"},b={class:"deposit-page__main__payout-address"},g=Object(a["k"])("p",null,"3P3QsMVK89JBNqZQv5zMAKG8FK3kJM4rjt",-1);function y(e,t,n,y,O,_){var m,j=Object(a["G"])("Tools"),A=Object(a["G"])("TextHeader"),v=Object(a["G"])("Wizard"),B=Object(a["G"])("Icon"),h=Object(a["G"])("Input"),w=Object(a["G"])("Button");return Object(a["y"])(),Object(a["h"])("section",r,[Object(a["k"])(j,{tools:y.tools},null,8,["tools"]),Object(a["k"])(A,null,{default:Object(a["S"])((function(){return[Object(a["j"])(Object(a["K"])(y.wizardSteps[y.currentStep].title)+" ("+Object(a["K"])(y.currentStep+1)+"/"+Object(a["K"])(y.wizardSteps.length)+") ",1)]})),_:1}),Object(a["k"])("main",c,[Object(a["k"])(v,{modelValue:y.currentStep,"onUpdate:modelValue":t[1]||(t[1]=function(e){return y.currentStep=e}),steps:y.wizardSteps},null,8,["modelValue","steps"]),Object(a["k"])("section",i,[Object(a["k"])("div",l,[Object(a["k"])("p",o,Object(a["K"])(y.t("depositPage.scan")),1),s]),Object(a["k"])("div",d,[Object(a["k"])("p",{class:["deposit-page__main__credentials__divider-text ",{"deposit-page__main__credentials__divider-text-ru":"ru"===y.locale}]},Object(a["K"])(y.t("depositPage.or")),3)]),Object(a["k"])("div",f,[Object(a["k"])("p",u,Object(a["K"])(y.t("depositPage.send")),1),Object(a["k"])("div",p,[Object(a["k"])(h,{class:"deposit-page__main__credentials__manually__inputs-item","read-only":"","model-value":y.coinAmount},{append:Object(a["S"])((function(){return[Object(a["k"])(B,{width:"20px",height:"20px",name:y.sendCoin.key+"-circle"},null,8,["name"])]})),_:1},8,["model-value"]),Object(a["k"])(h,{"model-value":y.code,class:"deposit-page__main__credentials__manually__inputs-item","read-only":""},{append:Object(a["S"])((function(){return[Object(a["k"])(B,{class:"deposit-page__main__credentials__manually__inputs-item__copy",width:"14px",height:"14px",name:"copy"})]})),_:1},8,["model-value"])])])]),Object(a["k"])("section",b,[Object(a["k"])("h3",null,Object(a["K"])(y.t("depositPage.payoutAddress",{coin:(null===(m=y.sendCoin)||void 0===m?void 0:m.title)||""})),1),g])]),Object(a["k"])(h,{modelValue:y.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return y.email=e}),class:"deposit-page__email"},{prepend:Object(a["S"])((function(){return[Object(a["k"])(B,{class:"deposit-page__email-notify-bell",name:"notify-bell"})]})),append:Object(a["S"])((function(){return[Object(a["k"])(w,{class:"deposit-page__email__button",type:"primary"},{default:Object(a["S"])((function(){return[Object(a["k"])(B,{name:"arrow-right-full"})]})),_:1})]})),_:1},8,["modelValue"])])}var O=n("5502"),_=n("47e2"),m=n("1831"),j={class:"wizard"},A={class:"wizard__bar"},v={class:"wizard__bar__inner"},B={ref:"wizardBar",class:"wizard__bar__inner_selected"},h={class:"wizard__slot-wrap"},w=Object(a["k"])("div",{class:"wizard__slot__circle__inner"},null,-1),k={class:"wizard__slot__text"};function E(e,t,n,r,c,i){return Object(a["y"])(),Object(a["h"])("div",j,[Object(a["k"])("div",A,[Object(a["k"])("div",v,[Object(a["k"])("div",B,null,512)])]),Object(a["k"])("div",h,[(Object(a["y"])(!0),Object(a["h"])(a["a"],null,Object(a["E"])(n.steps,(function(e,t){return Object(a["y"])(),Object(a["h"])("div",{key:e.id,class:["wizard__slot",{wizard__slot_active:n.modelValue>=t}],style:{"--color":e.color},onClick:function(n){return r.setCurrentStep(e,t)}},[Object(a["k"])("div",{ref:function(e){r.wizardCircle[t]=e},class:"wizard__slot__circle"},[w],512),Object(a["k"])("span",k,Object(a["K"])(e.title),1)],14,["onClick"])})),128))])])}n("a9e3");var C={name:"Wizard",props:{steps:{type:Array,require:!0},modelValue:{type:Number,default:0}},setup:function(e,t){var n=t.emit,r=Object(a["D"])(null),c=Object(a["D"])([]),i=function(e,t){n("update:modelValue",t)},l=function(){var t=[85,50,0];r.value.style["clip-path"]="inset(0 "+t[e.modelValue]+"% 0 0)"};return Object(a["Q"])((function(){return e.modelValue}),l),Object(a["w"])(l),{wizardBar:r,wizardCircle:c,setCurrentStep:i}}};n("72e5");C.render=E;var F=C,D=n("334b"),S=n("3932"),K=n("00a1"),V=n("9430"),G={name:"DepositPage",components:{Icon:K["a"],Button:S["a"],Input:D["a"],Wizard:F,TextHeader:m["a"],Tools:V["a"]},setup:function(){var e=Object(O["b"])(),t=Object(_["b"])(),n=t.t,r=t.locale,c=Object(a["D"])(0),i=Object(a["D"])(20.62151445),l=Object(a["D"])("MVK89JBNqZQv5zMAKG8FK3kJM4rjt"),o=Object(a["D"])("notifyme@myemail.com"),s=Object(a["f"])((function(){return[{title:n("depositPage.awaitingDeposit"),id:1,color:"246, 226, 102"},{title:n("depositPage.processing"),id:2,color:"212, 131, 67"},{title:n("depositPage.sending"),id:3,color:"68, 190, 73"}]})),d=[{icon:"copy",copyUrl:!0}],f=Object(a["f"])((function(){return e.getters["exchange/getSendCoin"]}));return{t:n,locale:r,wizardSteps:s,currentStep:c,email:o,sendCoin:f,code:l,coinAmount:i,tools:d}}};n("ae92");G.render=y;t["default"]=G},5987:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"5e42":function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"6fc1":function(e,t,n){"use strict";n("5987")},"72e5":function(e,t,n){"use strict";n("5e42")},9430:function(e,t,n){"use strict";var a=n("7a23"),r={class:"tools"};function c(e,t,n,c,i,l){return Object(a["y"])(),Object(a["h"])("section",r,[(Object(a["y"])(!0),Object(a["h"])(a["a"],null,Object(a["E"])(n.tools,(function(e,t){return Object(a["y"])(),Object(a["h"])("div",{key:t,class:["tools__tool",{"tools__tool-hover":!e.component}],onClick:function(t){return c.handleClick(e)}},[(Object(a["y"])(),Object(a["h"])(Object(a["I"])(e.component||"Icon"),{name:e.icon},null,8,["name"]))],10,["onClick"])})),128))])}n("d3b7"),n("3ca3"),n("ddb0");var i=n("6c02"),l=n("00a1"),o=[{icon:"bell",title:"Notifications",component:"notifications"},{icon:"per-cent",title:"Per cents",to:"/fee-schedule"}],s={name:"Tools",components:{Icon:l["a"],Notifications:Object(a["l"])((function(){return n.e("chunk-0a2e0f6d").then(n.bind(null,"8cc6"))}))},props:{tools:{type:Array,default:function(){return o}}},setup:function(){var e=Object(i["d"])(),t=function(t){if(t.to)e.push(t.to);else if(t.copyUrl){var n=document.createElement("input"),a=window.location.href;document.body.appendChild(n),n.value=a,n.select(),document.execCommand("copy"),document.body.removeChild(n)}};return{handleClick:t}}};n("d003");s.render=c;t["a"]=s},ac6b:function(e,t,n){"use strict";n("ca73")},ae92:function(e,t,n){"use strict";n("d801")},b59c:function(e,t,n){"use strict";var a=n("cf1e2"),r=n.n(a);t["a"]=r.a},ca73:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},cf1e2:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},d003:function(e,t,n){"use strict";n("5371")},d801:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},ff6a:function(e,t,n){"use strict";n("0c70")}}]);
//# sourceMappingURL=chunk-13d0f378.d937d69c.js.map