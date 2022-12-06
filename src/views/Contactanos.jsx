import Form from 'react-bootstrap/Form';
const Contactanos = () => {
    return (
        <Form>
            <main className='contacto'>
                <h2>Contactanos</h2>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <div className='name-email'>
                        <Form.Control type="name" placeholder="Tu nombre" />
                        <Form.Control type="email" placeholder="Tu email" />
                    </div>
                    <Form.Control type="phone" placeholder="Tu telefono (opcional)" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={4} placeholder="Tu mensaje" />
                </Form.Group>
                <button className='send'>Enviar</button>
            </main>
        </Form>
    )
}

export default Contactanos