import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { products_data } from './data/products.js'
import Product from './models/productModel.js'

dotenv.config()

connectDB()

const insertProducts = async () => {
  console.log('start')
  const createdProducts = await Product.insertMany(products_data)
  console.log(createdProducts)
}

insertProducts()
