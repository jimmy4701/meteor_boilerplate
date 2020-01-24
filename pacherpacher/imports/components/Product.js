import React from 'react'
import { Card } from 'semantic-ui-react'

function Product({product, ...props}){
    return(
        <Card 
            header={product.name} 
            description={product.description}
            meta={product.price}
            image={product.image_url}
        />
    )
}

export default Product