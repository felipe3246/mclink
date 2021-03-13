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

    console.log("Olha o jonson", body)

    fetch(`${env.host}/Link`, { method: 'POST', headers: headers, mode: 'cors' , body: JSON.stringify(body) })
        .then(() => { return true; })
        .catch(() => { return false; })
}

export { postLink };
