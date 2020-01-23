import React, {useState} from 'react'
import { Form, Button, Container }  from 'semantic-ui-react'


function Signup(props){
    const [email, setEmail] = useState()
    const [password, setPassword]   = useState()
    return(
        <Container>
            <h1>Inscrivez-vous !</h1>
            <Form>
                <Form.Input type="email" onChange={(e, {value}) => setEmail(value)} label="Email" value={email} />
                <Form.Input type="password" onChange={(e, {value}) => setPassword(value)} label="Mot de passe" value={password} />
                <Button disabled={!email || !password}>M'inscrire</Button>
            </Form>
        </Container>
    )
}

export default Signup