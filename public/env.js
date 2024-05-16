// index.js
require("@dotenvx/dotenvx").config();

console.log(`Hello ${process.env.HELLO}`);
