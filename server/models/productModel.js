import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        rating: { 
            type: Number, 
            required: true 
        },
        comment: { 
            type: String, 
            required: true 
        },
    },
    {
        timestamps: true,
    }
)

const productSchema = mongoose.Schema(
    {
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            default: 100
        },
        image: {
            type: String,
            required: true,
            default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fproduct&psig=AOvVaw2fi6qCZiqtAFbcoVJ63-4q&ust=1633774918967000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMiZioLMuvMCFQAAAAAdAAAAABAD'
        },
        brand: {
            type: String,
            required: true,
            default: 'brand'
        },
        category: {
            type: String,
            required: true,
            default: 'category'
        },
        description: {
            type: String,
            required: true,
            default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra justo elit, at bibendum ex pretium at. Proin nisl dui, porta non odio ac, ullamcorper malesuada massa. Nullam lectus tellus, ornare et gravida at, convallis eget libero. Phasellus lobortis lacus eget orci tincidunt commodo id et dolor. In hac habitasse platea dictumst. Curabitur laoreet libero quam, vitae sollicitudin tortor vulputate at. Proin interdum arcu vel nisl molestie tincidunt. Morbi porttitor tellus neque, a vulputate justo consectetur sed. Nam ut enim quis tellus faucibus pulvinar. Curabitur cursus sollicitudin nunc, vitae tincidunt nisi placerat et. Quisque ante ex, blandit eu risus ut, imperdiet rhoncus ligula. Nullam tortor elit, porta vitae felis at, pretium vulputate arcu."
        },
        countInStock: {
            type: Number,
            required: true,
            default: 0,
        },
        reviews: [reviewSchema],
        rating: {
            type: Number,
            required: true,
            default: 0,
        },
        numReviews: {
            type: Number,
            required: true,
            default: 0,
        },
        numOrders: {
            type: Number,
            required: true,
            default: 0,
        },
        featured:{
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    }
)

const Product = mongoose.model('Product', productSchema)

export default Product