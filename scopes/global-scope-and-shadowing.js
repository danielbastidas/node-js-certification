function foo() {
    var bar
    quux = 1
    function zip() {
        var quux = 2
        console.log(`inner = ${quux} outer = ${this.quux}`)
    }
    zip()
}

foo()