(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("csharp"), require("puerts"));
	else if(typeof define === 'function' && define.amd)
		define(["csharp", "puerts"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("csharp"), require("puerts")) : factory(root["csharp"], root["puerts"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function(__WEBPACK_EXTERNAL_MODULE_csharp__, __WEBPACK_EXTERNAL_MODULE_puerts__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/addons/webapi/index.unity.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/requires-port/index.js":
/*!*********************************************!*\
  !*** ./node_modules/requires-port/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),

/***/ "./src/addons/webapi/animationframe.ts":
/*!*********************************************!*\
  !*** ./src/addons/webapi/animationframe.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let actions = [];
let global_action_id = 0;
function cancelAnimationFrame(handle) {
    actions = actions.filter(a => a.id !== handle);
}
function requestAnimationFrame(callback) {
    let action = {
        callback,
        id: ++global_action_id,
    };
    actions.push(action);
    return action.id;
}
function tick(now) {
    for (const action of actions) {
        action.callback(now);
    }
}
/* harmony default export */ __webpack_exports__["default"] = ({
    tick,
    exports: {
        requestAnimationFrame,
        cancelAnimationFrame
    }
});


/***/ }),

/***/ "./src/addons/webapi/console.unity.ts":
/*!********************************************!*\
  !*** ./src/addons/webapi/console.unity.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! puerts */ "puerts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(puerts__WEBPACK_IMPORTED_MODULE_1__);


var LogType;
(function (LogType) {
    LogType[LogType["Error"] = 0] = "Error";
    LogType[LogType["Assert"] = 1] = "Assert";
    LogType[LogType["Warning"] = 2] = "Warning";
    LogType[LogType["Log"] = 3] = "Log";
    LogType[LogType["Exception"] = 4] = "Exception";
})(LogType || (LogType = {}));
const scriptResources = new Map();
const emptyResources = new csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].Object();
const isUnityEditor = csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].Application.isEditor;
function print(type, showStack, ...args) {
    let message = '';
    for (let i = 0; i < args.length; i++) {
        const element = args[i];
        if (typeof element === 'object' && console.LOG_OBJECT_TO_JSON) {
            message += JSON.stringify(element);
        }
        else {
            message += element;
        }
        if (i < args.length - 1) {
            message += ' ';
        }
    }
    let unityLogTarget = null;
    if (showStack || csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].Application.isEditor) {
        var stacks = new Error().stack.split('\n');
        for (let i = 3; i < stacks.length; i++) {
            let line = stacks[i];
            message += '\n';
            if (isUnityEditor) {
                const matches = line.match(/at\s.*?\s\((.*?)\:(\d+)/);
                if (matches && matches.length >= 3) {
                    let file = matches[1].replace(/\\/g, '/');
                    file = file.replace(/.*\/Assets\//, 'Assets/');
                    const lineNumber = matches[2];
                    line = line.replace(/\s\(/, ` (<a href="${file}" line="${lineNumber}">`);
                    line = line.replace(/\)$/, ' </a>)');
                    if (!unityLogTarget) {
                        if (!scriptResources.has(file)) {
                            scriptResources.set(file, csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEditor"].AssetDatabase.LoadAssetAtPath(file, Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].Object)));
                        }
                        unityLogTarget = scriptResources.get(file);
                    }
                }
            }
            message += line;
        }
    }
    message = message.replace(/{/gm, '{{');
    message = message.replace(/}/gm, '}}');
    csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].Debug.LogFormat(type, csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].LogOption.NoStacktrace, unityLogTarget || emptyResources, message);
}
const ConsoleObject = {
    log: (...args) => print(LogType.Log, false, ...args),
    info: (...args) => print(LogType.Log, true, ...args),
    trace: (...args) => print(LogType.Log, true, ...args),
    warn: (...args) => print(LogType.Warning, true, ...args),
    error: (...args) => print(LogType.Error, true, ...args),
    LOG_OBJECT_TO_JSON: false,
};
if (typeof (console) === 'undefined') {
    Object.defineProperty(globalThis, 'console', {
        value: ConsoleObject,
        enumerable: true,
        configurable: true,
        writable: false
    });
}
else {
    let globalConsole = globalThis['console'];
    for (const key in ConsoleObject) {
        Object.defineProperty(globalConsole, key, { value: ConsoleObject[key], enumerable: true, configurable: true, writable: typeof (ConsoleObject[key]) !== 'function' });
    }
}


/***/ }),

/***/ "./src/addons/webapi/event.ts":
/*!************************************!*\
  !*** ./src/addons/webapi/event.ts ***!
  \************************************/
/*! exports provided: Phase, Event, ProgressEvent, EventTarget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phase", function() { return Phase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressEvent", function() { return ProgressEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTarget", function() { return EventTarget; });
/** Evaluation phase of the event flow */
var Phase;
(function (Phase) {
    /** No event is being processed at this time. */
    Phase[Phase["NONE"] = 0] = "NONE";
    /** The event is being propagated through the target's ancestor objects. */
    Phase[Phase["CAPTURING_PHASE"] = 1] = "CAPTURING_PHASE";
    /** The event has arrived at the event's target. Event listeners registered for this phase are called at this time. If Event.bubbles is false, processing the event is finished after this phase is complete. */
    Phase[Phase["AT_TARGET"] = 2] = "AT_TARGET";
    /** The event is propagating back up through the target's ancestors in reverse order, starting with the parent, and eventually reaching the containing Window. This is known as bubbling, and occurs only if Event.bubbles is true. Event listeners registered for this phase are triggered during this process. */
    Phase[Phase["BUBBLING_PHASE"] = 3] = "BUBBLING_PHASE";
})(Phase || (Phase = {}));
/**
 * The Event interface represents an event which takes place in the DOM.
 *
 * An event can be triggered by the user action e.g. clicking the mouse button or tapping keyboard, or generated by APIs to represent the progress of an asynchronous task. It can also be triggered programmatically, such as by calling the HTMLElement.click() method of an element, or by defining the event, then sending it to a specified target using EventTarget.dispatchEvent().
 *
 * There are many types of events, some of which use other interfaces based on the main Event interface. Event itself contains the properties and methods which are common to all events.
 *
 * Many DOM elements can be set up to accept (or "listen" for) these events, and execute code in response to process (or "handle") them. Event-handlers are usually connected (or "attached") to various HTML elements (such as <button>, <div>, <span>, etc.) using EventTarget.addEventListener(), and this generally replaces using the old HTML event handler attributes. Further, when properly added, such handlers can also be disconnected if needed using removeEventListener().
 */
class Event {
    constructor(type, eventInitDict) {
        this._type = type;
        if (eventInitDict) {
            this._bubbles = eventInitDict.bubbles;
            this._cancelable = eventInitDict.cancelable;
            this._composed = eventInitDict.composed;
        }
    }
    /**
     * Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.
     */
    get bubbles() { return this._bubbles; }
    /**
     * Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.
     */
    get cancelable() { return this._cancelable; }
    /**
     * Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.
     */
    get composed() { return this._composed; }
    /**
     * Returns the object whose event listener's callback is currently being invoked.
     */
    get currentTarget() { return this._currentTarget; }
    /**
     * Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.
     */
    get defaultPrevented() { return this._defaultPrevented; }
    /**
     * Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.
     */
    get eventPhase() { return this._eventPhase; }
    /**
     * Returns true if event was dispatched by the user agent, and false otherwise.
     */
    get isTrusted() { return this._isTrusted; }
    /**
     * Returns the object to which event is dispatched (its target).
     */
    get target() { return this._target; }
    /**
     * Returns the event's timestamp as the number of milliseconds measured relative to the time origin.
     */
    get timeStamp() { return this._timeStamp; }
    /**
     * Returns the type of event, e.g. "click", "hashchange", or "submit".
     */
    get type() { return this._type; }
    /**
     * Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.
     */
    composedPath() {
        return [];
    }
    initEvent(type, bubbles, cancelable) {
        this._type = type;
        this._bubbles = bubbles;
        this._cancelable = cancelable;
    }
    /**
     * If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.
     */
    preventDefault() {
        if (this.cancelable) {
            this._defaultPrevented = true;
        }
    }
    /**
     * Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.
     */
    stopImmediatePropagation() {
        this._defaultPrevented = true;
        this.cancelBubble = false;
    }
    /**
     * When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.
     */
    stopPropagation() {
        if (this._bubbles) {
            this.cancelBubble = true;
        }
    }
}
/** Events measuring progress of an underlying process, like an HTTP request (for an XMLHttpRequest, or the loading of the underlying resource of an <img>, <audio>, <video>, <style> or <link>). */
class ProgressEvent extends Event {
    constructor(type, eventInitDict) {
        super(type, eventInitDict);
        if (eventInitDict) {
            this._lengthComputable = eventInitDict.lengthComputable;
            this._loaded = eventInitDict.loaded;
            this._total = eventInitDict.total;
        }
    }
    get lengthComputable() { return this._lengthComputable; }
    get loaded() { return this._loaded; }
    get total() { return this._total; }
}
class EventTarget {
    constructor() {
        this._listeners = {};
    }
    /**
     * Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.
     *
     * The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.
     *
     * When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.
     *
     * When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.
     *
     * When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.
     *
     * The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.
     */
    addEventListener(type, listener, options) {
        if (!listener)
            return;
        if (!(type in this._listeners)) {
            this._listeners[type] = [];
        }
        let recorder = { listener };
        if (typeof options === "boolean") {
            recorder.capture = options;
        }
        else if (typeof options === 'object') {
            recorder = { ...options, listener };
        }
        this._listeners[type].push(recorder);
    }
    /**
     * Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
     */
    dispatchEvent(event) {
        if (!event || typeof event.type != 'string')
            return true;
        const origin_recorders = this._listeners[event.type];
        if (!origin_recorders)
            return true;
        const recorders = origin_recorders.slice();
        if (!recorders.length)
            return !event.defaultPrevented;
        event['_target'] = this;
        let once_listeners = [];
        for (const recorder of recorders) {
            let listener = null;
            if (recorder.listener.handleEvent) {
                listener = recorder.listener.handleEvent;
            }
            else {
                listener = recorder.listener;
            }
            if (typeof listener === 'function') {
                listener.call(this, event);
                if (recorder.once) {
                    once_listeners.push(recorder);
                }
            }
            if (event.defaultPrevented)
                break;
        }
        for (let i = 0; i < once_listeners.length; i++) {
            origin_recorders.splice(origin_recorders.indexOf(once_listeners[i]), 1);
        }
        return !event.defaultPrevented;
    }
    /**
     * Removes the event listener in target's event listener list with the same type, callback, and options.
     */
    removeEventListener(type, listener, options) {
        if (!listener || !(type in this._listeners))
            return;
        const recorders = this._listeners[type];
        for (let i = 0; i < recorders.length; i++) {
            const recorder = recorders[i];
            if (recorder.listener === listener) {
                let sameOptions = true;
                if (typeof options === "boolean") {
                    sameOptions = recorder.capture == options;
                }
                else if (typeof options === 'object') {
                    sameOptions = recorder.capture == options.capture;
                }
                if (sameOptions) {
                    recorders.splice(i, 1);
                    break;
                }
            }
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = ({
    exports: {
        Phase,
        Event,
        ProgressEvent,
        EventTarget
    }
});


/***/ }),

/***/ "./src/addons/webapi/index.common.ts":
/*!*******************************************!*\
  !*** ./src/addons/webapi/index.common.ts ***!
  \*******************************************/
/*! exports provided: initialize, finalize, tick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finalize", function() { return finalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return tick; });
let registered_modules = [];
function initialize(modules) {
    Object.defineProperty(globalThis, 'window', { value: globalThis });
    for (const m of modules) {
        if (m.initialize)
            m.initialize();
        if (!m.exports)
            continue;
        for (const key in m.exports) {
            Object.defineProperty(window, key, { value: m.exports[key] });
        }
    }
    registered_modules = modules;
}
function finalize() {
    for (const m of registered_modules) {
        if (m.uninitialize)
            m.uninitialize();
    }
}
function tick() {
    for (const m of registered_modules) {
        if (m.tick && WebAPI.getHighResTimeStamp) {
            m.tick(WebAPI.getHighResTimeStamp());
        }
    }
}
Object.defineProperty(globalThis, "WebAPI", { value: {
        tick,
        finalize,
        getHighResTimeStamp: Date.now,
    } });


/***/ }),

/***/ "./src/addons/webapi/index.unity.ts":
/*!******************************************!*\
  !*** ./src/addons/webapi/index.unity.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _console_unity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./console.unity */ "./src/addons/webapi/console.unity.ts");
/* harmony import */ var _animationframe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animationframe */ "./src/addons/webapi/animationframe.ts");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event */ "./src/addons/webapi/event.ts");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer */ "./src/addons/webapi/timer.ts");
/* harmony import */ var _performance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./performance */ "./src/addons/webapi/performance.ts");
/* harmony import */ var _misc_unity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./misc.unity */ "./src/addons/webapi/misc.unity.ts");
/* harmony import */ var _storage_unity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage.unity */ "./src/addons/webapi/storage.unity.ts");
/* harmony import */ var _xhr_xhr_unity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./xhr/xhr.unity */ "./src/addons/webapi/xhr/xhr.unity.ts");
/* harmony import */ var _index_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.common */ "./src/addons/webapi/index.common.ts");









Object(_index_common__WEBPACK_IMPORTED_MODULE_8__["initialize"])([
    _animationframe__WEBPACK_IMPORTED_MODULE_1__["default"],
    _event__WEBPACK_IMPORTED_MODULE_2__["default"],
    _timer__WEBPACK_IMPORTED_MODULE_3__["default"],
    _performance__WEBPACK_IMPORTED_MODULE_4__["default"],
    _misc_unity__WEBPACK_IMPORTED_MODULE_5__["default"],
    _storage_unity__WEBPACK_IMPORTED_MODULE_6__["default"],
    _xhr_xhr_unity__WEBPACK_IMPORTED_MODULE_7__["default"],
]);
/* harmony default export */ __webpack_exports__["default"] = (window);


/***/ }),

/***/ "./src/addons/webapi/misc.unity.ts":
/*!*****************************************!*\
  !*** ./src/addons/webapi/misc.unity.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_0__);

Object.setPrototypeOf(csharp__WEBPACK_IMPORTED_MODULE_0__["System"].Text.Encoding.UTF8, csharp__WEBPACK_IMPORTED_MODULE_0__["System"].Text.Encoding.prototype);
Object.setPrototypeOf(csharp__WEBPACK_IMPORTED_MODULE_0__["System"].Text.Encoding.ASCII, csharp__WEBPACK_IMPORTED_MODULE_0__["System"].Text.Encoding.prototype);
function btoa(text) {
    return csharp__WEBPACK_IMPORTED_MODULE_0__["System"].Convert.ToBase64String(csharp__WEBPACK_IMPORTED_MODULE_0__["System"].Text.Encoding.UTF8.GetBytes(text));
}
function atob(base64) {
    let data = csharp__WEBPACK_IMPORTED_MODULE_0__["System"].Convert.FromBase64String(base64);
    let base64Decoded = csharp__WEBPACK_IMPORTED_MODULE_0__["System"].Text.Encoding.ASCII.GetString(data);
    return base64Decoded;
}
/* harmony default export */ __webpack_exports__["default"] = ({
    exports: {
        atob,
        btoa
    }
});


/***/ }),

/***/ "./src/addons/webapi/performance.ts":
/*!******************************************!*\
  !*** ./src/addons/webapi/performance.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ "./src/addons/webapi/event.ts");

/** Encapsulates a single performance metric that is part of the performance timeline. A performance entry can be directly created by making a performance mark or measure (for example by calling the mark() method) at an explicit point in an application. Performance entries are also created in indirect ways such as loading a resource (such as an image). */
class PerformanceEntry {
    constructor(name, startTime, entryType, duration = 0) {
        this.startTime = startTime;
        this.name = name;
        this.entryType = entryType;
        this.duration = duration;
    }
    toJSON() {
        return {
            duration: this.duration,
            entryType: this.entryType,
            name: this.name,
            startTime: this.startTime,
        };
    }
    ;
}
class PerformanceMark extends PerformanceEntry {
}
class PerformanceMeasure extends PerformanceEntry {
}
const MARK_TYPE = "mark";
const MEASURE_TYPE = "measure";
class Performance extends _event__WEBPACK_IMPORTED_MODULE_0__["EventTarget"] {
    constructor() {
        super();
        this._entries = new Map();
        this.timeOrigin = Date.now();
    }
    now() {
        return Date.now() - this.timeOrigin;
    }
    getEntries() {
        let ret = [];
        for (const [type, list] of this._entries) {
            ret = ret.concat(list);
        }
        return ret;
    }
    getEntriesByName(name, type) {
        let ret = [];
        for (const [entryType, list] of this._entries) {
            if (type && type != entryType)
                continue;
            list.map(e => {
                if (e.name == name) {
                    ret.push(e);
                }
            });
        }
        return ret;
    }
    getEntriesByType(type) {
        return this._entries.get(type);
    }
    mark(markName) {
        const mark = new PerformanceMark(markName, this.now(), MARK_TYPE);
        let marks = this._entries.get(MARK_TYPE);
        if (!marks) {
            marks = [mark];
            this._entries.set(MARK_TYPE, marks);
        }
        else {
            marks.push(mark);
        }
        return mark;
    }
    measure(measureName, startMark, endMark) {
        let starts = this.getEntriesByName(startMark, MARK_TYPE);
        if (starts.length == 0)
            throw new Error(`The mark '${startMark}' does not exist.`);
        let ends = this.getEntriesByName(endMark, MARK_TYPE);
        if (ends.length == 0)
            throw new Error(`The mark '${endMark}' does not exist.`);
        const start = starts[starts.length - 1];
        const end = ends[ends.length - 1];
        const measure = new PerformanceMeasure(measureName, start.startTime, MEASURE_TYPE, end.startTime - start.startTime);
        let measures = this._entries.get(MEASURE_TYPE);
        if (!measures) {
            measures = [measure];
            this._entries.set(MEASURE_TYPE, measures);
        }
        else {
            measures.push(measure);
        }
        return measure;
    }
    clearMarks(markName) {
        let marks = this._entries.get(MARK_TYPE);
        if (marks) {
            marks = marks.filter(m => m.name === markName);
            this._entries.set(MARK_TYPE, marks);
        }
    }
    clearMeasures(measureName) {
        let measures = this._entries.get(MARK_TYPE);
        if (measures) {
            measures = measures.filter(m => m.name === measureName);
            this._entries.set(MEASURE_TYPE, measures);
        }
    }
    toJSON() {
        return {
            timeOrigin: this.timeOrigin,
        };
    }
}
;
/* harmony default export */ __webpack_exports__["default"] = ({
    exports: {
        Performance,
        PerformanceEntry,
        PerformanceMark,
        PerformanceMeasure,
        performance: new Performance()
    }
});


/***/ }),

/***/ "./src/addons/webapi/storage.ts":
/*!**************************************!*\
  !*** ./src/addons/webapi/storage.ts ***!
  \**************************************/
/*! exports provided: Storage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage; });
class Storage {
    constructor() {
        this._items = [];
    }
    /**
     * Returns the number of key/value pairs currently present in the list associated with the object.
     */
    get length() { return this._items.length; }
    /**
     * Empties the list associated with the object of all key/value pairs, if there are any.
     */
    clear() {
        this._items = [];
        this.flush();
    }
    /**
     * Returns the current value associated with the given key, or null if the given key does not exist in the list associated with the object.
     */
    getItem(key) {
        for (const item of this._items) {
            if (item.key === key)
                return item.value;
        }
        return null;
    }
    /**
     * Returns the name of the nth key in the list, or null if n is greater than or equal to the number of key/value pairs in the object.
     */
    key(index) {
        for (let i = 0; i < this._items.length; i++) {
            if (i === index)
                return this._items[i].key;
        }
        return null;
    }
    /**
     * Removes the key/value pair with the given key from the list associated with the object, if a key/value pair with the given key exists.
     */
    removeItem(key) {
        let idx = -1;
        for (let i = 0; i < this._items.length; i++) {
            if (this._items[i].key === key) {
                idx = i;
                break;
            }
        }
        if (idx != -1) {
            this._items.splice(idx, 1);
            this.flush();
        }
    }
    /**
     * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
     *
     * Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)
     */
    setItem(key, value) {
        let idx = -1;
        for (let i = 0; i < this._items.length; i++) {
            if (this._items[i].key === key) {
                idx = i;
                break;
            }
        }
        if (idx != -1) {
            if (this._items[idx].value != value) {
                this._items[idx].value = value;
                this.flush();
            }
        }
        else {
            this._items.push({ key, value });
            this.flush();
        }
    }
    flush() { }
}
/* harmony default export */ __webpack_exports__["default"] = ({
    exports: {
        Storage,
        sessionStorage: new Storage(),
    }
});


/***/ }),

/***/ "./src/addons/webapi/storage.unity.ts":
/*!********************************************!*\
  !*** ./src/addons/webapi/storage.unity.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/addons/webapi/storage.ts");
// @ts-nocheck


class LocalStorage extends _storage__WEBPACK_IMPORTED_MODULE_1__["Storage"] {
    constructor(file = `${csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].Application.persistentDataPath}/webapi/localStorage.json`) {
        super();
        this.$file = file;
        this.$directory = csharp__WEBPACK_IMPORTED_MODULE_0__["System"].IO.Path.GetDirectoryName(this.$file);
        if (csharp__WEBPACK_IMPORTED_MODULE_0__["System"].IO.File.Exists(file)) {
            try {
                const stream = new csharp__WEBPACK_IMPORTED_MODULE_0__["System"].IO.StreamReader(file);
                const text = stream.ReadToEnd();
                this._items = JSON.parse(text);
            }
            catch (error) {
                throw new Error("Cannot open storage file " + file);
            }
        }
    }
    flush() {
        if (!csharp__WEBPACK_IMPORTED_MODULE_0__["System"].IO.File.Exists(this.$directory)) {
            csharp__WEBPACK_IMPORTED_MODULE_0__["System"].IO.Directory.CreateDirectory(this.$directory);
        }
        const stream = new csharp__WEBPACK_IMPORTED_MODULE_0__["System"].IO.StreamWriter(this.$file);
        if (stream) {
            let text = JSON.stringify(this._items, undefined, '\t');
            stream.Write(text);
            stream.Flush();
            stream.Dispose();
        }
        else {
            throw new Error("Cannot open storage file " + this.$file);
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = ({
    exports: {
        Storage: _storage__WEBPACK_IMPORTED_MODULE_1__["Storage"],
        sessionStorage: new _storage__WEBPACK_IMPORTED_MODULE_1__["Storage"](),
        localStorage: new LocalStorage(),
    }
});


/***/ }),

/***/ "./src/addons/webapi/timer.ts":
/*!************************************!*\
  !*** ./src/addons/webapi/timer.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let global_timer_id = 0;
const pending_timers = new Map();
const processing_timers = new Map();
const removing_timers = new Set();
function timer_loop() {
    const now = WebAPI.getHighResTimeStamp();
    for (const [id, timer] of pending_timers) {
        processing_timers.set(id, timer);
    }
    pending_timers.clear();
    for (const id of removing_timers) {
        processing_timers.delete(id);
    }
    removing_timers.clear();
    for (const [id, timer] of processing_timers) {
        if (timer.next_time <= now) {
            try {
                if (timer.handler)
                    timer.handler.apply(null, timer.args);
            }
            catch (error) {
                console.error(`Error in timer handler: ${error.message}\n${error.stack}`);
            }
            if (timer.oneshot) {
                removing_timers.add(id);
            }
            else {
                timer.next_time = now + timer.timeout;
            }
        }
    }
}
function make_timer(handler, timeout, ...args) {
    return {
        handler,
        timeout,
        next_time: WebAPI.getHighResTimeStamp() + (timeout || 0),
        args
    };
}
function pend_timer(timer) {
    pending_timers.set(++global_timer_id, timer);
    return global_timer_id;
}
function setTimeout(handler, timeout, ...args) {
    const timer = make_timer(handler, timeout, ...args);
    timer.oneshot = true;
    return pend_timer(timer);
}
function clearTimeout(handle) {
    removing_timers.add(handle);
}
function setInterval(handler, timeout, ...args) {
    return pend_timer(make_timer(handler, timeout, ...args));
}
function clearInterval(handle) {
    removing_timers.add(handle);
}
let timer_loop_id = 0;
/* harmony default export */ __webpack_exports__["default"] = ({
    initialize() {
        timer_loop_id = requestAnimationFrame(timer_loop);
    },
    uninitialize() {
        cancelAnimationFrame(timer_loop_id);
    },
    exports: {
        setTimeout,
        clearTimeout,
        setInterval,
        clearInterval,
    }
});


/***/ }),

/***/ "./src/addons/webapi/xhr/thirdpart/mimetype/mime-type.js":
/*!***************************************************************!*\
  !*** ./src/addons/webapi/xhr/thirdpart/mimetype/mime-type.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MIMEType; });
/* harmony import */ var _parser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser.js */ "./src/addons/webapi/xhr/thirdpart/mimetype/parser.js");
/* harmony import */ var _serializer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serializer.js */ "./src/addons/webapi/xhr/thirdpart/mimetype/serializer.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/addons/webapi/xhr/thirdpart/mimetype/utils.js");
// Copyright © 2017–2018 Domenic Denicola <d@domenic.me>
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.






class MIMEType {
	constructor(string) {
		string = String(string);
		const result = Object(_parser_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string);
		if (result === null) {
			throw new Error(`Could not parse MIME type string "${string}"`);
		}

		this._type = result.type;
		this._subtype = result.subtype;
		this._parameters = new MIMETypeParameters(result.parameters);
	}

	static parse(string) {
		try {
			return new this(string);
		} catch (e) {
			return null;
		}
	}

	get essence() {
		return `${this.type}/${this.subtype}`;
	}

	get type() {
		return this._type;
	}

	set type(value) {
		value = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["asciiLowercase"])(String(value));

		if (value.length === 0) {
			throw new Error("Invalid type: must be a non-empty string");
		}
		if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["solelyContainsHTTPTokenCodePoints"])(value)) {
			throw new Error(`Invalid type ${value}: must contain only HTTP token code points`);
		}

		this._type = value;
	}

	get subtype() {
		return this._subtype;
	}

	set subtype(value) {
		value = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["asciiLowercase"])(String(value));

		if (value.length === 0) {
			throw new Error("Invalid subtype: must be a non-empty string");
		}
		if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["solelyContainsHTTPTokenCodePoints"])(value)) {
			throw new Error(`Invalid subtype ${value}: must contain only HTTP token code points`);
		}

		this._subtype = value;
	}

	get parameters() {
		return this._parameters;
	}

	toString() {
		// The serialize function works on both "MIME type records" (i.e. the results of parse) and on this class, since
		// this class's interface is identical.
		return Object(_serializer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this);
	}

	isJavaScript({
		allowParameters = false
	} = {}) {
		switch (this._type) {
			case "text": {
				switch (this._subtype) {
					case "ecmascript":
					case "javascript":
					case "javascript1.0":
					case "javascript1.1":
					case "javascript1.2":
					case "javascript1.3":
					case "javascript1.4":
					case "javascript1.5":
					case "jscript":
					case "livescript":
					case "x-ecmascript":
					case "x-javascript": {
						return allowParameters || this._parameters.size === 0;
					}
					default: {
						return false;
					}
				}
			}
			case "application": {
				switch (this._subtype) {
					case "ecmascript":
					case "javascript":
					case "x-ecmascript":
					case "x-javascript": {
						return allowParameters || this._parameters.size === 0;
					}
					default: {
						return false;
					}
				}
			}
			default: {
				return false;
			}
		}
	}
	isXML() {
		return (this._subtype === "xml" && (this._type === "text" || this._type === "application")) ||
			this._subtype.endsWith("+xml");
	}
	isHTML() {
		return this._subtype === "html" && this._type === "text";
	}
};

class MIMETypeParameters {
	constructor(map) {
		this._map = map;
	}

	get size() {
		return this._map.size;
	}

	get(name) {
		name = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["asciiLowercase"])(String(name));
		return this._map.get(name);
	}

	has(name) {
		name = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["asciiLowercase"])(String(name));
		return this._map.has(name);
	}

	set(name, value) {
		name = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["asciiLowercase"])(String(name));
		value = String(value);

		if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["solelyContainsHTTPTokenCodePoints"])(name)) {
			throw new Error(`Invalid MIME type parameter name "${name}": only HTTP token code points are valid.`);
		}
		if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["soleyContainsHTTPQuotedStringTokenCodePoints"])(value)) {
			throw new Error(`Invalid MIME type parameter value "${value}": only HTTP quoted-string token code points are ` +
				`valid.`);
		}

		return this._map.set(name, value);
	}

	clear() {
		this._map.clear();
	}

	delete(name) {
		name = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["asciiLowercase"])(String(name));
		return this._map.delete(name);
	}

	forEach(callbackFn, thisArg) {
		this._map.forEach(callbackFn, thisArg);
	}

	keys() {
		return this._map.keys();
	}

	values() {
		return this._map.values();
	}

	entries() {
		return this._map.entries();
	}

	[Symbol.iterator]() {
		return this._map[Symbol.iterator]();
	}
}


/***/ }),

/***/ "./src/addons/webapi/xhr/thirdpart/mimetype/parser.js":
/*!************************************************************!*\
  !*** ./src/addons/webapi/xhr/thirdpart/mimetype/parser.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/addons/webapi/xhr/thirdpart/mimetype/utils.js");
// Copyright © 2017–2018 Domenic Denicola <d@domenic.me>
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



/* harmony default export */ __webpack_exports__["default"] = (input => {
	input = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["removeLeadingAndTrailingHTTPWhitespace"])(input);

	let position = 0;
	let type = "";
	while (position < input.length && input[position] !== "/") {
		type += input[position];
		++position;
	}

	if (type.length === 0 || !Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["solelyContainsHTTPTokenCodePoints"])(type)) {
		return null;
	}

	if (position >= input.length) {
		return null;
	}

	// Skips past "/"
	++position;

	let subtype = "";
	while (position < input.length && input[position] !== ";") {
		subtype += input[position];
		++position;
	}

	subtype = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["removeTrailingHTTPWhitespace"])(subtype);

	if (subtype.length === 0 || !Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["solelyContainsHTTPTokenCodePoints"])(subtype)) {
		return null;
	}

	const mimeType = {
		type: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["asciiLowercase"])(type),
		subtype: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["asciiLowercase"])(subtype),
		parameters: new Map()
	};

	while (position < input.length) {
		// Skip past ";"
		++position;

		while (Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["isHTTPWhitespaceChar"])(input[position])) {
			++position;
		}

		let parameterName = "";
		while (position < input.length && input[position] !== ";" && input[position] !== "=") {
			parameterName += input[position];
			++position;
		}
		parameterName = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["asciiLowercase"])(parameterName);

		if (position < input.length) {
			if (input[position] === ";") {
				continue;
			}

			// Skip past "="
			++position;
		}

		let parameterValue = null;
		if (input[position] === "\"") {
			[parameterValue, position] = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["collectAnHTTPQuotedString"])(input, position);

			while (position < input.length && input[position] !== ";") {
				++position;
			}
		} else {
			parameterValue = "";
			while (position < input.length && input[position] !== ";") {
				parameterValue += input[position];
				++position;
			}

			parameterValue = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["removeTrailingHTTPWhitespace"])(parameterValue);

			if (parameterValue === "") {
				continue;
			}
		}

		if (parameterName.length > 0 &&
			Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["solelyContainsHTTPTokenCodePoints"])(parameterName) &&
			Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["soleyContainsHTTPQuotedStringTokenCodePoints"])(parameterValue) &&
			!mimeType.parameters.has(parameterName)) {
			mimeType.parameters.set(parameterName, parameterValue);
		}
	}

	return mimeType;
});


/***/ }),

