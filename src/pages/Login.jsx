import { Button, Form } from "react-bootstrap"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import DangerAlert from "../components/DangerAlert"


const Login = () => {

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const [alert, setAlert] = useState(false)

    const handleSubmit = (e) => {

        e.preventDefault()

        const data = {
            email,
            password
        }

        axios
        .post("https://e-commerce-api.academlo.tech/api/v1/users/login", data)
        .then( respuesta => {localStorage.setItem( "token", respuesta.data.data.token)
                            navigate( "/" )} )
        .catch( error => {console.error(error)
                            setAlert(true)} )
    }
        

    return( 
    <div>
          <Form onSubmit={ (e) => handleSubmit(e)} >

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
                type="email" 
                placeholder="Enter email"
                value={email}
                onChange= { (e) => setEmail(e.target.value) } />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
                type="password" 
                placeholder="Password"
                value={password}
                onChange= { (e) => setPassword(e.target.value) }  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>

    <DangerAlert
    isVisible={alert} 
    dismiss = { () => setAlert(false)}/>
    </div>
    )

}

export default Login