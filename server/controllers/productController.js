import { products_data } from "../data/products.js";
import Product from "../models/productModel.js"

const createProduct = async (req, res) => {
    const data = req.body;
    data.createdBy = req.user.id;
    const product = new Product(data)
    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
}

const getProducts = async (req, res) => {
    if(!req.query.category){
        const products = await Product.find()
        return res.status(200).json(products)
    }

    const products = await Product.find({category: req.query.category})
    return res.status(200).json(products)
    
}

// const createDummyProducts = async (req, res) => {
//     const products = await Product.insertMany(products_data);
//     res.json(proucts);
// }

export {
    getProducts,
    createProduct
}