const { rejects } = require('assert');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});


//membuat folder data jika blom ada
tempatFolder = './data'
if(!fs.existsSync(tempatFolder)){
    fs.mkdirSync(tempatFolder);
}

//membuat file json jika blom ada
tempatFile = './data/contacts.json'
if(!fs.existsSync(tempatFile)){
    fs.writeFileSync(tempatFile, '[]', 'utf-8')
}



//input
const Npertanyaan= (pertanyaan) => {
    return new Promise((resolve, rejects) => {
        rl.question(pertanyaan, (Nama) => {
            resolve(Nama);
        })
    })
}


const simpan_contacts = (Nama, NoTLP, Email) =>{
        const isi = {
        Nama : Nama,
        NoTelepon : NoTLP,
        Email : Email,  
    }

    const lihat_file = fs.readFileSync('data/contacts.json');//baca data json simpan di variable lihat-Data
    const file = JSON.parse(lihat_file)//awal data json itu berbentuk teks, kita ubah menjadi object
    file.push(isi)//menambahkan data (isi dari variable "isi") ke dalam varibel file (yang di dalam nya sudah ada json yang berbentuk objek)


    fs.writeFileSync('data/contacts.json', JSON.stringify(file))//menulis data dari inputan
    rl.close()

    console.log('data berhasil di simpan')

}

module.exports = {Npertanyaan, simpan_contacts};