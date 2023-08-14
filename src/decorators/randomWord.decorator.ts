import {Generator} from "@classes";

export function RandomWord (target: any, propertyKey: any, descriptor: PropertyDescriptor) {
    const  origMethod = descriptor.value;
    descriptor.value = function (lang: string, length: number) {
        const randomNumber = Generator.generateRandomString(lang, length);
        return origMethod.apply(this, arguments) + randomNumber
    }
    return descriptor;
}