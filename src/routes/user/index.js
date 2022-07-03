import { Router } from "express";
import { userCreate, userSignIn } from "./conrtoller";
import { createCustomerValidate } from "./middelware";

const router = Router();

router.post("/signup", createCustomerValidate, userCreate);
router.post("/signin", userSignIn)






export default router;