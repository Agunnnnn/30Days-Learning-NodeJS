const { type } = require('node:os');
const yargs= require('yargs')//YARGS @16.2.0
const contacts = require ('./contacts.js')


yargs.command({
    command : 'add',
    describe : 'Menambahkan Data Baru',
    builder : {
        Nama : {
            describe : "Nama Lengkap",
            demandOption : true,
            type : 'string',
        },
        NoTLP : {
            describe : "Nomor Telepon",
            demandOption : true,
            type : 'string',
        },
        Email : {
            describe : "Email Pengguna",
            demandOption : true,
            type : 'string',
        },
    },
    handler (argv) {
        contacts.simpan_contacts(argv.Nama, argv.NoTLP, argv.Email);
    }
}).demandCommand();

//Menampilkan daftar semua contacts
yargs.command({
    command : 'list',
    describe : 'Menampilkan Semua Nama Dan Nomor HP',

    handler(){
        contacts.listContact();
    }
})


//Menampilkan Detail Sebuah Kontak
yargs.command({
    command:'Detail',
    describe :'Menampilkan Detail Kontak',
    builder : {
        nama : {
            describe : 'Nama Lengkap',
            demandOption : true,
            type : 'string',
        },
    },
    handler(argv){
        contacts.DetailContact(argv.nama);
    }
})


//Menghapus Data
yargs.command({
    command : 'Delete',
    describe : 'Menghapus Data',
    builder : {
        nama : {
            describe : 'Nama Yang Akan Di Hapus',
            demandOption : true,
            type : 'String',
        },
    },
    handler(argv){
        contacts.DeleteContact(argv.nama)
    }
})
yargs.parse();