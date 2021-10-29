const str = 'string'
const nul = null

let tsStr: string = 'asd';

function sumJs(arr) {
    return arr.reduce((a, y) => a + y);
}

function sumTS(arr: number[]) {
    return arr.reduce((a, v) => a + v)
}

const tsNumber = 2;
const tsString = '23'

const result = tsString + tsNumber;
const resultTwo = parseInt(tsString) - tsNumber;

// Union Type

const strOrNumber: string | number = '2';

// Type Alias
type StrOrNumber = string | number;

const strOrNumber2: StrOrNumber = '2';

type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol;
type StrangeTsTypes = any | unknown | never;

// Array
const tsArray: number[] = [1, 2, 3];
const tsArrayGeneric: Array<number> = []

const unionArray: (string | number)[] = [1, 2, '2'];
const unionArray2: Array<string | number> = [1, 2, '3'];

// Tuple
const myTuple: [number, string] = [1, '2'];

// Object
const myObj: { a: number, b: string } = { a: 1, b: '2' }

interface myFirstInterface {
    readonly a: number,
    b: string,
    c?: number[]
}

const myObj2: myFirstInterface = {
    a: 2,
    b: '12',
    c: [1]
}

const value = myObj2.a

const ApiAnswer: IndexInterface = { key: 'asd', key1: '222' }

interface IndexInterface {
    [n: string]: string
}

// Function

enum Methods {
    add = 0,
    sub = 1
}

function calculate(method: Methods, left: number, right: number): number {
    switch (method) {
        case Methods.add: return left + right;
        case Methods.sub: return left - right;
    }
}

const sum = calculate(Methods.sub, 2, 2)

const ArrowFn: FnInterface = (value) => 2;

type TypeFn = () => number;

interface FnInterface {
    (a: number): void
}

