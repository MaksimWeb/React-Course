class Constructor {
    public field: number = 123;

    constructor(arg: number) {
        this.field = arg
    }

    public publicMethod() {
        return this.field;
    }

    protected protectedMethod() {
        return this.field + 10;
    }

    private privateMethod() {
        return this.field + 30;
    }
}

const instance = new Constructor(123)

class Child extends Constructor {
    public childMethod() {
        this.protectedMethod
    }

    protected protectedMethod(): number {
        return super.protectedMethod()
    }
}

abstract class AbstractClass {
    public abstract abstractField: number;

    public abstract abstractMethod(): number;

    protected protectedMethod() {
        return this.abstractField;
    }
}

interface MyInterface {
    field: string;
    method(): string;
}

class NewClass implements MyInterface {
    public field: string = '123';

    public method (): string {
        return '';
    }
}