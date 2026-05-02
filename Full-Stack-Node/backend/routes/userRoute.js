import express from "express";
import {
    getUser,
    getUserById,
    createUsers,
    updateUser,
    deleteUser,
} from "../controller/userController.js";
const router = express.Router();

router.get("/Users", getUser);
router.get("/Users/:id", getUserById);
router.post("/Users", createUsers);
router.patch("/Users/:id", updateUser);
router.delete("/Users/:id", deleteUser);

export default router;
