import React, { useState } from 'react';
import { deleteLink } from '../../service/linksService';
import './index.scss';

const LinkCard = ({ icon, title, links, updateList }) => {

    const [showLink, setShowLink] = useState('');

    const toggleLink = () => {
        showLink ? setShowLink('') : setShowLink('active')
    }

    const getIcon = () => {
        return `fa fa-${icon}`
    }

    const removeLink = (id, nome) => {
        const checkRemove = window.confirm(`Deseja deletar o link ${nome}?`);
        if (checkRemove) {
            deleteLink(id).then(() => {updateList();});
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
                                    {/* <span className="LinkCard-list-icon"><i className="fa fa-edit"></i></span> */}
                                </li>
                            )
                        })}
                        </ul>
                    ) : <span>Nenhum link</span>}
                </div>
            ) : (<></>)}
        </div>
    )
}

export default LinkCard;
