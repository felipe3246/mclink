import env from '../config/env';



const postLink = (category, link, name) => {

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
    };

    const body = {
        "categoriaLinkId": parseInt(category),
        "nome": name,
        "descricao": "",
        "urlLink": link,
        "ativo": true
    }

    fetch(`${env.host}/Link`, { method: 'POST', headers: headers, mode: 'cors' , body: JSON.stringify(body) })
        .then(() => { return true; })
        .catch(() => { return false; })
}

const deleteLink = (id) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
    };

    return fetch(`${env.host}/Link/${id}`, { method: 'DELETE', headers: headers, mode: 'cors' })
        .then(() => { return true; })
        .catch(() => { return false; })
}

export { postLink, deleteLink };
