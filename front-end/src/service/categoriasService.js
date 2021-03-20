import env from '../config/env';
import { checkString } from '../utils/validateFields';

const getCategories = () => {
    return fetch(`${env.host}/CategoriaLink`).then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => response);
}

const postCategory = (icon, name) => {
    if (checkString(icon) || checkString(name)) {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        };

        const body = {
            "nome": name,
            "ico": icon,
            "posicao": 0
        }

        fetch(`${env.host}/CategoriaLink`, { method: 'POST', headers: headers, mode: 'cors' , body: JSON.stringify(body) })
            .then(() => { return true; })
            .catch(() => { return false; });
    } else {
        alert('Todos os campos são obrigatórios');
    }
}

const deleteCategory = (id) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
    };

    return fetch(`${env.host}/CategoriaLink/${id}`, { method: 'DELETE', headers: headers, mode: 'cors' })
        .then(() => { return true; })
        .catch(() => { return false; })
}

export { getCategories, postCategory, deleteCategory };
