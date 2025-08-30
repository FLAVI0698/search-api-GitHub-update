import { baseUrl, repositoriesQuantity } from "../variables.js";

async function getResponse(userName) {
    const reponse = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await reponse.json()
}

export { getResponse }