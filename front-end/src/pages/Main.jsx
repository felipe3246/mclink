import React, { useState, useEffect } from 'react';
import { Container, Button, Link } from 'react-floating-action-button'
import LinkCard from '../components/LinkCard'
import { getCategories } from '../service/categoriasService';
import './Main.scss';

const Main = () => {

    const [categories, setCategories] = useState({});

    useEffect(() => {
        getCategories().then(result => {
            setCategories(result);
        });
    }, []);

    return(
        <>
            <div className="Main">
                <div className="Main-tools">
                    <div className="Main-tools-input-icons">
                        <input type="text" className="Main-tools-search input-field" placeholder="Procurar" />
                    </div>
                </div>
                <div className="Main-items">
                    { (categories && categories.length > 0) ? (
                        <>
                            { categories.map(category => (
                                <LinkCard icon={category.Ico} title={category.Nome} links={category.Links} key={category.Id}></LinkCard>
                            ))}
                        </>
                    ) : (<h1 style={{ margin: "0 auto" }}>Nenhuma categoria cadastrada</h1>)}
                </div>
            </div>
            <Container>
                <Link href="#"
                    tooltip="Gerenciar Categorias"
                    icon="fa fa-list" />
                <Link href="#"
                    tooltip="Add link"
                    icon="fa fa-link" />
                <Button
                    tooltip="Opções"
                    icon="fa fa-plus"
                    rotate={true}
                    onClick={() => alert('FAB Rocks!')} />
            </Container>
        </>
    )
}

export default Main;
