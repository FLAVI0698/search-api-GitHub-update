import { baseUrl } from '../variables.js';

async function getUser(userName) {
    const reponse = await fetch(`${baseUrl}/${userName}`)
    return await reponse.json()
}

export { getUser }