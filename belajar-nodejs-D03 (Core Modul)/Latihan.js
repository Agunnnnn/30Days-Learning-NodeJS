//Masukan Input ke dalam Readline
//Write ke dalam json

const fs = require('fs');
const readLine = require('readline');

const rl = readLine.createInterface({
    input : process.stdin,
    output : process.stdout,
})

rl.question('Masukan Nama Anda : ', (Nama) => {
    rl.question('Masukan Nomor Telepon Anda : ', (NoTlp) => {
        const Contacs = {
            Nama: Nama,
            NoHP : NoTlp,
        };

        const isi_file = fs.readFileSync('data/Contacts.json', 'utf-8');
        const Contac = JSON.parse(isi_file);
        Contac.push(Contacs);

        fs.writeFileSync('data/Contacts.json', JSON.stringify(Contac));


        console.log('Data Berhasil Di Simpan')
        rl.close();
    })
})




