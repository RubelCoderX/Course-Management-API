import express from "express";
import { UserController } from "../controllers/user.controller";

const router = express.Router();

router.post("/create-register", UserController.createUserFromDb);
router.post("/login", UserController.loginUserFromDb);

export const UserRoutes = router;
