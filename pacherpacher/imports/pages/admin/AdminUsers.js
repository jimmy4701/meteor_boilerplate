import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'

function AdminUsers(props){

    return(
        <div>
            <h1>Gestion des utilisateurs</h1>
            {!props.loading && props.users.map(user => {
                return <p>{user.emails[0].address}</p>
            })}
        </div>    
    )
}

export default withTracker(() => {
    // Souscription à la publication pour pouvoir accéder aux données
    const users_pub = Meteor.subscribe('users.all')

    const loading = !users_pub.ready()
    const users = Meteor.users.find().fetch()
    return {
        loading,
        users
    }
})(AdminUsers)
