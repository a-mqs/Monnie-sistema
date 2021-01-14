const id = require('./id')

const sequencia = {
    _id: 1,
    get id() { 
        return id.idFormat(this._id++)
    }
}

const pedidos = {}

function salvarPedido(pedido){
    if (!pedido.id){
        pedido.id = sequencia.id
    }
    pedidos[pedido.id] = pedido
    return pedido
}

//TODO: fazer o pedido retornar pelo id formatado (dica: pedidos não é iteravel)
function getPedido(id){
    return pedidos.id || {}
    
}

function getPedidos(){
    return Object.values(pedidos)
}

function excluirPedido(id){
    const pedido = pedidos[id]
    delete pedidos[id]
    return pedido
}

module.exports = { salvarPedido, getPedido, getPedidos, excluirPedido }