import React from 'react';
import LinkCard from '../components/LinkCard'
import './Main.scss';

const Main = () => {

    const treinamento = [{
        title: "Como fazer BigMC",
        url: "google.com.br"
    }, {
        title: "Procedimentos Bebidas",
        url: "google.com.br"
    }, {
        title: "Sorvete de Creme",
        url: "google.com.br"
    }];

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
                <LinkCard icon="rocket" title="Treinamento" links={treinamento}></LinkCard>
                <LinkCard icon="user" title="RH"></LinkCard>
                <LinkCard icon="tools" title="Operações"></LinkCard>
                <LinkCard icon="chart-bar" title="Financeiro"></LinkCard>
            </div>
        </div>
    )
}

export default Main;