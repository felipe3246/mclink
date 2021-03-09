import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const FormLink = () => {
    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridNome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Ex: Treinamentos" />
                </Form.Group>
            </Form.Row>
        </Form>
    )
}

export default FormLink;