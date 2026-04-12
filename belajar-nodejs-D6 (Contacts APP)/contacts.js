const { rejects } = require('assert');
const fs = require('fs');
const validator = require('validator')


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




const simpan_contacts = (Nama, NoTLP, Email) =>{
        const isi = {
        Nama : Nama,
        NoTelepon : NoTLP,
        Email : Email,  
    }

    const lihat_file = fs.readFileSync('data/contacts.json');//baca data json simpan di variable lihat-Data
    const file = JSON.parse(lihat_file)//awal data json itu berbentuk teks, kita ubah menjadi object
    //cek data duplikat
    const duplikat= file.find((isi) => isi.Nama === Nama)
    if(duplikat){
        console.log("Contacts Sudah Terdaftar");
        return false;
    }

    //cek email
    if(Email) {
        if(!validator.isEmail(Email)){
            console.log("Email tidak valid")
            return false;
        }
    }

    //cek no tlp
    if(!validator.isMobilePhone(NoTLP, 'id-ID')){
        console.log("Nomor HP Tidak Valid!");
        return false;
    }


    file.push(isi)//menambahkan data (isi dari variable "isi") ke dalam varibel file (yang di dalam nya sudah ada json yang berbentuk objek)
    fs.writeFileSync('data/contacts.json', JSON.stringify(file))//menulis data dari inputan

    console.log('data berhasil di simpan')

}

module.exports = { simpan_contacts};