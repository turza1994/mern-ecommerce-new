import { products_data } from '../data/productsByCategory.js'
import Product from '../models/productModel.js'

// @desc    Create a product
// @route   POST /api/products
// @access  Pivate
const createProduct = async (req, res) => {
  const data = req.body
  data.createdBy = req.user.id
  const product = new Product(data)
  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
}

// @desc    Get All Products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  if (!req.query.categoryID) {
    const products = await Product.find()
    return res.status(200).json(products)
  }

  const products = await Product.find({ category: req.query.categoryID }).limit(
    5
  )
  return res.status(200).json(products)
}

// @desc    Create many dummy products
// @route   POST /api/products/createDummyProducts
// @access  Private
// const createDummyProducts = async (req, res) => {
//   const products = await Product.insertMany(products_data)
//   res.json(products)
// }

// @desc    Update all products
// @route   PUT /api/products/updateCountInStock
// @access  Private
const updateCountInStock = async (req, res) => {
  // const products = await Product.insertMany(products_data)
  const updatedProducts = Product.updateMany(
    // the query object to filter the documents to update
    {},
    // the update object to specify the changes to be made
    { $inc: { countInStock: 10 } }
    // options object
  )

  res.json(updatedProducts)
}

export { getProducts, createProduct, updateCountInStock }
