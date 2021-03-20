import React, { useState } from 'react';
import { deleteLink } from '../../service/linksService';
import { deleteCategory } from '../../service/categoriasService';
import './index.scss';

const LinkCard = ({ icon, categoryId, title, links, updateList, toggleCategoryModal }) => {

    const [showLink, setShowLink] = useState('');

    const toggleLink = () => {
        showLink ? setShowLink('') : setShowLink('active')
    }

    const getIcon = () => {
        return `fa fa-${icon}`
    }

    const removeLink = (id, name) => {
        const checkRemove = window.confirm(`Deseja deletar o link ${name}?`);
        if (checkRemove) {
            deleteLink(id).then(() => {updateList();});
        }
    }

    const removeCategory = (id, name) => {
        const checkRemove = window.confirm(`Deseja deletar o link ${name}?`);
        if (checkRemove) {
            deleteCategory(id).then(() => {updateList();});
        }
    }

    return(
        <div className={`LinkCard ${showLink}`}>
            <div className="LinkCard-title" onClick={() => toggleLink()}>
                <h1><i className={getIcon()}></i>&nbsp;&nbsp; {title} <i className={`LinkCard-arrow fa fa-${showLink ? 'chevron-up' : 'chevron-down'}`}></i></h1>
            </div>
            { showLink === 'active' ? (
                <div className="LinkCard-list">
                    {links ? (
                        <ul>
                        {links.map((link, index) => {
                            return (
                                <li key={index}>
                                    <a href={link.urlLink} className="LinkCard-list-item" target="_blank" rel="noreferrer">{link.nome}</a>
                                    <span className="LinkCard-list-icon" onClick={() => removeLink(link.id, link.nome)}><i className="fa fa-trash"></i></span>
                                </li>
                            )
                        })}
                        </ul>
                    ) : <span>Nenhum link</span>}
                    <div className="LinkCard-list-footer">
                        <span className="button LinkCard-list-footer-editbutton" onClick={() => toggleCategoryModal(true, categoryId)}>Editar</span>
                        <span className="button LinkCard-list-footer-deletebutton" onClick={() => removeCategory(categoryId, title)}>Deletar</span>
                    </div>
                </div>
            ) : (<></>)}
        </div>
    )
}

export default LinkCard;
