import express from "express";
import {getPins} from "../controllers/pin.controller.js";


const router = express.Router();


// GET /pins -> list all pins
router.get("/", getPins);

export default router;