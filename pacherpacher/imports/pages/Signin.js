import React, {useState} from 'react'
import { Form, Button, Container }  from 'semantic-ui-react'
import { Link } from 'react-router-dom'


function Signin(props){
    const [email, setEmail] = useState()
    const [password, setPassword]   = useState()

    const signin = () => {
        Meteor.loginWithPassword(email, password)
    }

    return(
        <Container>
            <h1>Connectez-vous !</h1>
            <Form onSubmit={signin}>
                <Form.Input type="email" onChange={(e, {value}) => setEmail(value)} label="Email" value={email} />
                <Form.Input type="password" onChange={(e, {value}) => setPassword(value)} label="Mot de passe" value={password} />
                <Button disabled={!email || !password}>Me connecter</Button>
                <Link to="/signup">
                    <Button size="mini">Créer un compte</Button>
                </Link>
            </Form>
        </Container>
    )
}

export default Signin