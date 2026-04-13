const fs = require('fs');

//buat folder
Folder = './data'
if(!fs.existsSync(Folder)){
    fs.mkdirSync(Folder);
}

//buat file
File = './data/Pesanan.json'
if(!fs.existsSync(File)){
    fs.writeFileSync(File, '[]', 'utf-8');
}

//baca data
const Baca_Data = () => {
    const lihat_file = fs.readFileSync('./data/Pesanan.json')
    const baca = JSON.parse(lihat_file);
    return baca;
}



const buatPesanan = (Nama, Pesanan, Qty, Email) => {
    const dataPesanan ={
        NamaCust : Nama,
        PesananCust : Pesanan,
        QtyPesanan : Qty,
        EmailCust : Email
    }
    const save = Baca_Data();
    save.push(dataPesanan);

    fs.writeFileSync('./data/Pesanan.json', JSON.stringify(save));

    console.log("Pesanan Sudah Di Buat Terimakasih!")
}

//cancel pesanan
const DeleteData = (Nama) => {
    const save = Baca_Data();
    const NewData = save.filter((save) => save.NamaCust.toLowerCase() !== Nama.toLowerCase());
    if(save.length == NewData.length){
        console.log(`${Nama} Tidak Di Temukan`);
        return false;
    }
    fs.writeFileSync('./data/Pesanan.json', JSON.stringify(NewData));
    console.log(`${Nama} Berhasil Di Hapus`);
}
module.exports = {buatPesanan, DeleteData}


