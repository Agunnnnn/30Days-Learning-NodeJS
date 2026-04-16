const fs = require('fs');
const readLine = require('readline');

const rl = readLine.createInterface({
    input : process.stdin,
    output : process.stdout,
})


console.log ("Data Absen Harian");

rl.question('Masukan Nama Anda : ', (Nama) => {
    rl.question('Masukan NIM Anda : ', (NIM) => {
        rl.question('Masukan Hari : ', (Hari) => {
            const data = {
                nama : Nama,
                NIM : NIM,
                Hari : Hari,
            }
            const Upload_Data = fs.readFileSync('data/Absen.json', 'utf-8');
            const Upload = JSON.parse(Upload_Data);
            Upload.push(data);
            fs.writeFileSync('data/Absen.json', JSON.stringify(Upload));

            console.log('Data Berhasil Di Simpan');
            rl.close();
            

        })
    })
})