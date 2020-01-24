import SimpleSchema from "simpl-schema"

const Products = new Mongo.Collection('products')

const ProductSchema = new SimpleSchema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String,
        defaultValue: "Un produit"
    },
    seller: {
        type: String
    },
    stock: {
        type: Number,
        defaultValue: 0
    },
    image_url: {
        type: String,
        defaultValue: "https://static.thenounproject.com/png/28189-200.png"
    },
    category: {
        type: String,
        optional: true
    },
    created_at: {
        type: Date,
        defaultValue: new Date()
    }
})

Products.attachSchema(ProductsSchema)