import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  braintreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productFilterController,
  productListController,
  productPhotoController,
  productsCountController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

// Routes

// Create Product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// Update Product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// get products
router.get("/get-product", getProductController);

// single product
router.get("/get-product/:slug", getSingleProductController);

// get photo
router.get("/product-photo/:pid", productPhotoController);

// delete product
router.delete("/delete-product/:pid", deleteProductController);

// filter product
router.post("/product-filters", productFilterController);

// Product count
router.get("/product-count", productsCountController);

// Product per page
router.get("/product-list/:page", productListController);

// Search product
router.get("/search/:keyword", searchProductController);

// Similar products
router.get("/related-product/:pid/:cid", relatedProductController);

// category wise products
router.get("/product-category/:slug", productCategoryController);

// payments route
// token
router.get("/braintree/token", braintreeTokenController);

// payments
router.post("/braintree/payment", braintreePaymentController);

export default router;
