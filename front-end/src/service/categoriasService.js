import env from '../config/env';

const getCategories = () => {
    return fetch(`${env.host}/categoriaLink`).then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => response);
}

export { getCategories };