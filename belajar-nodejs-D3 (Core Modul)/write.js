// core module


//file system
const fs = require('fs');


//menuliskan string ke file secara syncronus
fs.writeFileSync('test.text', 'Hello world dengan Node JS');


// //menulis string ke file secara asyncronus
fs.writeFile('data/tes2.text', 'Helloworld Dengan Nod JS Asyncronus',(err) =>{
    console.log(err);//asyncrons bisa melanjutkan codingan baris lain sambil menunggu proses penulisan file selesai

})

