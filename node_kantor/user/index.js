var ru = require('./ru')

function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
    console.log(ru.Hello + ", " + who.name);
}

// exports.MyUser = User;

module.exports = {
    MyUser: User
}