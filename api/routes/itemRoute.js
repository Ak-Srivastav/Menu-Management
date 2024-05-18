const express = require("express");
const router = express.Router();
const {
  createItem,
  updateItem,
  deleteItem,
  getOneItem,
  getItem,
  getItemUnderCategory,
  getItemUnderSubCategory,
} = require("../controllers/Item/ItemController");

const {
  validSubCategory,
} = require("../controllers/SubCategory/subCategoryController");

router.post("/create", validSubCategory, createItem);
router.put("/update/:id", updateItem);
router.delete("/delete/:id", deleteItem);
router.get("/get/:id", getOneItem);
router.get("/get", getItem);
router.get("/get-under-category", getItemUnderCategory);
router.get("/get-under-sub-category", getItemUnderSubCategory);

module.exports = router;
