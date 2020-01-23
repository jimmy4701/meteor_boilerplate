import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'

function AdminUsers(props){

    return(
        <div>
            <h1>Gestion des utilisateurs</h1>
            {props.users.map(user => {
                <p>{user.emails[0].address}</p>
            })}
        </div>    
    )
}

export default withTracker(() => {
    const users_pub = Meteor.subscribe('users.all')
    const users = users_pub.fetch()
    return {
        loading,
        users
    }
})(AdminUsers)