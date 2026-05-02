// import lib
import express from "express";
import cors from "cors";
import UserRoute from "./routes/userRoute.js";

// inisialisasi
const app = express();
const port = 3000;

// middleware
app.use(cors());
app.use(express.json());
app.use(UserRoute);

// code
app.listen(port, () => {
    console.log(`Server up and Running in ${port}`);
});
