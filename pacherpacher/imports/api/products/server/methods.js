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
    'products.update': function(product){
        if(!this.userId){
            throw new Meteor.Error('402', "Encore une tentative ?!")
        }
        const found_product = Products.findOne({_id: product._id, seller: this.userId})
        if(!found_product){
            throw new Meteor.Error('404', "Produit non trouvé")
        }
        Products.update({_id: product._id}, {$set: product})
        return Products.findOne({_id: product._id})
    },
    'products.remove': function(product_id){
        if(!this.userId){
            throw new Meteor.Error('402', "Bien tenté ;)")
        }
        Products.remove({seller: this.userId, _id: product_id})
        return true
    },
    'products.by_id': function(product_id){
        return Products.findOne({_id: product_id, seller: this.userId})
    },
    'products.add_to_cart': function(product_id){
        Meteor.users.update(
            {_id: this.userId},
            {$push: {'profile.cart': product_id}}
        )
    },
    'products.remove_from_cart': function(product_id){
        const user = Meteor.users.findOne({_id: this.userId})
        user.profile.cart = user.profile.cart.filter(id => id != product_id)
        Meteor.users.update({_id: this.userId}, {$set: user})
    }
})