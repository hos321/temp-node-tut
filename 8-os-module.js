const os = require("os");
const user = os.userInfo();
console.log(user);
console.log(` The System uptime is : ${os.uptime()} second`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
