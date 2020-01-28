import '/imports/api/users/server/publications'
import '/imports/api/products/server/methods'
import '/imports/api/products/server/publications'

Meteor.startup(() => {
    console.log('SERVER : Meteor est lancé')
    Migrations.migrateTo('latest');
})