const { readFile, writeFile } = require("fs");

console.log("Starting...");

readFile("./content/first.txt", "utf8", (err, firstContent) => {
  if (err) {
    console.error(err);
    return;
  }

  readFile("./content/secound.txt", "utf8", (err, secondContent) => {
    if (err) {
      console.error(err);
      return;
    }

    const contentToWrite = `Here is the result: ${firstContent},${secondContent}`;

    writeFile("./content/async.txt", contentToWrite, (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log("Task completed.");
      console.log("Starting the next task...");
    });
  });
});
