const yargs = require('yargs');
const Pesan = require('./pesanan.js')

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
        Pesan.buatPesanan(argv.Nama, argv.Pesanan, argv.Qty, argv.Email)
    }
})

yargs.parse()