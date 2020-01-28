import React, {Fragment, useState} from 'react'
import { Card, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


function Product({product, ...props}){
    const [removing, setRemoving] = useState(false)

    const remove = () => {
        Meteor.call('products.remove', product._id)
    }

    return(
        <Card 
            {...props}
            header={product.name} 
            description={product.description}
            meta={product.price}
            image={product.image_url}
            extra={
                <Fragment>
                    <Button fluid>Acheter</Button>
                    {product.seller == Meteor.userId() &&
                        <Fragment>
                            <Link to={`/edit_product/${product._id}`}>
                                <Button fluid>Editer</Button>
                            </Link>
                            {removing ?
                                <Fragment>
                                    <Button fluid onClick={() => setRemoving(false)}>Annuler</Button>
                                    <Button fluid onClick={remove} color="red">Confirmer</Button>
                                </Fragment>
                            :
                               <Button fluid onClick={() => setRemoving(true)} color="red">Supprimer</Button>
                            }
                        </Fragment>
                    }
                </Fragment>
            }
        />
    )
}

export default Product