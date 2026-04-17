const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { BacaData, detail } = require("./utils/Contatcs");
const app = express();
const port = 3000;

app.set("view engine", "ejs"); // <- pake ejs

//third-party middleware
app.use(expressLayouts); // <- Pake Express-ejs-layouts

//buildin middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
    const Mahasiswa = [
        {
            nama: "Palaguna",
            Email: "Palaguna1501@gmail.com",
        },
        {
            nama: "Agun",
            Email: "AgunPalaguna@gmail.com",
        },
        {
            nama: "prince",
            Email: "price@gmail.com",
        },
    ];
    const Siswa = [
        {
            nama: "Raisa",
            Email: "Raisaaaaa",
        },
        {
            nama: "KakIca",
            Email: "KakIca",
        },
        {
            nama: "Awaluna",
            Email: "Awaluna",
        },
    ];

    res.render("index", {
        nama: "Agunnnnnn",
        title: "Halaman Home",
        Mahasiswa: Mahasiswa,
        Siswa: Siswa,
        layout: "layouts/main-layouts",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "Halaman About",
        layout: "layouts/main-layouts",
    });
});

app.get("/contact", (req, res) => {
    const data = BacaData();
    res.render("contact", {
        title: "Halaman Contact",
        layout: "layouts/main-layouts",
        data: data,
    });
});

app.get("/contact/:nama", (req, res) => {
    const detailPerson = detail(req.params.nama);
    res.render("detail", {
        title: "Halaman Detail Contact",
        layout: "layouts/main-layouts",
        detailPerson: detailPerson,
    });
});

app.use((req, res) => {
    //401 -> Unauthorized (belum login / belum autentikasi)
    //403 -> Forbidden (sudah login tapi tidak punya izin)
    //404 -> Not Found (halaman / route tidak ditemukan)
    //500 -> Internal Server Error (error dari server / bug)
    res.status(404);
    res.send("<h1>404-Not Found</h1>"); //bisa di jadikan tempat untuk menangani halaman yang tidak ada
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
