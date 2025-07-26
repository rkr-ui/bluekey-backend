import { Router } from "express";
import { register, login } from "../controllers/AuthController";
import { googleLogin } from "../controllers/AuthController";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/google", googleLogin);

export default router;