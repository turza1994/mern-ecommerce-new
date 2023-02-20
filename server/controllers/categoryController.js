import Category from '../models/categoryModel.js'

const createCategory = async (req, res) => {
  try {
    const data = req.body
    data.createdBy = req.user.id
    const category = new Category(data)
    const createdCategory = await category.save()
    res.status(201).json(createdCategory)
  } catch (error) {
    res.json(error.message)
  }
}

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find()
    return res.status(200).json(categories)
  } catch (error) {
    res.json(error.message)
  }
}

export { getCategories, createCategory }
