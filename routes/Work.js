import express from "express";
import {Client} from "../controllers/client.js";
const router = express.Router();


router.post("/insert", Client.insert);
router.get("/all", Client.all)
router.get("/find/:id", Client.find)

export default router;