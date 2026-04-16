const fs = require('fs');
const readLine = require('readline');


const rl = readLine.createInterface({
    input : process.stdin,
    output:  process.stdout,
})

console.log("HALLO SELAMAT DATANG ! INGINN PESAN APA?")

rl.question("Nama Customer : ", (Nm_Customer) => {
    rl.question("Pesanan Customer : ", (Pn_Customer) => {
        const Pesanan = {
            nama : Nm_Customer,
            pesana : Pn_Customer,
        }
        const upload_data = fs.readFileSync('data/pesan.json', 'utf-8');
        const upload = JSON.parse(upload_data);
        upload.push(Pesanan);
        fs.writeFileSync('data/pesan.json', JSON.stringify(upload));

        console.log("data berhasil di simpan !")

        rl.close();
    })
})