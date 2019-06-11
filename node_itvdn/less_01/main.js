function User(name) {
    this.name = name;
    this.sayHello = function() {
        console.log("Hello, " + this.name);
    }
}

var jhon = new User("Jhon");

console.log(jhon.name);
jhon.sayHello();