// Generics
const myArray: MyArray<number> = [1,2,3];

interface MyArray <T> {
    [N: number]: T

    map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>
}

let variable = myArray[1]

function identity<T>(arg:T): T {
    return arg
}

let result = identity(12);

function getLen<T extends Array<any>>(arr: T): number {
    return arr.length
}
getLen([1,2,3])

interface IValueWithType<T> {
    type: string;
    value: T
}

function withType<U>(arg: U): IValueWithType<U> {
    return {
        type: typeof arg,
        value: arg
    }
}
const result2 = withType(123)

// Встроенные generics

interface IExample<T> {
    type: string
    value: T
    isEmpty: boolean
}

const omittedObject: Omit<IExample<string>, 'isEmpty' | 'value'> = {
    type: '123'
}

const picked: Pick<IExample<number>, 'isEmpty' | 'value'> = {
    isEmpty: true,
    value: 1,
}

const partial: Partial<IExample<object>> = {}

