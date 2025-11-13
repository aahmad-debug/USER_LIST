import { Router } from "express";
import { listUsers, userDetails } from "../controllers/usersController";

const router = Router();

router.get("/", listUsers);
router.get("/:id", userDetails);

export default router;
