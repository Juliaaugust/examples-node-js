let fs = require('fs');

// fs.mkdir("test2", e => {
//     if (e && e.code === "EEXIST") {
//         console.log("Error! Folder exist!");
//     } else {
//         console.log("Folder create");
//     }
// })

// fs.rmdir("test1", e => {
//     if (e) console.log(e);
//     else console.log("Successfully deleted!");
// })

fs.readdir('./test1', (err, files) => {
    console.log(files);
    files.forEach(fl => {
        console.log(fl);
    })
})