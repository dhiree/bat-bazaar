import Product from "../models/productModel.js";

// Create a product
export const createProduct = async (productData) => {
  return await Product.create(productData);
};

// Get all products
export const getAllProducts = async () => {
  return await Product.find().populate("user", "name email");
};

// Get single product by ID
export const getProductById = async (id) => {
  return await Product.findById(id).populate("user", "name email");
};

// Update product
export const updateProduct = async (id, updateData) => {
  return await Product.findByIdAndUpdate(id, updateData, { new: true });
};

// Delete product
export const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};
