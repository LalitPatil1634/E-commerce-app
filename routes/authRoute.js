import express, { Router } from "express";
import {
  forgotPasswordController,
  getsAllOrdersController,
  getsOrdersController,
  loginController,
  registerController,
  testController,
  updateProfileController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
// router object
const router = express.Router();

// routing

// register || method post
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

// Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

// test routes
router.get("/test", requireSignIn, isAdmin, testController);

// Protected user route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// Protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// update profile
router.put("/profile", requireSignIn, updateProfileController);

// orders
router.get("/orders", requireSignIn, getsOrdersController);

// All orders
router.get("/all-orders", requireSignIn, isAdmin, getsAllOrdersController);

export default router;
