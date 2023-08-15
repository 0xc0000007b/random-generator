"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomColor = void 0;
var _classes_1 = require("@classes");
function RandomColor(target, propertyKey, descriptor) {
    var origMethod = descriptor.value;
    descriptor.value = function (min, max) {
        var randomColor = _classes_1.Generator.generateRandomNColor(min, max);
        return origMethod.apply(this, arguments) + randomColor;
    };
    return descriptor;
}
exports.RandomColor = RandomColor;
