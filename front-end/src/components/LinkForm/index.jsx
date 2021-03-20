import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { getCategories } from '../../service/categoriasService';
import { postLink } from '../../service/linksService';
import { checkString } from '../../utils/validateFields';

const LinkForm = ({show, setShowLinkModal}) => {

    const [categoryList, setCategoryList] = useState([]);
    const [category, setCategory] = useState();
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');

    useEffect(() => {
        getCategories().then(result => {
            setCategoryList(result);
        });
    }, []);


    const cleanField = () => {
        setCategory();
        setTitle('');
        setLink('');
    }


    const saveLink = (closeModal) => {
        postLink(category, link, title);
        setShowLinkModal(closeModal);
        cleanField();
    }

    const enableSave = () => {
        if (!checkString(title) || !checkString(link) || !checkString(category)) {
            return true;
        }

        return false;
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
                            <option value="">Selecione</option>
                        { (categoryList && categoryList.length > 0) ? (
                        <>
                            { categoryList.map(categoryItem => (
                                <option value={categoryItem.id}>{categoryItem.nome}</option>
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
            <Button onClick={() => saveLink(true)} disabled={enableSave()}>Salvar</Button>
            <Button onClick={() => saveLink(false)} disabled={enableSave()}>Salvar e Fechar</Button>
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
