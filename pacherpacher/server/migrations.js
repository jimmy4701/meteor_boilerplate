Migrations.add({
    version: 2,
    up: function() {
        Meteor.users.update(
            {profile: {$exists: false}},
            {$set: {profile: {cart: []}}},
            {multi: true}
        )
    },
});

Migrations.add({
    version: 1,
    up: function() {
        Meteor.users.update(
            {profile: {$exists: false}},
            {$set: {profile: {cart: []}}}
        )
    },
});