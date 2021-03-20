import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { postCategory } from '../../service/categoriasService';
import { checkString } from '../../utils/validateFields';

const CategoryForm = ({show, setshowCategoryModal}) => {

    const [icon, setIcon] = useState();
    const [name, setName] = useState();

    const iconList = [
        { value: 'american-sign-language-interpreting', text: 'Acessibilidade'},
        { value: 'address-book', text: 'Agenda'},
        { value: 'anchor', text: 'Ancora'},
        { value: 'archive', text: 'Arquivos'},
        { value: 'balance-scale', text: 'Balança'},
        { value: 'band-aid', text: 'Band-aid'},
        { value: 'coffee', text: 'Café'},
        { value: 'cash-register', text: 'Caixa Registradora' },
        { value: 'clipboard-list', text: 'Checklist'},
        { value: 'rocket', text: 'Foguete' },
        { value: 'black-tie', text: 'Gravata' },
        { value: 'book-medical', text: 'Livro Médico' },
        { value: 'bullhorn', text: 'Megafone' },
        { value: 'bus', text: 'Onibus' },
        { value: 'user', text: 'Pessoa'},
        { value: 'cheese', text: 'Queijo' },
        { value: 'algolia', text: 'Relógio'},
        { value: 'bell', text: 'Sino' },
    ];

    const handleIcon = (value) => {
        setIcon(value);
    }

    const handleName = (value) => {
        setName(value);
    }

    const cleanFields = () => {
        handleIcon();
        handleName('');
    }

    const enableSave = () => {
        if (!checkString(icon) || !checkString(name)) {
            return true;
        }

        return false;
    }

    const saveCategory = (closeModal) => {

        postCategory(icon, name);
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
                                    <Form.Control as="select" defaultValue="" onChange={(e) => handleIcon(e.target.value)}>
                                        <option value="">Nenhum</option>
                                        {
                                            iconList.map(item => {
                                                if  (item.value === icon) {
                                                    return <option key={item.value} value={item.value} selected>{item.text}</option>;
                                                } else {
                                                    return <option key={item.value} value={item.value}>{item.text}</option>;
                                                }
                                            })
                                        }
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group as={Col} controlId="formGridNome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Ex: Treinamentos" value={name} onChange={(e) => handleName(e.target.value)} />
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => saveCategory(true)} disabled={enableSave()}>Salvar</Button>
                    <Button onClick={() => saveCategory(false)} disabled={enableSave()}>Salvar e Fechar</Button>
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
