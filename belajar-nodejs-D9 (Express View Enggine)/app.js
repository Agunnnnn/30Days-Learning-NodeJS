const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

app.set("view engine", "ejs"); // <- pake ejs
app.use(expressLayouts); // <- Pake Express-ejs-layouts

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
    res.render("contact", {
        title: "Halaman COntact",
        layout: "layouts/main-layouts",
    });
});

app.get("/product/:id", (req, res) => {
    res.send(
        `Product ID :  ${req.params.id} <br> Categori ID : ${req.query.category}`,
    );
});

app.use("/", (req, res) => {
    //use akan di jalankan untuk request apapun
    res.status(404);
    res.send("<h1>404 Not Found</h1>"); //bisa di jadikan tempat untuk menangani halaman yang tidak ada
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
