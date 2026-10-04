import express from "express";
import {department} from "../controllers/department.js";
const router = express.Router();


router.post("/insert", department.insert);
router.get("/all", department.all)
router.get("/find/:id", department.find)

export default router;