import {Generator} from "@classes";

export function RandomColor (target: any, propertyKey: any, descriptor: PropertyDescriptor) {
    const  origMethod = descriptor.value;
    descriptor.value = function (min: number, max: number) {
        const randomColor = Generator.generateRandomNColor(min, max);
        return origMethod.apply(this, arguments) + randomColor
    }
    return descriptor;
}