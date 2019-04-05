const fs = require("fs");

let fileName = "sampleTextFile.txt";

let data = fs.readFileSync(fileName, "utf8");

let exploded = data.split("\n");

console.log("The file " + fileName + " has a total of " + exploded.length + " lines");

