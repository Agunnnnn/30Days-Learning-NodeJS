console.log("Hello World")

const nama = "Agun";
// const cetakNama = (nama) => {
//     return `hai namaku adalah ${nama}`
// }
// require(`./nyoba.js`)//menggabungkan file nyoba.js dengan index.js
const CetakNama = require(`./nyoba.js`)//menggabungkan file nyoba.js dengan index.js

// console.log(cetakNama (nama));

console.log(CetakNama("Agun"));
