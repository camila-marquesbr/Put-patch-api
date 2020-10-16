const musicas = require('../models/musicas.json')

const atualizar = (request, response) =>{
    const musicaAtualizada = request.body
    const id = request.params.id
    const musicaIds = musicas.map(musica=>musica.id)

    console.log(musicaIds)
}

module.exports = {
    atualizar
}