/***/ "./src/addons/webapi/xhr/thirdpart/mimetype/serializer.js":
/*!****************************************************************!*\
  !*** ./src/addons/webapi/xhr/thirdpart/mimetype/serializer.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/addons/webapi/xhr/thirdpart/mimetype/utils.js");
// Copyright © 2017–2018 Domenic Denicola <d@domenic.me>
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



/* harmony default export */ __webpack_exports__["default"] = (mimeType => {
	let serialization = `${mimeType.type}/${mimeType.subtype}`;

	if (mimeType.parameters.size === 0) {
		return serialization;
	}

	for (let [name, value] of mimeType.parameters) {
		serialization += ";";
		serialization += name;
		serialization += "=";

		if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["solelyContainsHTTPTokenCodePoints"])(value) || value.length === 0) {
			value = value.replace(/(["\\])/g, "\\$1");
			value = `"${value}"`;
		}

		serialization += value;
	}

	return serialization;
});


/***/ }),

/***/ "./src/addons/webapi/xhr/thirdpart/mimetype/utils.js":
/*!***********************************************************!*\
  !*** ./src/addons/webapi/xhr/thirdpart/mimetype/utils.js ***!
  \***********************************************************/
/*! exports provided: removeLeadingAndTrailingHTTPWhitespace, removeTrailingHTTPWhitespace, isHTTPWhitespaceChar, solelyContainsHTTPTokenCodePoints, soleyContainsHTTPQuotedStringTokenCodePoints, asciiLowercase, collectAnHTTPQuotedString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLeadingAndTrailingHTTPWhitespace", function() { return removeLeadingAndTrailingHTTPWhitespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTrailingHTTPWhitespace", function() { return removeTrailingHTTPWhitespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHTTPWhitespaceChar", function() { return isHTTPWhitespaceChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "solelyContainsHTTPTokenCodePoints", function() { return solelyContainsHTTPTokenCodePoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "soleyContainsHTTPQuotedStringTokenCodePoints", function() { return soleyContainsHTTPQuotedStringTokenCodePoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asciiLowercase", function() { return asciiLowercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectAnHTTPQuotedString", function() { return collectAnHTTPQuotedString; });
// Copyright © 2017–2018 Domenic Denicola <d@domenic.me>
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

const removeLeadingAndTrailingHTTPWhitespace = string => {
	return string.replace(/^[ \t\n\r]+/, "").replace(/[ \t\n\r]+$/, "");
};

const removeTrailingHTTPWhitespace = string => {
	return string.replace(/[ \t\n\r]+$/, "");
};

const isHTTPWhitespaceChar = char => {
	return char === " " || char === "\t" || char === "\n" || char === "\r";
};

const solelyContainsHTTPTokenCodePoints = string => {
	return /^[-!#$%&'*+.^_`|~A-Za-z0-9]*$/.test(string);
};

const soleyContainsHTTPQuotedStringTokenCodePoints = string => {
	return /^[\t\u0020-\u007E\u0080-\u00FF]*$/.test(string);
};

const asciiLowercase = string => {
	return string.replace(/[A-Z]/g, l => l.toLowerCase());
};

// This variant only implements it with the extract-value flag set.
const collectAnHTTPQuotedString = (input, position) => {
	let value = "";

	position++;

	while (true) {
		while (position < input.length && input[position] !== "\"" && input[position] !== "\\") {
			value += input[position];
			++position;
		}

		if (position >= input.length) {
			break;
		}

		const quoteOrBackslash = input[position];
		++position;

		if (quoteOrBackslash === "\\") {
			if (position >= input.length) {
				value += "\\";
				break;
			}

			value += input[position];
			++position;
		} else {
			break;
		}
	}

	return [value, position];
};


/***/ }),

/***/ "./src/addons/webapi/xhr/thirdpart/url-parser/querystringify.js":
/*!**********************************************************************!*\
  !*** ./src/addons/webapi/xhr/thirdpart/url-parser/querystringify.js ***!
  \**********************************************************************/
/*! exports provided: stringify, parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
const has = Object.prototype.hasOwnProperty;
const undef = undefined;
/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */
function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}

/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */
function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  let parser = /([^=?#&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    let key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  let pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encode(key);
      value = encode(value);

      //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //
      if (key === null || value === null) continue;
      pairs.push(key +'='+ value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
const stringify = querystringify;
const parse = querystring;

/***/ }),

/***/ "./src/addons/webapi/xhr/thirdpart/url-parser/url-parser.js":
/*!******************************************************************!*\
  !*** ./src/addons/webapi/xhr/thirdpart/url-parser/url-parser.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var requires_port__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! requires-port */ "./node_modules/requires-port/index.js");
/* harmony import */ var requires_port__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(requires_port__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _querystringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./querystringify */ "./src/addons/webapi/xhr/thirdpart/url-parser/querystringify.js");



const slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , whitespace = '[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]'
  , left = new RegExp('^'+ whitespace +'+');

/**
 * Trim a given string.
 *
 * @param {String} str String to trim.
 * @public
 */
function trimLeft(str) {
  return (str ? str : '').toString().replace(left, '');
}

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
let rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
let ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  let globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof global !== 'undefined') globalVar = global;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  let location = globalVar.location || {};
  loc = loc || location;

  let finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  address = trimLeft(address);
  let match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  if (relative === '') return base;

  let path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  address = trimLeft(address);

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  let relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = _querystringify__WEBPACK_IMPORTED_MODULE_1__["parse"];

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!requires_port__WEBPACK_IMPORTED_MODULE_0___default()(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  let url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || _querystringify__WEBPACK_IMPORTED_MODULE_1__["parse"])(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!requires_port__WEBPACK_IMPORTED_MODULE_0___default()(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        let char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (let i = 0; i < rules.length; i++) {
    let ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = _querystringify__WEBPACK_IMPORTED_MODULE_1__["stringify"];

  let query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  let result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = _querystringify__WEBPACK_IMPORTED_MODULE_1__;

/* harmony default export */ __webpack_exports__["default"] = (Url);

/***/ }),

/***/ "./src/addons/webapi/xhr/url.ts":
/*!**************************************!*\
  !*** ./src/addons/webapi/xhr/url.ts ***!
  \**************************************/
/*! exports provided: parse_url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse_url", function() { return parse_url; });
/* harmony import */ var _thirdpart_url_parser_url_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thirdpart/url-parser/url-parser */ "./src/addons/webapi/xhr/thirdpart/url-parser/url-parser.js");

function parse_url(url) {
    // const regex = /^([a-z]+?)\:\/\/([^\/?#:]+)(:(\d+))?(?:[\/?#]|$)(.*)/i;
    // const matches = url.match(regex);
    // if (matches) {
    // 	return {
    // 		url,
    // 		protocal: matches[1],
    // 		hostname: matches[2],
    // 		port: matches[4] ? parseInt(matches[4]) : undefined,
    // 		path: matches[5],
    // 	};
    // } else {
    // 	return {
    // 		url
    // 	};
    // }
    const u = new _thirdpart_url_parser_url_parser__WEBPACK_IMPORTED_MODULE_0__["default"](url);
    u.url = url;
    return u;
}


/***/ }),

/***/ "./src/addons/webapi/xhr/xhr.common.ts":
/*!*********************************************!*\
  !*** ./src/addons/webapi/xhr/xhr.common.ts ***!
  \*********************************************/
/*! exports provided: HttpStatusCode, XMLHttpRequestEventTarget, XMLHttpRequestUpload, XMLHttpRequestReadyState, XMLHttpRequestBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpStatusCode", function() { return HttpStatusCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLHttpRequestEventTarget", function() { return XMLHttpRequestEventTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLHttpRequestUpload", function() { return XMLHttpRequestUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLHttpRequestReadyState", function() { return XMLHttpRequestReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLHttpRequestBase", function() { return XMLHttpRequestBase; });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event */ "./src/addons/webapi/event.ts");

