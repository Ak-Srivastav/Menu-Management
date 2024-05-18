const express = require("express");
const router = express.Router();
const {
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
  getOneSubCategory,
  getSubCategory,
  getSubCategoryUnderCategory,
} = require("../controllers/SubCategory/subCategoryController");

const { validCategory } = require("../controllers/Category/categoryController");

router.post("/create", validCategory, createSubCategory);
router.put("/update/:id", updateSubCategory);
router.delete("/delete/:id", deleteSubCategory);
router.get("/get/:id", getOneSubCategory);
router.get("/get", getSubCategory);
router.get("/getunder", getSubCategoryUnderCategory);
module.exports = router;
