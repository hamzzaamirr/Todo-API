import router from "express";
import {registerUser} from "../controllers/user.controllers.js";


const userRouter = router();


userRouter.post("/register",registerUser);

export default userRouter;