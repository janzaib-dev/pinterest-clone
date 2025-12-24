import express from 'express';
import userRouter from './routes/user.route.js';
import pinRouter from './routes/pin.route.js';
import boardRouter from './routes/board.route.js';
import connectDB from "./utils/connectDB.js";
import commentRouter from "./routes/comment.route.js";
// Basic CORS for local dev
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    methods: ["GET","POST","PUT","PATCH","DELETE"],
}));

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/pins', pinRouter);
app.use('/comments', commentRouter);

app.listen(3000, async () => {
     connectDB()
    console.log("server is running on port 3000");
});