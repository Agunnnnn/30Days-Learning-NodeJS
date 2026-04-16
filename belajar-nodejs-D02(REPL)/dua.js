function CetakNama(nama) {
    return `Hallo, Nama Saya ${nama}`;
}//eskport function

const PI = 3.14;//eskport variable

const Mahasiswa = {
    Nama : 'Agun',
    Umur : '20',
    Nim : '241011400443',
    Jurusan : 'Teknik Informatika',
    cetakMhs () {
        return `Hallo Nama Saya ${this.Nama}, dengan nim ${this.Nim},
        saya berumur ${this.Umur} tahun, dan saya jurusan ${this.Jurusan}`;
    },
}//eskport object


class Orang {
    constructor (){
        console.log('Objek Orang Telah Di Buat')
    }
}//eskport class


//CARA 1
// module.exports.CetakNama = CetakNama;
// module.exports.PI = PI;
// module.exports.Mahasiswa = Mahasiswa;
// module.exports.Orang = Orang;


// CARA 2
// module.exports = {
//     CetakNama : CetakNama,
//     PI : PI,
//     Mahasiswa : Mahasiswa,
//     Orang : Orang

// }


// CARA 3
module.exports = {CetakNama, PI, Mahasiswa, Orang};