const express = require('express')
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDadosFake')

const porta = 3003
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/pedidos', (req, res) => {
    res.send(bancoDeDados.getPedidos())
})

app.get('/pedidos/:id', (req, res) => {
    res.send(bancoDeDados.getPedido(req.params.id))
})

app.post('/pedidos', (req, res) => {
    const pedido = bancoDeDados.salvarPedido({
        tipo: req.body.tipo,
        sabor: req.body.sabor
    })
    res.send(pedido)
})

app.put('/pedidos/:id', (req, res) => {
    const pedido = bancoDeDados.salvarPedido({
        tipo: req.body.tipo,
        sabor: req.body.sabor,
        id: req.params.id
    })
    res.send(pedido)
})

app.delete('/pedidos/:id', (req, res) => {
    const pedido = bancoDeDados.excluirPedido(req.params.id)
    res.send(pedido)

})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})