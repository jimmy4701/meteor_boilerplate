import React, {useState} from 'react'
import { Form, Button, Container }  from 'semantic-ui-react'
import { Accounts } from 'meteor/accounts-base'


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
            </Form>
        </Container>
    )
}

export default Signin