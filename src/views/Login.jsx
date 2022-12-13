
import Form from 'react-bootstrap/Form';
import { useState } from "react"
import { useNavigate } from "react-router-dom"


  const Login = ()=> {
    const navigate = useNavigate()

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const loginData = {
        user: 'admin@gmail.com',
        password: 'admin123'
    }

    const login = (e)=> {
        e.preventDefault()

        // 1- Pedir el archivo JSON
        // 2- Buscar el usuario
        // 3- Revisar si la contraseña coincide para ese usuario
        // 4.1- Si esta OK -> Se hace el login
        // 4.2- Si no, manejamos el error

        if(user === loginData.user && password === loginData.password) {
            localStorage.setItem('token', 'test_token_123456789')
            navigate('/admin')
        } else {
            setError(true)
        }
    }

  return (
    <Form className='contacto' onSubmit={(e)=> login(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setUser(e.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <button className= "login"type="submit">
        Ingresar
      </button>
      { error && <small>* Usuario o contraseña incorrecto(s)</small> }
    </Form>
  );
}

export default Login;