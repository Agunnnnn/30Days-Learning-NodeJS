Penggunaan Nodemon di Node.js

## 📖 Deskripsi

Nodemon adalah tool yang digunakan untuk **menjalankan aplikasi Node.js secara otomatis ulang (auto-restart)** setiap kali terjadi perubahan pada file.

---

## 🧠 Pengertian

Biasanya saat coding Node.js, setiap ada perubahan kita harus menjalankan ulang program secara manual:

```bash
node app.js
```

Dengan Nodemon, hal ini menjadi otomatis tanpa perlu restart manual.

---

## 🎯 Fungsi Utama

* Auto restart aplikasi saat file berubah
* Mempercepat proses development
* Menghemat waktu (tidak perlu run ulang manual)

---

## 📦 Instalasi

### Install sebagai dev dependency:

```bash
npm install nodemon --save-dev
```

### Atau install global:

```bash
npm install -g nodemon
```

---

## 🚀 Cara Penggunaan

### Tanpa Nodemon:

```bash
node app.js
```

### Dengan Nodemon:

```bash
nodemon app.js
```

👉 Setiap file disimpan, aplikasi akan otomatis restart

---

## ⚙️ Menggunakan Script di package.json

Tambahkan pada bagian scripts:

```json
"scripts": {
  "dev": "nodemon app.js"
}
```

Jalankan dengan:

```bash
npm run dev
```

---

## 💡 Contoh Kasus

```js
console.log("Server berjalan...");
```

👉 Setiap kali file diubah dan disimpan, terminal akan otomatis menampilkan ulang hasil terbaru tanpa perlu menjalankan ulang secara manual.

---

## 🔥 Kelebihan Nodemon

* Praktis dan efisien
* Cocok untuk development
* Mengurangi pekerjaan berulang

---

## ⚠️ Catatan

Nodemon hanya digunakan saat **development**, tidak digunakan di production.

---

## 🎯 Kesimpulan

Nodemon adalah tool yang membantu developer dengan cara **mengotomatisasi restart aplikasi Node.js**, sehingga proses coding menjadi lebih cepat dan nyaman.
