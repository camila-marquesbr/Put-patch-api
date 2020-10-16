const games = require('../models/games.json')

const atualizar = (request, response) =>{
    const gameAtualizado = request.body
    const id = request.params.id
    const gameIds = games.map(game=>game.id)

    console.log(gameIds)
}

module.exports = {
    atualizar
}
