(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c14c00c"],{"0028":function(e,t,r){"use strict";var n=r("c6c8"),a=r.n(n);t["a"]=a.a},"091e":function(e,t,r){"use strict";r("ee61")},"0cb2":function(e,t,r){var n=r("7b0b"),a=Math.floor,i="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,o,u,f){var d=r+e.length,s=o.length,p=l;return void 0!==u&&(u=n(u),p=c),i.call(f,p,(function(n,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(d);case"<":c=u[i.slice(1,-1)];break;default:var l=+i;if(0===l)return n;if(l>s){var f=a(l/10);return 0===f?n:f<=s?void 0===o[f-1]?i.charAt(1):o[f-1]+i.charAt(1):n}c=o[l-1]}return void 0===c?"":c}))}},"0dc7":function(e,t,r){"use strict";var n=r("7a23"),a={class:"button__label"};function i(e,t,r,i,c,l){return Object(n["y"])(),Object(n["h"])("button",{class:["button",{"button__default-padding":r.defaultPadding}],style:{"--background-color":i.StyleVariables[r.type],"--color":i.StyleVariables["t".concat(r.type)],"--font-size":r.fontSize}},[Object(n["k"])("span",a,[Object(n["F"])(e.$slots,"default")])],6)}var c=r("0028"),l={name:"Button",props:{type:{type:String,default:"default"},defaultPadding:{type:Boolean,default:!1},fontSize:{type:String,default:"16px"}},setup:function(){return{StyleVariables:c["a"]}}};r("eab4");l.render=i;t["a"]=l},"14c3":function(e,t,r){var n=r("c6b6"),a=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var i=r.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"456f":function(e,t,r){"use strict";var n=r("7a23"),a={key:0,class:"input__prepend"},i={class:"input__body"},c={class:"input__body-label"},l={class:"input__body__field"},o={key:1,class:"input__append"},u={key:2,class:"input__error-text"};function f(e,t,r,f,d,s){var p=Object(n["G"])("Container");return Object(n["y"])(),Object(n["h"])(p,{bordered:"","box-shadow":"",variant:"label",class:["input",{input__error:r.error,"input__read-only":r.readOnly,"input__hide-shadow":r.hideShadow||r.readOnly}],style:{"--opacity":r.fullOpacity}},{default:Object(n["S"])((function(){return[e.$slots.prepend?(Object(n["y"])(),Object(n["h"])("div",a,[Object(n["F"])(e.$slots,"prepend")])):Object(n["i"])("",!0),Object(n["k"])("div",i,[Object(n["k"])("span",c,Object(n["K"])(r.label),1),Object(n["k"])("div",l,[f.showPlaceholder?(Object(n["y"])(),Object(n["h"])("span",{key:0,class:"input__body__field-placeholder",style:r.placeholderStyles},Object(n["K"])(r.placeholder),5)):Object(n["i"])("",!0),Object(n["T"])(Object(n["k"])("input",{class:["input__body__field-input",{"input__body-field__opacity":r.opacity}],readonly:r.readOnly,disabled:r.disabled,type:r.type,"onUpdate:modelValue":t[1]||(t[1]=function(e){return f.inputValue=e}),onBlur:t[2]||(t[2]=function(t){return e.$emit("blur")})},null,42,["readonly","disabled","type"]),[[n["N"],f.inputValue]])])]),e.$slots.append?(Object(n["y"])(),Object(n["h"])("div",o,[Object(n["F"])(e.$slots,"append")])):Object(n["i"])("",!0),r.errorText&&r.error?(Object(n["y"])(),Object(n["h"])("div",u,Object(n["K"])(r.errorText),1)):Object(n["i"])("",!0)]})),_:1},8,["class","style"])}r("a9e3");var d=r("eaf2"),s={name:"Input",components:{Container:d["a"]},emits:["update:modelValue","blur"],inheritAttrs:!0,props:{type:{type:String,default:"text"},label:{type:String,default:""},modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},placeholderStyles:{type:Object,default:function(){return{}}},errorText:{type:String,default:""},error:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},opacity:{type:Boolean,default:!1},fullOpacity:{type:[Number,String],default:1},hideShadow:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup:function(e,t){var r=t.emit,a=Object(n["f"])({get:function(){return e.modelValue},set:function(e){r("update:modelValue",e)}}),i=Object(n["f"])((function(){return!a.value}));return{showPlaceholder:i,inputValue:a}}};r("851a");s.render=f;t["a"]=s},5012:function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},5319:function(e,t,r){"use strict";var n=r("d784"),a=r("825a"),i=r("50c4"),c=r("a691"),l=r("1d80"),o=r("8aa5"),u=r("0cb2"),f=r("14c3"),d=Math.max,s=Math.min,p=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var b=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=n.REPLACE_KEEPS_$0,h=b?"$":"$0";return[function(r,n){var a=l(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,a,n):t.call(String(a),r,n)},function(e,n){if(!b&&y||"string"===typeof n&&-1===n.indexOf(h)){var l=r(t,e,this,n);if(l.done)return l.value}var g=a(e),x=String(this),v="function"===typeof n;v||(n=String(n));var O=g.global;if(O){var m=g.unicode;g.lastIndex=0}var _=[];while(1){var E=f(g,x);if(null===E)break;if(_.push(E),!O)break;var j=String(E[0]);""===j&&(g.lastIndex=o(x,i(g.lastIndex),m))}for(var S="",k=0,w=0;w<_.length;w++){E=_[w];for(var B=String(E[0]),F=d(s(c(E.index),x.length),0),C=[],D=1;D<E.length;D++)C.push(p(E[D]));var A=E.groups;if(v){var P=[B].concat(C,F,x);void 0!==A&&P.push(A);var R=String(n.apply(void 0,P))}else R=u(B,x,F,C,A,n);F>=k&&(S+=x.slice(k,F)+R,k=F+B.length)}return S+x.slice(k)}]}))},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("1d80"),a=r("5899"),i="["+a+"]",c=RegExp("^"+i+i+"*"),l=RegExp(i+i+"*$"),o=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(c,"")),2&e&&(r=r.replace(l,"")),r}};e.exports={start:o(1),end:o(2),trim:o(3)}},6505:function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},"67dd":function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},"7d12":function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},"811c":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a={class:"deposit-page"};function i(e,t,r,i,c,l){var o=Object(n["G"])("TextHeader"),u=Object(n["G"])("Wizard");return Object(n["y"])(),Object(n["h"])("section",a,[Object(n["k"])(o,null,{default:Object(n["S"])((function(){return[Object(n["j"])(Object(n["K"])(i.title),1)]})),_:1}),Object(n["k"])(u,{"model-value":i.currentStep,steps:i.wizardSteps,"onUpdate:modelValue":i.setCurrentStep},null,8,["model-value","steps","onUpdate:modelValue"]),(Object(n["y"])(),Object(n["h"])(Object(n["I"])("Step"+(i.currentStep+1)),{onNext:i.setCurrentStep},null,8,["onNext"]))])}var c=r("5530"),l=(r("d3b7"),r("3ca3"),r("ddb0"),r("a9e3"),r("99af"),r("5319"),r("ac1f"),r("6c02")),o=r("47e2"),u=r("d1c0"),f={class:"wizard"},d={class:"wizard__bar"},s={class:"wizard__bar__inner"},p={ref:"wizardBar",class:"wizard__bar__inner_selected"},b={class:"wizard__slot-wrap"},y=Object(n["k"])("div",{class:"wizard__slot__circle__inner"},null,-1),h={class:"wizard__slot__text"};function g(e,t,r,a,i,c){return Object(n["y"])(),Object(n["h"])("div",f,[Object(n["k"])("div",d,[Object(n["k"])("div",s,[Object(n["k"])("div",p,null,512)])]),Object(n["k"])("div",b,[(Object(n["y"])(!0),Object(n["h"])(n["a"],null,Object(n["E"])(r.steps,(function(e,t){return Object(n["y"])(),Object(n["h"])("div",{key:e.id,class:["wizard__slot",{wizard__slot_active:r.modelValue>=t}],style:{"--color":e.color},onClick:function(r){return a.setCurrentStep(e,t)}},[Object(n["k"])("div",{ref:function(e){a.wizardCircle[t]=e},class:"wizard__slot__circle"},[y],512),Object(n["k"])("span",h,Object(n["K"])(e.title),1)],14,["onClick"])})),128))])])}var x={name:"Wizard",emits:["update:modelValue"],props:{steps:{type:Array,require:!0},modelValue:{type:Number,default:0}},setup:function(e,t){var r=t.emit,a=Object(n["D"])(null),i=Object(n["D"])([]),c=function(e,t){r("update:modelValue",t)},l=function(){var t=[85,50,0];a.value.style["clip-path"]="inset(0 "+t[e.modelValue]+"% 0 0)"};return Object(n["Q"])((function(){return e.modelValue}),l),Object(n["w"])(l),{wizardBar:a,wizardCircle:i,setCurrentStep:c}}};r("96c5");x.render=g;var v=x,O=r("0dc7"),m=r("456f"),_=r("cbc2"),E=r("4b2d"),j=r("0070"),S={name:"DepositPage",components:{Step1:Object(n["l"])((function(){return Promise.all([r.e("chunk-0b1d4873"),r.e("chunk-03596f2a")]).then(r.bind(null,"f3a0"))})),Step2:Object(n["l"])((function(){return Promise.all([r.e("chunk-0b1d4873"),r.e("chunk-14b43fe2")]).then(r.bind(null,"d594"))})),Step3:Object(n["l"])((function(){return Promise.all([r.e("chunk-0b1d4873"),r.e("chunk-eae46278")]).then(r.bind(null,"6aac"))})),Icon:_["a"],Button:O["a"],Input:m["a"],Wizard:v,TextHeader:u["a"]},setup:function(){var e=Object(l["d"])(),t=Object(l["e"])(),r=Object(o["b"])(),a=r.t,i=Object(E["e"])(j["a"].TOOLS),u=i.SET_TOOLS,f=Object(n["D"])(Number(e.query.step)||0),d=Object(n["D"])(""),s=Object(n["D"])("notifyme@myemail.com"),p=Object(n["C"])([{title:a("depositPage.awaitingDeposit"),id:1,color:"246, 226, 102"},{title:a("depositPage.processing"),id:2,color:"212, 131, 67"},{title:a("depositPage.sending"),id:3,color:"68, 190, 73"}]),b=Object(n["f"])((function(){return e.query.error?a("depositPage.onHold"):"".concat(p[f.value].title," (").concat(f.value+1,"/").concat(p.length,")")})),y=function(r){f.value=r,t.replace(Object(c["a"])(Object(c["a"])({},e),{},{query:Object(c["a"])(Object(c["a"])({},e.query),{},{step:r})}))};return Object(l["c"])((function(){u([])})),{t:a,title:b,wizardSteps:p,currentStep:f,email:d,emailPlaceholder:s,setCurrentStep:y}}};r("eb50");S.render=i;t["default"]=S},"851a":function(e,t,r){"use strict";r("6505")},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("ad6d"),a=r("9f7f"),i=RegExp.prototype.exec,c=String.prototype.replace,l=i,o=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],d=o||f||u;d&&(l=function(e){var t,r,a,l,d=this,s=u&&d.sticky,p=n.call(d),b=d.source,y=0,h=e;return s&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),h=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(b="(?: "+b+")",h=" "+h,y++),r=new RegExp("^(?:"+b+")",p)),f&&(r=new RegExp("^"+b+"$(?!\\s)",p)),o&&(t=d.lastIndex),a=i.call(s?r:d,h),s?a?(a.input=a.input.slice(y),a[0]=a[0].slice(y),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:o&&a&&(d.lastIndex=d.global?a.index+a[0].length:t),f&&a&&a.length>1&&c.call(a[0],r,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)})),a}),e.exports=l},"96c5":function(e,t,r){"use strict";r("faed")},"9db5":function(e,t,r){"use strict";r("7d12")},"9f7f":function(e,t,r){"use strict";var n=r("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,r){"use strict";var n=r("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},c6c8:function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},d1c0:function(e,t,r){"use strict";var n=r("7a23"),a={class:"text-header"};function i(e,t){return Object(n["y"])(),Object(n["h"])("header",a,[Object(n["F"])(e.$slots,"default")])}r("091e");const c={};c.render=i;t["a"]=c},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),i=r("b622"),c=r("9263"),l=r("9112"),o=i("species"),u=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),f=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),s=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,d){var b=i(e),y=!a((function(){var t={};return t[b]=function(){return 7},7!=""[e](t)})),h=y&&!a((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[o]=function(){return r},r.flags="",r[b]=/./[b]),r.exec=function(){return t=!0,null},r[b](""),!t}));if(!y||!h||"replace"===e&&(!u||!f||s)||"split"===e&&!p){var g=/./[b],x=r(b,""[e],(function(e,t,r,n,a){return t.exec===c?y&&!a?{done:!0,value:g.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:s}),v=x[0],O=x[1];n(String.prototype,e,v),n(RegExp.prototype,b,2==t?function(e,t){return O.call(e,this,t)}:function(e){return O.call(e,this)})}d&&l(RegExp.prototype[b],"sham",!0)}},eab4:function(e,t,r){"use strict";r("5012")},eaf2:function(e,t,r){"use strict";var n=r("7a23");function a(e,t,r,a,i,c){return Object(n["y"])(),Object(n["h"])(Object(n["I"])(r.variant),Object(n["r"])(e.$attrs,{class:[{container__boxShadow:r.boxShadow,container__muted:r.muted,container__border:r.bordered,container__active:r.active},"container"],style:{"--border-radius":r.radius,"--bg":r.backgroundColor}}),{default:Object(n["S"])((function(){return[Object(n["F"])(e.$slots,"default")]})),_:3},16,["class","style"])}var i={name:"Container",inheritAttrs:!0,props:{variant:{type:String,default:"div"},boxShadow:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},active:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},radius:{type:String,default:"6px"},backgroundColor:{type:String,default:"transparent"}}};r("9db5");i.render=a;t["a"]=i},eb50:function(e,t,r){"use strict";r("67dd")},ee61:function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}},faed:function(e,t,r){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000",mobileMaxWidth:"499px",mobileMinWidth:"320px",mobileheaderHeight:"52px",desktopMinWidth:"500px"}}}]);
//# sourceMappingURL=chunk-5c14c00c.e55aa855.js.map