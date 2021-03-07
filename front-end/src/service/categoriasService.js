import env from '../config/env';

const getCategories = () => {
    return fetch(`${env.host}/categorias`).then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => response);
}

export { getCategories };