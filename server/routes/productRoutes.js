import express from 'express'
import {
  createProduct,
  getProducts,
  updateCountInStock,
} from '../controllers/productController.js'
import { verifyTokenAndAdmin } from '../middleware/authMiddleware.js'

const router = express.Router()

// @route /api/products
router.route('/').get(getProducts).post(verifyTokenAndAdmin, createProduct)
// router.route('/createDummyProducts').post(createDummyProducts)
router.route('/updateCountInStock').put(updateCountInStock)

export default router
