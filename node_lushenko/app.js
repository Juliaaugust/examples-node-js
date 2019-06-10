let fs = require("fs");

// fs.readFile("t2.json", (err, data) => {
//     if (err) throw err;
//     let obj = data.toString()
//     obj = JSON.parse(obj, (k, v) => {
//         console.log(k)
//         return v;
//     });
//     console.log(obj);
//     console.log(typeof(obj));
// })

let arr;

fs.readFile("poem.txt", (err, data) => {
    if(err) throw err;
    text = data.toString();
    arr = text.split("\n");
    console.log(arr.length);
    // arr = arr.split("\n");
    // for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i].trim());
    // }
})
console.log("1: " + arr);

arr = fs.readFileSync("poem.txt", (err, data) => {
    if(err) throw err;
});
arr = arr.toString();

console.log("2: " + arr);
