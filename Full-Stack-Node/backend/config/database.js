import { Sequelize } from "sequelize";
const db = new Sequelize("crud_db", "root", "", {
    host: "localhost",
    dialect: "mysql", // <- Memilih Databse
});
export default db;
