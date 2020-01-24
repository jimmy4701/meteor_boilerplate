import {Meteor} from 'meteor/meteor'
import Products from '/imports/api/products/products'

Meteor.methods({
    'products.create': function(product){
        console.log(this.userId)
        if(!this.userId){
            throw new Meteor.Error('402', "Piiiirate !")
        }
        product.seller = this.userId
        const product_id = Products.insert(product)
        return Products.findOne({_id: product_id})
    }
})