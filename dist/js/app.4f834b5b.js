(function(e){function t(t){for(var r,c,s=t[0],a=t[1],u=t[2],f=0,p=[];f<s.length;f++)c=s[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="reaction-timer-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=a;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=Object(r["e"])("h1",null,"Ninja Reaction Timer",-1);function i(e,t,n,i,c,s){var a=Object(r["g"])("Block"),u=Object(r["g"])("Results");return Object(r["f"])(),Object(r["c"])(r["a"],null,[o,Object(r["e"])("button",{onClick:t[1]||(t[1]=function(){return s.start.apply(s,arguments)}),disabled:c.isPlaying},"play",8,["disabled"]),c.isPlaying?(Object(r["f"])(),Object(r["c"])(a,{key:0,delay:c.delay,onEnd:s.endGame},null,8,["delay","onEnd"])):Object(r["d"])("",!0),c.showResults?(Object(r["f"])(),Object(r["c"])(u,{key:1,score:c.score},null,8,["score"])):Object(r["d"])("",!0)],64)}function c(e,t,n,o,i,c){return i.showBlock?(Object(r["f"])(),Object(r["c"])("div",{key:0,class:"block",onClick:t[1]||(t[1]=function(){return c.stopTimer.apply(c,arguments)})},"click me")):Object(r["d"])("",!0)}var s={props:["delay"],data:function(){return{showBlock:!1,timer:null,reactionTime:0}},mounted:function(){var e=this;setTimeout((function(){e.showBlock=!0,e.startTimer()}),this.delay)},methods:{startTimer:function(){var e=this;this.timer=setInterval((function(){e.reactionTime+=10}),10)},stopTimer:function(){clearInterval(this.timer),console.log(this.reactionTime),this.$emit("end",this.reactionTime)}}};n("9f10");s.render=c;var a=s,u={class:"rank"};function l(e,t,n,o,i,c){return Object(r["f"])(),Object(r["c"])(r["a"],null,[Object(r["e"])("p",null,"Reaction time: "+Object(r["h"])(n.score)+" ms",1),Object(r["e"])("p",u,Object(r["h"])(i.rank),1)],64)}var f={props:["score"],data:function(){return{rank:null}},mounted:function(){this.score<250?this.rank="Ninja Fingers":this.score<400?this.rank="Rapid Reflexes":this.rank="Snail Pace..."}};n("7f51");f.render=l;var p=f,d={name:"App",components:{Block:a,Results:p},data:function(){return{isPlaying:!1,delay:null,score:null,showResults:!1}},methods:{start:function(){this.delay=2e3+5e3*Math.random(),this.isPlaying=!0,this.showResults=!1},endGame:function(e){this.score=e,this.isPlaying=!1,this.showResults=!0}}};n("64be");d.render=i;var h=d;Object(r["b"])(h).mount("#app")},"64be":function(e,t,n){"use strict";n("c894")},"7f51":function(e,t,n){"use strict";n("85fa")},8351:function(e,t,n){},"85fa":function(e,t,n){},"9f10":function(e,t,n){"use strict";n("8351")},c894:function(e,t,n){}});
//# sourceMappingURL=app.4f834b5b.js.map