import express from "express";
import {job} from "../controllers/job.js";
const router = express.Router();


router.post("/insert", job.insert);
router.get("/all", job.all)
router.get("/find/:id", job.find)

export default router;