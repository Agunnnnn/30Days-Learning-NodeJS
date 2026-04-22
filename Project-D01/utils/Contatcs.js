const fs = require("fs");

//Fungsi Buat FOlder Jika Tidak ada
const BuatFolder = "./data";
if (!fs.existsSync(BuatFolder)) {
    fs.mkdirSync(BuatFolder);
}

//fungsi bikin file
const Buatfile = "./data/Contatcs.json";
if (!fs.existsSync(Buatfile)) {
    fs.writeFileSync(Buatfile, "[]", "utf-8");
}

//fungsi baca data
const BacaData = () => {
    const BacaFile = fs.readFileSync("./data/Contatcs.json", "utf-8");
    const file = JSON.parse(BacaFile);
    return file;
};

// fungsi detail
const detail = (nama) => {
    const file = BacaData();
    const data = file.find(
        (data) => data.nama.toLowerCase() === nama.toLowerCase(),
    );
    return data;
};

// fungsi menulis / menimpa file contat.json dengan data yang baru
const saveData = (DataBaru) => {
    fs.writeFileSync("data/Contatcs.json", JSON.stringify(DataBaru));
};

//fungsi menambahkan data contact baru
const TambahKontak = (Data) => {
    const lihatData = BacaData();
    lihatData.push(Data);
    saveData(lihatData);
};

// cek email duplikat
const cekDuplikat = (email) => {
    const lihatData = BacaData();
    return lihatData.find((data) => data.email === email);
};

// fungsi hapus
const deleteData = (nama) => {
    const data = BacaData();
    const pilihData = data.filter((data) => data.nama !== nama);
    saveData(pilihData);
};

// fungsi ubah data
const updateData = (kontakBaru) => {
    const daftarKontak = BacaData();
    // hilangkan kontak lama yang namanya sama dengan oldnama
    const filterKontak = daftarKontak.filter(
        (data) => data.nama !== kontakBaru.oldnama,
    );
    delete kontakBaru.oldnama;
    filterKontak.push(kontakBaru);
    saveData(filterKontak);
};

module.exports = {
    BacaData,
    detail,
    TambahKontak,
    cekDuplikat,
    deleteData,
    updateData,
};
