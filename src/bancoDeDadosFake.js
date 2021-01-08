// const pedidos = {}

// function definirId(){

// }

// function salvarPedido(pedido){

// }

const zeroPad = (num, qtde) => String(num).padStart(qtde, '0')

const vendas = {
    _id: 1,
    get id() { return this._id++ }
}

//TODO: Adaptar pra não ficar 012, por exemplo
function mesAgora_ComeçandoPor1_DoisDigitos(){
    const mes = new Date().getMonth() + 1
    return zeroPad(mes, 2)
}

//TODO: Adaptar pra não ficar 022, por exemplo
function diaAgora_DoisDigitos(){
    const dia = new Date().getDate()
    return zeroPad(dia, 2)
}   

//TODO: Dar um nome decente pra esssa função
//TODO: Terminar de escrever
/**
 * LÓGICA: Se a venda tiver 1 digito, poe 3 zeros antes
 *         Se a venda tiver 2 digitos, poe 2 zeros antes
 *         Se a venda tiver 3 digitos, poe 1 zero antes
 *         Se a venda tiver 4 digitos, mantenha esse numero
 * 
 */
function a(codVenda){
    if(codVenda == undefined){

    }
}

const dataSemReparticao = diaAgora_DoisDigitos() + mesAgora_ComeçandoPor1_DoisDigitos() + new Date().getFullYear()
console.log(dataSemReparticao)