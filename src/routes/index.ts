import { Router } from "express";
import * as pagesControllers from "../controllers/pagesControllers";
import { search } from "../controllers/searchControllers";

export const router = Router();

router.get("/", pagesControllers.home);
router.get("/dogs", pagesControllers.dogs);
router.get("/cats", pagesControllers.cats);
router.get("/others", pagesControllers.others);

router.get("/search", search);
