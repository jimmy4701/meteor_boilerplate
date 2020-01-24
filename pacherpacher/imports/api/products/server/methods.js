import {Meteor} from 'meteor/meteor'
import Products from '/imports/api/products/products'

Meteor.methods({
    'products.create': function(product){
        if(!this.userId){
            throw new Meteor.Error('402', "Piiiirate !")
        }
        product.seller = this.userId
        const product_id = Products.insert(product)
        return Products.findOne({_id: product_id})
    },
    'products.remove': function(product_id){
        if(!this.userId){
            throw new Meteor.Error('402', "Bien tenté ;)")
        }
        Products.remove({seller: this.userId, _id: product_id})
        return true
    }
})