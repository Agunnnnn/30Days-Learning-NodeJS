const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // res.send('<h1>Hello World!</h1>') <- respon text
    // res.json({
    //     nama: "Palaguna",
    //     email : "Palaguna1501@gmail.com",
    //     noHP : "0813121212",
    // }) <- respon JSONS

    res.sendFile('./index.html', {root:__dirname}) // <- respon file
})


app.get('/about', (req, res) => {
    res.sendFile('./about.html', {root:__dirname})
})

app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', {root:__dirname})
})



app.get('/product/:id', (req, res) =>{
    res.send(`Product ID :  ${req.params.id} <br> Categori ID : ${req.query.category}`);
})




app.use('/', (req, res)=> {//use akan di jalankan untuk request apapun
    res.status(404)
    res.send('<h1>404 Not Found</h1>')//bisa di jadikan tempat untuk menangani halaman yang tidak ada
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})