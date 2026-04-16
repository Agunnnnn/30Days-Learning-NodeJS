import chalk from 'chalk'

console.log(chalk.white('Hello world! teks putih'));//warna huruf putih
console.log(chalk.bgBlue('Hello world! bakcground biru'));//warna background biru
console.log(chalk.white.bgBlue('Hello world! teks putih background biru di gabung'));//warna background putih warna huruf putih di gabung

console.log(chalk.italic('Hello World! Huruf Miring'))
console.log(chalk.bold('Hello World! Huruf huruf tebal'))

const pesan  = 'Hello World! dengan cara yang berbeda';
console.log(chalk.bgRed.black.bold(pesan))

