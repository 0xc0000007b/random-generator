"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNumber = void 0;
var _classes_1 = require("@classes");
function RandomNumber(target, propertyKey, descriptor) {
    var origMethod = descriptor.value;
    descriptor.value = function (min, max) {
        var randomNumber = _classes_1.Generator.generateRandomNumber(min, max);
        return origMethod.apply(this, arguments) + randomNumber;
    };
    return descriptor;
}
exports.RandomNumber = RandomNumber;
