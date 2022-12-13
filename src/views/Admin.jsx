import { useNavigate } from "react-router-dom"
import { Form, Button, Table } from "react-bootstrap";
import { useState, useContext } from "react";


const Admin = () => {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
    const [publicacion, setPublicacion] = useState({});
    const [publicaciones, setPublicaciones] = useState([]);

    const handleChange = (element) => {
        const { name, value } = element;
        publicacion[name] = value;
        setPublicacion({ ...publicacion });
    };

    const agregarPublicacion = () => {
        setPublicaciones([...publicaciones, { ...publicacion }]);
        alert("Publicación agregada con éxito");
    };
    const eliminarPublicacion = (i) => {
        publicaciones.splice(i, 1);
        setPublicaciones([...publicaciones]);
    };

    return (
        <div className="admin-menu">
            <div className="admin-title">
            <h1>Administrador</h1>
            <button onClick={() => logout()}>Logout</button>
            </div>
            <Form className="row col-10 col-sm-9 col-md-8 col-lg-6 mx-auto mt-5 border border-light rounded p-4">
                <h5 className="mb-3">Registro de Productos</h5>
                <hr />
                <Form.Group className="mb-3 col-12 col-md">
                    <Form.Label>ID producto</Form.Label>
                    <Form.Control
                        value={publicacion.id}
                        name="id"
                        onChange={({ target }) => handleChange(target)}
                    />
                </Form.Group>
                <Form.Group className="mb-3 col-12 col-md" controlId="formBasicEmail">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        name="precio"
                        onChange={({ target }) => handleChange(target)}
                    />
                </Form.Group>
                <Form.Group className="mb-3 col-12 col-md" controlId="formBasicEmail">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control
                        name="categoria"
                        onChange={({ target }) => handleChange(target)}
                    />
                </Form.Group>
                <Form.Group className="mb-3 col-12" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="nombre"
                        onChange={({ target }) => handleChange(target)}
                    />
                </Form.Group>
                <Button
                    onClick={agregarPublicacion}
                    variant="light"
                    className="col-5 col-sm-4 col-md-3 mx-auto">
                    Agregar
                </Button>
            </Form>
            <Table
                striped
                bordered
                hover
                variant="dark"
                className="container mt-5 text-center"
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre producto</th>
                        <th>Precio</th>
                        <th>Categoria</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {publicaciones.map(({ id, nombre, precio, categoria  }, i) => (
                        <tr key={i} className="align-middle">
                            <td>{id}</td>
                            <td>{nombre}</td>
                            <td>{precio}</td>
                            <td>{categoria}</td>
                            <td>
                                <span onClick={() => eliminarPublicacion(i)} role="button">
                                    ❌
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </div>


    )
}

export default Admin