const yargs = require('yargs');
const fungsi = require('./pesanan.js')


//Tambah Data
yargs.command ({
    command : 'Tambah',
    describe : 'Menambahkan Data Baru',
    builder : {
        Nama : {
            describe : 'Nama Lengkaps',
            demandOption : true,
            type: 'string',
        },
        Pesanan : {
            describe : 'Pesanan Yang Di Pilih',
            demandOption : true,
            type : 'string',
        },
        Qty : {
            describe : 'Qty Dari Pesanan Yang Dipilih',
            demandOption : true,
            type : 'string',
        },
        Email : {
            describe : 'Email Dari User',
            demandOption : true,
            type : 'string',
        },
    },
    handler (argv){
        fungsi.buatPesanan(argv.Nama, argv.Pesanan, argv.Qty, argv.Email)
    }
}).demandCommand();


//Delete Data
yargs.command({
    command:"Cancel",
    describe : "Menghapus Data Yang Sudah Ada",
    builder :{
        Nama : {
            describe : "Nama Yang Akan Di Hapus",
            demandOption : true,
            type : 'string',
        },
    },
    handler(argv){
        fungsi.DeleteData(argv.Nama);
    }
})

yargs.parse()