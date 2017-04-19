export default class hello {
    private options: object = {}

    constructor(title: string) {
        this.init(title)
    }

    init(title) {
        console.log(title)
    }
}

new hello("hello world")