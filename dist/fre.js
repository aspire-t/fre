!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.fre=t():e.fre=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";t.__esModule=!0;var o=n(4);function r(e,t){var n=e;return void 0!==typeof t&&null!==typeof t&&"boolean"!=typeof t||(t=""),"number"==typeof t&&(t=String(t)),"string"==typeof t?(e&&3===e.nodeType?e.textContent!==t&&(e.textContent=t):(n=document.createTextNode(t),e&&e.parentNode&&e.parentNode.replaceChild(n,e)),n):"function"==typeof t.type?function(e,t){var n=e&&e.component,o=e;n&&n.constructor===t.type?(i(n,t.props),e=n.base):(n&&(!function(e){e.willUnmout&&e.willUnmout();a(e.base)}(n),o=null),i(n=function(e,t){var n,o=this;e.prototype&&e.prototype.render?n=new e(t):((n=new e(t)).constructor=e,n.render=function(){return o.constructor(t)});return n}(t.type,t.props),t.props),e=n.base,o&&e!==o&&(o.component=null,a(o)));return e}(e,t):(e&&s(e,t)||(n=document.createElement(t.type),e&&(e.childNodes.slice().map(n.appendChild),e.parentNode&&e.parentNode.replaceChild(n,e))),(t.children&&t.children.length>0||n.childNodes&&n.childNodes.length>0)&&function(e,t){var n=e.childNodes,o=[],i={};if(n.length>0)for(var u=0;u<n.length;u++){var c=n[u],f=c.key;f?i[f]=c:o.push(c)}if(t.length>0)for(var p=0,d=o.length,u=0;u<t.length;u++){var l=t[u],f=l.key,c=void 0;if(f)i[f]&&(c=i[f],i[f]=void 0);else if(p<d)for(var h=p;h<d;h++){var y=o[h];y&&s(y,l)&&(c=y,o[h]=void 0,h===o-1&&d--,h===p&&p++)}c=r(c,l);var v=n[u];c&&c!==e&&c!==v&&(v?c===v.nextSibling?a(v):e.insertBefore(c,v):e.appendChild(c))}}(n,t.children),function(e,t){for(var n={},r=t.props,i=0;i<e.attributes.length;i++){var u=e.attributes[i];n[u.name]=u.value}for(var s in n)s in r||o.setAttr(e,s,void 0);for(var a in r)n[a]!==r[a]&&o.setAttr(e,a,r[a])}(n,t),n)}function i(e,t){e.base?e.willChange&&e.willChange(t):e.willMount&&e.willMount(),e.props=t,u(e)}function u(e){var t,n=e.render();e.base&&e.willUpdate&&e.willUpdate(),t=r(e.base,n),e.base?e.updated&&e.updated():e.mounted&&e.mounted(),e.base=t}function s(e,t){return"string"==typeof t||"number"==typeof t?3===e.nodeType:"string"==typeof t.type?e.nodeName.toLowerCase()===t.type.toLowerCase():e&&e.component&&e.component.constructor===t.type}function a(e){e&&e.parentNode&&e.parentNode.removeChild(e)}t.diff=function(e,t,n){var o=r(e,t);return n&&o.parentNode!==n&&n.appendChild(o),o},t.renderComponent=u},function(e,t,n){"use strict";t.__esModule=!0;var o=function(){function e(){this.subs=[],this.add=this.add.bind(this),this.notify=this.notify.bind(this)}return e.prototype.add=function(e){this.subs.push(e)},e.prototype.clean=function(){this.subs=[]},e.prototype.notify=function(){this.subs.forEach(function(e){return e.update()})},e}();t.Dep=o,o.target=null},function(e,t,n){"use strict";t.__esModule=!0;var o=n(3),r=n(5),i=n(6);t.default={h:r.h,Component:i.default,render:o.default}},function(e,t,n){"use strict";t.__esModule=!0;var o=n(0);t.default=function(e,t,n){return o.diff(n,e,t)}},function(e,t,n){"use strict";t.__esModule=!0,t.setAttr=function(e,t,n){if(/on\w+/.test(t))e[t=t.toLowerCase()]=n;else switch(t){case"className":t="class",e.setAttribute(t,n);break;case"value":"input"===e.tagName.toUpperCase()||"textarea"===e.tagName.toUpperCase()?e.value=n:e.setAttribute(t,n);break;case"style":e.style.cssText=n;break;default:e.setAttribute(t,n)}}},function(e,t,n){"use strict";t.__esModule=!0;var o=function(){return function(e,t,n){t=t||{},this.type=e,this.props=t,this.children=n,this.key=this.props.key||null}}();t.Vnode=o,t.h=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return new o(e,t,n)}},function(e,t,n){"use strict";t.__esModule=!0;var o=n(7),r=n(8),i=function(){function e(e){void 0===e&&(e={}),this.state={},this.props=e}return e.prototype.willMount=function(){new r.Observer(this.state),new o.Watcher(this)},e}();t.Component=i,t.default=i},function(e,t,n){"use strict";t.__esModule=!0;var o=n(1),r=n(0),i=function(){function e(e){this.vm=e,o.Dep.target=this,this.update=this.update.bind(this)}return e.prototype.update=function(){r.renderComponent(this.vm)},e}();t.Watcher=i},function(e,t,n){"use strict";t.__esModule=!0;var o=n(1),r=function(){function e(e){this.observe(e)}return e.prototype.observe=function(e){var t=this;e&&"object"==typeof e&&Object.keys(e).forEach(function(n){t.defineReactive(e,n,e[n]),t.observe(e[n])})},e.prototype.defineReactive=function(e,t,n){var r=this,i=new o.Dep;Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){return o.Dep.target&&i.add(o.Dep.target),o.Dep.target=null,n},set:function(e){e!==n&&(r.observe(e),n=e,i.notify())}})},e}();t.Observer=r}])});