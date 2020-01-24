import React, {Fragment} from 'react'
import { Card, Button } from 'semantic-ui-react'

function Product({product, ...props}){

    const remove = () => {
        Meteor.call('products.remove', product._id)
    }

    return(
        <Card 
            header={product.name} 
            description={product.description}
            meta={product.price}
            image={product.image_url}
            extra={
                <Fragment>
                    <Button fluid>Acheter</Button>
                    {product.seller == Meteor.userId() &&
                        <Button fluid onClick={remove} color="red">Supprimer</Button>
                    }
                </Fragment>
            }
        />
    )
}

export default Product