export async function guildDashboard(guildId) {
    const url = `http://localhost:3004/database/dashboard/${guildId}`
    const res = await fetch(url);
    if (res.ok) {
        return await res.json()
    } else {
        return `HTTP error: ${res.status}`
    }
}

export async function getGuilds() {
    const url = 'http://localhost:3004/database/guilds'
    const res = await fetch(url);
    if (res.ok) {
        return await res.json()
    } else {
        return `HTTP error: ${res.status}`
    }
}