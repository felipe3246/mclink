import React, { useState } from 'react';
import './index.scss';

const LinkCard = ({ icon, title, links }) => {

    console.log(icon, title, links)

    const [showLink, setShowLink] = useState('');

    const toggleLink = () => {
        showLink ? setShowLink('') : setShowLink('active')
    }

    const getIcon = () => {
        return `fa fa-${icon}`
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
                                    <a href={link.UrlLink} className="LinkCard-list-item" target="_blank" rel="noreferrer">{link.Nome}</a>
                                    <span className="LinkCard-list-icon"><i className="fa fa-trash"></i></span>
                                    <span className="LinkCard-list-icon"><i className="fa fa-edit"></i></span>
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