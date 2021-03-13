import env from '../config/env';



const postLink = (category, link, name) => {

    console.log(category, link, name);

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    const body = {
        "categoriaLinkId": category,
        "nome": name,
        "descricao": "",
        "urlLink": link,
        "ativo": true
    }

    console.log("Olha o jonson", body)

    fetch(`${env.host}/Link`, { method: 'POST', headers: headers, mode: 'cors' , body: JSON.stringify(body) })
        .then(() => { return true; })
        .catch(() => { return false; })
}

export { postLink };