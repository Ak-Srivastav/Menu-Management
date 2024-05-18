const express = require("express");
const router = express.Router();
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getOneCategory,
  getAllCategory,
} = require("../controllers/Category/categoryController");

router.post("/create", createCategory);
router.put("/update/:id", updateCategory);
router.delete("/delete/:id", deleteCategory);
router.get("/get/:id", getOneCategory);
router.get("/get", getAllCategory);
module.exports = router;
