import express from 'express';
import userRouter from './routes/user.route.js';
import pinRouter from './routes/pin.route.js';
import boardRouter from './routes/board.route.js';
import connectDB from "./utils/connectDB.js";
import commentRouter from "./routes/comment.route.js";

const app = express();

app.use(express.json());

// Basic CORS for local dev
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') return res.sendStatus(200);
    next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/pins', pinRouter);
app.use('/comments', commentRouter);

app.listen(3000, async () => {
     connectDB()
    console.log("server is running on port 3000");
});