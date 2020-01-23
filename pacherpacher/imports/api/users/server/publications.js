import Meteor from 'meteor/meteor'


Meteor.publish('users.all', () => {
    return Meteor.users.find()
})