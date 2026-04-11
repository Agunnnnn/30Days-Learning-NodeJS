Penggunaan Chalk di Node.js

## 📖 Deskripsi

Chalk adalah library Node.js yang digunakan untuk memberikan **warna dan style pada teks di terminal**, sehingga output menjadi lebih menarik dan mudah dibaca.

---

## 🧠 Pengertian

Chalk bekerja dengan cara membungkus teks (string) dan mengubah tampilannya di terminal tanpa mengubah isi datanya.

---

## 🎯 Fungsi Utama

* Memberi warna teks (merah, hijau, kuning, dll)
* Memberi style (bold, italic)
* Mempermudah membaca output

---

## 📦 Instalasi

```bash
npm install chalk
```

---

## ✍️ Contoh Penggunaan

```js
const chalk = require("chalk");

console.log(chalk.red("Error!"));
console.log(chalk.green("Berhasil!"));
console.log(chalk.yellow("Warning!"));
console.log(chalk.blue.bold("Info penting"));
```

---

## 💡 Contoh Kasus Nyata

```js
const status = "success";

if (status === "success") {
    console.log(chalk.green("Proses berhasil"));
} else {
    console.log(chalk.red("Terjadi kesalahan"));
}
```

---

## 🎯 Kesimpulan

Chalk digunakan untuk memperindah tampilan output di terminal agar lebih jelas dan profesional.
