const { type } = require('node:os');
const yargs= require('yargs')//YARGS @16.2.0
const contacts = require ('./contacts.js')


yargs.command({
    command : 'add',
    describe : 'Menambahkan Data Baru',
    builder : {
        Nama : {
            d1escribe : "Nama Lengkap",
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
});


yargs.parse();