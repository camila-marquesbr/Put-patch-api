const games = require('../models/games.json')

const atualizar = (request, response)=>{
    const gameAtualizado = request.body
    const id = parseInt(request.params.id)

    const gameIds = games.map(game => game.id)
    
    const atualizaId = gameIds.indexOf(id)

    const gameAtualizadocomId = {id, ...gameAtualizado}
    musicas.splice(atualizaId, 1, gameAtualizadocomId)

    response.status(200).send(games.find(game => game.id === id))
    console.log(games)
     

}


module.exports = {
    atualizar
}
