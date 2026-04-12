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


const buatPesanan = (Nama, Pesanan, Qty, Email) => {
    const dataPesanan ={
        NamaCust : Nama,
        PesananCust : Pesanan,
        QtyPesanan : Qty,
        EmailCust : Email
    }


    const lihat_file = fs.readFileSync('./data/Pesanan.json');
    const file = JSON.parse(lihat_file);
    file.push(dataPesanan);
    fs.writeFileSync('./data/Pesanan.json', JSON.stringify(file));

    console.log("Pesanan Sudah Di Buat Terimakasih!")
}

module.exports = {buatPesanan}


