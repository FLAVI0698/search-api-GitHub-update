import { token, baseUrl } from "../variables.js";

async function getEvents (userName) {
    try {
        const response = await fetch(`${baseUrl}/${userName}/events?per_page=10`, {
            headers: {
                'Accept': 'application/vnd.github+json',
                'Authorization': `Bearer ${token}`,
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
        return await response.json()
    } catch (err) {console.log('error', err)}
}

export { getEvents }