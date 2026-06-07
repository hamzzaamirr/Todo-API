import express from 'express';
import userRouter from '../src/routes/user.routes.js';


const app = express();

app.use(express.json());
app.use("/api/auth",userRouter);
export default app;