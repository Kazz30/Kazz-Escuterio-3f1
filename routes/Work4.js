import express from "express";
import {location} from "../controllers/location.js";
const router = express.Router();


router.post("/insert", location.insert);
router.get("/all", location.all)
router.get("/find/:id", location.find)

export default router;