import { Router } from "express";
import { postDetails } from "../controllers/postsController";

const router = Router();

router.get("/:id", postDetails);

export default router;
