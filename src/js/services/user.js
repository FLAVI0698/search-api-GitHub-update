import { token, baseUrl } from '../variables.js';

async function getUser(userName) {
    try {
        const reponse = await fetch(`${baseUrl}/${userName}`, {
            headers: {
                'Accept': 'application/vnd.github+json',
                'Authorization': `Bearer ${token}`,
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
        return await reponse.json()
    } catch (err){ console.log('Error', err)}
}

export { getUser }