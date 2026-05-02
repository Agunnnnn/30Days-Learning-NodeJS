import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;
const User = db.define(
    "users",
    {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        gender: DataTypes.STRING,
    },
    {
        freezeTableName: true,
    },
);

export default User;

// function generate user jika user tidak terdaftar di database

(async () => {
    //IIFE (Immediately Invoked Function Expresion)
    await db.sync();
})();
