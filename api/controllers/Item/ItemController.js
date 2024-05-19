const Async = require("../../middlewares/Async");
const ApiResponse = require("../response/ApiResponse");
const ApiError = require("../error/ApiError");
const Item = require("../../models/Item");
const Category = require("../../models/Category");
const SubCategory = require("../../models/SubCategory");
// Create Item
const createItem = Async(async (req, res) => {
  req.body.name = req.body.name.toLowerCase();
  const { name } = req.body;
  const validItem = await Item.findOne({ name: name });
  if (validItem) {
    throw new ApiError("Item Already Exists");
  }
  const newItem = await Item.create(req.body);
  res.json(ApiResponse("Item Added Succesfully", newItem));
});

// Get Item By Id
const getOneItem = Async(async (req, res) => {
  const { id } = req.params;

  const validItem = await Item.findById(id);
  if (!validItem) {
    throw new ApiError("Item Does Not Exist");
  }

  res.json(ApiResponse("Item is Present", validItem));
});

// Get All Items By Name
const getItem = Async(async (req, res) => {
  const searchTerm = req.query.name || "";
  const validItem = await Item.find({
    name: { $regex: searchTerm, $options: "i" },
  });
  if (validItem.length == 0) {
    throw new ApiError("No Such Items");
  }
  res.json(ApiResponse("Items Fetched Successfully", validItem));
});

// Get All Items Under Category
const getItemUnderCategory = Async(async (req, res) => {
  const searchTerm = req.query.name.toLowerCase();
  const category = await Category.findOne({
    name: searchTerm,
  });
  if (!category) {
    throw new ApiError("No Such Category");
  }
  const validSubCategory = await Item.find({
    category: category._id,
  });
  res.json(ApiResponse("Items Fetched Successfully", validSubCategory));
});

// Get All Items Under SubCategory
const getItemUnderSubCategory = Async(async (req, res) => {
  const searchTerm = req.query.name.toLowerCase();
  const subCategory = await SubCategory.findOne({
    name: searchTerm,
  });
  if (!subCategory) {
    throw new ApiError("No Such subCategory");
  }
  const validSubCategory = await Item.find({
    subcategory: subCategory._id,
  });
  res.json(ApiResponse("Items Fetched Successfully", validSubCategory));
});

// Update Item Details
const updateItem = Async(async (req, res) => {
  const { id } = req.params;
  const validItem = await Item.findById(id);
  if (!validItem) {
    throw new ApiError("Item Does Not Exist");
  }
  const { category, subcategory, ...rem } = req.body;
  const updatedItem = await Item.findOneAndUpdate({ _id: id }, rem, {
    new: true,
    runValidators: true,
  });
  res.json(ApiResponse("Item Updated Successfully", updatedItem));
});

// Delete Item Details
const deleteItem = Async(async (req, res) => {
  const { id } = req.params;

  const validItem = await Item.findById(id);
  if (!validItem) {
    throw new ApiError("Item Does Not Exist");
  }
  const oldItem = await Item.findByIdAndDelete(id);
  res.json(ApiResponse("Item Deleted Successfully", oldItem));
});

module.exports = {
  createItem,
  updateItem,
  deleteItem,
  getOneItem,
  getItem,
  getItemUnderCategory,
  getItemUnderSubCategory,
};
