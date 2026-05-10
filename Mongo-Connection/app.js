const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const dbName = "Belajar-1";

// manggil api mongodb menggunakan call-back
client.connect((error, client) => {
  if (error) {
    return console.log("Db gagal terkoneksi");
  }
  //Memilih db
  const db = client.db(dbName);

  //Menambahkan 1 data (Insert);
  db.collection("Belajar").insertOne(
    {
      nama: "Raisa Awaluna",
      email: "Raisa@Gmail.com",
    },
    (error, result) => {
      if (error) {
        return console.log("Gagal");
      }
      console.log(result);
    },
  );

  // Menambahkan Lebih dari 1 data (Insert)
  db.collection("Belajar").insertMany(
    [
      {
        nama: "Reza Akbar",
        email: "Akbar@Gmail.com",
      },
      {
        nama: "Iksan Dwi Saputra",
        email: "Acil@Gmail.com",
      },
    ],
    (error, result) => {
      if (error) {
        return console.log("gagal");
      }

      console.log(result);
    },
  );

  //   Membaca Data (Read)
  console.log(
    db
      .collection("Belajar")
      .find()
      .toArray((error, result) => {
        console.log(result);
      }),
  );
  // Membaca  data berdasarkan kerteria (Read)
  console.log(
    db
      .collection("Belajar")
      .find({ nama: "Agunnn" })
      .toArray((error, result) => {
        console.log(result);
      }),
  );

  //   console.log("Koneksi DB berhasil");
});
