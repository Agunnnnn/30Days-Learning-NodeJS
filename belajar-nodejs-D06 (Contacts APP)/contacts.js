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

//baca data
const loadData = () => {
    const lihat_file = fs.readFileSync('data/contacts.json');//baca data json simpan di variable lihat-Data
    const file = JSON.parse(lihat_file);//awal data json itu berbentuk teks, kita ubah menjadi object
    return file;
}


//simpan data
const simpan_contacts = (Nama, NoTLP, Email) =>{
        const isi = {
        Nama : Nama,
        NoTelepon : NoTLP,
        Email : Email,  
    }
    // const lihat_file = fs.readFileSync('data/contacts.json');//baca data json simpan di variable lihat-Data
    // const file = JSON.parse(lihat_file)//awal data json itu berbentuk teks, kita ubah menjadi object
    const file = loadData();

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
//list kontak
    const listContact = ()=> {
        console.log("Daftar Nama Kontak :")
        const file = loadData();
        file.forEach((isi,i)=>{
            console.log(`${i + 1}. ${isi.Nama} - ${isi.NoTelepon}`)
        })
    }

    const DetailContact= (Nama) =>{
        const file = loadData();

    const data = file.find((data) => data.Nama.toLowerCase() === Nama.toLowerCase()
    );
    if(!data) {
        console.log(` ${Nama} Tidak Di Temukan~`);
        return false;
    }
    console.log(data.Nama);
    console.log(data.Email);
    console.log(data.NoTelepon);
};

//Delete Contacts
const DeleteContact = (Nama) => {
    const data= loadData();
    const NewContacts= data.filter((data) => data.Nama.toLowerCase() !== Nama.toLowerCase());
        if(data.length == NewContacts.length ){
        console.log(`${Nama} Tidak Di Temukan`);
        return false;
    }
    fs.writeFileSync('data/contacts.json', JSON.stringify(NewContacts))
    console.log(`${Nama} Berhasil Di Apus`);


};


module.exports = { simpan_contacts, listContact, DetailContact, DeleteContact};