(function(e){function t(t){for(var r,i,c=t[0],a=t[1],h=t[2],p=0,u=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&u.push(s[i][0]),s[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(u.length)u.shift()();return o.push.apply(o,h||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==s[a]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},s={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Array-Methods/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var h=0;h<c.length;h++)t(c[h]);var l=a;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0da7":function(e,t,n){"use strict";n("43cd")},1757:function(e,t,n){"use strict";n("68ca")},"398b":function(e,t,n){"use strict";n("ee45")},"43cd":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");n("4de4"),n("d3b7"),n("d81d"),n("4e82");function s(e,t,n,s,o,i){var c=Object(r["l"])("mobile-dialog"),a=Object(r["l"])("methods-bar"),h=Object(r["l"])("the-characters"),l=Object(r["l"])("the-modal");return Object(r["h"])(),Object(r["d"])(r["a"],null,[Object(r["f"])(c),Object(r["f"])(a,{namesOption:o.option.namesOption,giftsOption:o.option.giftsOption,heightOption:o.option.heightOption,boysOption:o.option.boysOption,girlsOption:o.option.girlsOption,onShowModal:i.showModal,codeButtons:o.codeButtons,jsCode:o.jsCode,result:o.result,onRefresh:i.updateCharacters,onFilter:i.filter,onMap:i.map,onSort:i.sort,onEvery:i.every,onSome:i.some,onReduce:i.reduce},null,8,["namesOption","giftsOption","heightOption","boysOption","girlsOption","onShowModal","codeButtons","jsCode","result","onRefresh","onFilter","onMap","onSort","onEvery","onSome","onReduce"]),Object(r["f"])(h,{characters:o.updatedCharacters},null,8,["characters"]),Object(r["f"])(l,{onCloseModal:t[0]||(t[0]=function(e){return o.modalVisible=!1}),modalVisible:o.modalVisible},null,8,["modalVisible"])],64)}n("b0c0");var o={class:"wrapper"},i={class:"buttons-bar"},c={class:"action-box"},a={class:"choose-box"},h={key:0,class:"result-box"},l={key:2};function p(e,t,n,s,p,u){return Object(r["h"])(),Object(r["d"])("div",o,[Object(r["e"])("div",i,[Object(r["e"])("button",{class:Object(r["g"])({active:p.mapOptions}),onClick:t[0]||(t[0]=function(){return u.showMapOptions&&u.showMapOptions.apply(u,arguments)})}," Map ",2),Object(r["e"])("button",{class:Object(r["g"])({active:p.filterOptions}),onClick:t[1]||(t[1]=function(){return u.showFilterOptions&&u.showFilterOptions.apply(u,arguments)})}," Filter ",2),Object(r["e"])("button",{class:Object(r["g"])({active:p.sortOptions}),onClick:t[2]||(t[2]=function(){return u.showSortOptions&&u.showSortOptions.apply(u,arguments)})}," Sort ",2),Object(r["e"])("button",{class:Object(r["g"])({active:p.everyOptions}),onClick:t[3]||(t[3]=function(){return u.showEveryOptions&&u.showEveryOptions.apply(u,arguments)})}," Every ",2),Object(r["e"])("button",{class:Object(r["g"])({active:p.someOptions}),onClick:t[4]||(t[4]=function(){return u.showSomeOptions&&u.showSomeOptions.apply(u,arguments)})}," Some ",2),Object(r["e"])("button",{class:Object(r["g"])({active:p.reduceOptions}),onClick:t[5]||(t[5]=function(){return u.showReduceOptions&&u.showReduceOptions.apply(u,arguments)})}," Reduce ",2),Object(r["e"])("button",{class:"guide",onClick:t[6]||(t[6]=function(t){return e.$emit("showModal")})},"GUIDE")]),Object(r["e"])("div",c,[Object(r["e"])("div",a,[p.mapOptions?(Object(r["h"])(),Object(r["d"])("button",{key:0,class:Object(r["g"])({active:n.codeButtons}),onClick:t[7]||(t[7]=function(t){return e.$emit("map")})}," Names of Characters ",2)):Object(r["c"])("",!0),p.filterOptions?(Object(r["h"])(),Object(r["d"])("button",{key:1,class:Object(r["g"])({active:n.girlsOption}),onClick:t[8]||(t[8]=function(t){return e.$emit("filter","female")})}," Girls ",2)):Object(r["c"])("",!0),p.filterOptions?(Object(r["h"])(),Object(r["d"])("button",{key:2,class:Object(r["g"])({active:n.boysOption}),onClick:t[9]||(t[9]=function(t){return e.$emit("filter","male")})}," Boys ",2)):Object(r["c"])("",!0),p.sortOptions?(Object(r["h"])(),Object(r["d"])("button",{key:3,class:Object(r["g"])({active:n.heightOption}),onClick:t[10]||(t[10]=function(t){return e.$emit("sort","height")})}," By Height ",2)):Object(r["c"])("",!0),p.sortOptions?(Object(r["h"])(),Object(r["d"])("button",{key:4,class:Object(r["g"])({active:n.namesOption}),onClick:t[11]||(t[11]=function(t){return e.$emit("sort","name")})}," By Names ",2)):Object(r["c"])("",!0),p.sortOptions?(Object(r["h"])(),Object(r["d"])("button",{key:5,class:Object(r["g"])({active:n.giftsOption}),onClick:t[12]||(t[12]=function(t){return e.$emit("sort","gifts")})}," By gifts given ",2)):Object(r["c"])("",!0),p.everyOptions?(Object(r["h"])(),Object(r["d"])("button",{key:6,class:Object(r["g"])({active:n.codeButtons}),onClick:t[13]||(t[13]=function(t){return e.$emit("every")})}," Does every character wear green clothes? ",2)):Object(r["c"])("",!0),p.someOptions?(Object(r["h"])(),Object(r["d"])("button",{key:7,class:Object(r["g"])({active:n.codeButtons}),onClick:t[14]||(t[14]=function(t){return e.$emit("some")})}," Is there any Santa? ",2)):Object(r["c"])("",!0),p.reduceOptions?(Object(r["h"])(),Object(r["d"])("button",{key:8,class:Object(r["g"])({active:n.codeButtons}),onClick:t[15]||(t[15]=function(t){return e.$emit("reduce")})}," Total gifts given ",2)):Object(r["c"])("",!0)]),""!==n.result?(Object(r["h"])(),Object(r["d"])("div",h,[Object(r["e"])("p",null,"Result: "+Object(r["m"])(n.result),1)])):Object(r["c"])("",!0),n.codeButtons?(Object(r["h"])(),Object(r["d"])("button",{key:1,class:Object(r["g"])(["code-box",{active:p.jsCodeVisible}]),onClick:t[16]||(t[16]=function(){return u.showJsCode&&u.showJsCode.apply(u,arguments)})}," Show JS code ",2)):Object(r["c"])("",!0),p.jsCodeVisible?(Object(r["h"])(),Object(r["d"])("pre",l," "+Object(r["m"])(n.jsCode)+" ",1)):Object(r["c"])("",!0)])])}var u={props:["result","jsCode","codeButtons","girlsOption","boysOption","heightOption","namesOption","giftsOption"],emits:["refresh"],data:function(){return{mapOptions:!1,filterOptions:!1,sortOptions:!1,everyOptions:!1,someOptions:!1,reduceOptions:!1,jsCodeVisible:!1}},methods:{showMapOptions:function(){this.hideCode(),this.mapOptions=!this.mapOptions,this.filterOptions=!1,this.sortOptions=!1,this.everyOptions=!1,this.someOptions=!1,this.reduceOptions=!1,this.$emit("refresh")},showFilterOptions:function(){this.hideCode(),this.filterOptions=!this.filterOptions,this.mapOptions=!1,this.sortOptions=!1,this.everyOptions=!1,this.someOptions=!1,this.reduceOptions=!1,this.$emit("refresh")},showSortOptions:function(){this.hideCode(),this.sortOptions=!this.sortOptions,this.mapOptions=!1,this.filterOptions=!1,this.everyOptions=!1,this.someOptions=!1,this.reduceOptions=!1,this.$emit("refresh")},showEveryOptions:function(){this.hideCode(),this.everyOptions=!this.everyOptions,this.mapOptions=!1,this.filterOptions=!1,this.sortOptions=!1,this.someOptions=!1,this.reduceOptions=!1,this.$emit("refresh")},showSomeOptions:function(){this.hideCode(),this.someOptions=!this.someOptions,this.mapOptions=!1,this.filterOptions=!1,this.sortOptions=!1,this.everyOptions=!1,this.reduceOptions=!1,this.$emit("refresh")},showReduceOptions:function(){this.hideCode(),this.reduceOptions=!this.reduceOptions,this.mapOptions=!1,this.filterOptions=!1,this.sortOptions=!1,this.everyOptions=!1,this.someOptions=!1,this.$emit("refresh")},showJsCode:function(){this.jsCodeVisible=!this.jsCodeVisible},hideCode:function(){this.jsCodeVisible=!1}}},d=(n("b633"),n("6b0d")),O=n.n(d);const f=O()(u,[["render",p],["__scopeId","data-v-644afb25"]]);var b=f,g={class:"wrapper"},m={class:"characters"},j={class:"cloud"},y={class:"cloud-name"},v=["src"],C={class:"character-name"};function k(e,t,n,s,o,i){return Object(r["h"])(),Object(r["d"])("div",g,[Object(r["e"])("div",m,[(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["k"])(n.characters,(function(e){return Object(r["h"])(),Object(r["d"])("div",{key:e.name,class:"character"},[Object(r["e"])("div",j,[Object(r["e"])("p",y,Object(r["m"])(e.name),1),Object(r["e"])("p",null,"Gifts given: "+Object(r["m"])(e.gifts),1)]),Object(r["e"])("img",{class:"character-img",src:"/img/".concat(e.img),alt:"Sylwetka postaci"},null,8,v),Object(r["e"])("p",C,Object(r["m"])(e.name),1)])})),128))])])}var w={props:["characters"]};n("7e24");const M=O()(w,[["render",k],["__scopeId","data-v-014c4bc2"]]);var S=M,B=n("bf37"),$=n.n(B),V=function(e){return Object(r["j"])("data-v-58938660"),e=e(),Object(r["i"])(),e},x={key:0,class:"background"},_={class:"wrapper"},A={class:"modal-close"},E=V((function(){return Object(r["e"])("img",{src:$.a,alt:"zamknij okno"},null,-1)})),J=[E],R={class:"modal"},I=V((function(){return Object(r["e"])("h1",null,"Array Methods",-1)})),P=V((function(){return Object(r["e"])("p",null," Hello, I want to simply explain you how array methods works. I've made this examples using vue.js framework, but don't worry, i'll give you vanilla javascript code. Here is starting code, which is the base for our examples - We'll be working on christmas characters and their properties! ",-1)})),F={class:"modal-flex"},N={class:"modal-code"},T={key:0,class:"code-js"},H=V((function(){return Object(r["e"])("pre",null,'        const characters = [\r\n        {\r\n          name: "Micky",                 \r\n          height: 2,\r\n          gifts: 23,\r\n          dressColor: "green",\r\n          img: \'Micky.png\',\r\n          gender: "male",\r\n          type: "elf"\r\n        },\r\n        {\r\n          name: "Ollie",\r\n          height: 1,\r\n          gifts: 8,\r\n          dressColor: "green",\r\n          img: \'Ollie.png\',\r\n          gender: "male",\r\n          type: "elf"\r\n        },\r\n        {\r\n          name: "Elly",\r\n          height: 3,\r\n          gifts: 30,\r\n          dressColor: "green",\r\n          img: \'Elly.png\',\r\n          gender: "female",\r\n          type: "elf"\r\n        },\r\n        {\r\n          name: "Santa",\r\n          height: 4,\r\n          gifts: 100,\r\n          dressColor: "red",\r\n          img: \'Santa.png\',\r\n          gender: "male",\r\n          type: "santa"\r\n        },\r\n          {\r\n            name: "Mrs. Santa",\r\n            height: 4,\r\n            gifts: 99,\r\n            dressColor: "red",\r\n            img: \'Mrs.Santa.png\',\r\n            gender: "female",\r\n            type: "santa"\r\n          },\r\n        {\r\n          name: "Lili",\r\n          height: 1,\r\n          gifts: 26,\r\n          dressColor: "green",\r\n          img: \'Lili.png\',\r\n          gender: "female",\r\n          type: "elf"\r\n        },\r\n        {\r\n          name: "Sophia",\r\n          height: 3,\r\n          gifts: 65,\r\n          dressColor: "green",\r\n          img: \'Sophia.png\',\r\n          gender: "female",\r\n          type: "elf"\r\n        },\r\n        {\r\n          name: "Mia",\r\n          height: 2,\r\n          gifts: 23,\r\n          dressColor: "green",\r\n          img: \'Mia.png\',\r\n          gender: "female",\r\n          type: "elf"\r\n        },\r\n        {\r\n          name: "John",\r\n          height: 3,\r\n          gifts: 45,\r\n          dressColor: "green",\r\n          img: \'John.png\',\r\n          gender: "male",\r\n          type: "elf"\r\n        },\r\n      ]        \r\n            ',-1)})),L=[H],D={class:"modal-go"};function G(e,t,n,s,o,i){return n.modalVisible?(Object(r["h"])(),Object(r["d"])("div",x,[Object(r["e"])("div",_,[Object(r["e"])("div",A,[Object(r["e"])("button",{onClick:t[0]||(t[0]=function(t){return e.$emit("closeModal")})},J)]),Object(r["e"])("div",R,[I,P,Object(r["e"])("div",F,[Object(r["e"])("div",N,[o.jsVisible?(Object(r["h"])(),Object(r["d"])("div",T,L)):Object(r["c"])("",!0)])]),Object(r["e"])("div",D,[Object(r["e"])("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("closeModal")})},"OK, let's go!")])])])])):Object(r["c"])("",!0)}var z={props:["modalVisible"],data:function(){return{jsVisible:!0,vueVisible:!1}}};n("1757");const K=O()(z,[["render",G],["__scopeId","data-v-58938660"]]);var U=K,W=function(e){return Object(r["j"])("data-v-0427a776"),e=e(),Object(r["i"])(),e},q={class:"mobile-dialog"},Q=W((function(){return Object(r["e"])("p",null,"Rotate your device to better enjoy the app!",-1)})),X=[Q];function Y(e,t){return Object(r["h"])(),Object(r["d"])("div",q,X)}n("0da7");const Z={},ee=O()(Z,[["render",Y],["__scopeId","data-v-0427a776"]]);var te=ee,ne={components:{MethodsBar:b,TheCharacters:S,TheModal:U,MobileDialog:te},data:function(){return{modalVisible:!0,codeButtons:!1,result:"",jsCode:"",vueCode:"",option:[{girlsOption:!1},{boysOption:!1},{heightOption:!1},{namesOption:!1},{giftsOption:!1}],characters:[{name:"Micky",height:2,gifts:23,dressColor:"green",img:"Micky.png",gender:"male",type:"elf"},{name:"Ollie",height:1,gifts:8,dressColor:"green",img:"Ollie.png",gender:"male",type:"elf"},{name:"Elly",height:3,gifts:30,dressColor:"green",img:"Elly.png",gender:"female",type:"elf"},{name:"Santa",height:4,gifts:100,dressColor:"red",img:"Santa.png",gender:"male",type:"santa"},{name:"Mrs. Santa",height:4,gifts:49,dressColor:"red",img:"Mrs.Santa.png",gender:"female",type:"santa"},{name:"Lili",height:1,gifts:64,dressColor:"green",img:"Lili.png",gender:"female",type:"elf"},{name:"Sophia",height:3,gifts:65,dressColor:"green",img:"Sophia.png",gender:"female",type:"elf"},{name:"Mia",height:2,gifts:23,dressColor:"green",img:"Mia.png",gender:"female",type:"elf"},{name:"John",height:3,gifts:45,dressColor:"green",img:"John.png",gender:"male",type:"elf"}],updatedCharacters:[]}},methods:{showModal:function(){this.modalVisible=!0},updateCharacters:function(){this.updatedCharacters=this.characters,this.result="",this.jsCode="",this.vueCode="",this.codeButtons=!1},map:function(){var e=this.characters.map((function(e){return e.name}));this.result="Names of characters: "+e,this.codeButtons=!0,this.jsCode="const mapArray = characters.map(character => character.name)"},filter:function(e){var t=this.characters.filter((function(t){return t.gender==e}));this.updatedCharacters=t,this.codeButtons=!0,"male"==e?(this.jsCode="const filterArray = characters.map(character => character.gender == 'male')",this.resetOptions(),this.option.boysOption=!0):"female"==e&&(this.jsCode="const filterArray = characters.map(character => character.gender == 'female')",this.resetOptions(),this.option.girlsOption=!0)},sort:function(e){this.codeButtons=!0,"height"==e?(this.characters.sort((function(e,t){return e.height-t.height})),this.jsCode="const sortHeightArray = characters.sort((a,b) =>  a.height - b.height)",this.resetOptions(),this.option.heightOption=!0):"name"==e?(this.characters.sort((function(e,t){return e.name<t.name?-1:1})),this.jsCode="const sortNameArray = characters.sort((a,b) => { if (a.name < b.name){ return -1 } else { return 1 } })",this.resetOptions(),this.option.namesOption=!0):(this.characters.sort((function(e,t){return e.gifts-t.gifts})),this.jsCode="const sortNameArray = characters.sort( (a,b) => a.gifts - b.gifts)",this.resetOptions(),this.option.giftsOption=!0)},every:function(){var e=this.characters.every((function(e){return"green"==e.dressColor}));this.result=e,this.codeButtons=!0,this.jsCode="const everyArray = characters.every((character) => character.dressColor == 'green')"},some:function(){var e=this.characters.some((function(e){return"santa"==e.type}));this.result=e,this.codeButtons=!0,this.jsCode="const someArray = characters.some((character)=> character.type == 'santa')"},reduce:function(){var e=this.characters.reduce((function(e,t){return e+t.gifts}),0);this.result=e,this.codeButtons=!0,this.jsCode="const reduceArray = characters.reduce ((acc,cur) =>  acc + cur.gifts , 0)"},resetOptions:function(){var e=this.option.map((function(e){return 0==e.value}));this.option=e}},mounted:function(){this.updateCharacters()}};n("398b");const re=O()(ne,[["render",s]]);var se=re;Object(r["b"])(se).mount("#app")},6320:function(e,t,n){},"68ca":function(e,t,n){},"7e24":function(e,t,n){"use strict";n("fed9")},b633:function(e,t,n){"use strict";n("6320")},bf37:function(e,t,n){e.exports=n.p+"img/close.9d9b00ea.svg"},ee45:function(e,t,n){},fed9:function(e,t,n){}});
//# sourceMappingURL=app.2e48a1fe.js.map