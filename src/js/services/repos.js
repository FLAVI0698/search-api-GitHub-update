<<<<<<< HEAD
import { baseUrl, repositoriesQuantity } from "../variables.js";

async function getResponse(userName) {
    const reponse = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await reponse.json()
=======
import { token, baseUrl, repositoriesQuantity } from "../variables.js";

async function getResponse(userName) {
    try {
        const reponse = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`, {
            headers: {
                'Accept': 'application/vnd.github+json',
                'Authorization': `Bearer ${token}`,
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
        return await reponse.json()
    } catch (err){ console.log('Error', err)}
>>>>>>> 54a1eeec25f534091983154dee913cfa54a7eb8b
}

export { getResponse }