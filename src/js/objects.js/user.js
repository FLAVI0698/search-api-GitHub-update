const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    seguidores: '',
    sequindo: '',
    repositories: [],
    eventos: [],
    setInfor(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.userName = gitHubUser.login;
        this.seguidores = gitHubUser.followers
        this.seguindo = gitHubUser.following
    },
    setRepositories(gitHubRepositores) {
        this.repositories = gitHubRepositores;
    },
    setPushEvents(gitHubEvents) {
        this.eventos = gitHubEvents.map(evento => {
            if(evento.type === 'PushEvent') {
                return {
                    nameRepositorio: evento.repo.name,
                    commitsMensagens: evento.payload.commits.map(commit => commit.message)
                }
            }
            if(evento.type === "CreateEvent") {
                return {
                    nameRepositorio: evento.repo.name,
                    commitsMensagens: ['Sem mensagem de commit']
                }
            }
        })
    }
}

export { user }