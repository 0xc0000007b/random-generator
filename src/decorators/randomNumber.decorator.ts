import {Generator} from "@classes";

export function RandomNumber (target: any, propertyKey: any, descriptor: PropertyDescriptor) {
    const  origMethod = descriptor.value;
    descriptor.value = function (min: number, max: number) {
        const randomNumber = Generator.generateRandomNumber(min, max);
        return origMethod.apply(this, arguments) + randomNumber
    }
    return descriptor;
}