var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["Continue"] = 100] = "Continue";
    HttpStatusCode[HttpStatusCode["SwitchingProtocols"] = 101] = "SwitchingProtocols";
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["Created"] = 201] = "Created";
    HttpStatusCode[HttpStatusCode["Accepted"] = 202] = "Accepted";
    HttpStatusCode[HttpStatusCode["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
    HttpStatusCode[HttpStatusCode["NoContent"] = 204] = "NoContent";
    HttpStatusCode[HttpStatusCode["ResetContent"] = 205] = "ResetContent";
    HttpStatusCode[HttpStatusCode["PartialContent"] = 206] = "PartialContent";
    HttpStatusCode[HttpStatusCode["MultipleChoices"] = 300] = "MultipleChoices";
    HttpStatusCode[HttpStatusCode["Ambiguous"] = 300] = "Ambiguous";
    HttpStatusCode[HttpStatusCode["MovedPermanently"] = 301] = "MovedPermanently";
    HttpStatusCode[HttpStatusCode["Moved"] = 301] = "Moved";
    HttpStatusCode[HttpStatusCode["Found"] = 302] = "Found";
    HttpStatusCode[HttpStatusCode["Redirect"] = 302] = "Redirect";
    HttpStatusCode[HttpStatusCode["SeeOther"] = 303] = "SeeOther";
    HttpStatusCode[HttpStatusCode["RedirectMethod"] = 303] = "RedirectMethod";
    HttpStatusCode[HttpStatusCode["NotModified"] = 304] = "NotModified";
    HttpStatusCode[HttpStatusCode["UseProxy"] = 305] = "UseProxy";
    HttpStatusCode[HttpStatusCode["Unused"] = 306] = "Unused";
    HttpStatusCode[HttpStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpStatusCode[HttpStatusCode["RedirectKeepVerb"] = 307] = "RedirectKeepVerb";
    HttpStatusCode[HttpStatusCode["BadRequest"] = 400] = "BadRequest";
    HttpStatusCode[HttpStatusCode["Unauthorized"] = 401] = "Unauthorized";
    HttpStatusCode[HttpStatusCode["PaymentRequired"] = 402] = "PaymentRequired";
    HttpStatusCode[HttpStatusCode["Forbidden"] = 403] = "Forbidden";
    HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
    HttpStatusCode[HttpStatusCode["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpStatusCode[HttpStatusCode["NotAcceptable"] = 406] = "NotAcceptable";
    HttpStatusCode[HttpStatusCode["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpStatusCode[HttpStatusCode["RequestTimeout"] = 408] = "RequestTimeout";
    HttpStatusCode[HttpStatusCode["Conflict"] = 409] = "Conflict";
    HttpStatusCode[HttpStatusCode["Gone"] = 410] = "Gone";
    HttpStatusCode[HttpStatusCode["LengthRequired"] = 411] = "LengthRequired";
    HttpStatusCode[HttpStatusCode["PreconditionFailed"] = 412] = "PreconditionFailed";
    HttpStatusCode[HttpStatusCode["RequestEntityTooLarge"] = 413] = "RequestEntityTooLarge";
    HttpStatusCode[HttpStatusCode["RequestUriTooLong"] = 414] = "RequestUriTooLong";
    HttpStatusCode[HttpStatusCode["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
    HttpStatusCode[HttpStatusCode["RequestedRangeNotSatisfiable"] = 416] = "RequestedRangeNotSatisfiable";
    HttpStatusCode[HttpStatusCode["ExpectationFailed"] = 417] = "ExpectationFailed";
    HttpStatusCode[HttpStatusCode["UpgradeRequired"] = 426] = "UpgradeRequired";
    HttpStatusCode[HttpStatusCode["InternalServerError"] = 500] = "InternalServerError";
    HttpStatusCode[HttpStatusCode["NotImplemented"] = 501] = "NotImplemented";
    HttpStatusCode[HttpStatusCode["BadGateway"] = 502] = "BadGateway";
    HttpStatusCode[HttpStatusCode["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpStatusCode[HttpStatusCode["GatewayTimeout"] = 504] = "GatewayTimeout";
    HttpStatusCode[HttpStatusCode["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
})(HttpStatusCode || (HttpStatusCode = {}));
class XMLHttpRequestEventTarget extends _event__WEBPACK_IMPORTED_MODULE_0__["EventTarget"] {
    addEventListener(type, listener, options) {
        super.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options) {
        super.addEventListener(type, listener, options);
    }
}
class XMLHttpRequestUpload extends XMLHttpRequestEventTarget {
}
var XMLHttpRequestReadyState;
(function (XMLHttpRequestReadyState) {
    XMLHttpRequestReadyState[XMLHttpRequestReadyState["UNSENT"] = 0] = "UNSENT";
    XMLHttpRequestReadyState[XMLHttpRequestReadyState["OPENED"] = 1] = "OPENED";
    XMLHttpRequestReadyState[XMLHttpRequestReadyState["HEADERS_RECEIVED"] = 2] = "HEADERS_RECEIVED";
    XMLHttpRequestReadyState[XMLHttpRequestReadyState["LOADING"] = 3] = "LOADING";
    XMLHttpRequestReadyState[XMLHttpRequestReadyState["DONE"] = 4] = "DONE";
})(XMLHttpRequestReadyState || (XMLHttpRequestReadyState = {}));
/** Use XMLHttpRequest (XHR) objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing. */
class XMLHttpRequestBase extends XMLHttpRequestEventTarget {
    constructor() {
        super(...arguments);
        this._request_headers = {};
        this._poll_task_id = -1;
    }
    get url() { return this._url; }
    /**
     * Returns client's state.
     */
    get readyState() { return this._readyState; }
    set readyState(value) {
        if (value != this._readyState) {
            this._readyState = value;
            if (this.onreadystatechange) {
                let event = new _event__WEBPACK_IMPORTED_MODULE_0__["Event"]('readystatechange');
                this.onreadystatechange.call(this, event);
                this.dispatchEvent(event);
            }
        }
    }
    /**
     * Returns the response's body.
     */
    get response() { return this._response; }
    /**
     * Returns the text response.
     *
     * Throws an "InvalidStateError" DOMException if responseType is not the empty string or "text".
     */
    get responseText() { return null; }
    get responseURL() { return null; }
    /**
     * Returns the document response.
     *
     * Throws an "InvalidStateError" DOMException if responseType is not the empty string or "document".
     */
    get responseXML() { return null; }
    ;
    get status() { return 0; }
    ;
    /**
     * Returns the associated XMLHttpRequestUpload object. It can be used to gather transmission information when data is transferred to a server.
     */
    get upload() { return this._upload; }
    /**
     * Cancels any network activity.
     */
    abort() { }
    getAllResponseHeaders() { return ""; }
    getResponseHeader(name) { return null; }
    /**
     * Sets the request method, request URL, and synchronous flag.
     *
     * Throws a "SyntaxError" DOMException if either method is not a valid HTTP method or url cannot be parsed.
     *
     * Throws a "SecurityError" DOMException if method is a case-insensitive match for `CONNECT`, `TRACE`, or `TRACK`.
     *
     * Throws an "InvalidAccessError" DOMException if async is false, current global object is a Window object, and the timeout attribute is not zero or the responseType attribute is not the empty string.
     */
    open(method, url, async, username, password) { }
    /**
     * Acts as if the `Content-Type` header value for response is mime. (It does not actually change the header though.)
     *
     * Throws an "InvalidStateError" DOMException if state is loading or done.
     */
    overrideMimeType(mime) {
        this._overrided_mime = mime;
    }
    /**
     * Initiates the request. The body argument provides the request body, if any, and is ignored if the request method is GET or HEAD.
     *
     * Throws an "InvalidStateError" DOMException if either state is not opened or the send() flag is set.
     */
    send(body) { }
    /**
     * Combines a header in author request headers.
     *
     * Throws an "InvalidStateError" DOMException if either state is not opened or the send() flag is set.
     *
     * Throws a "SyntaxError" DOMException if name is not a header name or if value is not a header value.
     */
    setRequestHeader(name, value) {
        this._request_headers[name.toLowerCase()] = value;
    }
    addEventListener(type, listener, options) {
        super.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options) {
        super.removeEventListener(type, listener, options);
    }
    $start_poll() {
        this.$stop_poll();
        this._poll_task_id = requestAnimationFrame(this.$tick.bind(this));
    }
    $stop_poll() {
        if (this._poll_task_id != -1) {
            cancelAnimationFrame(this._poll_task_id);
            this._poll_task_id = -1;
        }
    }
    $get_progress() {
        return {};
    }
    $dispatch_event(type) {
        let event = undefined;
        if (type === 'progress') {
            let evt = new _event__WEBPACK_IMPORTED_MODULE_0__["ProgressEvent"]('progress', this.$get_progress());
            event = evt;
        }
        else {
            event = new _event__WEBPACK_IMPORTED_MODULE_0__["Event"](type);
        }
        switch (type) {
            case 'load':
                if (this.onload)
                    this.onload.call(this, event);
                break;
            case 'loadend':
                if (this.onloadend)
                    this.onloadend.call(this, event);
                break;
            case 'loadstart':
                if (this.onloadstart)
                    this.onloadstart.call(this, event);
                break;
            case 'progress':
                if (this.onprogress)
                    this.onprogress.call(this, event);
                break;
            case 'timeout':
                if (this.ontimeout)
                    this.ontimeout.call(this, event);
                break;
            case 'abort':
                if (this.onabort)
                    this.onabort.call(this, event);
                break;
            case 'error':
                if (this.onerror)
                    this.onerror.call(this, event);
                break;
            default:
                break;
        }
        this.dispatchEvent(event);
    }
    $tick() { }
}


/***/ }),

/***/ "./src/addons/webapi/xhr/xhr.unity.ts":
/*!********************************************!*\
  !*** ./src/addons/webapi/xhr/xhr.unity.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url */ "./src/addons/webapi/xhr/url.ts");
/* harmony import */ var _thirdpart_mimetype_mime_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thirdpart/mimetype/mime-type */ "./src/addons/webapi/xhr/thirdpart/mimetype/mime-type.js");
/* harmony import */ var _xhr_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xhr.common */ "./src/addons/webapi/xhr/xhr.common.ts");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_3__);




class UnityXMLHttpRequest extends _xhr_common__WEBPACK_IMPORTED_MODULE_2__["XMLHttpRequestBase"] {
    constructor() {
        super();
    }
    get url() { return this._url; }
    get status() {
        return this._status;
    }
    get responseURL() {
        if (this.url)
            return this.url.url;
        return null;
    }
    get responseXML() {
        return this.responseText;
    }
    get responseText() {
        if (this._request && this._request.downloadHandler) {
            return this._request.downloadHandler.text;
        }
        return undefined;
    }
    getAllResponseHeaders() {
        let text = '';
        if (this._internal_respons_headers) {
            let enumerator = this._internal_respons_headers.GetEnumerator();
            while (enumerator.MoveNext()) {
                text += `${enumerator.Current.Key}: ${enumerator.Current.Value}\r\n`;
            }
        }
        return text;
    }
    getResponseHeader(name) {
        if (this._internal_respons_headers) {
            if (this._internal_respons_headers.ContainsKey(name)) {
                return this._internal_respons_headers.get_Item(name);
            }
        }
        return '';
    }
    open(method, url, async, username, password) {
        this._url = Object(_url__WEBPACK_IMPORTED_MODULE_0__["parse_url"])(url);
        if (!this.url.port) {
            this._url.port = this.url.protocal === 'https' ? 443 : 80;
        }
        this._method = method;
        this._readyState = _xhr_common__WEBPACK_IMPORTED_MODULE_2__["XMLHttpRequestReadyState"].UNSENT;
        this._connect_start_time = Date.now();
    }
    send(body) {
        if (typeof body === 'object') {
            this.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            body = JSON.stringify(body);
        }
        else if (body === 'string') {
            if (!('Content-Type' in this._request_headers)) {
                this.setRequestHeader('Content-Type', 'text/plain');
            }
        }
        this._request_body = body;
        // this._head_request = UnityEngine.Networking.UnityWebRequest.Head(this._url.url);
        // for (let key of Object.getOwnPropertyNames(this._request_headers)) {
        // 	const value = this._request_headers[key];
        // 	this._head_request.SetRequestHeader(key, value);
        // }
        // this._head_request.SendWebRequest();
        switch (this._method) {
            case 'PUT':
                this._request = csharp__WEBPACK_IMPORTED_MODULE_3__["UnityEngine"].Networking.UnityWebRequest.Put(this._url.url, this._request_body);
                break;
            case 'POST':
                // Note: 这里故意用 put 创建，因为用 POST的话 Unity 会自作主张地帮你编码 body 内容
                this._request = csharp__WEBPACK_IMPORTED_MODULE_3__["UnityEngine"].Networking.UnityWebRequest.Put(this._url.url, this._request_body);
                this._request.method = this._method;
                break;
            case 'GET':
                this._request = csharp__WEBPACK_IMPORTED_MODULE_3__["UnityEngine"].Networking.UnityWebRequest.Get(this._url.url);
                break;
            case 'DELETE':
                this._request = csharp__WEBPACK_IMPORTED_MODULE_3__["UnityEngine"].Networking.UnityWebRequest.Delete(this._url.url);
                break;
            default:
                this._request = new csharp__WEBPACK_IMPORTED_MODULE_3__["UnityEngine"].Networking.UnityWebRequest(this._url.url, this._method);
                break;
        }
        for (let key of Object.getOwnPropertyNames(this._request_headers)) {
            const value = this._request_headers[key];
            this._request.SetRequestHeader(key, value);
        }
        this._internal_request = this._request.SendWebRequest();
        if (typeof this.timeout === 'number') {
            this._timeout_until = Date.now() + this.timeout;
        }
        this.$dispatch_event('loadstart');
        this.$start_poll();
    }
    abort() {
        if (this._request) {
            this._request.Abort();
            this.$dispatch_event('abort');
            this.$stop_poll();
        }
    }
    $get_progress() {
        return {
            lengthComputable: this._progress !== undefined,
            loaded: this._progress,
            total: 1
        };
    }
    $tick() {
        if (this._request) {
            this._status = Number(this._request.responseCode);
            if (this._status) {
                this.readyState = _xhr_common__WEBPACK_IMPORTED_MODULE_2__["XMLHttpRequestReadyState"].OPENED;
            }
            const now = Date.now();
            if (this._timeout_until && now > this._timeout_until) {
                this._request.Abort();
                this.$dispatch_event('timeout');
                this.$finished_load();
                this._status = _xhr_common__WEBPACK_IMPORTED_MODULE_2__["HttpStatusCode"].RequestTimeout;
                return;
            }
            this._status = Number(this._request.responseCode) || _xhr_common__WEBPACK_IMPORTED_MODULE_2__["HttpStatusCode"].Continue;
            if (this.readyState === _xhr_common__WEBPACK_IMPORTED_MODULE_2__["XMLHttpRequestReadyState"].OPENED) {
                this._internal_respons_headers = this._request.GetResponseHeaders();
                if (this._internal_respons_headers && this._internal_respons_headers.Count) {
                    this.readyState = _xhr_common__WEBPACK_IMPORTED_MODULE_2__["XMLHttpRequestReadyState"].HEADERS_RECEIVED;
                }
            }
            if (this.readyState === _xhr_common__WEBPACK_IMPORTED_MODULE_2__["XMLHttpRequestReadyState"].HEADERS_RECEIVED && this._status == _xhr_common__WEBPACK_IMPORTED_MODULE_2__["HttpStatusCode"].OK) {
                this.readyState = _xhr_common__WEBPACK_IMPORTED_MODULE_2__["XMLHttpRequestReadyState"].LOADING;
            }
            if (this._request.result == csharp__WEBPACK_IMPORTED_MODULE_3__["UnityEngine"].Networking.UnityWebRequest.Result.ConnectionError ||
                this._request.result == csharp__WEBPACK_IMPORTED_MODULE_3__["UnityEngine"].Networking.UnityWebRequest.Result.ProtocolError || this._request.isDone) {
                this.$finished_load();
            }
            else if (this._internal_request) {
                if (this._progress !== this._internal_request.progress) {
                    this._progress = this._internal_request.progress;
                    this.$dispatch_event('progress');
                }
            }
        }
    }
    $finished_load() {
        this.readyState = _xhr_common__WEBPACK_IMPORTED_MODULE_2__["XMLHttpRequestReadyState"].DONE;
        if (this._request.isDone
            || this._request.result == csharp__WEBPACK_IMPORTED_MODULE_3__["UnityEngine"].Networking.UnityWebRequest.Result.ProtocolError) {
            this._internal_respons_headers = this._request.GetResponseHeaders();
            this.$process_response();
        }
        if (this._request.result == csharp__WEBPACK_IMPORTED_MODULE_3__["UnityEngine"].Networking.UnityWebRequest.Result.ConnectionError
            || this._request.result == csharp__WEBPACK_IMPORTED_MODULE_3__["UnityEngine"].Networking.UnityWebRequest.Result.ProtocolError) {
            this.$dispatch_event('error');
        }
        else {
            this._progress = 1;
            this.$dispatch_event('progress');
            this.$dispatch_event('load');
        }
        this.$dispatch_event('loadend');
        this.$stop_poll();
    }
    $process_response() {
        if (this.responseType === undefined) {
            const mime = new _thirdpart_mimetype_mime_type__WEBPACK_IMPORTED_MODULE_1__["default"](this._overrided_mime || this.getResponseHeader("Content-Type") || 'text/plain');
            if (mime.type === 'application' && mime.subtype === 'json') {
                this.responseType = 'json';
            }
            else if (mime.type === 'text') {
                this.responseType = 'text';
            }
            else {
                this.responseType = 'arraybuffer';
            }
        }
        switch (this.responseType) {
            case '':
            case 'document':
            case 'text':
                this._response = this.responseText;
                break;
            case 'json':
                const text = this.responseText;
                if (text) {
                    this._response = JSON.parse(text);
                }
                else {
                    this._response = null;
                }
                break;
            default:
                this._response = this._request.downloadHandler ? this._request.downloadHandler.data : null;
                break;
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = ({
    exports: {
        XMLHttpRequestEventTarget: _xhr_common__WEBPACK_IMPORTED_MODULE_2__["XMLHttpRequestEventTarget"],
        XMLHttpRequestReadyState: _xhr_common__WEBPACK_IMPORTED_MODULE_2__["XMLHttpRequestReadyState"],
        XMLHttpRequestUpload: _xhr_common__WEBPACK_IMPORTED_MODULE_2__["XMLHttpRequestUpload"],
        XMLHttpRequest: UnityXMLHttpRequest,
    }
});


/***/ }),

/***/ "csharp":
/*!*************************!*\
  !*** external "csharp" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_csharp__;

/***/ }),

/***/ "puerts":
/*!*************************!*\
  !*** external "puerts" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_puerts__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVxdWlyZXMtcG9ydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRkb25zL3dlYmFwaS9hbmltYXRpb25mcmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRkb25zL3dlYmFwaS9jb25zb2xlLnVuaXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9hZGRvbnMvd2ViYXBpL2V2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hZGRvbnMvd2ViYXBpL2luZGV4LmNvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRkb25zL3dlYmFwaS9pbmRleC51bml0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRkb25zL3dlYmFwaS9taXNjLnVuaXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9hZGRvbnMvd2ViYXBpL3BlcmZvcm1hbmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hZGRvbnMvd2ViYXBpL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkZG9ucy93ZWJhcGkvc3RvcmFnZS51bml0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRkb25zL3dlYmFwaS90aW1lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRkb25zL3dlYmFwaS94aHIvdGhpcmRwYXJ0L21pbWV0eXBlL21pbWUtdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRkb25zL3dlYmFwaS94aHIvdGhpcmRwYXJ0L21pbWV0eXBlL3BhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRkb25zL3dlYmFwaS94aHIvdGhpcmRwYXJ0L21pbWV0eXBlL3NlcmlhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkZG9ucy93ZWJhcGkveGhyL3RoaXJkcGFydC9taW1ldHlwZS91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRkb25zL3dlYmFwaS94aHIvdGhpcmRwYXJ0L3VybC1wYXJzZXIvcXVlcnlzdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkZG9ucy93ZWJhcGkveGhyL3RoaXJkcGFydC91cmwtcGFyc2VyL3VybC1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkZG9ucy93ZWJhcGkveGhyL3VybC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRkb25zL3dlYmFwaS94aHIveGhyLmNvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRkb25zL3dlYmFwaS94aHIveGhyLnVuaXR5LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNzaGFycFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInB1ZXJ0c1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtR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LENBQUM7WUFDaEIsS0FBSyxNQUFNO2dCQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDbkMsTUFBTTtZQUNQLEtBQUssTUFBTTtnQkFDVixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUMvQixJQUFJLElBQUksRUFBRTtvQkFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2xDO3FCQUFNO29CQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2lCQUN0QjtnQkFDRCxNQUFNO1lBQ1A7Z0JBQ0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzNGLE1BQU07U0FDUDtJQUNGLENBQUM7Q0FDRDtBQUVjO0lBQ2QsT0FBTyxFQUFFO1FBQ1IsZ0dBQXlCO1FBQ3pCLDhGQUF3QjtRQUN4QixzRkFBb0I7UUFDcEIsY0FBYyxFQUFFLG1CQUFtQjtLQUNuQztDQUNELEVBQUM7Ozs7Ozs7Ozs7OztBQzlPRixvRDs7Ozs7Ozs7Ozs7QUNBQSxvRCIsImZpbGUiOiJ3ZWJhcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjc2hhcnBcIiksIHJlcXVpcmUoXCJwdWVydHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY3NoYXJwXCIsIFwicHVlcnRzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJjc2hhcnBcIiksIHJlcXVpcmUoXCJwdWVydHNcIikpIDogZmFjdG9yeShyb290W1wiY3NoYXJwXCJdLCByb290W1wicHVlcnRzXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKGdsb2JhbCwgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jc2hhcnBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9wdWVydHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FkZG9ucy93ZWJhcGkvaW5kZXgudW5pdHkudHNcIik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2hlY2sgaWYgd2UncmUgcmVxdWlyZWQgdG8gYWRkIGEgcG9ydCBudW1iZXIuXG4gKlxuICogQHNlZSBodHRwczovL3VybC5zcGVjLndoYXR3Zy5vcmcvI2RlZmF1bHQtcG9ydFxuICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBwb3J0IFBvcnQgbnVtYmVyIHdlIG5lZWQgdG8gY2hlY2tcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm90b2NvbCBQcm90b2NvbCB3ZSBuZWVkIHRvIGNoZWNrIGFnYWluc3QuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gSXMgaXQgYSBkZWZhdWx0IHBvcnQgZm9yIHRoZSBnaXZlbiBwcm90b2NvbFxuICogQGFwaSBwcml2YXRlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVxdWlyZWQocG9ydCwgcHJvdG9jb2wpIHtcbiAgcHJvdG9jb2wgPSBwcm90b2NvbC5zcGxpdCgnOicpWzBdO1xuICBwb3J0ID0gK3BvcnQ7XG5cbiAgaWYgKCFwb3J0KSByZXR1cm4gZmFsc2U7XG5cbiAgc3dpdGNoIChwcm90b2NvbCkge1xuICAgIGNhc2UgJ2h0dHAnOlxuICAgIGNhc2UgJ3dzJzpcbiAgICByZXR1cm4gcG9ydCAhPT0gODA7XG5cbiAgICBjYXNlICdodHRwcyc6XG4gICAgY2FzZSAnd3NzJzpcbiAgICByZXR1cm4gcG9ydCAhPT0gNDQzO1xuXG4gICAgY2FzZSAnZnRwJzpcbiAgICByZXR1cm4gcG9ydCAhPT0gMjE7XG5cbiAgICBjYXNlICdnb3BoZXInOlxuICAgIHJldHVybiBwb3J0ICE9PSA3MDtcblxuICAgIGNhc2UgJ2ZpbGUnOlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBwb3J0ICE9PSAwO1xufTtcbiIsImludGVyZmFjZSBGcmFtZUFjdGlvbiB7XHJcblx0aWQ6IG51bWJlcjtcclxuXHRjYWxsYmFjazogKG5vdzogbnVtYmVyKT0+dm9pZDtcclxufVxyXG5cclxubGV0IGFjdGlvbnM6IEZyYW1lQWN0aW9uW10gPSBbXTtcclxubGV0IGdsb2JhbF9hY3Rpb25faWQgPSAwO1xyXG5cclxuZnVuY3Rpb24gY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlOiBudW1iZXIpOiB2b2lkIHtcclxuXHRhY3Rpb25zID0gYWN0aW9ucy5maWx0ZXIoIGEgPT4gYS5pZCAhPT0gaGFuZGxlICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjazogKG5vdzogbnVtYmVyKT0+dm9pZCk6IG51bWJlciB7XHJcblx0bGV0IGFjdGlvbiA9IHtcclxuXHRcdGNhbGxiYWNrLFxyXG5cdFx0aWQ6ICsrZ2xvYmFsX2FjdGlvbl9pZCxcclxuXHR9XHJcblx0YWN0aW9ucy5wdXNoKGFjdGlvbik7XHJcblx0cmV0dXJuIGFjdGlvbi5pZDtcclxufVxyXG5cclxuZnVuY3Rpb24gdGljayhub3c6IG51bWJlcikge1xyXG5cdGZvciAoY29uc3QgYWN0aW9uIG9mIGFjdGlvbnMpIHtcclxuXHRcdGFjdGlvbi5jYWxsYmFjayhub3cpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHRpY2ssXHJcblx0ZXhwb3J0czoge1xyXG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxyXG5cdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWVcclxuXHR9XHJcbn07IiwiaW1wb3J0IHsgVW5pdHlFbmdpbmUsIFVuaXR5RWRpdG9yIH0gZnJvbSAnY3NoYXJwJztcclxuaW1wb3J0IHsgJHR5cGVvZiB9IGZyb20gJ3B1ZXJ0cyc7XHJcbmVudW0gTG9nVHlwZSB7XHJcblx0RXJyb3IgPSAwLFxyXG5cdEFzc2VydCA9IDEsXHJcblx0V2FybmluZyA9IDIsXHJcblx0TG9nID0gMyxcclxuXHRFeGNlcHRpb24gPSA0XHJcbn1cclxuXHJcbmNvbnN0IHNjcmlwdFJlc291cmNlcyA9IG5ldyBNYXA8c3RyaW5nLCBVbml0eUVuZ2luZS5PYmplY3Q+KCk7XHJcbmNvbnN0IGVtcHR5UmVzb3VyY2VzID0gbmV3IFVuaXR5RW5naW5lLk9iamVjdCgpO1xyXG5jb25zdCBpc1VuaXR5RWRpdG9yID0gVW5pdHlFbmdpbmUuQXBwbGljYXRpb24uaXNFZGl0b3I7XHJcblxyXG5mdW5jdGlvbiBwcmludCh0eXBlOiBMb2dUeXBlLCBzaG93U3RhY2sgOiBib29sZWFuLCAuLi5hcmdzOiB1bmtub3duW10pIHtcclxuXHRsZXQgbWVzc2FnZSA9ICcnO1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xyXG5cdFx0Y29uc3QgZWxlbWVudCA9IGFyZ3NbaV07XHJcblx0XHRpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmIGNvbnNvbGUuTE9HX09CSkVDVF9UT19KU09OKSB7XHJcblx0XHRcdG1lc3NhZ2UgKz0gSlNPTi5zdHJpbmdpZnkoZWxlbWVudCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRtZXNzYWdlICs9IGVsZW1lbnQ7XHJcblx0XHR9XHJcblx0XHRpZiAoaSA8IGFyZ3MubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRtZXNzYWdlICs9ICcgJztcclxuXHRcdH1cclxuXHR9XHJcblx0bGV0IHVuaXR5TG9nVGFyZ2V0OiBVbml0eUVuZ2luZS5PYmplY3QgPSBudWxsO1xyXG5cdGlmIChzaG93U3RhY2sgfHwgVW5pdHlFbmdpbmUuQXBwbGljYXRpb24uaXNFZGl0b3IpIHtcclxuXHRcdHZhciBzdGFja3MgPSBuZXcgRXJyb3IoKS5zdGFjay5zcGxpdCgnXFxuJyk7XHJcblx0XHRmb3IgKGxldCBpID0gMzsgaSA8IHN0YWNrcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgbGluZSA9IHN0YWNrc1tpXTtcclxuXHRcdFx0bWVzc2FnZSArPSAnXFxuJztcclxuXHRcdFx0aWYgKGlzVW5pdHlFZGl0b3IpIHtcclxuXHRcdFx0XHRjb25zdCBtYXRjaGVzID0gbGluZS5tYXRjaCgvYXRcXHMuKj9cXHNcXCgoLio/KVxcOihcXGQrKS8pO1xyXG5cdFx0XHRcdGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID49IDMpIHtcclxuXHRcdFx0XHRcdGxldCBmaWxlID0gbWF0Y2hlc1sxXS5yZXBsYWNlKC9cXFxcL2csICcvJyk7XHJcblx0XHRcdFx0XHRmaWxlID0gZmlsZS5yZXBsYWNlKC8uKlxcL0Fzc2V0c1xcLy8sICdBc3NldHMvJyk7XHJcblx0XHRcdFx0XHRjb25zdCBsaW5lTnVtYmVyID0gbWF0Y2hlc1syXTtcclxuXHRcdFx0XHRcdGxpbmUgPSBsaW5lLnJlcGxhY2UoL1xcc1xcKC8sIGAgKDxhIGhyZWY9XCIke2ZpbGV9XCIgbGluZT1cIiR7bGluZU51bWJlcn1cIj5gKTtcclxuXHRcdFx0XHRcdGxpbmUgPSBsaW5lLnJlcGxhY2UoL1xcKSQvLCAnIDwvYT4pJyk7XHJcblx0XHRcdFx0XHRpZiAoIXVuaXR5TG9nVGFyZ2V0KSB7XHJcblx0XHRcdFx0XHRcdGlmICghc2NyaXB0UmVzb3VyY2VzLmhhcyhmaWxlKSkge1xyXG5cdFx0XHRcdFx0XHRcdHNjcmlwdFJlc291cmNlcy5zZXQoZmlsZSwgVW5pdHlFZGl0b3IuQXNzZXREYXRhYmFzZS5Mb2FkQXNzZXRBdFBhdGgoZmlsZSwgJHR5cGVvZihVbml0eUVuZ2luZS5PYmplY3QpKSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dW5pdHlMb2dUYXJnZXQgPSBzY3JpcHRSZXNvdXJjZXMuZ2V0KGZpbGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRtZXNzYWdlICs9IGxpbmU7XHJcblx0XHR9XHJcblx0fVxyXG5cdG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoL3svZ20sICd7eycpO1xyXG5cdG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoL30vZ20sICd9fScpO1xyXG5cdFVuaXR5RW5naW5lLkRlYnVnLkxvZ0Zvcm1hdCh0eXBlLCBVbml0eUVuZ2luZS5Mb2dPcHRpb24uTm9TdGFja3RyYWNlLCB1bml0eUxvZ1RhcmdldCB8fCBlbXB0eVJlc291cmNlcywgbWVzc2FnZSk7XHJcbn1cclxuXHJcbmNvbnN0IENvbnNvbGVPYmplY3QgPSB7XHJcblx0bG9nOiAoLi4uYXJnczogdW5rbm93bltdKSA9PiBwcmludChMb2dUeXBlLkxvZywgZmFsc2UsIC4uLmFyZ3MpLFxyXG5cdGluZm86ICguLi5hcmdzOiB1bmtub3duW10pID0+IHByaW50KExvZ1R5cGUuTG9nLCB0cnVlLCAuLi5hcmdzKSxcclxuXHR0cmFjZTogKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gcHJpbnQoTG9nVHlwZS5Mb2csIHRydWUsIC4uLmFyZ3MpLFxyXG5cdHdhcm46ICguLi5hcmdzOiB1bmtub3duW10pID0+IHByaW50KExvZ1R5cGUuV2FybmluZywgdHJ1ZSwgLi4uYXJncyksXHJcblx0ZXJyb3I6ICguLi5hcmdzOiB1bmtub3duW10pID0+IHByaW50KExvZ1R5cGUuRXJyb3IsIHRydWUsIC4uLmFyZ3MpLFxyXG5cdExPR19PQkpFQ1RfVE9fSlNPTjogZmFsc2UsXHJcbn07XHJcblxyXG5pZiAodHlwZW9mKGNvbnNvbGUpID09PSAndW5kZWZpbmVkJykge1xyXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbG9iYWxUaGlzLCAnY29uc29sZScsIHtcclxuXHRcdHZhbHVlOiBDb25zb2xlT2JqZWN0LFxyXG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuXHRcdHdyaXRhYmxlOiBmYWxzZVxyXG5cdH0pO1xyXG59IGVsc2Uge1xyXG5cdGxldCBnbG9iYWxDb25zb2xlID0gKGdsb2JhbFRoaXMgYXMgdW5rbm93bilbJ2NvbnNvbGUnXTtcclxuXHRmb3IgKGNvbnN0IGtleSBpbiBDb25zb2xlT2JqZWN0KSB7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsQ29uc29sZSwga2V5LCB7IHZhbHVlOiBDb25zb2xlT2JqZWN0W2tleV0sIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHR5cGVvZihDb25zb2xlT2JqZWN0W2tleV0pICE9PSAnZnVuY3Rpb24nIH0pO1xyXG5cdH1cclxufSIsIi8qKiBFdmFsdWF0aW9uIHBoYXNlIG9mIHRoZSBldmVudCBmbG93ICovXHJcbmV4cG9ydCBlbnVtIFBoYXNlIHtcclxuXHQvKiogTm8gZXZlbnQgaXMgYmVpbmcgcHJvY2Vzc2VkIGF0IHRoaXMgdGltZS4gKi9cclxuXHROT05FLFxyXG5cdC8qKiBUaGUgZXZlbnQgaXMgYmVpbmcgcHJvcGFnYXRlZCB0aHJvdWdoIHRoZSB0YXJnZXQncyBhbmNlc3RvciBvYmplY3RzLiAqL1xyXG5cdENBUFRVUklOR19QSEFTRSxcclxuXHQvKiogVGhlIGV2ZW50IGhhcyBhcnJpdmVkIGF0IHRoZSBldmVudCdzIHRhcmdldC4gRXZlbnQgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIHRoaXMgcGhhc2UgYXJlIGNhbGxlZCBhdCB0aGlzIHRpbWUuIElmIEV2ZW50LmJ1YmJsZXMgaXMgZmFsc2UsIHByb2Nlc3NpbmcgdGhlIGV2ZW50IGlzIGZpbmlzaGVkIGFmdGVyIHRoaXMgcGhhc2UgaXMgY29tcGxldGUuICovXHJcblx0QVRfVEFSR0VULFxyXG5cdC8qKiBUaGUgZXZlbnQgaXMgcHJvcGFnYXRpbmcgYmFjayB1cCB0aHJvdWdoIHRoZSB0YXJnZXQncyBhbmNlc3RvcnMgaW4gcmV2ZXJzZSBvcmRlciwgc3RhcnRpbmcgd2l0aCB0aGUgcGFyZW50LCBhbmQgZXZlbnR1YWxseSByZWFjaGluZyB0aGUgY29udGFpbmluZyBXaW5kb3cuIFRoaXMgaXMga25vd24gYXMgYnViYmxpbmcsIGFuZCBvY2N1cnMgb25seSBpZiBFdmVudC5idWJibGVzIGlzIHRydWUuIEV2ZW50IGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciB0aGlzIHBoYXNlIGFyZSB0cmlnZ2VyZWQgZHVyaW5nIHRoaXMgcHJvY2Vzcy4gKi9cclxuXHRCVUJCTElOR19QSEFTRSxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudEluaXQge1xyXG5cdGJ1YmJsZXM/OiBib29sZWFuO1xyXG5cdGNhbmNlbGFibGU/OiBib29sZWFuO1xyXG5cdGNvbXBvc2VkPzogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBFdmVudCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBldmVudCB3aGljaCB0YWtlcyBwbGFjZSBpbiB0aGUgRE9NLlxyXG4gKlxyXG4gKiBBbiBldmVudCBjYW4gYmUgdHJpZ2dlcmVkIGJ5IHRoZSB1c2VyIGFjdGlvbiBlLmcuIGNsaWNraW5nIHRoZSBtb3VzZSBidXR0b24gb3IgdGFwcGluZyBrZXlib2FyZCwgb3IgZ2VuZXJhdGVkIGJ5IEFQSXMgdG8gcmVwcmVzZW50IHRoZSBwcm9ncmVzcyBvZiBhbiBhc3luY2hyb25vdXMgdGFzay4gSXQgY2FuIGFsc28gYmUgdHJpZ2dlcmVkIHByb2dyYW1tYXRpY2FsbHksIHN1Y2ggYXMgYnkgY2FsbGluZyB0aGUgSFRNTEVsZW1lbnQuY2xpY2soKSBtZXRob2Qgb2YgYW4gZWxlbWVudCwgb3IgYnkgZGVmaW5pbmcgdGhlIGV2ZW50LCB0aGVuIHNlbmRpbmcgaXQgdG8gYSBzcGVjaWZpZWQgdGFyZ2V0IHVzaW5nIEV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQoKS5cclxuICpcclxuICogVGhlcmUgYXJlIG1hbnkgdHlwZXMgb2YgZXZlbnRzLCBzb21lIG9mIHdoaWNoIHVzZSBvdGhlciBpbnRlcmZhY2VzIGJhc2VkIG9uIHRoZSBtYWluIEV2ZW50IGludGVyZmFjZS4gRXZlbnQgaXRzZWxmIGNvbnRhaW5zIHRoZSBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIHdoaWNoIGFyZSBjb21tb24gdG8gYWxsIGV2ZW50cy5cclxuICpcclxuICogTWFueSBET00gZWxlbWVudHMgY2FuIGJlIHNldCB1cCB0byBhY2NlcHQgKG9yIFwibGlzdGVuXCIgZm9yKSB0aGVzZSBldmVudHMsIGFuZCBleGVjdXRlIGNvZGUgaW4gcmVzcG9uc2UgdG8gcHJvY2VzcyAob3IgXCJoYW5kbGVcIikgdGhlbS4gRXZlbnQtaGFuZGxlcnMgYXJlIHVzdWFsbHkgY29ubmVjdGVkIChvciBcImF0dGFjaGVkXCIpIHRvIHZhcmlvdXMgSFRNTCBlbGVtZW50cyAoc3VjaCBhcyA8YnV0dG9uPiwgPGRpdj4sIDxzcGFuPiwgZXRjLikgdXNpbmcgRXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigpLCBhbmQgdGhpcyBnZW5lcmFsbHkgcmVwbGFjZXMgdXNpbmcgdGhlIG9sZCBIVE1MIGV2ZW50IGhhbmRsZXIgYXR0cmlidXRlcy4gRnVydGhlciwgd2hlbiBwcm9wZXJseSBhZGRlZCwgc3VjaCBoYW5kbGVycyBjYW4gYWxzbyBiZSBkaXNjb25uZWN0ZWQgaWYgbmVlZGVkIHVzaW5nIHJlbW92ZUV2ZW50TGlzdGVuZXIoKS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBFdmVudCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgZXZlbnRJbml0RGljdD86IEV2ZW50SW5pdCkge1xyXG5cdFx0dGhpcy5fdHlwZSA9IHR5cGU7XHJcblx0XHRpZiAoZXZlbnRJbml0RGljdCkge1xyXG5cdFx0XHR0aGlzLl9idWJibGVzID0gZXZlbnRJbml0RGljdC5idWJibGVzO1xyXG5cdFx0XHR0aGlzLl9jYW5jZWxhYmxlID0gZXZlbnRJbml0RGljdC5jYW5jZWxhYmxlO1xyXG5cdFx0XHR0aGlzLl9jb21wb3NlZCA9IGV2ZW50SW5pdERpY3QuY29tcG9zZWQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRydWUgb3IgZmFsc2UgZGVwZW5kaW5nIG9uIGhvdyBldmVudCB3YXMgaW5pdGlhbGl6ZWQuIFRydWUgaWYgZXZlbnQgZ29lcyB0aHJvdWdoIGl0cyB0YXJnZXQncyBhbmNlc3RvcnMgaW4gcmV2ZXJzZSB0cmVlIG9yZGVyLCBhbmQgZmFsc2Ugb3RoZXJ3aXNlLlxyXG5cdCAqL1xyXG5cdGdldCBidWJibGVzKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fYnViYmxlczsgfVxyXG5cdHByb3RlY3RlZCBfYnViYmxlczogYm9vbGVhbjtcclxuXHRjYW5jZWxCdWJibGU6IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdHJ1ZSBvciBmYWxzZSBkZXBlbmRpbmcgb24gaG93IGV2ZW50IHdhcyBpbml0aWFsaXplZC4gSXRzIHJldHVybiB2YWx1ZSBkb2VzIG5vdCBhbHdheXMgY2FycnkgbWVhbmluZywgYnV0IHRydWUgY2FuIGluZGljYXRlIHRoYXQgcGFydCBvZiB0aGUgb3BlcmF0aW9uIGR1cmluZyB3aGljaCBldmVudCB3YXMgZGlzcGF0Y2hlZCwgY2FuIGJlIGNhbmNlbGVkIGJ5IGludm9raW5nIHRoZSBwcmV2ZW50RGVmYXVsdCgpIG1ldGhvZC5cclxuXHQgKi9cclxuXHRnZXQgY2FuY2VsYWJsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2NhbmNlbGFibGU7IH1cclxuXHRwcm90ZWN0ZWQgX2NhbmNlbGFibGU6IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdHJ1ZSBvciBmYWxzZSBkZXBlbmRpbmcgb24gaG93IGV2ZW50IHdhcyBpbml0aWFsaXplZC4gVHJ1ZSBpZiBldmVudCBpbnZva2VzIGxpc3RlbmVycyBwYXN0IGEgU2hhZG93Um9vdCBub2RlIHRoYXQgaXMgdGhlIHJvb3Qgb2YgaXRzIHRhcmdldCwgYW5kIGZhbHNlIG90aGVyd2lzZS5cclxuXHQgKi9cclxuXHRnZXQgY29tcG9zZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9jb21wb3NlZDsgfVxyXG5cdHByb3RlY3RlZCBfY29tcG9zZWQ6IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIG9iamVjdCB3aG9zZSBldmVudCBsaXN0ZW5lcidzIGNhbGxiYWNrIGlzIGN1cnJlbnRseSBiZWluZyBpbnZva2VkLlxyXG5cdCAqL1xyXG5cdGdldCBjdXJyZW50VGFyZ2V0KCk6IEV2ZW50VGFyZ2V0IHsgcmV0dXJuIHRoaXMuX2N1cnJlbnRUYXJnZXQ7IH1cclxuXHRwcm90ZWN0ZWQgX2N1cnJlbnRUYXJnZXQ6IEV2ZW50VGFyZ2V0O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRydWUgaWYgcHJldmVudERlZmF1bHQoKSB3YXMgaW52b2tlZCBzdWNjZXNzZnVsbHkgdG8gaW5kaWNhdGUgY2FuY2VsYXRpb24sIGFuZCBmYWxzZSBvdGhlcndpc2UuXHJcblx0ICovXHJcblx0Z2V0IGRlZmF1bHRQcmV2ZW50ZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9kZWZhdWx0UHJldmVudGVkOyB9XHJcblx0cHJvdGVjdGVkIF9kZWZhdWx0UHJldmVudGVkOiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBldmVudCdzIHBoYXNlLCB3aGljaCBpcyBvbmUgb2YgTk9ORSwgQ0FQVFVSSU5HX1BIQVNFLCBBVF9UQVJHRVQsIGFuZCBCVUJCTElOR19QSEFTRS5cclxuXHQgKi9cclxuXHRnZXQgZXZlbnRQaGFzZSgpOiBQaGFzZSB7IHJldHVybiB0aGlzLl9ldmVudFBoYXNlOyB9XHJcblx0cHJvdGVjdGVkIF9ldmVudFBoYXNlOiBQaGFzZTtcclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0cnVlIGlmIGV2ZW50IHdhcyBkaXNwYXRjaGVkIGJ5IHRoZSB1c2VyIGFnZW50LCBhbmQgZmFsc2Ugb3RoZXJ3aXNlLlxyXG5cdCAqL1xyXG5cdGdldCBpc1RydXN0ZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9pc1RydXN0ZWQ7IH1cclxuXHRwcm90ZWN0ZWQgX2lzVHJ1c3RlZDogYm9vbGVhbjtcclxuXHJcblx0cmV0dXJuVmFsdWU6IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIG9iamVjdCB0byB3aGljaCBldmVudCBpcyBkaXNwYXRjaGVkIChpdHMgdGFyZ2V0KS5cclxuXHQgKi9cclxuXHRnZXQgdGFyZ2V0KCk6IEV2ZW50VGFyZ2V0IHsgcmV0dXJuIHRoaXMuX3RhcmdldDsgfVxyXG5cdHByb3RlY3RlZCBfdGFyZ2V0OiBFdmVudFRhcmdldDtcclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgZXZlbnQncyB0aW1lc3RhbXAgYXMgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgbWVhc3VyZWQgcmVsYXRpdmUgdG8gdGhlIHRpbWUgb3JpZ2luLlxyXG5cdCAqL1xyXG5cdGdldCB0aW1lU3RhbXAoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3RpbWVTdGFtcDsgfVxyXG5cdHByb3RlY3RlZCBfdGltZVN0YW1wOiBudW1iZXI7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIHR5cGUgb2YgZXZlbnQsIGUuZy4gXCJjbGlja1wiLCBcImhhc2hjaGFuZ2VcIiwgb3IgXCJzdWJtaXRcIi5cclxuXHQgKi9cclxuXHRnZXQgdHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fdHlwZTsgfVxyXG5cdHByb3RlY3RlZCBfdHlwZTogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBpbnZvY2F0aW9uIHRhcmdldCBvYmplY3RzIG9mIGV2ZW50J3MgcGF0aCAob2JqZWN0cyBvbiB3aGljaCBsaXN0ZW5lcnMgd2lsbCBiZSBpbnZva2VkKSwgZXhjZXB0IGZvciBhbnkgbm9kZXMgaW4gc2hhZG93IHRyZWVzIG9mIHdoaWNoIHRoZSBzaGFkb3cgcm9vdCdzIG1vZGUgaXMgXCJjbG9zZWRcIiB0aGF0IGFyZSBub3QgcmVhY2hhYmxlIGZyb20gZXZlbnQncyBjdXJyZW50VGFyZ2V0LlxyXG5cdCAqL1xyXG5cdGNvbXBvc2VkUGF0aCgpOiBFdmVudFRhcmdldFtdIHtcclxuXHRcdHJldHVybiBbXTtcclxuXHR9XHJcblxyXG5cdGluaXRFdmVudCh0eXBlOiBzdHJpbmcsIGJ1YmJsZXM/OiBib29sZWFuLCBjYW5jZWxhYmxlPzogYm9vbGVhbik6IHZvaWQge1xyXG5cdFx0dGhpcy5fdHlwZSA9IHR5cGU7XHJcblx0XHR0aGlzLl9idWJibGVzID0gYnViYmxlcztcclxuXHRcdHRoaXMuX2NhbmNlbGFibGUgPSBjYW5jZWxhYmxlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSWYgaW52b2tlZCB3aGVuIHRoZSBjYW5jZWxhYmxlIGF0dHJpYnV0ZSB2YWx1ZSBpcyB0cnVlLCBhbmQgd2hpbGUgZXhlY3V0aW5nIGEgbGlzdGVuZXIgZm9yIHRoZSBldmVudCB3aXRoIHBhc3NpdmUgc2V0IHRvIGZhbHNlLCBzaWduYWxzIHRvIHRoZSBvcGVyYXRpb24gdGhhdCBjYXVzZWQgZXZlbnQgdG8gYmUgZGlzcGF0Y2hlZCB0aGF0IGl0IG5lZWRzIHRvIGJlIGNhbmNlbGVkLlxyXG5cdCAqL1xyXG5cdHByZXZlbnREZWZhdWx0KCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuY2FuY2VsYWJsZSkge1xyXG5cdFx0XHR0aGlzLl9kZWZhdWx0UHJldmVudGVkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEludm9raW5nIHRoaXMgbWV0aG9kIHByZXZlbnRzIGV2ZW50IGZyb20gcmVhY2hpbmcgYW55IHJlZ2lzdGVyZWQgZXZlbnQgbGlzdGVuZXJzIGFmdGVyIHRoZSBjdXJyZW50IG9uZSBmaW5pc2hlcyBydW5uaW5nIGFuZCwgd2hlbiBkaXNwYXRjaGVkIGluIGEgdHJlZSwgYWxzbyBwcmV2ZW50cyBldmVudCBmcm9tIHJlYWNoaW5nIGFueSBvdGhlciBvYmplY3RzLlxyXG5cdCAqL1xyXG5cdHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpOiB2b2lkIHtcclxuXHRcdHRoaXMuX2RlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5jYW5jZWxCdWJibGUgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFdoZW4gZGlzcGF0Y2hlZCBpbiBhIHRyZWUsIGludm9raW5nIHRoaXMgbWV0aG9kIHByZXZlbnRzIGV2ZW50IGZyb20gcmVhY2hpbmcgYW55IG9iamVjdHMgb3RoZXIgdGhhbiB0aGUgY3VycmVudCBvYmplY3QuXHJcblx0ICovXHJcblx0c3RvcFByb3BhZ2F0aW9uKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX2J1YmJsZXMpIHtcclxuXHRcdFx0dGhpcy5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFByb2dyZXNzRXZlbnRJbml0IGV4dGVuZHMgRXZlbnRJbml0IHtcclxuXHRsZW5ndGhDb21wdXRhYmxlPzogYm9vbGVhbjtcclxuXHRsb2FkZWQ/OiBudW1iZXI7XHJcblx0dG90YWw/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKiBFdmVudHMgbWVhc3VyaW5nIHByb2dyZXNzIG9mIGFuIHVuZGVybHlpbmcgcHJvY2VzcywgbGlrZSBhbiBIVFRQIHJlcXVlc3QgKGZvciBhbiBYTUxIdHRwUmVxdWVzdCwgb3IgdGhlIGxvYWRpbmcgb2YgdGhlIHVuZGVybHlpbmcgcmVzb3VyY2Ugb2YgYW4gPGltZz4sIDxhdWRpbz4sIDx2aWRlbz4sIDxzdHlsZT4gb3IgPGxpbms+KS4gKi9cclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzRXZlbnQ8VCBleHRlbmRzIEV2ZW50VGFyZ2V0ID0gRXZlbnRUYXJnZXQ+IGV4dGVuZHMgRXZlbnQge1xyXG5cdGdldCBsZW5ndGhDb21wdXRhYmxlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fbGVuZ3RoQ29tcHV0YWJsZTsgfVxyXG5cdHByb3RlY3RlZCBfbGVuZ3RoQ29tcHV0YWJsZTogYm9vbGVhbjtcclxuXHJcblx0Z2V0IGxvYWRlZCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fbG9hZGVkOyB9XHJcblx0cHJvdGVjdGVkIF9sb2FkZWQ6IG51bWJlcjtcclxuXHJcblx0Z2V0IHRvdGFsKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl90b3RhbDsgfVxyXG5cdHByb3RlY3RlZCBfdG90YWw6IG51bWJlcjtcclxuXHJcblx0Y29uc3RydWN0b3IodHlwZTogc3RyaW5nLCBldmVudEluaXREaWN0PzogUHJvZ3Jlc3NFdmVudEluaXQpIHtcclxuXHRcdHN1cGVyKHR5cGUsIGV2ZW50SW5pdERpY3QpO1xyXG5cdFx0aWYgKGV2ZW50SW5pdERpY3QpIHtcclxuXHRcdFx0dGhpcy5fbGVuZ3RoQ29tcHV0YWJsZSA9IGV2ZW50SW5pdERpY3QubGVuZ3RoQ29tcHV0YWJsZTtcclxuXHRcdFx0dGhpcy5fbG9hZGVkID0gZXZlbnRJbml0RGljdC5sb2FkZWQ7XHJcblx0XHRcdHRoaXMuX3RvdGFsID0gZXZlbnRJbml0RGljdC50b3RhbDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRMaXN0ZW5lciB7XHJcblx0KGV2dDogRXZlbnQpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50TGlzdGVuZXJPYmplY3Qge1xyXG5cdGhhbmRsZUV2ZW50KGV2dDogRXZlbnQpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50TGlzdGVuZXJPcHRpb25zIHtcclxuXHRjYXB0dXJlPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyBleHRlbmRzIEV2ZW50TGlzdGVuZXJPcHRpb25zIHtcclxuXHRvbmNlPzogYm9vbGVhbjtcclxuXHRwYXNzaXZlPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCA9IEV2ZW50TGlzdGVuZXIgfCBFdmVudExpc3RlbmVyT2JqZWN0O1xyXG5cclxuaW50ZXJmYWNlIEV2ZW50TGlzdGVuZXJSZWNvcmQgZXh0ZW5kcyBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyB7XHJcblx0bGlzdGVuZXI6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3Q7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRUYXJnZXQge1xyXG5cclxuXHRwcm90ZWN0ZWQgX2xpc3RlbmVyczoge1trZXk6IHN0cmluZ106IEV2ZW50TGlzdGVuZXJSZWNvcmRbXX0gPSB7fTtcclxuXHJcblx0LyoqXHJcblx0ICogQXBwZW5kcyBhbiBldmVudCBsaXN0ZW5lciBmb3IgZXZlbnRzIHdob3NlIHR5cGUgYXR0cmlidXRlIHZhbHVlIGlzIHR5cGUuIFRoZSBjYWxsYmFjayBhcmd1bWVudCBzZXRzIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBldmVudCBpcyBkaXNwYXRjaGVkLlxyXG5cdCAqXHJcblx0ICogVGhlIG9wdGlvbnMgYXJndW1lbnQgc2V0cyBsaXN0ZW5lci1zcGVjaWZpYyBvcHRpb25zLiBGb3IgY29tcGF0aWJpbGl0eSB0aGlzIGNhbiBiZSBhIGJvb2xlYW4sIGluIHdoaWNoIGNhc2UgdGhlIG1ldGhvZCBiZWhhdmVzIGV4YWN0bHkgYXMgaWYgdGhlIHZhbHVlIHdhcyBzcGVjaWZpZWQgYXMgb3B0aW9ucydzIGNhcHR1cmUuXHJcblx0ICpcclxuXHQgKiBXaGVuIHNldCB0byB0cnVlLCBvcHRpb25zJ3MgY2FwdHVyZSBwcmV2ZW50cyBjYWxsYmFjayBmcm9tIGJlaW5nIGludm9rZWQgd2hlbiB0aGUgZXZlbnQncyBldmVudFBoYXNlIGF0dHJpYnV0ZSB2YWx1ZSBpcyBCVUJCTElOR19QSEFTRS4gV2hlbiBmYWxzZSAob3Igbm90IHByZXNlbnQpLCBjYWxsYmFjayB3aWxsIG5vdCBiZSBpbnZva2VkIHdoZW4gZXZlbnQncyBldmVudFBoYXNlIGF0dHJpYnV0ZSB2YWx1ZSBpcyBDQVBUVVJJTkdfUEhBU0UuIEVpdGhlciB3YXksIGNhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCBpZiBldmVudCdzIGV2ZW50UGhhc2UgYXR0cmlidXRlIHZhbHVlIGlzIEFUX1RBUkdFVC5cclxuXHQgKlxyXG5cdCAqIFdoZW4gc2V0IHRvIHRydWUsIG9wdGlvbnMncyBwYXNzaXZlIGluZGljYXRlcyB0aGF0IHRoZSBjYWxsYmFjayB3aWxsIG5vdCBjYW5jZWwgdGhlIGV2ZW50IGJ5IGludm9raW5nIHByZXZlbnREZWZhdWx0KCkuIFRoaXMgaXMgdXNlZCB0byBlbmFibGUgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9ucyBkZXNjcmliZWQgaW4gwqcgMi44IE9ic2VydmluZyBldmVudCBsaXN0ZW5lcnMuXHJcblx0ICpcclxuXHQgKiBXaGVuIHNldCB0byB0cnVlLCBvcHRpb25zJ3Mgb25jZSBpbmRpY2F0ZXMgdGhhdCB0aGUgY2FsbGJhY2sgd2lsbCBvbmx5IGJlIGludm9rZWQgb25jZSBhZnRlciB3aGljaCB0aGUgZXZlbnQgbGlzdGVuZXIgd2lsbCBiZSByZW1vdmVkLlxyXG5cdCAqXHJcblx0ICogVGhlIGV2ZW50IGxpc3RlbmVyIGlzIGFwcGVuZGVkIHRvIHRhcmdldCdzIGV2ZW50IGxpc3RlbmVyIGxpc3QgYW5kIGlzIG5vdCBhcHBlbmRlZCBpZiBpdCBoYXMgdGhlIHNhbWUgdHlwZSwgY2FsbGJhY2ssIGFuZCBjYXB0dXJlLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhZGRFdmVudExpc3RlbmVyKHR5cGU6IHN0cmluZywgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsIG9wdGlvbnM/OiBib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkIHtcclxuXHRcdGlmICghbGlzdGVuZXIpIHJldHVybjtcclxuXHRcdGlmICghKHR5cGUgaW4gdGhpcy5fbGlzdGVuZXJzKSkge1xyXG5cdFx0XHR0aGlzLl9saXN0ZW5lcnNbdHlwZV0gPSBbXTtcclxuXHRcdH1cclxuXHRcdGxldCByZWNvcmRlcjogRXZlbnRMaXN0ZW5lclJlY29yZCA9IHsgbGlzdGVuZXIgfTtcclxuXHRcdGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJib29sZWFuXCIpIHtcclxuXHRcdFx0cmVjb3JkZXIuY2FwdHVyZSA9IG9wdGlvbnM7XHJcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xyXG5cdFx0XHRyZWNvcmRlciA9IHsgLi4ub3B0aW9ucywgbGlzdGVuZXIgfTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9saXN0ZW5lcnNbdHlwZV0ucHVzaChyZWNvcmRlcik7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBEaXNwYXRjaGVzIGEgc3ludGhldGljIGV2ZW50IGV2ZW50IHRvIHRhcmdldCBhbmQgcmV0dXJucyB0cnVlIGlmIGVpdGhlciBldmVudCdzIGNhbmNlbGFibGUgYXR0cmlidXRlIHZhbHVlIGlzIGZhbHNlIG9yIGl0cyBwcmV2ZW50RGVmYXVsdCgpIG1ldGhvZCB3YXMgbm90IGludm9rZWQsIGFuZCBmYWxzZSBvdGhlcndpc2UuXHJcblx0ICovXHJcblx0cHVibGljIGRpc3BhdGNoRXZlbnQoZXZlbnQ6IEV2ZW50KTogYm9vbGVhbiB7XHJcblxyXG5cdFx0aWYgKCFldmVudCB8fCB0eXBlb2YgZXZlbnQudHlwZSAhPSAnc3RyaW5nJykgcmV0dXJuIHRydWU7XHJcblx0XHRjb25zdCBvcmlnaW5fcmVjb3JkZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2ZW50LnR5cGVdO1xyXG5cdFx0aWYgKCFvcmlnaW5fcmVjb3JkZXJzKSByZXR1cm4gdHJ1ZTtcclxuXHJcblx0XHRjb25zdCByZWNvcmRlcnMgPSBvcmlnaW5fcmVjb3JkZXJzLnNsaWNlKCk7XHJcblx0XHRpZiAoIXJlY29yZGVycy5sZW5ndGgpIHJldHVybiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcclxuXHRcdGV2ZW50WydfdGFyZ2V0J10gPSB0aGlzO1xyXG5cdFx0bGV0IG9uY2VfbGlzdGVuZXJzOiBFdmVudExpc3RlbmVyUmVjb3JkW10gPSBbXTtcclxuXHRcdGZvciAoY29uc3QgcmVjb3JkZXIgb2YgcmVjb3JkZXJzKSB7XHJcblx0XHRcdGxldCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lciA9IG51bGw7XHJcblx0XHRcdGlmICgocmVjb3JkZXIubGlzdGVuZXIgYXMgRXZlbnRMaXN0ZW5lck9iamVjdCkuaGFuZGxlRXZlbnQpIHtcclxuXHRcdFx0XHRsaXN0ZW5lciA9IChyZWNvcmRlci5saXN0ZW5lciBhcyBFdmVudExpc3RlbmVyT2JqZWN0KS5oYW5kbGVFdmVudDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRsaXN0ZW5lciA9IHJlY29yZGVyLmxpc3RlbmVyIGFzIEV2ZW50TGlzdGVuZXI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0XHRsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KTtcclxuXHRcdFx0XHRpZiAocmVjb3JkZXIub25jZSkge1xyXG5cdFx0XHRcdFx0b25jZV9saXN0ZW5lcnMucHVzaChyZWNvcmRlcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSBicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG9uY2VfbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdG9yaWdpbl9yZWNvcmRlcnMuc3BsaWNlKG9yaWdpbl9yZWNvcmRlcnMuaW5kZXhPZihvbmNlX2xpc3RlbmVyc1tpXSksIDEpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICFldmVudC5kZWZhdWx0UHJldmVudGVkO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVtb3ZlcyB0aGUgZXZlbnQgbGlzdGVuZXIgaW4gdGFyZ2V0J3MgZXZlbnQgbGlzdGVuZXIgbGlzdCB3aXRoIHRoZSBzYW1lIHR5cGUsIGNhbGxiYWNrLCBhbmQgb3B0aW9ucy5cclxuXHQgKi9cclxuXHRwdWJsaWMgcmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LCBvcHRpb25zPzogRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCBib29sZWFuKTogdm9pZCB7XHJcblx0XHRpZiAoIWxpc3RlbmVyIHx8ICEodHlwZSBpbiB0aGlzLl9saXN0ZW5lcnMpKSByZXR1cm47XHJcblx0XHRjb25zdCByZWNvcmRlcnMgPSB0aGlzLl9saXN0ZW5lcnNbdHlwZV07XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJlY29yZGVycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCByZWNvcmRlciA9IHJlY29yZGVyc1tpXTtcclxuXHRcdFx0aWYgKHJlY29yZGVyLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xyXG5cdFx0XHRcdGxldCBzYW1lT3B0aW9ucyA9IHRydWU7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBvcHRpb25zID09PSBcImJvb2xlYW5cIikge1xyXG5cdFx0XHRcdFx0c2FtZU9wdGlvbnMgPSByZWNvcmRlci5jYXB0dXJlID09IG9wdGlvbnM7XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcclxuXHRcdFx0XHRcdHNhbWVPcHRpb25zID0gcmVjb3JkZXIuY2FwdHVyZSA9PSBvcHRpb25zLmNhcHR1cmU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChzYW1lT3B0aW9ucykge1xyXG5cdFx0XHRcdFx0cmVjb3JkZXJzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGV4cG9ydHM6IHtcclxuXHRcdFBoYXNlLFxyXG5cdFx0RXZlbnQsXHJcblx0XHRQcm9ncmVzc0V2ZW50LFxyXG5cdFx0RXZlbnRUYXJnZXRcclxuXHR9XHJcbn07XHJcbiIsImludGVyZmFjZSBXZWJBUElNb2R1bGUge1xyXG5cdHRpY2s/OiAobm93OiBudW1iZXIpID0+IHZvaWQ7XHJcblx0aW5pdGlhbGl6ZT86ICgpID0+IHZvaWQ7XHJcblx0dW5pbml0aWFsaXplPzogKCkgPT4gdm9pZDtcclxuXHRleHBvcnRzPzogUmVjb3JkPHN0cmluZywgYW55PlxyXG59XHJcblxyXG5sZXQgcmVnaXN0ZXJlZF9tb2R1bGVzOiBXZWJBUElNb2R1bGVbXSA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemUobW9kdWxlczogV2ViQVBJTW9kdWxlW10pIHtcclxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsVGhpcywgJ3dpbmRvdycsIHsgdmFsdWU6IGdsb2JhbFRoaXMgfSk7XHJcblx0Zm9yIChjb25zdCBtIG9mIG1vZHVsZXMpIHtcclxuXHRcdGlmIChtLmluaXRpYWxpemUpIG0uaW5pdGlhbGl6ZSgpO1xyXG5cdFx0aWYgKCFtLmV4cG9ydHMpIGNvbnRpbnVlO1xyXG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gbS5leHBvcnRzKSB7XHJcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csIGtleSwgeyB2YWx1ZTogbS5leHBvcnRzW2tleV0gfSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJlZ2lzdGVyZWRfbW9kdWxlcyA9IG1vZHVsZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5hbGl6ZSgpIHtcclxuXHRmb3IgKGNvbnN0IG0gb2YgcmVnaXN0ZXJlZF9tb2R1bGVzKSB7XHJcblx0XHRpZiAobS51bmluaXRpYWxpemUpIG0udW5pbml0aWFsaXplKCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGljaygpIHtcclxuXHRmb3IgKGNvbnN0IG0gb2YgcmVnaXN0ZXJlZF9tb2R1bGVzKSB7XHJcblx0XHRpZiAobS50aWNrICYmIFdlYkFQSS5nZXRIaWdoUmVzVGltZVN0YW1wKSB7XHJcblx0XHRcdG0udGljayhXZWJBUEkuZ2V0SGlnaFJlc1RpbWVTdGFtcCgpKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbG9iYWxUaGlzLCBcIldlYkFQSVwiLCB7IHZhbHVlOiB7XHJcblx0dGljayxcclxuXHRmaW5hbGl6ZSxcclxuXHRnZXRIaWdoUmVzVGltZVN0YW1wOiBEYXRlLm5vdyxcclxufX0pO1xyXG4iLCJpbXBvcnQgJy4vY29uc29sZS51bml0eSc7XHJcbmltcG9ydCBhbmltYXRpb25fZnJhbWUgZnJvbSAnLi9hbmltYXRpb25mcmFtZSc7XHJcbmltcG9ydCBldmVudCBmcm9tICcuL2V2ZW50JztcclxuaW1wb3J0IHRpbWVyIGZyb20gJy4vdGltZXInO1xyXG5pbXBvcnQgcGVyZm9ybWFuY2UgZnJvbSAnLi9wZXJmb3JtYW5jZSc7XHJcbmltcG9ydCBtaXNjIGZyb20gJy4vbWlzYy51bml0eSc7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZS51bml0eSc7XHJcbmltcG9ydCB4aHIgZnJvbSAnLi94aHIveGhyLnVuaXR5JztcclxuXHJcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tIFwiLi9pbmRleC5jb21tb25cIjtcclxuaW5pdGlhbGl6ZShbXHJcblx0YW5pbWF0aW9uX2ZyYW1lLFxyXG5cdGV2ZW50LFxyXG5cdHRpbWVyLFxyXG5cdHBlcmZvcm1hbmNlLFxyXG5cdG1pc2MsXHJcblx0c3RvcmFnZSxcclxuXHR4aHIsXHJcbl0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2luZG93OyIsImltcG9ydCB7IFN5c3RlbSB9IGZyb20gXCJjc2hhcnBcIjtcclxuT2JqZWN0LnNldFByb3RvdHlwZU9mKFN5c3RlbS5UZXh0LkVuY29kaW5nLlVURjgsIFN5c3RlbS5UZXh0LkVuY29kaW5nLnByb3RvdHlwZSk7XHJcbk9iamVjdC5zZXRQcm90b3R5cGVPZihTeXN0ZW0uVGV4dC5FbmNvZGluZy5BU0NJSSwgU3lzdGVtLlRleHQuRW5jb2RpbmcucHJvdG90eXBlKTtcclxuXHJcbmZ1bmN0aW9uIGJ0b2EodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuXHRyZXR1cm4gU3lzdGVtLkNvbnZlcnQuVG9CYXNlNjRTdHJpbmcoU3lzdGVtLlRleHQuRW5jb2RpbmcuVVRGOC5HZXRCeXRlcyh0ZXh0KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0b2IoYmFzZTY0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdGxldCBkYXRhID0gU3lzdGVtLkNvbnZlcnQuRnJvbUJhc2U2NFN0cmluZyhiYXNlNjQpO1xyXG5cdGxldCBiYXNlNjREZWNvZGVkID0gU3lzdGVtLlRleHQuRW5jb2RpbmcuQVNDSUkuR2V0U3RyaW5nKGRhdGEpO1xyXG5cdHJldHVybiBiYXNlNjREZWNvZGVkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZXhwb3J0czoge1xyXG5cdFx0YXRvYixcclxuXHRcdGJ0b2FcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCB7IEV2ZW50VGFyZ2V0IH0gZnJvbSBcIi4vZXZlbnRcIjtcclxuXHJcbi8qKiBFbmNhcHN1bGF0ZXMgYSBzaW5nbGUgcGVyZm9ybWFuY2UgbWV0cmljIHRoYXQgaXMgcGFydCBvZiB0aGUgcGVyZm9ybWFuY2UgdGltZWxpbmUuIEEgcGVyZm9ybWFuY2UgZW50cnkgY2FuIGJlIGRpcmVjdGx5IGNyZWF0ZWQgYnkgbWFraW5nIGEgcGVyZm9ybWFuY2UgbWFyayBvciBtZWFzdXJlIChmb3IgZXhhbXBsZSBieSBjYWxsaW5nIHRoZSBtYXJrKCkgbWV0aG9kKSBhdCBhbiBleHBsaWNpdCBwb2ludCBpbiBhbiBhcHBsaWNhdGlvbi4gUGVyZm9ybWFuY2UgZW50cmllcyBhcmUgYWxzbyBjcmVhdGVkIGluIGluZGlyZWN0IHdheXMgc3VjaCBhcyBsb2FkaW5nIGEgcmVzb3VyY2UgKHN1Y2ggYXMgYW4gaW1hZ2UpLiAqL1xyXG5jbGFzcyBQZXJmb3JtYW5jZUVudHJ5IHtcclxuXHRyZWFkb25seSBkdXJhdGlvbjogbnVtYmVyO1xyXG5cdHJlYWRvbmx5IGVudHJ5VHlwZTogc3RyaW5nO1xyXG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxuXHRyZWFkb25seSBzdGFydFRpbWU6IG51bWJlcjtcclxuXHJcblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBzdGFydFRpbWU6IG51bWJlciwgZW50cnlUeXBlOiBzdHJpbmcsIGR1cmF0aW9uID0gMCkge1xyXG5cdFx0dGhpcy5zdGFydFRpbWUgPSBzdGFydFRpbWU7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5lbnRyeVR5cGUgPSBlbnRyeVR5cGU7XHJcblx0XHR0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XHJcblx0fVxyXG5cclxuXHR0b0pTT04oKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRkdXJhdGlvbjogdGhpcy5kdXJhdGlvbixcclxuXHRcdFx0ZW50cnlUeXBlOiB0aGlzLmVudHJ5VHlwZSxcclxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLFxyXG5cdFx0XHRzdGFydFRpbWU6IHRoaXMuc3RhcnRUaW1lLFxyXG5cdFx0fTtcclxuXHR9O1xyXG59XHJcblxyXG5jbGFzcyBQZXJmb3JtYW5jZU1hcmsgZXh0ZW5kcyBQZXJmb3JtYW5jZUVudHJ5IHt9XHJcbmNsYXNzIFBlcmZvcm1hbmNlTWVhc3VyZSBleHRlbmRzIFBlcmZvcm1hbmNlRW50cnkge31cclxudHlwZSBQZXJmb3JtYW5jZUVudHJ5TGlzdCA9IFBlcmZvcm1hbmNlRW50cnlbXTtcclxuXHJcbmNvbnN0IE1BUktfVFlQRSA9IFwibWFya1wiO1xyXG5jb25zdCBNRUFTVVJFX1RZUEUgPSBcIm1lYXN1cmVcIjtcclxuXHJcbmNsYXNzIFBlcmZvcm1hbmNlIGV4dGVuZHMgRXZlbnRUYXJnZXQge1xyXG5cdHJlYWRvbmx5IHRpbWVPcmlnaW46IG51bWJlcjtcclxuXHRwcml2YXRlIF9lbnRyaWVzID0gbmV3IE1hcDxzdHJpbmcsIFBlcmZvcm1hbmNlRW50cnlMaXN0PigpO1xyXG5cclxuXHRub3coKSB7XHJcblx0XHRyZXR1cm4gRGF0ZS5ub3coKSAtIHRoaXMudGltZU9yaWdpbjtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMudGltZU9yaWdpbiA9IERhdGUubm93KCk7XHJcblx0fVxyXG5cclxuXHRnZXRFbnRyaWVzKCk6IFBlcmZvcm1hbmNlRW50cnlMaXN0IHtcclxuXHRcdGxldCByZXQ6IFBlcmZvcm1hbmNlRW50cnlMaXN0ID0gW107XHJcblx0XHRmb3IgKGNvbnN0IFt0eXBlLCBsaXN0XSBvZiB0aGlzLl9lbnRyaWVzKSB7XHJcblx0XHRcdHJldCA9IHJldC5jb25jYXQobGlzdCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxuXHJcblx0Z2V0RW50cmllc0J5TmFtZShuYW1lOiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcpOiBQZXJmb3JtYW5jZUVudHJ5TGlzdCB7XHJcblx0XHRsZXQgcmV0OiBQZXJmb3JtYW5jZUVudHJ5TGlzdCA9IFtdO1xyXG5cdFx0Zm9yIChjb25zdCBbZW50cnlUeXBlLCBsaXN0XSBvZiB0aGlzLl9lbnRyaWVzKSB7XHJcblx0XHRcdGlmICh0eXBlICYmIHR5cGUgIT0gZW50cnlUeXBlKSBjb250aW51ZTtcclxuXHRcdFx0bGlzdC5tYXAoZSA9PiB7XHJcblx0XHRcdFx0aWYgKGUubmFtZSA9PSBuYW1lKSB7XHJcblx0XHRcdFx0XHRyZXQucHVzaChlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJldDtcclxuXHR9XHJcblxyXG5cdGdldEVudHJpZXNCeVR5cGUodHlwZTogc3RyaW5nKTogUGVyZm9ybWFuY2VFbnRyeUxpc3Qge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2VudHJpZXMuZ2V0KHR5cGUpO1xyXG5cdH1cclxuXHJcblx0bWFyayhtYXJrTmFtZTogc3RyaW5nKSB7XHJcblx0XHRjb25zdCBtYXJrID0gbmV3IFBlcmZvcm1hbmNlTWFyayhtYXJrTmFtZSwgdGhpcy5ub3coKSwgTUFSS19UWVBFKTtcclxuXHRcdGxldCBtYXJrczogUGVyZm9ybWFuY2VFbnRyeUxpc3QgPSB0aGlzLl9lbnRyaWVzLmdldChNQVJLX1RZUEUpO1xyXG5cdFx0aWYgKCFtYXJrcykge1xyXG5cdFx0XHRtYXJrcyA9IFsgbWFyayBdO1xyXG5cdFx0XHR0aGlzLl9lbnRyaWVzLnNldChNQVJLX1RZUEUsIG1hcmtzKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG1hcmtzLnB1c2gobWFyayk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbWFyaztcclxuXHR9XHJcblxyXG5cdG1lYXN1cmUobWVhc3VyZU5hbWU6IHN0cmluZywgc3RhcnRNYXJrOiBzdHJpbmcsIGVuZE1hcms6IHN0cmluZykge1xyXG5cdFx0bGV0IHN0YXJ0cyA9IHRoaXMuZ2V0RW50cmllc0J5TmFtZShzdGFydE1hcmssIE1BUktfVFlQRSk7XHJcblx0XHRpZiAoc3RhcnRzLmxlbmd0aCA9PSAwKSB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtYXJrICcke3N0YXJ0TWFya30nIGRvZXMgbm90IGV4aXN0LmApO1xyXG5cdFx0bGV0IGVuZHMgPSB0aGlzLmdldEVudHJpZXNCeU5hbWUoZW5kTWFyaywgTUFSS19UWVBFKTtcclxuXHRcdGlmIChlbmRzLmxlbmd0aCA9PSAwKSB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtYXJrICcke2VuZE1hcmt9JyBkb2VzIG5vdCBleGlzdC5gKTtcclxuXHRcdGNvbnN0IHN0YXJ0ID0gc3RhcnRzW3N0YXJ0cy5sZW5ndGggLSAxXTtcclxuXHRcdGNvbnN0IGVuZCA9IGVuZHNbZW5kcy5sZW5ndGggLSAxXTtcclxuXHRcdGNvbnN0IG1lYXN1cmUgPSBuZXcgUGVyZm9ybWFuY2VNZWFzdXJlKG1lYXN1cmVOYW1lLCBzdGFydC5zdGFydFRpbWUsIE1FQVNVUkVfVFlQRSwgZW5kLnN0YXJ0VGltZSAtIHN0YXJ0LnN0YXJ0VGltZSk7XHJcblx0XHRsZXQgbWVhc3VyZXM6IFBlcmZvcm1hbmNlRW50cnlMaXN0ID0gdGhpcy5fZW50cmllcy5nZXQoTUVBU1VSRV9UWVBFKTtcclxuXHRcdGlmICghbWVhc3VyZXMpIHtcclxuXHRcdFx0bWVhc3VyZXMgPSBbIG1lYXN1cmUgXTtcclxuXHRcdFx0dGhpcy5fZW50cmllcy5zZXQoTUVBU1VSRV9UWVBFLCBtZWFzdXJlcyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRtZWFzdXJlcy5wdXNoKG1lYXN1cmUpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG1lYXN1cmU7XHJcblx0fVxyXG5cclxuXHRjbGVhck1hcmtzKG1hcmtOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdGxldCBtYXJrcyA9IHRoaXMuX2VudHJpZXMuZ2V0KE1BUktfVFlQRSk7XHJcblx0XHRpZiAobWFya3MpIHtcclxuXHRcdFx0bWFya3MgPSBtYXJrcy5maWx0ZXIoIG0gPT4gbS5uYW1lID09PSBtYXJrTmFtZSApO1xyXG5cdFx0XHR0aGlzLl9lbnRyaWVzLnNldChNQVJLX1RZUEUsIG1hcmtzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNsZWFyTWVhc3VyZXMobWVhc3VyZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0bGV0IG1lYXN1cmVzID0gdGhpcy5fZW50cmllcy5nZXQoTUFSS19UWVBFKTtcclxuXHRcdGlmIChtZWFzdXJlcykge1xyXG5cdFx0XHRtZWFzdXJlcyA9IG1lYXN1cmVzLmZpbHRlciggbSA9PiBtLm5hbWUgPT09IG1lYXN1cmVOYW1lICk7XHJcblx0XHRcdHRoaXMuX2VudHJpZXMuc2V0KE1FQVNVUkVfVFlQRSwgbWVhc3VyZXMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dG9KU09OKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dGltZU9yaWdpbjogdGhpcy50aW1lT3JpZ2luLFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZXhwb3J0czoge1xyXG5cdFx0UGVyZm9ybWFuY2UsXHJcblx0XHRQZXJmb3JtYW5jZUVudHJ5LFxyXG5cdFx0UGVyZm9ybWFuY2VNYXJrLFxyXG5cdFx0UGVyZm9ybWFuY2VNZWFzdXJlLFxyXG5cdFx0cGVyZm9ybWFuY2U6IG5ldyBQZXJmb3JtYW5jZSgpXHJcblx0fVxyXG59O1xyXG4iLCJpbnRlcmZhY2UgU3RvcmFnZUl0ZW0ge1xyXG5cdGtleTogc3RyaW5nLFxyXG5cdHZhbHVlOiBzdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9yYWdlIHtcclxuXHJcblx0cHJvdGVjdGVkIF9pdGVtczogU3RvcmFnZUl0ZW1bXSA9IFtdO1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2Yga2V5L3ZhbHVlIHBhaXJzIGN1cnJlbnRseSBwcmVzZW50IGluIHRoZSBsaXN0IGFzc29jaWF0ZWQgd2l0aCB0aGUgb2JqZWN0LlxyXG5cdCAqL1xyXG5cdGdldCBsZW5ndGgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2l0ZW1zLmxlbmd0aDsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBFbXB0aWVzIHRoZSBsaXN0IGFzc29jaWF0ZWQgd2l0aCB0aGUgb2JqZWN0IG9mIGFsbCBrZXkvdmFsdWUgcGFpcnMsIGlmIHRoZXJlIGFyZSBhbnkuXHJcblx0ICovXHJcblx0Y2xlYXIoKTogdm9pZCB7XHJcblx0XHR0aGlzLl9pdGVtcyA9IFtdO1xyXG5cdFx0dGhpcy5mbHVzaCgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgY3VycmVudCB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleSwgb3IgbnVsbCBpZiB0aGUgZ2l2ZW4ga2V5IGRvZXMgbm90IGV4aXN0IGluIHRoZSBsaXN0IGFzc29jaWF0ZWQgd2l0aCB0aGUgb2JqZWN0LlxyXG5cdCAqL1xyXG5cdGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcclxuXHRcdGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9pdGVtcykge1xyXG5cdFx0XHRpZiAoaXRlbS5rZXkgPT09IGtleSlcclxuXHRcdFx0XHRyZXR1cm4gaXRlbS52YWx1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgbnRoIGtleSBpbiB0aGUgbGlzdCwgb3IgbnVsbCBpZiBuIGlzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB0aGUgbnVtYmVyIG9mIGtleS92YWx1ZSBwYWlycyBpbiB0aGUgb2JqZWN0LlxyXG5cdCAqL1xyXG5cdGtleShpbmRleDogbnVtYmVyKTogc3RyaW5nIHwgbnVsbCB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChpID09PSBpbmRleClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5faXRlbXNbaV0ua2V5O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW1vdmVzIHRoZSBrZXkvdmFsdWUgcGFpciB3aXRoIHRoZSBnaXZlbiBrZXkgZnJvbSB0aGUgbGlzdCBhc3NvY2lhdGVkIHdpdGggdGhlIG9iamVjdCwgaWYgYSBrZXkvdmFsdWUgcGFpciB3aXRoIHRoZSBnaXZlbiBrZXkgZXhpc3RzLlxyXG5cdCAqL1xyXG5cdHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdGxldCBpZHggPSAtMTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5faXRlbXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKHRoaXMuX2l0ZW1zW2ldLmtleSA9PT0ga2V5KSB7XHJcblx0XHRcdFx0aWR4ID0gaTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKGlkeCAhPSAtMSkge1xyXG5cdFx0XHR0aGlzLl9pdGVtcy5zcGxpY2UoaWR4LCAxKTtcclxuXHRcdFx0dGhpcy5mbHVzaCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHBhaXIgaWRlbnRpZmllZCBieSBrZXkgdG8gdmFsdWUsIGNyZWF0aW5nIGEgbmV3IGtleS92YWx1ZSBwYWlyIGlmIG5vbmUgZXhpc3RlZCBmb3Iga2V5IHByZXZpb3VzbHkuXHJcblx0ICpcclxuXHQgKiBUaHJvd3MgYSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIERPTUV4Y2VwdGlvbiBleGNlcHRpb24gaWYgdGhlIG5ldyB2YWx1ZSBjb3VsZG4ndCBiZSBzZXQuIChTZXR0aW5nIGNvdWxkIGZhaWwgaWYsIGUuZy4sIHRoZSB1c2VyIGhhcyBkaXNhYmxlZCBzdG9yYWdlIGZvciB0aGUgc2l0ZSwgb3IgaWYgdGhlIHF1b3RhIGhhcyBiZWVuIGV4Y2VlZGVkLilcclxuXHQgKi9cclxuXHRzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcblx0XHRsZXQgaWR4ID0gLTE7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmICh0aGlzLl9pdGVtc1tpXS5rZXkgPT09IGtleSkge1xyXG5cdFx0XHRcdGlkeCA9IGk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChpZHggIT0gLTEpIHtcclxuXHRcdFx0aWYgKHRoaXMuX2l0ZW1zW2lkeF0udmFsdWUgIT0gdmFsdWUpIHtcclxuXHRcdFx0XHR0aGlzLl9pdGVtc1tpZHhdLnZhbHVlID0gdmFsdWU7XHJcblx0XHRcdFx0dGhpcy5mbHVzaCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9pdGVtcy5wdXNoKHtrZXksIHZhbHVlfSk7XHJcblx0XHRcdHRoaXMuZmx1c2goKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHJvdGVjdGVkIGZsdXNoKCkge31cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGV4cG9ydHM6IHtcclxuXHRcdFN0b3JhZ2UsXHJcblx0XHRzZXNzaW9uU3RvcmFnZTogbmV3IFN0b3JhZ2UoKSxcclxuXHR9XHJcbn07XHJcbiIsIi8vIEB0cy1ub2NoZWNrXHJcbmltcG9ydCB7IFN5c3RlbSwgVW5pdHlFbmdpbmUgfSBmcm9tIFwiY3NoYXJwXCI7XHJcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnXHJcblxyXG5jbGFzcyBMb2NhbFN0b3JhZ2UgZXh0ZW5kcyBTdG9yYWdlIHtcclxuXHRwcm90ZWN0ZWQgJGZpbGU6IHN0cmluZztcclxuXHRwcm90ZWN0ZWQgJGRpcmVjdG9yeTogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihmaWxlOiBzdHJpbmcgPSBgJHtVbml0eUVuZ2luZS5BcHBsaWNhdGlvbi5wZXJzaXN0ZW50RGF0YVBhdGh9L3dlYmFwaS9sb2NhbFN0b3JhZ2UuanNvbmApIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLiRmaWxlID0gZmlsZTtcclxuXHRcdHRoaXMuJGRpcmVjdG9yeSA9IFN5c3RlbS5JTy5QYXRoLkdldERpcmVjdG9yeU5hbWUodGhpcy4kZmlsZSk7XHJcblx0XHRpZiAoU3lzdGVtLklPLkZpbGUuRXhpc3RzKGZpbGUpKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Y29uc3Qgc3RyZWFtID0gbmV3IFN5c3RlbS5JTy5TdHJlYW1SZWFkZXIoZmlsZSk7XHJcblx0XHRcdFx0Y29uc3QgdGV4dCA9IHN0cmVhbS5SZWFkVG9FbmQoKTtcclxuXHRcdFx0XHR0aGlzLl9pdGVtcyA9IEpTT04ucGFyc2UodGV4dCk7XHJcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IG9wZW4gc3RvcmFnZSBmaWxlIFwiICsgZmlsZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBmbHVzaCgpIHtcclxuXHRcdGlmICghU3lzdGVtLklPLkZpbGUuRXhpc3RzKHRoaXMuJGRpcmVjdG9yeSkpIHtcclxuXHRcdFx0U3lzdGVtLklPLkRpcmVjdG9yeS5DcmVhdGVEaXJlY3RvcnkodGhpcy4kZGlyZWN0b3J5KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IHN0cmVhbSA9IG5ldyBTeXN0ZW0uSU8uU3RyZWFtV3JpdGVyKHRoaXMuJGZpbGUpO1xyXG5cdFx0aWYgKHN0cmVhbSkge1xyXG5cdFx0XHRsZXQgdGV4dCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuX2l0ZW1zLCB1bmRlZmluZWQsICdcXHQnKTtcclxuXHRcdFx0c3RyZWFtLldyaXRlKHRleHQpO1xyXG5cdFx0XHRzdHJlYW0uRmx1c2goKTtcclxuXHRcdFx0c3RyZWFtLkRpc3Bvc2UoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBvcGVuIHN0b3JhZ2UgZmlsZSBcIiArIHRoaXMuJGZpbGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGV4cG9ydHM6IHtcclxuXHRcdFN0b3JhZ2UsXHJcblx0XHRzZXNzaW9uU3RvcmFnZTogbmV3IFN0b3JhZ2UoKSxcclxuXHRcdGxvY2FsU3RvcmFnZTogbmV3IExvY2FsU3RvcmFnZSgpLFxyXG5cdH1cclxufTtcclxuIiwidHlwZSBUaW1lckhhbmRsZXIgPSBGdW5jdGlvbjtcclxuXHJcbmludGVyZmFjZSBUaW1lciB7XHJcblx0aGFuZGxlcjogVGltZXJIYW5kbGVyO1xyXG5cdHRpbWVvdXQ6IG51bWJlcjtcclxuXHRuZXh0X3RpbWU/OiBudW1iZXI7XHJcblx0YXJncz86IGFueVtdO1xyXG5cdG9uZXNob3Q/OiBib29sZWFuO1xyXG59XHJcbmxldCBnbG9iYWxfdGltZXJfaWQgPSAwO1xyXG5cclxuY29uc3QgcGVuZGluZ190aW1lcnMgPSBuZXcgTWFwPG51bWJlciwgVGltZXI+KCk7XHJcbmNvbnN0IHByb2Nlc3NpbmdfdGltZXJzID0gbmV3IE1hcDxudW1iZXIsIFRpbWVyPigpO1xyXG5jb25zdCByZW1vdmluZ190aW1lcnMgPSBuZXcgU2V0PG51bWJlcj4oKTtcclxuXHJcbmZ1bmN0aW9uIHRpbWVyX2xvb3AoKXtcclxuXHRjb25zdCBub3cgPSBXZWJBUEkuZ2V0SGlnaFJlc1RpbWVTdGFtcCgpO1xyXG5cclxuXHRmb3IgKGNvbnN0IFtpZCwgdGltZXJdIG9mIHBlbmRpbmdfdGltZXJzKSB7XHJcblx0XHRwcm9jZXNzaW5nX3RpbWVycy5zZXQoaWQsIHRpbWVyKTtcclxuXHR9XHJcblx0cGVuZGluZ190aW1lcnMuY2xlYXIoKTtcclxuXHJcblx0Zm9yIChjb25zdCBpZCBvZiByZW1vdmluZ190aW1lcnMpIHtcclxuXHRcdHByb2Nlc3NpbmdfdGltZXJzLmRlbGV0ZShpZCk7XHJcblx0fVxyXG5cdHJlbW92aW5nX3RpbWVycy5jbGVhcigpO1xyXG5cclxuXHRmb3IgKGNvbnN0IFtpZCwgdGltZXJdIG9mIHByb2Nlc3NpbmdfdGltZXJzKSB7XHJcblx0XHRpZiAodGltZXIubmV4dF90aW1lIDw9IG5vdykge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGlmICh0aW1lci5oYW5kbGVyKSB0aW1lci5oYW5kbGVyLmFwcGx5KG51bGwsIHRpbWVyLmFyZ3MpO1xyXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoYEVycm9yIGluIHRpbWVyIGhhbmRsZXI6ICR7ZXJyb3IubWVzc2FnZX1cXG4ke2Vycm9yLnN0YWNrfWApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aW1lci5vbmVzaG90KSB7XHJcblx0XHRcdFx0cmVtb3ZpbmdfdGltZXJzLmFkZChpZCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGltZXIubmV4dF90aW1lID0gbm93ICsgdGltZXIudGltZW91dDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZV90aW1lcihoYW5kbGVyOiBUaW1lckhhbmRsZXIsIHRpbWVvdXQ/OiBudW1iZXIsIC4uLmFyZ3M6IGFueVtdKTogVGltZXIge1xyXG5cdHJldHVybiB7XHJcblx0XHRoYW5kbGVyLFxyXG5cdFx0dGltZW91dCxcclxuXHRcdG5leHRfdGltZTogV2ViQVBJLmdldEhpZ2hSZXNUaW1lU3RhbXAoKSArICh0aW1lb3V0IHx8IDApLFxyXG5cdFx0YXJnc1xyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBlbmRfdGltZXIodGltZXI6IFRpbWVyKTogbnVtYmVyIHtcclxuXHRwZW5kaW5nX3RpbWVycy5zZXQoKytnbG9iYWxfdGltZXJfaWQsIHRpbWVyKTtcclxuXHRyZXR1cm4gZ2xvYmFsX3RpbWVyX2lkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUaW1lb3V0KGhhbmRsZXI6IFRpbWVySGFuZGxlciwgdGltZW91dD86IG51bWJlciwgLi4uYXJnczogYW55W10pOiBudW1iZXIge1xyXG5cdGNvbnN0IHRpbWVyID0gbWFrZV90aW1lcihoYW5kbGVyLCB0aW1lb3V0LCAuLi5hcmdzKTtcclxuXHR0aW1lci5vbmVzaG90ID0gdHJ1ZTtcclxuXHRyZXR1cm4gcGVuZF90aW1lcih0aW1lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyVGltZW91dChoYW5kbGU/OiBudW1iZXIpOiB2b2lkIHtcclxuXHRyZW1vdmluZ190aW1lcnMuYWRkKGhhbmRsZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEludGVydmFsKGhhbmRsZXI6IFRpbWVySGFuZGxlciwgdGltZW91dD86IG51bWJlciwgLi4uYXJnczogYW55W10pOiBudW1iZXIge1xyXG5cdHJldHVybiBwZW5kX3RpbWVyKG1ha2VfdGltZXIoaGFuZGxlciwgdGltZW91dCwgLi4uYXJncykpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckludGVydmFsKGhhbmRsZT86IG51bWJlcik6IHZvaWQge1xyXG5cdHJlbW92aW5nX3RpbWVycy5hZGQoaGFuZGxlKTtcclxufVxyXG5cclxubGV0IHRpbWVyX2xvb3BfaWQgPSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGluaXRpYWxpemUoKSB7XHJcblx0XHR0aW1lcl9sb29wX2lkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWVyX2xvb3ApO1xyXG5cdH0sXHJcblx0dW5pbml0aWFsaXplKCkge1xyXG5cdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUodGltZXJfbG9vcF9pZCk7XHJcblx0fSxcclxuXHRleHBvcnRzOiB7XHJcblx0XHRzZXRUaW1lb3V0LFxyXG5cdFx0Y2xlYXJUaW1lb3V0LFxyXG5cdFx0c2V0SW50ZXJ2YWwsXHJcblx0XHRjbGVhckludGVydmFsLFxyXG5cdH1cclxufTtcclxuIiwiLy8gQ29weXJpZ2h0IMKpIDIwMTfigJMyMDE4IERvbWVuaWMgRGVuaWNvbGEgPGRAZG9tZW5pYy5tZT5cclxuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG5cclxuXHJcbmltcG9ydCBwYXJzZSBmcm9tIFwiLi9wYXJzZXIuanNcIjtcclxuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tIFwiLi9zZXJpYWxpemVyLmpzXCI7XHJcbmltcG9ydCB7XHJcblx0YXNjaWlMb3dlcmNhc2UsXHJcblx0c29sZWx5Q29udGFpbnNIVFRQVG9rZW5Db2RlUG9pbnRzLFxyXG5cdHNvbGV5Q29udGFpbnNIVFRQUXVvdGVkU3RyaW5nVG9rZW5Db2RlUG9pbnRzXHJcbn0gZnJvbSBcIi4vdXRpbHMuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1JTUVUeXBlIHtcclxuXHRjb25zdHJ1Y3RvcihzdHJpbmcpIHtcclxuXHRcdHN0cmluZyA9IFN0cmluZyhzdHJpbmcpO1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gcGFyc2Uoc3RyaW5nKTtcclxuXHRcdGlmIChyZXN1bHQgPT09IG51bGwpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgcGFyc2UgTUlNRSB0eXBlIHN0cmluZyBcIiR7c3RyaW5nfVwiYCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fdHlwZSA9IHJlc3VsdC50eXBlO1xyXG5cdFx0dGhpcy5fc3VidHlwZSA9IHJlc3VsdC5zdWJ0eXBlO1xyXG5cdFx0dGhpcy5fcGFyYW1ldGVycyA9IG5ldyBNSU1FVHlwZVBhcmFtZXRlcnMocmVzdWx0LnBhcmFtZXRlcnMpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHBhcnNlKHN0cmluZykge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0cmV0dXJuIG5ldyB0aGlzKHN0cmluZyk7XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0IGVzc2VuY2UoKSB7XHJcblx0XHRyZXR1cm4gYCR7dGhpcy50eXBlfS8ke3RoaXMuc3VidHlwZX1gO1xyXG5cdH1cclxuXHJcblx0Z2V0IHR5cGUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdHlwZTtcclxuXHR9XHJcblxyXG5cdHNldCB0eXBlKHZhbHVlKSB7XHJcblx0XHR2YWx1ZSA9IGFzY2lpTG93ZXJjYXNlKFN0cmluZyh2YWx1ZSkpO1xyXG5cclxuXHRcdGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB0eXBlOiBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZ1wiKTtcclxuXHRcdH1cclxuXHRcdGlmICghc29sZWx5Q29udGFpbnNIVFRQVG9rZW5Db2RlUG9pbnRzKHZhbHVlKSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdHlwZSAke3ZhbHVlfTogbXVzdCBjb250YWluIG9ubHkgSFRUUCB0b2tlbiBjb2RlIHBvaW50c2ApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX3R5cGUgPSB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdGdldCBzdWJ0eXBlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3N1YnR5cGU7XHJcblx0fVxyXG5cclxuXHRzZXQgc3VidHlwZSh2YWx1ZSkge1xyXG5cdFx0dmFsdWUgPSBhc2NpaUxvd2VyY2FzZShTdHJpbmcodmFsdWUpKTtcclxuXHJcblx0XHRpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc3VidHlwZTogbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmdcIik7XHJcblx0XHR9XHJcblx0XHRpZiAoIXNvbGVseUNvbnRhaW5zSFRUUFRva2VuQ29kZVBvaW50cyh2YWx1ZSkpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHN1YnR5cGUgJHt2YWx1ZX06IG11c3QgY29udGFpbiBvbmx5IEhUVFAgdG9rZW4gY29kZSBwb2ludHNgKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9zdWJ0eXBlID0gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRnZXQgcGFyYW1ldGVycygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9wYXJhbWV0ZXJzO1xyXG5cdH1cclxuXHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHQvLyBUaGUgc2VyaWFsaXplIGZ1bmN0aW9uIHdvcmtzIG9uIGJvdGggXCJNSU1FIHR5cGUgcmVjb3Jkc1wiIChpLmUuIHRoZSByZXN1bHRzIG9mIHBhcnNlKSBhbmQgb24gdGhpcyBjbGFzcywgc2luY2VcclxuXHRcdC8vIHRoaXMgY2xhc3MncyBpbnRlcmZhY2UgaXMgaWRlbnRpY2FsLlxyXG5cdFx0cmV0dXJuIHNlcmlhbGl6ZSh0aGlzKTtcclxuXHR9XHJcblxyXG5cdGlzSmF2YVNjcmlwdCh7XHJcblx0XHRhbGxvd1BhcmFtZXRlcnMgPSBmYWxzZVxyXG5cdH0gPSB7fSkge1xyXG5cdFx0c3dpdGNoICh0aGlzLl90eXBlKSB7XHJcblx0XHRcdGNhc2UgXCJ0ZXh0XCI6IHtcclxuXHRcdFx0XHRzd2l0Y2ggKHRoaXMuX3N1YnR5cGUpIHtcclxuXHRcdFx0XHRcdGNhc2UgXCJlY21hc2NyaXB0XCI6XHJcblx0XHRcdFx0XHRjYXNlIFwiamF2YXNjcmlwdFwiOlxyXG5cdFx0XHRcdFx0Y2FzZSBcImphdmFzY3JpcHQxLjBcIjpcclxuXHRcdFx0XHRcdGNhc2UgXCJqYXZhc2NyaXB0MS4xXCI6XHJcblx0XHRcdFx0XHRjYXNlIFwiamF2YXNjcmlwdDEuMlwiOlxyXG5cdFx0XHRcdFx0Y2FzZSBcImphdmFzY3JpcHQxLjNcIjpcclxuXHRcdFx0XHRcdGNhc2UgXCJqYXZhc2NyaXB0MS40XCI6XHJcblx0XHRcdFx0XHRjYXNlIFwiamF2YXNjcmlwdDEuNVwiOlxyXG5cdFx0XHRcdFx0Y2FzZSBcImpzY3JpcHRcIjpcclxuXHRcdFx0XHRcdGNhc2UgXCJsaXZlc2NyaXB0XCI6XHJcblx0XHRcdFx0XHRjYXNlIFwieC1lY21hc2NyaXB0XCI6XHJcblx0XHRcdFx0XHRjYXNlIFwieC1qYXZhc2NyaXB0XCI6IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGFsbG93UGFyYW1ldGVycyB8fCB0aGlzLl9wYXJhbWV0ZXJzLnNpemUgPT09IDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcImFwcGxpY2F0aW9uXCI6IHtcclxuXHRcdFx0XHRzd2l0Y2ggKHRoaXMuX3N1YnR5cGUpIHtcclxuXHRcdFx0XHRcdGNhc2UgXCJlY21hc2NyaXB0XCI6XHJcblx0XHRcdFx0XHRjYXNlIFwiamF2YXNjcmlwdFwiOlxyXG5cdFx0XHRcdFx0Y2FzZSBcIngtZWNtYXNjcmlwdFwiOlxyXG5cdFx0XHRcdFx0Y2FzZSBcIngtamF2YXNjcmlwdFwiOiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBhbGxvd1BhcmFtZXRlcnMgfHwgdGhpcy5fcGFyYW1ldGVycy5zaXplID09PSAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0aXNYTUwoKSB7XHJcblx0XHRyZXR1cm4gKHRoaXMuX3N1YnR5cGUgPT09IFwieG1sXCIgJiYgKHRoaXMuX3R5cGUgPT09IFwidGV4dFwiIHx8IHRoaXMuX3R5cGUgPT09IFwiYXBwbGljYXRpb25cIikpIHx8XHJcblx0XHRcdHRoaXMuX3N1YnR5cGUuZW5kc1dpdGgoXCIreG1sXCIpO1xyXG5cdH1cclxuXHRpc0hUTUwoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc3VidHlwZSA9PT0gXCJodG1sXCIgJiYgdGhpcy5fdHlwZSA9PT0gXCJ0ZXh0XCI7XHJcblx0fVxyXG59O1xyXG5cclxuY2xhc3MgTUlNRVR5cGVQYXJhbWV0ZXJzIHtcclxuXHRjb25zdHJ1Y3RvcihtYXApIHtcclxuXHRcdHRoaXMuX21hcCA9IG1hcDtcclxuXHR9XHJcblxyXG5cdGdldCBzaXplKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21hcC5zaXplO1xyXG5cdH1cclxuXHJcblx0Z2V0KG5hbWUpIHtcclxuXHRcdG5hbWUgPSBhc2NpaUxvd2VyY2FzZShTdHJpbmcobmFtZSkpO1xyXG5cdFx0cmV0dXJuIHRoaXMuX21hcC5nZXQobmFtZSk7XHJcblx0fVxyXG5cclxuXHRoYXMobmFtZSkge1xyXG5cdFx0bmFtZSA9IGFzY2lpTG93ZXJjYXNlKFN0cmluZyhuYW1lKSk7XHJcblx0XHRyZXR1cm4gdGhpcy5fbWFwLmhhcyhuYW1lKTtcclxuXHR9XHJcblxyXG5cdHNldChuYW1lLCB2YWx1ZSkge1xyXG5cdFx0bmFtZSA9IGFzY2lpTG93ZXJjYXNlKFN0cmluZyhuYW1lKSk7XHJcblx0XHR2YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XHJcblxyXG5cdFx0aWYgKCFzb2xlbHlDb250YWluc0hUVFBUb2tlbkNvZGVQb2ludHMobmFtZSkpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIE1JTUUgdHlwZSBwYXJhbWV0ZXIgbmFtZSBcIiR7bmFtZX1cIjogb25seSBIVFRQIHRva2VuIGNvZGUgcG9pbnRzIGFyZSB2YWxpZC5gKTtcclxuXHRcdH1cclxuXHRcdGlmICghc29sZXlDb250YWluc0hUVFBRdW90ZWRTdHJpbmdUb2tlbkNvZGVQb2ludHModmFsdWUpKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBNSU1FIHR5cGUgcGFyYW1ldGVyIHZhbHVlIFwiJHt2YWx1ZX1cIjogb25seSBIVFRQIHF1b3RlZC1zdHJpbmcgdG9rZW4gY29kZSBwb2ludHMgYXJlIGAgK1xyXG5cdFx0XHRcdGB2YWxpZC5gKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5fbWFwLnNldChuYW1lLCB2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRjbGVhcigpIHtcclxuXHRcdHRoaXMuX21hcC5jbGVhcigpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlKG5hbWUpIHtcclxuXHRcdG5hbWUgPSBhc2NpaUxvd2VyY2FzZShTdHJpbmcobmFtZSkpO1xyXG5cdFx0cmV0dXJuIHRoaXMuX21hcC5kZWxldGUobmFtZSk7XHJcblx0fVxyXG5cclxuXHRmb3JFYWNoKGNhbGxiYWNrRm4sIHRoaXNBcmcpIHtcclxuXHRcdHRoaXMuX21hcC5mb3JFYWNoKGNhbGxiYWNrRm4sIHRoaXNBcmcpO1xyXG5cdH1cclxuXHJcblx0a2V5cygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tYXAua2V5cygpO1xyXG5cdH1cclxuXHJcblx0dmFsdWVzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21hcC52YWx1ZXMoKTtcclxuXHR9XHJcblxyXG5cdGVudHJpZXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbWFwLmVudHJpZXMoKTtcclxuXHR9XHJcblxyXG5cdFtTeW1ib2wuaXRlcmF0b3JdKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21hcFtTeW1ib2wuaXRlcmF0b3JdKCk7XHJcblx0fVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCDCqSAyMDE34oCTMjAxOCBEb21lbmljIERlbmljb2xhIDxkQGRvbWVuaWMubWU+XHJcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuXHJcbmltcG9ydCB7XHJcblx0cmVtb3ZlTGVhZGluZ0FuZFRyYWlsaW5nSFRUUFdoaXRlc3BhY2UsXHJcblx0cmVtb3ZlVHJhaWxpbmdIVFRQV2hpdGVzcGFjZSxcclxuXHRpc0hUVFBXaGl0ZXNwYWNlQ2hhcixcclxuXHRzb2xlbHlDb250YWluc0hUVFBUb2tlbkNvZGVQb2ludHMsXHJcblx0c29sZXlDb250YWluc0hUVFBRdW90ZWRTdHJpbmdUb2tlbkNvZGVQb2ludHMsXHJcblx0YXNjaWlMb3dlcmNhc2UsXHJcblx0Y29sbGVjdEFuSFRUUFF1b3RlZFN0cmluZ1xyXG59IGZyb20gXCIuL3V0aWxzLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnB1dCA9PiB7XHJcblx0aW5wdXQgPSByZW1vdmVMZWFkaW5nQW5kVHJhaWxpbmdIVFRQV2hpdGVzcGFjZShpbnB1dCk7XHJcblxyXG5cdGxldCBwb3NpdGlvbiA9IDA7XHJcblx0bGV0IHR5cGUgPSBcIlwiO1xyXG5cdHdoaWxlIChwb3NpdGlvbiA8IGlucHV0Lmxlbmd0aCAmJiBpbnB1dFtwb3NpdGlvbl0gIT09IFwiL1wiKSB7XHJcblx0XHR0eXBlICs9IGlucHV0W3Bvc2l0aW9uXTtcclxuXHRcdCsrcG9zaXRpb247XHJcblx0fVxyXG5cclxuXHRpZiAodHlwZS5sZW5ndGggPT09IDAgfHwgIXNvbGVseUNvbnRhaW5zSFRUUFRva2VuQ29kZVBvaW50cyh0eXBlKSkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHRpZiAocG9zaXRpb24gPj0gaW5wdXQubGVuZ3RoKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdC8vIFNraXBzIHBhc3QgXCIvXCJcclxuXHQrK3Bvc2l0aW9uO1xyXG5cclxuXHRsZXQgc3VidHlwZSA9IFwiXCI7XHJcblx0d2hpbGUgKHBvc2l0aW9uIDwgaW5wdXQubGVuZ3RoICYmIGlucHV0W3Bvc2l0aW9uXSAhPT0gXCI7XCIpIHtcclxuXHRcdHN1YnR5cGUgKz0gaW5wdXRbcG9zaXRpb25dO1xyXG5cdFx0Kytwb3NpdGlvbjtcclxuXHR9XHJcblxyXG5cdHN1YnR5cGUgPSByZW1vdmVUcmFpbGluZ0hUVFBXaGl0ZXNwYWNlKHN1YnR5cGUpO1xyXG5cclxuXHRpZiAoc3VidHlwZS5sZW5ndGggPT09IDAgfHwgIXNvbGVseUNvbnRhaW5zSFRUUFRva2VuQ29kZVBvaW50cyhzdWJ0eXBlKSkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtaW1lVHlwZSA9IHtcclxuXHRcdHR5cGU6IGFzY2lpTG93ZXJjYXNlKHR5cGUpLFxyXG5cdFx0c3VidHlwZTogYXNjaWlMb3dlcmNhc2Uoc3VidHlwZSksXHJcblx0XHRwYXJhbWV0ZXJzOiBuZXcgTWFwKClcclxuXHR9O1xyXG5cclxuXHR3aGlsZSAocG9zaXRpb24gPCBpbnB1dC5sZW5ndGgpIHtcclxuXHRcdC8vIFNraXAgcGFzdCBcIjtcIlxyXG5cdFx0Kytwb3NpdGlvbjtcclxuXHJcblx0XHR3aGlsZSAoaXNIVFRQV2hpdGVzcGFjZUNoYXIoaW5wdXRbcG9zaXRpb25dKSkge1xyXG5cdFx0XHQrK3Bvc2l0aW9uO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBwYXJhbWV0ZXJOYW1lID0gXCJcIjtcclxuXHRcdHdoaWxlIChwb3NpdGlvbiA8IGlucHV0Lmxlbmd0aCAmJiBpbnB1dFtwb3NpdGlvbl0gIT09IFwiO1wiICYmIGlucHV0W3Bvc2l0aW9uXSAhPT0gXCI9XCIpIHtcclxuXHRcdFx0cGFyYW1ldGVyTmFtZSArPSBpbnB1dFtwb3NpdGlvbl07XHJcblx0XHRcdCsrcG9zaXRpb247XHJcblx0XHR9XHJcblx0XHRwYXJhbWV0ZXJOYW1lID0gYXNjaWlMb3dlcmNhc2UocGFyYW1ldGVyTmFtZSk7XHJcblxyXG5cdFx0aWYgKHBvc2l0aW9uIDwgaW5wdXQubGVuZ3RoKSB7XHJcblx0XHRcdGlmIChpbnB1dFtwb3NpdGlvbl0gPT09IFwiO1wiKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFNraXAgcGFzdCBcIj1cIlxyXG5cdFx0XHQrK3Bvc2l0aW9uO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBwYXJhbWV0ZXJWYWx1ZSA9IG51bGw7XHJcblx0XHRpZiAoaW5wdXRbcG9zaXRpb25dID09PSBcIlxcXCJcIikge1xyXG5cdFx0XHRbcGFyYW1ldGVyVmFsdWUsIHBvc2l0aW9uXSA9IGNvbGxlY3RBbkhUVFBRdW90ZWRTdHJpbmcoaW5wdXQsIHBvc2l0aW9uKTtcclxuXHJcblx0XHRcdHdoaWxlIChwb3NpdGlvbiA8IGlucHV0Lmxlbmd0aCAmJiBpbnB1dFtwb3NpdGlvbl0gIT09IFwiO1wiKSB7XHJcblx0XHRcdFx0Kytwb3NpdGlvbjtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cGFyYW1ldGVyVmFsdWUgPSBcIlwiO1xyXG5cdFx0XHR3aGlsZSAocG9zaXRpb24gPCBpbnB1dC5sZW5ndGggJiYgaW5wdXRbcG9zaXRpb25dICE9PSBcIjtcIikge1xyXG5cdFx0XHRcdHBhcmFtZXRlclZhbHVlICs9IGlucHV0W3Bvc2l0aW9uXTtcclxuXHRcdFx0XHQrK3Bvc2l0aW9uO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwYXJhbWV0ZXJWYWx1ZSA9IHJlbW92ZVRyYWlsaW5nSFRUUFdoaXRlc3BhY2UocGFyYW1ldGVyVmFsdWUpO1xyXG5cclxuXHRcdFx0aWYgKHBhcmFtZXRlclZhbHVlID09PSBcIlwiKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAocGFyYW1ldGVyTmFtZS5sZW5ndGggPiAwICYmXHJcblx0XHRcdHNvbGVseUNvbnRhaW5zSFRUUFRva2VuQ29kZVBvaW50cyhwYXJhbWV0ZXJOYW1lKSAmJlxyXG5cdFx0XHRzb2xleUNvbnRhaW5zSFRUUFF1b3RlZFN0cmluZ1Rva2VuQ29kZVBvaW50cyhwYXJhbWV0ZXJWYWx1ZSkgJiZcclxuXHRcdFx0IW1pbWVUeXBlLnBhcmFtZXRlcnMuaGFzKHBhcmFtZXRlck5hbWUpKSB7XHJcblx0XHRcdG1pbWVUeXBlLnBhcmFtZXRlcnMuc2V0KHBhcmFtZXRlck5hbWUsIHBhcmFtZXRlclZhbHVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBtaW1lVHlwZTtcclxufTtcclxuIiwiLy8gQ29weXJpZ2h0IMKpIDIwMTfigJMyMDE4IERvbWVuaWMgRGVuaWNvbGEgPGRAZG9tZW5pYy5tZT5cclxuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG5cclxuaW1wb3J0IHsgc29sZWx5Q29udGFpbnNIVFRQVG9rZW5Db2RlUG9pbnRzIH0gZnJvbSBcIi4vdXRpbHMuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1pbWVUeXBlID0+IHtcclxuXHRsZXQgc2VyaWFsaXphdGlvbiA9IGAke21pbWVUeXBlLnR5cGV9LyR7bWltZVR5cGUuc3VidHlwZX1gO1xyXG5cclxuXHRpZiAobWltZVR5cGUucGFyYW1ldGVycy5zaXplID09PSAwKSB7XHJcblx0XHRyZXR1cm4gc2VyaWFsaXphdGlvbjtcclxuXHR9XHJcblxyXG5cdGZvciAobGV0IFtuYW1lLCB2YWx1ZV0gb2YgbWltZVR5cGUucGFyYW1ldGVycykge1xyXG5cdFx0c2VyaWFsaXphdGlvbiArPSBcIjtcIjtcclxuXHRcdHNlcmlhbGl6YXRpb24gKz0gbmFtZTtcclxuXHRcdHNlcmlhbGl6YXRpb24gKz0gXCI9XCI7XHJcblxyXG5cdFx0aWYgKCFzb2xlbHlDb250YWluc0hUVFBUb2tlbkNvZGVQb2ludHModmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHR2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLyhbXCJcXFxcXSkvZywgXCJcXFxcJDFcIik7XHJcblx0XHRcdHZhbHVlID0gYFwiJHt2YWx1ZX1cImA7XHJcblx0XHR9XHJcblxyXG5cdFx0c2VyaWFsaXphdGlvbiArPSB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBzZXJpYWxpemF0aW9uO1xyXG59O1xyXG4iLCIvLyBDb3B5cmlnaHQgwqkgMjAxN+KAkzIwMTggRG9tZW5pYyBEZW5pY29sYSA8ZEBkb21lbmljLm1lPlxyXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlTGVhZGluZ0FuZFRyYWlsaW5nSFRUUFdoaXRlc3BhY2UgPSBzdHJpbmcgPT4ge1xyXG5cdHJldHVybiBzdHJpbmcucmVwbGFjZSgvXlsgXFx0XFxuXFxyXSsvLCBcIlwiKS5yZXBsYWNlKC9bIFxcdFxcblxccl0rJC8sIFwiXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVRyYWlsaW5nSFRUUFdoaXRlc3BhY2UgPSBzdHJpbmcgPT4ge1xyXG5cdHJldHVybiBzdHJpbmcucmVwbGFjZSgvWyBcXHRcXG5cXHJdKyQvLCBcIlwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpc0hUVFBXaGl0ZXNwYWNlQ2hhciA9IGNoYXIgPT4ge1xyXG5cdHJldHVybiBjaGFyID09PSBcIiBcIiB8fCBjaGFyID09PSBcIlxcdFwiIHx8IGNoYXIgPT09IFwiXFxuXCIgfHwgY2hhciA9PT0gXCJcXHJcIjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzb2xlbHlDb250YWluc0hUVFBUb2tlbkNvZGVQb2ludHMgPSBzdHJpbmcgPT4ge1xyXG5cdHJldHVybiAvXlstISMkJSYnKisuXl9gfH5BLVphLXowLTldKiQvLnRlc3Qoc3RyaW5nKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzb2xleUNvbnRhaW5zSFRUUFF1b3RlZFN0cmluZ1Rva2VuQ29kZVBvaW50cyA9IHN0cmluZyA9PiB7XHJcblx0cmV0dXJuIC9eW1xcdFxcdTAwMjAtXFx1MDA3RVxcdTAwODAtXFx1MDBGRl0qJC8udGVzdChzdHJpbmcpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFzY2lpTG93ZXJjYXNlID0gc3RyaW5nID0+IHtcclxuXHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1tBLVpdL2csIGwgPT4gbC50b0xvd2VyQ2FzZSgpKTtcclxufTtcclxuXHJcbi8vIFRoaXMgdmFyaWFudCBvbmx5IGltcGxlbWVudHMgaXQgd2l0aCB0aGUgZXh0cmFjdC12YWx1ZSBmbGFnIHNldC5cclxuZXhwb3J0IGNvbnN0IGNvbGxlY3RBbkhUVFBRdW90ZWRTdHJpbmcgPSAoaW5wdXQsIHBvc2l0aW9uKSA9PiB7XHJcblx0bGV0IHZhbHVlID0gXCJcIjtcclxuXHJcblx0cG9zaXRpb24rKztcclxuXHJcblx0d2hpbGUgKHRydWUpIHtcclxuXHRcdHdoaWxlIChwb3NpdGlvbiA8IGlucHV0Lmxlbmd0aCAmJiBpbnB1dFtwb3NpdGlvbl0gIT09IFwiXFxcIlwiICYmIGlucHV0W3Bvc2l0aW9uXSAhPT0gXCJcXFxcXCIpIHtcclxuXHRcdFx0dmFsdWUgKz0gaW5wdXRbcG9zaXRpb25dO1xyXG5cdFx0XHQrK3Bvc2l0aW9uO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChwb3NpdGlvbiA+PSBpbnB1dC5sZW5ndGgpIHtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgcXVvdGVPckJhY2tzbGFzaCA9IGlucHV0W3Bvc2l0aW9uXTtcclxuXHRcdCsrcG9zaXRpb247XHJcblxyXG5cdFx0aWYgKHF1b3RlT3JCYWNrc2xhc2ggPT09IFwiXFxcXFwiKSB7XHJcblx0XHRcdGlmIChwb3NpdGlvbiA+PSBpbnB1dC5sZW5ndGgpIHtcclxuXHRcdFx0XHR2YWx1ZSArPSBcIlxcXFxcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFsdWUgKz0gaW5wdXRbcG9zaXRpb25dO1xyXG5cdFx0XHQrK3Bvc2l0aW9uO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gW3ZhbHVlLCBwb3NpdGlvbl07XHJcbn07XHJcbiIsImNvbnN0IGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XHJcbmNvbnN0IHVuZGVmID0gdW5kZWZpbmVkO1xyXG4vKipcclxuICogRGVjb2RlIGEgVVJJIGVuY29kZWQgc3RyaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIFVSSSBlbmNvZGVkIHN0cmluZy5cclxuICogQHJldHVybnMge1N0cmluZ3xOdWxsfSBUaGUgZGVjb2RlZCBzdHJpbmcuXHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuZnVuY3Rpb24gZGVjb2RlKGlucHV0KSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoaW5wdXQucmVwbGFjZSgvXFwrL2csICcgJykpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEF0dGVtcHRzIHRvIGVuY29kZSBhIGdpdmVuIGlucHV0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIHN0cmluZyB0aGF0IG5lZWRzIHRvIGJlIGVuY29kZWQuXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd8TnVsbH0gVGhlIGVuY29kZWQgc3RyaW5nLlxyXG4gKiBAYXBpIHByaXZhdGVcclxuICovXHJcbmZ1bmN0aW9uIGVuY29kZShpbnB1dCkge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGlucHV0KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTaW1wbGUgcXVlcnkgc3RyaW5nIHBhcnNlci5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5IFRoZSBxdWVyeSBzdHJpbmcgdGhhdCBuZWVkcyB0byBiZSBwYXJzZWQuXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiBxdWVyeXN0cmluZyhxdWVyeSkge1xyXG4gIGxldCBwYXJzZXIgPSAvKFtePT8jJl0rKT0/KFteJl0qKS9nXHJcbiAgICAsIHJlc3VsdCA9IHt9XHJcbiAgICAsIHBhcnQ7XHJcblxyXG4gIHdoaWxlIChwYXJ0ID0gcGFyc2VyLmV4ZWMocXVlcnkpKSB7XHJcbiAgICBsZXQga2V5ID0gZGVjb2RlKHBhcnRbMV0pXHJcbiAgICAgICwgdmFsdWUgPSBkZWNvZGUocGFydFsyXSk7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIFByZXZlbnQgb3ZlcnJpZGluZyBvZiBleGlzdGluZyBwcm9wZXJ0aWVzLiBUaGlzIGVuc3VyZXMgdGhhdCBidWlsZC1pblxyXG4gICAgLy8gbWV0aG9kcyBsaWtlIGB0b1N0cmluZ2Agb3IgX19wcm90b19fIGFyZSBub3Qgb3ZlcnJpZGVuIGJ5IG1hbGljaW91c1xyXG4gICAgLy8gcXVlcnlzdHJpbmdzLlxyXG4gICAgLy9cclxuICAgIC8vIEluIHRoZSBjYXNlIGlmIGZhaWxlZCBkZWNvZGluZywgd2Ugd2FudCB0byBvbWl0IHRoZSBrZXkvdmFsdWUgcGFpcnNcclxuICAgIC8vIGZyb20gdGhlIHJlc3VsdC5cclxuICAgIC8vXHJcbiAgICBpZiAoa2V5ID09PSBudWxsIHx8IHZhbHVlID09PSBudWxsIHx8IGtleSBpbiByZXN1bHQpIGNvbnRpbnVlO1xyXG4gICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmFuc2Zvcm0gYSBxdWVyeSBzdHJpbmcgdG8gYW4gb2JqZWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIE9iamVjdCB0aGF0IHNob3VsZCBiZSB0cmFuc2Zvcm1lZC5cclxuICogQHBhcmFtIHtTdHJpbmd9IHByZWZpeCBPcHRpb25hbCBwcmVmaXguXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiBxdWVyeXN0cmluZ2lmeShvYmosIHByZWZpeCkge1xyXG4gIHByZWZpeCA9IHByZWZpeCB8fCAnJztcclxuXHJcbiAgbGV0IHBhaXJzID0gW11cclxuICAgICwgdmFsdWVcclxuICAgICwga2V5O1xyXG5cclxuICAvL1xyXG4gIC8vIE9wdGlvbmFsbHkgcHJlZml4IHdpdGggYSAnPycgaWYgbmVlZGVkXHJcbiAgLy9cclxuICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBwcmVmaXgpIHByZWZpeCA9ICc/JztcclxuXHJcbiAgZm9yIChrZXkgaW4gb2JqKSB7XHJcbiAgICBpZiAoaGFzLmNhbGwob2JqLCBrZXkpKSB7XHJcbiAgICAgIHZhbHVlID0gb2JqW2tleV07XHJcblxyXG4gICAgICAvL1xyXG4gICAgICAvLyBFZGdlIGNhc2VzIHdoZXJlIHdlIGFjdHVhbGx5IHdhbnQgdG8gZW5jb2RlIHRoZSB2YWx1ZSB0byBhbiBlbXB0eVxyXG4gICAgICAvLyBzdHJpbmcgaW5zdGVhZCBvZiB0aGUgc3RyaW5naWZpZWQgdmFsdWUuXHJcbiAgICAgIC8vXHJcbiAgICAgIGlmICghdmFsdWUgJiYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZiB8fCBpc05hTih2YWx1ZSkpKSB7XHJcbiAgICAgICAgdmFsdWUgPSAnJztcclxuICAgICAgfVxyXG5cclxuICAgICAga2V5ID0gZW5jb2RlKGtleSk7XHJcbiAgICAgIHZhbHVlID0gZW5jb2RlKHZhbHVlKTtcclxuXHJcbiAgICAgIC8vXHJcbiAgICAgIC8vIElmIHdlIGZhaWxlZCB0byBlbmNvZGUgdGhlIHN0cmluZ3MsIHdlIHNob3VsZCBiYWlsIG91dCBhcyB3ZSBkb24ndFxyXG4gICAgICAvLyB3YW50IHRvIGFkZCBpbnZhbGlkIHN0cmluZ3MgdG8gdGhlIHF1ZXJ5LlxyXG4gICAgICAvL1xyXG4gICAgICBpZiAoa2V5ID09PSBudWxsIHx8IHZhbHVlID09PSBudWxsKSBjb250aW51ZTtcclxuICAgICAgcGFpcnMucHVzaChrZXkgKyc9JysgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhaXJzLmxlbmd0aCA/IHByZWZpeCArIHBhaXJzLmpvaW4oJyYnKSA6ICcnO1xyXG59XHJcblxyXG4vL1xyXG4vLyBFeHBvc2UgdGhlIG1vZHVsZS5cclxuLy9cclxuZXhwb3J0IGNvbnN0IHN0cmluZ2lmeSA9IHF1ZXJ5c3RyaW5naWZ5O1xyXG5leHBvcnQgY29uc3QgcGFyc2UgPSBxdWVyeXN0cmluZzsiLCJpbXBvcnQgcmVxdWlyZWQgZnJvbSAncmVxdWlyZXMtcG9ydCc7XHJcbmltcG9ydCAqIGFzIHFzIGZyb20gJy4vcXVlcnlzdHJpbmdpZnknO1xyXG5cclxuY29uc3Qgc2xhc2hlcyA9IC9eW0EtWmEtel1bQS1aYS16MC05Ky0uXSo6XFwvXFwvL1xyXG4gICwgcHJvdG9jb2xyZSA9IC9eKFthLXpdW2EtejAtOS4rLV0qOik/KFxcL1xcLyk/KFtcXFNcXHNdKikvaVxyXG4gICwgd2hpdGVzcGFjZSA9ICdbXFxcXHgwOVxcXFx4MEFcXFxceDBCXFxcXHgwQ1xcXFx4MERcXFxceDIwXFxcXHhBMFxcXFx1MTY4MFxcXFx1MTgwRVxcXFx1MjAwMFxcXFx1MjAwMVxcXFx1MjAwMlxcXFx1MjAwM1xcXFx1MjAwNFxcXFx1MjAwNVxcXFx1MjAwNlxcXFx1MjAwN1xcXFx1MjAwOFxcXFx1MjAwOVxcXFx1MjAwQVxcXFx1MjAyRlxcXFx1MjA1RlxcXFx1MzAwMFxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1RkVGRl0nXHJcbiAgLCBsZWZ0ID0gbmV3IFJlZ0V4cCgnXicrIHdoaXRlc3BhY2UgKycrJyk7XHJcblxyXG4vKipcclxuICogVHJpbSBhIGdpdmVuIHN0cmluZy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBTdHJpbmcgdG8gdHJpbS5cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZnVuY3Rpb24gdHJpbUxlZnQoc3RyKSB7XHJcbiAgcmV0dXJuIChzdHIgPyBzdHIgOiAnJykudG9TdHJpbmcoKS5yZXBsYWNlKGxlZnQsICcnKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZXNlIGFyZSB0aGUgcGFyc2UgcnVsZXMgZm9yIHRoZSBVUkwgcGFyc2VyLCBpdCBpbmZvcm1zIHRoZSBwYXJzZXJcclxuICogYWJvdXQ6XHJcbiAqXHJcbiAqIDAuIFRoZSBjaGFyIGl0IE5lZWRzIHRvIHBhcnNlLCBpZiBpdCdzIGEgc3RyaW5nIGl0IHNob3VsZCBiZSBkb25lIHVzaW5nXHJcbiAqICAgIGluZGV4T2YsIFJlZ0V4cCB1c2luZyBleGVjIGFuZCBOYU4gbWVhbnMgc2V0IGFzIGN1cnJlbnQgdmFsdWUuXHJcbiAqIDEuIFRoZSBwcm9wZXJ0eSB3ZSBzaG91bGQgc2V0IHdoZW4gcGFyc2luZyB0aGlzIHZhbHVlLlxyXG4gKiAyLiBJbmRpY2F0aW9uIGlmIGl0J3MgYmFja3dhcmRzIG9yIGZvcndhcmQgcGFyc2luZywgd2hlbiBzZXQgYXMgbnVtYmVyIGl0J3NcclxuICogICAgdGhlIHZhbHVlIG9mIGV4dHJhIGNoYXJzIHRoYXQgc2hvdWxkIGJlIHNwbGl0IG9mZi5cclxuICogMy4gSW5oZXJpdCBmcm9tIGxvY2F0aW9uIGlmIG5vbiBleGlzdGluZyBpbiB0aGUgcGFyc2VyLlxyXG4gKiA0LiBgdG9Mb3dlckNhc2VgIHRoZSByZXN1bHRpbmcgdmFsdWUuXHJcbiAqL1xyXG5sZXQgcnVsZXMgPSBbXHJcbiAgWycjJywgJ2hhc2gnXSwgICAgICAgICAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IGZyb20gdGhlIGJhY2suXHJcbiAgWyc/JywgJ3F1ZXJ5J10sICAgICAgICAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IGZyb20gdGhlIGJhY2suXHJcbiAgZnVuY3Rpb24gc2FuaXRpemUoYWRkcmVzcykgeyAgICAgICAgICAvLyBTYW5pdGl6ZSB3aGF0IGlzIGxlZnQgb2YgdGhlIGFkZHJlc3NcclxuICAgIHJldHVybiBhZGRyZXNzLnJlcGxhY2UoJ1xcXFwnLCAnLycpO1xyXG4gIH0sXHJcbiAgWycvJywgJ3BhdGhuYW1lJ10sICAgICAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IGZyb20gdGhlIGJhY2suXHJcbiAgWydAJywgJ2F1dGgnLCAxXSwgICAgICAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IGZyb20gdGhlIGZyb250LlxyXG4gIFtOYU4sICdob3N0JywgdW5kZWZpbmVkLCAxLCAxXSwgICAgICAgLy8gU2V0IGxlZnQgb3ZlciB2YWx1ZS5cclxuICBbLzooXFxkKykkLywgJ3BvcnQnLCB1bmRlZmluZWQsIDFdLCAgICAvLyBSZWdFeHAgdGhlIGJhY2suXHJcbiAgW05hTiwgJ2hvc3RuYW1lJywgdW5kZWZpbmVkLCAxLCAxXSAgICAvLyBTZXQgbGVmdCBvdmVyLlxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIFRoZXNlIHByb3BlcnRpZXMgc2hvdWxkIG5vdCBiZSBjb3BpZWQgb3IgaW5oZXJpdGVkIGZyb20uIFRoaXMgaXMgb25seSBuZWVkZWRcclxuICogZm9yIGFsbCBub24gYmxvYiBVUkwncyBhcyBhIGJsb2IgVVJMIGRvZXMgbm90IGluY2x1ZGUgYSBoYXNoLCBvbmx5IHRoZVxyXG4gKiBvcmlnaW4uXHJcbiAqXHJcbiAqIEB0eXBlIHtPYmplY3R9XHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5sZXQgaWdub3JlID0geyBoYXNoOiAxLCBxdWVyeTogMSB9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBsb2NhdGlvbiBvYmplY3QgZGlmZmVycyB3aGVuIHlvdXIgY29kZSBpcyBsb2FkZWQgdGhyb3VnaCBhIG5vcm1hbCBwYWdlLFxyXG4gKiBXb3JrZXIgb3IgdGhyb3VnaCBhIHdvcmtlciB1c2luZyBhIGJsb2IuIEFuZCB3aXRoIHRoZSBibG9iYmxlIGJlZ2lucyB0aGVcclxuICogdHJvdWJsZSBhcyB0aGUgbG9jYXRpb24gb2JqZWN0IHdpbGwgY29udGFpbiB0aGUgVVJMIG9mIHRoZSBibG9iLCBub3QgdGhlXHJcbiAqIGxvY2F0aW9uIG9mIHRoZSBwYWdlIHdoZXJlIG91ciBjb2RlIGlzIGxvYWRlZCBpbi4gVGhlIGFjdHVhbCBvcmlnaW4gaXNcclxuICogZW5jb2RlZCBpbiB0aGUgYHBhdGhuYW1lYCBzbyB3ZSBjYW4gdGhhbmtmdWxseSBnZW5lcmF0ZSBhIGdvb2QgXCJkZWZhdWx0XCJcclxuICogbG9jYXRpb24gZnJvbSBpdCBzbyB3ZSBjYW4gZ2VuZXJhdGUgcHJvcGVyIHJlbGF0aXZlIFVSTCdzIGFnYWluLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGxvYyBPcHRpb25hbCBkZWZhdWx0IGxvY2F0aW9uIG9iamVjdC5cclxuICogQHJldHVybnMge09iamVjdH0gbG9sY2F0aW9uIG9iamVjdC5cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZnVuY3Rpb24gbG9sY2F0aW9uKGxvYykge1xyXG4gIGxldCBnbG9iYWxWYXI7XHJcblxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgZ2xvYmFsVmFyID0gd2luZG93O1xyXG4gIGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSBnbG9iYWxWYXIgPSBnbG9iYWw7XHJcbiAgZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSBnbG9iYWxWYXIgPSBzZWxmO1xyXG4gIGVsc2UgZ2xvYmFsVmFyID0ge307XHJcblxyXG4gIGxldCBsb2NhdGlvbiA9IGdsb2JhbFZhci5sb2NhdGlvbiB8fCB7fTtcclxuICBsb2MgPSBsb2MgfHwgbG9jYXRpb247XHJcblxyXG4gIGxldCBmaW5hbGRlc3RpbmF0aW9uID0ge31cclxuICAgICwgdHlwZSA9IHR5cGVvZiBsb2NcclxuICAgICwga2V5O1xyXG5cclxuICBpZiAoJ2Jsb2I6JyA9PT0gbG9jLnByb3RvY29sKSB7XHJcbiAgICBmaW5hbGRlc3RpbmF0aW9uID0gbmV3IFVybCh1bmVzY2FwZShsb2MucGF0aG5hbWUpLCB7fSk7XHJcbiAgfSBlbHNlIGlmICgnc3RyaW5nJyA9PT0gdHlwZSkge1xyXG4gICAgZmluYWxkZXN0aW5hdGlvbiA9IG5ldyBVcmwobG9jLCB7fSk7XHJcbiAgICBmb3IgKGtleSBpbiBpZ25vcmUpIGRlbGV0ZSBmaW5hbGRlc3RpbmF0aW9uW2tleV07XHJcbiAgfSBlbHNlIGlmICgnb2JqZWN0JyA9PT0gdHlwZSkge1xyXG4gICAgZm9yIChrZXkgaW4gbG9jKSB7XHJcbiAgICAgIGlmIChrZXkgaW4gaWdub3JlKSBjb250aW51ZTtcclxuICAgICAgZmluYWxkZXN0aW5hdGlvbltrZXldID0gbG9jW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpbmFsZGVzdGluYXRpb24uc2xhc2hlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGZpbmFsZGVzdGluYXRpb24uc2xhc2hlcyA9IHNsYXNoZXMudGVzdChsb2MuaHJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmluYWxkZXN0aW5hdGlvbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIFByb3RvY29sRXh0cmFjdFxyXG4gKiBAdHlwZSBPYmplY3RcclxuICogQHByb3BlcnR5IHtTdHJpbmd9IHByb3RvY29sIFByb3RvY29sIG1hdGNoZWQgaW4gdGhlIFVSTCwgaW4gbG93ZXJjYXNlLlxyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IHNsYXNoZXMgYHRydWVgIGlmIHByb3RvY29sIGlzIGZvbGxvd2VkIGJ5IFwiLy9cIiwgZWxzZSBgZmFsc2VgLlxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gcmVzdCBSZXN0IG9mIHRoZSBVUkwgdGhhdCBpcyBub3QgcGFydCBvZiB0aGUgcHJvdG9jb2wuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEV4dHJhY3QgcHJvdG9jb2wgaW5mb3JtYXRpb24gZnJvbSBhIFVSTCB3aXRoL3dpdGhvdXQgZG91YmxlIHNsYXNoIChcIi8vXCIpLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gYWRkcmVzcyBVUkwgd2Ugd2FudCB0byBleHRyYWN0IGZyb20uXHJcbiAqIEByZXR1cm4ge1Byb3RvY29sRXh0cmFjdH0gRXh0cmFjdGVkIGluZm9ybWF0aW9uLlxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuZnVuY3Rpb24gZXh0cmFjdFByb3RvY29sKGFkZHJlc3MpIHtcclxuICBhZGRyZXNzID0gdHJpbUxlZnQoYWRkcmVzcyk7XHJcbiAgbGV0IG1hdGNoID0gcHJvdG9jb2xyZS5leGVjKGFkZHJlc3MpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvdG9jb2w6IG1hdGNoWzFdID8gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKSA6ICcnLFxyXG4gICAgc2xhc2hlczogISFtYXRjaFsyXSxcclxuICAgIHJlc3Q6IG1hdGNoWzNdXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlc29sdmUgYSByZWxhdGl2ZSBVUkwgcGF0aG5hbWUgYWdhaW5zdCBhIGJhc2UgVVJMIHBhdGhuYW1lLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVsYXRpdmUgUGF0aG5hbWUgb2YgdGhlIHJlbGF0aXZlIFVSTC5cclxuICogQHBhcmFtIHtTdHJpbmd9IGJhc2UgUGF0aG5hbWUgb2YgdGhlIGJhc2UgVVJMLlxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFJlc29sdmVkIHBhdGhuYW1lLlxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuZnVuY3Rpb24gcmVzb2x2ZShyZWxhdGl2ZSwgYmFzZSkge1xyXG4gIGlmIChyZWxhdGl2ZSA9PT0gJycpIHJldHVybiBiYXNlO1xyXG5cclxuICBsZXQgcGF0aCA9IChiYXNlIHx8ICcvJykuc3BsaXQoJy8nKS5zbGljZSgwLCAtMSkuY29uY2F0KHJlbGF0aXZlLnNwbGl0KCcvJykpXHJcbiAgICAsIGkgPSBwYXRoLmxlbmd0aFxyXG4gICAgLCBsYXN0ID0gcGF0aFtpIC0gMV1cclxuICAgICwgdW5zaGlmdCA9IGZhbHNlXHJcbiAgICAsIHVwID0gMDtcclxuXHJcbiAgd2hpbGUgKGktLSkge1xyXG4gICAgaWYgKHBhdGhbaV0gPT09ICcuJykge1xyXG4gICAgICBwYXRoLnNwbGljZShpLCAxKTtcclxuICAgIH0gZWxzZSBpZiAocGF0aFtpXSA9PT0gJy4uJykge1xyXG4gICAgICBwYXRoLnNwbGljZShpLCAxKTtcclxuICAgICAgdXArKztcclxuICAgIH0gZWxzZSBpZiAodXApIHtcclxuICAgICAgaWYgKGkgPT09IDApIHVuc2hpZnQgPSB0cnVlO1xyXG4gICAgICBwYXRoLnNwbGljZShpLCAxKTtcclxuICAgICAgdXAtLTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICh1bnNoaWZ0KSBwYXRoLnVuc2hpZnQoJycpO1xyXG4gIGlmIChsYXN0ID09PSAnLicgfHwgbGFzdCA9PT0gJy4uJykgcGF0aC5wdXNoKCcnKTtcclxuXHJcbiAgcmV0dXJuIHBhdGguam9pbignLycpO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIGFjdHVhbCBVUkwgaW5zdGFuY2UuIEluc3RlYWQgb2YgcmV0dXJuaW5nIGFuIG9iamVjdCB3ZSd2ZSBvcHRlZC1pbiB0b1xyXG4gKiBjcmVhdGUgYW4gYWN0dWFsIGNvbnN0cnVjdG9yIGFzIGl0J3MgbXVjaCBtb3JlIG1lbW9yeSBlZmZpY2llbnQgYW5kXHJcbiAqIGZhc3RlciBhbmQgaXQgcGxlYXNlcyBteSBPQ0QuXHJcbiAqXHJcbiAqIEl0IGlzIHdvcnRoIG5vdGluZyB0aGF0IHdlIHNob3VsZCBub3QgdXNlIGBVUkxgIGFzIGNsYXNzIG5hbWUgdG8gcHJldmVudFxyXG4gKiBjbGFzaGVzIHdpdGggdGhlIGdsb2JhbCBVUkwgaW5zdGFuY2UgdGhhdCBnb3QgaW50cm9kdWNlZCBpbiBicm93c2Vycy5cclxuICpcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBhZGRyZXNzIFVSTCB3ZSB3YW50IHRvIHBhcnNlLlxyXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IFtsb2NhdGlvbl0gTG9jYXRpb24gZGVmYXVsdHMgZm9yIHJlbGF0aXZlIHBhdGhzLlxyXG4gKiBAcGFyYW0ge0Jvb2xlYW58RnVuY3Rpb259IFtwYXJzZXJdIFBhcnNlciBmb3IgdGhlIHF1ZXJ5IHN0cmluZy5cclxuICogQHByaXZhdGVcclxuICovXHJcbmZ1bmN0aW9uIFVybChhZGRyZXNzLCBsb2NhdGlvbiwgcGFyc2VyKSB7XHJcbiAgYWRkcmVzcyA9IHRyaW1MZWZ0KGFkZHJlc3MpO1xyXG5cclxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVXJsKSkge1xyXG4gICAgcmV0dXJuIG5ldyBVcmwoYWRkcmVzcywgbG9jYXRpb24sIHBhcnNlcik7XHJcbiAgfVxyXG5cclxuICBsZXQgcmVsYXRpdmUsIGV4dHJhY3RlZCwgcGFyc2UsIGluc3RydWN0aW9uLCBpbmRleCwga2V5XHJcbiAgICAsIGluc3RydWN0aW9ucyA9IHJ1bGVzLnNsaWNlKClcclxuICAgICwgdHlwZSA9IHR5cGVvZiBsb2NhdGlvblxyXG4gICAgLCB1cmwgPSB0aGlzXHJcbiAgICAsIGkgPSAwO1xyXG5cclxuICAvL1xyXG4gIC8vIFRoZSBmb2xsb3dpbmcgaWYgc3RhdGVtZW50cyBhbGxvd3MgdGhpcyBtb2R1bGUgdHdvIGhhdmUgY29tcGF0aWJpbGl0eSB3aXRoXHJcbiAgLy8gMiBkaWZmZXJlbnQgQVBJOlxyXG4gIC8vXHJcbiAgLy8gMS4gTm9kZS5qcydzIGB1cmwucGFyc2VgIGFwaSB3aGljaCBhY2NlcHRzIGEgVVJMLCBib29sZWFuIGFzIGFyZ3VtZW50c1xyXG4gIC8vICAgIHdoZXJlIHRoZSBib29sZWFuIGluZGljYXRlcyB0aGF0IHRoZSBxdWVyeSBzdHJpbmcgc2hvdWxkIGFsc28gYmUgcGFyc2VkLlxyXG4gIC8vXHJcbiAgLy8gMi4gVGhlIGBVUkxgIGludGVyZmFjZSBvZiB0aGUgYnJvd3NlciB3aGljaCBhY2NlcHRzIGEgVVJMLCBvYmplY3QgYXNcclxuICAvLyAgICBhcmd1bWVudHMuIFRoZSBzdXBwbGllZCBvYmplY3Qgd2lsbCBiZSB1c2VkIGFzIGRlZmF1bHQgdmFsdWVzIC8gZmFsbC1iYWNrXHJcbiAgLy8gICAgZm9yIHJlbGF0aXZlIHBhdGhzLlxyXG4gIC8vXHJcbiAgaWYgKCdvYmplY3QnICE9PSB0eXBlICYmICdzdHJpbmcnICE9PSB0eXBlKSB7XHJcbiAgICBwYXJzZXIgPSBsb2NhdGlvbjtcclxuICAgIGxvY2F0aW9uID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGlmIChwYXJzZXIgJiYgJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIHBhcnNlcikgcGFyc2VyID0gcXMucGFyc2U7XHJcblxyXG4gIGxvY2F0aW9uID0gbG9sY2F0aW9uKGxvY2F0aW9uKTtcclxuXHJcbiAgLy9cclxuICAvLyBFeHRyYWN0IHByb3RvY29sIGluZm9ybWF0aW9uIGJlZm9yZSBydW5uaW5nIHRoZSBpbnN0cnVjdGlvbnMuXHJcbiAgLy9cclxuICBleHRyYWN0ZWQgPSBleHRyYWN0UHJvdG9jb2woYWRkcmVzcyB8fCAnJyk7XHJcbiAgcmVsYXRpdmUgPSAhZXh0cmFjdGVkLnByb3RvY29sICYmICFleHRyYWN0ZWQuc2xhc2hlcztcclxuICB1cmwuc2xhc2hlcyA9IGV4dHJhY3RlZC5zbGFzaGVzIHx8IHJlbGF0aXZlICYmIGxvY2F0aW9uLnNsYXNoZXM7XHJcbiAgdXJsLnByb3RvY29sID0gZXh0cmFjdGVkLnByb3RvY29sIHx8IGxvY2F0aW9uLnByb3RvY29sIHx8ICcnO1xyXG4gIGFkZHJlc3MgPSBleHRyYWN0ZWQucmVzdDtcclxuXHJcbiAgLy9cclxuICAvLyBXaGVuIHRoZSBhdXRob3JpdHkgY29tcG9uZW50IGlzIGFic2VudCB0aGUgVVJMIHN0YXJ0cyB3aXRoIGEgcGF0aFxyXG4gIC8vIGNvbXBvbmVudC5cclxuICAvL1xyXG4gIGlmICghZXh0cmFjdGVkLnNsYXNoZXMpIGluc3RydWN0aW9uc1szXSA9IFsvKC4qKS8sICdwYXRobmFtZSddO1xyXG5cclxuICBmb3IgKDsgaSA8IGluc3RydWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgaW5zdHJ1Y3Rpb24gPSBpbnN0cnVjdGlvbnNbaV07XHJcblxyXG4gICAgaWYgKHR5cGVvZiBpbnN0cnVjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBhZGRyZXNzID0gaW5zdHJ1Y3Rpb24oYWRkcmVzcyk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlID0gaW5zdHJ1Y3Rpb25bMF07XHJcbiAgICBrZXkgPSBpbnN0cnVjdGlvblsxXTtcclxuXHJcbiAgICBpZiAocGFyc2UgIT09IHBhcnNlKSB7XHJcbiAgICAgIHVybFtrZXldID0gYWRkcmVzcztcclxuICAgIH0gZWxzZSBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiBwYXJzZSkge1xyXG4gICAgICBpZiAofihpbmRleCA9IGFkZHJlc3MuaW5kZXhPZihwYXJzZSkpKSB7XHJcbiAgICAgICAgaWYgKCdudW1iZXInID09PSB0eXBlb2YgaW5zdHJ1Y3Rpb25bMl0pIHtcclxuICAgICAgICAgIHVybFtrZXldID0gYWRkcmVzcy5zbGljZSgwLCBpbmRleCk7XHJcbiAgICAgICAgICBhZGRyZXNzID0gYWRkcmVzcy5zbGljZShpbmRleCArIGluc3RydWN0aW9uWzJdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdXJsW2tleV0gPSBhZGRyZXNzLnNsaWNlKGluZGV4KTtcclxuICAgICAgICAgIGFkZHJlc3MgPSBhZGRyZXNzLnNsaWNlKDAsIGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoKGluZGV4ID0gcGFyc2UuZXhlYyhhZGRyZXNzKSkpIHtcclxuICAgICAgdXJsW2tleV0gPSBpbmRleFsxXTtcclxuICAgICAgYWRkcmVzcyA9IGFkZHJlc3Muc2xpY2UoMCwgaW5kZXguaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVybFtrZXldID0gdXJsW2tleV0gfHwgKFxyXG4gICAgICByZWxhdGl2ZSAmJiBpbnN0cnVjdGlvblszXSA/IGxvY2F0aW9uW2tleV0gfHwgJycgOiAnJ1xyXG4gICAgKTtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gSG9zdG5hbWUsIGhvc3QgYW5kIHByb3RvY29sIHNob3VsZCBiZSBsb3dlcmNhc2VkIHNvIHRoZXkgY2FuIGJlIHVzZWQgdG9cclxuICAgIC8vIGNyZWF0ZSBhIHByb3BlciBgb3JpZ2luYC5cclxuICAgIC8vXHJcbiAgICBpZiAoaW5zdHJ1Y3Rpb25bNF0pIHVybFtrZXldID0gdXJsW2tleV0udG9Mb3dlckNhc2UoKTtcclxuICB9XHJcblxyXG4gIC8vXHJcbiAgLy8gQWxzbyBwYXJzZSB0aGUgc3VwcGxpZWQgcXVlcnkgc3RyaW5nIGluIHRvIGFuIG9iamVjdC4gSWYgd2UncmUgc3VwcGxpZWRcclxuICAvLyB3aXRoIGEgY3VzdG9tIHBhcnNlciBhcyBmdW5jdGlvbiB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IGJ1aWxkLWluXHJcbiAgLy8gcGFyc2VyLlxyXG4gIC8vXHJcbiAgaWYgKHBhcnNlcikgdXJsLnF1ZXJ5ID0gcGFyc2VyKHVybC5xdWVyeSk7XHJcblxyXG4gIC8vXHJcbiAgLy8gSWYgdGhlIFVSTCBpcyByZWxhdGl2ZSwgcmVzb2x2ZSB0aGUgcGF0aG5hbWUgYWdhaW5zdCB0aGUgYmFzZSBVUkwuXHJcbiAgLy9cclxuICBpZiAoXHJcbiAgICAgIHJlbGF0aXZlXHJcbiAgICAmJiBsb2NhdGlvbi5zbGFzaGVzXHJcbiAgICAmJiB1cmwucGF0aG5hbWUuY2hhckF0KDApICE9PSAnLydcclxuICAgICYmICh1cmwucGF0aG5hbWUgIT09ICcnIHx8IGxvY2F0aW9uLnBhdGhuYW1lICE9PSAnJylcclxuICApIHtcclxuICAgIHVybC5wYXRobmFtZSA9IHJlc29sdmUodXJsLnBhdGhuYW1lLCBsb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgfVxyXG5cclxuICAvL1xyXG4gIC8vIFdlIHNob3VsZCBub3QgYWRkIHBvcnQgbnVtYmVycyBpZiB0aGV5IGFyZSBhbHJlYWR5IHRoZSBkZWZhdWx0IHBvcnQgbnVtYmVyXHJcbiAgLy8gZm9yIGEgZ2l2ZW4gcHJvdG9jb2wuIEFzIHRoZSBob3N0IGFsc28gY29udGFpbnMgdGhlIHBvcnQgbnVtYmVyIHdlJ3JlIGdvaW5nXHJcbiAgLy8gb3ZlcnJpZGUgaXQgd2l0aCB0aGUgaG9zdG5hbWUgd2hpY2ggY29udGFpbnMgbm8gcG9ydCBudW1iZXIuXHJcbiAgLy9cclxuICBpZiAoIXJlcXVpcmVkKHVybC5wb3J0LCB1cmwucHJvdG9jb2wpKSB7XHJcbiAgICB1cmwuaG9zdCA9IHVybC5ob3N0bmFtZTtcclxuICAgIHVybC5wb3J0ID0gJyc7XHJcbiAgfVxyXG5cclxuICAvL1xyXG4gIC8vIFBhcnNlIGRvd24gdGhlIGBhdXRoYCBmb3IgdGhlIHVzZXJuYW1lIGFuZCBwYXNzd29yZC5cclxuICAvL1xyXG4gIHVybC51c2VybmFtZSA9IHVybC5wYXNzd29yZCA9ICcnO1xyXG4gIGlmICh1cmwuYXV0aCkge1xyXG4gICAgaW5zdHJ1Y3Rpb24gPSB1cmwuYXV0aC5zcGxpdCgnOicpO1xyXG4gICAgdXJsLnVzZXJuYW1lID0gaW5zdHJ1Y3Rpb25bMF0gfHwgJyc7XHJcbiAgICB1cmwucGFzc3dvcmQgPSBpbnN0cnVjdGlvblsxXSB8fCAnJztcclxuICB9XHJcblxyXG4gIHVybC5vcmlnaW4gPSB1cmwucHJvdG9jb2wgJiYgdXJsLmhvc3QgJiYgdXJsLnByb3RvY29sICE9PSAnZmlsZTonXHJcbiAgICA/IHVybC5wcm90b2NvbCArJy8vJysgdXJsLmhvc3RcclxuICAgIDogJ251bGwnO1xyXG5cclxuICAvL1xyXG4gIC8vIFRoZSBocmVmIGlzIGp1c3QgdGhlIGNvbXBpbGVkIHJlc3VsdC5cclxuICAvL1xyXG4gIHVybC5ocmVmID0gdXJsLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIGNvbnZlbmllbmNlIG1ldGhvZCBmb3IgY2hhbmdpbmcgcHJvcGVydGllcyBpbiB0aGUgVVJMIGluc3RhbmNlIHRvXHJcbiAqIGluc3VyZSB0aGF0IHRoZXkgYWxsIHByb3BhZ2F0ZSBjb3JyZWN0bHkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJ0ICAgICAgICAgIFByb3BlcnR5IHdlIG5lZWQgdG8gYWRqdXN0LlxyXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZSAgICAgICAgICBUaGUgbmV3bHkgYXNzaWduZWQgdmFsdWUuXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbnxGdW5jdGlvbn0gZm4gIFdoZW4gc2V0dGluZyB0aGUgcXVlcnksIGl0IHdpbGwgYmUgdGhlIGZ1bmN0aW9uXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZWQgdG8gcGFyc2UgdGhlIHF1ZXJ5LlxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGVuIHNldHRpbmcgdGhlIHByb3RvY29sLCBkb3VibGUgc2xhc2ggd2lsbCBiZVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkIGZyb20gdGhlIGZpbmFsIHVybCBpZiBpdCBpcyB0cnVlLlxyXG4gKiBAcmV0dXJucyB7VVJMfSBVUkwgaW5zdGFuY2UgZm9yIGNoYWluaW5nLlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiBzZXQocGFydCwgdmFsdWUsIGZuKSB7XHJcbiAgbGV0IHVybCA9IHRoaXM7XHJcblxyXG4gIHN3aXRjaCAocGFydCkge1xyXG4gICAgY2FzZSAncXVlcnknOlxyXG4gICAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICB2YWx1ZSA9IChmbiB8fCBxcy5wYXJzZSkodmFsdWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB1cmxbcGFydF0gPSB2YWx1ZTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAncG9ydCc6XHJcbiAgICAgIHVybFtwYXJ0XSA9IHZhbHVlO1xyXG5cclxuICAgICAgaWYgKCFyZXF1aXJlZCh2YWx1ZSwgdXJsLnByb3RvY29sKSkge1xyXG4gICAgICAgIHVybC5ob3N0ID0gdXJsLmhvc3RuYW1lO1xyXG4gICAgICAgIHVybFtwYXJ0XSA9ICcnO1xyXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdXJsLmhvc3QgPSB1cmwuaG9zdG5hbWUgKyc6JysgdmFsdWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJ2hvc3RuYW1lJzpcclxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XHJcblxyXG4gICAgICBpZiAodXJsLnBvcnQpIHZhbHVlICs9ICc6JysgdXJsLnBvcnQ7XHJcbiAgICAgIHVybC5ob3N0ID0gdmFsdWU7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJ2hvc3QnOlxyXG4gICAgICB1cmxbcGFydF0gPSB2YWx1ZTtcclxuXHJcbiAgICAgIGlmICgvOlxcZCskLy50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJzonKTtcclxuICAgICAgICB1cmwucG9ydCA9IHZhbHVlLnBvcCgpO1xyXG4gICAgICAgIHVybC5ob3N0bmFtZSA9IHZhbHVlLmpvaW4oJzonKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1cmwuaG9zdG5hbWUgPSB2YWx1ZTtcclxuICAgICAgICB1cmwucG9ydCA9ICcnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICdwcm90b2NvbCc6XHJcbiAgICAgIHVybC5wcm90b2NvbCA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHVybC5zbGFzaGVzID0gIWZuO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICdwYXRobmFtZSc6XHJcbiAgICBjYXNlICdoYXNoJzpcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGNoYXIgPSBwYXJ0ID09PSAncGF0aG5hbWUnID8gJy8nIDogJyMnO1xyXG4gICAgICAgIHVybFtwYXJ0XSA9IHZhbHVlLmNoYXJBdCgwKSAhPT0gY2hhciA/IGNoYXIgKyB2YWx1ZSA6IHZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVybFtwYXJ0XSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHVybFtwYXJ0XSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IGlucyA9IHJ1bGVzW2ldO1xyXG5cclxuICAgIGlmIChpbnNbNF0pIHVybFtpbnNbMV1dID0gdXJsW2luc1sxXV0udG9Mb3dlckNhc2UoKTtcclxuICB9XHJcblxyXG4gIHVybC5vcmlnaW4gPSB1cmwucHJvdG9jb2wgJiYgdXJsLmhvc3QgJiYgdXJsLnByb3RvY29sICE9PSAnZmlsZTonXHJcbiAgICA/IHVybC5wcm90b2NvbCArJy8vJysgdXJsLmhvc3RcclxuICAgIDogJ251bGwnO1xyXG5cclxuICB1cmwuaHJlZiA9IHVybC50b1N0cmluZygpO1xyXG5cclxuICByZXR1cm4gdXJsO1xyXG59XHJcblxyXG4vKipcclxuICogVHJhbnNmb3JtIHRoZSBwcm9wZXJ0aWVzIGJhY2sgaW4gdG8gYSB2YWxpZCBhbmQgZnVsbCBVUkwgc3RyaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmdpZnkgT3B0aW9uYWwgcXVlcnkgc3RyaW5naWZ5IGZ1bmN0aW9uLlxyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBDb21waWxlZCB2ZXJzaW9uIG9mIHRoZSBVUkwuXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmZ1bmN0aW9uIHRvU3RyaW5nKHN0cmluZ2lmeSkge1xyXG4gIGlmICghc3RyaW5naWZ5IHx8ICdmdW5jdGlvbicgIT09IHR5cGVvZiBzdHJpbmdpZnkpIHN0cmluZ2lmeSA9IHFzLnN0cmluZ2lmeTtcclxuXHJcbiAgbGV0IHF1ZXJ5XHJcbiAgICAsIHVybCA9IHRoaXNcclxuICAgICwgcHJvdG9jb2wgPSB1cmwucHJvdG9jb2w7XHJcblxyXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5jaGFyQXQocHJvdG9jb2wubGVuZ3RoIC0gMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonO1xyXG5cclxuICBsZXQgcmVzdWx0ID0gcHJvdG9jb2wgKyAodXJsLnNsYXNoZXMgPyAnLy8nIDogJycpO1xyXG5cclxuICBpZiAodXJsLnVzZXJuYW1lKSB7XHJcbiAgICByZXN1bHQgKz0gdXJsLnVzZXJuYW1lO1xyXG4gICAgaWYgKHVybC5wYXNzd29yZCkgcmVzdWx0ICs9ICc6JysgdXJsLnBhc3N3b3JkO1xyXG4gICAgcmVzdWx0ICs9ICdAJztcclxuICB9XHJcblxyXG4gIHJlc3VsdCArPSB1cmwuaG9zdCArIHVybC5wYXRobmFtZTtcclxuXHJcbiAgcXVlcnkgPSAnb2JqZWN0JyA9PT0gdHlwZW9mIHVybC5xdWVyeSA/IHN0cmluZ2lmeSh1cmwucXVlcnkpIDogdXJsLnF1ZXJ5O1xyXG4gIGlmIChxdWVyeSkgcmVzdWx0ICs9ICc/JyAhPT0gcXVlcnkuY2hhckF0KDApID8gJz8nKyBxdWVyeSA6IHF1ZXJ5O1xyXG5cclxuICBpZiAodXJsLmhhc2gpIHJlc3VsdCArPSB1cmwuaGFzaDtcclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuVXJsLnByb3RvdHlwZSA9IHsgc2V0OiBzZXQsIHRvU3RyaW5nOiB0b1N0cmluZyB9O1xyXG5cclxuLy9cclxuLy8gRXhwb3NlIHRoZSBVUkwgcGFyc2VyIGFuZCBzb21lIGFkZGl0aW9uYWwgcHJvcGVydGllcyB0aGF0IG1pZ2h0IGJlIHVzZWZ1bCBmb3JcclxuLy8gb3RoZXJzIG9yIHRlc3RpbmcuXHJcbi8vXHJcblVybC5leHRyYWN0UHJvdG9jb2wgPSBleHRyYWN0UHJvdG9jb2w7XHJcblVybC5sb2NhdGlvbiA9IGxvbGNhdGlvbjtcclxuVXJsLnRyaW1MZWZ0ID0gdHJpbUxlZnQ7XHJcblVybC5xcyA9IHFzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXJsOyIsImV4cG9ydCBpbnRlcmZhY2UgSVVSTCB7XHJcblx0dXJsOiBzdHJpbmc7XHJcblx0aG9zdG5hbWU/OiBzdHJpbmc7XHJcblx0cGF0aD86IHN0cmluZztcclxuXHRwb3J0PzogbnVtYmVyO1xyXG5cdHByb3RvY2FsPzogc3RyaW5nO1xyXG59XHJcbmltcG9ydCBVcmwgZnJvbSAnLi90aGlyZHBhcnQvdXJsLXBhcnNlci91cmwtcGFyc2VyJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlX3VybCh1cmw6IHN0cmluZyk6IElVUkwge1xyXG5cdC8vIGNvbnN0IHJlZ2V4ID0gL14oW2Etel0rPylcXDpcXC9cXC8oW15cXC8/IzpdKykoOihcXGQrKSk/KD86W1xcLz8jXXwkKSguKikvaTtcclxuXHQvLyBjb25zdCBtYXRjaGVzID0gdXJsLm1hdGNoKHJlZ2V4KTtcclxuXHQvLyBpZiAobWF0Y2hlcykge1xyXG5cdC8vIFx0cmV0dXJuIHtcclxuXHQvLyBcdFx0dXJsLFxyXG5cdC8vIFx0XHRwcm90b2NhbDogbWF0Y2hlc1sxXSxcclxuXHQvLyBcdFx0aG9zdG5hbWU6IG1hdGNoZXNbMl0sXHJcblx0Ly8gXHRcdHBvcnQ6IG1hdGNoZXNbNF0gPyBwYXJzZUludChtYXRjaGVzWzRdKSA6IHVuZGVmaW5lZCxcclxuXHQvLyBcdFx0cGF0aDogbWF0Y2hlc1s1XSxcclxuXHQvLyBcdH07XHJcblx0Ly8gfSBlbHNlIHtcclxuXHQvLyBcdHJldHVybiB7XHJcblx0Ly8gXHRcdHVybFxyXG5cdC8vIFx0fTtcclxuXHQvLyB9XHJcblx0Y29uc3QgdSA9IG5ldyBVcmwodXJsKTtcclxuXHR1LnVybCA9IHVybDtcclxuXHRyZXR1cm4gdTtcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IFByb2dyZXNzRXZlbnQsIEV2ZW50VGFyZ2V0LCBFdmVudCwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMsIEV2ZW50TGlzdGVuZXJPcHRpb25zIH0gZnJvbSBcIi4uL2V2ZW50XCI7XHJcbmltcG9ydCB7IElVUkwgfSBmcm9tIFwiLi91cmxcIjtcclxuZXhwb3J0IHR5cGUgWE1MSHR0cFJlcXVlc3RSZXNwb25zZVR5cGUgPSBcIlwiIHwgXCJhcnJheWJ1ZmZlclwiIHwgXCJibG9iXCIgfCBcImRvY3VtZW50XCIgfCBcImpzb25cIiB8IFwidGV4dFwiO1xyXG5leHBvcnQgdHlwZSBYTUxIdHRwUmVxdWVzdE1ldGhvZCA9IFwiR0VUXCIgfCBcIlBPU1RcIiB8IFwiUFVUXCIgfCBcIkNSRUFURVwiIHwgXCJERUxFVEVcIjtcclxuZXhwb3J0IHR5cGUgQm9keUluaXQgPSBzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xyXG5leHBvcnQgZW51bSBIdHRwU3RhdHVzQ29kZSB7IENvbnRpbnVlID0gMTAwLCBTd2l0Y2hpbmdQcm90b2NvbHMgPSAxMDEsIE9LID0gMjAwLCBDcmVhdGVkID0gMjAxLCBBY2NlcHRlZCA9IDIwMiwgTm9uQXV0aG9yaXRhdGl2ZUluZm9ybWF0aW9uID0gMjAzLCBOb0NvbnRlbnQgPSAyMDQsIFJlc2V0Q29udGVudCA9IDIwNSwgUGFydGlhbENvbnRlbnQgPSAyMDYsIE11bHRpcGxlQ2hvaWNlcyA9IDMwMCwgQW1iaWd1b3VzID0gMzAwLCBNb3ZlZFBlcm1hbmVudGx5ID0gMzAxLCBNb3ZlZCA9IDMwMSwgRm91bmQgPSAzMDIsIFJlZGlyZWN0ID0gMzAyLCBTZWVPdGhlciA9IDMwMywgUmVkaXJlY3RNZXRob2QgPSAzMDMsIE5vdE1vZGlmaWVkID0gMzA0LCBVc2VQcm94eSA9IDMwNSwgVW51c2VkID0gMzA2LCBUZW1wb3JhcnlSZWRpcmVjdCA9IDMwNywgUmVkaXJlY3RLZWVwVmVyYiA9IDMwNywgQmFkUmVxdWVzdCA9IDQwMCwgVW5hdXRob3JpemVkID0gNDAxLCBQYXltZW50UmVxdWlyZWQgPSA0MDIsIEZvcmJpZGRlbiA9IDQwMywgTm90Rm91bmQgPSA0MDQsIE1ldGhvZE5vdEFsbG93ZWQgPSA0MDUsIE5vdEFjY2VwdGFibGUgPSA0MDYsIFByb3h5QXV0aGVudGljYXRpb25SZXF1aXJlZCA9IDQwNywgUmVxdWVzdFRpbWVvdXQgPSA0MDgsIENvbmZsaWN0ID0gNDA5LCBHb25lID0gNDEwLCBMZW5ndGhSZXF1aXJlZCA9IDQxMSwgUHJlY29uZGl0aW9uRmFpbGVkID0gNDEyLCBSZXF1ZXN0RW50aXR5VG9vTGFyZ2UgPSA0MTMsIFJlcXVlc3RVcmlUb29Mb25nID0gNDE0LCBVbnN1cHBvcnRlZE1lZGlhVHlwZSA9IDQxNSwgUmVxdWVzdGVkUmFuZ2VOb3RTYXRpc2ZpYWJsZSA9IDQxNiwgRXhwZWN0YXRpb25GYWlsZWQgPSA0MTcsIFVwZ3JhZGVSZXF1aXJlZCA9IDQyNiwgSW50ZXJuYWxTZXJ2ZXJFcnJvciA9IDUwMCwgTm90SW1wbGVtZW50ZWQgPSA1MDEsIEJhZEdhdGV3YXkgPSA1MDIsIFNlcnZpY2VVbmF2YWlsYWJsZSA9IDUwMywgR2F0ZXdheVRpbWVvdXQgPSA1MDQsIEh0dHBWZXJzaW9uTm90U3VwcG9ydGVkID0gNTA1IH1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldEV2ZW50TWFwIHtcclxuXHRcImFib3J0XCI6IFByb2dyZXNzRXZlbnQ8WE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldD47XHJcblx0XCJlcnJvclwiOiBQcm9ncmVzc0V2ZW50PFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQ+O1xyXG5cdFwibG9hZFwiOiBQcm9ncmVzc0V2ZW50PFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQ+O1xyXG5cdFwibG9hZGVuZFwiOiBQcm9ncmVzc0V2ZW50PFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQ+O1xyXG5cdFwibG9hZHN0YXJ0XCI6IFByb2dyZXNzRXZlbnQ8WE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldD47XHJcblx0XCJwcm9ncmVzc1wiOiBQcm9ncmVzc0V2ZW50PFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQ+O1xyXG5cdFwidGltZW91dFwiOiBQcm9ncmVzc0V2ZW50PFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQ+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFhNTEh0dHBSZXF1ZXN0RXZlbnRNYXAgZXh0ZW5kcyBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0RXZlbnRNYXAge1xyXG5cdFwicmVhZHlzdGF0ZWNoYW5nZVwiOiBFdmVudDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQgZXh0ZW5kcyBFdmVudFRhcmdldCB7XHJcblxyXG5cdG9uYWJvcnQ6ICgodGhpczogWE1MSHR0cFJlcXVlc3RCYXNlLCBldjogUHJvZ3Jlc3NFdmVudCkgPT4gYW55KSB8IG51bGw7XHJcblx0b25lcnJvcjogKCh0aGlzOiBYTUxIdHRwUmVxdWVzdEJhc2UsIGV2OiBQcm9ncmVzc0V2ZW50KSA9PiBhbnkpIHwgbnVsbDtcclxuXHRvbmxvYWQ6ICgodGhpczogWE1MSHR0cFJlcXVlc3RCYXNlLCBldjogUHJvZ3Jlc3NFdmVudCkgPT4gYW55KSB8IG51bGw7XHJcblx0b25sb2FkZW5kOiAoKHRoaXM6IFhNTEh0dHBSZXF1ZXN0QmFzZSwgZXY6IFByb2dyZXNzRXZlbnQpID0+IGFueSkgfCBudWxsO1xyXG5cdG9ubG9hZHN0YXJ0OiAoKHRoaXM6IFhNTEh0dHBSZXF1ZXN0QmFzZSwgZXY6IFByb2dyZXNzRXZlbnQpID0+IGFueSkgfCBudWxsO1xyXG5cdG9ucHJvZ3Jlc3M6ICgodGhpczogWE1MSHR0cFJlcXVlc3RCYXNlLCBldjogUHJvZ3Jlc3NFdmVudCkgPT4gYW55KSB8IG51bGw7XHJcblx0b250aW1lb3V0OiAoKHRoaXM6IFhNTEh0dHBSZXF1ZXN0QmFzZSwgZXY6IFByb2dyZXNzRXZlbnQpID0+IGFueSkgfCBudWxsO1xyXG5cclxuXHRhZGRFdmVudExpc3RlbmVyPEsgZXh0ZW5kcyBrZXlvZiBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0RXZlbnRNYXA+KHR5cGU6IEssIGxpc3RlbmVyOiAodGhpczogWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCwgZXY6IFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXRFdmVudE1hcFtLXSkgPT4gYW55LCBvcHRpb25zPzogYm9vbGVhbiB8IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zKTogdm9pZCB7XHJcblx0XHRzdXBlci5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI8SyBleHRlbmRzIGtleW9mIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXRFdmVudE1hcD4odHlwZTogSywgbGlzdGVuZXI6ICh0aGlzOiBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0LCBldjogWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldEV2ZW50TWFwW0tdKSA9PiBhbnksIG9wdGlvbnM/OiBib29sZWFuIHwgRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkIHtcclxuXHRcdHN1cGVyLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFhNTEh0dHBSZXF1ZXN0VXBsb2FkIGV4dGVuZHMgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCB7fVxyXG5cclxuZXhwb3J0IGVudW0gWE1MSHR0cFJlcXVlc3RSZWFkeVN0YXRlIHtcclxuXHRVTlNFTlQsXHJcblx0T1BFTkVELFxyXG5cdEhFQURFUlNfUkVDRUlWRUQsXHJcblx0TE9BRElORyxcclxuXHRET05FLFxyXG59XHJcblxyXG4vKiogVXNlIFhNTEh0dHBSZXF1ZXN0IChYSFIpIG9iamVjdHMgdG8gaW50ZXJhY3Qgd2l0aCBzZXJ2ZXJzLiBZb3UgY2FuIHJldHJpZXZlIGRhdGEgZnJvbSBhIFVSTCB3aXRob3V0IGhhdmluZyB0byBkbyBhIGZ1bGwgcGFnZSByZWZyZXNoLiBUaGlzIGVuYWJsZXMgYSBXZWIgcGFnZSB0byB1cGRhdGUganVzdCBwYXJ0IG9mIGEgcGFnZSB3aXRob3V0IGRpc3J1cHRpbmcgd2hhdCB0aGUgdXNlciBpcyBkb2luZy4gKi9cclxuZXhwb3J0IGNsYXNzIFhNTEh0dHBSZXF1ZXN0QmFzZSBleHRlbmRzIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQge1xyXG5cclxuXHRvbnJlYWR5c3RhdGVjaGFuZ2U6ICgodGhpczogWE1MSHR0cFJlcXVlc3RCYXNlLCBldjogRXZlbnQpID0+IGFueSkgfCBudWxsO1xyXG5cclxuXHRwdWJsaWMgZ2V0IHVybCgpIDogUmVhZG9ubHk8SVVSTD4geyByZXR1cm4gdGhpcy5fdXJsOyB9XHJcblx0cHJvdGVjdGVkIF91cmwgOiBJVVJMO1xyXG5cdHByb3RlY3RlZCBfbWV0aG9kOiBYTUxIdHRwUmVxdWVzdE1ldGhvZDtcclxuXHRwcm90ZWN0ZWQgX3JlcXVlc3RfaGVhZGVyczoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcclxuXHRwcm90ZWN0ZWQgX2Nvbm5lY3Rfc3RhcnRfdGltZTogbnVtYmVyO1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIGNsaWVudCdzIHN0YXRlLlxyXG5cdCAqL1xyXG5cdGdldCByZWFkeVN0YXRlKCk6IFhNTEh0dHBSZXF1ZXN0UmVhZHlTdGF0ZSB7IHJldHVybiB0aGlzLl9yZWFkeVN0YXRlOyB9XHJcblx0c2V0IHJlYWR5U3RhdGUodmFsdWU6IFhNTEh0dHBSZXF1ZXN0UmVhZHlTdGF0ZSkge1xyXG5cdFx0aWYgKHZhbHVlICE9IHRoaXMuX3JlYWR5U3RhdGUpIHtcclxuXHRcdFx0dGhpcy5fcmVhZHlTdGF0ZSA9IHZhbHVlO1xyXG5cdFx0XHRpZiAodGhpcy5vbnJlYWR5c3RhdGVjaGFuZ2UpIHtcclxuXHRcdFx0XHRsZXQgZXZlbnQgPSBuZXcgRXZlbnQoJ3JlYWR5c3RhdGVjaGFuZ2UnKTtcclxuXHRcdFx0XHR0aGlzLm9ucmVhZHlzdGF0ZWNoYW5nZS5jYWxsKHRoaXMsIGV2ZW50KTtcclxuXHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX3JlYWR5U3RhdGU6IFhNTEh0dHBSZXF1ZXN0UmVhZHlTdGF0ZTtcclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgcmVzcG9uc2UncyBib2R5LlxyXG5cdCAqL1xyXG5cdGdldCByZXNwb25zZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5fcmVzcG9uc2U7IH1cclxuXHRwcm90ZWN0ZWQgX3Jlc3BvbnNlOiBhbnk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIHRleHQgcmVzcG9uc2UuXHJcblx0ICpcclxuXHQgKiBUaHJvd3MgYW4gXCJJbnZhbGlkU3RhdGVFcnJvclwiIERPTUV4Y2VwdGlvbiBpZiByZXNwb25zZVR5cGUgaXMgbm90IHRoZSBlbXB0eSBzdHJpbmcgb3IgXCJ0ZXh0XCIuXHJcblx0ICovXHJcblx0Z2V0IHJlc3BvbnNlVGV4dCgpOiBzdHJpbmcgfCBudWxsIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgcmVzcG9uc2UgdHlwZS5cclxuXHQgKlxyXG5cdCAqIENhbiBiZSBzZXQgdG8gY2hhbmdlIHRoZSByZXNwb25zZSB0eXBlLiBWYWx1ZXMgYXJlOiB0aGUgZW1wdHkgc3RyaW5nIChkZWZhdWx0KSwgXCJhcnJheWJ1ZmZlclwiLCBcImJsb2JcIiwgXCJkb2N1bWVudFwiLCBcImpzb25cIiwgYW5kIFwidGV4dFwiLlxyXG5cdCAqXHJcblx0ICogV2hlbiBzZXQ6IHNldHRpbmcgdG8gXCJkb2N1bWVudFwiIGlzIGlnbm9yZWQgaWYgY3VycmVudCBnbG9iYWwgb2JqZWN0IGlzIG5vdCBhIFdpbmRvdyBvYmplY3QuXHJcblx0ICpcclxuXHQgKiBXaGVuIHNldDogdGhyb3dzIGFuIFwiSW52YWxpZFN0YXRlRXJyb3JcIiBET01FeGNlcHRpb24gaWYgc3RhdGUgaXMgbG9hZGluZyBvciBkb25lLlxyXG5cdCAqXHJcblx0ICogV2hlbiBzZXQ6IHRocm93cyBhbiBcIkludmFsaWRBY2Nlc3NFcnJvclwiIERPTUV4Y2VwdGlvbiBpZiB0aGUgc3luY2hyb25vdXMgZmxhZyBpcyBzZXQgYW5kIGN1cnJlbnQgZ2xvYmFsIG9iamVjdCBpcyBhIFdpbmRvdyBvYmplY3QuXHJcblx0ICovXHJcblx0cmVzcG9uc2VUeXBlOiBYTUxIdHRwUmVxdWVzdFJlc3BvbnNlVHlwZTtcclxuXHRnZXQgcmVzcG9uc2VVUkwoKTogc3RyaW5nIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgZG9jdW1lbnQgcmVzcG9uc2UuXHJcblx0ICpcclxuXHQgKiBUaHJvd3MgYW4gXCJJbnZhbGlkU3RhdGVFcnJvclwiIERPTUV4Y2VwdGlvbiBpZiByZXNwb25zZVR5cGUgaXMgbm90IHRoZSBlbXB0eSBzdHJpbmcgb3IgXCJkb2N1bWVudFwiLlxyXG5cdCAqL1xyXG5cdGdldCByZXNwb25zZVhNTCgpOiBzdHJpbmcgeyByZXR1cm4gbnVsbH0gO1xyXG5cdGdldCBzdGF0dXMoKTogSHR0cFN0YXR1c0NvZGUgeyByZXR1cm4gMDsgfTtcclxuXHRyZWFkb25seSBzdGF0dXNUZXh0OiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbiBiZSBzZXQgdG8gYSB0aW1lIGluIG1pbGxpc2Vjb25kcy4gV2hlbiBzZXQgdG8gYSBub24temVybyB2YWx1ZSB3aWxsIGNhdXNlIGZldGNoaW5nIHRvIHRlcm1pbmF0ZSBhZnRlciB0aGUgZ2l2ZW4gdGltZSBoYXMgcGFzc2VkLiBXaGVuIHRoZSB0aW1lIGhhcyBwYXNzZWQsIHRoZSByZXF1ZXN0IGhhcyBub3QgeWV0IGNvbXBsZXRlZCwgYW5kIHRoZSBzeW5jaHJvbm91cyBmbGFnIGlzIHVuc2V0LCBhIHRpbWVvdXQgZXZlbnQgd2lsbCB0aGVuIGJlIGRpc3BhdGNoZWQsIG9yIGEgXCJUaW1lb3V0RXJyb3JcIiBET01FeGNlcHRpb24gd2lsbCBiZSB0aHJvd24gb3RoZXJ3aXNlIChmb3IgdGhlIHNlbmQoKSBtZXRob2QpLlxyXG5cdCAqXHJcblx0ICogV2hlbiBzZXQ6IHRocm93cyBhbiBcIkludmFsaWRBY2Nlc3NFcnJvclwiIERPTUV4Y2VwdGlvbiBpZiB0aGUgc3luY2hyb25vdXMgZmxhZyBpcyBzZXQgYW5kIGN1cnJlbnQgZ2xvYmFsIG9iamVjdCBpcyBhIFdpbmRvdyBvYmplY3QuXHJcblx0ICovXHJcblx0dGltZW91dDogbnVtYmVyO1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBhc3NvY2lhdGVkIFhNTEh0dHBSZXF1ZXN0VXBsb2FkIG9iamVjdC4gSXQgY2FuIGJlIHVzZWQgdG8gZ2F0aGVyIHRyYW5zbWlzc2lvbiBpbmZvcm1hdGlvbiB3aGVuIGRhdGEgaXMgdHJhbnNmZXJyZWQgdG8gYSBzZXJ2ZXIuXHJcblx0ICovXHJcblx0Z2V0IHVwbG9hZCgpOiBYTUxIdHRwUmVxdWVzdFVwbG9hZCB7IHJldHVybiB0aGlzLl91cGxvYWQ7IH1cclxuXHRwcm90ZWN0ZWQgX3VwbG9hZDogWE1MSHR0cFJlcXVlc3RVcGxvYWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRydWUgd2hlbiBjcmVkZW50aWFscyBhcmUgdG8gYmUgaW5jbHVkZWQgaW4gYSBjcm9zcy1vcmlnaW4gcmVxdWVzdC4gRmFsc2Ugd2hlbiB0aGV5IGFyZSB0byBiZSBleGNsdWRlZCBpbiBhIGNyb3NzLW9yaWdpbiByZXF1ZXN0IGFuZCB3aGVuIGNvb2tpZXMgYXJlIHRvIGJlIGlnbm9yZWQgaW4gaXRzIHJlc3BvbnNlLiBJbml0aWFsbHkgZmFsc2UuXHJcblx0ICpcclxuXHQgKiBXaGVuIHNldDogdGhyb3dzIGFuIFwiSW52YWxpZFN0YXRlRXJyb3JcIiBET01FeGNlcHRpb24gaWYgc3RhdGUgaXMgbm90IHVuc2VudCBvciBvcGVuZWQsIG9yIGlmIHRoZSBzZW5kKCkgZmxhZyBpcyBzZXQuXHJcblx0ICovXHJcblx0d2l0aENyZWRlbnRpYWxzOiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBDYW5jZWxzIGFueSBuZXR3b3JrIGFjdGl2aXR5LlxyXG5cdCAqL1xyXG5cdGFib3J0KCk6IHZvaWQge31cclxuXHJcblx0Z2V0QWxsUmVzcG9uc2VIZWFkZXJzKCk6IHN0cmluZyB7IHJldHVybiBcIlwiOyB9XHJcblxyXG5cdGdldFJlc3BvbnNlSGVhZGVyKG5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSByZXF1ZXN0IG1ldGhvZCwgcmVxdWVzdCBVUkwsIGFuZCBzeW5jaHJvbm91cyBmbGFnLlxyXG5cdCAqXHJcblx0ICogVGhyb3dzIGEgXCJTeW50YXhFcnJvclwiIERPTUV4Y2VwdGlvbiBpZiBlaXRoZXIgbWV0aG9kIGlzIG5vdCBhIHZhbGlkIEhUVFAgbWV0aG9kIG9yIHVybCBjYW5ub3QgYmUgcGFyc2VkLlxyXG5cdCAqXHJcblx0ICogVGhyb3dzIGEgXCJTZWN1cml0eUVycm9yXCIgRE9NRXhjZXB0aW9uIGlmIG1ldGhvZCBpcyBhIGNhc2UtaW5zZW5zaXRpdmUgbWF0Y2ggZm9yIGBDT05ORUNUYCwgYFRSQUNFYCwgb3IgYFRSQUNLYC5cclxuXHQgKlxyXG5cdCAqIFRocm93cyBhbiBcIkludmFsaWRBY2Nlc3NFcnJvclwiIERPTUV4Y2VwdGlvbiBpZiBhc3luYyBpcyBmYWxzZSwgY3VycmVudCBnbG9iYWwgb2JqZWN0IGlzIGEgV2luZG93IG9iamVjdCwgYW5kIHRoZSB0aW1lb3V0IGF0dHJpYnV0ZSBpcyBub3QgemVybyBvciB0aGUgcmVzcG9uc2VUeXBlIGF0dHJpYnV0ZSBpcyBub3QgdGhlIGVtcHR5IHN0cmluZy5cclxuXHQgKi9cclxuXHRvcGVuKG1ldGhvZDogWE1MSHR0cFJlcXVlc3RNZXRob2QsIHVybDogc3RyaW5nLCBhc3luYz86IGJvb2xlYW4sIHVzZXJuYW1lPzogc3RyaW5nIHwgbnVsbCwgcGFzc3dvcmQ/OiBzdHJpbmcgfCBudWxsKTogdm9pZCB7fVxyXG5cclxuXHQvKipcclxuXHQgKiBBY3RzIGFzIGlmIHRoZSBgQ29udGVudC1UeXBlYCBoZWFkZXIgdmFsdWUgZm9yIHJlc3BvbnNlIGlzIG1pbWUuIChJdCBkb2VzIG5vdCBhY3R1YWxseSBjaGFuZ2UgdGhlIGhlYWRlciB0aG91Z2guKVxyXG5cdCAqXHJcblx0ICogVGhyb3dzIGFuIFwiSW52YWxpZFN0YXRlRXJyb3JcIiBET01FeGNlcHRpb24gaWYgc3RhdGUgaXMgbG9hZGluZyBvciBkb25lLlxyXG5cdCAqL1xyXG5cdG92ZXJyaWRlTWltZVR5cGUobWltZTogc3RyaW5nKTogdm9pZCB7XHJcblx0XHR0aGlzLl9vdmVycmlkZWRfbWltZSA9IG1pbWU7XHJcblx0fVxyXG5cdHByb3RlY3RlZCBfb3ZlcnJpZGVkX21pbWU6IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogSW5pdGlhdGVzIHRoZSByZXF1ZXN0LiBUaGUgYm9keSBhcmd1bWVudCBwcm92aWRlcyB0aGUgcmVxdWVzdCBib2R5LCBpZiBhbnksIGFuZCBpcyBpZ25vcmVkIGlmIHRoZSByZXF1ZXN0IG1ldGhvZCBpcyBHRVQgb3IgSEVBRC5cclxuXHQgKlxyXG5cdCAqIFRocm93cyBhbiBcIkludmFsaWRTdGF0ZUVycm9yXCIgRE9NRXhjZXB0aW9uIGlmIGVpdGhlciBzdGF0ZSBpcyBub3Qgb3BlbmVkIG9yIHRoZSBzZW5kKCkgZmxhZyBpcyBzZXQuXHJcblx0ICovXHJcblx0c2VuZChib2R5PzogQm9keUluaXQgfCBudWxsKTogdm9pZCB7fVxyXG5cclxuXHQvKipcclxuXHQgKiBDb21iaW5lcyBhIGhlYWRlciBpbiBhdXRob3IgcmVxdWVzdCBoZWFkZXJzLlxyXG5cdCAqXHJcblx0ICogVGhyb3dzIGFuIFwiSW52YWxpZFN0YXRlRXJyb3JcIiBET01FeGNlcHRpb24gaWYgZWl0aGVyIHN0YXRlIGlzIG5vdCBvcGVuZWQgb3IgdGhlIHNlbmQoKSBmbGFnIGlzIHNldC5cclxuXHQgKlxyXG5cdCAqIFRocm93cyBhIFwiU3ludGF4RXJyb3JcIiBET01FeGNlcHRpb24gaWYgbmFtZSBpcyBub3QgYSBoZWFkZXIgbmFtZSBvciBpZiB2YWx1ZSBpcyBub3QgYSBoZWFkZXIgdmFsdWUuXHJcblx0ICovXHJcblx0c2V0UmVxdWVzdEhlYWRlcihuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdHRoaXMuX3JlcXVlc3RfaGVhZGVyc1tuYW1lLnRvTG93ZXJDYXNlKCldID0gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRhZGRFdmVudExpc3RlbmVyPEsgZXh0ZW5kcyBrZXlvZiBYTUxIdHRwUmVxdWVzdEV2ZW50TWFwPih0eXBlOiBLLCBsaXN0ZW5lcjogKHRoaXM6IFhNTEh0dHBSZXF1ZXN0QmFzZSwgZXY6IFhNTEh0dHBSZXF1ZXN0RXZlbnRNYXBbS10pID0+IGFueSwgb3B0aW9ucz86IGJvb2xlYW4gfCBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyk6IHZvaWQge1xyXG5cdFx0c3VwZXIuYWRkRXZlbnRMaXN0ZW5lcih0eXBlIGFzIGFueSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcjxLIGV4dGVuZHMga2V5b2YgWE1MSHR0cFJlcXVlc3RFdmVudE1hcD4odHlwZTogSywgbGlzdGVuZXI6ICh0aGlzOiBYTUxIdHRwUmVxdWVzdEJhc2UsIGV2OiBYTUxIdHRwUmVxdWVzdEV2ZW50TWFwW0tdKSA9PiBhbnksIG9wdGlvbnM/OiBib29sZWFuIHwgRXZlbnRMaXN0ZW5lck9wdGlvbnMpOiB2b2lkIHtcclxuXHRcdHN1cGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSBhcyBhbnksIGxpc3RlbmVyLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cclxuXHRwcml2YXRlIF9wb2xsX3Rhc2tfaWQ6IG51bWJlciA9IC0xO1xyXG5cdHByb3RlY3RlZCAkc3RhcnRfcG9sbCgpIHtcclxuXHRcdHRoaXMuJHN0b3BfcG9sbCgpO1xyXG5cdFx0dGhpcy5fcG9sbF90YXNrX2lkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuJHRpY2suYmluZCh0aGlzKSk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgJHN0b3BfcG9sbCgpIHtcclxuXHRcdGlmICh0aGlzLl9wb2xsX3Rhc2tfaWQgIT0gLTEpIHtcclxuXHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fcG9sbF90YXNrX2lkKTtcclxuXHRcdFx0dGhpcy5fcG9sbF90YXNrX2lkID0gLTE7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgJGdldF9wcm9ncmVzcygpOiBQcm9ncmVzc0V2ZW50SW5pdCB7XHJcblx0XHRyZXR1cm4ge307XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgJGRpc3BhdGNoX2V2ZW50KHR5cGU6IGtleW9mIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXRFdmVudE1hcCkge1xyXG5cdFx0bGV0IGV2ZW50OiBFdmVudCA9IHVuZGVmaW5lZDtcclxuXHRcdGlmICh0eXBlID09PSAncHJvZ3Jlc3MnKSB7XHJcblx0XHRcdGxldCBldnQgPSBuZXcgUHJvZ3Jlc3NFdmVudCgncHJvZ3Jlc3MnLCB0aGlzLiRnZXRfcHJvZ3Jlc3MoKSk7XHJcblx0XHRcdGV2ZW50ID0gZXZ0O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZXZlbnQgPSBuZXcgRXZlbnQodHlwZSk7XHJcblx0XHR9XHJcblx0XHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdFx0Y2FzZSAnbG9hZCc6XHJcblx0XHRcdFx0aWYgKHRoaXMub25sb2FkKSB0aGlzLm9ubG9hZC5jYWxsKHRoaXMsIGV2ZW50KTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnbG9hZGVuZCc6XHJcblx0XHRcdFx0aWYgKHRoaXMub25sb2FkZW5kKSB0aGlzLm9ubG9hZGVuZC5jYWxsKHRoaXMsIGV2ZW50KTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnbG9hZHN0YXJ0JzpcclxuXHRcdFx0XHRpZiAodGhpcy5vbmxvYWRzdGFydCkgdGhpcy5vbmxvYWRzdGFydC5jYWxsKHRoaXMsIGV2ZW50KTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAncHJvZ3Jlc3MnOlxyXG5cdFx0XHRcdGlmICh0aGlzLm9ucHJvZ3Jlc3MpIHRoaXMub25wcm9ncmVzcy5jYWxsKHRoaXMsIGV2ZW50KTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAndGltZW91dCc6XHJcblx0XHRcdFx0aWYgKHRoaXMub250aW1lb3V0KSB0aGlzLm9udGltZW91dC5jYWxsKHRoaXMsIGV2ZW50KTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnYWJvcnQnOlxyXG5cdFx0XHRcdGlmICh0aGlzLm9uYWJvcnQpIHRoaXMub25hYm9ydC5jYWxsKHRoaXMsIGV2ZW50KTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnZXJyb3InOlxyXG5cdFx0XHRcdGlmICh0aGlzLm9uZXJyb3IpIHRoaXMub25lcnJvci5jYWxsKHRoaXMsIGV2ZW50KTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgJHRpY2soKSB7fVxyXG59IiwiaW1wb3J0IHsgSVVSTCwgcGFyc2VfdXJsIH0gZnJvbSBcIi4vdXJsXCI7XHJcbmltcG9ydCBNSU1FVHlwZSBmcm9tIFwiLi90aGlyZHBhcnQvbWltZXR5cGUvbWltZS10eXBlXCI7XHJcbmltcG9ydCB7IFhNTEh0dHBSZXF1ZXN0UmVhZHlTdGF0ZSwgQm9keUluaXQsIFhNTEh0dHBSZXF1ZXN0QmFzZSwgWE1MSHR0cFJlcXVlc3RNZXRob2QsIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXRFdmVudE1hcCwgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCwgWE1MSHR0cFJlcXVlc3RVcGxvYWQsIEh0dHBTdGF0dXNDb2RlIH0gZnJvbSBcIi4veGhyLmNvbW1vblwiO1xyXG5pbXBvcnQgeyBVbml0eUVuZ2luZSwgU3lzdGVtIH0gZnJvbSBcImNzaGFycFwiO1xyXG5cclxuY2xhc3MgVW5pdHlYTUxIdHRwUmVxdWVzdCBleHRlbmRzIFhNTEh0dHBSZXF1ZXN0QmFzZSB7XHJcblxyXG5cdHB1YmxpYyBnZXQgdXJsKCkgOiBSZWFkb25seTxJVVJMPiB7IHJldHVybiB0aGlzLl91cmw7IH1cclxuXHRwcm90ZWN0ZWQgX3VybCA6IElVUkw7XHJcblx0cHJvdGVjdGVkIF9yZXF1ZXN0OiBVbml0eUVuZ2luZS5OZXR3b3JraW5nLlVuaXR5V2ViUmVxdWVzdDtcclxuXHQvLyBwcm90ZWN0ZWQgX2hlYWRfcmVxdWVzdDogVW5pdHlFbmdpbmUuTmV0d29ya2luZy5Vbml0eVdlYlJlcXVlc3Q7XHJcblx0cHJvdGVjdGVkIF9tZXRob2Q6IFhNTEh0dHBSZXF1ZXN0TWV0aG9kO1xyXG5cdHByb3RlY3RlZCBfY29ubmVjdF9zdGFydF90aW1lOiBudW1iZXI7XHJcblx0cHJvdGVjdGVkIF9pbnRlcm5hbF9yZXF1ZXN0OiBVbml0eUVuZ2luZS5OZXR3b3JraW5nLlVuaXR5V2ViUmVxdWVzdEFzeW5jT3BlcmF0aW9uO1xyXG5cdHByaXZhdGUgX3Byb2dyZXNzOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBfdGltZW91dF91bnRpbDogbnVtYmVyO1xyXG5cdHByaXZhdGUgX3N0YXR1czogSHR0cFN0YXR1c0NvZGU7XHJcblx0cHJpdmF0ZSBfcmVxdWVzdF9ib2R5Pzogc3RyaW5nO1xyXG5cdHByaXZhdGUgX2ludGVybmFsX3Jlc3BvbnNfaGVhZGVyczogU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuRGljdGlvbmFyeSQyPHN0cmluZywgc3RyaW5nPjtcclxuXHRnZXQgc3RhdHVzKCk6IEh0dHBTdGF0dXNDb2RlIHtcclxuXHRcdHJldHVybiB0aGlzLl9zdGF0dXM7XHJcblx0fVxyXG5cclxuXHRnZXQgcmVzcG9uc2VVUkwoKTogc3RyaW5nIHtcclxuXHRcdGlmICh0aGlzLnVybClcclxuXHRcdFx0cmV0dXJuIHRoaXMudXJsLnVybDtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0Z2V0IHJlc3BvbnNlWE1MKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5yZXNwb25zZVRleHQ7XHJcblx0fVxyXG5cclxuXHRnZXQgcmVzcG9uc2VUZXh0KCk6IHN0cmluZyB7XHJcblx0XHRpZiAodGhpcy5fcmVxdWVzdCAmJiB0aGlzLl9yZXF1ZXN0LmRvd25sb2FkSGFuZGxlcikge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fcmVxdWVzdC5kb3dubG9hZEhhbmRsZXIudGV4dDtcclxuXHRcdH1cclxuXHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHRnZXRBbGxSZXNwb25zZUhlYWRlcnMoKTogc3RyaW5nIHtcclxuXHRcdGxldCB0ZXh0ID0gJyc7XHJcblx0XHRpZiAodGhpcy5faW50ZXJuYWxfcmVzcG9uc19oZWFkZXJzKSB7XHJcblx0XHRcdGxldCBlbnVtZXJhdG9yID0gdGhpcy5faW50ZXJuYWxfcmVzcG9uc19oZWFkZXJzLkdldEVudW1lcmF0b3IoKTtcclxuXHRcdFx0d2hpbGUgKGVudW1lcmF0b3IuTW92ZU5leHQoKSkge1xyXG5cdFx0XHRcdHRleHQgKz0gYCR7ZW51bWVyYXRvci5DdXJyZW50LktleX06ICR7ZW51bWVyYXRvci5DdXJyZW50LlZhbHVlfVxcclxcbmA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0ZXh0O1xyXG5cdH1cclxuXHJcblx0Z2V0UmVzcG9uc2VIZWFkZXIobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHRcdGlmICh0aGlzLl9pbnRlcm5hbF9yZXNwb25zX2hlYWRlcnMpIHtcclxuXHRcdFx0aWYgKHRoaXMuX2ludGVybmFsX3Jlc3BvbnNfaGVhZGVycy5Db250YWluc0tleShuYW1lKSkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLl9pbnRlcm5hbF9yZXNwb25zX2hlYWRlcnMuZ2V0X0l0ZW0obmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiAnJztcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdG9wZW4obWV0aG9kOiBYTUxIdHRwUmVxdWVzdE1ldGhvZCwgdXJsOiBzdHJpbmcsIGFzeW5jPzogYm9vbGVhbiwgdXNlcm5hbWU/OiBzdHJpbmcgfCBudWxsLCBwYXNzd29yZD86IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcclxuXHRcdHRoaXMuX3VybCA9IHBhcnNlX3VybCh1cmwpO1xyXG5cdFx0aWYgKCF0aGlzLnVybC5wb3J0KSB7XHJcblx0XHRcdHRoaXMuX3VybC5wb3J0ID0gdGhpcy51cmwucHJvdG9jYWwgPT09ICdodHRwcycgPyA0NDMgOiA4MDtcclxuXHRcdH1cclxuXHRcdHRoaXMuX21ldGhvZCA9IG1ldGhvZDtcclxuXHRcdHRoaXMuX3JlYWR5U3RhdGUgPSBYTUxIdHRwUmVxdWVzdFJlYWR5U3RhdGUuVU5TRU5UO1xyXG5cdFx0dGhpcy5fY29ubmVjdF9zdGFydF90aW1lID0gRGF0ZS5ub3coKTtcclxuXHR9XHJcblxyXG5cdHNlbmQoYm9keT86IEJvZHlJbml0IHwgbnVsbCk6IHZvaWQge1xyXG5cdFx0aWYgKHR5cGVvZiBib2R5ID09PSAnb2JqZWN0Jykge1xyXG5cdFx0XHR0aGlzLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcblx0XHRcdGJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuXHRcdH0gZWxzZSBpZiAoYm9keSA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0aWYgKCEoJ0NvbnRlbnQtVHlwZScgaW4gdGhpcy5fcmVxdWVzdF9oZWFkZXJzKSkge1xyXG5cdFx0XHRcdHRoaXMuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvcGxhaW4nKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5fcmVxdWVzdF9ib2R5ID0gYm9keTtcclxuXHRcdC8vIHRoaXMuX2hlYWRfcmVxdWVzdCA9IFVuaXR5RW5naW5lLk5ldHdvcmtpbmcuVW5pdHlXZWJSZXF1ZXN0LkhlYWQodGhpcy5fdXJsLnVybCk7XHJcblx0XHQvLyBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5fcmVxdWVzdF9oZWFkZXJzKSkge1xyXG5cdFx0Ly8gXHRjb25zdCB2YWx1ZSA9IHRoaXMuX3JlcXVlc3RfaGVhZGVyc1trZXldO1xyXG5cdFx0Ly8gXHR0aGlzLl9oZWFkX3JlcXVlc3QuU2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbHVlKTtcclxuXHRcdC8vIH1cclxuXHRcdC8vIHRoaXMuX2hlYWRfcmVxdWVzdC5TZW5kV2ViUmVxdWVzdCgpO1xyXG5cclxuXHRcdHN3aXRjaCAodGhpcy5fbWV0aG9kKSB7XHJcblx0XHRcdGNhc2UgJ1BVVCc6XHJcblx0XHRcdFx0dGhpcy5fcmVxdWVzdCA9IFVuaXR5RW5naW5lLk5ldHdvcmtpbmcuVW5pdHlXZWJSZXF1ZXN0LlB1dCh0aGlzLl91cmwudXJsLCB0aGlzLl9yZXF1ZXN0X2JvZHkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdQT1NUJzpcclxuXHRcdFx0XHQvLyBOb3RlOiDov5nph4zmlYXmhI/nlKggcHV0IOWIm+W7uu+8jOWboOS4uueUqCBQT1NU55qE6K+dIFVuaXR5IOS8muiHquS9nOS4u+W8oOWcsOW4ruS9oOe8lueggSBib2R5IOWGheWuuVxyXG5cdFx0XHRcdHRoaXMuX3JlcXVlc3QgPSBVbml0eUVuZ2luZS5OZXR3b3JraW5nLlVuaXR5V2ViUmVxdWVzdC5QdXQodGhpcy5fdXJsLnVybCwgdGhpcy5fcmVxdWVzdF9ib2R5KTtcclxuXHRcdFx0XHR0aGlzLl9yZXF1ZXN0Lm1ldGhvZCA9IHRoaXMuX21ldGhvZDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnR0VUJzpcclxuXHRcdFx0XHR0aGlzLl9yZXF1ZXN0ID0gVW5pdHlFbmdpbmUuTmV0d29ya2luZy5Vbml0eVdlYlJlcXVlc3QuR2V0KHRoaXMuX3VybC51cmwpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdERUxFVEUnOlxyXG5cdFx0XHRcdHRoaXMuX3JlcXVlc3QgPSBVbml0eUVuZ2luZS5OZXR3b3JraW5nLlVuaXR5V2ViUmVxdWVzdC5EZWxldGUodGhpcy5fdXJsLnVybCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGhpcy5fcmVxdWVzdCA9IG5ldyBVbml0eUVuZ2luZS5OZXR3b3JraW5nLlVuaXR5V2ViUmVxdWVzdCh0aGlzLl91cmwudXJsLCB0aGlzLl9tZXRob2QpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0Zm9yIChsZXQga2V5IG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuX3JlcXVlc3RfaGVhZGVycykpIHtcclxuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLl9yZXF1ZXN0X2hlYWRlcnNba2V5XTtcclxuXHRcdFx0dGhpcy5fcmVxdWVzdC5TZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsdWUpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5faW50ZXJuYWxfcmVxdWVzdCA9IHRoaXMuX3JlcXVlc3QuU2VuZFdlYlJlcXVlc3QoKTtcclxuXHJcblx0XHRpZiAodHlwZW9mIHRoaXMudGltZW91dCA9PT0gJ251bWJlcicpIHtcclxuXHRcdFx0dGhpcy5fdGltZW91dF91bnRpbCA9IERhdGUubm93KCkgKyB0aGlzLnRpbWVvdXQ7XHJcblx0XHR9XHJcblx0XHR0aGlzLiRkaXNwYXRjaF9ldmVudCgnbG9hZHN0YXJ0Jyk7XHJcblx0XHR0aGlzLiRzdGFydF9wb2xsKCk7XHJcblx0fVxyXG5cclxuXHRhYm9ydCgpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9yZXF1ZXN0KSB7XHJcblx0XHRcdHRoaXMuX3JlcXVlc3QuQWJvcnQoKTtcclxuXHRcdFx0dGhpcy4kZGlzcGF0Y2hfZXZlbnQoJ2Fib3J0Jyk7XHJcblx0XHRcdHRoaXMuJHN0b3BfcG9sbCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkICRnZXRfcHJvZ3Jlc3MoKTogUHJvZ3Jlc3NFdmVudEluaXQge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bGVuZ3RoQ29tcHV0YWJsZTogdGhpcy5fcHJvZ3Jlc3MgIT09IHVuZGVmaW5lZCxcclxuXHRcdFx0bG9hZGVkOiB0aGlzLl9wcm9ncmVzcyxcclxuXHRcdFx0dG90YWw6IDFcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgJHRpY2soKSB7XHJcblx0XHRpZiAodGhpcy5fcmVxdWVzdCkge1xyXG5cclxuXHRcdFx0dGhpcy5fc3RhdHVzID0gTnVtYmVyKHRoaXMuX3JlcXVlc3QucmVzcG9uc2VDb2RlKSBhcyBIdHRwU3RhdHVzQ29kZTtcclxuXHRcdFx0aWYgKHRoaXMuX3N0YXR1cykge1xyXG5cdFx0XHRcdHRoaXMucmVhZHlTdGF0ZSA9IFhNTEh0dHBSZXF1ZXN0UmVhZHlTdGF0ZS5PUEVORUQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IG5vdyA9IERhdGUubm93KCk7XHJcblx0XHRcdGlmICh0aGlzLl90aW1lb3V0X3VudGlsICYmIG5vdyA+IHRoaXMuX3RpbWVvdXRfdW50aWwpIHtcclxuXHRcdFx0XHR0aGlzLl9yZXF1ZXN0LkFib3J0KCk7XHJcblx0XHRcdFx0dGhpcy4kZGlzcGF0Y2hfZXZlbnQoJ3RpbWVvdXQnKTtcclxuXHRcdFx0XHR0aGlzLiRmaW5pc2hlZF9sb2FkKCk7XHJcblx0XHRcdFx0dGhpcy5fc3RhdHVzID0gSHR0cFN0YXR1c0NvZGUuUmVxdWVzdFRpbWVvdXQ7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLl9zdGF0dXMgPSBOdW1iZXIodGhpcy5fcmVxdWVzdC5yZXNwb25zZUNvZGUpIHx8IEh0dHBTdGF0dXNDb2RlLkNvbnRpbnVlO1xyXG5cdFx0XHRpZiAodGhpcy5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdFJlYWR5U3RhdGUuT1BFTkVEKSB7XHJcblx0XHRcdFx0dGhpcy5faW50ZXJuYWxfcmVzcG9uc19oZWFkZXJzID0gdGhpcy5fcmVxdWVzdC5HZXRSZXNwb25zZUhlYWRlcnMoKTtcclxuXHRcdFx0XHRpZiAodGhpcy5faW50ZXJuYWxfcmVzcG9uc19oZWFkZXJzICYmIHRoaXMuX2ludGVybmFsX3Jlc3BvbnNfaGVhZGVycy5Db3VudCkge1xyXG5cdFx0XHRcdFx0dGhpcy5yZWFkeVN0YXRlID0gWE1MSHR0cFJlcXVlc3RSZWFkeVN0YXRlLkhFQURFUlNfUkVDRUlWRUQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGhpcy5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdFJlYWR5U3RhdGUuSEVBREVSU19SRUNFSVZFRCAmJiB0aGlzLl9zdGF0dXMgPT0gSHR0cFN0YXR1c0NvZGUuT0spIHtcclxuXHRcdFx0XHR0aGlzLnJlYWR5U3RhdGUgPSBYTUxIdHRwUmVxdWVzdFJlYWR5U3RhdGUuTE9BRElORztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoaXMuX3JlcXVlc3QucmVzdWx0ID09IFVuaXR5RW5naW5lLk5ldHdvcmtpbmcuVW5pdHlXZWJSZXF1ZXN0LlJlc3VsdC5Db25uZWN0aW9uRXJyb3IgfHwgXHJcblx0XHRcdFx0dGhpcy5fcmVxdWVzdC5yZXN1bHQgPT0gVW5pdHlFbmdpbmUuTmV0d29ya2luZy5Vbml0eVdlYlJlcXVlc3QuUmVzdWx0LlByb3RvY29sRXJyb3IgfHwgdGhpcy5fcmVxdWVzdC5pc0RvbmUpIHtcclxuXHRcdFx0XHR0aGlzLiRmaW5pc2hlZF9sb2FkKCk7XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5faW50ZXJuYWxfcmVxdWVzdCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLl9wcm9ncmVzcyAhPT0gdGhpcy5faW50ZXJuYWxfcmVxdWVzdC5wcm9ncmVzcykge1xyXG5cdFx0XHRcdFx0dGhpcy5fcHJvZ3Jlc3MgPSB0aGlzLl9pbnRlcm5hbF9yZXF1ZXN0LnByb2dyZXNzO1xyXG5cdFx0XHRcdFx0dGhpcy4kZGlzcGF0Y2hfZXZlbnQoJ3Byb2dyZXNzJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlICRmaW5pc2hlZF9sb2FkKCkge1xyXG5cdFx0dGhpcy5yZWFkeVN0YXRlID0gWE1MSHR0cFJlcXVlc3RSZWFkeVN0YXRlLkRPTkU7XHJcblx0XHRpZiAodGhpcy5fcmVxdWVzdC5pc0RvbmUgXHJcblx0XHRcdHx8IHRoaXMuX3JlcXVlc3QucmVzdWx0ID09IFVuaXR5RW5naW5lLk5ldHdvcmtpbmcuVW5pdHlXZWJSZXF1ZXN0LlJlc3VsdC5Qcm90b2NvbEVycm9yKSB7XHJcblx0XHRcdHRoaXMuX2ludGVybmFsX3Jlc3BvbnNfaGVhZGVycyA9IHRoaXMuX3JlcXVlc3QuR2V0UmVzcG9uc2VIZWFkZXJzKCk7XHJcblx0XHRcdHRoaXMuJHByb2Nlc3NfcmVzcG9uc2UoKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLl9yZXF1ZXN0LnJlc3VsdCA9PSBVbml0eUVuZ2luZS5OZXR3b3JraW5nLlVuaXR5V2ViUmVxdWVzdC5SZXN1bHQuQ29ubmVjdGlvbkVycm9yIFxyXG5cdFx0XHR8fCB0aGlzLl9yZXF1ZXN0LnJlc3VsdCA9PSBVbml0eUVuZ2luZS5OZXR3b3JraW5nLlVuaXR5V2ViUmVxdWVzdC5SZXN1bHQuUHJvdG9jb2xFcnJvcikge1xyXG5cdFx0XHR0aGlzLiRkaXNwYXRjaF9ldmVudCgnZXJyb3InKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3Byb2dyZXNzID0gMTtcclxuXHRcdFx0dGhpcy4kZGlzcGF0Y2hfZXZlbnQoJ3Byb2dyZXNzJyk7XHJcblx0XHRcdHRoaXMuJGRpc3BhdGNoX2V2ZW50KCdsb2FkJylcclxuXHRcdH1cclxuXHRcdHRoaXMuJGRpc3BhdGNoX2V2ZW50KCdsb2FkZW5kJyk7XHJcblx0XHR0aGlzLiRzdG9wX3BvbGwoKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCAkcHJvY2Vzc19yZXNwb25zZSgpIHtcclxuXHRcdGlmICh0aGlzLnJlc3BvbnNlVHlwZSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGNvbnN0IG1pbWUgPSBuZXcgTUlNRVR5cGUodGhpcy5fb3ZlcnJpZGVkX21pbWUgfHwgdGhpcy5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSB8fCAndGV4dC9wbGFpbicpO1xyXG5cdFx0XHRpZiAobWltZS50eXBlID09PSAnYXBwbGljYXRpb24nICYmIG1pbWUuc3VidHlwZSA9PT0gJ2pzb24nKSB7XHJcblx0XHRcdFx0dGhpcy5yZXNwb25zZVR5cGUgPSAnanNvbic7XHJcblx0XHRcdH0gZWxzZSBpZiAobWltZS50eXBlID09PSAndGV4dCcpIHtcclxuXHRcdFx0XHR0aGlzLnJlc3BvbnNlVHlwZSA9ICd0ZXh0JztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHN3aXRjaCAodGhpcy5yZXNwb25zZVR5cGUpIHtcclxuXHRcdFx0Y2FzZSAnJzpcclxuXHRcdFx0Y2FzZSAnZG9jdW1lbnQnOlxyXG5cdFx0XHRjYXNlICd0ZXh0JzpcclxuXHRcdFx0XHR0aGlzLl9yZXNwb25zZSA9IHRoaXMucmVzcG9uc2VUZXh0O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdqc29uJzpcclxuXHRcdFx0XHRjb25zdCB0ZXh0ID0gdGhpcy5yZXNwb25zZVRleHQ7XHJcblx0XHRcdFx0aWYgKHRleHQpIHtcclxuXHRcdFx0XHRcdHRoaXMuX3Jlc3BvbnNlID0gSlNPTi5wYXJzZSh0ZXh0KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5fcmVzcG9uc2UgPSBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0aGlzLl9yZXNwb25zZSA9IHRoaXMuX3JlcXVlc3QuZG93bmxvYWRIYW5kbGVyID8gdGhpcy5fcmVxdWVzdC5kb3dubG9hZEhhbmRsZXIuZGF0YSA6IG51bGw7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZXhwb3J0czoge1xyXG5cdFx0WE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCxcclxuXHRcdFhNTEh0dHBSZXF1ZXN0UmVhZHlTdGF0ZSxcclxuXHRcdFhNTEh0dHBSZXF1ZXN0VXBsb2FkLFxyXG5cdFx0WE1MSHR0cFJlcXVlc3Q6IFVuaXR5WE1MSHR0cFJlcXVlc3QsXHJcblx0fVxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jc2hhcnBfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcHVlcnRzX187Il0sInNvdXJjZVJvb3QiOiIifQ==