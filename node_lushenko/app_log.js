let fs = require('fs');
let format = require('node.date-time');

function logTime() {
    return new Date().format("d-MM-Y H:MM:SS:ms");
}

console.log(logTime());

fs.appendFile('readme.log', logTime() + " message\n", err => {
    if (err) throw err;
});
fs.appendFile('readme.log', logTime() + " message\n", err => {
    if (err) throw err;
});
fs.appendFile('readme.log', logTime() + " message\n", err => {
    if (err) throw err;
});
fs.appendFile('readme.log', logTime() + " message\n", err => {
    if (err) throw err;
});