// console.log("da");

var x = 10;

function func() {
    console.log("variable x = " + x);
}

// global.num = x;
// global.foo = func;

// exports.x = x;
// exports.foo = func;

// module.exports = x;

// this.num = x;

module.exports = {
    num : x,
    func : func
}