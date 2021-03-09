import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const LinkForm = (showLinkModal) => {
    const setShowLinkModal = () => {
        console.log('fechar');
    }

    return (
        <Modal
        show={showLinkModal ?? false}
        onHide={() => setShowLinkModal(false)}
        dialogClassName="modal-90w"
        size="xl"
        aria-labelledby="example-custom-modal-styling-title"
    >
        <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
            Adicionar novo Link
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
            <Button>Salvar</Button>
            <Button>Salvar e Fechar</Button>
        </Modal.Footer>
    </Modal>
    )
}

LinkForm.propTypes = {
    showCategoryModal: PropTypes.bool,
};

LinkForm.defaultProps = {
    showCategoryModal: false,
};

export default LinkForm;