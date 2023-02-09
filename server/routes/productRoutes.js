import express from 'express'
import { createProduct, getProducts } from '../controllers/productController.js'
import { verifyTokenAndAdmin } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').get(getProducts).post(verifyTokenAndAdmin,createProduct)
// router.route('/createDummyProducts').post(createDummyProducts)

export default router