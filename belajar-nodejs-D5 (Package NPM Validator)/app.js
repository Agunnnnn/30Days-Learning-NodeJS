const validator = require('validator');


cek = validator.isEmail('palaguna1501@gmail.com');//true
cek1 = validator.isEmail('palaguna1501gmail.com');//false karena ga ada @
cek2 = validator.isEmail('palaguna1501@123.com');//true
cek3 = validator.isEmail('palaguna1501@123.c');//false karena nama domain nya terkahir 1 huruf
console.log(cek)
console.log(cek1)
console.log(cek2)
console.log(cek3)


//library mengecek apakah sebuah string yang di masukan apakah sebuah nomor telepon atau bukan
//paramter kedua adalah kode negara
Mp = validator.isMobilePhone('12345678', 'id-ID');//false karena nomor telepon biasanya depannya 08
Mp2 = validator.isMobilePhone('0812345678', 'id-ID');//true
Mp3 = validator.isMobilePhone('08012345678', 'id-ID');//false karena nomor telepon dari indonesia ga adayang yang 080
Mp4 = validator.isMobilePhone('08312345678', 'id-ID');//true
Mp5 = validator.isMobilePhone('07312345678', 'id-ID');//false karena nomor telepon dari indonesia di awali dengan 08
console.log(Mp)
console.log(Mp2)
console.log(Mp3)
console.log(Mp4)
console.log(Mp5)

//librari yang mengecek angka atau bukann

Aa = validator.isNumeric('123')
Aa1 = validator.isNumeric('ag')//false karena ini huruf
Aa2 = validator.isNumeric('123a')//false karena ada 1 huruf

console.log(Aa)
console.log(Aa1)
console.log(Aa2)
