const Async = require("../../middlewares/Async");
const ApiResponse = require("../response/ApiResponse");
const ApiError = require("../error/ApiError");
const Category = require("../../models/Category");

// Create Category
const createCategory = Async(async (req, res) => {
  req.body.name = req.body.name.toLowerCase();
  const { name } = req.body;
  const validCategory = await Category.findOne({ name: name });
  if (validCategory) {
    throw new ApiError("Category Already Exists");
  }
  const newCategory = await Category.create(req.body);
  res.json(ApiResponse("Category Added Succesfully", newCategory));
});

// Get Category By id
const getOneCategory = Async(async (req, res) => {
  const { id } = req.params;

  const validCategory = await Category.findById(id);
  if (!validCategory) {
    throw new ApiError("Category Does Not Exist");
  }
  res.json(ApiResponse("Category is Present", validCategory));
});

// Get All Categories by Name
const getAllCategory = Async(async (req, res) => {
  const searchTerm = req.query.name || "";
  const validCategory = await Category.find({
    name: { $regex: searchTerm, $options: "i" },
  });
  if (validCategory.length == 0) {
    throw new ApiError("No Such Category");
  }
  res.json(ApiResponse("Categories Fetched Successfully", validCategory));
});

// Update Category Details
const updateCategory = Async(async (req, res) => {
  const { id } = req.params;
  const validCategory = await Category.findById(id);
  if (!validCategory) {
    throw new ApiError("Category Does Not Exist");
  }
  const updatedCategory = await Category.findOneAndUpdate(
    { _id: id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.json(ApiResponse("Category Updated Successfully", updatedCategory));
});

// Delete Category Details
const deleteCategory = Async(async (req, res) => {
  const { id } = req.params;

  const validCategory = await Category.findById(id);
  if (!validCategory) {
    throw new ApiError("Category Does Not Exist");
  }
  const oldCategory = await Category.findByIdAndDelete(id);
  res.json(ApiResponse("Category Deleted Successfully", oldCategory));
});

const validCategory = Async(async (req, res, next) => {
  const { category } = req.body;
  const validcategory = await Category.findById(category);
  if (!validcategory) {
    throw new ApiError("Category Does Not Exist");
  }
  if (!req.body.tax_applicability)
    req.body.tax_applicability = validcategory.tax_applicability;
  if (!req.body.tax_number) req.body.tax_number = validcategory.tax_number;
  if (!req.body.tax_type) req.body.tax_type = validcategory.tax_type;

  next();
});

module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getOneCategory,
  getAllCategory,
  validCategory,
};
