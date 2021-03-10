import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { postCategory } from '../../service/categoriasService';

const CategoryForm = ({show, setshowCategoryModal}) => {

    const [icon, setIcon] = useState('');
    const [name, setName] = useState('')

    const cleanFields = () => {
        setIcon('');
        setName('');
    }

    const saveCategory = (closeModal) => {

        const newCategory = {
            icone: icon,
            nome: name,
        }

        postCategory(newCategory);
        setshowCategoryModal(closeModal);
        cleanFields();
    }

    return (
        <>
            <Modal
                show={show ?? false}
                onHide={() => setshowCategoryModal(false)}
                dialogClassName="modal-90w"
                size="xl"
            >
                <Modal.Header closeButton>
                <Modal.Title>
                    Adicionar nova Categoria
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridIcone">
                                    <Form.Label>Ícone</Form.Label>
                                    <Form.Control as="select" defaultValue="" onChange={(e) => setIcon(e.target.value)}>
                                        <option value="">Nenhum</option>
                                        <option value="rocket">Foguete</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group as={Col} controlId="formGridNome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Ex: Treinamentos" onChange={(e) => setName(e.target.value)} />
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => saveCategory(true)}>Salvar</Button>
                    <Button onClick={() => saveCategory(false)}>Salvar e Fechar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

CategoryForm.propTypes = {
    showCategoryModal: PropTypes.bool,
    setshowCategoryModal: PropTypes.func,
};

CategoryForm.defaultProps = {
    showCategoryModal: false,
    setshowCategoryModal: () => {},
};

export default CategoryForm;