(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3eb4ba8c"],{"0f35":function(e,t,n){"use strict";var i=n("ade3"),a=n("5530"),c=n("7a23");function r(e,t,n,r,f,o){return Object(c["y"])(),Object(c["h"])(Object(c["I"])(n.variant),{class:["text",Object(a["a"])(Object(i["a"])({},"text__"+n.type,n.type),r.classes)],style:{"--text-size":n.size,"--text-weight":n.weight,"--text-line-height":n.lineHeight,"--text-color":r.colorTheme,"--text-opacity":n.opacity,"--text-mt":n.mt,"--text-mr":n.mr,"--text-mb":n.mb,"--text-ml":n.ml}},{default:Object(c["S"])((function(){return[Object(c["F"])(e.$slots,"default")]})),_:3},8,["class","style"])}n("13d5"),n("b64b");var f=n("c07e"),o={name:"Text",inheritAttrs:!0,props:{variant:{type:String,default:"span"},type:{type:String,default:""},size:{type:String,default:"inherit"},weight:{type:String,default:"normal"},lineHeight:{type:String,default:"inherit"},mt:{type:String,default:"0"},mr:{type:String,default:"0"},mb:{type:String,default:"0"},ml:{type:String,default:"0"},color:{type:String,default:"black"},theme:{type:String,default:""},opacity:{type:String,default:"1"}},setup:function(e,t){var n=t.attrs,r=Object(c["f"])((function(){return Object.keys(n).reduce((function(e,t){return Object(a["a"])(Object(a["a"])({},e),{},Object(i["a"])({},"text__"+t,!0))}),{})})),o=Object(c["f"])((function(){return f["a"][e.theme]||e.color}));return{classes:r,colorTheme:o}}};n("1df5");o.render=r;t["a"]=o},"128c":function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"13d5":function(e,t,n){"use strict";var i=n("23e7"),a=n("d58f").left,c=n("a640"),r=n("2d00"),f=n("605d"),o=c("reduce"),l=!f&&r>79&&r<83;i({target:"Array",proto:!0,forced:!o||l},{reduce:function(e){return a(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"17fb":function(e,t,n){"use strict";n("7c8c")},"1df5":function(e,t,n){"use strict";n("d1c0")},"7c8c":function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},"817f":function(e,t,n){"use strict";n.r(t);var i=n("7a23"),a={class:"deposit-page-step-1"};function c(e,t,n,c,r,f){var o=Object(i["G"])("DepositPageInfo"),l=Object(i["G"])("Icon"),p=Object(i["G"])("Button"),s=Object(i["G"])("Input");return Object(i["y"])(),Object(i["h"])("div",a,[Object(i["k"])(o),Object(i["k"])(s,{modelValue:c.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.email=e}),placeholder:c.emailPlaceholder,class:"deposit-page-step-1__email"},{prepend:Object(i["S"])((function(){return[Object(i["k"])(l,{class:"deposit-page-step-1__email-notify-bell",name:"notify-bell"})]})),append:Object(i["S"])((function(){return[Object(i["k"])(p,{class:"deposit-page-step-1__email__button",type:"primary",onClick:c.processDeposit},{default:Object(i["S"])((function(){return[Object(i["k"])(l,{name:"arrow-right-full"})]})),_:1},8,["onClick"])]})),_:1},8,["modelValue","placeholder"])])}var r=n("38a9"),f=n("f5b6"),o=n("47e2"),l=n("3932"),p=n("334b"),s=n("00a1"),g=n("952c"),d={name:"Step1",components:{DepositPageInfo:g["a"],Button:l["a"],Input:p["a"],Icon:s["a"]},emits:["next"],setup:function(e,t){var n=t.emit,a=Object(o["b"])(),c=a.t,l=a.locale,p=Object(f["e"])(r["a"].TOOLS),s=p.SET_TOOLS,g=Object(f["b"])(r["a"].EXCHANGE),d=g.setEmail,u=Object(f["c"])(r["a"].EXCHANGE),b=u.getEmail,A=u.getSendCoin,m=Object(i["D"])(20.62151445),v=Object(i["D"])("MVK89JBNqZQv5zMAKG8FK3kJM4rjt"),O=Object(i["D"])("notifyme@myemail.com"),y=Object(i["f"])({get:function(){return b.value},set:d}),j=function(){n("next",1)};return s([{icon:{name:"copy",width:"20px",height:"20px"},copyUrl:!0}]),{t:c,email:y,emailPlaceholder:O,locale:l,sendCoin:A,code:v,coinAmount:m,processDeposit:j}}};n("c921");d.render=c;t["default"]=d},"952c":function(e,t,n){"use strict";var i=n("7a23"),a={class:"deposit-page-info"},c={class:"deposit-page-info__qrcode"},r={class:"deposit-page-info-title"},f=Object(i["k"])("div",{class:"deposit-page-info__qrcode__body"},[Object(i["k"])("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"144",height:"142",viewBox:"0 0 144 142",fill:"none"},[Object(i["k"])("rect",{width:"144",height:"142",fill:"url(#deposit-page-info-pattern0)"}),Object(i["k"])("defs",null,[Object(i["k"])("pattern",{id:"deposit-page-info-pattern0",patternContentUnits:"objectBoundingBox",width:"1",height:"1"},[Object(i["k"])("use",{"xlink:href":"#deposit-page-info-image0",transform:"translate(-0.125 -0.133803) scale(0.00563063)"})]),Object(i["k"])("image",{id:"deposit-page-info-image0",width:"222",height:"222","xlink:href":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAADeCAYAAABSZ763AAAJ/ElEQVR4Ae3c0YolOQ4E0Klh//+Xa6GfHQUxSO28lWce3ZqwfHxFgmn66/v7+/sf/xEg8FcF/v2ru9mMAIE/AgbPD4HABQGDdwHdlgQMnt8AgQsCBu8Cui0JGDy/AQIXBAzeBXRbEjB4fgMELggYvAvotiRg8PwGCFwQMHgX0G1JwOD5DRC4IGDwLqDbkoDB8xsgcEHA4F1AtyUBg+c3QOCCgMG7gG5LAgbPb4DABQGDdwHdlgQMnt8AgQsCBu8Cui0JGDy/AQIXBAzeBXRbEvjfNsHX19f2FiP5T/vnRafc2nOlfVPOVP3IJQ6GpPNObeGLNyUph0AhYPAKLKUEpgQM3pSkHAKFgMErsJQSmBIweFOScggUAuuvmqmX7VejtG96hUv1aX0qJ+VPrX9Kn5/+e2jvyxevFVNPYEDA4A0giiDQChi8Vkw9gQEBgzeAKIJAK2DwWjH1BAYErr1qpt6nXuGmXslSP9v5ySftu91n20+qb9fTudqc5NbmTNX74k1JyiFQCBi8AkspgSkBgzclKYdAIWDwCiylBKYEDN6UpBwChcDjXjWL3q+Wpte29vWsrU/7thgpJ/WT6tO+KSfVv23dF+9tN+68jxAweI+4Bk28TcDgve3GnfcRAgbvEdegibcJGLy33bjzPkLAq+bwNaTXv6lXvpST9k3r6dhtfcqx/rOAL97PPv6UwIqAwVthFUrgZwGD97OPPyWwImDwVliFEvhZwOD97ONPCawIPO5VM73arZx+ITT1374WppzUclufclKfKT/Vp/x2Pe3b5jyt3hfvaTein1cIGLxXXLNDPk3A4D3tRvTzCgGD94prdsinCRi8p92Ifl4hcO1Vc/s1bPv20mtbOldbn/qfyk/9pH2319O5tve9le+Ld0vevq8WMHivvn6HvyVg8G7J2/fVAgbv1dfv8LcEDN4tefu+WmD9VfNpr2dTt51e4dJ52/qpPqdypvpPPlN9fkqOL96n3JQ+f5WAwftV1+kwnyJg8D7lpvT5qwQM3q+6Tof5FAGD9yk3pc9fJfD1vfzM1L6Gpfpt9ZZhu8+2n9Yn9d/u2+ak+rb/tr49V5vf1vvitWLqCQwIGLwBRBEEWgGD14qpJzAgYPAGEEUQaAUMXiumnsCAwLVXzYHe/0RMvVal17Y2P+VMnbfNaftv82+dd+pcqf+p/OTpi5dkrBNYFDB4i7iiCSQBg5dkrBNYFDB4i7iiCSQBg5dkrBNYFFh/1ZzqvX19SvWpn/SK1eak/LT+KfumPtO5Wrc2/2n7pn7Sui9ekrFOYFHA4C3iiiaQBAxekrFOYFHA4C3iiiaQBAxekrFOYFFg/d/V3H7dSvntK1mb09ZP3WE6V+pnat82v+0z5bc5qX7KYSrHF29KUg6BQsDgFVhKCUwJGLwpSTkECgGDV2ApJTAlYPCmJOUQKATW/65meq1KPbavUik/5aT61M/UeuqnzZ/qv+0n7dvmTJ037Zv6bPdN+W1OqvfFSzLWCSwKGLxFXNEEkoDBSzLWCSwKGLxFXNEEkoDBSzLWCSwKrP9dzanet1+r2vz06pVy0nrySflpvc1P9Sk/9ZlyUv32eur/aX364m3/EuQTOAgYvAOKJQLbAgZvW1g+gYOAwTugWCKwLWDwtoXlEzgIfMyrZnqtOpzpz9L2K1ab3/afztWut/umc7U5qc+Un+rTvikn1af1tO/2ui/etrB8AgcBg3dAsURgW8DgbQvLJ3AQMHgHFEsEtgUM3rawfAIHgfVXzfY1Kb1WHXr/T0vb/Uzlp5zWJ9Wn/P+Eevif0r6H0lcu+eK98tod+raAwbt9A/Z/pYDBe+W1O/RtAYN3+wbs/0oBg/fKa3fo2wIf8+9q3nolm3r9S/1v56cfWLtv6n8qP+VMraf+W4epfnzxpiTlECgEDF6BpZTAlIDBm5KUQ6AQMHgFllICUwIGb0pSDoFCYP3vaqZetl+TpvLTa1g619T6rX2n+k85U+dq77etT/1PrfviTUnKIVAIGLwCSymBKQGDNyUph0AhYPAKLKUEpgQM3pSkHAKFwLVXzdTj1KtXm7/96rWdn86b1lvn1P9UTuqzXU/9pP7b/Kl6X7wpSTkECgGDV2ApJTAlYPCmJOUQKAQMXoGllMCUgMGbkpRDoBB43Ktm6n3qVSrlpNew1E9av5Wf+knnSn22OW192jf1mfJTTlpPObfWffFuydv31QIG79XX7/C3BAzeLXn7vlrA4L36+h3+loDBuyVv31cLXPt3Naden9rXsPa2U5/tvm1OW5/OlXJSfbveOrT5U/XJIfWf6qf68cWbkpRDoBAweAWWUgJTAgZvSlIOgULA4BVYSglMCRi8KUk5BAqB9b+ruf06tJ1/69Ur3WF73lv9t32m8071P5WT+mzXffFaMfUEBgQM3gCiCAKtgMFrxdQTGBAweAOIIgi0AgavFVNPYEBg/VUzvSYN9D4akV7h0no6V6ofbfYQ1vaT6g/Ro0tp39Yt5aRm2/yUM7XuizclKYdAIWDwCiylBKYEDN6UpBwChYDBK7CUEpgSMHhTknIIFALrr5qpl1uvTO1rWFufzvu0nNZ/qv923+SZ1lN+23/KSfu26754rZh6AgMCBm8AUQSBVsDgtWLqCQwIGLwBRBEEWgGD14qpJzAgcO1VM/Xevj6lnO1XqbRvu9722danflrntG/KSeupn3Y99XMrp93XF68VU09gQMDgDSCKINAKGLxWTD2BAQGDN4AogkArYPBaMfUEBgQe96o5cKa/EpFe1bZf81J+20+qT3jtvimnXU/7ppyp+tYn9ZPWffGSjHUCiwIGbxFXNIEkYPCSjHUCiwIGbxFXNIEkYPCSjHUCiwJeNYdx29ew9Ao3lZOOl/ZN9amflJPqU37KSfVpPe2b8lN9yp9a98WbkpRDoBAweAWWUgJTAgZvSlIOgULA4BVYSglMCRi8KUk5BAqBx71q3nplSmapn+1Xsja/rU/nTespP9W368k55aR+2pyUv73ui7ctLJ/AQcDgHVAsEdgWMHjbwvIJHAQM3gHFEoFtAYO3LSyfwEHg2qtmepU69Hh1aarPlLP9Cpf2TahtP2192jetp/7Tvm192nd73RdvW1g+gYOAwTugWCKwLWDwtoXlEzgIGLwDiiUC2wIGb1tYPoGDwNd3eh46FFsiQGBGwBdvxlEKgUrA4FVcignMCBi8GUcpBCoBg1dxKSYwI2DwZhylEKgEDF7FpZjAjIDBm3GUQqASMHgVl2ICMwIGb8ZRCoFKwOBVXIoJzAgYvBlHKQQqAYNXcSkmMCNg8GYcpRCoBAxexaWYwIyAwZtxlEKgEjB4FZdiAjMCBm/GUQqBSsDgVVyKCcwIGLwZRykEKgGDV3EpJjAjYPBmHKUQqAQMXsWlmMCMgMGbcZRCoBL4PzzbCtL6tFadAAAAAElFTkSuQmCC"})])])],-1),o={class:"deposit-page-info__divider"},l={class:"deposit-page-info__manually"},p={class:"deposit-page-info-title"},s={class:"deposit-page-info__manually__inputs"},g={class:"deposit-page-info__payout-address"},d=Object(i["k"])("p",null,"3P3QsMVK89JBNqZQv5zMAKG8FK3kJM4rjt",-1);function u(e,t,n,u,b,A){var m,v=Object(i["G"])("Text"),O=Object(i["G"])("Icon"),y=Object(i["G"])("Input");return Object(i["y"])(),Object(i["h"])(i["a"],null,[Object(i["k"])("section",a,[Object(i["k"])("div",c,[Object(i["k"])("p",r,Object(i["K"])(u.t("depositPage.scan")),1),f]),Object(i["k"])("div",o,[Object(i["k"])(v,{variant:"p",uppercase:"",class:["deposit-page-info__divider-text ",{"deposit-page-info__divider-text-ru":"ru"===u.locale}]},{default:Object(i["S"])((function(){return[Object(i["j"])(Object(i["K"])(u.t("common.or")),1)]})),_:1},8,["class"])]),Object(i["k"])("div",l,[Object(i["k"])("p",p,Object(i["K"])(u.t("depositPage.send")),1),Object(i["k"])("div",s,[Object(i["k"])(y,{class:"deposit-page-info__manually__inputs-item","read-only":"","model-value":u.coinAmount},{append:Object(i["S"])((function(){return[Object(i["k"])(O,{width:"20px",height:"20px",name:u.sendCoin.key+"-circle"},null,8,["name"])]})),_:1},8,["model-value"]),Object(i["k"])(y,{"model-value":u.code,class:"deposit-page-info__manually__inputs-item","read-only":""},{append:Object(i["S"])((function(){return[Object(i["k"])(O,{class:"deposit-page-info__manually__inputs-item__copy",width:"14px",height:"14px",name:"copy"})]})),_:1},8,["model-value"])])])]),Object(i["k"])("section",g,[Object(i["k"])("h3",null,Object(i["K"])(u.t("depositPage.payoutAddress",{coin:(null===(m=u.sendCoin)||void 0===m?void 0:m.title)||""})),1),d])],64)}var b=n("0f35"),A=n("334b"),m=n("00a1"),v=n("47e2"),O=n("f5b6"),y=n("38a9"),j={name:"DepositPageInfo",components:{Input:A["a"],Icon:m["a"],Text:b["a"]},setup:function(e,t){var n=t.emit,a=Object(v["b"])(),c=a.t,r=a.locale,f=Object(i["D"])(20.62151445),o=Object(i["D"])("MVK89JBNqZQv5zMAKG8FK3kJM4rjt"),l=Object(O["c"])(y["a"].EXCHANGE),p=l.getSendCoin,s=function(){n("next",3)};return{t:c,locale:r,sendCoin:p,code:o,coinAmount:f,processDeposit:s}}};n("17fb");j.render=u;t["a"]=j},c921:function(e,t,n){"use strict";n("128c")},d1c0:function(e,t,n){e.exports={success:"#5cb56a",tsuccess:"#fff",primary:"#D48343",tprimary:"#fff",secondary:"#E34F62",tsecondary:"#fff",default:"#F2F2F2",tdefault:"#000",info:"#2F80ED",tinfo:"#fff","primary-light":"#E9A848","tprimary-light":"#fff","secondary-light":"#EC5B5B","tsecondary-light":"#fff",black:"#000",white:"#fff",grey:"#E8EBED",darkGrey:"#3A4751",error:"#BC0000"}},d58f:function(e,t,n){var i=n("1c0b"),a=n("7b0b"),c=n("44ad"),r=n("50c4"),f=function(e){return function(t,n,f,o){i(n);var l=a(t),p=c(l),s=r(l.length),g=e?s-1:0,d=e?-1:1;if(f<2)while(1){if(g in p){o=p[g],g+=d;break}if(g+=d,e?g<0:s<=g)throw TypeError("Reduce of empty array with no initial value")}for(;e?g>=0:s>g;g+=d)g in p&&(o=n(o,p[g],g,l));return o}};e.exports={left:f(!1),right:f(!0)}}}]);
//# sourceMappingURL=chunk-3eb4ba8c.1166ff60.js.map