const _ = require("lodash");
const fs = require("fs");

//fs.readFile();
//fs.readFileSync();

//fs.writeFile();
//fs.writeFileSync();

let contents = fs.readFileSync('sample.txt', 'utf8');
let dataToWrite = contents + "\nI was added to the previous text";

fs.writeFileSync('sample.txt', dataToWrite, 'utf8');

fs.writeFileSync("../outside.txt", "Hello World", "utf8");





