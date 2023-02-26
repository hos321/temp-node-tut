const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const firstFile = readFileSync("./content/first.txt", "utf8");
const secundFile = readFileSync("./content/secound.txt", "utf8");
console.log(firstFile, secundFile);

writeFileSync(
  "./content/result.txt",
  `Here is result :${firstFile},${secundFile}`,
  { flag: "a" }
);
console.log("done with this task");
console.log("starting the next one");
