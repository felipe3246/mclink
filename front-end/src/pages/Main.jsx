import React, { useState, useEffect } from 'react';
import { Container, Button as Floatbutton } from 'react-floating-action-button';
import LinkCard from '../components/LinkCard';
import LinkForm from '../components/LinkForm';
import CategoryForm from '../components/CategoryForm';
import { getCategories } from '../service/categoriasService';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.scss';

const Main = () => {

    const [categories, setCategories] = useState({});
    const [showLinkModal, setShowLinkModal] = useState(false);
    const [showCategoryModal, setshowCategoryModal] = useState(false);

    const updateList = () => {
        getCategories().then(result => {
            setCategories(result);
        });
    }

    useEffect(() => {
        updateList();
    }, []);

    const toggleCategoryModal = (status) => {
        updateList();
        setshowCategoryModal(status);
    }

    const toggleLinkModal = (status) => {
        updateList();
        setShowLinkModal(status);
    }

    return(
        <>
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
                                <LinkCard icon={category.ico} title={category.nome} links={category.links} key={category.id} updateList={updateList}></LinkCard>
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

            <CategoryForm show={showCategoryModal} setshowCategoryModal={toggleCategoryModal} />
            <LinkForm show={showLinkModal} setShowLinkModal={toggleLinkModal} />
        </>
    )
}

export default Main;
