const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `
                        <div class="info">
                                <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                            <div class="data">
                                <h1>${user.name ?? 'Não possui nome cadastrado😒'}</h1>
                                <p>${user.bio ?? 'Não possui bio cadastrado 😒'}</p>
                                <div class="campo-seguidor"> 
                                    <p class="seguidores">🔽${user.seguidores} Seguidores</p> 
                                    <p class="seguidores">🔼${user.seguindo} Seguindo</p>
                                </div>
                            </div>
                        </div>`;

        let repositoriesItens = '';
        let eventosItens = '';

        user.repositories.forEach(repos => repositoriesItens += `
                <li><a href="${repos.html_url}">
                ${repos.name}
                <ul>
                    <li class="status">🍴${repos.forks}</li>
                    <li class="status">⭐ ${repos.stargazers_couunt ?? "0"}</li>
                    <li class="status">👀 ${repos.watchers_count ?? "0"}</li>
                    <li class="status">🖥️ ${repos.language ?? ""}</li>
                </ul>
                </a></li>
                `)

        user.eventos.forEach(event => eventosItens +=`<li><span class="negrito">${event.nameRepositorio}</span> - ${event.commitsMensagens}</li>`)

        if (repositoriesItens.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                           </div>
                                            <div class="events">
                                                <h2>Eventos</h2>
                                                <ul>${eventosItens}</ul>
                                            </div>`
        }

    },
    renderNotFound() {
        this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`
    }

}

export { screen }