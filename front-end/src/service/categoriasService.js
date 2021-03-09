import env from '../config/env';

const getCategories = () => {
    return fetch(`${env.host}/categoriaLink`).then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => response);
}

const postCategory = (category) => {
    fetch(`${env.host}/categoryLink`, { method: 'POST', body: category })
        .then(() => { return true; })
        .catch(() => { return false; })
}

export { getCategories, postCategory };