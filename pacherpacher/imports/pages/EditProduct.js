import React, {useState, useEffect} from 'react'
import { Form, Container, Button } from 'semantic-ui-react'
import ProductForm from '/imports/components/ProductForm'

function EditProduct(props){
    const [product, setProduct] = useState({})

    useEffect(() => {
        console.log('props', props)
        Meteor.call('products.by_id', props.match.params.product_id, (err, data) => {
            if(err){
                alert(err.message)
            }else{
                setProduct(data)
            }
        })
    }, [])

    return(
        <Container>
            <h1>Edition d'un produit</h1>
            <ProductForm product={product} />
        </Container>
    )
}

export default EditProduct