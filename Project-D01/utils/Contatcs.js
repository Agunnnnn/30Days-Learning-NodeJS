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
module.exports = { BacaData, detail };
