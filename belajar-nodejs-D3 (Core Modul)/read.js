const fs = require('fs');


//membaca data secara syncronus
console.log(fs.readFileSync('data/tes2.text')) //cara membaca file 1

const baca = fs.readFileSync('data/tes2.text') //cara membaca file 2
console.log(baca);//outputnya berupa buffer bukan string

const baca2= fs.readFileSync('data/tes2.text',) //cara membaca file 2
console.log(baca.toString());//outputnya berupa string

const baca3= fs.readFileSync('data/tes2.text', 'utf-8') //cara membaca file 3
console.log(baca3);//outputnya berupa string

// membaca data secara asyncronus
fs.readFile('data/test.text', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});