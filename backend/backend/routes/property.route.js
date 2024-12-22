import express from "express";
import controller from "../controllers/property.controller.js";
import { validId, validProperty } from "../middlewares/global.middleware.js";

const router = express.Router();

router.post("/register", controller.register);
router.get("/list", controller.findAllProperties);
router.get(
  "/list/:cod_id",
  validId,
  validProperty,
  controller.findByIdProperties
);
router.patch("/list/:cod_id", validId, validProperty, controller.update);
router.get("/property/amount", controller.amountProperties);
router.get("/property/group/inactive", controller.groupInactive);
router.get("/property/group/modified", controller.groupModified);
router.get("/backup", controller.Backup)

export default router;
