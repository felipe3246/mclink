import React, { useState, useEffect } from 'react';
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
        <div className="Main">
            <div className="Main-tools">
                <div className="Main-tools-input-icons">
                    <input type="text" className="Main-tools-search input-field" placeholder="Buscar" />
                    <button>Adicionar Link</button>
                    <button>Categorias</button>
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
    )
}

export default Main;
