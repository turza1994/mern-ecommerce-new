import express from 'express'
import {
  createCategory,
  getCategories,
} from '../controllers/categoryController.js'
import { verifyTokenAndAdmin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getCategories).post(verifyTokenAndAdmin, createCategory)

export default router
