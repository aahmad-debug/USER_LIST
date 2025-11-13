import { Router } from "express";
import { postDetails } from "../controllers/usersController";

const router = Router();

router.get("/:id", postDetails);

export default router;
