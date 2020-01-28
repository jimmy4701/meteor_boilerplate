import React, {useState, useEffect} from 'react'
import { Button, Form } from 'semantic-ui-react'

function ProductForm(props){
    const [product, setProduct] = useState({})

    useEffect(() => {
        setProduct(props.product || {})
    }, [props])

    const submit = () => {
        if(props.product){
            // Update product
            Meteor.call('products.update', product, (err, data) => {
                if(err){
                    alert(err.message)
                }else{
                    alert(`Produit ${product.name} modifié`)
                    console.log(data)
                }
            })
        }else{
            // Create product
            Meteor.call('products.create', product, (err, data) => {
                if(err){
                    alert(err.message)
                }else{
                    alert('Produit créé')
                    console.log(data)
                }
            })
        }
    }

    return(
        <Form onSubmit={submit}>
            <Form.Input 
                type="text" 
                label="Nom du produit"
                value={product.name}
                onChange={(e, {value}) => setProduct({...product, name: value})}
            />
            <Form.Input 
                type="number"   
                label="Prix"
                value={product.price}
                onChange={(e, {value}) => setProduct({...product, price: value})}
            />
            <Button color="green">Créer le produit</Button>
        </Form>
    )
}

export default ProductForm