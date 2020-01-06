!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t=t||self).FlowCharts={})}(this,function(t){"use strict";function o(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function u(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],e=!0,o=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(e=(u=c.next()).done)&&(r.push(u.value),!n||r.length!==n);e=!0);}catch(t){o=!0,i=t}finally{try{e||null==c.return||c.return()}finally{if(o)throw i}}return r}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function n(t){return function r(o,i){return function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length>=o?i.apply(void 0,e):r(o-e.length,function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return i.apply(void 0,e.concat(n))})}}(t.length,t)}function r(e){for(var t=arguments.length,o=new Array(1<t?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(void 0,o.concat(n))}}function e(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(t){return n.reduceRight(function(t,n){return n(t)},t)}}function i(){}function c(n){return{map:function(t){return c(function(){return t(n())})},chain:function(t){return c(function(){return t(n()).run()})},fold:function(t){return t(n())},run:function(){return n()}}}function s(r){return{chain:function(t){return t(r)},map:function(t){return s(t(r))},flod:function(t,n){return n(r)},concat:function(t){return t.flod(function(t){return g(t)},function(t){return s(r.concat(t))})},isLeft:!1,isRight:!0}}var f,l="http://www.w3.org/2000/svg",p=[["id","flow-svg"],["style","position:absolute;top:0;left:0"]],h=[["xmlns:xlink","http://www.w3.org/1999/xlink","http://www.w3.org/2000/xmlns/"]],d=[["viewBox","0 0 10 10"],["refX","5"],["refY","5"],["markerUnits","strokeWidth"],["markerWidth","10"],["markerHeight","8"],["orient","auto"],["fill","#333"]],y=[["d","M 0 0 L 10 5 L 0 10 z"]],b=[["cx",5,null],["cy",5,null],["r",5,null],["fill","#333",null]],v=[["fill","none"],["marker-start","url(#circle)"],["marker-end","url(#triangle)"]],m=n(function(t,n,r){return t(r)?n(r):c(i)}),w={IO:c,ioWhen:m,of:c},g=function t(n){return{chain:function(){return t(n)},map:function(){return t(n)},flod:function(t){return t(n)},concat:function(){return t(n)},isLeft:!0,isRight:!1}},_=n(function(t,n,r){return r.flod(t,n)}),x={Right:s,Left:g,fromNullable:function(t){return(null!=t?s:g)(t)},tryCatch:function(t){try{return s(t())}catch(t){return g(t)}},either:_,of:s},E=(f=w,S.of=function(t){return S(f.of(s(t)))},S);function S(t){return{runEitherT:t,chain:function(n){return S(t.chain(_(function(t){return f.of(function(){return g(t)})},function(t){return n(t).runEitherT})))}}}function k(t){return E(t.map(x.Right))}function T(t){return t.runEitherT.run()}function O(t,n,r){var e="one"===n?t.querySelector(r):t.querySelectorAll(r);return e||e&&e.length?x.Right(e):x.Left("Error: Could not find DOM Node with selector '".concat(r,"'"))}function A(t){return w.of(function(){return C(t)})}function P(t,n){return T(E(A(t)).chain(e(k,(r=n,function(n){return w.of(function(){Array.isArray(r)?r.forEach(function(t){return n.appendChild(t)}):n.appendChild(r)})}))));var r}function D(t){return w.of(function(){t.parentNode.removeChild(t)})}function L(t){var n=t.getBoundingClientRect(),r=document.documentElement,e=n.left+(window.pageXOffset||r.scrollLeft)-(r.clientLeft||document.body.clientLeft||0),o=n.top+(window.pageYOffset||r.scrollTop)-(r.clientTop||document.body.clientTop||0);return{left:e,top:o,right:e+n.width,bottom:o+n.height}}var C=r(O,document,"one"),N=(r(O,document,"all"),n(function(t,n,r,e){var o=document.createDocumentFragment(),i=document.createElementNS(t,n);return Array.isArray(e)&&r.forEach(function(t){var n=u(t,2),r=n[0],e=n[1];return i.setAttribute(r,e)}),Array.isArray(e)&&e.forEach(function(t){var n=u(t,3),r=n[0],e=n[1],o=n[2];return i.setAttributeNS(o,r,e)}),o.appendChild(i)})),I=n(function(t,n){var r=L(t),e=r.left,o=r.top,i=r.right,u=r.bottom,c=L(n),s=c.left,a=c.top,f=c.right,l=c.bottom;return e<=s&&f<=i&&o<=a&&l<=u});function j(t){var n=t.getBoundingClientRect(),r=n.top;return{x:n.left+n.width/2,y:r+n.height/2}}function Y(t){return _(i,i)(H(t,X()))}function B(r){return function(n){return w.of(function(){var t;V(r,{width:(t=n).scrollWidth,height:t.scrollHeight}),n.appendChild(r)})}}function U(t,n,r,e,o,i,u){var c=5<arguments.length&&void 0!==i?i:"#333",s=6<arguments.length&&void 0!==u?u:.5;q(t),P("#".concat("flow-svg"),R(t,n,r,e,o,c,s))}var H=function(t,n){return T(E(A(t)).chain(e(k,B(n))))},V=function(t,n){var r=n.width,e=n.height;t.setAttributeNS(null,"viewBox","0 0 "+r+" "+e),t.setAttributeNS(null,"width",r),t.setAttributeNS(null,"height",e)},X=function(){var t=N(l,"svg",p,h),n=M("triangle","path",y),r=M("circle","circle",b);return t.append(n),t.append(r),t},M=function(t,n,r,e){var o=2<arguments.length&&void 0!==r?r:[],i=3<arguments.length&&void 0!==e?e:[],u=N(l,"defs",[],[]),c=N(l,"marker",[["id",t]].concat(a(d)),[]),s=N("http://www.w3.org/2000/svg",n,o,i);return c.append(s),u.append(c),u},R=function(t,n,r,e,o,i,u){return N(l,"path")([],[["id",t],["d",F(n,r,e,o,u)],["stroke",i]].concat(a(v)))},F=function(t,n,r,e,o){var i=(e-n)*o;return"M "+t+" "+n+" C "+t+" "+(n+i)+" "+r+" "+(e-i)+" "+r+" "+e},q=function(t){return _(function(){return console.error("没有找到对应id为: '".concat(t,"' 的line"))},i)((n="#".concat(t),T(E(A(n)).chain(e(k,D)))));var n},W=function(t,n){return(W=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])})(t,n)};function z(t,n){function r(){this.constructor=t}W(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}function G(t){return"function"==typeof t}var J=!1,K={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;J=t},get useDeprecatedSynchronousErrorHandling(){return J}};function Q(t){setTimeout(function(){throw t},0)}var Z={closed:!0,next:function(t){},error:function(t){if(K.useDeprecatedSynchronousErrorHandling)throw t;Q(t)},complete:function(){}},$=function(){return Array.isArray||function(t){return t&&"number"==typeof t.length}}();function tt(t){return null!==t&&"object"==typeof t}var nt=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map(function(t,n){return n+1+") "+t.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}(),rt=function(){function c(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}var t;return c.prototype.unsubscribe=function(){var n;if(!this.closed){var t=this._parentOrParents,r=this._unsubscribe,e=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,t instanceof c)t.remove(this);else if(null!==t)for(var o=0;o<t.length;++o){t[o].remove(this)}if(G(r))try{r.call(this)}catch(t){n=t instanceof nt?et(t.errors):[t]}if($(e)){o=-1;for(var i=e.length;++o<i;){var u=e[o];if(tt(u))try{u.unsubscribe()}catch(t){n=n||[],t instanceof nt?n=n.concat(et(t.errors)):n.push(t)}}}if(n)throw new nt(n)}},c.prototype.add=function(t){var n=t;if(!t)return c.EMPTY;switch(typeof t){case"function":n=new c(t);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof c)){var r=n;(n=new c)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var e=n._parentOrParents;if(null===e)n._parentOrParents=this;else if(e instanceof c){if(e===this)return n;n._parentOrParents=[e,this]}else{if(-1!==e.indexOf(this))return n;e.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[n]:o.push(n),n},c.prototype.remove=function(t){var n=this._subscriptions;if(n){var r=n.indexOf(t);-1!==r&&n.splice(r,1)}},c.EMPTY=((t=new c).closed=!0,t),c}();function et(t){return t.reduce(function(t,n){return t.concat(n instanceof nt?n.errors:n)},[])}var ot=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),it=function(o){function i(t,n,r){var e=o.call(this)||this;switch(e.syncErrorValue=null,e.syncErrorThrown=!1,e.syncErrorThrowable=!1,e.isStopped=!1,arguments.length){case 0:e.destination=Z;break;case 1:if(!t){e.destination=Z;break}if("object"==typeof t){t instanceof i?(e.syncErrorThrowable=t.syncErrorThrowable,(e.destination=t).add(e)):(e.syncErrorThrowable=!0,e.destination=new ut(e,t));break}default:e.syncErrorThrowable=!0,e.destination=new ut(e,t,n,r)}return e}return z(i,o),i.prototype[ot]=function(){return this},i.create=function(t,n,r){var e=new i(t,n,r);return e.syncErrorThrowable=!1,e},i.prototype.next=function(t){this.isStopped||this._next(t)},i.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},i.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},i.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,o.prototype.unsubscribe.call(this))},i.prototype._next=function(t){this.destination.next(t)},i.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},i.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},i.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},i}(rt),ut=function(c){function t(t,n,r,e){var o,i=c.call(this)||this;i._parentSubscriber=t;var u=i;return G(n)?o=n:n&&(o=n.next,r=n.error,e=n.complete,n!==Z&&(G((u=Object.create(n)).unsubscribe)&&i.add(u.unsubscribe.bind(u)),u.unsubscribe=i.unsubscribe.bind(i))),i._context=u,i._next=o,i._error=r,i._complete=e,i}return z(t,c),t.prototype.next=function(t){if(!this.isStopped&&this._next){var n=this._parentSubscriber;K.useDeprecatedSynchronousErrorHandling&&n.syncErrorThrowable?this.__tryOrSetError(n,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},t.prototype.error=function(t){if(!this.isStopped){var n=this._parentSubscriber,r=K.useDeprecatedSynchronousErrorHandling;if(this._error)r&&n.syncErrorThrowable?this.__tryOrSetError(n,this._error,t):this.__tryOrUnsub(this._error,t),this.unsubscribe();else if(n.syncErrorThrowable)r?(n.syncErrorValue=t,n.syncErrorThrown=!0):Q(t),this.unsubscribe();else{if(this.unsubscribe(),r)throw t;Q(t)}}},t.prototype.complete=function(){var t=this;if(!this.isStopped){var n=this._parentSubscriber;if(this._complete){var r=function(){return t._complete.call(t._context)};K.useDeprecatedSynchronousErrorHandling&&n.syncErrorThrowable?this.__tryOrSetError(n,r):this.__tryOrUnsub(r),this.unsubscribe()}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(t,n){try{t.call(this._context,n)}catch(t){if(this.unsubscribe(),K.useDeprecatedSynchronousErrorHandling)throw t;Q(t)}},t.prototype.__tryOrSetError=function(n,t,r){if(!K.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,r)}catch(t){return K.useDeprecatedSynchronousErrorHandling?(n.syncErrorValue=t,n.syncErrorThrown=!0):(Q(t),!0)}return!1},t.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},t}(it);var ct=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function st(){}var at=function(){function r(t){this._isScalar=!1,t&&(this._subscribe=t)}return r.prototype.lift=function(t){var n=new r;return n.source=this,n.operator=t,n},r.prototype.subscribe=function(t,n,r){var e=this.operator,o=function(t,n,r){if(t){if(t instanceof it)return t;if(t[ot])return t[ot]()}return t||n||r?new it(t,n,r):new it(Z)}(t,n,r);if(e?o.add(e.call(o,this.source)):o.add(this.source||K.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),K.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},r.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(t){K.useDeprecatedSynchronousErrorHandling&&(n.syncErrorThrown=!0,n.syncErrorValue=t),!function(t){for(;t;){var n=t.closed,r=t.destination,e=t.isStopped;if(n||e)return!1;t=r&&r instanceof it?r:null}return!0}(n)?console.warn(t):n.error(t)}},r.prototype.forEach=function(e,t){var o=this;return new(t=ft(t))(function(t,n){var r;r=o.subscribe(function(t){try{e(t)}catch(t){n(t),r&&r.unsubscribe()}},n,t)})},r.prototype._subscribe=function(t){var n=this.source;return n&&n.subscribe(t)},r.prototype[ct]=function(){return this},r.prototype.pipe=function(){for(var n,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return 0===t.length?this:((n=t)?1===n.length?n[0]:function(t){return n.reduce(function(t,n){return n(t)},t)}:st)(this)},r.prototype.toPromise=function(t){var e=this;return new(t=ft(t))(function(t,n){var r;e.subscribe(function(t){return r=t},function(t){return n(t)},function(){return t(r)})})},r.create=function(t){return new r(t)},r}();function ft(t){if(!(t=t||Promise))throw new Error("no Promise impl found");return t}function lt(n,r){return function(t){if("function"!=typeof n)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return t.lift(new pt(n,r))}}var pt=function(){function t(t,n){this.project=t,this.thisArg=n}return t.prototype.call=function(t,n){return n.subscribe(new ht(t,this.project,this.thisArg))},t}(),ht=function(o){function t(t,n,r){var e=o.call(this,t)||this;return e.project=n,e.count=0,e.thisArg=r||e,e}return z(t,o),t.prototype._next=function(t){var n;try{n=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(n)},t}(it),dt=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return z(n,t),n.prototype.notifyNext=function(t,n,r,e,o){this.destination.next(n)},n.prototype.notifyError=function(t,n){this.destination.error(t)},n.prototype.notifyComplete=function(t){this.destination.complete()},n}(it),yt=function(o){function t(t,n,r){var e=o.call(this)||this;return e.parent=t,e.outerValue=n,e.outerIndex=r,e.index=0,e}return z(t,o),t.prototype._next=function(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)},t.prototype._error=function(t){this.parent.notifyError(t,this),this.unsubscribe()},t.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},t}(it);function bt(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var vt=bt(),mt=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function wt(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}var gt=function(t){if(t&&"function"==typeof t[ct])return i=t,function(t){var n=i[ct]();if("function"!=typeof n.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return n.subscribe(t)};if(mt(t))return o=t,function(t){for(var n=0,r=o.length;n<r&&!t.closed;n++)t.next(o[n]);t.complete()};if(wt(t))return r=t,function(n){return r.then(function(t){n.closed||(n.next(t),n.complete())},function(t){return n.error(t)}).then(null,Q),n};if(t&&"function"==typeof t[vt])return e=t,function(t){for(var n=e[vt]();;){var r=n.next();if(r.done){t.complete();break}if(t.next(r.value),t.closed)break}return"function"==typeof n.return&&t.add(function(){n.return&&n.return()}),t};var e,r,o,i,n=tt(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+n+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};function _t(t,n,r,e,o){if(void 0===o&&(o=new yt(t,r,e)),!o.closed)return n instanceof at?n.subscribe(o):gt(n)(o)}function xt(t,n){if(null!=t){if((a=t)&&"function"==typeof a[ct])return c=t,s=n,new at(function(n){var r=new rt;return r.add(s.schedule(function(){var t=c[ct]();r.add(t.subscribe({next:function(t){r.add(s.schedule(function(){return n.next(t)}))},error:function(t){r.add(s.schedule(function(){return n.error(t)}))},complete:function(){r.add(s.schedule(function(){return n.complete()}))}}))})),r});if(wt(t))return i=t,u=n,new at(function(n){var r=new rt;return r.add(u.schedule(function(){return i.then(function(t){r.add(u.schedule(function(){n.next(t),r.add(u.schedule(function(){return n.complete()}))}))},function(t){r.add(u.schedule(function(){return n.error(t)}))})})),r});if(mt(t))return e=t,o=n,new at(function(t){var n=new rt,r=0;return n.add(o.schedule(function(){r!==e.length?(t.next(e[r++]),t.closed||n.add(this.schedule())):t.complete()})),n});if((r=t)&&"function"==typeof r[vt]||"string"==typeof t)return function(n,r){if(!n)throw new Error("Iterable cannot be null");return new at(function(e){var o,t=new rt;return t.add(function(){o&&"function"==typeof o.return&&o.return()}),t.add(r.schedule(function(){o=n[vt](),t.add(r.schedule(function(){if(!e.closed){var t,n;try{var r=o.next();t=r.value,n=r.done}catch(t){return void e.error(t)}n?e.complete():(e.next(t),this.schedule())}}))})),t})}(t,n)}var r,e,o,i,u,c,s,a;throw new TypeError((null!==t&&typeof t||t)+" is not observable")}function Et(o,i,n){return void 0===n&&(n=Number.POSITIVE_INFINITY),"function"==typeof i?function(t){return t.pipe(Et(function(r,e){return(t=o(r,e),n?xt(t,n):t instanceof at?t:new at(gt(t))).pipe(lt(function(t,n){return i(r,t,e,n)}));var t,n},n))}:("number"==typeof i&&(n=i),function(t){return t.lift(new St(o,n))})}var St=function(){function t(t,n){void 0===n&&(n=Number.POSITIVE_INFINITY),this.project=t,this.concurrent=n}return t.prototype.call=function(t,n){return n.subscribe(new kt(t,this.project,this.concurrent))},t}(),kt=function(o){function t(t,n,r){void 0===r&&(r=Number.POSITIVE_INFINITY);var e=o.call(this,t)||this;return e.project=n,e.concurrent=r,e.hasCompleted=!1,e.buffer=[],e.active=0,e.index=0,e}return z(t,o),t.prototype._next=function(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)},t.prototype._tryNext=function(t){var n,r=this.index++;try{n=this.project(t,r)}catch(t){return void this.destination.error(t)}this.active++,this._innerSub(n,t,r)},t.prototype._innerSub=function(t,n,r){var e=new yt(this,n,r),o=this.destination;o.add(e);var i=_t(this,t,void 0,void 0,e);i!==e&&o.add(i)},t.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()},t.prototype.notifyNext=function(t,n,r,e,o){this.destination.next(n)},t.prototype.notifyComplete=function(t){var n=this.buffer;this.remove(t),this.active--,0<n.length?this._next(n.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},t}(dt);function Tt(t,r,e,n){return G(e)&&(n=e,e=void 0),n?Tt(t,r,e).pipe(lt(function(t){return $(t)?n.apply(void 0,t):n(t)})):new at(function(n){!function t(n,r,e,o,i){var u;if(d=n,d&&"function"==typeof d.addEventListener&&"function"==typeof d.removeEventListener){var c=n;n.addEventListener(r,e,i),u=function(){return c.removeEventListener(r,e,i)}}else if(h=n,h&&"function"==typeof h.on&&"function"==typeof h.off){var s=n;n.on(r,e),u=function(){return s.off(r,e)}}else if(p=n,p&&"function"==typeof p.addListener&&"function"==typeof p.removeListener){var a=n;n.addListener(r,e),u=function(){return a.removeListener(r,e)}}else{if(!n||!n.length)throw new TypeError("Invalid event target");for(var f=0,l=n.length;f<l;f++)t(n[f],r,e,o,i)}var p;var h;var d;o.add(u)}(t,r,function(t){1<arguments.length?n.next(Array.prototype.slice.call(arguments)):n.next(t)},n,e)})}var Ot=function(){function t(t,n){this.predicate=t,this.thisArg=n}return t.prototype.call=function(t,n){return n.subscribe(new At(t,this.predicate,this.thisArg))},t}(),At=function(o){function t(t,n,r){var e=o.call(this,t)||this;return e.predicate=n,e.thisArg=r,e.count=0,e}return z(t,o),t.prototype._next=function(t){var n;try{n=this.predicate.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}n&&this.destination.next(t)},t}(it);function Pt(n){return function(t){return t.lift(new Dt(n))}}var Dt=function(){function t(t){this.notifier=t}return t.prototype.call=function(t,n){var r=new Lt(t),e=_t(r,this.notifier);return e&&!r.seenValue?(r.add(e),n.subscribe(r)):r},t}(),Lt=function(r){function t(t){var n=r.call(this,t)||this;return n.seenValue=!1,n}return z(t,r),t.prototype.notifyNext=function(t,n,r,e,o){this.seenValue=!0,this.complete()},t.prototype.notifyComplete=function(){},t}(dt);function Ct(n,r,e){return function(t){return t.lift(new jt(n,r,e))}}function Nt(t){return t+(new Date).getTime()}function It(t){Y(t),new Bt(t)}var jt=function(){function t(t,n,r){this.nextOrObserver=t,this.error=n,this.complete=r}return t.prototype.call=function(t,n){return n.subscribe(new Yt(t,this.nextOrObserver,this.error,this.complete))},t}(),Yt=function(i){function t(t,n,r,e){var o=i.call(this,t)||this;return o._tapNext=st,o._tapError=st,o._tapComplete=st,o._tapError=r||st,o._tapComplete=e||st,G(n)?(o._context=o)._tapNext=n:n&&(o._context=n,o._tapNext=n.next||st,o._tapError=n.error||st,o._tapComplete=n.complete||st),o}return z(t,i),t.prototype._next=function(t){try{this._tapNext.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.next(t)},t.prototype._error=function(t){try{this._tapError.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.error(t)},t.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(t){return void this.destination.error(t)}return this.destination.complete()},t}(it),Bt=function(){function n(t){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.canvas=document.querySelector(t),this.tempBlockList=[],this.currPathUUID=null,this.blockMouseDown=this.blockMouseDown.bind(this),this.handleTempBlcokDrag=this.handleTempBlcokDrag.bind(this),this.handlePointDrag=this.handlePointDrag.bind(this),this.draggableBlocks=a(document.querySelectorAll(".flow-block")),this.draggableBlocks.forEach(this.blockMouseDown)}var t,r,e;return t=n,(r=[{key:"blockMouseDown",value:function(t){var l,a=this,n=Tt(t,"mousedown").pipe(lt(function(t){return{startX:t.offsetX,startY:t.offsetY,original:t.target}}),Ct(function(t){var n,r,e,o,i=t.startX,u=t.startY,c=t.original.closest(".flow-block"),s=(n=c.cloneNode(!0),r=document.createElement("div"),e=document.createElement("span"),o=document.createElement("span"),r.classList.add("flow-block"),e.classList.add("flow-block-point","top"),o.classList.add("flow-block-point","bottom"),r.appendChild(e),r.appendChild(n),r.appendChild(o),{wrapper:r,topPoint:e,bottomPoint:o}).wrapper;l=s;var a=i-c.offsetLeft,f=u-c.offsetTop;s.classList.add("temp-block"),s.style.left=i-a+"px",s.style.top=u-f+"px",s.id=Nt("B"),document.body.appendChild(s)})),r=Tt(document,"mousemove"),i=Tt(document,"mouseup").pipe(Ct(function(){if(I(a.canvas,l)){var t=L(a.canvas),n=t.left,r=t.top;i=n,u=r,c=(o=l).style.left.replace("px",""),s=o.style.top.replace("px",""),o.style.left=c-i+"px",o.style.top=s-u+"px",l.parentNode.removeChild(l),a.canvas.appendChild(l);var e={id:l.id,element:l,children:[],parents:[]};a.tempBlockList.push(e),a.handleTempBlcokDrag(e),a.handlePointDrag(e)}else l.parentNode.removeChild(l);var o,i,u,c,s}));n.pipe(Et(function(t){var e=t.startX,o=t.startY;return r.pipe(lt(function(t){var n=t.clientX,r=t.clientY;return{left:n-e,top:r-o}}),Pt(i))})).subscribe(function(t){l.style.top=t.top+"px",l.style.left=t.left+"px"})}},{key:"handleTempBlcokDrag",value:function(t){var n,r,c=this,s=t.element,a=(t.id,t.parents),f=t.children,e=Tt(s,"mousedown"),i=Tt(document,"mouseup"),u=Tt(document,"mousemove");e.pipe((n=function(t){return!t.target.classList.contains("flow-block-point")},function(t){return t.lift(new Ot(n,r))}),Et(function(t){var e=t.offsetX,o=t.offsetY;return u.pipe(lt(function(t){var n=t.clientX,r=t.clientY;return{left:n-e,top:r-o}}),Ct(function(t){var e=t.left,o=t.top,n=L(c.canvas),i=n.left,u=n.top;a.forEach(function(t){var n=s.offsetWidth;s.offsetHeight;t.to=[e+n/2-i,o-u],U(t.id,t.from[0],t.from[1],e+n/2-i,o-u)}),f.forEach(function(t){var n=s.offsetWidth,r=s.offsetHeight;t.from=[e+n/2-i,o+r-u],U(t.id,e+n/2-i,o+r-u,t.to[0],t.to[1])})}),Pt(i))})).subscribe(function(t){var n=t.top,r=t.left,e=L(c.canvas),o=e.left,i=e.top;s.style.left=r-o+"px",s.style.top=n-i+"px"})}},{key:"handlePointDrag",value:function(t){var d=this,y=t.element,b=y.querySelector(".bottom"),n=Tt(b,"mousedown"),r=Tt(document,"mouseup").pipe(Ct(function(t){for(var n,r,e,o,i=j(b),u=i.x,c=i.y,s=L(d.canvas),a=s.left,f=s.top,l=!1,p=0;p<d.tempBlockList.length;p++){var h=j(d.tempBlockList[p].element.querySelector(".top"));if((n=t.clientX,r=t.clientY,e=h.x,o=h.y,Math.hypot(n-e,r-o))<50)if("break"===function(){U(d.currPathUUID,u-a,c-f,h.x-a,h.y-f),l=!0;var n={from:[u-a,c-f],to:[h.x-a,h.y-f],id:d.currPathUUID};return d.tempBlockList[p].parents.push(n),d.tempBlockList.forEach(function(t){t.element===y&&t.children.push(n)}),console.log(d.tempBlockList),"break"}())break}l||q(d.currPathUUID)})),u=Tt(document,"mousemove");n.pipe(lt(function(t){var n=t.offsetX,r=t.offsetY;return d.currPathUUID=Nt("L"),{offsetX:n,offsetY:r,id:d.currPathUUID}}),Et(function(t){var e=t.offsetX,o=t.offsetY,i=t.id;return u.pipe(lt(function(t){var n=t.clientX,r=t.clientY;return{left:n-e,top:r-o,id:i}}),Pt(r))})).subscribe(function(t){var n=t.top,r=t.left,e=t.id,o=L(d.canvas),i=o.left,u=o.top,c=j(b),s=c.x,a=c.y;U(e,s-i,a-u,r-i,n-u)})}}])&&o(t.prototype,r),e&&o(t,e),n}(),Ut={initSVG:Y,drowBezierCurve:U,deleteLine:q,Drag:Bt,initFlowy:It};t.default=Ut,t.initFlowy=It,Object.defineProperty(t,"__esModule",{value:!0})});
