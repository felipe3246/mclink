import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const FormLink = () => {
    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridCategoria">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control as="select" defaultValue="">
                        <option value="">RH</option>
                        <option value="">Financeiro</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridIcone">
                    <Form.Label>Ícone</Form.Label>
                    <Form.Control as="select" defaultValue="">
                        <option value="">Nenhum</option>
                        <option value="">Foguete</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridTitulo">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" placeholder="Ex: Como fazer BigMC" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridLink">
                    <Form.Label>Link</Form.Label>
                    <Form.Control type="text" placeholder="Ex: https://google.com" />
                </Form.Group>
            </Form.Row>
        </Form>
    )
}

export default FormLink;