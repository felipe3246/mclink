import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { getCategories } from '../../service/categoriasService';

const LinkForm = ({show, setShowLinkModal}) => {

    const [categoryList, setCategoryList] = useState([]);
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');

    useEffect(() => {
        getCategories().then(result => {
            setCategoryList(result);
        });
    }, []);

    const cleanField = () => {
        setCategory('');
        setTitle('');
        setLink('');
    }


    const saveLink = (closeModal) => {
        const newLink = {
            categoria: category,
            titulo: title,
            link: link,
        }

        setShowLinkModal(closeModal);
        cleanField();
    }

    return (
        <Modal
            show={show ?? false}
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
                    <Form.Group as={Col} controlId="formGridCategoria" onChange={(e) => { setCategory(e.target.value) }}>
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control as="select" defaultValue="">
                        { (categoryList && categoryList.length > 0) ? (
                        <>
                            { categoryList.map(category => (
                                <option value={category.Id}>{category.Nome}</option>
                            ))}
                        </>
                        ) : (<option value="">Nenhuma categoria cadastrada</option>)}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridTitulo">
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" placeholder="Ex: Como fazer BigMC" onChange={(e) => { setTitle(e.target.value) }} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridLink" onChange={(e) => { setLink(e.target.value) }}>
                        <Form.Label>Link</Form.Label>
                        <Form.Control type="text" placeholder="Ex: https://google.com" />
                    </Form.Group>
                </Form.Row>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={() => saveLink(true)}>Salvar</Button>
            <Button onClick={() => saveLink(false)}>Salvar e Fechar</Button>
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