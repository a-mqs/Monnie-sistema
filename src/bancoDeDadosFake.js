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

function getPedido(id){
    return Object.values(pedidos).filter(item => item.id == id)
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