import express from 'express';
import userRouter from './routes/user.route.js';
import connectDB from "./utils/connectDB.js";

const app = express();

app.use(express.json());

app.use('/users',userRouter);

app.listen(3000,()=>{
    void connectDB()
    console.log("server is running on port 3000");
});