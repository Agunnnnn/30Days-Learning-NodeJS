const contacts = require('./contacts.js')


const fungsiUtama = async () => {
    const Nama = await contacts.Npertanyaan('Masukan Nama Anda : ');
    const NoTLP = await contacts.Npertanyaan('Masukan Nomor Telepon Anda : ');
    const Email = await contacts.Npertanyaan('Masukan Email Anda : ');

    contacts.simpan_contacts(Nama, NoTLP, Email);
}
fungsiUtama();