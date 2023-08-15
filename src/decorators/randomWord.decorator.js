"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomWord = void 0;
var _classes_1 = require("@classes");
function RandomWord(target, propertyKey, descriptor) {
    var origMethod = descriptor.value;
    descriptor.value = function (lang, length) {
        var randomNumber = _classes_1.Generator.generateRandomString(lang, length);
        return origMethod.apply(this, arguments) + randomNumber;
    };
    return descriptor;
}
exports.RandomWord = RandomWord;
