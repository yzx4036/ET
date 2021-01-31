(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/reflect-metadata/Reflect.js":
/*!**************************************************!*\
  !*** ./node_modules/reflect-metadata/Reflect.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof global === "object" ? global :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));


/***/ }),

/***/ "./node_modules/typescript-collections/dist/lib/umd.js":
/*!*************************************************************!*\
  !*** ./node_modules/typescript-collections/dist/lib/umd.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;var require;(function(f) {
    if (true) {
        module.exports = f()
    } else { var g; }
})(function() {
        var define, module, exports;
require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BSTreeKV_1 = require("./BSTreeKV");
/**
 * Special-case of the binary search tree in which the search key is equal to the element type.
 * This definition is suitable when the element type can not be split between what defines its order
 * and what does not (eg. primitive types as opposed to indexed records).
 *
 * The table below shows some use-case examples for both interfaces:
 *
 *           element type              |  most suitable interface
 * ------------------------------------|----------------------------
 *    number                           |  BSTree<number>
 *    string                           |  BSTree<string>
 * { order: number, data: string }     |  BSTreeKV<{order: number}, {order: number, data: string}>
 *
 * @see BSTreeKV
 */
var BSTree = /** @class */ (function (_super) {
    __extends(BSTree, _super);
    function BSTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BSTree;
}(BSTreeKV_1.default));
exports.default = BSTree;

},{"./BSTreeKV":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var Queue_1 = require("./Queue");
/**
 * General binary search tree implementation.
 *
 * This interface allows one to search elements using a subset of their attributes (thus the
 * tree can be used as an index for complex objects).
 * The attributes required to define an ordering in the tree must be defined in the type K.
 * Any additional attribute must be defined in the type V.
 *
 * @see BSTree
 */
var BSTreeKV = /** @class */ (function () {
    /**
     * Creates an empty binary search tree.
     * @class <p>A binary search tree is a binary tree in which each
     * internal node stores an element such that the elements stored in the
     * left subtree are less than it and the elements
     * stored in the right subtree are greater.</p>
     * <p>Formally, a binary search tree is a node-based binary tree data structure which
     * has the following properties:</p>
     * <ul>
     * <li>The left subtree of a node contains only nodes with elements less
     * than the node's element</li>
     * <li>The right subtree of a node contains only nodes with elements greater
     * than the node's element</li>
     * <li>Both the left and right subtrees must also be binary search trees.</li>
     * </ul>
     * <p>If the inserted elements are custom objects a compare function must
     * be provided at construction time, otherwise the <=, === and >= operators are
     * used to compare elements. Example:</p>
     * <pre>
     * function compare(a, b) {
     *  if (a is less than b by some ordering criterion) {
     *     return -1;
     *  } if (a is greater than b by the ordering criterion) {
     *     return 1;
     *  }
     *  // a must be equal to b
     *  return 0;
     * }
     * </pre>
     * @constructor
     * @param {function(Object,Object):number=} compareFunction optional
     * function used to compare two elements. Must return a negative integer,
     * zero, or a positive integer as the first argument is less than, equal to,
     * or greater than the second.
     */
    function BSTreeKV(compareFunction) {
        this.root = null;
        this.compare = compareFunction || util.defaultCompare;
        this.nElements = 0;
    }
    /**
     * Adds the specified element to this tree if it is not already present.
     * @param {Object} element the element to insert.
     * @return {boolean} true if this tree did not already contain the specified element.
     */
    BSTreeKV.prototype.add = function (element) {
        if (util.isUndefined(element)) {
            return false;
        }
        if (this.insertNode(this.createNode(element)) !== null) {
            this.nElements++;
            return true;
        }
        return false;
    };
    /**
     * Removes all of the elements from this tree.
     */
    BSTreeKV.prototype.clear = function () {
        this.root = null;
        this.nElements = 0;
    };
    /**
     * Returns true if this tree contains no elements.
     * @return {boolean} true if this tree contains no elements.
     */
    BSTreeKV.prototype.isEmpty = function () {
        return this.nElements === 0;
    };
    /**
     * Returns the number of elements in this tree.
     * @return {number} the number of elements in this tree.
     */
    BSTreeKV.prototype.size = function () {
        return this.nElements;
    };
    /**
     * Returns true if this tree contains the specified element.
     * @param {Object} element element to search for.
     * @return {boolean} true if this tree contains the specified element,
     * false otherwise.
     */
    BSTreeKV.prototype.contains = function (element) {
        if (util.isUndefined(element)) {
            return false;
        }
        return this.searchNode(this.root, element) !== null;
    };
    /**
     * Looks for the value with the provided search key.
     * @param {Object} element The key to look for
     * @return {Object} The value found or undefined if it was not found.
     */
    BSTreeKV.prototype.search = function (element) {
        var ret = this.searchNode(this.root, element);
        if (ret === null) {
            return undefined;
        }
        return ret.element;
    };
    /**
     * Removes the specified element from this tree if it is present.
     * @return {boolean} true if this tree contained the specified element.
     */
    BSTreeKV.prototype.remove = function (element) {
        var node = this.searchNode(this.root, element);
        if (node === null) {
            return false;
        }
        this.removeNode(node);
        this.nElements--;
        return true;
    };
    /**
     * Executes the provided function once for each element present in this tree in
     * in-order.
     * @param {function(Object):*} callback function to execute, it is invoked with one
     * argument: the element value, to break the iteration you can optionally return false.
     */
    BSTreeKV.prototype.inorderTraversal = function (callback) {
        this.inorderTraversalAux(this.root, callback, {
            stop: false
        });
    };
    /**
     * Executes the provided function once for each element present in this tree in pre-order.
     * @param {function(Object):*} callback function to execute, it is invoked with one
     * argument: the element value, to break the iteration you can optionally return false.
     */
    BSTreeKV.prototype.preorderTraversal = function (callback) {
        this.preorderTraversalAux(this.root, callback, {
            stop: false
        });
    };
    /**
     * Executes the provided function once for each element present in this tree in post-order.
     * @param {function(Object):*} callback function to execute, it is invoked with one
     * argument: the element value, to break the iteration you can optionally return false.
     */
    BSTreeKV.prototype.postorderTraversal = function (callback) {
        this.postorderTraversalAux(this.root, callback, {
            stop: false
        });
    };
    /**
     * Executes the provided function once for each element present in this tree in
     * level-order.
     * @param {function(Object):*} callback function to execute, it is invoked with one
     * argument: the element value, to break the iteration you can optionally return false.
     */
    BSTreeKV.prototype.levelTraversal = function (callback) {
        this.levelTraversalAux(this.root, callback);
    };
    /**
     * Returns the minimum element of this tree.
     * @return {*} the minimum element of this tree or undefined if this tree is
     * is empty.
     */
    BSTreeKV.prototype.minimum = function () {
        if (this.isEmpty() || this.root === null) {
            return undefined;
        }
        return this.minimumAux(this.root).element;
    };
    /**
     * Returns the maximum element of this tree.
     * @return {*} the maximum element of this tree or undefined if this tree is
     * is empty.
     */
    BSTreeKV.prototype.maximum = function () {
        if (this.isEmpty() || this.root === null) {
            return undefined;
        }
        return this.maximumAux(this.root).element;
    };
    /**
     * Executes the provided function once for each element present in this tree in inorder.
     * Equivalent to inorderTraversal.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    BSTreeKV.prototype.forEach = function (callback) {
        this.inorderTraversal(callback);
    };
    /**
     * Returns an array containing all of the elements in this tree in in-order.
     * @return {Array} an array containing all of the elements in this tree in in-order.
     */
    BSTreeKV.prototype.toArray = function () {
        var array = [];
        this.inorderTraversal(function (element) {
            array.push(element);
            return true;
        });
        return array;
    };
    /**
     * Returns the height of this tree.
     * @return {number} the height of this tree or -1 if is empty.
     */
    BSTreeKV.prototype.height = function () {
        return this.heightAux(this.root);
    };
    /**
     * @private
     */
    BSTreeKV.prototype.searchNode = function (node, element) {
        var cmp = 1;
        while (node !== null && cmp !== 0) {
            cmp = this.compare(element, node.element);
            if (cmp < 0) {
                node = node.leftCh;
            }
            else if (cmp > 0) {
                node = node.rightCh;
            }
        }
        return node;
    };
    /**
     * @private
     */
    BSTreeKV.prototype.transplant = function (n1, n2) {
        if (n1.parent === null) {
            this.root = n2;
        }
        else if (n1 === n1.parent.leftCh) {
            n1.parent.leftCh = n2;
        }
        else {
            n1.parent.rightCh = n2;
        }
        if (n2 !== null) {
            n2.parent = n1.parent;
        }
    };
    /**
     * @private
     */
    BSTreeKV.prototype.removeNode = function (node) {
        if (node.leftCh === null) {
            this.transplant(node, node.rightCh);
        }
        else if (node.rightCh === null) {
            this.transplant(node, node.leftCh);
        }
        else {
            var y = this.minimumAux(node.rightCh);
            if (y.parent !== node) {
                this.transplant(y, y.rightCh);
                y.rightCh = node.rightCh;
                y.rightCh.parent = y;
            }
            this.transplant(node, y);
            y.leftCh = node.leftCh;
            y.leftCh.parent = y;
        }
    };
    /**
     * @private
     */
    BSTreeKV.prototype.inorderTraversalAux = function (node, callback, signal) {
        if (node === null || signal.stop) {
            return;
        }
        this.inorderTraversalAux(node.leftCh, callback, signal);
        if (signal.stop) {
            return;
        }
        signal.stop = callback(node.element) === false;
        if (signal.stop) {
            return;
        }
        this.inorderTraversalAux(node.rightCh, callback, signal);
    };
    /**
     * @private
     */
    BSTreeKV.prototype.levelTraversalAux = function (node, callback) {
        var queue = new Queue_1.default();
        if (node !== null) {
            queue.enqueue(node);
        }
        node = queue.dequeue() || null;
        while (node != null) {
            if (callback(node.element) === false) {
                return;
            }
            if (node.leftCh !== null) {
                queue.enqueue(node.leftCh);
            }
            if (node.rightCh !== null) {
                queue.enqueue(node.rightCh);
            }
            node = queue.dequeue() || null;
        }
    };
    /**
     * @private
     */
    BSTreeKV.prototype.preorderTraversalAux = function (node, callback, signal) {
        if (node === null || signal.stop) {
            return;
        }
        signal.stop = callback(node.element) === false;
        if (signal.stop) {
            return;
        }
        this.preorderTraversalAux(node.leftCh, callback, signal);
        if (signal.stop) {
            return;
        }
        this.preorderTraversalAux(node.rightCh, callback, signal);
    };
    /**
     * @private
     */
    BSTreeKV.prototype.postorderTraversalAux = function (node, callback, signal) {
        if (node === null || signal.stop) {
            return;
        }
        this.postorderTraversalAux(node.leftCh, callback, signal);
        if (signal.stop) {
            return;
        }
        this.postorderTraversalAux(node.rightCh, callback, signal);
        if (signal.stop) {
            return;
        }
        signal.stop = callback(node.element) === false;
    };
    BSTreeKV.prototype.minimumAux = function (node) {
        while (node != null && node.leftCh !== null) {
            node = node.leftCh;
        }
        return node;
    };
    BSTreeKV.prototype.maximumAux = function (node) {
        while (node != null && node.rightCh !== null) {
            node = node.rightCh;
        }
        return node;
    };
    /**
     * @private
     */
    BSTreeKV.prototype.heightAux = function (node) {
        if (node === null) {
            return -1;
        }
        return Math.max(this.heightAux(node.leftCh), this.heightAux(node.rightCh)) + 1;
    };
    /*
    * @private
    */
    BSTreeKV.prototype.insertNode = function (node) {
        var parent = null;
        var position = this.root;
        while (position !== null) {
            var cmp = this.compare(node.element, position.element);
            if (cmp === 0) {
                return null;
            }
            else if (cmp < 0) {
                parent = position;
                position = position.leftCh;
            }
            else {
                parent = position;
                position = position.rightCh;
            }
        }
        node.parent = parent;
        if (parent === null) {
            // tree is empty
            this.root = node;
        }
        else if (this.compare(node.element, parent.element) < 0) {
            parent.leftCh = node;
        }
        else {
            parent.rightCh = node;
        }
        return node;
    };
    /**
     * @private
     */
    BSTreeKV.prototype.createNode = function (element) {
        return {
            element: element,
            leftCh: null,
            rightCh: null,
            parent: null
        };
    };
    return BSTreeKV;
}());
exports.default = BSTreeKV;

},{"./Queue":12,"./util":16}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var Dictionary_1 = require("./Dictionary");
var Set_1 = require("./Set");
var Bag = /** @class */ (function () {
    /**
     * Creates an empty bag.
     * @class <p>A bag is a special kind of set in which members are
     * allowed to appear more than once.</p>
     * <p>If the inserted elements are custom objects a function
     * which converts elements to unique strings must be provided. Example:</p>
     *
     * <pre>
     * function petToString(pet) {
     *  return pet.name;
     * }
     * </pre>
     *
     * @constructor
     * @param {function(Object):string=} toStrFunction optional function used
     * to convert elements to strings. If the elements aren't strings or if toString()
     * is not appropriate, a custom function which receives an object and returns a
     * unique string must be provided.
     */
    function Bag(toStrFunction) {
        this.toStrF = toStrFunction || util.defaultToString;
        this.dictionary = new Dictionary_1.default(this.toStrF);
        this.nElements = 0;
    }
    /**
     * Adds nCopies of the specified object to this bag.
     * @param {Object} element element to add.
     * @param {number=} nCopies the number of copies to add, if this argument is
     * undefined 1 copy is added.
     * @return {boolean} true unless element is undefined.
     */
    Bag.prototype.add = function (element, nCopies) {
        if (nCopies === void 0) { nCopies = 1; }
        if (util.isUndefined(element) || nCopies <= 0) {
            return false;
        }
        if (!this.contains(element)) {
            var node = {
                value: element,
                copies: nCopies
            };
            this.dictionary.setValue(element, node);
        }
        else {
            this.dictionary.getValue(element).copies += nCopies;
        }
        this.nElements += nCopies;
        return true;
    };
    /**
     * Counts the number of copies of the specified object in this bag.
     * @param {Object} element the object to search for..
     * @return {number} the number of copies of the object, 0 if not found
     */
    Bag.prototype.count = function (element) {
        if (!this.contains(element)) {
            return 0;
        }
        else {
            return this.dictionary.getValue(element).copies;
        }
    };
    /**
     * Returns true if this bag contains the specified element.
     * @param {Object} element element to search for.
     * @return {boolean} true if this bag contains the specified element,
     * false otherwise.
     */
    Bag.prototype.contains = function (element) {
        return this.dictionary.containsKey(element);
    };
    /**
     * Removes nCopies of the specified object to this bag.
     * If the number of copies to remove is greater than the actual number
     * of copies in the Bag, all copies are removed.
     * @param {Object} element element to remove.
     * @param {number=} nCopies the number of copies to remove, if this argument is
     * undefined 1 copy is removed.
     * @return {boolean} true if at least 1 element was removed.
     */
    Bag.prototype.remove = function (element, nCopies) {
        if (nCopies === void 0) { nCopies = 1; }
        if (util.isUndefined(element) || nCopies <= 0) {
            return false;
        }
        if (!this.contains(element)) {
            return false;
        }
        else {
            var node = this.dictionary.getValue(element);
            if (nCopies > node.copies) {
                this.nElements -= node.copies;
            }
            else {
                this.nElements -= nCopies;
            }
            node.copies -= nCopies;
            if (node.copies <= 0) {
                this.dictionary.remove(element);
            }
            return true;
        }
    };
    /**
     * Returns an array containing all of the elements in this big in arbitrary order,
     * including multiple copies.
     * @return {Array} an array containing all of the elements in this bag.
     */
    Bag.prototype.toArray = function () {
        var a = [];
        var values = this.dictionary.values();
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var node = values_1[_i];
            var element = node.value;
            var copies = node.copies;
            for (var j = 0; j < copies; j++) {
                a.push(element);
            }
        }
        return a;
    };
    /**
     * Returns a set of unique elements in this bag.
     * @return {collections.Set<T>} a set of unique elements in this bag.
     */
    Bag.prototype.toSet = function () {
        var toret = new Set_1.default(this.toStrF);
        var elements = this.dictionary.values();
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var ele = elements_1[_i];
            var value = ele.value;
            toret.add(value);
        }
        return toret;
    };
    /**
     * Executes the provided function once for each element
     * present in this bag, including multiple copies.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element. To break the iteration you can
     * optionally return false.
     */
    Bag.prototype.forEach = function (callback) {
        this.dictionary.forEach(function (k, v) {
            var value = v.value;
            var copies = v.copies;
            for (var i = 0; i < copies; i++) {
                if (callback(value) === false) {
                    return false;
                }
            }
            return true;
        });
    };
    /**
     * Returns the number of elements in this bag.
     * @return {number} the number of elements in this bag.
     */
    Bag.prototype.size = function () {
        return this.nElements;
    };
    /**
     * Returns true if this bag contains no elements.
     * @return {boolean} true if this bag contains no elements.
     */
    Bag.prototype.isEmpty = function () {
        return this.nElements === 0;
    };
    /**
     * Removes all of the elements from this bag.
     */
    Bag.prototype.clear = function () {
        this.nElements = 0;
        this.dictionary.clear();
    };
    return Bag;
}()); // End of bag
exports.default = Bag;

},{"./Dictionary":4,"./Set":13,"./util":16}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var Dictionary = /** @class */ (function () {
    /**
     * Creates an empty dictionary.
     * @class <p>Dictionaries map keys to values; each key can map to at most one value.
     * This implementation accepts any kind of objects as keys.</p>
     *
     * <p>If the keys are custom objects a function which converts keys to unique
     * strings must be provided. Example:</p>
     * <pre>
     * function petToString(pet) {
     *  return pet.name;
     * }
     * </pre>
     * @constructor
     * @param {function(Object):string=} toStrFunction optional function used
     * to convert keys to strings. If the keys aren't strings or if toString()
     * is not appropriate, a custom function which receives a key and returns a
     * unique string must be provided.
     */
    function Dictionary(toStrFunction) {
        this.table = {};
        this.nElements = 0;
        this.toStr = toStrFunction || util.defaultToString;
    }
    /**
     * Returns the value to which this dictionary maps the specified key.
     * Returns undefined if this dictionary contains no mapping for this key.
     * @param {Object} key key whose associated value is to be returned.
     * @return {*} the value to which this dictionary maps the specified key or
     * undefined if the map contains no mapping for this key.
     */
    Dictionary.prototype.getValue = function (key) {
        var pair = this.table['$' + this.toStr(key)];
        if (util.isUndefined(pair)) {
            return undefined;
        }
        return pair.value;
    };
    /**
     * Associates the specified value with the specified key in this dictionary.
     * If the dictionary previously contained a mapping for this key, the old
     * value is replaced by the specified value.
     * @param {Object} key key with which the specified value is to be
     * associated.
     * @param {Object} value value to be associated with the specified key.
     * @return {*} previous value associated with the specified key, or undefined if
     * there was no mapping for the key or if the key/value are undefined.
     */
    Dictionary.prototype.setValue = function (key, value) {
        if (util.isUndefined(key) || util.isUndefined(value)) {
            return undefined;
        }
        var ret;
        var k = '$' + this.toStr(key);
        var previousElement = this.table[k];
        if (util.isUndefined(previousElement)) {
            this.nElements++;
            ret = undefined;
        }
        else {
            ret = previousElement.value;
        }
        this.table[k] = {
            key: key,
            value: value
        };
        return ret;
    };
    /**
     * Removes the mapping for this key from this dictionary if it is present.
     * @param {Object} key key whose mapping is to be removed from the
     * dictionary.
     * @return {*} previous value associated with specified key, or undefined if
     * there was no mapping for key.
     */
    Dictionary.prototype.remove = function (key) {
        var k = '$' + this.toStr(key);
        var previousElement = this.table[k];
        if (!util.isUndefined(previousElement)) {
            delete this.table[k];
            this.nElements--;
            return previousElement.value;
        }
        return undefined;
    };
    /**
     * Returns an array containing all of the keys in this dictionary.
     * @return {Array} an array containing all of the keys in this dictionary.
     */
    Dictionary.prototype.keys = function () {
        var array = [];
        for (var name_1 in this.table) {
            if (util.has(this.table, name_1)) {
                var pair = this.table[name_1];
                array.push(pair.key);
            }
        }
        return array;
    };
    /**
     * Returns an array containing all of the values in this dictionary.
     * @return {Array} an array containing all of the values in this dictionary.
     */
    Dictionary.prototype.values = function () {
        var array = [];
        for (var name_2 in this.table) {
            if (util.has(this.table, name_2)) {
                var pair = this.table[name_2];
                array.push(pair.value);
            }
        }
        return array;
    };
    /**
     * Executes the provided function once for each key-value pair
     * present in this dictionary.
     * @param {function(Object,Object):*} callback function to execute, it is
     * invoked with two arguments: key and value. To break the iteration you can
     * optionally return false.
     */
    Dictionary.prototype.forEach = function (callback) {
        for (var name_3 in this.table) {
            if (util.has(this.table, name_3)) {
                var pair = this.table[name_3];
                var ret = callback(pair.key, pair.value);
                if (ret === false) {
                    return;
                }
            }
        }
    };
    /**
     * Returns true if this dictionary contains a mapping for the specified key.
     * @param {Object} key key whose presence in this dictionary is to be
     * tested.
     * @return {boolean} true if this dictionary contains a mapping for the
     * specified key.
     */
    Dictionary.prototype.containsKey = function (key) {
        return !util.isUndefined(this.getValue(key));
    };
    /**
     * Removes all mappings from this dictionary.
     * @this {collections.Dictionary}
     */
    Dictionary.prototype.clear = function () {
        this.table = {};
        this.nElements = 0;
    };
    /**
     * Returns the number of keys in this dictionary.
     * @return {number} the number of key-value mappings in this dictionary.
     */
    Dictionary.prototype.size = function () {
        return this.nElements;
    };
    /**
     * Returns true if this dictionary contains no mappings.
     * @return {boolean} true if this dictionary contains no mappings.
     */
    Dictionary.prototype.isEmpty = function () {
        return this.nElements <= 0;
    };
    Dictionary.prototype.toString = function () {
        var toret = '{';
        this.forEach(function (k, v) {
            toret += "\n\t" + k + " : " + v;
        });
        return toret + '\n}';
    };
    return Dictionary;
}()); // End of dictionary
exports.default = Dictionary;

},{"./util":16}],5:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Dictionary_1 = require("./Dictionary");
var util = require("./util");
var FactoryDictionary = /** @class */ (function (_super) {
    __extends(FactoryDictionary, _super);
    /**
     * Creates an empty dictionary.
     * @class <p>Dictionaries map keys to values; each key can map to at most one value.
     * This implementation accepts any kind of objects as keys.</p>
     *
     * <p>The default factory function should return a new object of the provided
     * type. Example:</p>
     * <pre>
     * function petFactory() {
     *  return new Pet();
     * }
     * </pre>
     *
     * <p>If the keys are custom objects a function which converts keys to unique
     * strings must be provided. Example:</p>
     * <pre>
     * function petToString(pet) {
     *  return pet.name;
     * }
     * </pre>
     * @constructor
     * @param {function():V=} defaultFactoryFunction function used to create a
     * default object.
     * @param {function(Object):string=} toStrFunction optional function used
     * to convert keys to strings. If the keys aren't strings or if toString()
     * is not appropriate, a custom function which receives a key and returns a
     * unique string must be provided.
     */
    function FactoryDictionary(defaultFactoryFunction, toStrFunction) {
        var _this = _super.call(this, toStrFunction) || this;
        _this.defaultFactoryFunction = defaultFactoryFunction;
        return _this;
    }
    /**
     * Associates the specified default value with the specified key in this dictionary,
     * if it didn't contain the key yet. If the key existed, the existing value will be used.
     * @param {Object} key key with which the specified value is to be
     * associated.
     * @param {Object} defaultValue default value to be associated with the specified key.
     * @return {*} previous value associated with the specified key, or the default value,
     * if the key didn't exist yet.
     */
    FactoryDictionary.prototype.setDefault = function (key, defaultValue) {
        var currentValue = _super.prototype.getValue.call(this, key);
        if (util.isUndefined(currentValue)) {
            this.setValue(key, defaultValue);
            return defaultValue;
        }
        return currentValue;
    };
    /**
     * Returns the value to which this dictionary maps the specified key.
     * Returns a default value created by the factory passed in the constructor,
     * if this dictionary contains no mapping for this key. The missing key will
     * automatically be added to the dictionary.
     * @param {Object} key key whose associated value is to be returned.
     * @return {*} the value to which this dictionary maps the specified key or
     * a default value if the map contains no mapping for this key.
     */
    FactoryDictionary.prototype.getValue = function (key) {
        return this.setDefault(key, this.defaultFactoryFunction());
    };
    return FactoryDictionary;
}(Dictionary_1.default));
exports.default = FactoryDictionary;

},{"./Dictionary":4,"./util":16}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var collections = require("./util");
var arrays = require("./arrays");
var Heap = /** @class */ (function () {
    /**
     * Creates an empty Heap.
     * @class
     * <p>A heap is a binary tree, where the nodes maintain the heap property:
     * each node is smaller than each of its children and therefore a MinHeap
     * This implementation uses an array to store elements.</p>
     * <p>If the inserted elements are custom objects a compare function must be provided,
     *  at construction time, otherwise the <=, === and >= operators are
     * used to compare elements. Example:</p>
     *
     * <pre>
     * function compare(a, b) {
     *  if (a is less than b by some ordering criterion) {
     *     return -1;
     *  } if (a is greater than b by the ordering criterion) {
     *     return 1;
     *  }
     *  // a must be equal to b
     *  return 0;
     * }
     * </pre>
     *
     * <p>If a Max-Heap is wanted (greater elements on top) you can a provide a
     * reverse compare function to accomplish that behavior. Example:</p>
     *
     * <pre>
     * function reverseCompare(a, b) {
     *  if (a is less than b by some ordering criterion) {
     *     return 1;
     *  } if (a is greater than b by the ordering criterion) {
     *     return -1;
     *  }
     *  // a must be equal to b
     *  return 0;
     * }
     * </pre>
     *
     * @constructor
     * @param {function(Object,Object):number=} compareFunction optional
     * function used to compare two elements. Must return a negative integer,
     * zero, or a positive integer as the first argument is less than, equal to,
     * or greater than the second.
     */
    function Heap(compareFunction) {
        /**
         * Array used to store the elements of the heap.
         * @type {Array.<Object>}
         * @private
         */
        this.data = [];
        this.compare = compareFunction || collections.defaultCompare;
    }
    /**
     * Returns the index of the left child of the node at the given index.
     * @param {number} nodeIndex The index of the node to get the left child
     * for.
     * @return {number} The index of the left child.
     * @private
     */
    Heap.prototype.leftChildIndex = function (nodeIndex) {
        return (2 * nodeIndex) + 1;
    };
    /**
     * Returns the index of the right child of the node at the given index.
     * @param {number} nodeIndex The index of the node to get the right child
     * for.
     * @return {number} The index of the right child.
     * @private
     */
    Heap.prototype.rightChildIndex = function (nodeIndex) {
        return (2 * nodeIndex) + 2;
    };
    /**
     * Returns the index of the parent of the node at the given index.
     * @param {number} nodeIndex The index of the node to get the parent for.
     * @return {number} The index of the parent.
     * @private
     */
    Heap.prototype.parentIndex = function (nodeIndex) {
        return Math.floor((nodeIndex - 1) / 2);
    };
    /**
     * Returns the index of the smaller child node (if it exists).
     * @param {number} leftChild left child index.
     * @param {number} rightChild right child index.
     * @return {number} the index with the minimum value or -1 if it doesn't
     * exists.
     * @private
     */
    Heap.prototype.minIndex = function (leftChild, rightChild) {
        if (rightChild >= this.data.length) {
            if (leftChild >= this.data.length) {
                return -1;
            }
            else {
                return leftChild;
            }
        }
        else {
            if (this.compare(this.data[leftChild], this.data[rightChild]) <= 0) {
                return leftChild;
            }
            else {
                return rightChild;
            }
        }
    };
    /**
     * Moves the node at the given index up to its proper place in the heap.
     * @param {number} index The index of the node to move up.
     * @private
     */
    Heap.prototype.siftUp = function (index) {
        var parent = this.parentIndex(index);
        while (index > 0 && this.compare(this.data[parent], this.data[index]) > 0) {
            arrays.swap(this.data, parent, index);
            index = parent;
            parent = this.parentIndex(index);
        }
    };
    /**
     * Moves the node at the given index down to its proper place in the heap.
     * @param {number} nodeIndex The index of the node to move down.
     * @private
     */
    Heap.prototype.siftDown = function (nodeIndex) {
        //smaller child index
        var min = this.minIndex(this.leftChildIndex(nodeIndex), this.rightChildIndex(nodeIndex));
        while (min >= 0 && this.compare(this.data[nodeIndex], this.data[min]) > 0) {
            arrays.swap(this.data, min, nodeIndex);
            nodeIndex = min;
            min = this.minIndex(this.leftChildIndex(nodeIndex), this.rightChildIndex(nodeIndex));
        }
    };
    /**
     * Retrieves but does not remove the root element of this heap.
     * @return {*} The value at the root of the heap. Returns undefined if the
     * heap is empty.
     */
    Heap.prototype.peek = function () {
        if (this.data.length > 0) {
            return this.data[0];
        }
        else {
            return undefined;
        }
    };
    /**
     * Adds the given element into the heap.
     * @param {*} element the element.
     * @return true if the element was added or fals if it is undefined.
     */
    Heap.prototype.add = function (element) {
        if (collections.isUndefined(element)) {
            return false;
        }
        this.data.push(element);
        this.siftUp(this.data.length - 1);
        return true;
    };
    /**
     * Retrieves and removes the root element of this heap.
     * @return {*} The value removed from the root of the heap. Returns
     * undefined if the heap is empty.
     */
    Heap.prototype.removeRoot = function () {
        if (this.data.length > 0) {
            var obj = this.data[0];
            this.data[0] = this.data[this.data.length - 1];
            this.data.splice(this.data.length - 1, 1);
            if (this.data.length > 0) {
                this.siftDown(0);
            }
            return obj;
        }
        return undefined;
    };
    /**
     * Returns true if this heap contains the specified element.
     * @param {Object} element element to search for.
     * @return {boolean} true if this Heap contains the specified element, false
     * otherwise.
     */
    Heap.prototype.contains = function (element) {
        var equF = collections.compareToEquals(this.compare);
        return arrays.contains(this.data, element, equF);
    };
    /**
     * Returns the number of elements in this heap.
     * @return {number} the number of elements in this heap.
     */
    Heap.prototype.size = function () {
        return this.data.length;
    };
    /**
     * Checks if this heap is empty.
     * @return {boolean} true if and only if this heap contains no items; false
     * otherwise.
     */
    Heap.prototype.isEmpty = function () {
        return this.data.length <= 0;
    };
    /**
     * Removes all of the elements from this heap.
     */
    Heap.prototype.clear = function () {
        this.data.length = 0;
    };
    /**
     * Executes the provided function once for each element present in this heap in
     * no particular order.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    Heap.prototype.forEach = function (callback) {
        arrays.forEach(this.data, callback);
    };
    return Heap;
}());
exports.default = Heap;

},{"./arrays":15,"./util":16}],7:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Dictionary_1 = require("./Dictionary");
var util = require("./util");
/**
 * This class is used by the LinkedDictionary Internally
 * Has to be a class, not an interface, because it needs to have
 * the 'unlink' function defined.
 */
var LinkedDictionaryPair = /** @class */ (function () {
    function LinkedDictionaryPair(key, value) {
        this.key = key;
        this.value = value;
    }
    LinkedDictionaryPair.prototype.unlink = function () {
        this.prev.next = this.next;
        this.next.prev = this.prev;
    };
    return LinkedDictionaryPair;
}());
/**
 * The head and tail elements of the list have null key and value properties but they
 * usually link to normal nodes.
 */
var HeadOrTailLinkedDictionaryPair = /** @class */ (function () {
    function HeadOrTailLinkedDictionaryPair() {
        this.key = null;
        this.value = null;
    }
    HeadOrTailLinkedDictionaryPair.prototype.unlink = function () {
        this.prev.next = this.next;
        this.next.prev = this.prev;
    };
    return HeadOrTailLinkedDictionaryPair;
}());
function isHeadOrTailLinkedDictionaryPair(p) {
    return !p.next;
}
var LinkedDictionary = /** @class */ (function (_super) {
    __extends(LinkedDictionary, _super);
    function LinkedDictionary(toStrFunction) {
        var _this = _super.call(this, toStrFunction) || this;
        _this.head = new HeadOrTailLinkedDictionaryPair();
        _this.tail = new HeadOrTailLinkedDictionaryPair();
        _this.head.next = _this.tail;
        _this.tail.prev = _this.head;
        return _this;
    }
    /**
     * Inserts the new node to the 'tail' of the list, updating the
     * neighbors, and moving 'this.tail' (the End of List indicator) that
     * to the end.
     */
    LinkedDictionary.prototype.appendToTail = function (entry) {
        var lastNode = this.tail.prev;
        lastNode.next = entry;
        entry.prev = lastNode;
        entry.next = this.tail;
        this.tail.prev = entry;
    };
    /**
     * Retrieves a linked dictionary from the table internally
     */
    LinkedDictionary.prototype.getLinkedDictionaryPair = function (key) {
        if (util.isUndefined(key)) {
            return undefined;
        }
        var k = '$' + this.toStr(key);
        var pair = (this.table[k]);
        return pair;
    };
    /**
     * Returns the value to which this dictionary maps the specified key.
     * Returns undefined if this dictionary contains no mapping for this key.
     * @param {Object} key key whose associated value is to be returned.
     * @return {*} the value to which this dictionary maps the specified key or
     * undefined if the map contains no mapping for this key.
     */
    LinkedDictionary.prototype.getValue = function (key) {
        var pair = this.getLinkedDictionaryPair(key);
        if (!util.isUndefined(pair)) {
            return pair.value;
        }
        return undefined;
    };
    /**
     * Removes the mapping for this key from this dictionary if it is present.
     * Also, if a value is present for this key, the entry is removed from the
     * insertion ordering.
     * @param {Object} key key whose mapping is to be removed from the
     * dictionary.
     * @return {*} previous value associated with specified key, or undefined if
     * there was no mapping for key.
     */
    LinkedDictionary.prototype.remove = function (key) {
        var pair = this.getLinkedDictionaryPair(key);
        if (!util.isUndefined(pair)) {
            _super.prototype.remove.call(this, key); // This will remove it from the table
            pair.unlink(); // This will unlink it from the chain
            return pair.value;
        }
        return undefined;
    };
    /**
     * Removes all mappings from this LinkedDictionary.
     * @this {collections.LinkedDictionary}
     */
    LinkedDictionary.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    };
    /**
     * Internal function used when updating an existing KeyValue pair.
     * It places the new value indexed by key into the table, but maintains
     * its place in the linked ordering.
     */
    LinkedDictionary.prototype.replace = function (oldPair, newPair) {
        var k = '$' + this.toStr(newPair.key);
        // set the new Pair's links to existingPair's links
        newPair.next = oldPair.next;
        newPair.prev = oldPair.prev;
        // Delete Existing Pair from the table, unlink it from chain.
        // As a result, the nElements gets decremented by this operation
        this.remove(oldPair.key);
        // Link new Pair in place of where oldPair was,
        // by pointing the old pair's neighbors to it.
        newPair.prev.next = newPair;
        newPair.next.prev = newPair;
        this.table[k] = newPair;
        // To make up for the fact that the number of elements was decremented,
        // We need to increase it by one.
        ++this.nElements;
    };
    /**
     * Associates the specified value with the specified key in this dictionary.
     * If the dictionary previously contained a mapping for this key, the old
     * value is replaced by the specified value.
     * Updating of a key that already exists maintains its place in the
     * insertion order into the map.
     * @param {Object} key key with which the specified value is to be
     * associated.
     * @param {Object} value value to be associated with the specified key.
     * @return {*} previous value associated with the specified key, or undefined if
     * there was no mapping for the key or if the key/value are undefined.
     */
    LinkedDictionary.prototype.setValue = function (key, value) {
        if (util.isUndefined(key) || util.isUndefined(value)) {
            return undefined;
        }
        var existingPair = this.getLinkedDictionaryPair(key);
        var newPair = new LinkedDictionaryPair(key, value);
        var k = '$' + this.toStr(key);
        // If there is already an element for that key, we
        // keep it's place in the LinkedList
        if (!util.isUndefined(existingPair)) {
            this.replace(existingPair, newPair);
            return existingPair.value;
        }
        else {
            this.appendToTail(newPair);
            this.table[k] = newPair;
            ++this.nElements;
            return undefined;
        }
    };
    /**
     * Returns an array containing all of the keys in this LinkedDictionary, ordered
     * by insertion order.
     * @return {Array} an array containing all of the keys in this LinkedDictionary,
     * ordered by insertion order.
     */
    LinkedDictionary.prototype.keys = function () {
        var array = [];
        this.forEach(function (key, value) {
            array.push(key);
        });
        return array;
    };
    /**
     * Returns an array containing all of the values in this LinkedDictionary, ordered by
     * insertion order.
     * @return {Array} an array containing all of the values in this LinkedDictionary,
     * ordered by insertion order.
     */
    LinkedDictionary.prototype.values = function () {
        var array = [];
        this.forEach(function (key, value) {
            array.push(value);
        });
        return array;
    };
    /**
     * Executes the provided function once for each key-value pair
     * present in this LinkedDictionary. It is done in the order of insertion
     * into the LinkedDictionary
     * @param {function(Object,Object):*} callback function to execute, it is
     * invoked with two arguments: key and value. To break the iteration you can
     * optionally return false.
     */
    LinkedDictionary.prototype.forEach = function (callback) {
        var crawlNode = this.head.next;
        while (!isHeadOrTailLinkedDictionaryPair(crawlNode)) {
            var ret = callback(crawlNode.key, crawlNode.value);
            if (ret === false) {
                return;
            }
            crawlNode = crawlNode.next;
        }
    };
    return LinkedDictionary;
}(Dictionary_1.default)); // End of LinkedDictionary
exports.default = LinkedDictionary;
// /**
//  * Returns true if this dictionary is equal to the given dictionary.
//  * Two dictionaries are equal if they contain the same mappings.
//  * @param {collections.Dictionary} other the other dictionary.
//  * @param {function(Object,Object):boolean=} valuesEqualFunction optional
//  * function used to check if two values are equal.
//  * @return {boolean} true if this dictionary is equal to the given dictionary.
//  */
// collections.Dictionary.prototype.equals = function(other,valuesEqualFunction) {
// 	const eqF = valuesEqualFunction || collections.defaultEquals;
// 	if(!(other instanceof collections.Dictionary)){
// 		return false;
// 	}
// 	if(this.size() !== other.size()){
// 		return false;
// 	}
// 	return this.equalsAux(this.firstNode,other.firstNode,eqF);
// }

},{"./Dictionary":4,"./util":16}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var arrays = require("./arrays");
var LinkedList = /** @class */ (function () {
    /**
     * Creates an empty Linked List.
     * @class A linked list is a data structure consisting of a group of nodes
     * which together represent a sequence.
     * @constructor
     */
    function LinkedList() {
        /**
         * First node in the list
         * @type {Object}
         * @private
         */
        this.firstNode = null;
        /**
         * Last node in the list
         * @type {Object}
         * @private
         */
        this.lastNode = null;
        /**
         * Number of elements in the list
         * @type {number}
         * @private
         */
        this.nElements = 0;
    }
    /**
     * Adds an element to this list.
     * @param {Object} item element to be added.
     * @param {number=} index optional index to add the element. If no index is specified
     * the element is added to the end of this list.
     * @return {boolean} true if the element was added or false if the index is invalid
     * or if the element is undefined.
     */
    LinkedList.prototype.add = function (item, index) {
        if (util.isUndefined(index)) {
            index = this.nElements;
        }
        if (index < 0 || index > this.nElements || util.isUndefined(item)) {
            return false;
        }
        var newNode = this.createNode(item);
        if (this.nElements === 0 || this.lastNode === null) {
            // First node in the list.
            this.firstNode = newNode;
            this.lastNode = newNode;
        }
        else if (index === this.nElements) {
            // Insert at the end.
            this.lastNode.next = newNode;
            this.lastNode = newNode;
        }
        else if (index === 0) {
            // Change first node.
            newNode.next = this.firstNode;
            this.firstNode = newNode;
        }
        else {
            var prev = this.nodeAtIndex(index - 1);
            if (prev === null) {
                return false;
            }
            newNode.next = prev.next;
            prev.next = newNode;
        }
        this.nElements++;
        return true;
    };
    /**
     * Returns the first element in this list.
     * @return {*} the first element of the list or undefined if the list is
     * empty.
     */
    LinkedList.prototype.first = function () {
        if (this.firstNode !== null) {
            return this.firstNode.element;
        }
        return undefined;
    };
    /**
     * Returns the last element in this list.
     * @return {*} the last element in the list or undefined if the list is
     * empty.
     */
    LinkedList.prototype.last = function () {
        if (this.lastNode !== null) {
            return this.lastNode.element;
        }
        return undefined;
    };
    /**
     * Returns the element at the specified position in this list.
     * @param {number} index desired index.
     * @return {*} the element at the given index or undefined if the index is
     * out of bounds.
     */
    LinkedList.prototype.elementAtIndex = function (index) {
        var node = this.nodeAtIndex(index);
        if (node === null) {
            return undefined;
        }
        return node.element;
    };
    /**
     * Returns the index in this list of the first occurrence of the
     * specified element, or -1 if the List does not contain this element.
     * <p>If the elements inside this list are
     * not comparable with the === operator a custom equals function should be
     * provided to perform searches, the function must receive two arguments and
     * return true if they are equal, false otherwise. Example:</p>
     *
     * <pre>
     * const petsAreEqualByName = function(pet1, pet2) {
     *  return pet1.name === pet2.name;
     * }
     * </pre>
     * @param {Object} item element to search for.
     * @param {function(Object,Object):boolean=} equalsFunction Optional
     * function used to check if two elements are equal.
     * @return {number} the index in this list of the first occurrence
     * of the specified element, or -1 if this list does not contain the
     * element.
     */
    LinkedList.prototype.indexOf = function (item, equalsFunction) {
        var equalsF = equalsFunction || util.defaultEquals;
        if (util.isUndefined(item)) {
            return -1;
        }
        var currentNode = this.firstNode;
        var index = 0;
        while (currentNode !== null) {
            if (equalsF(currentNode.element, item)) {
                return index;
            }
            index++;
            currentNode = currentNode.next;
        }
        return -1;
    };
    /**
     * Returns true if this list contains the specified element.
     * <p>If the elements inside the list are
     * not comparable with the === operator a custom equals function should be
     * provided to perform searches, the function must receive two arguments and
     * return true if they are equal, false otherwise. Example:</p>
     *
     * <pre>
     * const petsAreEqualByName = function(pet1, pet2) {
     *  return pet1.name === pet2.name;
     * }
     * </pre>
     * @param {Object} item element to search for.
     * @param {function(Object,Object):boolean=} equalsFunction Optional
     * function used to check if two elements are equal.
     * @return {boolean} true if this list contains the specified element, false
     * otherwise.
     */
    LinkedList.prototype.contains = function (item, equalsFunction) {
        return (this.indexOf(item, equalsFunction) >= 0);
    };
    /**
     * Removes the first occurrence of the specified element in this list.
     * <p>If the elements inside the list are
     * not comparable with the === operator a custom equals function should be
     * provided to perform searches, the function must receive two arguments and
     * return true if they are equal, false otherwise. Example:</p>
     *
     * <pre>
     * const petsAreEqualByName = function(pet1, pet2) {
     *  return pet1.name === pet2.name;
     * }
     * </pre>
     * @param {Object} item element to be removed from this list, if present.
     * @return {boolean} true if the list contained the specified element.
     */
    LinkedList.prototype.remove = function (item, equalsFunction) {
        var equalsF = equalsFunction || util.defaultEquals;
        if (this.nElements < 1 || util.isUndefined(item)) {
            return false;
        }
        var previous = null;
        var currentNode = this.firstNode;
        while (currentNode !== null) {
            if (equalsF(currentNode.element, item)) {
                if (previous === null) {
                    this.firstNode = currentNode.next;
                    if (currentNode === this.lastNode) {
                        this.lastNode = null;
                    }
                }
                else if (currentNode === this.lastNode) {
                    this.lastNode = previous;
                    previous.next = currentNode.next;
                    currentNode.next = null;
                }
                else {
                    previous.next = currentNode.next;
                    currentNode.next = null;
                }
                this.nElements--;
                return true;
            }
            previous = currentNode;
            currentNode = currentNode.next;
        }
        return false;
    };
    /**
     * Removes all of the elements from this list.
     */
    LinkedList.prototype.clear = function () {
        this.firstNode = null;
        this.lastNode = null;
        this.nElements = 0;
    };
    /**
     * Returns true if this list is equal to the given list.
     * Two lists are equal if they have the same elements in the same order.
     * @param {LinkedList} other the other list.
     * @param {function(Object,Object):boolean=} equalsFunction optional
     * function used to check if two elements are equal. If the elements in the lists
     * are custom objects you should provide a function, otherwise
     * the === operator is used to check equality between elements.
     * @return {boolean} true if this list is equal to the given list.
     */
    LinkedList.prototype.equals = function (other, equalsFunction) {
        var eqF = equalsFunction || util.defaultEquals;
        if (!(other instanceof LinkedList)) {
            return false;
        }
        if (this.size() !== other.size()) {
            return false;
        }
        return this.equalsAux(this.firstNode, other.firstNode, eqF);
    };
    /**
     * @private
     */
    LinkedList.prototype.equalsAux = function (n1, n2, eqF) {
        while (n1 !== null && n2 !== null) {
            if (!eqF(n1.element, n2.element)) {
                return false;
            }
            n1 = n1.next;
            n2 = n2.next;
        }
        return true;
    };
    /**
     * Removes the element at the specified position in this list.
     * @param {number} index given index.
     * @return {*} removed element or undefined if the index is out of bounds.
     */
    LinkedList.prototype.removeElementAtIndex = function (index) {
        if (index < 0 || index >= this.nElements || this.firstNode === null || this.lastNode === null) {
            return undefined;
        }
        var element;
        if (this.nElements === 1) {
            //First node in the list.
            element = this.firstNode.element;
            this.firstNode = null;
            this.lastNode = null;
        }
        else {
            var previous = this.nodeAtIndex(index - 1);
            if (previous === null) {
                element = this.firstNode.element;
                this.firstNode = this.firstNode.next;
            }
            else if (previous.next === this.lastNode) {
                element = this.lastNode.element;
                this.lastNode = previous;
            }
            if (previous !== null && previous.next !== null) {
                element = previous.next.element;
                previous.next = previous.next.next;
            }
        }
        this.nElements--;
        return element;
    };
    /**
     * Executes the provided function once for each element present in this list in order.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    LinkedList.prototype.forEach = function (callback) {
        var currentNode = this.firstNode;
        while (currentNode !== null) {
            if (callback(currentNode.element) === false) {
                break;
            }
            currentNode = currentNode.next;
        }
    };
    /**
     * Reverses the order of the elements in this linked list (makes the last
     * element first, and the first element last).
     */
    LinkedList.prototype.reverse = function () {
        var previous = null;
        var current = this.firstNode;
        var temp = null;
        while (current !== null) {
            temp = current.next;
            current.next = previous;
            previous = current;
            current = temp;
        }
        temp = this.firstNode;
        this.firstNode = this.lastNode;
        this.lastNode = temp;
    };
    /**
     * Returns an array containing all of the elements in this list in proper
     * sequence.
     * @return {Array.<*>} an array containing all of the elements in this list,
     * in proper sequence.
     */
    LinkedList.prototype.toArray = function () {
        var array = [];
        var currentNode = this.firstNode;
        while (currentNode !== null) {
            array.push(currentNode.element);
            currentNode = currentNode.next;
        }
        return array;
    };
    /**
     * Returns the number of elements in this list.
     * @return {number} the number of elements in this list.
     */
    LinkedList.prototype.size = function () {
        return this.nElements;
    };
    /**
     * Returns true if this list contains no elements.
     * @return {boolean} true if this list contains no elements.
     */
    LinkedList.prototype.isEmpty = function () {
        return this.nElements <= 0;
    };
    LinkedList.prototype.toString = function () {
        return arrays.toString(this.toArray());
    };
    /**
     * @private
     */
    LinkedList.prototype.nodeAtIndex = function (index) {
        if (index < 0 || index >= this.nElements) {
            return null;
        }
        if (index === (this.nElements - 1)) {
            return this.lastNode;
        }
        var node = this.firstNode;
        for (var i = 0; i < index && node !== null; i++) {
            node = node.next;
        }
        return node;
    };
    /**
     * @private
     */
    LinkedList.prototype.createNode = function (item) {
        return {
            element: item,
            next: null
        };
    };
    return LinkedList;
}()); // End of linked list
exports.default = LinkedList;

},{"./arrays":15,"./util":16}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var Dictionary_1 = require("./Dictionary");
var arrays = require("./arrays");
var MultiDictionary = /** @class */ (function () {
    /**
     * Creates an empty multi dictionary.
     * @class <p>A multi dictionary is a special kind of dictionary that holds
     * multiple values against each key. Setting a value into the dictionary will
     * add the value to an array at that key. Getting a key will return an array,
     * holding all the values set to that key.
     * You can configure to allow duplicates in the values.
     * This implementation accepts any kind of objects as keys.</p>
     *
     * <p>If the keys are custom objects a function which converts keys to strings must be
     * provided. Example:</p>
     *
     * <pre>
     * function petToString(pet) {
     *     return pet.name;
     * }
     * </pre>
     * <p>If the values are custom objects a function to check equality between values
     * must be provided. Example:</p>
     *
     * <pre>
     * function petsAreEqualByAge(pet1,pet2) {
     *     return pet1.age === pet2.age;
     * }
     * </pre>
     * @constructor
     * @param {function(Object):string=} toStrFunction optional function
     * to convert keys to strings. If the keys aren't strings or if toString()
     * is not appropriate, a custom function which receives a key and returns a
     * unique string must be provided.
     * @param {function(Object,Object):boolean=} valuesEqualsFunction optional
     * function to check if two values are equal.
     *
     * @param allowDuplicateValues
     */
    function MultiDictionary(toStrFunction, valuesEqualsFunction, allowDuplicateValues) {
        if (allowDuplicateValues === void 0) { allowDuplicateValues = false; }
        this.dict = new Dictionary_1.default(toStrFunction);
        this.equalsF = valuesEqualsFunction || util.defaultEquals;
        this.allowDuplicate = allowDuplicateValues;
    }
    /**
     * Returns an array holding the values to which this dictionary maps
     * the specified key.
     * Returns an empty array if this dictionary contains no mappings for this key.
     * @param {Object} key key whose associated values are to be returned.
     * @return {Array} an array holding the values to which this dictionary maps
     * the specified key.
     */
    MultiDictionary.prototype.getValue = function (key) {
        var values = this.dict.getValue(key);
        if (util.isUndefined(values)) {
            return [];
        }
        return arrays.copy(values);
    };
    /**
     * Adds the value to the array associated with the specified key, if
     * it is not already present.
     * @param {Object} key key with which the specified value is to be
     * associated.
     * @param {Object} value the value to add to the array at the key
     * @return {boolean} true if the value was not already associated with that key.
     */
    MultiDictionary.prototype.setValue = function (key, value) {
        if (util.isUndefined(key) || util.isUndefined(value)) {
            return false;
        }
        var array = this.dict.getValue(key);
        if (util.isUndefined(array)) {
            this.dict.setValue(key, [value]);
            return true;
        }
        if (!this.allowDuplicate) {
            if (arrays.contains(array, value, this.equalsF)) {
                return false;
            }
        }
        array.push(value);
        return true;
    };
    /**
     * Removes the specified values from the array of values associated with the
     * specified key. If a value isn't given, all values associated with the specified
     * key are removed.
     * @param {Object} key key whose mapping is to be removed from the
     * dictionary.
     * @param {Object=} value optional argument to specify the value to remove
     * from the array associated with the specified key.
     * @return {*} true if the dictionary changed, false if the key doesn't exist or
     * if the specified value isn't associated with the specified key.
     */
    MultiDictionary.prototype.remove = function (key, value) {
        if (util.isUndefined(value)) {
            var v = this.dict.remove(key);
            return !util.isUndefined(v);
        }
        var array = this.dict.getValue(key);
        if (!util.isUndefined(array) && arrays.remove(array, value, this.equalsF)) {
            if (array.length === 0) {
                this.dict.remove(key);
            }
            return true;
        }
        return false;
    };
    /**
     * Returns an array containing all of the keys in this dictionary.
     * @return {Array} an array containing all of the keys in this dictionary.
     */
    MultiDictionary.prototype.keys = function () {
        return this.dict.keys();
    };
    /**
     * Returns an array containing all of the values in this dictionary.
     * @return {Array} an array containing all of the values in this dictionary.
     */
    MultiDictionary.prototype.values = function () {
        var values = this.dict.values();
        var array = [];
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var v = values_1[_i];
            for (var _a = 0, v_1 = v; _a < v_1.length; _a++) {
                var w = v_1[_a];
                array.push(w);
            }
        }
        return array;
    };
    /**
     * Returns true if this dictionary at least one value associatted the specified key.
     * @param {Object} key key whose presence in this dictionary is to be
     * tested.
     * @return {boolean} true if this dictionary at least one value associatted
     * the specified key.
     */
    MultiDictionary.prototype.containsKey = function (key) {
        return this.dict.containsKey(key);
    };
    /**
     * Removes all mappings from this dictionary.
     */
    MultiDictionary.prototype.clear = function () {
        this.dict.clear();
    };
    /**
     * Returns the number of keys in this dictionary.
     * @return {number} the number of key-value mappings in this dictionary.
     */
    MultiDictionary.prototype.size = function () {
        return this.dict.size();
    };
    /**
     * Returns true if this dictionary contains no mappings.
     * @return {boolean} true if this dictionary contains no mappings.
     */
    MultiDictionary.prototype.isEmpty = function () {
        return this.dict.isEmpty();
    };
    return MultiDictionary;
}()); // end of multi dictionary
exports.default = MultiDictionary;

},{"./Dictionary":4,"./arrays":15,"./util":16}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["BEFORE"] = 0] = "BEFORE";
    Direction[Direction["AFTER"] = 1] = "AFTER";
    Direction[Direction["INSIDE_AT_END"] = 2] = "INSIDE_AT_END";
    Direction[Direction["INSIDE_AT_START"] = 3] = "INSIDE_AT_START";
})(Direction || (Direction = {}));
var MultiRootTree = /** @class */ (function () {
    function MultiRootTree(rootIds, nodes) {
        if (rootIds === void 0) { rootIds = []; }
        if (nodes === void 0) { nodes = {}; }
        this.rootIds = rootIds;
        this.nodes = nodes;
        this.initRootIds();
        this.initNodes();
    }
    MultiRootTree.prototype.initRootIds = function () {
        for (var _i = 0, _a = this.rootIds; _i < _a.length; _i++) {
            var rootId = _a[_i];
            this.createEmptyNodeIfNotExist(rootId);
        }
    };
    MultiRootTree.prototype.initNodes = function () {
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                for (var _i = 0, _a = this.nodes[nodeKey]; _i < _a.length; _i++) {
                    var nodeListItem = _a[_i];
                    this.createEmptyNodeIfNotExist(nodeListItem);
                }
            }
        }
    };
    MultiRootTree.prototype.createEmptyNodeIfNotExist = function (nodeKey) {
        if (!this.nodes[nodeKey]) {
            this.nodes[nodeKey] = [];
        }
    };
    MultiRootTree.prototype.getRootIds = function () {
        var clone = this.rootIds.slice();
        return clone;
    };
    MultiRootTree.prototype.getNodes = function () {
        var clone = {};
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                clone[nodeKey] = this.nodes[nodeKey].slice();
            }
        }
        return clone;
    };
    MultiRootTree.prototype.getObject = function () {
        return {
            rootIds: this.getRootIds(),
            nodes: this.getNodes(),
        };
    };
    MultiRootTree.prototype.toObject = function () {
        return this.getObject();
    };
    MultiRootTree.prototype.flatten = function () {
        var _this = this;
        var extraPropsObject = [];
        for (var i = 0; i < this.rootIds.length; i++) {
            var rootId = this.rootIds[i];
            extraPropsObject.push({
                id: rootId,
                level: 0,
                hasParent: false,
                childrenCount: 0,
            });
            traverse(rootId, this.nodes, extraPropsObject, 0);
        }
        for (var _i = 0, extraPropsObject_1 = extraPropsObject; _i < extraPropsObject_1.length; _i++) {
            var o = extraPropsObject_1[_i];
            o.childrenCount = countChildren(o.id);
        }
        return extraPropsObject;
        function countChildren(id) {
            if (!_this.nodes[id]) {
                return 0;
            }
            else {
                var childrenCount = _this.nodes[id].length;
                return childrenCount;
            }
        }
        function traverse(startId, nodes, returnArray, level) {
            if (level === void 0) { level = 0; }
            if (!startId || !nodes || !returnArray || !nodes[startId]) {
                return;
            }
            level++;
            var idsList = nodes[startId];
            for (var i = 0; i < idsList.length; i++) {
                var id = idsList[i];
                returnArray.push({ id: id, level: level, hasParent: true });
                traverse(id, nodes, returnArray, level);
            }
            level--;
        }
    };
    MultiRootTree.prototype.moveIdBeforeId = function (moveId, beforeId) {
        return this.moveId(moveId, beforeId, Direction.BEFORE);
    };
    MultiRootTree.prototype.moveIdAfterId = function (moveId, afterId) {
        return this.moveId(moveId, afterId, Direction.AFTER);
    };
    MultiRootTree.prototype.moveIdIntoId = function (moveId, insideId, atStart) {
        if (atStart === void 0) { atStart = true; }
        if (atStart) {
            return this.moveId(moveId, insideId, Direction.INSIDE_AT_START);
        }
        else {
            return this.moveId(moveId, insideId, Direction.INSIDE_AT_END);
        }
    };
    MultiRootTree.prototype.swapRootIdWithRootId = function (rootId, withRootId) {
        var leftIndex = this.findRootId(rootId);
        var rightIndex = this.findRootId(withRootId);
        this.swapRootPositionWithRootPosition(leftIndex, rightIndex);
    };
    MultiRootTree.prototype.swapRootPositionWithRootPosition = function (swapRootPosition, withRootPosition) {
        var temp = this.rootIds[withRootPosition];
        this.rootIds[withRootPosition] = this.rootIds[swapRootPosition];
        this.rootIds[swapRootPosition] = temp;
    };
    MultiRootTree.prototype.deleteId = function (id) {
        this.rootDeleteId(id);
        this.nodeAndSubNodesDelete(id);
        this.nodeRefrencesDelete(id);
    };
    MultiRootTree.prototype.insertIdBeforeId = function (beforeId, insertId) {
        var foundRootIdIndex = this.findRootId(beforeId);
        if (foundRootIdIndex > -1) {
            this.insertIdIntoRoot(insertId, foundRootIdIndex);
        }
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                var foundNodeIdIndex = this.findNodeId(nodeKey, beforeId);
                if (foundNodeIdIndex > -1) {
                    this.insertIdIntoNode(nodeKey, insertId, foundNodeIdIndex);
                }
            }
        }
    };
    MultiRootTree.prototype.insertIdAfterId = function (belowId, insertId) {
        var foundRootIdIndex = this.findRootId(belowId);
        if (foundRootIdIndex > -1) {
            this.insertIdIntoRoot(insertId, foundRootIdIndex + 1);
        }
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                var foundNodeIdIndex = this.findNodeId(nodeKey, belowId);
                if (foundNodeIdIndex > -1) {
                    this.insertIdIntoNode(nodeKey, insertId, foundNodeIdIndex + 1);
                }
            }
        }
    };
    MultiRootTree.prototype.insertIdIntoId = function (insideId, insertId) {
        this.nodeInsertAtEnd(insideId, insertId);
        this.nodes[insertId] = [];
    };
    MultiRootTree.prototype.insertIdIntoRoot = function (id, position) {
        if (position === undefined) {
            this.rootInsertAtEnd(id);
        }
        else {
            if (position < 0) {
                var length_1 = this.rootIds.length;
                this.rootIds.splice((position + length_1 + 1), 0, id);
            }
            else {
                this.rootIds.splice(position, 0, id);
            }
        }
        this.nodes[id] = this.nodes[id] || [];
    };
    MultiRootTree.prototype.insertIdIntoNode = function (nodeKey, id, position) {
        this.nodes[nodeKey] = this.nodes[nodeKey] || [];
        this.nodes[id] = this.nodes[id] || [];
        if (position === undefined) {
            this.nodeInsertAtEnd(nodeKey, id);
        }
        else {
            if (position < 0) {
                var length_2 = this.nodes[nodeKey].length;
                this.nodes[nodeKey].splice((position + length_2 + 1), 0, id);
            }
            else {
                this.nodes[nodeKey].splice(position, 0, id);
            }
        }
    };
    MultiRootTree.prototype.moveId = function (moveId, beforeId, direction) {
        var sourceId = moveId;
        var sourceRootIndex = this.findRootId(sourceId);
        var sourceNodeKey;
        var sourceNodeIdIndex;
        if (this.nodes[beforeId]) {
            sourceNodeKey = beforeId;
        }
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                sourceNodeIdIndex = this.findNodeId(nodeKey, beforeId);
                break;
            }
        }
        // got all
        var targetId = beforeId;
        var targetRootIndex = this.findRootId(targetId);
        var targetNodeKey;
        var targetNodeIdIndex;
        if (this.nodes[beforeId]) {
            targetNodeKey = beforeId;
        }
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                targetNodeIdIndex = this.findNodeId(nodeKey, beforeId);
                break;
            }
        }
        // got all
        if (sourceRootIndex > -1) {
            if (targetRootIndex > -1) {
                // moving root to root
                // console.log(`Moving ROOT to ROOT`);
                // console.log(`RootIds:`);
                // console.log(this.rootIds);
                // console.log(`TargetIndex=${targetRootIndex}, SourceIndex=${sourceRootIndex}`);
                // console.log(`TargetId=${targetId}, SourceId=${sourceId}`);
                this.rootDelete(sourceRootIndex); // indexes change now
                if (targetRootIndex > sourceRootIndex) {
                    targetRootIndex--;
                }
                else {
                }
                switch (direction) {
                    case Direction.BEFORE:
                        this.insertIdIntoRoot(sourceId, targetRootIndex);
                        break;
                    case Direction.AFTER:
                        this.insertIdIntoRoot(sourceId, targetRootIndex + 1);
                        break;
                    case Direction.INSIDE_AT_START:
                        this.nodeInsertAtStart(targetId, sourceId);
                        break;
                    case Direction.INSIDE_AT_END:
                        this.nodeInsertAtEnd(targetId, sourceId);
                        break;
                }
            }
            else {
                // moving root (source) ABOVE node (target)
                // will remove one entry from roots
                this.rootDelete(sourceRootIndex);
                for (var nodeKey in this.nodes) {
                    if (this.nodes.hasOwnProperty(nodeKey)) {
                        var index = this.findNodeId(nodeKey, targetId);
                        if (index > -1) {
                            switch (direction) {
                                case Direction.BEFORE:
                                    this.insertIdIntoNode(nodeKey, sourceId, index);
                                    break;
                                case Direction.AFTER:
                                    this.insertIdIntoNode(nodeKey, sourceId, index + 1);
                                    break;
                                case Direction.INSIDE_AT_START:
                                    this.nodeInsertAtStart(targetId, sourceId);
                                    break;
                                case Direction.INSIDE_AT_END:
                                    this.nodeInsertAtEnd(targetId, sourceId);
                                    break;
                            }
                            break;
                        }
                    }
                }
            }
        }
        else {
            if (targetRootIndex > -1) {
                // moving node (source) ABOVE root (target)
                // delete source id from each node
                for (var nodeKey in this.nodes) {
                    if (this.nodes.hasOwnProperty(nodeKey)) {
                        var index = this.findNodeId(nodeKey, sourceId);
                        if (index > -1) {
                            // this.nodeInsertId(nodeKey, sourceId, index);
                            this.nodeDeleteAtIndex(nodeKey, index);
                            break;
                        }
                    }
                }
                switch (direction) {
                    case Direction.BEFORE:
                        this.insertIdIntoRoot(sourceId, targetRootIndex);
                        break;
                    case Direction.AFTER:
                        this.insertIdIntoRoot(sourceId, targetRootIndex + 1);
                        break;
                    case Direction.INSIDE_AT_START:
                        this.nodeInsertAtStart(targetId, sourceId);
                        break;
                    case Direction.INSIDE_AT_END:
                        this.nodeInsertAtEnd(targetId, sourceId);
                        break;
                }
            }
            else {
                // moving node (source) ABOVE node (target)
                // delete source id from each node
                for (var nodeKey in this.nodes) {
                    if (this.nodes.hasOwnProperty(nodeKey)) {
                        var index = this.findNodeId(nodeKey, sourceId);
                        if (index > -1) {
                            this.nodeDeleteAtIndex(nodeKey, index);
                            break;
                        }
                    }
                }
                for (var nodeKey in this.nodes) {
                    if (this.nodes.hasOwnProperty(nodeKey)) {
                        var index = this.findNodeId(nodeKey, targetId);
                        if (index > -1) {
                            switch (direction) {
                                case Direction.BEFORE:
                                    this.insertIdIntoNode(nodeKey, sourceId, index);
                                    break;
                                case Direction.AFTER:
                                    this.insertIdIntoNode(nodeKey, sourceId, index + 1);
                                    break;
                                case Direction.INSIDE_AT_START:
                                    this.nodeInsertAtStart(targetId, sourceId);
                                    break;
                                case Direction.INSIDE_AT_END:
                                    this.nodeInsertAtEnd(targetId, sourceId);
                                    break;
                            }
                            break;
                        }
                    }
                }
            }
        }
    };
    MultiRootTree.prototype.swapArrayElements = function (arr, indexA, indexB) {
        var temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
        return arr;
    };
    MultiRootTree.prototype.rootDeleteId = function (id) {
        var index = this.findRootId(id);
        if (index > -1) {
            this.rootDelete(index);
        }
    };
    MultiRootTree.prototype.nodeAndSubNodesDelete = function (nodeKey) {
        var toDeleteLater = [];
        for (var i = 0; i < this.nodes[nodeKey].length; i++) {
            var id = this.nodes[nodeKey][i];
            this.nodeAndSubNodesDelete(id);
            toDeleteLater.push(nodeKey);
        }
        this.nodeDelete(nodeKey);
        for (var i = 0; i < toDeleteLater.length; i++) {
            this.nodeDelete(toDeleteLater[i]);
        }
    };
    MultiRootTree.prototype.nodeRefrencesDelete = function (id) {
        for (var nodeKey in this.nodes) {
            if (this.nodes.hasOwnProperty(nodeKey)) {
                for (var i = 0; i < this.nodes[nodeKey].length; i++) {
                    var targetId = this.nodes[nodeKey][i];
                    if (targetId === id) {
                        this.nodeDeleteAtIndex(nodeKey, i);
                    }
                }
            }
        }
    };
    MultiRootTree.prototype.nodeDelete = function (nodeKey) {
        delete this.nodes[nodeKey];
    };
    MultiRootTree.prototype.findRootId = function (id) {
        return this.rootIds.indexOf(id);
    };
    MultiRootTree.prototype.findNodeId = function (nodeKey, id) {
        return this.nodes[nodeKey].indexOf(id);
    };
    MultiRootTree.prototype.findNode = function (nodeKey) {
        return this.nodes[nodeKey];
    };
    MultiRootTree.prototype.nodeInsertAtStart = function (nodeKey, id) {
        this.nodes[nodeKey].unshift(id);
    };
    MultiRootTree.prototype.nodeInsertAtEnd = function (nodeKey, id) {
        this.nodes[nodeKey].push(id);
    };
    MultiRootTree.prototype.rootDelete = function (index) {
        this.rootIds.splice(index, 1);
    };
    MultiRootTree.prototype.nodeDeleteAtIndex = function (nodeKey, index) {
        this.nodes[nodeKey].splice(index, 1);
    };
    MultiRootTree.prototype.rootInsertAtStart = function (id) {
        this.rootIds.unshift(id);
    };
    MultiRootTree.prototype.rootInsertAtEnd = function (id) {
        this.rootIds.push(id);
    };
    return MultiRootTree;
}());
exports.default = MultiRootTree;

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var Heap_1 = require("./Heap");
var PriorityQueue = /** @class */ (function () {
    /**
     * Creates an empty priority queue.
     * @class <p>In a priority queue each element is associated with a "priority",
     * elements are dequeued in highest-priority-first order (the elements with the
     * highest priority are dequeued first). Priority Queues are implemented as heaps.
     * If the inserted elements are custom objects a compare function must be provided,
     * otherwise the <=, === and >= operators are used to compare object priority.</p>
     * <pre>
     * function compare(a, b) {
     *  if (a is less than b by some ordering criterion) {
     *     return -1;
     *  } if (a is greater than b by the ordering criterion) {
     *     return 1;
     *  }
     *  // a must be equal to b
     *  return 0;
     * }
     * </pre>
     * @constructor
     * @param {function(Object,Object):number=} compareFunction optional
     * function used to compare two element priorities. Must return a negative integer,
     * zero, or a positive integer as the first argument is less than, equal to,
     * or greater than the second.
     */
    function PriorityQueue(compareFunction) {
        this.heap = new Heap_1.default(util.reverseCompareFunction(compareFunction));
    }
    /**
     * Inserts the specified element into this priority queue.
     * @param {Object} element the element to insert.
     * @return {boolean} true if the element was inserted, or false if it is undefined.
     */
    PriorityQueue.prototype.enqueue = function (element) {
        return this.heap.add(element);
    };
    /**
     * Inserts the specified element into this priority queue.
     * @param {Object} element the element to insert.
     * @return {boolean} true if the element was inserted, or false if it is undefined.
     */
    PriorityQueue.prototype.add = function (element) {
        return this.heap.add(element);
    };
    /**
     * Retrieves and removes the highest priority element of this queue.
     * @return {*} the the highest priority element of this queue,
     *  or undefined if this queue is empty.
     */
    PriorityQueue.prototype.dequeue = function () {
        if (this.heap.size() !== 0) {
            var el = this.heap.peek();
            this.heap.removeRoot();
            return el;
        }
        return undefined;
    };
    /**
     * Retrieves, but does not remove, the highest priority element of this queue.
     * @return {*} the highest priority element of this queue, or undefined if this queue is empty.
     */
    PriorityQueue.prototype.peek = function () {
        return this.heap.peek();
    };
    /**
     * Returns true if this priority queue contains the specified element.
     * @param {Object} element element to search for.
     * @return {boolean} true if this priority queue contains the specified element,
     * false otherwise.
     */
    PriorityQueue.prototype.contains = function (element) {
        return this.heap.contains(element);
    };
    /**
     * Checks if this priority queue is empty.
     * @return {boolean} true if and only if this priority queue contains no items; false
     * otherwise.
     */
    PriorityQueue.prototype.isEmpty = function () {
        return this.heap.isEmpty();
    };
    /**
     * Returns the number of elements in this priority queue.
     * @return {number} the number of elements in this priority queue.
     */
    PriorityQueue.prototype.size = function () {
        return this.heap.size();
    };
    /**
     * Removes all of the elements from this priority queue.
     */
    PriorityQueue.prototype.clear = function () {
        this.heap.clear();
    };
    /**
     * Executes the provided function once for each element present in this queue in
     * no particular order.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    PriorityQueue.prototype.forEach = function (callback) {
        this.heap.forEach(callback);
    };
    return PriorityQueue;
}()); // end of priority queue
exports.default = PriorityQueue;

},{"./Heap":6,"./util":16}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var Queue = /** @class */ (function () {
    /**
     * Creates an empty queue.
     * @class A queue is a First-In-First-Out (FIFO) data structure, the first
     * element added to the queue will be the first one to be removed. This
     * implementation uses a linked list as a container.
     * @constructor
     */
    function Queue() {
        this.list = new LinkedList_1.default();
    }
    /**
     * Inserts the specified element into the end of this queue.
     * @param {Object} elem the element to insert.
     * @return {boolean} true if the element was inserted, or false if it is undefined.
     */
    Queue.prototype.enqueue = function (elem) {
        return this.list.add(elem);
    };
    /**
     * Inserts the specified element into the end of this queue.
     * @param {Object} elem the element to insert.
     * @return {boolean} true if the element was inserted, or false if it is undefined.
     */
    Queue.prototype.add = function (elem) {
        return this.list.add(elem);
    };
    /**
     * Retrieves and removes the head of this queue.
     * @return {*} the head of this queue, or undefined if this queue is empty.
     */
    Queue.prototype.dequeue = function () {
        if (this.list.size() !== 0) {
            var el = this.list.first();
            this.list.removeElementAtIndex(0);
            return el;
        }
        return undefined;
    };
    /**
     * Retrieves, but does not remove, the head of this queue.
     * @return {*} the head of this queue, or undefined if this queue is empty.
     */
    Queue.prototype.peek = function () {
        if (this.list.size() !== 0) {
            return this.list.first();
        }
        return undefined;
    };
    /**
     * Returns the number of elements in this queue.
     * @return {number} the number of elements in this queue.
     */
    Queue.prototype.size = function () {
        return this.list.size();
    };
    /**
     * Returns true if this queue contains the specified element.
     * <p>If the elements inside this stack are
     * not comparable with the === operator, a custom equals function should be
     * provided to perform searches, the function must receive two arguments and
     * return true if they are equal, false otherwise. Example:</p>
     *
     * <pre>
     * const petsAreEqualByName (pet1, pet2) {
     *  return pet1.name === pet2.name;
     * }
     * </pre>
     * @param {Object} elem element to search for.
     * @param {function(Object,Object):boolean=} equalsFunction optional
     * function to check if two elements are equal.
     * @return {boolean} true if this queue contains the specified element,
     * false otherwise.
     */
    Queue.prototype.contains = function (elem, equalsFunction) {
        return this.list.contains(elem, equalsFunction);
    };
    /**
     * Checks if this queue is empty.
     * @return {boolean} true if and only if this queue contains no items; false
     * otherwise.
     */
    Queue.prototype.isEmpty = function () {
        return this.list.size() <= 0;
    };
    /**
     * Removes all of the elements from this queue.
     */
    Queue.prototype.clear = function () {
        this.list.clear();
    };
    /**
     * Executes the provided function once for each element present in this queue in
     * FIFO order.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    Queue.prototype.forEach = function (callback) {
        this.list.forEach(callback);
    };
    return Queue;
}()); // End of queue
exports.default = Queue;

},{"./LinkedList":8}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var arrays = require("./arrays");
var Dictionary_1 = require("./Dictionary");
var Set = /** @class */ (function () {
    /**
     * Creates an empty set.
     * @class <p>A set is a data structure that contains no duplicate items.</p>
     * <p>If the inserted elements are custom objects a function
     * which converts elements to strings must be provided. Example:</p>
     *
     * <pre>
     * function petToString(pet) {
     *  return pet.name;
     * }
     * </pre>
     *
     * @constructor
     * @param {function(Object):string=} toStringFunction optional function used
     * to convert elements to strings. If the elements aren't strings or if toString()
     * is not appropriate, a custom function which receives an object and returns a
     * unique string must be provided.
     */
    function Set(toStringFunction) {
        this.dictionary = new Dictionary_1.default(toStringFunction);
    }
    /**
     * Returns true if this set contains the specified element.
     * @param {Object} element element to search for.
     * @return {boolean} true if this set contains the specified element,
     * false otherwise.
     */
    Set.prototype.contains = function (element) {
        return this.dictionary.containsKey(element);
    };
    /**
     * Adds the specified element to this set if it is not already present.
     * @param {Object} element the element to insert.
     * @return {boolean} true if this set did not already contain the specified element.
     */
    Set.prototype.add = function (element) {
        if (this.contains(element) || util.isUndefined(element)) {
            return false;
        }
        else {
            this.dictionary.setValue(element, element);
            return true;
        }
    };
    /**
     * Performs an intersection between this and another set.
     * Removes all values that are not present this set and the given set.
     * @param {collections.Set} otherSet other set.
     */
    Set.prototype.intersection = function (otherSet) {
        var set = this;
        this.forEach(function (element) {
            if (!otherSet.contains(element)) {
                set.remove(element);
            }
            return true;
        });
    };
    /**
     * Performs a union between this and another set.
     * Adds all values from the given set to this set.
     * @param {collections.Set} otherSet other set.
     */
    Set.prototype.union = function (otherSet) {
        var set = this;
        otherSet.forEach(function (element) {
            set.add(element);
            return true;
        });
    };
    /**
     * Performs a difference between this and another set.
     * Removes from this set all the values that are present in the given set.
     * @param {collections.Set} otherSet other set.
     */
    Set.prototype.difference = function (otherSet) {
        var set = this;
        otherSet.forEach(function (element) {
            set.remove(element);
            return true;
        });
    };
    /**
     * Checks whether the given set contains all the elements in this set.
     * @param {collections.Set} otherSet other set.
     * @return {boolean} true if this set is a subset of the given set.
     */
    Set.prototype.isSubsetOf = function (otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        }
        var isSub = true;
        this.forEach(function (element) {
            if (!otherSet.contains(element)) {
                isSub = false;
                return false;
            }
            return true;
        });
        return isSub;
    };
    /**
     * Removes the specified element from this set if it is present.
     * @return {boolean} true if this set contained the specified element.
     */
    Set.prototype.remove = function (element) {
        if (!this.contains(element)) {
            return false;
        }
        else {
            this.dictionary.remove(element);
            return true;
        }
    };
    /**
     * Executes the provided function once for each element
     * present in this set.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one arguments: the element. To break the iteration you can
     * optionally return false.
     */
    Set.prototype.forEach = function (callback) {
        this.dictionary.forEach(function (k, v) {
            return callback(v);
        });
    };
    /**
     * Returns an array containing all of the elements in this set in arbitrary order.
     * @return {Array} an array containing all of the elements in this set.
     */
    Set.prototype.toArray = function () {
        return this.dictionary.values();
    };
    /**
     * Returns true if this set contains no elements.
     * @return {boolean} true if this set contains no elements.
     */
    Set.prototype.isEmpty = function () {
        return this.dictionary.isEmpty();
    };
    /**
     * Returns the number of elements in this set.
     * @return {number} the number of elements in this set.
     */
    Set.prototype.size = function () {
        return this.dictionary.size();
    };
    /**
     * Removes all of the elements from this set.
     */
    Set.prototype.clear = function () {
        this.dictionary.clear();
    };
    /*
    * Provides a string representation for display
    */
    Set.prototype.toString = function () {
        return arrays.toString(this.toArray());
    };
    return Set;
}()); // end of Set
exports.default = Set;

},{"./Dictionary":4,"./arrays":15,"./util":16}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var Stack = /** @class */ (function () {
    /**
     * Creates an empty Stack.
     * @class A Stack is a Last-In-First-Out (LIFO) data structure, the last
     * element added to the stack will be the first one to be removed. This
     * implementation uses a linked list as a container.
     * @constructor
     */
    function Stack() {
        this.list = new LinkedList_1.default();
    }
    /**
     * Pushes an item onto the top of this stack.
     * @param {Object} elem the element to be pushed onto this stack.
     * @return {boolean} true if the element was pushed or false if it is undefined.
     */
    Stack.prototype.push = function (elem) {
        return this.list.add(elem, 0);
    };
    /**
     * Pushes an item onto the top of this stack.
     * @param {Object} elem the element to be pushed onto this stack.
     * @return {boolean} true if the element was pushed or false if it is undefined.
     */
    Stack.prototype.add = function (elem) {
        return this.list.add(elem, 0);
    };
    /**
     * Removes the object at the top of this stack and returns that object.
     * @return {*} the object at the top of this stack or undefined if the
     * stack is empty.
     */
    Stack.prototype.pop = function () {
        return this.list.removeElementAtIndex(0);
    };
    /**
     * Looks at the object at the top of this stack without removing it from the
     * stack.
     * @return {*} the object at the top of this stack or undefined if the
     * stack is empty.
     */
    Stack.prototype.peek = function () {
        return this.list.first();
    };
    /**
     * Returns the number of elements in this stack.
     * @return {number} the number of elements in this stack.
     */
    Stack.prototype.size = function () {
        return this.list.size();
    };
    /**
     * Returns true if this stack contains the specified element.
     * <p>If the elements inside this stack are
     * not comparable with the === operator, a custom equals function should be
     * provided to perform searches, the function must receive two arguments and
     * return true if they are equal, false otherwise. Example:</p>
     *
     * <pre>
     * const petsAreEqualByName (pet1, pet2) {
     *  return pet1.name === pet2.name;
     * }
     * </pre>
     * @param {Object} elem element to search for.
     * @param {function(Object,Object):boolean=} equalsFunction optional
     * function to check if two elements are equal.
     * @return {boolean} true if this stack contains the specified element,
     * false otherwise.
     */
    Stack.prototype.contains = function (elem, equalsFunction) {
        return this.list.contains(elem, equalsFunction);
    };
    /**
     * Checks if this stack is empty.
     * @return {boolean} true if and only if this stack contains no items; false
     * otherwise.
     */
    Stack.prototype.isEmpty = function () {
        return this.list.isEmpty();
    };
    /**
     * Removes all of the elements from this stack.
     */
    Stack.prototype.clear = function () {
        this.list.clear();
    };
    /**
     * Executes the provided function once for each element present in this stack in
     * LIFO order.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element value, to break the iteration you can
     * optionally return false.
     */
    Stack.prototype.forEach = function (callback) {
        this.list.forEach(callback);
    };
    return Stack;
}()); // End of stack
exports.default = Stack;

},{"./LinkedList":8}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
/**
 * Returns the position of the first occurrence of the specified item
 * within the specified array.4
 * @param {*} array the array in which to search the element.
 * @param {Object} item the element to search.
 * @param {function(Object,Object):boolean=} equalsFunction optional function used to
 * check equality between 2 elements.
 * @return {number} the position of the first occurrence of the specified element
 * within the specified array, or -1 if not found.
 */
function indexOf(array, item, equalsFunction) {
    var equals = equalsFunction || util.defaultEquals;
    var length = array.length;
    for (var i = 0; i < length; i++) {
        if (equals(array[i], item)) {
            return i;
        }
    }
    return -1;
}
exports.indexOf = indexOf;
/**
 * Returns the position of the last occurrence of the specified element
 * within the specified array.
 * @param {*} array the array in which to search the element.
 * @param {Object} item the element to search.
 * @param {function(Object,Object):boolean=} equalsFunction optional function used to
 * check equality between 2 elements.
 * @return {number} the position of the last occurrence of the specified element
 * within the specified array or -1 if not found.
 */
function lastIndexOf(array, item, equalsFunction) {
    var equals = equalsFunction || util.defaultEquals;
    var length = array.length;
    for (var i = length - 1; i >= 0; i--) {
        if (equals(array[i], item)) {
            return i;
        }
    }
    return -1;
}
exports.lastIndexOf = lastIndexOf;
/**
 * Returns true if the specified array contains the specified element.
 * @param {*} array the array in which to search the element.
 * @param {Object} item the element to search.
 * @param {function(Object,Object):boolean=} equalsFunction optional function to
 * check equality between 2 elements.
 * @return {boolean} true if the specified array contains the specified element.
 */
function contains(array, item, equalsFunction) {
    return indexOf(array, item, equalsFunction) >= 0;
}
exports.contains = contains;
/**
 * Removes the first ocurrence of the specified element from the specified array.
 * @param {*} array the array in which to search element.
 * @param {Object} item the element to search.
 * @param {function(Object,Object):boolean=} equalsFunction optional function to
 * check equality between 2 elements.
 * @return {boolean} true if the array changed after this call.
 */
function remove(array, item, equalsFunction) {
    var index = indexOf(array, item, equalsFunction);
    if (index < 0) {
        return false;
    }
    array.splice(index, 1);
    return true;
}
exports.remove = remove;
/**
 * Returns the number of elements in the specified array equal
 * to the specified object.
 * @param {Array} array the array in which to determine the frequency of the element.
 * @param {Object} item the element whose frequency is to be determined.
 * @param {function(Object,Object):boolean=} equalsFunction optional function used to
 * check equality between 2 elements.
 * @return {number} the number of elements in the specified array
 * equal to the specified object.
 */
function frequency(array, item, equalsFunction) {
    var equals = equalsFunction || util.defaultEquals;
    var length = array.length;
    var freq = 0;
    for (var i = 0; i < length; i++) {
        if (equals(array[i], item)) {
            freq++;
        }
    }
    return freq;
}
exports.frequency = frequency;
/**
 * Returns true if the two specified arrays are equal to one another.
 * Two arrays are considered equal if both arrays contain the same number
 * of elements, and all corresponding pairs of elements in the two
 * arrays are equal and are in the same order.
 * @param {Array} array1 one array to be tested for equality.
 * @param {Array} array2 the other array to be tested for equality.
 * @param {function(Object,Object):boolean=} equalsFunction optional function used to
 * check equality between elemements in the arrays.
 * @return {boolean} true if the two arrays are equal
 */
function equals(array1, array2, equalsFunction) {
    var equals = equalsFunction || util.defaultEquals;
    if (array1.length !== array2.length) {
        return false;
    }
    var length = array1.length;
    for (var i = 0; i < length; i++) {
        if (!equals(array1[i], array2[i])) {
            return false;
        }
    }
    return true;
}
exports.equals = equals;
/**
 * Returns shallow a copy of the specified array.
 * @param {*} array the array to copy.
 * @return {Array} a copy of the specified array
 */
function copy(array) {
    return array.concat();
}
exports.copy = copy;
/**
 * Swaps the elements at the specified positions in the specified array.
 * @param {Array} array The array in which to swap elements.
 * @param {number} i the index of one element to be swapped.
 * @param {number} j the index of the other element to be swapped.
 * @return {boolean} true if the array is defined and the indexes are valid.
 */
function swap(array, i, j) {
    if (i < 0 || i >= array.length || j < 0 || j >= array.length) {
        return false;
    }
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return true;
}
exports.swap = swap;
function toString(array) {
    return '[' + array.toString() + ']';
}
exports.toString = toString;
/**
 * Executes the provided function once for each element present in this array
 * starting from index 0 to length - 1.
 * @param {Array} array The array in which to iterate.
 * @param {function(Object):*} callback function to execute, it is
 * invoked with one argument: the element value, to break the iteration you can
 * optionally return false.
 */
function forEach(array, callback) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var ele = array_1[_i];
        if (callback(ele) === false) {
            return;
        }
    }
}
exports.forEach = forEach;

},{"./util":16}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _hasOwnProperty = Object.prototype.hasOwnProperty;
exports.has = function (obj, prop) {
    return _hasOwnProperty.call(obj, prop);
};
/**
 * Default function to compare element order.
 * @function
 */
function defaultCompare(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a === b) {
        return 0;
    }
    else {
        return 1;
    }
}
exports.defaultCompare = defaultCompare;
/**
 * Default function to test equality.
 * @function
 */
function defaultEquals(a, b) {
    return a === b;
}
exports.defaultEquals = defaultEquals;
/**
 * Default function to convert an object to a string.
 * @function
 */
function defaultToString(item) {
    if (item === null) {
        return 'COLLECTION_NULL';
    }
    else if (isUndefined(item)) {
        return 'COLLECTION_UNDEFINED';
    }
    else if (isString(item)) {
        return '$s' + item;
    }
    else {
        return '$o' + item.toString();
    }
}
exports.defaultToString = defaultToString;
/**
 * Joins all the properies of the object using the provided join string
 */
function makeString(item, join) {
    if (join === void 0) { join = ','; }
    if (item === null) {
        return 'COLLECTION_NULL';
    }
    else if (isUndefined(item)) {
        return 'COLLECTION_UNDEFINED';
    }
    else if (isString(item)) {
        return item.toString();
    }
    else {
        var toret = '{';
        var first = true;
        for (var prop in item) {
            if (exports.has(item, prop)) {
                if (first) {
                    first = false;
                }
                else {
                    toret = toret + join;
                }
                toret = toret + prop + ':' + item[prop];
            }
        }
        return toret + '}';
    }
}
exports.makeString = makeString;
/**
 * Checks if the given argument is a function.
 * @function
 */
function isFunction(func) {
    return (typeof func) === 'function';
}
exports.isFunction = isFunction;
/**
 * Checks if the given argument is undefined.
 * @function
 */
function isUndefined(obj) {
    return (typeof obj) === 'undefined';
}
exports.isUndefined = isUndefined;
/**
 * Checks if the given argument is a string.
 * @function
 */
function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}
exports.isString = isString;
/**
 * Reverses a compare function.
 * @function
 */
function reverseCompareFunction(compareFunction) {
    if (isUndefined(compareFunction) || !isFunction(compareFunction)) {
        return function (a, b) {
            if (a < b) {
                return 1;
            }
            else if (a === b) {
                return 0;
            }
            else {
                return -1;
            }
        };
    }
    else {
        return function (d, v) {
            return compareFunction(d, v) * -1;
        };
    }
}
exports.reverseCompareFunction = reverseCompareFunction;
/**
 * Returns an equal function given a compare function.
 * @function
 */
function compareToEquals(compareFunction) {
    return function (a, b) {
        return compareFunction(a, b) === 0;
    };
}
exports.compareToEquals = compareToEquals;

},{}],"typescript-collections":[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright 2013 Basarat Ali Syed. All Rights Reserved.
//
// Licensed under MIT open source license http://opensource.org/licenses/MIT
//
// Orginal javascript code was by Mauricio Santos
//
var _arrays = require("./arrays");
exports.arrays = _arrays;
var Bag_1 = require("./Bag");
exports.Bag = Bag_1.default;
var BSTree_1 = require("./BSTree");
exports.BSTree = BSTree_1.default;
var BSTreeKV_1 = require("./BSTreeKV");
exports.BSTreeKV = BSTreeKV_1.default;
var Dictionary_1 = require("./Dictionary");
exports.Dictionary = Dictionary_1.default;
var Heap_1 = require("./Heap");
exports.Heap = Heap_1.default;
var LinkedDictionary_1 = require("./LinkedDictionary");
exports.LinkedDictionary = LinkedDictionary_1.default;
var LinkedList_1 = require("./LinkedList");
exports.LinkedList = LinkedList_1.default;
var MultiDictionary_1 = require("./MultiDictionary");
exports.MultiDictionary = MultiDictionary_1.default;
var FactoryDictionary_1 = require("./FactoryDictionary");
exports.FactoryDictionary = FactoryDictionary_1.default;
var FactoryDictionary_2 = require("./FactoryDictionary");
exports.DefaultDictionary = FactoryDictionary_2.default;
var Queue_1 = require("./Queue");
exports.Queue = Queue_1.default;
var PriorityQueue_1 = require("./PriorityQueue");
exports.PriorityQueue = PriorityQueue_1.default;
var Set_1 = require("./Set");
exports.Set = Set_1.default;
var Stack_1 = require("./Stack");
exports.Stack = Stack_1.default;
var MultiRootTree_1 = require("./MultiRootTree");
exports.MultiRootTree = MultiRootTree_1.default;
var _util = require("./util");
exports.util = _util;

},{"./BSTree":1,"./BSTreeKV":2,"./Bag":3,"./Dictionary":4,"./FactoryDictionary":5,"./Heap":6,"./LinkedDictionary":7,"./LinkedList":8,"./MultiDictionary":9,"./MultiRootTree":10,"./PriorityQueue":11,"./Queue":12,"./Set":13,"./Stack":14,"./arrays":15,"./util":16}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2xpYi9CU1RyZWUuanMiLCJkaXN0L2xpYi9CU1RyZWVLVi5qcyIsImRpc3QvbGliL0JhZy5qcyIsImRpc3QvbGliL0RpY3Rpb25hcnkuanMiLCJkaXN0L2xpYi9GYWN0b3J5RGljdGlvbmFyeS5qcyIsImRpc3QvbGliL0hlYXAuanMiLCJkaXN0L2xpYi9MaW5rZWREaWN0aW9uYXJ5LmpzIiwiZGlzdC9saWIvTGlua2VkTGlzdC5qcyIsImRpc3QvbGliL011bHRpRGljdGlvbmFyeS5qcyIsImRpc3QvbGliL011bHRpUm9vdFRyZWUuanMiLCJkaXN0L2xpYi9Qcmlvcml0eVF1ZXVlLmpzIiwiZGlzdC9saWIvUXVldWUuanMiLCJkaXN0L2xpYi9TZXQuanMiLCJkaXN0L2xpYi9TdGFjay5qcyIsImRpc3QvbGliL2FycmF5cy5qcyIsImRpc3QvbGliL3V0aWwuanMiLCJkaXN0L2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9aQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNVhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEJTVHJlZUtWXzEgPSByZXF1aXJlKFwiLi9CU1RyZWVLVlwiKTtcbi8qKlxuICogU3BlY2lhbC1jYXNlIG9mIHRoZSBiaW5hcnkgc2VhcmNoIHRyZWUgaW4gd2hpY2ggdGhlIHNlYXJjaCBrZXkgaXMgZXF1YWwgdG8gdGhlIGVsZW1lbnQgdHlwZS5cbiAqIFRoaXMgZGVmaW5pdGlvbiBpcyBzdWl0YWJsZSB3aGVuIHRoZSBlbGVtZW50IHR5cGUgY2FuIG5vdCBiZSBzcGxpdCBiZXR3ZWVuIHdoYXQgZGVmaW5lcyBpdHMgb3JkZXJcbiAqIGFuZCB3aGF0IGRvZXMgbm90IChlZy4gcHJpbWl0aXZlIHR5cGVzIGFzIG9wcG9zZWQgdG8gaW5kZXhlZCByZWNvcmRzKS5cbiAqXG4gKiBUaGUgdGFibGUgYmVsb3cgc2hvd3Mgc29tZSB1c2UtY2FzZSBleGFtcGxlcyBmb3IgYm90aCBpbnRlcmZhY2VzOlxuICpcbiAqICAgICAgICAgICBlbGVtZW50IHR5cGUgICAgICAgICAgICAgIHwgIG1vc3Qgc3VpdGFibGUgaW50ZXJmYWNlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogICAgbnVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgQlNUcmVlPG51bWJlcj5cbiAqICAgIHN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEJTVHJlZTxzdHJpbmc+XG4gKiB7IG9yZGVyOiBudW1iZXIsIGRhdGE6IHN0cmluZyB9ICAgICB8ICBCU1RyZWVLVjx7b3JkZXI6IG51bWJlcn0sIHtvcmRlcjogbnVtYmVyLCBkYXRhOiBzdHJpbmd9PlxuICpcbiAqIEBzZWUgQlNUcmVlS1ZcbiAqL1xudmFyIEJTVHJlZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQlNUcmVlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJTVHJlZSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gQlNUcmVlO1xufShCU1RyZWVLVl8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEJTVHJlZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJTVHJlZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbnZhciBRdWV1ZV8xID0gcmVxdWlyZShcIi4vUXVldWVcIik7XG4vKipcbiAqIEdlbmVyYWwgYmluYXJ5IHNlYXJjaCB0cmVlIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIFRoaXMgaW50ZXJmYWNlIGFsbG93cyBvbmUgdG8gc2VhcmNoIGVsZW1lbnRzIHVzaW5nIGEgc3Vic2V0IG9mIHRoZWlyIGF0dHJpYnV0ZXMgKHRodXMgdGhlXG4gKiB0cmVlIGNhbiBiZSB1c2VkIGFzIGFuIGluZGV4IGZvciBjb21wbGV4IG9iamVjdHMpLlxuICogVGhlIGF0dHJpYnV0ZXMgcmVxdWlyZWQgdG8gZGVmaW5lIGFuIG9yZGVyaW5nIGluIHRoZSB0cmVlIG11c3QgYmUgZGVmaW5lZCBpbiB0aGUgdHlwZSBLLlxuICogQW55IGFkZGl0aW9uYWwgYXR0cmlidXRlIG11c3QgYmUgZGVmaW5lZCBpbiB0aGUgdHlwZSBWLlxuICpcbiAqIEBzZWUgQlNUcmVlXG4gKi9cbnZhciBCU1RyZWVLViA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGVtcHR5IGJpbmFyeSBzZWFyY2ggdHJlZS5cbiAgICAgKiBAY2xhc3MgPHA+QSBiaW5hcnkgc2VhcmNoIHRyZWUgaXMgYSBiaW5hcnkgdHJlZSBpbiB3aGljaCBlYWNoXG4gICAgICogaW50ZXJuYWwgbm9kZSBzdG9yZXMgYW4gZWxlbWVudCBzdWNoIHRoYXQgdGhlIGVsZW1lbnRzIHN0b3JlZCBpbiB0aGVcbiAgICAgKiBsZWZ0IHN1YnRyZWUgYXJlIGxlc3MgdGhhbiBpdCBhbmQgdGhlIGVsZW1lbnRzXG4gICAgICogc3RvcmVkIGluIHRoZSByaWdodCBzdWJ0cmVlIGFyZSBncmVhdGVyLjwvcD5cbiAgICAgKiA8cD5Gb3JtYWxseSwgYSBiaW5hcnkgc2VhcmNoIHRyZWUgaXMgYSBub2RlLWJhc2VkIGJpbmFyeSB0cmVlIGRhdGEgc3RydWN0dXJlIHdoaWNoXG4gICAgICogaGFzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczo8L3A+XG4gICAgICogPHVsPlxuICAgICAqIDxsaT5UaGUgbGVmdCBzdWJ0cmVlIG9mIGEgbm9kZSBjb250YWlucyBvbmx5IG5vZGVzIHdpdGggZWxlbWVudHMgbGVzc1xuICAgICAqIHRoYW4gdGhlIG5vZGUncyBlbGVtZW50PC9saT5cbiAgICAgKiA8bGk+VGhlIHJpZ2h0IHN1YnRyZWUgb2YgYSBub2RlIGNvbnRhaW5zIG9ubHkgbm9kZXMgd2l0aCBlbGVtZW50cyBncmVhdGVyXG4gICAgICogdGhhbiB0aGUgbm9kZSdzIGVsZW1lbnQ8L2xpPlxuICAgICAqIDxsaT5Cb3RoIHRoZSBsZWZ0IGFuZCByaWdodCBzdWJ0cmVlcyBtdXN0IGFsc28gYmUgYmluYXJ5IHNlYXJjaCB0cmVlcy48L2xpPlxuICAgICAqIDwvdWw+XG4gICAgICogPHA+SWYgdGhlIGluc2VydGVkIGVsZW1lbnRzIGFyZSBjdXN0b20gb2JqZWN0cyBhIGNvbXBhcmUgZnVuY3Rpb24gbXVzdFxuICAgICAqIGJlIHByb3ZpZGVkIGF0IGNvbnN0cnVjdGlvbiB0aW1lLCBvdGhlcndpc2UgdGhlIDw9LCA9PT0gYW5kID49IG9wZXJhdG9ycyBhcmVcbiAgICAgKiB1c2VkIHRvIGNvbXBhcmUgZWxlbWVudHMuIEV4YW1wbGU6PC9wPlxuICAgICAqIDxwcmU+XG4gICAgICogZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XG4gICAgICogIGlmIChhIGlzIGxlc3MgdGhhbiBiIGJ5IHNvbWUgb3JkZXJpbmcgY3JpdGVyaW9uKSB7XG4gICAgICogICAgIHJldHVybiAtMTtcbiAgICAgKiAgfSBpZiAoYSBpcyBncmVhdGVyIHRoYW4gYiBieSB0aGUgb3JkZXJpbmcgY3JpdGVyaW9uKSB7XG4gICAgICogICAgIHJldHVybiAxO1xuICAgICAqICB9XG4gICAgICogIC8vIGEgbXVzdCBiZSBlcXVhbCB0byBiXG4gICAgICogIHJldHVybiAwO1xuICAgICAqIH1cbiAgICAgKiA8L3ByZT5cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpOm51bWJlcj19IGNvbXBhcmVGdW5jdGlvbiBvcHRpb25hbFxuICAgICAqIGZ1bmN0aW9uIHVzZWQgdG8gY29tcGFyZSB0d28gZWxlbWVudHMuIE11c3QgcmV0dXJuIGEgbmVnYXRpdmUgaW50ZWdlcixcbiAgICAgKiB6ZXJvLCBvciBhIHBvc2l0aXZlIGludGVnZXIgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGxlc3MgdGhhbiwgZXF1YWwgdG8sXG4gICAgICogb3IgZ3JlYXRlciB0aGFuIHRoZSBzZWNvbmQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gQlNUcmVlS1YoY29tcGFyZUZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IG51bGw7XG4gICAgICAgIHRoaXMuY29tcGFyZSA9IGNvbXBhcmVGdW5jdGlvbiB8fCB1dGlsLmRlZmF1bHRDb21wYXJlO1xuICAgICAgICB0aGlzLm5FbGVtZW50cyA9IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIHNwZWNpZmllZCBlbGVtZW50IHRvIHRoaXMgdHJlZSBpZiBpdCBpcyBub3QgYWxyZWFkeSBwcmVzZW50LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIGluc2VydC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgdHJlZSBkaWQgbm90IGFscmVhZHkgY29udGFpbiB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmICh1dGlsLmlzVW5kZWZpbmVkKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaW5zZXJ0Tm9kZSh0aGlzLmNyZWF0ZU5vZGUoZWxlbWVudCkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm5FbGVtZW50cysrO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgb2YgdGhlIGVsZW1lbnRzIGZyb20gdGhpcyB0cmVlLlxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yb290ID0gbnVsbDtcbiAgICAgICAgdGhpcy5uRWxlbWVudHMgPSAwO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgdHJlZSBjb250YWlucyBubyBlbGVtZW50cy5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgdHJlZSBjb250YWlucyBubyBlbGVtZW50cy5cbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubkVsZW1lbnRzID09PSAwO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoaXMgdHJlZS5cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhpcyB0cmVlLlxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uRWxlbWVudHM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyB0cmVlIGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBlbGVtZW50IHRvIHNlYXJjaCBmb3IuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGlzIHRyZWUgY29udGFpbnMgdGhlIHNwZWNpZmllZCBlbGVtZW50LFxuICAgICAqIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAodXRpbC5pc1VuZGVmaW5lZChlbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaE5vZGUodGhpcy5yb290LCBlbGVtZW50KSAhPT0gbnVsbDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIExvb2tzIGZvciB0aGUgdmFsdWUgd2l0aCB0aGUgcHJvdmlkZWQgc2VhcmNoIGtleS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBUaGUga2V5IHRvIGxvb2sgZm9yXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgdmFsdWUgZm91bmQgb3IgdW5kZWZpbmVkIGlmIGl0IHdhcyBub3QgZm91bmQuXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLnNlYXJjaCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciByZXQgPSB0aGlzLnNlYXJjaE5vZGUodGhpcy5yb290LCBlbGVtZW50KTtcbiAgICAgICAgaWYgKHJldCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0LmVsZW1lbnQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBzcGVjaWZpZWQgZWxlbWVudCBmcm9tIHRoaXMgdHJlZSBpZiBpdCBpcyBwcmVzZW50LlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhpcyB0cmVlIGNvbnRhaW5lZCB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5zZWFyY2hOb2RlKHRoaXMucm9vdCwgZWxlbWVudCk7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVOb2RlKG5vZGUpO1xuICAgICAgICB0aGlzLm5FbGVtZW50cy0tO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBvbmNlIGZvciBlYWNoIGVsZW1lbnQgcHJlc2VudCBpbiB0aGlzIHRyZWUgaW5cbiAgICAgKiBpbi1vcmRlci5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6Kn0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSwgaXQgaXMgaW52b2tlZCB3aXRoIG9uZVxuICAgICAqIGFyZ3VtZW50OiB0aGUgZWxlbWVudCB2YWx1ZSwgdG8gYnJlYWsgdGhlIGl0ZXJhdGlvbiB5b3UgY2FuIG9wdGlvbmFsbHkgcmV0dXJuIGZhbHNlLlxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5pbm9yZGVyVHJhdmVyc2FsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaW5vcmRlclRyYXZlcnNhbEF1eCh0aGlzLnJvb3QsIGNhbGxiYWNrLCB7XG4gICAgICAgICAgICBzdG9wOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBvbmNlIGZvciBlYWNoIGVsZW1lbnQgcHJlc2VudCBpbiB0aGlzIHRyZWUgaW4gcHJlLW9yZGVyLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0KToqfSBjYWxsYmFjayBmdW5jdGlvbiB0byBleGVjdXRlLCBpdCBpcyBpbnZva2VkIHdpdGggb25lXG4gICAgICogYXJndW1lbnQ6IHRoZSBlbGVtZW50IHZhbHVlLCB0byBicmVhayB0aGUgaXRlcmF0aW9uIHlvdSBjYW4gb3B0aW9uYWxseSByZXR1cm4gZmFsc2UuXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLnByZW9yZGVyVHJhdmVyc2FsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucHJlb3JkZXJUcmF2ZXJzYWxBdXgodGhpcy5yb290LCBjYWxsYmFjaywge1xuICAgICAgICAgICAgc3RvcDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gb25jZSBmb3IgZWFjaCBlbGVtZW50IHByZXNlbnQgaW4gdGhpcyB0cmVlIGluIHBvc3Qtb3JkZXIuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QpOip9IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUsIGl0IGlzIGludm9rZWQgd2l0aCBvbmVcbiAgICAgKiBhcmd1bWVudDogdGhlIGVsZW1lbnQgdmFsdWUsIHRvIGJyZWFrIHRoZSBpdGVyYXRpb24geW91IGNhbiBvcHRpb25hbGx5IHJldHVybiBmYWxzZS5cbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUucG9zdG9yZGVyVHJhdmVyc2FsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucG9zdG9yZGVyVHJhdmVyc2FsQXV4KHRoaXMucm9vdCwgY2FsbGJhY2ssIHtcbiAgICAgICAgICAgIHN0b3A6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIG9uY2UgZm9yIGVhY2ggZWxlbWVudCBwcmVzZW50IGluIHRoaXMgdHJlZSBpblxuICAgICAqIGxldmVsLW9yZGVyLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0KToqfSBjYWxsYmFjayBmdW5jdGlvbiB0byBleGVjdXRlLCBpdCBpcyBpbnZva2VkIHdpdGggb25lXG4gICAgICogYXJndW1lbnQ6IHRoZSBlbGVtZW50IHZhbHVlLCB0byBicmVhayB0aGUgaXRlcmF0aW9uIHlvdSBjYW4gb3B0aW9uYWxseSByZXR1cm4gZmFsc2UuXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLmxldmVsVHJhdmVyc2FsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMubGV2ZWxUcmF2ZXJzYWxBdXgodGhpcy5yb290LCBjYWxsYmFjayk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtaW5pbXVtIGVsZW1lbnQgb2YgdGhpcyB0cmVlLlxuICAgICAqIEByZXR1cm4geyp9IHRoZSBtaW5pbXVtIGVsZW1lbnQgb2YgdGhpcyB0cmVlIG9yIHVuZGVmaW5lZCBpZiB0aGlzIHRyZWUgaXNcbiAgICAgKiBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUubWluaW11bSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbXB0eSgpIHx8IHRoaXMucm9vdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5taW5pbXVtQXV4KHRoaXMucm9vdCkuZWxlbWVudDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1heGltdW0gZWxlbWVudCBvZiB0aGlzIHRyZWUuXG4gICAgICogQHJldHVybiB7Kn0gdGhlIG1heGltdW0gZWxlbWVudCBvZiB0aGlzIHRyZWUgb3IgdW5kZWZpbmVkIGlmIHRoaXMgdHJlZSBpc1xuICAgICAqIGlzIGVtcHR5LlxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5tYXhpbXVtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0VtcHR5KCkgfHwgdGhpcy5yb290ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1heGltdW1BdXgodGhpcy5yb290KS5lbGVtZW50O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIG9uY2UgZm9yIGVhY2ggZWxlbWVudCBwcmVzZW50IGluIHRoaXMgdHJlZSBpbiBpbm9yZGVyLlxuICAgICAqIEVxdWl2YWxlbnQgdG8gaW5vcmRlclRyYXZlcnNhbC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6Kn0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSwgaXQgaXNcbiAgICAgKiBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OiB0aGUgZWxlbWVudCB2YWx1ZSwgdG8gYnJlYWsgdGhlIGl0ZXJhdGlvbiB5b3UgY2FuXG4gICAgICogb3B0aW9uYWxseSByZXR1cm4gZmFsc2UuXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5pbm9yZGVyVHJhdmVyc2FsKGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIGVsZW1lbnRzIGluIHRoaXMgdHJlZSBpbiBpbi1vcmRlci5cbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIGVsZW1lbnRzIGluIHRoaXMgdHJlZSBpbiBpbi1vcmRlci5cbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gW107XG4gICAgICAgIHRoaXMuaW5vcmRlclRyYXZlcnNhbChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgYXJyYXkucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaGVpZ2h0IG9mIHRoaXMgdHJlZS5cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBoZWlnaHQgb2YgdGhpcyB0cmVlIG9yIC0xIGlmIGlzIGVtcHR5LlxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5oZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlaWdodEF1eCh0aGlzLnJvb3QpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUuc2VhcmNoTm9kZSA9IGZ1bmN0aW9uIChub2RlLCBlbGVtZW50KSB7XG4gICAgICAgIHZhciBjbXAgPSAxO1xuICAgICAgICB3aGlsZSAobm9kZSAhPT0gbnVsbCAmJiBjbXAgIT09IDApIHtcbiAgICAgICAgICAgIGNtcCA9IHRoaXMuY29tcGFyZShlbGVtZW50LCBub2RlLmVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKGNtcCA8IDApIHtcbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5sZWZ0Q2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjbXAgPiAwKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucmlnaHRDaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLnRyYW5zcGxhbnQgPSBmdW5jdGlvbiAobjEsIG4yKSB7XG4gICAgICAgIGlmIChuMS5wYXJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IG4yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG4xID09PSBuMS5wYXJlbnQubGVmdENoKSB7XG4gICAgICAgICAgICBuMS5wYXJlbnQubGVmdENoID0gbjI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuMS5wYXJlbnQucmlnaHRDaCA9IG4yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuMiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbjIucGFyZW50ID0gbjEucGFyZW50O1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5yZW1vdmVOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUubGVmdENoID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zcGxhbnQobm9kZSwgbm9kZS5yaWdodENoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChub2RlLnJpZ2h0Q2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNwbGFudChub2RlLCBub2RlLmxlZnRDaCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgeSA9IHRoaXMubWluaW11bUF1eChub2RlLnJpZ2h0Q2gpO1xuICAgICAgICAgICAgaWYgKHkucGFyZW50ICE9PSBub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc3BsYW50KHksIHkucmlnaHRDaCk7XG4gICAgICAgICAgICAgICAgeS5yaWdodENoID0gbm9kZS5yaWdodENoO1xuICAgICAgICAgICAgICAgIHkucmlnaHRDaC5wYXJlbnQgPSB5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50cmFuc3BsYW50KG5vZGUsIHkpO1xuICAgICAgICAgICAgeS5sZWZ0Q2ggPSBub2RlLmxlZnRDaDtcbiAgICAgICAgICAgIHkubGVmdENoLnBhcmVudCA9IHk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLmlub3JkZXJUcmF2ZXJzYWxBdXggPSBmdW5jdGlvbiAobm9kZSwgY2FsbGJhY2ssIHNpZ25hbCkge1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCB8fCBzaWduYWwuc3RvcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5vcmRlclRyYXZlcnNhbEF1eChub2RlLmxlZnRDaCwgY2FsbGJhY2ssIHNpZ25hbCk7XG4gICAgICAgIGlmIChzaWduYWwuc3RvcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNpZ25hbC5zdG9wID0gY2FsbGJhY2sobm9kZS5lbGVtZW50KSA9PT0gZmFsc2U7XG4gICAgICAgIGlmIChzaWduYWwuc3RvcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5vcmRlclRyYXZlcnNhbEF1eChub2RlLnJpZ2h0Q2gsIGNhbGxiYWNrLCBzaWduYWwpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUubGV2ZWxUcmF2ZXJzYWxBdXggPSBmdW5jdGlvbiAobm9kZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gbmV3IFF1ZXVlXzEuZGVmYXVsdCgpO1xuICAgICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcXVldWUuZW5xdWV1ZShub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gcXVldWUuZGVxdWV1ZSgpIHx8IG51bGw7XG4gICAgICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayhub2RlLmVsZW1lbnQpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlLmxlZnRDaCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLmVucXVldWUobm9kZS5sZWZ0Q2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vZGUucmlnaHRDaCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLmVucXVldWUobm9kZS5yaWdodENoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUgPSBxdWV1ZS5kZXF1ZXVlKCkgfHwgbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUucHJlb3JkZXJUcmF2ZXJzYWxBdXggPSBmdW5jdGlvbiAobm9kZSwgY2FsbGJhY2ssIHNpZ25hbCkge1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCB8fCBzaWduYWwuc3RvcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNpZ25hbC5zdG9wID0gY2FsbGJhY2sobm9kZS5lbGVtZW50KSA9PT0gZmFsc2U7XG4gICAgICAgIGlmIChzaWduYWwuc3RvcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlb3JkZXJUcmF2ZXJzYWxBdXgobm9kZS5sZWZ0Q2gsIGNhbGxiYWNrLCBzaWduYWwpO1xuICAgICAgICBpZiAoc2lnbmFsLnN0b3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZW9yZGVyVHJhdmVyc2FsQXV4KG5vZGUucmlnaHRDaCwgY2FsbGJhY2ssIHNpZ25hbCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5wb3N0b3JkZXJUcmF2ZXJzYWxBdXggPSBmdW5jdGlvbiAobm9kZSwgY2FsbGJhY2ssIHNpZ25hbCkge1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCB8fCBzaWduYWwuc3RvcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9zdG9yZGVyVHJhdmVyc2FsQXV4KG5vZGUubGVmdENoLCBjYWxsYmFjaywgc2lnbmFsKTtcbiAgICAgICAgaWYgKHNpZ25hbC5zdG9wKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3N0b3JkZXJUcmF2ZXJzYWxBdXgobm9kZS5yaWdodENoLCBjYWxsYmFjaywgc2lnbmFsKTtcbiAgICAgICAgaWYgKHNpZ25hbC5zdG9wKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2lnbmFsLnN0b3AgPSBjYWxsYmFjayhub2RlLmVsZW1lbnQpID09PSBmYWxzZTtcbiAgICB9O1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5taW5pbXVtQXV4ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgd2hpbGUgKG5vZGUgIT0gbnVsbCAmJiBub2RlLmxlZnRDaCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUubGVmdENoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gICAgQlNUcmVlS1YucHJvdG90eXBlLm1heGltdW1BdXggPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB3aGlsZSAobm9kZSAhPSBudWxsICYmIG5vZGUucmlnaHRDaCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUucmlnaHRDaDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLmhlaWdodEF1eCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMuaGVpZ2h0QXV4KG5vZGUubGVmdENoKSwgdGhpcy5oZWlnaHRBdXgobm9kZS5yaWdodENoKSkgKyAxO1xuICAgIH07XG4gICAgLypcbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUuaW5zZXJ0Tm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBudWxsO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLnJvb3Q7XG4gICAgICAgIHdoaWxlIChwb3NpdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIGNtcCA9IHRoaXMuY29tcGFyZShub2RlLmVsZW1lbnQsIHBvc2l0aW9uLmVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKGNtcCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY21wIDwgMCkge1xuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24ubGVmdENoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcG9zaXRpb247XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbi5yaWdodENoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG5vZGUucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAvLyB0cmVlIGlzIGVtcHR5XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBub2RlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY29tcGFyZShub2RlLmVsZW1lbnQsIHBhcmVudC5lbGVtZW50KSA8IDApIHtcbiAgICAgICAgICAgIHBhcmVudC5sZWZ0Q2ggPSBub2RlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50LnJpZ2h0Q2ggPSBub2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUuY3JlYXRlTm9kZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICAgICAgbGVmdENoOiBudWxsLFxuICAgICAgICAgICAgcmlnaHRDaDogbnVsbCxcbiAgICAgICAgICAgIHBhcmVudDogbnVsbFxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIEJTVHJlZUtWO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEJTVHJlZUtWO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QlNUcmVlS1YuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG52YXIgRGljdGlvbmFyeV8xID0gcmVxdWlyZShcIi4vRGljdGlvbmFyeVwiKTtcbnZhciBTZXRfMSA9IHJlcXVpcmUoXCIuL1NldFwiKTtcbnZhciBCYWcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBlbXB0eSBiYWcuXG4gICAgICogQGNsYXNzIDxwPkEgYmFnIGlzIGEgc3BlY2lhbCBraW5kIG9mIHNldCBpbiB3aGljaCBtZW1iZXJzIGFyZVxuICAgICAqIGFsbG93ZWQgdG8gYXBwZWFyIG1vcmUgdGhhbiBvbmNlLjwvcD5cbiAgICAgKiA8cD5JZiB0aGUgaW5zZXJ0ZWQgZWxlbWVudHMgYXJlIGN1c3RvbSBvYmplY3RzIGEgZnVuY3Rpb25cbiAgICAgKiB3aGljaCBjb252ZXJ0cyBlbGVtZW50cyB0byB1bmlxdWUgc3RyaW5ncyBtdXN0IGJlIHByb3ZpZGVkLiBFeGFtcGxlOjwvcD5cbiAgICAgKlxuICAgICAqIDxwcmU+XG4gICAgICogZnVuY3Rpb24gcGV0VG9TdHJpbmcocGV0KSB7XG4gICAgICogIHJldHVybiBwZXQubmFtZTtcbiAgICAgKiB9XG4gICAgICogPC9wcmU+XG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6c3RyaW5nPX0gdG9TdHJGdW5jdGlvbiBvcHRpb25hbCBmdW5jdGlvbiB1c2VkXG4gICAgICogdG8gY29udmVydCBlbGVtZW50cyB0byBzdHJpbmdzLiBJZiB0aGUgZWxlbWVudHMgYXJlbid0IHN0cmluZ3Mgb3IgaWYgdG9TdHJpbmcoKVxuICAgICAqIGlzIG5vdCBhcHByb3ByaWF0ZSwgYSBjdXN0b20gZnVuY3Rpb24gd2hpY2ggcmVjZWl2ZXMgYW4gb2JqZWN0IGFuZCByZXR1cm5zIGFcbiAgICAgKiB1bmlxdWUgc3RyaW5nIG11c3QgYmUgcHJvdmlkZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gQmFnKHRvU3RyRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy50b1N0ckYgPSB0b1N0ckZ1bmN0aW9uIHx8IHV0aWwuZGVmYXVsdFRvU3RyaW5nO1xuICAgICAgICB0aGlzLmRpY3Rpb25hcnkgPSBuZXcgRGljdGlvbmFyeV8xLmRlZmF1bHQodGhpcy50b1N0ckYpO1xuICAgICAgICB0aGlzLm5FbGVtZW50cyA9IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgbkNvcGllcyBvZiB0aGUgc3BlY2lmaWVkIG9iamVjdCB0byB0aGlzIGJhZy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBlbGVtZW50IHRvIGFkZC5cbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG5Db3BpZXMgdGhlIG51bWJlciBvZiBjb3BpZXMgdG8gYWRkLCBpZiB0aGlzIGFyZ3VtZW50IGlzXG4gICAgICogdW5kZWZpbmVkIDEgY29weSBpcyBhZGRlZC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIHVubGVzcyBlbGVtZW50IGlzIHVuZGVmaW5lZC5cbiAgICAgKi9cbiAgICBCYWcucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChlbGVtZW50LCBuQ29waWVzKSB7XG4gICAgICAgIGlmIChuQ29waWVzID09PSB2b2lkIDApIHsgbkNvcGllcyA9IDE7IH1cbiAgICAgICAgaWYgKHV0aWwuaXNVbmRlZmluZWQoZWxlbWVudCkgfHwgbkNvcGllcyA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZWxlbWVudCxcbiAgICAgICAgICAgICAgICBjb3BpZXM6IG5Db3BpZXNcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmRpY3Rpb25hcnkuc2V0VmFsdWUoZWxlbWVudCwgbm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpY3Rpb25hcnkuZ2V0VmFsdWUoZWxlbWVudCkuY29waWVzICs9IG5Db3BpZXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uRWxlbWVudHMgKz0gbkNvcGllcztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb3VudHMgdGhlIG51bWJlciBvZiBjb3BpZXMgb2YgdGhlIHNwZWNpZmllZCBvYmplY3QgaW4gdGhpcyBiYWcuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgdGhlIG9iamVjdCB0byBzZWFyY2ggZm9yLi5cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW1iZXIgb2YgY29waWVzIG9mIHRoZSBvYmplY3QsIDAgaWYgbm90IGZvdW5kXG4gICAgICovXG4gICAgQmFnLnByb3RvdHlwZS5jb3VudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaWN0aW9uYXJ5LmdldFZhbHVlKGVsZW1lbnQpLmNvcGllcztcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgYmFnIGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBlbGVtZW50IHRvIHNlYXJjaCBmb3IuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGlzIGJhZyBjb250YWlucyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQsXG4gICAgICogZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIEJhZy5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaWN0aW9uYXJ5LmNvbnRhaW5zS2V5KGVsZW1lbnQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBuQ29waWVzIG9mIHRoZSBzcGVjaWZpZWQgb2JqZWN0IHRvIHRoaXMgYmFnLlxuICAgICAqIElmIHRoZSBudW1iZXIgb2YgY29waWVzIHRvIHJlbW92ZSBpcyBncmVhdGVyIHRoYW4gdGhlIGFjdHVhbCBudW1iZXJcbiAgICAgKiBvZiBjb3BpZXMgaW4gdGhlIEJhZywgYWxsIGNvcGllcyBhcmUgcmVtb3ZlZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBlbGVtZW50IHRvIHJlbW92ZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG5Db3BpZXMgdGhlIG51bWJlciBvZiBjb3BpZXMgdG8gcmVtb3ZlLCBpZiB0aGlzIGFyZ3VtZW50IGlzXG4gICAgICogdW5kZWZpbmVkIDEgY29weSBpcyByZW1vdmVkLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgYXQgbGVhc3QgMSBlbGVtZW50IHdhcyByZW1vdmVkLlxuICAgICAqL1xuICAgIEJhZy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGVsZW1lbnQsIG5Db3BpZXMpIHtcbiAgICAgICAgaWYgKG5Db3BpZXMgPT09IHZvaWQgMCkgeyBuQ29waWVzID0gMTsgfVxuICAgICAgICBpZiAodXRpbC5pc1VuZGVmaW5lZChlbGVtZW50KSB8fCBuQ29waWVzIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gdGhpcy5kaWN0aW9uYXJ5LmdldFZhbHVlKGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKG5Db3BpZXMgPiBub2RlLmNvcGllcykge1xuICAgICAgICAgICAgICAgIHRoaXMubkVsZW1lbnRzIC09IG5vZGUuY29waWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uRWxlbWVudHMgLT0gbkNvcGllcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUuY29waWVzIC09IG5Db3BpZXM7XG4gICAgICAgICAgICBpZiAobm9kZS5jb3BpZXMgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdGlvbmFyeS5yZW1vdmUoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgZWxlbWVudHMgaW4gdGhpcyBiaWcgaW4gYXJiaXRyYXJ5IG9yZGVyLFxuICAgICAqIGluY2x1ZGluZyBtdWx0aXBsZSBjb3BpZXMuXG4gICAgICogQHJldHVybiB7QXJyYXl9IGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBlbGVtZW50cyBpbiB0aGlzIGJhZy5cbiAgICAgKi9cbiAgICBCYWcucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhID0gW107XG4gICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLmRpY3Rpb25hcnkudmFsdWVzKCk7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgdmFsdWVzXzEgPSB2YWx1ZXM7IF9pIDwgdmFsdWVzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IHZhbHVlc18xW19pXTtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gbm9kZS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBjb3BpZXMgPSBub2RlLmNvcGllcztcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY29waWVzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBhLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc2V0IG9mIHVuaXF1ZSBlbGVtZW50cyBpbiB0aGlzIGJhZy5cbiAgICAgKiBAcmV0dXJuIHtjb2xsZWN0aW9ucy5TZXQ8VD59IGEgc2V0IG9mIHVuaXF1ZSBlbGVtZW50cyBpbiB0aGlzIGJhZy5cbiAgICAgKi9cbiAgICBCYWcucHJvdG90eXBlLnRvU2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdG9yZXQgPSBuZXcgU2V0XzEuZGVmYXVsdCh0aGlzLnRvU3RyRik7XG4gICAgICAgIHZhciBlbGVtZW50cyA9IHRoaXMuZGljdGlvbmFyeS52YWx1ZXMoKTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBlbGVtZW50c18xID0gZWxlbWVudHM7IF9pIDwgZWxlbWVudHNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBlbGUgPSBlbGVtZW50c18xW19pXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGVsZS52YWx1ZTtcbiAgICAgICAgICAgIHRvcmV0LmFkZCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvcmV0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIG9uY2UgZm9yIGVhY2ggZWxlbWVudFxuICAgICAqIHByZXNlbnQgaW4gdGhpcyBiYWcsIGluY2x1ZGluZyBtdWx0aXBsZSBjb3BpZXMuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QpOip9IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUsIGl0IGlzXG4gICAgICogaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDogdGhlIGVsZW1lbnQuIFRvIGJyZWFrIHRoZSBpdGVyYXRpb24geW91IGNhblxuICAgICAqIG9wdGlvbmFsbHkgcmV0dXJuIGZhbHNlLlxuICAgICAqL1xuICAgIEJhZy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmRpY3Rpb25hcnkuZm9yRWFjaChmdW5jdGlvbiAoaywgdikge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdi52YWx1ZTtcbiAgICAgICAgICAgIHZhciBjb3BpZXMgPSB2LmNvcGllcztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29waWVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sodmFsdWUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoaXMgYmFnLlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGlzIGJhZy5cbiAgICAgKi9cbiAgICBCYWcucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5FbGVtZW50cztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGJhZyBjb250YWlucyBubyBlbGVtZW50cy5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgYmFnIGNvbnRhaW5zIG5vIGVsZW1lbnRzLlxuICAgICAqL1xuICAgIEJhZy5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubkVsZW1lbnRzID09PSAwO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgb2YgdGhlIGVsZW1lbnRzIGZyb20gdGhpcyBiYWcuXG4gICAgICovXG4gICAgQmFnLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5uRWxlbWVudHMgPSAwO1xuICAgICAgICB0aGlzLmRpY3Rpb25hcnkuY2xlYXIoKTtcbiAgICB9O1xuICAgIHJldHVybiBCYWc7XG59KCkpOyAvLyBFbmQgb2YgYmFnXG5leHBvcnRzLmRlZmF1bHQgPSBCYWc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1CYWcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG52YXIgRGljdGlvbmFyeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGVtcHR5IGRpY3Rpb25hcnkuXG4gICAgICogQGNsYXNzIDxwPkRpY3Rpb25hcmllcyBtYXAga2V5cyB0byB2YWx1ZXM7IGVhY2gga2V5IGNhbiBtYXAgdG8gYXQgbW9zdCBvbmUgdmFsdWUuXG4gICAgICogVGhpcyBpbXBsZW1lbnRhdGlvbiBhY2NlcHRzIGFueSBraW5kIG9mIG9iamVjdHMgYXMga2V5cy48L3A+XG4gICAgICpcbiAgICAgKiA8cD5JZiB0aGUga2V5cyBhcmUgY3VzdG9tIG9iamVjdHMgYSBmdW5jdGlvbiB3aGljaCBjb252ZXJ0cyBrZXlzIHRvIHVuaXF1ZVxuICAgICAqIHN0cmluZ3MgbXVzdCBiZSBwcm92aWRlZC4gRXhhbXBsZTo8L3A+XG4gICAgICogPHByZT5cbiAgICAgKiBmdW5jdGlvbiBwZXRUb1N0cmluZyhwZXQpIHtcbiAgICAgKiAgcmV0dXJuIHBldC5uYW1lO1xuICAgICAqIH1cbiAgICAgKiA8L3ByZT5cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6c3RyaW5nPX0gdG9TdHJGdW5jdGlvbiBvcHRpb25hbCBmdW5jdGlvbiB1c2VkXG4gICAgICogdG8gY29udmVydCBrZXlzIHRvIHN0cmluZ3MuIElmIHRoZSBrZXlzIGFyZW4ndCBzdHJpbmdzIG9yIGlmIHRvU3RyaW5nKClcbiAgICAgKiBpcyBub3QgYXBwcm9wcmlhdGUsIGEgY3VzdG9tIGZ1bmN0aW9uIHdoaWNoIHJlY2VpdmVzIGEga2V5IGFuZCByZXR1cm5zIGFcbiAgICAgKiB1bmlxdWUgc3RyaW5nIG11c3QgYmUgcHJvdmlkZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gRGljdGlvbmFyeSh0b1N0ckZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMudGFibGUgPSB7fTtcbiAgICAgICAgdGhpcy5uRWxlbWVudHMgPSAwO1xuICAgICAgICB0aGlzLnRvU3RyID0gdG9TdHJGdW5jdGlvbiB8fCB1dGlsLmRlZmF1bHRUb1N0cmluZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgdG8gd2hpY2ggdGhpcyBkaWN0aW9uYXJ5IG1hcHMgdGhlIHNwZWNpZmllZCBrZXkuXG4gICAgICogUmV0dXJucyB1bmRlZmluZWQgaWYgdGhpcyBkaWN0aW9uYXJ5IGNvbnRhaW5zIG5vIG1hcHBpbmcgZm9yIHRoaXMga2V5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBrZXkga2V5IHdob3NlIGFzc29jaWF0ZWQgdmFsdWUgaXMgdG8gYmUgcmV0dXJuZWQuXG4gICAgICogQHJldHVybiB7Kn0gdGhlIHZhbHVlIHRvIHdoaWNoIHRoaXMgZGljdGlvbmFyeSBtYXBzIHRoZSBzcGVjaWZpZWQga2V5IG9yXG4gICAgICogdW5kZWZpbmVkIGlmIHRoZSBtYXAgY29udGFpbnMgbm8gbWFwcGluZyBmb3IgdGhpcyBrZXkuXG4gICAgICovXG4gICAgRGljdGlvbmFyeS5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBwYWlyID0gdGhpcy50YWJsZVsnJCcgKyB0aGlzLnRvU3RyKGtleSldO1xuICAgICAgICBpZiAodXRpbC5pc1VuZGVmaW5lZChwYWlyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFpci52YWx1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFzc29jaWF0ZXMgdGhlIHNwZWNpZmllZCB2YWx1ZSB3aXRoIHRoZSBzcGVjaWZpZWQga2V5IGluIHRoaXMgZGljdGlvbmFyeS5cbiAgICAgKiBJZiB0aGUgZGljdGlvbmFyeSBwcmV2aW91c2x5IGNvbnRhaW5lZCBhIG1hcHBpbmcgZm9yIHRoaXMga2V5LCB0aGUgb2xkXG4gICAgICogdmFsdWUgaXMgcmVwbGFjZWQgYnkgdGhlIHNwZWNpZmllZCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0ga2V5IGtleSB3aXRoIHdoaWNoIHRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgdG8gYmVcbiAgICAgKiBhc3NvY2lhdGVkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB2YWx1ZSB0byBiZSBhc3NvY2lhdGVkIHdpdGggdGhlIHNwZWNpZmllZCBrZXkuXG4gICAgICogQHJldHVybiB7Kn0gcHJldmlvdXMgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBzcGVjaWZpZWQga2V5LCBvciB1bmRlZmluZWQgaWZcbiAgICAgKiB0aGVyZSB3YXMgbm8gbWFwcGluZyBmb3IgdGhlIGtleSBvciBpZiB0aGUga2V5L3ZhbHVlIGFyZSB1bmRlZmluZWQuXG4gICAgICovXG4gICAgRGljdGlvbmFyeS5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodXRpbC5pc1VuZGVmaW5lZChrZXkpIHx8IHV0aWwuaXNVbmRlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXQ7XG4gICAgICAgIHZhciBrID0gJyQnICsgdGhpcy50b1N0cihrZXkpO1xuICAgICAgICB2YXIgcHJldmlvdXNFbGVtZW50ID0gdGhpcy50YWJsZVtrXTtcbiAgICAgICAgaWYgKHV0aWwuaXNVbmRlZmluZWQocHJldmlvdXNFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhpcy5uRWxlbWVudHMrKztcbiAgICAgICAgICAgIHJldCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldCA9IHByZXZpb3VzRWxlbWVudC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRhYmxlW2tdID0ge1xuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIG1hcHBpbmcgZm9yIHRoaXMga2V5IGZyb20gdGhpcyBkaWN0aW9uYXJ5IGlmIGl0IGlzIHByZXNlbnQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGtleSBrZXkgd2hvc2UgbWFwcGluZyBpcyB0byBiZSByZW1vdmVkIGZyb20gdGhlXG4gICAgICogZGljdGlvbmFyeS5cbiAgICAgKiBAcmV0dXJuIHsqfSBwcmV2aW91cyB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggc3BlY2lmaWVkIGtleSwgb3IgdW5kZWZpbmVkIGlmXG4gICAgICogdGhlcmUgd2FzIG5vIG1hcHBpbmcgZm9yIGtleS5cbiAgICAgKi9cbiAgICBEaWN0aW9uYXJ5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBrID0gJyQnICsgdGhpcy50b1N0cihrZXkpO1xuICAgICAgICB2YXIgcHJldmlvdXNFbGVtZW50ID0gdGhpcy50YWJsZVtrXTtcbiAgICAgICAgaWYgKCF1dGlsLmlzVW5kZWZpbmVkKHByZXZpb3VzRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnRhYmxlW2tdO1xuICAgICAgICAgICAgdGhpcy5uRWxlbWVudHMtLTtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91c0VsZW1lbnQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIGtleXMgaW4gdGhpcyBkaWN0aW9uYXJ5LlxuICAgICAqIEByZXR1cm4ge0FycmF5fSBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUga2V5cyBpbiB0aGlzIGRpY3Rpb25hcnkuXG4gICAgICovXG4gICAgRGljdGlvbmFyeS5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIG5hbWVfMSBpbiB0aGlzLnRhYmxlKSB7XG4gICAgICAgICAgICBpZiAodXRpbC5oYXModGhpcy50YWJsZSwgbmFtZV8xKSkge1xuICAgICAgICAgICAgICAgIHZhciBwYWlyID0gdGhpcy50YWJsZVtuYW1lXzFdO1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2gocGFpci5rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIHZhbHVlcyBpbiB0aGlzIGRpY3Rpb25hcnkuXG4gICAgICogQHJldHVybiB7QXJyYXl9IGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB2YWx1ZXMgaW4gdGhpcyBkaWN0aW9uYXJ5LlxuICAgICAqL1xuICAgIERpY3Rpb25hcnkucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIG5hbWVfMiBpbiB0aGlzLnRhYmxlKSB7XG4gICAgICAgICAgICBpZiAodXRpbC5oYXModGhpcy50YWJsZSwgbmFtZV8yKSkge1xuICAgICAgICAgICAgICAgIHZhciBwYWlyID0gdGhpcy50YWJsZVtuYW1lXzJdO1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2gocGFpci52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIG9uY2UgZm9yIGVhY2gga2V5LXZhbHVlIHBhaXJcbiAgICAgKiBwcmVzZW50IGluIHRoaXMgZGljdGlvbmFyeS5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpOip9IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUsIGl0IGlzXG4gICAgICogaW52b2tlZCB3aXRoIHR3byBhcmd1bWVudHM6IGtleSBhbmQgdmFsdWUuIFRvIGJyZWFrIHRoZSBpdGVyYXRpb24geW91IGNhblxuICAgICAqIG9wdGlvbmFsbHkgcmV0dXJuIGZhbHNlLlxuICAgICAqL1xuICAgIERpY3Rpb25hcnkucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZV8zIGluIHRoaXMudGFibGUpIHtcbiAgICAgICAgICAgIGlmICh1dGlsLmhhcyh0aGlzLnRhYmxlLCBuYW1lXzMpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhaXIgPSB0aGlzLnRhYmxlW25hbWVfM107XG4gICAgICAgICAgICAgICAgdmFyIHJldCA9IGNhbGxiYWNrKHBhaXIua2V5LCBwYWlyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAocmV0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBkaWN0aW9uYXJ5IGNvbnRhaW5zIGEgbWFwcGluZyBmb3IgdGhlIHNwZWNpZmllZCBrZXkuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGtleSBrZXkgd2hvc2UgcHJlc2VuY2UgaW4gdGhpcyBkaWN0aW9uYXJ5IGlzIHRvIGJlXG4gICAgICogdGVzdGVkLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhpcyBkaWN0aW9uYXJ5IGNvbnRhaW5zIGEgbWFwcGluZyBmb3IgdGhlXG4gICAgICogc3BlY2lmaWVkIGtleS5cbiAgICAgKi9cbiAgICBEaWN0aW9uYXJ5LnByb3RvdHlwZS5jb250YWluc0tleSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuICF1dGlsLmlzVW5kZWZpbmVkKHRoaXMuZ2V0VmFsdWUoa2V5KSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBtYXBwaW5ncyBmcm9tIHRoaXMgZGljdGlvbmFyeS5cbiAgICAgKiBAdGhpcyB7Y29sbGVjdGlvbnMuRGljdGlvbmFyeX1cbiAgICAgKi9cbiAgICBEaWN0aW9uYXJ5LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50YWJsZSA9IHt9O1xuICAgICAgICB0aGlzLm5FbGVtZW50cyA9IDA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2Yga2V5cyBpbiB0aGlzIGRpY3Rpb25hcnkuXG4gICAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgbnVtYmVyIG9mIGtleS12YWx1ZSBtYXBwaW5ncyBpbiB0aGlzIGRpY3Rpb25hcnkuXG4gICAgICovXG4gICAgRGljdGlvbmFyeS5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubkVsZW1lbnRzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgZGljdGlvbmFyeSBjb250YWlucyBubyBtYXBwaW5ncy5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgZGljdGlvbmFyeSBjb250YWlucyBubyBtYXBwaW5ncy5cbiAgICAgKi9cbiAgICBEaWN0aW9uYXJ5LnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uRWxlbWVudHMgPD0gMDtcbiAgICB9O1xuICAgIERpY3Rpb25hcnkucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdG9yZXQgPSAneyc7XG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAoaywgdikge1xuICAgICAgICAgICAgdG9yZXQgKz0gXCJcXG5cXHRcIiArIGsgKyBcIiA6IFwiICsgdjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0b3JldCArICdcXG59JztcbiAgICB9O1xuICAgIHJldHVybiBEaWN0aW9uYXJ5O1xufSgpKTsgLy8gRW5kIG9mIGRpY3Rpb25hcnlcbmV4cG9ydHMuZGVmYXVsdCA9IERpY3Rpb25hcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1EaWN0aW9uYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRGljdGlvbmFyeV8xID0gcmVxdWlyZShcIi4vRGljdGlvbmFyeVwiKTtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbnZhciBGYWN0b3J5RGljdGlvbmFyeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmFjdG9yeURpY3Rpb25hcnksIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBlbXB0eSBkaWN0aW9uYXJ5LlxuICAgICAqIEBjbGFzcyA8cD5EaWN0aW9uYXJpZXMgbWFwIGtleXMgdG8gdmFsdWVzOyBlYWNoIGtleSBjYW4gbWFwIHRvIGF0IG1vc3Qgb25lIHZhbHVlLlxuICAgICAqIFRoaXMgaW1wbGVtZW50YXRpb24gYWNjZXB0cyBhbnkga2luZCBvZiBvYmplY3RzIGFzIGtleXMuPC9wPlxuICAgICAqXG4gICAgICogPHA+VGhlIGRlZmF1bHQgZmFjdG9yeSBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGEgbmV3IG9iamVjdCBvZiB0aGUgcHJvdmlkZWRcbiAgICAgKiB0eXBlLiBFeGFtcGxlOjwvcD5cbiAgICAgKiA8cHJlPlxuICAgICAqIGZ1bmN0aW9uIHBldEZhY3RvcnkoKSB7XG4gICAgICogIHJldHVybiBuZXcgUGV0KCk7XG4gICAgICogfVxuICAgICAqIDwvcHJlPlxuICAgICAqXG4gICAgICogPHA+SWYgdGhlIGtleXMgYXJlIGN1c3RvbSBvYmplY3RzIGEgZnVuY3Rpb24gd2hpY2ggY29udmVydHMga2V5cyB0byB1bmlxdWVcbiAgICAgKiBzdHJpbmdzIG11c3QgYmUgcHJvdmlkZWQuIEV4YW1wbGU6PC9wPlxuICAgICAqIDxwcmU+XG4gICAgICogZnVuY3Rpb24gcGV0VG9TdHJpbmcocGV0KSB7XG4gICAgICogIHJldHVybiBwZXQubmFtZTtcbiAgICAgKiB9XG4gICAgICogPC9wcmU+XG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbigpOlY9fSBkZWZhdWx0RmFjdG9yeUZ1bmN0aW9uIGZ1bmN0aW9uIHVzZWQgdG8gY3JlYXRlIGFcbiAgICAgKiBkZWZhdWx0IG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6c3RyaW5nPX0gdG9TdHJGdW5jdGlvbiBvcHRpb25hbCBmdW5jdGlvbiB1c2VkXG4gICAgICogdG8gY29udmVydCBrZXlzIHRvIHN0cmluZ3MuIElmIHRoZSBrZXlzIGFyZW4ndCBzdHJpbmdzIG9yIGlmIHRvU3RyaW5nKClcbiAgICAgKiBpcyBub3QgYXBwcm9wcmlhdGUsIGEgY3VzdG9tIGZ1bmN0aW9uIHdoaWNoIHJlY2VpdmVzIGEga2V5IGFuZCByZXR1cm5zIGFcbiAgICAgKiB1bmlxdWUgc3RyaW5nIG11c3QgYmUgcHJvdmlkZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gRmFjdG9yeURpY3Rpb25hcnkoZGVmYXVsdEZhY3RvcnlGdW5jdGlvbiwgdG9TdHJGdW5jdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0b1N0ckZ1bmN0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kZWZhdWx0RmFjdG9yeUZ1bmN0aW9uID0gZGVmYXVsdEZhY3RvcnlGdW5jdGlvbjtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBc3NvY2lhdGVzIHRoZSBzcGVjaWZpZWQgZGVmYXVsdCB2YWx1ZSB3aXRoIHRoZSBzcGVjaWZpZWQga2V5IGluIHRoaXMgZGljdGlvbmFyeSxcbiAgICAgKiBpZiBpdCBkaWRuJ3QgY29udGFpbiB0aGUga2V5IHlldC4gSWYgdGhlIGtleSBleGlzdGVkLCB0aGUgZXhpc3RpbmcgdmFsdWUgd2lsbCBiZSB1c2VkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBrZXkga2V5IHdpdGggd2hpY2ggdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyB0byBiZVxuICAgICAqIGFzc29jaWF0ZWQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRWYWx1ZSBkZWZhdWx0IHZhbHVlIHRvIGJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3BlY2lmaWVkIGtleS5cbiAgICAgKiBAcmV0dXJuIHsqfSBwcmV2aW91cyB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIHNwZWNpZmllZCBrZXksIG9yIHRoZSBkZWZhdWx0IHZhbHVlLFxuICAgICAqIGlmIHRoZSBrZXkgZGlkbid0IGV4aXN0IHlldC5cbiAgICAgKi9cbiAgICBGYWN0b3J5RGljdGlvbmFyeS5wcm90b3R5cGUuc2V0RGVmYXVsdCA9IGZ1bmN0aW9uIChrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICB2YXIgY3VycmVudFZhbHVlID0gX3N1cGVyLnByb3RvdHlwZS5nZXRWYWx1ZS5jYWxsKHRoaXMsIGtleSk7XG4gICAgICAgIGlmICh1dGlsLmlzVW5kZWZpbmVkKGN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoa2V5LCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudFZhbHVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgdG8gd2hpY2ggdGhpcyBkaWN0aW9uYXJ5IG1hcHMgdGhlIHNwZWNpZmllZCBrZXkuXG4gICAgICogUmV0dXJucyBhIGRlZmF1bHQgdmFsdWUgY3JlYXRlZCBieSB0aGUgZmFjdG9yeSBwYXNzZWQgaW4gdGhlIGNvbnN0cnVjdG9yLFxuICAgICAqIGlmIHRoaXMgZGljdGlvbmFyeSBjb250YWlucyBubyBtYXBwaW5nIGZvciB0aGlzIGtleS4gVGhlIG1pc3Npbmcga2V5IHdpbGxcbiAgICAgKiBhdXRvbWF0aWNhbGx5IGJlIGFkZGVkIHRvIHRoZSBkaWN0aW9uYXJ5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBrZXkga2V5IHdob3NlIGFzc29jaWF0ZWQgdmFsdWUgaXMgdG8gYmUgcmV0dXJuZWQuXG4gICAgICogQHJldHVybiB7Kn0gdGhlIHZhbHVlIHRvIHdoaWNoIHRoaXMgZGljdGlvbmFyeSBtYXBzIHRoZSBzcGVjaWZpZWQga2V5IG9yXG4gICAgICogYSBkZWZhdWx0IHZhbHVlIGlmIHRoZSBtYXAgY29udGFpbnMgbm8gbWFwcGluZyBmb3IgdGhpcyBrZXkuXG4gICAgICovXG4gICAgRmFjdG9yeURpY3Rpb25hcnkucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXREZWZhdWx0KGtleSwgdGhpcy5kZWZhdWx0RmFjdG9yeUZ1bmN0aW9uKCkpO1xuICAgIH07XG4gICAgcmV0dXJuIEZhY3RvcnlEaWN0aW9uYXJ5O1xufShEaWN0aW9uYXJ5XzEuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gRmFjdG9yeURpY3Rpb25hcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1GYWN0b3J5RGljdGlvbmFyeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb2xsZWN0aW9ucyA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG52YXIgYXJyYXlzID0gcmVxdWlyZShcIi4vYXJyYXlzXCIpO1xudmFyIEhlYXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBlbXB0eSBIZWFwLlxuICAgICAqIEBjbGFzc1xuICAgICAqIDxwPkEgaGVhcCBpcyBhIGJpbmFyeSB0cmVlLCB3aGVyZSB0aGUgbm9kZXMgbWFpbnRhaW4gdGhlIGhlYXAgcHJvcGVydHk6XG4gICAgICogZWFjaCBub2RlIGlzIHNtYWxsZXIgdGhhbiBlYWNoIG9mIGl0cyBjaGlsZHJlbiBhbmQgdGhlcmVmb3JlIGEgTWluSGVhcFxuICAgICAqIFRoaXMgaW1wbGVtZW50YXRpb24gdXNlcyBhbiBhcnJheSB0byBzdG9yZSBlbGVtZW50cy48L3A+XG4gICAgICogPHA+SWYgdGhlIGluc2VydGVkIGVsZW1lbnRzIGFyZSBjdXN0b20gb2JqZWN0cyBhIGNvbXBhcmUgZnVuY3Rpb24gbXVzdCBiZSBwcm92aWRlZCxcbiAgICAgKiAgYXQgY29uc3RydWN0aW9uIHRpbWUsIG90aGVyd2lzZSB0aGUgPD0sID09PSBhbmQgPj0gb3BlcmF0b3JzIGFyZVxuICAgICAqIHVzZWQgdG8gY29tcGFyZSBlbGVtZW50cy4gRXhhbXBsZTo8L3A+XG4gICAgICpcbiAgICAgKiA8cHJlPlxuICAgICAqIGZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xuICAgICAqICBpZiAoYSBpcyBsZXNzIHRoYW4gYiBieSBzb21lIG9yZGVyaW5nIGNyaXRlcmlvbikge1xuICAgICAqICAgICByZXR1cm4gLTE7XG4gICAgICogIH0gaWYgKGEgaXMgZ3JlYXRlciB0aGFuIGIgYnkgdGhlIG9yZGVyaW5nIGNyaXRlcmlvbikge1xuICAgICAqICAgICByZXR1cm4gMTtcbiAgICAgKiAgfVxuICAgICAqICAvLyBhIG11c3QgYmUgZXF1YWwgdG8gYlxuICAgICAqICByZXR1cm4gMDtcbiAgICAgKiB9XG4gICAgICogPC9wcmU+XG4gICAgICpcbiAgICAgKiA8cD5JZiBhIE1heC1IZWFwIGlzIHdhbnRlZCAoZ3JlYXRlciBlbGVtZW50cyBvbiB0b3ApIHlvdSBjYW4gYSBwcm92aWRlIGFcbiAgICAgKiByZXZlcnNlIGNvbXBhcmUgZnVuY3Rpb24gdG8gYWNjb21wbGlzaCB0aGF0IGJlaGF2aW9yLiBFeGFtcGxlOjwvcD5cbiAgICAgKlxuICAgICAqIDxwcmU+XG4gICAgICogZnVuY3Rpb24gcmV2ZXJzZUNvbXBhcmUoYSwgYikge1xuICAgICAqICBpZiAoYSBpcyBsZXNzIHRoYW4gYiBieSBzb21lIG9yZGVyaW5nIGNyaXRlcmlvbikge1xuICAgICAqICAgICByZXR1cm4gMTtcbiAgICAgKiAgfSBpZiAoYSBpcyBncmVhdGVyIHRoYW4gYiBieSB0aGUgb3JkZXJpbmcgY3JpdGVyaW9uKSB7XG4gICAgICogICAgIHJldHVybiAtMTtcbiAgICAgKiAgfVxuICAgICAqICAvLyBhIG11c3QgYmUgZXF1YWwgdG8gYlxuICAgICAqICByZXR1cm4gMDtcbiAgICAgKiB9XG4gICAgICogPC9wcmU+XG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpOm51bWJlcj19IGNvbXBhcmVGdW5jdGlvbiBvcHRpb25hbFxuICAgICAqIGZ1bmN0aW9uIHVzZWQgdG8gY29tcGFyZSB0d28gZWxlbWVudHMuIE11c3QgcmV0dXJuIGEgbmVnYXRpdmUgaW50ZWdlcixcbiAgICAgKiB6ZXJvLCBvciBhIHBvc2l0aXZlIGludGVnZXIgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGxlc3MgdGhhbiwgZXF1YWwgdG8sXG4gICAgICogb3IgZ3JlYXRlciB0aGFuIHRoZSBzZWNvbmQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gSGVhcChjb21wYXJlRnVuY3Rpb24pIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFycmF5IHVzZWQgdG8gc3RvcmUgdGhlIGVsZW1lbnRzIG9mIHRoZSBoZWFwLlxuICAgICAgICAgKiBAdHlwZSB7QXJyYXkuPE9iamVjdD59XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5jb21wYXJlID0gY29tcGFyZUZ1bmN0aW9uIHx8IGNvbGxlY3Rpb25zLmRlZmF1bHRDb21wYXJlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGVmdCBjaGlsZCBvZiB0aGUgbm9kZSBhdCB0aGUgZ2l2ZW4gaW5kZXguXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5vZGVJbmRleCBUaGUgaW5kZXggb2YgdGhlIG5vZGUgdG8gZ2V0IHRoZSBsZWZ0IGNoaWxkXG4gICAgICogZm9yLlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGluZGV4IG9mIHRoZSBsZWZ0IGNoaWxkLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUubGVmdENoaWxkSW5kZXggPSBmdW5jdGlvbiAobm9kZUluZGV4KSB7XG4gICAgICAgIHJldHVybiAoMiAqIG5vZGVJbmRleCkgKyAxO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIHJpZ2h0IGNoaWxkIG9mIHRoZSBub2RlIGF0IHRoZSBnaXZlbiBpbmRleC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbm9kZUluZGV4IFRoZSBpbmRleCBvZiB0aGUgbm9kZSB0byBnZXQgdGhlIHJpZ2h0IGNoaWxkXG4gICAgICogZm9yLlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGluZGV4IG9mIHRoZSByaWdodCBjaGlsZC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLnJpZ2h0Q2hpbGRJbmRleCA9IGZ1bmN0aW9uIChub2RlSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuICgyICogbm9kZUluZGV4KSArIDI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgcGFyZW50IG9mIHRoZSBub2RlIGF0IHRoZSBnaXZlbiBpbmRleC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbm9kZUluZGV4IFRoZSBpbmRleCBvZiB0aGUgbm9kZSB0byBnZXQgdGhlIHBhcmVudCBmb3IuXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgaW5kZXggb2YgdGhlIHBhcmVudC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLnBhcmVudEluZGV4ID0gZnVuY3Rpb24gKG5vZGVJbmRleCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigobm9kZUluZGV4IC0gMSkgLyAyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBzbWFsbGVyIGNoaWxkIG5vZGUgKGlmIGl0IGV4aXN0cykuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlZnRDaGlsZCBsZWZ0IGNoaWxkIGluZGV4LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByaWdodENoaWxkIHJpZ2h0IGNoaWxkIGluZGV4LlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIGluZGV4IHdpdGggdGhlIG1pbmltdW0gdmFsdWUgb3IgLTEgaWYgaXQgZG9lc24ndFxuICAgICAqIGV4aXN0cy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLm1pbkluZGV4ID0gZnVuY3Rpb24gKGxlZnRDaGlsZCwgcmlnaHRDaGlsZCkge1xuICAgICAgICBpZiAocmlnaHRDaGlsZCA+PSB0aGlzLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAobGVmdENoaWxkID49IHRoaXMuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdENoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29tcGFyZSh0aGlzLmRhdGFbbGVmdENoaWxkXSwgdGhpcy5kYXRhW3JpZ2h0Q2hpbGRdKSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnRDaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiByaWdodENoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNb3ZlcyB0aGUgbm9kZSBhdCB0aGUgZ2l2ZW4gaW5kZXggdXAgdG8gaXRzIHByb3BlciBwbGFjZSBpbiB0aGUgaGVhcC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBub2RlIHRvIG1vdmUgdXAuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBIZWFwLnByb3RvdHlwZS5zaWZ0VXAgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50SW5kZXgoaW5kZXgpO1xuICAgICAgICB3aGlsZSAoaW5kZXggPiAwICYmIHRoaXMuY29tcGFyZSh0aGlzLmRhdGFbcGFyZW50XSwgdGhpcy5kYXRhW2luZGV4XSkgPiAwKSB7XG4gICAgICAgICAgICBhcnJheXMuc3dhcCh0aGlzLmRhdGEsIHBhcmVudCwgaW5kZXgpO1xuICAgICAgICAgICAgaW5kZXggPSBwYXJlbnQ7XG4gICAgICAgICAgICBwYXJlbnQgPSB0aGlzLnBhcmVudEluZGV4KGluZGV4KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogTW92ZXMgdGhlIG5vZGUgYXQgdGhlIGdpdmVuIGluZGV4IGRvd24gdG8gaXRzIHByb3BlciBwbGFjZSBpbiB0aGUgaGVhcC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbm9kZUluZGV4IFRoZSBpbmRleCBvZiB0aGUgbm9kZSB0byBtb3ZlIGRvd24uXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBIZWFwLnByb3RvdHlwZS5zaWZ0RG93biA9IGZ1bmN0aW9uIChub2RlSW5kZXgpIHtcbiAgICAgICAgLy9zbWFsbGVyIGNoaWxkIGluZGV4XG4gICAgICAgIHZhciBtaW4gPSB0aGlzLm1pbkluZGV4KHRoaXMubGVmdENoaWxkSW5kZXgobm9kZUluZGV4KSwgdGhpcy5yaWdodENoaWxkSW5kZXgobm9kZUluZGV4KSk7XG4gICAgICAgIHdoaWxlIChtaW4gPj0gMCAmJiB0aGlzLmNvbXBhcmUodGhpcy5kYXRhW25vZGVJbmRleF0sIHRoaXMuZGF0YVttaW5dKSA+IDApIHtcbiAgICAgICAgICAgIGFycmF5cy5zd2FwKHRoaXMuZGF0YSwgbWluLCBub2RlSW5kZXgpO1xuICAgICAgICAgICAgbm9kZUluZGV4ID0gbWluO1xuICAgICAgICAgICAgbWluID0gdGhpcy5taW5JbmRleCh0aGlzLmxlZnRDaGlsZEluZGV4KG5vZGVJbmRleCksIHRoaXMucmlnaHRDaGlsZEluZGV4KG5vZGVJbmRleCkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYnV0IGRvZXMgbm90IHJlbW92ZSB0aGUgcm9vdCBlbGVtZW50IG9mIHRoaXMgaGVhcC5cbiAgICAgKiBAcmV0dXJuIHsqfSBUaGUgdmFsdWUgYXQgdGhlIHJvb3Qgb2YgdGhlIGhlYXAuIFJldHVybnMgdW5kZWZpbmVkIGlmIHRoZVxuICAgICAqIGhlYXAgaXMgZW1wdHkuXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gZWxlbWVudCBpbnRvIHRoZSBoZWFwLlxuICAgICAqIEBwYXJhbSB7Kn0gZWxlbWVudCB0aGUgZWxlbWVudC5cbiAgICAgKiBAcmV0dXJuIHRydWUgaWYgdGhlIGVsZW1lbnQgd2FzIGFkZGVkIG9yIGZhbHMgaWYgaXQgaXMgdW5kZWZpbmVkLlxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChjb2xsZWN0aW9ucy5pc1VuZGVmaW5lZChlbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLnNpZnRVcCh0aGlzLmRhdGEubGVuZ3RoIC0gMSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGFuZCByZW1vdmVzIHRoZSByb290IGVsZW1lbnQgb2YgdGhpcyBoZWFwLlxuICAgICAqIEByZXR1cm4geyp9IFRoZSB2YWx1ZSByZW1vdmVkIGZyb20gdGhlIHJvb3Qgb2YgdGhlIGhlYXAuIFJldHVybnNcbiAgICAgKiB1bmRlZmluZWQgaWYgdGhlIGhlYXAgaXMgZW1wdHkuXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUucmVtb3ZlUm9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgb2JqID0gdGhpcy5kYXRhWzBdO1xuICAgICAgICAgICAgdGhpcy5kYXRhWzBdID0gdGhpcy5kYXRhW3RoaXMuZGF0YS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zcGxpY2UodGhpcy5kYXRhLmxlbmd0aCAtIDEsIDEpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaWZ0RG93bigwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGhlYXAgY29udGFpbnMgdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IGVsZW1lbnQgdG8gc2VhcmNoIGZvci5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgSGVhcCBjb250YWlucyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQsIGZhbHNlXG4gICAgICogb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGVxdUYgPSBjb2xsZWN0aW9ucy5jb21wYXJlVG9FcXVhbHModGhpcy5jb21wYXJlKTtcbiAgICAgICAgcmV0dXJuIGFycmF5cy5jb250YWlucyh0aGlzLmRhdGEsIGVsZW1lbnQsIGVxdUYpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoaXMgaGVhcC5cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhpcyBoZWFwLlxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEubGVuZ3RoO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoaXMgaGVhcCBpcyBlbXB0eS5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIGFuZCBvbmx5IGlmIHRoaXMgaGVhcCBjb250YWlucyBubyBpdGVtczsgZmFsc2VcbiAgICAgKiBvdGhlcndpc2UuXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGggPD0gMDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIG9mIHRoZSBlbGVtZW50cyBmcm9tIHRoaXMgaGVhcC5cbiAgICAgKi9cbiAgICBIZWFwLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kYXRhLmxlbmd0aCA9IDA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gb25jZSBmb3IgZWFjaCBlbGVtZW50IHByZXNlbnQgaW4gdGhpcyBoZWFwIGluXG4gICAgICogbm8gcGFydGljdWxhciBvcmRlci5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6Kn0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSwgaXQgaXNcbiAgICAgKiBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OiB0aGUgZWxlbWVudCB2YWx1ZSwgdG8gYnJlYWsgdGhlIGl0ZXJhdGlvbiB5b3UgY2FuXG4gICAgICogb3B0aW9uYWxseSByZXR1cm4gZmFsc2UuXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBhcnJheXMuZm9yRWFjaCh0aGlzLmRhdGEsIGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIHJldHVybiBIZWFwO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEhlYXA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1IZWFwLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRGljdGlvbmFyeV8xID0gcmVxdWlyZShcIi4vRGljdGlvbmFyeVwiKTtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbi8qKlxuICogVGhpcyBjbGFzcyBpcyB1c2VkIGJ5IHRoZSBMaW5rZWREaWN0aW9uYXJ5IEludGVybmFsbHlcbiAqIEhhcyB0byBiZSBhIGNsYXNzLCBub3QgYW4gaW50ZXJmYWNlLCBiZWNhdXNlIGl0IG5lZWRzIHRvIGhhdmVcbiAqIHRoZSAndW5saW5rJyBmdW5jdGlvbiBkZWZpbmVkLlxuICovXG52YXIgTGlua2VkRGljdGlvbmFyeVBhaXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTGlua2VkRGljdGlvbmFyeVBhaXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBMaW5rZWREaWN0aW9uYXJ5UGFpci5wcm90b3R5cGUudW5saW5rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnByZXYubmV4dCA9IHRoaXMubmV4dDtcbiAgICAgICAgdGhpcy5uZXh0LnByZXYgPSB0aGlzLnByZXY7XG4gICAgfTtcbiAgICByZXR1cm4gTGlua2VkRGljdGlvbmFyeVBhaXI7XG59KCkpO1xuLyoqXG4gKiBUaGUgaGVhZCBhbmQgdGFpbCBlbGVtZW50cyBvZiB0aGUgbGlzdCBoYXZlIG51bGwga2V5IGFuZCB2YWx1ZSBwcm9wZXJ0aWVzIGJ1dCB0aGV5XG4gKiB1c3VhbGx5IGxpbmsgdG8gbm9ybWFsIG5vZGVzLlxuICovXG52YXIgSGVhZE9yVGFpbExpbmtlZERpY3Rpb25hcnlQYWlyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEhlYWRPclRhaWxMaW5rZWREaWN0aW9uYXJ5UGFpcigpIHtcbiAgICAgICAgdGhpcy5rZXkgPSBudWxsO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICB9XG4gICAgSGVhZE9yVGFpbExpbmtlZERpY3Rpb25hcnlQYWlyLnByb3RvdHlwZS51bmxpbmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucHJldi5uZXh0ID0gdGhpcy5uZXh0O1xuICAgICAgICB0aGlzLm5leHQucHJldiA9IHRoaXMucHJldjtcbiAgICB9O1xuICAgIHJldHVybiBIZWFkT3JUYWlsTGlua2VkRGljdGlvbmFyeVBhaXI7XG59KCkpO1xuZnVuY3Rpb24gaXNIZWFkT3JUYWlsTGlua2VkRGljdGlvbmFyeVBhaXIocCkge1xuICAgIHJldHVybiAhcC5uZXh0O1xufVxudmFyIExpbmtlZERpY3Rpb25hcnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExpbmtlZERpY3Rpb25hcnksIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTGlua2VkRGljdGlvbmFyeSh0b1N0ckZ1bmN0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRvU3RyRnVuY3Rpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmhlYWQgPSBuZXcgSGVhZE9yVGFpbExpbmtlZERpY3Rpb25hcnlQYWlyKCk7XG4gICAgICAgIF90aGlzLnRhaWwgPSBuZXcgSGVhZE9yVGFpbExpbmtlZERpY3Rpb25hcnlQYWlyKCk7XG4gICAgICAgIF90aGlzLmhlYWQubmV4dCA9IF90aGlzLnRhaWw7XG4gICAgICAgIF90aGlzLnRhaWwucHJldiA9IF90aGlzLmhlYWQ7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyB0aGUgbmV3IG5vZGUgdG8gdGhlICd0YWlsJyBvZiB0aGUgbGlzdCwgdXBkYXRpbmcgdGhlXG4gICAgICogbmVpZ2hib3JzLCBhbmQgbW92aW5nICd0aGlzLnRhaWwnICh0aGUgRW5kIG9mIExpc3QgaW5kaWNhdG9yKSB0aGF0XG4gICAgICogdG8gdGhlIGVuZC5cbiAgICAgKi9cbiAgICBMaW5rZWREaWN0aW9uYXJ5LnByb3RvdHlwZS5hcHBlbmRUb1RhaWwgPSBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgdmFyIGxhc3ROb2RlID0gdGhpcy50YWlsLnByZXY7XG4gICAgICAgIGxhc3ROb2RlLm5leHQgPSBlbnRyeTtcbiAgICAgICAgZW50cnkucHJldiA9IGxhc3ROb2RlO1xuICAgICAgICBlbnRyeS5uZXh0ID0gdGhpcy50YWlsO1xuICAgICAgICB0aGlzLnRhaWwucHJldiA9IGVudHJ5O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGEgbGlua2VkIGRpY3Rpb25hcnkgZnJvbSB0aGUgdGFibGUgaW50ZXJuYWxseVxuICAgICAqL1xuICAgIExpbmtlZERpY3Rpb25hcnkucHJvdG90eXBlLmdldExpbmtlZERpY3Rpb25hcnlQYWlyID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAodXRpbC5pc1VuZGVmaW5lZChrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBrID0gJyQnICsgdGhpcy50b1N0cihrZXkpO1xuICAgICAgICB2YXIgcGFpciA9ICh0aGlzLnRhYmxlW2tdKTtcbiAgICAgICAgcmV0dXJuIHBhaXI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSB0byB3aGljaCB0aGlzIGRpY3Rpb25hcnkgbWFwcyB0aGUgc3BlY2lmaWVkIGtleS5cbiAgICAgKiBSZXR1cm5zIHVuZGVmaW5lZCBpZiB0aGlzIGRpY3Rpb25hcnkgY29udGFpbnMgbm8gbWFwcGluZyBmb3IgdGhpcyBrZXkuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGtleSBrZXkgd2hvc2UgYXNzb2NpYXRlZCB2YWx1ZSBpcyB0byBiZSByZXR1cm5lZC5cbiAgICAgKiBAcmV0dXJuIHsqfSB0aGUgdmFsdWUgdG8gd2hpY2ggdGhpcyBkaWN0aW9uYXJ5IG1hcHMgdGhlIHNwZWNpZmllZCBrZXkgb3JcbiAgICAgKiB1bmRlZmluZWQgaWYgdGhlIG1hcCBjb250YWlucyBubyBtYXBwaW5nIGZvciB0aGlzIGtleS5cbiAgICAgKi9cbiAgICBMaW5rZWREaWN0aW9uYXJ5LnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHBhaXIgPSB0aGlzLmdldExpbmtlZERpY3Rpb25hcnlQYWlyKGtleSk7XG4gICAgICAgIGlmICghdXRpbC5pc1VuZGVmaW5lZChwYWlyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhaXIudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIG1hcHBpbmcgZm9yIHRoaXMga2V5IGZyb20gdGhpcyBkaWN0aW9uYXJ5IGlmIGl0IGlzIHByZXNlbnQuXG4gICAgICogQWxzbywgaWYgYSB2YWx1ZSBpcyBwcmVzZW50IGZvciB0aGlzIGtleSwgdGhlIGVudHJ5IGlzIHJlbW92ZWQgZnJvbSB0aGVcbiAgICAgKiBpbnNlcnRpb24gb3JkZXJpbmcuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGtleSBrZXkgd2hvc2UgbWFwcGluZyBpcyB0byBiZSByZW1vdmVkIGZyb20gdGhlXG4gICAgICogZGljdGlvbmFyeS5cbiAgICAgKiBAcmV0dXJuIHsqfSBwcmV2aW91cyB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggc3BlY2lmaWVkIGtleSwgb3IgdW5kZWZpbmVkIGlmXG4gICAgICogdGhlcmUgd2FzIG5vIG1hcHBpbmcgZm9yIGtleS5cbiAgICAgKi9cbiAgICBMaW5rZWREaWN0aW9uYXJ5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBwYWlyID0gdGhpcy5nZXRMaW5rZWREaWN0aW9uYXJ5UGFpcihrZXkpO1xuICAgICAgICBpZiAoIXV0aWwuaXNVbmRlZmluZWQocGFpcikpIHtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVtb3ZlLmNhbGwodGhpcywga2V5KTsgLy8gVGhpcyB3aWxsIHJlbW92ZSBpdCBmcm9tIHRoZSB0YWJsZVxuICAgICAgICAgICAgcGFpci51bmxpbmsoKTsgLy8gVGhpcyB3aWxsIHVubGluayBpdCBmcm9tIHRoZSBjaGFpblxuICAgICAgICAgICAgcmV0dXJuIHBhaXIudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIG1hcHBpbmdzIGZyb20gdGhpcyBMaW5rZWREaWN0aW9uYXJ5LlxuICAgICAqIEB0aGlzIHtjb2xsZWN0aW9ucy5MaW5rZWREaWN0aW9uYXJ5fVxuICAgICAqL1xuICAgIExpbmtlZERpY3Rpb25hcnkucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmNsZWFyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuaGVhZC5uZXh0ID0gdGhpcy50YWlsO1xuICAgICAgICB0aGlzLnRhaWwucHJldiA9IHRoaXMuaGVhZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEludGVybmFsIGZ1bmN0aW9uIHVzZWQgd2hlbiB1cGRhdGluZyBhbiBleGlzdGluZyBLZXlWYWx1ZSBwYWlyLlxuICAgICAqIEl0IHBsYWNlcyB0aGUgbmV3IHZhbHVlIGluZGV4ZWQgYnkga2V5IGludG8gdGhlIHRhYmxlLCBidXQgbWFpbnRhaW5zXG4gICAgICogaXRzIHBsYWNlIGluIHRoZSBsaW5rZWQgb3JkZXJpbmcuXG4gICAgICovXG4gICAgTGlua2VkRGljdGlvbmFyeS5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIChvbGRQYWlyLCBuZXdQYWlyKSB7XG4gICAgICAgIHZhciBrID0gJyQnICsgdGhpcy50b1N0cihuZXdQYWlyLmtleSk7XG4gICAgICAgIC8vIHNldCB0aGUgbmV3IFBhaXIncyBsaW5rcyB0byBleGlzdGluZ1BhaXIncyBsaW5rc1xuICAgICAgICBuZXdQYWlyLm5leHQgPSBvbGRQYWlyLm5leHQ7XG4gICAgICAgIG5ld1BhaXIucHJldiA9IG9sZFBhaXIucHJldjtcbiAgICAgICAgLy8gRGVsZXRlIEV4aXN0aW5nIFBhaXIgZnJvbSB0aGUgdGFibGUsIHVubGluayBpdCBmcm9tIGNoYWluLlxuICAgICAgICAvLyBBcyBhIHJlc3VsdCwgdGhlIG5FbGVtZW50cyBnZXRzIGRlY3JlbWVudGVkIGJ5IHRoaXMgb3BlcmF0aW9uXG4gICAgICAgIHRoaXMucmVtb3ZlKG9sZFBhaXIua2V5KTtcbiAgICAgICAgLy8gTGluayBuZXcgUGFpciBpbiBwbGFjZSBvZiB3aGVyZSBvbGRQYWlyIHdhcyxcbiAgICAgICAgLy8gYnkgcG9pbnRpbmcgdGhlIG9sZCBwYWlyJ3MgbmVpZ2hib3JzIHRvIGl0LlxuICAgICAgICBuZXdQYWlyLnByZXYubmV4dCA9IG5ld1BhaXI7XG4gICAgICAgIG5ld1BhaXIubmV4dC5wcmV2ID0gbmV3UGFpcjtcbiAgICAgICAgdGhpcy50YWJsZVtrXSA9IG5ld1BhaXI7XG4gICAgICAgIC8vIFRvIG1ha2UgdXAgZm9yIHRoZSBmYWN0IHRoYXQgdGhlIG51bWJlciBvZiBlbGVtZW50cyB3YXMgZGVjcmVtZW50ZWQsXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gaW5jcmVhc2UgaXQgYnkgb25lLlxuICAgICAgICArK3RoaXMubkVsZW1lbnRzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXNzb2NpYXRlcyB0aGUgc3BlY2lmaWVkIHZhbHVlIHdpdGggdGhlIHNwZWNpZmllZCBrZXkgaW4gdGhpcyBkaWN0aW9uYXJ5LlxuICAgICAqIElmIHRoZSBkaWN0aW9uYXJ5IHByZXZpb3VzbHkgY29udGFpbmVkIGEgbWFwcGluZyBmb3IgdGhpcyBrZXksIHRoZSBvbGRcbiAgICAgKiB2YWx1ZSBpcyByZXBsYWNlZCBieSB0aGUgc3BlY2lmaWVkIHZhbHVlLlxuICAgICAqIFVwZGF0aW5nIG9mIGEga2V5IHRoYXQgYWxyZWFkeSBleGlzdHMgbWFpbnRhaW5zIGl0cyBwbGFjZSBpbiB0aGVcbiAgICAgKiBpbnNlcnRpb24gb3JkZXIgaW50byB0aGUgbWFwLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBrZXkga2V5IHdpdGggd2hpY2ggdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyB0byBiZVxuICAgICAqIGFzc29jaWF0ZWQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHZhbHVlIHRvIGJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3BlY2lmaWVkIGtleS5cbiAgICAgKiBAcmV0dXJuIHsqfSBwcmV2aW91cyB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIHNwZWNpZmllZCBrZXksIG9yIHVuZGVmaW5lZCBpZlxuICAgICAqIHRoZXJlIHdhcyBubyBtYXBwaW5nIGZvciB0aGUga2V5IG9yIGlmIHRoZSBrZXkvdmFsdWUgYXJlIHVuZGVmaW5lZC5cbiAgICAgKi9cbiAgICBMaW5rZWREaWN0aW9uYXJ5LnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh1dGlsLmlzVW5kZWZpbmVkKGtleSkgfHwgdXRpbC5pc1VuZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV4aXN0aW5nUGFpciA9IHRoaXMuZ2V0TGlua2VkRGljdGlvbmFyeVBhaXIoa2V5KTtcbiAgICAgICAgdmFyIG5ld1BhaXIgPSBuZXcgTGlua2VkRGljdGlvbmFyeVBhaXIoa2V5LCB2YWx1ZSk7XG4gICAgICAgIHZhciBrID0gJyQnICsgdGhpcy50b1N0cihrZXkpO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGFuIGVsZW1lbnQgZm9yIHRoYXQga2V5LCB3ZVxuICAgICAgICAvLyBrZWVwIGl0J3MgcGxhY2UgaW4gdGhlIExpbmtlZExpc3RcbiAgICAgICAgaWYgKCF1dGlsLmlzVW5kZWZpbmVkKGV4aXN0aW5nUGFpcikpIHtcbiAgICAgICAgICAgIHRoaXMucmVwbGFjZShleGlzdGluZ1BhaXIsIG5ld1BhaXIpO1xuICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nUGFpci52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kVG9UYWlsKG5ld1BhaXIpO1xuICAgICAgICAgICAgdGhpcy50YWJsZVtrXSA9IG5ld1BhaXI7XG4gICAgICAgICAgICArK3RoaXMubkVsZW1lbnRzO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUga2V5cyBpbiB0aGlzIExpbmtlZERpY3Rpb25hcnksIG9yZGVyZWRcbiAgICAgKiBieSBpbnNlcnRpb24gb3JkZXIuXG4gICAgICogQHJldHVybiB7QXJyYXl9IGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBrZXlzIGluIHRoaXMgTGlua2VkRGljdGlvbmFyeSxcbiAgICAgKiBvcmRlcmVkIGJ5IGluc2VydGlvbiBvcmRlci5cbiAgICAgKi9cbiAgICBMaW5rZWREaWN0aW9uYXJ5LnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB2YWx1ZXMgaW4gdGhpcyBMaW5rZWREaWN0aW9uYXJ5LCBvcmRlcmVkIGJ5XG4gICAgICogaW5zZXJ0aW9uIG9yZGVyLlxuICAgICAqIEByZXR1cm4ge0FycmF5fSBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgdmFsdWVzIGluIHRoaXMgTGlua2VkRGljdGlvbmFyeSxcbiAgICAgKiBvcmRlcmVkIGJ5IGluc2VydGlvbiBvcmRlci5cbiAgICAgKi9cbiAgICBMaW5rZWREaWN0aW9uYXJ5LnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2godmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIG9uY2UgZm9yIGVhY2gga2V5LXZhbHVlIHBhaXJcbiAgICAgKiBwcmVzZW50IGluIHRoaXMgTGlua2VkRGljdGlvbmFyeS4gSXQgaXMgZG9uZSBpbiB0aGUgb3JkZXIgb2YgaW5zZXJ0aW9uXG4gICAgICogaW50byB0aGUgTGlua2VkRGljdGlvbmFyeVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCk6Kn0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSwgaXQgaXNcbiAgICAgKiBpbnZva2VkIHdpdGggdHdvIGFyZ3VtZW50czoga2V5IGFuZCB2YWx1ZS4gVG8gYnJlYWsgdGhlIGl0ZXJhdGlvbiB5b3UgY2FuXG4gICAgICogb3B0aW9uYWxseSByZXR1cm4gZmFsc2UuXG4gICAgICovXG4gICAgTGlua2VkRGljdGlvbmFyeS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgY3Jhd2xOb2RlID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgICAgIHdoaWxlICghaXNIZWFkT3JUYWlsTGlua2VkRGljdGlvbmFyeVBhaXIoY3Jhd2xOb2RlKSkge1xuICAgICAgICAgICAgdmFyIHJldCA9IGNhbGxiYWNrKGNyYXdsTm9kZS5rZXksIGNyYXdsTm9kZS52YWx1ZSk7XG4gICAgICAgICAgICBpZiAocmV0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNyYXdsTm9kZSA9IGNyYXdsTm9kZS5uZXh0O1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTGlua2VkRGljdGlvbmFyeTtcbn0oRGljdGlvbmFyeV8xLmRlZmF1bHQpKTsgLy8gRW5kIG9mIExpbmtlZERpY3Rpb25hcnlcbmV4cG9ydHMuZGVmYXVsdCA9IExpbmtlZERpY3Rpb25hcnk7XG4vLyAvKipcbi8vICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGRpY3Rpb25hcnkgaXMgZXF1YWwgdG8gdGhlIGdpdmVuIGRpY3Rpb25hcnkuXG4vLyAgKiBUd28gZGljdGlvbmFyaWVzIGFyZSBlcXVhbCBpZiB0aGV5IGNvbnRhaW4gdGhlIHNhbWUgbWFwcGluZ3MuXG4vLyAgKiBAcGFyYW0ge2NvbGxlY3Rpb25zLkRpY3Rpb25hcnl9IG90aGVyIHRoZSBvdGhlciBkaWN0aW9uYXJ5LlxuLy8gICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KTpib29sZWFuPX0gdmFsdWVzRXF1YWxGdW5jdGlvbiBvcHRpb25hbFxuLy8gICogZnVuY3Rpb24gdXNlZCB0byBjaGVjayBpZiB0d28gdmFsdWVzIGFyZSBlcXVhbC5cbi8vICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhpcyBkaWN0aW9uYXJ5IGlzIGVxdWFsIHRvIHRoZSBnaXZlbiBkaWN0aW9uYXJ5LlxuLy8gICovXG4vLyBjb2xsZWN0aW9ucy5EaWN0aW9uYXJ5LnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbihvdGhlcix2YWx1ZXNFcXVhbEZ1bmN0aW9uKSB7XG4vLyBcdGNvbnN0IGVxRiA9IHZhbHVlc0VxdWFsRnVuY3Rpb24gfHwgY29sbGVjdGlvbnMuZGVmYXVsdEVxdWFscztcbi8vIFx0aWYoIShvdGhlciBpbnN0YW5jZW9mIGNvbGxlY3Rpb25zLkRpY3Rpb25hcnkpKXtcbi8vIFx0XHRyZXR1cm4gZmFsc2U7XG4vLyBcdH1cbi8vIFx0aWYodGhpcy5zaXplKCkgIT09IG90aGVyLnNpemUoKSl7XG4vLyBcdFx0cmV0dXJuIGZhbHNlO1xuLy8gXHR9XG4vLyBcdHJldHVybiB0aGlzLmVxdWFsc0F1eCh0aGlzLmZpcnN0Tm9kZSxvdGhlci5maXJzdE5vZGUsZXFGKTtcbi8vIH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxpbmtlZERpY3Rpb25hcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG52YXIgYXJyYXlzID0gcmVxdWlyZShcIi4vYXJyYXlzXCIpO1xudmFyIExpbmtlZExpc3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBlbXB0eSBMaW5rZWQgTGlzdC5cbiAgICAgKiBAY2xhc3MgQSBsaW5rZWQgbGlzdCBpcyBhIGRhdGEgc3RydWN0dXJlIGNvbnNpc3Rpbmcgb2YgYSBncm91cCBvZiBub2Rlc1xuICAgICAqIHdoaWNoIHRvZ2V0aGVyIHJlcHJlc2VudCBhIHNlcXVlbmNlLlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIExpbmtlZExpc3QoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaXJzdCBub2RlIGluIHRoZSBsaXN0XG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZpcnN0Tm9kZSA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMYXN0IG5vZGUgaW4gdGhlIGxpc3RcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubGFzdE5vZGUgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogTnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSBsaXN0XG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5FbGVtZW50cyA9IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZWxlbWVudCB0byB0aGlzIGxpc3QuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gZWxlbWVudCB0byBiZSBhZGRlZC5cbiAgICAgKiBAcGFyYW0ge251bWJlcj19IGluZGV4IG9wdGlvbmFsIGluZGV4IHRvIGFkZCB0aGUgZWxlbWVudC4gSWYgbm8gaW5kZXggaXMgc3BlY2lmaWVkXG4gICAgICogdGhlIGVsZW1lbnQgaXMgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGlzIGxpc3QuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZWxlbWVudCB3YXMgYWRkZWQgb3IgZmFsc2UgaWYgdGhlIGluZGV4IGlzIGludmFsaWRcbiAgICAgKiBvciBpZiB0aGUgZWxlbWVudCBpcyB1bmRlZmluZWQuXG4gICAgICovXG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIGlmICh1dGlsLmlzVW5kZWZpbmVkKGluZGV4KSkge1xuICAgICAgICAgICAgaW5kZXggPSB0aGlzLm5FbGVtZW50cztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy5uRWxlbWVudHMgfHwgdXRpbC5pc1VuZGVmaW5lZChpdGVtKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuZXdOb2RlID0gdGhpcy5jcmVhdGVOb2RlKGl0ZW0pO1xuICAgICAgICBpZiAodGhpcy5uRWxlbWVudHMgPT09IDAgfHwgdGhpcy5sYXN0Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gRmlyc3Qgbm9kZSBpbiB0aGUgbGlzdC5cbiAgICAgICAgICAgIHRoaXMuZmlyc3ROb2RlID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIHRoaXMubGFzdE5vZGUgPSBuZXdOb2RlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSB0aGlzLm5FbGVtZW50cykge1xuICAgICAgICAgICAgLy8gSW5zZXJ0IGF0IHRoZSBlbmQuXG4gICAgICAgICAgICB0aGlzLmxhc3ROb2RlLm5leHQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IG5ld05vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIC8vIENoYW5nZSBmaXJzdCBub2RlLlxuICAgICAgICAgICAgbmV3Tm9kZS5uZXh0ID0gdGhpcy5maXJzdE5vZGU7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Tm9kZSA9IG5ld05vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJldiA9IHRoaXMubm9kZUF0SW5kZXgoaW5kZXggLSAxKTtcbiAgICAgICAgICAgIGlmIChwcmV2ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Tm9kZS5uZXh0ID0gcHJldi5uZXh0O1xuICAgICAgICAgICAgcHJldi5uZXh0ID0gbmV3Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5FbGVtZW50cysrO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhpcyBsaXN0LlxuICAgICAqIEByZXR1cm4geyp9IHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBsaXN0IG9yIHVuZGVmaW5lZCBpZiB0aGUgbGlzdCBpc1xuICAgICAqIGVtcHR5LlxuICAgICAqL1xuICAgIExpbmtlZExpc3QucHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5maXJzdE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpcnN0Tm9kZS5lbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsYXN0IGVsZW1lbnQgaW4gdGhpcyBsaXN0LlxuICAgICAqIEByZXR1cm4geyp9IHRoZSBsYXN0IGVsZW1lbnQgaW4gdGhlIGxpc3Qgb3IgdW5kZWZpbmVkIGlmIHRoZSBsaXN0IGlzXG4gICAgICogZW1wdHkuXG4gICAgICovXG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubGFzdE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxhc3ROb2RlLmVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGVsZW1lbnQgYXQgdGhlIHNwZWNpZmllZCBwb3NpdGlvbiBpbiB0aGlzIGxpc3QuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IGRlc2lyZWQgaW5kZXguXG4gICAgICogQHJldHVybiB7Kn0gdGhlIGVsZW1lbnQgYXQgdGhlIGdpdmVuIGluZGV4IG9yIHVuZGVmaW5lZCBpZiB0aGUgaW5kZXggaXNcbiAgICAgKiBvdXQgb2YgYm91bmRzLlxuICAgICAqL1xuICAgIExpbmtlZExpc3QucHJvdG90eXBlLmVsZW1lbnRBdEluZGV4ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5ub2RlQXRJbmRleChpbmRleCk7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlLmVsZW1lbnQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBpbiB0aGlzIGxpc3Qgb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgdGhlXG4gICAgICogc3BlY2lmaWVkIGVsZW1lbnQsIG9yIC0xIGlmIHRoZSBMaXN0IGRvZXMgbm90IGNvbnRhaW4gdGhpcyBlbGVtZW50LlxuICAgICAqIDxwPklmIHRoZSBlbGVtZW50cyBpbnNpZGUgdGhpcyBsaXN0IGFyZVxuICAgICAqIG5vdCBjb21wYXJhYmxlIHdpdGggdGhlID09PSBvcGVyYXRvciBhIGN1c3RvbSBlcXVhbHMgZnVuY3Rpb24gc2hvdWxkIGJlXG4gICAgICogcHJvdmlkZWQgdG8gcGVyZm9ybSBzZWFyY2hlcywgdGhlIGZ1bmN0aW9uIG11c3QgcmVjZWl2ZSB0d28gYXJndW1lbnRzIGFuZFxuICAgICAqIHJldHVybiB0cnVlIGlmIHRoZXkgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuIEV4YW1wbGU6PC9wPlxuICAgICAqXG4gICAgICogPHByZT5cbiAgICAgKiBjb25zdCBwZXRzQXJlRXF1YWxCeU5hbWUgPSBmdW5jdGlvbihwZXQxLCBwZXQyKSB7XG4gICAgICogIHJldHVybiBwZXQxLm5hbWUgPT09IHBldDIubmFtZTtcbiAgICAgKiB9XG4gICAgICogPC9wcmU+XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gZWxlbWVudCB0byBzZWFyY2ggZm9yLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCk6Ym9vbGVhbj19IGVxdWFsc0Z1bmN0aW9uIE9wdGlvbmFsXG4gICAgICogZnVuY3Rpb24gdXNlZCB0byBjaGVjayBpZiB0d28gZWxlbWVudHMgYXJlIGVxdWFsLlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIGluZGV4IGluIHRoaXMgbGlzdCBvZiB0aGUgZmlyc3Qgb2NjdXJyZW5jZVxuICAgICAqIG9mIHRoZSBzcGVjaWZpZWQgZWxlbWVudCwgb3IgLTEgaWYgdGhpcyBsaXN0IGRvZXMgbm90IGNvbnRhaW4gdGhlXG4gICAgICogZWxlbWVudC5cbiAgICAgKi9cbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gKGl0ZW0sIGVxdWFsc0Z1bmN0aW9uKSB7XG4gICAgICAgIHZhciBlcXVhbHNGID0gZXF1YWxzRnVuY3Rpb24gfHwgdXRpbC5kZWZhdWx0RXF1YWxzO1xuICAgICAgICBpZiAodXRpbC5pc1VuZGVmaW5lZChpdGVtKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IHRoaXMuZmlyc3ROb2RlO1xuICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICB3aGlsZSAoY3VycmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChlcXVhbHNGKGN1cnJlbnROb2RlLmVsZW1lbnQsIGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBsaXN0IGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAgKiA8cD5JZiB0aGUgZWxlbWVudHMgaW5zaWRlIHRoZSBsaXN0IGFyZVxuICAgICAqIG5vdCBjb21wYXJhYmxlIHdpdGggdGhlID09PSBvcGVyYXRvciBhIGN1c3RvbSBlcXVhbHMgZnVuY3Rpb24gc2hvdWxkIGJlXG4gICAgICogcHJvdmlkZWQgdG8gcGVyZm9ybSBzZWFyY2hlcywgdGhlIGZ1bmN0aW9uIG11c3QgcmVjZWl2ZSB0d28gYXJndW1lbnRzIGFuZFxuICAgICAqIHJldHVybiB0cnVlIGlmIHRoZXkgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuIEV4YW1wbGU6PC9wPlxuICAgICAqXG4gICAgICogPHByZT5cbiAgICAgKiBjb25zdCBwZXRzQXJlRXF1YWxCeU5hbWUgPSBmdW5jdGlvbihwZXQxLCBwZXQyKSB7XG4gICAgICogIHJldHVybiBwZXQxLm5hbWUgPT09IHBldDIubmFtZTtcbiAgICAgKiB9XG4gICAgICogPC9wcmU+XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gZWxlbWVudCB0byBzZWFyY2ggZm9yLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCk6Ym9vbGVhbj19IGVxdWFsc0Z1bmN0aW9uIE9wdGlvbmFsXG4gICAgICogZnVuY3Rpb24gdXNlZCB0byBjaGVjayBpZiB0d28gZWxlbWVudHMgYXJlIGVxdWFsLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhpcyBsaXN0IGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgZWxlbWVudCwgZmFsc2VcbiAgICAgKiBvdGhlcndpc2UuXG4gICAgICovXG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoaXRlbSwgZXF1YWxzRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmluZGV4T2YoaXRlbSwgZXF1YWxzRnVuY3Rpb24pID49IDApO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiB0aGUgc3BlY2lmaWVkIGVsZW1lbnQgaW4gdGhpcyBsaXN0LlxuICAgICAqIDxwPklmIHRoZSBlbGVtZW50cyBpbnNpZGUgdGhlIGxpc3QgYXJlXG4gICAgICogbm90IGNvbXBhcmFibGUgd2l0aCB0aGUgPT09IG9wZXJhdG9yIGEgY3VzdG9tIGVxdWFscyBmdW5jdGlvbiBzaG91bGQgYmVcbiAgICAgKiBwcm92aWRlZCB0byBwZXJmb3JtIHNlYXJjaGVzLCB0aGUgZnVuY3Rpb24gbXVzdCByZWNlaXZlIHR3byBhcmd1bWVudHMgYW5kXG4gICAgICogcmV0dXJuIHRydWUgaWYgdGhleSBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS4gRXhhbXBsZTo8L3A+XG4gICAgICpcbiAgICAgKiA8cHJlPlxuICAgICAqIGNvbnN0IHBldHNBcmVFcXVhbEJ5TmFtZSA9IGZ1bmN0aW9uKHBldDEsIHBldDIpIHtcbiAgICAgKiAgcmV0dXJuIHBldDEubmFtZSA9PT0gcGV0Mi5uYW1lO1xuICAgICAqIH1cbiAgICAgKiA8L3ByZT5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBlbGVtZW50IHRvIGJlIHJlbW92ZWQgZnJvbSB0aGlzIGxpc3QsIGlmIHByZXNlbnQuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgbGlzdCBjb250YWluZWQgdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgICAqL1xuICAgIExpbmtlZExpc3QucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChpdGVtLCBlcXVhbHNGdW5jdGlvbikge1xuICAgICAgICB2YXIgZXF1YWxzRiA9IGVxdWFsc0Z1bmN0aW9uIHx8IHV0aWwuZGVmYXVsdEVxdWFscztcbiAgICAgICAgaWYgKHRoaXMubkVsZW1lbnRzIDwgMSB8fCB1dGlsLmlzVW5kZWZpbmVkKGl0ZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByZXZpb3VzID0gbnVsbDtcbiAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gdGhpcy5maXJzdE5vZGU7XG4gICAgICAgIHdoaWxlIChjdXJyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGVxdWFsc0YoY3VycmVudE5vZGUuZWxlbWVudCwgaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudE5vZGUgPT09IHRoaXMubGFzdE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1cnJlbnROb2RlID09PSB0aGlzLmxhc3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE5vZGUgPSBwcmV2aW91cztcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXMubmV4dCA9IGN1cnJlbnROb2RlLm5leHQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlLm5leHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXMubmV4dCA9IGN1cnJlbnROb2RlLm5leHQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlLm5leHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm5FbGVtZW50cy0tO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldmlvdXMgPSBjdXJyZW50Tm9kZTtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBvZiB0aGUgZWxlbWVudHMgZnJvbSB0aGlzIGxpc3QuXG4gICAgICovXG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZmlyc3ROb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMubkVsZW1lbnRzID0gMDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGxpc3QgaXMgZXF1YWwgdG8gdGhlIGdpdmVuIGxpc3QuXG4gICAgICogVHdvIGxpc3RzIGFyZSBlcXVhbCBpZiB0aGV5IGhhdmUgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgb3JkZXIuXG4gICAgICogQHBhcmFtIHtMaW5rZWRMaXN0fSBvdGhlciB0aGUgb3RoZXIgbGlzdC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpOmJvb2xlYW49fSBlcXVhbHNGdW5jdGlvbiBvcHRpb25hbFxuICAgICAqIGZ1bmN0aW9uIHVzZWQgdG8gY2hlY2sgaWYgdHdvIGVsZW1lbnRzIGFyZSBlcXVhbC4gSWYgdGhlIGVsZW1lbnRzIGluIHRoZSBsaXN0c1xuICAgICAqIGFyZSBjdXN0b20gb2JqZWN0cyB5b3Ugc2hvdWxkIHByb3ZpZGUgYSBmdW5jdGlvbiwgb3RoZXJ3aXNlXG4gICAgICogdGhlID09PSBvcGVyYXRvciBpcyB1c2VkIHRvIGNoZWNrIGVxdWFsaXR5IGJldHdlZW4gZWxlbWVudHMuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGlzIGxpc3QgaXMgZXF1YWwgdG8gdGhlIGdpdmVuIGxpc3QuXG4gICAgICovXG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKG90aGVyLCBlcXVhbHNGdW5jdGlvbikge1xuICAgICAgICB2YXIgZXFGID0gZXF1YWxzRnVuY3Rpb24gfHwgdXRpbC5kZWZhdWx0RXF1YWxzO1xuICAgICAgICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIExpbmtlZExpc3QpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2l6ZSgpICE9PSBvdGhlci5zaXplKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lcXVhbHNBdXgodGhpcy5maXJzdE5vZGUsIG90aGVyLmZpcnN0Tm9kZSwgZXFGKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUuZXF1YWxzQXV4ID0gZnVuY3Rpb24gKG4xLCBuMiwgZXFGKSB7XG4gICAgICAgIHdoaWxlIChuMSAhPT0gbnVsbCAmJiBuMiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKCFlcUYobjEuZWxlbWVudCwgbjIuZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuMSA9IG4xLm5leHQ7XG4gICAgICAgICAgICBuMiA9IG4yLm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBlbGVtZW50IGF0IHRoZSBzcGVjaWZpZWQgcG9zaXRpb24gaW4gdGhpcyBsaXN0LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBnaXZlbiBpbmRleC5cbiAgICAgKiBAcmV0dXJuIHsqfSByZW1vdmVkIGVsZW1lbnQgb3IgdW5kZWZpbmVkIGlmIHRoZSBpbmRleCBpcyBvdXQgb2YgYm91bmRzLlxuICAgICAqL1xuICAgIExpbmtlZExpc3QucHJvdG90eXBlLnJlbW92ZUVsZW1lbnRBdEluZGV4ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5uRWxlbWVudHMgfHwgdGhpcy5maXJzdE5vZGUgPT09IG51bGwgfHwgdGhpcy5sYXN0Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZWxlbWVudDtcbiAgICAgICAgaWYgKHRoaXMubkVsZW1lbnRzID09PSAxKSB7XG4gICAgICAgICAgICAvL0ZpcnN0IG5vZGUgaW4gdGhlIGxpc3QuXG4gICAgICAgICAgICBlbGVtZW50ID0gdGhpcy5maXJzdE5vZGUuZWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuZmlyc3ROb2RlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMubGFzdE5vZGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZXZpb3VzID0gdGhpcy5ub2RlQXRJbmRleChpbmRleCAtIDEpO1xuICAgICAgICAgICAgaWYgKHByZXZpb3VzID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMuZmlyc3ROb2RlLmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdE5vZGUgPSB0aGlzLmZpcnN0Tm9kZS5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocHJldmlvdXMubmV4dCA9PT0gdGhpcy5sYXN0Tm9kZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLmxhc3ROb2RlLmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IHByZXZpb3VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByZXZpb3VzICE9PSBudWxsICYmIHByZXZpb3VzLm5leHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gcHJldmlvdXMubmV4dC5lbGVtZW50O1xuICAgICAgICAgICAgICAgIHByZXZpb3VzLm5leHQgPSBwcmV2aW91cy5uZXh0Lm5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uRWxlbWVudHMtLTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gb25jZSBmb3IgZWFjaCBlbGVtZW50IHByZXNlbnQgaW4gdGhpcyBsaXN0IGluIG9yZGVyLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0KToqfSBjYWxsYmFjayBmdW5jdGlvbiB0byBleGVjdXRlLCBpdCBpc1xuICAgICAqIGludm9rZWQgd2l0aCBvbmUgYXJndW1lbnQ6IHRoZSBlbGVtZW50IHZhbHVlLCB0byBicmVhayB0aGUgaXRlcmF0aW9uIHlvdSBjYW5cbiAgICAgKiBvcHRpb25hbGx5IHJldHVybiBmYWxzZS5cbiAgICAgKi9cbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IHRoaXMuZmlyc3ROb2RlO1xuICAgICAgICB3aGlsZSAoY3VycmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayhjdXJyZW50Tm9kZS5lbGVtZW50KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV2ZXJzZXMgdGhlIG9yZGVyIG9mIHRoZSBlbGVtZW50cyBpbiB0aGlzIGxpbmtlZCBsaXN0IChtYWtlcyB0aGUgbGFzdFxuICAgICAqIGVsZW1lbnQgZmlyc3QsIGFuZCB0aGUgZmlyc3QgZWxlbWVudCBsYXN0KS5cbiAgICAgKi9cbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcHJldmlvdXMgPSBudWxsO1xuICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMuZmlyc3ROb2RlO1xuICAgICAgICB2YXIgdGVtcCA9IG51bGw7XG4gICAgICAgIHdoaWxlIChjdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0ZW1wID0gY3VycmVudC5uZXh0O1xuICAgICAgICAgICAgY3VycmVudC5uZXh0ID0gcHJldmlvdXM7XG4gICAgICAgICAgICBwcmV2aW91cyA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBjdXJyZW50ID0gdGVtcDtcbiAgICAgICAgfVxuICAgICAgICB0ZW1wID0gdGhpcy5maXJzdE5vZGU7XG4gICAgICAgIHRoaXMuZmlyc3ROb2RlID0gdGhpcy5sYXN0Tm9kZTtcbiAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IHRlbXA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBlbGVtZW50cyBpbiB0aGlzIGxpc3QgaW4gcHJvcGVyXG4gICAgICogc2VxdWVuY2UuXG4gICAgICogQHJldHVybiB7QXJyYXkuPCo+fSBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgZWxlbWVudHMgaW4gdGhpcyBsaXN0LFxuICAgICAqIGluIHByb3BlciBzZXF1ZW5jZS5cbiAgICAgKi9cbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gdGhpcy5maXJzdE5vZGU7XG4gICAgICAgIHdoaWxlIChjdXJyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgYXJyYXkucHVzaChjdXJyZW50Tm9kZS5lbGVtZW50KTtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhpcyBsaXN0LlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGlzIGxpc3QuXG4gICAgICovXG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubkVsZW1lbnRzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgbGlzdCBjb250YWlucyBubyBlbGVtZW50cy5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgbGlzdCBjb250YWlucyBubyBlbGVtZW50cy5cbiAgICAgKi9cbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uRWxlbWVudHMgPD0gMDtcbiAgICB9O1xuICAgIExpbmtlZExpc3QucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJyYXlzLnRvU3RyaW5nKHRoaXMudG9BcnJheSgpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUubm9kZUF0SW5kZXggPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLm5FbGVtZW50cykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID09PSAodGhpcy5uRWxlbWVudHMgLSAxKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFzdE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLmZpcnN0Tm9kZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmRleCAmJiBub2RlICE9PSBudWxsOyBpKyspIHtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIExpbmtlZExpc3QucHJvdG90eXBlLmNyZWF0ZU5vZGUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudDogaXRlbSxcbiAgICAgICAgICAgIG5leHQ6IG51bGxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBMaW5rZWRMaXN0O1xufSgpKTsgLy8gRW5kIG9mIGxpbmtlZCBsaXN0XG5leHBvcnRzLmRlZmF1bHQgPSBMaW5rZWRMaXN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TGlua2VkTGlzdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbnZhciBEaWN0aW9uYXJ5XzEgPSByZXF1aXJlKFwiLi9EaWN0aW9uYXJ5XCIpO1xudmFyIGFycmF5cyA9IHJlcXVpcmUoXCIuL2FycmF5c1wiKTtcbnZhciBNdWx0aURpY3Rpb25hcnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBlbXB0eSBtdWx0aSBkaWN0aW9uYXJ5LlxuICAgICAqIEBjbGFzcyA8cD5BIG11bHRpIGRpY3Rpb25hcnkgaXMgYSBzcGVjaWFsIGtpbmQgb2YgZGljdGlvbmFyeSB0aGF0IGhvbGRzXG4gICAgICogbXVsdGlwbGUgdmFsdWVzIGFnYWluc3QgZWFjaCBrZXkuIFNldHRpbmcgYSB2YWx1ZSBpbnRvIHRoZSBkaWN0aW9uYXJ5IHdpbGxcbiAgICAgKiBhZGQgdGhlIHZhbHVlIHRvIGFuIGFycmF5IGF0IHRoYXQga2V5LiBHZXR0aW5nIGEga2V5IHdpbGwgcmV0dXJuIGFuIGFycmF5LFxuICAgICAqIGhvbGRpbmcgYWxsIHRoZSB2YWx1ZXMgc2V0IHRvIHRoYXQga2V5LlxuICAgICAqIFlvdSBjYW4gY29uZmlndXJlIHRvIGFsbG93IGR1cGxpY2F0ZXMgaW4gdGhlIHZhbHVlcy5cbiAgICAgKiBUaGlzIGltcGxlbWVudGF0aW9uIGFjY2VwdHMgYW55IGtpbmQgb2Ygb2JqZWN0cyBhcyBrZXlzLjwvcD5cbiAgICAgKlxuICAgICAqIDxwPklmIHRoZSBrZXlzIGFyZSBjdXN0b20gb2JqZWN0cyBhIGZ1bmN0aW9uIHdoaWNoIGNvbnZlcnRzIGtleXMgdG8gc3RyaW5ncyBtdXN0IGJlXG4gICAgICogcHJvdmlkZWQuIEV4YW1wbGU6PC9wPlxuICAgICAqXG4gICAgICogPHByZT5cbiAgICAgKiBmdW5jdGlvbiBwZXRUb1N0cmluZyhwZXQpIHtcbiAgICAgKiAgICAgcmV0dXJuIHBldC5uYW1lO1xuICAgICAqIH1cbiAgICAgKiA8L3ByZT5cbiAgICAgKiA8cD5JZiB0aGUgdmFsdWVzIGFyZSBjdXN0b20gb2JqZWN0cyBhIGZ1bmN0aW9uIHRvIGNoZWNrIGVxdWFsaXR5IGJldHdlZW4gdmFsdWVzXG4gICAgICogbXVzdCBiZSBwcm92aWRlZC4gRXhhbXBsZTo8L3A+XG4gICAgICpcbiAgICAgKiA8cHJlPlxuICAgICAqIGZ1bmN0aW9uIHBldHNBcmVFcXVhbEJ5QWdlKHBldDEscGV0Mikge1xuICAgICAqICAgICByZXR1cm4gcGV0MS5hZ2UgPT09IHBldDIuYWdlO1xuICAgICAqIH1cbiAgICAgKiA8L3ByZT5cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6c3RyaW5nPX0gdG9TdHJGdW5jdGlvbiBvcHRpb25hbCBmdW5jdGlvblxuICAgICAqIHRvIGNvbnZlcnQga2V5cyB0byBzdHJpbmdzLiBJZiB0aGUga2V5cyBhcmVuJ3Qgc3RyaW5ncyBvciBpZiB0b1N0cmluZygpXG4gICAgICogaXMgbm90IGFwcHJvcHJpYXRlLCBhIGN1c3RvbSBmdW5jdGlvbiB3aGljaCByZWNlaXZlcyBhIGtleSBhbmQgcmV0dXJucyBhXG4gICAgICogdW5pcXVlIHN0cmluZyBtdXN0IGJlIHByb3ZpZGVkLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCk6Ym9vbGVhbj19IHZhbHVlc0VxdWFsc0Z1bmN0aW9uIG9wdGlvbmFsXG4gICAgICogZnVuY3Rpb24gdG8gY2hlY2sgaWYgdHdvIHZhbHVlcyBhcmUgZXF1YWwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYWxsb3dEdXBsaWNhdGVWYWx1ZXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBNdWx0aURpY3Rpb25hcnkodG9TdHJGdW5jdGlvbiwgdmFsdWVzRXF1YWxzRnVuY3Rpb24sIGFsbG93RHVwbGljYXRlVmFsdWVzKSB7XG4gICAgICAgIGlmIChhbGxvd0R1cGxpY2F0ZVZhbHVlcyA9PT0gdm9pZCAwKSB7IGFsbG93RHVwbGljYXRlVmFsdWVzID0gZmFsc2U7IH1cbiAgICAgICAgdGhpcy5kaWN0ID0gbmV3IERpY3Rpb25hcnlfMS5kZWZhdWx0KHRvU3RyRnVuY3Rpb24pO1xuICAgICAgICB0aGlzLmVxdWFsc0YgPSB2YWx1ZXNFcXVhbHNGdW5jdGlvbiB8fCB1dGlsLmRlZmF1bHRFcXVhbHM7XG4gICAgICAgIHRoaXMuYWxsb3dEdXBsaWNhdGUgPSBhbGxvd0R1cGxpY2F0ZVZhbHVlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBob2xkaW5nIHRoZSB2YWx1ZXMgdG8gd2hpY2ggdGhpcyBkaWN0aW9uYXJ5IG1hcHNcbiAgICAgKiB0aGUgc3BlY2lmaWVkIGtleS5cbiAgICAgKiBSZXR1cm5zIGFuIGVtcHR5IGFycmF5IGlmIHRoaXMgZGljdGlvbmFyeSBjb250YWlucyBubyBtYXBwaW5ncyBmb3IgdGhpcyBrZXkuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGtleSBrZXkgd2hvc2UgYXNzb2NpYXRlZCB2YWx1ZXMgYXJlIHRvIGJlIHJldHVybmVkLlxuICAgICAqIEByZXR1cm4ge0FycmF5fSBhbiBhcnJheSBob2xkaW5nIHRoZSB2YWx1ZXMgdG8gd2hpY2ggdGhpcyBkaWN0aW9uYXJ5IG1hcHNcbiAgICAgKiB0aGUgc3BlY2lmaWVkIGtleS5cbiAgICAgKi9cbiAgICBNdWx0aURpY3Rpb25hcnkucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy5kaWN0LmdldFZhbHVlKGtleSk7XG4gICAgICAgIGlmICh1dGlsLmlzVW5kZWZpbmVkKHZhbHVlcykpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXlzLmNvcHkodmFsdWVzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIHZhbHVlIHRvIHRoZSBhcnJheSBhc3NvY2lhdGVkIHdpdGggdGhlIHNwZWNpZmllZCBrZXksIGlmXG4gICAgICogaXQgaXMgbm90IGFscmVhZHkgcHJlc2VudC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0ga2V5IGtleSB3aXRoIHdoaWNoIHRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgdG8gYmVcbiAgICAgKiBhc3NvY2lhdGVkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB0aGUgdmFsdWUgdG8gYWRkIHRvIHRoZSBhcnJheSBhdCB0aGUga2V5XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgd2FzIG5vdCBhbHJlYWR5IGFzc29jaWF0ZWQgd2l0aCB0aGF0IGtleS5cbiAgICAgKi9cbiAgICBNdWx0aURpY3Rpb25hcnkucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHV0aWwuaXNVbmRlZmluZWQoa2V5KSB8fCB1dGlsLmlzVW5kZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhcnJheSA9IHRoaXMuZGljdC5nZXRWYWx1ZShrZXkpO1xuICAgICAgICBpZiAodXRpbC5pc1VuZGVmaW5lZChhcnJheSkpIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5zZXRWYWx1ZShrZXksIFt2YWx1ZV0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmFsbG93RHVwbGljYXRlKSB7XG4gICAgICAgICAgICBpZiAoYXJyYXlzLmNvbnRhaW5zKGFycmF5LCB2YWx1ZSwgdGhpcy5lcXVhbHNGKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhcnJheS5wdXNoKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBzcGVjaWZpZWQgdmFsdWVzIGZyb20gdGhlIGFycmF5IG9mIHZhbHVlcyBhc3NvY2lhdGVkIHdpdGggdGhlXG4gICAgICogc3BlY2lmaWVkIGtleS4gSWYgYSB2YWx1ZSBpc24ndCBnaXZlbiwgYWxsIHZhbHVlcyBhc3NvY2lhdGVkIHdpdGggdGhlIHNwZWNpZmllZFxuICAgICAqIGtleSBhcmUgcmVtb3ZlZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0ga2V5IGtleSB3aG9zZSBtYXBwaW5nIGlzIHRvIGJlIHJlbW92ZWQgZnJvbSB0aGVcbiAgICAgKiBkaWN0aW9uYXJ5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0PX0gdmFsdWUgb3B0aW9uYWwgYXJndW1lbnQgdG8gc3BlY2lmeSB0aGUgdmFsdWUgdG8gcmVtb3ZlXG4gICAgICogZnJvbSB0aGUgYXJyYXkgYXNzb2NpYXRlZCB3aXRoIHRoZSBzcGVjaWZpZWQga2V5LlxuICAgICAqIEByZXR1cm4geyp9IHRydWUgaWYgdGhlIGRpY3Rpb25hcnkgY2hhbmdlZCwgZmFsc2UgaWYgdGhlIGtleSBkb2Vzbid0IGV4aXN0IG9yXG4gICAgICogaWYgdGhlIHNwZWNpZmllZCB2YWx1ZSBpc24ndCBhc3NvY2lhdGVkIHdpdGggdGhlIHNwZWNpZmllZCBrZXkuXG4gICAgICovXG4gICAgTXVsdGlEaWN0aW9uYXJ5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodXRpbC5pc1VuZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5kaWN0LnJlbW92ZShrZXkpO1xuICAgICAgICAgICAgcmV0dXJuICF1dGlsLmlzVW5kZWZpbmVkKHYpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhcnJheSA9IHRoaXMuZGljdC5nZXRWYWx1ZShrZXkpO1xuICAgICAgICBpZiAoIXV0aWwuaXNVbmRlZmluZWQoYXJyYXkpICYmIGFycmF5cy5yZW1vdmUoYXJyYXksIHZhbHVlLCB0aGlzLmVxdWFsc0YpKSB7XG4gICAgICAgICAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0LnJlbW92ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUga2V5cyBpbiB0aGlzIGRpY3Rpb25hcnkuXG4gICAgICogQHJldHVybiB7QXJyYXl9IGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBrZXlzIGluIHRoaXMgZGljdGlvbmFyeS5cbiAgICAgKi9cbiAgICBNdWx0aURpY3Rpb25hcnkucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpY3Qua2V5cygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgdmFsdWVzIGluIHRoaXMgZGljdGlvbmFyeS5cbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIHZhbHVlcyBpbiB0aGlzIGRpY3Rpb25hcnkuXG4gICAgICovXG4gICAgTXVsdGlEaWN0aW9uYXJ5LnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLmRpY3QudmFsdWVzKCk7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHZhbHVlc18xID0gdmFsdWVzOyBfaSA8IHZhbHVlc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIHYgPSB2YWx1ZXNfMVtfaV07XG4gICAgICAgICAgICBmb3IgKHZhciBfYSA9IDAsIHZfMSA9IHY7IF9hIDwgdl8xLmxlbmd0aDsgX2ErKykge1xuICAgICAgICAgICAgICAgIHZhciB3ID0gdl8xW19hXTtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGRpY3Rpb25hcnkgYXQgbGVhc3Qgb25lIHZhbHVlIGFzc29jaWF0dGVkIHRoZSBzcGVjaWZpZWQga2V5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBrZXkga2V5IHdob3NlIHByZXNlbmNlIGluIHRoaXMgZGljdGlvbmFyeSBpcyB0byBiZVxuICAgICAqIHRlc3RlZC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgZGljdGlvbmFyeSBhdCBsZWFzdCBvbmUgdmFsdWUgYXNzb2NpYXR0ZWRcbiAgICAgKiB0aGUgc3BlY2lmaWVkIGtleS5cbiAgICAgKi9cbiAgICBNdWx0aURpY3Rpb25hcnkucHJvdG90eXBlLmNvbnRhaW5zS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaWN0LmNvbnRhaW5zS2V5KGtleSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBtYXBwaW5ncyBmcm9tIHRoaXMgZGljdGlvbmFyeS5cbiAgICAgKi9cbiAgICBNdWx0aURpY3Rpb25hcnkucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpY3QuY2xlYXIoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBrZXlzIGluIHRoaXMgZGljdGlvbmFyeS5cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW1iZXIgb2Yga2V5LXZhbHVlIG1hcHBpbmdzIGluIHRoaXMgZGljdGlvbmFyeS5cbiAgICAgKi9cbiAgICBNdWx0aURpY3Rpb25hcnkucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpY3Quc2l6ZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgZGljdGlvbmFyeSBjb250YWlucyBubyBtYXBwaW5ncy5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgZGljdGlvbmFyeSBjb250YWlucyBubyBtYXBwaW5ncy5cbiAgICAgKi9cbiAgICBNdWx0aURpY3Rpb25hcnkucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpY3QuaXNFbXB0eSgpO1xuICAgIH07XG4gICAgcmV0dXJuIE11bHRpRGljdGlvbmFyeTtcbn0oKSk7IC8vIGVuZCBvZiBtdWx0aSBkaWN0aW9uYXJ5XG5leHBvcnRzLmRlZmF1bHQgPSBNdWx0aURpY3Rpb25hcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1NdWx0aURpY3Rpb25hcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRGlyZWN0aW9uO1xuKGZ1bmN0aW9uIChEaXJlY3Rpb24pIHtcbiAgICBEaXJlY3Rpb25bRGlyZWN0aW9uW1wiQkVGT1JFXCJdID0gMF0gPSBcIkJFRk9SRVwiO1xuICAgIERpcmVjdGlvbltEaXJlY3Rpb25bXCJBRlRFUlwiXSA9IDFdID0gXCJBRlRFUlwiO1xuICAgIERpcmVjdGlvbltEaXJlY3Rpb25bXCJJTlNJREVfQVRfRU5EXCJdID0gMl0gPSBcIklOU0lERV9BVF9FTkRcIjtcbiAgICBEaXJlY3Rpb25bRGlyZWN0aW9uW1wiSU5TSURFX0FUX1NUQVJUXCJdID0gM10gPSBcIklOU0lERV9BVF9TVEFSVFwiO1xufSkoRGlyZWN0aW9uIHx8IChEaXJlY3Rpb24gPSB7fSkpO1xudmFyIE11bHRpUm9vdFRyZWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTXVsdGlSb290VHJlZShyb290SWRzLCBub2Rlcykge1xuICAgICAgICBpZiAocm9vdElkcyA9PT0gdm9pZCAwKSB7IHJvb3RJZHMgPSBbXTsgfVxuICAgICAgICBpZiAobm9kZXMgPT09IHZvaWQgMCkgeyBub2RlcyA9IHt9OyB9XG4gICAgICAgIHRoaXMucm9vdElkcyA9IHJvb3RJZHM7XG4gICAgICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgICAgICAgdGhpcy5pbml0Um9vdElkcygpO1xuICAgICAgICB0aGlzLmluaXROb2RlcygpO1xuICAgIH1cbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5pbml0Um9vdElkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMucm9vdElkczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciByb290SWQgPSBfYVtfaV07XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVtcHR5Tm9kZUlmTm90RXhpc3Qocm9vdElkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUuaW5pdE5vZGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBub2RlS2V5IGluIHRoaXMubm9kZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGVzLmhhc093blByb3BlcnR5KG5vZGVLZXkpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMubm9kZXNbbm9kZUtleV07IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlTGlzdEl0ZW0gPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRW1wdHlOb2RlSWZOb3RFeGlzdChub2RlTGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUuY3JlYXRlRW1wdHlOb2RlSWZOb3RFeGlzdCA9IGZ1bmN0aW9uIChub2RlS2V5KSB7XG4gICAgICAgIGlmICghdGhpcy5ub2Rlc1tub2RlS2V5XSkge1xuICAgICAgICAgICAgdGhpcy5ub2Rlc1tub2RlS2V5XSA9IFtdO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5nZXRSb290SWRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2xvbmUgPSB0aGlzLnJvb3RJZHMuc2xpY2UoKTtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUuZ2V0Tm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjbG9uZSA9IHt9O1xuICAgICAgICBmb3IgKHZhciBub2RlS2V5IGluIHRoaXMubm9kZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGVzLmhhc093blByb3BlcnR5KG5vZGVLZXkpKSB7XG4gICAgICAgICAgICAgICAgY2xvbmVbbm9kZUtleV0gPSB0aGlzLm5vZGVzW25vZGVLZXldLnNsaWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUuZ2V0T2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm9vdElkczogdGhpcy5nZXRSb290SWRzKCksXG4gICAgICAgICAgICBub2RlczogdGhpcy5nZXROb2RlcygpLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9iamVjdCgpO1xuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUuZmxhdHRlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGV4dHJhUHJvcHNPYmplY3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvb3RJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciByb290SWQgPSB0aGlzLnJvb3RJZHNbaV07XG4gICAgICAgICAgICBleHRyYVByb3BzT2JqZWN0LnB1c2goe1xuICAgICAgICAgICAgICAgIGlkOiByb290SWQsXG4gICAgICAgICAgICAgICAgbGV2ZWw6IDAsXG4gICAgICAgICAgICAgICAgaGFzUGFyZW50OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkNvdW50OiAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0cmF2ZXJzZShyb290SWQsIHRoaXMubm9kZXMsIGV4dHJhUHJvcHNPYmplY3QsIDApO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgZXh0cmFQcm9wc09iamVjdF8xID0gZXh0cmFQcm9wc09iamVjdDsgX2kgPCBleHRyYVByb3BzT2JqZWN0XzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgbyA9IGV4dHJhUHJvcHNPYmplY3RfMVtfaV07XG4gICAgICAgICAgICBvLmNoaWxkcmVuQ291bnQgPSBjb3VudENoaWxkcmVuKG8uaWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHRyYVByb3BzT2JqZWN0O1xuICAgICAgICBmdW5jdGlvbiBjb3VudENoaWxkcmVuKGlkKSB7XG4gICAgICAgICAgICBpZiAoIV90aGlzLm5vZGVzW2lkXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuQ291bnQgPSBfdGhpcy5ub2Rlc1tpZF0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbkNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHRyYXZlcnNlKHN0YXJ0SWQsIG5vZGVzLCByZXR1cm5BcnJheSwgbGV2ZWwpIHtcbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gdm9pZCAwKSB7IGxldmVsID0gMDsgfVxuICAgICAgICAgICAgaWYgKCFzdGFydElkIHx8ICFub2RlcyB8fCAhcmV0dXJuQXJyYXkgfHwgIW5vZGVzW3N0YXJ0SWRdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV2ZWwrKztcbiAgICAgICAgICAgIHZhciBpZHNMaXN0ID0gbm9kZXNbc3RhcnRJZF07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlkc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBpZHNMaXN0W2ldO1xuICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2goeyBpZDogaWQsIGxldmVsOiBsZXZlbCwgaGFzUGFyZW50OiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIHRyYXZlcnNlKGlkLCBub2RlcywgcmV0dXJuQXJyYXksIGxldmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldmVsLS07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLm1vdmVJZEJlZm9yZUlkID0gZnVuY3Rpb24gKG1vdmVJZCwgYmVmb3JlSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW92ZUlkKG1vdmVJZCwgYmVmb3JlSWQsIERpcmVjdGlvbi5CRUZPUkUpO1xuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUubW92ZUlkQWZ0ZXJJZCA9IGZ1bmN0aW9uIChtb3ZlSWQsIGFmdGVySWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW92ZUlkKG1vdmVJZCwgYWZ0ZXJJZCwgRGlyZWN0aW9uLkFGVEVSKTtcbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLm1vdmVJZEludG9JZCA9IGZ1bmN0aW9uIChtb3ZlSWQsIGluc2lkZUlkLCBhdFN0YXJ0KSB7XG4gICAgICAgIGlmIChhdFN0YXJ0ID09PSB2b2lkIDApIHsgYXRTdGFydCA9IHRydWU7IH1cbiAgICAgICAgaWYgKGF0U3RhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vdmVJZChtb3ZlSWQsIGluc2lkZUlkLCBEaXJlY3Rpb24uSU5TSURFX0FUX1NUQVJUKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vdmVJZChtb3ZlSWQsIGluc2lkZUlkLCBEaXJlY3Rpb24uSU5TSURFX0FUX0VORCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLnN3YXBSb290SWRXaXRoUm9vdElkID0gZnVuY3Rpb24gKHJvb3RJZCwgd2l0aFJvb3RJZCkge1xuICAgICAgICB2YXIgbGVmdEluZGV4ID0gdGhpcy5maW5kUm9vdElkKHJvb3RJZCk7XG4gICAgICAgIHZhciByaWdodEluZGV4ID0gdGhpcy5maW5kUm9vdElkKHdpdGhSb290SWQpO1xuICAgICAgICB0aGlzLnN3YXBSb290UG9zaXRpb25XaXRoUm9vdFBvc2l0aW9uKGxlZnRJbmRleCwgcmlnaHRJbmRleCk7XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5zd2FwUm9vdFBvc2l0aW9uV2l0aFJvb3RQb3NpdGlvbiA9IGZ1bmN0aW9uIChzd2FwUm9vdFBvc2l0aW9uLCB3aXRoUm9vdFBvc2l0aW9uKSB7XG4gICAgICAgIHZhciB0ZW1wID0gdGhpcy5yb290SWRzW3dpdGhSb290UG9zaXRpb25dO1xuICAgICAgICB0aGlzLnJvb3RJZHNbd2l0aFJvb3RQb3NpdGlvbl0gPSB0aGlzLnJvb3RJZHNbc3dhcFJvb3RQb3NpdGlvbl07XG4gICAgICAgIHRoaXMucm9vdElkc1tzd2FwUm9vdFBvc2l0aW9uXSA9IHRlbXA7XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5kZWxldGVJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB0aGlzLnJvb3REZWxldGVJZChpZCk7XG4gICAgICAgIHRoaXMubm9kZUFuZFN1Yk5vZGVzRGVsZXRlKGlkKTtcbiAgICAgICAgdGhpcy5ub2RlUmVmcmVuY2VzRGVsZXRlKGlkKTtcbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLmluc2VydElkQmVmb3JlSWQgPSBmdW5jdGlvbiAoYmVmb3JlSWQsIGluc2VydElkKSB7XG4gICAgICAgIHZhciBmb3VuZFJvb3RJZEluZGV4ID0gdGhpcy5maW5kUm9vdElkKGJlZm9yZUlkKTtcbiAgICAgICAgaWYgKGZvdW5kUm9vdElkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5pbnNlcnRJZEludG9Sb290KGluc2VydElkLCBmb3VuZFJvb3RJZEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBub2RlS2V5IGluIHRoaXMubm9kZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGVzLmhhc093blByb3BlcnR5KG5vZGVLZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvdW5kTm9kZUlkSW5kZXggPSB0aGlzLmZpbmROb2RlSWQobm9kZUtleSwgYmVmb3JlSWQpO1xuICAgICAgICAgICAgICAgIGlmIChmb3VuZE5vZGVJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRJZEludG9Ob2RlKG5vZGVLZXksIGluc2VydElkLCBmb3VuZE5vZGVJZEluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLmluc2VydElkQWZ0ZXJJZCA9IGZ1bmN0aW9uIChiZWxvd0lkLCBpbnNlcnRJZCkge1xuICAgICAgICB2YXIgZm91bmRSb290SWRJbmRleCA9IHRoaXMuZmluZFJvb3RJZChiZWxvd0lkKTtcbiAgICAgICAgaWYgKGZvdW5kUm9vdElkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5pbnNlcnRJZEludG9Sb290KGluc2VydElkLCBmb3VuZFJvb3RJZEluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgbm9kZUtleSBpbiB0aGlzLm5vZGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2Rlcy5oYXNPd25Qcm9wZXJ0eShub2RlS2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciBmb3VuZE5vZGVJZEluZGV4ID0gdGhpcy5maW5kTm9kZUlkKG5vZGVLZXksIGJlbG93SWQpO1xuICAgICAgICAgICAgICAgIGlmIChmb3VuZE5vZGVJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRJZEludG9Ob2RlKG5vZGVLZXksIGluc2VydElkLCBmb3VuZE5vZGVJZEluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5pbnNlcnRJZEludG9JZCA9IGZ1bmN0aW9uIChpbnNpZGVJZCwgaW5zZXJ0SWQpIHtcbiAgICAgICAgdGhpcy5ub2RlSW5zZXJ0QXRFbmQoaW5zaWRlSWQsIGluc2VydElkKTtcbiAgICAgICAgdGhpcy5ub2Rlc1tpbnNlcnRJZF0gPSBbXTtcbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLmluc2VydElkSW50b1Jvb3QgPSBmdW5jdGlvbiAoaWQsIHBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3RJbnNlcnRBdEVuZChpZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocG9zaXRpb24gPCAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxlbmd0aF8xID0gdGhpcy5yb290SWRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3RJZHMuc3BsaWNlKChwb3NpdGlvbiArIGxlbmd0aF8xICsgMSksIDAsIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdElkcy5zcGxpY2UocG9zaXRpb24sIDAsIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGVzW2lkXSA9IHRoaXMubm9kZXNbaWRdIHx8IFtdO1xuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUuaW5zZXJ0SWRJbnRvTm9kZSA9IGZ1bmN0aW9uIChub2RlS2V5LCBpZCwgcG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5ub2Rlc1tub2RlS2V5XSA9IHRoaXMubm9kZXNbbm9kZUtleV0gfHwgW107XG4gICAgICAgIHRoaXMubm9kZXNbaWRdID0gdGhpcy5ub2Rlc1tpZF0gfHwgW107XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVJbnNlcnRBdEVuZChub2RlS2V5LCBpZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocG9zaXRpb24gPCAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxlbmd0aF8yID0gdGhpcy5ub2Rlc1tub2RlS2V5XS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlc1tub2RlS2V5XS5zcGxpY2UoKHBvc2l0aW9uICsgbGVuZ3RoXzIgKyAxKSwgMCwgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlc1tub2RlS2V5XS5zcGxpY2UocG9zaXRpb24sIDAsIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUubW92ZUlkID0gZnVuY3Rpb24gKG1vdmVJZCwgYmVmb3JlSWQsIGRpcmVjdGlvbikge1xuICAgICAgICB2YXIgc291cmNlSWQgPSBtb3ZlSWQ7XG4gICAgICAgIHZhciBzb3VyY2VSb290SW5kZXggPSB0aGlzLmZpbmRSb290SWQoc291cmNlSWQpO1xuICAgICAgICB2YXIgc291cmNlTm9kZUtleTtcbiAgICAgICAgdmFyIHNvdXJjZU5vZGVJZEluZGV4O1xuICAgICAgICBpZiAodGhpcy5ub2Rlc1tiZWZvcmVJZF0pIHtcbiAgICAgICAgICAgIHNvdXJjZU5vZGVLZXkgPSBiZWZvcmVJZDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBub2RlS2V5IGluIHRoaXMubm9kZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGVzLmhhc093blByb3BlcnR5KG5vZGVLZXkpKSB7XG4gICAgICAgICAgICAgICAgc291cmNlTm9kZUlkSW5kZXggPSB0aGlzLmZpbmROb2RlSWQobm9kZUtleSwgYmVmb3JlSWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGdvdCBhbGxcbiAgICAgICAgdmFyIHRhcmdldElkID0gYmVmb3JlSWQ7XG4gICAgICAgIHZhciB0YXJnZXRSb290SW5kZXggPSB0aGlzLmZpbmRSb290SWQodGFyZ2V0SWQpO1xuICAgICAgICB2YXIgdGFyZ2V0Tm9kZUtleTtcbiAgICAgICAgdmFyIHRhcmdldE5vZGVJZEluZGV4O1xuICAgICAgICBpZiAodGhpcy5ub2Rlc1tiZWZvcmVJZF0pIHtcbiAgICAgICAgICAgIHRhcmdldE5vZGVLZXkgPSBiZWZvcmVJZDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBub2RlS2V5IGluIHRoaXMubm9kZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGVzLmhhc093blByb3BlcnR5KG5vZGVLZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZUlkSW5kZXggPSB0aGlzLmZpbmROb2RlSWQobm9kZUtleSwgYmVmb3JlSWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGdvdCBhbGxcbiAgICAgICAgaWYgKHNvdXJjZVJvb3RJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0Um9vdEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyBtb3Zpbmcgcm9vdCB0byByb290XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYE1vdmluZyBST09UIHRvIFJPT1RgKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgUm9vdElkczpgKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnJvb3RJZHMpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBUYXJnZXRJbmRleD0ke3RhcmdldFJvb3RJbmRleH0sIFNvdXJjZUluZGV4PSR7c291cmNlUm9vdEluZGV4fWApO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBUYXJnZXRJZD0ke3RhcmdldElkfSwgU291cmNlSWQ9JHtzb3VyY2VJZH1gKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3REZWxldGUoc291cmNlUm9vdEluZGV4KTsgLy8gaW5kZXhlcyBjaGFuZ2Ugbm93XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFJvb3RJbmRleCA+IHNvdXJjZVJvb3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRSb290SW5kZXgtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLkJFRk9SRTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0SWRJbnRvUm9vdChzb3VyY2VJZCwgdGFyZ2V0Um9vdEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5BRlRFUjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0SWRJbnRvUm9vdChzb3VyY2VJZCwgdGFyZ2V0Um9vdEluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uSU5TSURFX0FUX1NUQVJUOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlSW5zZXJ0QXRTdGFydCh0YXJnZXRJZCwgc291cmNlSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLklOU0lERV9BVF9FTkQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVJbnNlcnRBdEVuZCh0YXJnZXRJZCwgc291cmNlSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbW92aW5nIHJvb3QgKHNvdXJjZSkgQUJPVkUgbm9kZSAodGFyZ2V0KVxuICAgICAgICAgICAgICAgIC8vIHdpbGwgcmVtb3ZlIG9uZSBlbnRyeSBmcm9tIHJvb3RzXG4gICAgICAgICAgICAgICAgdGhpcy5yb290RGVsZXRlKHNvdXJjZVJvb3RJbmRleCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbm9kZUtleSBpbiB0aGlzLm5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGVzLmhhc093blByb3BlcnR5KG5vZGVLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmZpbmROb2RlSWQobm9kZUtleSwgdGFyZ2V0SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5CRUZPUkU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydElkSW50b05vZGUobm9kZUtleSwgc291cmNlSWQsIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5BRlRFUjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0SWRJbnRvTm9kZShub2RlS2V5LCBzb3VyY2VJZCwgaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5JTlNJREVfQVRfU1RBUlQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVJbnNlcnRBdFN0YXJ0KHRhcmdldElkLCBzb3VyY2VJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uSU5TSURFX0FUX0VORDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZUluc2VydEF0RW5kKHRhcmdldElkLCBzb3VyY2VJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0Um9vdEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyBtb3Zpbmcgbm9kZSAoc291cmNlKSBBQk9WRSByb290ICh0YXJnZXQpXG4gICAgICAgICAgICAgICAgLy8gZGVsZXRlIHNvdXJjZSBpZCBmcm9tIGVhY2ggbm9kZVxuICAgICAgICAgICAgICAgIGZvciAodmFyIG5vZGVLZXkgaW4gdGhpcy5ub2Rlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2Rlcy5oYXNPd25Qcm9wZXJ0eShub2RlS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5maW5kTm9kZUlkKG5vZGVLZXksIHNvdXJjZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlSW5zZXJ0SWQobm9kZUtleSwgc291cmNlSWQsIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVEZWxldGVBdEluZGV4KG5vZGVLZXksIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5CRUZPUkU6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydElkSW50b1Jvb3Qoc291cmNlSWQsIHRhcmdldFJvb3RJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uQUZURVI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydElkSW50b1Jvb3Qoc291cmNlSWQsIHRhcmdldFJvb3RJbmRleCArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLklOU0lERV9BVF9TVEFSVDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZUluc2VydEF0U3RhcnQodGFyZ2V0SWQsIHNvdXJjZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5JTlNJREVfQVRfRU5EOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlSW5zZXJ0QXRFbmQodGFyZ2V0SWQsIHNvdXJjZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG1vdmluZyBub2RlIChzb3VyY2UpIEFCT1ZFIG5vZGUgKHRhcmdldClcbiAgICAgICAgICAgICAgICAvLyBkZWxldGUgc291cmNlIGlkIGZyb20gZWFjaCBub2RlXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbm9kZUtleSBpbiB0aGlzLm5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGVzLmhhc093blByb3BlcnR5KG5vZGVLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmZpbmROb2RlSWQobm9kZUtleSwgc291cmNlSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVEZWxldGVBdEluZGV4KG5vZGVLZXksIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBub2RlS2V5IGluIHRoaXMubm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZXMuaGFzT3duUHJvcGVydHkobm9kZUtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuZmluZE5vZGVJZChub2RlS2V5LCB0YXJnZXRJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLkJFRk9SRTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0SWRJbnRvTm9kZShub2RlS2V5LCBzb3VyY2VJZCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLkFGVEVSOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRJZEludG9Ob2RlKG5vZGVLZXksIHNvdXJjZUlkLCBpbmRleCArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLklOU0lERV9BVF9TVEFSVDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZUluc2VydEF0U3RhcnQodGFyZ2V0SWQsIHNvdXJjZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5JTlNJREVfQVRfRU5EOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlSW5zZXJ0QXRFbmQodGFyZ2V0SWQsIHNvdXJjZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUuc3dhcEFycmF5RWxlbWVudHMgPSBmdW5jdGlvbiAoYXJyLCBpbmRleEEsIGluZGV4Qikge1xuICAgICAgICB2YXIgdGVtcCA9IGFycltpbmRleEFdO1xuICAgICAgICBhcnJbaW5kZXhBXSA9IGFycltpbmRleEJdO1xuICAgICAgICBhcnJbaW5kZXhCXSA9IHRlbXA7XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5yb290RGVsZXRlSWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5maW5kUm9vdElkKGlkKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdERlbGV0ZShpbmRleCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLm5vZGVBbmRTdWJOb2Rlc0RlbGV0ZSA9IGZ1bmN0aW9uIChub2RlS2V5KSB7XG4gICAgICAgIHZhciB0b0RlbGV0ZUxhdGVyID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ub2Rlc1tub2RlS2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGlkID0gdGhpcy5ub2Rlc1tub2RlS2V5XVtpXTtcbiAgICAgICAgICAgIHRoaXMubm9kZUFuZFN1Yk5vZGVzRGVsZXRlKGlkKTtcbiAgICAgICAgICAgIHRvRGVsZXRlTGF0ZXIucHVzaChub2RlS2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGVEZWxldGUobm9kZUtleSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9EZWxldGVMYXRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ub2RlRGVsZXRlKHRvRGVsZXRlTGF0ZXJbaV0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5ub2RlUmVmcmVuY2VzRGVsZXRlID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGZvciAodmFyIG5vZGVLZXkgaW4gdGhpcy5ub2Rlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZXMuaGFzT3duUHJvcGVydHkobm9kZUtleSkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubm9kZXNbbm9kZUtleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldElkID0gdGhpcy5ub2Rlc1tub2RlS2V5XVtpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldElkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlRGVsZXRlQXRJbmRleChub2RlS2V5LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUubm9kZURlbGV0ZSA9IGZ1bmN0aW9uIChub2RlS2V5KSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLm5vZGVzW25vZGVLZXldO1xuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUuZmluZFJvb3RJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb290SWRzLmluZGV4T2YoaWQpO1xuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUuZmluZE5vZGVJZCA9IGZ1bmN0aW9uIChub2RlS2V5LCBpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2Rlc1tub2RlS2V5XS5pbmRleE9mKGlkKTtcbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLmZpbmROb2RlID0gZnVuY3Rpb24gKG5vZGVLZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZXNbbm9kZUtleV07XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5ub2RlSW5zZXJ0QXRTdGFydCA9IGZ1bmN0aW9uIChub2RlS2V5LCBpZCkge1xuICAgICAgICB0aGlzLm5vZGVzW25vZGVLZXldLnVuc2hpZnQoaWQpO1xuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUubm9kZUluc2VydEF0RW5kID0gZnVuY3Rpb24gKG5vZGVLZXksIGlkKSB7XG4gICAgICAgIHRoaXMubm9kZXNbbm9kZUtleV0ucHVzaChpZCk7XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5yb290RGVsZXRlID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHRoaXMucm9vdElkcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUubm9kZURlbGV0ZUF0SW5kZXggPSBmdW5jdGlvbiAobm9kZUtleSwgaW5kZXgpIHtcbiAgICAgICAgdGhpcy5ub2Rlc1tub2RlS2V5XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUucm9vdEluc2VydEF0U3RhcnQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdGhpcy5yb290SWRzLnVuc2hpZnQoaWQpO1xuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUucm9vdEluc2VydEF0RW5kID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHRoaXMucm9vdElkcy5wdXNoKGlkKTtcbiAgICB9O1xuICAgIHJldHVybiBNdWx0aVJvb3RUcmVlO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IE11bHRpUm9vdFRyZWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1NdWx0aVJvb3RUcmVlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xudmFyIEhlYXBfMSA9IHJlcXVpcmUoXCIuL0hlYXBcIik7XG52YXIgUHJpb3JpdHlRdWV1ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGVtcHR5IHByaW9yaXR5IHF1ZXVlLlxuICAgICAqIEBjbGFzcyA8cD5JbiBhIHByaW9yaXR5IHF1ZXVlIGVhY2ggZWxlbWVudCBpcyBhc3NvY2lhdGVkIHdpdGggYSBcInByaW9yaXR5XCIsXG4gICAgICogZWxlbWVudHMgYXJlIGRlcXVldWVkIGluIGhpZ2hlc3QtcHJpb3JpdHktZmlyc3Qgb3JkZXIgKHRoZSBlbGVtZW50cyB3aXRoIHRoZVxuICAgICAqIGhpZ2hlc3QgcHJpb3JpdHkgYXJlIGRlcXVldWVkIGZpcnN0KS4gUHJpb3JpdHkgUXVldWVzIGFyZSBpbXBsZW1lbnRlZCBhcyBoZWFwcy5cbiAgICAgKiBJZiB0aGUgaW5zZXJ0ZWQgZWxlbWVudHMgYXJlIGN1c3RvbSBvYmplY3RzIGEgY29tcGFyZSBmdW5jdGlvbiBtdXN0IGJlIHByb3ZpZGVkLFxuICAgICAqIG90aGVyd2lzZSB0aGUgPD0sID09PSBhbmQgPj0gb3BlcmF0b3JzIGFyZSB1c2VkIHRvIGNvbXBhcmUgb2JqZWN0IHByaW9yaXR5LjwvcD5cbiAgICAgKiA8cHJlPlxuICAgICAqIGZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xuICAgICAqICBpZiAoYSBpcyBsZXNzIHRoYW4gYiBieSBzb21lIG9yZGVyaW5nIGNyaXRlcmlvbikge1xuICAgICAqICAgICByZXR1cm4gLTE7XG4gICAgICogIH0gaWYgKGEgaXMgZ3JlYXRlciB0aGFuIGIgYnkgdGhlIG9yZGVyaW5nIGNyaXRlcmlvbikge1xuICAgICAqICAgICByZXR1cm4gMTtcbiAgICAgKiAgfVxuICAgICAqICAvLyBhIG11c3QgYmUgZXF1YWwgdG8gYlxuICAgICAqICByZXR1cm4gMDtcbiAgICAgKiB9XG4gICAgICogPC9wcmU+XG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KTpudW1iZXI9fSBjb21wYXJlRnVuY3Rpb24gb3B0aW9uYWxcbiAgICAgKiBmdW5jdGlvbiB1c2VkIHRvIGNvbXBhcmUgdHdvIGVsZW1lbnQgcHJpb3JpdGllcy4gTXVzdCByZXR1cm4gYSBuZWdhdGl2ZSBpbnRlZ2VyLFxuICAgICAqIHplcm8sIG9yIGEgcG9zaXRpdmUgaW50ZWdlciBhcyB0aGUgZmlyc3QgYXJndW1lbnQgaXMgbGVzcyB0aGFuLCBlcXVhbCB0byxcbiAgICAgKiBvciBncmVhdGVyIHRoYW4gdGhlIHNlY29uZC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBQcmlvcml0eVF1ZXVlKGNvbXBhcmVGdW5jdGlvbikge1xuICAgICAgICB0aGlzLmhlYXAgPSBuZXcgSGVhcF8xLmRlZmF1bHQodXRpbC5yZXZlcnNlQ29tcGFyZUZ1bmN0aW9uKGNvbXBhcmVGdW5jdGlvbikpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIHRoZSBzcGVjaWZpZWQgZWxlbWVudCBpbnRvIHRoaXMgcHJpb3JpdHkgcXVldWUuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgdGhlIGVsZW1lbnQgdG8gaW5zZXJ0LlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIGVsZW1lbnQgd2FzIGluc2VydGVkLCBvciBmYWxzZSBpZiBpdCBpcyB1bmRlZmluZWQuXG4gICAgICovXG4gICAgUHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuZW5xdWV1ZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYXAuYWRkKGVsZW1lbnQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQgaW50byB0aGlzIHByaW9yaXR5IHF1ZXVlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIGluc2VydC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBlbGVtZW50IHdhcyBpbnNlcnRlZCwgb3IgZmFsc2UgaWYgaXQgaXMgdW5kZWZpbmVkLlxuICAgICAqL1xuICAgIFByaW9yaXR5UXVldWUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYXAuYWRkKGVsZW1lbnQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGFuZCByZW1vdmVzIHRoZSBoaWdoZXN0IHByaW9yaXR5IGVsZW1lbnQgb2YgdGhpcyBxdWV1ZS5cbiAgICAgKiBAcmV0dXJuIHsqfSB0aGUgdGhlIGhpZ2hlc3QgcHJpb3JpdHkgZWxlbWVudCBvZiB0aGlzIHF1ZXVlLFxuICAgICAqICBvciB1bmRlZmluZWQgaWYgdGhpcyBxdWV1ZSBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICBQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5kZXF1ZXVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5oZWFwLnNpemUoKSAhPT0gMCkge1xuICAgICAgICAgICAgdmFyIGVsID0gdGhpcy5oZWFwLnBlZWsoKTtcbiAgICAgICAgICAgIHRoaXMuaGVhcC5yZW1vdmVSb290KCk7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcywgYnV0IGRvZXMgbm90IHJlbW92ZSwgdGhlIGhpZ2hlc3QgcHJpb3JpdHkgZWxlbWVudCBvZiB0aGlzIHF1ZXVlLlxuICAgICAqIEByZXR1cm4geyp9IHRoZSBoaWdoZXN0IHByaW9yaXR5IGVsZW1lbnQgb2YgdGhpcyBxdWV1ZSwgb3IgdW5kZWZpbmVkIGlmIHRoaXMgcXVldWUgaXMgZW1wdHkuXG4gICAgICovXG4gICAgUHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhcC5wZWVrKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBwcmlvcml0eSBxdWV1ZSBjb250YWlucyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgZWxlbWVudCB0byBzZWFyY2ggZm9yLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhpcyBwcmlvcml0eSBxdWV1ZSBjb250YWlucyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQsXG4gICAgICogZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIFByaW9yaXR5UXVldWUucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhcC5jb250YWlucyhlbGVtZW50KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGlzIHByaW9yaXR5IHF1ZXVlIGlzIGVtcHR5LlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgYW5kIG9ubHkgaWYgdGhpcyBwcmlvcml0eSBxdWV1ZSBjb250YWlucyBubyBpdGVtczsgZmFsc2VcbiAgICAgKiBvdGhlcndpc2UuXG4gICAgICovXG4gICAgUHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhcC5pc0VtcHR5KCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhpcyBwcmlvcml0eSBxdWV1ZS5cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhpcyBwcmlvcml0eSBxdWV1ZS5cbiAgICAgKi9cbiAgICBQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFwLnNpemUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIG9mIHRoZSBlbGVtZW50cyBmcm9tIHRoaXMgcHJpb3JpdHkgcXVldWUuXG4gICAgICovXG4gICAgUHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaGVhcC5jbGVhcigpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIG9uY2UgZm9yIGVhY2ggZWxlbWVudCBwcmVzZW50IGluIHRoaXMgcXVldWUgaW5cbiAgICAgKiBubyBwYXJ0aWN1bGFyIG9yZGVyLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0KToqfSBjYWxsYmFjayBmdW5jdGlvbiB0byBleGVjdXRlLCBpdCBpc1xuICAgICAqIGludm9rZWQgd2l0aCBvbmUgYXJndW1lbnQ6IHRoZSBlbGVtZW50IHZhbHVlLCB0byBicmVhayB0aGUgaXRlcmF0aW9uIHlvdSBjYW5cbiAgICAgKiBvcHRpb25hbGx5IHJldHVybiBmYWxzZS5cbiAgICAgKi9cbiAgICBQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaGVhcC5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIHJldHVybiBQcmlvcml0eVF1ZXVlO1xufSgpKTsgLy8gZW5kIG9mIHByaW9yaXR5IHF1ZXVlXG5leHBvcnRzLmRlZmF1bHQgPSBQcmlvcml0eVF1ZXVlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UHJpb3JpdHlRdWV1ZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBMaW5rZWRMaXN0XzEgPSByZXF1aXJlKFwiLi9MaW5rZWRMaXN0XCIpO1xudmFyIFF1ZXVlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gZW1wdHkgcXVldWUuXG4gICAgICogQGNsYXNzIEEgcXVldWUgaXMgYSBGaXJzdC1Jbi1GaXJzdC1PdXQgKEZJRk8pIGRhdGEgc3RydWN0dXJlLCB0aGUgZmlyc3RcbiAgICAgKiBlbGVtZW50IGFkZGVkIHRvIHRoZSBxdWV1ZSB3aWxsIGJlIHRoZSBmaXJzdCBvbmUgdG8gYmUgcmVtb3ZlZC4gVGhpc1xuICAgICAqIGltcGxlbWVudGF0aW9uIHVzZXMgYSBsaW5rZWQgbGlzdCBhcyBhIGNvbnRhaW5lci5cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBRdWV1ZSgpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gbmV3IExpbmtlZExpc3RfMS5kZWZhdWx0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluc2VydHMgdGhlIHNwZWNpZmllZCBlbGVtZW50IGludG8gdGhlIGVuZCBvZiB0aGlzIHF1ZXVlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtIHRoZSBlbGVtZW50IHRvIGluc2VydC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBlbGVtZW50IHdhcyBpbnNlcnRlZCwgb3IgZmFsc2UgaWYgaXQgaXMgdW5kZWZpbmVkLlxuICAgICAqL1xuICAgIFF1ZXVlLnByb3RvdHlwZS5lbnF1ZXVlID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5hZGQoZWxlbSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIHRoZSBzcGVjaWZpZWQgZWxlbWVudCBpbnRvIHRoZSBlbmQgb2YgdGhpcyBxdWV1ZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbSB0aGUgZWxlbWVudCB0byBpbnNlcnQuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZWxlbWVudCB3YXMgaW5zZXJ0ZWQsIG9yIGZhbHNlIGlmIGl0IGlzIHVuZGVmaW5lZC5cbiAgICAgKi9cbiAgICBRdWV1ZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5hZGQoZWxlbSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYW5kIHJlbW92ZXMgdGhlIGhlYWQgb2YgdGhpcyBxdWV1ZS5cbiAgICAgKiBAcmV0dXJuIHsqfSB0aGUgaGVhZCBvZiB0aGlzIHF1ZXVlLCBvciB1bmRlZmluZWQgaWYgdGhpcyBxdWV1ZSBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICBRdWV1ZS5wcm90b3R5cGUuZGVxdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdC5zaXplKCkgIT09IDApIHtcbiAgICAgICAgICAgIHZhciBlbCA9IHRoaXMubGlzdC5maXJzdCgpO1xuICAgICAgICAgICAgdGhpcy5saXN0LnJlbW92ZUVsZW1lbnRBdEluZGV4KDApO1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMsIGJ1dCBkb2VzIG5vdCByZW1vdmUsIHRoZSBoZWFkIG9mIHRoaXMgcXVldWUuXG4gICAgICogQHJldHVybiB7Kn0gdGhlIGhlYWQgb2YgdGhpcyBxdWV1ZSwgb3IgdW5kZWZpbmVkIGlmIHRoaXMgcXVldWUgaXMgZW1wdHkuXG4gICAgICovXG4gICAgUXVldWUucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmxpc3Quc2l6ZSgpICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0LmZpcnN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGlzIHF1ZXVlLlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGlzIHF1ZXVlLlxuICAgICAqL1xuICAgIFF1ZXVlLnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0LnNpemUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIHF1ZXVlIGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAgKiA8cD5JZiB0aGUgZWxlbWVudHMgaW5zaWRlIHRoaXMgc3RhY2sgYXJlXG4gICAgICogbm90IGNvbXBhcmFibGUgd2l0aCB0aGUgPT09IG9wZXJhdG9yLCBhIGN1c3RvbSBlcXVhbHMgZnVuY3Rpb24gc2hvdWxkIGJlXG4gICAgICogcHJvdmlkZWQgdG8gcGVyZm9ybSBzZWFyY2hlcywgdGhlIGZ1bmN0aW9uIG11c3QgcmVjZWl2ZSB0d28gYXJndW1lbnRzIGFuZFxuICAgICAqIHJldHVybiB0cnVlIGlmIHRoZXkgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuIEV4YW1wbGU6PC9wPlxuICAgICAqXG4gICAgICogPHByZT5cbiAgICAgKiBjb25zdCBwZXRzQXJlRXF1YWxCeU5hbWUgKHBldDEsIHBldDIpIHtcbiAgICAgKiAgcmV0dXJuIHBldDEubmFtZSA9PT0gcGV0Mi5uYW1lO1xuICAgICAqIH1cbiAgICAgKiA8L3ByZT5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbSBlbGVtZW50IHRvIHNlYXJjaCBmb3IuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KTpib29sZWFuPX0gZXF1YWxzRnVuY3Rpb24gb3B0aW9uYWxcbiAgICAgKiBmdW5jdGlvbiB0byBjaGVjayBpZiB0d28gZWxlbWVudHMgYXJlIGVxdWFsLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhpcyBxdWV1ZSBjb250YWlucyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQsXG4gICAgICogZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIFF1ZXVlLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChlbGVtLCBlcXVhbHNGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0LmNvbnRhaW5zKGVsZW0sIGVxdWFsc0Z1bmN0aW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGlzIHF1ZXVlIGlzIGVtcHR5LlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgYW5kIG9ubHkgaWYgdGhpcyBxdWV1ZSBjb250YWlucyBubyBpdGVtczsgZmFsc2VcbiAgICAgKiBvdGhlcndpc2UuXG4gICAgICovXG4gICAgUXVldWUucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3Quc2l6ZSgpIDw9IDA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBvZiB0aGUgZWxlbWVudHMgZnJvbSB0aGlzIHF1ZXVlLlxuICAgICAqL1xuICAgIFF1ZXVlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5saXN0LmNsZWFyKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gb25jZSBmb3IgZWFjaCBlbGVtZW50IHByZXNlbnQgaW4gdGhpcyBxdWV1ZSBpblxuICAgICAqIEZJRk8gb3JkZXIuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QpOip9IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUsIGl0IGlzXG4gICAgICogaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDogdGhlIGVsZW1lbnQgdmFsdWUsIHRvIGJyZWFrIHRoZSBpdGVyYXRpb24geW91IGNhblxuICAgICAqIG9wdGlvbmFsbHkgcmV0dXJuIGZhbHNlLlxuICAgICAqL1xuICAgIFF1ZXVlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIHJldHVybiBRdWV1ZTtcbn0oKSk7IC8vIEVuZCBvZiBxdWV1ZVxuZXhwb3J0cy5kZWZhdWx0ID0gUXVldWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1RdWV1ZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbnZhciBhcnJheXMgPSByZXF1aXJlKFwiLi9hcnJheXNcIik7XG52YXIgRGljdGlvbmFyeV8xID0gcmVxdWlyZShcIi4vRGljdGlvbmFyeVwiKTtcbnZhciBTZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBlbXB0eSBzZXQuXG4gICAgICogQGNsYXNzIDxwPkEgc2V0IGlzIGEgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBjb250YWlucyBubyBkdXBsaWNhdGUgaXRlbXMuPC9wPlxuICAgICAqIDxwPklmIHRoZSBpbnNlcnRlZCBlbGVtZW50cyBhcmUgY3VzdG9tIG9iamVjdHMgYSBmdW5jdGlvblxuICAgICAqIHdoaWNoIGNvbnZlcnRzIGVsZW1lbnRzIHRvIHN0cmluZ3MgbXVzdCBiZSBwcm92aWRlZC4gRXhhbXBsZTo8L3A+XG4gICAgICpcbiAgICAgKiA8cHJlPlxuICAgICAqIGZ1bmN0aW9uIHBldFRvU3RyaW5nKHBldCkge1xuICAgICAqICByZXR1cm4gcGV0Lm5hbWU7XG4gICAgICogfVxuICAgICAqIDwvcHJlPlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QpOnN0cmluZz19IHRvU3RyaW5nRnVuY3Rpb24gb3B0aW9uYWwgZnVuY3Rpb24gdXNlZFxuICAgICAqIHRvIGNvbnZlcnQgZWxlbWVudHMgdG8gc3RyaW5ncy4gSWYgdGhlIGVsZW1lbnRzIGFyZW4ndCBzdHJpbmdzIG9yIGlmIHRvU3RyaW5nKClcbiAgICAgKiBpcyBub3QgYXBwcm9wcmlhdGUsIGEgY3VzdG9tIGZ1bmN0aW9uIHdoaWNoIHJlY2VpdmVzIGFuIG9iamVjdCBhbmQgcmV0dXJucyBhXG4gICAgICogdW5pcXVlIHN0cmluZyBtdXN0IGJlIHByb3ZpZGVkLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFNldCh0b1N0cmluZ0Z1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuZGljdGlvbmFyeSA9IG5ldyBEaWN0aW9uYXJ5XzEuZGVmYXVsdCh0b1N0cmluZ0Z1bmN0aW9uKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgc2V0IGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBlbGVtZW50IHRvIHNlYXJjaCBmb3IuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGlzIHNldCBjb250YWlucyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQsXG4gICAgICogZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIFNldC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaWN0aW9uYXJ5LmNvbnRhaW5zS2V5KGVsZW1lbnQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQgdG8gdGhpcyBzZXQgaWYgaXQgaXMgbm90IGFscmVhZHkgcHJlc2VudC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCB0aGUgZWxlbWVudCB0byBpbnNlcnQuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGlzIHNldCBkaWQgbm90IGFscmVhZHkgY29udGFpbiB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAgICovXG4gICAgU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5jb250YWlucyhlbGVtZW50KSB8fCB1dGlsLmlzVW5kZWZpbmVkKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpY3Rpb25hcnkuc2V0VmFsdWUoZWxlbWVudCwgZWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYW4gaW50ZXJzZWN0aW9uIGJldHdlZW4gdGhpcyBhbmQgYW5vdGhlciBzZXQuXG4gICAgICogUmVtb3ZlcyBhbGwgdmFsdWVzIHRoYXQgYXJlIG5vdCBwcmVzZW50IHRoaXMgc2V0IGFuZCB0aGUgZ2l2ZW4gc2V0LlxuICAgICAqIEBwYXJhbSB7Y29sbGVjdGlvbnMuU2V0fSBvdGhlclNldCBvdGhlciBzZXQuXG4gICAgICovXG4gICAgU2V0LnByb3RvdHlwZS5pbnRlcnNlY3Rpb24gPSBmdW5jdGlvbiAob3RoZXJTZXQpIHtcbiAgICAgICAgdmFyIHNldCA9IHRoaXM7XG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFvdGhlclNldC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHNldC5yZW1vdmUoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIHVuaW9uIGJldHdlZW4gdGhpcyBhbmQgYW5vdGhlciBzZXQuXG4gICAgICogQWRkcyBhbGwgdmFsdWVzIGZyb20gdGhlIGdpdmVuIHNldCB0byB0aGlzIHNldC5cbiAgICAgKiBAcGFyYW0ge2NvbGxlY3Rpb25zLlNldH0gb3RoZXJTZXQgb3RoZXIgc2V0LlxuICAgICAqL1xuICAgIFNldC5wcm90b3R5cGUudW5pb24gPSBmdW5jdGlvbiAob3RoZXJTZXQpIHtcbiAgICAgICAgdmFyIHNldCA9IHRoaXM7XG4gICAgICAgIG90aGVyU2V0LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHNldC5hZGQoZWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGlzIGFuZCBhbm90aGVyIHNldC5cbiAgICAgKiBSZW1vdmVzIGZyb20gdGhpcyBzZXQgYWxsIHRoZSB2YWx1ZXMgdGhhdCBhcmUgcHJlc2VudCBpbiB0aGUgZ2l2ZW4gc2V0LlxuICAgICAqIEBwYXJhbSB7Y29sbGVjdGlvbnMuU2V0fSBvdGhlclNldCBvdGhlciBzZXQuXG4gICAgICovXG4gICAgU2V0LnByb3RvdHlwZS5kaWZmZXJlbmNlID0gZnVuY3Rpb24gKG90aGVyU2V0KSB7XG4gICAgICAgIHZhciBzZXQgPSB0aGlzO1xuICAgICAgICBvdGhlclNldC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICBzZXQucmVtb3ZlKGVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIHNldCBjb250YWlucyBhbGwgdGhlIGVsZW1lbnRzIGluIHRoaXMgc2V0LlxuICAgICAqIEBwYXJhbSB7Y29sbGVjdGlvbnMuU2V0fSBvdGhlclNldCBvdGhlciBzZXQuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGlzIHNldCBpcyBhIHN1YnNldCBvZiB0aGUgZ2l2ZW4gc2V0LlxuICAgICAqL1xuICAgIFNldC5wcm90b3R5cGUuaXNTdWJzZXRPZiA9IGZ1bmN0aW9uIChvdGhlclNldCkge1xuICAgICAgICBpZiAodGhpcy5zaXplKCkgPiBvdGhlclNldC5zaXplKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNTdWIgPSB0cnVlO1xuICAgICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICghb3RoZXJTZXQuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBpc1N1YiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGlzU3ViO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQgZnJvbSB0aGlzIHNldCBpZiBpdCBpcyBwcmVzZW50LlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhpcyBzZXQgY29udGFpbmVkIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBTZXQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaWN0aW9uYXJ5LnJlbW92ZShlbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gb25jZSBmb3IgZWFjaCBlbGVtZW50XG4gICAgICogcHJlc2VudCBpbiB0aGlzIHNldC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6Kn0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSwgaXQgaXNcbiAgICAgKiBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50czogdGhlIGVsZW1lbnQuIFRvIGJyZWFrIHRoZSBpdGVyYXRpb24geW91IGNhblxuICAgICAqIG9wdGlvbmFsbHkgcmV0dXJuIGZhbHNlLlxuICAgICAqL1xuICAgIFNldC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmRpY3Rpb25hcnkuZm9yRWFjaChmdW5jdGlvbiAoaywgdikge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHYpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIGVsZW1lbnRzIGluIHRoaXMgc2V0IGluIGFyYml0cmFyeSBvcmRlci5cbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIGVsZW1lbnRzIGluIHRoaXMgc2V0LlxuICAgICAqL1xuICAgIFNldC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGljdGlvbmFyeS52YWx1ZXMoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIHNldCBjb250YWlucyBubyBlbGVtZW50cy5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgc2V0IGNvbnRhaW5zIG5vIGVsZW1lbnRzLlxuICAgICAqL1xuICAgIFNldC5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGljdGlvbmFyeS5pc0VtcHR5KCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhpcyBzZXQuXG4gICAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoaXMgc2V0LlxuICAgICAqL1xuICAgIFNldC5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGljdGlvbmFyeS5zaXplKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBvZiB0aGUgZWxlbWVudHMgZnJvbSB0aGlzIHNldC5cbiAgICAgKi9cbiAgICBTZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpY3Rpb25hcnkuY2xlYXIoKTtcbiAgICB9O1xuICAgIC8qXG4gICAgKiBQcm92aWRlcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBmb3IgZGlzcGxheVxuICAgICovXG4gICAgU2V0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5cy50b1N0cmluZyh0aGlzLnRvQXJyYXkoKSk7XG4gICAgfTtcbiAgICByZXR1cm4gU2V0O1xufSgpKTsgLy8gZW5kIG9mIFNldFxuZXhwb3J0cy5kZWZhdWx0ID0gU2V0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2V0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIExpbmtlZExpc3RfMSA9IHJlcXVpcmUoXCIuL0xpbmtlZExpc3RcIik7XG52YXIgU3RhY2sgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBlbXB0eSBTdGFjay5cbiAgICAgKiBAY2xhc3MgQSBTdGFjayBpcyBhIExhc3QtSW4tRmlyc3QtT3V0IChMSUZPKSBkYXRhIHN0cnVjdHVyZSwgdGhlIGxhc3RcbiAgICAgKiBlbGVtZW50IGFkZGVkIHRvIHRoZSBzdGFjayB3aWxsIGJlIHRoZSBmaXJzdCBvbmUgdG8gYmUgcmVtb3ZlZC4gVGhpc1xuICAgICAqIGltcGxlbWVudGF0aW9uIHVzZXMgYSBsaW5rZWQgbGlzdCBhcyBhIGNvbnRhaW5lci5cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBTdGFjaygpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gbmV3IExpbmtlZExpc3RfMS5kZWZhdWx0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFB1c2hlcyBhbiBpdGVtIG9udG8gdGhlIHRvcCBvZiB0aGlzIHN0YWNrLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtIHRoZSBlbGVtZW50IHRvIGJlIHB1c2hlZCBvbnRvIHRoaXMgc3RhY2suXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZWxlbWVudCB3YXMgcHVzaGVkIG9yIGZhbHNlIGlmIGl0IGlzIHVuZGVmaW5lZC5cbiAgICAgKi9cbiAgICBTdGFjay5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QuYWRkKGVsZW0sIDApO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUHVzaGVzIGFuIGl0ZW0gb250byB0aGUgdG9wIG9mIHRoaXMgc3RhY2suXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW0gdGhlIGVsZW1lbnQgdG8gYmUgcHVzaGVkIG9udG8gdGhpcyBzdGFjay5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBlbGVtZW50IHdhcyBwdXNoZWQgb3IgZmFsc2UgaWYgaXQgaXMgdW5kZWZpbmVkLlxuICAgICAqL1xuICAgIFN0YWNrLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0LmFkZChlbGVtLCAwKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIG9iamVjdCBhdCB0aGUgdG9wIG9mIHRoaXMgc3RhY2sgYW5kIHJldHVybnMgdGhhdCBvYmplY3QuXG4gICAgICogQHJldHVybiB7Kn0gdGhlIG9iamVjdCBhdCB0aGUgdG9wIG9mIHRoaXMgc3RhY2sgb3IgdW5kZWZpbmVkIGlmIHRoZVxuICAgICAqIHN0YWNrIGlzIGVtcHR5LlxuICAgICAqL1xuICAgIFN0YWNrLnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QucmVtb3ZlRWxlbWVudEF0SW5kZXgoMCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBMb29rcyBhdCB0aGUgb2JqZWN0IGF0IHRoZSB0b3Agb2YgdGhpcyBzdGFjayB3aXRob3V0IHJlbW92aW5nIGl0IGZyb20gdGhlXG4gICAgICogc3RhY2suXG4gICAgICogQHJldHVybiB7Kn0gdGhlIG9iamVjdCBhdCB0aGUgdG9wIG9mIHRoaXMgc3RhY2sgb3IgdW5kZWZpbmVkIGlmIHRoZVxuICAgICAqIHN0YWNrIGlzIGVtcHR5LlxuICAgICAqL1xuICAgIFN0YWNrLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0LmZpcnN0KCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhpcyBzdGFjay5cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhpcyBzdGFjay5cbiAgICAgKi9cbiAgICBTdGFjay5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5zaXplKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBzdGFjayBjb250YWlucyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAgICogPHA+SWYgdGhlIGVsZW1lbnRzIGluc2lkZSB0aGlzIHN0YWNrIGFyZVxuICAgICAqIG5vdCBjb21wYXJhYmxlIHdpdGggdGhlID09PSBvcGVyYXRvciwgYSBjdXN0b20gZXF1YWxzIGZ1bmN0aW9uIHNob3VsZCBiZVxuICAgICAqIHByb3ZpZGVkIHRvIHBlcmZvcm0gc2VhcmNoZXMsIHRoZSBmdW5jdGlvbiBtdXN0IHJlY2VpdmUgdHdvIGFyZ3VtZW50cyBhbmRcbiAgICAgKiByZXR1cm4gdHJ1ZSBpZiB0aGV5IGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLiBFeGFtcGxlOjwvcD5cbiAgICAgKlxuICAgICAqIDxwcmU+XG4gICAgICogY29uc3QgcGV0c0FyZUVxdWFsQnlOYW1lIChwZXQxLCBwZXQyKSB7XG4gICAgICogIHJldHVybiBwZXQxLm5hbWUgPT09IHBldDIubmFtZTtcbiAgICAgKiB9XG4gICAgICogPC9wcmU+XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW0gZWxlbWVudCB0byBzZWFyY2ggZm9yLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCk6Ym9vbGVhbj19IGVxdWFsc0Z1bmN0aW9uIG9wdGlvbmFsXG4gICAgICogZnVuY3Rpb24gdG8gY2hlY2sgaWYgdHdvIGVsZW1lbnRzIGFyZSBlcXVhbC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgc3RhY2sgY29udGFpbnMgdGhlIHNwZWNpZmllZCBlbGVtZW50LFxuICAgICAqIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBTdGFjay5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoZWxlbSwgZXF1YWxzRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5jb250YWlucyhlbGVtLCBlcXVhbHNGdW5jdGlvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhpcyBzdGFjayBpcyBlbXB0eS5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIGFuZCBvbmx5IGlmIHRoaXMgc3RhY2sgY29udGFpbnMgbm8gaXRlbXM7IGZhbHNlXG4gICAgICogb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIFN0YWNrLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0LmlzRW1wdHkoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIG9mIHRoZSBlbGVtZW50cyBmcm9tIHRoaXMgc3RhY2suXG4gICAgICovXG4gICAgU3RhY2sucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxpc3QuY2xlYXIoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBvbmNlIGZvciBlYWNoIGVsZW1lbnQgcHJlc2VudCBpbiB0aGlzIHN0YWNrIGluXG4gICAgICogTElGTyBvcmRlci5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6Kn0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSwgaXQgaXNcbiAgICAgKiBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OiB0aGUgZWxlbWVudCB2YWx1ZSwgdG8gYnJlYWsgdGhlIGl0ZXJhdGlvbiB5b3UgY2FuXG4gICAgICogb3B0aW9uYWxseSByZXR1cm4gZmFsc2UuXG4gICAgICovXG4gICAgU3RhY2sucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5saXN0LmZvckVhY2goY2FsbGJhY2spO1xuICAgIH07XG4gICAgcmV0dXJuIFN0YWNrO1xufSgpKTsgLy8gRW5kIG9mIHN0YWNrXG5leHBvcnRzLmRlZmF1bHQgPSBTdGFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN0YWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBwb3NpdGlvbiBvZiB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiB0aGUgc3BlY2lmaWVkIGl0ZW1cbiAqIHdpdGhpbiB0aGUgc3BlY2lmaWVkIGFycmF5LjRcbiAqIEBwYXJhbSB7Kn0gYXJyYXkgdGhlIGFycmF5IGluIHdoaWNoIHRvIHNlYXJjaCB0aGUgZWxlbWVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIHRoZSBlbGVtZW50IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCk6Ym9vbGVhbj19IGVxdWFsc0Z1bmN0aW9uIG9wdGlvbmFsIGZ1bmN0aW9uIHVzZWQgdG9cbiAqIGNoZWNrIGVxdWFsaXR5IGJldHdlZW4gMiBlbGVtZW50cy5cbiAqIEByZXR1cm4ge251bWJlcn0gdGhlIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIHRoZSBzcGVjaWZpZWQgZWxlbWVudFxuICogd2l0aGluIHRoZSBzcGVjaWZpZWQgYXJyYXksIG9yIC0xIGlmIG5vdCBmb3VuZC5cbiAqL1xuZnVuY3Rpb24gaW5kZXhPZihhcnJheSwgaXRlbSwgZXF1YWxzRnVuY3Rpb24pIHtcbiAgICB2YXIgZXF1YWxzID0gZXF1YWxzRnVuY3Rpb24gfHwgdXRpbC5kZWZhdWx0RXF1YWxzO1xuICAgIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZXF1YWxzKGFycmF5W2ldLCBpdGVtKSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuZXhwb3J0cy5pbmRleE9mID0gaW5kZXhPZjtcbi8qKlxuICogUmV0dXJucyB0aGUgcG9zaXRpb24gb2YgdGhlIGxhc3Qgb2NjdXJyZW5jZSBvZiB0aGUgc3BlY2lmaWVkIGVsZW1lbnRcbiAqIHdpdGhpbiB0aGUgc3BlY2lmaWVkIGFycmF5LlxuICogQHBhcmFtIHsqfSBhcnJheSB0aGUgYXJyYXkgaW4gd2hpY2ggdG8gc2VhcmNoIHRoZSBlbGVtZW50LlxuICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gdGhlIGVsZW1lbnQgdG8gc2VhcmNoLlxuICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KTpib29sZWFuPX0gZXF1YWxzRnVuY3Rpb24gb3B0aW9uYWwgZnVuY3Rpb24gdXNlZCB0b1xuICogY2hlY2sgZXF1YWxpdHkgYmV0d2VlbiAyIGVsZW1lbnRzLlxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgcG9zaXRpb24gb2YgdGhlIGxhc3Qgb2NjdXJyZW5jZSBvZiB0aGUgc3BlY2lmaWVkIGVsZW1lbnRcbiAqIHdpdGhpbiB0aGUgc3BlY2lmaWVkIGFycmF5IG9yIC0xIGlmIG5vdCBmb3VuZC5cbiAqL1xuZnVuY3Rpb24gbGFzdEluZGV4T2YoYXJyYXksIGl0ZW0sIGVxdWFsc0Z1bmN0aW9uKSB7XG4gICAgdmFyIGVxdWFscyA9IGVxdWFsc0Z1bmN0aW9uIHx8IHV0aWwuZGVmYXVsdEVxdWFscztcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSBsZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAoZXF1YWxzKGFycmF5W2ldLCBpdGVtKSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuZXhwb3J0cy5sYXN0SW5kZXhPZiA9IGxhc3RJbmRleE9mO1xuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHNwZWNpZmllZCBhcnJheSBjb250YWlucyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG4gKiBAcGFyYW0geyp9IGFycmF5IHRoZSBhcnJheSBpbiB3aGljaCB0byBzZWFyY2ggdGhlIGVsZW1lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gaXRlbSB0aGUgZWxlbWVudCB0byBzZWFyY2guXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpOmJvb2xlYW49fSBlcXVhbHNGdW5jdGlvbiBvcHRpb25hbCBmdW5jdGlvbiB0b1xuICogY2hlY2sgZXF1YWxpdHkgYmV0d2VlbiAyIGVsZW1lbnRzLlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIGFycmF5IGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gY29udGFpbnMoYXJyYXksIGl0ZW0sIGVxdWFsc0Z1bmN0aW9uKSB7XG4gICAgcmV0dXJuIGluZGV4T2YoYXJyYXksIGl0ZW0sIGVxdWFsc0Z1bmN0aW9uKSA+PSAwO1xufVxuZXhwb3J0cy5jb250YWlucyA9IGNvbnRhaW5zO1xuLyoqXG4gKiBSZW1vdmVzIHRoZSBmaXJzdCBvY3VycmVuY2Ugb2YgdGhlIHNwZWNpZmllZCBlbGVtZW50IGZyb20gdGhlIHNwZWNpZmllZCBhcnJheS5cbiAqIEBwYXJhbSB7Kn0gYXJyYXkgdGhlIGFycmF5IGluIHdoaWNoIHRvIHNlYXJjaCBlbGVtZW50LlxuICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gdGhlIGVsZW1lbnQgdG8gc2VhcmNoLlxuICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KTpib29sZWFuPX0gZXF1YWxzRnVuY3Rpb24gb3B0aW9uYWwgZnVuY3Rpb24gdG9cbiAqIGNoZWNrIGVxdWFsaXR5IGJldHdlZW4gMiBlbGVtZW50cy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIGFycmF5IGNoYW5nZWQgYWZ0ZXIgdGhpcyBjYWxsLlxuICovXG5mdW5jdGlvbiByZW1vdmUoYXJyYXksIGl0ZW0sIGVxdWFsc0Z1bmN0aW9uKSB7XG4gICAgdmFyIGluZGV4ID0gaW5kZXhPZihhcnJheSwgaXRlbSwgZXF1YWxzRnVuY3Rpb24pO1xuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5yZW1vdmUgPSByZW1vdmU7XG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgc3BlY2lmaWVkIGFycmF5IGVxdWFsXG4gKiB0byB0aGUgc3BlY2lmaWVkIG9iamVjdC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IHRoZSBhcnJheSBpbiB3aGljaCB0byBkZXRlcm1pbmUgdGhlIGZyZXF1ZW5jeSBvZiB0aGUgZWxlbWVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIHRoZSBlbGVtZW50IHdob3NlIGZyZXF1ZW5jeSBpcyB0byBiZSBkZXRlcm1pbmVkLlxuICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KTpib29sZWFuPX0gZXF1YWxzRnVuY3Rpb24gb3B0aW9uYWwgZnVuY3Rpb24gdXNlZCB0b1xuICogY2hlY2sgZXF1YWxpdHkgYmV0d2VlbiAyIGVsZW1lbnRzLlxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSBzcGVjaWZpZWQgYXJyYXlcbiAqIGVxdWFsIHRvIHRoZSBzcGVjaWZpZWQgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBmcmVxdWVuY3koYXJyYXksIGl0ZW0sIGVxdWFsc0Z1bmN0aW9uKSB7XG4gICAgdmFyIGVxdWFscyA9IGVxdWFsc0Z1bmN0aW9uIHx8IHV0aWwuZGVmYXVsdEVxdWFscztcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciBmcmVxID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlcXVhbHMoYXJyYXlbaV0sIGl0ZW0pKSB7XG4gICAgICAgICAgICBmcmVxKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZyZXE7XG59XG5leHBvcnRzLmZyZXF1ZW5jeSA9IGZyZXF1ZW5jeTtcbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB0d28gc3BlY2lmaWVkIGFycmF5cyBhcmUgZXF1YWwgdG8gb25lIGFub3RoZXIuXG4gKiBUd28gYXJyYXlzIGFyZSBjb25zaWRlcmVkIGVxdWFsIGlmIGJvdGggYXJyYXlzIGNvbnRhaW4gdGhlIHNhbWUgbnVtYmVyXG4gKiBvZiBlbGVtZW50cywgYW5kIGFsbCBjb3JyZXNwb25kaW5nIHBhaXJzIG9mIGVsZW1lbnRzIGluIHRoZSB0d29cbiAqIGFycmF5cyBhcmUgZXF1YWwgYW5kIGFyZSBpbiB0aGUgc2FtZSBvcmRlci5cbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5MSBvbmUgYXJyYXkgdG8gYmUgdGVzdGVkIGZvciBlcXVhbGl0eS5cbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5MiB0aGUgb3RoZXIgYXJyYXkgdG8gYmUgdGVzdGVkIGZvciBlcXVhbGl0eS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCk6Ym9vbGVhbj19IGVxdWFsc0Z1bmN0aW9uIG9wdGlvbmFsIGZ1bmN0aW9uIHVzZWQgdG9cbiAqIGNoZWNrIGVxdWFsaXR5IGJldHdlZW4gZWxlbWVtZW50cyBpbiB0aGUgYXJyYXlzLlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgdHdvIGFycmF5cyBhcmUgZXF1YWxcbiAqL1xuZnVuY3Rpb24gZXF1YWxzKGFycmF5MSwgYXJyYXkyLCBlcXVhbHNGdW5jdGlvbikge1xuICAgIHZhciBlcXVhbHMgPSBlcXVhbHNGdW5jdGlvbiB8fCB1dGlsLmRlZmF1bHRFcXVhbHM7XG4gICAgaWYgKGFycmF5MS5sZW5ndGggIT09IGFycmF5Mi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkxLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghZXF1YWxzKGFycmF5MVtpXSwgYXJyYXkyW2ldKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5lcXVhbHMgPSBlcXVhbHM7XG4vKipcbiAqIFJldHVybnMgc2hhbGxvdyBhIGNvcHkgb2YgdGhlIHNwZWNpZmllZCBhcnJheS5cbiAqIEBwYXJhbSB7Kn0gYXJyYXkgdGhlIGFycmF5IHRvIGNvcHkuXG4gKiBAcmV0dXJuIHtBcnJheX0gYSBjb3B5IG9mIHRoZSBzcGVjaWZpZWQgYXJyYXlcbiAqL1xuZnVuY3Rpb24gY29weShhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5jb25jYXQoKTtcbn1cbmV4cG9ydHMuY29weSA9IGNvcHk7XG4vKipcbiAqIFN3YXBzIHRoZSBlbGVtZW50cyBhdCB0aGUgc3BlY2lmaWVkIHBvc2l0aW9ucyBpbiB0aGUgc3BlY2lmaWVkIGFycmF5LlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IGluIHdoaWNoIHRvIHN3YXAgZWxlbWVudHMuXG4gKiBAcGFyYW0ge251bWJlcn0gaSB0aGUgaW5kZXggb2Ygb25lIGVsZW1lbnQgdG8gYmUgc3dhcHBlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBqIHRoZSBpbmRleCBvZiB0aGUgb3RoZXIgZWxlbWVudCB0byBiZSBzd2FwcGVkLlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXJyYXkgaXMgZGVmaW5lZCBhbmQgdGhlIGluZGV4ZXMgYXJlIHZhbGlkLlxuICovXG5mdW5jdGlvbiBzd2FwKGFycmF5LCBpLCBqKSB7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gYXJyYXkubGVuZ3RoIHx8IGogPCAwIHx8IGogPj0gYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIHRlbXAgPSBhcnJheVtpXTtcbiAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xuICAgIGFycmF5W2pdID0gdGVtcDtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydHMuc3dhcCA9IHN3YXA7XG5mdW5jdGlvbiB0b1N0cmluZyhhcnJheSkge1xuICAgIHJldHVybiAnWycgKyBhcnJheS50b1N0cmluZygpICsgJ10nO1xufVxuZXhwb3J0cy50b1N0cmluZyA9IHRvU3RyaW5nO1xuLyoqXG4gKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gb25jZSBmb3IgZWFjaCBlbGVtZW50IHByZXNlbnQgaW4gdGhpcyBhcnJheVxuICogc3RhcnRpbmcgZnJvbSBpbmRleCAwIHRvIGxlbmd0aCAtIDEuXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgaW4gd2hpY2ggdG8gaXRlcmF0ZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0KToqfSBjYWxsYmFjayBmdW5jdGlvbiB0byBleGVjdXRlLCBpdCBpc1xuICogaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDogdGhlIGVsZW1lbnQgdmFsdWUsIHRvIGJyZWFrIHRoZSBpdGVyYXRpb24geW91IGNhblxuICogb3B0aW9uYWxseSByZXR1cm4gZmFsc2UuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gICAgZm9yICh2YXIgX2kgPSAwLCBhcnJheV8xID0gYXJyYXk7IF9pIDwgYXJyYXlfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGVsZSA9IGFycmF5XzFbX2ldO1xuICAgICAgICBpZiAoY2FsbGJhY2soZWxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuZm9yRWFjaCA9IGZvckVhY2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcnJheXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgX2hhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmV4cG9ydHMuaGFzID0gZnVuY3Rpb24gKG9iaiwgcHJvcCkge1xuICAgIHJldHVybiBfaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufTtcbi8qKlxuICogRGVmYXVsdCBmdW5jdGlvbiB0byBjb21wYXJlIGVsZW1lbnQgb3JkZXIuXG4gKiBAZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gZGVmYXVsdENvbXBhcmUoYSwgYikge1xuICAgIGlmIChhIDwgYikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGVsc2UgaWYgKGEgPT09IGIpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHRDb21wYXJlID0gZGVmYXVsdENvbXBhcmU7XG4vKipcbiAqIERlZmF1bHQgZnVuY3Rpb24gdG8gdGVzdCBlcXVhbGl0eS5cbiAqIEBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBkZWZhdWx0RXF1YWxzKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbn1cbmV4cG9ydHMuZGVmYXVsdEVxdWFscyA9IGRlZmF1bHRFcXVhbHM7XG4vKipcbiAqIERlZmF1bHQgZnVuY3Rpb24gdG8gY29udmVydCBhbiBvYmplY3QgdG8gYSBzdHJpbmcuXG4gKiBAZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gZGVmYXVsdFRvU3RyaW5nKGl0ZW0pIHtcbiAgICBpZiAoaXRlbSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJ0NPTExFQ1RJT05fTlVMTCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzVW5kZWZpbmVkKGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiAnQ09MTEVDVElPTl9VTkRFRklORUQnO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1N0cmluZyhpdGVtKSkge1xuICAgICAgICByZXR1cm4gJyRzJyArIGl0ZW07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gJyRvJyArIGl0ZW0udG9TdHJpbmcoKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHRUb1N0cmluZyA9IGRlZmF1bHRUb1N0cmluZztcbi8qKlxuICogSm9pbnMgYWxsIHRoZSBwcm9wZXJpZXMgb2YgdGhlIG9iamVjdCB1c2luZyB0aGUgcHJvdmlkZWQgam9pbiBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gbWFrZVN0cmluZyhpdGVtLCBqb2luKSB7XG4gICAgaWYgKGpvaW4gPT09IHZvaWQgMCkgeyBqb2luID0gJywnOyB9XG4gICAgaWYgKGl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICdDT0xMRUNUSU9OX05VTEwnO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1VuZGVmaW5lZChpdGVtKSkge1xuICAgICAgICByZXR1cm4gJ0NPTExFQ1RJT05fVU5ERUZJTkVEJztcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNTdHJpbmcoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0udG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciB0b3JldCA9ICd7JztcbiAgICAgICAgdmFyIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBpdGVtKSB7XG4gICAgICAgICAgICBpZiAoZXhwb3J0cy5oYXMoaXRlbSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcmV0ID0gdG9yZXQgKyBqb2luO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0b3JldCA9IHRvcmV0ICsgcHJvcCArICc6JyArIGl0ZW1bcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvcmV0ICsgJ30nO1xuICAgIH1cbn1cbmV4cG9ydHMubWFrZVN0cmluZyA9IG1ha2VTdHJpbmc7XG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gYXJndW1lbnQgaXMgYSBmdW5jdGlvbi5cbiAqIEBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmMpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBmdW5jKSA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gYXJndW1lbnQgaXMgdW5kZWZpbmVkLlxuICogQGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKG9iaikge1xuICAgIHJldHVybiAodHlwZW9mIG9iaikgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGFyZ3VtZW50IGlzIGEgc3RyaW5nLlxuICogQGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG4vKipcbiAqIFJldmVyc2VzIGEgY29tcGFyZSBmdW5jdGlvbi5cbiAqIEBmdW5jdGlvblxuICovXG5mdW5jdGlvbiByZXZlcnNlQ29tcGFyZUZ1bmN0aW9uKGNvbXBhcmVGdW5jdGlvbikge1xuICAgIGlmIChpc1VuZGVmaW5lZChjb21wYXJlRnVuY3Rpb24pIHx8ICFpc0Z1bmN0aW9uKGNvbXBhcmVGdW5jdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICBpZiAoYSA8IGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGEgPT09IGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZCwgdikge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmVGdW5jdGlvbihkLCB2KSAqIC0xO1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMucmV2ZXJzZUNvbXBhcmVGdW5jdGlvbiA9IHJldmVyc2VDb21wYXJlRnVuY3Rpb247XG4vKipcbiAqIFJldHVybnMgYW4gZXF1YWwgZnVuY3Rpb24gZ2l2ZW4gYSBjb21wYXJlIGZ1bmN0aW9uLlxuICogQGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmVUb0VxdWFscyhjb21wYXJlRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVGdW5jdGlvbihhLCBiKSA9PT0gMDtcbiAgICB9O1xufVxuZXhwb3J0cy5jb21wYXJlVG9FcXVhbHMgPSBjb21wYXJlVG9FcXVhbHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gQ29weXJpZ2h0IDIwMTMgQmFzYXJhdCBBbGkgU3llZC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vXG4vLyBMaWNlbnNlZCB1bmRlciBNSVQgb3BlbiBzb3VyY2UgbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4vL1xuLy8gT3JnaW5hbCBqYXZhc2NyaXB0IGNvZGUgd2FzIGJ5IE1hdXJpY2lvIFNhbnRvc1xuLy9cbnZhciBfYXJyYXlzID0gcmVxdWlyZShcIi4vYXJyYXlzXCIpO1xuZXhwb3J0cy5hcnJheXMgPSBfYXJyYXlzO1xudmFyIEJhZ18xID0gcmVxdWlyZShcIi4vQmFnXCIpO1xuZXhwb3J0cy5CYWcgPSBCYWdfMS5kZWZhdWx0O1xudmFyIEJTVHJlZV8xID0gcmVxdWlyZShcIi4vQlNUcmVlXCIpO1xuZXhwb3J0cy5CU1RyZWUgPSBCU1RyZWVfMS5kZWZhdWx0O1xudmFyIEJTVHJlZUtWXzEgPSByZXF1aXJlKFwiLi9CU1RyZWVLVlwiKTtcbmV4cG9ydHMuQlNUcmVlS1YgPSBCU1RyZWVLVl8xLmRlZmF1bHQ7XG52YXIgRGljdGlvbmFyeV8xID0gcmVxdWlyZShcIi4vRGljdGlvbmFyeVwiKTtcbmV4cG9ydHMuRGljdGlvbmFyeSA9IERpY3Rpb25hcnlfMS5kZWZhdWx0O1xudmFyIEhlYXBfMSA9IHJlcXVpcmUoXCIuL0hlYXBcIik7XG5leHBvcnRzLkhlYXAgPSBIZWFwXzEuZGVmYXVsdDtcbnZhciBMaW5rZWREaWN0aW9uYXJ5XzEgPSByZXF1aXJlKFwiLi9MaW5rZWREaWN0aW9uYXJ5XCIpO1xuZXhwb3J0cy5MaW5rZWREaWN0aW9uYXJ5ID0gTGlua2VkRGljdGlvbmFyeV8xLmRlZmF1bHQ7XG52YXIgTGlua2VkTGlzdF8xID0gcmVxdWlyZShcIi4vTGlua2VkTGlzdFwiKTtcbmV4cG9ydHMuTGlua2VkTGlzdCA9IExpbmtlZExpc3RfMS5kZWZhdWx0O1xudmFyIE11bHRpRGljdGlvbmFyeV8xID0gcmVxdWlyZShcIi4vTXVsdGlEaWN0aW9uYXJ5XCIpO1xuZXhwb3J0cy5NdWx0aURpY3Rpb25hcnkgPSBNdWx0aURpY3Rpb25hcnlfMS5kZWZhdWx0O1xudmFyIEZhY3RvcnlEaWN0aW9uYXJ5XzEgPSByZXF1aXJlKFwiLi9GYWN0b3J5RGljdGlvbmFyeVwiKTtcbmV4cG9ydHMuRmFjdG9yeURpY3Rpb25hcnkgPSBGYWN0b3J5RGljdGlvbmFyeV8xLmRlZmF1bHQ7XG52YXIgRmFjdG9yeURpY3Rpb25hcnlfMiA9IHJlcXVpcmUoXCIuL0ZhY3RvcnlEaWN0aW9uYXJ5XCIpO1xuZXhwb3J0cy5EZWZhdWx0RGljdGlvbmFyeSA9IEZhY3RvcnlEaWN0aW9uYXJ5XzIuZGVmYXVsdDtcbnZhciBRdWV1ZV8xID0gcmVxdWlyZShcIi4vUXVldWVcIik7XG5leHBvcnRzLlF1ZXVlID0gUXVldWVfMS5kZWZhdWx0O1xudmFyIFByaW9yaXR5UXVldWVfMSA9IHJlcXVpcmUoXCIuL1ByaW9yaXR5UXVldWVcIik7XG5leHBvcnRzLlByaW9yaXR5UXVldWUgPSBQcmlvcml0eVF1ZXVlXzEuZGVmYXVsdDtcbnZhciBTZXRfMSA9IHJlcXVpcmUoXCIuL1NldFwiKTtcbmV4cG9ydHMuU2V0ID0gU2V0XzEuZGVmYXVsdDtcbnZhciBTdGFja18xID0gcmVxdWlyZShcIi4vU3RhY2tcIik7XG5leHBvcnRzLlN0YWNrID0gU3RhY2tfMS5kZWZhdWx0O1xudmFyIE11bHRpUm9vdFRyZWVfMSA9IHJlcXVpcmUoXCIuL011bHRpUm9vdFRyZWVcIik7XG5leHBvcnRzLk11bHRpUm9vdFRyZWUgPSBNdWx0aVJvb3RUcmVlXzEuZGVmYXVsdDtcbnZhciBfdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5leHBvcnRzLnV0aWwgPSBfdXRpbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdfQ==
return require('typescript-collections');
});

/***/ }),

/***/ "./src/Framework/Generic/UnOrderMultiMap.ts":
/*!**************************************************!*\
  !*** ./src/Framework/Generic/UnOrderMultiMap.ts ***!
  \**************************************************/
/*! exports provided: UnOrderMultiMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnOrderMultiMap", function() { return UnOrderMultiMap; });
/* harmony import */ var typescript_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript-collections */ "./node_modules/typescript-collections/dist/lib/umd.js");
/* harmony import */ var typescript_collections__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typescript_collections__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let UnOrderMultiMap = class UnOrderMultiMap {
    constructor() {
        this.dictionary = new typescript_collections__WEBPACK_IMPORTED_MODULE_0__["Dictionary"]();
        // 重用list
        this.queue = new typescript_collections__WEBPACK_IMPORTED_MODULE_0__["Queue"]();
    }
    GetDictionary() {
        return this.dictionary;
    }
    Add(t, k) {
        let _firstKey = null;
        let list = this.dictionary.getValue(t);
        if (list == null) {
            if (this.Count() == 0) {
                _firstKey = t;
            }
            list = this.FetchList();
            this.dictionary.setValue(t, list);
        }
        else {
            if (this.Count() != 0 && list.length == 0) {
                _firstKey = t;
            }
        }
        list.push(k);
        this._first = this.dictionary.getValue(_firstKey);
    }
    First() {
        return this._first;
    }
    Count() {
        return this.dictionary.size();
    }
    FetchList() {
        if (this.queue.size() > 0) {
            let list = this.queue.dequeue();
            list.splice(0, list.length);
            return list;
        }
        return new Array();
    }
    RecycleList(list) {
        // 防止暴涨
        if (this.queue.size() > 100) {
            return;
        }
        list.splice(0, list.length);
        this.queue.enqueue(list);
    }
    RemoveByTK(t, k) {
        let list = this.dictionary.getValue(t);
        if (list == null) {
            return false;
        }
        if (!list.splice(0)) {
            return false;
        }
        if (list.length == 0) {
            this.RecycleList(list);
            this.dictionary.remove(t);
        }
        return true;
    }
    RemoveByKey(t) {
        let list = this.dictionary.getValue(t);
        if (list != null) {
            this.RecycleList(list);
        }
        let _remove = this.dictionary.remove(t);
        if (!_remove) {
            return false;
        }
        return true;
    }
    /// <summary>
    /// 不返回内部的list,copy一份出来
    /// </summary>
    /// <param name="t"></param>
    /// <returns></returns>
    GetAll(t) {
        let list = this.dictionary.getValue(t);
        let newList = new Array();
        if (list == null) {
            return newList;
        }
        for (let i = 0; i < list.length; i++) {
            newList[i] = list[i];
        }
        return newList;
    }
    // /// <summary>
    // /// 返回内部的list
    /// </summary>
    /// <param name="t"></param>
    /// <returns></returns>
    // public this[t:T]:Array<K>
    // {
    //     return this.dictionary
    // }
    GetOne(t) {
        let list = this.dictionary.getValue(t);
        if (list != null && list.length > 0) {
            return list[0];
        }
        return null;
    }
    Contains(t, k) {
        let list = this.dictionary.getValue(t);
        if (list == null) {
            return false;
        }
        return list.includes(k);
    }
    ContainsKey(t) {
        return this.dictionary.containsKey(t);
    }
    Clear() {
        this.dictionary.forEach((k, v) => {
            this.RecycleList(v);
        });
        this._first = null;
    }
};
UnOrderMultiMap = __decorate([
    Reflect.metadata('data', 'test1')
], UnOrderMultiMap);



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return main; });
/* harmony import */ var _test_GameTest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test/GameTest */ "./src/test/GameTest.ts");

function main(lancher) {
    new JavaScriptApplication(lancher); // tslint:disable-line
}
class JavaScriptApplication {
    constructor(launcher) {
        JavaScriptApplication.$inst = this;
        this.lancher = launcher;
        this.initialize();
    }
    static get inst() {
        return this.$inst;
    }
    async initialize() {
        try {
            console.log(">>>>puerts initialize ...");
            this.lancher.OnJsStart = this.OnStart.bind(this);
            this.lancher.OnJsUpdate = this.OnUpdate;
            this.lancher.OnJsLateUpdate = this.OnLateUpdate;
            this.lancher.OnJsFixedUpdate = this.OnFixedUpdate;
            this.lancher.OnJsApplicationFocus = this.OnApplicationFocus;
            this.lancher.OnJsApplicationPause = this.OnApplicationPause;
            this.lancher.OnJsApplicationQuit = this.OnApplicationQuit;
        }
        catch (e) {
            console.error(e.toString());
        }
        console.log(">>>>puerts initialize finish...");
    }
    OnStart() {
        _test_GameTest__WEBPACK_IMPORTED_MODULE_0__["GameTest"].start();
        console.log(">>>OnStart>1");
    }
    OnUpdate() {
        WebAPI.tick();
    }
    OnLateUpdate() {
    }
    OnFixedUpdate() {
    }
    OnApplicationFocus(pState) {
    }
    OnApplicationPause(pState) {
    }
    OnApplicationQuit() {
        console.log(">>>>OnApplicationQuit");
        WebAPI.finalize();
    }
}


/***/ }),

/***/ "./src/test/GameTest.ts":
/*!******************************!*\
  !*** ./src/test/GameTest.ts ***!
  \******************************/
/*! exports provided: GameTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameTest", function() { return GameTest; });
/* harmony import */ var _Framework_Generic_UnOrderMultiMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Framework/Generic/UnOrderMultiMap */ "./src/Framework/Generic/UnOrderMultiMap.ts");

class GameTest {
    static start() {
        // const metadata = Reflect.getMetadata('data', UnOrderMultiMap);
        // console.log(metadata);
        let a = new _Framework_Generic_UnOrderMultiMap__WEBPACK_IMPORTED_MODULE_0__["UnOrderMultiMap"]();
        a.Add(1, 1);
        console.log(">>>>" + a.First());
        console.log(">>>>" + a.GetOne(1));
        // testStorage();
        // // testWebapiMisc(),
        // testTimer();
        // testXHR();
        // UnitTest.run();
        // var variable = DCET.EntityFactory.Create(DCET.Game.Environment, $typeof(TestJsCompnent));
        // console.log("...."+variable)
    }
}


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVmbGVjdC1tZXRhZGF0YS9SZWZsZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90eXBlc2NyaXB0LWNvbGxlY3Rpb25zL2Rpc3QvbGliL3VtZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRnJhbWV3b3JrL0dlbmVyaWMvVW5PcmRlck11bHRpTWFwLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy90ZXN0L0dhbWVUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxtREFBbUQ7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFLDZCQUE2QixnQkFBZ0Isa0JBQWtCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDRDQUE0QztBQUMzRTtBQUNBLG1DQUFtQyx3QkFBd0Isa0JBQWtCLEVBQUU7QUFDL0UsbUNBQW1DLHlCQUF5QixFQUFFLEVBQUU7QUFDaEU7QUFDQSx1Q0FBdUMsOEJBQThCO0FBQ3JFLHVDQUF1QyxtQkFBbUIsRUFBRTtBQUM1RDtBQUNBLHVDQUF1QyxxREFBcUQ7QUFDNUYsdUNBQXVDLGlCQUFpQixFQUFFO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQywyQ0FBMkM7QUFDM0MsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLDJDQUEyQztBQUMzQyw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUdBQXVHO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLDJDQUEyQztBQUMzQyw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsMkNBQTJDO0FBQzNDLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQywyQ0FBMkM7QUFDM0MsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLDJDQUEyQztBQUMzQyw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQywyQ0FBMkM7QUFDM0MsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsMkNBQTJDO0FBQzNDLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQywyQ0FBMkM7QUFDM0MsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCx1QkFBdUI7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsMEJBQTBCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsYUFBYTtBQUNoRixxRUFBcUUsYUFBYTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywwQkFBMEIsRUFBRTtBQUNsRTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLG9EQUFvRCwrQ0FBK0M7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsVUFBVTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCwwREFBMEQ7QUFDNUcsb0RBQW9ELDREQUE0RDtBQUNoSCxxREFBcUQsNERBQTREO0FBQ2pILDJEQUEyRCx1QkFBdUI7QUFDbEYsNkRBQTZELHVCQUF1QjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx1QkFBdUIsRUFBRTtBQUMvRDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLHNEQUFzRCw2QkFBNkI7QUFDbkYsc0RBQXNELDBDQUEwQztBQUNoRyx5REFBeUQsZ0NBQWdDO0FBQ3pGLG1EQUFtRCxtQkFBbUI7QUFDdEUsa0RBQWtELHlCQUF5QjtBQUMzRSxvREFBb0QsMkJBQTJCO0FBQy9FLHFEQUFxRCw0QkFBNEI7QUFDakYsMkRBQTJELG9CQUFvQjtBQUMvRSw2REFBNkQsb0JBQW9CO0FBQ2pGO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELDBCQUEwQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixVQUFVO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9CQUFvQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLDBCQUEwQjs7Ozs7Ozs7Ozs7O0FDMW1DM0I7QUFDQSxRQUFRLElBQTREO0FBQ3BFO0FBQ0EsS0FBSyxNQUFNLFVBY047QUFDTCxDQUFDO0FBQ0Q7QUFDQSwyQkFBMkIsZ0JBQWdCLFVBQVUsVUFBVSwwQ0FBMEMsZ0JBQWdCLE9BQUMsT0FBTyxvQkFBb0IsOENBQThDLGtDQUFrQyxZQUFZLFlBQVksbUNBQW1DLGlCQUFpQixnQkFBZ0Isc0JBQXNCLG9CQUFvQiwwQ0FBMEMsWUFBWSxXQUFXLFlBQVksU0FBUyxHQUFHO0FBQ3BjO0FBQ0E7QUFDQTtBQUNBLFVBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRix5QkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4QkFBOEIsa0JBQWtCLGNBQWMsR0FBRyw0QkFBNEI7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLENBQUMsRUFBRSxlQUFlO0FBQ2xCO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0NBQWdDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEVBQUU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsQ0FBQyxFQUFFLHlCQUF5QjtBQUM1QjtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUseUJBQXlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBLGlDQUFpQyxhQUFhO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkI7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0EsaUNBQWlDLGFBQWE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsc0JBQXNCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyx3QkFBd0I7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsWUFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsSUFBSTtBQUNMOztBQUVBLENBQUMsRUFBRSx3Q0FBd0M7QUFDM0M7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUseUJBQXlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsRUFBRTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsRUFBRTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQSxnQkFBZ0IsRUFBRTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwQkFBMEI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLFNBQVM7QUFDVCwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLENBQUMsSUFBSTtBQUNMOztBQUVBLENBQUMsRUFBRSxZQUFZO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLHlCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCO0FBQ0EsZUFBZSx5QkFBeUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQixFQUFFO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsRUFBRTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsQ0FBQyxFQUFFLDZCQUE2QjtBQUNoQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQ0FBZ0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsRUFBRTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVEsaURBQWlEO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxDQUFDLEVBQUUsMEJBQTBCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLFVBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRix5QkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsRUFBRTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBLGdCQUFnQixFQUFFO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsRUFBRTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMEJBQTBCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHdCQUF3QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsdUJBQXVCO0FBQ3JDLGNBQWMsaUNBQWlDO0FBQy9DO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxFQUFFLDZCQUE2QjtBQUNoQztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsRUFBRTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQixFQUFFO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsaUNBQWlDO0FBQ2hEO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxpQ0FBaUM7QUFDaEQ7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUIsZUFBZSxpQ0FBaUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsRUFBRTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFVBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNEJBQTRCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLElBQUk7QUFDTDs7QUFFQSxDQUFDLEVBQUUsMEJBQTBCO0FBQzdCO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5QkFBeUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQ0FBaUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyw4QkFBOEI7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQSxlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQSxnQkFBZ0IsRUFBRTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxzQkFBc0I7QUFDakU7QUFDQSxxQ0FBcUMsaUJBQWlCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLElBQUk7QUFDTDs7QUFFQSxDQUFDLEVBQUUsMkNBQTJDO0FBQzlDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBLGlDQUFpQyxjQUFjO0FBQy9DLCtCQUErQixZQUFZO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsZ0JBQWdCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSwrREFBK0QsZ0NBQWdDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsV0FBVztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG9CQUFvQjtBQUMvQztBQUNBLGtDQUFrQyx3Q0FBd0M7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdCQUFnQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixnQkFBZ0I7QUFDOUYsMkNBQTJDLFNBQVMsYUFBYSxTQUFTO0FBQzFFLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdDQUFnQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZ0NBQWdDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxDQUFDLEdBQUc7QUFDSjtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdDQUFnQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRLDJEQUEyRDtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLElBQUk7QUFDTDs7QUFFQSxDQUFDLEVBQUUsdUJBQXVCO0FBQzFCO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEVBQUU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsaUNBQWlDO0FBQ2hEO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUSxrREFBa0Q7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJQUFJO0FBQ0w7O0FBRUEsQ0FBQyxFQUFFLGlCQUFpQjtBQUNwQjtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHlCQUF5QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLElBQUk7QUFDTDs7QUFFQSxDQUFDLEVBQUUsMkNBQTJDO0FBQzlDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEVBQUU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxpQ0FBaUM7QUFDaEQ7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRLGtEQUFrRDtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLElBQUk7QUFDTDs7QUFFQSxDQUFDLEVBQUUsaUJBQWlCO0FBQ3BCO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLE9BQU87QUFDbEIsV0FBVyxpQ0FBaUM7QUFDNUM7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsaUNBQWlDO0FBQzVDO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLE9BQU87QUFDbEIsV0FBVyxpQ0FBaUM7QUFDNUM7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLE9BQU87QUFDbEIsV0FBVyxpQ0FBaUM7QUFDNUM7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsaUNBQWlDO0FBQzVDO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLE1BQU07QUFDakIsV0FBVyxpQ0FBaUM7QUFDNUM7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHFCQUFxQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEVBQUUsWUFBWTtBQUNmO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFlBQVk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxHQUFHO0FBQ0o7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEVBQUUsaVFBQWlRLEVBQUUsR0FBRztBQUN6USwyQ0FBMkMsY0FBYztBQUN6RDtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbnBHb0U7QUFHM0M7QUFHMUIsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUE1QjtRQUdZLGVBQVUsR0FBNEIsSUFBSSxpRUFBVSxFQUFlLENBQUM7UUFDNUUsU0FBUztRQUNRLFVBQUssR0FBb0IsSUFBSSw0REFBSyxFQUFZLENBQUM7SUFrS3BFLENBQUM7SUFoS1UsYUFBYTtRQUVoQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVNLEdBQUcsQ0FBQyxDQUFJLEVBQUUsQ0FBSTtRQUVqQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxJQUFJLElBQUksSUFBSSxFQUNoQjtZQUNJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFDckI7Z0JBQ0ksU0FBUyxHQUFHLENBQUMsQ0FBQzthQUNqQjtZQUNELElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3JDO2FBRUQ7WUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQ3pDO2dCQUNJLFNBQVMsR0FBRyxDQUFDLENBQUM7YUFDakI7U0FDSjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFHTSxLQUFLO1FBRVIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxLQUFLO1FBRVIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFTyxTQUFTO1FBRWIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFDekI7WUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxJQUFJLEtBQUssRUFBSyxDQUFDO0lBQzFCLENBQUM7SUFHTyxXQUFXLENBQUMsSUFBYztRQUU5QixPQUFPO1FBQ1AsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEdBQUcsRUFDM0I7WUFDSSxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLFVBQVUsQ0FBQyxDQUFJLEVBQUUsQ0FBSTtRQUV4QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQ2hCO1lBQ0ksT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFDbkI7WUFDSSxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQ3BCO1lBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxXQUFXLENBQUMsQ0FBSTtRQUVuQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQ2hCO1lBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjtRQUNELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEVBQ1o7WUFDSSxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ2hCLE1BQU0sQ0FBQyxDQUFJO1FBRWQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQUssQ0FBQztRQUM3QixJQUFJLElBQUksSUFBSSxJQUFJLEVBQ2hCO1lBQ0ksT0FBTyxPQUFPLENBQUM7U0FDbEI7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDcEM7WUFDSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLElBQUk7SUFDSiw2QkFBNkI7SUFDN0IsSUFBSTtJQUVHLE1BQU0sQ0FBQyxDQUFJO1FBRWQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNuQztZQUNJLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLFFBQVEsQ0FBQyxDQUFJLEVBQUUsQ0FBSTtRQUV0QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQ2hCO1lBQ0ksT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVNLFdBQVcsQ0FBQyxDQUFJO1FBRW5CLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLEtBQUs7UUFFUixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUU3QixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztDQUNKO0FBdktZLGVBQWU7SUFEM0IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO0dBQ3JCLGVBQWUsQ0F1SzNCO0FBdksyQjs7Ozs7Ozs7Ozs7OztBQ0o1QjtBQUFBO0FBQUE7QUFBeUM7QUFjMUIsU0FBUyxJQUFJLENBQUMsT0FBd0I7SUFFakQsSUFBSSxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjtBQUM5RCxDQUFDO0FBRUQsTUFBTSxxQkFBcUI7SUFVdkIsWUFBWSxRQUF5QjtRQUVqQyxxQkFBcUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBVk0sTUFBTSxLQUFLLElBQUk7UUFFbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFTTyxLQUFLLENBQUMsVUFBVTtRQUVwQixJQUNBO1lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQzVELElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQzVELElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1NBQzdEO1FBQUMsT0FBTyxDQUFDLEVBQ1Y7WUFDSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTyxPQUFPO1FBRVgsdURBQVEsQ0FBQyxLQUFLLEVBQUU7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU8sUUFBUTtRQUVaLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU8sWUFBWTtJQUVwQixDQUFDO0lBRU8sYUFBYTtJQUVyQixDQUFDO0lBRU8sa0JBQWtCLENBQUMsTUFBZTtJQUUxQyxDQUFDO0lBRU8sa0JBQWtCLENBQUMsTUFBZTtJQUUxQyxDQUFDO0lBRU8saUJBQWlCO1FBRXJCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNyQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEIsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDakZEO0FBQUE7QUFBQTtBQUFxRTtBQUU5RCxNQUFNLFFBQVE7SUFDcEIsTUFBTSxDQUFDLEtBQUs7UUFDWCxpRUFBaUU7UUFDakUseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxHQUFHLElBQUksa0ZBQWUsRUFBa0I7UUFDN0MsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLGVBQWU7UUFDZixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLDRGQUE0RjtRQUM1RiwrQkFBK0I7SUFDaEMsQ0FBQztDQUNEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShnbG9iYWwsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoQykgTWljcm9zb2Z0LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXG5cblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbnZhciBSZWZsZWN0O1xuKGZ1bmN0aW9uIChSZWZsZWN0KSB7XG4gICAgLy8gTWV0YWRhdGEgUHJvcG9zYWxcbiAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhL1xuICAgIChmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgICAgICB2YXIgcm9vdCA9IHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICAgICAgICAgICAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDpcbiAgICAgICAgICAgICAgICB0eXBlb2YgdGhpcyA9PT0gXCJvYmplY3RcIiA/IHRoaXMgOlxuICAgICAgICAgICAgICAgICAgICBGdW5jdGlvbihcInJldHVybiB0aGlzO1wiKSgpO1xuICAgICAgICB2YXIgZXhwb3J0ZXIgPSBtYWtlRXhwb3J0ZXIoUmVmbGVjdCk7XG4gICAgICAgIGlmICh0eXBlb2Ygcm9vdC5SZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByb290LlJlZmxlY3QgPSBSZWZsZWN0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXhwb3J0ZXIgPSBtYWtlRXhwb3J0ZXIocm9vdC5SZWZsZWN0LCBleHBvcnRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZmFjdG9yeShleHBvcnRlcik7XG4gICAgICAgIGZ1bmN0aW9uIG1ha2VFeHBvcnRlcih0YXJnZXQsIHByZXZpb3VzKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzKVxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91cyhrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KShmdW5jdGlvbiAoZXhwb3J0ZXIpIHtcbiAgICAgICAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gICAgICAgIC8vIGZlYXR1cmUgdGVzdCBmb3IgU3ltYm9sIHN1cHBvcnRcbiAgICAgICAgdmFyIHN1cHBvcnRzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgICB2YXIgdG9QcmltaXRpdmVTeW1ib2wgPSBzdXBwb3J0c1N5bWJvbCAmJiB0eXBlb2YgU3ltYm9sLnRvUHJpbWl0aXZlICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sLnRvUHJpbWl0aXZlIDogXCJAQHRvUHJpbWl0aXZlXCI7XG4gICAgICAgIHZhciBpdGVyYXRvclN5bWJvbCA9IHN1cHBvcnRzU3ltYm9sICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wuaXRlcmF0b3IgOiBcIkBAaXRlcmF0b3JcIjtcbiAgICAgICAgdmFyIHN1cHBvcnRzQ3JlYXRlID0gdHlwZW9mIE9iamVjdC5jcmVhdGUgPT09IFwiZnVuY3Rpb25cIjsgLy8gZmVhdHVyZSB0ZXN0IGZvciBPYmplY3QuY3JlYXRlIHN1cHBvcnRcbiAgICAgICAgdmFyIHN1cHBvcnRzUHJvdG8gPSB7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5OyAvLyBmZWF0dXJlIHRlc3QgZm9yIF9fcHJvdG9fXyBzdXBwb3J0XG4gICAgICAgIHZhciBkb3duTGV2ZWwgPSAhc3VwcG9ydHNDcmVhdGUgJiYgIXN1cHBvcnRzUHJvdG87XG4gICAgICAgIHZhciBIYXNoTWFwID0ge1xuICAgICAgICAgICAgLy8gY3JlYXRlIGFuIG9iamVjdCBpbiBkaWN0aW9uYXJ5IG1vZGUgKGEuay5hLiBcInNsb3dcIiBtb2RlIGluIHY4KVxuICAgICAgICAgICAgY3JlYXRlOiBzdXBwb3J0c0NyZWF0ZVxuICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gTWFrZURpY3Rpb25hcnkoT2JqZWN0LmNyZWF0ZShudWxsKSk7IH1cbiAgICAgICAgICAgICAgICA6IHN1cHBvcnRzUHJvdG9cbiAgICAgICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBNYWtlRGljdGlvbmFyeSh7IF9fcHJvdG9fXzogbnVsbCB9KTsgfVxuICAgICAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1ha2VEaWN0aW9uYXJ5KHt9KTsgfSxcbiAgICAgICAgICAgIGhhczogZG93bkxldmVsXG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAobWFwLCBrZXkpIHsgcmV0dXJuIGhhc093bi5jYWxsKG1hcCwga2V5KTsgfVxuICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKG1hcCwga2V5KSB7IHJldHVybiBrZXkgaW4gbWFwOyB9LFxuICAgICAgICAgICAgZ2V0OiBkb3duTGV2ZWxcbiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChtYXAsIGtleSkgeyByZXR1cm4gaGFzT3duLmNhbGwobWFwLCBrZXkpID8gbWFwW2tleV0gOiB1bmRlZmluZWQ7IH1cbiAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uIChtYXAsIGtleSkgeyByZXR1cm4gbWFwW2tleV07IH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIExvYWQgZ2xvYmFsIG9yIHNoaW0gdmVyc2lvbnMgb2YgTWFwLCBTZXQsIGFuZCBXZWFrTWFwXG4gICAgICAgIHZhciBmdW5jdGlvblByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihGdW5jdGlvbik7XG4gICAgICAgIHZhciB1c2VQb2x5ZmlsbCA9IHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52W1wiUkVGTEVDVF9NRVRBREFUQV9VU0VfTUFQX1BPTFlGSUxMXCJdID09PSBcInRydWVcIjtcbiAgICAgICAgdmFyIF9NYXAgPSAhdXNlUG9seWZpbGwgJiYgdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBNYXAucHJvdG90eXBlLmVudHJpZXMgPT09IFwiZnVuY3Rpb25cIiA/IE1hcCA6IENyZWF0ZU1hcFBvbHlmaWxsKCk7XG4gICAgICAgIHZhciBfU2V0ID0gIXVzZVBvbHlmaWxsICYmIHR5cGVvZiBTZXQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU2V0LnByb3RvdHlwZS5lbnRyaWVzID09PSBcImZ1bmN0aW9uXCIgPyBTZXQgOiBDcmVhdGVTZXRQb2x5ZmlsbCgpO1xuICAgICAgICB2YXIgX1dlYWtNYXAgPSAhdXNlUG9seWZpbGwgJiYgdHlwZW9mIFdlYWtNYXAgPT09IFwiZnVuY3Rpb25cIiA/IFdlYWtNYXAgOiBDcmVhdGVXZWFrTWFwUG9seWZpbGwoKTtcbiAgICAgICAgLy8gW1tNZXRhZGF0YV1dIGludGVybmFsIHNsb3RcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnktb2JqZWN0LWludGVybmFsLW1ldGhvZHMtYW5kLWludGVybmFsLXNsb3RzXG4gICAgICAgIHZhciBNZXRhZGF0YSA9IG5ldyBfV2Vha01hcCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQXBwbGllcyBhIHNldCBvZiBkZWNvcmF0b3JzIHRvIGEgcHJvcGVydHkgb2YgYSB0YXJnZXQgb2JqZWN0LlxuICAgICAgICAgKiBAcGFyYW0gZGVjb3JhdG9ycyBBbiBhcnJheSBvZiBkZWNvcmF0b3JzLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0LlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IHRvIGRlY29yYXRlLlxuICAgICAgICAgKiBAcGFyYW0gYXR0cmlidXRlcyAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yIGZvciB0aGUgdGFyZ2V0IGtleS5cbiAgICAgICAgICogQHJlbWFya3MgRGVjb3JhdG9ycyBhcmUgYXBwbGllZCBpbiByZXZlcnNlIG9yZGVyLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICBFeGFtcGxlID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzQXJyYXksIEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzQXJyYXksIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzQXJyYXksIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiLFxuICAgICAgICAgKiAgICAgICAgIFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiLFxuICAgICAgICAgKiAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpKSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIixcbiAgICAgICAgICogICAgICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIsXG4gICAgICAgICAqICAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpKSk7XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBkZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSkge1xuICAgICAgICAgICAgICAgIGlmICghSXNBcnJheShkZWNvcmF0b3JzKSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QoYXR0cmlidXRlcykgJiYgIUlzVW5kZWZpbmVkKGF0dHJpYnV0ZXMpICYmICFJc051bGwoYXR0cmlidXRlcykpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBpZiAoSXNOdWxsKGF0dHJpYnV0ZXMpKVxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIERlY29yYXRlUHJvcGVydHkoZGVjb3JhdG9ycywgdGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIUlzQXJyYXkoZGVjb3JhdG9ycykpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBpZiAoIUlzQ29uc3RydWN0b3IodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBEZWNvcmF0ZUNvbnN0cnVjdG9yKGRlY29yYXRvcnMsIHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJkZWNvcmF0ZVwiLCBkZWNvcmF0ZSk7XG4gICAgICAgIC8vIDQuMS4yIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpXG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI3JlZmxlY3QubWV0YWRhdGFcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgZGVmYXVsdCBtZXRhZGF0YSBkZWNvcmF0b3IgZmFjdG9yeSB0aGF0IGNhbiBiZSB1c2VkIG9uIGEgY2xhc3MsIGNsYXNzIG1lbWJlciwgb3IgcGFyYW1ldGVyLlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgVGhlIGtleSBmb3IgdGhlIG1ldGFkYXRhIGVudHJ5LlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFWYWx1ZSBUaGUgdmFsdWUgZm9yIHRoZSBtZXRhZGF0YSBlbnRyeS5cbiAgICAgICAgICogQHJldHVybnMgQSBkZWNvcmF0b3IgZnVuY3Rpb24uXG4gICAgICAgICAqIEByZW1hcmtzXG4gICAgICAgICAqIElmIGBtZXRhZGF0YUtleWAgaXMgYWxyZWFkeSBkZWZpbmVkIGZvciB0aGUgdGFyZ2V0IGFuZCB0YXJnZXQga2V5LCB0aGVcbiAgICAgICAgICogbWV0YWRhdGFWYWx1ZSBmb3IgdGhhdCBrZXkgd2lsbCBiZSBvdmVyd3JpdHRlbi5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICBAUmVmbGVjdC5tZXRhZGF0YShrZXksIHZhbHVlKVxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IsIFR5cGVTY3JpcHQgb25seSlcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSwgVHlwZVNjcmlwdCBvbmx5KVxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcbiAgICAgICAgICogICAgICAgICBwcm9wZXJ0eTtcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICBAUmVmbGVjdC5tZXRhZGF0YShrZXksIHZhbHVlKVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QoKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcbiAgICAgICAgICogICAgICAgICBtZXRob2QoKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIG1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpICYmICFJc1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIE9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRlY29yYXRvcjtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcIm1ldGFkYXRhXCIsIG1ldGFkYXRhKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluZSBhIHVuaXF1ZSBtZXRhZGF0YSBlbnRyeSBvbiB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXG4gICAgICAgICAqIEBwYXJhbSBtZXRhZGF0YVZhbHVlIEEgdmFsdWUgdGhhdCBjb250YWlucyBhdHRhY2hlZCBtZXRhZGF0YS5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0byBkZWZpbmUgbWV0YWRhdGEuXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBkZWNvcmF0b3IgZmFjdG9yeSBhcyBtZXRhZGF0YS1wcm9kdWNpbmcgYW5ub3RhdGlvbi5cbiAgICAgICAgICogICAgIGZ1bmN0aW9uIE15QW5ub3RhdGlvbihvcHRpb25zKTogRGVjb3JhdG9yIHtcbiAgICAgICAgICogICAgICAgICByZXR1cm4gKHRhcmdldCwga2V5PykgPT4gUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIHRhcmdldCwga2V5KTtcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGRlZmluZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcImRlZmluZU1ldGFkYXRhXCIsIGRlZmluZU1ldGFkYXRhKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgYSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHRhcmdldCBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbiBoYXMgdGhlIHByb3ZpZGVkIG1ldGFkYXRhIGtleSBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXG4gICAgICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXG4gICAgICAgICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbWV0YWRhdGEga2V5IHdhcyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW47IG90aGVyd2lzZSwgYGZhbHNlYC5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcbiAgICAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGhhc01ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeUhhc01ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcImhhc01ldGFkYXRhXCIsIGhhc01ldGFkYXRhKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgYSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHRhcmdldCBvYmplY3QgaGFzIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG1ldGFkYXRhIGtleSB3YXMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0IG9iamVjdDsgb3RoZXJ3aXNlLCBgZmFsc2VgLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc093bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc093bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc093bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc093bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gaGFzT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5SGFzT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiaGFzT3duTWV0YWRhdGFcIiwgaGFzT3duTWV0YWRhdGEpO1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgb24gdGhlIHRhcmdldCBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbi5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAcmV0dXJucyBUaGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBtZXRhZGF0YSBrZXkgaWYgZm91bmQ7IG90aGVyd2lzZSwgYHVuZGVmaW5lZGAuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBnZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKVxuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlHZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJnZXRNZXRhZGF0YVwiLCBnZXRNZXRhZGF0YSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSBtZXRhZGF0YSB2YWx1ZSBmb3IgdGhlIHByb3ZpZGVkIG1ldGFkYXRhIGtleSBvbiB0aGUgdGFyZ2V0IG9iamVjdC5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAcmV0dXJucyBUaGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBtZXRhZGF0YSBrZXkgaWYgZm91bmQ7IG90aGVyd2lzZSwgYHVuZGVmaW5lZGAuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKVxuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlHZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJnZXRPd25NZXRhZGF0YVwiLCBnZXRPd25NZXRhZGF0YSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSBtZXRhZGF0YSBrZXlzIGRlZmluZWQgb24gdGhlIHRhcmdldCBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbi5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cbiAgICAgICAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgdW5pcXVlIG1ldGFkYXRhIGtleXMuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZ2V0TWV0YWRhdGFLZXlzKHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5TWV0YWRhdGFLZXlzKHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiZ2V0TWV0YWRhdGFLZXlzXCIsIGdldE1ldGFkYXRhS2V5cyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSB1bmlxdWUgbWV0YWRhdGEga2V5cyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0LlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB1bmlxdWUgbWV0YWRhdGEga2V5cy5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcbiAgICAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXMoRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YUtleXModGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKVxuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlPd25NZXRhZGF0YUtleXModGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJnZXRPd25NZXRhZGF0YUtleXNcIiwgZ2V0T3duTWV0YWRhdGFLZXlzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlbGV0ZXMgdGhlIG1ldGFkYXRhIGVudHJ5IGZyb20gdGhlIHRhcmdldCBvYmplY3Qgd2l0aCB0aGUgcHJvdmlkZWQga2V5LlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXG4gICAgICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXG4gICAgICAgICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbWV0YWRhdGEgZW50cnkgd2FzIGZvdW5kIGFuZCBkZWxldGVkOyBvdGhlcndpc2UsIGZhbHNlLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZGVsZXRlTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcCh0YXJnZXQsIHByb3BlcnR5S2V5LCAvKkNyZWF0ZSovIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChJc1VuZGVmaW5lZChtZXRhZGF0YU1hcCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKCFtZXRhZGF0YU1hcC5kZWxldGUobWV0YWRhdGFLZXkpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YU1hcC5zaXplID4gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHZhciB0YXJnZXRNZXRhZGF0YSA9IE1ldGFkYXRhLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgdGFyZ2V0TWV0YWRhdGEuZGVsZXRlKHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIGlmICh0YXJnZXRNZXRhZGF0YS5zaXplID4gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIE1ldGFkYXRhLmRlbGV0ZSh0YXJnZXQpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJkZWxldGVNZXRhZGF0YVwiLCBkZWxldGVNZXRhZGF0YSk7XG4gICAgICAgIGZ1bmN0aW9uIERlY29yYXRlQ29uc3RydWN0b3IoZGVjb3JhdG9ycywgdGFyZ2V0KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgICAgIHZhciBkZWNvcmF0b3IgPSBkZWNvcmF0b3JzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBkZWNvcmF0ZWQgPSBkZWNvcmF0b3IodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKGRlY29yYXRlZCkgJiYgIUlzTnVsbChkZWNvcmF0ZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghSXNDb25zdHJ1Y3RvcihkZWNvcmF0ZWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBkZWNvcmF0ZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBEZWNvcmF0ZVByb3BlcnR5KGRlY29yYXRvcnMsIHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV07XG4gICAgICAgICAgICAgICAgdmFyIGRlY29yYXRlZCA9IGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKGRlY29yYXRlZCkgJiYgIUlzTnVsbChkZWNvcmF0ZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QoZGVjb3JhdGVkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRvciA9IGRlY29yYXRlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIENyZWF0ZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldE1ldGFkYXRhID0gTWV0YWRhdGEuZ2V0KE8pO1xuICAgICAgICAgICAgaWYgKElzVW5kZWZpbmVkKHRhcmdldE1ldGFkYXRhKSkge1xuICAgICAgICAgICAgICAgIGlmICghQ3JlYXRlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRhcmdldE1ldGFkYXRhID0gbmV3IF9NYXAoKTtcbiAgICAgICAgICAgICAgICBNZXRhZGF0YS5zZXQoTywgdGFyZ2V0TWV0YWRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gdGFyZ2V0TWV0YWRhdGEuZ2V0KFApO1xuICAgICAgICAgICAgaWYgKElzVW5kZWZpbmVkKG1ldGFkYXRhTWFwKSkge1xuICAgICAgICAgICAgICAgIGlmICghQ3JlYXRlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhTWFwID0gbmV3IF9NYXAoKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRNZXRhZGF0YS5zZXQoUCwgbWV0YWRhdGFNYXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1ldGFkYXRhTWFwO1xuICAgICAgICB9XG4gICAgICAgIC8vIDMuMS4xLjEgT3JkaW5hcnlIYXNNZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUClcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnloYXNtZXRhZGF0YVxuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeUhhc01ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKSB7XG4gICAgICAgICAgICB2YXIgaGFzT3duID0gT3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG4gICAgICAgICAgICBpZiAoaGFzT3duKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IE9yZGluYXJ5R2V0UHJvdG90eXBlT2YoTyk7XG4gICAgICAgICAgICBpZiAoIUlzTnVsbChwYXJlbnQpKVxuICAgICAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeUhhc01ldGFkYXRhKE1ldGFkYXRhS2V5LCBwYXJlbnQsIFApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIDMuMS4yLjEgT3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUClcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnloYXNvd25tZXRhZGF0YVxuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKSB7XG4gICAgICAgICAgICB2YXIgbWV0YWRhdGFNYXAgPSBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIC8qQ3JlYXRlKi8gZmFsc2UpO1xuICAgICAgICAgICAgaWYgKElzVW5kZWZpbmVkKG1ldGFkYXRhTWFwKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gVG9Cb29sZWFuKG1ldGFkYXRhTWFwLmhhcyhNZXRhZGF0YUtleSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIDMuMS4zLjEgT3JkaW5hcnlHZXRNZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUClcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnlnZXRtZXRhZGF0YVxuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeUdldE1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKSB7XG4gICAgICAgICAgICB2YXIgaGFzT3duID0gT3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG4gICAgICAgICAgICBpZiAoaGFzT3duKVxuICAgICAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeUdldE93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBPcmRpbmFyeUdldFByb3RvdHlwZU9mKE8pO1xuICAgICAgICAgICAgaWYgKCFJc051bGwocGFyZW50KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlHZXRNZXRhZGF0YShNZXRhZGF0YUtleSwgcGFyZW50LCBQKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gMy4xLjQuMSBPcmRpbmFyeUdldE93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKVxuICAgICAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeWdldG93bm1ldGFkYXRhXG4gICAgICAgIGZ1bmN0aW9uIE9yZGluYXJ5R2V0T3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApIHtcbiAgICAgICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgLypDcmVhdGUqLyBmYWxzZSk7XG4gICAgICAgICAgICBpZiAoSXNVbmRlZmluZWQobWV0YWRhdGFNYXApKVxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXR1cm4gbWV0YWRhdGFNYXAuZ2V0KE1ldGFkYXRhS2V5KTtcbiAgICAgICAgfVxuICAgICAgICAvLyAzLjEuNS4xIE9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUsIE8sIFApXG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5ZGVmaW5lb3dubWV0YWRhdGFcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTWV0YWRhdGFWYWx1ZSwgTywgUCkge1xuICAgICAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCAvKkNyZWF0ZSovIHRydWUpO1xuICAgICAgICAgICAgbWV0YWRhdGFNYXAuc2V0KE1ldGFkYXRhS2V5LCBNZXRhZGF0YVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyAzLjEuNi4xIE9yZGluYXJ5TWV0YWRhdGFLZXlzKE8sIFApXG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5bWV0YWRhdGFrZXlzXG4gICAgICAgIGZ1bmN0aW9uIE9yZGluYXJ5TWV0YWRhdGFLZXlzKE8sIFApIHtcbiAgICAgICAgICAgIHZhciBvd25LZXlzID0gT3JkaW5hcnlPd25NZXRhZGF0YUtleXMoTywgUCk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gT3JkaW5hcnlHZXRQcm90b3R5cGVPZihPKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG93bktleXM7XG4gICAgICAgICAgICB2YXIgcGFyZW50S2V5cyA9IE9yZGluYXJ5TWV0YWRhdGFLZXlzKHBhcmVudCwgUCk7XG4gICAgICAgICAgICBpZiAocGFyZW50S2V5cy5sZW5ndGggPD0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gb3duS2V5cztcbiAgICAgICAgICAgIGlmIChvd25LZXlzLmxlbmd0aCA8PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnRLZXlzO1xuICAgICAgICAgICAgdmFyIHNldCA9IG5ldyBfU2V0KCk7XG4gICAgICAgICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBvd25LZXlzXzEgPSBvd25LZXlzOyBfaSA8IG93bktleXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gb3duS2V5c18xW19pXTtcbiAgICAgICAgICAgICAgICB2YXIgaGFzS2V5ID0gc2V0LmhhcyhrZXkpO1xuICAgICAgICAgICAgICAgIGlmICghaGFzS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldC5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBwYXJlbnRLZXlzXzEgPSBwYXJlbnRLZXlzOyBfYSA8IHBhcmVudEtleXNfMS5sZW5ndGg7IF9hKyspIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gcGFyZW50S2V5c18xW19hXTtcbiAgICAgICAgICAgICAgICB2YXIgaGFzS2V5ID0gc2V0LmhhcyhrZXkpO1xuICAgICAgICAgICAgICAgIGlmICghaGFzS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldC5hZGQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gMy4xLjcuMSBPcmRpbmFyeU93bk1ldGFkYXRhS2V5cyhPLCBQKVxuICAgICAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeW93bm1ldGFkYXRha2V5c1xuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeU93bk1ldGFkYXRhS2V5cyhPLCBQKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCAvKkNyZWF0ZSovIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChJc1VuZGVmaW5lZChtZXRhZGF0YU1hcCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgICAgICAgICB2YXIga2V5c09iaiA9IG1ldGFkYXRhTWFwLmtleXMoKTtcbiAgICAgICAgICAgIHZhciBpdGVyYXRvciA9IEdldEl0ZXJhdG9yKGtleXNPYmopO1xuICAgICAgICAgICAgdmFyIGsgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IEl0ZXJhdG9yU3RlcChpdGVyYXRvcik7XG4gICAgICAgICAgICAgICAgaWYgKCFuZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMubGVuZ3RoID0gaztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBuZXh0VmFsdWUgPSBJdGVyYXRvclZhbHVlKG5leHQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXNba10gPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaysrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIDYgRUNNQVNjcmlwdCBEYXRhIFR5cDBlcyBhbmQgVmFsdWVzXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWVjbWFzY3JpcHQtZGF0YS10eXBlcy1hbmQtdmFsdWVzXG4gICAgICAgIGZ1bmN0aW9uIFR5cGUoeCkge1xuICAgICAgICAgICAgaWYgKHggPT09IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIDEgLyogTnVsbCAqLztcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIHgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwidW5kZWZpbmVkXCI6IHJldHVybiAwIC8qIFVuZGVmaW5lZCAqLztcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOiByZXR1cm4gMiAvKiBCb29sZWFuICovO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjogcmV0dXJuIDMgLyogU3RyaW5nICovO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzeW1ib2xcIjogcmV0dXJuIDQgLyogU3ltYm9sICovO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjogcmV0dXJuIDUgLyogTnVtYmVyICovO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjogcmV0dXJuIHggPT09IG51bGwgPyAxIC8qIE51bGwgKi8gOiA2IC8qIE9iamVjdCAqLztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gNiAvKiBPYmplY3QgKi87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gNi4xLjEgVGhlIFVuZGVmaW5lZCBUeXBlXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMtdW5kZWZpbmVkLXR5cGVcbiAgICAgICAgZnVuY3Rpb24gSXNVbmRlZmluZWQoeCkge1xuICAgICAgICAgICAgcmV0dXJuIHggPT09IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvLyA2LjEuMiBUaGUgTnVsbCBUeXBlXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMtbnVsbC10eXBlXG4gICAgICAgIGZ1bmN0aW9uIElzTnVsbCh4KSB7XG4gICAgICAgICAgICByZXR1cm4geCA9PT0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyA2LjEuNSBUaGUgU3ltYm9sIFR5cGVcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcy1zeW1ib2wtdHlwZVxuICAgICAgICBmdW5jdGlvbiBJc1N5bWJvbCh4KSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNi4xLjcgVGhlIE9iamVjdCBUeXBlXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC10eXBlXG4gICAgICAgIGZ1bmN0aW9uIElzT2JqZWN0KHgpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiA/IHggIT09IG51bGwgOiB0eXBlb2YgeCA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMSBUeXBlIENvbnZlcnNpb25cbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdHlwZS1jb252ZXJzaW9uXG4gICAgICAgIC8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxuICAgICAgICBmdW5jdGlvbiBUb1ByaW1pdGl2ZShpbnB1dCwgUHJlZmVycmVkVHlwZSkge1xuICAgICAgICAgICAgc3dpdGNoIChUeXBlKGlucHV0KSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMCAvKiBVbmRlZmluZWQgKi86IHJldHVybiBpbnB1dDtcbiAgICAgICAgICAgICAgICBjYXNlIDEgLyogTnVsbCAqLzogcmV0dXJuIGlucHV0O1xuICAgICAgICAgICAgICAgIGNhc2UgMiAvKiBCb29sZWFuICovOiByZXR1cm4gaW5wdXQ7XG4gICAgICAgICAgICAgICAgY2FzZSAzIC8qIFN0cmluZyAqLzogcmV0dXJuIGlucHV0O1xuICAgICAgICAgICAgICAgIGNhc2UgNCAvKiBTeW1ib2wgKi86IHJldHVybiBpbnB1dDtcbiAgICAgICAgICAgICAgICBjYXNlIDUgLyogTnVtYmVyICovOiByZXR1cm4gaW5wdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGludCA9IFByZWZlcnJlZFR5cGUgPT09IDMgLyogU3RyaW5nICovID8gXCJzdHJpbmdcIiA6IFByZWZlcnJlZFR5cGUgPT09IDUgLyogTnVtYmVyICovID8gXCJudW1iZXJcIiA6IFwiZGVmYXVsdFwiO1xuICAgICAgICAgICAgdmFyIGV4b3RpY1RvUHJpbSA9IEdldE1ldGhvZChpbnB1dCwgdG9QcmltaXRpdmVTeW1ib2wpO1xuICAgICAgICAgICAgaWYgKGV4b3RpY1RvUHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGV4b3RpY1RvUHJpbS5jYWxsKGlucHV0LCBoaW50KTtcbiAgICAgICAgICAgICAgICBpZiAoSXNPYmplY3QocmVzdWx0KSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlUb1ByaW1pdGl2ZShpbnB1dCwgaGludCA9PT0gXCJkZWZhdWx0XCIgPyBcIm51bWJlclwiIDogaGludCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4xLjEuMSBPcmRpbmFyeVRvUHJpbWl0aXZlKE8sIGhpbnQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlUb1ByaW1pdGl2ZShPLCBoaW50KSB7XG4gICAgICAgICAgICBpZiAoaGludCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHZhciB0b1N0cmluZ18xID0gTy50b1N0cmluZztcbiAgICAgICAgICAgICAgICBpZiAoSXNDYWxsYWJsZSh0b1N0cmluZ18xKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdG9TdHJpbmdfMS5jYWxsKE8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVPZiA9IE8udmFsdWVPZjtcbiAgICAgICAgICAgICAgICBpZiAoSXNDYWxsYWJsZSh2YWx1ZU9mKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdmFsdWVPZi5jYWxsKE8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZU9mID0gTy52YWx1ZU9mO1xuICAgICAgICAgICAgICAgIGlmIChJc0NhbGxhYmxlKHZhbHVlT2YpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB2YWx1ZU9mLmNhbGwoTyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QocmVzdWx0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0b1N0cmluZ18yID0gTy50b1N0cmluZztcbiAgICAgICAgICAgICAgICBpZiAoSXNDYWxsYWJsZSh0b1N0cmluZ18yKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdG9TdHJpbmdfMi5jYWxsKE8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjEuMiBUb0Jvb2xlYW4oYXJndW1lbnQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8yMDE2LyNzZWMtdG9ib29sZWFuXG4gICAgICAgIGZ1bmN0aW9uIFRvQm9vbGVhbihhcmd1bWVudCkge1xuICAgICAgICAgICAgcmV0dXJuICEhYXJndW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4xLjEyIFRvU3RyaW5nKGFyZ3VtZW50KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b3N0cmluZ1xuICAgICAgICBmdW5jdGlvbiBUb1N0cmluZyhhcmd1bWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBhcmd1bWVudDtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjEuMTQgVG9Qcm9wZXJ0eUtleShhcmd1bWVudClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxuICAgICAgICBmdW5jdGlvbiBUb1Byb3BlcnR5S2V5KGFyZ3VtZW50KSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gVG9QcmltaXRpdmUoYXJndW1lbnQsIDMgLyogU3RyaW5nICovKTtcbiAgICAgICAgICAgIGlmIChJc1N5bWJvbChrZXkpKVxuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICByZXR1cm4gVG9TdHJpbmcoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjIgVGVzdGluZyBhbmQgQ29tcGFyaXNvbiBPcGVyYXRpb25zXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRlc3RpbmctYW5kLWNvbXBhcmlzb24tb3BlcmF0aW9uc1xuICAgICAgICAvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pc2FycmF5XG4gICAgICAgIGZ1bmN0aW9uIElzQXJyYXkoYXJndW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5XG4gICAgICAgICAgICAgICAgPyBBcnJheS5pc0FycmF5KGFyZ3VtZW50KVxuICAgICAgICAgICAgICAgIDogYXJndW1lbnQgaW5zdGFuY2VvZiBPYmplY3RcbiAgICAgICAgICAgICAgICAgICAgPyBhcmd1bWVudCBpbnN0YW5jZW9mIEFycmF5XG4gICAgICAgICAgICAgICAgICAgIDogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMi4zIElzQ2FsbGFibGUoYXJndW1lbnQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcbiAgICAgICAgZnVuY3Rpb24gSXNDYWxsYWJsZShhcmd1bWVudCkge1xuICAgICAgICAgICAgLy8gTk9URTogVGhpcyBpcyBhbiBhcHByb3hpbWF0aW9uIGFzIHdlIGNhbm5vdCBjaGVjayBmb3IgW1tDYWxsXV0gaW50ZXJuYWwgbWV0aG9kLlxuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMi40IElzQ29uc3RydWN0b3IoYXJndW1lbnQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzY29uc3RydWN0b3JcbiAgICAgICAgZnVuY3Rpb24gSXNDb25zdHJ1Y3Rvcihhcmd1bWVudCkge1xuICAgICAgICAgICAgLy8gTk9URTogVGhpcyBpcyBhbiBhcHByb3hpbWF0aW9uIGFzIHdlIGNhbm5vdCBjaGVjayBmb3IgW1tDb25zdHJ1Y3RdXSBpbnRlcm5hbCBtZXRob2QuXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4yLjcgSXNQcm9wZXJ0eUtleShhcmd1bWVudClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNwcm9wZXJ0eWtleVxuICAgICAgICBmdW5jdGlvbiBJc1Byb3BlcnR5S2V5KGFyZ3VtZW50KSB7XG4gICAgICAgICAgICBzd2l0Y2ggKFR5cGUoYXJndW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzIC8qIFN0cmluZyAqLzogcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgY2FzZSA0IC8qIFN5bWJvbCAqLzogcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIDcuMyBPcGVyYXRpb25zIG9uIE9iamVjdHNcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb3BlcmF0aW9ucy1vbi1vYmplY3RzXG4gICAgICAgIC8vIDcuMy45IEdldE1ldGhvZChWLCBQKVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1nZXRtZXRob2RcbiAgICAgICAgZnVuY3Rpb24gR2V0TWV0aG9kKFYsIFApIHtcbiAgICAgICAgICAgIHZhciBmdW5jID0gVltQXTtcbiAgICAgICAgICAgIGlmIChmdW5jID09PSB1bmRlZmluZWQgfHwgZnVuYyA9PT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKCFJc0NhbGxhYmxlKGZ1bmMpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuNCBPcGVyYXRpb25zIG9uIEl0ZXJhdG9yIE9iamVjdHNcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb3BlcmF0aW9ucy1vbi1pdGVyYXRvci1vYmplY3RzXG4gICAgICAgIGZ1bmN0aW9uIEdldEl0ZXJhdG9yKG9iaikge1xuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IEdldE1ldGhvZChvYmosIGl0ZXJhdG9yU3ltYm9sKTtcbiAgICAgICAgICAgIGlmICghSXNDYWxsYWJsZShtZXRob2QpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTsgLy8gZnJvbSBDYWxsXG4gICAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBtZXRob2QuY2FsbChvYmopO1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdChpdGVyYXRvcikpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuNC40IEl0ZXJhdG9yVmFsdWUoaXRlclJlc3VsdClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLzIwMTYvI3NlYy1pdGVyYXRvcnZhbHVlXG4gICAgICAgIGZ1bmN0aW9uIEl0ZXJhdG9yVmFsdWUoaXRlclJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZXJSZXN1bHQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy40LjUgSXRlcmF0b3JTdGVwKGl0ZXJhdG9yKVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pdGVyYXRvcnN0ZXBcbiAgICAgICAgZnVuY3Rpb24gSXRlcmF0b3JTdGVwKGl0ZXJhdG9yKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gZmFsc2UgOiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXRlcmF0b3JjbG9zZVxuICAgICAgICBmdW5jdGlvbiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yKSB7XG4gICAgICAgICAgICB2YXIgZiA9IGl0ZXJhdG9yW1wicmV0dXJuXCJdO1xuICAgICAgICAgICAgaWYgKGYpXG4gICAgICAgICAgICAgICAgZi5jYWxsKGl0ZXJhdG9yKTtcbiAgICAgICAgfVxuICAgICAgICAvLyA5LjEgT3JkaW5hcnkgT2JqZWN0IEludGVybmFsIE1ldGhvZHMgYW5kIEludGVybmFsIFNsb3RzXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9yZGluYXJ5LW9iamVjdC1pbnRlcm5hbC1tZXRob2RzLWFuZC1pbnRlcm5hbC1zbG90c1xuICAgICAgICAvLyA5LjEuMS4xIE9yZGluYXJ5R2V0UHJvdG90eXBlT2YoTylcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb3JkaW5hcnlnZXRwcm90b3R5cGVvZlxuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeUdldFByb3RvdHlwZU9mKE8pIHtcbiAgICAgICAgICAgIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgTyAhPT0gXCJmdW5jdGlvblwiIHx8IE8gPT09IGZ1bmN0aW9uUHJvdG90eXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm90bztcbiAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgZG9lc24ndCBzZXQgX19wcm90b19fIGluIEVTNSwgYXMgaXQncyBub24tc3RhbmRhcmQuXG4gICAgICAgICAgICAvLyBUcnkgdG8gZGV0ZXJtaW5lIHRoZSBzdXBlcmNsYXNzIGNvbnN0cnVjdG9yLiBDb21wYXRpYmxlIGltcGxlbWVudGF0aW9uc1xuICAgICAgICAgICAgLy8gbXVzdCBlaXRoZXIgc2V0IF9fcHJvdG9fXyBvbiBhIHN1YmNsYXNzIGNvbnN0cnVjdG9yIHRvIHRoZSBzdXBlcmNsYXNzIGNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgLy8gb3IgZW5zdXJlIGVhY2ggY2xhc3MgaGFzIGEgdmFsaWQgYGNvbnN0cnVjdG9yYCBwcm9wZXJ0eSBvbiBpdHMgcHJvdG90eXBlIHRoYXRcbiAgICAgICAgICAgIC8vIHBvaW50cyBiYWNrIHRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgbm90IHRoZSBzYW1lIGFzIEZ1bmN0aW9uLltbUHJvdG90eXBlXV0sIHRoZW4gdGhpcyBpcyBkZWZpbmF0ZWx5IGluaGVyaXRlZC5cbiAgICAgICAgICAgIC8vIFRoaXMgaXMgdGhlIGNhc2Ugd2hlbiBpbiBFUzYgb3Igd2hlbiB1c2luZyBfX3Byb3RvX18gaW4gYSBjb21wYXRpYmxlIGJyb3dzZXIuXG4gICAgICAgICAgICBpZiAocHJvdG8gIT09IGZ1bmN0aW9uUHJvdG90eXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm90bztcbiAgICAgICAgICAgIC8vIElmIHRoZSBzdXBlciBwcm90b3R5cGUgaXMgT2JqZWN0LnByb3RvdHlwZSwgbnVsbCwgb3IgdW5kZWZpbmVkLCB0aGVuIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGhlcml0YWdlLlxuICAgICAgICAgICAgdmFyIHByb3RvdHlwZSA9IE8ucHJvdG90eXBlO1xuICAgICAgICAgICAgdmFyIHByb3RvdHlwZVByb3RvID0gcHJvdG90eXBlICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpO1xuICAgICAgICAgICAgaWYgKHByb3RvdHlwZVByb3RvID09IG51bGwgfHwgcHJvdG90eXBlUHJvdG8gPT09IE9iamVjdC5wcm90b3R5cGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3RvO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGNvbnN0cnVjdG9yIHdhcyBub3QgYSBmdW5jdGlvbiwgdGhlbiB3ZSBjYW5ub3QgZGV0ZXJtaW5lIHRoZSBoZXJpdGFnZS5cbiAgICAgICAgICAgIHZhciBjb25zdHJ1Y3RvciA9IHByb3RvdHlwZVByb3RvLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zdHJ1Y3RvciAhPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm90bztcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgc29tZSBraW5kIG9mIHNlbGYtcmVmZXJlbmNlLCB0aGVuIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGhlcml0YWdlLlxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9yID09PSBPKVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm90bztcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgYSBwcmV0dHkgZ29vZCBndWVzcyBhdCB0aGUgaGVyaXRhZ2UuXG4gICAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbmFpdmUgTWFwIHNoaW1cbiAgICAgICAgZnVuY3Rpb24gQ3JlYXRlTWFwUG9seWZpbGwoKSB7XG4gICAgICAgICAgICB2YXIgY2FjaGVTZW50aW5lbCA9IHt9O1xuICAgICAgICAgICAgdmFyIGFycmF5U2VudGluZWwgPSBbXTtcbiAgICAgICAgICAgIHZhciBNYXBJdGVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBNYXBJdGVyYXRvcihrZXlzLCB2YWx1ZXMsIHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cyA9IGtleXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgTWFwSXRlcmF0b3IucHJvdG90eXBlW1wiQEBpdGVyYXRvclwiXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG4gICAgICAgICAgICAgICAgTWFwSXRlcmF0b3IucHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG4gICAgICAgICAgICAgICAgTWFwSXRlcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2luZGV4O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMuX2tleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fc2VsZWN0b3IodGhpcy5fa2V5c1tpbmRleF0sIHRoaXMuX3ZhbHVlc1tpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICsgMSA+PSB0aGlzLl9rZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cyA9IGFycmF5U2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gYXJyYXlTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogcmVzdWx0LCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIE1hcEl0ZXJhdG9yLnByb3RvdHlwZS50aHJvdyA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMgPSBhcnJheVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gYXJyYXlTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIE1hcEl0ZXJhdG9yLnByb3RvdHlwZS5yZXR1cm4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2luZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzID0gYXJyYXlTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IGFycmF5U2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWFwSXRlcmF0b3I7XG4gICAgICAgICAgICB9KCkpO1xuICAgICAgICAgICAgcmV0dXJuIC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBNYXAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlS2V5ID0gY2FjaGVTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVJbmRleCA9IC0yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWFwLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9rZXlzLmxlbmd0aDsgfSxcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB0aGlzLl9maW5kKGtleSwgLyppbnNlcnQqLyBmYWxzZSkgPj0gMDsgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZChrZXksIC8qaW5zZXJ0Ki8gZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXggPj0gMCA/IHRoaXMuX3ZhbHVlc1tpbmRleF0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmQoa2V5LCAvKmluc2VydCovIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmQoa2V5LCAvKmluc2VydCovIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaXplID0gdGhpcy5fa2V5cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gaW5kZXggKyAxOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5c1tpIC0gMV0gPSB0aGlzLl9rZXlzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1tpIC0gMV0gPSB0aGlzLl92YWx1ZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzLmxlbmd0aC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzLmxlbmd0aC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gdGhpcy5fY2FjaGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUtleSA9IGNhY2hlU2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVJbmRleCA9IC0yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVLZXkgPSBjYWNoZVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUluZGV4ID0gLTI7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgTWFwSXRlcmF0b3IodGhpcy5fa2V5cywgdGhpcy5fdmFsdWVzLCBnZXRLZXkpOyB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IE1hcEl0ZXJhdG9yKHRoaXMuX2tleXMsIHRoaXMuX3ZhbHVlcywgZ2V0VmFsdWUpOyB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBNYXBJdGVyYXRvcih0aGlzLl9rZXlzLCB0aGlzLl92YWx1ZXMsIGdldEVudHJ5KTsgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlW1wiQEBpdGVyYXRvclwiXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZW50cmllcygpOyB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzKCk7IH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5fZmluZCA9IGZ1bmN0aW9uIChrZXksIGluc2VydCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FjaGVLZXkgIT09IGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVJbmRleCA9IHRoaXMuX2tleXMuaW5kZXhPZih0aGlzLl9jYWNoZUtleSA9IGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlSW5kZXggPCAwICYmIGluc2VydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVJbmRleCA9IHRoaXMuX2tleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZUluZGV4O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hcDtcbiAgICAgICAgICAgIH0oKSk7XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRLZXkoa2V5LCBfKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFZhbHVlKF8sIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0RW50cnkoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCB2YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gbmFpdmUgU2V0IHNoaW1cbiAgICAgICAgZnVuY3Rpb24gQ3JlYXRlU2V0UG9seWZpbGwoKSB7XG4gICAgICAgICAgICByZXR1cm4gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIFNldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWFwID0gbmV3IF9NYXAoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNldC5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbWFwLnNpemU7IH0sXG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFNldC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0aGlzLl9tYXAuaGFzKHZhbHVlKTsgfTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdGhpcy5fbWFwLnNldCh2YWx1ZSwgdmFsdWUpLCB0aGlzOyB9O1xuICAgICAgICAgICAgICAgIFNldC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0aGlzLl9tYXAuZGVsZXRlKHZhbHVlKTsgfTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkgeyB0aGlzLl9tYXAuY2xlYXIoKTsgfTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9tYXAua2V5cygpOyB9O1xuICAgICAgICAgICAgICAgIFNldC5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbWFwLnZhbHVlcygpOyB9O1xuICAgICAgICAgICAgICAgIFNldC5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX21hcC5lbnRyaWVzKCk7IH07XG4gICAgICAgICAgICAgICAgU2V0LnByb3RvdHlwZVtcIkBAaXRlcmF0b3JcIl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmtleXMoKTsgfTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMua2V5cygpOyB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBTZXQ7XG4gICAgICAgICAgICB9KCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIG5haXZlIFdlYWtNYXAgc2hpbVxuICAgICAgICBmdW5jdGlvbiBDcmVhdGVXZWFrTWFwUG9seWZpbGwoKSB7XG4gICAgICAgICAgICB2YXIgVVVJRF9TSVpFID0gMTY7XG4gICAgICAgICAgICB2YXIga2V5cyA9IEhhc2hNYXAuY3JlYXRlKCk7XG4gICAgICAgICAgICB2YXIgcm9vdEtleSA9IENyZWF0ZVVuaXF1ZUtleSgpO1xuICAgICAgICAgICAgcmV0dXJuIC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBXZWFrTWFwKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXkgPSBDcmVhdGVVbmlxdWVLZXkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgV2Vha01hcC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFibGUgPSBHZXRPckNyZWF0ZVdlYWtNYXBUYWJsZSh0YXJnZXQsIC8qY3JlYXRlKi8gZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUgIT09IHVuZGVmaW5lZCA/IEhhc2hNYXAuaGFzKHRhYmxlLCB0aGlzLl9rZXkpIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBXZWFrTWFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgLypjcmVhdGUqLyBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YWJsZSAhPT0gdW5kZWZpbmVkID8gSGFzaE1hcC5nZXQodGFibGUsIHRoaXMuX2tleSkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBXZWFrTWFwLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFibGUgPSBHZXRPckNyZWF0ZVdlYWtNYXBUYWJsZSh0YXJnZXQsIC8qY3JlYXRlKi8gdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlW3RoaXMuX2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBXZWFrTWFwLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgLypjcmVhdGUqLyBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YWJsZSAhPT0gdW5kZWZpbmVkID8gZGVsZXRlIHRhYmxlW3RoaXMuX2tleV0gOiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiBub3QgYSByZWFsIGNsZWFyLCBqdXN0IG1ha2VzIHRoZSBwcmV2aW91cyBkYXRhIHVucmVhY2hhYmxlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleSA9IENyZWF0ZVVuaXF1ZUtleSgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFdlYWtNYXA7XG4gICAgICAgICAgICB9KCkpO1xuICAgICAgICAgICAgZnVuY3Rpb24gQ3JlYXRlVW5pcXVlS2V5KCkge1xuICAgICAgICAgICAgICAgIHZhciBrZXk7XG4gICAgICAgICAgICAgICAgZG9cbiAgICAgICAgICAgICAgICAgICAga2V5ID0gXCJAQFdlYWtNYXBAQFwiICsgQ3JlYXRlVVVJRCgpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChIYXNoTWFwLmhhcyhrZXlzLCBrZXkpKTtcbiAgICAgICAgICAgICAgICBrZXlzW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBHZXRPckNyZWF0ZVdlYWtNYXBUYWJsZSh0YXJnZXQsIGNyZWF0ZSkge1xuICAgICAgICAgICAgICAgIGlmICghaGFzT3duLmNhbGwodGFyZ2V0LCByb290S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNyZWF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHJvb3RLZXksIHsgdmFsdWU6IEhhc2hNYXAuY3JlYXRlKCkgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcm9vdEtleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBGaWxsUmFuZG9tQnl0ZXMoYnVmZmVyLCBzaXplKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyArK2kpXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlcltpXSA9IE1hdGgucmFuZG9tKCkgKiAweGZmIHwgMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gR2VuUmFuZG9tQnl0ZXMoc2l6ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgVWludDhBcnJheSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY3J5cHRvICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1zQ3J5cHRvICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBGaWxsUmFuZG9tQnl0ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSksIHNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gRmlsbFJhbmRvbUJ5dGVzKG5ldyBBcnJheShzaXplKSwgc2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBDcmVhdGVVVUlEKCkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gR2VuUmFuZG9tQnl0ZXMoVVVJRF9TSVpFKTtcbiAgICAgICAgICAgICAgICAvLyBtYXJrIGFzIHJhbmRvbSAtIFJGQyA0MTIyIMKnIDQuNFxuICAgICAgICAgICAgICAgIGRhdGFbNl0gPSBkYXRhWzZdICYgMHg0ZiB8IDB4NDA7XG4gICAgICAgICAgICAgICAgZGF0YVs4XSA9IGRhdGFbOF0gJiAweGJmIHwgMHg4MDtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBvZmZzZXQgPSAwOyBvZmZzZXQgPCBVVUlEX1NJWkU7ICsrb2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBieXRlID0gZGF0YVtvZmZzZXRdO1xuICAgICAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ID09PSA0IHx8IG9mZnNldCA9PT0gNiB8fCBvZmZzZXQgPT09IDgpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCItXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChieXRlIDwgMTYpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBieXRlLnRvU3RyaW5nKDE2KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHVzZXMgYSBoZXVyaXN0aWMgdXNlZCBieSB2OCBhbmQgY2hha3JhIHRvIGZvcmNlIGFuIG9iamVjdCBpbnRvIGRpY3Rpb25hcnkgbW9kZS5cbiAgICAgICAgZnVuY3Rpb24gTWFrZURpY3Rpb25hcnkob2JqKSB7XG4gICAgICAgICAgICBvYmouX18gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBkZWxldGUgb2JqLl9fO1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgIH0pO1xufSkoUmVmbGVjdCB8fCAoUmVmbGVjdCA9IHt9KSk7XG4iLCIoZnVuY3Rpb24oZikge1xuICAgIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZigpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoW10sIGYpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGc7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBnID0gd2luZG93XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZyA9IGdsb2JhbFxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBnID0gc2VsZlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZyA9IHRoaXNcbiAgICAgICAgfVxuICAgICAgICBnLmxpc3RDb21wb25lbnQgPSBmKClcbiAgICB9XG59KShmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRlZmluZSwgbW9kdWxlLCBleHBvcnRzO1xucmVxdWlyZT0oZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEJTVHJlZUtWXzEgPSByZXF1aXJlKFwiLi9CU1RyZWVLVlwiKTtcbi8qKlxuICogU3BlY2lhbC1jYXNlIG9mIHRoZSBiaW5hcnkgc2VhcmNoIHRyZWUgaW4gd2hpY2ggdGhlIHNlYXJjaCBrZXkgaXMgZXF1YWwgdG8gdGhlIGVsZW1lbnQgdHlwZS5cbiAqIFRoaXMgZGVmaW5pdGlvbiBpcyBzdWl0YWJsZSB3aGVuIHRoZSBlbGVtZW50IHR5cGUgY2FuIG5vdCBiZSBzcGxpdCBiZXR3ZWVuIHdoYXQgZGVmaW5lcyBpdHMgb3JkZXJcbiAqIGFuZCB3aGF0IGRvZXMgbm90IChlZy4gcHJpbWl0aXZlIHR5cGVzIGFzIG9wcG9zZWQgdG8gaW5kZXhlZCByZWNvcmRzKS5cbiAqXG4gKiBUaGUgdGFibGUgYmVsb3cgc2hvd3Mgc29tZSB1c2UtY2FzZSBleGFtcGxlcyBmb3IgYm90aCBpbnRlcmZhY2VzOlxuICpcbiAqICAgICAgICAgICBlbGVtZW50IHR5cGUgICAgICAgICAgICAgIHwgIG1vc3Qgc3VpdGFibGUgaW50ZXJmYWNlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogICAgbnVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgQlNUcmVlPG51bWJlcj5cbiAqICAgIHN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEJTVHJlZTxzdHJpbmc+XG4gKiB7IG9yZGVyOiBudW1iZXIsIGRhdGE6IHN0cmluZyB9ICAgICB8ICBCU1RyZWVLVjx7b3JkZXI6IG51bWJlcn0sIHtvcmRlcjogbnVtYmVyLCBkYXRhOiBzdHJpbmd9PlxuICpcbiAqIEBzZWUgQlNUcmVlS1ZcbiAqL1xudmFyIEJTVHJlZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQlNUcmVlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJTVHJlZSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gQlNUcmVlO1xufShCU1RyZWVLVl8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEJTVHJlZTtcblxufSx7XCIuL0JTVHJlZUtWXCI6Mn1dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG52YXIgUXVldWVfMSA9IHJlcXVpcmUoXCIuL1F1ZXVlXCIpO1xuLyoqXG4gKiBHZW5lcmFsIGJpbmFyeSBzZWFyY2ggdHJlZSBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBUaGlzIGludGVyZmFjZSBhbGxvd3Mgb25lIHRvIHNlYXJjaCBlbGVtZW50cyB1c2luZyBhIHN1YnNldCBvZiB0aGVpciBhdHRyaWJ1dGVzICh0aHVzIHRoZVxuICogdHJlZSBjYW4gYmUgdXNlZCBhcyBhbiBpbmRleCBmb3IgY29tcGxleCBvYmplY3RzKS5cbiAqIFRoZSBhdHRyaWJ1dGVzIHJlcXVpcmVkIHRvIGRlZmluZSBhbiBvcmRlcmluZyBpbiB0aGUgdHJlZSBtdXN0IGJlIGRlZmluZWQgaW4gdGhlIHR5cGUgSy5cbiAqIEFueSBhZGRpdGlvbmFsIGF0dHJpYnV0ZSBtdXN0IGJlIGRlZmluZWQgaW4gdGhlIHR5cGUgVi5cbiAqXG4gKiBAc2VlIEJTVHJlZVxuICovXG52YXIgQlNUcmVlS1YgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBlbXB0eSBiaW5hcnkgc2VhcmNoIHRyZWUuXG4gICAgICogQGNsYXNzIDxwPkEgYmluYXJ5IHNlYXJjaCB0cmVlIGlzIGEgYmluYXJ5IHRyZWUgaW4gd2hpY2ggZWFjaFxuICAgICAqIGludGVybmFsIG5vZGUgc3RvcmVzIGFuIGVsZW1lbnQgc3VjaCB0aGF0IHRoZSBlbGVtZW50cyBzdG9yZWQgaW4gdGhlXG4gICAgICogbGVmdCBzdWJ0cmVlIGFyZSBsZXNzIHRoYW4gaXQgYW5kIHRoZSBlbGVtZW50c1xuICAgICAqIHN0b3JlZCBpbiB0aGUgcmlnaHQgc3VidHJlZSBhcmUgZ3JlYXRlci48L3A+XG4gICAgICogPHA+Rm9ybWFsbHksIGEgYmluYXJ5IHNlYXJjaCB0cmVlIGlzIGEgbm9kZS1iYXNlZCBiaW5hcnkgdHJlZSBkYXRhIHN0cnVjdHVyZSB3aGljaFxuICAgICAqIGhhcyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6PC9wPlxuICAgICAqIDx1bD5cbiAgICAgKiA8bGk+VGhlIGxlZnQgc3VidHJlZSBvZiBhIG5vZGUgY29udGFpbnMgb25seSBub2RlcyB3aXRoIGVsZW1lbnRzIGxlc3NcbiAgICAgKiB0aGFuIHRoZSBub2RlJ3MgZWxlbWVudDwvbGk+XG4gICAgICogPGxpPlRoZSByaWdodCBzdWJ0cmVlIG9mIGEgbm9kZSBjb250YWlucyBvbmx5IG5vZGVzIHdpdGggZWxlbWVudHMgZ3JlYXRlclxuICAgICAqIHRoYW4gdGhlIG5vZGUncyBlbGVtZW50PC9saT5cbiAgICAgKiA8bGk+Qm90aCB0aGUgbGVmdCBhbmQgcmlnaHQgc3VidHJlZXMgbXVzdCBhbHNvIGJlIGJpbmFyeSBzZWFyY2ggdHJlZXMuPC9saT5cbiAgICAgKiA8L3VsPlxuICAgICAqIDxwPklmIHRoZSBpbnNlcnRlZCBlbGVtZW50cyBhcmUgY3VzdG9tIG9iamVjdHMgYSBjb21wYXJlIGZ1bmN0aW9uIG11c3RcbiAgICAgKiBiZSBwcm92aWRlZCBhdCBjb25zdHJ1Y3Rpb24gdGltZSwgb3RoZXJ3aXNlIHRoZSA8PSwgPT09IGFuZCA+PSBvcGVyYXRvcnMgYXJlXG4gICAgICogdXNlZCB0byBjb21wYXJlIGVsZW1lbnRzLiBFeGFtcGxlOjwvcD5cbiAgICAgKiA8cHJlPlxuICAgICAqIGZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xuICAgICAqICBpZiAoYSBpcyBsZXNzIHRoYW4gYiBieSBzb21lIG9yZGVyaW5nIGNyaXRlcmlvbikge1xuICAgICAqICAgICByZXR1cm4gLTE7XG4gICAgICogIH0gaWYgKGEgaXMgZ3JlYXRlciB0aGFuIGIgYnkgdGhlIG9yZGVyaW5nIGNyaXRlcmlvbikge1xuICAgICAqICAgICByZXR1cm4gMTtcbiAgICAgKiAgfVxuICAgICAqICAvLyBhIG11c3QgYmUgZXF1YWwgdG8gYlxuICAgICAqICByZXR1cm4gMDtcbiAgICAgKiB9XG4gICAgICogPC9wcmU+XG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KTpudW1iZXI9fSBjb21wYXJlRnVuY3Rpb24gb3B0aW9uYWxcbiAgICAgKiBmdW5jdGlvbiB1c2VkIHRvIGNvbXBhcmUgdHdvIGVsZW1lbnRzLiBNdXN0IHJldHVybiBhIG5lZ2F0aXZlIGludGVnZXIsXG4gICAgICogemVybywgb3IgYSBwb3NpdGl2ZSBpbnRlZ2VyIGFzIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBsZXNzIHRoYW4sIGVxdWFsIHRvLFxuICAgICAqIG9yIGdyZWF0ZXIgdGhhbiB0aGUgc2Vjb25kLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEJTVHJlZUtWKGNvbXBhcmVGdW5jdGlvbikge1xuICAgICAgICB0aGlzLnJvb3QgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbXBhcmUgPSBjb21wYXJlRnVuY3Rpb24gfHwgdXRpbC5kZWZhdWx0Q29tcGFyZTtcbiAgICAgICAgdGhpcy5uRWxlbWVudHMgPSAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBzcGVjaWZpZWQgZWxlbWVudCB0byB0aGlzIHRyZWUgaWYgaXQgaXMgbm90IGFscmVhZHkgcHJlc2VudC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCB0aGUgZWxlbWVudCB0byBpbnNlcnQuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGlzIHRyZWUgZGlkIG5vdCBhbHJlYWR5IGNvbnRhaW4gdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAodXRpbC5pc1VuZGVmaW5lZChlbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmluc2VydE5vZGUodGhpcy5jcmVhdGVOb2RlKGVsZW1lbnQpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5uRWxlbWVudHMrKztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIG9mIHRoZSBlbGVtZW50cyBmcm9tIHRoaXMgdHJlZS5cbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IG51bGw7XG4gICAgICAgIHRoaXMubkVsZW1lbnRzID0gMDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIHRyZWUgY29udGFpbnMgbm8gZWxlbWVudHMuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGlzIHRyZWUgY29udGFpbnMgbm8gZWxlbWVudHMuXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5FbGVtZW50cyA9PT0gMDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGlzIHRyZWUuXG4gICAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoaXMgdHJlZS5cbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubkVsZW1lbnRzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgdHJlZSBjb250YWlucyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgZWxlbWVudCB0byBzZWFyY2ggZm9yLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhpcyB0cmVlIGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgZWxlbWVudCxcbiAgICAgKiBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHV0aWwuaXNVbmRlZmluZWQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hOb2RlKHRoaXMucm9vdCwgZWxlbWVudCkgIT09IG51bGw7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBMb29rcyBmb3IgdGhlIHZhbHVlIHdpdGggdGhlIHByb3ZpZGVkIHNlYXJjaCBrZXkuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgVGhlIGtleSB0byBsb29rIGZvclxuICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIHZhbHVlIGZvdW5kIG9yIHVuZGVmaW5lZCBpZiBpdCB3YXMgbm90IGZvdW5kLlxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5zZWFyY2ggPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgcmV0ID0gdGhpcy5zZWFyY2hOb2RlKHRoaXMucm9vdCwgZWxlbWVudCk7XG4gICAgICAgIGlmIChyZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldC5lbGVtZW50O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQgZnJvbSB0aGlzIHRyZWUgaWYgaXQgaXMgcHJlc2VudC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgdHJlZSBjb250YWluZWQgdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc2VhcmNoTm9kZSh0aGlzLnJvb3QsIGVsZW1lbnQpO1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlTm9kZShub2RlKTtcbiAgICAgICAgdGhpcy5uRWxlbWVudHMtLTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gb25jZSBmb3IgZWFjaCBlbGVtZW50IHByZXNlbnQgaW4gdGhpcyB0cmVlIGluXG4gICAgICogaW4tb3JkZXIuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QpOip9IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUsIGl0IGlzIGludm9rZWQgd2l0aCBvbmVcbiAgICAgKiBhcmd1bWVudDogdGhlIGVsZW1lbnQgdmFsdWUsIHRvIGJyZWFrIHRoZSBpdGVyYXRpb24geW91IGNhbiBvcHRpb25hbGx5IHJldHVybiBmYWxzZS5cbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUuaW5vcmRlclRyYXZlcnNhbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmlub3JkZXJUcmF2ZXJzYWxBdXgodGhpcy5yb290LCBjYWxsYmFjaywge1xuICAgICAgICAgICAgc3RvcDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gb25jZSBmb3IgZWFjaCBlbGVtZW50IHByZXNlbnQgaW4gdGhpcyB0cmVlIGluIHByZS1vcmRlci5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6Kn0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSwgaXQgaXMgaW52b2tlZCB3aXRoIG9uZVxuICAgICAqIGFyZ3VtZW50OiB0aGUgZWxlbWVudCB2YWx1ZSwgdG8gYnJlYWsgdGhlIGl0ZXJhdGlvbiB5b3UgY2FuIG9wdGlvbmFsbHkgcmV0dXJuIGZhbHNlLlxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5wcmVvcmRlclRyYXZlcnNhbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnByZW9yZGVyVHJhdmVyc2FsQXV4KHRoaXMucm9vdCwgY2FsbGJhY2ssIHtcbiAgICAgICAgICAgIHN0b3A6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIG9uY2UgZm9yIGVhY2ggZWxlbWVudCBwcmVzZW50IGluIHRoaXMgdHJlZSBpbiBwb3N0LW9yZGVyLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0KToqfSBjYWxsYmFjayBmdW5jdGlvbiB0byBleGVjdXRlLCBpdCBpcyBpbnZva2VkIHdpdGggb25lXG4gICAgICogYXJndW1lbnQ6IHRoZSBlbGVtZW50IHZhbHVlLCB0byBicmVhayB0aGUgaXRlcmF0aW9uIHlvdSBjYW4gb3B0aW9uYWxseSByZXR1cm4gZmFsc2UuXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLnBvc3RvcmRlclRyYXZlcnNhbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnBvc3RvcmRlclRyYXZlcnNhbEF1eCh0aGlzLnJvb3QsIGNhbGxiYWNrLCB7XG4gICAgICAgICAgICBzdG9wOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBvbmNlIGZvciBlYWNoIGVsZW1lbnQgcHJlc2VudCBpbiB0aGlzIHRyZWUgaW5cbiAgICAgKiBsZXZlbC1vcmRlci5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6Kn0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSwgaXQgaXMgaW52b2tlZCB3aXRoIG9uZVxuICAgICAqIGFyZ3VtZW50OiB0aGUgZWxlbWVudCB2YWx1ZSwgdG8gYnJlYWsgdGhlIGl0ZXJhdGlvbiB5b3UgY2FuIG9wdGlvbmFsbHkgcmV0dXJuIGZhbHNlLlxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5sZXZlbFRyYXZlcnNhbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmxldmVsVHJhdmVyc2FsQXV4KHRoaXMucm9vdCwgY2FsbGJhY2spO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbWluaW11bSBlbGVtZW50IG9mIHRoaXMgdHJlZS5cbiAgICAgKiBAcmV0dXJuIHsqfSB0aGUgbWluaW11bSBlbGVtZW50IG9mIHRoaXMgdHJlZSBvciB1bmRlZmluZWQgaWYgdGhpcyB0cmVlIGlzXG4gICAgICogaXMgZW1wdHkuXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLm1pbmltdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW1wdHkoKSB8fCB0aGlzLnJvb3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubWluaW11bUF1eCh0aGlzLnJvb3QpLmVsZW1lbnQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtYXhpbXVtIGVsZW1lbnQgb2YgdGhpcyB0cmVlLlxuICAgICAqIEByZXR1cm4geyp9IHRoZSBtYXhpbXVtIGVsZW1lbnQgb2YgdGhpcyB0cmVlIG9yIHVuZGVmaW5lZCBpZiB0aGlzIHRyZWUgaXNcbiAgICAgKiBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUubWF4aW11bSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbXB0eSgpIHx8IHRoaXMucm9vdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tYXhpbXVtQXV4KHRoaXMucm9vdCkuZWxlbWVudDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBvbmNlIGZvciBlYWNoIGVsZW1lbnQgcHJlc2VudCBpbiB0aGlzIHRyZWUgaW4gaW5vcmRlci5cbiAgICAgKiBFcXVpdmFsZW50IHRvIGlub3JkZXJUcmF2ZXJzYWwuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QpOip9IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUsIGl0IGlzXG4gICAgICogaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDogdGhlIGVsZW1lbnQgdmFsdWUsIHRvIGJyZWFrIHRoZSBpdGVyYXRpb24geW91IGNhblxuICAgICAqIG9wdGlvbmFsbHkgcmV0dXJuIGZhbHNlLlxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaW5vcmRlclRyYXZlcnNhbChjYWxsYmFjayk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBlbGVtZW50cyBpbiB0aGlzIHRyZWUgaW4gaW4tb3JkZXIuXG4gICAgICogQHJldHVybiB7QXJyYXl9IGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBlbGVtZW50cyBpbiB0aGlzIHRyZWUgaW4gaW4tb3JkZXIuXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICB0aGlzLmlub3JkZXJUcmF2ZXJzYWwoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGhlaWdodCBvZiB0aGlzIHRyZWUuXG4gICAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgaGVpZ2h0IG9mIHRoaXMgdHJlZSBvciAtMSBpZiBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUuaGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWlnaHRBdXgodGhpcy5yb290KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLnNlYXJjaE5vZGUgPSBmdW5jdGlvbiAobm9kZSwgZWxlbWVudCkge1xuICAgICAgICB2YXIgY21wID0gMTtcbiAgICAgICAgd2hpbGUgKG5vZGUgIT09IG51bGwgJiYgY21wICE9PSAwKSB7XG4gICAgICAgICAgICBjbXAgPSB0aGlzLmNvbXBhcmUoZWxlbWVudCwgbm9kZS5lbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChjbXAgPCAwKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUubGVmdENoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY21wID4gMCkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLnJpZ2h0Q2g7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS50cmFuc3BsYW50ID0gZnVuY3Rpb24gKG4xLCBuMikge1xuICAgICAgICBpZiAobjEucGFyZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBuMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuMSA9PT0gbjEucGFyZW50LmxlZnRDaCkge1xuICAgICAgICAgICAgbjEucGFyZW50LmxlZnRDaCA9IG4yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbjEucGFyZW50LnJpZ2h0Q2ggPSBuMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobjIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG4yLnBhcmVudCA9IG4xLnBhcmVudDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUucmVtb3ZlTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLmxlZnRDaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50cmFuc3BsYW50KG5vZGUsIG5vZGUucmlnaHRDaCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobm9kZS5yaWdodENoID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zcGxhbnQobm9kZSwgbm9kZS5sZWZ0Q2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHkgPSB0aGlzLm1pbmltdW1BdXgobm9kZS5yaWdodENoKTtcbiAgICAgICAgICAgIGlmICh5LnBhcmVudCAhPT0gbm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNwbGFudCh5LCB5LnJpZ2h0Q2gpO1xuICAgICAgICAgICAgICAgIHkucmlnaHRDaCA9IG5vZGUucmlnaHRDaDtcbiAgICAgICAgICAgICAgICB5LnJpZ2h0Q2gucGFyZW50ID0geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudHJhbnNwbGFudChub2RlLCB5KTtcbiAgICAgICAgICAgIHkubGVmdENoID0gbm9kZS5sZWZ0Q2g7XG4gICAgICAgICAgICB5LmxlZnRDaC5wYXJlbnQgPSB5O1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5pbm9yZGVyVHJhdmVyc2FsQXV4ID0gZnVuY3Rpb24gKG5vZGUsIGNhbGxiYWNrLCBzaWduYWwpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwgfHwgc2lnbmFsLnN0b3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlub3JkZXJUcmF2ZXJzYWxBdXgobm9kZS5sZWZ0Q2gsIGNhbGxiYWNrLCBzaWduYWwpO1xuICAgICAgICBpZiAoc2lnbmFsLnN0b3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzaWduYWwuc3RvcCA9IGNhbGxiYWNrKG5vZGUuZWxlbWVudCkgPT09IGZhbHNlO1xuICAgICAgICBpZiAoc2lnbmFsLnN0b3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlub3JkZXJUcmF2ZXJzYWxBdXgobm9kZS5yaWdodENoLCBjYWxsYmFjaywgc2lnbmFsKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLmxldmVsVHJhdmVyc2FsQXV4ID0gZnVuY3Rpb24gKG5vZGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IG5ldyBRdWV1ZV8xLmRlZmF1bHQoKTtcbiAgICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHF1ZXVlLmVucXVldWUobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IHF1ZXVlLmRlcXVldWUoKSB8fCBudWxsO1xuICAgICAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sobm9kZS5lbGVtZW50KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0Q2ggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS5lbnF1ZXVlKG5vZGUubGVmdENoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0Q2ggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS5lbnF1ZXVlKG5vZGUucmlnaHRDaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlID0gcXVldWUuZGVxdWV1ZSgpIHx8IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLnByZW9yZGVyVHJhdmVyc2FsQXV4ID0gZnVuY3Rpb24gKG5vZGUsIGNhbGxiYWNrLCBzaWduYWwpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwgfHwgc2lnbmFsLnN0b3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzaWduYWwuc3RvcCA9IGNhbGxiYWNrKG5vZGUuZWxlbWVudCkgPT09IGZhbHNlO1xuICAgICAgICBpZiAoc2lnbmFsLnN0b3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZW9yZGVyVHJhdmVyc2FsQXV4KG5vZGUubGVmdENoLCBjYWxsYmFjaywgc2lnbmFsKTtcbiAgICAgICAgaWYgKHNpZ25hbC5zdG9wKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVvcmRlclRyYXZlcnNhbEF1eChub2RlLnJpZ2h0Q2gsIGNhbGxiYWNrLCBzaWduYWwpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBCU1RyZWVLVi5wcm90b3R5cGUucG9zdG9yZGVyVHJhdmVyc2FsQXV4ID0gZnVuY3Rpb24gKG5vZGUsIGNhbGxiYWNrLCBzaWduYWwpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwgfHwgc2lnbmFsLnN0b3ApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc3RvcmRlclRyYXZlcnNhbEF1eChub2RlLmxlZnRDaCwgY2FsbGJhY2ssIHNpZ25hbCk7XG4gICAgICAgIGlmIChzaWduYWwuc3RvcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9zdG9yZGVyVHJhdmVyc2FsQXV4KG5vZGUucmlnaHRDaCwgY2FsbGJhY2ssIHNpZ25hbCk7XG4gICAgICAgIGlmIChzaWduYWwuc3RvcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNpZ25hbC5zdG9wID0gY2FsbGJhY2sobm9kZS5lbGVtZW50KSA9PT0gZmFsc2U7XG4gICAgfTtcbiAgICBCU1RyZWVLVi5wcm90b3R5cGUubWluaW11bUF1eCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHdoaWxlIChub2RlICE9IG51bGwgJiYgbm9kZS5sZWZ0Q2ggIT09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLmxlZnRDaDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5tYXhpbXVtQXV4ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgd2hpbGUgKG5vZGUgIT0gbnVsbCAmJiBub2RlLnJpZ2h0Q2ggIT09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnJpZ2h0Q2g7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEJTVHJlZUtWLnByb3RvdHlwZS5oZWlnaHRBdXggPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLmhlaWdodEF1eChub2RlLmxlZnRDaCksIHRoaXMuaGVpZ2h0QXV4KG5vZGUucmlnaHRDaCkpICsgMTtcbiAgICB9O1xuICAgIC8qXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLmluc2VydE5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgcGFyZW50ID0gbnVsbDtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy5yb290O1xuICAgICAgICB3aGlsZSAocG9zaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBjbXAgPSB0aGlzLmNvbXBhcmUobm9kZS5lbGVtZW50LCBwb3NpdGlvbi5lbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChjbXAgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNtcCA8IDApIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uLmxlZnRDaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24ucmlnaHRDaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBub2RlLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gdHJlZSBpcyBlbXB0eVxuICAgICAgICAgICAgdGhpcy5yb290ID0gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbXBhcmUobm9kZS5lbGVtZW50LCBwYXJlbnQuZWxlbWVudCkgPCAwKSB7XG4gICAgICAgICAgICBwYXJlbnQubGVmdENoID0gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudC5yaWdodENoID0gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgQlNUcmVlS1YucHJvdG90eXBlLmNyZWF0ZU5vZGUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgICAgIGxlZnRDaDogbnVsbCxcbiAgICAgICAgICAgIHJpZ2h0Q2g6IG51bGwsXG4gICAgICAgICAgICBwYXJlbnQ6IG51bGxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBCU1RyZWVLVjtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBCU1RyZWVLVjtcblxufSx7XCIuL1F1ZXVlXCI6MTIsXCIuL3V0aWxcIjoxNn1dLDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG52YXIgRGljdGlvbmFyeV8xID0gcmVxdWlyZShcIi4vRGljdGlvbmFyeVwiKTtcbnZhciBTZXRfMSA9IHJlcXVpcmUoXCIuL1NldFwiKTtcbnZhciBCYWcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBlbXB0eSBiYWcuXG4gICAgICogQGNsYXNzIDxwPkEgYmFnIGlzIGEgc3BlY2lhbCBraW5kIG9mIHNldCBpbiB3aGljaCBtZW1iZXJzIGFyZVxuICAgICAqIGFsbG93ZWQgdG8gYXBwZWFyIG1vcmUgdGhhbiBvbmNlLjwvcD5cbiAgICAgKiA8cD5JZiB0aGUgaW5zZXJ0ZWQgZWxlbWVudHMgYXJlIGN1c3RvbSBvYmplY3RzIGEgZnVuY3Rpb25cbiAgICAgKiB3aGljaCBjb252ZXJ0cyBlbGVtZW50cyB0byB1bmlxdWUgc3RyaW5ncyBtdXN0IGJlIHByb3ZpZGVkLiBFeGFtcGxlOjwvcD5cbiAgICAgKlxuICAgICAqIDxwcmU+XG4gICAgICogZnVuY3Rpb24gcGV0VG9TdHJpbmcocGV0KSB7XG4gICAgICogIHJldHVybiBwZXQubmFtZTtcbiAgICAgKiB9XG4gICAgICogPC9wcmU+XG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6c3RyaW5nPX0gdG9TdHJGdW5jdGlvbiBvcHRpb25hbCBmdW5jdGlvbiB1c2VkXG4gICAgICogdG8gY29udmVydCBlbGVtZW50cyB0byBzdHJpbmdzLiBJZiB0aGUgZWxlbWVudHMgYXJlbid0IHN0cmluZ3Mgb3IgaWYgdG9TdHJpbmcoKVxuICAgICAqIGlzIG5vdCBhcHByb3ByaWF0ZSwgYSBjdXN0b20gZnVuY3Rpb24gd2hpY2ggcmVjZWl2ZXMgYW4gb2JqZWN0IGFuZCByZXR1cm5zIGFcbiAgICAgKiB1bmlxdWUgc3RyaW5nIG11c3QgYmUgcHJvdmlkZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gQmFnKHRvU3RyRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy50b1N0ckYgPSB0b1N0ckZ1bmN0aW9uIHx8IHV0aWwuZGVmYXVsdFRvU3RyaW5nO1xuICAgICAgICB0aGlzLmRpY3Rpb25hcnkgPSBuZXcgRGljdGlvbmFyeV8xLmRlZmF1bHQodGhpcy50b1N0ckYpO1xuICAgICAgICB0aGlzLm5FbGVtZW50cyA9IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgbkNvcGllcyBvZiB0aGUgc3BlY2lmaWVkIG9iamVjdCB0byB0aGlzIGJhZy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBlbGVtZW50IHRvIGFkZC5cbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG5Db3BpZXMgdGhlIG51bWJlciBvZiBjb3BpZXMgdG8gYWRkLCBpZiB0aGlzIGFyZ3VtZW50IGlzXG4gICAgICogdW5kZWZpbmVkIDEgY29weSBpcyBhZGRlZC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIHVubGVzcyBlbGVtZW50IGlzIHVuZGVmaW5lZC5cbiAgICAgKi9cbiAgICBCYWcucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChlbGVtZW50LCBuQ29waWVzKSB7XG4gICAgICAgIGlmIChuQ29waWVzID09PSB2b2lkIDApIHsgbkNvcGllcyA9IDE7IH1cbiAgICAgICAgaWYgKHV0aWwuaXNVbmRlZmluZWQoZWxlbWVudCkgfHwgbkNvcGllcyA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZWxlbWVudCxcbiAgICAgICAgICAgICAgICBjb3BpZXM6IG5Db3BpZXNcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmRpY3Rpb25hcnkuc2V0VmFsdWUoZWxlbWVudCwgbm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpY3Rpb25hcnkuZ2V0VmFsdWUoZWxlbWVudCkuY29waWVzICs9IG5Db3BpZXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uRWxlbWVudHMgKz0gbkNvcGllcztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb3VudHMgdGhlIG51bWJlciBvZiBjb3BpZXMgb2YgdGhlIHNwZWNpZmllZCBvYmplY3QgaW4gdGhpcyBiYWcuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgdGhlIG9iamVjdCB0byBzZWFyY2ggZm9yLi5cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW1iZXIgb2YgY29waWVzIG9mIHRoZSBvYmplY3QsIDAgaWYgbm90IGZvdW5kXG4gICAgICovXG4gICAgQmFnLnByb3RvdHlwZS5jb3VudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaWN0aW9uYXJ5LmdldFZhbHVlKGVsZW1lbnQpLmNvcGllcztcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgYmFnIGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBlbGVtZW50IHRvIHNlYXJjaCBmb3IuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGlzIGJhZyBjb250YWlucyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQsXG4gICAgICogZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIEJhZy5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaWN0aW9uYXJ5LmNvbnRhaW5zS2V5KGVsZW1lbnQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBuQ29waWVzIG9mIHRoZSBzcGVjaWZpZWQgb2JqZWN0IHRvIHRoaXMgYmFnLlxuICAgICAqIElmIHRoZSBudW1iZXIgb2YgY29waWVzIHRvIHJlbW92ZSBpcyBncmVhdGVyIHRoYW4gdGhlIGFjdHVhbCBudW1iZXJcbiAgICAgKiBvZiBjb3BpZXMgaW4gdGhlIEJhZywgYWxsIGNvcGllcyBhcmUgcmVtb3ZlZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBlbGVtZW50IHRvIHJlbW92ZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcj19IG5Db3BpZXMgdGhlIG51bWJlciBvZiBjb3BpZXMgdG8gcmVtb3ZlLCBpZiB0aGlzIGFyZ3VtZW50IGlzXG4gICAgICogdW5kZWZpbmVkIDEgY29weSBpcyByZW1vdmVkLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgYXQgbGVhc3QgMSBlbGVtZW50IHdhcyByZW1vdmVkLlxuICAgICAqL1xuICAgIEJhZy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGVsZW1lbnQsIG5Db3BpZXMpIHtcbiAgICAgICAgaWYgKG5Db3BpZXMgPT09IHZvaWQgMCkgeyBuQ29waWVzID0gMTsgfVxuICAgICAgICBpZiAodXRpbC5pc1VuZGVmaW5lZChlbGVtZW50KSB8fCBuQ29waWVzIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gdGhpcy5kaWN0aW9uYXJ5LmdldFZhbHVlKGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKG5Db3BpZXMgPiBub2RlLmNvcGllcykge1xuICAgICAgICAgICAgICAgIHRoaXMubkVsZW1lbnRzIC09IG5vZGUuY29waWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uRWxlbWVudHMgLT0gbkNvcGllcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUuY29waWVzIC09IG5Db3BpZXM7XG4gICAgICAgICAgICBpZiAobm9kZS5jb3BpZXMgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdGlvbmFyeS5yZW1vdmUoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgZWxlbWVudHMgaW4gdGhpcyBiaWcgaW4gYXJiaXRyYXJ5IG9yZGVyLFxuICAgICAqIGluY2x1ZGluZyBtdWx0aXBsZSBjb3BpZXMuXG4gICAgICogQHJldHVybiB7QXJyYXl9IGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBlbGVtZW50cyBpbiB0aGlzIGJhZy5cbiAgICAgKi9cbiAgICBCYWcucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhID0gW107XG4gICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLmRpY3Rpb25hcnkudmFsdWVzKCk7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgdmFsdWVzXzEgPSB2YWx1ZXM7IF9pIDwgdmFsdWVzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IHZhbHVlc18xW19pXTtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gbm9kZS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBjb3BpZXMgPSBub2RlLmNvcGllcztcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY29waWVzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBhLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc2V0IG9mIHVuaXF1ZSBlbGVtZW50cyBpbiB0aGlzIGJhZy5cbiAgICAgKiBAcmV0dXJuIHtjb2xsZWN0aW9ucy5TZXQ8VD59IGEgc2V0IG9mIHVuaXF1ZSBlbGVtZW50cyBpbiB0aGlzIGJhZy5cbiAgICAgKi9cbiAgICBCYWcucHJvdG90eXBlLnRvU2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdG9yZXQgPSBuZXcgU2V0XzEuZGVmYXVsdCh0aGlzLnRvU3RyRik7XG4gICAgICAgIHZhciBlbGVtZW50cyA9IHRoaXMuZGljdGlvbmFyeS52YWx1ZXMoKTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBlbGVtZW50c18xID0gZWxlbWVudHM7IF9pIDwgZWxlbWVudHNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBlbGUgPSBlbGVtZW50c18xW19pXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGVsZS52YWx1ZTtcbiAgICAgICAgICAgIHRvcmV0LmFkZCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvcmV0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIG9uY2UgZm9yIGVhY2ggZWxlbWVudFxuICAgICAqIHByZXNlbnQgaW4gdGhpcyBiYWcsIGluY2x1ZGluZyBtdWx0aXBsZSBjb3BpZXMuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QpOip9IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUsIGl0IGlzXG4gICAgICogaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDogdGhlIGVsZW1lbnQuIFRvIGJyZWFrIHRoZSBpdGVyYXRpb24geW91IGNhblxuICAgICAqIG9wdGlvbmFsbHkgcmV0dXJuIGZhbHNlLlxuICAgICAqL1xuICAgIEJhZy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmRpY3Rpb25hcnkuZm9yRWFjaChmdW5jdGlvbiAoaywgdikge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdi52YWx1ZTtcbiAgICAgICAgICAgIHZhciBjb3BpZXMgPSB2LmNvcGllcztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29waWVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sodmFsdWUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoaXMgYmFnLlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGlzIGJhZy5cbiAgICAgKi9cbiAgICBCYWcucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5FbGVtZW50cztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGJhZyBjb250YWlucyBubyBlbGVtZW50cy5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgYmFnIGNvbnRhaW5zIG5vIGVsZW1lbnRzLlxuICAgICAqL1xuICAgIEJhZy5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubkVsZW1lbnRzID09PSAwO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgb2YgdGhlIGVsZW1lbnRzIGZyb20gdGhpcyBiYWcuXG4gICAgICovXG4gICAgQmFnLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5uRWxlbWVudHMgPSAwO1xuICAgICAgICB0aGlzLmRpY3Rpb25hcnkuY2xlYXIoKTtcbiAgICB9O1xuICAgIHJldHVybiBCYWc7XG59KCkpOyAvLyBFbmQgb2YgYmFnXG5leHBvcnRzLmRlZmF1bHQgPSBCYWc7XG5cbn0se1wiLi9EaWN0aW9uYXJ5XCI6NCxcIi4vU2V0XCI6MTMsXCIuL3V0aWxcIjoxNn1dLDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG52YXIgRGljdGlvbmFyeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGVtcHR5IGRpY3Rpb25hcnkuXG4gICAgICogQGNsYXNzIDxwPkRpY3Rpb25hcmllcyBtYXAga2V5cyB0byB2YWx1ZXM7IGVhY2gga2V5IGNhbiBtYXAgdG8gYXQgbW9zdCBvbmUgdmFsdWUuXG4gICAgICogVGhpcyBpbXBsZW1lbnRhdGlvbiBhY2NlcHRzIGFueSBraW5kIG9mIG9iamVjdHMgYXMga2V5cy48L3A+XG4gICAgICpcbiAgICAgKiA8cD5JZiB0aGUga2V5cyBhcmUgY3VzdG9tIG9iamVjdHMgYSBmdW5jdGlvbiB3aGljaCBjb252ZXJ0cyBrZXlzIHRvIHVuaXF1ZVxuICAgICAqIHN0cmluZ3MgbXVzdCBiZSBwcm92aWRlZC4gRXhhbXBsZTo8L3A+XG4gICAgICogPHByZT5cbiAgICAgKiBmdW5jdGlvbiBwZXRUb1N0cmluZyhwZXQpIHtcbiAgICAgKiAgcmV0dXJuIHBldC5uYW1lO1xuICAgICAqIH1cbiAgICAgKiA8L3ByZT5cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6c3RyaW5nPX0gdG9TdHJGdW5jdGlvbiBvcHRpb25hbCBmdW5jdGlvbiB1c2VkXG4gICAgICogdG8gY29udmVydCBrZXlzIHRvIHN0cmluZ3MuIElmIHRoZSBrZXlzIGFyZW4ndCBzdHJpbmdzIG9yIGlmIHRvU3RyaW5nKClcbiAgICAgKiBpcyBub3QgYXBwcm9wcmlhdGUsIGEgY3VzdG9tIGZ1bmN0aW9uIHdoaWNoIHJlY2VpdmVzIGEga2V5IGFuZCByZXR1cm5zIGFcbiAgICAgKiB1bmlxdWUgc3RyaW5nIG11c3QgYmUgcHJvdmlkZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gRGljdGlvbmFyeSh0b1N0ckZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMudGFibGUgPSB7fTtcbiAgICAgICAgdGhpcy5uRWxlbWVudHMgPSAwO1xuICAgICAgICB0aGlzLnRvU3RyID0gdG9TdHJGdW5jdGlvbiB8fCB1dGlsLmRlZmF1bHRUb1N0cmluZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgdG8gd2hpY2ggdGhpcyBkaWN0aW9uYXJ5IG1hcHMgdGhlIHNwZWNpZmllZCBrZXkuXG4gICAgICogUmV0dXJucyB1bmRlZmluZWQgaWYgdGhpcyBkaWN0aW9uYXJ5IGNvbnRhaW5zIG5vIG1hcHBpbmcgZm9yIHRoaXMga2V5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBrZXkga2V5IHdob3NlIGFzc29jaWF0ZWQgdmFsdWUgaXMgdG8gYmUgcmV0dXJuZWQuXG4gICAgICogQHJldHVybiB7Kn0gdGhlIHZhbHVlIHRvIHdoaWNoIHRoaXMgZGljdGlvbmFyeSBtYXBzIHRoZSBzcGVjaWZpZWQga2V5IG9yXG4gICAgICogdW5kZWZpbmVkIGlmIHRoZSBtYXAgY29udGFpbnMgbm8gbWFwcGluZyBmb3IgdGhpcyBrZXkuXG4gICAgICovXG4gICAgRGljdGlvbmFyeS5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBwYWlyID0gdGhpcy50YWJsZVsnJCcgKyB0aGlzLnRvU3RyKGtleSldO1xuICAgICAgICBpZiAodXRpbC5pc1VuZGVmaW5lZChwYWlyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFpci52YWx1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFzc29jaWF0ZXMgdGhlIHNwZWNpZmllZCB2YWx1ZSB3aXRoIHRoZSBzcGVjaWZpZWQga2V5IGluIHRoaXMgZGljdGlvbmFyeS5cbiAgICAgKiBJZiB0aGUgZGljdGlvbmFyeSBwcmV2aW91c2x5IGNvbnRhaW5lZCBhIG1hcHBpbmcgZm9yIHRoaXMga2V5LCB0aGUgb2xkXG4gICAgICogdmFsdWUgaXMgcmVwbGFjZWQgYnkgdGhlIHNwZWNpZmllZCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0ga2V5IGtleSB3aXRoIHdoaWNoIHRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgdG8gYmVcbiAgICAgKiBhc3NvY2lhdGVkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB2YWx1ZSB0byBiZSBhc3NvY2lhdGVkIHdpdGggdGhlIHNwZWNpZmllZCBrZXkuXG4gICAgICogQHJldHVybiB7Kn0gcHJldmlvdXMgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBzcGVjaWZpZWQga2V5LCBvciB1bmRlZmluZWQgaWZcbiAgICAgKiB0aGVyZSB3YXMgbm8gbWFwcGluZyBmb3IgdGhlIGtleSBvciBpZiB0aGUga2V5L3ZhbHVlIGFyZSB1bmRlZmluZWQuXG4gICAgICovXG4gICAgRGljdGlvbmFyeS5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodXRpbC5pc1VuZGVmaW5lZChrZXkpIHx8IHV0aWwuaXNVbmRlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXQ7XG4gICAgICAgIHZhciBrID0gJyQnICsgdGhpcy50b1N0cihrZXkpO1xuICAgICAgICB2YXIgcHJldmlvdXNFbGVtZW50ID0gdGhpcy50YWJsZVtrXTtcbiAgICAgICAgaWYgKHV0aWwuaXNVbmRlZmluZWQocHJldmlvdXNFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhpcy5uRWxlbWVudHMrKztcbiAgICAgICAgICAgIHJldCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldCA9IHByZXZpb3VzRWxlbWVudC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRhYmxlW2tdID0ge1xuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIG1hcHBpbmcgZm9yIHRoaXMga2V5IGZyb20gdGhpcyBkaWN0aW9uYXJ5IGlmIGl0IGlzIHByZXNlbnQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGtleSBrZXkgd2hvc2UgbWFwcGluZyBpcyB0byBiZSByZW1vdmVkIGZyb20gdGhlXG4gICAgICogZGljdGlvbmFyeS5cbiAgICAgKiBAcmV0dXJuIHsqfSBwcmV2aW91cyB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggc3BlY2lmaWVkIGtleSwgb3IgdW5kZWZpbmVkIGlmXG4gICAgICogdGhlcmUgd2FzIG5vIG1hcHBpbmcgZm9yIGtleS5cbiAgICAgKi9cbiAgICBEaWN0aW9uYXJ5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBrID0gJyQnICsgdGhpcy50b1N0cihrZXkpO1xuICAgICAgICB2YXIgcHJldmlvdXNFbGVtZW50ID0gdGhpcy50YWJsZVtrXTtcbiAgICAgICAgaWYgKCF1dGlsLmlzVW5kZWZpbmVkKHByZXZpb3VzRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnRhYmxlW2tdO1xuICAgICAgICAgICAgdGhpcy5uRWxlbWVudHMtLTtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91c0VsZW1lbnQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIGtleXMgaW4gdGhpcyBkaWN0aW9uYXJ5LlxuICAgICAqIEByZXR1cm4ge0FycmF5fSBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUga2V5cyBpbiB0aGlzIGRpY3Rpb25hcnkuXG4gICAgICovXG4gICAgRGljdGlvbmFyeS5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIG5hbWVfMSBpbiB0aGlzLnRhYmxlKSB7XG4gICAgICAgICAgICBpZiAodXRpbC5oYXModGhpcy50YWJsZSwgbmFtZV8xKSkge1xuICAgICAgICAgICAgICAgIHZhciBwYWlyID0gdGhpcy50YWJsZVtuYW1lXzFdO1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2gocGFpci5rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIHZhbHVlcyBpbiB0aGlzIGRpY3Rpb25hcnkuXG4gICAgICogQHJldHVybiB7QXJyYXl9IGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB2YWx1ZXMgaW4gdGhpcyBkaWN0aW9uYXJ5LlxuICAgICAqL1xuICAgIERpY3Rpb25hcnkucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIG5hbWVfMiBpbiB0aGlzLnRhYmxlKSB7XG4gICAgICAgICAgICBpZiAodXRpbC5oYXModGhpcy50YWJsZSwgbmFtZV8yKSkge1xuICAgICAgICAgICAgICAgIHZhciBwYWlyID0gdGhpcy50YWJsZVtuYW1lXzJdO1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2gocGFpci52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIG9uY2UgZm9yIGVhY2gga2V5LXZhbHVlIHBhaXJcbiAgICAgKiBwcmVzZW50IGluIHRoaXMgZGljdGlvbmFyeS5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpOip9IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUsIGl0IGlzXG4gICAgICogaW52b2tlZCB3aXRoIHR3byBhcmd1bWVudHM6IGtleSBhbmQgdmFsdWUuIFRvIGJyZWFrIHRoZSBpdGVyYXRpb24geW91IGNhblxuICAgICAqIG9wdGlvbmFsbHkgcmV0dXJuIGZhbHNlLlxuICAgICAqL1xuICAgIERpY3Rpb25hcnkucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZV8zIGluIHRoaXMudGFibGUpIHtcbiAgICAgICAgICAgIGlmICh1dGlsLmhhcyh0aGlzLnRhYmxlLCBuYW1lXzMpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhaXIgPSB0aGlzLnRhYmxlW25hbWVfM107XG4gICAgICAgICAgICAgICAgdmFyIHJldCA9IGNhbGxiYWNrKHBhaXIua2V5LCBwYWlyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAocmV0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBkaWN0aW9uYXJ5IGNvbnRhaW5zIGEgbWFwcGluZyBmb3IgdGhlIHNwZWNpZmllZCBrZXkuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGtleSBrZXkgd2hvc2UgcHJlc2VuY2UgaW4gdGhpcyBkaWN0aW9uYXJ5IGlzIHRvIGJlXG4gICAgICogdGVzdGVkLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhpcyBkaWN0aW9uYXJ5IGNvbnRhaW5zIGEgbWFwcGluZyBmb3IgdGhlXG4gICAgICogc3BlY2lmaWVkIGtleS5cbiAgICAgKi9cbiAgICBEaWN0aW9uYXJ5LnByb3RvdHlwZS5jb250YWluc0tleSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuICF1dGlsLmlzVW5kZWZpbmVkKHRoaXMuZ2V0VmFsdWUoa2V5KSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBtYXBwaW5ncyBmcm9tIHRoaXMgZGljdGlvbmFyeS5cbiAgICAgKiBAdGhpcyB7Y29sbGVjdGlvbnMuRGljdGlvbmFyeX1cbiAgICAgKi9cbiAgICBEaWN0aW9uYXJ5LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50YWJsZSA9IHt9O1xuICAgICAgICB0aGlzLm5FbGVtZW50cyA9IDA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2Yga2V5cyBpbiB0aGlzIGRpY3Rpb25hcnkuXG4gICAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgbnVtYmVyIG9mIGtleS12YWx1ZSBtYXBwaW5ncyBpbiB0aGlzIGRpY3Rpb25hcnkuXG4gICAgICovXG4gICAgRGljdGlvbmFyeS5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubkVsZW1lbnRzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgZGljdGlvbmFyeSBjb250YWlucyBubyBtYXBwaW5ncy5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgZGljdGlvbmFyeSBjb250YWlucyBubyBtYXBwaW5ncy5cbiAgICAgKi9cbiAgICBEaWN0aW9uYXJ5LnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uRWxlbWVudHMgPD0gMDtcbiAgICB9O1xuICAgIERpY3Rpb25hcnkucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdG9yZXQgPSAneyc7XG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAoaywgdikge1xuICAgICAgICAgICAgdG9yZXQgKz0gXCJcXG5cXHRcIiArIGsgKyBcIiA6IFwiICsgdjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0b3JldCArICdcXG59JztcbiAgICB9O1xuICAgIHJldHVybiBEaWN0aW9uYXJ5O1xufSgpKTsgLy8gRW5kIG9mIGRpY3Rpb25hcnlcbmV4cG9ydHMuZGVmYXVsdCA9IERpY3Rpb25hcnk7XG5cbn0se1wiLi91dGlsXCI6MTZ9XSw1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRGljdGlvbmFyeV8xID0gcmVxdWlyZShcIi4vRGljdGlvbmFyeVwiKTtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbnZhciBGYWN0b3J5RGljdGlvbmFyeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmFjdG9yeURpY3Rpb25hcnksIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBlbXB0eSBkaWN0aW9uYXJ5LlxuICAgICAqIEBjbGFzcyA8cD5EaWN0aW9uYXJpZXMgbWFwIGtleXMgdG8gdmFsdWVzOyBlYWNoIGtleSBjYW4gbWFwIHRvIGF0IG1vc3Qgb25lIHZhbHVlLlxuICAgICAqIFRoaXMgaW1wbGVtZW50YXRpb24gYWNjZXB0cyBhbnkga2luZCBvZiBvYmplY3RzIGFzIGtleXMuPC9wPlxuICAgICAqXG4gICAgICogPHA+VGhlIGRlZmF1bHQgZmFjdG9yeSBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGEgbmV3IG9iamVjdCBvZiB0aGUgcHJvdmlkZWRcbiAgICAgKiB0eXBlLiBFeGFtcGxlOjwvcD5cbiAgICAgKiA8cHJlPlxuICAgICAqIGZ1bmN0aW9uIHBldEZhY3RvcnkoKSB7XG4gICAgICogIHJldHVybiBuZXcgUGV0KCk7XG4gICAgICogfVxuICAgICAqIDwvcHJlPlxuICAgICAqXG4gICAgICogPHA+SWYgdGhlIGtleXMgYXJlIGN1c3RvbSBvYmplY3RzIGEgZnVuY3Rpb24gd2hpY2ggY29udmVydHMga2V5cyB0byB1bmlxdWVcbiAgICAgKiBzdHJpbmdzIG11c3QgYmUgcHJvdmlkZWQuIEV4YW1wbGU6PC9wPlxuICAgICAqIDxwcmU+XG4gICAgICogZnVuY3Rpb24gcGV0VG9TdHJpbmcocGV0KSB7XG4gICAgICogIHJldHVybiBwZXQubmFtZTtcbiAgICAgKiB9XG4gICAgICogPC9wcmU+XG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbigpOlY9fSBkZWZhdWx0RmFjdG9yeUZ1bmN0aW9uIGZ1bmN0aW9uIHVzZWQgdG8gY3JlYXRlIGFcbiAgICAgKiBkZWZhdWx0IG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6c3RyaW5nPX0gdG9TdHJGdW5jdGlvbiBvcHRpb25hbCBmdW5jdGlvbiB1c2VkXG4gICAgICogdG8gY29udmVydCBrZXlzIHRvIHN0cmluZ3MuIElmIHRoZSBrZXlzIGFyZW4ndCBzdHJpbmdzIG9yIGlmIHRvU3RyaW5nKClcbiAgICAgKiBpcyBub3QgYXBwcm9wcmlhdGUsIGEgY3VzdG9tIGZ1bmN0aW9uIHdoaWNoIHJlY2VpdmVzIGEga2V5IGFuZCByZXR1cm5zIGFcbiAgICAgKiB1bmlxdWUgc3RyaW5nIG11c3QgYmUgcHJvdmlkZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gRmFjdG9yeURpY3Rpb25hcnkoZGVmYXVsdEZhY3RvcnlGdW5jdGlvbiwgdG9TdHJGdW5jdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0b1N0ckZ1bmN0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kZWZhdWx0RmFjdG9yeUZ1bmN0aW9uID0gZGVmYXVsdEZhY3RvcnlGdW5jdGlvbjtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBc3NvY2lhdGVzIHRoZSBzcGVjaWZpZWQgZGVmYXVsdCB2YWx1ZSB3aXRoIHRoZSBzcGVjaWZpZWQga2V5IGluIHRoaXMgZGljdGlvbmFyeSxcbiAgICAgKiBpZiBpdCBkaWRuJ3QgY29udGFpbiB0aGUga2V5IHlldC4gSWYgdGhlIGtleSBleGlzdGVkLCB0aGUgZXhpc3RpbmcgdmFsdWUgd2lsbCBiZSB1c2VkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBrZXkga2V5IHdpdGggd2hpY2ggdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyB0byBiZVxuICAgICAqIGFzc29jaWF0ZWQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRWYWx1ZSBkZWZhdWx0IHZhbHVlIHRvIGJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3BlY2lmaWVkIGtleS5cbiAgICAgKiBAcmV0dXJuIHsqfSBwcmV2aW91cyB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIHNwZWNpZmllZCBrZXksIG9yIHRoZSBkZWZhdWx0IHZhbHVlLFxuICAgICAqIGlmIHRoZSBrZXkgZGlkbid0IGV4aXN0IHlldC5cbiAgICAgKi9cbiAgICBGYWN0b3J5RGljdGlvbmFyeS5wcm90b3R5cGUuc2V0RGVmYXVsdCA9IGZ1bmN0aW9uIChrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICB2YXIgY3VycmVudFZhbHVlID0gX3N1cGVyLnByb3RvdHlwZS5nZXRWYWx1ZS5jYWxsKHRoaXMsIGtleSk7XG4gICAgICAgIGlmICh1dGlsLmlzVW5kZWZpbmVkKGN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoa2V5LCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudFZhbHVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgdG8gd2hpY2ggdGhpcyBkaWN0aW9uYXJ5IG1hcHMgdGhlIHNwZWNpZmllZCBrZXkuXG4gICAgICogUmV0dXJucyBhIGRlZmF1bHQgdmFsdWUgY3JlYXRlZCBieSB0aGUgZmFjdG9yeSBwYXNzZWQgaW4gdGhlIGNvbnN0cnVjdG9yLFxuICAgICAqIGlmIHRoaXMgZGljdGlvbmFyeSBjb250YWlucyBubyBtYXBwaW5nIGZvciB0aGlzIGtleS4gVGhlIG1pc3Npbmcga2V5IHdpbGxcbiAgICAgKiBhdXRvbWF0aWNhbGx5IGJlIGFkZGVkIHRvIHRoZSBkaWN0aW9uYXJ5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBrZXkga2V5IHdob3NlIGFzc29jaWF0ZWQgdmFsdWUgaXMgdG8gYmUgcmV0dXJuZWQuXG4gICAgICogQHJldHVybiB7Kn0gdGhlIHZhbHVlIHRvIHdoaWNoIHRoaXMgZGljdGlvbmFyeSBtYXBzIHRoZSBzcGVjaWZpZWQga2V5IG9yXG4gICAgICogYSBkZWZhdWx0IHZhbHVlIGlmIHRoZSBtYXAgY29udGFpbnMgbm8gbWFwcGluZyBmb3IgdGhpcyBrZXkuXG4gICAgICovXG4gICAgRmFjdG9yeURpY3Rpb25hcnkucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXREZWZhdWx0KGtleSwgdGhpcy5kZWZhdWx0RmFjdG9yeUZ1bmN0aW9uKCkpO1xuICAgIH07XG4gICAgcmV0dXJuIEZhY3RvcnlEaWN0aW9uYXJ5O1xufShEaWN0aW9uYXJ5XzEuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gRmFjdG9yeURpY3Rpb25hcnk7XG5cbn0se1wiLi9EaWN0aW9uYXJ5XCI6NCxcIi4vdXRpbFwiOjE2fV0sNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb2xsZWN0aW9ucyA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG52YXIgYXJyYXlzID0gcmVxdWlyZShcIi4vYXJyYXlzXCIpO1xudmFyIEhlYXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBlbXB0eSBIZWFwLlxuICAgICAqIEBjbGFzc1xuICAgICAqIDxwPkEgaGVhcCBpcyBhIGJpbmFyeSB0cmVlLCB3aGVyZSB0aGUgbm9kZXMgbWFpbnRhaW4gdGhlIGhlYXAgcHJvcGVydHk6XG4gICAgICogZWFjaCBub2RlIGlzIHNtYWxsZXIgdGhhbiBlYWNoIG9mIGl0cyBjaGlsZHJlbiBhbmQgdGhlcmVmb3JlIGEgTWluSGVhcFxuICAgICAqIFRoaXMgaW1wbGVtZW50YXRpb24gdXNlcyBhbiBhcnJheSB0byBzdG9yZSBlbGVtZW50cy48L3A+XG4gICAgICogPHA+SWYgdGhlIGluc2VydGVkIGVsZW1lbnRzIGFyZSBjdXN0b20gb2JqZWN0cyBhIGNvbXBhcmUgZnVuY3Rpb24gbXVzdCBiZSBwcm92aWRlZCxcbiAgICAgKiAgYXQgY29uc3RydWN0aW9uIHRpbWUsIG90aGVyd2lzZSB0aGUgPD0sID09PSBhbmQgPj0gb3BlcmF0b3JzIGFyZVxuICAgICAqIHVzZWQgdG8gY29tcGFyZSBlbGVtZW50cy4gRXhhbXBsZTo8L3A+XG4gICAgICpcbiAgICAgKiA8cHJlPlxuICAgICAqIGZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xuICAgICAqICBpZiAoYSBpcyBsZXNzIHRoYW4gYiBieSBzb21lIG9yZGVyaW5nIGNyaXRlcmlvbikge1xuICAgICAqICAgICByZXR1cm4gLTE7XG4gICAgICogIH0gaWYgKGEgaXMgZ3JlYXRlciB0aGFuIGIgYnkgdGhlIG9yZGVyaW5nIGNyaXRlcmlvbikge1xuICAgICAqICAgICByZXR1cm4gMTtcbiAgICAgKiAgfVxuICAgICAqICAvLyBhIG11c3QgYmUgZXF1YWwgdG8gYlxuICAgICAqICByZXR1cm4gMDtcbiAgICAgKiB9XG4gICAgICogPC9wcmU+XG4gICAgICpcbiAgICAgKiA8cD5JZiBhIE1heC1IZWFwIGlzIHdhbnRlZCAoZ3JlYXRlciBlbGVtZW50cyBvbiB0b3ApIHlvdSBjYW4gYSBwcm92aWRlIGFcbiAgICAgKiByZXZlcnNlIGNvbXBhcmUgZnVuY3Rpb24gdG8gYWNjb21wbGlzaCB0aGF0IGJlaGF2aW9yLiBFeGFtcGxlOjwvcD5cbiAgICAgKlxuICAgICAqIDxwcmU+XG4gICAgICogZnVuY3Rpb24gcmV2ZXJzZUNvbXBhcmUoYSwgYikge1xuICAgICAqICBpZiAoYSBpcyBsZXNzIHRoYW4gYiBieSBzb21lIG9yZGVyaW5nIGNyaXRlcmlvbikge1xuICAgICAqICAgICByZXR1cm4gMTtcbiAgICAgKiAgfSBpZiAoYSBpcyBncmVhdGVyIHRoYW4gYiBieSB0aGUgb3JkZXJpbmcgY3JpdGVyaW9uKSB7XG4gICAgICogICAgIHJldHVybiAtMTtcbiAgICAgKiAgfVxuICAgICAqICAvLyBhIG11c3QgYmUgZXF1YWwgdG8gYlxuICAgICAqICByZXR1cm4gMDtcbiAgICAgKiB9XG4gICAgICogPC9wcmU+XG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpOm51bWJlcj19IGNvbXBhcmVGdW5jdGlvbiBvcHRpb25hbFxuICAgICAqIGZ1bmN0aW9uIHVzZWQgdG8gY29tcGFyZSB0d28gZWxlbWVudHMuIE11c3QgcmV0dXJuIGEgbmVnYXRpdmUgaW50ZWdlcixcbiAgICAgKiB6ZXJvLCBvciBhIHBvc2l0aXZlIGludGVnZXIgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGxlc3MgdGhhbiwgZXF1YWwgdG8sXG4gICAgICogb3IgZ3JlYXRlciB0aGFuIHRoZSBzZWNvbmQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gSGVhcChjb21wYXJlRnVuY3Rpb24pIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFycmF5IHVzZWQgdG8gc3RvcmUgdGhlIGVsZW1lbnRzIG9mIHRoZSBoZWFwLlxuICAgICAgICAgKiBAdHlwZSB7QXJyYXkuPE9iamVjdD59XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5jb21wYXJlID0gY29tcGFyZUZ1bmN0aW9uIHx8IGNvbGxlY3Rpb25zLmRlZmF1bHRDb21wYXJlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGVmdCBjaGlsZCBvZiB0aGUgbm9kZSBhdCB0aGUgZ2l2ZW4gaW5kZXguXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5vZGVJbmRleCBUaGUgaW5kZXggb2YgdGhlIG5vZGUgdG8gZ2V0IHRoZSBsZWZ0IGNoaWxkXG4gICAgICogZm9yLlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGluZGV4IG9mIHRoZSBsZWZ0IGNoaWxkLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUubGVmdENoaWxkSW5kZXggPSBmdW5jdGlvbiAobm9kZUluZGV4KSB7XG4gICAgICAgIHJldHVybiAoMiAqIG5vZGVJbmRleCkgKyAxO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIHJpZ2h0IGNoaWxkIG9mIHRoZSBub2RlIGF0IHRoZSBnaXZlbiBpbmRleC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbm9kZUluZGV4IFRoZSBpbmRleCBvZiB0aGUgbm9kZSB0byBnZXQgdGhlIHJpZ2h0IGNoaWxkXG4gICAgICogZm9yLlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGluZGV4IG9mIHRoZSByaWdodCBjaGlsZC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLnJpZ2h0Q2hpbGRJbmRleCA9IGZ1bmN0aW9uIChub2RlSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuICgyICogbm9kZUluZGV4KSArIDI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgcGFyZW50IG9mIHRoZSBub2RlIGF0IHRoZSBnaXZlbiBpbmRleC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbm9kZUluZGV4IFRoZSBpbmRleCBvZiB0aGUgbm9kZSB0byBnZXQgdGhlIHBhcmVudCBmb3IuXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgaW5kZXggb2YgdGhlIHBhcmVudC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLnBhcmVudEluZGV4ID0gZnVuY3Rpb24gKG5vZGVJbmRleCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigobm9kZUluZGV4IC0gMSkgLyAyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBzbWFsbGVyIGNoaWxkIG5vZGUgKGlmIGl0IGV4aXN0cykuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlZnRDaGlsZCBsZWZ0IGNoaWxkIGluZGV4LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByaWdodENoaWxkIHJpZ2h0IGNoaWxkIGluZGV4LlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIGluZGV4IHdpdGggdGhlIG1pbmltdW0gdmFsdWUgb3IgLTEgaWYgaXQgZG9lc24ndFxuICAgICAqIGV4aXN0cy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLm1pbkluZGV4ID0gZnVuY3Rpb24gKGxlZnRDaGlsZCwgcmlnaHRDaGlsZCkge1xuICAgICAgICBpZiAocmlnaHRDaGlsZCA+PSB0aGlzLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAobGVmdENoaWxkID49IHRoaXMuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdENoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29tcGFyZSh0aGlzLmRhdGFbbGVmdENoaWxkXSwgdGhpcy5kYXRhW3JpZ2h0Q2hpbGRdKSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnRDaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiByaWdodENoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNb3ZlcyB0aGUgbm9kZSBhdCB0aGUgZ2l2ZW4gaW5kZXggdXAgdG8gaXRzIHByb3BlciBwbGFjZSBpbiB0aGUgaGVhcC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBub2RlIHRvIG1vdmUgdXAuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBIZWFwLnByb3RvdHlwZS5zaWZ0VXAgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50SW5kZXgoaW5kZXgpO1xuICAgICAgICB3aGlsZSAoaW5kZXggPiAwICYmIHRoaXMuY29tcGFyZSh0aGlzLmRhdGFbcGFyZW50XSwgdGhpcy5kYXRhW2luZGV4XSkgPiAwKSB7XG4gICAgICAgICAgICBhcnJheXMuc3dhcCh0aGlzLmRhdGEsIHBhcmVudCwgaW5kZXgpO1xuICAgICAgICAgICAgaW5kZXggPSBwYXJlbnQ7XG4gICAgICAgICAgICBwYXJlbnQgPSB0aGlzLnBhcmVudEluZGV4KGluZGV4KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogTW92ZXMgdGhlIG5vZGUgYXQgdGhlIGdpdmVuIGluZGV4IGRvd24gdG8gaXRzIHByb3BlciBwbGFjZSBpbiB0aGUgaGVhcC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbm9kZUluZGV4IFRoZSBpbmRleCBvZiB0aGUgbm9kZSB0byBtb3ZlIGRvd24uXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBIZWFwLnByb3RvdHlwZS5zaWZ0RG93biA9IGZ1bmN0aW9uIChub2RlSW5kZXgpIHtcbiAgICAgICAgLy9zbWFsbGVyIGNoaWxkIGluZGV4XG4gICAgICAgIHZhciBtaW4gPSB0aGlzLm1pbkluZGV4KHRoaXMubGVmdENoaWxkSW5kZXgobm9kZUluZGV4KSwgdGhpcy5yaWdodENoaWxkSW5kZXgobm9kZUluZGV4KSk7XG4gICAgICAgIHdoaWxlIChtaW4gPj0gMCAmJiB0aGlzLmNvbXBhcmUodGhpcy5kYXRhW25vZGVJbmRleF0sIHRoaXMuZGF0YVttaW5dKSA+IDApIHtcbiAgICAgICAgICAgIGFycmF5cy5zd2FwKHRoaXMuZGF0YSwgbWluLCBub2RlSW5kZXgpO1xuICAgICAgICAgICAgbm9kZUluZGV4ID0gbWluO1xuICAgICAgICAgICAgbWluID0gdGhpcy5taW5JbmRleCh0aGlzLmxlZnRDaGlsZEluZGV4KG5vZGVJbmRleCksIHRoaXMucmlnaHRDaGlsZEluZGV4KG5vZGVJbmRleCkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYnV0IGRvZXMgbm90IHJlbW92ZSB0aGUgcm9vdCBlbGVtZW50IG9mIHRoaXMgaGVhcC5cbiAgICAgKiBAcmV0dXJuIHsqfSBUaGUgdmFsdWUgYXQgdGhlIHJvb3Qgb2YgdGhlIGhlYXAuIFJldHVybnMgdW5kZWZpbmVkIGlmIHRoZVxuICAgICAqIGhlYXAgaXMgZW1wdHkuXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gZWxlbWVudCBpbnRvIHRoZSBoZWFwLlxuICAgICAqIEBwYXJhbSB7Kn0gZWxlbWVudCB0aGUgZWxlbWVudC5cbiAgICAgKiBAcmV0dXJuIHRydWUgaWYgdGhlIGVsZW1lbnQgd2FzIGFkZGVkIG9yIGZhbHMgaWYgaXQgaXMgdW5kZWZpbmVkLlxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChjb2xsZWN0aW9ucy5pc1VuZGVmaW5lZChlbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLnNpZnRVcCh0aGlzLmRhdGEubGVuZ3RoIC0gMSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGFuZCByZW1vdmVzIHRoZSByb290IGVsZW1lbnQgb2YgdGhpcyBoZWFwLlxuICAgICAqIEByZXR1cm4geyp9IFRoZSB2YWx1ZSByZW1vdmVkIGZyb20gdGhlIHJvb3Qgb2YgdGhlIGhlYXAuIFJldHVybnNcbiAgICAgKiB1bmRlZmluZWQgaWYgdGhlIGhlYXAgaXMgZW1wdHkuXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUucmVtb3ZlUm9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgb2JqID0gdGhpcy5kYXRhWzBdO1xuICAgICAgICAgICAgdGhpcy5kYXRhWzBdID0gdGhpcy5kYXRhW3RoaXMuZGF0YS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zcGxpY2UodGhpcy5kYXRhLmxlbmd0aCAtIDEsIDEpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaWZ0RG93bigwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGhlYXAgY29udGFpbnMgdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IGVsZW1lbnQgdG8gc2VhcmNoIGZvci5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgSGVhcCBjb250YWlucyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQsIGZhbHNlXG4gICAgICogb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGVxdUYgPSBjb2xsZWN0aW9ucy5jb21wYXJlVG9FcXVhbHModGhpcy5jb21wYXJlKTtcbiAgICAgICAgcmV0dXJuIGFycmF5cy5jb250YWlucyh0aGlzLmRhdGEsIGVsZW1lbnQsIGVxdUYpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoaXMgaGVhcC5cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhpcyBoZWFwLlxuICAgICAqL1xuICAgIEhlYXAucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEubGVuZ3RoO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoaXMgaGVhcCBpcyBlbXB0eS5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIGFuZCBvbmx5IGlmIHRoaXMgaGVhcCBjb250YWlucyBubyBpdGVtczsgZmFsc2VcbiAgICAgKiBvdGhlcndpc2UuXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGggPD0gMDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIG9mIHRoZSBlbGVtZW50cyBmcm9tIHRoaXMgaGVhcC5cbiAgICAgKi9cbiAgICBIZWFwLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kYXRhLmxlbmd0aCA9IDA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gb25jZSBmb3IgZWFjaCBlbGVtZW50IHByZXNlbnQgaW4gdGhpcyBoZWFwIGluXG4gICAgICogbm8gcGFydGljdWxhciBvcmRlci5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6Kn0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSwgaXQgaXNcbiAgICAgKiBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OiB0aGUgZWxlbWVudCB2YWx1ZSwgdG8gYnJlYWsgdGhlIGl0ZXJhdGlvbiB5b3UgY2FuXG4gICAgICogb3B0aW9uYWxseSByZXR1cm4gZmFsc2UuXG4gICAgICovXG4gICAgSGVhcC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBhcnJheXMuZm9yRWFjaCh0aGlzLmRhdGEsIGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIHJldHVybiBIZWFwO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEhlYXA7XG5cbn0se1wiLi9hcnJheXNcIjoxNSxcIi4vdXRpbFwiOjE2fV0sNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIERpY3Rpb25hcnlfMSA9IHJlcXVpcmUoXCIuL0RpY3Rpb25hcnlcIik7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCBieSB0aGUgTGlua2VkRGljdGlvbmFyeSBJbnRlcm5hbGx5XG4gKiBIYXMgdG8gYmUgYSBjbGFzcywgbm90IGFuIGludGVyZmFjZSwgYmVjYXVzZSBpdCBuZWVkcyB0byBoYXZlXG4gKiB0aGUgJ3VubGluaycgZnVuY3Rpb24gZGVmaW5lZC5cbiAqL1xudmFyIExpbmtlZERpY3Rpb25hcnlQYWlyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExpbmtlZERpY3Rpb25hcnlQYWlyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgTGlua2VkRGljdGlvbmFyeVBhaXIucHJvdG90eXBlLnVubGluayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wcmV2Lm5leHQgPSB0aGlzLm5leHQ7XG4gICAgICAgIHRoaXMubmV4dC5wcmV2ID0gdGhpcy5wcmV2O1xuICAgIH07XG4gICAgcmV0dXJuIExpbmtlZERpY3Rpb25hcnlQYWlyO1xufSgpKTtcbi8qKlxuICogVGhlIGhlYWQgYW5kIHRhaWwgZWxlbWVudHMgb2YgdGhlIGxpc3QgaGF2ZSBudWxsIGtleSBhbmQgdmFsdWUgcHJvcGVydGllcyBidXQgdGhleVxuICogdXN1YWxseSBsaW5rIHRvIG5vcm1hbCBub2Rlcy5cbiAqL1xudmFyIEhlYWRPclRhaWxMaW5rZWREaWN0aW9uYXJ5UGFpciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIZWFkT3JUYWlsTGlua2VkRGljdGlvbmFyeVBhaXIoKSB7XG4gICAgICAgIHRoaXMua2V5ID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgfVxuICAgIEhlYWRPclRhaWxMaW5rZWREaWN0aW9uYXJ5UGFpci5wcm90b3R5cGUudW5saW5rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnByZXYubmV4dCA9IHRoaXMubmV4dDtcbiAgICAgICAgdGhpcy5uZXh0LnByZXYgPSB0aGlzLnByZXY7XG4gICAgfTtcbiAgICByZXR1cm4gSGVhZE9yVGFpbExpbmtlZERpY3Rpb25hcnlQYWlyO1xufSgpKTtcbmZ1bmN0aW9uIGlzSGVhZE9yVGFpbExpbmtlZERpY3Rpb25hcnlQYWlyKHApIHtcbiAgICByZXR1cm4gIXAubmV4dDtcbn1cbnZhciBMaW5rZWREaWN0aW9uYXJ5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMaW5rZWREaWN0aW9uYXJ5LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExpbmtlZERpY3Rpb25hcnkodG9TdHJGdW5jdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0b1N0ckZ1bmN0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5oZWFkID0gbmV3IEhlYWRPclRhaWxMaW5rZWREaWN0aW9uYXJ5UGFpcigpO1xuICAgICAgICBfdGhpcy50YWlsID0gbmV3IEhlYWRPclRhaWxMaW5rZWREaWN0aW9uYXJ5UGFpcigpO1xuICAgICAgICBfdGhpcy5oZWFkLm5leHQgPSBfdGhpcy50YWlsO1xuICAgICAgICBfdGhpcy50YWlsLnByZXYgPSBfdGhpcy5oZWFkO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluc2VydHMgdGhlIG5ldyBub2RlIHRvIHRoZSAndGFpbCcgb2YgdGhlIGxpc3QsIHVwZGF0aW5nIHRoZVxuICAgICAqIG5laWdoYm9ycywgYW5kIG1vdmluZyAndGhpcy50YWlsJyAodGhlIEVuZCBvZiBMaXN0IGluZGljYXRvcikgdGhhdFxuICAgICAqIHRvIHRoZSBlbmQuXG4gICAgICovXG4gICAgTGlua2VkRGljdGlvbmFyeS5wcm90b3R5cGUuYXBwZW5kVG9UYWlsID0gZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgIHZhciBsYXN0Tm9kZSA9IHRoaXMudGFpbC5wcmV2O1xuICAgICAgICBsYXN0Tm9kZS5uZXh0ID0gZW50cnk7XG4gICAgICAgIGVudHJ5LnByZXYgPSBsYXN0Tm9kZTtcbiAgICAgICAgZW50cnkubmV4dCA9IHRoaXMudGFpbDtcbiAgICAgICAgdGhpcy50YWlsLnByZXYgPSBlbnRyeTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhIGxpbmtlZCBkaWN0aW9uYXJ5IGZyb20gdGhlIHRhYmxlIGludGVybmFsbHlcbiAgICAgKi9cbiAgICBMaW5rZWREaWN0aW9uYXJ5LnByb3RvdHlwZS5nZXRMaW5rZWREaWN0aW9uYXJ5UGFpciA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKHV0aWwuaXNVbmRlZmluZWQoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgayA9ICckJyArIHRoaXMudG9TdHIoa2V5KTtcbiAgICAgICAgdmFyIHBhaXIgPSAodGhpcy50YWJsZVtrXSk7XG4gICAgICAgIHJldHVybiBwYWlyO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgdG8gd2hpY2ggdGhpcyBkaWN0aW9uYXJ5IG1hcHMgdGhlIHNwZWNpZmllZCBrZXkuXG4gICAgICogUmV0dXJucyB1bmRlZmluZWQgaWYgdGhpcyBkaWN0aW9uYXJ5IGNvbnRhaW5zIG5vIG1hcHBpbmcgZm9yIHRoaXMga2V5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBrZXkga2V5IHdob3NlIGFzc29jaWF0ZWQgdmFsdWUgaXMgdG8gYmUgcmV0dXJuZWQuXG4gICAgICogQHJldHVybiB7Kn0gdGhlIHZhbHVlIHRvIHdoaWNoIHRoaXMgZGljdGlvbmFyeSBtYXBzIHRoZSBzcGVjaWZpZWQga2V5IG9yXG4gICAgICogdW5kZWZpbmVkIGlmIHRoZSBtYXAgY29udGFpbnMgbm8gbWFwcGluZyBmb3IgdGhpcyBrZXkuXG4gICAgICovXG4gICAgTGlua2VkRGljdGlvbmFyeS5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBwYWlyID0gdGhpcy5nZXRMaW5rZWREaWN0aW9uYXJ5UGFpcihrZXkpO1xuICAgICAgICBpZiAoIXV0aWwuaXNVbmRlZmluZWQocGFpcikpIHtcbiAgICAgICAgICAgIHJldHVybiBwYWlyLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBtYXBwaW5nIGZvciB0aGlzIGtleSBmcm9tIHRoaXMgZGljdGlvbmFyeSBpZiBpdCBpcyBwcmVzZW50LlxuICAgICAqIEFsc28sIGlmIGEgdmFsdWUgaXMgcHJlc2VudCBmb3IgdGhpcyBrZXksIHRoZSBlbnRyeSBpcyByZW1vdmVkIGZyb20gdGhlXG4gICAgICogaW5zZXJ0aW9uIG9yZGVyaW5nLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBrZXkga2V5IHdob3NlIG1hcHBpbmcgaXMgdG8gYmUgcmVtb3ZlZCBmcm9tIHRoZVxuICAgICAqIGRpY3Rpb25hcnkuXG4gICAgICogQHJldHVybiB7Kn0gcHJldmlvdXMgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHNwZWNpZmllZCBrZXksIG9yIHVuZGVmaW5lZCBpZlxuICAgICAqIHRoZXJlIHdhcyBubyBtYXBwaW5nIGZvciBrZXkuXG4gICAgICovXG4gICAgTGlua2VkRGljdGlvbmFyeS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgcGFpciA9IHRoaXMuZ2V0TGlua2VkRGljdGlvbmFyeVBhaXIoa2V5KTtcbiAgICAgICAgaWYgKCF1dGlsLmlzVW5kZWZpbmVkKHBhaXIpKSB7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbW92ZS5jYWxsKHRoaXMsIGtleSk7IC8vIFRoaXMgd2lsbCByZW1vdmUgaXQgZnJvbSB0aGUgdGFibGVcbiAgICAgICAgICAgIHBhaXIudW5saW5rKCk7IC8vIFRoaXMgd2lsbCB1bmxpbmsgaXQgZnJvbSB0aGUgY2hhaW5cbiAgICAgICAgICAgIHJldHVybiBwYWlyLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBtYXBwaW5ncyBmcm9tIHRoaXMgTGlua2VkRGljdGlvbmFyeS5cbiAgICAgKiBAdGhpcyB7Y29sbGVjdGlvbnMuTGlua2VkRGljdGlvbmFyeX1cbiAgICAgKi9cbiAgICBMaW5rZWREaWN0aW9uYXJ5LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5jbGVhci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmhlYWQubmV4dCA9IHRoaXMudGFpbDtcbiAgICAgICAgdGhpcy50YWlsLnByZXYgPSB0aGlzLmhlYWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBmdW5jdGlvbiB1c2VkIHdoZW4gdXBkYXRpbmcgYW4gZXhpc3RpbmcgS2V5VmFsdWUgcGFpci5cbiAgICAgKiBJdCBwbGFjZXMgdGhlIG5ldyB2YWx1ZSBpbmRleGVkIGJ5IGtleSBpbnRvIHRoZSB0YWJsZSwgYnV0IG1haW50YWluc1xuICAgICAqIGl0cyBwbGFjZSBpbiB0aGUgbGlua2VkIG9yZGVyaW5nLlxuICAgICAqL1xuICAgIExpbmtlZERpY3Rpb25hcnkucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiAob2xkUGFpciwgbmV3UGFpcikge1xuICAgICAgICB2YXIgayA9ICckJyArIHRoaXMudG9TdHIobmV3UGFpci5rZXkpO1xuICAgICAgICAvLyBzZXQgdGhlIG5ldyBQYWlyJ3MgbGlua3MgdG8gZXhpc3RpbmdQYWlyJ3MgbGlua3NcbiAgICAgICAgbmV3UGFpci5uZXh0ID0gb2xkUGFpci5uZXh0O1xuICAgICAgICBuZXdQYWlyLnByZXYgPSBvbGRQYWlyLnByZXY7XG4gICAgICAgIC8vIERlbGV0ZSBFeGlzdGluZyBQYWlyIGZyb20gdGhlIHRhYmxlLCB1bmxpbmsgaXQgZnJvbSBjaGFpbi5cbiAgICAgICAgLy8gQXMgYSByZXN1bHQsIHRoZSBuRWxlbWVudHMgZ2V0cyBkZWNyZW1lbnRlZCBieSB0aGlzIG9wZXJhdGlvblxuICAgICAgICB0aGlzLnJlbW92ZShvbGRQYWlyLmtleSk7XG4gICAgICAgIC8vIExpbmsgbmV3IFBhaXIgaW4gcGxhY2Ugb2Ygd2hlcmUgb2xkUGFpciB3YXMsXG4gICAgICAgIC8vIGJ5IHBvaW50aW5nIHRoZSBvbGQgcGFpcidzIG5laWdoYm9ycyB0byBpdC5cbiAgICAgICAgbmV3UGFpci5wcmV2Lm5leHQgPSBuZXdQYWlyO1xuICAgICAgICBuZXdQYWlyLm5leHQucHJldiA9IG5ld1BhaXI7XG4gICAgICAgIHRoaXMudGFibGVba10gPSBuZXdQYWlyO1xuICAgICAgICAvLyBUbyBtYWtlIHVwIGZvciB0aGUgZmFjdCB0aGF0IHRoZSBudW1iZXIgb2YgZWxlbWVudHMgd2FzIGRlY3JlbWVudGVkLFxuICAgICAgICAvLyBXZSBuZWVkIHRvIGluY3JlYXNlIGl0IGJ5IG9uZS5cbiAgICAgICAgKyt0aGlzLm5FbGVtZW50cztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFzc29jaWF0ZXMgdGhlIHNwZWNpZmllZCB2YWx1ZSB3aXRoIHRoZSBzcGVjaWZpZWQga2V5IGluIHRoaXMgZGljdGlvbmFyeS5cbiAgICAgKiBJZiB0aGUgZGljdGlvbmFyeSBwcmV2aW91c2x5IGNvbnRhaW5lZCBhIG1hcHBpbmcgZm9yIHRoaXMga2V5LCB0aGUgb2xkXG4gICAgICogdmFsdWUgaXMgcmVwbGFjZWQgYnkgdGhlIHNwZWNpZmllZCB2YWx1ZS5cbiAgICAgKiBVcGRhdGluZyBvZiBhIGtleSB0aGF0IGFscmVhZHkgZXhpc3RzIG1haW50YWlucyBpdHMgcGxhY2UgaW4gdGhlXG4gICAgICogaW5zZXJ0aW9uIG9yZGVyIGludG8gdGhlIG1hcC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0ga2V5IGtleSB3aXRoIHdoaWNoIHRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgdG8gYmVcbiAgICAgKiBhc3NvY2lhdGVkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB2YWx1ZSB0byBiZSBhc3NvY2lhdGVkIHdpdGggdGhlIHNwZWNpZmllZCBrZXkuXG4gICAgICogQHJldHVybiB7Kn0gcHJldmlvdXMgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBzcGVjaWZpZWQga2V5LCBvciB1bmRlZmluZWQgaWZcbiAgICAgKiB0aGVyZSB3YXMgbm8gbWFwcGluZyBmb3IgdGhlIGtleSBvciBpZiB0aGUga2V5L3ZhbHVlIGFyZSB1bmRlZmluZWQuXG4gICAgICovXG4gICAgTGlua2VkRGljdGlvbmFyeS5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodXRpbC5pc1VuZGVmaW5lZChrZXkpIHx8IHV0aWwuaXNVbmRlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBleGlzdGluZ1BhaXIgPSB0aGlzLmdldExpbmtlZERpY3Rpb25hcnlQYWlyKGtleSk7XG4gICAgICAgIHZhciBuZXdQYWlyID0gbmV3IExpbmtlZERpY3Rpb25hcnlQYWlyKGtleSwgdmFsdWUpO1xuICAgICAgICB2YXIgayA9ICckJyArIHRoaXMudG9TdHIoa2V5KTtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhbiBlbGVtZW50IGZvciB0aGF0IGtleSwgd2VcbiAgICAgICAgLy8ga2VlcCBpdCdzIHBsYWNlIGluIHRoZSBMaW5rZWRMaXN0XG4gICAgICAgIGlmICghdXRpbC5pc1VuZGVmaW5lZChleGlzdGluZ1BhaXIpKSB7XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UoZXhpc3RpbmdQYWlyLCBuZXdQYWlyKTtcbiAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1BhaXIudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZFRvVGFpbChuZXdQYWlyKTtcbiAgICAgICAgICAgIHRoaXMudGFibGVba10gPSBuZXdQYWlyO1xuICAgICAgICAgICAgKyt0aGlzLm5FbGVtZW50cztcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIGtleXMgaW4gdGhpcyBMaW5rZWREaWN0aW9uYXJ5LCBvcmRlcmVkXG4gICAgICogYnkgaW5zZXJ0aW9uIG9yZGVyLlxuICAgICAqIEByZXR1cm4ge0FycmF5fSBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUga2V5cyBpbiB0aGlzIExpbmtlZERpY3Rpb25hcnksXG4gICAgICogb3JkZXJlZCBieSBpbnNlcnRpb24gb3JkZXIuXG4gICAgICovXG4gICAgTGlua2VkRGljdGlvbmFyeS5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gW107XG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgYXJyYXkucHVzaChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgdmFsdWVzIGluIHRoaXMgTGlua2VkRGljdGlvbmFyeSwgb3JkZXJlZCBieVxuICAgICAqIGluc2VydGlvbiBvcmRlci5cbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIHZhbHVlcyBpbiB0aGlzIExpbmtlZERpY3Rpb25hcnksXG4gICAgICogb3JkZXJlZCBieSBpbnNlcnRpb24gb3JkZXIuXG4gICAgICovXG4gICAgTGlua2VkRGljdGlvbmFyeS5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBvbmNlIGZvciBlYWNoIGtleS12YWx1ZSBwYWlyXG4gICAgICogcHJlc2VudCBpbiB0aGlzIExpbmtlZERpY3Rpb25hcnkuIEl0IGlzIGRvbmUgaW4gdGhlIG9yZGVyIG9mIGluc2VydGlvblxuICAgICAqIGludG8gdGhlIExpbmtlZERpY3Rpb25hcnlcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpOip9IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUsIGl0IGlzXG4gICAgICogaW52b2tlZCB3aXRoIHR3byBhcmd1bWVudHM6IGtleSBhbmQgdmFsdWUuIFRvIGJyZWFrIHRoZSBpdGVyYXRpb24geW91IGNhblxuICAgICAqIG9wdGlvbmFsbHkgcmV0dXJuIGZhbHNlLlxuICAgICAqL1xuICAgIExpbmtlZERpY3Rpb25hcnkucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGNyYXdsTm9kZSA9IHRoaXMuaGVhZC5uZXh0O1xuICAgICAgICB3aGlsZSAoIWlzSGVhZE9yVGFpbExpbmtlZERpY3Rpb25hcnlQYWlyKGNyYXdsTm9kZSkpIHtcbiAgICAgICAgICAgIHZhciByZXQgPSBjYWxsYmFjayhjcmF3bE5vZGUua2V5LCBjcmF3bE5vZGUudmFsdWUpO1xuICAgICAgICAgICAgaWYgKHJldCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjcmF3bE5vZGUgPSBjcmF3bE5vZGUubmV4dDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIExpbmtlZERpY3Rpb25hcnk7XG59KERpY3Rpb25hcnlfMS5kZWZhdWx0KSk7IC8vIEVuZCBvZiBMaW5rZWREaWN0aW9uYXJ5XG5leHBvcnRzLmRlZmF1bHQgPSBMaW5rZWREaWN0aW9uYXJ5O1xuLy8gLyoqXG4vLyAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBkaWN0aW9uYXJ5IGlzIGVxdWFsIHRvIHRoZSBnaXZlbiBkaWN0aW9uYXJ5LlxuLy8gICogVHdvIGRpY3Rpb25hcmllcyBhcmUgZXF1YWwgaWYgdGhleSBjb250YWluIHRoZSBzYW1lIG1hcHBpbmdzLlxuLy8gICogQHBhcmFtIHtjb2xsZWN0aW9ucy5EaWN0aW9uYXJ5fSBvdGhlciB0aGUgb3RoZXIgZGljdGlvbmFyeS5cbi8vICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCk6Ym9vbGVhbj19IHZhbHVlc0VxdWFsRnVuY3Rpb24gb3B0aW9uYWxcbi8vICAqIGZ1bmN0aW9uIHVzZWQgdG8gY2hlY2sgaWYgdHdvIHZhbHVlcyBhcmUgZXF1YWwuXG4vLyAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgZGljdGlvbmFyeSBpcyBlcXVhbCB0byB0aGUgZ2l2ZW4gZGljdGlvbmFyeS5cbi8vICAqL1xuLy8gY29sbGVjdGlvbnMuRGljdGlvbmFyeS5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24ob3RoZXIsdmFsdWVzRXF1YWxGdW5jdGlvbikge1xuLy8gXHRjb25zdCBlcUYgPSB2YWx1ZXNFcXVhbEZ1bmN0aW9uIHx8IGNvbGxlY3Rpb25zLmRlZmF1bHRFcXVhbHM7XG4vLyBcdGlmKCEob3RoZXIgaW5zdGFuY2VvZiBjb2xsZWN0aW9ucy5EaWN0aW9uYXJ5KSl7XG4vLyBcdFx0cmV0dXJuIGZhbHNlO1xuLy8gXHR9XG4vLyBcdGlmKHRoaXMuc2l6ZSgpICE9PSBvdGhlci5zaXplKCkpe1xuLy8gXHRcdHJldHVybiBmYWxzZTtcbi8vIFx0fVxuLy8gXHRyZXR1cm4gdGhpcy5lcXVhbHNBdXgodGhpcy5maXJzdE5vZGUsb3RoZXIuZmlyc3ROb2RlLGVxRik7XG4vLyB9XG5cbn0se1wiLi9EaWN0aW9uYXJ5XCI6NCxcIi4vdXRpbFwiOjE2fV0sODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbnZhciBhcnJheXMgPSByZXF1aXJlKFwiLi9hcnJheXNcIik7XG52YXIgTGlua2VkTGlzdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGVtcHR5IExpbmtlZCBMaXN0LlxuICAgICAqIEBjbGFzcyBBIGxpbmtlZCBsaXN0IGlzIGEgZGF0YSBzdHJ1Y3R1cmUgY29uc2lzdGluZyBvZiBhIGdyb3VwIG9mIG5vZGVzXG4gICAgICogd2hpY2ggdG9nZXRoZXIgcmVwcmVzZW50IGEgc2VxdWVuY2UuXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gTGlua2VkTGlzdCgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpcnN0IG5vZGUgaW4gdGhlIGxpc3RcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZmlyc3ROb2RlID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIExhc3Qgbm9kZSBpbiB0aGUgbGlzdFxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOdW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIGxpc3RcbiAgICAgICAgICogQHR5cGUge251bWJlcn1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubkVsZW1lbnRzID0gMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBlbGVtZW50IHRvIHRoaXMgbGlzdC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBlbGVtZW50IHRvIGJlIGFkZGVkLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gaW5kZXggb3B0aW9uYWwgaW5kZXggdG8gYWRkIHRoZSBlbGVtZW50LiBJZiBubyBpbmRleCBpcyBzcGVjaWZpZWRcbiAgICAgKiB0aGUgZWxlbWVudCBpcyBhZGRlZCB0byB0aGUgZW5kIG9mIHRoaXMgbGlzdC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBlbGVtZW50IHdhcyBhZGRlZCBvciBmYWxzZSBpZiB0aGUgaW5kZXggaXMgaW52YWxpZFxuICAgICAqIG9yIGlmIHRoZSBlbGVtZW50IGlzIHVuZGVmaW5lZC5cbiAgICAgKi9cbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgaWYgKHV0aWwuaXNVbmRlZmluZWQoaW5kZXgpKSB7XG4gICAgICAgICAgICBpbmRleCA9IHRoaXMubkVsZW1lbnRzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0aGlzLm5FbGVtZW50cyB8fCB1dGlsLmlzVW5kZWZpbmVkKGl0ZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld05vZGUgPSB0aGlzLmNyZWF0ZU5vZGUoaXRlbSk7XG4gICAgICAgIGlmICh0aGlzLm5FbGVtZW50cyA9PT0gMCB8fCB0aGlzLmxhc3ROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBGaXJzdCBub2RlIGluIHRoZSBsaXN0LlxuICAgICAgICAgICAgdGhpcy5maXJzdE5vZGUgPSBuZXdOb2RlO1xuICAgICAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IG5ld05vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IHRoaXMubkVsZW1lbnRzKSB7XG4gICAgICAgICAgICAvLyBJbnNlcnQgYXQgdGhlIGVuZC5cbiAgICAgICAgICAgIHRoaXMubGFzdE5vZGUubmV4dCA9IG5ld05vZGU7XG4gICAgICAgICAgICB0aGlzLmxhc3ROb2RlID0gbmV3Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gQ2hhbmdlIGZpcnN0IG5vZGUuXG4gICAgICAgICAgICBuZXdOb2RlLm5leHQgPSB0aGlzLmZpcnN0Tm9kZTtcbiAgICAgICAgICAgIHRoaXMuZmlyc3ROb2RlID0gbmV3Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmV2ID0gdGhpcy5ub2RlQXRJbmRleChpbmRleCAtIDEpO1xuICAgICAgICAgICAgaWYgKHByZXYgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdOb2RlLm5leHQgPSBwcmV2Lm5leHQ7XG4gICAgICAgICAgICBwcmV2Lm5leHQgPSBuZXdOb2RlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubkVsZW1lbnRzKys7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGlzIGxpc3QuXG4gICAgICogQHJldHVybiB7Kn0gdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIGxpc3Qgb3IgdW5kZWZpbmVkIGlmIHRoZSBsaXN0IGlzXG4gICAgICogZW1wdHkuXG4gICAgICovXG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmZpcnN0Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlyc3ROb2RlLmVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhc3QgZWxlbWVudCBpbiB0aGlzIGxpc3QuXG4gICAgICogQHJldHVybiB7Kn0gdGhlIGxhc3QgZWxlbWVudCBpbiB0aGUgbGlzdCBvciB1bmRlZmluZWQgaWYgdGhlIGxpc3QgaXNcbiAgICAgKiBlbXB0eS5cbiAgICAgKi9cbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5sYXN0Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFzdE5vZGUuZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIHBvc2l0aW9uIGluIHRoaXMgbGlzdC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggZGVzaXJlZCBpbmRleC5cbiAgICAgKiBAcmV0dXJuIHsqfSB0aGUgZWxlbWVudCBhdCB0aGUgZ2l2ZW4gaW5kZXggb3IgdW5kZWZpbmVkIGlmIHRoZSBpbmRleCBpc1xuICAgICAqIG91dCBvZiBib3VuZHMuXG4gICAgICovXG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUuZWxlbWVudEF0SW5kZXggPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLm5vZGVBdEluZGV4KGluZGV4KTtcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGUuZWxlbWVudDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGluZGV4IGluIHRoaXMgbGlzdCBvZiB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiB0aGVcbiAgICAgKiBzcGVjaWZpZWQgZWxlbWVudCwgb3IgLTEgaWYgdGhlIExpc3QgZG9lcyBub3QgY29udGFpbiB0aGlzIGVsZW1lbnQuXG4gICAgICogPHA+SWYgdGhlIGVsZW1lbnRzIGluc2lkZSB0aGlzIGxpc3QgYXJlXG4gICAgICogbm90IGNvbXBhcmFibGUgd2l0aCB0aGUgPT09IG9wZXJhdG9yIGEgY3VzdG9tIGVxdWFscyBmdW5jdGlvbiBzaG91bGQgYmVcbiAgICAgKiBwcm92aWRlZCB0byBwZXJmb3JtIHNlYXJjaGVzLCB0aGUgZnVuY3Rpb24gbXVzdCByZWNlaXZlIHR3byBhcmd1bWVudHMgYW5kXG4gICAgICogcmV0dXJuIHRydWUgaWYgdGhleSBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS4gRXhhbXBsZTo8L3A+XG4gICAgICpcbiAgICAgKiA8cHJlPlxuICAgICAqIGNvbnN0IHBldHNBcmVFcXVhbEJ5TmFtZSA9IGZ1bmN0aW9uKHBldDEsIHBldDIpIHtcbiAgICAgKiAgcmV0dXJuIHBldDEubmFtZSA9PT0gcGV0Mi5uYW1lO1xuICAgICAqIH1cbiAgICAgKiA8L3ByZT5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBlbGVtZW50IHRvIHNlYXJjaCBmb3IuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KTpib29sZWFuPX0gZXF1YWxzRnVuY3Rpb24gT3B0aW9uYWxcbiAgICAgKiBmdW5jdGlvbiB1c2VkIHRvIGNoZWNrIGlmIHR3byBlbGVtZW50cyBhcmUgZXF1YWwuXG4gICAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgaW5kZXggaW4gdGhpcyBsaXN0IG9mIHRoZSBmaXJzdCBvY2N1cnJlbmNlXG4gICAgICogb2YgdGhlIHNwZWNpZmllZCBlbGVtZW50LCBvciAtMSBpZiB0aGlzIGxpc3QgZG9lcyBub3QgY29udGFpbiB0aGVcbiAgICAgKiBlbGVtZW50LlxuICAgICAqL1xuICAgIExpbmtlZExpc3QucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiAoaXRlbSwgZXF1YWxzRnVuY3Rpb24pIHtcbiAgICAgICAgdmFyIGVxdWFsc0YgPSBlcXVhbHNGdW5jdGlvbiB8fCB1dGlsLmRlZmF1bHRFcXVhbHM7XG4gICAgICAgIGlmICh1dGlsLmlzVW5kZWZpbmVkKGl0ZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gdGhpcy5maXJzdE5vZGU7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIHdoaWxlIChjdXJyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGVxdWFsc0YoY3VycmVudE5vZGUuZWxlbWVudCwgaXRlbSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGxpc3QgY29udGFpbnMgdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgICAqIDxwPklmIHRoZSBlbGVtZW50cyBpbnNpZGUgdGhlIGxpc3QgYXJlXG4gICAgICogbm90IGNvbXBhcmFibGUgd2l0aCB0aGUgPT09IG9wZXJhdG9yIGEgY3VzdG9tIGVxdWFscyBmdW5jdGlvbiBzaG91bGQgYmVcbiAgICAgKiBwcm92aWRlZCB0byBwZXJmb3JtIHNlYXJjaGVzLCB0aGUgZnVuY3Rpb24gbXVzdCByZWNlaXZlIHR3byBhcmd1bWVudHMgYW5kXG4gICAgICogcmV0dXJuIHRydWUgaWYgdGhleSBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS4gRXhhbXBsZTo8L3A+XG4gICAgICpcbiAgICAgKiA8cHJlPlxuICAgICAqIGNvbnN0IHBldHNBcmVFcXVhbEJ5TmFtZSA9IGZ1bmN0aW9uKHBldDEsIHBldDIpIHtcbiAgICAgKiAgcmV0dXJuIHBldDEubmFtZSA9PT0gcGV0Mi5uYW1lO1xuICAgICAqIH1cbiAgICAgKiA8L3ByZT5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBlbGVtZW50IHRvIHNlYXJjaCBmb3IuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KTpib29sZWFuPX0gZXF1YWxzRnVuY3Rpb24gT3B0aW9uYWxcbiAgICAgKiBmdW5jdGlvbiB1c2VkIHRvIGNoZWNrIGlmIHR3byBlbGVtZW50cyBhcmUgZXF1YWwuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGlzIGxpc3QgY29udGFpbnMgdGhlIHNwZWNpZmllZCBlbGVtZW50LCBmYWxzZVxuICAgICAqIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChpdGVtLCBlcXVhbHNGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gKHRoaXMuaW5kZXhPZihpdGVtLCBlcXVhbHNGdW5jdGlvbikgPj0gMCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIHRoZSBzcGVjaWZpZWQgZWxlbWVudCBpbiB0aGlzIGxpc3QuXG4gICAgICogPHA+SWYgdGhlIGVsZW1lbnRzIGluc2lkZSB0aGUgbGlzdCBhcmVcbiAgICAgKiBub3QgY29tcGFyYWJsZSB3aXRoIHRoZSA9PT0gb3BlcmF0b3IgYSBjdXN0b20gZXF1YWxzIGZ1bmN0aW9uIHNob3VsZCBiZVxuICAgICAqIHByb3ZpZGVkIHRvIHBlcmZvcm0gc2VhcmNoZXMsIHRoZSBmdW5jdGlvbiBtdXN0IHJlY2VpdmUgdHdvIGFyZ3VtZW50cyBhbmRcbiAgICAgKiByZXR1cm4gdHJ1ZSBpZiB0aGV5IGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLiBFeGFtcGxlOjwvcD5cbiAgICAgKlxuICAgICAqIDxwcmU+XG4gICAgICogY29uc3QgcGV0c0FyZUVxdWFsQnlOYW1lID0gZnVuY3Rpb24ocGV0MSwgcGV0Mikge1xuICAgICAqICByZXR1cm4gcGV0MS5uYW1lID09PSBwZXQyLm5hbWU7XG4gICAgICogfVxuICAgICAqIDwvcHJlPlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIGVsZW1lbnQgdG8gYmUgcmVtb3ZlZCBmcm9tIHRoaXMgbGlzdCwgaWYgcHJlc2VudC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBsaXN0IGNvbnRhaW5lZCB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAgICovXG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGl0ZW0sIGVxdWFsc0Z1bmN0aW9uKSB7XG4gICAgICAgIHZhciBlcXVhbHNGID0gZXF1YWxzRnVuY3Rpb24gfHwgdXRpbC5kZWZhdWx0RXF1YWxzO1xuICAgICAgICBpZiAodGhpcy5uRWxlbWVudHMgPCAxIHx8IHV0aWwuaXNVbmRlZmluZWQoaXRlbSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJldmlvdXMgPSBudWxsO1xuICAgICAgICB2YXIgY3VycmVudE5vZGUgPSB0aGlzLmZpcnN0Tm9kZTtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoZXF1YWxzRihjdXJyZW50Tm9kZS5lbGVtZW50LCBpdGVtKSkge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91cyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0Tm9kZSA9IGN1cnJlbnROb2RlLm5leHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Tm9kZSA9PT0gdGhpcy5sYXN0Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudE5vZGUgPT09IHRoaXMubGFzdE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IHByZXZpb3VzO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91cy5uZXh0ID0gY3VycmVudE5vZGUubmV4dDtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUubmV4dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91cy5uZXh0ID0gY3VycmVudE5vZGUubmV4dDtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUubmV4dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubkVsZW1lbnRzLS07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmV2aW91cyA9IGN1cnJlbnROb2RlO1xuICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIG9mIHRoZSBlbGVtZW50cyBmcm9tIHRoaXMgbGlzdC5cbiAgICAgKi9cbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5maXJzdE5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3ROb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5uRWxlbWVudHMgPSAwO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgbGlzdCBpcyBlcXVhbCB0byB0aGUgZ2l2ZW4gbGlzdC5cbiAgICAgKiBUd28gbGlzdHMgYXJlIGVxdWFsIGlmIHRoZXkgaGF2ZSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBvcmRlci5cbiAgICAgKiBAcGFyYW0ge0xpbmtlZExpc3R9IG90aGVyIHRoZSBvdGhlciBsaXN0LlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCk6Ym9vbGVhbj19IGVxdWFsc0Z1bmN0aW9uIG9wdGlvbmFsXG4gICAgICogZnVuY3Rpb24gdXNlZCB0byBjaGVjayBpZiB0d28gZWxlbWVudHMgYXJlIGVxdWFsLiBJZiB0aGUgZWxlbWVudHMgaW4gdGhlIGxpc3RzXG4gICAgICogYXJlIGN1c3RvbSBvYmplY3RzIHlvdSBzaG91bGQgcHJvdmlkZSBhIGZ1bmN0aW9uLCBvdGhlcndpc2VcbiAgICAgKiB0aGUgPT09IG9wZXJhdG9yIGlzIHVzZWQgdG8gY2hlY2sgZXF1YWxpdHkgYmV0d2VlbiBlbGVtZW50cy5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgbGlzdCBpcyBlcXVhbCB0byB0aGUgZ2l2ZW4gbGlzdC5cbiAgICAgKi9cbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAob3RoZXIsIGVxdWFsc0Z1bmN0aW9uKSB7XG4gICAgICAgIHZhciBlcUYgPSBlcXVhbHNGdW5jdGlvbiB8fCB1dGlsLmRlZmF1bHRFcXVhbHM7XG4gICAgICAgIGlmICghKG90aGVyIGluc3RhbmNlb2YgTGlua2VkTGlzdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zaXplKCkgIT09IG90aGVyLnNpemUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVxdWFsc0F1eCh0aGlzLmZpcnN0Tm9kZSwgb3RoZXIuZmlyc3ROb2RlLCBlcUYpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5lcXVhbHNBdXggPSBmdW5jdGlvbiAobjEsIG4yLCBlcUYpIHtcbiAgICAgICAgd2hpbGUgKG4xICE9PSBudWxsICYmIG4yICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoIWVxRihuMS5lbGVtZW50LCBuMi5lbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG4xID0gbjEubmV4dDtcbiAgICAgICAgICAgIG4yID0gbjIubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGVsZW1lbnQgYXQgdGhlIHNwZWNpZmllZCBwb3NpdGlvbiBpbiB0aGlzIGxpc3QuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IGdpdmVuIGluZGV4LlxuICAgICAqIEByZXR1cm4geyp9IHJlbW92ZWQgZWxlbWVudCBvciB1bmRlZmluZWQgaWYgdGhlIGluZGV4IGlzIG91dCBvZiBib3VuZHMuXG4gICAgICovXG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUucmVtb3ZlRWxlbWVudEF0SW5kZXggPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLm5FbGVtZW50cyB8fCB0aGlzLmZpcnN0Tm9kZSA9PT0gbnVsbCB8fCB0aGlzLmxhc3ROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbGVtZW50O1xuICAgICAgICBpZiAodGhpcy5uRWxlbWVudHMgPT09IDEpIHtcbiAgICAgICAgICAgIC8vRmlyc3Qgbm9kZSBpbiB0aGUgbGlzdC5cbiAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLmZpcnN0Tm9kZS5lbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5maXJzdE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJldmlvdXMgPSB0aGlzLm5vZGVBdEluZGV4KGluZGV4IC0gMSk7XG4gICAgICAgICAgICBpZiAocHJldmlvdXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gdGhpcy5maXJzdE5vZGUuZWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0Tm9kZSA9IHRoaXMuZmlyc3ROb2RlLm5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwcmV2aW91cy5uZXh0ID09PSB0aGlzLmxhc3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMubGFzdE5vZGUuZWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3ROb2RlID0gcHJldmlvdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJldmlvdXMgIT09IG51bGwgJiYgcHJldmlvdXMubmV4dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBwcmV2aW91cy5uZXh0LmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgcHJldmlvdXMubmV4dCA9IHByZXZpb3VzLm5leHQubmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5FbGVtZW50cy0tO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBvbmNlIGZvciBlYWNoIGVsZW1lbnQgcHJlc2VudCBpbiB0aGlzIGxpc3QgaW4gb3JkZXIuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QpOip9IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUsIGl0IGlzXG4gICAgICogaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDogdGhlIGVsZW1lbnQgdmFsdWUsIHRvIGJyZWFrIHRoZSBpdGVyYXRpb24geW91IGNhblxuICAgICAqIG9wdGlvbmFsbHkgcmV0dXJuIGZhbHNlLlxuICAgICAqL1xuICAgIExpbmtlZExpc3QucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gdGhpcy5maXJzdE5vZGU7XG4gICAgICAgIHdoaWxlIChjdXJyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGN1cnJlbnROb2RlLmVsZW1lbnQpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXZlcnNlcyB0aGUgb3JkZXIgb2YgdGhlIGVsZW1lbnRzIGluIHRoaXMgbGlua2VkIGxpc3QgKG1ha2VzIHRoZSBsYXN0XG4gICAgICogZWxlbWVudCBmaXJzdCwgYW5kIHRoZSBmaXJzdCBlbGVtZW50IGxhc3QpLlxuICAgICAqL1xuICAgIExpbmtlZExpc3QucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwcmV2aW91cyA9IG51bGw7XG4gICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5maXJzdE5vZGU7XG4gICAgICAgIHZhciB0ZW1wID0gbnVsbDtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRlbXAgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgICAgICBjdXJyZW50Lm5leHQgPSBwcmV2aW91cztcbiAgICAgICAgICAgIHByZXZpb3VzID0gY3VycmVudDtcbiAgICAgICAgICAgIGN1cnJlbnQgPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIHRlbXAgPSB0aGlzLmZpcnN0Tm9kZTtcbiAgICAgICAgdGhpcy5maXJzdE5vZGUgPSB0aGlzLmxhc3ROb2RlO1xuICAgICAgICB0aGlzLmxhc3ROb2RlID0gdGVtcDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIGVsZW1lbnRzIGluIHRoaXMgbGlzdCBpbiBwcm9wZXJcbiAgICAgKiBzZXF1ZW5jZS5cbiAgICAgKiBAcmV0dXJuIHtBcnJheS48Kj59IGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBlbGVtZW50cyBpbiB0aGlzIGxpc3QsXG4gICAgICogaW4gcHJvcGVyIHNlcXVlbmNlLlxuICAgICAqL1xuICAgIExpbmtlZExpc3QucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICB2YXIgY3VycmVudE5vZGUgPSB0aGlzLmZpcnN0Tm9kZTtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKGN1cnJlbnROb2RlLmVsZW1lbnQpO1xuICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGlzIGxpc3QuXG4gICAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoaXMgbGlzdC5cbiAgICAgKi9cbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uRWxlbWVudHM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBsaXN0IGNvbnRhaW5zIG5vIGVsZW1lbnRzLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhpcyBsaXN0IGNvbnRhaW5zIG5vIGVsZW1lbnRzLlxuICAgICAqL1xuICAgIExpbmtlZExpc3QucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5FbGVtZW50cyA8PSAwO1xuICAgIH07XG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcnJheXMudG9TdHJpbmcodGhpcy50b0FycmF5KCkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5ub2RlQXRJbmRleCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMubkVsZW1lbnRzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPT09ICh0aGlzLm5FbGVtZW50cyAtIDEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sYXN0Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuZmlyc3ROb2RlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluZGV4ICYmIG5vZGUgIT09IG51bGw7IGkrKykge1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgTGlua2VkTGlzdC5wcm90b3R5cGUuY3JlYXRlTm9kZSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50OiBpdGVtLFxuICAgICAgICAgICAgbmV4dDogbnVsbFxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIExpbmtlZExpc3Q7XG59KCkpOyAvLyBFbmQgb2YgbGlua2VkIGxpc3RcbmV4cG9ydHMuZGVmYXVsdCA9IExpbmtlZExpc3Q7XG5cbn0se1wiLi9hcnJheXNcIjoxNSxcIi4vdXRpbFwiOjE2fV0sOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbnZhciBEaWN0aW9uYXJ5XzEgPSByZXF1aXJlKFwiLi9EaWN0aW9uYXJ5XCIpO1xudmFyIGFycmF5cyA9IHJlcXVpcmUoXCIuL2FycmF5c1wiKTtcbnZhciBNdWx0aURpY3Rpb25hcnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBlbXB0eSBtdWx0aSBkaWN0aW9uYXJ5LlxuICAgICAqIEBjbGFzcyA8cD5BIG11bHRpIGRpY3Rpb25hcnkgaXMgYSBzcGVjaWFsIGtpbmQgb2YgZGljdGlvbmFyeSB0aGF0IGhvbGRzXG4gICAgICogbXVsdGlwbGUgdmFsdWVzIGFnYWluc3QgZWFjaCBrZXkuIFNldHRpbmcgYSB2YWx1ZSBpbnRvIHRoZSBkaWN0aW9uYXJ5IHdpbGxcbiAgICAgKiBhZGQgdGhlIHZhbHVlIHRvIGFuIGFycmF5IGF0IHRoYXQga2V5LiBHZXR0aW5nIGEga2V5IHdpbGwgcmV0dXJuIGFuIGFycmF5LFxuICAgICAqIGhvbGRpbmcgYWxsIHRoZSB2YWx1ZXMgc2V0IHRvIHRoYXQga2V5LlxuICAgICAqIFlvdSBjYW4gY29uZmlndXJlIHRvIGFsbG93IGR1cGxpY2F0ZXMgaW4gdGhlIHZhbHVlcy5cbiAgICAgKiBUaGlzIGltcGxlbWVudGF0aW9uIGFjY2VwdHMgYW55IGtpbmQgb2Ygb2JqZWN0cyBhcyBrZXlzLjwvcD5cbiAgICAgKlxuICAgICAqIDxwPklmIHRoZSBrZXlzIGFyZSBjdXN0b20gb2JqZWN0cyBhIGZ1bmN0aW9uIHdoaWNoIGNvbnZlcnRzIGtleXMgdG8gc3RyaW5ncyBtdXN0IGJlXG4gICAgICogcHJvdmlkZWQuIEV4YW1wbGU6PC9wPlxuICAgICAqXG4gICAgICogPHByZT5cbiAgICAgKiBmdW5jdGlvbiBwZXRUb1N0cmluZyhwZXQpIHtcbiAgICAgKiAgICAgcmV0dXJuIHBldC5uYW1lO1xuICAgICAqIH1cbiAgICAgKiA8L3ByZT5cbiAgICAgKiA8cD5JZiB0aGUgdmFsdWVzIGFyZSBjdXN0b20gb2JqZWN0cyBhIGZ1bmN0aW9uIHRvIGNoZWNrIGVxdWFsaXR5IGJldHdlZW4gdmFsdWVzXG4gICAgICogbXVzdCBiZSBwcm92aWRlZC4gRXhhbXBsZTo8L3A+XG4gICAgICpcbiAgICAgKiA8cHJlPlxuICAgICAqIGZ1bmN0aW9uIHBldHNBcmVFcXVhbEJ5QWdlKHBldDEscGV0Mikge1xuICAgICAqICAgICByZXR1cm4gcGV0MS5hZ2UgPT09IHBldDIuYWdlO1xuICAgICAqIH1cbiAgICAgKiA8L3ByZT5cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6c3RyaW5nPX0gdG9TdHJGdW5jdGlvbiBvcHRpb25hbCBmdW5jdGlvblxuICAgICAqIHRvIGNvbnZlcnQga2V5cyB0byBzdHJpbmdzLiBJZiB0aGUga2V5cyBhcmVuJ3Qgc3RyaW5ncyBvciBpZiB0b1N0cmluZygpXG4gICAgICogaXMgbm90IGFwcHJvcHJpYXRlLCBhIGN1c3RvbSBmdW5jdGlvbiB3aGljaCByZWNlaXZlcyBhIGtleSBhbmQgcmV0dXJucyBhXG4gICAgICogdW5pcXVlIHN0cmluZyBtdXN0IGJlIHByb3ZpZGVkLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCk6Ym9vbGVhbj19IHZhbHVlc0VxdWFsc0Z1bmN0aW9uIG9wdGlvbmFsXG4gICAgICogZnVuY3Rpb24gdG8gY2hlY2sgaWYgdHdvIHZhbHVlcyBhcmUgZXF1YWwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYWxsb3dEdXBsaWNhdGVWYWx1ZXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBNdWx0aURpY3Rpb25hcnkodG9TdHJGdW5jdGlvbiwgdmFsdWVzRXF1YWxzRnVuY3Rpb24sIGFsbG93RHVwbGljYXRlVmFsdWVzKSB7XG4gICAgICAgIGlmIChhbGxvd0R1cGxpY2F0ZVZhbHVlcyA9PT0gdm9pZCAwKSB7IGFsbG93RHVwbGljYXRlVmFsdWVzID0gZmFsc2U7IH1cbiAgICAgICAgdGhpcy5kaWN0ID0gbmV3IERpY3Rpb25hcnlfMS5kZWZhdWx0KHRvU3RyRnVuY3Rpb24pO1xuICAgICAgICB0aGlzLmVxdWFsc0YgPSB2YWx1ZXNFcXVhbHNGdW5jdGlvbiB8fCB1dGlsLmRlZmF1bHRFcXVhbHM7XG4gICAgICAgIHRoaXMuYWxsb3dEdXBsaWNhdGUgPSBhbGxvd0R1cGxpY2F0ZVZhbHVlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBob2xkaW5nIHRoZSB2YWx1ZXMgdG8gd2hpY2ggdGhpcyBkaWN0aW9uYXJ5IG1hcHNcbiAgICAgKiB0aGUgc3BlY2lmaWVkIGtleS5cbiAgICAgKiBSZXR1cm5zIGFuIGVtcHR5IGFycmF5IGlmIHRoaXMgZGljdGlvbmFyeSBjb250YWlucyBubyBtYXBwaW5ncyBmb3IgdGhpcyBrZXkuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGtleSBrZXkgd2hvc2UgYXNzb2NpYXRlZCB2YWx1ZXMgYXJlIHRvIGJlIHJldHVybmVkLlxuICAgICAqIEByZXR1cm4ge0FycmF5fSBhbiBhcnJheSBob2xkaW5nIHRoZSB2YWx1ZXMgdG8gd2hpY2ggdGhpcyBkaWN0aW9uYXJ5IG1hcHNcbiAgICAgKiB0aGUgc3BlY2lmaWVkIGtleS5cbiAgICAgKi9cbiAgICBNdWx0aURpY3Rpb25hcnkucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy5kaWN0LmdldFZhbHVlKGtleSk7XG4gICAgICAgIGlmICh1dGlsLmlzVW5kZWZpbmVkKHZhbHVlcykpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXlzLmNvcHkodmFsdWVzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIHZhbHVlIHRvIHRoZSBhcnJheSBhc3NvY2lhdGVkIHdpdGggdGhlIHNwZWNpZmllZCBrZXksIGlmXG4gICAgICogaXQgaXMgbm90IGFscmVhZHkgcHJlc2VudC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0ga2V5IGtleSB3aXRoIHdoaWNoIHRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgdG8gYmVcbiAgICAgKiBhc3NvY2lhdGVkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB0aGUgdmFsdWUgdG8gYWRkIHRvIHRoZSBhcnJheSBhdCB0aGUga2V5XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgd2FzIG5vdCBhbHJlYWR5IGFzc29jaWF0ZWQgd2l0aCB0aGF0IGtleS5cbiAgICAgKi9cbiAgICBNdWx0aURpY3Rpb25hcnkucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHV0aWwuaXNVbmRlZmluZWQoa2V5KSB8fCB1dGlsLmlzVW5kZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhcnJheSA9IHRoaXMuZGljdC5nZXRWYWx1ZShrZXkpO1xuICAgICAgICBpZiAodXRpbC5pc1VuZGVmaW5lZChhcnJheSkpIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5zZXRWYWx1ZShrZXksIFt2YWx1ZV0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmFsbG93RHVwbGljYXRlKSB7XG4gICAgICAgICAgICBpZiAoYXJyYXlzLmNvbnRhaW5zKGFycmF5LCB2YWx1ZSwgdGhpcy5lcXVhbHNGKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhcnJheS5wdXNoKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBzcGVjaWZpZWQgdmFsdWVzIGZyb20gdGhlIGFycmF5IG9mIHZhbHVlcyBhc3NvY2lhdGVkIHdpdGggdGhlXG4gICAgICogc3BlY2lmaWVkIGtleS4gSWYgYSB2YWx1ZSBpc24ndCBnaXZlbiwgYWxsIHZhbHVlcyBhc3NvY2lhdGVkIHdpdGggdGhlIHNwZWNpZmllZFxuICAgICAqIGtleSBhcmUgcmVtb3ZlZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0ga2V5IGtleSB3aG9zZSBtYXBwaW5nIGlzIHRvIGJlIHJlbW92ZWQgZnJvbSB0aGVcbiAgICAgKiBkaWN0aW9uYXJ5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0PX0gdmFsdWUgb3B0aW9uYWwgYXJndW1lbnQgdG8gc3BlY2lmeSB0aGUgdmFsdWUgdG8gcmVtb3ZlXG4gICAgICogZnJvbSB0aGUgYXJyYXkgYXNzb2NpYXRlZCB3aXRoIHRoZSBzcGVjaWZpZWQga2V5LlxuICAgICAqIEByZXR1cm4geyp9IHRydWUgaWYgdGhlIGRpY3Rpb25hcnkgY2hhbmdlZCwgZmFsc2UgaWYgdGhlIGtleSBkb2Vzbid0IGV4aXN0IG9yXG4gICAgICogaWYgdGhlIHNwZWNpZmllZCB2YWx1ZSBpc24ndCBhc3NvY2lhdGVkIHdpdGggdGhlIHNwZWNpZmllZCBrZXkuXG4gICAgICovXG4gICAgTXVsdGlEaWN0aW9uYXJ5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodXRpbC5pc1VuZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5kaWN0LnJlbW92ZShrZXkpO1xuICAgICAgICAgICAgcmV0dXJuICF1dGlsLmlzVW5kZWZpbmVkKHYpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhcnJheSA9IHRoaXMuZGljdC5nZXRWYWx1ZShrZXkpO1xuICAgICAgICBpZiAoIXV0aWwuaXNVbmRlZmluZWQoYXJyYXkpICYmIGFycmF5cy5yZW1vdmUoYXJyYXksIHZhbHVlLCB0aGlzLmVxdWFsc0YpKSB7XG4gICAgICAgICAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0LnJlbW92ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUga2V5cyBpbiB0aGlzIGRpY3Rpb25hcnkuXG4gICAgICogQHJldHVybiB7QXJyYXl9IGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBrZXlzIGluIHRoaXMgZGljdGlvbmFyeS5cbiAgICAgKi9cbiAgICBNdWx0aURpY3Rpb25hcnkucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpY3Qua2V5cygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgdmFsdWVzIGluIHRoaXMgZGljdGlvbmFyeS5cbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIHZhbHVlcyBpbiB0aGlzIGRpY3Rpb25hcnkuXG4gICAgICovXG4gICAgTXVsdGlEaWN0aW9uYXJ5LnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLmRpY3QudmFsdWVzKCk7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHZhbHVlc18xID0gdmFsdWVzOyBfaSA8IHZhbHVlc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIHYgPSB2YWx1ZXNfMVtfaV07XG4gICAgICAgICAgICBmb3IgKHZhciBfYSA9IDAsIHZfMSA9IHY7IF9hIDwgdl8xLmxlbmd0aDsgX2ErKykge1xuICAgICAgICAgICAgICAgIHZhciB3ID0gdl8xW19hXTtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGRpY3Rpb25hcnkgYXQgbGVhc3Qgb25lIHZhbHVlIGFzc29jaWF0dGVkIHRoZSBzcGVjaWZpZWQga2V5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBrZXkga2V5IHdob3NlIHByZXNlbmNlIGluIHRoaXMgZGljdGlvbmFyeSBpcyB0byBiZVxuICAgICAqIHRlc3RlZC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgZGljdGlvbmFyeSBhdCBsZWFzdCBvbmUgdmFsdWUgYXNzb2NpYXR0ZWRcbiAgICAgKiB0aGUgc3BlY2lmaWVkIGtleS5cbiAgICAgKi9cbiAgICBNdWx0aURpY3Rpb25hcnkucHJvdG90eXBlLmNvbnRhaW5zS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaWN0LmNvbnRhaW5zS2V5KGtleSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBtYXBwaW5ncyBmcm9tIHRoaXMgZGljdGlvbmFyeS5cbiAgICAgKi9cbiAgICBNdWx0aURpY3Rpb25hcnkucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpY3QuY2xlYXIoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBrZXlzIGluIHRoaXMgZGljdGlvbmFyeS5cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW1iZXIgb2Yga2V5LXZhbHVlIG1hcHBpbmdzIGluIHRoaXMgZGljdGlvbmFyeS5cbiAgICAgKi9cbiAgICBNdWx0aURpY3Rpb25hcnkucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpY3Quc2l6ZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgZGljdGlvbmFyeSBjb250YWlucyBubyBtYXBwaW5ncy5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgZGljdGlvbmFyeSBjb250YWlucyBubyBtYXBwaW5ncy5cbiAgICAgKi9cbiAgICBNdWx0aURpY3Rpb25hcnkucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpY3QuaXNFbXB0eSgpO1xuICAgIH07XG4gICAgcmV0dXJuIE11bHRpRGljdGlvbmFyeTtcbn0oKSk7IC8vIGVuZCBvZiBtdWx0aSBkaWN0aW9uYXJ5XG5leHBvcnRzLmRlZmF1bHQgPSBNdWx0aURpY3Rpb25hcnk7XG5cbn0se1wiLi9EaWN0aW9uYXJ5XCI6NCxcIi4vYXJyYXlzXCI6MTUsXCIuL3V0aWxcIjoxNn1dLDEwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIERpcmVjdGlvbjtcbihmdW5jdGlvbiAoRGlyZWN0aW9uKSB7XG4gICAgRGlyZWN0aW9uW0RpcmVjdGlvbltcIkJFRk9SRVwiXSA9IDBdID0gXCJCRUZPUkVcIjtcbiAgICBEaXJlY3Rpb25bRGlyZWN0aW9uW1wiQUZURVJcIl0gPSAxXSA9IFwiQUZURVJcIjtcbiAgICBEaXJlY3Rpb25bRGlyZWN0aW9uW1wiSU5TSURFX0FUX0VORFwiXSA9IDJdID0gXCJJTlNJREVfQVRfRU5EXCI7XG4gICAgRGlyZWN0aW9uW0RpcmVjdGlvbltcIklOU0lERV9BVF9TVEFSVFwiXSA9IDNdID0gXCJJTlNJREVfQVRfU1RBUlRcIjtcbn0pKERpcmVjdGlvbiB8fCAoRGlyZWN0aW9uID0ge30pKTtcbnZhciBNdWx0aVJvb3RUcmVlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE11bHRpUm9vdFRyZWUocm9vdElkcywgbm9kZXMpIHtcbiAgICAgICAgaWYgKHJvb3RJZHMgPT09IHZvaWQgMCkgeyByb290SWRzID0gW107IH1cbiAgICAgICAgaWYgKG5vZGVzID09PSB2b2lkIDApIHsgbm9kZXMgPSB7fTsgfVxuICAgICAgICB0aGlzLnJvb3RJZHMgPSByb290SWRzO1xuICAgICAgICB0aGlzLm5vZGVzID0gbm9kZXM7XG4gICAgICAgIHRoaXMuaW5pdFJvb3RJZHMoKTtcbiAgICAgICAgdGhpcy5pbml0Tm9kZXMoKTtcbiAgICB9XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUuaW5pdFJvb3RJZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLnJvb3RJZHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgcm9vdElkID0gX2FbX2ldO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbXB0eU5vZGVJZk5vdEV4aXN0KHJvb3RJZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLmluaXROb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgbm9kZUtleSBpbiB0aGlzLm5vZGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2Rlcy5oYXNPd25Qcm9wZXJ0eShub2RlS2V5KSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLm5vZGVzW25vZGVLZXldOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZUxpc3RJdGVtID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVtcHR5Tm9kZUlmTm90RXhpc3Qobm9kZUxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLmNyZWF0ZUVtcHR5Tm9kZUlmTm90RXhpc3QgPSBmdW5jdGlvbiAobm9kZUtleSkge1xuICAgICAgICBpZiAoIXRoaXMubm9kZXNbbm9kZUtleV0pIHtcbiAgICAgICAgICAgIHRoaXMubm9kZXNbbm9kZUtleV0gPSBbXTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUuZ2V0Um9vdElkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNsb25lID0gdGhpcy5yb290SWRzLnNsaWNlKCk7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLmdldE5vZGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2xvbmUgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgbm9kZUtleSBpbiB0aGlzLm5vZGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2Rlcy5oYXNPd25Qcm9wZXJ0eShub2RlS2V5KSkge1xuICAgICAgICAgICAgICAgIGNsb25lW25vZGVLZXldID0gdGhpcy5ub2Rlc1tub2RlS2V5XS5zbGljZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLmdldE9iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvb3RJZHM6IHRoaXMuZ2V0Um9vdElkcygpLFxuICAgICAgICAgICAgbm9kZXM6IHRoaXMuZ2V0Tm9kZXMoKSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3QoKTtcbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLmZsYXR0ZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBleHRyYVByb3BzT2JqZWN0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb290SWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcm9vdElkID0gdGhpcy5yb290SWRzW2ldO1xuICAgICAgICAgICAgZXh0cmFQcm9wc09iamVjdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogcm9vdElkLFxuICAgICAgICAgICAgICAgIGxldmVsOiAwLFxuICAgICAgICAgICAgICAgIGhhc1BhcmVudDogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5Db3VudDogMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdHJhdmVyc2Uocm9vdElkLCB0aGlzLm5vZGVzLCBleHRyYVByb3BzT2JqZWN0LCAwKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGV4dHJhUHJvcHNPYmplY3RfMSA9IGV4dHJhUHJvcHNPYmplY3Q7IF9pIDwgZXh0cmFQcm9wc09iamVjdF8xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIG8gPSBleHRyYVByb3BzT2JqZWN0XzFbX2ldO1xuICAgICAgICAgICAgby5jaGlsZHJlbkNvdW50ID0gY291bnRDaGlsZHJlbihvLmlkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXh0cmFQcm9wc09iamVjdDtcbiAgICAgICAgZnVuY3Rpb24gY291bnRDaGlsZHJlbihpZCkge1xuICAgICAgICAgICAgaWYgKCFfdGhpcy5ub2Rlc1tpZF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbkNvdW50ID0gX3RoaXMubm9kZXNbaWRdLmxlbmd0aDtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW5Db3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB0cmF2ZXJzZShzdGFydElkLCBub2RlcywgcmV0dXJuQXJyYXksIGxldmVsKSB7XG4gICAgICAgICAgICBpZiAobGV2ZWwgPT09IHZvaWQgMCkgeyBsZXZlbCA9IDA7IH1cbiAgICAgICAgICAgIGlmICghc3RhcnRJZCB8fCAhbm9kZXMgfHwgIXJldHVybkFycmF5IHx8ICFub2Rlc1tzdGFydElkXSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldmVsKys7XG4gICAgICAgICAgICB2YXIgaWRzTGlzdCA9IG5vZGVzW3N0YXJ0SWRdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpZHNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gaWRzTGlzdFtpXTtcbiAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHsgaWQ6IGlkLCBsZXZlbDogbGV2ZWwsIGhhc1BhcmVudDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB0cmF2ZXJzZShpZCwgbm9kZXMsIHJldHVybkFycmF5LCBsZXZlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXZlbC0tO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5tb3ZlSWRCZWZvcmVJZCA9IGZ1bmN0aW9uIChtb3ZlSWQsIGJlZm9yZUlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVJZChtb3ZlSWQsIGJlZm9yZUlkLCBEaXJlY3Rpb24uQkVGT1JFKTtcbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLm1vdmVJZEFmdGVySWQgPSBmdW5jdGlvbiAobW92ZUlkLCBhZnRlcklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVJZChtb3ZlSWQsIGFmdGVySWQsIERpcmVjdGlvbi5BRlRFUik7XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5tb3ZlSWRJbnRvSWQgPSBmdW5jdGlvbiAobW92ZUlkLCBpbnNpZGVJZCwgYXRTdGFydCkge1xuICAgICAgICBpZiAoYXRTdGFydCA9PT0gdm9pZCAwKSB7IGF0U3RhcnQgPSB0cnVlOyB9XG4gICAgICAgIGlmIChhdFN0YXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb3ZlSWQobW92ZUlkLCBpbnNpZGVJZCwgRGlyZWN0aW9uLklOU0lERV9BVF9TVEFSVCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb3ZlSWQobW92ZUlkLCBpbnNpZGVJZCwgRGlyZWN0aW9uLklOU0lERV9BVF9FTkQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5zd2FwUm9vdElkV2l0aFJvb3RJZCA9IGZ1bmN0aW9uIChyb290SWQsIHdpdGhSb290SWQpIHtcbiAgICAgICAgdmFyIGxlZnRJbmRleCA9IHRoaXMuZmluZFJvb3RJZChyb290SWQpO1xuICAgICAgICB2YXIgcmlnaHRJbmRleCA9IHRoaXMuZmluZFJvb3RJZCh3aXRoUm9vdElkKTtcbiAgICAgICAgdGhpcy5zd2FwUm9vdFBvc2l0aW9uV2l0aFJvb3RQb3NpdGlvbihsZWZ0SW5kZXgsIHJpZ2h0SW5kZXgpO1xuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUuc3dhcFJvb3RQb3NpdGlvbldpdGhSb290UG9zaXRpb24gPSBmdW5jdGlvbiAoc3dhcFJvb3RQb3NpdGlvbiwgd2l0aFJvb3RQb3NpdGlvbikge1xuICAgICAgICB2YXIgdGVtcCA9IHRoaXMucm9vdElkc1t3aXRoUm9vdFBvc2l0aW9uXTtcbiAgICAgICAgdGhpcy5yb290SWRzW3dpdGhSb290UG9zaXRpb25dID0gdGhpcy5yb290SWRzW3N3YXBSb290UG9zaXRpb25dO1xuICAgICAgICB0aGlzLnJvb3RJZHNbc3dhcFJvb3RQb3NpdGlvbl0gPSB0ZW1wO1xuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUuZGVsZXRlSWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdGhpcy5yb290RGVsZXRlSWQoaWQpO1xuICAgICAgICB0aGlzLm5vZGVBbmRTdWJOb2Rlc0RlbGV0ZShpZCk7XG4gICAgICAgIHRoaXMubm9kZVJlZnJlbmNlc0RlbGV0ZShpZCk7XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5pbnNlcnRJZEJlZm9yZUlkID0gZnVuY3Rpb24gKGJlZm9yZUlkLCBpbnNlcnRJZCkge1xuICAgICAgICB2YXIgZm91bmRSb290SWRJbmRleCA9IHRoaXMuZmluZFJvb3RJZChiZWZvcmVJZCk7XG4gICAgICAgIGlmIChmb3VuZFJvb3RJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0SWRJbnRvUm9vdChpbnNlcnRJZCwgZm91bmRSb290SWRJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgbm9kZUtleSBpbiB0aGlzLm5vZGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2Rlcy5oYXNPd25Qcm9wZXJ0eShub2RlS2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciBmb3VuZE5vZGVJZEluZGV4ID0gdGhpcy5maW5kTm9kZUlkKG5vZGVLZXksIGJlZm9yZUlkKTtcbiAgICAgICAgICAgICAgICBpZiAoZm91bmROb2RlSWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0SWRJbnRvTm9kZShub2RlS2V5LCBpbnNlcnRJZCwgZm91bmROb2RlSWRJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5pbnNlcnRJZEFmdGVySWQgPSBmdW5jdGlvbiAoYmVsb3dJZCwgaW5zZXJ0SWQpIHtcbiAgICAgICAgdmFyIGZvdW5kUm9vdElkSW5kZXggPSB0aGlzLmZpbmRSb290SWQoYmVsb3dJZCk7XG4gICAgICAgIGlmIChmb3VuZFJvb3RJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0SWRJbnRvUm9vdChpbnNlcnRJZCwgZm91bmRSb290SWRJbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIG5vZGVLZXkgaW4gdGhpcy5ub2Rlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZXMuaGFzT3duUHJvcGVydHkobm9kZUtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm91bmROb2RlSWRJbmRleCA9IHRoaXMuZmluZE5vZGVJZChub2RlS2V5LCBiZWxvd0lkKTtcbiAgICAgICAgICAgICAgICBpZiAoZm91bmROb2RlSWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0SWRJbnRvTm9kZShub2RlS2V5LCBpbnNlcnRJZCwgZm91bmROb2RlSWRJbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUuaW5zZXJ0SWRJbnRvSWQgPSBmdW5jdGlvbiAoaW5zaWRlSWQsIGluc2VydElkKSB7XG4gICAgICAgIHRoaXMubm9kZUluc2VydEF0RW5kKGluc2lkZUlkLCBpbnNlcnRJZCk7XG4gICAgICAgIHRoaXMubm9kZXNbaW5zZXJ0SWRdID0gW107XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5pbnNlcnRJZEludG9Sb290ID0gZnVuY3Rpb24gKGlkLCBwb3NpdGlvbikge1xuICAgICAgICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yb290SW5zZXJ0QXRFbmQoaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uIDwgMCkge1xuICAgICAgICAgICAgICAgIHZhciBsZW5ndGhfMSA9IHRoaXMucm9vdElkcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5yb290SWRzLnNwbGljZSgocG9zaXRpb24gKyBsZW5ndGhfMSArIDEpLCAwLCBpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3RJZHMuc3BsaWNlKHBvc2l0aW9uLCAwLCBpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2Rlc1tpZF0gPSB0aGlzLm5vZGVzW2lkXSB8fCBbXTtcbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLmluc2VydElkSW50b05vZGUgPSBmdW5jdGlvbiAobm9kZUtleSwgaWQsIHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMubm9kZXNbbm9kZUtleV0gPSB0aGlzLm5vZGVzW25vZGVLZXldIHx8IFtdO1xuICAgICAgICB0aGlzLm5vZGVzW2lkXSA9IHRoaXMubm9kZXNbaWRdIHx8IFtdO1xuICAgICAgICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlSW5zZXJ0QXRFbmQobm9kZUtleSwgaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uIDwgMCkge1xuICAgICAgICAgICAgICAgIHZhciBsZW5ndGhfMiA9IHRoaXMubm9kZXNbbm9kZUtleV0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZXNbbm9kZUtleV0uc3BsaWNlKChwb3NpdGlvbiArIGxlbmd0aF8yICsgMSksIDAsIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZXNbbm9kZUtleV0uc3BsaWNlKHBvc2l0aW9uLCAwLCBpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLm1vdmVJZCA9IGZ1bmN0aW9uIChtb3ZlSWQsIGJlZm9yZUlkLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIHNvdXJjZUlkID0gbW92ZUlkO1xuICAgICAgICB2YXIgc291cmNlUm9vdEluZGV4ID0gdGhpcy5maW5kUm9vdElkKHNvdXJjZUlkKTtcbiAgICAgICAgdmFyIHNvdXJjZU5vZGVLZXk7XG4gICAgICAgIHZhciBzb3VyY2VOb2RlSWRJbmRleDtcbiAgICAgICAgaWYgKHRoaXMubm9kZXNbYmVmb3JlSWRdKSB7XG4gICAgICAgICAgICBzb3VyY2VOb2RlS2V5ID0gYmVmb3JlSWQ7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgbm9kZUtleSBpbiB0aGlzLm5vZGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2Rlcy5oYXNPd25Qcm9wZXJ0eShub2RlS2V5KSkge1xuICAgICAgICAgICAgICAgIHNvdXJjZU5vZGVJZEluZGV4ID0gdGhpcy5maW5kTm9kZUlkKG5vZGVLZXksIGJlZm9yZUlkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBnb3QgYWxsXG4gICAgICAgIHZhciB0YXJnZXRJZCA9IGJlZm9yZUlkO1xuICAgICAgICB2YXIgdGFyZ2V0Um9vdEluZGV4ID0gdGhpcy5maW5kUm9vdElkKHRhcmdldElkKTtcbiAgICAgICAgdmFyIHRhcmdldE5vZGVLZXk7XG4gICAgICAgIHZhciB0YXJnZXROb2RlSWRJbmRleDtcbiAgICAgICAgaWYgKHRoaXMubm9kZXNbYmVmb3JlSWRdKSB7XG4gICAgICAgICAgICB0YXJnZXROb2RlS2V5ID0gYmVmb3JlSWQ7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgbm9kZUtleSBpbiB0aGlzLm5vZGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2Rlcy5oYXNPd25Qcm9wZXJ0eShub2RlS2V5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldE5vZGVJZEluZGV4ID0gdGhpcy5maW5kTm9kZUlkKG5vZGVLZXksIGJlZm9yZUlkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBnb3QgYWxsXG4gICAgICAgIGlmIChzb3VyY2VSb290SW5kZXggPiAtMSkge1xuICAgICAgICAgICAgaWYgKHRhcmdldFJvb3RJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gbW92aW5nIHJvb3QgdG8gcm9vdFxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBNb3ZpbmcgUk9PVCB0byBST09UYCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFJvb3RJZHM6YCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5yb290SWRzKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgVGFyZ2V0SW5kZXg9JHt0YXJnZXRSb290SW5kZXh9LCBTb3VyY2VJbmRleD0ke3NvdXJjZVJvb3RJbmRleH1gKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgVGFyZ2V0SWQ9JHt0YXJnZXRJZH0sIFNvdXJjZUlkPSR7c291cmNlSWR9YCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb290RGVsZXRlKHNvdXJjZVJvb3RJbmRleCk7IC8vIGluZGV4ZXMgY2hhbmdlIG5vd1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRSb290SW5kZXggPiBzb3VyY2VSb290SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Um9vdEluZGV4LS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5CRUZPUkU6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydElkSW50b1Jvb3Qoc291cmNlSWQsIHRhcmdldFJvb3RJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uQUZURVI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydElkSW50b1Jvb3Qoc291cmNlSWQsIHRhcmdldFJvb3RJbmRleCArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLklOU0lERV9BVF9TVEFSVDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZUluc2VydEF0U3RhcnQodGFyZ2V0SWQsIHNvdXJjZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5JTlNJREVfQVRfRU5EOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlSW5zZXJ0QXRFbmQodGFyZ2V0SWQsIHNvdXJjZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG1vdmluZyByb290IChzb3VyY2UpIEFCT1ZFIG5vZGUgKHRhcmdldClcbiAgICAgICAgICAgICAgICAvLyB3aWxsIHJlbW92ZSBvbmUgZW50cnkgZnJvbSByb290c1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdERlbGV0ZShzb3VyY2VSb290SW5kZXgpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG5vZGVLZXkgaW4gdGhpcy5ub2Rlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2Rlcy5oYXNPd25Qcm9wZXJ0eShub2RlS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5maW5kTm9kZUlkKG5vZGVLZXksIHRhcmdldElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uQkVGT1JFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRJZEludG9Ob2RlKG5vZGVLZXksIHNvdXJjZUlkLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uQUZURVI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydElkSW50b05vZGUobm9kZUtleSwgc291cmNlSWQsIGluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uSU5TSURFX0FUX1NUQVJUOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlSW5zZXJ0QXRTdGFydCh0YXJnZXRJZCwgc291cmNlSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLklOU0lERV9BVF9FTkQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVJbnNlcnRBdEVuZCh0YXJnZXRJZCwgc291cmNlSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRhcmdldFJvb3RJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gbW92aW5nIG5vZGUgKHNvdXJjZSkgQUJPVkUgcm9vdCAodGFyZ2V0KVxuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSBzb3VyY2UgaWQgZnJvbSBlYWNoIG5vZGVcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBub2RlS2V5IGluIHRoaXMubm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZXMuaGFzT3duUHJvcGVydHkobm9kZUtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuZmluZE5vZGVJZChub2RlS2V5LCBzb3VyY2VJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZUluc2VydElkKG5vZGVLZXksIHNvdXJjZUlkLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlRGVsZXRlQXRJbmRleChub2RlS2V5LCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uQkVGT1JFOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRJZEludG9Sb290KHNvdXJjZUlkLCB0YXJnZXRSb290SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLkFGVEVSOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRJZEludG9Sb290KHNvdXJjZUlkLCB0YXJnZXRSb290SW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5JTlNJREVfQVRfU1RBUlQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVJbnNlcnRBdFN0YXJ0KHRhcmdldElkLCBzb3VyY2VJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uSU5TSURFX0FUX0VORDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZUluc2VydEF0RW5kKHRhcmdldElkLCBzb3VyY2VJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBtb3Zpbmcgbm9kZSAoc291cmNlKSBBQk9WRSBub2RlICh0YXJnZXQpXG4gICAgICAgICAgICAgICAgLy8gZGVsZXRlIHNvdXJjZSBpZCBmcm9tIGVhY2ggbm9kZVxuICAgICAgICAgICAgICAgIGZvciAodmFyIG5vZGVLZXkgaW4gdGhpcy5ub2Rlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2Rlcy5oYXNPd25Qcm9wZXJ0eShub2RlS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5maW5kTm9kZUlkKG5vZGVLZXksIHNvdXJjZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlRGVsZXRlQXRJbmRleChub2RlS2V5LCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbm9kZUtleSBpbiB0aGlzLm5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGVzLmhhc093blByb3BlcnR5KG5vZGVLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmZpbmROb2RlSWQobm9kZUtleSwgdGFyZ2V0SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5CRUZPUkU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydElkSW50b05vZGUobm9kZUtleSwgc291cmNlSWQsIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5BRlRFUjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0SWRJbnRvTm9kZShub2RlS2V5LCBzb3VyY2VJZCwgaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5JTlNJREVfQVRfU1RBUlQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVJbnNlcnRBdFN0YXJ0KHRhcmdldElkLCBzb3VyY2VJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uSU5TSURFX0FUX0VORDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZUluc2VydEF0RW5kKHRhcmdldElkLCBzb3VyY2VJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLnN3YXBBcnJheUVsZW1lbnRzID0gZnVuY3Rpb24gKGFyciwgaW5kZXhBLCBpbmRleEIpIHtcbiAgICAgICAgdmFyIHRlbXAgPSBhcnJbaW5kZXhBXTtcbiAgICAgICAgYXJyW2luZGV4QV0gPSBhcnJbaW5kZXhCXTtcbiAgICAgICAgYXJyW2luZGV4Ql0gPSB0ZW1wO1xuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUucm9vdERlbGV0ZUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZmluZFJvb3RJZChpZCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3REZWxldGUoaW5kZXgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5ub2RlQW5kU3ViTm9kZXNEZWxldGUgPSBmdW5jdGlvbiAobm9kZUtleSkge1xuICAgICAgICB2YXIgdG9EZWxldGVMYXRlciA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubm9kZXNbbm9kZUtleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpZCA9IHRoaXMubm9kZXNbbm9kZUtleV1baV07XG4gICAgICAgICAgICB0aGlzLm5vZGVBbmRTdWJOb2Rlc0RlbGV0ZShpZCk7XG4gICAgICAgICAgICB0b0RlbGV0ZUxhdGVyLnB1c2gobm9kZUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlRGVsZXRlKG5vZGVLZXkpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvRGVsZXRlTGF0ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubm9kZURlbGV0ZSh0b0RlbGV0ZUxhdGVyW2ldKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUubm9kZVJlZnJlbmNlc0RlbGV0ZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBmb3IgKHZhciBub2RlS2V5IGluIHRoaXMubm9kZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGVzLmhhc093blByb3BlcnR5KG5vZGVLZXkpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm5vZGVzW25vZGVLZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRJZCA9IHRoaXMubm9kZXNbbm9kZUtleV1baV07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRJZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZURlbGV0ZUF0SW5kZXgobm9kZUtleSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLm5vZGVEZWxldGUgPSBmdW5jdGlvbiAobm9kZUtleSkge1xuICAgICAgICBkZWxldGUgdGhpcy5ub2Rlc1tub2RlS2V5XTtcbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLmZpbmRSb290SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdElkcy5pbmRleE9mKGlkKTtcbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLmZpbmROb2RlSWQgPSBmdW5jdGlvbiAobm9kZUtleSwgaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZXNbbm9kZUtleV0uaW5kZXhPZihpZCk7XG4gICAgfTtcbiAgICBNdWx0aVJvb3RUcmVlLnByb3RvdHlwZS5maW5kTm9kZSA9IGZ1bmN0aW9uIChub2RlS2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVzW25vZGVLZXldO1xuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUubm9kZUluc2VydEF0U3RhcnQgPSBmdW5jdGlvbiAobm9kZUtleSwgaWQpIHtcbiAgICAgICAgdGhpcy5ub2Rlc1tub2RlS2V5XS51bnNoaWZ0KGlkKTtcbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLm5vZGVJbnNlcnRBdEVuZCA9IGZ1bmN0aW9uIChub2RlS2V5LCBpZCkge1xuICAgICAgICB0aGlzLm5vZGVzW25vZGVLZXldLnB1c2goaWQpO1xuICAgIH07XG4gICAgTXVsdGlSb290VHJlZS5wcm90b3R5cGUucm9vdERlbGV0ZSA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB0aGlzLnJvb3RJZHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLm5vZGVEZWxldGVBdEluZGV4ID0gZnVuY3Rpb24gKG5vZGVLZXksIGluZGV4KSB7XG4gICAgICAgIHRoaXMubm9kZXNbbm9kZUtleV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLnJvb3RJbnNlcnRBdFN0YXJ0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHRoaXMucm9vdElkcy51bnNoaWZ0KGlkKTtcbiAgICB9O1xuICAgIE11bHRpUm9vdFRyZWUucHJvdG90eXBlLnJvb3RJbnNlcnRBdEVuZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB0aGlzLnJvb3RJZHMucHVzaChpZCk7XG4gICAgfTtcbiAgICByZXR1cm4gTXVsdGlSb290VHJlZTtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBNdWx0aVJvb3RUcmVlO1xuXG59LHt9XSwxMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbnZhciBIZWFwXzEgPSByZXF1aXJlKFwiLi9IZWFwXCIpO1xudmFyIFByaW9yaXR5UXVldWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBlbXB0eSBwcmlvcml0eSBxdWV1ZS5cbiAgICAgKiBAY2xhc3MgPHA+SW4gYSBwcmlvcml0eSBxdWV1ZSBlYWNoIGVsZW1lbnQgaXMgYXNzb2NpYXRlZCB3aXRoIGEgXCJwcmlvcml0eVwiLFxuICAgICAqIGVsZW1lbnRzIGFyZSBkZXF1ZXVlZCBpbiBoaWdoZXN0LXByaW9yaXR5LWZpcnN0IG9yZGVyICh0aGUgZWxlbWVudHMgd2l0aCB0aGVcbiAgICAgKiBoaWdoZXN0IHByaW9yaXR5IGFyZSBkZXF1ZXVlZCBmaXJzdCkuIFByaW9yaXR5IFF1ZXVlcyBhcmUgaW1wbGVtZW50ZWQgYXMgaGVhcHMuXG4gICAgICogSWYgdGhlIGluc2VydGVkIGVsZW1lbnRzIGFyZSBjdXN0b20gb2JqZWN0cyBhIGNvbXBhcmUgZnVuY3Rpb24gbXVzdCBiZSBwcm92aWRlZCxcbiAgICAgKiBvdGhlcndpc2UgdGhlIDw9LCA9PT0gYW5kID49IG9wZXJhdG9ycyBhcmUgdXNlZCB0byBjb21wYXJlIG9iamVjdCBwcmlvcml0eS48L3A+XG4gICAgICogPHByZT5cbiAgICAgKiBmdW5jdGlvbiBjb21wYXJlKGEsIGIpIHtcbiAgICAgKiAgaWYgKGEgaXMgbGVzcyB0aGFuIGIgYnkgc29tZSBvcmRlcmluZyBjcml0ZXJpb24pIHtcbiAgICAgKiAgICAgcmV0dXJuIC0xO1xuICAgICAqICB9IGlmIChhIGlzIGdyZWF0ZXIgdGhhbiBiIGJ5IHRoZSBvcmRlcmluZyBjcml0ZXJpb24pIHtcbiAgICAgKiAgICAgcmV0dXJuIDE7XG4gICAgICogIH1cbiAgICAgKiAgLy8gYSBtdXN0IGJlIGVxdWFsIHRvIGJcbiAgICAgKiAgcmV0dXJuIDA7XG4gICAgICogfVxuICAgICAqIDwvcHJlPlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCk6bnVtYmVyPX0gY29tcGFyZUZ1bmN0aW9uIG9wdGlvbmFsXG4gICAgICogZnVuY3Rpb24gdXNlZCB0byBjb21wYXJlIHR3byBlbGVtZW50IHByaW9yaXRpZXMuIE11c3QgcmV0dXJuIGEgbmVnYXRpdmUgaW50ZWdlcixcbiAgICAgKiB6ZXJvLCBvciBhIHBvc2l0aXZlIGludGVnZXIgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGxlc3MgdGhhbiwgZXF1YWwgdG8sXG4gICAgICogb3IgZ3JlYXRlciB0aGFuIHRoZSBzZWNvbmQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gUHJpb3JpdHlRdWV1ZShjb21wYXJlRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5oZWFwID0gbmV3IEhlYXBfMS5kZWZhdWx0KHV0aWwucmV2ZXJzZUNvbXBhcmVGdW5jdGlvbihjb21wYXJlRnVuY3Rpb24pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQgaW50byB0aGlzIHByaW9yaXR5IHF1ZXVlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIGluc2VydC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBlbGVtZW50IHdhcyBpbnNlcnRlZCwgb3IgZmFsc2UgaWYgaXQgaXMgdW5kZWZpbmVkLlxuICAgICAqL1xuICAgIFByaW9yaXR5UXVldWUucHJvdG90eXBlLmVucXVldWUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFwLmFkZChlbGVtZW50KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEluc2VydHMgdGhlIHNwZWNpZmllZCBlbGVtZW50IGludG8gdGhpcyBwcmlvcml0eSBxdWV1ZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCB0aGUgZWxlbWVudCB0byBpbnNlcnQuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZWxlbWVudCB3YXMgaW5zZXJ0ZWQsIG9yIGZhbHNlIGlmIGl0IGlzIHVuZGVmaW5lZC5cbiAgICAgKi9cbiAgICBQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFwLmFkZChlbGVtZW50KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbmQgcmVtb3ZlcyB0aGUgaGlnaGVzdCBwcmlvcml0eSBlbGVtZW50IG9mIHRoaXMgcXVldWUuXG4gICAgICogQHJldHVybiB7Kn0gdGhlIHRoZSBoaWdoZXN0IHByaW9yaXR5IGVsZW1lbnQgb2YgdGhpcyBxdWV1ZSxcbiAgICAgKiAgb3IgdW5kZWZpbmVkIGlmIHRoaXMgcXVldWUgaXMgZW1wdHkuXG4gICAgICovXG4gICAgUHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuZGVxdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhcC5zaXplKCkgIT09IDApIHtcbiAgICAgICAgICAgIHZhciBlbCA9IHRoaXMuaGVhcC5wZWVrKCk7XG4gICAgICAgICAgICB0aGlzLmhlYXAucmVtb3ZlUm9vdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMsIGJ1dCBkb2VzIG5vdCByZW1vdmUsIHRoZSBoaWdoZXN0IHByaW9yaXR5IGVsZW1lbnQgb2YgdGhpcyBxdWV1ZS5cbiAgICAgKiBAcmV0dXJuIHsqfSB0aGUgaGlnaGVzdCBwcmlvcml0eSBlbGVtZW50IG9mIHRoaXMgcXVldWUsIG9yIHVuZGVmaW5lZCBpZiB0aGlzIHF1ZXVlIGlzIGVtcHR5LlxuICAgICAqL1xuICAgIFByaW9yaXR5UXVldWUucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYXAucGVlaygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgcHJpb3JpdHkgcXVldWUgY29udGFpbnMgdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IGVsZW1lbnQgdG8gc2VhcmNoIGZvci5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgcHJpb3JpdHkgcXVldWUgY29udGFpbnMgdGhlIHNwZWNpZmllZCBlbGVtZW50LFxuICAgICAqIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBQcmlvcml0eVF1ZXVlLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYXAuY29udGFpbnMoZWxlbWVudCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhpcyBwcmlvcml0eSBxdWV1ZSBpcyBlbXB0eS5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIGFuZCBvbmx5IGlmIHRoaXMgcHJpb3JpdHkgcXVldWUgY29udGFpbnMgbm8gaXRlbXM7IGZhbHNlXG4gICAgICogb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIFByaW9yaXR5UXVldWUucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYXAuaXNFbXB0eSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoaXMgcHJpb3JpdHkgcXVldWUuXG4gICAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoaXMgcHJpb3JpdHkgcXVldWUuXG4gICAgICovXG4gICAgUHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhcC5zaXplKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBvZiB0aGUgZWxlbWVudHMgZnJvbSB0aGlzIHByaW9yaXR5IHF1ZXVlLlxuICAgICAqL1xuICAgIFByaW9yaXR5UXVldWUucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhlYXAuY2xlYXIoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBvbmNlIGZvciBlYWNoIGVsZW1lbnQgcHJlc2VudCBpbiB0aGlzIHF1ZXVlIGluXG4gICAgICogbm8gcGFydGljdWxhciBvcmRlci5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6Kn0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSwgaXQgaXNcbiAgICAgKiBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OiB0aGUgZWxlbWVudCB2YWx1ZSwgdG8gYnJlYWsgdGhlIGl0ZXJhdGlvbiB5b3UgY2FuXG4gICAgICogb3B0aW9uYWxseSByZXR1cm4gZmFsc2UuXG4gICAgICovXG4gICAgUHJpb3JpdHlRdWV1ZS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmhlYXAuZm9yRWFjaChjYWxsYmFjayk7XG4gICAgfTtcbiAgICByZXR1cm4gUHJpb3JpdHlRdWV1ZTtcbn0oKSk7IC8vIGVuZCBvZiBwcmlvcml0eSBxdWV1ZVxuZXhwb3J0cy5kZWZhdWx0ID0gUHJpb3JpdHlRdWV1ZTtcblxufSx7XCIuL0hlYXBcIjo2LFwiLi91dGlsXCI6MTZ9XSwxMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBMaW5rZWRMaXN0XzEgPSByZXF1aXJlKFwiLi9MaW5rZWRMaXN0XCIpO1xudmFyIFF1ZXVlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gZW1wdHkgcXVldWUuXG4gICAgICogQGNsYXNzIEEgcXVldWUgaXMgYSBGaXJzdC1Jbi1GaXJzdC1PdXQgKEZJRk8pIGRhdGEgc3RydWN0dXJlLCB0aGUgZmlyc3RcbiAgICAgKiBlbGVtZW50IGFkZGVkIHRvIHRoZSBxdWV1ZSB3aWxsIGJlIHRoZSBmaXJzdCBvbmUgdG8gYmUgcmVtb3ZlZC4gVGhpc1xuICAgICAqIGltcGxlbWVudGF0aW9uIHVzZXMgYSBsaW5rZWQgbGlzdCBhcyBhIGNvbnRhaW5lci5cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBRdWV1ZSgpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gbmV3IExpbmtlZExpc3RfMS5kZWZhdWx0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluc2VydHMgdGhlIHNwZWNpZmllZCBlbGVtZW50IGludG8gdGhlIGVuZCBvZiB0aGlzIHF1ZXVlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtIHRoZSBlbGVtZW50IHRvIGluc2VydC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBlbGVtZW50IHdhcyBpbnNlcnRlZCwgb3IgZmFsc2UgaWYgaXQgaXMgdW5kZWZpbmVkLlxuICAgICAqL1xuICAgIFF1ZXVlLnByb3RvdHlwZS5lbnF1ZXVlID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5hZGQoZWxlbSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIHRoZSBzcGVjaWZpZWQgZWxlbWVudCBpbnRvIHRoZSBlbmQgb2YgdGhpcyBxdWV1ZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbSB0aGUgZWxlbWVudCB0byBpbnNlcnQuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZWxlbWVudCB3YXMgaW5zZXJ0ZWQsIG9yIGZhbHNlIGlmIGl0IGlzIHVuZGVmaW5lZC5cbiAgICAgKi9cbiAgICBRdWV1ZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5hZGQoZWxlbSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYW5kIHJlbW92ZXMgdGhlIGhlYWQgb2YgdGhpcyBxdWV1ZS5cbiAgICAgKiBAcmV0dXJuIHsqfSB0aGUgaGVhZCBvZiB0aGlzIHF1ZXVlLCBvciB1bmRlZmluZWQgaWYgdGhpcyBxdWV1ZSBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICBRdWV1ZS5wcm90b3R5cGUuZGVxdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdC5zaXplKCkgIT09IDApIHtcbiAgICAgICAgICAgIHZhciBlbCA9IHRoaXMubGlzdC5maXJzdCgpO1xuICAgICAgICAgICAgdGhpcy5saXN0LnJlbW92ZUVsZW1lbnRBdEluZGV4KDApO1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMsIGJ1dCBkb2VzIG5vdCByZW1vdmUsIHRoZSBoZWFkIG9mIHRoaXMgcXVldWUuXG4gICAgICogQHJldHVybiB7Kn0gdGhlIGhlYWQgb2YgdGhpcyBxdWV1ZSwgb3IgdW5kZWZpbmVkIGlmIHRoaXMgcXVldWUgaXMgZW1wdHkuXG4gICAgICovXG4gICAgUXVldWUucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmxpc3Quc2l6ZSgpICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0LmZpcnN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGlzIHF1ZXVlLlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGlzIHF1ZXVlLlxuICAgICAqL1xuICAgIFF1ZXVlLnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0LnNpemUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIHF1ZXVlIGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAgKiA8cD5JZiB0aGUgZWxlbWVudHMgaW5zaWRlIHRoaXMgc3RhY2sgYXJlXG4gICAgICogbm90IGNvbXBhcmFibGUgd2l0aCB0aGUgPT09IG9wZXJhdG9yLCBhIGN1c3RvbSBlcXVhbHMgZnVuY3Rpb24gc2hvdWxkIGJlXG4gICAgICogcHJvdmlkZWQgdG8gcGVyZm9ybSBzZWFyY2hlcywgdGhlIGZ1bmN0aW9uIG11c3QgcmVjZWl2ZSB0d28gYXJndW1lbnRzIGFuZFxuICAgICAqIHJldHVybiB0cnVlIGlmIHRoZXkgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuIEV4YW1wbGU6PC9wPlxuICAgICAqXG4gICAgICogPHByZT5cbiAgICAgKiBjb25zdCBwZXRzQXJlRXF1YWxCeU5hbWUgKHBldDEsIHBldDIpIHtcbiAgICAgKiAgcmV0dXJuIHBldDEubmFtZSA9PT0gcGV0Mi5uYW1lO1xuICAgICAqIH1cbiAgICAgKiA8L3ByZT5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbSBlbGVtZW50IHRvIHNlYXJjaCBmb3IuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KTpib29sZWFuPX0gZXF1YWxzRnVuY3Rpb24gb3B0aW9uYWxcbiAgICAgKiBmdW5jdGlvbiB0byBjaGVjayBpZiB0d28gZWxlbWVudHMgYXJlIGVxdWFsLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhpcyBxdWV1ZSBjb250YWlucyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQsXG4gICAgICogZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIFF1ZXVlLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChlbGVtLCBlcXVhbHNGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0LmNvbnRhaW5zKGVsZW0sIGVxdWFsc0Z1bmN0aW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGlzIHF1ZXVlIGlzIGVtcHR5LlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgYW5kIG9ubHkgaWYgdGhpcyBxdWV1ZSBjb250YWlucyBubyBpdGVtczsgZmFsc2VcbiAgICAgKiBvdGhlcndpc2UuXG4gICAgICovXG4gICAgUXVldWUucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3Quc2l6ZSgpIDw9IDA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBvZiB0aGUgZWxlbWVudHMgZnJvbSB0aGlzIHF1ZXVlLlxuICAgICAqL1xuICAgIFF1ZXVlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5saXN0LmNsZWFyKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gb25jZSBmb3IgZWFjaCBlbGVtZW50IHByZXNlbnQgaW4gdGhpcyBxdWV1ZSBpblxuICAgICAqIEZJRk8gb3JkZXIuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QpOip9IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUsIGl0IGlzXG4gICAgICogaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDogdGhlIGVsZW1lbnQgdmFsdWUsIHRvIGJyZWFrIHRoZSBpdGVyYXRpb24geW91IGNhblxuICAgICAqIG9wdGlvbmFsbHkgcmV0dXJuIGZhbHNlLlxuICAgICAqL1xuICAgIFF1ZXVlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIHJldHVybiBRdWV1ZTtcbn0oKSk7IC8vIEVuZCBvZiBxdWV1ZVxuZXhwb3J0cy5kZWZhdWx0ID0gUXVldWU7XG5cbn0se1wiLi9MaW5rZWRMaXN0XCI6OH1dLDEzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xudmFyIGFycmF5cyA9IHJlcXVpcmUoXCIuL2FycmF5c1wiKTtcbnZhciBEaWN0aW9uYXJ5XzEgPSByZXF1aXJlKFwiLi9EaWN0aW9uYXJ5XCIpO1xudmFyIFNldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGVtcHR5IHNldC5cbiAgICAgKiBAY2xhc3MgPHA+QSBzZXQgaXMgYSBkYXRhIHN0cnVjdHVyZSB0aGF0IGNvbnRhaW5zIG5vIGR1cGxpY2F0ZSBpdGVtcy48L3A+XG4gICAgICogPHA+SWYgdGhlIGluc2VydGVkIGVsZW1lbnRzIGFyZSBjdXN0b20gb2JqZWN0cyBhIGZ1bmN0aW9uXG4gICAgICogd2hpY2ggY29udmVydHMgZWxlbWVudHMgdG8gc3RyaW5ncyBtdXN0IGJlIHByb3ZpZGVkLiBFeGFtcGxlOjwvcD5cbiAgICAgKlxuICAgICAqIDxwcmU+XG4gICAgICogZnVuY3Rpb24gcGV0VG9TdHJpbmcocGV0KSB7XG4gICAgICogIHJldHVybiBwZXQubmFtZTtcbiAgICAgKiB9XG4gICAgICogPC9wcmU+XG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6c3RyaW5nPX0gdG9TdHJpbmdGdW5jdGlvbiBvcHRpb25hbCBmdW5jdGlvbiB1c2VkXG4gICAgICogdG8gY29udmVydCBlbGVtZW50cyB0byBzdHJpbmdzLiBJZiB0aGUgZWxlbWVudHMgYXJlbid0IHN0cmluZ3Mgb3IgaWYgdG9TdHJpbmcoKVxuICAgICAqIGlzIG5vdCBhcHByb3ByaWF0ZSwgYSBjdXN0b20gZnVuY3Rpb24gd2hpY2ggcmVjZWl2ZXMgYW4gb2JqZWN0IGFuZCByZXR1cm5zIGFcbiAgICAgKiB1bmlxdWUgc3RyaW5nIG11c3QgYmUgcHJvdmlkZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gU2V0KHRvU3RyaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5kaWN0aW9uYXJ5ID0gbmV3IERpY3Rpb25hcnlfMS5kZWZhdWx0KHRvU3RyaW5nRnVuY3Rpb24pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBzZXQgY29udGFpbnMgdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IGVsZW1lbnQgdG8gc2VhcmNoIGZvci5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgc2V0IGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgZWxlbWVudCxcbiAgICAgKiBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgU2V0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpY3Rpb25hcnkuY29udGFpbnNLZXkoZWxlbWVudCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBzcGVjaWZpZWQgZWxlbWVudCB0byB0aGlzIHNldCBpZiBpdCBpcyBub3QgYWxyZWFkeSBwcmVzZW50LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIGluc2VydC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgc2V0IGRpZCBub3QgYWxyZWFkeSBjb250YWluIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5zKGVsZW1lbnQpIHx8IHV0aWwuaXNVbmRlZmluZWQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGljdGlvbmFyeS5zZXRWYWx1ZShlbGVtZW50LCBlbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhbiBpbnRlcnNlY3Rpb24gYmV0d2VlbiB0aGlzIGFuZCBhbm90aGVyIHNldC5cbiAgICAgKiBSZW1vdmVzIGFsbCB2YWx1ZXMgdGhhdCBhcmUgbm90IHByZXNlbnQgdGhpcyBzZXQgYW5kIHRoZSBnaXZlbiBzZXQuXG4gICAgICogQHBhcmFtIHtjb2xsZWN0aW9ucy5TZXR9IG90aGVyU2V0IG90aGVyIHNldC5cbiAgICAgKi9cbiAgICBTZXQucHJvdG90eXBlLmludGVyc2VjdGlvbiA9IGZ1bmN0aW9uIChvdGhlclNldCkge1xuICAgICAgICB2YXIgc2V0ID0gdGhpcztcbiAgICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoIW90aGVyU2V0LmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgc2V0LnJlbW92ZShlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgdW5pb24gYmV0d2VlbiB0aGlzIGFuZCBhbm90aGVyIHNldC5cbiAgICAgKiBBZGRzIGFsbCB2YWx1ZXMgZnJvbSB0aGUgZ2l2ZW4gc2V0IHRvIHRoaXMgc2V0LlxuICAgICAqIEBwYXJhbSB7Y29sbGVjdGlvbnMuU2V0fSBvdGhlclNldCBvdGhlciBzZXQuXG4gICAgICovXG4gICAgU2V0LnByb3RvdHlwZS51bmlvbiA9IGZ1bmN0aW9uIChvdGhlclNldCkge1xuICAgICAgICB2YXIgc2V0ID0gdGhpcztcbiAgICAgICAgb3RoZXJTZXQuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgc2V0LmFkZChlbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoaXMgYW5kIGFub3RoZXIgc2V0LlxuICAgICAqIFJlbW92ZXMgZnJvbSB0aGlzIHNldCBhbGwgdGhlIHZhbHVlcyB0aGF0IGFyZSBwcmVzZW50IGluIHRoZSBnaXZlbiBzZXQuXG4gICAgICogQHBhcmFtIHtjb2xsZWN0aW9ucy5TZXR9IG90aGVyU2V0IG90aGVyIHNldC5cbiAgICAgKi9cbiAgICBTZXQucHJvdG90eXBlLmRpZmZlcmVuY2UgPSBmdW5jdGlvbiAob3RoZXJTZXQpIHtcbiAgICAgICAgdmFyIHNldCA9IHRoaXM7XG4gICAgICAgIG90aGVyU2V0LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHNldC5yZW1vdmUoZWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gc2V0IGNvbnRhaW5zIGFsbCB0aGUgZWxlbWVudHMgaW4gdGhpcyBzZXQuXG4gICAgICogQHBhcmFtIHtjb2xsZWN0aW9ucy5TZXR9IG90aGVyU2V0IG90aGVyIHNldC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgc2V0IGlzIGEgc3Vic2V0IG9mIHRoZSBnaXZlbiBzZXQuXG4gICAgICovXG4gICAgU2V0LnByb3RvdHlwZS5pc1N1YnNldE9mID0gZnVuY3Rpb24gKG90aGVyU2V0KSB7XG4gICAgICAgIGlmICh0aGlzLnNpemUoKSA+IG90aGVyU2V0LnNpemUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc1N1YiA9IHRydWU7XG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFvdGhlclNldC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGlzU3ViID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaXNTdWI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBzcGVjaWZpZWQgZWxlbWVudCBmcm9tIHRoaXMgc2V0IGlmIGl0IGlzIHByZXNlbnQuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGlzIHNldCBjb250YWluZWQgdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgICAqL1xuICAgIFNldC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpY3Rpb25hcnkucmVtb3ZlKGVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBvbmNlIGZvciBlYWNoIGVsZW1lbnRcbiAgICAgKiBwcmVzZW50IGluIHRoaXMgc2V0LlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0KToqfSBjYWxsYmFjayBmdW5jdGlvbiB0byBleGVjdXRlLCBpdCBpc1xuICAgICAqIGludm9rZWQgd2l0aCBvbmUgYXJndW1lbnRzOiB0aGUgZWxlbWVudC4gVG8gYnJlYWsgdGhlIGl0ZXJhdGlvbiB5b3UgY2FuXG4gICAgICogb3B0aW9uYWxseSByZXR1cm4gZmFsc2UuXG4gICAgICovXG4gICAgU2V0LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZGljdGlvbmFyeS5mb3JFYWNoKGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sodik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgZWxlbWVudHMgaW4gdGhpcyBzZXQgaW4gYXJiaXRyYXJ5IG9yZGVyLlxuICAgICAqIEByZXR1cm4ge0FycmF5fSBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgZWxlbWVudHMgaW4gdGhpcyBzZXQuXG4gICAgICovXG4gICAgU2V0LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaWN0aW9uYXJ5LnZhbHVlcygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgc2V0IGNvbnRhaW5zIG5vIGVsZW1lbnRzLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhpcyBzZXQgY29udGFpbnMgbm8gZWxlbWVudHMuXG4gICAgICovXG4gICAgU2V0LnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaWN0aW9uYXJ5LmlzRW1wdHkoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGlzIHNldC5cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhpcyBzZXQuXG4gICAgICovXG4gICAgU2V0LnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaWN0aW9uYXJ5LnNpemUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIG9mIHRoZSBlbGVtZW50cyBmcm9tIHRoaXMgc2V0LlxuICAgICAqL1xuICAgIFNldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGljdGlvbmFyeS5jbGVhcigpO1xuICAgIH07XG4gICAgLypcbiAgICAqIFByb3ZpZGVzIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIGZvciBkaXNwbGF5XG4gICAgKi9cbiAgICBTZXQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJyYXlzLnRvU3RyaW5nKHRoaXMudG9BcnJheSgpKTtcbiAgICB9O1xuICAgIHJldHVybiBTZXQ7XG59KCkpOyAvLyBlbmQgb2YgU2V0XG5leHBvcnRzLmRlZmF1bHQgPSBTZXQ7XG5cbn0se1wiLi9EaWN0aW9uYXJ5XCI6NCxcIi4vYXJyYXlzXCI6MTUsXCIuL3V0aWxcIjoxNn1dLDE0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIExpbmtlZExpc3RfMSA9IHJlcXVpcmUoXCIuL0xpbmtlZExpc3RcIik7XG52YXIgU3RhY2sgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBlbXB0eSBTdGFjay5cbiAgICAgKiBAY2xhc3MgQSBTdGFjayBpcyBhIExhc3QtSW4tRmlyc3QtT3V0IChMSUZPKSBkYXRhIHN0cnVjdHVyZSwgdGhlIGxhc3RcbiAgICAgKiBlbGVtZW50IGFkZGVkIHRvIHRoZSBzdGFjayB3aWxsIGJlIHRoZSBmaXJzdCBvbmUgdG8gYmUgcmVtb3ZlZC4gVGhpc1xuICAgICAqIGltcGxlbWVudGF0aW9uIHVzZXMgYSBsaW5rZWQgbGlzdCBhcyBhIGNvbnRhaW5lci5cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBTdGFjaygpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gbmV3IExpbmtlZExpc3RfMS5kZWZhdWx0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFB1c2hlcyBhbiBpdGVtIG9udG8gdGhlIHRvcCBvZiB0aGlzIHN0YWNrLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtIHRoZSBlbGVtZW50IHRvIGJlIHB1c2hlZCBvbnRvIHRoaXMgc3RhY2suXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZWxlbWVudCB3YXMgcHVzaGVkIG9yIGZhbHNlIGlmIGl0IGlzIHVuZGVmaW5lZC5cbiAgICAgKi9cbiAgICBTdGFjay5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QuYWRkKGVsZW0sIDApO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUHVzaGVzIGFuIGl0ZW0gb250byB0aGUgdG9wIG9mIHRoaXMgc3RhY2suXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW0gdGhlIGVsZW1lbnQgdG8gYmUgcHVzaGVkIG9udG8gdGhpcyBzdGFjay5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBlbGVtZW50IHdhcyBwdXNoZWQgb3IgZmFsc2UgaWYgaXQgaXMgdW5kZWZpbmVkLlxuICAgICAqL1xuICAgIFN0YWNrLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0LmFkZChlbGVtLCAwKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIG9iamVjdCBhdCB0aGUgdG9wIG9mIHRoaXMgc3RhY2sgYW5kIHJldHVybnMgdGhhdCBvYmplY3QuXG4gICAgICogQHJldHVybiB7Kn0gdGhlIG9iamVjdCBhdCB0aGUgdG9wIG9mIHRoaXMgc3RhY2sgb3IgdW5kZWZpbmVkIGlmIHRoZVxuICAgICAqIHN0YWNrIGlzIGVtcHR5LlxuICAgICAqL1xuICAgIFN0YWNrLnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QucmVtb3ZlRWxlbWVudEF0SW5kZXgoMCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBMb29rcyBhdCB0aGUgb2JqZWN0IGF0IHRoZSB0b3Agb2YgdGhpcyBzdGFjayB3aXRob3V0IHJlbW92aW5nIGl0IGZyb20gdGhlXG4gICAgICogc3RhY2suXG4gICAgICogQHJldHVybiB7Kn0gdGhlIG9iamVjdCBhdCB0aGUgdG9wIG9mIHRoaXMgc3RhY2sgb3IgdW5kZWZpbmVkIGlmIHRoZVxuICAgICAqIHN0YWNrIGlzIGVtcHR5LlxuICAgICAqL1xuICAgIFN0YWNrLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0LmZpcnN0KCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhpcyBzdGFjay5cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhpcyBzdGFjay5cbiAgICAgKi9cbiAgICBTdGFjay5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5zaXplKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBzdGFjayBjb250YWlucyB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAgICogPHA+SWYgdGhlIGVsZW1lbnRzIGluc2lkZSB0aGlzIHN0YWNrIGFyZVxuICAgICAqIG5vdCBjb21wYXJhYmxlIHdpdGggdGhlID09PSBvcGVyYXRvciwgYSBjdXN0b20gZXF1YWxzIGZ1bmN0aW9uIHNob3VsZCBiZVxuICAgICAqIHByb3ZpZGVkIHRvIHBlcmZvcm0gc2VhcmNoZXMsIHRoZSBmdW5jdGlvbiBtdXN0IHJlY2VpdmUgdHdvIGFyZ3VtZW50cyBhbmRcbiAgICAgKiByZXR1cm4gdHJ1ZSBpZiB0aGV5IGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLiBFeGFtcGxlOjwvcD5cbiAgICAgKlxuICAgICAqIDxwcmU+XG4gICAgICogY29uc3QgcGV0c0FyZUVxdWFsQnlOYW1lIChwZXQxLCBwZXQyKSB7XG4gICAgICogIHJldHVybiBwZXQxLm5hbWUgPT09IHBldDIubmFtZTtcbiAgICAgKiB9XG4gICAgICogPC9wcmU+XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW0gZWxlbWVudCB0byBzZWFyY2ggZm9yLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCk6Ym9vbGVhbj19IGVxdWFsc0Z1bmN0aW9uIG9wdGlvbmFsXG4gICAgICogZnVuY3Rpb24gdG8gY2hlY2sgaWYgdHdvIGVsZW1lbnRzIGFyZSBlcXVhbC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoaXMgc3RhY2sgY29udGFpbnMgdGhlIHNwZWNpZmllZCBlbGVtZW50LFxuICAgICAqIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBTdGFjay5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoZWxlbSwgZXF1YWxzRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5jb250YWlucyhlbGVtLCBlcXVhbHNGdW5jdGlvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhpcyBzdGFjayBpcyBlbXB0eS5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIGFuZCBvbmx5IGlmIHRoaXMgc3RhY2sgY29udGFpbnMgbm8gaXRlbXM7IGZhbHNlXG4gICAgICogb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIFN0YWNrLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0LmlzRW1wdHkoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIG9mIHRoZSBlbGVtZW50cyBmcm9tIHRoaXMgc3RhY2suXG4gICAgICovXG4gICAgU3RhY2sucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxpc3QuY2xlYXIoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBvbmNlIGZvciBlYWNoIGVsZW1lbnQgcHJlc2VudCBpbiB0aGlzIHN0YWNrIGluXG4gICAgICogTElGTyBvcmRlci5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCk6Kn0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSwgaXQgaXNcbiAgICAgKiBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OiB0aGUgZWxlbWVudCB2YWx1ZSwgdG8gYnJlYWsgdGhlIGl0ZXJhdGlvbiB5b3UgY2FuXG4gICAgICogb3B0aW9uYWxseSByZXR1cm4gZmFsc2UuXG4gICAgICovXG4gICAgU3RhY2sucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5saXN0LmZvckVhY2goY2FsbGJhY2spO1xuICAgIH07XG4gICAgcmV0dXJuIFN0YWNrO1xufSgpKTsgLy8gRW5kIG9mIHN0YWNrXG5leHBvcnRzLmRlZmF1bHQgPSBTdGFjaztcblxufSx7XCIuL0xpbmtlZExpc3RcIjo4fV0sMTU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG4vKipcbiAqIFJldHVybnMgdGhlIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIHRoZSBzcGVjaWZpZWQgaXRlbVxuICogd2l0aGluIHRoZSBzcGVjaWZpZWQgYXJyYXkuNFxuICogQHBhcmFtIHsqfSBhcnJheSB0aGUgYXJyYXkgaW4gd2hpY2ggdG8gc2VhcmNoIHRoZSBlbGVtZW50LlxuICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gdGhlIGVsZW1lbnQgdG8gc2VhcmNoLlxuICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KTpib29sZWFuPX0gZXF1YWxzRnVuY3Rpb24gb3B0aW9uYWwgZnVuY3Rpb24gdXNlZCB0b1xuICogY2hlY2sgZXF1YWxpdHkgYmV0d2VlbiAyIGVsZW1lbnRzLlxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgdGhlIHNwZWNpZmllZCBlbGVtZW50XG4gKiB3aXRoaW4gdGhlIHNwZWNpZmllZCBhcnJheSwgb3IgLTEgaWYgbm90IGZvdW5kLlxuICovXG5mdW5jdGlvbiBpbmRleE9mKGFycmF5LCBpdGVtLCBlcXVhbHNGdW5jdGlvbikge1xuICAgIHZhciBlcXVhbHMgPSBlcXVhbHNGdW5jdGlvbiB8fCB1dGlsLmRlZmF1bHRFcXVhbHM7XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlcXVhbHMoYXJyYXlbaV0sIGl0ZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5leHBvcnRzLmluZGV4T2YgPSBpbmRleE9mO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBwb3NpdGlvbiBvZiB0aGUgbGFzdCBvY2N1cnJlbmNlIG9mIHRoZSBzcGVjaWZpZWQgZWxlbWVudFxuICogd2l0aGluIHRoZSBzcGVjaWZpZWQgYXJyYXkuXG4gKiBAcGFyYW0geyp9IGFycmF5IHRoZSBhcnJheSBpbiB3aGljaCB0byBzZWFyY2ggdGhlIGVsZW1lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gaXRlbSB0aGUgZWxlbWVudCB0byBzZWFyY2guXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpOmJvb2xlYW49fSBlcXVhbHNGdW5jdGlvbiBvcHRpb25hbCBmdW5jdGlvbiB1c2VkIHRvXG4gKiBjaGVjayBlcXVhbGl0eSBiZXR3ZWVuIDIgZWxlbWVudHMuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBwb3NpdGlvbiBvZiB0aGUgbGFzdCBvY2N1cnJlbmNlIG9mIHRoZSBzcGVjaWZpZWQgZWxlbWVudFxuICogd2l0aGluIHRoZSBzcGVjaWZpZWQgYXJyYXkgb3IgLTEgaWYgbm90IGZvdW5kLlxuICovXG5mdW5jdGlvbiBsYXN0SW5kZXhPZihhcnJheSwgaXRlbSwgZXF1YWxzRnVuY3Rpb24pIHtcbiAgICB2YXIgZXF1YWxzID0gZXF1YWxzRnVuY3Rpb24gfHwgdXRpbC5kZWZhdWx0RXF1YWxzO1xuICAgIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IGxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmIChlcXVhbHMoYXJyYXlbaV0sIGl0ZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5leHBvcnRzLmxhc3RJbmRleE9mID0gbGFzdEluZGV4T2Y7XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIGFycmF5IGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAqIEBwYXJhbSB7Kn0gYXJyYXkgdGhlIGFycmF5IGluIHdoaWNoIHRvIHNlYXJjaCB0aGUgZWxlbWVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIHRoZSBlbGVtZW50IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCk6Ym9vbGVhbj19IGVxdWFsc0Z1bmN0aW9uIG9wdGlvbmFsIGZ1bmN0aW9uIHRvXG4gKiBjaGVjayBlcXVhbGl0eSBiZXR3ZWVuIDIgZWxlbWVudHMuXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBzcGVjaWZpZWQgYXJyYXkgY29udGFpbnMgdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICovXG5mdW5jdGlvbiBjb250YWlucyhhcnJheSwgaXRlbSwgZXF1YWxzRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gaW5kZXhPZihhcnJheSwgaXRlbSwgZXF1YWxzRnVuY3Rpb24pID49IDA7XG59XG5leHBvcnRzLmNvbnRhaW5zID0gY29udGFpbnM7XG4vKipcbiAqIFJlbW92ZXMgdGhlIGZpcnN0IG9jdXJyZW5jZSBvZiB0aGUgc3BlY2lmaWVkIGVsZW1lbnQgZnJvbSB0aGUgc3BlY2lmaWVkIGFycmF5LlxuICogQHBhcmFtIHsqfSBhcnJheSB0aGUgYXJyYXkgaW4gd2hpY2ggdG8gc2VhcmNoIGVsZW1lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gaXRlbSB0aGUgZWxlbWVudCB0byBzZWFyY2guXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpOmJvb2xlYW49fSBlcXVhbHNGdW5jdGlvbiBvcHRpb25hbCBmdW5jdGlvbiB0b1xuICogY2hlY2sgZXF1YWxpdHkgYmV0d2VlbiAyIGVsZW1lbnRzLlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXJyYXkgY2hhbmdlZCBhZnRlciB0aGlzIGNhbGwuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZShhcnJheSwgaXRlbSwgZXF1YWxzRnVuY3Rpb24pIHtcbiAgICB2YXIgaW5kZXggPSBpbmRleE9mKGFycmF5LCBpdGVtLCBlcXVhbHNGdW5jdGlvbik7XG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZTtcbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSBzcGVjaWZpZWQgYXJyYXkgZXF1YWxcbiAqIHRvIHRoZSBzcGVjaWZpZWQgb2JqZWN0LlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgdGhlIGFycmF5IGluIHdoaWNoIHRvIGRldGVybWluZSB0aGUgZnJlcXVlbmN5IG9mIHRoZSBlbGVtZW50LlxuICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gdGhlIGVsZW1lbnQgd2hvc2UgZnJlcXVlbmN5IGlzIHRvIGJlIGRldGVybWluZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpOmJvb2xlYW49fSBlcXVhbHNGdW5jdGlvbiBvcHRpb25hbCBmdW5jdGlvbiB1c2VkIHRvXG4gKiBjaGVjayBlcXVhbGl0eSBiZXR3ZWVuIDIgZWxlbWVudHMuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIHNwZWNpZmllZCBhcnJheVxuICogZXF1YWwgdG8gdGhlIHNwZWNpZmllZCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGZyZXF1ZW5jeShhcnJheSwgaXRlbSwgZXF1YWxzRnVuY3Rpb24pIHtcbiAgICB2YXIgZXF1YWxzID0gZXF1YWxzRnVuY3Rpb24gfHwgdXRpbC5kZWZhdWx0RXF1YWxzO1xuICAgIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgdmFyIGZyZXEgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGVxdWFscyhhcnJheVtpXSwgaXRlbSkpIHtcbiAgICAgICAgICAgIGZyZXErKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnJlcTtcbn1cbmV4cG9ydHMuZnJlcXVlbmN5ID0gZnJlcXVlbmN5O1xuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byBzcGVjaWZpZWQgYXJyYXlzIGFyZSBlcXVhbCB0byBvbmUgYW5vdGhlci5cbiAqIFR3byBhcnJheXMgYXJlIGNvbnNpZGVyZWQgZXF1YWwgaWYgYm90aCBhcnJheXMgY29udGFpbiB0aGUgc2FtZSBudW1iZXJcbiAqIG9mIGVsZW1lbnRzLCBhbmQgYWxsIGNvcnJlc3BvbmRpbmcgcGFpcnMgb2YgZWxlbWVudHMgaW4gdGhlIHR3b1xuICogYXJyYXlzIGFyZSBlcXVhbCBhbmQgYXJlIGluIHRoZSBzYW1lIG9yZGVyLlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkxIG9uZSBhcnJheSB0byBiZSB0ZXN0ZWQgZm9yIGVxdWFsaXR5LlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkyIHRoZSBvdGhlciBhcnJheSB0byBiZSB0ZXN0ZWQgZm9yIGVxdWFsaXR5LlxuICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KTpib29sZWFuPX0gZXF1YWxzRnVuY3Rpb24gb3B0aW9uYWwgZnVuY3Rpb24gdXNlZCB0b1xuICogY2hlY2sgZXF1YWxpdHkgYmV0d2VlbiBlbGVtZW1lbnRzIGluIHRoZSBhcnJheXMuXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSB0d28gYXJyYXlzIGFyZSBlcXVhbFxuICovXG5mdW5jdGlvbiBlcXVhbHMoYXJyYXkxLCBhcnJheTIsIGVxdWFsc0Z1bmN0aW9uKSB7XG4gICAgdmFyIGVxdWFscyA9IGVxdWFsc0Z1bmN0aW9uIHx8IHV0aWwuZGVmYXVsdEVxdWFscztcbiAgICBpZiAoYXJyYXkxLmxlbmd0aCAhPT0gYXJyYXkyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBsZW5ndGggPSBhcnJheTEubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFlcXVhbHMoYXJyYXkxW2ldLCBhcnJheTJbaV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnRzLmVxdWFscyA9IGVxdWFscztcbi8qKlxuICogUmV0dXJucyBzaGFsbG93IGEgY29weSBvZiB0aGUgc3BlY2lmaWVkIGFycmF5LlxuICogQHBhcmFtIHsqfSBhcnJheSB0aGUgYXJyYXkgdG8gY29weS5cbiAqIEByZXR1cm4ge0FycmF5fSBhIGNvcHkgb2YgdGhlIHNwZWNpZmllZCBhcnJheVxuICovXG5mdW5jdGlvbiBjb3B5KGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5LmNvbmNhdCgpO1xufVxuZXhwb3J0cy5jb3B5ID0gY29weTtcbi8qKlxuICogU3dhcHMgdGhlIGVsZW1lbnRzIGF0IHRoZSBzcGVjaWZpZWQgcG9zaXRpb25zIGluIHRoZSBzcGVjaWZpZWQgYXJyYXkuXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgaW4gd2hpY2ggdG8gc3dhcCBlbGVtZW50cy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpIHRoZSBpbmRleCBvZiBvbmUgZWxlbWVudCB0byBiZSBzd2FwcGVkLlxuICogQHBhcmFtIHtudW1iZXJ9IGogdGhlIGluZGV4IG9mIHRoZSBvdGhlciBlbGVtZW50IHRvIGJlIHN3YXBwZWQuXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBhcnJheSBpcyBkZWZpbmVkIGFuZCB0aGUgaW5kZXhlcyBhcmUgdmFsaWQuXG4gKi9cbmZ1bmN0aW9uIHN3YXAoYXJyYXksIGksIGopIHtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBhcnJheS5sZW5ndGggfHwgaiA8IDAgfHwgaiA+PSBhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgdGVtcCA9IGFycmF5W2ldO1xuICAgIGFycmF5W2ldID0gYXJyYXlbal07XG4gICAgYXJyYXlbal0gPSB0ZW1wO1xuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5zd2FwID0gc3dhcDtcbmZ1bmN0aW9uIHRvU3RyaW5nKGFycmF5KSB7XG4gICAgcmV0dXJuICdbJyArIGFycmF5LnRvU3RyaW5nKCkgKyAnXSc7XG59XG5leHBvcnRzLnRvU3RyaW5nID0gdG9TdHJpbmc7XG4vKipcbiAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBvbmNlIGZvciBlYWNoIGVsZW1lbnQgcHJlc2VudCBpbiB0aGlzIGFycmF5XG4gKiBzdGFydGluZyBmcm9tIGluZGV4IDAgdG8gbGVuZ3RoIC0gMS5cbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSBpbiB3aGljaCB0byBpdGVyYXRlLlxuICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QpOip9IGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUsIGl0IGlzXG4gKiBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OiB0aGUgZWxlbWVudCB2YWx1ZSwgdG8gYnJlYWsgdGhlIGl0ZXJhdGlvbiB5b3UgY2FuXG4gKiBvcHRpb25hbGx5IHJldHVybiBmYWxzZS5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgICBmb3IgKHZhciBfaSA9IDAsIGFycmF5XzEgPSBhcnJheTsgX2kgPCBhcnJheV8xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgZWxlID0gYXJyYXlfMVtfaV07XG4gICAgICAgIGlmIChjYWxsYmFjayhlbGUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5mb3JFYWNoID0gZm9yRWFjaDtcblxufSx7XCIuL3V0aWxcIjoxNn1dLDE2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIF9oYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5leHBvcnRzLmhhcyA9IGZ1bmN0aW9uIChvYmosIHByb3ApIHtcbiAgICByZXR1cm4gX2hhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn07XG4vKipcbiAqIERlZmF1bHQgZnVuY3Rpb24gdG8gY29tcGFyZSBlbGVtZW50IG9yZGVyLlxuICogQGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGRlZmF1bHRDb21wYXJlKGEsIGIpIHtcbiAgICBpZiAoYSA8IGIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBlbHNlIGlmIChhID09PSBiKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0Q29tcGFyZSA9IGRlZmF1bHRDb21wYXJlO1xuLyoqXG4gKiBEZWZhdWx0IGZ1bmN0aW9uIHRvIHRlc3QgZXF1YWxpdHkuXG4gKiBAZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gZGVmYXVsdEVxdWFscyhhLCBiKSB7XG4gICAgcmV0dXJuIGEgPT09IGI7XG59XG5leHBvcnRzLmRlZmF1bHRFcXVhbHMgPSBkZWZhdWx0RXF1YWxzO1xuLyoqXG4gKiBEZWZhdWx0IGZ1bmN0aW9uIHRvIGNvbnZlcnQgYW4gb2JqZWN0IHRvIGEgc3RyaW5nLlxuICogQGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGRlZmF1bHRUb1N0cmluZyhpdGVtKSB7XG4gICAgaWYgKGl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICdDT0xMRUNUSU9OX05VTEwnO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1VuZGVmaW5lZChpdGVtKSkge1xuICAgICAgICByZXR1cm4gJ0NPTExFQ1RJT05fVU5ERUZJTkVEJztcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNTdHJpbmcoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuICckcycgKyBpdGVtO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICckbycgKyBpdGVtLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0VG9TdHJpbmcgPSBkZWZhdWx0VG9TdHJpbmc7XG4vKipcbiAqIEpvaW5zIGFsbCB0aGUgcHJvcGVyaWVzIG9mIHRoZSBvYmplY3QgdXNpbmcgdGhlIHByb3ZpZGVkIGpvaW4gc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIG1ha2VTdHJpbmcoaXRlbSwgam9pbikge1xuICAgIGlmIChqb2luID09PSB2b2lkIDApIHsgam9pbiA9ICcsJzsgfVxuICAgIGlmIChpdGVtID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnQ09MTEVDVElPTl9OVUxMJztcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNVbmRlZmluZWQoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuICdDT0xMRUNUSU9OX1VOREVGSU5FRCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzU3RyaW5nKGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiBpdGVtLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgdG9yZXQgPSAneyc7XG4gICAgICAgIHZhciBmaXJzdCA9IHRydWU7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gaXRlbSkge1xuICAgICAgICAgICAgaWYgKGV4cG9ydHMuaGFzKGl0ZW0sIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b3JldCA9IHRvcmV0ICsgam9pbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdG9yZXQgPSB0b3JldCArIHByb3AgKyAnOicgKyBpdGVtW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3JldCArICd9JztcbiAgICB9XG59XG5leHBvcnRzLm1ha2VTdHJpbmcgPSBtYWtlU3RyaW5nO1xuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGFyZ3VtZW50IGlzIGEgZnVuY3Rpb24uXG4gKiBAZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgZnVuYykgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGFyZ3VtZW50IGlzIHVuZGVmaW5lZC5cbiAqIEBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvYmopIHtcbiAgICByZXR1cm4gKHR5cGVvZiBvYmopID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBhcmd1bWVudCBpcyBhIHN0cmluZy5cbiAqIEBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBpc1N0cmluZyhvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufVxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuLyoqXG4gKiBSZXZlcnNlcyBhIGNvbXBhcmUgZnVuY3Rpb24uXG4gKiBAZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gcmV2ZXJzZUNvbXBhcmVGdW5jdGlvbihjb21wYXJlRnVuY3Rpb24pIHtcbiAgICBpZiAoaXNVbmRlZmluZWQoY29tcGFyZUZ1bmN0aW9uKSB8fCAhaXNGdW5jdGlvbihjb21wYXJlRnVuY3Rpb24pKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgaWYgKGEgPCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhID09PSBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGQsIHYpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJlRnVuY3Rpb24oZCwgdikgKiAtMTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnRzLnJldmVyc2VDb21wYXJlRnVuY3Rpb24gPSByZXZlcnNlQ29tcGFyZUZ1bmN0aW9uO1xuLyoqXG4gKiBSZXR1cm5zIGFuIGVxdWFsIGZ1bmN0aW9uIGdpdmVuIGEgY29tcGFyZSBmdW5jdGlvbi5cbiAqIEBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBjb21wYXJlVG9FcXVhbHMoY29tcGFyZUZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBjb21wYXJlRnVuY3Rpb24oYSwgYikgPT09IDA7XG4gICAgfTtcbn1cbmV4cG9ydHMuY29tcGFyZVRvRXF1YWxzID0gY29tcGFyZVRvRXF1YWxzO1xuXG59LHt9XSxcInR5cGVzY3JpcHQtY29sbGVjdGlvbnNcIjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIENvcHlyaWdodCAyMDEzIEJhc2FyYXQgQWxpIFN5ZWQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgTUlUIG9wZW4gc291cmNlIGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuLy9cbi8vIE9yZ2luYWwgamF2YXNjcmlwdCBjb2RlIHdhcyBieSBNYXVyaWNpbyBTYW50b3Ncbi8vXG52YXIgX2FycmF5cyA9IHJlcXVpcmUoXCIuL2FycmF5c1wiKTtcbmV4cG9ydHMuYXJyYXlzID0gX2FycmF5cztcbnZhciBCYWdfMSA9IHJlcXVpcmUoXCIuL0JhZ1wiKTtcbmV4cG9ydHMuQmFnID0gQmFnXzEuZGVmYXVsdDtcbnZhciBCU1RyZWVfMSA9IHJlcXVpcmUoXCIuL0JTVHJlZVwiKTtcbmV4cG9ydHMuQlNUcmVlID0gQlNUcmVlXzEuZGVmYXVsdDtcbnZhciBCU1RyZWVLVl8xID0gcmVxdWlyZShcIi4vQlNUcmVlS1ZcIik7XG5leHBvcnRzLkJTVHJlZUtWID0gQlNUcmVlS1ZfMS5kZWZhdWx0O1xudmFyIERpY3Rpb25hcnlfMSA9IHJlcXVpcmUoXCIuL0RpY3Rpb25hcnlcIik7XG5leHBvcnRzLkRpY3Rpb25hcnkgPSBEaWN0aW9uYXJ5XzEuZGVmYXVsdDtcbnZhciBIZWFwXzEgPSByZXF1aXJlKFwiLi9IZWFwXCIpO1xuZXhwb3J0cy5IZWFwID0gSGVhcF8xLmRlZmF1bHQ7XG52YXIgTGlua2VkRGljdGlvbmFyeV8xID0gcmVxdWlyZShcIi4vTGlua2VkRGljdGlvbmFyeVwiKTtcbmV4cG9ydHMuTGlua2VkRGljdGlvbmFyeSA9IExpbmtlZERpY3Rpb25hcnlfMS5kZWZhdWx0O1xudmFyIExpbmtlZExpc3RfMSA9IHJlcXVpcmUoXCIuL0xpbmtlZExpc3RcIik7XG5leHBvcnRzLkxpbmtlZExpc3QgPSBMaW5rZWRMaXN0XzEuZGVmYXVsdDtcbnZhciBNdWx0aURpY3Rpb25hcnlfMSA9IHJlcXVpcmUoXCIuL011bHRpRGljdGlvbmFyeVwiKTtcbmV4cG9ydHMuTXVsdGlEaWN0aW9uYXJ5ID0gTXVsdGlEaWN0aW9uYXJ5XzEuZGVmYXVsdDtcbnZhciBGYWN0b3J5RGljdGlvbmFyeV8xID0gcmVxdWlyZShcIi4vRmFjdG9yeURpY3Rpb25hcnlcIik7XG5leHBvcnRzLkZhY3RvcnlEaWN0aW9uYXJ5ID0gRmFjdG9yeURpY3Rpb25hcnlfMS5kZWZhdWx0O1xudmFyIEZhY3RvcnlEaWN0aW9uYXJ5XzIgPSByZXF1aXJlKFwiLi9GYWN0b3J5RGljdGlvbmFyeVwiKTtcbmV4cG9ydHMuRGVmYXVsdERpY3Rpb25hcnkgPSBGYWN0b3J5RGljdGlvbmFyeV8yLmRlZmF1bHQ7XG52YXIgUXVldWVfMSA9IHJlcXVpcmUoXCIuL1F1ZXVlXCIpO1xuZXhwb3J0cy5RdWV1ZSA9IFF1ZXVlXzEuZGVmYXVsdDtcbnZhciBQcmlvcml0eVF1ZXVlXzEgPSByZXF1aXJlKFwiLi9Qcmlvcml0eVF1ZXVlXCIpO1xuZXhwb3J0cy5Qcmlvcml0eVF1ZXVlID0gUHJpb3JpdHlRdWV1ZV8xLmRlZmF1bHQ7XG52YXIgU2V0XzEgPSByZXF1aXJlKFwiLi9TZXRcIik7XG5leHBvcnRzLlNldCA9IFNldF8xLmRlZmF1bHQ7XG52YXIgU3RhY2tfMSA9IHJlcXVpcmUoXCIuL1N0YWNrXCIpO1xuZXhwb3J0cy5TdGFjayA9IFN0YWNrXzEuZGVmYXVsdDtcbnZhciBNdWx0aVJvb3RUcmVlXzEgPSByZXF1aXJlKFwiLi9NdWx0aVJvb3RUcmVlXCIpO1xuZXhwb3J0cy5NdWx0aVJvb3RUcmVlID0gTXVsdGlSb290VHJlZV8xLmRlZmF1bHQ7XG52YXIgX3V0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuZXhwb3J0cy51dGlsID0gX3V0aWw7XG5cbn0se1wiLi9CU1RyZWVcIjoxLFwiLi9CU1RyZWVLVlwiOjIsXCIuL0JhZ1wiOjMsXCIuL0RpY3Rpb25hcnlcIjo0LFwiLi9GYWN0b3J5RGljdGlvbmFyeVwiOjUsXCIuL0hlYXBcIjo2LFwiLi9MaW5rZWREaWN0aW9uYXJ5XCI6NyxcIi4vTGlua2VkTGlzdFwiOjgsXCIuL011bHRpRGljdGlvbmFyeVwiOjksXCIuL011bHRpUm9vdFRyZWVcIjoxMCxcIi4vUHJpb3JpdHlRdWV1ZVwiOjExLFwiLi9RdWV1ZVwiOjEyLFwiLi9TZXRcIjoxMyxcIi4vU3RhY2tcIjoxNCxcIi4vYXJyYXlzXCI6MTUsXCIuL3V0aWxcIjoxNn1dfSx7fSxbXSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0prYVhOMEwyeHBZaTlDVTFSeVpXVXVhbk1pTENKa2FYTjBMMnhwWWk5Q1UxUnlaV1ZMVmk1cWN5SXNJbVJwYzNRdmJHbGlMMEpoWnk1cWN5SXNJbVJwYzNRdmJHbGlMMFJwWTNScGIyNWhjbmt1YW5NaUxDSmthWE4wTDJ4cFlpOUdZV04wYjNKNVJHbGpkR2x2Ym1GeWVTNXFjeUlzSW1ScGMzUXZiR2xpTDBobFlYQXVhbk1pTENKa2FYTjBMMnhwWWk5TWFXNXJaV1JFYVdOMGFXOXVZWEo1TG1weklpd2laR2x6ZEM5c2FXSXZUR2x1YTJWa1RHbHpkQzVxY3lJc0ltUnBjM1F2YkdsaUwwMTFiSFJwUkdsamRHbHZibUZ5ZVM1cWN5SXNJbVJwYzNRdmJHbGlMMDExYkhScFVtOXZkRlJ5WldVdWFuTWlMQ0prYVhOMEwyeHBZaTlRY21sdmNtbDBlVkYxWlhWbExtcHpJaXdpWkdsemRDOXNhV0l2VVhWbGRXVXVhbk1pTENKa2FYTjBMMnhwWWk5VFpYUXVhbk1pTENKa2FYTjBMMnhwWWk5VGRHRmpheTVxY3lJc0ltUnBjM1F2YkdsaUwyRnljbUY1Y3k1cWN5SXNJbVJwYzNRdmJHbGlMM1YwYVd3dWFuTWlMQ0prYVhOMEwyeHBZaTlwYm1SbGVDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVR0QlEwRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTNCRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlF5OWFRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEzaE1RVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEYUV4Qk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMnBHUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTJ4UFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMnBRUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkROVmhCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRM2hMUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOcVlVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRMMGRCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU16UjBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEZUV0Qk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEzUkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTjRTMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUXpWSlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU0lzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUtHWjFibU4wYVc5dUlHVW9kQ3h1TEhJcGUyWjFibU4wYVc5dUlITW9ieXgxS1h0cFppZ2hibHR2WFNsN2FXWW9JWFJiYjEwcGUzWmhjaUJoUFhSNWNHVnZaaUJ5WlhGMWFYSmxQVDFjSW1aMWJtTjBhVzl1WENJbUpuSmxjWFZwY21VN2FXWW9JWFVtSm1FcGNtVjBkWEp1SUdFb2J5d2hNQ2s3YVdZb2FTbHlaWFIxY200Z2FTaHZMQ0V3S1R0MllYSWdaajF1WlhjZ1JYSnliM0lvWENKRFlXNXViM1FnWm1sdVpDQnRiMlIxYkdVZ0oxd2lLMjhyWENJblhDSXBPM1JvY205M0lHWXVZMjlrWlQxY0lrMVBSRlZNUlY5T1QxUmZSazlWVGtSY0lpeG1mWFpoY2lCc1BXNWJiMTA5ZTJWNGNHOXlkSE02ZTMxOU8zUmJiMTFiTUYwdVkyRnNiQ2hzTG1WNGNHOXlkSE1zWm5WdVkzUnBiMjRvWlNsN2RtRnlJRzQ5ZEZ0dlhWc3hYVnRsWFR0eVpYUjFjbTRnY3lodVAyNDZaU2w5TEd3c2JDNWxlSEJ2Y25SekxHVXNkQ3h1TEhJcGZYSmxkSFZ5YmlCdVcyOWRMbVY0Y0c5eWRITjlkbUZ5SUdrOWRIbHdaVzltSUhKbGNYVnBjbVU5UFZ3aVpuVnVZM1JwYjI1Y0lpWW1jbVZ4ZFdseVpUdG1iM0lvZG1GeUlHODlNRHR2UEhJdWJHVnVaM1JvTzI4ckt5bHpLSEpiYjEwcE8zSmxkSFZ5YmlCemZTa2lMQ0pjSW5WelpTQnpkSEpwWTNSY0lqdGNiblpoY2lCZlgyVjRkR1Z1WkhNZ1BTQW9kR2hwY3lBbUppQjBhR2x6TGw5ZlpYaDBaVzVrY3lrZ2ZId2dLR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0IyWVhJZ1pYaDBaVzVrVTNSaGRHbGpjeUE5SUU5aWFtVmpkQzV6WlhSUWNtOTBiM1I1Y0dWUFppQjhmRnh1SUNBZ0lDQWdJQ0FvZXlCZlgzQnliM1J2WDE4NklGdGRJSDBnYVc1emRHRnVZMlZ2WmlCQmNuSmhlU0FtSmlCbWRXNWpkR2x2YmlBb1pDd2dZaWtnZXlCa0xsOWZjSEp2ZEc5Zlh5QTlJR0k3SUgwcElIeDhYRzRnSUNBZ0lDQWdJR1oxYm1OMGFXOXVJQ2hrTENCaUtTQjdJR1p2Y2lBb2RtRnlJSEFnYVc0Z1lpa2dhV1lnS0dJdWFHRnpUM2R1VUhKdmNHVnlkSGtvY0NrcElHUmJjRjBnUFNCaVczQmRPeUI5TzF4dUlDQWdJSEpsZEhWeWJpQm1kVzVqZEdsdmJpQW9aQ3dnWWlrZ2UxeHVJQ0FnSUNBZ0lDQmxlSFJsYm1SVGRHRjBhV056S0dRc0lHSXBPMXh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZiaUJmWHlncElIc2dkR2hwY3k1amIyNXpkSEoxWTNSdmNpQTlJR1E3SUgxY2JpQWdJQ0FnSUNBZ1pDNXdjbTkwYjNSNWNHVWdQU0JpSUQwOVBTQnVkV3hzSUQ4Z1QySnFaV04wTG1OeVpXRjBaU2hpS1NBNklDaGZYeTV3Y205MGIzUjVjR1VnUFNCaUxuQnliM1J2ZEhsd1pTd2dibVYzSUY5ZktDa3BPMXh1SUNBZ0lIMDdYRzU5S1NncE8xeHVUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUZ3aVgxOWxjMDF2WkhWc1pWd2lMQ0I3SUhaaGJIVmxPaUIwY25WbElIMHBPMXh1ZG1GeUlFSlRWSEpsWlV0V1h6RWdQU0J5WlhGMWFYSmxLRndpTGk5Q1UxUnlaV1ZMVmx3aUtUdGNiaThxS2x4dUlDb2dVM0JsWTJsaGJDMWpZWE5sSUc5bUlIUm9aU0JpYVc1aGNua2djMlZoY21Ob0lIUnlaV1VnYVc0Z2QyaHBZMmdnZEdobElITmxZWEpqYUNCclpYa2dhWE1nWlhGMVlXd2dkRzhnZEdobElHVnNaVzFsYm5RZ2RIbHdaUzVjYmlBcUlGUm9hWE1nWkdWbWFXNXBkR2x2YmlCcGN5QnpkV2wwWVdKc1pTQjNhR1Z1SUhSb1pTQmxiR1Z0Wlc1MElIUjVjR1VnWTJGdUlHNXZkQ0JpWlNCemNHeHBkQ0JpWlhSM1pXVnVJSGRvWVhRZ1pHVm1hVzVsY3lCcGRITWdiM0prWlhKY2JpQXFJR0Z1WkNCM2FHRjBJR1J2WlhNZ2JtOTBJQ2hsWnk0Z2NISnBiV2wwYVhabElIUjVjR1Z6SUdGeklHOXdjRzl6WldRZ2RHOGdhVzVrWlhobFpDQnlaV052Y21SektTNWNiaUFxWEc0Z0tpQlVhR1VnZEdGaWJHVWdZbVZzYjNjZ2MyaHZkM01nYzI5dFpTQjFjMlV0WTJGelpTQmxlR0Z0Y0d4bGN5Qm1iM0lnWW05MGFDQnBiblJsY21aaFkyVnpPbHh1SUNwY2JpQXFJQ0FnSUNBZ0lDQWdJQ0JsYkdWdFpXNTBJSFI1Y0dVZ0lDQWdJQ0FnSUNBZ0lDQWdJSHdnSUcxdmMzUWdjM1ZwZEdGaWJHVWdhVzUwWlhKbVlXTmxYRzRnS2lBdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMxOExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExWeHVJQ29nSUNBZ2JuVnRZbVZ5SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZkNBZ1FsTlVjbVZsUEc1MWJXSmxjajVjYmlBcUlDQWdJSE4wY21sdVp5QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lId2dJRUpUVkhKbFpUeHpkSEpwYm1jK1hHNGdLaUI3SUc5eVpHVnlPaUJ1ZFcxaVpYSXNJR1JoZEdFNklITjBjbWx1WnlCOUlDQWdJQ0I4SUNCQ1UxUnlaV1ZMVmp4N2IzSmtaWEk2SUc1MWJXSmxjbjBzSUh0dmNtUmxjam9nYm5WdFltVnlMQ0JrWVhSaE9pQnpkSEpwYm1kOVBseHVJQ3BjYmlBcUlFQnpaV1VnUWxOVWNtVmxTMVpjYmlBcUwxeHVkbUZ5SUVKVFZISmxaU0E5SUM4cUtpQkFZMnhoYzNNZ0tpOGdLR1oxYm1OMGFXOXVJQ2hmYzNWd1pYSXBJSHRjYmlBZ0lDQmZYMlY0ZEdWdVpITW9RbE5VY21WbExDQmZjM1Z3WlhJcE8xeHVJQ0FnSUdaMWJtTjBhVzl1SUVKVFZISmxaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUY5emRYQmxjaUFoUFQwZ2JuVnNiQ0FtSmlCZmMzVndaWEl1WVhCd2JIa29kR2hwY3l3Z1lYSm5kVzFsYm5SektTQjhmQ0IwYUdsek8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdRbE5VY21WbE8xeHVmU2hDVTFSeVpXVkxWbDh4TG1SbFptRjFiSFFwS1R0Y2JtVjRjRzl5ZEhNdVpHVm1ZWFZzZENBOUlFSlRWSEpsWlR0Y2JpOHZJeUJ6YjNWeVkyVk5ZWEJ3YVc1blZWSk1QVUpUVkhKbFpTNXFjeTV0WVhBaUxDSmNJblZ6WlNCemRISnBZM1JjSWp0Y2JrOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0JjSWw5ZlpYTk5iMlIxYkdWY0lpd2dleUIyWVd4MVpUb2dkSEoxWlNCOUtUdGNiblpoY2lCMWRHbHNJRDBnY21WeGRXbHlaU2hjSWk0dmRYUnBiRndpS1R0Y2JuWmhjaUJSZFdWMVpWOHhJRDBnY21WeGRXbHlaU2hjSWk0dlVYVmxkV1ZjSWlrN1hHNHZLaXBjYmlBcUlFZGxibVZ5WVd3Z1ltbHVZWEo1SUhObFlYSmphQ0IwY21WbElHbHRjR3hsYldWdWRHRjBhVzl1TGx4dUlDcGNiaUFxSUZSb2FYTWdhVzUwWlhKbVlXTmxJR0ZzYkc5M2N5QnZibVVnZEc4Z2MyVmhjbU5vSUdWc1pXMWxiblJ6SUhWemFXNW5JR0VnYzNWaWMyVjBJRzltSUhSb1pXbHlJR0YwZEhKcFluVjBaWE1nS0hSb2RYTWdkR2hsWEc0Z0tpQjBjbVZsSUdOaGJpQmlaU0IxYzJWa0lHRnpJR0Z1SUdsdVpHVjRJR1p2Y2lCamIyMXdiR1Y0SUc5aWFtVmpkSE1wTGx4dUlDb2dWR2hsSUdGMGRISnBZblYwWlhNZ2NtVnhkV2x5WldRZ2RHOGdaR1ZtYVc1bElHRnVJRzl5WkdWeWFXNW5JR2x1SUhSb1pTQjBjbVZsSUcxMWMzUWdZbVVnWkdWbWFXNWxaQ0JwYmlCMGFHVWdkSGx3WlNCTExseHVJQ29nUVc1NUlHRmtaR2wwYVc5dVlXd2dZWFIwY21saWRYUmxJRzExYzNRZ1ltVWdaR1ZtYVc1bFpDQnBiaUIwYUdVZ2RIbHdaU0JXTGx4dUlDcGNiaUFxSUVCelpXVWdRbE5VY21WbFhHNGdLaTljYm5aaGNpQkNVMVJ5WldWTFZpQTlJQzhxS2lCQVkyeGhjM01nS2k4Z0tHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJEY21WaGRHVnpJR0Z1SUdWdGNIUjVJR0pwYm1GeWVTQnpaV0Z5WTJnZ2RISmxaUzVjYmlBZ0lDQWdLaUJBWTJ4aGMzTWdQSEErUVNCaWFXNWhjbmtnYzJWaGNtTm9JSFJ5WldVZ2FYTWdZU0JpYVc1aGNua2dkSEpsWlNCcGJpQjNhR2xqYUNCbFlXTm9YRzRnSUNBZ0lDb2dhVzUwWlhKdVlXd2dibTlrWlNCemRHOXlaWE1nWVc0Z1pXeGxiV1Z1ZENCemRXTm9JSFJvWVhRZ2RHaGxJR1ZzWlcxbGJuUnpJSE4wYjNKbFpDQnBiaUIwYUdWY2JpQWdJQ0FnS2lCc1pXWjBJSE4xWW5SeVpXVWdZWEpsSUd4bGMzTWdkR2hoYmlCcGRDQmhibVFnZEdobElHVnNaVzFsYm5SelhHNGdJQ0FnSUNvZ2MzUnZjbVZrSUdsdUlIUm9aU0J5YVdkb2RDQnpkV0owY21WbElHRnlaU0JuY21WaGRHVnlMand2Y0Q1Y2JpQWdJQ0FnS2lBOGNENUdiM0p0WVd4c2VTd2dZU0JpYVc1aGNua2djMlZoY21Ob0lIUnlaV1VnYVhNZ1lTQnViMlJsTFdKaGMyVmtJR0pwYm1GeWVTQjBjbVZsSUdSaGRHRWdjM1J5ZFdOMGRYSmxJSGRvYVdOb1hHNGdJQ0FnSUNvZ2FHRnpJSFJvWlNCbWIyeHNiM2RwYm1jZ2NISnZjR1Z5ZEdsbGN6bzhMM0ErWEc0Z0lDQWdJQ29nUEhWc1BseHVJQ0FnSUNBcUlEeHNhVDVVYUdVZ2JHVm1kQ0J6ZFdKMGNtVmxJRzltSUdFZ2JtOWtaU0JqYjI1MFlXbHVjeUJ2Ym14NUlHNXZaR1Z6SUhkcGRHZ2daV3hsYldWdWRITWdiR1Z6YzF4dUlDQWdJQ0FxSUhSb1lXNGdkR2hsSUc1dlpHVW5jeUJsYkdWdFpXNTBQQzlzYVQ1Y2JpQWdJQ0FnS2lBOGJHaytWR2hsSUhKcFoyaDBJSE4xWW5SeVpXVWdiMllnWVNCdWIyUmxJR052Ym5SaGFXNXpJRzl1YkhrZ2JtOWtaWE1nZDJsMGFDQmxiR1Z0Wlc1MGN5Qm5jbVZoZEdWeVhHNGdJQ0FnSUNvZ2RHaGhiaUIwYUdVZ2JtOWtaU2R6SUdWc1pXMWxiblE4TDJ4cFBseHVJQ0FnSUNBcUlEeHNhVDVDYjNSb0lIUm9aU0JzWldaMElHRnVaQ0J5YVdkb2RDQnpkV0owY21WbGN5QnRkWE4wSUdGc2MyOGdZbVVnWW1sdVlYSjVJSE5sWVhKamFDQjBjbVZsY3k0OEwyeHBQbHh1SUNBZ0lDQXFJRHd2ZFd3K1hHNGdJQ0FnSUNvZ1BIQStTV1lnZEdobElHbHVjMlZ5ZEdWa0lHVnNaVzFsYm5SeklHRnlaU0JqZFhOMGIyMGdiMkpxWldOMGN5QmhJR052YlhCaGNtVWdablZ1WTNScGIyNGdiWFZ6ZEZ4dUlDQWdJQ0FxSUdKbElIQnliM1pwWkdWa0lHRjBJR052Ym5OMGNuVmpkR2x2YmlCMGFXMWxMQ0J2ZEdobGNuZHBjMlVnZEdobElEdzlMQ0E5UFQwZ1lXNWtJRDQ5SUc5d1pYSmhkRzl5Y3lCaGNtVmNiaUFnSUNBZ0tpQjFjMlZrSUhSdklHTnZiWEJoY21VZ1pXeGxiV1Z1ZEhNdUlFVjRZVzF3YkdVNlBDOXdQbHh1SUNBZ0lDQXFJRHh3Y21VK1hHNGdJQ0FnSUNvZ1puVnVZM1JwYjI0Z1kyOXRjR0Z5WlNoaExDQmlLU0I3WEc0Z0lDQWdJQ29nSUdsbUlDaGhJR2x6SUd4bGMzTWdkR2hoYmlCaUlHSjVJSE52YldVZ2IzSmtaWEpwYm1jZ1kzSnBkR1Z5YVc5dUtTQjdYRzRnSUNBZ0lDb2dJQ0FnSUhKbGRIVnliaUF0TVR0Y2JpQWdJQ0FnS2lBZ2ZTQnBaaUFvWVNCcGN5Qm5jbVZoZEdWeUlIUm9ZVzRnWWlCaWVTQjBhR1VnYjNKa1pYSnBibWNnWTNKcGRHVnlhVzl1S1NCN1hHNGdJQ0FnSUNvZ0lDQWdJSEpsZEhWeWJpQXhPMXh1SUNBZ0lDQXFJQ0I5WEc0Z0lDQWdJQ29nSUM4dklHRWdiWFZ6ZENCaVpTQmxjWFZoYkNCMGJ5QmlYRzRnSUNBZ0lDb2dJSEpsZEhWeWJpQXdPMXh1SUNBZ0lDQXFJSDFjYmlBZ0lDQWdLaUE4TDNCeVpUNWNiaUFnSUNBZ0tpQkFZMjl1YzNSeWRXTjBiM0pjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMloxYm1OMGFXOXVLRTlpYW1WamRDeFBZbXBsWTNRcE9tNTFiV0psY2oxOUlHTnZiWEJoY21WR2RXNWpkR2x2YmlCdmNIUnBiMjVoYkZ4dUlDQWdJQ0FxSUdaMWJtTjBhVzl1SUhWelpXUWdkRzhnWTI5dGNHRnlaU0IwZDI4Z1pXeGxiV1Z1ZEhNdUlFMTFjM1FnY21WMGRYSnVJR0VnYm1WbllYUnBkbVVnYVc1MFpXZGxjaXhjYmlBZ0lDQWdLaUI2WlhKdkxDQnZjaUJoSUhCdmMybDBhWFpsSUdsdWRHVm5aWElnWVhNZ2RHaGxJR1pwY25OMElHRnlaM1Z0Wlc1MElHbHpJR3hsYzNNZ2RHaGhiaXdnWlhGMVlXd2dkRzhzWEc0Z0lDQWdJQ29nYjNJZ1ozSmxZWFJsY2lCMGFHRnVJSFJvWlNCelpXTnZibVF1WEc0Z0lDQWdJQ292WEc0Z0lDQWdablZ1WTNScGIyNGdRbE5VY21WbFMxWW9ZMjl0Y0dGeVpVWjFibU4wYVc5dUtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWNtOXZkQ0E5SUc1MWJHdzdYRzRnSUNBZ0lDQWdJSFJvYVhNdVkyOXRjR0Z5WlNBOUlHTnZiWEJoY21WR2RXNWpkR2x2YmlCOGZDQjFkR2xzTG1SbFptRjFiSFJEYjIxd1lYSmxPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtNUZiR1Z0Wlc1MGN5QTlJREE3WEc0Z0lDQWdmVnh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUZrWkhNZ2RHaGxJSE53WldOcFptbGxaQ0JsYkdWdFpXNTBJSFJ2SUhSb2FYTWdkSEpsWlNCcFppQnBkQ0JwY3lCdWIzUWdZV3h5WldGa2VTQndjbVZ6Wlc1MExseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCbGJHVnRaVzUwSUhSb1pTQmxiR1Z0Wlc1MElIUnZJR2x1YzJWeWRDNWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdGliMjlzWldGdWZTQjBjblZsSUdsbUlIUm9hWE1nZEhKbFpTQmthV1FnYm05MElHRnNjbVZoWkhrZ1kyOXVkR0ZwYmlCMGFHVWdjM0JsWTJsbWFXVmtJR1ZzWlcxbGJuUXVYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1FsTlVjbVZsUzFZdWNISnZkRzkwZVhCbExtRmtaQ0E5SUdaMWJtTjBhVzl1SUNobGJHVnRaVzUwS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gxZEdsc0xtbHpWVzVrWldacGJtVmtLR1ZzWlcxbGJuUXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWFXNXpaWEowVG05a1pTaDBhR2x6TG1OeVpXRjBaVTV2WkdVb1pXeGxiV1Z1ZENrcElDRTlQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbTVGYkdWdFpXNTBjeXNyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVZ0YjNabGN5QmhiR3dnYjJZZ2RHaGxJR1ZzWlcxbGJuUnpJR1p5YjIwZ2RHaHBjeUIwY21WbExseHVJQ0FnSUNBcUwxeHVJQ0FnSUVKVFZISmxaVXRXTG5CeWIzUnZkSGx3WlM1amJHVmhjaUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1eWIyOTBJRDBnYm5Wc2JEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dVJXeGxiV1Z1ZEhNZ1BTQXdPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIUm9hWE1nZEhKbFpTQmpiMjUwWVdsdWN5QnVieUJsYkdWdFpXNTBjeTVjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRpYjI5c1pXRnVmU0IwY25WbElHbG1JSFJvYVhNZ2RISmxaU0JqYjI1MFlXbHVjeUJ1YnlCbGJHVnRaVzUwY3k1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0JDVTFSeVpXVkxWaTV3Y205MGIzUjVjR1V1YVhORmJYQjBlU0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11YmtWc1pXMWxiblJ6SUQwOVBTQXdPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVYwZFhKdWN5QjBhR1VnYm5WdFltVnlJRzltSUdWc1pXMWxiblJ6SUdsdUlIUm9hWE1nZEhKbFpTNWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOUlIUm9aU0J1ZFcxaVpYSWdiMllnWld4bGJXVnVkSE1nYVc0Z2RHaHBjeUIwY21WbExseHVJQ0FnSUNBcUwxeHVJQ0FnSUVKVFZISmxaVXRXTG5CeWIzUnZkSGx3WlM1emFYcGxJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV1Uld4bGJXVnVkSE03WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJTWlhSMWNtNXpJSFJ5ZFdVZ2FXWWdkR2hwY3lCMGNtVmxJR052Ym5SaGFXNXpJSFJvWlNCemNHVmphV1pwWldRZ1pXeGxiV1Z1ZEM1Y2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnWld4bGJXVnVkQ0JsYkdWdFpXNTBJSFJ2SUhObFlYSmphQ0JtYjNJdVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ltOXZiR1ZoYm4wZ2RISjFaU0JwWmlCMGFHbHpJSFJ5WldVZ1kyOXVkR0ZwYm5NZ2RHaGxJSE53WldOcFptbGxaQ0JsYkdWdFpXNTBMRnh1SUNBZ0lDQXFJR1poYkhObElHOTBhR1Z5ZDJselpTNWNiaUFnSUNBZ0tpOWNiaUFnSUNCQ1UxUnlaV1ZMVmk1d2NtOTBiM1I1Y0dVdVkyOXVkR0ZwYm5NZ1BTQm1kVzVqZEdsdmJpQW9aV3hsYldWdWRDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2RYUnBiQzVwYzFWdVpHVm1hVzVsWkNobGJHVnRaVzUwS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG5ObFlYSmphRTV2WkdVb2RHaHBjeTV5YjI5MExDQmxiR1Z0Wlc1MEtTQWhQVDBnYm5Wc2JEdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFeHZiMnR6SUdadmNpQjBhR1VnZG1Gc2RXVWdkMmwwYUNCMGFHVWdjSEp2ZG1sa1pXUWdjMlZoY21Ob0lHdGxlUzVjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdaV3hsYldWdWRDQlVhR1VnYTJWNUlIUnZJR3h2YjJzZ1ptOXlYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdUMkpxWldOMGZTQlVhR1VnZG1Gc2RXVWdabTkxYm1RZ2IzSWdkVzVrWldacGJtVmtJR2xtSUdsMElIZGhjeUJ1YjNRZ1ptOTFibVF1WEc0Z0lDQWdJQ292WEc0Z0lDQWdRbE5VY21WbFMxWXVjSEp2ZEc5MGVYQmxMbk5sWVhKamFDQTlJR1oxYm1OMGFXOXVJQ2hsYkdWdFpXNTBLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQnlaWFFnUFNCMGFHbHpMbk5sWVhKamFFNXZaR1VvZEdocGN5NXliMjkwTENCbGJHVnRaVzUwS1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLSEpsZENBOVBUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY21WMExtVnNaVzFsYm5RN1hHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCU1pXMXZkbVZ6SUhSb1pTQnpjR1ZqYVdacFpXUWdaV3hsYldWdWRDQm1jbTl0SUhSb2FYTWdkSEpsWlNCcFppQnBkQ0JwY3lCd2NtVnpaVzUwTGx4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTJKdmIyeGxZVzU5SUhSeWRXVWdhV1lnZEdocGN5QjBjbVZsSUdOdmJuUmhhVzVsWkNCMGFHVWdjM0JsWTJsbWFXVmtJR1ZzWlcxbGJuUXVYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1FsTlVjbVZsUzFZdWNISnZkRzkwZVhCbExuSmxiVzkyWlNBOUlHWjFibU4wYVc5dUlDaGxiR1Z0Wlc1MEtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCdWIyUmxJRDBnZEdocGN5NXpaV0Z5WTJoT2IyUmxLSFJvYVhNdWNtOXZkQ3dnWld4bGJXVnVkQ2s3WEc0Z0lDQWdJQ0FnSUdsbUlDaHViMlJsSUQwOVBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdkR2hwY3k1eVpXMXZkbVZPYjJSbEtHNXZaR1VwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTVGYkdWdFpXNTBjeTB0TzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEhKMVpUdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFVjRaV04xZEdWeklIUm9aU0J3Y205MmFXUmxaQ0JtZFc1amRHbHZiaUJ2Ym1ObElHWnZjaUJsWVdOb0lHVnNaVzFsYm5RZ2NISmxjMlZ1ZENCcGJpQjBhR2x6SUhSeVpXVWdhVzVjYmlBZ0lDQWdLaUJwYmkxdmNtUmxjaTVjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMloxYm1OMGFXOXVLRTlpYW1WamRDazZLbjBnWTJGc2JHSmhZMnNnWm5WdVkzUnBiMjRnZEc4Z1pYaGxZM1YwWlN3Z2FYUWdhWE1nYVc1MmIydGxaQ0IzYVhSb0lHOXVaVnh1SUNBZ0lDQXFJR0Z5WjNWdFpXNTBPaUIwYUdVZ1pXeGxiV1Z1ZENCMllXeDFaU3dnZEc4Z1luSmxZV3NnZEdobElHbDBaWEpoZEdsdmJpQjViM1VnWTJGdUlHOXdkR2x2Ym1Gc2JIa2djbVYwZFhKdUlHWmhiSE5sTGx4dUlDQWdJQ0FxTDF4dUlDQWdJRUpUVkhKbFpVdFdMbkJ5YjNSdmRIbHdaUzVwYm05eVpHVnlWSEpoZG1WeWMyRnNJRDBnWm5WdVkzUnBiMjRnS0dOaGJHeGlZV05yS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YVc1dmNtUmxjbFJ5WVhabGNuTmhiRUYxZUNoMGFHbHpMbkp2YjNRc0lHTmhiR3hpWVdOckxDQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCemRHOXdPaUJtWVd4elpWeHVJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRVY0WldOMWRHVnpJSFJvWlNCd2NtOTJhV1JsWkNCbWRXNWpkR2x2YmlCdmJtTmxJR1p2Y2lCbFlXTm9JR1ZzWlcxbGJuUWdjSEpsYzJWdWRDQnBiaUIwYUdseklIUnlaV1VnYVc0Z2NISmxMVzl5WkdWeUxseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1puVnVZM1JwYjI0b1QySnFaV04wS1RvcWZTQmpZV3hzWW1GamF5Qm1kVzVqZEdsdmJpQjBieUJsZUdWamRYUmxMQ0JwZENCcGN5QnBiblp2YTJWa0lIZHBkR2dnYjI1bFhHNGdJQ0FnSUNvZ1lYSm5kVzFsYm5RNklIUm9aU0JsYkdWdFpXNTBJSFpoYkhWbExDQjBieUJpY21WaGF5QjBhR1VnYVhSbGNtRjBhVzl1SUhsdmRTQmpZVzRnYjNCMGFXOXVZV3hzZVNCeVpYUjFjbTRnWm1Gc2MyVXVYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1FsTlVjbVZsUzFZdWNISnZkRzkwZVhCbExuQnlaVzl5WkdWeVZISmhkbVZ5YzJGc0lEMGdablZ1WTNScGIyNGdLR05oYkd4aVlXTnJLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjSEpsYjNKa1pYSlVjbUYyWlhKellXeEJkWGdvZEdocGN5NXliMjkwTENCallXeHNZbUZqYXl3Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYzNSdmNEb2dabUZzYzJWY2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkZlR1ZqZFhSbGN5QjBhR1VnY0hKdmRtbGtaV1FnWm5WdVkzUnBiMjRnYjI1alpTQm1iM0lnWldGamFDQmxiR1Z0Wlc1MElIQnlaWE5sYm5RZ2FXNGdkR2hwY3lCMGNtVmxJR2x1SUhCdmMzUXRiM0prWlhJdVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0bWRXNWpkR2x2YmloUFltcGxZM1FwT2lwOUlHTmhiR3hpWVdOcklHWjFibU4wYVc5dUlIUnZJR1Y0WldOMWRHVXNJR2wwSUdseklHbHVkbTlyWldRZ2QybDBhQ0J2Ym1WY2JpQWdJQ0FnS2lCaGNtZDFiV1Z1ZERvZ2RHaGxJR1ZzWlcxbGJuUWdkbUZzZFdVc0lIUnZJR0p5WldGcklIUm9aU0JwZEdWeVlYUnBiMjRnZVc5MUlHTmhiaUJ2Y0hScGIyNWhiR3g1SUhKbGRIVnliaUJtWVd4elpTNWNiaUFnSUNBZ0tpOWNiaUFnSUNCQ1UxUnlaV1ZMVmk1d2NtOTBiM1I1Y0dVdWNHOXpkRzl5WkdWeVZISmhkbVZ5YzJGc0lEMGdablZ1WTNScGIyNGdLR05oYkd4aVlXTnJLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjRzl6ZEc5eVpHVnlWSEpoZG1WeWMyRnNRWFY0S0hSb2FYTXVjbTl2ZEN3Z1kyRnNiR0poWTJzc0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMGIzQTZJR1poYkhObFhHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dSWGhsWTNWMFpYTWdkR2hsSUhCeWIzWnBaR1ZrSUdaMWJtTjBhVzl1SUc5dVkyVWdabTl5SUdWaFkyZ2daV3hsYldWdWRDQndjbVZ6Wlc1MElHbHVJSFJvYVhNZ2RISmxaU0JwYmx4dUlDQWdJQ0FxSUd4bGRtVnNMVzl5WkdWeUxseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1puVnVZM1JwYjI0b1QySnFaV04wS1RvcWZTQmpZV3hzWW1GamF5Qm1kVzVqZEdsdmJpQjBieUJsZUdWamRYUmxMQ0JwZENCcGN5QnBiblp2YTJWa0lIZHBkR2dnYjI1bFhHNGdJQ0FnSUNvZ1lYSm5kVzFsYm5RNklIUm9aU0JsYkdWdFpXNTBJSFpoYkhWbExDQjBieUJpY21WaGF5QjBhR1VnYVhSbGNtRjBhVzl1SUhsdmRTQmpZVzRnYjNCMGFXOXVZV3hzZVNCeVpYUjFjbTRnWm1Gc2MyVXVYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1FsTlVjbVZsUzFZdWNISnZkRzkwZVhCbExteGxkbVZzVkhKaGRtVnljMkZzSUQwZ1puVnVZM1JwYjI0Z0tHTmhiR3hpWVdOcktTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHVjJaV3hVY21GMlpYSnpZV3hCZFhnb2RHaHBjeTV5YjI5MExDQmpZV3hzWW1GamF5azdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaWFIxY201eklIUm9aU0J0YVc1cGJYVnRJR1ZzWlcxbGJuUWdiMllnZEdocGN5QjBjbVZsTGx4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZXlwOUlIUm9aU0J0YVc1cGJYVnRJR1ZzWlcxbGJuUWdiMllnZEdocGN5QjBjbVZsSUc5eUlIVnVaR1ZtYVc1bFpDQnBaaUIwYUdseklIUnlaV1VnYVhOY2JpQWdJQ0FnS2lCcGN5QmxiWEIwZVM1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0JDVTFSeVpXVkxWaTV3Y205MGIzUjVjR1V1YldsdWFXMTFiU0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVhWE5GYlhCMGVTZ3BJSHg4SUhSb2FYTXVjbTl2ZENBOVBUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXRhVzVwYlhWdFFYVjRLSFJvYVhNdWNtOXZkQ2t1Wld4bGJXVnVkRHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkpsZEhWeWJuTWdkR2hsSUcxaGVHbHRkVzBnWld4bGJXVnVkQ0J2WmlCMGFHbHpJSFJ5WldVdVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN0tuMGdkR2hsSUcxaGVHbHRkVzBnWld4bGJXVnVkQ0J2WmlCMGFHbHpJSFJ5WldVZ2IzSWdkVzVrWldacGJtVmtJR2xtSUhSb2FYTWdkSEpsWlNCcGMxeHVJQ0FnSUNBcUlHbHpJR1Z0Y0hSNUxseHVJQ0FnSUNBcUwxeHVJQ0FnSUVKVFZISmxaVXRXTG5CeWIzUnZkSGx3WlM1dFlYaHBiWFZ0SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVwYzBWdGNIUjVLQ2tnZkh3Z2RHaHBjeTV5YjI5MElEMDlQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZFc1a1pXWnBibVZrTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbTFoZUdsdGRXMUJkWGdvZEdocGN5NXliMjkwS1M1bGJHVnRaVzUwTzF4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUlhobFkzVjBaWE1nZEdobElIQnliM1pwWkdWa0lHWjFibU4wYVc5dUlHOXVZMlVnWm05eUlHVmhZMmdnWld4bGJXVnVkQ0J3Y21WelpXNTBJR2x1SUhSb2FYTWdkSEpsWlNCcGJpQnBibTl5WkdWeUxseHVJQ0FnSUNBcUlFVnhkV2wyWVd4bGJuUWdkRzhnYVc1dmNtUmxjbFJ5WVhabGNuTmhiQzVjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMloxYm1OMGFXOXVLRTlpYW1WamRDazZLbjBnWTJGc2JHSmhZMnNnWm5WdVkzUnBiMjRnZEc4Z1pYaGxZM1YwWlN3Z2FYUWdhWE5jYmlBZ0lDQWdLaUJwYm5admEyVmtJSGRwZEdnZ2IyNWxJR0Z5WjNWdFpXNTBPaUIwYUdVZ1pXeGxiV1Z1ZENCMllXeDFaU3dnZEc4Z1luSmxZV3NnZEdobElHbDBaWEpoZEdsdmJpQjViM1VnWTJGdVhHNGdJQ0FnSUNvZ2IzQjBhVzl1WVd4c2VTQnlaWFIxY200Z1ptRnNjMlV1WEc0Z0lDQWdJQ292WEc0Z0lDQWdRbE5VY21WbFMxWXVjSEp2ZEc5MGVYQmxMbVp2Y2tWaFkyZ2dQU0JtZFc1amRHbHZiaUFvWTJGc2JHSmhZMnNwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYm05eVpHVnlWSEpoZG1WeWMyRnNLR05oYkd4aVlXTnJLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkpsZEhWeWJuTWdZVzRnWVhKeVlYa2dZMjl1ZEdGcGJtbHVaeUJoYkd3Z2IyWWdkR2hsSUdWc1pXMWxiblJ6SUdsdUlIUm9hWE1nZEhKbFpTQnBiaUJwYmkxdmNtUmxjaTVjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRCY25KaGVYMGdZVzRnWVhKeVlYa2dZMjl1ZEdGcGJtbHVaeUJoYkd3Z2IyWWdkR2hsSUdWc1pXMWxiblJ6SUdsdUlIUm9hWE1nZEhKbFpTQnBiaUJwYmkxdmNtUmxjaTVjYmlBZ0lDQWdLaTljYmlBZ0lDQkNVMVJ5WldWTFZpNXdjbTkwYjNSNWNHVXVkRzlCY25KaGVTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJR0Z5Y21GNUlEMGdXMTA3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhVzV2Y21SbGNsUnlZWFpsY25OaGJDaG1kVzVqZEdsdmJpQW9aV3hsYldWdWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lYSnlZWGt1Y0hWemFDaGxiR1Z0Wlc1MEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwY25WbE8xeHVJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR0Z5Y21GNU8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VtVjBkWEp1Y3lCMGFHVWdhR1ZwWjJoMElHOW1JSFJvYVhNZ2RISmxaUzVjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHR1ZFcxaVpYSjlJSFJvWlNCb1pXbG5hSFFnYjJZZ2RHaHBjeUIwY21WbElHOXlJQzB4SUdsbUlHbHpJR1Z0Y0hSNUxseHVJQ0FnSUNBcUwxeHVJQ0FnSUVKVFZISmxaVXRXTG5CeWIzUnZkSGx3WlM1b1pXbG5hSFFnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG1obGFXZG9kRUYxZUNoMGFHbHpMbkp2YjNRcE8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FIQnlhWFpoZEdWY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JDVTFSeVpXVkxWaTV3Y205MGIzUjVjR1V1YzJWaGNtTm9UbTlrWlNBOUlHWjFibU4wYVc5dUlDaHViMlJsTENCbGJHVnRaVzUwS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJqYlhBZ1BTQXhPMXh1SUNBZ0lDQWdJQ0IzYUdsc1pTQW9ibTlrWlNBaFBUMGdiblZzYkNBbUppQmpiWEFnSVQwOUlEQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnRjQ0E5SUhSb2FYTXVZMjl0Y0dGeVpTaGxiR1Z0Wlc1MExDQnViMlJsTG1Wc1pXMWxiblFwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dOdGNDQThJREFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdWIyUmxJRDBnYm05a1pTNXNaV1owUTJnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxiSE5sSUdsbUlDaGpiWEFnUGlBd0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibTlrWlNBOUlHNXZaR1V1Y21sbmFIUkRhRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdibTlrWlR0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVCd2NtbDJZWFJsWEc0Z0lDQWdJQ292WEc0Z0lDQWdRbE5VY21WbFMxWXVjSEp2ZEc5MGVYQmxMblJ5WVc1emNHeGhiblFnUFNCbWRXNWpkR2x2YmlBb2JqRXNJRzR5S1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h1TVM1d1lYSmxiblFnUFQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWNtOXZkQ0E5SUc0eU8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR1ZzYzJVZ2FXWWdLRzR4SUQwOVBTQnVNUzV3WVhKbGJuUXViR1ZtZEVOb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCdU1TNXdZWEpsYm5RdWJHVm1kRU5vSUQwZ2JqSTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCdU1TNXdZWEpsYm5RdWNtbG5hSFJEYUNBOUlHNHlPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdsbUlDaHVNaUFoUFQwZ2JuVnNiQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdiakl1Y0dGeVpXNTBJRDBnYmpFdWNHRnlaVzUwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQWNISnBkbUYwWlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRUpUVkhKbFpVdFdMbkJ5YjNSdmRIbHdaUzV5WlcxdmRtVk9iMlJsSUQwZ1puVnVZM1JwYjI0Z0tHNXZaR1VwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLRzV2WkdVdWJHVm1kRU5vSUQwOVBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuUnlZVzV6Y0d4aGJuUW9ibTlrWlN3Z2JtOWtaUzV5YVdkb2RFTm9LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCbGJITmxJR2xtSUNodWIyUmxMbkpwWjJoMFEyZ2dQVDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11ZEhKaGJuTndiR0Z1ZENodWIyUmxMQ0J1YjJSbExteGxablJEYUNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2VTQTlJSFJvYVhNdWJXbHVhVzExYlVGMWVDaHViMlJsTG5KcFoyaDBRMmdwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hrdWNHRnlaVzUwSUNFOVBTQnViMlJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTUwY21GdWMzQnNZVzUwS0hrc0lIa3VjbWxuYUhSRGFDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlUzV5YVdkb2RFTm9JRDBnYm05a1pTNXlhV2RvZEVOb08xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIa3VjbWxuYUhSRGFDNXdZWEpsYm5RZ1BTQjVPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NTBjbUZ1YzNCc1lXNTBLRzV2WkdVc0lIa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2VTNXNaV1owUTJnZ1BTQnViMlJsTG14bFpuUkRhRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIa3ViR1ZtZEVOb0xuQmhjbVZ1ZENBOUlIazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUJ3Y21sMllYUmxYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1FsTlVjbVZsUzFZdWNISnZkRzkwZVhCbExtbHViM0prWlhKVWNtRjJaWEp6WVd4QmRYZ2dQU0JtZFc1amRHbHZiaUFvYm05a1pTd2dZMkZzYkdKaFkyc3NJSE5wWjI1aGJDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2JtOWtaU0E5UFQwZ2JuVnNiQ0I4ZkNCemFXZHVZV3d1YzNSdmNDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIUm9hWE11YVc1dmNtUmxjbFJ5WVhabGNuTmhiRUYxZUNodWIyUmxMbXhsWm5SRGFDd2dZMkZzYkdKaFkyc3NJSE5wWjI1aGJDazdYRzRnSUNBZ0lDQWdJR2xtSUNoemFXZHVZV3d1YzNSdmNDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lITnBaMjVoYkM1emRHOXdJRDBnWTJGc2JHSmhZMnNvYm05a1pTNWxiR1Z0Wlc1MEtTQTlQVDBnWm1Gc2MyVTdYRzRnSUNBZ0lDQWdJR2xtSUNoemFXZHVZV3d1YzNSdmNDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIUm9hWE11YVc1dmNtUmxjbFJ5WVhabGNuTmhiRUYxZUNodWIyUmxMbkpwWjJoMFEyZ3NJR05oYkd4aVlXTnJMQ0J6YVdkdVlXd3BPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRSEJ5YVhaaGRHVmNiaUFnSUNBZ0tpOWNiaUFnSUNCQ1UxUnlaV1ZMVmk1d2NtOTBiM1I1Y0dVdWJHVjJaV3hVY21GMlpYSnpZV3hCZFhnZ1BTQm1kVzVqZEdsdmJpQW9ibTlrWlN3Z1kyRnNiR0poWTJzcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUhGMVpYVmxJRDBnYm1WM0lGRjFaWFZsWHpFdVpHVm1ZWFZzZENncE8xeHVJQ0FnSUNBZ0lDQnBaaUFvYm05a1pTQWhQVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NYVmxkV1V1Wlc1eGRXVjFaU2h1YjJSbEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J1YjJSbElEMGdjWFZsZFdVdVpHVnhkV1YxWlNncElIeDhJRzUxYkd3N1hHNGdJQ0FnSUNBZ0lIZG9hV3hsSUNodWIyUmxJQ0U5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hqWVd4c1ltRmpheWh1YjJSbExtVnNaVzFsYm5RcElEMDlQU0JtWVd4elpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodWIyUmxMbXhsWm5SRGFDQWhQVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEYxWlhWbExtVnVjWFZsZFdVb2JtOWtaUzVzWldaMFEyZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHNXZaR1V1Y21sbmFIUkRhQ0FoUFQwZ2JuVnNiQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhGMVpYVmxMbVZ1Y1hWbGRXVW9ibTlrWlM1eWFXZG9kRU5vS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lHNXZaR1VnUFNCeGRXVjFaUzVrWlhGMVpYVmxLQ2tnZkh3Z2JuVnNiRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUUhCeWFYWmhkR1ZjYmlBZ0lDQWdLaTljYmlBZ0lDQkNVMVJ5WldWTFZpNXdjbTkwYjNSNWNHVXVjSEpsYjNKa1pYSlVjbUYyWlhKellXeEJkWGdnUFNCbWRXNWpkR2x2YmlBb2JtOWtaU3dnWTJGc2JHSmhZMnNzSUhOcFoyNWhiQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9ibTlrWlNBOVBUMGdiblZzYkNCOGZDQnphV2R1WVd3dWMzUnZjQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSE5wWjI1aGJDNXpkRzl3SUQwZ1kyRnNiR0poWTJzb2JtOWtaUzVsYkdWdFpXNTBLU0E5UFQwZ1ptRnNjMlU3WEc0Z0lDQWdJQ0FnSUdsbUlDaHphV2R1WVd3dWMzUnZjQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSFJvYVhNdWNISmxiM0prWlhKVWNtRjJaWEp6WVd4QmRYZ29ibTlrWlM1c1pXWjBRMmdzSUdOaGJHeGlZV05yTENCemFXZHVZV3dwTzF4dUlDQWdJQ0FnSUNCcFppQW9jMmxuYm1Gc0xuTjBiM0FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0IwYUdsekxuQnlaVzl5WkdWeVZISmhkbVZ5YzJGc1FYVjRLRzV2WkdVdWNtbG5hSFJEYUN3Z1kyRnNiR0poWTJzc0lITnBaMjVoYkNrN1hHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQWNISnBkbUYwWlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRUpUVkhKbFpVdFdMbkJ5YjNSdmRIbHdaUzV3YjNOMGIzSmtaWEpVY21GMlpYSnpZV3hCZFhnZ1BTQm1kVzVqZEdsdmJpQW9ibTlrWlN3Z1kyRnNiR0poWTJzc0lITnBaMjVoYkNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvYm05a1pTQTlQVDBnYm5Wc2JDQjhmQ0J6YVdkdVlXd3VjM1J2Y0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjRzl6ZEc5eVpHVnlWSEpoZG1WeWMyRnNRWFY0S0c1dlpHVXViR1ZtZEVOb0xDQmpZV3hzWW1GamF5d2djMmxuYm1Gc0tUdGNiaUFnSUNBZ0lDQWdhV1lnS0hOcFoyNWhiQzV6ZEc5d0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YjNOMGIzSmtaWEpVY21GMlpYSnpZV3hCZFhnb2JtOWtaUzV5YVdkb2RFTm9MQ0JqWVd4c1ltRmpheXdnYzJsbmJtRnNLVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tITnBaMjVoYkM1emRHOXdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjMmxuYm1Gc0xuTjBiM0FnUFNCallXeHNZbUZqYXlodWIyUmxMbVZzWlcxbGJuUXBJRDA5UFNCbVlXeHpaVHRjYmlBZ0lDQjlPMXh1SUNBZ0lFSlRWSEpsWlV0V0xuQnliM1J2ZEhsd1pTNXRhVzVwYlhWdFFYVjRJRDBnWm5WdVkzUnBiMjRnS0c1dlpHVXBJSHRjYmlBZ0lDQWdJQ0FnZDJocGJHVWdLRzV2WkdVZ0lUMGdiblZzYkNBbUppQnViMlJsTG14bFpuUkRhQ0FoUFQwZ2JuVnNiQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdibTlrWlNBOUlHNXZaR1V1YkdWbWRFTm9PMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ1YjJSbE8xeHVJQ0FnSUgwN1hHNGdJQ0FnUWxOVWNtVmxTMVl1Y0hKdmRHOTBlWEJsTG0xaGVHbHRkVzFCZFhnZ1BTQm1kVzVqZEdsdmJpQW9ibTlrWlNrZ2UxeHVJQ0FnSUNBZ0lDQjNhR2xzWlNBb2JtOWtaU0FoUFNCdWRXeHNJQ1ltSUc1dlpHVXVjbWxuYUhSRGFDQWhQVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JtOWtaU0E5SUc1dlpHVXVjbWxuYUhSRGFEdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdibTlrWlR0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVCd2NtbDJZWFJsWEc0Z0lDQWdJQ292WEc0Z0lDQWdRbE5VY21WbFMxWXVjSEp2ZEc5MGVYQmxMbWhsYVdkb2RFRjFlQ0E5SUdaMWJtTjBhVzl1SUNodWIyUmxLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaHViMlJsSUQwOVBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdMVEU3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUUxaGRHZ3ViV0Y0S0hSb2FYTXVhR1ZwWjJoMFFYVjRLRzV2WkdVdWJHVm1kRU5vS1N3Z2RHaHBjeTVvWldsbmFIUkJkWGdvYm05a1pTNXlhV2RvZEVOb0tTa2dLeUF4TzF4dUlDQWdJSDA3WEc0Z0lDQWdMeXBjYmlBZ0lDQXFJRUJ3Y21sMllYUmxYRzRnSUNBZ0tpOWNiaUFnSUNCQ1UxUnlaV1ZMVmk1d2NtOTBiM1I1Y0dVdWFXNXpaWEowVG05a1pTQTlJR1oxYm1OMGFXOXVJQ2h1YjJSbEtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCd1lYSmxiblFnUFNCdWRXeHNPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2NHOXphWFJwYjI0Z1BTQjBhR2x6TG5KdmIzUTdYRzRnSUNBZ0lDQWdJSGRvYVd4bElDaHdiM05wZEdsdmJpQWhQVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJR050Y0NBOUlIUm9hWE11WTI5dGNHRnlaU2h1YjJSbExtVnNaVzFsYm5Rc0lIQnZjMmwwYVc5dUxtVnNaVzFsYm5RcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHTnRjQ0E5UFQwZ01Da2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnVkV3hzTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeHpaU0JwWmlBb1kyMXdJRHdnTUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIQmhjbVZ1ZENBOUlIQnZjMmwwYVc5dU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIQnZjMmwwYVc5dUlEMGdjRzl6YVhScGIyNHViR1ZtZEVOb08xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NHRnlaVzUwSUQwZ2NHOXphWFJwYjI0N1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NHOXphWFJwYjI0Z1BTQndiM05wZEdsdmJpNXlhV2RvZEVOb08xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHNXZaR1V1Y0dGeVpXNTBJRDBnY0dGeVpXNTBPMXh1SUNBZ0lDQWdJQ0JwWmlBb2NHRnlaVzUwSUQwOVBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCMGNtVmxJR2x6SUdWdGNIUjVYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkp2YjNRZ1BTQnViMlJsTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHVnNjMlVnYVdZZ0tIUm9hWE11WTI5dGNHRnlaU2h1YjJSbExtVnNaVzFsYm5Rc0lIQmhjbVZ1ZEM1bGJHVnRaVzUwS1NBOElEQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQmhjbVZ1ZEM1c1pXWjBRMmdnUFNCdWIyUmxPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NHRnlaVzUwTG5KcFoyaDBRMmdnUFNCdWIyUmxPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ1YjJSbE8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FIQnlhWFpoZEdWY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JDVTFSeVpXVkxWaTV3Y205MGIzUjVjR1V1WTNKbFlYUmxUbTlrWlNBOUlHWjFibU4wYVc5dUlDaGxiR1Z0Wlc1MEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJHVnRaVzUwT2lCbGJHVnRaVzUwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdiR1ZtZEVOb09pQnVkV3hzTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbWxuYUhSRGFEb2diblZzYkN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJoY21WdWREb2diblZzYkZ4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgwN1hHNGdJQ0FnY21WMGRYSnVJRUpUVkhKbFpVdFdPMXh1ZlNncEtUdGNibVY0Y0c5eWRITXVaR1ZtWVhWc2RDQTlJRUpUVkhKbFpVdFdPMXh1THk4aklITnZkWEpqWlUxaGNIQnBibWRWVWt3OVFsTlVjbVZsUzFZdWFuTXViV0Z3SWl3aVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1UFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dYQ0pmWDJWelRXOWtkV3hsWENJc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hHNTJZWElnZFhScGJDQTlJSEpsY1hWcGNtVW9YQ0l1TDNWMGFXeGNJaWs3WEc1MllYSWdSR2xqZEdsdmJtRnllVjh4SUQwZ2NtVnhkV2x5WlNoY0lpNHZSR2xqZEdsdmJtRnllVndpS1R0Y2JuWmhjaUJUWlhSZk1TQTlJSEpsY1hWcGNtVW9YQ0l1TDFObGRGd2lLVHRjYm5aaGNpQkNZV2NnUFNBdktpb2dRR05zWVhOeklDb3ZJQ2htZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1EzSmxZWFJsY3lCaGJpQmxiWEIwZVNCaVlXY3VYRzRnSUNBZ0lDb2dRR05zWVhOeklEeHdQa0VnWW1GbklHbHpJR0VnYzNCbFkybGhiQ0JyYVc1a0lHOW1JSE5sZENCcGJpQjNhR2xqYUNCdFpXMWlaWEp6SUdGeVpWeHVJQ0FnSUNBcUlHRnNiRzkzWldRZ2RHOGdZWEJ3WldGeUlHMXZjbVVnZEdoaGJpQnZibU5sTGp3dmNENWNiaUFnSUNBZ0tpQThjRDVKWmlCMGFHVWdhVzV6WlhKMFpXUWdaV3hsYldWdWRITWdZWEpsSUdOMWMzUnZiU0J2WW1wbFkzUnpJR0VnWm5WdVkzUnBiMjVjYmlBZ0lDQWdLaUIzYUdsamFDQmpiMjUyWlhKMGN5QmxiR1Z0Wlc1MGN5QjBieUIxYm1seGRXVWdjM1J5YVc1bmN5QnRkWE4wSUdKbElIQnliM1pwWkdWa0xpQkZlR0Z0Y0d4bE9qd3ZjRDVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRHh3Y21VK1hHNGdJQ0FnSUNvZ1puVnVZM1JwYjI0Z2NHVjBWRzlUZEhKcGJtY29jR1YwS1NCN1hHNGdJQ0FnSUNvZ0lISmxkSFZ5YmlCd1pYUXVibUZ0WlR0Y2JpQWdJQ0FnS2lCOVhHNGdJQ0FnSUNvZ1BDOXdjbVUrWEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBWTI5dWMzUnlkV04wYjNKY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTJaMWJtTjBhVzl1S0U5aWFtVmpkQ2s2YzNSeWFXNW5QWDBnZEc5VGRISkdkVzVqZEdsdmJpQnZjSFJwYjI1aGJDQm1kVzVqZEdsdmJpQjFjMlZrWEc0Z0lDQWdJQ29nZEc4Z1kyOXVkbVZ5ZENCbGJHVnRaVzUwY3lCMGJ5QnpkSEpwYm1kekxpQkpaaUIwYUdVZ1pXeGxiV1Z1ZEhNZ1lYSmxiaWQwSUhOMGNtbHVaM01nYjNJZ2FXWWdkRzlUZEhKcGJtY29LVnh1SUNBZ0lDQXFJR2x6SUc1dmRDQmhjSEJ5YjNCeWFXRjBaU3dnWVNCamRYTjBiMjBnWm5WdVkzUnBiMjRnZDJocFkyZ2djbVZqWldsMlpYTWdZVzRnYjJKcVpXTjBJR0Z1WkNCeVpYUjFjbTV6SUdGY2JpQWdJQ0FnS2lCMWJtbHhkV1VnYzNSeWFXNW5JRzExYzNRZ1ltVWdjSEp2ZG1sa1pXUXVYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1puVnVZM1JwYjI0Z1FtRm5LSFJ2VTNSeVJuVnVZM1JwYjI0cElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1MGIxTjBja1lnUFNCMGIxTjBja1oxYm1OMGFXOXVJSHg4SUhWMGFXd3VaR1ZtWVhWc2RGUnZVM1J5YVc1bk8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1ScFkzUnBiMjVoY25rZ1BTQnVaWGNnUkdsamRHbHZibUZ5ZVY4eExtUmxabUYxYkhRb2RHaHBjeTUwYjFOMGNrWXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtNUZiR1Z0Wlc1MGN5QTlJREE3WEc0Z0lDQWdmVnh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUZrWkhNZ2JrTnZjR2xsY3lCdlppQjBhR1VnYzNCbFkybG1hV1ZrSUc5aWFtVmpkQ0IwYnlCMGFHbHpJR0poWnk1Y2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnWld4bGJXVnVkQ0JsYkdWdFpXNTBJSFJ2SUdGa1pDNWNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UyNTFiV0psY2oxOUlHNURiM0JwWlhNZ2RHaGxJRzUxYldKbGNpQnZaaUJqYjNCcFpYTWdkRzhnWVdSa0xDQnBaaUIwYUdseklHRnlaM1Z0Wlc1MElHbHpYRzRnSUNBZ0lDb2dkVzVrWldacGJtVmtJREVnWTI5d2VTQnBjeUJoWkdSbFpDNWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdGliMjlzWldGdWZTQjBjblZsSUhWdWJHVnpjeUJsYkdWdFpXNTBJR2x6SUhWdVpHVm1hVzVsWkM1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0JDWVdjdWNISnZkRzkwZVhCbExtRmtaQ0E5SUdaMWJtTjBhVzl1SUNobGJHVnRaVzUwTENCdVEyOXdhV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h1UTI5d2FXVnpJRDA5UFNCMmIybGtJREFwSUhzZ2JrTnZjR2xsY3lBOUlERTdJSDFjYmlBZ0lDQWdJQ0FnYVdZZ0tIVjBhV3d1YVhOVmJtUmxabWx1WldRb1pXeGxiV1Z1ZENrZ2ZId2dia052Y0dsbGN5QThQU0F3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdhV1lnS0NGMGFHbHpMbU52Ym5SaGFXNXpLR1ZzWlcxbGJuUXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnYm05a1pTQTlJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpUb2daV3hsYldWdWRDeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiM0JwWlhNNklHNURiM0JwWlhOY2JpQWdJQ0FnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1ScFkzUnBiMjVoY25rdWMyVjBWbUZzZFdVb1pXeGxiV1Z1ZEN3Z2JtOWtaU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1ScFkzUnBiMjVoY25rdVoyVjBWbUZzZFdVb1pXeGxiV1Z1ZENrdVkyOXdhV1Z6SUNzOUlHNURiM0JwWlhNN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdkR2hwY3k1dVJXeGxiV1Z1ZEhNZ0t6MGdia052Y0dsbGN6dGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUnlkV1U3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJEYjNWdWRITWdkR2hsSUc1MWJXSmxjaUJ2WmlCamIzQnBaWE1nYjJZZ2RHaGxJSE53WldOcFptbGxaQ0J2WW1wbFkzUWdhVzRnZEdocGN5QmlZV2N1WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJR1ZzWlcxbGJuUWdkR2hsSUc5aWFtVmpkQ0IwYnlCelpXRnlZMmdnWm05eUxpNWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOUlIUm9aU0J1ZFcxaVpYSWdiMllnWTI5d2FXVnpJRzltSUhSb1pTQnZZbXBsWTNRc0lEQWdhV1lnYm05MElHWnZkVzVrWEc0Z0lDQWdJQ292WEc0Z0lDQWdRbUZuTG5CeWIzUnZkSGx3WlM1amIzVnVkQ0E5SUdaMWJtTjBhVzl1SUNobGJHVnRaVzUwS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doZEdocGN5NWpiMjUwWVdsdWN5aGxiR1Z0Wlc1MEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SURBN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1a2FXTjBhVzl1WVhKNUxtZGxkRlpoYkhWbEtHVnNaVzFsYm5RcExtTnZjR2xsY3p0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSb2FYTWdZbUZuSUdOdmJuUmhhVzV6SUhSb1pTQnpjR1ZqYVdacFpXUWdaV3hsYldWdWRDNWNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ1pXeGxiV1Z1ZENCbGJHVnRaVzUwSUhSdklITmxZWEpqYUNCbWIzSXVYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdZbTl2YkdWaGJuMGdkSEoxWlNCcFppQjBhR2x6SUdKaFp5QmpiMjUwWVdsdWN5QjBhR1VnYzNCbFkybG1hV1ZrSUdWc1pXMWxiblFzWEc0Z0lDQWdJQ29nWm1Gc2MyVWdiM1JvWlhKM2FYTmxMbHh1SUNBZ0lDQXFMMXh1SUNBZ0lFSmhaeTV3Y205MGIzUjVjR1V1WTI5dWRHRnBibk1nUFNCbWRXNWpkR2x2YmlBb1pXeGxiV1Z1ZENrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVrYVdOMGFXOXVZWEo1TG1OdmJuUmhhVzV6UzJWNUtHVnNaVzFsYm5RcE8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VtVnRiM1psY3lCdVEyOXdhV1Z6SUc5bUlIUm9aU0J6Y0dWamFXWnBaV1FnYjJKcVpXTjBJSFJ2SUhSb2FYTWdZbUZuTGx4dUlDQWdJQ0FxSUVsbUlIUm9aU0J1ZFcxaVpYSWdiMllnWTI5d2FXVnpJSFJ2SUhKbGJXOTJaU0JwY3lCbmNtVmhkR1Z5SUhSb1lXNGdkR2hsSUdGamRIVmhiQ0J1ZFcxaVpYSmNiaUFnSUNBZ0tpQnZaaUJqYjNCcFpYTWdhVzRnZEdobElFSmhaeXdnWVd4c0lHTnZjR2xsY3lCaGNtVWdjbVZ0YjNabFpDNWNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ1pXeGxiV1Z1ZENCbGJHVnRaVzUwSUhSdklISmxiVzkyWlM1Y2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTI1MWJXSmxjajE5SUc1RGIzQnBaWE1nZEdobElHNTFiV0psY2lCdlppQmpiM0JwWlhNZ2RHOGdjbVZ0YjNabExDQnBaaUIwYUdseklHRnlaM1Z0Wlc1MElHbHpYRzRnSUNBZ0lDb2dkVzVrWldacGJtVmtJREVnWTI5d2VTQnBjeUJ5WlcxdmRtVmtMbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMkp2YjJ4bFlXNTlJSFJ5ZFdVZ2FXWWdZWFFnYkdWaGMzUWdNU0JsYkdWdFpXNTBJSGRoY3lCeVpXMXZkbVZrTGx4dUlDQWdJQ0FxTDF4dUlDQWdJRUpoWnk1d2NtOTBiM1I1Y0dVdWNtVnRiM1psSUQwZ1puVnVZM1JwYjI0Z0tHVnNaVzFsYm5Rc0lHNURiM0JwWlhNcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0c1RGIzQnBaWE1nUFQwOUlIWnZhV1FnTUNrZ2V5QnVRMjl3YVdWeklEMGdNVHNnZlZ4dUlDQWdJQ0FnSUNCcFppQW9kWFJwYkM1cGMxVnVaR1ZtYVc1bFpDaGxiR1Z0Wlc1MEtTQjhmQ0J1UTI5d2FXVnpJRHc5SURBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JwWmlBb0lYUm9hWE11WTI5dWRHRnBibk1vWld4bGJXVnVkQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCdWIyUmxJRDBnZEdocGN5NWthV04wYVc5dVlYSjVMbWRsZEZaaGJIVmxLR1ZzWlcxbGJuUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLRzVEYjNCcFpYTWdQaUJ1YjJSbExtTnZjR2xsY3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YmtWc1pXMWxiblJ6SUMwOUlHNXZaR1V1WTI5d2FXVnpPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dVJXeGxiV1Z1ZEhNZ0xUMGdia052Y0dsbGN6dGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRzV2WkdVdVkyOXdhV1Z6SUMwOUlHNURiM0JwWlhNN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2JtOWtaUzVqYjNCcFpYTWdQRDBnTUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WkdsamRHbHZibUZ5ZVM1eVpXMXZkbVVvWld4bGJXVnVkQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZEhKMVpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVYwZFhKdWN5QmhiaUJoY25KaGVTQmpiMjUwWVdsdWFXNW5JR0ZzYkNCdlppQjBhR1VnWld4bGJXVnVkSE1nYVc0Z2RHaHBjeUJpYVdjZ2FXNGdZWEppYVhSeVlYSjVJRzl5WkdWeUxGeHVJQ0FnSUNBcUlHbHVZMngxWkdsdVp5QnRkV3gwYVhCc1pTQmpiM0JwWlhNdVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1FYSnlZWGw5SUdGdUlHRnljbUY1SUdOdmJuUmhhVzVwYm1jZ1lXeHNJRzltSUhSb1pTQmxiR1Z0Wlc1MGN5QnBiaUIwYUdseklHSmhaeTVjYmlBZ0lDQWdLaTljYmlBZ0lDQkNZV2N1Y0hKdmRHOTBlWEJsTG5SdlFYSnlZWGtnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCaElEMGdXMTA3WEc0Z0lDQWdJQ0FnSUhaaGNpQjJZV3gxWlhNZ1BTQjBhR2x6TG1ScFkzUnBiMjVoY25rdWRtRnNkV1Z6S0NrN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlGOXBJRDBnTUN3Z2RtRnNkV1Z6WHpFZ1BTQjJZV3gxWlhNN0lGOXBJRHdnZG1Gc2RXVnpYekV1YkdWdVozUm9PeUJmYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdibTlrWlNBOUlIWmhiSFZsYzE4eFcxOXBYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJsYkdWdFpXNTBJRDBnYm05a1pTNTJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCamIzQnBaWE1nUFNCdWIyUmxMbU52Y0dsbGN6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUdvZ1BTQXdPeUJxSUR3Z1kyOXdhV1Z6T3lCcUt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoTG5CMWMyZ29aV3hsYldWdWRDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHRTdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaWFIxY201eklHRWdjMlYwSUc5bUlIVnVhWEYxWlNCbGJHVnRaVzUwY3lCcGJpQjBhR2x6SUdKaFp5NWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdGpiMnhzWldOMGFXOXVjeTVUWlhROFZENTlJR0VnYzJWMElHOW1JSFZ1YVhGMVpTQmxiR1Z0Wlc1MGN5QnBiaUIwYUdseklHSmhaeTVjYmlBZ0lDQWdLaTljYmlBZ0lDQkNZV2N1Y0hKdmRHOTBlWEJsTG5SdlUyVjBJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnZEc5eVpYUWdQU0J1WlhjZ1UyVjBYekV1WkdWbVlYVnNkQ2gwYUdsekxuUnZVM1J5UmlrN1hHNGdJQ0FnSUNBZ0lIWmhjaUJsYkdWdFpXNTBjeUE5SUhSb2FYTXVaR2xqZEdsdmJtRnllUzUyWVd4MVpYTW9LVHRjYmlBZ0lDQWdJQ0FnWm05eUlDaDJZWElnWDJrZ1BTQXdMQ0JsYkdWdFpXNTBjMTh4SUQwZ1pXeGxiV1Z1ZEhNN0lGOXBJRHdnWld4bGJXVnVkSE5mTVM1c1pXNW5kR2c3SUY5cEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJsYkdVZ1BTQmxiR1Z0Wlc1MGMxOHhXMTlwWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCMllXeDFaU0E5SUdWc1pTNTJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJ2Y21WMExtRmtaQ2gyWVd4MVpTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJ2Y21WME8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1JYaGxZM1YwWlhNZ2RHaGxJSEJ5YjNacFpHVmtJR1oxYm1OMGFXOXVJRzl1WTJVZ1ptOXlJR1ZoWTJnZ1pXeGxiV1Z1ZEZ4dUlDQWdJQ0FxSUhCeVpYTmxiblFnYVc0Z2RHaHBjeUJpWVdjc0lHbHVZMngxWkdsdVp5QnRkV3gwYVhCc1pTQmpiM0JwWlhNdVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0bWRXNWpkR2x2YmloUFltcGxZM1FwT2lwOUlHTmhiR3hpWVdOcklHWjFibU4wYVc5dUlIUnZJR1Y0WldOMWRHVXNJR2wwSUdselhHNGdJQ0FnSUNvZ2FXNTJiMnRsWkNCM2FYUm9JRzl1WlNCaGNtZDFiV1Z1ZERvZ2RHaGxJR1ZzWlcxbGJuUXVJRlJ2SUdKeVpXRnJJSFJvWlNCcGRHVnlZWFJwYjI0Z2VXOTFJR05oYmx4dUlDQWdJQ0FxSUc5d2RHbHZibUZzYkhrZ2NtVjBkWEp1SUdaaGJITmxMbHh1SUNBZ0lDQXFMMXh1SUNBZ0lFSmhaeTV3Y205MGIzUjVjR1V1Wm05eVJXRmphQ0E5SUdaMWJtTjBhVzl1SUNoallXeHNZbUZqYXlrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1ScFkzUnBiMjVoY25rdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb2F5d2dkaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhaaGJIVmxJRDBnZGk1MllXeDFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJqYjNCcFpYTWdQU0IyTG1OdmNHbGxjenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2dZMjl3YVdWek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZMkZzYkdKaFkyc29kbUZzZFdVcElEMDlQU0JtWVd4elpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVYwZFhKdWN5QjBhR1VnYm5WdFltVnlJRzltSUdWc1pXMWxiblJ6SUdsdUlIUm9hWE1nWW1GbkxseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UyNTFiV0psY24wZ2RHaGxJRzUxYldKbGNpQnZaaUJsYkdWdFpXNTBjeUJwYmlCMGFHbHpJR0poWnk1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0JDWVdjdWNISnZkRzkwZVhCbExuTnBlbVVnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG01RmJHVnRaVzUwY3p0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZKbGRIVnlibk1nZEhKMVpTQnBaaUIwYUdseklHSmhaeUJqYjI1MFlXbHVjeUJ1YnlCbGJHVnRaVzUwY3k1Y2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0aWIyOXNaV0Z1ZlNCMGNuVmxJR2xtSUhSb2FYTWdZbUZuSUdOdmJuUmhhVzV6SUc1dklHVnNaVzFsYm5SekxseHVJQ0FnSUNBcUwxeHVJQ0FnSUVKaFp5NXdjbTkwYjNSNWNHVXVhWE5GYlhCMGVTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVia1ZzWlcxbGJuUnpJRDA5UFNBd08xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VtVnRiM1psY3lCaGJHd2diMllnZEdobElHVnNaVzFsYm5SeklHWnliMjBnZEdocGN5QmlZV2N1WEc0Z0lDQWdJQ292WEc0Z0lDQWdRbUZuTG5CeWIzUnZkSGx3WlM1amJHVmhjaUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dVJXeGxiV1Z1ZEhNZ1BTQXdPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtUnBZM1JwYjI1aGNua3VZMnhsWVhJb0tUdGNiaUFnSUNCOU8xeHVJQ0FnSUhKbGRIVnliaUJDWVdjN1hHNTlLQ2twT3lBdkx5QkZibVFnYjJZZ1ltRm5YRzVsZUhCdmNuUnpMbVJsWm1GMWJIUWdQU0JDWVdjN1hHNHZMeU1nYzI5MWNtTmxUV0Z3Y0dsdVoxVlNURDFDWVdjdWFuTXViV0Z3SWl3aVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1UFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dYQ0pmWDJWelRXOWtkV3hsWENJc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hHNTJZWElnZFhScGJDQTlJSEpsY1hWcGNtVW9YQ0l1TDNWMGFXeGNJaWs3WEc1MllYSWdSR2xqZEdsdmJtRnllU0E5SUM4cUtpQkFZMnhoYzNNZ0tpOGdLR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRGNtVmhkR1Z6SUdGdUlHVnRjSFI1SUdScFkzUnBiMjVoY25rdVhHNGdJQ0FnSUNvZ1FHTnNZWE56SUR4d1BrUnBZM1JwYjI1aGNtbGxjeUJ0WVhBZ2EyVjVjeUIwYnlCMllXeDFaWE03SUdWaFkyZ2dhMlY1SUdOaGJpQnRZWEFnZEc4Z1lYUWdiVzl6ZENCdmJtVWdkbUZzZFdVdVhHNGdJQ0FnSUNvZ1ZHaHBjeUJwYlhCc1pXMWxiblJoZEdsdmJpQmhZMk5sY0hSeklHRnVlU0JyYVc1a0lHOW1JRzlpYW1WamRITWdZWE1nYTJWNWN5NDhMM0ErWEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUE4Y0Q1SlppQjBhR1VnYTJWNWN5QmhjbVVnWTNWemRHOXRJRzlpYW1WamRITWdZU0JtZFc1amRHbHZiaUIzYUdsamFDQmpiMjUyWlhKMGN5QnJaWGx6SUhSdklIVnVhWEYxWlZ4dUlDQWdJQ0FxSUhOMGNtbHVaM01nYlhWemRDQmlaU0J3Y205MmFXUmxaQzRnUlhoaGJYQnNaVG84TDNBK1hHNGdJQ0FnSUNvZ1BIQnlaVDVjYmlBZ0lDQWdLaUJtZFc1amRHbHZiaUJ3WlhSVWIxTjBjbWx1Wnlod1pYUXBJSHRjYmlBZ0lDQWdLaUFnY21WMGRYSnVJSEJsZEM1dVlXMWxPMXh1SUNBZ0lDQXFJSDFjYmlBZ0lDQWdLaUE4TDNCeVpUNWNiaUFnSUNBZ0tpQkFZMjl1YzNSeWRXTjBiM0pjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMloxYm1OMGFXOXVLRTlpYW1WamRDazZjM1J5YVc1blBYMGdkRzlUZEhKR2RXNWpkR2x2YmlCdmNIUnBiMjVoYkNCbWRXNWpkR2x2YmlCMWMyVmtYRzRnSUNBZ0lDb2dkRzhnWTI5dWRtVnlkQ0JyWlhseklIUnZJSE4wY21sdVozTXVJRWxtSUhSb1pTQnJaWGx6SUdGeVpXNG5kQ0J6ZEhKcGJtZHpJRzl5SUdsbUlIUnZVM1J5YVc1bktDbGNiaUFnSUNBZ0tpQnBjeUJ1YjNRZ1lYQndjbTl3Y21saGRHVXNJR0VnWTNWemRHOXRJR1oxYm1OMGFXOXVJSGRvYVdOb0lISmxZMlZwZG1WeklHRWdhMlY1SUdGdVpDQnlaWFIxY201eklHRmNiaUFnSUNBZ0tpQjFibWx4ZFdVZ2MzUnlhVzVuSUcxMWMzUWdZbVVnY0hKdmRtbGtaV1F1WEc0Z0lDQWdJQ292WEc0Z0lDQWdablZ1WTNScGIyNGdSR2xqZEdsdmJtRnllU2gwYjFOMGNrWjFibU4wYVc5dUtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWRHRmliR1VnUFNCN2ZUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dVJXeGxiV1Z1ZEhNZ1BTQXdPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuUnZVM1J5SUQwZ2RHOVRkSEpHZFc1amRHbHZiaUI4ZkNCMWRHbHNMbVJsWm1GMWJIUlViMU4wY21sdVp6dGNiaUFnSUNCOVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VtVjBkWEp1Y3lCMGFHVWdkbUZzZFdVZ2RHOGdkMmhwWTJnZ2RHaHBjeUJrYVdOMGFXOXVZWEo1SUcxaGNITWdkR2hsSUhOd1pXTnBabWxsWkNCclpYa3VYRzRnSUNBZ0lDb2dVbVYwZFhKdWN5QjFibVJsWm1sdVpXUWdhV1lnZEdocGN5QmthV04wYVc5dVlYSjVJR052Ym5SaGFXNXpJRzV2SUcxaGNIQnBibWNnWm05eUlIUm9hWE1nYTJWNUxseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCclpYa2dhMlY1SUhkb2IzTmxJR0Z6YzI5amFXRjBaV1FnZG1Gc2RXVWdhWE1nZEc4Z1ltVWdjbVYwZFhKdVpXUXVYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdLbjBnZEdobElIWmhiSFZsSUhSdklIZG9hV05vSUhSb2FYTWdaR2xqZEdsdmJtRnllU0J0WVhCeklIUm9aU0J6Y0dWamFXWnBaV1FnYTJWNUlHOXlYRzRnSUNBZ0lDb2dkVzVrWldacGJtVmtJR2xtSUhSb1pTQnRZWEFnWTI5dWRHRnBibk1nYm04Z2JXRndjR2x1WnlCbWIzSWdkR2hwY3lCclpYa3VYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1JHbGpkR2x2Ym1GeWVTNXdjbTkwYjNSNWNHVXVaMlYwVm1Gc2RXVWdQU0JtZFc1amRHbHZiaUFvYTJWNUtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCd1lXbHlJRDBnZEdocGN5NTBZV0pzWlZzbkpDY2dLeUIwYUdsekxuUnZVM1J5S0d0bGVTbGRPMXh1SUNBZ0lDQWdJQ0JwWmlBb2RYUnBiQzVwYzFWdVpHVm1hVzVsWkNod1lXbHlLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjR0ZwY2k1MllXeDFaVHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUZ6YzI5amFXRjBaWE1nZEdobElITndaV05wWm1sbFpDQjJZV3gxWlNCM2FYUm9JSFJvWlNCemNHVmphV1pwWldRZ2EyVjVJR2x1SUhSb2FYTWdaR2xqZEdsdmJtRnllUzVjYmlBZ0lDQWdLaUJKWmlCMGFHVWdaR2xqZEdsdmJtRnllU0J3Y21WMmFXOTFjMng1SUdOdmJuUmhhVzVsWkNCaElHMWhjSEJwYm1jZ1ptOXlJSFJvYVhNZ2EyVjVMQ0IwYUdVZ2IyeGtYRzRnSUNBZ0lDb2dkbUZzZFdVZ2FYTWdjbVZ3YkdGalpXUWdZbmtnZEdobElITndaV05wWm1sbFpDQjJZV3gxWlM1Y2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnYTJWNUlHdGxlU0IzYVhSb0lIZG9hV05vSUhSb1pTQnpjR1ZqYVdacFpXUWdkbUZzZFdVZ2FYTWdkRzhnWW1WY2JpQWdJQ0FnS2lCaGMzTnZZMmxoZEdWa0xseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCMllXeDFaU0IyWVd4MVpTQjBieUJpWlNCaGMzTnZZMmxoZEdWa0lIZHBkR2dnZEdobElITndaV05wWm1sbFpDQnJaWGt1WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3S24wZ2NISmxkbWx2ZFhNZ2RtRnNkV1VnWVhOemIyTnBZWFJsWkNCM2FYUm9JSFJvWlNCemNHVmphV1pwWldRZ2EyVjVMQ0J2Y2lCMWJtUmxabWx1WldRZ2FXWmNiaUFnSUNBZ0tpQjBhR1Z5WlNCM1lYTWdibThnYldGd2NHbHVaeUJtYjNJZ2RHaGxJR3RsZVNCdmNpQnBaaUIwYUdVZ2EyVjVMM1poYkhWbElHRnlaU0IxYm1SbFptbHVaV1F1WEc0Z0lDQWdJQ292WEc0Z0lDQWdSR2xqZEdsdmJtRnllUzV3Y205MGIzUjVjR1V1YzJWMFZtRnNkV1VnUFNCbWRXNWpkR2x2YmlBb2EyVjVMQ0IyWVd4MVpTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2RYUnBiQzVwYzFWdVpHVm1hVzVsWkNoclpYa3BJSHg4SUhWMGFXd3VhWE5WYm1SbFptbHVaV1FvZG1Gc2RXVXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSFpoY2lCeVpYUTdYRzRnSUNBZ0lDQWdJSFpoY2lCcklEMGdKeVFuSUNzZ2RHaHBjeTUwYjFOMGNpaHJaWGtwTzF4dUlDQWdJQ0FnSUNCMllYSWdjSEpsZG1sdmRYTkZiR1Z0Wlc1MElEMGdkR2hwY3k1MFlXSnNaVnRyWFR0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFYwYVd3dWFYTlZibVJsWm1sdVpXUW9jSEpsZG1sdmRYTkZiR1Z0Wlc1MEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV1Uld4bGJXVnVkSE1yS3p0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZENBOUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRDQTlJSEJ5WlhacGIzVnpSV3hsYldWdWRDNTJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjBhR2x6TG5SaFlteGxXMnRkSUQwZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYTJWNU9pQnJaWGtzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlRvZ2RtRnNkV1ZjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKbGREdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGSmxiVzkyWlhNZ2RHaGxJRzFoY0hCcGJtY2dabTl5SUhSb2FYTWdhMlY1SUdaeWIyMGdkR2hwY3lCa2FXTjBhVzl1WVhKNUlHbG1JR2wwSUdseklIQnlaWE5sYm5RdVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUd0bGVTQnJaWGtnZDJodmMyVWdiV0Z3Y0dsdVp5QnBjeUIwYnlCaVpTQnlaVzF2ZG1Wa0lHWnliMjBnZEdobFhHNGdJQ0FnSUNvZ1pHbGpkR2x2Ym1GeWVTNWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIc3FmU0J3Y21WMmFXOTFjeUIyWVd4MVpTQmhjM052WTJsaGRHVmtJSGRwZEdnZ2MzQmxZMmxtYVdWa0lHdGxlU3dnYjNJZ2RXNWtaV1pwYm1Wa0lHbG1YRzRnSUNBZ0lDb2dkR2hsY21VZ2QyRnpJRzV2SUcxaGNIQnBibWNnWm05eUlHdGxlUzVjYmlBZ0lDQWdLaTljYmlBZ0lDQkVhV04wYVc5dVlYSjVMbkJ5YjNSdmRIbHdaUzV5WlcxdmRtVWdQU0JtZFc1amRHbHZiaUFvYTJWNUtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCcklEMGdKeVFuSUNzZ2RHaHBjeTUwYjFOMGNpaHJaWGtwTzF4dUlDQWdJQ0FnSUNCMllYSWdjSEpsZG1sdmRYTkZiR1Z0Wlc1MElEMGdkR2hwY3k1MFlXSnNaVnRyWFR0Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0YxZEdsc0xtbHpWVzVrWldacGJtVmtLSEJ5WlhacGIzVnpSV3hsYldWdWRDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxiR1YwWlNCMGFHbHpMblJoWW14bFcydGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV1Uld4bGJXVnVkSE10TFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQndjbVYyYVc5MWMwVnNaVzFsYm5RdWRtRnNkV1U3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZKbGRIVnlibk1nWVc0Z1lYSnlZWGtnWTI5dWRHRnBibWx1WnlCaGJHd2diMllnZEdobElHdGxlWE1nYVc0Z2RHaHBjeUJrYVdOMGFXOXVZWEo1TGx4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTBGeWNtRjVmU0JoYmlCaGNuSmhlU0JqYjI1MFlXbHVhVzVuSUdGc2JDQnZaaUIwYUdVZ2EyVjVjeUJwYmlCMGFHbHpJR1JwWTNScGIyNWhjbmt1WEc0Z0lDQWdJQ292WEc0Z0lDQWdSR2xqZEdsdmJtRnllUzV3Y205MGIzUjVjR1V1YTJWNWN5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJR0Z5Y21GNUlEMGdXMTA3WEc0Z0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUc1aGJXVmZNU0JwYmlCMGFHbHpMblJoWW14bEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kWFJwYkM1b1lYTW9kR2hwY3k1MFlXSnNaU3dnYm1GdFpWOHhLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGNpQndZV2x5SUQwZ2RHaHBjeTUwWVdKc1pWdHVZVzFsWHpGZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnljbUY1TG5CMWMyZ29jR0ZwY2k1clpYa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmhjbkpoZVR0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZKbGRIVnlibk1nWVc0Z1lYSnlZWGtnWTI5dWRHRnBibWx1WnlCaGJHd2diMllnZEdobElIWmhiSFZsY3lCcGJpQjBhR2x6SUdScFkzUnBiMjVoY25rdVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1FYSnlZWGw5SUdGdUlHRnljbUY1SUdOdmJuUmhhVzVwYm1jZ1lXeHNJRzltSUhSb1pTQjJZV3gxWlhNZ2FXNGdkR2hwY3lCa2FXTjBhVzl1WVhKNUxseHVJQ0FnSUNBcUwxeHVJQ0FnSUVScFkzUnBiMjVoY25rdWNISnZkRzkwZVhCbExuWmhiSFZsY3lBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHRnljbUY1SUQwZ1cxMDdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2RtRnlJRzVoYldWZk1pQnBiaUIwYUdsekxuUmhZbXhsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RYUnBiQzVvWVhNb2RHaHBjeTUwWVdKc1pTd2dibUZ0WlY4eUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCd1lXbHlJRDBnZEdocGN5NTBZV0pzWlZ0dVlXMWxYekpkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGeWNtRjVMbkIxYzJnb2NHRnBjaTUyWVd4MVpTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHRnljbUY1TzF4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUlhobFkzVjBaWE1nZEdobElIQnliM1pwWkdWa0lHWjFibU4wYVc5dUlHOXVZMlVnWm05eUlHVmhZMmdnYTJWNUxYWmhiSFZsSUhCaGFYSmNiaUFnSUNBZ0tpQndjbVZ6Wlc1MElHbHVJSFJvYVhNZ1pHbGpkR2x2Ym1GeWVTNWNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UyWjFibU4wYVc5dUtFOWlhbVZqZEN4UFltcGxZM1FwT2lwOUlHTmhiR3hpWVdOcklHWjFibU4wYVc5dUlIUnZJR1Y0WldOMWRHVXNJR2wwSUdselhHNGdJQ0FnSUNvZ2FXNTJiMnRsWkNCM2FYUm9JSFIzYnlCaGNtZDFiV1Z1ZEhNNklHdGxlU0JoYm1RZ2RtRnNkV1V1SUZSdklHSnlaV0ZySUhSb1pTQnBkR1Z5WVhScGIyNGdlVzkxSUdOaGJseHVJQ0FnSUNBcUlHOXdkR2x2Ym1Gc2JIa2djbVYwZFhKdUlHWmhiSE5sTGx4dUlDQWdJQ0FxTDF4dUlDQWdJRVJwWTNScGIyNWhjbmt1Y0hKdmRHOTBlWEJsTG1admNrVmhZMmdnUFNCbWRXNWpkR2x2YmlBb1kyRnNiR0poWTJzcElIdGNiaUFnSUNBZ0lDQWdabTl5SUNoMllYSWdibUZ0WlY4eklHbHVJSFJvYVhNdWRHRmliR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMWRHbHNMbWhoY3loMGFHbHpMblJoWW14bExDQnVZVzFsWHpNcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhCaGFYSWdQU0IwYUdsekxuUmhZbXhsVzI1aGJXVmZNMTA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlISmxkQ0E5SUdOaGJHeGlZV05yS0hCaGFYSXVhMlY1TENCd1lXbHlMblpoYkhWbEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY21WMElEMDlQU0JtWVd4elpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJTWlhSMWNtNXpJSFJ5ZFdVZ2FXWWdkR2hwY3lCa2FXTjBhVzl1WVhKNUlHTnZiblJoYVc1eklHRWdiV0Z3Y0dsdVp5Qm1iM0lnZEdobElITndaV05wWm1sbFpDQnJaWGt1WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJR3RsZVNCclpYa2dkMmh2YzJVZ2NISmxjMlZ1WTJVZ2FXNGdkR2hwY3lCa2FXTjBhVzl1WVhKNUlHbHpJSFJ2SUdKbFhHNGdJQ0FnSUNvZ2RHVnpkR1ZrTGx4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTJKdmIyeGxZVzU5SUhSeWRXVWdhV1lnZEdocGN5QmthV04wYVc5dVlYSjVJR052Ym5SaGFXNXpJR0VnYldGd2NHbHVaeUJtYjNJZ2RHaGxYRzRnSUNBZ0lDb2djM0JsWTJsbWFXVmtJR3RsZVM1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0JFYVdOMGFXOXVZWEo1TG5CeWIzUnZkSGx3WlM1amIyNTBZV2x1YzB0bGVTQTlJR1oxYm1OMGFXOXVJQ2hyWlhrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDRjFkR2xzTG1selZXNWtaV1pwYm1Wa0tIUm9hWE11WjJWMFZtRnNkV1VvYTJWNUtTazdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaVzF2ZG1WeklHRnNiQ0J0WVhCd2FXNW5jeUJtY205dElIUm9hWE1nWkdsamRHbHZibUZ5ZVM1Y2JpQWdJQ0FnS2lCQWRHaHBjeUI3WTI5c2JHVmpkR2x2Ym5NdVJHbGpkR2x2Ym1GeWVYMWNiaUFnSUNBZ0tpOWNiaUFnSUNCRWFXTjBhVzl1WVhKNUxuQnliM1J2ZEhsd1pTNWpiR1ZoY2lBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NTBZV0pzWlNBOUlIdDlPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtNUZiR1Z0Wlc1MGN5QTlJREE3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJTWlhSMWNtNXpJSFJvWlNCdWRXMWlaWElnYjJZZ2EyVjVjeUJwYmlCMGFHbHpJR1JwWTNScGIyNWhjbmt1WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Ym5WdFltVnlmU0IwYUdVZ2JuVnRZbVZ5SUc5bUlHdGxlUzEyWVd4MVpTQnRZWEJ3YVc1bmN5QnBiaUIwYUdseklHUnBZM1JwYjI1aGNua3VYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1JHbGpkR2x2Ym1GeWVTNXdjbTkwYjNSNWNHVXVjMmw2WlNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWJrVnNaVzFsYm5Sek8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSb2FYTWdaR2xqZEdsdmJtRnllU0JqYjI1MFlXbHVjeUJ1YnlCdFlYQndhVzVuY3k1Y2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0aWIyOXNaV0Z1ZlNCMGNuVmxJR2xtSUhSb2FYTWdaR2xqZEdsdmJtRnllU0JqYjI1MFlXbHVjeUJ1YnlCdFlYQndhVzVuY3k1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0JFYVdOMGFXOXVZWEo1TG5CeWIzUnZkSGx3WlM1cGMwVnRjSFI1SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1dVJXeGxiV1Z1ZEhNZ1BEMGdNRHRjYmlBZ0lDQjlPMXh1SUNBZ0lFUnBZM1JwYjI1aGNua3VjSEp2ZEc5MGVYQmxMblJ2VTNSeWFXNW5JRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnZEc5eVpYUWdQU0FuZXljN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Wm05eVJXRmphQ2htZFc1amRHbHZiaUFvYXl3Z2Rpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHOXlaWFFnS3owZ1hDSmNYRzVjWEhSY0lpQXJJR3NnS3lCY0lpQTZJRndpSUNzZ2RqdGNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYjNKbGRDQXJJQ2RjWEc1OUp6dGNiaUFnSUNCOU8xeHVJQ0FnSUhKbGRIVnliaUJFYVdOMGFXOXVZWEo1TzF4dWZTZ3BLVHNnTHk4Z1JXNWtJRzltSUdScFkzUnBiMjVoY25sY2JtVjRjRzl5ZEhNdVpHVm1ZWFZzZENBOUlFUnBZM1JwYjI1aGNuazdYRzR2THlNZ2MyOTFjbU5sVFdGd2NHbHVaMVZTVEQxRWFXTjBhVzl1WVhKNUxtcHpMbTFoY0NJc0lsd2lkWE5sSUhOMGNtbGpkRndpTzF4dWRtRnlJRjlmWlhoMFpXNWtjeUE5SUNoMGFHbHpJQ1ltSUhSb2FYTXVYMTlsZUhSbGJtUnpLU0I4ZkNBb1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lIWmhjaUJsZUhSbGJtUlRkR0YwYVdOeklEMGdUMkpxWldOMExuTmxkRkJ5YjNSdmRIbHdaVTltSUh4OFhHNGdJQ0FnSUNBZ0lDaDdJRjlmY0hKdmRHOWZYem9nVzEwZ2ZTQnBibk4wWVc1alpXOW1JRUZ5Y21GNUlDWW1JR1oxYm1OMGFXOXVJQ2hrTENCaUtTQjdJR1F1WDE5d2NtOTBiMTlmSUQwZ1lqc2dmU2tnZkh4Y2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI0Z0tHUXNJR0lwSUhzZ1ptOXlJQ2gyWVhJZ2NDQnBiaUJpS1NCcFppQW9ZaTVvWVhOUGQyNVFjbTl3WlhKMGVTaHdLU2tnWkZ0d1hTQTlJR0piY0YwN0lIMDdYRzRnSUNBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1SUNoa0xDQmlLU0I3WEc0Z0lDQWdJQ0FnSUdWNGRHVnVaRk4wWVhScFkzTW9aQ3dnWWlrN1hHNGdJQ0FnSUNBZ0lHWjFibU4wYVc5dUlGOWZLQ2tnZXlCMGFHbHpMbU52Ym5OMGNuVmpkRzl5SUQwZ1pEc2dmVnh1SUNBZ0lDQWdJQ0JrTG5CeWIzUnZkSGx3WlNBOUlHSWdQVDA5SUc1MWJHd2dQeUJQWW1wbFkzUXVZM0psWVhSbEtHSXBJRG9nS0Y5ZkxuQnliM1J2ZEhsd1pTQTlJR0l1Y0hKdmRHOTBlWEJsTENCdVpYY2dYMThvS1NrN1hHNGdJQ0FnZlR0Y2JuMHBLQ2s3WEc1UFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dYQ0pmWDJWelRXOWtkV3hsWENJc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hHNTJZWElnUkdsamRHbHZibUZ5ZVY4eElEMGdjbVZ4ZFdseVpTaGNJaTR2UkdsamRHbHZibUZ5ZVZ3aUtUdGNiblpoY2lCMWRHbHNJRDBnY21WeGRXbHlaU2hjSWk0dmRYUnBiRndpS1R0Y2JuWmhjaUJHWVdOMGIzSjVSR2xqZEdsdmJtRnllU0E5SUM4cUtpQkFZMnhoYzNNZ0tpOGdLR1oxYm1OMGFXOXVJQ2hmYzNWd1pYSXBJSHRjYmlBZ0lDQmZYMlY0ZEdWdVpITW9SbUZqZEc5eWVVUnBZM1JwYjI1aGNua3NJRjl6ZFhCbGNpazdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRM0psWVhSbGN5QmhiaUJsYlhCMGVTQmthV04wYVc5dVlYSjVMbHh1SUNBZ0lDQXFJRUJqYkdGemN5QThjRDVFYVdOMGFXOXVZWEpwWlhNZ2JXRndJR3RsZVhNZ2RHOGdkbUZzZFdWek95QmxZV05vSUd0bGVTQmpZVzRnYldGd0lIUnZJR0YwSUcxdmMzUWdiMjVsSUhaaGJIVmxMbHh1SUNBZ0lDQXFJRlJvYVhNZ2FXMXdiR1Z0Wlc1MFlYUnBiMjRnWVdOalpYQjBjeUJoYm5rZ2EybHVaQ0J2WmlCdlltcGxZM1J6SUdGeklHdGxlWE11UEM5d1BseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1BIQStWR2hsSUdSbFptRjFiSFFnWm1GamRHOXllU0JtZFc1amRHbHZiaUJ6YUc5MWJHUWdjbVYwZFhKdUlHRWdibVYzSUc5aWFtVmpkQ0J2WmlCMGFHVWdjSEp2ZG1sa1pXUmNiaUFnSUNBZ0tpQjBlWEJsTGlCRmVHRnRjR3hsT2p3dmNENWNiaUFnSUNBZ0tpQThjSEpsUGx4dUlDQWdJQ0FxSUdaMWJtTjBhVzl1SUhCbGRFWmhZM1J2Y25rb0tTQjdYRzRnSUNBZ0lDb2dJSEpsZEhWeWJpQnVaWGNnVUdWMEtDazdYRzRnSUNBZ0lDb2dmVnh1SUNBZ0lDQXFJRHd2Y0hKbFBseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1BIQStTV1lnZEdobElHdGxlWE1nWVhKbElHTjFjM1J2YlNCdlltcGxZM1J6SUdFZ1puVnVZM1JwYjI0Z2QyaHBZMmdnWTI5dWRtVnlkSE1nYTJWNWN5QjBieUIxYm1seGRXVmNiaUFnSUNBZ0tpQnpkSEpwYm1keklHMTFjM1FnWW1VZ2NISnZkbWxrWldRdUlFVjRZVzF3YkdVNlBDOXdQbHh1SUNBZ0lDQXFJRHh3Y21VK1hHNGdJQ0FnSUNvZ1puVnVZM1JwYjI0Z2NHVjBWRzlUZEhKcGJtY29jR1YwS1NCN1hHNGdJQ0FnSUNvZ0lISmxkSFZ5YmlCd1pYUXVibUZ0WlR0Y2JpQWdJQ0FnS2lCOVhHNGdJQ0FnSUNvZ1BDOXdjbVUrWEc0Z0lDQWdJQ29nUUdOdmJuTjBjblZqZEc5eVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0bWRXNWpkR2x2YmlncE9sWTlmU0JrWldaaGRXeDBSbUZqZEc5eWVVWjFibU4wYVc5dUlHWjFibU4wYVc5dUlIVnpaV1FnZEc4Z1kzSmxZWFJsSUdGY2JpQWdJQ0FnS2lCa1pXWmhkV3gwSUc5aWFtVmpkQzVjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMloxYm1OMGFXOXVLRTlpYW1WamRDazZjM1J5YVc1blBYMGdkRzlUZEhKR2RXNWpkR2x2YmlCdmNIUnBiMjVoYkNCbWRXNWpkR2x2YmlCMWMyVmtYRzRnSUNBZ0lDb2dkRzhnWTI5dWRtVnlkQ0JyWlhseklIUnZJSE4wY21sdVozTXVJRWxtSUhSb1pTQnJaWGx6SUdGeVpXNG5kQ0J6ZEhKcGJtZHpJRzl5SUdsbUlIUnZVM1J5YVc1bktDbGNiaUFnSUNBZ0tpQnBjeUJ1YjNRZ1lYQndjbTl3Y21saGRHVXNJR0VnWTNWemRHOXRJR1oxYm1OMGFXOXVJSGRvYVdOb0lISmxZMlZwZG1WeklHRWdhMlY1SUdGdVpDQnlaWFIxY201eklHRmNiaUFnSUNBZ0tpQjFibWx4ZFdVZ2MzUnlhVzVuSUcxMWMzUWdZbVVnY0hKdmRtbGtaV1F1WEc0Z0lDQWdJQ292WEc0Z0lDQWdablZ1WTNScGIyNGdSbUZqZEc5eWVVUnBZM1JwYjI1aGNua29aR1ZtWVhWc2RFWmhZM1J2Y25sR2RXNWpkR2x2Yml3Z2RHOVRkSEpHZFc1amRHbHZiaWtnZTF4dUlDQWdJQ0FnSUNCMllYSWdYM1JvYVhNZ1BTQmZjM1Z3WlhJdVkyRnNiQ2gwYUdsekxDQjBiMU4wY2taMWJtTjBhVzl1S1NCOGZDQjBhR2x6TzF4dUlDQWdJQ0FnSUNCZmRHaHBjeTVrWldaaGRXeDBSbUZqZEc5eWVVWjFibU4wYVc5dUlEMGdaR1ZtWVhWc2RFWmhZM1J2Y25sR2RXNWpkR2x2Ymp0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUY5MGFHbHpPMXh1SUNBZ0lIMWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkJjM052WTJsaGRHVnpJSFJvWlNCemNHVmphV1pwWldRZ1pHVm1ZWFZzZENCMllXeDFaU0IzYVhSb0lIUm9aU0J6Y0dWamFXWnBaV1FnYTJWNUlHbHVJSFJvYVhNZ1pHbGpkR2x2Ym1GeWVTeGNiaUFnSUNBZ0tpQnBaaUJwZENCa2FXUnVKM1FnWTI5dWRHRnBiaUIwYUdVZ2EyVjVJSGxsZEM0Z1NXWWdkR2hsSUd0bGVTQmxlR2x6ZEdWa0xDQjBhR1VnWlhocGMzUnBibWNnZG1Gc2RXVWdkMmxzYkNCaVpTQjFjMlZrTGx4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0JyWlhrZ2EyVjVJSGRwZEdnZ2QyaHBZMmdnZEdobElITndaV05wWm1sbFpDQjJZV3gxWlNCcGN5QjBieUJpWlZ4dUlDQWdJQ0FxSUdGemMyOWphV0YwWldRdVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUdSbFptRjFiSFJXWVd4MVpTQmtaV1poZFd4MElIWmhiSFZsSUhSdklHSmxJR0Z6YzI5amFXRjBaV1FnZDJsMGFDQjBhR1VnYzNCbFkybG1hV1ZrSUd0bGVTNWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIc3FmU0J3Y21WMmFXOTFjeUIyWVd4MVpTQmhjM052WTJsaGRHVmtJSGRwZEdnZ2RHaGxJSE53WldOcFptbGxaQ0JyWlhrc0lHOXlJSFJvWlNCa1pXWmhkV3gwSUhaaGJIVmxMRnh1SUNBZ0lDQXFJR2xtSUhSb1pTQnJaWGtnWkdsa2JpZDBJR1Y0YVhOMElIbGxkQzVjYmlBZ0lDQWdLaTljYmlBZ0lDQkdZV04wYjNKNVJHbGpkR2x2Ym1GeWVTNXdjbTkwYjNSNWNHVXVjMlYwUkdWbVlYVnNkQ0E5SUdaMWJtTjBhVzl1SUNoclpYa3NJR1JsWm1GMWJIUldZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnWTNWeWNtVnVkRlpoYkhWbElEMGdYM04xY0dWeUxuQnliM1J2ZEhsd1pTNW5aWFJXWVd4MVpTNWpZV3hzS0hSb2FYTXNJR3RsZVNrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gxZEdsc0xtbHpWVzVrWldacGJtVmtLR04xY25KbGJuUldZV3gxWlNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjMlYwVm1Gc2RXVW9hMlY1TENCa1pXWmhkV3gwVm1Gc2RXVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdSbFptRjFiSFJXWVd4MVpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZM1Z5Y21WdWRGWmhiSFZsTzF4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVW1WMGRYSnVjeUIwYUdVZ2RtRnNkV1VnZEc4Z2QyaHBZMmdnZEdocGN5QmthV04wYVc5dVlYSjVJRzFoY0hNZ2RHaGxJSE53WldOcFptbGxaQ0JyWlhrdVhHNGdJQ0FnSUNvZ1VtVjBkWEp1Y3lCaElHUmxabUYxYkhRZ2RtRnNkV1VnWTNKbFlYUmxaQ0JpZVNCMGFHVWdabUZqZEc5eWVTQndZWE56WldRZ2FXNGdkR2hsSUdOdmJuTjBjblZqZEc5eUxGeHVJQ0FnSUNBcUlHbG1JSFJvYVhNZ1pHbGpkR2x2Ym1GeWVTQmpiMjUwWVdsdWN5QnVieUJ0WVhCd2FXNW5JR1p2Y2lCMGFHbHpJR3RsZVM0Z1ZHaGxJRzFwYzNOcGJtY2dhMlY1SUhkcGJHeGNiaUFnSUNBZ0tpQmhkWFJ2YldGMGFXTmhiR3g1SUdKbElHRmtaR1ZrSUhSdklIUm9aU0JrYVdOMGFXOXVZWEo1TGx4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0JyWlhrZ2EyVjVJSGRvYjNObElHRnpjMjlqYVdGMFpXUWdkbUZzZFdVZ2FYTWdkRzhnWW1VZ2NtVjBkWEp1WldRdVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN0tuMGdkR2hsSUhaaGJIVmxJSFJ2SUhkb2FXTm9JSFJvYVhNZ1pHbGpkR2x2Ym1GeWVTQnRZWEJ6SUhSb1pTQnpjR1ZqYVdacFpXUWdhMlY1SUc5eVhHNGdJQ0FnSUNvZ1lTQmtaV1poZFd4MElIWmhiSFZsSUdsbUlIUm9aU0J0WVhBZ1kyOXVkR0ZwYm5NZ2JtOGdiV0Z3Y0dsdVp5Qm1iM0lnZEdocGN5QnJaWGt1WEc0Z0lDQWdJQ292WEc0Z0lDQWdSbUZqZEc5eWVVUnBZM1JwYjI1aGNua3VjSEp2ZEc5MGVYQmxMbWRsZEZaaGJIVmxJRDBnWm5WdVkzUnBiMjRnS0d0bGVTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1elpYUkVaV1poZFd4MEtHdGxlU3dnZEdocGN5NWtaV1poZFd4MFJtRmpkRzl5ZVVaMWJtTjBhVzl1S0NrcE8xeHVJQ0FnSUgwN1hHNGdJQ0FnY21WMGRYSnVJRVpoWTNSdmNubEVhV04wYVc5dVlYSjVPMXh1ZlNoRWFXTjBhVzl1WVhKNVh6RXVaR1ZtWVhWc2RDa3BPMXh1Wlhod2IzSjBjeTVrWldaaGRXeDBJRDBnUm1GamRHOXllVVJwWTNScGIyNWhjbms3WEc0dkx5TWdjMjkxY21ObFRXRndjR2x1WjFWU1REMUdZV04wYjNKNVJHbGpkR2x2Ym1GeWVTNXFjeTV0WVhBaUxDSmNJblZ6WlNCemRISnBZM1JjSWp0Y2JrOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0JjSWw5ZlpYTk5iMlIxYkdWY0lpd2dleUIyWVd4MVpUb2dkSEoxWlNCOUtUdGNiblpoY2lCamIyeHNaV04wYVc5dWN5QTlJSEpsY1hWcGNtVW9YQ0l1TDNWMGFXeGNJaWs3WEc1MllYSWdZWEp5WVhseklEMGdjbVZ4ZFdseVpTaGNJaTR2WVhKeVlYbHpYQ0lwTzF4dWRtRnlJRWhsWVhBZ1BTQXZLaW9nUUdOc1lYTnpJQ292SUNobWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRM0psWVhSbGN5QmhiaUJsYlhCMGVTQklaV0Z3TGx4dUlDQWdJQ0FxSUVCamJHRnpjMXh1SUNBZ0lDQXFJRHh3UGtFZ2FHVmhjQ0JwY3lCaElHSnBibUZ5ZVNCMGNtVmxMQ0IzYUdWeVpTQjBhR1VnYm05a1pYTWdiV0ZwYm5SaGFXNGdkR2hsSUdobFlYQWdjSEp2Y0dWeWRIazZYRzRnSUNBZ0lDb2daV0ZqYUNCdWIyUmxJR2x6SUhOdFlXeHNaWElnZEdoaGJpQmxZV05vSUc5bUlHbDBjeUJqYUdsc1pISmxiaUJoYm1RZ2RHaGxjbVZtYjNKbElHRWdUV2x1U0dWaGNGeHVJQ0FnSUNBcUlGUm9hWE1nYVcxd2JHVnRaVzUwWVhScGIyNGdkWE5sY3lCaGJpQmhjbkpoZVNCMGJ5QnpkRzl5WlNCbGJHVnRaVzUwY3k0OEwzQStYRzRnSUNBZ0lDb2dQSEErU1dZZ2RHaGxJR2x1YzJWeWRHVmtJR1ZzWlcxbGJuUnpJR0Z5WlNCamRYTjBiMjBnYjJKcVpXTjBjeUJoSUdOdmJYQmhjbVVnWm5WdVkzUnBiMjRnYlhWemRDQmlaU0J3Y205MmFXUmxaQ3hjYmlBZ0lDQWdLaUFnWVhRZ1kyOXVjM1J5ZFdOMGFXOXVJSFJwYldVc0lHOTBhR1Z5ZDJselpTQjBhR1VnUEQwc0lEMDlQU0JoYm1RZ1BqMGdiM0JsY21GMGIzSnpJR0Z5WlZ4dUlDQWdJQ0FxSUhWelpXUWdkRzhnWTI5dGNHRnlaU0JsYkdWdFpXNTBjeTRnUlhoaGJYQnNaVG84TDNBK1hHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lBOGNISmxQbHh1SUNBZ0lDQXFJR1oxYm1OMGFXOXVJR052YlhCaGNtVW9ZU3dnWWlrZ2UxeHVJQ0FnSUNBcUlDQnBaaUFvWVNCcGN5QnNaWE56SUhSb1lXNGdZaUJpZVNCemIyMWxJRzl5WkdWeWFXNW5JR055YVhSbGNtbHZiaWtnZTF4dUlDQWdJQ0FxSUNBZ0lDQnlaWFIxY200Z0xURTdYRzRnSUNBZ0lDb2dJSDBnYVdZZ0tHRWdhWE1nWjNKbFlYUmxjaUIwYUdGdUlHSWdZbmtnZEdobElHOXlaR1Z5YVc1bklHTnlhWFJsY21sdmJpa2dlMXh1SUNBZ0lDQXFJQ0FnSUNCeVpYUjFjbTRnTVR0Y2JpQWdJQ0FnS2lBZ2ZWeHVJQ0FnSUNBcUlDQXZMeUJoSUcxMWMzUWdZbVVnWlhGMVlXd2dkRzhnWWx4dUlDQWdJQ0FxSUNCeVpYUjFjbTRnTUR0Y2JpQWdJQ0FnS2lCOVhHNGdJQ0FnSUNvZ1BDOXdjbVUrWEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUE4Y0Q1SlppQmhJRTFoZUMxSVpXRndJR2x6SUhkaGJuUmxaQ0FvWjNKbFlYUmxjaUJsYkdWdFpXNTBjeUJ2YmlCMGIzQXBJSGx2ZFNCallXNGdZU0J3Y205MmFXUmxJR0ZjYmlBZ0lDQWdLaUJ5WlhabGNuTmxJR052YlhCaGNtVWdablZ1WTNScGIyNGdkRzhnWVdOamIyMXdiR2x6YUNCMGFHRjBJR0psYUdGMmFXOXlMaUJGZUdGdGNHeGxPand2Y0Q1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUR4d2NtVStYRzRnSUNBZ0lDb2dablZ1WTNScGIyNGdjbVYyWlhKelpVTnZiWEJoY21Vb1lTd2dZaWtnZTF4dUlDQWdJQ0FxSUNCcFppQW9ZU0JwY3lCc1pYTnpJSFJvWVc0Z1lpQmllU0J6YjIxbElHOXlaR1Z5YVc1bklHTnlhWFJsY21sdmJpa2dlMXh1SUNBZ0lDQXFJQ0FnSUNCeVpYUjFjbTRnTVR0Y2JpQWdJQ0FnS2lBZ2ZTQnBaaUFvWVNCcGN5Qm5jbVZoZEdWeUlIUm9ZVzRnWWlCaWVTQjBhR1VnYjNKa1pYSnBibWNnWTNKcGRHVnlhVzl1S1NCN1hHNGdJQ0FnSUNvZ0lDQWdJSEpsZEhWeWJpQXRNVHRjYmlBZ0lDQWdLaUFnZlZ4dUlDQWdJQ0FxSUNBdkx5QmhJRzExYzNRZ1ltVWdaWEYxWVd3Z2RHOGdZbHh1SUNBZ0lDQXFJQ0J5WlhSMWNtNGdNRHRjYmlBZ0lDQWdLaUI5WEc0Z0lDQWdJQ29nUEM5d2NtVStYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFZMjl1YzNSeWRXTjBiM0pjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMloxYm1OMGFXOXVLRTlpYW1WamRDeFBZbXBsWTNRcE9tNTFiV0psY2oxOUlHTnZiWEJoY21WR2RXNWpkR2x2YmlCdmNIUnBiMjVoYkZ4dUlDQWdJQ0FxSUdaMWJtTjBhVzl1SUhWelpXUWdkRzhnWTI5dGNHRnlaU0IwZDI4Z1pXeGxiV1Z1ZEhNdUlFMTFjM1FnY21WMGRYSnVJR0VnYm1WbllYUnBkbVVnYVc1MFpXZGxjaXhjYmlBZ0lDQWdLaUI2WlhKdkxDQnZjaUJoSUhCdmMybDBhWFpsSUdsdWRHVm5aWElnWVhNZ2RHaGxJR1pwY25OMElHRnlaM1Z0Wlc1MElHbHpJR3hsYzNNZ2RHaGhiaXdnWlhGMVlXd2dkRzhzWEc0Z0lDQWdJQ29nYjNJZ1ozSmxZWFJsY2lCMGFHRnVJSFJvWlNCelpXTnZibVF1WEc0Z0lDQWdJQ292WEc0Z0lDQWdablZ1WTNScGIyNGdTR1ZoY0NoamIyMXdZWEpsUm5WdVkzUnBiMjRwSUh0Y2JpQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FxSUVGeWNtRjVJSFZ6WldRZ2RHOGdjM1J2Y21VZ2RHaGxJR1ZzWlcxbGJuUnpJRzltSUhSb1pTQm9aV0Z3TGx4dUlDQWdJQ0FnSUNBZ0tpQkFkSGx3WlNCN1FYSnlZWGt1UEU5aWFtVmpkRDU5WEc0Z0lDQWdJQ0FnSUNBcUlFQndjbWwyWVhSbFhHNGdJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0IwYUdsekxtUmhkR0VnUFNCYlhUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1amIyMXdZWEpsSUQwZ1kyOXRjR0Z5WlVaMWJtTjBhVzl1SUh4OElHTnZiR3hsWTNScGIyNXpMbVJsWm1GMWJIUkRiMjF3WVhKbE8xeHVJQ0FnSUgxY2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCU1pYUjFjbTV6SUhSb1pTQnBibVJsZUNCdlppQjBhR1VnYkdWbWRDQmphR2xzWkNCdlppQjBhR1VnYm05a1pTQmhkQ0IwYUdVZ1oybDJaVzRnYVc1a1pYZ3VYRzRnSUNBZ0lDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHNXZaR1ZKYm1SbGVDQlVhR1VnYVc1a1pYZ2diMllnZEdobElHNXZaR1VnZEc4Z1oyVjBJSFJvWlNCc1pXWjBJR05vYVd4a1hHNGdJQ0FnSUNvZ1ptOXlMbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMjUxYldKbGNuMGdWR2hsSUdsdVpHVjRJRzltSUhSb1pTQnNaV1owSUdOb2FXeGtMbHh1SUNBZ0lDQXFJRUJ3Y21sMllYUmxYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1NHVmhjQzV3Y205MGIzUjVjR1V1YkdWbWRFTm9hV3hrU1c1a1pYZ2dQU0JtZFc1amRHbHZiaUFvYm05a1pVbHVaR1Y0S1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBb01pQXFJRzV2WkdWSmJtUmxlQ2tnS3lBeE8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VtVjBkWEp1Y3lCMGFHVWdhVzVrWlhnZ2IyWWdkR2hsSUhKcFoyaDBJR05vYVd4a0lHOW1JSFJvWlNCdWIyUmxJR0YwSUhSb1pTQm5hWFpsYmlCcGJtUmxlQzVjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdibTlrWlVsdVpHVjRJRlJvWlNCcGJtUmxlQ0J2WmlCMGFHVWdibTlrWlNCMGJ5Qm5aWFFnZEdobElISnBaMmgwSUdOb2FXeGtYRzRnSUNBZ0lDb2dabTl5TGx4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTI1MWJXSmxjbjBnVkdobElHbHVaR1Y0SUc5bUlIUm9aU0J5YVdkb2RDQmphR2xzWkM1Y2JpQWdJQ0FnS2lCQWNISnBkbUYwWlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRWhsWVhBdWNISnZkRzkwZVhCbExuSnBaMmgwUTJocGJHUkpibVJsZUNBOUlHWjFibU4wYVc5dUlDaHViMlJsU1c1a1pYZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQ2d5SUNvZ2JtOWtaVWx1WkdWNEtTQXJJREk3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJTWlhSMWNtNXpJSFJvWlNCcGJtUmxlQ0J2WmlCMGFHVWdjR0Z5Wlc1MElHOW1JSFJvWlNCdWIyUmxJR0YwSUhSb1pTQm5hWFpsYmlCcGJtUmxlQzVjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdibTlrWlVsdVpHVjRJRlJvWlNCcGJtUmxlQ0J2WmlCMGFHVWdibTlrWlNCMGJ5Qm5aWFFnZEdobElIQmhjbVZ1ZENCbWIzSXVYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdiblZ0WW1WeWZTQlVhR1VnYVc1a1pYZ2diMllnZEdobElIQmhjbVZ1ZEM1Y2JpQWdJQ0FnS2lCQWNISnBkbUYwWlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRWhsWVhBdWNISnZkRzkwZVhCbExuQmhjbVZ1ZEVsdVpHVjRJRDBnWm5WdVkzUnBiMjRnS0c1dlpHVkpibVJsZUNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1RXRjBhQzVtYkc5dmNpZ29ibTlrWlVsdVpHVjRJQzBnTVNrZ0x5QXlLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkpsZEhWeWJuTWdkR2hsSUdsdVpHVjRJRzltSUhSb1pTQnpiV0ZzYkdWeUlHTm9hV3hrSUc1dlpHVWdLR2xtSUdsMElHVjRhWE4wY3lrdVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUd4bFpuUkRhR2xzWkNCc1pXWjBJR05vYVd4a0lHbHVaR1Y0TGx4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0J5YVdkb2RFTm9hV3hrSUhKcFoyaDBJR05vYVd4a0lHbHVaR1Y0TGx4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTI1MWJXSmxjbjBnZEdobElHbHVaR1Y0SUhkcGRHZ2dkR2hsSUcxcGJtbHRkVzBnZG1Gc2RXVWdiM0lnTFRFZ2FXWWdhWFFnWkc5bGMyNG5kRnh1SUNBZ0lDQXFJR1Y0YVhOMGN5NWNiaUFnSUNBZ0tpQkFjSEpwZG1GMFpWeHVJQ0FnSUNBcUwxeHVJQ0FnSUVobFlYQXVjSEp2ZEc5MGVYQmxMbTFwYmtsdVpHVjRJRDBnWm5WdVkzUnBiMjRnS0d4bFpuUkRhR2xzWkN3Z2NtbG5hSFJEYUdsc1pDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2NtbG5hSFJEYUdsc1pDQStQU0IwYUdsekxtUmhkR0V1YkdWdVozUm9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYkdWbWRFTm9hV3hrSUQ0OUlIUm9hWE11WkdGMFlTNXNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z0xURTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2JHVm1kRU5vYVd4a08xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVZMjl0Y0dGeVpTaDBhR2x6TG1SaGRHRmJiR1ZtZEVOb2FXeGtYU3dnZEdocGN5NWtZWFJoVzNKcFoyaDBRMmhwYkdSZEtTQThQU0F3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUd4bFpuUkRhR2xzWkR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ5YVdkb2RFTm9hV3hrTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJOYjNabGN5QjBhR1VnYm05a1pTQmhkQ0IwYUdVZ1oybDJaVzRnYVc1a1pYZ2dkWEFnZEc4Z2FYUnpJSEJ5YjNCbGNpQndiR0ZqWlNCcGJpQjBhR1VnYUdWaGNDNWNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ2FXNWtaWGdnVkdobElHbHVaR1Y0SUc5bUlIUm9aU0J1YjJSbElIUnZJRzF2ZG1VZ2RYQXVYRzRnSUNBZ0lDb2dRSEJ5YVhaaGRHVmNiaUFnSUNBZ0tpOWNiaUFnSUNCSVpXRndMbkJ5YjNSdmRIbHdaUzV6YVdaMFZYQWdQU0JtZFc1amRHbHZiaUFvYVc1a1pYZ3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlIQmhjbVZ1ZENBOUlIUm9hWE11Y0dGeVpXNTBTVzVrWlhnb2FXNWtaWGdwTzF4dUlDQWdJQ0FnSUNCM2FHbHNaU0FvYVc1a1pYZ2dQaUF3SUNZbUlIUm9hWE11WTI5dGNHRnlaU2gwYUdsekxtUmhkR0ZiY0dGeVpXNTBYU3dnZEdocGN5NWtZWFJoVzJsdVpHVjRYU2tnUGlBd0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCaGNuSmhlWE11YzNkaGNDaDBhR2x6TG1SaGRHRXNJSEJoY21WdWRDd2dhVzVrWlhncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVc1a1pYZ2dQU0J3WVhKbGJuUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCd1lYSmxiblFnUFNCMGFHbHpMbkJoY21WdWRFbHVaR1Y0S0dsdVpHVjRLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVFc5MlpYTWdkR2hsSUc1dlpHVWdZWFFnZEdobElHZHBkbVZ1SUdsdVpHVjRJR1J2ZDI0Z2RHOGdhWFJ6SUhCeWIzQmxjaUJ3YkdGalpTQnBiaUIwYUdVZ2FHVmhjQzVjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdibTlrWlVsdVpHVjRJRlJvWlNCcGJtUmxlQ0J2WmlCMGFHVWdibTlrWlNCMGJ5QnRiM1psSUdSdmQyNHVYRzRnSUNBZ0lDb2dRSEJ5YVhaaGRHVmNiaUFnSUNBZ0tpOWNiaUFnSUNCSVpXRndMbkJ5YjNSdmRIbHdaUzV6YVdaMFJHOTNiaUE5SUdaMWJtTjBhVzl1SUNodWIyUmxTVzVrWlhncElIdGNiaUFnSUNBZ0lDQWdMeTl6YldGc2JHVnlJR05vYVd4a0lHbHVaR1Y0WEc0Z0lDQWdJQ0FnSUhaaGNpQnRhVzRnUFNCMGFHbHpMbTFwYmtsdVpHVjRLSFJvYVhNdWJHVm1kRU5vYVd4a1NXNWtaWGdvYm05a1pVbHVaR1Y0S1N3Z2RHaHBjeTV5YVdkb2RFTm9hV3hrU1c1a1pYZ29ibTlrWlVsdVpHVjRLU2s3WEc0Z0lDQWdJQ0FnSUhkb2FXeGxJQ2h0YVc0Z1BqMGdNQ0FtSmlCMGFHbHpMbU52YlhCaGNtVW9kR2hwY3k1a1lYUmhXMjV2WkdWSmJtUmxlRjBzSUhSb2FYTXVaR0YwWVZ0dGFXNWRLU0ErSURBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdGeWNtRjVjeTV6ZDJGd0tIUm9hWE11WkdGMFlTd2diV2x1TENCdWIyUmxTVzVrWlhncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYm05a1pVbHVaR1Y0SUQwZ2JXbHVPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JXbHVJRDBnZEdocGN5NXRhVzVKYm1SbGVDaDBhR2x6TG14bFpuUkRhR2xzWkVsdVpHVjRLRzV2WkdWSmJtUmxlQ2tzSUhSb2FYTXVjbWxuYUhSRGFHbHNaRWx1WkdWNEtHNXZaR1ZKYm1SbGVDa3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJTWlhSeWFXVjJaWE1nWW5WMElHUnZaWE1nYm05MElISmxiVzkyWlNCMGFHVWdjbTl2ZENCbGJHVnRaVzUwSUc5bUlIUm9hWE1nYUdWaGNDNWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIc3FmU0JVYUdVZ2RtRnNkV1VnWVhRZ2RHaGxJSEp2YjNRZ2IyWWdkR2hsSUdobFlYQXVJRkpsZEhWeWJuTWdkVzVrWldacGJtVmtJR2xtSUhSb1pWeHVJQ0FnSUNBcUlHaGxZWEFnYVhNZ1pXMXdkSGt1WEc0Z0lDQWdJQ292WEc0Z0lDQWdTR1ZoY0M1d2NtOTBiM1I1Y0dVdWNHVmxheUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVaR0YwWVM1c1pXNW5kR2dnUGlBd0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWtZWFJoV3pCZE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUVdSa2N5QjBhR1VnWjJsMlpXNGdaV3hsYldWdWRDQnBiblJ2SUhSb1pTQm9aV0Z3TGx4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3S24wZ1pXeGxiV1Z1ZENCMGFHVWdaV3hsYldWdWRDNWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIUnlkV1VnYVdZZ2RHaGxJR1ZzWlcxbGJuUWdkMkZ6SUdGa1pHVmtJRzl5SUdaaGJITWdhV1lnYVhRZ2FYTWdkVzVrWldacGJtVmtMbHh1SUNBZ0lDQXFMMXh1SUNBZ0lFaGxZWEF1Y0hKdmRHOTBlWEJsTG1Ga1pDQTlJR1oxYm1OMGFXOXVJQ2hsYkdWdFpXNTBLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaGpiMnhzWldOMGFXOXVjeTVwYzFWdVpHVm1hVzVsWkNobGJHVnRaVzUwS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSFJvYVhNdVpHRjBZUzV3ZFhOb0tHVnNaVzFsYm5RcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OcFpuUlZjQ2gwYUdsekxtUmhkR0V1YkdWdVozUm9JQzBnTVNrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVYwY21sbGRtVnpJR0Z1WkNCeVpXMXZkbVZ6SUhSb1pTQnliMjkwSUdWc1pXMWxiblFnYjJZZ2RHaHBjeUJvWldGd0xseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2V5cDlJRlJvWlNCMllXeDFaU0J5WlcxdmRtVmtJR1p5YjIwZ2RHaGxJSEp2YjNRZ2IyWWdkR2hsSUdobFlYQXVJRkpsZEhWeWJuTmNiaUFnSUNBZ0tpQjFibVJsWm1sdVpXUWdhV1lnZEdobElHaGxZWEFnYVhNZ1pXMXdkSGt1WEc0Z0lDQWdJQ292WEc0Z0lDQWdTR1ZoY0M1d2NtOTBiM1I1Y0dVdWNtVnRiM1psVW05dmRDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVpHRjBZUzVzWlc1bmRHZ2dQaUF3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2IySnFJRDBnZEdocGN5NWtZWFJoV3pCZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWtZWFJoV3pCZElEMGdkR2hwY3k1a1lYUmhXM1JvYVhNdVpHRjBZUzVzWlc1bmRHZ2dMU0F4WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpHRjBZUzV6Y0d4cFkyVW9kR2hwY3k1a1lYUmhMbXhsYm1kMGFDQXRJREVzSURFcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11WkdGMFlTNXNaVzVuZEdnZ1BpQXdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXphV1owUkc5M2JpZ3dLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ2WW1vN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGSmxkSFZ5Ym5NZ2RISjFaU0JwWmlCMGFHbHpJR2hsWVhBZ1kyOXVkR0ZwYm5NZ2RHaGxJSE53WldOcFptbGxaQ0JsYkdWdFpXNTBMbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQmxiR1Z0Wlc1MElHVnNaVzFsYm5RZ2RHOGdjMlZoY21Ob0lHWnZjaTVjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRpYjI5c1pXRnVmU0IwY25WbElHbG1JSFJvYVhNZ1NHVmhjQ0JqYjI1MFlXbHVjeUIwYUdVZ2MzQmxZMmxtYVdWa0lHVnNaVzFsYm5Rc0lHWmhiSE5sWEc0Z0lDQWdJQ29nYjNSb1pYSjNhWE5sTGx4dUlDQWdJQ0FxTDF4dUlDQWdJRWhsWVhBdWNISnZkRzkwZVhCbExtTnZiblJoYVc1eklEMGdablZ1WTNScGIyNGdLR1ZzWlcxbGJuUXBJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHVnhkVVlnUFNCamIyeHNaV04wYVc5dWN5NWpiMjF3WVhKbFZHOUZjWFZoYkhNb2RHaHBjeTVqYjIxd1lYSmxLVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR0Z5Y21GNWN5NWpiMjUwWVdsdWN5aDBhR2x6TG1SaGRHRXNJR1ZzWlcxbGJuUXNJR1Z4ZFVZcE8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VtVjBkWEp1Y3lCMGFHVWdiblZ0WW1WeUlHOW1JR1ZzWlcxbGJuUnpJR2x1SUhSb2FYTWdhR1ZoY0M1Y2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0dWRXMWlaWEo5SUhSb1pTQnVkVzFpWlhJZ2IyWWdaV3hsYldWdWRITWdhVzRnZEdocGN5Qm9aV0Z3TGx4dUlDQWdJQ0FxTDF4dUlDQWdJRWhsWVhBdWNISnZkRzkwZVhCbExuTnBlbVVnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG1SaGRHRXViR1Z1WjNSb08xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1EyaGxZMnR6SUdsbUlIUm9hWE1nYUdWaGNDQnBjeUJsYlhCMGVTNWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdGliMjlzWldGdWZTQjBjblZsSUdsbUlHRnVaQ0J2Ym14NUlHbG1JSFJvYVhNZ2FHVmhjQ0JqYjI1MFlXbHVjeUJ1YnlCcGRHVnRjenNnWm1Gc2MyVmNiaUFnSUNBZ0tpQnZkR2hsY25kcGMyVXVYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1NHVmhjQzV3Y205MGIzUjVjR1V1YVhORmJYQjBlU0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11WkdGMFlTNXNaVzVuZEdnZ1BEMGdNRHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkpsYlc5MlpYTWdZV3hzSUc5bUlIUm9aU0JsYkdWdFpXNTBjeUJtY205dElIUm9hWE1nYUdWaGNDNWNiaUFnSUNBZ0tpOWNiaUFnSUNCSVpXRndMbkJ5YjNSdmRIbHdaUzVqYkdWaGNpQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVrWVhSaExteGxibWQwYUNBOUlEQTdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkZlR1ZqZFhSbGN5QjBhR1VnY0hKdmRtbGtaV1FnWm5WdVkzUnBiMjRnYjI1alpTQm1iM0lnWldGamFDQmxiR1Z0Wlc1MElIQnlaWE5sYm5RZ2FXNGdkR2hwY3lCb1pXRndJR2x1WEc0Z0lDQWdJQ29nYm04Z2NHRnlkR2xqZFd4aGNpQnZjbVJsY2k1Y2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTJaMWJtTjBhVzl1S0U5aWFtVmpkQ2s2S24wZ1kyRnNiR0poWTJzZ1puVnVZM1JwYjI0Z2RHOGdaWGhsWTNWMFpTd2dhWFFnYVhOY2JpQWdJQ0FnS2lCcGJuWnZhMlZrSUhkcGRHZ2diMjVsSUdGeVozVnRaVzUwT2lCMGFHVWdaV3hsYldWdWRDQjJZV3gxWlN3Z2RHOGdZbkpsWVdzZ2RHaGxJR2wwWlhKaGRHbHZiaUI1YjNVZ1kyRnVYRzRnSUNBZ0lDb2diM0IwYVc5dVlXeHNlU0J5WlhSMWNtNGdabUZzYzJVdVhHNGdJQ0FnSUNvdlhHNGdJQ0FnU0dWaGNDNXdjbTkwYjNSNWNHVXVabTl5UldGamFDQTlJR1oxYm1OMGFXOXVJQ2hqWVd4c1ltRmpheWtnZTF4dUlDQWdJQ0FnSUNCaGNuSmhlWE11Wm05eVJXRmphQ2gwYUdsekxtUmhkR0VzSUdOaGJHeGlZV05yS1R0Y2JpQWdJQ0I5TzF4dUlDQWdJSEpsZEhWeWJpQklaV0Z3TzF4dWZTZ3BLVHRjYm1WNGNHOXlkSE11WkdWbVlYVnNkQ0E5SUVobFlYQTdYRzR2THlNZ2MyOTFjbU5sVFdGd2NHbHVaMVZTVEQxSVpXRndMbXB6TG0xaGNDSXNJbHdpZFhObElITjBjbWxqZEZ3aU8xeHVkbUZ5SUY5ZlpYaDBaVzVrY3lBOUlDaDBhR2x6SUNZbUlIUm9hWE11WDE5bGVIUmxibVJ6S1NCOGZDQW9ablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSFpoY2lCbGVIUmxibVJUZEdGMGFXTnpJRDBnVDJKcVpXTjBMbk5sZEZCeWIzUnZkSGx3WlU5bUlIeDhYRzRnSUNBZ0lDQWdJQ2g3SUY5ZmNISnZkRzlmWHpvZ1cxMGdmU0JwYm5OMFlXNWpaVzltSUVGeWNtRjVJQ1ltSUdaMWJtTjBhVzl1SUNoa0xDQmlLU0I3SUdRdVgxOXdjbTkwYjE5ZklEMGdZanNnZlNrZ2ZIeGNiaUFnSUNBZ0lDQWdablZ1WTNScGIyNGdLR1FzSUdJcElIc2dabTl5SUNoMllYSWdjQ0JwYmlCaUtTQnBaaUFvWWk1b1lYTlBkMjVRY205d1pYSjBlU2h3S1NrZ1pGdHdYU0E5SUdKYmNGMDdJSDA3WEc0Z0lDQWdjbVYwZFhKdUlHWjFibU4wYVc5dUlDaGtMQ0JpS1NCN1hHNGdJQ0FnSUNBZ0lHVjRkR1Z1WkZOMFlYUnBZM01vWkN3Z1lpazdYRzRnSUNBZ0lDQWdJR1oxYm1OMGFXOXVJRjlmS0NrZ2V5QjBhR2x6TG1OdmJuTjBjblZqZEc5eUlEMGdaRHNnZlZ4dUlDQWdJQ0FnSUNCa0xuQnliM1J2ZEhsd1pTQTlJR0lnUFQwOUlHNTFiR3dnUHlCUFltcGxZM1F1WTNKbFlYUmxLR0lwSURvZ0tGOWZMbkJ5YjNSdmRIbHdaU0E5SUdJdWNISnZkRzkwZVhCbExDQnVaWGNnWDE4b0tTazdYRzRnSUNBZ2ZUdGNibjBwS0NrN1hHNVBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnWENKZlgyVnpUVzlrZFd4bFhDSXNJSHNnZG1Gc2RXVTZJSFJ5ZFdVZ2ZTazdYRzUyWVhJZ1JHbGpkR2x2Ym1GeWVWOHhJRDBnY21WeGRXbHlaU2hjSWk0dlJHbGpkR2x2Ym1GeWVWd2lLVHRjYm5aaGNpQjFkR2xzSUQwZ2NtVnhkV2x5WlNoY0lpNHZkWFJwYkZ3aUtUdGNiaThxS2x4dUlDb2dWR2hwY3lCamJHRnpjeUJwY3lCMWMyVmtJR0o1SUhSb1pTQk1hVzVyWldSRWFXTjBhVzl1WVhKNUlFbHVkR1Z5Ym1Gc2JIbGNiaUFxSUVoaGN5QjBieUJpWlNCaElHTnNZWE56TENCdWIzUWdZVzRnYVc1MFpYSm1ZV05sTENCaVpXTmhkWE5sSUdsMElHNWxaV1J6SUhSdklHaGhkbVZjYmlBcUlIUm9aU0FuZFc1c2FXNXJKeUJtZFc1amRHbHZiaUJrWldacGJtVmtMbHh1SUNvdlhHNTJZWElnVEdsdWEyVmtSR2xqZEdsdmJtRnllVkJoYVhJZ1BTQXZLaW9nUUdOc1lYTnpJQ292SUNobWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1puVnVZM1JwYjI0Z1RHbHVhMlZrUkdsamRHbHZibUZ5ZVZCaGFYSW9hMlY1TENCMllXeDFaU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbXRsZVNBOUlHdGxlVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NTJZV3gxWlNBOUlIWmhiSFZsTzF4dUlDQWdJSDFjYmlBZ0lDQk1hVzVyWldSRWFXTjBhVzl1WVhKNVVHRnBjaTV3Y205MGIzUjVjR1V1ZFc1c2FXNXJJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5CeVpYWXVibVY0ZENBOUlIUm9hWE11Ym1WNGREdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dVpYaDBMbkJ5WlhZZ1BTQjBhR2x6TG5CeVpYWTdYRzRnSUNBZ2ZUdGNiaUFnSUNCeVpYUjFjbTRnVEdsdWEyVmtSR2xqZEdsdmJtRnllVkJoYVhJN1hHNTlLQ2twTzF4dUx5b3FYRzRnS2lCVWFHVWdhR1ZoWkNCaGJtUWdkR0ZwYkNCbGJHVnRaVzUwY3lCdlppQjBhR1VnYkdsemRDQm9ZWFpsSUc1MWJHd2dhMlY1SUdGdVpDQjJZV3gxWlNCd2NtOXdaWEowYVdWeklHSjFkQ0IwYUdWNVhHNGdLaUIxYzNWaGJHeDVJR3hwYm1zZ2RHOGdibTl5YldGc0lHNXZaR1Z6TGx4dUlDb3ZYRzUyWVhJZ1NHVmhaRTl5VkdGcGJFeHBibXRsWkVScFkzUnBiMjVoY25sUVlXbHlJRDBnTHlvcUlFQmpiR0Z6Y3lBcUx5QW9ablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJR1oxYm1OMGFXOXVJRWhsWVdSUGNsUmhhV3hNYVc1clpXUkVhV04wYVc5dVlYSjVVR0ZwY2lncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1clpYa2dQU0J1ZFd4c08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5aaGJIVmxJRDBnYm5Wc2JEdGNiaUFnSUNCOVhHNGdJQ0FnU0dWaFpFOXlWR0ZwYkV4cGJtdGxaRVJwWTNScGIyNWhjbmxRWVdseUxuQnliM1J2ZEhsd1pTNTFibXhwYm1zZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjSEpsZGk1dVpYaDBJRDBnZEdocGN5NXVaWGgwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTVsZUhRdWNISmxkaUE5SUhSb2FYTXVjSEpsZGp0Y2JpQWdJQ0I5TzF4dUlDQWdJSEpsZEhWeWJpQklaV0ZrVDNKVVlXbHNUR2x1YTJWa1JHbGpkR2x2Ym1GeWVWQmhhWEk3WEc1OUtDa3BPMXh1Wm5WdVkzUnBiMjRnYVhOSVpXRmtUM0pVWVdsc1RHbHVhMlZrUkdsamRHbHZibUZ5ZVZCaGFYSW9jQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQWhjQzV1WlhoME8xeHVmVnh1ZG1GeUlFeHBibXRsWkVScFkzUnBiMjVoY25rZ1BTQXZLaW9nUUdOc1lYTnpJQ292SUNobWRXNWpkR2x2YmlBb1gzTjFjR1Z5S1NCN1hHNGdJQ0FnWDE5bGVIUmxibVJ6S0V4cGJtdGxaRVJwWTNScGIyNWhjbmtzSUY5emRYQmxjaWs3WEc0Z0lDQWdablZ1WTNScGIyNGdUR2x1YTJWa1JHbGpkR2x2Ym1GeWVTaDBiMU4wY2taMWJtTjBhVzl1S1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJmZEdocGN5QTlJRjl6ZFhCbGNpNWpZV3hzS0hSb2FYTXNJSFJ2VTNSeVJuVnVZM1JwYjI0cElIeDhJSFJvYVhNN1hHNGdJQ0FnSUNBZ0lGOTBhR2x6TG1obFlXUWdQU0J1WlhjZ1NHVmhaRTl5VkdGcGJFeHBibXRsWkVScFkzUnBiMjVoY25sUVlXbHlLQ2s3WEc0Z0lDQWdJQ0FnSUY5MGFHbHpMblJoYVd3Z1BTQnVaWGNnU0dWaFpFOXlWR0ZwYkV4cGJtdGxaRVJwWTNScGIyNWhjbmxRWVdseUtDazdYRzRnSUNBZ0lDQWdJRjkwYUdsekxtaGxZV1F1Ym1WNGRDQTlJRjkwYUdsekxuUmhhV3c3WEc0Z0lDQWdJQ0FnSUY5MGFHbHpMblJoYVd3dWNISmxkaUE5SUY5MGFHbHpMbWhsWVdRN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCZmRHaHBjenRjYmlBZ0lDQjlYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dTVzV6WlhKMGN5QjBhR1VnYm1WM0lHNXZaR1VnZEc4Z2RHaGxJQ2QwWVdsc0p5QnZaaUIwYUdVZ2JHbHpkQ3dnZFhCa1lYUnBibWNnZEdobFhHNGdJQ0FnSUNvZ2JtVnBaMmhpYjNKekxDQmhibVFnYlc5MmFXNW5JQ2QwYUdsekxuUmhhV3duSUNoMGFHVWdSVzVrSUc5bUlFeHBjM1FnYVc1a2FXTmhkRzl5S1NCMGFHRjBYRzRnSUNBZ0lDb2dkRzhnZEdobElHVnVaQzVjYmlBZ0lDQWdLaTljYmlBZ0lDQk1hVzVyWldSRWFXTjBhVzl1WVhKNUxuQnliM1J2ZEhsd1pTNWhjSEJsYm1SVWIxUmhhV3dnUFNCbWRXNWpkR2x2YmlBb1pXNTBjbmtwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJR3hoYzNST2IyUmxJRDBnZEdocGN5NTBZV2xzTG5CeVpYWTdYRzRnSUNBZ0lDQWdJR3hoYzNST2IyUmxMbTVsZUhRZ1BTQmxiblJ5ZVR0Y2JpQWdJQ0FnSUNBZ1pXNTBjbmt1Y0hKbGRpQTlJR3hoYzNST2IyUmxPMXh1SUNBZ0lDQWdJQ0JsYm5SeWVTNXVaWGgwSUQwZ2RHaHBjeTUwWVdsc08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5SaGFXd3VjSEpsZGlBOUlHVnVkSEo1TzF4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVW1WMGNtbGxkbVZ6SUdFZ2JHbHVhMlZrSUdScFkzUnBiMjVoY25rZ1puSnZiU0IwYUdVZ2RHRmliR1VnYVc1MFpYSnVZV3hzZVZ4dUlDQWdJQ0FxTDF4dUlDQWdJRXhwYm10bFpFUnBZM1JwYjI1aGNua3VjSEp2ZEc5MGVYQmxMbWRsZEV4cGJtdGxaRVJwWTNScGIyNWhjbmxRWVdseUlEMGdablZ1WTNScGIyNGdLR3RsZVNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZFhScGJDNXBjMVZ1WkdWbWFXNWxaQ2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZFc1a1pXWnBibVZrTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIWmhjaUJySUQwZ0p5UW5JQ3NnZEdocGN5NTBiMU4wY2loclpYa3BPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2NHRnBjaUE5SUNoMGFHbHpMblJoWW14bFcydGRLVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEJoYVhJN1hHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCU1pYUjFjbTV6SUhSb1pTQjJZV3gxWlNCMGJ5QjNhR2xqYUNCMGFHbHpJR1JwWTNScGIyNWhjbmtnYldGd2N5QjBhR1VnYzNCbFkybG1hV1ZrSUd0bGVTNWNiaUFnSUNBZ0tpQlNaWFIxY201eklIVnVaR1ZtYVc1bFpDQnBaaUIwYUdseklHUnBZM1JwYjI1aGNua2dZMjl1ZEdGcGJuTWdibThnYldGd2NHbHVaeUJtYjNJZ2RHaHBjeUJyWlhrdVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUd0bGVTQnJaWGtnZDJodmMyVWdZWE56YjJOcFlYUmxaQ0IyWVd4MVpTQnBjeUIwYnlCaVpTQnlaWFIxY201bFpDNWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIc3FmU0IwYUdVZ2RtRnNkV1VnZEc4Z2QyaHBZMmdnZEdocGN5QmthV04wYVc5dVlYSjVJRzFoY0hNZ2RHaGxJSE53WldOcFptbGxaQ0JyWlhrZ2IzSmNiaUFnSUNBZ0tpQjFibVJsWm1sdVpXUWdhV1lnZEdobElHMWhjQ0JqYjI1MFlXbHVjeUJ1YnlCdFlYQndhVzVuSUdadmNpQjBhR2x6SUd0bGVTNWNiaUFnSUNBZ0tpOWNiaUFnSUNCTWFXNXJaV1JFYVdOMGFXOXVZWEo1TG5CeWIzUnZkSGx3WlM1blpYUldZV3gxWlNBOUlHWjFibU4wYVc5dUlDaHJaWGtwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJSEJoYVhJZ1BTQjBhR2x6TG1kbGRFeHBibXRsWkVScFkzUnBiMjVoY25sUVlXbHlLR3RsZVNrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doZFhScGJDNXBjMVZ1WkdWbWFXNWxaQ2h3WVdseUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhCaGFYSXVkbUZzZFdVN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGSmxiVzkyWlhNZ2RHaGxJRzFoY0hCcGJtY2dabTl5SUhSb2FYTWdhMlY1SUdaeWIyMGdkR2hwY3lCa2FXTjBhVzl1WVhKNUlHbG1JR2wwSUdseklIQnlaWE5sYm5RdVhHNGdJQ0FnSUNvZ1FXeHpieXdnYVdZZ1lTQjJZV3gxWlNCcGN5QndjbVZ6Wlc1MElHWnZjaUIwYUdseklHdGxlU3dnZEdobElHVnVkSEo1SUdseklISmxiVzkyWldRZ1puSnZiU0IwYUdWY2JpQWdJQ0FnS2lCcGJuTmxjblJwYjI0Z2IzSmtaWEpwYm1jdVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUd0bGVTQnJaWGtnZDJodmMyVWdiV0Z3Y0dsdVp5QnBjeUIwYnlCaVpTQnlaVzF2ZG1Wa0lHWnliMjBnZEdobFhHNGdJQ0FnSUNvZ1pHbGpkR2x2Ym1GeWVTNWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIc3FmU0J3Y21WMmFXOTFjeUIyWVd4MVpTQmhjM052WTJsaGRHVmtJSGRwZEdnZ2MzQmxZMmxtYVdWa0lHdGxlU3dnYjNJZ2RXNWtaV1pwYm1Wa0lHbG1YRzRnSUNBZ0lDb2dkR2hsY21VZ2QyRnpJRzV2SUcxaGNIQnBibWNnWm05eUlHdGxlUzVjYmlBZ0lDQWdLaTljYmlBZ0lDQk1hVzVyWldSRWFXTjBhVzl1WVhKNUxuQnliM1J2ZEhsd1pTNXlaVzF2ZG1VZ1BTQm1kVzVqZEdsdmJpQW9hMlY1S1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ3WVdseUlEMGdkR2hwY3k1blpYUk1hVzVyWldSRWFXTjBhVzl1WVhKNVVHRnBjaWhyWlhrcE8xeHVJQ0FnSUNBZ0lDQnBaaUFvSVhWMGFXd3VhWE5WYm1SbFptbHVaV1FvY0dGcGNpa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lGOXpkWEJsY2k1d2NtOTBiM1I1Y0dVdWNtVnRiM1psTG1OaGJHd29kR2hwY3l3Z2EyVjVLVHNnTHk4Z1ZHaHBjeUIzYVd4c0lISmxiVzkyWlNCcGRDQm1jbTl0SUhSb1pTQjBZV0pzWlZ4dUlDQWdJQ0FnSUNBZ0lDQWdjR0ZwY2k1MWJteHBibXNvS1RzZ0x5OGdWR2hwY3lCM2FXeHNJSFZ1YkdsdWF5QnBkQ0JtY205dElIUm9aU0JqYUdGcGJseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSEJoYVhJdWRtRnNkV1U3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZKbGJXOTJaWE1nWVd4c0lHMWhjSEJwYm1keklHWnliMjBnZEdocGN5Qk1hVzVyWldSRWFXTjBhVzl1WVhKNUxseHVJQ0FnSUNBcUlFQjBhR2x6SUh0amIyeHNaV04wYVc5dWN5NU1hVzVyWldSRWFXTjBhVzl1WVhKNWZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUV4cGJtdGxaRVJwWTNScGIyNWhjbmt1Y0hKdmRHOTBlWEJsTG1Oc1pXRnlJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQmZjM1Z3WlhJdWNISnZkRzkwZVhCbExtTnNaV0Z5TG1OaGJHd29kR2hwY3lrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YUdWaFpDNXVaWGgwSUQwZ2RHaHBjeTUwWVdsc08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5SaGFXd3VjSEpsZGlBOUlIUm9hWE11YUdWaFpEdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFbHVkR1Z5Ym1Gc0lHWjFibU4wYVc5dUlIVnpaV1FnZDJobGJpQjFjR1JoZEdsdVp5QmhiaUJsZUdsemRHbHVaeUJMWlhsV1lXeDFaU0J3WVdseUxseHVJQ0FnSUNBcUlFbDBJSEJzWVdObGN5QjBhR1VnYm1WM0lIWmhiSFZsSUdsdVpHVjRaV1FnWW5rZ2EyVjVJR2x1ZEc4Z2RHaGxJSFJoWW14bExDQmlkWFFnYldGcGJuUmhhVzV6WEc0Z0lDQWdJQ29nYVhSeklIQnNZV05sSUdsdUlIUm9aU0JzYVc1clpXUWdiM0prWlhKcGJtY3VYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1RHbHVhMlZrUkdsamRHbHZibUZ5ZVM1d2NtOTBiM1I1Y0dVdWNtVndiR0ZqWlNBOUlHWjFibU4wYVc5dUlDaHZiR1JRWVdseUxDQnVaWGRRWVdseUtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCcklEMGdKeVFuSUNzZ2RHaHBjeTUwYjFOMGNpaHVaWGRRWVdseUxtdGxlU2s3WEc0Z0lDQWdJQ0FnSUM4dklITmxkQ0IwYUdVZ2JtVjNJRkJoYVhJbmN5QnNhVzVyY3lCMGJ5QmxlR2x6ZEdsdVoxQmhhWEluY3lCc2FXNXJjMXh1SUNBZ0lDQWdJQ0J1WlhkUVlXbHlMbTVsZUhRZ1BTQnZiR1JRWVdseUxtNWxlSFE3WEc0Z0lDQWdJQ0FnSUc1bGQxQmhhWEl1Y0hKbGRpQTlJRzlzWkZCaGFYSXVjSEpsZGp0Y2JpQWdJQ0FnSUNBZ0x5OGdSR1ZzWlhSbElFVjRhWE4wYVc1bklGQmhhWElnWm5KdmJTQjBhR1VnZEdGaWJHVXNJSFZ1YkdsdWF5QnBkQ0JtY205dElHTm9ZV2x1TGx4dUlDQWdJQ0FnSUNBdkx5QkJjeUJoSUhKbGMzVnNkQ3dnZEdobElHNUZiR1Z0Wlc1MGN5Qm5aWFJ6SUdSbFkzSmxiV1Z1ZEdWa0lHSjVJSFJvYVhNZ2IzQmxjbUYwYVc5dVhHNGdJQ0FnSUNBZ0lIUm9hWE11Y21WdGIzWmxLRzlzWkZCaGFYSXVhMlY1S1R0Y2JpQWdJQ0FnSUNBZ0x5OGdUR2x1YXlCdVpYY2dVR0ZwY2lCcGJpQndiR0ZqWlNCdlppQjNhR1Z5WlNCdmJHUlFZV2x5SUhkaGN5eGNiaUFnSUNBZ0lDQWdMeThnWW5rZ2NHOXBiblJwYm1jZ2RHaGxJRzlzWkNCd1lXbHlKM01nYm1WcFoyaGliM0p6SUhSdklHbDBMbHh1SUNBZ0lDQWdJQ0J1WlhkUVlXbHlMbkJ5WlhZdWJtVjRkQ0E5SUc1bGQxQmhhWEk3WEc0Z0lDQWdJQ0FnSUc1bGQxQmhhWEl1Ym1WNGRDNXdjbVYySUQwZ2JtVjNVR0ZwY2p0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUwWVdKc1pWdHJYU0E5SUc1bGQxQmhhWEk3WEc0Z0lDQWdJQ0FnSUM4dklGUnZJRzFoYTJVZ2RYQWdabTl5SUhSb1pTQm1ZV04wSUhSb1lYUWdkR2hsSUc1MWJXSmxjaUJ2WmlCbGJHVnRaVzUwY3lCM1lYTWdaR1ZqY21WdFpXNTBaV1FzWEc0Z0lDQWdJQ0FnSUM4dklGZGxJRzVsWldRZ2RHOGdhVzVqY21WaGMyVWdhWFFnWW5rZ2IyNWxMbHh1SUNBZ0lDQWdJQ0FySzNSb2FYTXVia1ZzWlcxbGJuUnpPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRWE56YjJOcFlYUmxjeUIwYUdVZ2MzQmxZMmxtYVdWa0lIWmhiSFZsSUhkcGRHZ2dkR2hsSUhOd1pXTnBabWxsWkNCclpYa2dhVzRnZEdocGN5QmthV04wYVc5dVlYSjVMbHh1SUNBZ0lDQXFJRWxtSUhSb1pTQmthV04wYVc5dVlYSjVJSEJ5WlhacGIzVnpiSGtnWTI5dWRHRnBibVZrSUdFZ2JXRndjR2x1WnlCbWIzSWdkR2hwY3lCclpYa3NJSFJvWlNCdmJHUmNiaUFnSUNBZ0tpQjJZV3gxWlNCcGN5QnlaWEJzWVdObFpDQmllU0IwYUdVZ2MzQmxZMmxtYVdWa0lIWmhiSFZsTGx4dUlDQWdJQ0FxSUZWd1pHRjBhVzVuSUc5bUlHRWdhMlY1SUhSb1lYUWdZV3h5WldGa2VTQmxlR2x6ZEhNZ2JXRnBiblJoYVc1eklHbDBjeUJ3YkdGalpTQnBiaUIwYUdWY2JpQWdJQ0FnS2lCcGJuTmxjblJwYjI0Z2IzSmtaWElnYVc1MGJ5QjBhR1VnYldGd0xseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCclpYa2dhMlY1SUhkcGRHZ2dkMmhwWTJnZ2RHaGxJSE53WldOcFptbGxaQ0IyWVd4MVpTQnBjeUIwYnlCaVpWeHVJQ0FnSUNBcUlHRnpjMjlqYVdGMFpXUXVYRzRnSUNBZ0lDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlIWmhiSFZsSUhaaGJIVmxJSFJ2SUdKbElHRnpjMjlqYVdGMFpXUWdkMmwwYUNCMGFHVWdjM0JsWTJsbWFXVmtJR3RsZVM1Y2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUhzcWZTQndjbVYyYVc5MWN5QjJZV3gxWlNCaGMzTnZZMmxoZEdWa0lIZHBkR2dnZEdobElITndaV05wWm1sbFpDQnJaWGtzSUc5eUlIVnVaR1ZtYVc1bFpDQnBabHh1SUNBZ0lDQXFJSFJvWlhKbElIZGhjeUJ1YnlCdFlYQndhVzVuSUdadmNpQjBhR1VnYTJWNUlHOXlJR2xtSUhSb1pTQnJaWGt2ZG1Gc2RXVWdZWEpsSUhWdVpHVm1hVzVsWkM1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0JNYVc1clpXUkVhV04wYVc5dVlYSjVMbkJ5YjNSdmRIbHdaUzV6WlhSV1lXeDFaU0E5SUdaMWJtTjBhVzl1SUNoclpYa3NJSFpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMWRHbHNMbWx6Vlc1a1pXWnBibVZrS0d0bGVTa2dmSHdnZFhScGJDNXBjMVZ1WkdWbWFXNWxaQ2gyWVd4MVpTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMWJtUmxabWx1WldRN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdkbUZ5SUdWNGFYTjBhVzVuVUdGcGNpQTlJSFJvYVhNdVoyVjBUR2x1YTJWa1JHbGpkR2x2Ym1GeWVWQmhhWElvYTJWNUtUdGNiaUFnSUNBZ0lDQWdkbUZ5SUc1bGQxQmhhWElnUFNCdVpYY2dUR2x1YTJWa1JHbGpkR2x2Ym1GeWVWQmhhWElvYTJWNUxDQjJZV3gxWlNrN1hHNGdJQ0FnSUNBZ0lIWmhjaUJySUQwZ0p5UW5JQ3NnZEdocGN5NTBiMU4wY2loclpYa3BPMXh1SUNBZ0lDQWdJQ0F2THlCSlppQjBhR1Z5WlNCcGN5QmhiSEpsWVdSNUlHRnVJR1ZzWlcxbGJuUWdabTl5SUhSb1lYUWdhMlY1TENCM1pWeHVJQ0FnSUNBZ0lDQXZMeUJyWldWd0lHbDBKM01nY0d4aFkyVWdhVzRnZEdobElFeHBibXRsWkV4cGMzUmNiaUFnSUNBZ0lDQWdhV1lnS0NGMWRHbHNMbWx6Vlc1a1pXWnBibVZrS0dWNGFYTjBhVzVuVUdGcGNpa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Y21Wd2JHRmpaU2hsZUdsemRHbHVaMUJoYVhJc0lHNWxkMUJoYVhJcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1Y0YVhOMGFXNW5VR0ZwY2k1MllXeDFaVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WVhCd1pXNWtWRzlVWVdsc0tHNWxkMUJoYVhJcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NTBZV0pzWlZ0clhTQTlJRzVsZDFCaGFYSTdYRzRnSUNBZ0lDQWdJQ0FnSUNBckszUm9hWE11YmtWc1pXMWxiblJ6TzF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVYwZFhKdWN5QmhiaUJoY25KaGVTQmpiMjUwWVdsdWFXNW5JR0ZzYkNCdlppQjBhR1VnYTJWNWN5QnBiaUIwYUdseklFeHBibXRsWkVScFkzUnBiMjVoY25rc0lHOXlaR1Z5WldSY2JpQWdJQ0FnS2lCaWVTQnBibk5sY25ScGIyNGdiM0prWlhJdVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1FYSnlZWGw5SUdGdUlHRnljbUY1SUdOdmJuUmhhVzVwYm1jZ1lXeHNJRzltSUhSb1pTQnJaWGx6SUdsdUlIUm9hWE1nVEdsdWEyVmtSR2xqZEdsdmJtRnllU3hjYmlBZ0lDQWdLaUJ2Y21SbGNtVmtJR0o1SUdsdWMyVnlkR2x2YmlCdmNtUmxjaTVjYmlBZ0lDQWdLaTljYmlBZ0lDQk1hVzVyWldSRWFXTjBhVzl1WVhKNUxuQnliM1J2ZEhsd1pTNXJaWGx6SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1lYSnlZWGtnUFNCYlhUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bWIzSkZZV05vS0daMWJtTjBhVzl1SUNoclpYa3NJSFpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCaGNuSmhlUzV3ZFhOb0tHdGxlU2s3WEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1lYSnlZWGs3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJTWlhSMWNtNXpJR0Z1SUdGeWNtRjVJR052Ym5SaGFXNXBibWNnWVd4c0lHOW1JSFJvWlNCMllXeDFaWE1nYVc0Z2RHaHBjeUJNYVc1clpXUkVhV04wYVc5dVlYSjVMQ0J2Y21SbGNtVmtJR0o1WEc0Z0lDQWdJQ29nYVc1elpYSjBhVzl1SUc5eVpHVnlMbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMEZ5Y21GNWZTQmhiaUJoY25KaGVTQmpiMjUwWVdsdWFXNW5JR0ZzYkNCdlppQjBhR1VnZG1Gc2RXVnpJR2x1SUhSb2FYTWdUR2x1YTJWa1JHbGpkR2x2Ym1GeWVTeGNiaUFnSUNBZ0tpQnZjbVJsY21Wa0lHSjVJR2x1YzJWeWRHbHZiaUJ2Y21SbGNpNWNiaUFnSUNBZ0tpOWNiaUFnSUNCTWFXNXJaV1JFYVdOMGFXOXVZWEo1TG5CeWIzUnZkSGx3WlM1MllXeDFaWE1nUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCaGNuSmhlU0E5SUZ0ZE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1admNrVmhZMmdvWm5WdVkzUnBiMjRnS0d0bGVTd2dkbUZzZFdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdGeWNtRjVMbkIxYzJnb2RtRnNkV1VwTzF4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHRnljbUY1TzF4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUlhobFkzVjBaWE1nZEdobElIQnliM1pwWkdWa0lHWjFibU4wYVc5dUlHOXVZMlVnWm05eUlHVmhZMmdnYTJWNUxYWmhiSFZsSUhCaGFYSmNiaUFnSUNBZ0tpQndjbVZ6Wlc1MElHbHVJSFJvYVhNZ1RHbHVhMlZrUkdsamRHbHZibUZ5ZVM0Z1NYUWdhWE1nWkc5dVpTQnBiaUIwYUdVZ2IzSmtaWElnYjJZZ2FXNXpaWEowYVc5dVhHNGdJQ0FnSUNvZ2FXNTBieUIwYUdVZ1RHbHVhMlZrUkdsamRHbHZibUZ5ZVZ4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3Wm5WdVkzUnBiMjRvVDJKcVpXTjBMRTlpYW1WamRDazZLbjBnWTJGc2JHSmhZMnNnWm5WdVkzUnBiMjRnZEc4Z1pYaGxZM1YwWlN3Z2FYUWdhWE5jYmlBZ0lDQWdLaUJwYm5admEyVmtJSGRwZEdnZ2RIZHZJR0Z5WjNWdFpXNTBjem9nYTJWNUlHRnVaQ0IyWVd4MVpTNGdWRzhnWW5KbFlXc2dkR2hsSUdsMFpYSmhkR2x2YmlCNWIzVWdZMkZ1WEc0Z0lDQWdJQ29nYjNCMGFXOXVZV3hzZVNCeVpYUjFjbTRnWm1Gc2MyVXVYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1RHbHVhMlZrUkdsamRHbHZibUZ5ZVM1d2NtOTBiM1I1Y0dVdVptOXlSV0ZqYUNBOUlHWjFibU4wYVc5dUlDaGpZV3hzWW1GamF5a2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1kzSmhkMnhPYjJSbElEMGdkR2hwY3k1b1pXRmtMbTVsZUhRN1hHNGdJQ0FnSUNBZ0lIZG9hV3hsSUNnaGFYTklaV0ZrVDNKVVlXbHNUR2x1YTJWa1JHbGpkR2x2Ym1GeWVWQmhhWElvWTNKaGQyeE9iMlJsS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlISmxkQ0E5SUdOaGJHeGlZV05yS0dOeVlYZHNUbTlrWlM1clpYa3NJR055WVhkc1RtOWtaUzUyWVd4MVpTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jbVYwSUQwOVBTQm1ZV3h6WlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnlZWGRzVG05a1pTQTlJR055WVhkc1RtOWtaUzV1WlhoME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZUdGNiaUFnSUNCeVpYUjFjbTRnVEdsdWEyVmtSR2xqZEdsdmJtRnllVHRjYm4wb1JHbGpkR2x2Ym1GeWVWOHhMbVJsWm1GMWJIUXBLVHNnTHk4Z1JXNWtJRzltSUV4cGJtdGxaRVJwWTNScGIyNWhjbmxjYm1WNGNHOXlkSE11WkdWbVlYVnNkQ0E5SUV4cGJtdGxaRVJwWTNScGIyNWhjbms3WEc0dkx5QXZLaXBjYmk4dklDQXFJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjBhR2x6SUdScFkzUnBiMjVoY25rZ2FYTWdaWEYxWVd3Z2RHOGdkR2hsSUdkcGRtVnVJR1JwWTNScGIyNWhjbmt1WEc0dkx5QWdLaUJVZDI4Z1pHbGpkR2x2Ym1GeWFXVnpJR0Z5WlNCbGNYVmhiQ0JwWmlCMGFHVjVJR052Ym5SaGFXNGdkR2hsSUhOaGJXVWdiV0Z3Y0dsdVozTXVYRzR2THlBZ0tpQkFjR0Z5WVcwZ2UyTnZiR3hsWTNScGIyNXpMa1JwWTNScGIyNWhjbmw5SUc5MGFHVnlJSFJvWlNCdmRHaGxjaUJrYVdOMGFXOXVZWEo1TGx4dUx5OGdJQ29nUUhCaGNtRnRJSHRtZFc1amRHbHZiaWhQWW1wbFkzUXNUMkpxWldOMEtUcGliMjlzWldGdVBYMGdkbUZzZFdWelJYRjFZV3hHZFc1amRHbHZiaUJ2Y0hScGIyNWhiRnh1THk4Z0lDb2dablZ1WTNScGIyNGdkWE5sWkNCMGJ5QmphR1ZqYXlCcFppQjBkMjhnZG1Gc2RXVnpJR0Z5WlNCbGNYVmhiQzVjYmk4dklDQXFJRUJ5WlhSMWNtNGdlMkp2YjJ4bFlXNTlJSFJ5ZFdVZ2FXWWdkR2hwY3lCa2FXTjBhVzl1WVhKNUlHbHpJR1Z4ZFdGc0lIUnZJSFJvWlNCbmFYWmxiaUJrYVdOMGFXOXVZWEo1TGx4dUx5OGdJQ292WEc0dkx5QmpiMnhzWldOMGFXOXVjeTVFYVdOMGFXOXVZWEo1TG5CeWIzUnZkSGx3WlM1bGNYVmhiSE1nUFNCbWRXNWpkR2x2YmlodmRHaGxjaXgyWVd4MVpYTkZjWFZoYkVaMWJtTjBhVzl1S1NCN1hHNHZMeUJjZEdOdmJuTjBJR1Z4UmlBOUlIWmhiSFZsYzBWeGRXRnNSblZ1WTNScGIyNGdmSHdnWTI5c2JHVmpkR2x2Ym5NdVpHVm1ZWFZzZEVWeGRXRnNjenRjYmk4dklGeDBhV1lvSVNodmRHaGxjaUJwYm5OMFlXNWpaVzltSUdOdmJHeGxZM1JwYjI1ekxrUnBZM1JwYjI1aGNua3BLWHRjYmk4dklGeDBYSFJ5WlhSMWNtNGdabUZzYzJVN1hHNHZMeUJjZEgxY2JpOHZJRngwYVdZb2RHaHBjeTV6YVhwbEtDa2dJVDA5SUc5MGFHVnlMbk5wZW1Vb0tTbDdYRzR2THlCY2RGeDBjbVYwZFhKdUlHWmhiSE5sTzF4dUx5OGdYSFI5WEc0dkx5QmNkSEpsZEhWeWJpQjBhR2x6TG1WeGRXRnNjMEYxZUNoMGFHbHpMbVpwY25OMFRtOWtaU3h2ZEdobGNpNW1hWEp6ZEU1dlpHVXNaWEZHS1R0Y2JpOHZJSDFjYmk4dkl5QnpiM1Z5WTJWTllYQndhVzVuVlZKTVBVeHBibXRsWkVScFkzUnBiMjVoY25rdWFuTXViV0Z3SWl3aVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1UFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dYQ0pmWDJWelRXOWtkV3hsWENJc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hHNTJZWElnZFhScGJDQTlJSEpsY1hWcGNtVW9YQ0l1TDNWMGFXeGNJaWs3WEc1MllYSWdZWEp5WVhseklEMGdjbVZ4ZFdseVpTaGNJaTR2WVhKeVlYbHpYQ0lwTzF4dWRtRnlJRXhwYm10bFpFeHBjM1FnUFNBdktpb2dRR05zWVhOeklDb3ZJQ2htZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1EzSmxZWFJsY3lCaGJpQmxiWEIwZVNCTWFXNXJaV1FnVEdsemRDNWNiaUFnSUNBZ0tpQkFZMnhoYzNNZ1FTQnNhVzVyWldRZ2JHbHpkQ0JwY3lCaElHUmhkR0VnYzNSeWRXTjBkWEpsSUdOdmJuTnBjM1JwYm1jZ2IyWWdZU0JuY205MWNDQnZaaUJ1YjJSbGMxeHVJQ0FnSUNBcUlIZG9hV05vSUhSdloyVjBhR1Z5SUhKbGNISmxjMlZ1ZENCaElITmxjWFZsYm1ObExseHVJQ0FnSUNBcUlFQmpiMjV6ZEhKMVkzUnZjbHh1SUNBZ0lDQXFMMXh1SUNBZ0lHWjFibU4wYVc5dUlFeHBibXRsWkV4cGMzUW9LU0I3WEc0Z0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdLaUJHYVhKemRDQnViMlJsSUdsdUlIUm9aU0JzYVhOMFhHNGdJQ0FnSUNBZ0lDQXFJRUIwZVhCbElIdFBZbXBsWTNSOVhHNGdJQ0FnSUNBZ0lDQXFJRUJ3Y21sMllYUmxYRzRnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCMGFHbHpMbVpwY25OMFRtOWtaU0E5SUc1MWJHdzdYRzRnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0tpQk1ZWE4wSUc1dlpHVWdhVzRnZEdobElHeHBjM1JjYmlBZ0lDQWdJQ0FnSUNvZ1FIUjVjR1VnZTA5aWFtVmpkSDFjYmlBZ0lDQWdJQ0FnSUNvZ1FIQnlhWFpoZEdWY2JpQWdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHRnpkRTV2WkdVZ1BTQnVkV3hzTzF4dUlDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ29nVG5WdFltVnlJRzltSUdWc1pXMWxiblJ6SUdsdUlIUm9aU0JzYVhOMFhHNGdJQ0FnSUNBZ0lDQXFJRUIwZVhCbElIdHVkVzFpWlhKOVhHNGdJQ0FnSUNBZ0lDQXFJRUJ3Y21sMllYUmxYRzRnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCMGFHbHpMbTVGYkdWdFpXNTBjeUE5SURBN1hHNGdJQ0FnZlZ4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVGa1pITWdZVzRnWld4bGJXVnVkQ0IwYnlCMGFHbHpJR3hwYzNRdVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUdsMFpXMGdaV3hsYldWdWRDQjBieUJpWlNCaFpHUmxaQzVjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMjUxYldKbGNqMTlJR2x1WkdWNElHOXdkR2x2Ym1Gc0lHbHVaR1Y0SUhSdklHRmtaQ0IwYUdVZ1pXeGxiV1Z1ZEM0Z1NXWWdibThnYVc1a1pYZ2dhWE1nYzNCbFkybG1hV1ZrWEc0Z0lDQWdJQ29nZEdobElHVnNaVzFsYm5RZ2FYTWdZV1JrWldRZ2RHOGdkR2hsSUdWdVpDQnZaaUIwYUdseklHeHBjM1F1WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3WW05dmJHVmhibjBnZEhKMVpTQnBaaUIwYUdVZ1pXeGxiV1Z1ZENCM1lYTWdZV1JrWldRZ2IzSWdabUZzYzJVZ2FXWWdkR2hsSUdsdVpHVjRJR2x6SUdsdWRtRnNhV1JjYmlBZ0lDQWdLaUJ2Y2lCcFppQjBhR1VnWld4bGJXVnVkQ0JwY3lCMWJtUmxabWx1WldRdVhHNGdJQ0FnSUNvdlhHNGdJQ0FnVEdsdWEyVmtUR2x6ZEM1d2NtOTBiM1I1Y0dVdVlXUmtJRDBnWm5WdVkzUnBiMjRnS0dsMFpXMHNJR2x1WkdWNEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMWRHbHNMbWx6Vlc1a1pXWnBibVZrS0dsdVpHVjRLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhVzVrWlhnZ1BTQjBhR2x6TG01RmJHVnRaVzUwY3p0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnBaaUFvYVc1a1pYZ2dQQ0F3SUh4OElHbHVaR1Y0SUQ0Z2RHaHBjeTV1Uld4bGJXVnVkSE1nZkh3Z2RYUnBiQzVwYzFWdVpHVm1hVzVsWkNocGRHVnRLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIWmhjaUJ1WlhkT2IyUmxJRDBnZEdocGN5NWpjbVZoZEdWT2IyUmxLR2wwWlcwcE8xeHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXVSV3hsYldWdWRITWdQVDA5SURBZ2ZId2dkR2hwY3k1c1lYTjBUbTlrWlNBOVBUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1JtbHljM1FnYm05a1pTQnBiaUIwYUdVZ2JHbHpkQzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Wm1seWMzUk9iMlJsSUQwZ2JtVjNUbTlrWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWJHRnpkRTV2WkdVZ1BTQnVaWGRPYjJSbE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR1ZzYzJVZ2FXWWdLR2x1WkdWNElEMDlQU0IwYUdsekxtNUZiR1Z0Wlc1MGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTVzV6WlhKMElHRjBJSFJvWlNCbGJtUXVYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbXhoYzNST2IyUmxMbTVsZUhRZ1BTQnVaWGRPYjJSbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXNZWE4wVG05a1pTQTlJRzVsZDA1dlpHVTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWld4elpTQnBaaUFvYVc1a1pYZ2dQVDA5SURBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFTm9ZVzVuWlNCbWFYSnpkQ0J1YjJSbExseHVJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1RtOWtaUzV1WlhoMElEMGdkR2hwY3k1bWFYSnpkRTV2WkdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtWnBjbk4wVG05a1pTQTlJRzVsZDA1dlpHVTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdjSEpsZGlBOUlIUm9hWE11Ym05a1pVRjBTVzVrWlhnb2FXNWtaWGdnTFNBeEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHdjbVYySUQwOVBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1RtOWtaUzV1WlhoMElEMGdjSEpsZGk1dVpYaDBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NISmxkaTV1WlhoMElEMGdibVYzVG05a1pUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0IwYUdsekxtNUZiR1Z0Wlc1MGN5c3JPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkSEoxWlR0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZKbGRIVnlibk1nZEdobElHWnBjbk4wSUdWc1pXMWxiblFnYVc0Z2RHaHBjeUJzYVhOMExseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2V5cDlJSFJvWlNCbWFYSnpkQ0JsYkdWdFpXNTBJRzltSUhSb1pTQnNhWE4wSUc5eUlIVnVaR1ZtYVc1bFpDQnBaaUIwYUdVZ2JHbHpkQ0JwYzF4dUlDQWdJQ0FxSUdWdGNIUjVMbHh1SUNBZ0lDQXFMMXh1SUNBZ0lFeHBibXRsWkV4cGMzUXVjSEp2ZEc5MGVYQmxMbVpwY25OMElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1bWFYSnpkRTV2WkdVZ0lUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtWnBjbk4wVG05a1pTNWxiR1Z0Wlc1ME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjFibVJsWm1sdVpXUTdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaWFIxY201eklIUm9aU0JzWVhOMElHVnNaVzFsYm5RZ2FXNGdkR2hwY3lCc2FYTjBMbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdleXA5SUhSb1pTQnNZWE4wSUdWc1pXMWxiblFnYVc0Z2RHaGxJR3hwYzNRZ2IzSWdkVzVrWldacGJtVmtJR2xtSUhSb1pTQnNhWE4wSUdselhHNGdJQ0FnSUNvZ1pXMXdkSGt1WEc0Z0lDQWdJQ292WEc0Z0lDQWdUR2x1YTJWa1RHbHpkQzV3Y205MGIzUjVjR1V1YkdGemRDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWJHRnpkRTV2WkdVZ0lUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxteGhjM1JPYjJSbExtVnNaVzFsYm5RN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGSmxkSFZ5Ym5NZ2RHaGxJR1ZzWlcxbGJuUWdZWFFnZEdobElITndaV05wWm1sbFpDQndiM05wZEdsdmJpQnBiaUIwYUdseklHeHBjM1F1WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJR2x1WkdWNElHUmxjMmx5WldRZ2FXNWtaWGd1WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3S24wZ2RHaGxJR1ZzWlcxbGJuUWdZWFFnZEdobElHZHBkbVZ1SUdsdVpHVjRJRzl5SUhWdVpHVm1hVzVsWkNCcFppQjBhR1VnYVc1a1pYZ2dhWE5jYmlBZ0lDQWdLaUJ2ZFhRZ2IyWWdZbTkxYm1SekxseHVJQ0FnSUNBcUwxeHVJQ0FnSUV4cGJtdGxaRXhwYzNRdWNISnZkRzkwZVhCbExtVnNaVzFsYm5SQmRFbHVaR1Y0SUQwZ1puVnVZM1JwYjI0Z0tHbHVaR1Y0S1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ1YjJSbElEMGdkR2hwY3k1dWIyUmxRWFJKYm1SbGVDaHBibVJsZUNrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h1YjJSbElEMDlQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZFc1a1pXWnBibVZrTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdWIyUmxMbVZzWlcxbGJuUTdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaWFIxY201eklIUm9aU0JwYm1SbGVDQnBiaUIwYUdseklHeHBjM1FnYjJZZ2RHaGxJR1pwY25OMElHOWpZM1Z5Y21WdVkyVWdiMllnZEdobFhHNGdJQ0FnSUNvZ2MzQmxZMmxtYVdWa0lHVnNaVzFsYm5Rc0lHOXlJQzB4SUdsbUlIUm9aU0JNYVhOMElHUnZaWE1nYm05MElHTnZiblJoYVc0Z2RHaHBjeUJsYkdWdFpXNTBMbHh1SUNBZ0lDQXFJRHh3UGtsbUlIUm9aU0JsYkdWdFpXNTBjeUJwYm5OcFpHVWdkR2hwY3lCc2FYTjBJR0Z5WlZ4dUlDQWdJQ0FxSUc1dmRDQmpiMjF3WVhKaFlteGxJSGRwZEdnZ2RHaGxJRDA5UFNCdmNHVnlZWFJ2Y2lCaElHTjFjM1J2YlNCbGNYVmhiSE1nWm5WdVkzUnBiMjRnYzJodmRXeGtJR0psWEc0Z0lDQWdJQ29nY0hKdmRtbGtaV1FnZEc4Z2NHVnlabTl5YlNCelpXRnlZMmhsY3l3Z2RHaGxJR1oxYm1OMGFXOXVJRzExYzNRZ2NtVmpaV2wyWlNCMGQyOGdZWEpuZFcxbGJuUnpJR0Z1WkZ4dUlDQWdJQ0FxSUhKbGRIVnliaUIwY25WbElHbG1JSFJvWlhrZ1lYSmxJR1Z4ZFdGc0xDQm1ZV3h6WlNCdmRHaGxjbmRwYzJVdUlFVjRZVzF3YkdVNlBDOXdQbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dQSEJ5WlQ1Y2JpQWdJQ0FnS2lCamIyNXpkQ0J3WlhSelFYSmxSWEYxWVd4Q2VVNWhiV1VnUFNCbWRXNWpkR2x2Ymlod1pYUXhMQ0J3WlhReUtTQjdYRzRnSUNBZ0lDb2dJSEpsZEhWeWJpQndaWFF4TG01aGJXVWdQVDA5SUhCbGRESXVibUZ0WlR0Y2JpQWdJQ0FnS2lCOVhHNGdJQ0FnSUNvZ1BDOXdjbVUrWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJR2wwWlcwZ1pXeGxiV1Z1ZENCMGJ5QnpaV0Z5WTJnZ1ptOXlMbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdablZ1WTNScGIyNG9UMkpxWldOMExFOWlhbVZqZENrNlltOXZiR1ZoYmoxOUlHVnhkV0ZzYzBaMWJtTjBhVzl1SUU5d2RHbHZibUZzWEc0Z0lDQWdJQ29nWm5WdVkzUnBiMjRnZFhObFpDQjBieUJqYUdWamF5QnBaaUIwZDI4Z1pXeGxiV1Z1ZEhNZ1lYSmxJR1Z4ZFdGc0xseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UyNTFiV0psY24wZ2RHaGxJR2x1WkdWNElHbHVJSFJvYVhNZ2JHbHpkQ0J2WmlCMGFHVWdabWx5YzNRZ2IyTmpkWEp5Wlc1alpWeHVJQ0FnSUNBcUlHOW1JSFJvWlNCemNHVmphV1pwWldRZ1pXeGxiV1Z1ZEN3Z2IzSWdMVEVnYVdZZ2RHaHBjeUJzYVhOMElHUnZaWE1nYm05MElHTnZiblJoYVc0Z2RHaGxYRzRnSUNBZ0lDb2daV3hsYldWdWRDNWNiaUFnSUNBZ0tpOWNiaUFnSUNCTWFXNXJaV1JNYVhOMExuQnliM1J2ZEhsd1pTNXBibVJsZUU5bUlEMGdablZ1WTNScGIyNGdLR2wwWlcwc0lHVnhkV0ZzYzBaMWJtTjBhVzl1S1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJsY1hWaGJITkdJRDBnWlhGMVlXeHpSblZ1WTNScGIyNGdmSHdnZFhScGJDNWtaV1poZFd4MFJYRjFZV3h6TzF4dUlDQWdJQ0FnSUNCcFppQW9kWFJwYkM1cGMxVnVaR1ZtYVc1bFpDaHBkR1Z0S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJQzB4TzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIWmhjaUJqZFhKeVpXNTBUbTlrWlNBOUlIUm9hWE11Wm1seWMzUk9iMlJsTzF4dUlDQWdJQ0FnSUNCMllYSWdhVzVrWlhnZ1BTQXdPMXh1SUNBZ0lDQWdJQ0IzYUdsc1pTQW9ZM1Z5Y21WdWRFNXZaR1VnSVQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNobGNYVmhiSE5HS0dOMWNuSmxiblJPYjJSbExtVnNaVzFsYm5Rc0lHbDBaVzBwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdsdVpHVjRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVc1a1pYZ3JLenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5ST2IyUmxJRDBnWTNWeWNtVnVkRTV2WkdVdWJtVjRkRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTFRFN1hHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCU1pYUjFjbTV6SUhSeWRXVWdhV1lnZEdocGN5QnNhWE4wSUdOdmJuUmhhVzV6SUhSb1pTQnpjR1ZqYVdacFpXUWdaV3hsYldWdWRDNWNiaUFnSUNBZ0tpQThjRDVKWmlCMGFHVWdaV3hsYldWdWRITWdhVzV6YVdSbElIUm9aU0JzYVhOMElHRnlaVnh1SUNBZ0lDQXFJRzV2ZENCamIyMXdZWEpoWW14bElIZHBkR2dnZEdobElEMDlQU0J2Y0dWeVlYUnZjaUJoSUdOMWMzUnZiU0JsY1hWaGJITWdablZ1WTNScGIyNGdjMmh2ZFd4a0lHSmxYRzRnSUNBZ0lDb2djSEp2ZG1sa1pXUWdkRzhnY0dWeVptOXliU0J6WldGeVkyaGxjeXdnZEdobElHWjFibU4wYVc5dUlHMTFjM1FnY21WalpXbDJaU0IwZDI4Z1lYSm5kVzFsYm5SeklHRnVaRnh1SUNBZ0lDQXFJSEpsZEhWeWJpQjBjblZsSUdsbUlIUm9aWGtnWVhKbElHVnhkV0ZzTENCbVlXeHpaU0J2ZEdobGNuZHBjMlV1SUVWNFlXMXdiR1U2UEM5d1BseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1BIQnlaVDVjYmlBZ0lDQWdLaUJqYjI1emRDQndaWFJ6UVhKbFJYRjFZV3hDZVU1aGJXVWdQU0JtZFc1amRHbHZiaWh3WlhReExDQndaWFF5S1NCN1hHNGdJQ0FnSUNvZ0lISmxkSFZ5YmlCd1pYUXhMbTVoYldVZ1BUMDlJSEJsZERJdWJtRnRaVHRjYmlBZ0lDQWdLaUI5WEc0Z0lDQWdJQ29nUEM5d2NtVStYRzRnSUNBZ0lDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlHbDBaVzBnWld4bGJXVnVkQ0IwYnlCelpXRnlZMmdnWm05eUxseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1puVnVZM1JwYjI0b1QySnFaV04wTEU5aWFtVmpkQ2s2WW05dmJHVmhiajE5SUdWeGRXRnNjMFoxYm1OMGFXOXVJRTl3ZEdsdmJtRnNYRzRnSUNBZ0lDb2dablZ1WTNScGIyNGdkWE5sWkNCMGJ5QmphR1ZqYXlCcFppQjBkMjhnWld4bGJXVnVkSE1nWVhKbElHVnhkV0ZzTGx4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTJKdmIyeGxZVzU5SUhSeWRXVWdhV1lnZEdocGN5QnNhWE4wSUdOdmJuUmhhVzV6SUhSb1pTQnpjR1ZqYVdacFpXUWdaV3hsYldWdWRDd2dabUZzYzJWY2JpQWdJQ0FnS2lCdmRHaGxjbmRwYzJVdVhHNGdJQ0FnSUNvdlhHNGdJQ0FnVEdsdWEyVmtUR2x6ZEM1d2NtOTBiM1I1Y0dVdVkyOXVkR0ZwYm5NZ1BTQm1kVzVqZEdsdmJpQW9hWFJsYlN3Z1pYRjFZV3h6Um5WdVkzUnBiMjRwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNoMGFHbHpMbWx1WkdWNFQyWW9hWFJsYlN3Z1pYRjFZV3h6Um5WdVkzUnBiMjRwSUQ0OUlEQXBPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVZ0YjNabGN5QjBhR1VnWm1seWMzUWdiMk5qZFhKeVpXNWpaU0J2WmlCMGFHVWdjM0JsWTJsbWFXVmtJR1ZzWlcxbGJuUWdhVzRnZEdocGN5QnNhWE4wTGx4dUlDQWdJQ0FxSUR4d1BrbG1JSFJvWlNCbGJHVnRaVzUwY3lCcGJuTnBaR1VnZEdobElHeHBjM1FnWVhKbFhHNGdJQ0FnSUNvZ2JtOTBJR052YlhCaGNtRmliR1VnZDJsMGFDQjBhR1VnUFQwOUlHOXdaWEpoZEc5eUlHRWdZM1Z6ZEc5dElHVnhkV0ZzY3lCbWRXNWpkR2x2YmlCemFHOTFiR1FnWW1WY2JpQWdJQ0FnS2lCd2NtOTJhV1JsWkNCMGJ5QndaWEptYjNKdElITmxZWEpqYUdWekxDQjBhR1VnWm5WdVkzUnBiMjRnYlhWemRDQnlaV05sYVhabElIUjNieUJoY21kMWJXVnVkSE1nWVc1a1hHNGdJQ0FnSUNvZ2NtVjBkWEp1SUhSeWRXVWdhV1lnZEdobGVTQmhjbVVnWlhGMVlXd3NJR1poYkhObElHOTBhR1Z5ZDJselpTNGdSWGhoYlhCc1pUbzhMM0ErWEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUE4Y0hKbFBseHVJQ0FnSUNBcUlHTnZibk4wSUhCbGRITkJjbVZGY1hWaGJFSjVUbUZ0WlNBOUlHWjFibU4wYVc5dUtIQmxkREVzSUhCbGRESXBJSHRjYmlBZ0lDQWdLaUFnY21WMGRYSnVJSEJsZERFdWJtRnRaU0E5UFQwZ2NHVjBNaTV1WVcxbE8xeHVJQ0FnSUNBcUlIMWNiaUFnSUNBZ0tpQThMM0J5WlQ1Y2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnYVhSbGJTQmxiR1Z0Wlc1MElIUnZJR0psSUhKbGJXOTJaV1FnWm5KdmJTQjBhR2x6SUd4cGMzUXNJR2xtSUhCeVpYTmxiblF1WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3WW05dmJHVmhibjBnZEhKMVpTQnBaaUIwYUdVZ2JHbHpkQ0JqYjI1MFlXbHVaV1FnZEdobElITndaV05wWm1sbFpDQmxiR1Z0Wlc1MExseHVJQ0FnSUNBcUwxeHVJQ0FnSUV4cGJtdGxaRXhwYzNRdWNISnZkRzkwZVhCbExuSmxiVzkyWlNBOUlHWjFibU4wYVc5dUlDaHBkR1Z0TENCbGNYVmhiSE5HZFc1amRHbHZiaWtnZTF4dUlDQWdJQ0FnSUNCMllYSWdaWEYxWVd4elJpQTlJR1Z4ZFdGc2MwWjFibU4wYVc5dUlIeDhJSFYwYVd3dVpHVm1ZWFZzZEVWeGRXRnNjenRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11YmtWc1pXMWxiblJ6SUR3Z01TQjhmQ0IxZEdsc0xtbHpWVzVrWldacGJtVmtLR2wwWlcwcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZG1GeUlIQnlaWFpwYjNWeklEMGdiblZzYkR0Y2JpQWdJQ0FnSUNBZ2RtRnlJR04xY25KbGJuUk9iMlJsSUQwZ2RHaHBjeTVtYVhKemRFNXZaR1U3WEc0Z0lDQWdJQ0FnSUhkb2FXeGxJQ2hqZFhKeVpXNTBUbTlrWlNBaFBUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHVnhkV0ZzYzBZb1kzVnljbVZ1ZEU1dlpHVXVaV3hsYldWdWRDd2dhWFJsYlNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0hKbGRtbHZkWE1nUFQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bWFYSnpkRTV2WkdVZ1BTQmpkWEp5Wlc1MFRtOWtaUzV1WlhoME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kzVnljbVZ1ZEU1dlpHVWdQVDA5SUhSb2FYTXViR0Z6ZEU1dlpHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWJHRnpkRTV2WkdVZ1BTQnVkV3hzTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1ZzYzJVZ2FXWWdLR04xY25KbGJuUk9iMlJsSUQwOVBTQjBhR2x6TG14aGMzUk9iMlJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWJHRnpkRTV2WkdVZ1BTQndjbVYyYVc5MWN6dGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hKbGRtbHZkWE11Ym1WNGRDQTlJR04xY25KbGJuUk9iMlJsTG01bGVIUTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJPYjJSbExtNWxlSFFnUFNCdWRXeHNPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hKbGRtbHZkWE11Ym1WNGRDQTlJR04xY25KbGJuUk9iMlJsTG01bGVIUTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJPYjJSbExtNWxlSFFnUFNCdWRXeHNPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtNUZiR1Z0Wlc1MGN5MHRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjBjblZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NISmxkbWx2ZFhNZ1BTQmpkWEp5Wlc1MFRtOWtaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5ST2IyUmxJRDBnWTNWeWNtVnVkRTV2WkdVdWJtVjRkRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaVzF2ZG1WeklHRnNiQ0J2WmlCMGFHVWdaV3hsYldWdWRITWdabkp2YlNCMGFHbHpJR3hwYzNRdVhHNGdJQ0FnSUNvdlhHNGdJQ0FnVEdsdWEyVmtUR2x6ZEM1d2NtOTBiM1I1Y0dVdVkyeGxZWElnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVptbHljM1JPYjJSbElEMGdiblZzYkR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzWVhOMFRtOWtaU0E5SUc1MWJHdzdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJrVnNaVzFsYm5SeklEMGdNRHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjBhR2x6SUd4cGMzUWdhWE1nWlhGMVlXd2dkRzhnZEdobElHZHBkbVZ1SUd4cGMzUXVYRzRnSUNBZ0lDb2dWSGR2SUd4cGMzUnpJR0Z5WlNCbGNYVmhiQ0JwWmlCMGFHVjVJR2hoZG1VZ2RHaGxJSE5oYldVZ1pXeGxiV1Z1ZEhNZ2FXNGdkR2hsSUhOaGJXVWdiM0prWlhJdVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0TWFXNXJaV1JNYVhOMGZTQnZkR2hsY2lCMGFHVWdiM1JvWlhJZ2JHbHpkQzVjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMloxYm1OMGFXOXVLRTlpYW1WamRDeFBZbXBsWTNRcE9tSnZiMnhsWVc0OWZTQmxjWFZoYkhOR2RXNWpkR2x2YmlCdmNIUnBiMjVoYkZ4dUlDQWdJQ0FxSUdaMWJtTjBhVzl1SUhWelpXUWdkRzhnWTJobFkyc2dhV1lnZEhkdklHVnNaVzFsYm5SeklHRnlaU0JsY1hWaGJDNGdTV1lnZEdobElHVnNaVzFsYm5SeklHbHVJSFJvWlNCc2FYTjBjMXh1SUNBZ0lDQXFJR0Z5WlNCamRYTjBiMjBnYjJKcVpXTjBjeUI1YjNVZ2MyaHZkV3hrSUhCeWIzWnBaR1VnWVNCbWRXNWpkR2x2Yml3Z2IzUm9aWEozYVhObFhHNGdJQ0FnSUNvZ2RHaGxJRDA5UFNCdmNHVnlZWFJ2Y2lCcGN5QjFjMlZrSUhSdklHTm9aV05ySUdWeGRXRnNhWFI1SUdKbGRIZGxaVzRnWld4bGJXVnVkSE11WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3WW05dmJHVmhibjBnZEhKMVpTQnBaaUIwYUdseklHeHBjM1FnYVhNZ1pYRjFZV3dnZEc4Z2RHaGxJR2RwZG1WdUlHeHBjM1F1WEc0Z0lDQWdJQ292WEc0Z0lDQWdUR2x1YTJWa1RHbHpkQzV3Y205MGIzUjVjR1V1WlhGMVlXeHpJRDBnWm5WdVkzUnBiMjRnS0c5MGFHVnlMQ0JsY1hWaGJITkdkVzVqZEdsdmJpa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1pYRkdJRDBnWlhGMVlXeHpSblZ1WTNScGIyNGdmSHdnZFhScGJDNWtaV1poZFd4MFJYRjFZV3h6TzF4dUlDQWdJQ0FnSUNCcFppQW9JU2h2ZEdobGNpQnBibk4wWVc1alpXOW1JRXhwYm10bFpFeHBjM1FwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVjMmw2WlNncElDRTlQU0J2ZEdobGNpNXphWHBsS0NrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1bGNYVmhiSE5CZFhnb2RHaHBjeTVtYVhKemRFNXZaR1VzSUc5MGFHVnlMbVpwY25OMFRtOWtaU3dnWlhGR0tUdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFQndjbWwyWVhSbFhHNGdJQ0FnSUNvdlhHNGdJQ0FnVEdsdWEyVmtUR2x6ZEM1d2NtOTBiM1I1Y0dVdVpYRjFZV3h6UVhWNElEMGdablZ1WTNScGIyNGdLRzR4TENCdU1pd2daWEZHS1NCN1hHNGdJQ0FnSUNBZ0lIZG9hV3hsSUNodU1TQWhQVDBnYm5Wc2JDQW1KaUJ1TWlBaFBUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRmxjVVlvYmpFdVpXeGxiV1Z1ZEN3Z2JqSXVaV3hsYldWdWRDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnVNU0E5SUc0eExtNWxlSFE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnVNaUE5SUc0eUxtNWxlSFE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSeWRXVTdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaVzF2ZG1WeklIUm9aU0JsYkdWdFpXNTBJR0YwSUhSb1pTQnpjR1ZqYVdacFpXUWdjRzl6YVhScGIyNGdhVzRnZEdocGN5QnNhWE4wTGx4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0JwYm1SbGVDQm5hWFpsYmlCcGJtUmxlQzVjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHNxZlNCeVpXMXZkbVZrSUdWc1pXMWxiblFnYjNJZ2RXNWtaV1pwYm1Wa0lHbG1JSFJvWlNCcGJtUmxlQ0JwY3lCdmRYUWdiMllnWW05MWJtUnpMbHh1SUNBZ0lDQXFMMXh1SUNBZ0lFeHBibXRsWkV4cGMzUXVjSEp2ZEc5MGVYQmxMbkpsYlc5MlpVVnNaVzFsYm5SQmRFbHVaR1Y0SUQwZ1puVnVZM1JwYjI0Z0tHbHVaR1Y0S1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hwYm1SbGVDQThJREFnZkh3Z2FXNWtaWGdnUGowZ2RHaHBjeTV1Uld4bGJXVnVkSE1nZkh3Z2RHaHBjeTVtYVhKemRFNXZaR1VnUFQwOUlHNTFiR3dnZkh3Z2RHaHBjeTVzWVhOMFRtOWtaU0E5UFQwZ2JuVnNiQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0IyWVhJZ1pXeGxiV1Z1ZER0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWJrVnNaVzFsYm5SeklEMDlQU0F4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2TDBacGNuTjBJRzV2WkdVZ2FXNGdkR2hsSUd4cGMzUXVYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJHVnRaVzUwSUQwZ2RHaHBjeTVtYVhKemRFNXZaR1V1Wld4bGJXVnVkRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Wm1seWMzUk9iMlJsSUQwZ2JuVnNiRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YkdGemRFNXZaR1VnUFNCdWRXeHNPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJSEJ5WlhacGIzVnpJRDBnZEdocGN5NXViMlJsUVhSSmJtUmxlQ2hwYm1SbGVDQXRJREVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hCeVpYWnBiM1Z6SUQwOVBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pXeGxiV1Z1ZENBOUlIUm9hWE11Wm1seWMzUk9iMlJsTG1Wc1pXMWxiblE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW1hWEp6ZEU1dlpHVWdQU0IwYUdsekxtWnBjbk4wVG05a1pTNXVaWGgwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeHpaU0JwWmlBb2NISmxkbWx2ZFhNdWJtVjRkQ0E5UFQwZ2RHaHBjeTVzWVhOMFRtOWtaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdWc1pXMWxiblFnUFNCMGFHbHpMbXhoYzNST2IyUmxMbVZzWlcxbGJuUTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1c1lYTjBUbTlrWlNBOUlIQnlaWFpwYjNWek8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hCeVpYWnBiM1Z6SUNFOVBTQnVkV3hzSUNZbUlIQnlaWFpwYjNWekxtNWxlSFFnSVQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbGJHVnRaVzUwSUQwZ2NISmxkbWx2ZFhNdWJtVjRkQzVsYkdWdFpXNTBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEJ5WlhacGIzVnpMbTVsZUhRZ1BTQndjbVYyYVc5MWN5NXVaWGgwTG01bGVIUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdkR2hwY3k1dVJXeGxiV1Z1ZEhNdExUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHVnNaVzFsYm5RN1hHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRmVHVmpkWFJsY3lCMGFHVWdjSEp2ZG1sa1pXUWdablZ1WTNScGIyNGdiMjVqWlNCbWIzSWdaV0ZqYUNCbGJHVnRaVzUwSUhCeVpYTmxiblFnYVc0Z2RHaHBjeUJzYVhOMElHbHVJRzl5WkdWeUxseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1puVnVZM1JwYjI0b1QySnFaV04wS1RvcWZTQmpZV3hzWW1GamF5Qm1kVzVqZEdsdmJpQjBieUJsZUdWamRYUmxMQ0JwZENCcGMxeHVJQ0FnSUNBcUlHbHVkbTlyWldRZ2QybDBhQ0J2Ym1VZ1lYSm5kVzFsYm5RNklIUm9aU0JsYkdWdFpXNTBJSFpoYkhWbExDQjBieUJpY21WaGF5QjBhR1VnYVhSbGNtRjBhVzl1SUhsdmRTQmpZVzVjYmlBZ0lDQWdLaUJ2Y0hScGIyNWhiR3g1SUhKbGRIVnliaUJtWVd4elpTNWNiaUFnSUNBZ0tpOWNiaUFnSUNCTWFXNXJaV1JNYVhOMExuQnliM1J2ZEhsd1pTNW1iM0pGWVdOb0lEMGdablZ1WTNScGIyNGdLR05oYkd4aVlXTnJLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQmpkWEp5Wlc1MFRtOWtaU0E5SUhSb2FYTXVabWx5YzNST2IyUmxPMXh1SUNBZ0lDQWdJQ0IzYUdsc1pTQW9ZM1Z5Y21WdWRFNXZaR1VnSVQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoallXeHNZbUZqYXloamRYSnlaVzUwVG05a1pTNWxiR1Z0Wlc1MEtTQTlQVDBnWm1Gc2MyVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUk9iMlJsSUQwZ1kzVnljbVZ1ZEU1dlpHVXVibVY0ZER0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VtVjJaWEp6WlhNZ2RHaGxJRzl5WkdWeUlHOW1JSFJvWlNCbGJHVnRaVzUwY3lCcGJpQjBhR2x6SUd4cGJtdGxaQ0JzYVhOMElDaHRZV3RsY3lCMGFHVWdiR0Z6ZEZ4dUlDQWdJQ0FxSUdWc1pXMWxiblFnWm1seWMzUXNJR0Z1WkNCMGFHVWdabWx5YzNRZ1pXeGxiV1Z1ZENCc1lYTjBLUzVjYmlBZ0lDQWdLaTljYmlBZ0lDQk1hVzVyWldSTWFYTjBMbkJ5YjNSdmRIbHdaUzV5WlhabGNuTmxJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnY0hKbGRtbHZkWE1nUFNCdWRXeHNPMXh1SUNBZ0lDQWdJQ0IyWVhJZ1kzVnljbVZ1ZENBOUlIUm9hWE11Wm1seWMzUk9iMlJsTzF4dUlDQWdJQ0FnSUNCMllYSWdkR1Z0Y0NBOUlHNTFiR3c3WEc0Z0lDQWdJQ0FnSUhkb2FXeGxJQ2hqZFhKeVpXNTBJQ0U5UFNCdWRXeHNLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBaVzF3SUQwZ1kzVnljbVZ1ZEM1dVpYaDBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kzVnljbVZ1ZEM1dVpYaDBJRDBnY0hKbGRtbHZkWE03WEc0Z0lDQWdJQ0FnSUNBZ0lDQndjbVYyYVc5MWN5QTlJR04xY25KbGJuUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwSUQwZ2RHVnRjRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCMFpXMXdJRDBnZEdocGN5NW1hWEp6ZEU1dlpHVTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVptbHljM1JPYjJSbElEMGdkR2hwY3k1c1lYTjBUbTlrWlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzWVhOMFRtOWtaU0E5SUhSbGJYQTdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaWFIxY201eklHRnVJR0Z5Y21GNUlHTnZiblJoYVc1cGJtY2dZV3hzSUc5bUlIUm9aU0JsYkdWdFpXNTBjeUJwYmlCMGFHbHpJR3hwYzNRZ2FXNGdjSEp2Y0dWeVhHNGdJQ0FnSUNvZ2MyVnhkV1Z1WTJVdVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1FYSnlZWGt1UENvK2ZTQmhiaUJoY25KaGVTQmpiMjUwWVdsdWFXNW5JR0ZzYkNCdlppQjBhR1VnWld4bGJXVnVkSE1nYVc0Z2RHaHBjeUJzYVhOMExGeHVJQ0FnSUNBcUlHbHVJSEJ5YjNCbGNpQnpaWEYxWlc1alpTNWNiaUFnSUNBZ0tpOWNiaUFnSUNCTWFXNXJaV1JNYVhOMExuQnliM1J2ZEhsd1pTNTBiMEZ5Y21GNUlEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdZWEp5WVhrZ1BTQmJYVHRjYmlBZ0lDQWdJQ0FnZG1GeUlHTjFjbkpsYm5ST2IyUmxJRDBnZEdocGN5NW1hWEp6ZEU1dlpHVTdYRzRnSUNBZ0lDQWdJSGRvYVd4bElDaGpkWEp5Wlc1MFRtOWtaU0FoUFQwZ2JuVnNiQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZWEp5WVhrdWNIVnphQ2hqZFhKeVpXNTBUbTlrWlM1bGJHVnRaVzUwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUk9iMlJsSUQwZ1kzVnljbVZ1ZEU1dlpHVXVibVY0ZER0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1lYSnlZWGs3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJTWlhSMWNtNXpJSFJvWlNCdWRXMWlaWElnYjJZZ1pXeGxiV1Z1ZEhNZ2FXNGdkR2hwY3lCc2FYTjBMbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMjUxYldKbGNuMGdkR2hsSUc1MWJXSmxjaUJ2WmlCbGJHVnRaVzUwY3lCcGJpQjBhR2x6SUd4cGMzUXVYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1RHbHVhMlZrVEdsemRDNXdjbTkwYjNSNWNHVXVjMmw2WlNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWJrVnNaVzFsYm5Sek8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSb2FYTWdiR2x6ZENCamIyNTBZV2x1Y3lCdWJ5QmxiR1Z0Wlc1MGN5NWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdGliMjlzWldGdWZTQjBjblZsSUdsbUlIUm9hWE1nYkdsemRDQmpiMjUwWVdsdWN5QnVieUJsYkdWdFpXNTBjeTVjYmlBZ0lDQWdLaTljYmlBZ0lDQk1hVzVyWldSTWFYTjBMbkJ5YjNSdmRIbHdaUzVwYzBWdGNIUjVJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV1Uld4bGJXVnVkSE1nUEQwZ01EdGNiaUFnSUNCOU8xeHVJQ0FnSUV4cGJtdGxaRXhwYzNRdWNISnZkRzkwZVhCbExuUnZVM1J5YVc1bklEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWVhKeVlYbHpMblJ2VTNSeWFXNW5LSFJvYVhNdWRHOUJjbkpoZVNncEtUdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFQndjbWwyWVhSbFhHNGdJQ0FnSUNvdlhHNGdJQ0FnVEdsdWEyVmtUR2x6ZEM1d2NtOTBiM1I1Y0dVdWJtOWtaVUYwU1c1a1pYZ2dQU0JtZFc1amRHbHZiaUFvYVc1a1pYZ3BJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHbHVaR1Y0SUR3Z01DQjhmQ0JwYm1SbGVDQStQU0IwYUdsekxtNUZiR1Z0Wlc1MGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUc1MWJHdzdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnYVdZZ0tHbHVaR1Y0SUQwOVBTQW9kR2hwY3k1dVJXeGxiV1Z1ZEhNZ0xTQXhLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11YkdGemRFNXZaR1U3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2RtRnlJRzV2WkdVZ1BTQjBhR2x6TG1acGNuTjBUbTlrWlR0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnBibVJsZUNBbUppQnViMlJsSUNFOVBTQnVkV3hzT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHNXZaR1VnUFNCdWIyUmxMbTVsZUhRN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHNXZaR1U3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJBY0hKcGRtRjBaVnh1SUNBZ0lDQXFMMXh1SUNBZ0lFeHBibXRsWkV4cGMzUXVjSEp2ZEc5MGVYQmxMbU55WldGMFpVNXZaR1VnUFNCbWRXNWpkR2x2YmlBb2FYUmxiU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaV3hsYldWdWREb2dhWFJsYlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJRzVsZUhRNklHNTFiR3hjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0I5TzF4dUlDQWdJSEpsZEhWeWJpQk1hVzVyWldSTWFYTjBPMXh1ZlNncEtUc2dMeThnUlc1a0lHOW1JR3hwYm10bFpDQnNhWE4wWEc1bGVIQnZjblJ6TG1SbFptRjFiSFFnUFNCTWFXNXJaV1JNYVhOME8xeHVMeThqSUhOdmRYSmpaVTFoY0hCcGJtZFZVa3c5VEdsdWEyVmtUR2x6ZEM1cWN5NXRZWEFpTENKY0luVnpaU0J6ZEhKcFkzUmNJanRjYms5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQmNJbDlmWlhOTmIyUjFiR1ZjSWl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JuWmhjaUIxZEdsc0lEMGdjbVZ4ZFdseVpTaGNJaTR2ZFhScGJGd2lLVHRjYm5aaGNpQkVhV04wYVc5dVlYSjVYekVnUFNCeVpYRjFhWEpsS0Z3aUxpOUVhV04wYVc5dVlYSjVYQ0lwTzF4dWRtRnlJR0Z5Y21GNWN5QTlJSEpsY1hWcGNtVW9YQ0l1TDJGeWNtRjVjMXdpS1R0Y2JuWmhjaUJOZFd4MGFVUnBZM1JwYjI1aGNua2dQU0F2S2lvZ1FHTnNZWE56SUNvdklDaG1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUTNKbFlYUmxjeUJoYmlCbGJYQjBlU0J0ZFd4MGFTQmthV04wYVc5dVlYSjVMbHh1SUNBZ0lDQXFJRUJqYkdGemN5QThjRDVCSUcxMWJIUnBJR1JwWTNScGIyNWhjbmtnYVhNZ1lTQnpjR1ZqYVdGc0lHdHBibVFnYjJZZ1pHbGpkR2x2Ym1GeWVTQjBhR0YwSUdodmJHUnpYRzRnSUNBZ0lDb2diWFZzZEdsd2JHVWdkbUZzZFdWeklHRm5ZV2x1YzNRZ1pXRmphQ0JyWlhrdUlGTmxkSFJwYm1jZ1lTQjJZV3gxWlNCcGJuUnZJSFJvWlNCa2FXTjBhVzl1WVhKNUlIZHBiR3hjYmlBZ0lDQWdLaUJoWkdRZ2RHaGxJSFpoYkhWbElIUnZJR0Z1SUdGeWNtRjVJR0YwSUhSb1lYUWdhMlY1TGlCSFpYUjBhVzVuSUdFZ2EyVjVJSGRwYkd3Z2NtVjBkWEp1SUdGdUlHRnljbUY1TEZ4dUlDQWdJQ0FxSUdodmJHUnBibWNnWVd4c0lIUm9aU0IyWVd4MVpYTWdjMlYwSUhSdklIUm9ZWFFnYTJWNUxseHVJQ0FnSUNBcUlGbHZkU0JqWVc0Z1kyOXVabWxuZFhKbElIUnZJR0ZzYkc5M0lHUjFjR3hwWTJGMFpYTWdhVzRnZEdobElIWmhiSFZsY3k1Y2JpQWdJQ0FnS2lCVWFHbHpJR2x0Y0d4bGJXVnVkR0YwYVc5dUlHRmpZMlZ3ZEhNZ1lXNTVJR3RwYm1RZ2IyWWdiMkpxWldOMGN5QmhjeUJyWlhsekxqd3ZjRDVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRHh3UGtsbUlIUm9aU0JyWlhseklHRnlaU0JqZFhOMGIyMGdiMkpxWldOMGN5QmhJR1oxYm1OMGFXOXVJSGRvYVdOb0lHTnZiblpsY25SeklHdGxlWE1nZEc4Z2MzUnlhVzVuY3lCdGRYTjBJR0psWEc0Z0lDQWdJQ29nY0hKdmRtbGtaV1F1SUVWNFlXMXdiR1U2UEM5d1BseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1BIQnlaVDVjYmlBZ0lDQWdLaUJtZFc1amRHbHZiaUJ3WlhSVWIxTjBjbWx1Wnlod1pYUXBJSHRjYmlBZ0lDQWdLaUFnSUNBZ2NtVjBkWEp1SUhCbGRDNXVZVzFsTzF4dUlDQWdJQ0FxSUgxY2JpQWdJQ0FnS2lBOEwzQnlaVDVjYmlBZ0lDQWdLaUE4Y0Q1SlppQjBhR1VnZG1Gc2RXVnpJR0Z5WlNCamRYTjBiMjBnYjJKcVpXTjBjeUJoSUdaMWJtTjBhVzl1SUhSdklHTm9aV05ySUdWeGRXRnNhWFI1SUdKbGRIZGxaVzRnZG1Gc2RXVnpYRzRnSUNBZ0lDb2diWFZ6ZENCaVpTQndjbTkyYVdSbFpDNGdSWGhoYlhCc1pUbzhMM0ErWEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUE4Y0hKbFBseHVJQ0FnSUNBcUlHWjFibU4wYVc5dUlIQmxkSE5CY21WRmNYVmhiRUo1UVdkbEtIQmxkREVzY0dWME1pa2dlMXh1SUNBZ0lDQXFJQ0FnSUNCeVpYUjFjbTRnY0dWME1TNWhaMlVnUFQwOUlIQmxkREl1WVdkbE8xeHVJQ0FnSUNBcUlIMWNiaUFnSUNBZ0tpQThMM0J5WlQ1Y2JpQWdJQ0FnS2lCQVkyOXVjM1J5ZFdOMGIzSmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UyWjFibU4wYVc5dUtFOWlhbVZqZENrNmMzUnlhVzVuUFgwZ2RHOVRkSEpHZFc1amRHbHZiaUJ2Y0hScGIyNWhiQ0JtZFc1amRHbHZibHh1SUNBZ0lDQXFJSFJ2SUdOdmJuWmxjblFnYTJWNWN5QjBieUJ6ZEhKcGJtZHpMaUJKWmlCMGFHVWdhMlY1Y3lCaGNtVnVKM1FnYzNSeWFXNW5jeUJ2Y2lCcFppQjBiMU4wY21sdVp5Z3BYRzRnSUNBZ0lDb2dhWE1nYm05MElHRndjSEp2Y0hKcFlYUmxMQ0JoSUdOMWMzUnZiU0JtZFc1amRHbHZiaUIzYUdsamFDQnlaV05sYVhabGN5QmhJR3RsZVNCaGJtUWdjbVYwZFhKdWN5QmhYRzRnSUNBZ0lDb2dkVzVwY1hWbElITjBjbWx1WnlCdGRYTjBJR0psSUhCeWIzWnBaR1ZrTGx4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3Wm5WdVkzUnBiMjRvVDJKcVpXTjBMRTlpYW1WamRDazZZbTl2YkdWaGJqMTlJSFpoYkhWbGMwVnhkV0ZzYzBaMWJtTjBhVzl1SUc5d2RHbHZibUZzWEc0Z0lDQWdJQ29nWm5WdVkzUnBiMjRnZEc4Z1kyaGxZMnNnYVdZZ2RIZHZJSFpoYkhWbGN5QmhjbVVnWlhGMVlXd3VYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ1lXeHNiM2RFZFhCc2FXTmhkR1ZXWVd4MVpYTmNiaUFnSUNBZ0tpOWNiaUFnSUNCbWRXNWpkR2x2YmlCTmRXeDBhVVJwWTNScGIyNWhjbmtvZEc5VGRISkdkVzVqZEdsdmJpd2dkbUZzZFdWelJYRjFZV3h6Um5WdVkzUnBiMjRzSUdGc2JHOTNSSFZ3YkdsallYUmxWbUZzZFdWektTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoaGJHeHZkMFIxY0d4cFkyRjBaVlpoYkhWbGN5QTlQVDBnZG05cFpDQXdLU0I3SUdGc2JHOTNSSFZ3YkdsallYUmxWbUZzZFdWeklEMGdabUZzYzJVN0lIMWNiaUFnSUNBZ0lDQWdkR2hwY3k1a2FXTjBJRDBnYm1WM0lFUnBZM1JwYjI1aGNubGZNUzVrWldaaGRXeDBLSFJ2VTNSeVJuVnVZM1JwYjI0cE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1WeGRXRnNjMFlnUFNCMllXeDFaWE5GY1hWaGJITkdkVzVqZEdsdmJpQjhmQ0IxZEdsc0xtUmxabUYxYkhSRmNYVmhiSE03WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZV3hzYjNkRWRYQnNhV05oZEdVZ1BTQmhiR3h2ZDBSMWNHeHBZMkYwWlZaaGJIVmxjenRjYmlBZ0lDQjlYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVYwZFhKdWN5QmhiaUJoY25KaGVTQm9iMnhrYVc1bklIUm9aU0IyWVd4MVpYTWdkRzhnZDJocFkyZ2dkR2hwY3lCa2FXTjBhVzl1WVhKNUlHMWhjSE5jYmlBZ0lDQWdLaUIwYUdVZ2MzQmxZMmxtYVdWa0lHdGxlUzVjYmlBZ0lDQWdLaUJTWlhSMWNtNXpJR0Z1SUdWdGNIUjVJR0Z5Y21GNUlHbG1JSFJvYVhNZ1pHbGpkR2x2Ym1GeWVTQmpiMjUwWVdsdWN5QnVieUJ0WVhCd2FXNW5jeUJtYjNJZ2RHaHBjeUJyWlhrdVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUd0bGVTQnJaWGtnZDJodmMyVWdZWE56YjJOcFlYUmxaQ0IyWVd4MVpYTWdZWEpsSUhSdklHSmxJSEpsZEhWeWJtVmtMbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMEZ5Y21GNWZTQmhiaUJoY25KaGVTQm9iMnhrYVc1bklIUm9aU0IyWVd4MVpYTWdkRzhnZDJocFkyZ2dkR2hwY3lCa2FXTjBhVzl1WVhKNUlHMWhjSE5jYmlBZ0lDQWdLaUIwYUdVZ2MzQmxZMmxtYVdWa0lHdGxlUzVjYmlBZ0lDQWdLaTljYmlBZ0lDQk5kV3gwYVVScFkzUnBiMjVoY25rdWNISnZkRzkwZVhCbExtZGxkRlpoYkhWbElEMGdablZ1WTNScGIyNGdLR3RsZVNrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnZG1Gc2RXVnpJRDBnZEdocGN5NWthV04wTG1kbGRGWmhiSFZsS0d0bGVTazdYRzRnSUNBZ0lDQWdJR2xtSUNoMWRHbHNMbWx6Vlc1a1pXWnBibVZrS0haaGJIVmxjeWtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmJYVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWVhKeVlYbHpMbU52Y0hrb2RtRnNkV1Z6S1R0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVGa1pITWdkR2hsSUhaaGJIVmxJSFJ2SUhSb1pTQmhjbkpoZVNCaGMzTnZZMmxoZEdWa0lIZHBkR2dnZEdobElITndaV05wWm1sbFpDQnJaWGtzSUdsbVhHNGdJQ0FnSUNvZ2FYUWdhWE1nYm05MElHRnNjbVZoWkhrZ2NISmxjMlZ1ZEM1Y2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnYTJWNUlHdGxlU0IzYVhSb0lIZG9hV05vSUhSb1pTQnpjR1ZqYVdacFpXUWdkbUZzZFdVZ2FYTWdkRzhnWW1WY2JpQWdJQ0FnS2lCaGMzTnZZMmxoZEdWa0xseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCMllXeDFaU0IwYUdVZ2RtRnNkV1VnZEc4Z1lXUmtJSFJ2SUhSb1pTQmhjbkpoZVNCaGRDQjBhR1VnYTJWNVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ltOXZiR1ZoYm4wZ2RISjFaU0JwWmlCMGFHVWdkbUZzZFdVZ2QyRnpJRzV2ZENCaGJISmxZV1I1SUdGemMyOWphV0YwWldRZ2QybDBhQ0IwYUdGMElHdGxlUzVjYmlBZ0lDQWdLaTljYmlBZ0lDQk5kV3gwYVVScFkzUnBiMjVoY25rdWNISnZkRzkwZVhCbExuTmxkRlpoYkhWbElEMGdablZ1WTNScGIyNGdLR3RsZVN3Z2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFYwYVd3dWFYTlZibVJsWm1sdVpXUW9hMlY1S1NCOGZDQjFkR2xzTG1selZXNWtaV1pwYm1Wa0tIWmhiSFZsS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSFpoY2lCaGNuSmhlU0E5SUhSb2FYTXVaR2xqZEM1blpYUldZV3gxWlNoclpYa3BPMXh1SUNBZ0lDQWdJQ0JwWmlBb2RYUnBiQzVwYzFWdVpHVm1hVzVsWkNoaGNuSmhlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpHbGpkQzV6WlhSV1lXeDFaU2hyWlhrc0lGdDJZV3gxWlYwcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdhV1lnS0NGMGFHbHpMbUZzYkc5M1JIVndiR2xqWVhSbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZWEp5WVhsekxtTnZiblJoYVc1ektHRnljbUY1TENCMllXeDFaU3dnZEdocGN5NWxjWFZoYkhOR0tTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCaGNuSmhlUzV3ZFhOb0tIWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSeWRXVTdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaVzF2ZG1WeklIUm9aU0J6Y0dWamFXWnBaV1FnZG1Gc2RXVnpJR1p5YjIwZ2RHaGxJR0Z5Y21GNUlHOW1JSFpoYkhWbGN5QmhjM052WTJsaGRHVmtJSGRwZEdnZ2RHaGxYRzRnSUNBZ0lDb2djM0JsWTJsbWFXVmtJR3RsZVM0Z1NXWWdZU0IyWVd4MVpTQnBjMjRuZENCbmFYWmxiaXdnWVd4c0lIWmhiSFZsY3lCaGMzTnZZMmxoZEdWa0lIZHBkR2dnZEdobElITndaV05wWm1sbFpGeHVJQ0FnSUNBcUlHdGxlU0JoY21VZ2NtVnRiM1psWkM1Y2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnYTJWNUlHdGxlU0IzYUc5elpTQnRZWEJ3YVc1bklHbHpJSFJ2SUdKbElISmxiVzkyWldRZ1puSnZiU0IwYUdWY2JpQWdJQ0FnS2lCa2FXTjBhVzl1WVhKNUxseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1QySnFaV04wUFgwZ2RtRnNkV1VnYjNCMGFXOXVZV3dnWVhKbmRXMWxiblFnZEc4Z2MzQmxZMmxtZVNCMGFHVWdkbUZzZFdVZ2RHOGdjbVZ0YjNabFhHNGdJQ0FnSUNvZ1puSnZiU0IwYUdVZ1lYSnlZWGtnWVhOemIyTnBZWFJsWkNCM2FYUm9JSFJvWlNCemNHVmphV1pwWldRZ2EyVjVMbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdleXA5SUhSeWRXVWdhV1lnZEdobElHUnBZM1JwYjI1aGNua2dZMmhoYm1kbFpDd2dabUZzYzJVZ2FXWWdkR2hsSUd0bGVTQmtiMlZ6YmlkMElHVjRhWE4wSUc5eVhHNGdJQ0FnSUNvZ2FXWWdkR2hsSUhOd1pXTnBabWxsWkNCMllXeDFaU0JwYzI0bmRDQmhjM052WTJsaGRHVmtJSGRwZEdnZ2RHaGxJSE53WldOcFptbGxaQ0JyWlhrdVhHNGdJQ0FnSUNvdlhHNGdJQ0FnVFhWc2RHbEVhV04wYVc5dVlYSjVMbkJ5YjNSdmRIbHdaUzV5WlcxdmRtVWdQU0JtZFc1amRHbHZiaUFvYTJWNUxDQjJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZFhScGJDNXBjMVZ1WkdWbWFXNWxaQ2gyWVd4MVpTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUIySUQwZ2RHaHBjeTVrYVdOMExuSmxiVzkyWlNoclpYa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUNGMWRHbHNMbWx6Vlc1a1pXWnBibVZrS0hZcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSFpoY2lCaGNuSmhlU0E5SUhSb2FYTXVaR2xqZEM1blpYUldZV3gxWlNoclpYa3BPMXh1SUNBZ0lDQWdJQ0JwWmlBb0lYVjBhV3d1YVhOVmJtUmxabWx1WldRb1lYSnlZWGtwSUNZbUlHRnljbUY1Y3k1eVpXMXZkbVVvWVhKeVlYa3NJSFpoYkhWbExDQjBhR2x6TG1WeGRXRnNjMFlwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1lYSnlZWGt1YkdWdVozUm9JRDA5UFNBd0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1a2FXTjBMbkpsYlc5MlpTaHJaWGtwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSeWRXVTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VtVjBkWEp1Y3lCaGJpQmhjbkpoZVNCamIyNTBZV2x1YVc1bklHRnNiQ0J2WmlCMGFHVWdhMlY1Y3lCcGJpQjBhR2x6SUdScFkzUnBiMjVoY25rdVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1FYSnlZWGw5SUdGdUlHRnljbUY1SUdOdmJuUmhhVzVwYm1jZ1lXeHNJRzltSUhSb1pTQnJaWGx6SUdsdUlIUm9hWE1nWkdsamRHbHZibUZ5ZVM1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0JOZFd4MGFVUnBZM1JwYjI1aGNua3VjSEp2ZEc5MGVYQmxMbXRsZVhNZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtUnBZM1F1YTJWNWN5Z3BPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVYwZFhKdWN5QmhiaUJoY25KaGVTQmpiMjUwWVdsdWFXNW5JR0ZzYkNCdlppQjBhR1VnZG1Gc2RXVnpJR2x1SUhSb2FYTWdaR2xqZEdsdmJtRnllUzVjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRCY25KaGVYMGdZVzRnWVhKeVlYa2dZMjl1ZEdGcGJtbHVaeUJoYkd3Z2IyWWdkR2hsSUhaaGJIVmxjeUJwYmlCMGFHbHpJR1JwWTNScGIyNWhjbmt1WEc0Z0lDQWdJQ292WEc0Z0lDQWdUWFZzZEdsRWFXTjBhVzl1WVhKNUxuQnliM1J2ZEhsd1pTNTJZV3gxWlhNZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQjJZV3gxWlhNZ1BTQjBhR2x6TG1ScFkzUXVkbUZzZFdWektDazdYRzRnSUNBZ0lDQWdJSFpoY2lCaGNuSmhlU0E5SUZ0ZE8xeHVJQ0FnSUNBZ0lDQm1iM0lnS0haaGNpQmZhU0E5SURBc0lIWmhiSFZsYzE4eElEMGdkbUZzZFdWek95QmZhU0E4SUhaaGJIVmxjMTh4TG14bGJtZDBhRHNnWDJrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJSFlnUFNCMllXeDFaWE5mTVZ0ZmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCZllTQTlJREFzSUhaZk1TQTlJSFk3SUY5aElEd2dkbDh4TG14bGJtZDBhRHNnWDJFckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCM0lEMGdkbDh4VzE5aFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhjbkpoZVM1d2RYTm9LSGNwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJoY25KaGVUdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGSmxkSFZ5Ym5NZ2RISjFaU0JwWmlCMGFHbHpJR1JwWTNScGIyNWhjbmtnWVhRZ2JHVmhjM1FnYjI1bElIWmhiSFZsSUdGemMyOWphV0YwZEdWa0lIUm9aU0J6Y0dWamFXWnBaV1FnYTJWNUxseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCclpYa2dhMlY1SUhkb2IzTmxJSEJ5WlhObGJtTmxJR2x1SUhSb2FYTWdaR2xqZEdsdmJtRnllU0JwY3lCMGJ5QmlaVnh1SUNBZ0lDQXFJSFJsYzNSbFpDNWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdGliMjlzWldGdWZTQjBjblZsSUdsbUlIUm9hWE1nWkdsamRHbHZibUZ5ZVNCaGRDQnNaV0Z6ZENCdmJtVWdkbUZzZFdVZ1lYTnpiMk5wWVhSMFpXUmNiaUFnSUNBZ0tpQjBhR1VnYzNCbFkybG1hV1ZrSUd0bGVTNWNiaUFnSUNBZ0tpOWNiaUFnSUNCTmRXeDBhVVJwWTNScGIyNWhjbmt1Y0hKdmRHOTBlWEJsTG1OdmJuUmhhVzV6UzJWNUlEMGdablZ1WTNScGIyNGdLR3RsZVNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVrYVdOMExtTnZiblJoYVc1elMyVjVLR3RsZVNrN1hHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCU1pXMXZkbVZ6SUdGc2JDQnRZWEJ3YVc1bmN5Qm1jbTl0SUhSb2FYTWdaR2xqZEdsdmJtRnllUzVjYmlBZ0lDQWdLaTljYmlBZ0lDQk5kV3gwYVVScFkzUnBiMjVoY25rdWNISnZkRzkwZVhCbExtTnNaV0Z5SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtUnBZM1F1WTJ4bFlYSW9LVHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkpsZEhWeWJuTWdkR2hsSUc1MWJXSmxjaUJ2WmlCclpYbHpJR2x1SUhSb2FYTWdaR2xqZEdsdmJtRnllUzVjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHR1ZFcxaVpYSjlJSFJvWlNCdWRXMWlaWElnYjJZZ2EyVjVMWFpoYkhWbElHMWhjSEJwYm1keklHbHVJSFJvYVhNZ1pHbGpkR2x2Ym1GeWVTNWNiaUFnSUNBZ0tpOWNiaUFnSUNCTmRXeDBhVVJwWTNScGIyNWhjbmt1Y0hKdmRHOTBlWEJsTG5OcGVtVWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbVJwWTNRdWMybDZaU2dwTzF4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVW1WMGRYSnVjeUIwY25WbElHbG1JSFJvYVhNZ1pHbGpkR2x2Ym1GeWVTQmpiMjUwWVdsdWN5QnVieUJ0WVhCd2FXNW5jeTVjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRpYjI5c1pXRnVmU0IwY25WbElHbG1JSFJvYVhNZ1pHbGpkR2x2Ym1GeWVTQmpiMjUwWVdsdWN5QnVieUJ0WVhCd2FXNW5jeTVjYmlBZ0lDQWdLaTljYmlBZ0lDQk5kV3gwYVVScFkzUnBiMjVoY25rdWNISnZkRzkwZVhCbExtbHpSVzF3ZEhrZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtUnBZM1F1YVhORmJYQjBlU2dwTzF4dUlDQWdJSDA3WEc0Z0lDQWdjbVYwZFhKdUlFMTFiSFJwUkdsamRHbHZibUZ5ZVR0Y2JuMG9LU2s3SUM4dklHVnVaQ0J2WmlCdGRXeDBhU0JrYVdOMGFXOXVZWEo1WEc1bGVIQnZjblJ6TG1SbFptRjFiSFFnUFNCTmRXeDBhVVJwWTNScGIyNWhjbms3WEc0dkx5TWdjMjkxY21ObFRXRndjR2x1WjFWU1REMU5kV3gwYVVScFkzUnBiMjVoY25rdWFuTXViV0Z3SWl3aVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1UFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dYQ0pmWDJWelRXOWtkV3hsWENJc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hHNTJZWElnUkdseVpXTjBhVzl1TzF4dUtHWjFibU4wYVc5dUlDaEVhWEpsWTNScGIyNHBJSHRjYmlBZ0lDQkVhWEpsWTNScGIyNWJSR2x5WldOMGFXOXVXMXdpUWtWR1QxSkZYQ0pkSUQwZ01GMGdQU0JjSWtKRlJrOVNSVndpTzF4dUlDQWdJRVJwY21WamRHbHZibHRFYVhKbFkzUnBiMjViWENKQlJsUkZVbHdpWFNBOUlERmRJRDBnWENKQlJsUkZVbHdpTzF4dUlDQWdJRVJwY21WamRHbHZibHRFYVhKbFkzUnBiMjViWENKSlRsTkpSRVZmUVZSZlJVNUVYQ0pkSUQwZ01sMGdQU0JjSWtsT1UwbEVSVjlCVkY5RlRrUmNJanRjYmlBZ0lDQkVhWEpsWTNScGIyNWJSR2x5WldOMGFXOXVXMXdpU1U1VFNVUkZYMEZVWDFOVVFWSlVYQ0pkSUQwZ00xMGdQU0JjSWtsT1UwbEVSVjlCVkY5VFZFRlNWRndpTzF4dWZTa29SR2x5WldOMGFXOXVJSHg4SUNoRWFYSmxZM1JwYjI0Z1BTQjdmU2twTzF4dWRtRnlJRTExYkhScFVtOXZkRlJ5WldVZ1BTQXZLaW9nUUdOc1lYTnpJQ292SUNobWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1puVnVZM1JwYjI0Z1RYVnNkR2xTYjI5MFZISmxaU2h5YjI5MFNXUnpMQ0J1YjJSbGN5a2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2NtOXZkRWxrY3lBOVBUMGdkbTlwWkNBd0tTQjdJSEp2YjNSSlpITWdQU0JiWFRzZ2ZWeHVJQ0FnSUNBZ0lDQnBaaUFvYm05a1pYTWdQVDA5SUhadmFXUWdNQ2tnZXlCdWIyUmxjeUE5SUh0OU95QjlYRzRnSUNBZ0lDQWdJSFJvYVhNdWNtOXZkRWxrY3lBOUlISnZiM1JKWkhNN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ym05a1pYTWdQU0J1YjJSbGN6dGNiaUFnSUNBZ0lDQWdkR2hwY3k1cGJtbDBVbTl2ZEVsa2N5Z3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtbHVhWFJPYjJSbGN5Z3BPMXh1SUNBZ0lIMWNiaUFnSUNCTmRXeDBhVkp2YjNSVWNtVmxMbkJ5YjNSdmRIbHdaUzVwYm1sMFVtOXZkRWxrY3lBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnWm05eUlDaDJZWElnWDJrZ1BTQXdMQ0JmWVNBOUlIUm9hWE11Y205dmRFbGtjenNnWDJrZ1BDQmZZUzVzWlc1bmRHZzdJRjlwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQnliMjkwU1dRZ1BTQmZZVnRmYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtTnlaV0YwWlVWdGNIUjVUbTlrWlVsbVRtOTBSWGhwYzNRb2NtOXZkRWxrS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNGdJQ0FnVFhWc2RHbFNiMjkwVkhKbFpTNXdjbTkwYjNSNWNHVXVhVzVwZEU1dlpHVnpJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQm1iM0lnS0haaGNpQnViMlJsUzJWNUlHbHVJSFJvYVhNdWJtOWtaWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbTV2WkdWekxtaGhjMDkzYmxCeWIzQmxjblI1S0c1dlpHVkxaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ1gya2dQU0F3TENCZllTQTlJSFJvYVhNdWJtOWtaWE5iYm05a1pVdGxlVjA3SUY5cElEd2dYMkV1YkdWdVozUm9PeUJmYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGNpQnViMlJsVEdsemRFbDBaVzBnUFNCZllWdGZhVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WTNKbFlYUmxSVzF3ZEhsT2IyUmxTV1pPYjNSRmVHbHpkQ2h1YjJSbFRHbHpkRWwwWlcwcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNGdJQ0FnVFhWc2RHbFNiMjkwVkhKbFpTNXdjbTkwYjNSNWNHVXVZM0psWVhSbFJXMXdkSGxPYjJSbFNXWk9iM1JGZUdsemRDQTlJR1oxYm1OMGFXOXVJQ2h1YjJSbFMyVjVLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hkR2hwY3k1dWIyUmxjMXR1YjJSbFMyVjVYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dWIyUmxjMXR1YjJSbFMyVjVYU0E5SUZ0ZE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZUdGNiaUFnSUNCTmRXeDBhVkp2YjNSVWNtVmxMbkJ5YjNSdmRIbHdaUzVuWlhSU2IyOTBTV1J6SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1kyeHZibVVnUFNCMGFHbHpMbkp2YjNSSlpITXVjMnhwWTJVb0tUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHTnNiMjVsTzF4dUlDQWdJSDA3WEc0Z0lDQWdUWFZzZEdsU2IyOTBWSEpsWlM1d2NtOTBiM1I1Y0dVdVoyVjBUbTlrWlhNZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQmpiRzl1WlNBOUlIdDlPMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tIWmhjaUJ1YjJSbFMyVjVJR2x1SUhSb2FYTXVibTlrWlhNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG01dlpHVnpMbWhoYzA5M2JsQnliM0JsY25SNUtHNXZaR1ZMWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMnh2Ym1WYmJtOWtaVXRsZVYwZ1BTQjBhR2x6TG01dlpHVnpXMjV2WkdWTFpYbGRMbk5zYVdObEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHTnNiMjVsTzF4dUlDQWdJSDA3WEc0Z0lDQWdUWFZzZEdsU2IyOTBWSEpsWlM1d2NtOTBiM1I1Y0dVdVoyVjBUMkpxWldOMElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbTl2ZEVsa2N6b2dkR2hwY3k1blpYUlNiMjkwU1dSektDa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCdWIyUmxjem9nZEdocGN5NW5aWFJPYjJSbGN5Z3BMRnh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDA3WEc0Z0lDQWdUWFZzZEdsU2IyOTBWSEpsWlM1d2NtOTBiM1I1Y0dVdWRHOVBZbXBsWTNRZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtZGxkRTlpYW1WamRDZ3BPMXh1SUNBZ0lIMDdYRzRnSUNBZ1RYVnNkR2xTYjI5MFZISmxaUzV3Y205MGIzUjVjR1V1Wm14aGRIUmxiaUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUY5MGFHbHpJRDBnZEdocGN6dGNiaUFnSUNBZ0lDQWdkbUZ5SUdWNGRISmhVSEp2Y0hOUFltcGxZM1FnUFNCYlhUdGNiaUFnSUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0IwYUdsekxuSnZiM1JKWkhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJ5YjI5MFNXUWdQU0IwYUdsekxuSnZiM1JKWkhOYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCbGVIUnlZVkJ5YjNCelQySnFaV04wTG5CMWMyZ29lMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xrT2lCeWIyOTBTV1FzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWMlpXdzZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYUdGelVHRnlaVzUwT2lCbVlXeHpaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYUdsc1pISmxia052ZFc1ME9pQXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGNtRjJaWEp6WlNoeWIyOTBTV1FzSUhSb2FYTXVibTlrWlhNc0lHVjRkSEpoVUhKdmNITlBZbXBsWTNRc0lEQXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUY5cElEMGdNQ3dnWlhoMGNtRlFjbTl3YzA5aWFtVmpkRjh4SUQwZ1pYaDBjbUZRY205d2MwOWlhbVZqZERzZ1gya2dQQ0JsZUhSeVlWQnliM0J6VDJKcVpXTjBYekV1YkdWdVozUm9PeUJmYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdieUE5SUdWNGRISmhVSEp2Y0hOUFltcGxZM1JmTVZ0ZmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCdkxtTm9hV3hrY21WdVEyOTFiblFnUFNCamIzVnVkRU5vYVd4a2NtVnVLRzh1YVdRcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmxlSFJ5WVZCeWIzQnpUMkpxWldOME8xeHVJQ0FnSUNBZ0lDQm1kVzVqZEdsdmJpQmpiM1Z1ZEVOb2FXeGtjbVZ1S0dsa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JVjkwYUdsekxtNXZaR1Z6VzJsa1hTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQXdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUdOb2FXeGtjbVZ1UTI5MWJuUWdQU0JmZEdocGN5NXViMlJsYzF0cFpGMHViR1Z1WjNSb08xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCamFHbHNaSEpsYmtOdmRXNTBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR1oxYm1OMGFXOXVJSFJ5WVhabGNuTmxLSE4wWVhKMFNXUXNJRzV2WkdWekxDQnlaWFIxY201QmNuSmhlU3dnYkdWMlpXd3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hzWlhabGJDQTlQVDBnZG05cFpDQXdLU0I3SUd4bGRtVnNJRDBnTURzZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRnpkR0Z5ZEVsa0lIeDhJQ0Z1YjJSbGN5QjhmQ0FoY21WMGRYSnVRWEp5WVhrZ2ZId2dJVzV2WkdWelczTjBZWEowU1dSZEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YyWld3ckt6dGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQnBaSE5NYVhOMElEMGdibTlrWlhOYmMzUmhjblJKWkYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUdsa2MweHBjM1F1YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnYVdRZ1BTQnBaSE5NYVhOMFcybGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJrRnljbUY1TG5CMWMyZ29leUJwWkRvZ2FXUXNJR3hsZG1Wc09pQnNaWFpsYkN3Z2FHRnpVR0Z5Wlc1ME9pQjBjblZsSUgwcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUnlZWFpsY25ObEtHbGtMQ0J1YjJSbGN5d2djbVYwZFhKdVFYSnlZWGtzSUd4bGRtVnNLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRtVnNMUzA3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dUlDQWdJRTExYkhScFVtOXZkRlJ5WldVdWNISnZkRzkwZVhCbExtMXZkbVZKWkVKbFptOXlaVWxrSUQwZ1puVnVZM1JwYjI0Z0tHMXZkbVZKWkN3Z1ltVm1iM0psU1dRcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11Ylc5MlpVbGtLRzF2ZG1WSlpDd2dZbVZtYjNKbFNXUXNJRVJwY21WamRHbHZiaTVDUlVaUFVrVXBPMXh1SUNBZ0lIMDdYRzRnSUNBZ1RYVnNkR2xTYjI5MFZISmxaUzV3Y205MGIzUjVjR1V1Ylc5MlpVbGtRV1owWlhKSlpDQTlJR1oxYm1OMGFXOXVJQ2h0YjNabFNXUXNJR0ZtZEdWeVNXUXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWJXOTJaVWxrS0cxdmRtVkpaQ3dnWVdaMFpYSkpaQ3dnUkdseVpXTjBhVzl1TGtGR1ZFVlNLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lFMTFiSFJwVW05dmRGUnlaV1V1Y0hKdmRHOTBlWEJsTG0xdmRtVkpaRWx1ZEc5SlpDQTlJR1oxYm1OMGFXOXVJQ2h0YjNabFNXUXNJR2x1YzJsa1pVbGtMQ0JoZEZOMFlYSjBLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaGhkRk4wWVhKMElEMDlQU0IyYjJsa0lEQXBJSHNnWVhSVGRHRnlkQ0E5SUhSeWRXVTdJSDFjYmlBZ0lDQWdJQ0FnYVdZZ0tHRjBVM1JoY25RcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtMXZkbVZKWkNodGIzWmxTV1FzSUdsdWMybGtaVWxrTENCRWFYSmxZM1JwYjI0dVNVNVRTVVJGWDBGVVgxTlVRVkpVS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG0xdmRtVkpaQ2h0YjNabFNXUXNJR2x1YzJsa1pVbGtMQ0JFYVhKbFkzUnBiMjR1U1U1VFNVUkZYMEZVWDBWT1JDazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlPMXh1SUNBZ0lFMTFiSFJwVW05dmRGUnlaV1V1Y0hKdmRHOTBlWEJsTG5OM1lYQlNiMjkwU1dSWGFYUm9VbTl2ZEVsa0lEMGdablZ1WTNScGIyNGdLSEp2YjNSSlpDd2dkMmwwYUZKdmIzUkpaQ2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdiR1ZtZEVsdVpHVjRJRDBnZEdocGN5NW1hVzVrVW05dmRFbGtLSEp2YjNSSlpDazdYRzRnSUNBZ0lDQWdJSFpoY2lCeWFXZG9kRWx1WkdWNElEMGdkR2hwY3k1bWFXNWtVbTl2ZEVsa0tIZHBkR2hTYjI5MFNXUXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjNZWEJTYjI5MFVHOXphWFJwYjI1WGFYUm9VbTl2ZEZCdmMybDBhVzl1S0d4bFpuUkpibVJsZUN3Z2NtbG5hSFJKYm1SbGVDazdYRzRnSUNBZ2ZUdGNiaUFnSUNCTmRXeDBhVkp2YjNSVWNtVmxMbkJ5YjNSdmRIbHdaUzV6ZDJGd1VtOXZkRkJ2YzJsMGFXOXVWMmwwYUZKdmIzUlFiM05wZEdsdmJpQTlJR1oxYm1OMGFXOXVJQ2h6ZDJGd1VtOXZkRkJ2YzJsMGFXOXVMQ0IzYVhSb1VtOXZkRkJ2YzJsMGFXOXVLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQjBaVzF3SUQwZ2RHaHBjeTV5YjI5MFNXUnpXM2RwZEdoU2IyOTBVRzl6YVhScGIyNWRPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuSnZiM1JKWkhOYmQybDBhRkp2YjNSUWIzTnBkR2x2YmwwZ1BTQjBhR2x6TG5KdmIzUkpaSE5iYzNkaGNGSnZiM1JRYjNOcGRHbHZibDA3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjbTl2ZEVsa2MxdHpkMkZ3VW05dmRGQnZjMmwwYVc5dVhTQTlJSFJsYlhBN1hHNGdJQ0FnZlR0Y2JpQWdJQ0JOZFd4MGFWSnZiM1JVY21WbExuQnliM1J2ZEhsd1pTNWtaV3hsZEdWSlpDQTlJR1oxYm1OMGFXOXVJQ2hwWkNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5KdmIzUkVaV3hsZEdWSlpDaHBaQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVibTlrWlVGdVpGTjFZazV2WkdWelJHVnNaWFJsS0dsa0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dWIyUmxVbVZtY21WdVkyVnpSR1ZzWlhSbEtHbGtLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lFMTFiSFJwVW05dmRGUnlaV1V1Y0hKdmRHOTBlWEJsTG1sdWMyVnlkRWxrUW1WbWIzSmxTV1FnUFNCbWRXNWpkR2x2YmlBb1ltVm1iM0psU1dRc0lHbHVjMlZ5ZEVsa0tTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCbWIzVnVaRkp2YjNSSlpFbHVaR1Y0SUQwZ2RHaHBjeTVtYVc1a1VtOXZkRWxrS0dKbFptOXlaVWxrS1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLR1p2ZFc1a1VtOXZkRWxrU1c1a1pYZ2dQaUF0TVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXBibk5sY25SSlpFbHVkRzlTYjI5MEtHbHVjMlZ5ZEVsa0xDQm1iM1Z1WkZKdmIzUkpaRWx1WkdWNEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JtYjNJZ0tIWmhjaUJ1YjJSbFMyVjVJR2x1SUhSb2FYTXVibTlrWlhNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG01dlpHVnpMbWhoYzA5M2JsQnliM0JsY25SNUtHNXZaR1ZMWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUdadmRXNWtUbTlrWlVsa1NXNWtaWGdnUFNCMGFHbHpMbVpwYm1ST2IyUmxTV1FvYm05a1pVdGxlU3dnWW1WbWIzSmxTV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaG1iM1Z1WkU1dlpHVkpaRWx1WkdWNElENGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1cGJuTmxjblJKWkVsdWRHOU9iMlJsS0c1dlpHVkxaWGtzSUdsdWMyVnlkRWxrTENCbWIzVnVaRTV2WkdWSlpFbHVaR1Y0S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dUlDQWdJRTExYkhScFVtOXZkRlJ5WldVdWNISnZkRzkwZVhCbExtbHVjMlZ5ZEVsa1FXWjBaWEpKWkNBOUlHWjFibU4wYVc5dUlDaGlaV3h2ZDBsa0xDQnBibk5sY25SSlpDa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1ptOTFibVJTYjI5MFNXUkpibVJsZUNBOUlIUm9hWE11Wm1sdVpGSnZiM1JKWkNoaVpXeHZkMGxrS1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLR1p2ZFc1a1VtOXZkRWxrU1c1a1pYZ2dQaUF0TVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXBibk5sY25SSlpFbHVkRzlTYjI5MEtHbHVjMlZ5ZEVsa0xDQm1iM1Z1WkZKdmIzUkpaRWx1WkdWNElDc2dNU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2JtOWtaVXRsZVNCcGJpQjBhR2x6TG01dlpHVnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXViMlJsY3k1b1lYTlBkMjVRY205d1pYSjBlU2h1YjJSbFMyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGNpQm1iM1Z1WkU1dlpHVkpaRWx1WkdWNElEMGdkR2hwY3k1bWFXNWtUbTlrWlVsa0tHNXZaR1ZMWlhrc0lHSmxiRzkzU1dRcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2htYjNWdVpFNXZaR1ZKWkVsdVpHVjRJRDRnTFRFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXBibk5sY25SSlpFbHVkRzlPYjJSbEtHNXZaR1ZMWlhrc0lHbHVjMlZ5ZEVsa0xDQm1iM1Z1WkU1dlpHVkpaRWx1WkdWNElDc2dNU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYmlBZ0lDQk5kV3gwYVZKdmIzUlVjbVZsTG5CeWIzUnZkSGx3WlM1cGJuTmxjblJKWkVsdWRHOUpaQ0E5SUdaMWJtTjBhVzl1SUNocGJuTnBaR1ZKWkN3Z2FXNXpaWEowU1dRcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dWIyUmxTVzV6WlhKMFFYUkZibVFvYVc1emFXUmxTV1FzSUdsdWMyVnlkRWxrS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV1YjJSbGMxdHBibk5sY25SSlpGMGdQU0JiWFR0Y2JpQWdJQ0I5TzF4dUlDQWdJRTExYkhScFVtOXZkRlJ5WldVdWNISnZkRzkwZVhCbExtbHVjMlZ5ZEVsa1NXNTBiMUp2YjNRZ1BTQm1kVzVqZEdsdmJpQW9hV1FzSUhCdmMybDBhVzl1S1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h3YjNOcGRHbHZiaUE5UFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkp2YjNSSmJuTmxjblJCZEVWdVpDaHBaQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0c5emFYUnBiMjRnUENBd0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUd4bGJtZDBhRjh4SUQwZ2RHaHBjeTV5YjI5MFNXUnpMbXhsYm1kMGFEdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5KdmIzUkpaSE11YzNCc2FXTmxLQ2h3YjNOcGRHbHZiaUFySUd4bGJtZDBhRjh4SUNzZ01Ta3NJREFzSUdsa0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Y205dmRFbGtjeTV6Y0d4cFkyVW9jRzl6YVhScGIyNHNJREFzSUdsa0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjBhR2x6TG01dlpHVnpXMmxrWFNBOUlIUm9hWE11Ym05a1pYTmJhV1JkSUh4OElGdGRPMXh1SUNBZ0lIMDdYRzRnSUNBZ1RYVnNkR2xTYjI5MFZISmxaUzV3Y205MGIzUjVjR1V1YVc1elpYSjBTV1JKYm5SdlRtOWtaU0E5SUdaMWJtTjBhVzl1SUNodWIyUmxTMlY1TENCcFpDd2djRzl6YVhScGIyNHBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXViMlJsYzF0dWIyUmxTMlY1WFNBOUlIUm9hWE11Ym05a1pYTmJibTlrWlV0bGVWMGdmSHdnVzEwN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ym05a1pYTmJhV1JkSUQwZ2RHaHBjeTV1YjJSbGMxdHBaRjBnZkh3Z1cxMDdYRzRnSUNBZ0lDQWdJR2xtSUNod2IzTnBkR2x2YmlBOVBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG01dlpHVkpibk5sY25SQmRFVnVaQ2h1YjJSbFMyVjVMQ0JwWkNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2NHOXphWFJwYjI0Z1BDQXdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHeGxibWQwYUY4eUlEMGdkR2hwY3k1dWIyUmxjMXR1YjJSbFMyVjVYUzVzWlc1bmRHZzdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dWIyUmxjMXR1YjJSbFMyVjVYUzV6Y0d4cFkyVW9LSEJ2YzJsMGFXOXVJQ3NnYkdWdVozUm9YeklnS3lBeEtTd2dNQ3dnYVdRcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV1YjJSbGMxdHViMlJsUzJWNVhTNXpjR3hwWTJVb2NHOXphWFJwYjI0c0lEQXNJR2xrS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc0Z0lDQWdUWFZzZEdsU2IyOTBWSEpsWlM1d2NtOTBiM1I1Y0dVdWJXOTJaVWxrSUQwZ1puVnVZM1JwYjI0Z0tHMXZkbVZKWkN3Z1ltVm1iM0psU1dRc0lHUnBjbVZqZEdsdmJpa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ2MyOTFjbU5sU1dRZ1BTQnRiM1psU1dRN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ6YjNWeVkyVlNiMjkwU1c1a1pYZ2dQU0IwYUdsekxtWnBibVJTYjI5MFNXUW9jMjkxY21ObFNXUXBPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2MyOTFjbU5sVG05a1pVdGxlVHRjYmlBZ0lDQWdJQ0FnZG1GeUlITnZkWEpqWlU1dlpHVkpaRWx1WkdWNE8xeHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXViMlJsYzF0aVpXWnZjbVZKWkYwcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOdmRYSmpaVTV2WkdWTFpYa2dQU0JpWldadmNtVkpaRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCdWIyUmxTMlY1SUdsdUlIUm9hWE11Ym05a1pYTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtNXZaR1Z6TG1oaGMwOTNibEJ5YjNCbGNuUjVLRzV2WkdWTFpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzI5MWNtTmxUbTlrWlVsa1NXNWtaWGdnUFNCMGFHbHpMbVpwYm1ST2IyUmxTV1FvYm05a1pVdGxlU3dnWW1WbWIzSmxTV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQzh2SUdkdmRDQmhiR3hjYmlBZ0lDQWdJQ0FnZG1GeUlIUmhjbWRsZEVsa0lEMGdZbVZtYjNKbFNXUTdYRzRnSUNBZ0lDQWdJSFpoY2lCMFlYSm5aWFJTYjI5MFNXNWtaWGdnUFNCMGFHbHpMbVpwYm1SU2IyOTBTV1FvZEdGeVoyVjBTV1FwTzF4dUlDQWdJQ0FnSUNCMllYSWdkR0Z5WjJWMFRtOWtaVXRsZVR0Y2JpQWdJQ0FnSUNBZ2RtRnlJSFJoY21kbGRFNXZaR1ZKWkVsdVpHVjRPMXh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTV1YjJSbGMxdGlaV1p2Y21WSlpGMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUmhjbWRsZEU1dlpHVkxaWGtnUFNCaVpXWnZjbVZKWkR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQm1iM0lnS0haaGNpQnViMlJsUzJWNUlHbHVJSFJvYVhNdWJtOWtaWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbTV2WkdWekxtaGhjMDkzYmxCeWIzQmxjblI1S0c1dlpHVkxaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHRnlaMlYwVG05a1pVbGtTVzVrWlhnZ1BTQjBhR2x6TG1acGJtUk9iMlJsU1dRb2JtOWtaVXRsZVN3Z1ltVm1iM0psU1dRcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUM4dklHZHZkQ0JoYkd4Y2JpQWdJQ0FnSUNBZ2FXWWdLSE52ZFhKalpWSnZiM1JKYm1SbGVDQStJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHRnlaMlYwVW05dmRFbHVaR1Y0SUQ0Z0xURXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCdGIzWnBibWNnY205dmRDQjBieUJ5YjI5MFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdZMjl1YzI5c1pTNXNiMmNvWUUxdmRtbHVaeUJTVDA5VUlIUnZJRkpQVDFSZ0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJqYjI1emIyeGxMbXh2WnloZ1VtOXZkRWxrY3pwZ0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJqYjI1emIyeGxMbXh2WnloMGFHbHpMbkp2YjNSSlpITXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUdOdmJuTnZiR1V1Ykc5bktHQlVZWEpuWlhSSmJtUmxlRDBrZTNSaGNtZGxkRkp2YjNSSmJtUmxlSDBzSUZOdmRYSmpaVWx1WkdWNFBTUjdjMjkxY21ObFVtOXZkRWx1WkdWNGZXQXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUdOdmJuTnZiR1V1Ykc5bktHQlVZWEpuWlhSSlpEMGtlM1JoY21kbGRFbGtmU3dnVTI5MWNtTmxTV1E5Skh0emIzVnlZMlZKWkgxZ0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5KdmIzUkVaV3hsZEdVb2MyOTFjbU5sVW05dmRFbHVaR1Y0S1RzZ0x5OGdhVzVrWlhobGN5QmphR0Z1WjJVZ2JtOTNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSaGNtZGxkRkp2YjNSSmJtUmxlQ0ErSUhOdmRYSmpaVkp2YjNSSmJtUmxlQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBZWEpuWlhSU2IyOTBTVzVrWlhndExUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITjNhWFJqYUNBb1pHbHlaV04wYVc5dUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdSR2x5WldOMGFXOXVMa0pGUms5U1JUcGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YVc1elpYSjBTV1JKYm5SdlVtOXZkQ2h6YjNWeVkyVkpaQ3dnZEdGeVoyVjBVbTl2ZEVsdVpHVjRLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElFUnBjbVZqZEdsdmJpNUJSbFJGVWpwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVhVzV6WlhKMFNXUkpiblJ2VW05dmRDaHpiM1Z5WTJWSlpDd2dkR0Z5WjJWMFVtOXZkRWx1WkdWNElDc2dNU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQkVhWEpsWTNScGIyNHVTVTVUU1VSRlgwRlVYMU5VUVZKVU9seHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV1YjJSbFNXNXpaWEowUVhSVGRHRnlkQ2gwWVhKblpYUkpaQ3dnYzI5MWNtTmxTV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdSR2x5WldOMGFXOXVMa2xPVTBsRVJWOUJWRjlGVGtRNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbTV2WkdWSmJuTmxjblJCZEVWdVpDaDBZWEpuWlhSSlpDd2djMjkxY21ObFNXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdiVzkyYVc1bklISnZiM1FnS0hOdmRYSmpaU2tnUVVKUFZrVWdibTlrWlNBb2RHRnlaMlYwS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklIZHBiR3dnY21WdGIzWmxJRzl1WlNCbGJuUnllU0JtY205dElISnZiM1J6WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXliMjkwUkdWc1pYUmxLSE52ZFhKalpWSnZiM1JKYm1SbGVDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabTl5SUNoMllYSWdibTlrWlV0bGVTQnBiaUIwYUdsekxtNXZaR1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbTV2WkdWekxtaGhjMDkzYmxCeWIzQmxjblI1S0c1dlpHVkxaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllYSWdhVzVrWlhnZ1BTQjBhR2x6TG1acGJtUk9iMlJsU1dRb2JtOWtaVXRsZVN3Z2RHRnlaMlYwU1dRcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR2x1WkdWNElENGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpkMmwwWTJnZ0tHUnBjbVZqZEdsdmJpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUVScGNtVmpkR2x2Ymk1Q1JVWlBVa1U2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWx1YzJWeWRFbGtTVzUwYjA1dlpHVW9ibTlrWlV0bGVTd2djMjkxY21ObFNXUXNJR2x1WkdWNEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCallYTmxJRVJwY21WamRHbHZiaTVCUmxSRlVqcGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWFXNXpaWEowU1dSSmJuUnZUbTlrWlNodWIyUmxTMlY1TENCemIzVnlZMlZKWkN3Z2FXNWtaWGdnS3lBeEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCallYTmxJRVJwY21WamRHbHZiaTVKVGxOSlJFVmZRVlJmVTFSQlVsUTZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtNXZaR1ZKYm5ObGNuUkJkRk4wWVhKMEtIUmhjbWRsZEVsa0xDQnpiM1Z5WTJWSlpDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0JFYVhKbFkzUnBiMjR1U1U1VFNVUkZYMEZVWDBWT1JEcGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWJtOWtaVWx1YzJWeWRFRjBSVzVrS0hSaGNtZGxkRWxrTENCemIzVnlZMlZKWkNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdGeVoyVjBVbTl2ZEVsdVpHVjRJRDRnTFRFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJ0YjNacGJtY2dibTlrWlNBb2MyOTFjbU5sS1NCQlFrOVdSU0J5YjI5MElDaDBZWEpuWlhRcFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdaR1ZzWlhSbElITnZkWEpqWlNCcFpDQm1jbTl0SUdWaFkyZ2dibTlrWlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUc1dlpHVkxaWGtnYVc0Z2RHaHBjeTV1YjJSbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1dWIyUmxjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHViMlJsUzJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUdsdVpHVjRJRDBnZEdocGN5NW1hVzVrVG05a1pVbGtLRzV2WkdWTFpYa3NJSE52ZFhKalpVbGtLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNocGJtUmxlQ0ErSUMweEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z2RHaHBjeTV1YjJSbFNXNXpaWEowU1dRb2JtOWtaVXRsZVN3Z2MyOTFjbU5sU1dRc0lHbHVaR1Y0S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG01dlpHVkVaV3hsZEdWQmRFbHVaR1Y0S0c1dlpHVkxaWGtzSUdsdVpHVjRLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpkMmwwWTJnZ0tHUnBjbVZqZEdsdmJpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCallYTmxJRVJwY21WamRHbHZiaTVDUlVaUFVrVTZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1sdWMyVnlkRWxrU1c1MGIxSnZiM1FvYzI5MWNtTmxTV1FzSUhSaGNtZGxkRkp2YjNSSmJtUmxlQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQkVhWEpsWTNScGIyNHVRVVpVUlZJNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWx1YzJWeWRFbGtTVzUwYjFKdmIzUW9jMjkxY21ObFNXUXNJSFJoY21kbGRGSnZiM1JKYm1SbGVDQXJJREVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdSR2x5WldOMGFXOXVMa2xPVTBsRVJWOUJWRjlUVkVGU1ZEcGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Ym05a1pVbHVjMlZ5ZEVGMFUzUmhjblFvZEdGeVoyVjBTV1FzSUhOdmRYSmpaVWxrS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCallYTmxJRVJwY21WamRHbHZiaTVKVGxOSlJFVmZRVlJmUlU1RU9seHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV1YjJSbFNXNXpaWEowUVhSRmJtUW9kR0Z5WjJWMFNXUXNJSE52ZFhKalpVbGtLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRzF2ZG1sdVp5QnViMlJsSUNoemIzVnlZMlVwSUVGQ1QxWkZJRzV2WkdVZ0tIUmhjbWRsZENsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QmtaV3hsZEdVZ2MyOTFjbU5sSUdsa0lHWnliMjBnWldGamFDQnViMlJsWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm05eUlDaDJZWElnYm05a1pVdGxlU0JwYmlCMGFHbHpMbTV2WkdWektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG01dlpHVnpMbWhoYzA5M2JsQnliM0JsY25SNUtHNXZaR1ZMWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnYVc1a1pYZ2dQU0IwYUdsekxtWnBibVJPYjJSbFNXUW9ibTlrWlV0bGVTd2djMjkxY21ObFNXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dsdVpHVjRJRDRnTFRFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtNXZaR1ZFWld4bGRHVkJkRWx1WkdWNEtHNXZaR1ZMWlhrc0lHbHVaR1Y0S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYjNJZ0tIWmhjaUJ1YjJSbFMyVjVJR2x1SUhSb2FYTXVibTlrWlhNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11Ym05a1pYTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2JtOWtaVXRsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJwYm1SbGVDQTlJSFJvYVhNdVptbHVaRTV2WkdWSlpDaHViMlJsUzJWNUxDQjBZWEpuWlhSSlpDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYVc1a1pYZ2dQaUF0TVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE4zYVhSamFDQW9aR2x5WldOMGFXOXVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ1JHbHlaV04wYVc5dUxrSkZSazlTUlRwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YVc1elpYSjBTV1JKYm5SdlRtOWtaU2h1YjJSbFMyVjVMQ0J6YjNWeVkyVkpaQ3dnYVc1a1pYZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnUkdseVpXTjBhVzl1TGtGR1ZFVlNPbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXBibk5sY25SSlpFbHVkRzlPYjJSbEtHNXZaR1ZMWlhrc0lITnZkWEpqWlVsa0xDQnBibVJsZUNBcklERXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnUkdseVpXTjBhVzl1TGtsT1UwbEVSVjlCVkY5VFZFRlNWRHBjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVibTlrWlVsdWMyVnlkRUYwVTNSaGNuUW9kR0Z5WjJWMFNXUXNJSE52ZFhKalpVbGtLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUVScGNtVmpkR2x2Ymk1SlRsTkpSRVZmUVZSZlJVNUVPbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXViMlJsU1c1elpYSjBRWFJGYm1Rb2RHRnlaMlYwU1dRc0lITnZkWEpqWlVsa0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNGdJQ0FnVFhWc2RHbFNiMjkwVkhKbFpTNXdjbTkwYjNSNWNHVXVjM2RoY0VGeWNtRjVSV3hsYldWdWRITWdQU0JtZFc1amRHbHZiaUFvWVhKeUxDQnBibVJsZUVFc0lHbHVaR1Y0UWlrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnZEdWdGNDQTlJR0Z5Y2x0cGJtUmxlRUZkTzF4dUlDQWdJQ0FnSUNCaGNuSmJhVzVrWlhoQlhTQTlJR0Z5Y2x0cGJtUmxlRUpkTzF4dUlDQWdJQ0FnSUNCaGNuSmJhVzVrWlhoQ1hTQTlJSFJsYlhBN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCaGNuSTdYRzRnSUNBZ2ZUdGNiaUFnSUNCTmRXeDBhVkp2YjNSVWNtVmxMbkJ5YjNSdmRIbHdaUzV5YjI5MFJHVnNaWFJsU1dRZ1BTQm1kVzVqZEdsdmJpQW9hV1FwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJR2x1WkdWNElEMGdkR2hwY3k1bWFXNWtVbTl2ZEVsa0tHbGtLVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHbHVaR1Y0SUQ0Z0xURXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Y205dmRFUmxiR1YwWlNocGJtUmxlQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dUlDQWdJRTExYkhScFVtOXZkRlJ5WldVdWNISnZkRzkwZVhCbExtNXZaR1ZCYm1SVGRXSk9iMlJsYzBSbGJHVjBaU0E5SUdaMWJtTjBhVzl1SUNodWIyUmxTMlY1S1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUIwYjBSbGJHVjBaVXhoZEdWeUlEMGdXMTA3WEc0Z0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTV1YjJSbGMxdHViMlJsUzJWNVhTNXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUdsa0lEMGdkR2hwY3k1dWIyUmxjMXR1YjJSbFMyVjVYVnRwWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWJtOWtaVUZ1WkZOMVlrNXZaR1Z6UkdWc1pYUmxLR2xrS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJ2UkdWc1pYUmxUR0YwWlhJdWNIVnphQ2h1YjJSbFMyVjVLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCMGFHbHpMbTV2WkdWRVpXeGxkR1VvYm05a1pVdGxlU2s3WEc0Z0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2RHOUVaV3hsZEdWTVlYUmxjaTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXViMlJsUkdWc1pYUmxLSFJ2UkdWc1pYUmxUR0YwWlhKYmFWMHBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYmlBZ0lDQk5kV3gwYVZKdmIzUlVjbVZsTG5CeWIzUnZkSGx3WlM1dWIyUmxVbVZtY21WdVkyVnpSR1ZzWlhSbElEMGdablZ1WTNScGIyNGdLR2xrS1NCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlHNXZaR1ZMWlhrZ2FXNGdkR2hwY3k1dWIyUmxjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVibTlrWlhNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYm05a1pVdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElIUm9hWE11Ym05a1pYTmJibTlrWlV0bGVWMHViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhSaGNtZGxkRWxrSUQwZ2RHaHBjeTV1YjJSbGMxdHViMlJsUzJWNVhWdHBYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJoY21kbGRFbGtJRDA5UFNCcFpDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dWIyUmxSR1ZzWlhSbFFYUkpibVJsZUNodWIyUmxTMlY1TENCcEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc0Z0lDQWdUWFZzZEdsU2IyOTBWSEpsWlM1d2NtOTBiM1I1Y0dVdWJtOWtaVVJsYkdWMFpTQTlJR1oxYm1OMGFXOXVJQ2h1YjJSbFMyVjVLU0I3WEc0Z0lDQWdJQ0FnSUdSbGJHVjBaU0IwYUdsekxtNXZaR1Z6VzI1dlpHVkxaWGxkTzF4dUlDQWdJSDA3WEc0Z0lDQWdUWFZzZEdsU2IyOTBWSEpsWlM1d2NtOTBiM1I1Y0dVdVptbHVaRkp2YjNSSlpDQTlJR1oxYm1OMGFXOXVJQ2hwWkNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV5YjI5MFNXUnpMbWx1WkdWNFQyWW9hV1FwTzF4dUlDQWdJSDA3WEc0Z0lDQWdUWFZzZEdsU2IyOTBWSEpsWlM1d2NtOTBiM1I1Y0dVdVptbHVaRTV2WkdWSlpDQTlJR1oxYm1OMGFXOXVJQ2h1YjJSbFMyVjVMQ0JwWkNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV1YjJSbGMxdHViMlJsUzJWNVhTNXBibVJsZUU5bUtHbGtLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lFMTFiSFJwVW05dmRGUnlaV1V1Y0hKdmRHOTBlWEJsTG1acGJtUk9iMlJsSUQwZ1puVnVZM1JwYjI0Z0tHNXZaR1ZMWlhrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11Ym05a1pYTmJibTlrWlV0bGVWMDdYRzRnSUNBZ2ZUdGNiaUFnSUNCTmRXeDBhVkp2YjNSVWNtVmxMbkJ5YjNSdmRIbHdaUzV1YjJSbFNXNXpaWEowUVhSVGRHRnlkQ0E5SUdaMWJtTjBhVzl1SUNodWIyUmxTMlY1TENCcFpDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtNXZaR1Z6VzI1dlpHVkxaWGxkTG5WdWMyaHBablFvYVdRcE8xeHVJQ0FnSUgwN1hHNGdJQ0FnVFhWc2RHbFNiMjkwVkhKbFpTNXdjbTkwYjNSNWNHVXVibTlrWlVsdWMyVnlkRUYwUlc1a0lEMGdablZ1WTNScGIyNGdLRzV2WkdWTFpYa3NJR2xrS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ym05a1pYTmJibTlrWlV0bGVWMHVjSFZ6YUNocFpDazdYRzRnSUNBZ2ZUdGNiaUFnSUNCTmRXeDBhVkp2YjNSVWNtVmxMbkJ5YjNSdmRIbHdaUzV5YjI5MFJHVnNaWFJsSUQwZ1puVnVZM1JwYjI0Z0tHbHVaR1Y0S1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y205dmRFbGtjeTV6Y0d4cFkyVW9hVzVrWlhnc0lERXBPMXh1SUNBZ0lIMDdYRzRnSUNBZ1RYVnNkR2xTYjI5MFZISmxaUzV3Y205MGIzUjVjR1V1Ym05a1pVUmxiR1YwWlVGMFNXNWtaWGdnUFNCbWRXNWpkR2x2YmlBb2JtOWtaVXRsZVN3Z2FXNWtaWGdwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV1YjJSbGMxdHViMlJsUzJWNVhTNXpjR3hwWTJVb2FXNWtaWGdzSURFcE8xeHVJQ0FnSUgwN1hHNGdJQ0FnVFhWc2RHbFNiMjkwVkhKbFpTNXdjbTkwYjNSNWNHVXVjbTl2ZEVsdWMyVnlkRUYwVTNSaGNuUWdQU0JtZFc1amRHbHZiaUFvYVdRcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1eWIyOTBTV1J6TG5WdWMyaHBablFvYVdRcE8xeHVJQ0FnSUgwN1hHNGdJQ0FnVFhWc2RHbFNiMjkwVkhKbFpTNXdjbTkwYjNSNWNHVXVjbTl2ZEVsdWMyVnlkRUYwUlc1a0lEMGdablZ1WTNScGIyNGdLR2xrS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y205dmRFbGtjeTV3ZFhOb0tHbGtLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lISmxkSFZ5YmlCTmRXeDBhVkp2YjNSVWNtVmxPMXh1ZlNncEtUdGNibVY0Y0c5eWRITXVaR1ZtWVhWc2RDQTlJRTExYkhScFVtOXZkRlJ5WldVN1hHNHZMeU1nYzI5MWNtTmxUV0Z3Y0dsdVoxVlNURDFOZFd4MGFWSnZiM1JVY21WbExtcHpMbTFoY0NJc0lsd2lkWE5sSUhOMGNtbGpkRndpTzF4dVQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRndpWDE5bGMwMXZaSFZzWlZ3aUxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHVkbUZ5SUhWMGFXd2dQU0J5WlhGMWFYSmxLRndpTGk5MWRHbHNYQ0lwTzF4dWRtRnlJRWhsWVhCZk1TQTlJSEpsY1hWcGNtVW9YQ0l1TDBobFlYQmNJaWs3WEc1MllYSWdVSEpwYjNKcGRIbFJkV1YxWlNBOUlDOHFLaUJBWTJ4aGMzTWdLaThnS0daMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkRjbVZoZEdWeklHRnVJR1Z0Y0hSNUlIQnlhVzl5YVhSNUlIRjFaWFZsTGx4dUlDQWdJQ0FxSUVCamJHRnpjeUE4Y0Q1SmJpQmhJSEJ5YVc5eWFYUjVJSEYxWlhWbElHVmhZMmdnWld4bGJXVnVkQ0JwY3lCaGMzTnZZMmxoZEdWa0lIZHBkR2dnWVNCY0luQnlhVzl5YVhSNVhDSXNYRzRnSUNBZ0lDb2daV3hsYldWdWRITWdZWEpsSUdSbGNYVmxkV1ZrSUdsdUlHaHBaMmhsYzNRdGNISnBiM0pwZEhrdFptbHljM1FnYjNKa1pYSWdLSFJvWlNCbGJHVnRaVzUwY3lCM2FYUm9JSFJvWlZ4dUlDQWdJQ0FxSUdocFoyaGxjM1FnY0hKcGIzSnBkSGtnWVhKbElHUmxjWFZsZFdWa0lHWnBjbk4wS1M0Z1VISnBiM0pwZEhrZ1VYVmxkV1Z6SUdGeVpTQnBiWEJzWlcxbGJuUmxaQ0JoY3lCb1pXRndjeTVjYmlBZ0lDQWdLaUJKWmlCMGFHVWdhVzV6WlhKMFpXUWdaV3hsYldWdWRITWdZWEpsSUdOMWMzUnZiU0J2WW1wbFkzUnpJR0VnWTI5dGNHRnlaU0JtZFc1amRHbHZiaUJ0ZFhOMElHSmxJSEJ5YjNacFpHVmtMRnh1SUNBZ0lDQXFJRzkwYUdWeWQybHpaU0IwYUdVZ1BEMHNJRDA5UFNCaGJtUWdQajBnYjNCbGNtRjBiM0p6SUdGeVpTQjFjMlZrSUhSdklHTnZiWEJoY21VZ2IySnFaV04wSUhCeWFXOXlhWFI1TGp3dmNENWNiaUFnSUNBZ0tpQThjSEpsUGx4dUlDQWdJQ0FxSUdaMWJtTjBhVzl1SUdOdmJYQmhjbVVvWVN3Z1lpa2dlMXh1SUNBZ0lDQXFJQ0JwWmlBb1lTQnBjeUJzWlhOeklIUm9ZVzRnWWlCaWVTQnpiMjFsSUc5eVpHVnlhVzVuSUdOeWFYUmxjbWx2YmlrZ2UxeHVJQ0FnSUNBcUlDQWdJQ0J5WlhSMWNtNGdMVEU3WEc0Z0lDQWdJQ29nSUgwZ2FXWWdLR0VnYVhNZ1ozSmxZWFJsY2lCMGFHRnVJR0lnWW5rZ2RHaGxJRzl5WkdWeWFXNW5JR055YVhSbGNtbHZiaWtnZTF4dUlDQWdJQ0FxSUNBZ0lDQnlaWFIxY200Z01UdGNiaUFnSUNBZ0tpQWdmVnh1SUNBZ0lDQXFJQ0F2THlCaElHMTFjM1FnWW1VZ1pYRjFZV3dnZEc4Z1lseHVJQ0FnSUNBcUlDQnlaWFIxY200Z01EdGNiaUFnSUNBZ0tpQjlYRzRnSUNBZ0lDb2dQQzl3Y21VK1hHNGdJQ0FnSUNvZ1FHTnZibk4wY25WamRHOXlYRzRnSUNBZ0lDb2dRSEJoY21GdElIdG1kVzVqZEdsdmJpaFBZbXBsWTNRc1QySnFaV04wS1RwdWRXMWlaWEk5ZlNCamIyMXdZWEpsUm5WdVkzUnBiMjRnYjNCMGFXOXVZV3hjYmlBZ0lDQWdLaUJtZFc1amRHbHZiaUIxYzJWa0lIUnZJR052YlhCaGNtVWdkSGR2SUdWc1pXMWxiblFnY0hKcGIzSnBkR2xsY3k0Z1RYVnpkQ0J5WlhSMWNtNGdZU0J1WldkaGRHbDJaU0JwYm5SbFoyVnlMRnh1SUNBZ0lDQXFJSHBsY204c0lHOXlJR0VnY0c5emFYUnBkbVVnYVc1MFpXZGxjaUJoY3lCMGFHVWdabWx5YzNRZ1lYSm5kVzFsYm5RZ2FYTWdiR1Z6Y3lCMGFHRnVMQ0JsY1hWaGJDQjBieXhjYmlBZ0lDQWdLaUJ2Y2lCbmNtVmhkR1Z5SUhSb1lXNGdkR2hsSUhObFkyOXVaQzVjYmlBZ0lDQWdLaTljYmlBZ0lDQm1kVzVqZEdsdmJpQlFjbWx2Y21sMGVWRjFaWFZsS0dOdmJYQmhjbVZHZFc1amRHbHZiaWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhsWVhBZ1BTQnVaWGNnU0dWaGNGOHhMbVJsWm1GMWJIUW9kWFJwYkM1eVpYWmxjbk5sUTI5dGNHRnlaVVoxYm1OMGFXOXVLR052YlhCaGNtVkdkVzVqZEdsdmJpa3BPMXh1SUNBZ0lIMWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkpibk5sY25SeklIUm9aU0J6Y0dWamFXWnBaV1FnWld4bGJXVnVkQ0JwYm5SdklIUm9hWE1nY0hKcGIzSnBkSGtnY1hWbGRXVXVYRzRnSUNBZ0lDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlHVnNaVzFsYm5RZ2RHaGxJR1ZzWlcxbGJuUWdkRzhnYVc1elpYSjBMbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMkp2YjJ4bFlXNTlJSFJ5ZFdVZ2FXWWdkR2hsSUdWc1pXMWxiblFnZDJGeklHbHVjMlZ5ZEdWa0xDQnZjaUJtWVd4elpTQnBaaUJwZENCcGN5QjFibVJsWm1sdVpXUXVYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1VISnBiM0pwZEhsUmRXVjFaUzV3Y205MGIzUjVjR1V1Wlc1eGRXVjFaU0E5SUdaMWJtTjBhVzl1SUNobGJHVnRaVzUwS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbWhsWVhBdVlXUmtLR1ZzWlcxbGJuUXBPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dTVzV6WlhKMGN5QjBhR1VnYzNCbFkybG1hV1ZrSUdWc1pXMWxiblFnYVc1MGJ5QjBhR2x6SUhCeWFXOXlhWFI1SUhGMVpYVmxMbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQmxiR1Z0Wlc1MElIUm9aU0JsYkdWdFpXNTBJSFJ2SUdsdWMyVnlkQzVjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRpYjI5c1pXRnVmU0IwY25WbElHbG1JSFJvWlNCbGJHVnRaVzUwSUhkaGN5QnBibk5sY25SbFpDd2diM0lnWm1Gc2MyVWdhV1lnYVhRZ2FYTWdkVzVrWldacGJtVmtMbHh1SUNBZ0lDQXFMMXh1SUNBZ0lGQnlhVzl5YVhSNVVYVmxkV1V1Y0hKdmRHOTBlWEJsTG1Ga1pDQTlJR1oxYm1OMGFXOXVJQ2hsYkdWdFpXNTBLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtaGxZWEF1WVdSa0tHVnNaVzFsYm5RcE8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VtVjBjbWxsZG1WeklHRnVaQ0J5WlcxdmRtVnpJSFJvWlNCb2FXZG9aWE4wSUhCeWFXOXlhWFI1SUdWc1pXMWxiblFnYjJZZ2RHaHBjeUJ4ZFdWMVpTNWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIc3FmU0IwYUdVZ2RHaGxJR2hwWjJobGMzUWdjSEpwYjNKcGRIa2daV3hsYldWdWRDQnZaaUIwYUdseklIRjFaWFZsTEZ4dUlDQWdJQ0FxSUNCdmNpQjFibVJsWm1sdVpXUWdhV1lnZEdocGN5QnhkV1YxWlNCcGN5QmxiWEIwZVM1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0JRY21sdmNtbDBlVkYxWlhWbExuQnliM1J2ZEhsd1pTNWtaWEYxWlhWbElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1b1pXRndMbk5wZW1Vb0tTQWhQVDBnTUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHVnNJRDBnZEdocGN5NW9aV0Z3TG5CbFpXc29LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YUdWaGNDNXlaVzF2ZG1WU2IyOTBLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1pXdzdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkpsZEhKcFpYWmxjeXdnWW5WMElHUnZaWE1nYm05MElISmxiVzkyWlN3Z2RHaGxJR2hwWjJobGMzUWdjSEpwYjNKcGRIa2daV3hsYldWdWRDQnZaaUIwYUdseklIRjFaWFZsTGx4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZXlwOUlIUm9aU0JvYVdkb1pYTjBJSEJ5YVc5eWFYUjVJR1ZzWlcxbGJuUWdiMllnZEdocGN5QnhkV1YxWlN3Z2IzSWdkVzVrWldacGJtVmtJR2xtSUhSb2FYTWdjWFZsZFdVZ2FYTWdaVzF3ZEhrdVhHNGdJQ0FnSUNvdlhHNGdJQ0FnVUhKcGIzSnBkSGxSZFdWMVpTNXdjbTkwYjNSNWNHVXVjR1ZsYXlBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWFHVmhjQzV3WldWcktDazdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaWFIxY201eklIUnlkV1VnYVdZZ2RHaHBjeUJ3Y21sdmNtbDBlU0J4ZFdWMVpTQmpiMjUwWVdsdWN5QjBhR1VnYzNCbFkybG1hV1ZrSUdWc1pXMWxiblF1WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJR1ZzWlcxbGJuUWdaV3hsYldWdWRDQjBieUJ6WldGeVkyZ2dabTl5TGx4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTJKdmIyeGxZVzU5SUhSeWRXVWdhV1lnZEdocGN5QndjbWx2Y21sMGVTQnhkV1YxWlNCamIyNTBZV2x1Y3lCMGFHVWdjM0JsWTJsbWFXVmtJR1ZzWlcxbGJuUXNYRzRnSUNBZ0lDb2dabUZzYzJVZ2IzUm9aWEozYVhObExseHVJQ0FnSUNBcUwxeHVJQ0FnSUZCeWFXOXlhWFI1VVhWbGRXVXVjSEp2ZEc5MGVYQmxMbU52Ym5SaGFXNXpJRDBnWm5WdVkzUnBiMjRnS0dWc1pXMWxiblFwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVhR1ZoY0M1amIyNTBZV2x1Y3lobGJHVnRaVzUwS1R0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVOb1pXTnJjeUJwWmlCMGFHbHpJSEJ5YVc5eWFYUjVJSEYxWlhWbElHbHpJR1Z0Y0hSNUxseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UySnZiMnhsWVc1OUlIUnlkV1VnYVdZZ1lXNWtJRzl1YkhrZ2FXWWdkR2hwY3lCd2NtbHZjbWwwZVNCeGRXVjFaU0JqYjI1MFlXbHVjeUJ1YnlCcGRHVnRjenNnWm1Gc2MyVmNiaUFnSUNBZ0tpQnZkR2hsY25kcGMyVXVYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1VISnBiM0pwZEhsUmRXVjFaUzV3Y205MGIzUjVjR1V1YVhORmJYQjBlU0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11YUdWaGNDNXBjMFZ0Y0hSNUtDazdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaWFIxY201eklIUm9aU0J1ZFcxaVpYSWdiMllnWld4bGJXVnVkSE1nYVc0Z2RHaHBjeUJ3Y21sdmNtbDBlU0J4ZFdWMVpTNWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOUlIUm9aU0J1ZFcxaVpYSWdiMllnWld4bGJXVnVkSE1nYVc0Z2RHaHBjeUJ3Y21sdmNtbDBlU0J4ZFdWMVpTNWNiaUFnSUNBZ0tpOWNiaUFnSUNCUWNtbHZjbWwwZVZGMVpYVmxMbkJ5YjNSdmRIbHdaUzV6YVhwbElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NW9aV0Z3TG5OcGVtVW9LVHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkpsYlc5MlpYTWdZV3hzSUc5bUlIUm9aU0JsYkdWdFpXNTBjeUJtY205dElIUm9hWE1nY0hKcGIzSnBkSGtnY1hWbGRXVXVYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1VISnBiM0pwZEhsUmRXVjFaUzV3Y205MGIzUjVjR1V1WTJ4bFlYSWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YUdWaGNDNWpiR1ZoY2lncE8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1JYaGxZM1YwWlhNZ2RHaGxJSEJ5YjNacFpHVmtJR1oxYm1OMGFXOXVJRzl1WTJVZ1ptOXlJR1ZoWTJnZ1pXeGxiV1Z1ZENCd2NtVnpaVzUwSUdsdUlIUm9hWE1nY1hWbGRXVWdhVzVjYmlBZ0lDQWdLaUJ1YnlCd1lYSjBhV04xYkdGeUlHOXlaR1Z5TGx4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3Wm5WdVkzUnBiMjRvVDJKcVpXTjBLVG9xZlNCallXeHNZbUZqYXlCbWRXNWpkR2x2YmlCMGJ5QmxlR1ZqZFhSbExDQnBkQ0JwYzF4dUlDQWdJQ0FxSUdsdWRtOXJaV1FnZDJsMGFDQnZibVVnWVhKbmRXMWxiblE2SUhSb1pTQmxiR1Z0Wlc1MElIWmhiSFZsTENCMGJ5QmljbVZoYXlCMGFHVWdhWFJsY21GMGFXOXVJSGx2ZFNCallXNWNiaUFnSUNBZ0tpQnZjSFJwYjI1aGJHeDVJSEpsZEhWeWJpQm1ZV3h6WlM1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0JRY21sdmNtbDBlVkYxWlhWbExuQnliM1J2ZEhsd1pTNW1iM0pGWVdOb0lEMGdablZ1WTNScGIyNGdLR05oYkd4aVlXTnJLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhR1ZoY0M1bWIzSkZZV05vS0dOaGJHeGlZV05yS1R0Y2JpQWdJQ0I5TzF4dUlDQWdJSEpsZEhWeWJpQlFjbWx2Y21sMGVWRjFaWFZsTzF4dWZTZ3BLVHNnTHk4Z1pXNWtJRzltSUhCeWFXOXlhWFI1SUhGMVpYVmxYRzVsZUhCdmNuUnpMbVJsWm1GMWJIUWdQU0JRY21sdmNtbDBlVkYxWlhWbE8xeHVMeThqSUhOdmRYSmpaVTFoY0hCcGJtZFZVa3c5VUhKcGIzSnBkSGxSZFdWMVpTNXFjeTV0WVhBaUxDSmNJblZ6WlNCemRISnBZM1JjSWp0Y2JrOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0JjSWw5ZlpYTk5iMlIxYkdWY0lpd2dleUIyWVd4MVpUb2dkSEoxWlNCOUtUdGNiblpoY2lCTWFXNXJaV1JNYVhOMFh6RWdQU0J5WlhGMWFYSmxLRndpTGk5TWFXNXJaV1JNYVhOMFhDSXBPMXh1ZG1GeUlGRjFaWFZsSUQwZ0x5b3FJRUJqYkdGemN5QXFMeUFvWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFTnlaV0YwWlhNZ1lXNGdaVzF3ZEhrZ2NYVmxkV1V1WEc0Z0lDQWdJQ29nUUdOc1lYTnpJRUVnY1hWbGRXVWdhWE1nWVNCR2FYSnpkQzFKYmkxR2FYSnpkQzFQZFhRZ0tFWkpSazhwSUdSaGRHRWdjM1J5ZFdOMGRYSmxMQ0IwYUdVZ1ptbHljM1JjYmlBZ0lDQWdLaUJsYkdWdFpXNTBJR0ZrWkdWa0lIUnZJSFJvWlNCeGRXVjFaU0IzYVd4c0lHSmxJSFJvWlNCbWFYSnpkQ0J2Ym1VZ2RHOGdZbVVnY21WdGIzWmxaQzRnVkdocGMxeHVJQ0FnSUNBcUlHbHRjR3hsYldWdWRHRjBhVzl1SUhWelpYTWdZU0JzYVc1clpXUWdiR2x6ZENCaGN5QmhJR052Ym5SaGFXNWxjaTVjYmlBZ0lDQWdLaUJBWTI5dWMzUnlkV04wYjNKY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JtZFc1amRHbHZiaUJSZFdWMVpTZ3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXNhWE4wSUQwZ2JtVjNJRXhwYm10bFpFeHBjM1JmTVM1a1pXWmhkV3gwS0NrN1hHNGdJQ0FnZlZ4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVsdWMyVnlkSE1nZEdobElITndaV05wWm1sbFpDQmxiR1Z0Wlc1MElHbHVkRzhnZEdobElHVnVaQ0J2WmlCMGFHbHpJSEYxWlhWbExseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCbGJHVnRJSFJvWlNCbGJHVnRaVzUwSUhSdklHbHVjMlZ5ZEM1Y2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0aWIyOXNaV0Z1ZlNCMGNuVmxJR2xtSUhSb1pTQmxiR1Z0Wlc1MElIZGhjeUJwYm5ObGNuUmxaQ3dnYjNJZ1ptRnNjMlVnYVdZZ2FYUWdhWE1nZFc1a1pXWnBibVZrTGx4dUlDQWdJQ0FxTDF4dUlDQWdJRkYxWlhWbExuQnliM1J2ZEhsd1pTNWxibkYxWlhWbElEMGdablZ1WTNScGIyNGdLR1ZzWlcwcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11YkdsemRDNWhaR1FvWld4bGJTazdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkpibk5sY25SeklIUm9aU0J6Y0dWamFXWnBaV1FnWld4bGJXVnVkQ0JwYm5SdklIUm9aU0JsYm1RZ2IyWWdkR2hwY3lCeGRXVjFaUzVjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdaV3hsYlNCMGFHVWdaV3hsYldWdWRDQjBieUJwYm5ObGNuUXVYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdZbTl2YkdWaGJuMGdkSEoxWlNCcFppQjBhR1VnWld4bGJXVnVkQ0IzWVhNZ2FXNXpaWEowWldRc0lHOXlJR1poYkhObElHbG1JR2wwSUdseklIVnVaR1ZtYVc1bFpDNWNiaUFnSUNBZ0tpOWNiaUFnSUNCUmRXVjFaUzV3Y205MGIzUjVjR1V1WVdSa0lEMGdablZ1WTNScGIyNGdLR1ZzWlcwcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11YkdsemRDNWhaR1FvWld4bGJTazdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaWFJ5YVdWMlpYTWdZVzVrSUhKbGJXOTJaWE1nZEdobElHaGxZV1FnYjJZZ2RHaHBjeUJ4ZFdWMVpTNWNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIc3FmU0IwYUdVZ2FHVmhaQ0J2WmlCMGFHbHpJSEYxWlhWbExDQnZjaUIxYm1SbFptbHVaV1FnYVdZZ2RHaHBjeUJ4ZFdWMVpTQnBjeUJsYlhCMGVTNWNiaUFnSUNBZ0tpOWNiaUFnSUNCUmRXVjFaUzV3Y205MGIzUjVjR1V1WkdWeGRXVjFaU0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXViR2x6ZEM1emFYcGxLQ2tnSVQwOUlEQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJsYkNBOUlIUm9hWE11YkdsemRDNW1hWEp6ZENncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXNhWE4wTG5KbGJXOTJaVVZzWlcxbGJuUkJkRWx1WkdWNEtEQXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdWc08xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjFibVJsWm1sdVpXUTdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaWFJ5YVdWMlpYTXNJR0oxZENCa2IyVnpJRzV2ZENCeVpXMXZkbVVzSUhSb1pTQm9aV0ZrSUc5bUlIUm9hWE1nY1hWbGRXVXVYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdLbjBnZEdobElHaGxZV1FnYjJZZ2RHaHBjeUJ4ZFdWMVpTd2diM0lnZFc1a1pXWnBibVZrSUdsbUlIUm9hWE1nY1hWbGRXVWdhWE1nWlcxd2RIa3VYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1VYVmxkV1V1Y0hKdmRHOTBlWEJsTG5CbFpXc2dQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxteHBjM1F1YzJsNlpTZ3BJQ0U5UFNBd0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXNhWE4wTG1acGNuTjBLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZKbGRIVnlibk1nZEdobElHNTFiV0psY2lCdlppQmxiR1Z0Wlc1MGN5QnBiaUIwYUdseklIRjFaWFZsTGx4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTI1MWJXSmxjbjBnZEdobElHNTFiV0psY2lCdlppQmxiR1Z0Wlc1MGN5QnBiaUIwYUdseklIRjFaWFZsTGx4dUlDQWdJQ0FxTDF4dUlDQWdJRkYxWlhWbExuQnliM1J2ZEhsd1pTNXphWHBsSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1c2FYTjBMbk5wZW1Vb0tUdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGSmxkSFZ5Ym5NZ2RISjFaU0JwWmlCMGFHbHpJSEYxWlhWbElHTnZiblJoYVc1eklIUm9aU0J6Y0dWamFXWnBaV1FnWld4bGJXVnVkQzVjYmlBZ0lDQWdLaUE4Y0Q1SlppQjBhR1VnWld4bGJXVnVkSE1nYVc1emFXUmxJSFJvYVhNZ2MzUmhZMnNnWVhKbFhHNGdJQ0FnSUNvZ2JtOTBJR052YlhCaGNtRmliR1VnZDJsMGFDQjBhR1VnUFQwOUlHOXdaWEpoZEc5eUxDQmhJR04xYzNSdmJTQmxjWFZoYkhNZ1puVnVZM1JwYjI0Z2MyaHZkV3hrSUdKbFhHNGdJQ0FnSUNvZ2NISnZkbWxrWldRZ2RHOGdjR1Z5Wm05eWJTQnpaV0Z5WTJobGN5d2dkR2hsSUdaMWJtTjBhVzl1SUcxMWMzUWdjbVZqWldsMlpTQjBkMjhnWVhKbmRXMWxiblJ6SUdGdVpGeHVJQ0FnSUNBcUlISmxkSFZ5YmlCMGNuVmxJR2xtSUhSb1pYa2dZWEpsSUdWeGRXRnNMQ0JtWVd4elpTQnZkR2hsY25kcGMyVXVJRVY0WVcxd2JHVTZQQzl3UGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUEhCeVpUNWNiaUFnSUNBZ0tpQmpiMjV6ZENCd1pYUnpRWEpsUlhGMVlXeENlVTVoYldVZ0tIQmxkREVzSUhCbGRESXBJSHRjYmlBZ0lDQWdLaUFnY21WMGRYSnVJSEJsZERFdWJtRnRaU0E5UFQwZ2NHVjBNaTV1WVcxbE8xeHVJQ0FnSUNBcUlIMWNiaUFnSUNBZ0tpQThMM0J5WlQ1Y2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnWld4bGJTQmxiR1Z0Wlc1MElIUnZJSE5sWVhKamFDQm1iM0l1WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRtZFc1amRHbHZiaWhQWW1wbFkzUXNUMkpxWldOMEtUcGliMjlzWldGdVBYMGdaWEYxWVd4elJuVnVZM1JwYjI0Z2IzQjBhVzl1WVd4Y2JpQWdJQ0FnS2lCbWRXNWpkR2x2YmlCMGJ5QmphR1ZqYXlCcFppQjBkMjhnWld4bGJXVnVkSE1nWVhKbElHVnhkV0ZzTGx4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTJKdmIyeGxZVzU5SUhSeWRXVWdhV1lnZEdocGN5QnhkV1YxWlNCamIyNTBZV2x1Y3lCMGFHVWdjM0JsWTJsbWFXVmtJR1ZzWlcxbGJuUXNYRzRnSUNBZ0lDb2dabUZzYzJVZ2IzUm9aWEozYVhObExseHVJQ0FnSUNBcUwxeHVJQ0FnSUZGMVpYVmxMbkJ5YjNSdmRIbHdaUzVqYjI1MFlXbHVjeUE5SUdaMWJtTjBhVzl1SUNobGJHVnRMQ0JsY1hWaGJITkdkVzVqZEdsdmJpa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1c2FYTjBMbU52Ym5SaGFXNXpLR1ZzWlcwc0lHVnhkV0ZzYzBaMWJtTjBhVzl1S1R0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVOb1pXTnJjeUJwWmlCMGFHbHpJSEYxWlhWbElHbHpJR1Z0Y0hSNUxseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UySnZiMnhsWVc1OUlIUnlkV1VnYVdZZ1lXNWtJRzl1YkhrZ2FXWWdkR2hwY3lCeGRXVjFaU0JqYjI1MFlXbHVjeUJ1YnlCcGRHVnRjenNnWm1Gc2MyVmNiaUFnSUNBZ0tpQnZkR2hsY25kcGMyVXVYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1VYVmxkV1V1Y0hKdmRHOTBlWEJsTG1selJXMXdkSGtnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG14cGMzUXVjMmw2WlNncElEdzlJREE3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJTWlcxdmRtVnpJR0ZzYkNCdlppQjBhR1VnWld4bGJXVnVkSE1nWm5KdmJTQjBhR2x6SUhGMVpYVmxMbHh1SUNBZ0lDQXFMMXh1SUNBZ0lGRjFaWFZsTG5CeWIzUnZkSGx3WlM1amJHVmhjaUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2FYTjBMbU5zWldGeUtDazdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkZlR1ZqZFhSbGN5QjBhR1VnY0hKdmRtbGtaV1FnWm5WdVkzUnBiMjRnYjI1alpTQm1iM0lnWldGamFDQmxiR1Z0Wlc1MElIQnlaWE5sYm5RZ2FXNGdkR2hwY3lCeGRXVjFaU0JwYmx4dUlDQWdJQ0FxSUVaSlJrOGdiM0prWlhJdVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0bWRXNWpkR2x2YmloUFltcGxZM1FwT2lwOUlHTmhiR3hpWVdOcklHWjFibU4wYVc5dUlIUnZJR1Y0WldOMWRHVXNJR2wwSUdselhHNGdJQ0FnSUNvZ2FXNTJiMnRsWkNCM2FYUm9JRzl1WlNCaGNtZDFiV1Z1ZERvZ2RHaGxJR1ZzWlcxbGJuUWdkbUZzZFdVc0lIUnZJR0p5WldGcklIUm9aU0JwZEdWeVlYUnBiMjRnZVc5MUlHTmhibHh1SUNBZ0lDQXFJRzl3ZEdsdmJtRnNiSGtnY21WMGRYSnVJR1poYkhObExseHVJQ0FnSUNBcUwxeHVJQ0FnSUZGMVpYVmxMbkJ5YjNSdmRIbHdaUzVtYjNKRllXTm9JRDBnWm5WdVkzUnBiMjRnS0dOaGJHeGlZV05yS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YkdsemRDNW1iM0pGWVdOb0tHTmhiR3hpWVdOcktUdGNiaUFnSUNCOU8xeHVJQ0FnSUhKbGRIVnliaUJSZFdWMVpUdGNibjBvS1NrN0lDOHZJRVZ1WkNCdlppQnhkV1YxWlZ4dVpYaHdiM0owY3k1a1pXWmhkV3gwSUQwZ1VYVmxkV1U3WEc0dkx5TWdjMjkxY21ObFRXRndjR2x1WjFWU1REMVJkV1YxWlM1cWN5NXRZWEFpTENKY0luVnpaU0J6ZEhKcFkzUmNJanRjYms5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQmNJbDlmWlhOTmIyUjFiR1ZjSWl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JuWmhjaUIxZEdsc0lEMGdjbVZ4ZFdseVpTaGNJaTR2ZFhScGJGd2lLVHRjYm5aaGNpQmhjbkpoZVhNZ1BTQnlaWEYxYVhKbEtGd2lMaTloY25KaGVYTmNJaWs3WEc1MllYSWdSR2xqZEdsdmJtRnllVjh4SUQwZ2NtVnhkV2x5WlNoY0lpNHZSR2xqZEdsdmJtRnllVndpS1R0Y2JuWmhjaUJUWlhRZ1BTQXZLaW9nUUdOc1lYTnpJQ292SUNobWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRM0psWVhSbGN5QmhiaUJsYlhCMGVTQnpaWFF1WEc0Z0lDQWdJQ29nUUdOc1lYTnpJRHh3UGtFZ2MyVjBJR2x6SUdFZ1pHRjBZU0J6ZEhKMVkzUjFjbVVnZEdoaGRDQmpiMjUwWVdsdWN5QnVieUJrZFhCc2FXTmhkR1VnYVhSbGJYTXVQQzl3UGx4dUlDQWdJQ0FxSUR4d1BrbG1JSFJvWlNCcGJuTmxjblJsWkNCbGJHVnRaVzUwY3lCaGNtVWdZM1Z6ZEc5dElHOWlhbVZqZEhNZ1lTQm1kVzVqZEdsdmJseHVJQ0FnSUNBcUlIZG9hV05vSUdOdmJuWmxjblJ6SUdWc1pXMWxiblJ6SUhSdklITjBjbWx1WjNNZ2JYVnpkQ0JpWlNCd2NtOTJhV1JsWkM0Z1JYaGhiWEJzWlRvOEwzQStYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQThjSEpsUGx4dUlDQWdJQ0FxSUdaMWJtTjBhVzl1SUhCbGRGUnZVM1J5YVc1bktIQmxkQ2tnZTF4dUlDQWdJQ0FxSUNCeVpYUjFjbTRnY0dWMExtNWhiV1U3WEc0Z0lDQWdJQ29nZlZ4dUlDQWdJQ0FxSUR3dmNISmxQbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRR052Ym5OMGNuVmpkRzl5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRtZFc1amRHbHZiaWhQWW1wbFkzUXBPbk4wY21sdVp6MTlJSFJ2VTNSeWFXNW5SblZ1WTNScGIyNGdiM0IwYVc5dVlXd2dablZ1WTNScGIyNGdkWE5sWkZ4dUlDQWdJQ0FxSUhSdklHTnZiblpsY25RZ1pXeGxiV1Z1ZEhNZ2RHOGdjM1J5YVc1bmN5NGdTV1lnZEdobElHVnNaVzFsYm5SeklHRnlaVzRuZENCemRISnBibWR6SUc5eUlHbG1JSFJ2VTNSeWFXNW5LQ2xjYmlBZ0lDQWdLaUJwY3lCdWIzUWdZWEJ3Y205d2NtbGhkR1VzSUdFZ1kzVnpkRzl0SUdaMWJtTjBhVzl1SUhkb2FXTm9JSEpsWTJWcGRtVnpJR0Z1SUc5aWFtVmpkQ0JoYm1RZ2NtVjBkWEp1Y3lCaFhHNGdJQ0FnSUNvZ2RXNXBjWFZsSUhOMGNtbHVaeUJ0ZFhOMElHSmxJSEJ5YjNacFpHVmtMbHh1SUNBZ0lDQXFMMXh1SUNBZ0lHWjFibU4wYVc5dUlGTmxkQ2gwYjFOMGNtbHVaMFoxYm1OMGFXOXVLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaR2xqZEdsdmJtRnllU0E5SUc1bGR5QkVhV04wYVc5dVlYSjVYekV1WkdWbVlYVnNkQ2gwYjFOMGNtbHVaMFoxYm1OMGFXOXVLVHRjYmlBZ0lDQjlYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIUm9hWE1nYzJWMElHTnZiblJoYVc1eklIUm9aU0J6Y0dWamFXWnBaV1FnWld4bGJXVnVkQzVjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdaV3hsYldWdWRDQmxiR1Z0Wlc1MElIUnZJSE5sWVhKamFDQm1iM0l1WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3WW05dmJHVmhibjBnZEhKMVpTQnBaaUIwYUdseklITmxkQ0JqYjI1MFlXbHVjeUIwYUdVZ2MzQmxZMmxtYVdWa0lHVnNaVzFsYm5Rc1hHNGdJQ0FnSUNvZ1ptRnNjMlVnYjNSb1pYSjNhWE5sTGx4dUlDQWdJQ0FxTDF4dUlDQWdJRk5sZEM1d2NtOTBiM1I1Y0dVdVkyOXVkR0ZwYm5NZ1BTQm1kVzVqZEdsdmJpQW9aV3hsYldWdWRDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1a2FXTjBhVzl1WVhKNUxtTnZiblJoYVc1elMyVjVLR1ZzWlcxbGJuUXBPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRV1JrY3lCMGFHVWdjM0JsWTJsbWFXVmtJR1ZzWlcxbGJuUWdkRzhnZEdocGN5QnpaWFFnYVdZZ2FYUWdhWE1nYm05MElHRnNjbVZoWkhrZ2NISmxjMlZ1ZEM1Y2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnWld4bGJXVnVkQ0IwYUdVZ1pXeGxiV1Z1ZENCMGJ5QnBibk5sY25RdVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ltOXZiR1ZoYm4wZ2RISjFaU0JwWmlCMGFHbHpJSE5sZENCa2FXUWdibTkwSUdGc2NtVmhaSGtnWTI5dWRHRnBiaUIwYUdVZ2MzQmxZMmxtYVdWa0lHVnNaVzFsYm5RdVhHNGdJQ0FnSUNvdlhHNGdJQ0FnVTJWMExuQnliM1J2ZEhsd1pTNWhaR1FnUFNCbWRXNWpkR2x2YmlBb1pXeGxiV1Z1ZENrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NWpiMjUwWVdsdWN5aGxiR1Z0Wlc1MEtTQjhmQ0IxZEdsc0xtbHpWVzVrWldacGJtVmtLR1ZzWlcxbGJuUXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1ScFkzUnBiMjVoY25rdWMyVjBWbUZzZFdVb1pXeGxiV1Z1ZEN3Z1pXeGxiV1Z1ZENrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VHVnlabTl5YlhNZ1lXNGdhVzUwWlhKelpXTjBhVzl1SUdKbGRIZGxaVzRnZEdocGN5QmhibVFnWVc1dmRHaGxjaUJ6WlhRdVhHNGdJQ0FnSUNvZ1VtVnRiM1psY3lCaGJHd2dkbUZzZFdWeklIUm9ZWFFnWVhKbElHNXZkQ0J3Y21WelpXNTBJSFJvYVhNZ2MyVjBJR0Z1WkNCMGFHVWdaMmwyWlc0Z2MyVjBMbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdZMjlzYkdWamRHbHZibk11VTJWMGZTQnZkR2hsY2xObGRDQnZkR2hsY2lCelpYUXVYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1UyVjBMbkJ5YjNSdmRIbHdaUzVwYm5SbGNuTmxZM1JwYjI0Z1BTQm1kVzVqZEdsdmJpQW9iM1JvWlhKVFpYUXBJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlITmxkQ0E5SUhSb2FYTTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb1pXeGxiV1Z1ZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRnZkR2hsY2xObGRDNWpiMjUwWVdsdWN5aGxiR1Z0Wlc1MEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5sZEM1eVpXMXZkbVVvWld4bGJXVnVkQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZEhKMVpUdGNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJRWlhKbWIzSnRjeUJoSUhWdWFXOXVJR0psZEhkbFpXNGdkR2hwY3lCaGJtUWdZVzV2ZEdobGNpQnpaWFF1WEc0Z0lDQWdJQ29nUVdSa2N5QmhiR3dnZG1Gc2RXVnpJR1p5YjIwZ2RHaGxJR2RwZG1WdUlITmxkQ0IwYnlCMGFHbHpJSE5sZEM1Y2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTJOdmJHeGxZM1JwYjI1ekxsTmxkSDBnYjNSb1pYSlRaWFFnYjNSb1pYSWdjMlYwTGx4dUlDQWdJQ0FxTDF4dUlDQWdJRk5sZEM1d2NtOTBiM1I1Y0dVdWRXNXBiMjRnUFNCbWRXNWpkR2x2YmlBb2IzUm9aWEpUWlhRcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUhObGRDQTlJSFJvYVhNN1hHNGdJQ0FnSUNBZ0lHOTBhR1Z5VTJWMExtWnZja1ZoWTJnb1puVnVZM1JwYjI0Z0tHVnNaVzFsYm5RcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhObGRDNWhaR1FvWld4bGJXVnVkQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCUVpYSm1iM0p0Y3lCaElHUnBabVpsY21WdVkyVWdZbVYwZDJWbGJpQjBhR2x6SUdGdVpDQmhibTkwYUdWeUlITmxkQzVjYmlBZ0lDQWdLaUJTWlcxdmRtVnpJR1p5YjIwZ2RHaHBjeUJ6WlhRZ1lXeHNJSFJvWlNCMllXeDFaWE1nZEdoaGRDQmhjbVVnY0hKbGMyVnVkQ0JwYmlCMGFHVWdaMmwyWlc0Z2MyVjBMbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdZMjlzYkdWamRHbHZibk11VTJWMGZTQnZkR2hsY2xObGRDQnZkR2hsY2lCelpYUXVYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1UyVjBMbkJ5YjNSdmRIbHdaUzVrYVdabVpYSmxibU5sSUQwZ1puVnVZM1JwYjI0Z0tHOTBhR1Z5VTJWMEtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCelpYUWdQU0IwYUdsek8xeHVJQ0FnSUNBZ0lDQnZkR2hsY2xObGRDNW1iM0pGWVdOb0tHWjFibU4wYVc5dUlDaGxiR1Z0Wlc1MEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCelpYUXVjbVZ0YjNabEtHVnNaVzFsYm5RcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lIMDdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRMmhsWTJ0eklIZG9aWFJvWlhJZ2RHaGxJR2RwZG1WdUlITmxkQ0JqYjI1MFlXbHVjeUJoYkd3Z2RHaGxJR1ZzWlcxbGJuUnpJR2x1SUhSb2FYTWdjMlYwTGx4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3WTI5c2JHVmpkR2x2Ym5NdVUyVjBmU0J2ZEdobGNsTmxkQ0J2ZEdobGNpQnpaWFF1WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3WW05dmJHVmhibjBnZEhKMVpTQnBaaUIwYUdseklITmxkQ0JwY3lCaElITjFZbk5sZENCdlppQjBhR1VnWjJsMlpXNGdjMlYwTGx4dUlDQWdJQ0FxTDF4dUlDQWdJRk5sZEM1d2NtOTBiM1I1Y0dVdWFYTlRkV0p6WlhSUFppQTlJR1oxYm1OMGFXOXVJQ2h2ZEdobGNsTmxkQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1emFYcGxLQ2tnUGlCdmRHaGxjbE5sZEM1emFYcGxLQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjJZWElnYVhOVGRXSWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1admNrVmhZMmdvWm5WdVkzUnBiMjRnS0dWc1pXMWxiblFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnaGIzUm9aWEpUWlhRdVkyOXVkR0ZwYm5Nb1pXeGxiV1Z1ZENrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBjMU4xWWlBOUlHWmhiSE5sTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjBjblZsTzF4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHbHpVM1ZpTzF4dUlDQWdJSDA3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVW1WdGIzWmxjeUIwYUdVZ2MzQmxZMmxtYVdWa0lHVnNaVzFsYm5RZ1puSnZiU0IwYUdseklITmxkQ0JwWmlCcGRDQnBjeUJ3Y21WelpXNTBMbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMkp2YjJ4bFlXNTlJSFJ5ZFdVZ2FXWWdkR2hwY3lCelpYUWdZMjl1ZEdGcGJtVmtJSFJvWlNCemNHVmphV1pwWldRZ1pXeGxiV1Z1ZEM1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0JUWlhRdWNISnZkRzkwZVhCbExuSmxiVzkyWlNBOUlHWjFibU4wYVc5dUlDaGxiR1Z0Wlc1MEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNnaGRHaHBjeTVqYjI1MFlXbHVjeWhsYkdWdFpXNTBLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1a2FXTjBhVzl1WVhKNUxuSmxiVzkyWlNobGJHVnRaVzUwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjBjblZsTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRmVHVmpkWFJsY3lCMGFHVWdjSEp2ZG1sa1pXUWdablZ1WTNScGIyNGdiMjVqWlNCbWIzSWdaV0ZqYUNCbGJHVnRaVzUwWEc0Z0lDQWdJQ29nY0hKbGMyVnVkQ0JwYmlCMGFHbHpJSE5sZEM1Y2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTJaMWJtTjBhVzl1S0U5aWFtVmpkQ2s2S24wZ1kyRnNiR0poWTJzZ1puVnVZM1JwYjI0Z2RHOGdaWGhsWTNWMFpTd2dhWFFnYVhOY2JpQWdJQ0FnS2lCcGJuWnZhMlZrSUhkcGRHZ2diMjVsSUdGeVozVnRaVzUwY3pvZ2RHaGxJR1ZzWlcxbGJuUXVJRlJ2SUdKeVpXRnJJSFJvWlNCcGRHVnlZWFJwYjI0Z2VXOTFJR05oYmx4dUlDQWdJQ0FxSUc5d2RHbHZibUZzYkhrZ2NtVjBkWEp1SUdaaGJITmxMbHh1SUNBZ0lDQXFMMXh1SUNBZ0lGTmxkQzV3Y205MGIzUjVjR1V1Wm05eVJXRmphQ0E5SUdaMWJtTjBhVzl1SUNoallXeHNZbUZqYXlrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1ScFkzUnBiMjVoY25rdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb2F5d2dkaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTmhiR3hpWVdOcktIWXBPMXh1SUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZKbGRIVnlibk1nWVc0Z1lYSnlZWGtnWTI5dWRHRnBibWx1WnlCaGJHd2diMllnZEdobElHVnNaVzFsYm5SeklHbHVJSFJvYVhNZ2MyVjBJR2x1SUdGeVltbDBjbUZ5ZVNCdmNtUmxjaTVjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRCY25KaGVYMGdZVzRnWVhKeVlYa2dZMjl1ZEdGcGJtbHVaeUJoYkd3Z2IyWWdkR2hsSUdWc1pXMWxiblJ6SUdsdUlIUm9hWE1nYzJWMExseHVJQ0FnSUNBcUwxeHVJQ0FnSUZObGRDNXdjbTkwYjNSNWNHVXVkRzlCY25KaGVTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVaR2xqZEdsdmJtRnllUzUyWVd4MVpYTW9LVHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjBhR2x6SUhObGRDQmpiMjUwWVdsdWN5QnVieUJsYkdWdFpXNTBjeTVjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRpYjI5c1pXRnVmU0IwY25WbElHbG1JSFJvYVhNZ2MyVjBJR052Ym5SaGFXNXpJRzV2SUdWc1pXMWxiblJ6TGx4dUlDQWdJQ0FxTDF4dUlDQWdJRk5sZEM1d2NtOTBiM1I1Y0dVdWFYTkZiWEIwZVNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVpHbGpkR2x2Ym1GeWVTNXBjMFZ0Y0hSNUtDazdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaWFIxY201eklIUm9aU0J1ZFcxaVpYSWdiMllnWld4bGJXVnVkSE1nYVc0Z2RHaHBjeUJ6WlhRdVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlNCMGFHVWdiblZ0WW1WeUlHOW1JR1ZzWlcxbGJuUnpJR2x1SUhSb2FYTWdjMlYwTGx4dUlDQWdJQ0FxTDF4dUlDQWdJRk5sZEM1d2NtOTBiM1I1Y0dVdWMybDZaU0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11WkdsamRHbHZibUZ5ZVM1emFYcGxLQ2s3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJTWlcxdmRtVnpJR0ZzYkNCdlppQjBhR1VnWld4bGJXVnVkSE1nWm5KdmJTQjBhR2x6SUhObGRDNWNiaUFnSUNBZ0tpOWNiaUFnSUNCVFpYUXVjSEp2ZEc5MGVYQmxMbU5zWldGeUlEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbVJwWTNScGIyNWhjbmt1WTJ4bFlYSW9LVHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFYRzRnSUNBZ0tpQlFjbTkyYVdSbGN5QmhJSE4wY21sdVp5QnlaWEJ5WlhObGJuUmhkR2x2YmlCbWIzSWdaR2x6Y0d4aGVWeHVJQ0FnSUNvdlhHNGdJQ0FnVTJWMExuQnliM1J2ZEhsd1pTNTBiMU4wY21sdVp5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdGeWNtRjVjeTUwYjFOMGNtbHVaeWgwYUdsekxuUnZRWEp5WVhrb0tTazdYRzRnSUNBZ2ZUdGNiaUFnSUNCeVpYUjFjbTRnVTJWME8xeHVmU2dwS1RzZ0x5OGdaVzVrSUc5bUlGTmxkRnh1Wlhod2IzSjBjeTVrWldaaGRXeDBJRDBnVTJWME8xeHVMeThqSUhOdmRYSmpaVTFoY0hCcGJtZFZVa3c5VTJWMExtcHpMbTFoY0NJc0lsd2lkWE5sSUhOMGNtbGpkRndpTzF4dVQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRndpWDE5bGMwMXZaSFZzWlZ3aUxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHVkbUZ5SUV4cGJtdGxaRXhwYzNSZk1TQTlJSEpsY1hWcGNtVW9YQ0l1TDB4cGJtdGxaRXhwYzNSY0lpazdYRzUyWVhJZ1UzUmhZMnNnUFNBdktpb2dRR05zWVhOeklDb3ZJQ2htZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1EzSmxZWFJsY3lCaGJpQmxiWEIwZVNCVGRHRmpheTVjYmlBZ0lDQWdLaUJBWTJ4aGMzTWdRU0JUZEdGamF5QnBjeUJoSUV4aGMzUXRTVzR0Um1seWMzUXRUM1YwSUNoTVNVWlBLU0JrWVhSaElITjBjblZqZEhWeVpTd2dkR2hsSUd4aGMzUmNiaUFnSUNBZ0tpQmxiR1Z0Wlc1MElHRmtaR1ZrSUhSdklIUm9aU0J6ZEdGamF5QjNhV3hzSUdKbElIUm9aU0JtYVhKemRDQnZibVVnZEc4Z1ltVWdjbVZ0YjNabFpDNGdWR2hwYzF4dUlDQWdJQ0FxSUdsdGNHeGxiV1Z1ZEdGMGFXOXVJSFZ6WlhNZ1lTQnNhVzVyWldRZ2JHbHpkQ0JoY3lCaElHTnZiblJoYVc1bGNpNWNiaUFnSUNBZ0tpQkFZMjl1YzNSeWRXTjBiM0pjYmlBZ0lDQWdLaTljYmlBZ0lDQm1kVzVqZEdsdmJpQlRkR0ZqYXlncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2FYTjBJRDBnYm1WM0lFeHBibXRsWkV4cGMzUmZNUzVrWldaaGRXeDBLQ2s3WEc0Z0lDQWdmVnh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkIxYzJobGN5QmhiaUJwZEdWdElHOXVkRzhnZEdobElIUnZjQ0J2WmlCMGFHbHpJSE4wWVdOckxseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCbGJHVnRJSFJvWlNCbGJHVnRaVzUwSUhSdklHSmxJSEIxYzJobFpDQnZiblJ2SUhSb2FYTWdjM1JoWTJzdVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ltOXZiR1ZoYm4wZ2RISjFaU0JwWmlCMGFHVWdaV3hsYldWdWRDQjNZWE1nY0hWemFHVmtJRzl5SUdaaGJITmxJR2xtSUdsMElHbHpJSFZ1WkdWbWFXNWxaQzVjYmlBZ0lDQWdLaTljYmlBZ0lDQlRkR0ZqYXk1d2NtOTBiM1I1Y0dVdWNIVnphQ0E5SUdaMWJtTjBhVzl1SUNobGJHVnRLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxteHBjM1F1WVdSa0tHVnNaVzBzSURBcE8xeHVJQ0FnSUgwN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VIVnphR1Z6SUdGdUlHbDBaVzBnYjI1MGJ5QjBhR1VnZEc5d0lHOW1JSFJvYVhNZ2MzUmhZMnN1WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJR1ZzWlcwZ2RHaGxJR1ZzWlcxbGJuUWdkRzhnWW1VZ2NIVnphR1ZrSUc5dWRHOGdkR2hwY3lCemRHRmpheTVjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRpYjI5c1pXRnVmU0IwY25WbElHbG1JSFJvWlNCbGJHVnRaVzUwSUhkaGN5QndkWE5vWldRZ2IzSWdabUZzYzJVZ2FXWWdhWFFnYVhNZ2RXNWtaV1pwYm1Wa0xseHVJQ0FnSUNBcUwxeHVJQ0FnSUZOMFlXTnJMbkJ5YjNSdmRIbHdaUzVoWkdRZ1BTQm1kVzVqZEdsdmJpQW9aV3hsYlNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVzYVhOMExtRmtaQ2hsYkdWdExDQXdLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkpsYlc5MlpYTWdkR2hsSUc5aWFtVmpkQ0JoZENCMGFHVWdkRzl3SUc5bUlIUm9hWE1nYzNSaFkyc2dZVzVrSUhKbGRIVnlibk1nZEdoaGRDQnZZbXBsWTNRdVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN0tuMGdkR2hsSUc5aWFtVmpkQ0JoZENCMGFHVWdkRzl3SUc5bUlIUm9hWE1nYzNSaFkyc2diM0lnZFc1a1pXWnBibVZrSUdsbUlIUm9aVnh1SUNBZ0lDQXFJSE4wWVdOcklHbHpJR1Z0Y0hSNUxseHVJQ0FnSUNBcUwxeHVJQ0FnSUZOMFlXTnJMbkJ5YjNSdmRIbHdaUzV3YjNBZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxteHBjM1F1Y21WdGIzWmxSV3hsYldWdWRFRjBTVzVrWlhnb01DazdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQk1iMjlyY3lCaGRDQjBhR1VnYjJKcVpXTjBJR0YwSUhSb1pTQjBiM0FnYjJZZ2RHaHBjeUJ6ZEdGamF5QjNhWFJvYjNWMElISmxiVzkyYVc1bklHbDBJR1p5YjIwZ2RHaGxYRzRnSUNBZ0lDb2djM1JoWTJzdVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN0tuMGdkR2hsSUc5aWFtVmpkQ0JoZENCMGFHVWdkRzl3SUc5bUlIUm9hWE1nYzNSaFkyc2diM0lnZFc1a1pXWnBibVZrSUdsbUlIUm9aVnh1SUNBZ0lDQXFJSE4wWVdOcklHbHpJR1Z0Y0hSNUxseHVJQ0FnSUNBcUwxeHVJQ0FnSUZOMFlXTnJMbkJ5YjNSdmRIbHdaUzV3WldWcklEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXNhWE4wTG1acGNuTjBLQ2s3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJTWlhSMWNtNXpJSFJvWlNCdWRXMWlaWElnYjJZZ1pXeGxiV1Z1ZEhNZ2FXNGdkR2hwY3lCemRHRmpheTVjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHR1ZFcxaVpYSjlJSFJvWlNCdWRXMWlaWElnYjJZZ1pXeGxiV1Z1ZEhNZ2FXNGdkR2hwY3lCemRHRmpheTVjYmlBZ0lDQWdLaTljYmlBZ0lDQlRkR0ZqYXk1d2NtOTBiM1I1Y0dVdWMybDZaU0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11YkdsemRDNXphWHBsS0NrN1hHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCU1pYUjFjbTV6SUhSeWRXVWdhV1lnZEdocGN5QnpkR0ZqYXlCamIyNTBZV2x1Y3lCMGFHVWdjM0JsWTJsbWFXVmtJR1ZzWlcxbGJuUXVYRzRnSUNBZ0lDb2dQSEErU1dZZ2RHaGxJR1ZzWlcxbGJuUnpJR2x1YzJsa1pTQjBhR2x6SUhOMFlXTnJJR0Z5WlZ4dUlDQWdJQ0FxSUc1dmRDQmpiMjF3WVhKaFlteGxJSGRwZEdnZ2RHaGxJRDA5UFNCdmNHVnlZWFJ2Y2l3Z1lTQmpkWE4wYjIwZ1pYRjFZV3h6SUdaMWJtTjBhVzl1SUhOb2IzVnNaQ0JpWlZ4dUlDQWdJQ0FxSUhCeWIzWnBaR1ZrSUhSdklIQmxjbVp2Y20wZ2MyVmhjbU5vWlhNc0lIUm9aU0JtZFc1amRHbHZiaUJ0ZFhOMElISmxZMlZwZG1VZ2RIZHZJR0Z5WjNWdFpXNTBjeUJoYm1SY2JpQWdJQ0FnS2lCeVpYUjFjbTRnZEhKMVpTQnBaaUIwYUdWNUlHRnlaU0JsY1hWaGJDd2dabUZzYzJVZ2IzUm9aWEozYVhObExpQkZlR0Z0Y0d4bE9qd3ZjRDVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRHh3Y21VK1hHNGdJQ0FnSUNvZ1kyOXVjM1FnY0dWMGMwRnlaVVZ4ZFdGc1FubE9ZVzFsSUNod1pYUXhMQ0J3WlhReUtTQjdYRzRnSUNBZ0lDb2dJSEpsZEhWeWJpQndaWFF4TG01aGJXVWdQVDA5SUhCbGRESXVibUZ0WlR0Y2JpQWdJQ0FnS2lCOVhHNGdJQ0FnSUNvZ1BDOXdjbVUrWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJR1ZzWlcwZ1pXeGxiV1Z1ZENCMGJ5QnpaV0Z5WTJnZ1ptOXlMbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdablZ1WTNScGIyNG9UMkpxWldOMExFOWlhbVZqZENrNlltOXZiR1ZoYmoxOUlHVnhkV0ZzYzBaMWJtTjBhVzl1SUc5d2RHbHZibUZzWEc0Z0lDQWdJQ29nWm5WdVkzUnBiMjRnZEc4Z1kyaGxZMnNnYVdZZ2RIZHZJR1ZzWlcxbGJuUnpJR0Z5WlNCbGNYVmhiQzVjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRpYjI5c1pXRnVmU0IwY25WbElHbG1JSFJvYVhNZ2MzUmhZMnNnWTI5dWRHRnBibk1nZEdobElITndaV05wWm1sbFpDQmxiR1Z0Wlc1MExGeHVJQ0FnSUNBcUlHWmhiSE5sSUc5MGFHVnlkMmx6WlM1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0JUZEdGamF5NXdjbTkwYjNSNWNHVXVZMjl1ZEdGcGJuTWdQU0JtZFc1amRHbHZiaUFvWld4bGJTd2daWEYxWVd4elJuVnVZM1JwYjI0cElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11YkdsemRDNWpiMjUwWVdsdWN5aGxiR1Z0TENCbGNYVmhiSE5HZFc1amRHbHZiaWs3WEc0Z0lDQWdmVHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJEYUdWamEzTWdhV1lnZEdocGN5QnpkR0ZqYXlCcGN5QmxiWEIwZVM1Y2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0aWIyOXNaV0Z1ZlNCMGNuVmxJR2xtSUdGdVpDQnZibXg1SUdsbUlIUm9hWE1nYzNSaFkyc2dZMjl1ZEdGcGJuTWdibThnYVhSbGJYTTdJR1poYkhObFhHNGdJQ0FnSUNvZ2IzUm9aWEozYVhObExseHVJQ0FnSUNBcUwxeHVJQ0FnSUZOMFlXTnJMbkJ5YjNSdmRIbHdaUzVwYzBWdGNIUjVJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVzYVhOMExtbHpSVzF3ZEhrb0tUdGNiaUFnSUNCOU8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGSmxiVzkyWlhNZ1lXeHNJRzltSUhSb1pTQmxiR1Z0Wlc1MGN5Qm1jbTl0SUhSb2FYTWdjM1JoWTJzdVhHNGdJQ0FnSUNvdlhHNGdJQ0FnVTNSaFkyc3VjSEp2ZEc5MGVYQmxMbU5zWldGeUlEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbXhwYzNRdVkyeGxZWElvS1R0Y2JpQWdJQ0I5TzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVWNFpXTjFkR1Z6SUhSb1pTQndjbTkyYVdSbFpDQm1kVzVqZEdsdmJpQnZibU5sSUdadmNpQmxZV05vSUdWc1pXMWxiblFnY0hKbGMyVnVkQ0JwYmlCMGFHbHpJSE4wWVdOcklHbHVYRzRnSUNBZ0lDb2dURWxHVHlCdmNtUmxjaTVjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMloxYm1OMGFXOXVLRTlpYW1WamRDazZLbjBnWTJGc2JHSmhZMnNnWm5WdVkzUnBiMjRnZEc4Z1pYaGxZM1YwWlN3Z2FYUWdhWE5jYmlBZ0lDQWdLaUJwYm5admEyVmtJSGRwZEdnZ2IyNWxJR0Z5WjNWdFpXNTBPaUIwYUdVZ1pXeGxiV1Z1ZENCMllXeDFaU3dnZEc4Z1luSmxZV3NnZEdobElHbDBaWEpoZEdsdmJpQjViM1VnWTJGdVhHNGdJQ0FnSUNvZ2IzQjBhVzl1WVd4c2VTQnlaWFIxY200Z1ptRnNjMlV1WEc0Z0lDQWdJQ292WEc0Z0lDQWdVM1JoWTJzdWNISnZkRzkwZVhCbExtWnZja1ZoWTJnZ1BTQm1kVzVqZEdsdmJpQW9ZMkZzYkdKaFkyc3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXNhWE4wTG1admNrVmhZMmdvWTJGc2JHSmhZMnNwTzF4dUlDQWdJSDA3WEc0Z0lDQWdjbVYwZFhKdUlGTjBZV05yTzF4dWZTZ3BLVHNnTHk4Z1JXNWtJRzltSUhOMFlXTnJYRzVsZUhCdmNuUnpMbVJsWm1GMWJIUWdQU0JUZEdGamF6dGNiaTh2SXlCemIzVnlZMlZOWVhCd2FXNW5WVkpNUFZOMFlXTnJMbXB6TG0xaGNDSXNJbHdpZFhObElITjBjbWxqZEZ3aU8xeHVUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUZ3aVgxOWxjMDF2WkhWc1pWd2lMQ0I3SUhaaGJIVmxPaUIwY25WbElIMHBPMXh1ZG1GeUlIVjBhV3dnUFNCeVpYRjFhWEpsS0Z3aUxpOTFkR2xzWENJcE8xeHVMeW9xWEc0Z0tpQlNaWFIxY201eklIUm9aU0J3YjNOcGRHbHZiaUJ2WmlCMGFHVWdabWx5YzNRZ2IyTmpkWEp5Wlc1alpTQnZaaUIwYUdVZ2MzQmxZMmxtYVdWa0lHbDBaVzFjYmlBcUlIZHBkR2hwYmlCMGFHVWdjM0JsWTJsbWFXVmtJR0Z5Y21GNUxqUmNiaUFxSUVCd1lYSmhiU0I3S24wZ1lYSnlZWGtnZEdobElHRnljbUY1SUdsdUlIZG9hV05vSUhSdklITmxZWEpqYUNCMGFHVWdaV3hsYldWdWRDNWNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0JwZEdWdElIUm9aU0JsYkdWdFpXNTBJSFJ2SUhObFlYSmphQzVjYmlBcUlFQndZWEpoYlNCN1puVnVZM1JwYjI0b1QySnFaV04wTEU5aWFtVmpkQ2s2WW05dmJHVmhiajE5SUdWeGRXRnNjMFoxYm1OMGFXOXVJRzl3ZEdsdmJtRnNJR1oxYm1OMGFXOXVJSFZ6WldRZ2RHOWNiaUFxSUdOb1pXTnJJR1Z4ZFdGc2FYUjVJR0psZEhkbFpXNGdNaUJsYkdWdFpXNTBjeTVjYmlBcUlFQnlaWFIxY200Z2UyNTFiV0psY24wZ2RHaGxJSEJ2YzJsMGFXOXVJRzltSUhSb1pTQm1hWEp6ZENCdlkyTjFjbkpsYm1ObElHOW1JSFJvWlNCemNHVmphV1pwWldRZ1pXeGxiV1Z1ZEZ4dUlDb2dkMmwwYUdsdUlIUm9aU0J6Y0dWamFXWnBaV1FnWVhKeVlYa3NJRzl5SUMweElHbG1JRzV2ZENCbWIzVnVaQzVjYmlBcUwxeHVablZ1WTNScGIyNGdhVzVrWlhoUFppaGhjbkpoZVN3Z2FYUmxiU3dnWlhGMVlXeHpSblZ1WTNScGIyNHBJSHRjYmlBZ0lDQjJZWElnWlhGMVlXeHpJRDBnWlhGMVlXeHpSblZ1WTNScGIyNGdmSHdnZFhScGJDNWtaV1poZFd4MFJYRjFZV3h6TzF4dUlDQWdJSFpoY2lCc1pXNW5kR2dnUFNCaGNuSmhlUzVzWlc1bmRHZzdYRzRnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCcFppQW9aWEYxWVd4ektHRnljbUY1VzJsZExDQnBkR1Z0S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlDMHhPMXh1ZlZ4dVpYaHdiM0owY3k1cGJtUmxlRTltSUQwZ2FXNWtaWGhQWmp0Y2JpOHFLbHh1SUNvZ1VtVjBkWEp1Y3lCMGFHVWdjRzl6YVhScGIyNGdiMllnZEdobElHeGhjM1FnYjJOamRYSnlaVzVqWlNCdlppQjBhR1VnYzNCbFkybG1hV1ZrSUdWc1pXMWxiblJjYmlBcUlIZHBkR2hwYmlCMGFHVWdjM0JsWTJsbWFXVmtJR0Z5Y21GNUxseHVJQ29nUUhCaGNtRnRJSHNxZlNCaGNuSmhlU0IwYUdVZ1lYSnlZWGtnYVc0Z2QyaHBZMmdnZEc4Z2MyVmhjbU5vSUhSb1pTQmxiR1Z0Wlc1MExseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJR2wwWlcwZ2RHaGxJR1ZzWlcxbGJuUWdkRzhnYzJWaGNtTm9MbHh1SUNvZ1FIQmhjbUZ0SUh0bWRXNWpkR2x2YmloUFltcGxZM1FzVDJKcVpXTjBLVHBpYjI5c1pXRnVQWDBnWlhGMVlXeHpSblZ1WTNScGIyNGdiM0IwYVc5dVlXd2dablZ1WTNScGIyNGdkWE5sWkNCMGIxeHVJQ29nWTJobFkyc2daWEYxWVd4cGRIa2dZbVYwZDJWbGJpQXlJR1ZzWlcxbGJuUnpMbHh1SUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlNCMGFHVWdjRzl6YVhScGIyNGdiMllnZEdobElHeGhjM1FnYjJOamRYSnlaVzVqWlNCdlppQjBhR1VnYzNCbFkybG1hV1ZrSUdWc1pXMWxiblJjYmlBcUlIZHBkR2hwYmlCMGFHVWdjM0JsWTJsbWFXVmtJR0Z5Y21GNUlHOXlJQzB4SUdsbUlHNXZkQ0JtYjNWdVpDNWNiaUFxTDF4dVpuVnVZM1JwYjI0Z2JHRnpkRWx1WkdWNFQyWW9ZWEp5WVhrc0lHbDBaVzBzSUdWeGRXRnNjMFoxYm1OMGFXOXVLU0I3WEc0Z0lDQWdkbUZ5SUdWeGRXRnNjeUE5SUdWeGRXRnNjMFoxYm1OMGFXOXVJSHg4SUhWMGFXd3VaR1ZtWVhWc2RFVnhkV0ZzY3p0Y2JpQWdJQ0IyWVhJZ2JHVnVaM1JvSUQwZ1lYSnlZWGt1YkdWdVozUm9PMXh1SUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0JzWlc1bmRHZ2dMU0F4T3lCcElENDlJREE3SUdrdExTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb1pYRjFZV3h6S0dGeWNtRjVXMmxkTENCcGRHVnRLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUMweE8xeHVmVnh1Wlhod2IzSjBjeTVzWVhOMFNXNWtaWGhQWmlBOUlHeGhjM1JKYm1SbGVFOW1PMXh1THlvcVhHNGdLaUJTWlhSMWNtNXpJSFJ5ZFdVZ2FXWWdkR2hsSUhOd1pXTnBabWxsWkNCaGNuSmhlU0JqYjI1MFlXbHVjeUIwYUdVZ2MzQmxZMmxtYVdWa0lHVnNaVzFsYm5RdVhHNGdLaUJBY0dGeVlXMGdleXA5SUdGeWNtRjVJSFJvWlNCaGNuSmhlU0JwYmlCM2FHbGphQ0IwYnlCelpXRnlZMmdnZEdobElHVnNaVzFsYm5RdVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdhWFJsYlNCMGFHVWdaV3hsYldWdWRDQjBieUJ6WldGeVkyZ3VYRzRnS2lCQWNHRnlZVzBnZTJaMWJtTjBhVzl1S0U5aWFtVmpkQ3hQWW1wbFkzUXBPbUp2YjJ4bFlXNDlmU0JsY1hWaGJITkdkVzVqZEdsdmJpQnZjSFJwYjI1aGJDQm1kVzVqZEdsdmJpQjBiMXh1SUNvZ1kyaGxZMnNnWlhGMVlXeHBkSGtnWW1WMGQyVmxiaUF5SUdWc1pXMWxiblJ6TGx4dUlDb2dRSEpsZEhWeWJpQjdZbTl2YkdWaGJuMGdkSEoxWlNCcFppQjBhR1VnYzNCbFkybG1hV1ZrSUdGeWNtRjVJR052Ym5SaGFXNXpJSFJvWlNCemNHVmphV1pwWldRZ1pXeGxiV1Z1ZEM1Y2JpQXFMMXh1Wm5WdVkzUnBiMjRnWTI5dWRHRnBibk1vWVhKeVlYa3NJR2wwWlcwc0lHVnhkV0ZzYzBaMWJtTjBhVzl1S1NCN1hHNGdJQ0FnY21WMGRYSnVJR2x1WkdWNFQyWW9ZWEp5WVhrc0lHbDBaVzBzSUdWeGRXRnNjMFoxYm1OMGFXOXVLU0ErUFNBd08xeHVmVnh1Wlhod2IzSjBjeTVqYjI1MFlXbHVjeUE5SUdOdmJuUmhhVzV6TzF4dUx5b3FYRzRnS2lCU1pXMXZkbVZ6SUhSb1pTQm1hWEp6ZENCdlkzVnljbVZ1WTJVZ2IyWWdkR2hsSUhOd1pXTnBabWxsWkNCbGJHVnRaVzUwSUdaeWIyMGdkR2hsSUhOd1pXTnBabWxsWkNCaGNuSmhlUzVjYmlBcUlFQndZWEpoYlNCN0tuMGdZWEp5WVhrZ2RHaGxJR0Z5Y21GNUlHbHVJSGRvYVdOb0lIUnZJSE5sWVhKamFDQmxiR1Z0Wlc1MExseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJR2wwWlcwZ2RHaGxJR1ZzWlcxbGJuUWdkRzhnYzJWaGNtTm9MbHh1SUNvZ1FIQmhjbUZ0SUh0bWRXNWpkR2x2YmloUFltcGxZM1FzVDJKcVpXTjBLVHBpYjI5c1pXRnVQWDBnWlhGMVlXeHpSblZ1WTNScGIyNGdiM0IwYVc5dVlXd2dablZ1WTNScGIyNGdkRzljYmlBcUlHTm9aV05ySUdWeGRXRnNhWFI1SUdKbGRIZGxaVzRnTWlCbGJHVnRaVzUwY3k1Y2JpQXFJRUJ5WlhSMWNtNGdlMkp2YjJ4bFlXNTlJSFJ5ZFdVZ2FXWWdkR2hsSUdGeWNtRjVJR05vWVc1blpXUWdZV1owWlhJZ2RHaHBjeUJqWVd4c0xseHVJQ292WEc1bWRXNWpkR2x2YmlCeVpXMXZkbVVvWVhKeVlYa3NJR2wwWlcwc0lHVnhkV0ZzYzBaMWJtTjBhVzl1S1NCN1hHNGdJQ0FnZG1GeUlHbHVaR1Y0SUQwZ2FXNWtaWGhQWmloaGNuSmhlU3dnYVhSbGJTd2daWEYxWVd4elJuVnVZM1JwYjI0cE8xeHVJQ0FnSUdsbUlDaHBibVJsZUNBOElEQXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUgxY2JpQWdJQ0JoY25KaGVTNXpjR3hwWTJVb2FXNWtaWGdzSURFcE8xeHVJQ0FnSUhKbGRIVnliaUIwY25WbE8xeHVmVnh1Wlhod2IzSjBjeTV5WlcxdmRtVWdQU0J5WlcxdmRtVTdYRzR2S2lwY2JpQXFJRkpsZEhWeWJuTWdkR2hsSUc1MWJXSmxjaUJ2WmlCbGJHVnRaVzUwY3lCcGJpQjBhR1VnYzNCbFkybG1hV1ZrSUdGeWNtRjVJR1Z4ZFdGc1hHNGdLaUIwYnlCMGFHVWdjM0JsWTJsbWFXVmtJRzlpYW1WamRDNWNiaUFxSUVCd1lYSmhiU0I3UVhKeVlYbDlJR0Z5Y21GNUlIUm9aU0JoY25KaGVTQnBiaUIzYUdsamFDQjBieUJrWlhSbGNtMXBibVVnZEdobElHWnlaWEYxWlc1amVTQnZaaUIwYUdVZ1pXeGxiV1Z1ZEM1Y2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQnBkR1Z0SUhSb1pTQmxiR1Z0Wlc1MElIZG9iM05sSUdaeVpYRjFaVzVqZVNCcGN5QjBieUJpWlNCa1pYUmxjbTFwYm1Wa0xseHVJQ29nUUhCaGNtRnRJSHRtZFc1amRHbHZiaWhQWW1wbFkzUXNUMkpxWldOMEtUcGliMjlzWldGdVBYMGdaWEYxWVd4elJuVnVZM1JwYjI0Z2IzQjBhVzl1WVd3Z1puVnVZM1JwYjI0Z2RYTmxaQ0IwYjF4dUlDb2dZMmhsWTJzZ1pYRjFZV3hwZEhrZ1ltVjBkMlZsYmlBeUlHVnNaVzFsYm5SekxseHVJQ29nUUhKbGRIVnliaUI3Ym5WdFltVnlmU0IwYUdVZ2JuVnRZbVZ5SUc5bUlHVnNaVzFsYm5SeklHbHVJSFJvWlNCemNHVmphV1pwWldRZ1lYSnlZWGxjYmlBcUlHVnhkV0ZzSUhSdklIUm9aU0J6Y0dWamFXWnBaV1FnYjJKcVpXTjBMbHh1SUNvdlhHNW1kVzVqZEdsdmJpQm1jbVZ4ZFdWdVkza29ZWEp5WVhrc0lHbDBaVzBzSUdWeGRXRnNjMFoxYm1OMGFXOXVLU0I3WEc0Z0lDQWdkbUZ5SUdWeGRXRnNjeUE5SUdWeGRXRnNjMFoxYm1OMGFXOXVJSHg4SUhWMGFXd3VaR1ZtWVhWc2RFVnhkV0ZzY3p0Y2JpQWdJQ0IyWVhJZ2JHVnVaM1JvSUQwZ1lYSnlZWGt1YkdWdVozUm9PMXh1SUNBZ0lIWmhjaUJtY21WeElEMGdNRHRjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR3hsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hsY1hWaGJITW9ZWEp5WVhsYmFWMHNJR2wwWlcwcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWNtVnhLeXM3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlHWnlaWEU3WEc1OVhHNWxlSEJ2Y25SekxtWnlaWEYxWlc1amVTQTlJR1p5WlhGMVpXNWplVHRjYmk4cUtseHVJQ29nVW1WMGRYSnVjeUIwY25WbElHbG1JSFJvWlNCMGQyOGdjM0JsWTJsbWFXVmtJR0Z5Y21GNWN5QmhjbVVnWlhGMVlXd2dkRzhnYjI1bElHRnViM1JvWlhJdVhHNGdLaUJVZDI4Z1lYSnlZWGx6SUdGeVpTQmpiMjV6YVdSbGNtVmtJR1Z4ZFdGc0lHbG1JR0p2ZEdnZ1lYSnlZWGx6SUdOdmJuUmhhVzRnZEdobElITmhiV1VnYm5WdFltVnlYRzRnS2lCdlppQmxiR1Z0Wlc1MGN5d2dZVzVrSUdGc2JDQmpiM0p5WlhOd2IyNWthVzVuSUhCaGFYSnpJRzltSUdWc1pXMWxiblJ6SUdsdUlIUm9aU0IwZDI5Y2JpQXFJR0Z5Y21GNWN5QmhjbVVnWlhGMVlXd2dZVzVrSUdGeVpTQnBiaUIwYUdVZ2MyRnRaU0J2Y21SbGNpNWNiaUFxSUVCd1lYSmhiU0I3UVhKeVlYbDlJR0Z5Y21GNU1TQnZibVVnWVhKeVlYa2dkRzhnWW1VZ2RHVnpkR1ZrSUdadmNpQmxjWFZoYkdsMGVTNWNiaUFxSUVCd1lYSmhiU0I3UVhKeVlYbDlJR0Z5Y21GNU1pQjBhR1VnYjNSb1pYSWdZWEp5WVhrZ2RHOGdZbVVnZEdWemRHVmtJR1p2Y2lCbGNYVmhiR2wwZVM1Y2JpQXFJRUJ3WVhKaGJTQjdablZ1WTNScGIyNG9UMkpxWldOMExFOWlhbVZqZENrNlltOXZiR1ZoYmoxOUlHVnhkV0ZzYzBaMWJtTjBhVzl1SUc5d2RHbHZibUZzSUdaMWJtTjBhVzl1SUhWelpXUWdkRzljYmlBcUlHTm9aV05ySUdWeGRXRnNhWFI1SUdKbGRIZGxaVzRnWld4bGJXVnRaVzUwY3lCcGJpQjBhR1VnWVhKeVlYbHpMbHh1SUNvZ1FISmxkSFZ5YmlCN1ltOXZiR1ZoYm4wZ2RISjFaU0JwWmlCMGFHVWdkSGR2SUdGeWNtRjVjeUJoY21VZ1pYRjFZV3hjYmlBcUwxeHVablZ1WTNScGIyNGdaWEYxWVd4ektHRnljbUY1TVN3Z1lYSnlZWGt5TENCbGNYVmhiSE5HZFc1amRHbHZiaWtnZTF4dUlDQWdJSFpoY2lCbGNYVmhiSE1nUFNCbGNYVmhiSE5HZFc1amRHbHZiaUI4ZkNCMWRHbHNMbVJsWm1GMWJIUkZjWFZoYkhNN1hHNGdJQ0FnYVdZZ0tHRnljbUY1TVM1c1pXNW5kR2dnSVQwOUlHRnljbUY1TWk1c1pXNW5kR2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNBZ0lIMWNiaUFnSUNCMllYSWdiR1Z1WjNSb0lEMGdZWEp5WVhreExteGxibWQwYUR0Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUd4bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJR2xtSUNnaFpYRjFZV3h6S0dGeWNtRjVNVnRwWFN3Z1lYSnlZWGt5VzJsZEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh1ZlZ4dVpYaHdiM0owY3k1bGNYVmhiSE1nUFNCbGNYVmhiSE03WEc0dktpcGNiaUFxSUZKbGRIVnlibk1nYzJoaGJHeHZkeUJoSUdOdmNIa2diMllnZEdobElITndaV05wWm1sbFpDQmhjbkpoZVM1Y2JpQXFJRUJ3WVhKaGJTQjdLbjBnWVhKeVlYa2dkR2hsSUdGeWNtRjVJSFJ2SUdOdmNIa3VYRzRnS2lCQWNtVjBkWEp1SUh0QmNuSmhlWDBnWVNCamIzQjVJRzltSUhSb1pTQnpjR1ZqYVdacFpXUWdZWEp5WVhsY2JpQXFMMXh1Wm5WdVkzUnBiMjRnWTI5d2VTaGhjbkpoZVNrZ2UxeHVJQ0FnSUhKbGRIVnliaUJoY25KaGVTNWpiMjVqWVhRb0tUdGNibjFjYm1WNGNHOXlkSE11WTI5d2VTQTlJR052Y0hrN1hHNHZLaXBjYmlBcUlGTjNZWEJ6SUhSb1pTQmxiR1Z0Wlc1MGN5QmhkQ0IwYUdVZ2MzQmxZMmxtYVdWa0lIQnZjMmwwYVc5dWN5QnBiaUIwYUdVZ2MzQmxZMmxtYVdWa0lHRnljbUY1TGx4dUlDb2dRSEJoY21GdElIdEJjbkpoZVgwZ1lYSnlZWGtnVkdobElHRnljbUY1SUdsdUlIZG9hV05vSUhSdklITjNZWEFnWld4bGJXVnVkSE11WEc0Z0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ2FTQjBhR1VnYVc1a1pYZ2diMllnYjI1bElHVnNaVzFsYm5RZ2RHOGdZbVVnYzNkaGNIQmxaQzVjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCcUlIUm9aU0JwYm1SbGVDQnZaaUIwYUdVZ2IzUm9aWElnWld4bGJXVnVkQ0IwYnlCaVpTQnpkMkZ3Y0dWa0xseHVJQ29nUUhKbGRIVnliaUI3WW05dmJHVmhibjBnZEhKMVpTQnBaaUIwYUdVZ1lYSnlZWGtnYVhNZ1pHVm1hVzVsWkNCaGJtUWdkR2hsSUdsdVpHVjRaWE1nWVhKbElIWmhiR2xrTGx4dUlDb3ZYRzVtZFc1amRHbHZiaUJ6ZDJGd0tHRnljbUY1TENCcExDQnFLU0I3WEc0Z0lDQWdhV1lnS0drZ1BDQXdJSHg4SUdrZ1BqMGdZWEp5WVhrdWJHVnVaM1JvSUh4OElHb2dQQ0F3SUh4OElHb2dQajBnWVhKeVlYa3ViR1Z1WjNSb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc0Z0lDQWdkbUZ5SUhSbGJYQWdQU0JoY25KaGVWdHBYVHRjYmlBZ0lDQmhjbkpoZVZ0cFhTQTlJR0Z5Y21GNVcycGRPMXh1SUNBZ0lHRnljbUY1VzJwZElEMGdkR1Z0Y0R0Y2JpQWdJQ0J5WlhSMWNtNGdkSEoxWlR0Y2JuMWNibVY0Y0c5eWRITXVjM2RoY0NBOUlITjNZWEE3WEc1bWRXNWpkR2x2YmlCMGIxTjBjbWx1WnloaGNuSmhlU2tnZTF4dUlDQWdJSEpsZEhWeWJpQW5XeWNnS3lCaGNuSmhlUzUwYjFOMGNtbHVaeWdwSUNzZ0oxMG5PMXh1ZlZ4dVpYaHdiM0owY3k1MGIxTjBjbWx1WnlBOUlIUnZVM1J5YVc1bk8xeHVMeW9xWEc0Z0tpQkZlR1ZqZFhSbGN5QjBhR1VnY0hKdmRtbGtaV1FnWm5WdVkzUnBiMjRnYjI1alpTQm1iM0lnWldGamFDQmxiR1Z0Wlc1MElIQnlaWE5sYm5RZ2FXNGdkR2hwY3lCaGNuSmhlVnh1SUNvZ2MzUmhjblJwYm1jZ1puSnZiU0JwYm1SbGVDQXdJSFJ2SUd4bGJtZDBhQ0F0SURFdVhHNGdLaUJBY0dGeVlXMGdlMEZ5Y21GNWZTQmhjbkpoZVNCVWFHVWdZWEp5WVhrZ2FXNGdkMmhwWTJnZ2RHOGdhWFJsY21GMFpTNWNiaUFxSUVCd1lYSmhiU0I3Wm5WdVkzUnBiMjRvVDJKcVpXTjBLVG9xZlNCallXeHNZbUZqYXlCbWRXNWpkR2x2YmlCMGJ5QmxlR1ZqZFhSbExDQnBkQ0JwYzF4dUlDb2dhVzUyYjJ0bFpDQjNhWFJvSUc5dVpTQmhjbWQxYldWdWREb2dkR2hsSUdWc1pXMWxiblFnZG1Gc2RXVXNJSFJ2SUdKeVpXRnJJSFJvWlNCcGRHVnlZWFJwYjI0Z2VXOTFJR05oYmx4dUlDb2diM0IwYVc5dVlXeHNlU0J5WlhSMWNtNGdabUZzYzJVdVhHNGdLaTljYm1aMWJtTjBhVzl1SUdadmNrVmhZMmdvWVhKeVlYa3NJR05oYkd4aVlXTnJLU0I3WEc0Z0lDQWdabTl5SUNoMllYSWdYMmtnUFNBd0xDQmhjbkpoZVY4eElEMGdZWEp5WVhrN0lGOXBJRHdnWVhKeVlYbGZNUzVzWlc1bmRHZzdJRjlwS3lzcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUdWc1pTQTlJR0Z5Y21GNVh6RmJYMmxkTzF4dUlDQWdJQ0FnSUNCcFppQW9ZMkZzYkdKaFkyc29aV3hsS1NBOVBUMGdabUZzYzJVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnlianRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYm4xY2JtVjRjRzl5ZEhNdVptOXlSV0ZqYUNBOUlHWnZja1ZoWTJnN1hHNHZMeU1nYzI5MWNtTmxUV0Z3Y0dsdVoxVlNURDFoY25KaGVYTXVhbk11YldGd0lpd2lYQ0oxYzJVZ2MzUnlhV04wWENJN1hHNVBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnWENKZlgyVnpUVzlrZFd4bFhDSXNJSHNnZG1Gc2RXVTZJSFJ5ZFdVZ2ZTazdYRzUyWVhJZ1gyaGhjMDkzYmxCeWIzQmxjblI1SUQwZ1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlVHRjYm1WNGNHOXlkSE11YUdGeklEMGdablZ1WTNScGIyNGdLRzlpYWl3Z2NISnZjQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQmZhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2h2WW1vc0lIQnliM0FwTzF4dWZUdGNiaThxS2x4dUlDb2dSR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQjBieUJqYjIxd1lYSmxJR1ZzWlcxbGJuUWdiM0prWlhJdVhHNGdLaUJBWm5WdVkzUnBiMjVjYmlBcUwxeHVablZ1WTNScGIyNGdaR1ZtWVhWc2RFTnZiWEJoY21Vb1lTd2dZaWtnZTF4dUlDQWdJR2xtSUNoaElEd2dZaWtnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTFRFN1hHNGdJQ0FnZlZ4dUlDQWdJR1ZzYzJVZ2FXWWdLR0VnUFQwOUlHSXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJREE3WEc0Z0lDQWdmVnh1SUNBZ0lHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTVR0Y2JpQWdJQ0I5WEc1OVhHNWxlSEJ2Y25SekxtUmxabUYxYkhSRGIyMXdZWEpsSUQwZ1pHVm1ZWFZzZEVOdmJYQmhjbVU3WEc0dktpcGNiaUFxSUVSbFptRjFiSFFnWm5WdVkzUnBiMjRnZEc4Z2RHVnpkQ0JsY1hWaGJHbDBlUzVjYmlBcUlFQm1kVzVqZEdsdmJseHVJQ292WEc1bWRXNWpkR2x2YmlCa1pXWmhkV3gwUlhGMVlXeHpLR0VzSUdJcElIdGNiaUFnSUNCeVpYUjFjbTRnWVNBOVBUMGdZanRjYm4xY2JtVjRjRzl5ZEhNdVpHVm1ZWFZzZEVWeGRXRnNjeUE5SUdSbFptRjFiSFJGY1hWaGJITTdYRzR2S2lwY2JpQXFJRVJsWm1GMWJIUWdablZ1WTNScGIyNGdkRzhnWTI5dWRtVnlkQ0JoYmlCdlltcGxZM1FnZEc4Z1lTQnpkSEpwYm1jdVhHNGdLaUJBWm5WdVkzUnBiMjVjYmlBcUwxeHVablZ1WTNScGIyNGdaR1ZtWVhWc2RGUnZVM1J5YVc1bktHbDBaVzBwSUh0Y2JpQWdJQ0JwWmlBb2FYUmxiU0E5UFQwZ2JuVnNiQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnSjBOUFRFeEZRMVJKVDA1ZlRsVk1UQ2M3WEc0Z0lDQWdmVnh1SUNBZ0lHVnNjMlVnYVdZZ0tHbHpWVzVrWldacGJtVmtLR2wwWlcwcEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW5RMDlNVEVWRFZFbFBUbDlWVGtSRlJrbE9SVVFuTzF4dUlDQWdJSDFjYmlBZ0lDQmxiSE5sSUdsbUlDaHBjMU4wY21sdVp5aHBkR1Z0S1NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0p5UnpKeUFySUdsMFpXMDdYRzRnSUNBZ2ZWeHVJQ0FnSUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdKeVJ2SnlBcklHbDBaVzB1ZEc5VGRISnBibWNvS1R0Y2JpQWdJQ0I5WEc1OVhHNWxlSEJ2Y25SekxtUmxabUYxYkhSVWIxTjBjbWx1WnlBOUlHUmxabUYxYkhSVWIxTjBjbWx1Wnp0Y2JpOHFLbHh1SUNvZ1NtOXBibk1nWVd4c0lIUm9aU0J3Y205d1pYSnBaWE1nYjJZZ2RHaGxJRzlpYW1WamRDQjFjMmx1WnlCMGFHVWdjSEp2ZG1sa1pXUWdhbTlwYmlCemRISnBibWRjYmlBcUwxeHVablZ1WTNScGIyNGdiV0ZyWlZOMGNtbHVaeWhwZEdWdExDQnFiMmx1S1NCN1hHNGdJQ0FnYVdZZ0tHcHZhVzRnUFQwOUlIWnZhV1FnTUNrZ2V5QnFiMmx1SUQwZ0p5d25PeUI5WEc0Z0lDQWdhV1lnS0dsMFpXMGdQVDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQ2REVDB4TVJVTlVTVTlPWDA1VlRFd25PMXh1SUNBZ0lIMWNiaUFnSUNCbGJITmxJR2xtSUNocGMxVnVaR1ZtYVc1bFpDaHBkR1Z0S1NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0owTlBURXhGUTFSSlQwNWZWVTVFUlVaSlRrVkVKenRjYmlBZ0lDQjlYRzRnSUNBZ1pXeHpaU0JwWmlBb2FYTlRkSEpwYm1jb2FYUmxiU2twSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdsMFpXMHVkRzlUZEhKcGJtY29LVHRjYmlBZ0lDQjlYRzRnSUNBZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQjBiM0psZENBOUlDZDdKenRjYmlBZ0lDQWdJQ0FnZG1GeUlHWnBjbk4wSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnWm05eUlDaDJZWElnY0hKdmNDQnBiaUJwZEdWdEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9aWGh3YjNKMGN5NW9ZWE1vYVhSbGJTd2djSEp2Y0NrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWm1seWMzUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptbHljM1FnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSdmNtVjBJRDBnZEc5eVpYUWdLeUJxYjJsdU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBiM0psZENBOUlIUnZjbVYwSUNzZ2NISnZjQ0FySUNjNkp5QXJJR2wwWlcxYmNISnZjRjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJ2Y21WMElDc2dKMzBuTzF4dUlDQWdJSDFjYm4xY2JtVjRjRzl5ZEhNdWJXRnJaVk4wY21sdVp5QTlJRzFoYTJWVGRISnBibWM3WEc0dktpcGNiaUFxSUVOb1pXTnJjeUJwWmlCMGFHVWdaMmwyWlc0Z1lYSm5kVzFsYm5RZ2FYTWdZU0JtZFc1amRHbHZiaTVjYmlBcUlFQm1kVzVqZEdsdmJseHVJQ292WEc1bWRXNWpkR2x2YmlCcGMwWjFibU4wYVc5dUtHWjFibU1wSUh0Y2JpQWdJQ0J5WlhSMWNtNGdLSFI1Y0dWdlppQm1kVzVqS1NBOVBUMGdKMloxYm1OMGFXOXVKenRjYm4xY2JtVjRjRzl5ZEhNdWFYTkdkVzVqZEdsdmJpQTlJR2x6Um5WdVkzUnBiMjQ3WEc0dktpcGNiaUFxSUVOb1pXTnJjeUJwWmlCMGFHVWdaMmwyWlc0Z1lYSm5kVzFsYm5RZ2FYTWdkVzVrWldacGJtVmtMbHh1SUNvZ1FHWjFibU4wYVc5dVhHNGdLaTljYm1aMWJtTjBhVzl1SUdselZXNWtaV1pwYm1Wa0tHOWlhaWtnZTF4dUlDQWdJSEpsZEhWeWJpQW9kSGx3Wlc5bUlHOWlhaWtnUFQwOUlDZDFibVJsWm1sdVpXUW5PMXh1ZlZ4dVpYaHdiM0owY3k1cGMxVnVaR1ZtYVc1bFpDQTlJR2x6Vlc1a1pXWnBibVZrTzF4dUx5b3FYRzRnS2lCRGFHVmphM01nYVdZZ2RHaGxJR2RwZG1WdUlHRnlaM1Z0Wlc1MElHbHpJR0VnYzNSeWFXNW5MbHh1SUNvZ1FHWjFibU4wYVc5dVhHNGdLaTljYm1aMWJtTjBhVzl1SUdselUzUnlhVzVuS0c5aWFpa2dlMXh1SUNBZ0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG5SdlUzUnlhVzVuTG1OaGJHd29iMkpxS1NBOVBUMGdKMXR2WW1wbFkzUWdVM1J5YVc1blhTYzdYRzU5WEc1bGVIQnZjblJ6TG1selUzUnlhVzVuSUQwZ2FYTlRkSEpwYm1jN1hHNHZLaXBjYmlBcUlGSmxkbVZ5YzJWeklHRWdZMjl0Y0dGeVpTQm1kVzVqZEdsdmJpNWNiaUFxSUVCbWRXNWpkR2x2Ymx4dUlDb3ZYRzVtZFc1amRHbHZiaUJ5WlhabGNuTmxRMjl0Y0dGeVpVWjFibU4wYVc5dUtHTnZiWEJoY21WR2RXNWpkR2x2YmlrZ2UxeHVJQ0FnSUdsbUlDaHBjMVZ1WkdWbWFXNWxaQ2hqYjIxd1lYSmxSblZ1WTNScGIyNHBJSHg4SUNGcGMwWjFibU4wYVc5dUtHTnZiWEJoY21WR2RXNWpkR2x2YmlrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHWjFibU4wYVc5dUlDaGhMQ0JpS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1lTQThJR0lwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnTVR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnNjMlVnYVdZZ0tHRWdQVDA5SUdJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z01EdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlBdE1UdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNGdJQ0FnWld4elpTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQm1kVzVqZEdsdmJpQW9aQ3dnZGlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR052YlhCaGNtVkdkVzVqZEdsdmJpaGtMQ0IyS1NBcUlDMHhPMXh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDFjYm4xY2JtVjRjRzl5ZEhNdWNtVjJaWEp6WlVOdmJYQmhjbVZHZFc1amRHbHZiaUE5SUhKbGRtVnljMlZEYjIxd1lYSmxSblZ1WTNScGIyNDdYRzR2S2lwY2JpQXFJRkpsZEhWeWJuTWdZVzRnWlhGMVlXd2dablZ1WTNScGIyNGdaMmwyWlc0Z1lTQmpiMjF3WVhKbElHWjFibU4wYVc5dUxseHVJQ29nUUdaMWJtTjBhVzl1WEc0Z0tpOWNibVoxYm1OMGFXOXVJR052YlhCaGNtVlViMFZ4ZFdGc2N5aGpiMjF3WVhKbFJuVnVZM1JwYjI0cElIdGNiaUFnSUNCeVpYUjFjbTRnWm5WdVkzUnBiMjRnS0dFc0lHSXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR052YlhCaGNtVkdkVzVqZEdsdmJpaGhMQ0JpS1NBOVBUMGdNRHRjYmlBZ0lDQjlPMXh1ZlZ4dVpYaHdiM0owY3k1amIyMXdZWEpsVkc5RmNYVmhiSE1nUFNCamIyMXdZWEpsVkc5RmNYVmhiSE03WEc0dkx5TWdjMjkxY21ObFRXRndjR2x1WjFWU1REMTFkR2xzTG1wekxtMWhjQ0lzSWx3aWRYTmxJSE4wY21samRGd2lPMXh1VDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lGd2lYMTlsYzAxdlpIVnNaVndpTENCN0lIWmhiSFZsT2lCMGNuVmxJSDBwTzF4dUx5OGdRMjl3ZVhKcFoyaDBJREl3TVRNZ1FtRnpZWEpoZENCQmJHa2dVM2xsWkM0Z1FXeHNJRkpwWjJoMGN5QlNaWE5sY25abFpDNWNiaTh2WEc0dkx5Qk1hV05sYm5ObFpDQjFibVJsY2lCTlNWUWdiM0JsYmlCemIzVnlZMlVnYkdsalpXNXpaU0JvZEhSd09pOHZiM0JsYm5OdmRYSmpaUzV2Y21jdmJHbGpaVzV6WlhNdlRVbFVYRzR2TDF4dUx5OGdUM0puYVc1aGJDQnFZWFpoYzJOeWFYQjBJR052WkdVZ2QyRnpJR0o1SUUxaGRYSnBZMmx2SUZOaGJuUnZjMXh1THk5Y2JuWmhjaUJmWVhKeVlYbHpJRDBnY21WeGRXbHlaU2hjSWk0dllYSnlZWGx6WENJcE8xeHVaWGh3YjNKMGN5NWhjbkpoZVhNZ1BTQmZZWEp5WVhsek8xeHVkbUZ5SUVKaFoxOHhJRDBnY21WeGRXbHlaU2hjSWk0dlFtRm5YQ0lwTzF4dVpYaHdiM0owY3k1Q1lXY2dQU0JDWVdkZk1TNWtaV1poZFd4ME8xeHVkbUZ5SUVKVFZISmxaVjh4SUQwZ2NtVnhkV2x5WlNoY0lpNHZRbE5VY21WbFhDSXBPMXh1Wlhod2IzSjBjeTVDVTFSeVpXVWdQU0JDVTFSeVpXVmZNUzVrWldaaGRXeDBPMXh1ZG1GeUlFSlRWSEpsWlV0V1h6RWdQU0J5WlhGMWFYSmxLRndpTGk5Q1UxUnlaV1ZMVmx3aUtUdGNibVY0Y0c5eWRITXVRbE5VY21WbFMxWWdQU0JDVTFSeVpXVkxWbDh4TG1SbFptRjFiSFE3WEc1MllYSWdSR2xqZEdsdmJtRnllVjh4SUQwZ2NtVnhkV2x5WlNoY0lpNHZSR2xqZEdsdmJtRnllVndpS1R0Y2JtVjRjRzl5ZEhNdVJHbGpkR2x2Ym1GeWVTQTlJRVJwWTNScGIyNWhjbmxmTVM1a1pXWmhkV3gwTzF4dWRtRnlJRWhsWVhCZk1TQTlJSEpsY1hWcGNtVW9YQ0l1TDBobFlYQmNJaWs3WEc1bGVIQnZjblJ6TGtobFlYQWdQU0JJWldGd1h6RXVaR1ZtWVhWc2REdGNiblpoY2lCTWFXNXJaV1JFYVdOMGFXOXVZWEo1WHpFZ1BTQnlaWEYxYVhKbEtGd2lMaTlNYVc1clpXUkVhV04wYVc5dVlYSjVYQ0lwTzF4dVpYaHdiM0owY3k1TWFXNXJaV1JFYVdOMGFXOXVZWEo1SUQwZ1RHbHVhMlZrUkdsamRHbHZibUZ5ZVY4eExtUmxabUYxYkhRN1hHNTJZWElnVEdsdWEyVmtUR2x6ZEY4eElEMGdjbVZ4ZFdseVpTaGNJaTR2VEdsdWEyVmtUR2x6ZEZ3aUtUdGNibVY0Y0c5eWRITXVUR2x1YTJWa1RHbHpkQ0E5SUV4cGJtdGxaRXhwYzNSZk1TNWtaV1poZFd4ME8xeHVkbUZ5SUUxMWJIUnBSR2xqZEdsdmJtRnllVjh4SUQwZ2NtVnhkV2x5WlNoY0lpNHZUWFZzZEdsRWFXTjBhVzl1WVhKNVhDSXBPMXh1Wlhod2IzSjBjeTVOZFd4MGFVUnBZM1JwYjI1aGNua2dQU0JOZFd4MGFVUnBZM1JwYjI1aGNubGZNUzVrWldaaGRXeDBPMXh1ZG1GeUlFWmhZM1J2Y25sRWFXTjBhVzl1WVhKNVh6RWdQU0J5WlhGMWFYSmxLRndpTGk5R1lXTjBiM0o1UkdsamRHbHZibUZ5ZVZ3aUtUdGNibVY0Y0c5eWRITXVSbUZqZEc5eWVVUnBZM1JwYjI1aGNua2dQU0JHWVdOMGIzSjVSR2xqZEdsdmJtRnllVjh4TG1SbFptRjFiSFE3WEc1MllYSWdSbUZqZEc5eWVVUnBZM1JwYjI1aGNubGZNaUE5SUhKbGNYVnBjbVVvWENJdUwwWmhZM1J2Y25sRWFXTjBhVzl1WVhKNVhDSXBPMXh1Wlhod2IzSjBjeTVFWldaaGRXeDBSR2xqZEdsdmJtRnllU0E5SUVaaFkzUnZjbmxFYVdOMGFXOXVZWEo1WHpJdVpHVm1ZWFZzZER0Y2JuWmhjaUJSZFdWMVpWOHhJRDBnY21WeGRXbHlaU2hjSWk0dlVYVmxkV1ZjSWlrN1hHNWxlSEJ2Y25SekxsRjFaWFZsSUQwZ1VYVmxkV1ZmTVM1a1pXWmhkV3gwTzF4dWRtRnlJRkJ5YVc5eWFYUjVVWFZsZFdWZk1TQTlJSEpsY1hWcGNtVW9YQ0l1TDFCeWFXOXlhWFI1VVhWbGRXVmNJaWs3WEc1bGVIQnZjblJ6TGxCeWFXOXlhWFI1VVhWbGRXVWdQU0JRY21sdmNtbDBlVkYxWlhWbFh6RXVaR1ZtWVhWc2REdGNiblpoY2lCVFpYUmZNU0E5SUhKbGNYVnBjbVVvWENJdUwxTmxkRndpS1R0Y2JtVjRjRzl5ZEhNdVUyVjBJRDBnVTJWMFh6RXVaR1ZtWVhWc2REdGNiblpoY2lCVGRHRmphMTh4SUQwZ2NtVnhkV2x5WlNoY0lpNHZVM1JoWTJ0Y0lpazdYRzVsZUhCdmNuUnpMbE4wWVdOcklEMGdVM1JoWTJ0Zk1TNWtaV1poZFd4ME8xeHVkbUZ5SUUxMWJIUnBVbTl2ZEZSeVpXVmZNU0E5SUhKbGNYVnBjbVVvWENJdUwwMTFiSFJwVW05dmRGUnlaV1ZjSWlrN1hHNWxlSEJ2Y25SekxrMTFiSFJwVW05dmRGUnlaV1VnUFNCTmRXeDBhVkp2YjNSVWNtVmxYekV1WkdWbVlYVnNkRHRjYm5aaGNpQmZkWFJwYkNBOUlISmxjWFZwY21Vb1hDSXVMM1YwYVd4Y0lpazdYRzVsZUhCdmNuUnpMblYwYVd3Z1BTQmZkWFJwYkR0Y2JpOHZJeUJ6YjNWeVkyVk5ZWEJ3YVc1blZWSk1QV2x1WkdWNExtcHpMbTFoY0NKZGZRPT1cbnJldHVybiByZXF1aXJlKCd0eXBlc2NyaXB0LWNvbGxlY3Rpb25zJyk7XG59KTsiLCJpbXBvcnQge0RpY3Rpb25hcnksIExpbmtlZExpc3QsIFF1ZXVlfSBmcm9tIFwidHlwZXNjcmlwdC1jb2xsZWN0aW9uc1wiO1xyXG5pbXBvcnQge0lEaWN0aW9uYXJ5UGFpcn0gZnJvbSBcInR5cGVzY3JpcHQtY29sbGVjdGlvbnMvZGlzdC9saWIvRGljdGlvbmFyeVwiO1xyXG5pbXBvcnQge2Rlc2N9IGZyb20gXCIuLi9Db21tb24vRGVjb3JhdG9yc1wiO1xyXG5pbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xyXG5cclxuQFJlZmxlY3QubWV0YWRhdGEoJ2RhdGEnLCAndGVzdDEnKVxyXG5leHBvcnQgY2xhc3MgVW5PcmRlck11bHRpTWFwPFQsIEs+XHJcbntcclxuICAgIHByaXZhdGUgX2ZpcnN0OiBBcnJheTxLPjtcclxuICAgIHByaXZhdGUgZGljdGlvbmFyeTogRGljdGlvbmFyeTxULCBBcnJheTxLPj4gPSBuZXcgRGljdGlvbmFyeTxULCBBcnJheTxLPj4oKTtcclxuICAgIC8vIOmHjeeUqGxpc3RcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcXVldWU6IFF1ZXVlPEFycmF5PEs+PiA9IG5ldyBRdWV1ZTxBcnJheTxLPj4oKTtcclxuXHJcbiAgICBwdWJsaWMgR2V0RGljdGlvbmFyeSgpOiBEaWN0aW9uYXJ5PFQsIEFycmF5PEs+PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpY3Rpb25hcnk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEFkZCh0OiBULCBrOiBLKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBfZmlyc3RLZXkgPSBudWxsO1xyXG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5kaWN0aW9uYXJ5LmdldFZhbHVlKHQpO1xyXG4gICAgICAgIGlmIChsaXN0ID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5Db3VudCgpID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9maXJzdEtleSA9IHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGlzdCA9IHRoaXMuRmV0Y2hMaXN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGljdGlvbmFyeS5zZXRWYWx1ZSh0LCBsaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuQ291bnQoKSAhPSAwICYmIGxpc3QubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9maXJzdEtleSA9IHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGlzdC5wdXNoKGspO1xyXG4gICAgICAgIHRoaXMuX2ZpcnN0ID0gdGhpcy5kaWN0aW9uYXJ5LmdldFZhbHVlKF9maXJzdEtleSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBGaXJzdCgpOiBBcnJheTxLPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maXJzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQ291bnQoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGljdGlvbmFyeS5zaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBGZXRjaExpc3QoKTogQXJyYXk8Sz5cclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5xdWV1ZS5zaXplKCkgPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGxpc3QgPSB0aGlzLnF1ZXVlLmRlcXVldWUoKTtcclxuICAgICAgICAgICAgbGlzdC5zcGxpY2UoMCwgbGlzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheTxLPigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIFJlY3ljbGVMaXN0KGxpc3Q6IEFycmF5PEs+KVxyXG4gICAge1xyXG4gICAgICAgIC8vIOmYsuatouaatOa2qFxyXG4gICAgICAgIGlmICh0aGlzLnF1ZXVlLnNpemUoKSA+IDEwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGlzdC5zcGxpY2UoMCwgbGlzdC5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMucXVldWUuZW5xdWV1ZShsaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVtb3ZlQnlUSyh0OiBULCBrOiBLKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5kaWN0aW9uYXJ5LmdldFZhbHVlKHQpO1xyXG4gICAgICAgIGlmIChsaXN0ID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbGlzdC5zcGxpY2UoMCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5SZWN5Y2xlTGlzdChsaXN0KTtcclxuICAgICAgICAgICAgdGhpcy5kaWN0aW9uYXJ5LnJlbW92ZSh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbW92ZUJ5S2V5KHQ6IFQpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLmRpY3Rpb25hcnkuZ2V0VmFsdWUodCk7XHJcbiAgICAgICAgaWYgKGxpc3QgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuUmVjeWNsZUxpc3QobGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBfcmVtb3ZlID0gdGhpcy5kaWN0aW9uYXJ5LnJlbW92ZSh0KTtcclxuICAgICAgICBpZiAoIV9yZW1vdmUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDkuI3ov5Tlm57lhoXpg6jnmoRsaXN0LGNvcHnkuIDku73lh7rmnaVcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJ0XCI+PC9wYXJhbT5cclxuICAgIC8vLyA8cmV0dXJucz48L3JldHVybnM+XHJcbiAgICBwdWJsaWMgR2V0QWxsKHQ6IFQpOiBLW11cclxuICAgIHtcclxuICAgICAgICBsZXQgbGlzdCA9IHRoaXMuZGljdGlvbmFyeS5nZXRWYWx1ZSh0KTtcclxuICAgICAgICBsZXQgbmV3TGlzdCA9IG5ldyBBcnJheTxLPigpO1xyXG4gICAgICAgIGlmIChsaXN0ID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3TGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmV3TGlzdFtpXSA9IGxpc3RbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXdMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vIC8vLyDov5Tlm57lhoXpg6jnmoRsaXN0XHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgLy8vIDxwYXJhbSBuYW1lPVwidFwiPjwvcGFyYW0+XHJcbiAgICAvLy8gPHJldHVybnM+PC9yZXR1cm5zPlxyXG4gICAgLy8gcHVibGljIHRoaXNbdDpUXTpBcnJheTxLPlxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmRpY3Rpb25hcnlcclxuICAgIC8vIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0T25lKHQ6IFQpOiBLXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLmRpY3Rpb25hcnkuZ2V0VmFsdWUodCk7XHJcbiAgICAgICAgaWYgKGxpc3QgIT0gbnVsbCAmJiBsaXN0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbGlzdFswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENvbnRhaW5zKHQ6IFQsIGs6IEspOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLmRpY3Rpb25hcnkuZ2V0VmFsdWUodCk7XHJcbiAgICAgICAgaWYgKGxpc3QgPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxpc3QuaW5jbHVkZXMoayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENvbnRhaW5zS2V5KHQ6IFQpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGljdGlvbmFyeS5jb250YWluc0tleSh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQ2xlYXIoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZGljdGlvbmFyeS5mb3JFYWNoKChrLCB2KSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5SZWN5Y2xlTGlzdCh2KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9maXJzdCA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtEQ0VULCBTeXN0ZW19IGZyb20gJ2NzaGFycCc7XHJcbmltcG9ydCB7JHR5cGVvZn0gZnJvbSAncHVlcnRzJztcclxuaW1wb3J0IHtHYW1lVGVzdH0gZnJvbSBcIi4vdGVzdC9HYW1lVGVzdFwiO1xyXG5cclxuaW50ZXJmYWNlIElTY3JpcHRMYXVuY2hlclxyXG57XHJcbiAgICBPbkpzU3RhcnQoKTtcclxuICAgIE9uSnNVcGRhdGUoKTtcclxuICAgIE9uSnNMYXRlVXBkYXRlKCk7XHJcbiAgICBPbkpzRml4ZWRVcGRhdGUoKTtcclxuICAgIE9uSnNBcHBsaWNhdGlvbkZvY3VzKHBTdGF0ZTogYm9vbGVhbik7XHJcbiAgICBPbkpzQXBwbGljYXRpb25QYXVzZShwU3RhdGU6IGJvb2xlYW4pO1xyXG4gICAgT25Kc0FwcGxpY2F0aW9uUXVpdCgpO1xyXG4gICAgT25Kc0FwcGxpY2F0aW9uUXVpdCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluKGxhbmNoZXI6IElTY3JpcHRMYXVuY2hlcilcclxue1xyXG4gICAgbmV3IEphdmFTY3JpcHRBcHBsaWNhdGlvbihsYW5jaGVyKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxyXG59XHJcblxyXG5jbGFzcyBKYXZhU2NyaXB0QXBwbGljYXRpb25cclxue1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsYW5jaGVyOiBJU2NyaXB0TGF1bmNoZXI7XHJcbiAgICBwcml2YXRlIHN0YXRpYyAkaW5zdDogSmF2YVNjcmlwdEFwcGxpY2F0aW9uO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3QoKTogSmF2YVNjcmlwdEFwcGxpY2F0aW9uXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGluc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobGF1bmNoZXI6IElTY3JpcHRMYXVuY2hlcilcclxuICAgIHtcclxuICAgICAgICBKYXZhU2NyaXB0QXBwbGljYXRpb24uJGluc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubGFuY2hlciA9IGxhdW5jaGVyO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgaW5pdGlhbGl6ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj4+Pj5wdWVydHMgaW5pdGlhbGl6ZSAuLi5cIik7XHJcbiAgICAgICAgICAgIHRoaXMubGFuY2hlci5PbkpzU3RhcnQgPSB0aGlzLk9uU3RhcnQuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5sYW5jaGVyLk9uSnNVcGRhdGUgPSB0aGlzLk9uVXBkYXRlO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmNoZXIuT25Kc0xhdGVVcGRhdGUgPSB0aGlzLk9uTGF0ZVVwZGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5sYW5jaGVyLk9uSnNGaXhlZFVwZGF0ZSA9IHRoaXMuT25GaXhlZFVwZGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5sYW5jaGVyLk9uSnNBcHBsaWNhdGlvbkZvY3VzID0gdGhpcy5PbkFwcGxpY2F0aW9uRm9jdXM7XHJcbiAgICAgICAgICAgIHRoaXMubGFuY2hlci5PbkpzQXBwbGljYXRpb25QYXVzZSA9IHRoaXMuT25BcHBsaWNhdGlvblBhdXNlO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmNoZXIuT25Kc0FwcGxpY2F0aW9uUXVpdCA9IHRoaXMuT25BcHBsaWNhdGlvblF1aXQ7XHJcbiAgICAgICAgfSBjYXRjaCAoZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCI+Pj4+cHVlcnRzIGluaXRpYWxpemUgZmluaXNoLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgT25TdGFydCgpXHJcbiAgICB7XHJcbiAgICAgICAgR2FtZVRlc3Quc3RhcnQoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiPj4+T25TdGFydD4xXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgT25VcGRhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIFdlYkFQSS50aWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBPbkxhdGVVcGRhdGUoKVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgT25GaXhlZFVwZGF0ZSgpXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBPbkFwcGxpY2F0aW9uRm9jdXMocFN0YXRlOiBib29sZWFuKVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgT25BcHBsaWNhdGlvblBhdXNlKHBTdGF0ZTogYm9vbGVhbilcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIE9uQXBwbGljYXRpb25RdWl0KClcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIj4+Pj5PbkFwcGxpY2F0aW9uUXVpdFwiKTtcclxuICAgICAgICBXZWJBUEkuZmluYWxpemUoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyB0ZXN0VGltZXIgfSBmcm9tICcuL3Rlc3RzL3RpbWVyJztcclxuaW1wb3J0IHsgdGVzdFdlYmFwaU1pc2MgfSBmcm9tICcuL3Rlc3RzL21pc2MnO1xyXG5pbXBvcnQgeyB0ZXN0U3RvcmFnZSB9IGZyb20gJy4vdGVzdHMvc3RvcmFnZSc7XHJcbmltcG9ydCB7IHRlc3RYSFIgfSBmcm9tICcuL3Rlc3RzL3hocic7XHJcbmltcG9ydCBVbml0VGVzdCBmcm9tICcuL1VuaXRUZXN0JztcclxuaW1wb3J0IHsgRENFVCB9IGZyb20gJ2NzaGFycCc7XHJcbmltcG9ydCB7VGVzdEpzQ29tcG9uZW50fSBmcm9tIFwiLi4vRnJhbWV3b3JrL0VudGl0eS9UZXN0SnNDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgJHR5cGVvZiB9IGZyb20gJ3B1ZXJ0cyc7XHJcbmltcG9ydCB7VW5PcmRlck11bHRpTWFwfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0dlbmVyaWMvVW5PcmRlck11bHRpTWFwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZVRlc3Qge1xyXG5cdHN0YXRpYyBzdGFydCgpIHtcclxuXHRcdC8vIGNvbnN0IG1ldGFkYXRhID0gUmVmbGVjdC5nZXRNZXRhZGF0YSgnZGF0YScsIFVuT3JkZXJNdWx0aU1hcCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhtZXRhZGF0YSk7XHJcblx0XHRsZXQgYSA9IG5ldyBVbk9yZGVyTXVsdGlNYXA8bnVtYmVyLCBudW1iZXI+KClcclxuXHRcdGEuQWRkKDEsIDEpO1xyXG5cdFx0Y29uc29sZS5sb2coXCI+Pj4+XCIrYS5GaXJzdCgpKVxyXG5cdFx0Y29uc29sZS5sb2coXCI+Pj4+XCIrYS5HZXRPbmUoMSkpXHJcblx0XHQvLyB0ZXN0U3RvcmFnZSgpO1xyXG5cdFx0Ly8gLy8gdGVzdFdlYmFwaU1pc2MoKSxcclxuXHRcdC8vIHRlc3RUaW1lcigpO1xyXG5cdFx0Ly8gdGVzdFhIUigpO1xyXG5cdFx0Ly8gVW5pdFRlc3QucnVuKCk7XHJcblx0XHQvLyB2YXIgdmFyaWFibGUgPSBEQ0VULkVudGl0eUZhY3RvcnkuQ3JlYXRlKERDRVQuR2FtZS5FbnZpcm9ubWVudCwgJHR5cGVvZihUZXN0SnNDb21wbmVudCkpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCIuLi4uXCIrdmFyaWFibGUpXHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=