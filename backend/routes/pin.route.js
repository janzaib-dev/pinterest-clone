import express from "express";
import {
    getPin,
    getPins
} from "../controllers/pin.controller.js";


const router = express.Router();


// GET /pins -> list all pins
router.get("/", getPins);
router.get("/:id", getPin);

export default router;