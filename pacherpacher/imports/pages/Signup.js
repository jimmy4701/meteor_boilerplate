import React, {useState} from 'react'
import { Form, Button, Container }  from 'semantic-ui-react'
import { Accounts } from 'meteor/accounts-base'
import { Link } from 'react-router-dom'


function Signup(props){
    const [email, setEmail] = useState()
    const [password, setPassword]   = useState()

    const signup = () => {
        console.log('SIGNUP', email, password)
        Accounts.createUser({
            email,
            password
        }, (err) => {
            if(err){
                alert(err.message)
            }else{
                console.log('Utilisateur créé !!!')
            }
        })
    }

    return(
        <Container>
            <h1>Inscrivez-vous !</h1>
            <Form onSubmit={signup}>
                <Form.Input type="email" onChange={(e, {value}) => setEmail(value)} label="Email" value={email} />
                <Form.Input type="password" onChange={(e, {value}) => setPassword(value)} label="Mot de passe" value={password} />
                <Button disabled={!email || !password}>M'inscrire</Button>
                <Link to="/signin">
                    <Button size="mini">J'ai déjà un compte</Button>
                </Link>
            </Form>
        </Container>
    )
}

export default Signup