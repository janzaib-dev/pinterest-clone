import express from "express";
import {getUSerBoards,} from "../controllers/board.controller.js";


const router = express.Router();


router.get('/:userId', getUSerBoards)

export default router;