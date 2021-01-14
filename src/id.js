const zeroPad = (num, qtde) => String(num).padStart(qtde, '0')


function mesAgora_ComeçandoPor1_DoisDigitos() {
    const mes = new Date().getMonth() + 1
    return zeroPad(mes, 2)

}

function diaAgora_DoisDigitos() {
    const dia = new Date().getDate()
    return zeroPad(dia, 2)

}

const vendaComZeros = idVenda => zeroPad(idVenda, 4)

function idFormat(idVenda){
    return diaAgora_DoisDigitos() 
    + mesAgora_ComeçandoPor1_DoisDigitos() 
    + new Date().getFullYear() 
    + vendaComZeros(idVenda)
}

module.exports = { idFormat }