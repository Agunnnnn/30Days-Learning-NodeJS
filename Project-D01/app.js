// export lib
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const {
    BacaData,
    detail,
    TambahKontak,
    cekDuplikat,
    deleteData,
} = require("./utils/Contatcs");
const { body, validationResult, check } = require("express-validator");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

// app initialization
const app = express();
const port = 3000;

// template engine
app.set("view engine", "ejs"); // <- pake ejs

//third-party middleware
app.use(expressLayouts); // <- Pake Express-ejs-layouts
app.use(express.urlencoded());

//builtin middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// config flash
app.use(cookieParser("secret"));
app.use(
    session({
        cookie: { maxAge: 6000 },
        secret: "secret",
        resave: true,
        saveUninitialized: true,
    }),
);

app.use(flash());

//route ke root (home)
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

// route ke about
app.get("/about", (req, res) => {
    res.render("about", {
        title: "Halaman About",
        layout: "layouts/main-layouts",
    });
});

//route contactq
app.get("/contact", (req, res) => {
    const data = BacaData();
    res.render("contact", {
        title: "Halaman Contact",
        layout: "layouts/main-layouts",
        data: data,
        msg: req.flash("msg"),
    });
});

//route ke add contact
app.get("/contact/add", (req, res) => {
    res.render("add-contact", {
        title: "Halaman Tambah Kontak",
        layout: "layouts/main-layouts",
    });
});

//proses menerima data dari add contact
app.post(
    "/contact",
    [
        check("email", "Alamat Email Tidak Valid").isEmail(), //buat cek email
        check("nohp", "Nomor Telepon Tidak Valid").isMobilePhone("id-ID"), //buat cek nomor email
        //custom validator cek duplikat nama
        body("email").custom((value) => {
            const duplikat = cekDuplikat(value);
            if (duplikat) {
                throw new Error("Email Sudah Terdaftar");
            }
            return true;
        }),
    ],
    (req, res) => {
        // Jika validator merasa ada yang salah
        const error = validationResult(req);
        if (!error.isEmpty()) {
            // return res.status(404).json({ error: error.array() });
            res.render("add-contact", {
                title: "Halaman Tambah Kontak",
                layout: "layouts/main-layouts",
                error: error.array(),
            });
        } else {
            TambahKontak(req.body);
            // kirim flash msg
            req.flash("msg", "Data Kontak Berhasil Di Tambahkan");
            res.redirect("/contact");
        }
    },
);
// route delete
app.get("/contact/delete/:nama", (req, res) => {
    const detailPerson = detail(req.params.nama);
    if (!detailPerson) {
        res.status(404);
        res.send("<h1>404 Not Found</h1>");
    } else {
        deleteData(req.params.nama);
        // flash msg
        req.flash("msg", "Data Kontak Berhasil Di Hapus");
        res.redirect("/contact");
    }
});

// route ubah data
app.get("/contact/edit/:nama", (req, res) => {
    const cariData = detail(req.params.nama);
    res.render("edit-contact", {
        title: "Halaman Ubah Kontak",
        layout: "layouts/main-layouts",
        data: cariData,
    });
});

// proses ubah data
app.post("/contact/update", (req, res) => {
    res.send(req.body);
});

//route contact dan paramater (detail)
app.get("/contact/:nama", (req, res) => {
    const detailPerson = detail(req.params.nama);
    const nama = req.params.nama;
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
