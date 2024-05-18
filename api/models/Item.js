const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    default: "",
    maxlength: 255,
  },
  image_url: {
    type: String,
    default: "",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subcategory",
  },
  tax_applicability: {
    type: Boolean,
    default: false,
  },
  tax_number: {
    type: Number,
    default: 0,
  },
  tax_type: {
    type: String,
    default: "",
  },
  base_amount: {
    type: Number,
    required: true,
    min: 0,
  },
  discount: {
    type: Number,
    default: 0,
    min: 0,
    max: this.base_amount,
  },
  total_amount: {
    type: Number,
    default: function () {
      return this.base_amount - this.discount;
    },
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set creation timestamp
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Automatically set update timestamp
  },
});

// Update timestamps and calculate total amount before saving an item
itemSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  this.total_amount = this.base_amount - this.discount;
  next();
});

module.exports = mongoose.model("Item", itemSchema);
