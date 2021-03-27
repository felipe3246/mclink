import React, { useState, useEffect } from 'react';
import { Container, Button as Floatbutton } from 'react-floating-action-button';
import Loading from '../components/Loading';
import LinkCard from '../components/LinkCard';
import LinkForm from '../components/LinkForm';
import CategoryForm from '../components/CategoryForm';
import { getCategories, getCategory } from '../service/categoriasService';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.scss';

const Main = () => {

    const [categories, setCategories] = useState({});
    const [showLinkModal, setShowLinkModal] = useState(false);
    const [showCategoryModal, setshowCategoryModal] = useState(false);
    const [editCategory, setEditCategory] = useState(null);
    const [showLoading, setShowLoading] = useState(false)

    const updateList = () => {
        setTimeout(() => {
            getCategories().then(result => {
                setCategories(result);
                setShowLoading(false);
            });
        }, 1000);
    }

    useEffect(() => {
        setShowLoading(true);
        updateList();
    }, []);

    const toggleCategoryModal = (status, id = null) => {

        if(id && status) {
            getCategory(id).then(result => {
                setEditCategory(result);
            });
        }
        setshowCategoryModal(status);

        if(!status) {
            setEditCategory(null);
        }

        updateList();
    }


    const toggleLinkModal = (status) => {
        updateList();
        setShowLinkModal(status);
    }

    return(
        <>
            <Loading show={showLoading}/>
            <div className="Main">
                {/* <div className="Main-tools">
                    <div className="Main-tools-input-icons">
                        <input type="text" className="Main-tools-search input-field" placeholder="Procurar" />
                    </div>
                </div> */}
                <div className="Main-items">
                    { (categories && categories.length > 0) ? (
                        <>
                            { categories.map(category => (
                                <LinkCard icon={category.ico} categoryId={category.id} title={category.nome} links={category.links} key={category.id} updateList={updateList} toggleCategoryModal={toggleCategoryModal}></LinkCard>
                            ))}
                        </>
                    ) : (<h1 style={{ margin: "0 auto" }}>Nenhuma categoria cadastrada</h1>)}
                </div>
            </div>
            <Container>
                <Floatbutton
                    tooltip="Gerenciar Categorias"
                    icon="fa fa-list"
                    onClick={() => setshowCategoryModal(true)} />
                <Floatbutton
                    tooltip="Add link"
                    icon="fa fa-link"
                    onClick={() => setShowLinkModal(true)}  />
                <Floatbutton
                    tooltip="Opções"
                    icon="fa fa-plus"
                    rotate={true} />
            </Container>

            <CategoryForm show={showCategoryModal} setshowCategoryModal={toggleCategoryModal} categorySelected={editCategory} />
            <LinkForm show={showLinkModal} setShowLinkModal={toggleLinkModal} categories={categories} updateList={updateList} />
        </>
    )
}

export default Main;
