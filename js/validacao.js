function valorValido(chute){
    const numero=+chute

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>valor invalido</div>'
    }

    if(valorMaiorMenor(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h1 class='title'>Você acertou!</h1>
        <h3 class='description'>O número secreto é ${numeroSecreto}</h3>

        <button id='jogar-novamente' class='btn-jogar'>Jogar Novamente</button>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML +=`
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }else{
        elementoChute.innerHTML +=`
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function valorMaiorMenor(numero) {
    return numero > maiorValor|| numero < menorValor
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

document.body.addEventListener('click', e=>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})