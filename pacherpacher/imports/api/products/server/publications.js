import { Meteor } from 'meteor/meteor'
import Products from '/imports/api/products/products'


Meteor.publish('products.me', function(){
    return Products.find({seller: this.userId})
})

