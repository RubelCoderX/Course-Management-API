import express from "express";

import auth from "../../../middleware/auth";
import { USER_ROLE } from "../../users/constant/user.constant";
import { PurchaseController } from "../controllers/purchase.controller";

const router = express.Router();

router.post(
  "/create-purchase",
  auth(USER_ROLE.user),
  PurchaseController.createPurchaseFromDb
);
router.get("/", auth(USER_ROLE.user), PurchaseController.getAllPurchaseFromDb);

export const PurchaseRoutes = router;
