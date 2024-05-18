const Async = require("../../middlewares/Async");
const ApiResponse = require("../response/ApiResponse");
const ApiError = require("../error/ApiError");
const SubCategory = require("../../models/SubCategory");
const Category = require("../../models/Category");

// Create SubCategory
const createSubCategory = Async(async (req, res) => {
  req.body.name = req.body.name.toLowerCase();
  const { name } = req.body;
  const validSubCategory = await SubCategory.findOne({ name: name });
  if (validSubCategory) {
    throw new ApiError("SubCategory Already Exists");
  }
  const newSubCategory = await SubCategory.create(req.body);
  res.json(ApiResponse("SubCategory Added Succesfully", newSubCategory));
});

// Get SubCategory By Id
const getOneSubCategory = Async(async (req, res) => {
  const { id } = req.params;

  const validSubCategory = await SubCategory.findById(id);
  if (!validSubCategory) {
    throw new ApiError("SubCategory Does Not Exist");
  }

  res.json(ApiResponse("SubCategory is Present", validSubCategory));
});

// Get All Categories by Name
const getSubCategory = Async(async (req, res) => {
  const searchTerm = req.query.name || "";
  const validSubCategory = await SubCategory.find({
    name: { $regex: searchTerm, $options: "i" },
  });
  if (validSubCategory.length == 0) {
    throw new ApiError("No Such SubCategory");
  }
  res.json(ApiResponse("SubCategories Fetched Successfully", validSubCategory));
});

// Get Categories Under Category
const getSubCategoryUnderCategory = Async(async (req, res) => {
  const searchTerm = req.query.name.toLowerCase();
  const category = await Category.findOne({
    name: searchTerm,
  });
  if (!category) {
    throw new ApiError("No Such Category");
  }

  const validSubCategory = await SubCategory.find({
    category: category._id,
  });
  res.json(ApiResponse("SubCategories Fetched Successfully", validSubCategory));
});

// Update SubCategory Details
const updateSubCategory = Async(async (req, res) => {
  const { id } = req.params;
  const validSubCategory = await SubCategory.findById(id);
  if (!validSubCategory) {
    throw new ApiError("SubCategory Does Not Exist");
  }
  const { category, ...rem } = req.body;
  const updatedSubCategory = await SubCategory.findOneAndUpdate(
    { _id: id },
    rem,
    {
      new: true,
      runValidators: true,
    }
  );
  res.json(ApiResponse("SubCategory Updated Successfully", updatedSubCategory));
});

// Delete SubCategory Details
const deleteSubCategory = Async(async (req, res) => {
  const { id } = req.params;

  const validSubCategory = await SubCategory.findById(id);
  if (!validSubCategory) {
    throw new ApiError("SubCategory Does Not Exist");
  }
  const oldSubCategory = await SubCategory.findByIdAndDelete(id);
  res.json(ApiResponse("SubCategory Deleted Successfully", oldSubCategory));
});

const validSubCategory = Async(async (req, res, next) => {
  const { subcategory } = req.body;
  const validsubcategory = await SubCategory.findById(subcategory);
  if (!validsubcategory) {
    throw new ApiError("SubCategory Does Not Exist");
  }
  req.body.category = validsubcategory.category;
  if (!req.body.tax_applicability)
    req.body.tax_applicability = validsubcategory.tax_applicability;
  if (!req.body.tax_number) req.body.tax_number = validsubcategory.tax_number;
  if (!req.body.tax_type) req.body.tax_type = validsubcategory.tax_type;
  next();
});

module.exports = {
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
  getOneSubCategory,
  getSubCategory,
  validSubCategory,
  getSubCategoryUnderCategory,
};
