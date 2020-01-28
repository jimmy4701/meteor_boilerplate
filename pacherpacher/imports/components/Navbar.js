import React, {Fragment} from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data'

function Navbar({user, cart}){

    return(
        <Menu>
            {user && cart.length > 0 &&
                <Menu.Item>{cart.length} produits</Menu.Item>
            }
            <Link to="/admin/users">
                <Menu.Item>Utilisateurs</Menu.Item>
            </Link>
            {Meteor.userId() ?
                <Fragment>
                    <Link to="/my_products">
                        <Menu.Item>Mes produits</Menu.Item>
                    </Link>
                    <Link to="/new_product">
                        <Menu.Item>Créer produit</Menu.Item>
                    </Link>
                    <Menu.Item onClick={Meteor.logout}>Déconnexion</Menu.Item>
                </Fragment>
            :
                <Link to="/signin">
                    <Menu.Item>Connexion</Menu.Item>
                </Link>
            }
        </Menu>
    )
}

export default withTracker(() => {
    
    const user = Meteor.user()
    return {
        user,
        cart: user && user.profile.cart
    }
})(Navbar)