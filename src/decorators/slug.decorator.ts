import {Generator} from "@classes";

export function Slug (target: any, propertyKey: any, descriptor: PropertyDescriptor) {
    const  origMethod = descriptor.value;
    descriptor.value = function (text: string, separator: string) {
        const randomNumber = Generator.generateSlug(text, separator);
        return origMethod.apply(this, arguments) + randomNumber
    }
    return descriptor;
}