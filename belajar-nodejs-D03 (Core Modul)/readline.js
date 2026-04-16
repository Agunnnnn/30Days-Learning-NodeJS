// readline

const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukan Nama Anda : ', (nama) => {
    rl.question('Masukan Nomor Telepon Anda :', (NoTlp) => {
        console.log(`hai ${nama}`);
        console.log(`Nomor Telepon Anda ${NoTlp}`);
        rl.close();
    })
});