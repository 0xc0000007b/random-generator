"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slug = void 0;
var _classes_1 = require("@classes");
function Slug(target, propertyKey, descriptor) {
    var origMethod = descriptor.value;
    descriptor.value = function (text, separator) {
        var randomNumber = _classes_1.Generator.generateSlug(text, separator);
        return origMethod.apply(this, arguments) + randomNumber;
    };
    return descriptor;
}
exports.Slug = Slug;
