import env from '../config/env';

const getCategories = () => {
    return fetch(`${env.host}/CategoriaLink`).then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => response);
}

const postCategory = (icon, name) => {

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    const body = {
        "nome": name,
        "ico": icon,
        "posicao": 0
    }

    fetch(`${env.host}/CategoriaLink`, { method: 'POST', headers: headers, mode: 'cors' , body: JSON.stringify(body) })
        .then(() => { return true; })
        .catch(() => { return false; })
}

export { getCategories, postCategory };