!function(c){function t(t){for(var e,n,o=t[0],r=t[1],i=t[2],l=0,a=[];l<o.length;l++)n=o[l],s[n]&&a.push(s[n][0]),s[n]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(c[e]=r[e]);for(b&&b(t);a.length;)a.shift()();return f.push.apply(f,i||[]),u()}function u(){for(var t,e=0;e<f.length;e++){for(var n=f[e],o=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(o=!1)}o&&(f.splice(e--,1),t=p(p.s=n[0]))}return t}var n={},s={1:0},f=[];function p(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return c[t].call(e.exports,e,e.exports,p),e.l=!0,e.exports}p.e=function(i){var t=[],n=s[i];if(0!==n)if(n)t.push(n[2]);else{var e=new Promise(function(t,e){n=s[i]=[t,e]});t.push(n[2]=e);var o,r=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,p.nc&&l.setAttribute("nonce",p.nc),l.src=p.p+""+i+".index.js",o=function(t){l.onerror=l.onload=null,clearTimeout(a);var e=s[i];if(0!==e){if(e){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,r=new Error("Loading chunk "+i+" failed.\n("+n+": "+o+")");r.type=n,r.request=o,e[1](r)}s[i]=void 0}};var a=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,r.appendChild(l)}return Promise.all(t)},p.m=c,p.c=n,p.d=function(t,e,n){p.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},p.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},p.t=function(e,t){if(1&t&&(e=p(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(p.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)p.d(n,o,function(t){return e[t]}.bind(null,o));return n},p.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return p.d(e,"a",e),e},p.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},p.p="/",p.oe=function(t){throw console.error(t),t};var e=window.webpackJsonp=window.webpackJsonp||[],o=e.push.bind(e);e.push=t,e=e.slice();for(var r=0;r<e.length;r++)t(e[r]);var b=o;f.push([11,0]),u()}({11:function(t,e,d){"use strict";d.r(e),function(t){var e=d(0),n=d.n(e),o=d(3),r=d.n(o),i=d(1),l=d.n(i),a=(d(20),d(8)),c=l()({loader:function(){return Promise.all([d.e(0),d.e(2)]).then(d.bind(null,25))},loading:function(){return null}}),u=l()({loader:function(){return d.e(3).then(d.bind(null,26))},loading:function(){return null}}),s=l()({loader:function(){return d.e(4).then(d.bind(null,27))},loading:function(){return null}}),f=l()({loader:function(){return d.e(5).then(d.bind(null,28))},loading:function(){return null}}),p=l()({loader:function(){return d.e(6).then(d.bind(null,29))},loading:function(){return null}}),b=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(a.a,null),n.a.createElement(c,null),n.a.createElement(u,null),n.a.createElement(f,null),n.a.createElement(s,null),n.a.createElement(p,null))};r.a.render(n.a.createElement(b,null),document.getElementById("root")),t.env.MODE}.call(this,d(12))},20:function(t,e,n){var o=n(21);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(5)(o,r);o.locals&&(t.exports=o.locals)},21:function(t,e,n){(e=t.exports=n(4)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto);",""]),e.push([t.i,"body{margin:0;overflow:hidden;font-family:'Roboto';transition:all 1s;-moz-transition:all 1s;-o-transition:all 1s;-webkit-transition:all 1s}#root{align-items:flex-start;display:flex;flex-direction:column}section{position:relative;overflow-x:hidden;scroll-behavior:smooth}.container{height:100vh;width:80%;float:right;display:flex;padding:2% 0;box-sizing:border-box}.scroll-button{display:flex;align-items:center;justify-content:center;font-size:100%;height:5vh;width:5vh;position:fixed;bottom:1em;right:1em;cursor:pointer;padding:0.5%;border-radius:50%;background-color:#fff;box-shadow:1px 1px 1px 2px rgba(0,0,0,0.2)}.scroll-button i{color:#a6c5e0}\n",""])},23:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".navbar{position:fixed;z-index:2;top:0;height:2.5em;width:100%;display:flex;box-sizing:border-box;justify-content:center;background-color:#fff}.navbar .sidebar-links{display:flex;box-sizing:border-box;list-style:none;margin:0;width:70%;justify-content:space-around;align-self:center;padding:0 3%;margin:auto}@media only screen and (max-width: 690px){.navbar .sidebar-links{width:90%}}.navbar .sidebar-links span{text-decoration:none;display:flex;width:fit-content;color:black;padding:2%;font-size:0.8em;min-width:fit-content;cursor:pointer;text-transform:uppercase;position:relative}.navbar .sidebar-links .current-active{color:orange}.navbar .sidebar-links .current-active::after{content:'';display:flex;position:absolute;bottom:0;left:0;width:100%;height:2px;background-color:orange}@keyframes slideIn{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}65%{opacity:0.2}100%{opacity:1;-webkit-transform:translateX(0%);transform:translateX(0%)}}\n",""])},8:function(t,e,n){"use strict";var r=n(0),i=n.n(r),l=(n(3),n(9),n(2));function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var u=function(t){function s(){var t,e,n,o,r,i,l;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return n=this,o=(t=p(s)).call.apply(t,[this].concat(c)),e=!o||"object"!==f(o)&&"function"!=typeof o?b(n):o,r=b(b(e)),l=function(){var t=e.props.onClickButton;window.scrollTo({left:0,top:0,behavior:"smooth"}),t("home")},(i="scrollToTop")in r?Object.defineProperty(r,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[i]=l,e}var e,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(s,r["Component"]),e=s,(n=[{key:"render",value:function(){return i.a.createElement("div",{className:"scroll-button",onClick:this.scrollToTop},i.a.createElement(l.FaArrowUp,null))}}])&&a(e.prototype,n),o&&a(e,o),s}();function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var o=function(t){function a(t){var n,e,o,r,i,l;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),e=this,o=m(a).call(this,t),n=!o||"object"!==s(o)&&"function"!=typeof o?h(e):o,r=h(h(n)),l=function(t){var e=document.getElementById(t);window.scroll({left:e.offsetLeft,top:e.offsetTop,behavior:"smooth"}),n.setState({currentView:t})},(i="scrollTo")in r?Object.defineProperty(r,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[i]=l,n.scrollToAboutSection=n.scrollTo.bind(h(h(n)),"about"),n.scrollToWorkSection=n.scrollTo.bind(h(h(n)),"work"),n.scrollToSkillsSection=n.scrollTo.bind(h(h(n)),"skills"),n.scrollToProjectsSection=n.scrollTo.bind(h(h(n)),"projects"),n.setInitialState=function(){return n.setState({currentView:"home"})},n.state={currentView:"home"},n}var e,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(a,i.a.Component),e=a,(n=[{key:"render",value:function(){var t=this.state.currentView;return i.a.createElement("div",{className:"navbar"},i.a.createElement("div",{className:"sidebar-links"},i.a.createElement("span",{className:"link-title".concat("about"===t?" current-active":""),onClick:this.scrollToAboutSection},"About"),i.a.createElement("span",{className:"link-title".concat("work"===t?" current-active":""),onClick:this.scrollToWorkSection},"work"),i.a.createElement("span",{className:"link-title".concat("skills"===t?" current-active":""),onClick:this.scrollToSkillsSection},"skills"),i.a.createElement("span",{className:"link-title".concat("projects"===t?" current-active":""),onClick:this.scrollToProjectsSection},"projects")),i.a.createElement(u,{onClickButton:this.setInitialState}))}}])&&d(e.prototype,n),o&&d(e,o),a}();e.a=o},9:function(t,e,n){var o=n(23);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(5)(o,r);o.locals&&(t.exports=o.locals)}});