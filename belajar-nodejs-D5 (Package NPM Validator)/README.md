Penggunaan Validator di Node.js

## 📖 Deskripsi

Validator adalah library Node.js yang digunakan untuk **memvalidasi data input**, seperti email, URL, nomor, dan format string lainnya.

---

## 🧠 Pengertian

Validator menyediakan berbagai fungsi untuk mengecek apakah suatu data valid atau tidak. Hasilnya berupa boolean (true atau false).

---

## 🎯 Fungsi Utama

* Validasi email
* Validasi URL
* Validasi angka
* Validasi format string

---

## 📦 Instalasi

```bash
npm install validator
```

---

## ✍️ Contoh Penggunaan

```js
const validator = require("validator");

console.log(validator.isEmail("agus@gmail.com")); // true
console.log(validator.isEmail("agus")); // false
```

---

## 💡 Contoh Kasus Nyata

```js
const email = "agun123";

if (validator.isEmail(email)) {
    console.log("Email valid");
} else {
    console.log("Email tidak valid");
}
```

---

## 🎯 Kesimpulan

Validator digunakan untuk memastikan data yang dimasukkan sesuai format yang benar sehingga program menjadi lebih aman dan terstruktur.
