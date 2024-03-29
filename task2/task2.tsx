import React from 'react'
// 1 
type TConcat = (a: string, b: string) => string

const conc: TConcat = (a, b) => a.concat(b)

conc('Hello ', 'World')

// 2
type ArrT = (number | string)[]

interface IHomeTask {
    howIDoIt: string
    simeArray: ArrT
    withData: Array<{ [n: string]: string | ArrT }>
}

const MyHomeTask: IHomeTask = {
    howIDoIt: 'I Do It Wel',
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

// 3
const myArray: MyArray<number> = [1, 2, 3];

interface MyArray<T> {
    [N: number]: T
    reduce<U>(fn: (accumulator: T, value: T) => U): U
}


// 4
interface IHome {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

type MyPartial<T> = {
    [n in keyof T]?: T[n] extends object ? MyPartial<T[n]> : T[n]
}

const homeTask: MyPartial<IHome> = {
    externalData: {
        value: 'win'
    }
}

// 5
function HomeComponent(props: { firstProp: string, lol: number }) {
    return (
        <div>
            {props.firstProp}
        </div>
    )
}

type RCArgsType<T> = T extends (...args: infer U) => any ? U : never;
type OnlyPropsType<T> = RCArgsType<T>[0] extends {[key: string]: infer  U} ? U : never;

type TMyType = OnlyPropsType<typeof HomeComponent>
