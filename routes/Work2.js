import express from "express";
import {employee} from "../controllers/employee.js";
const router = express.Router();


router.post("/insert", employee.insert);
router.get("/all", employee.all)
router.get("/find/:id", employee.find)

export default router;