(function(){
    const form = document.querySelector('.form')
    const nome = document.querySelector('.nome')
    const resultado = document.querySelector('.resultado')
    const peso = document.querySelector('.peso')
    const altura = document.querySelector('.altura')

    function msg(condition) {
        // Escrever na tela o resultado final so script
        if (condition != "") {
            resultado.innerHTML = (`${condition}`)
        } else {
            alert("A função msg recebeu uma string vazia!")
        }
    }

    function calc(nome, peso, altura) {
    // função pra calcular imc do indivíduo
        let imc = peso / ( altura * altura)
        
        if(imc >= 0 && imc <= 18.5) {
            msg(`${nome}, o seu imc deu ${imc.toFixed(2)}, vc está abaixo do peso!`)
        } else if(imc > 18.5 && imc <= 24.9) {
            msg(`${nome}, o seu imc deu ${imc.toFixed(2)}, vc está com peso normal!`)
        } else if(imc > 24.9 && imc <= 29.9) {
            msg(`${nome}, o seu imc deu ${imc.toFixed(2)}, vc está com sobrepeso!`)
        } else if(imc > 29.9 && imc <= 34.9) {
            msg(`${nome}, o seu imc deu ${imc.toFixed(2)}, vc está com obesidade grau 1!`)
        } else if(imc > 34.9 && imc <= 39.9) {
            msg(`${nome}, o seu imc deu ${imc.toFixed(2)}, vc está com obesidade grau 2!`)
        } else if(imc > 39.9) {
            msg(`${nome}, o seu imc deu ${imc.toFixed(2)}, vc está com obesidade grau 3!`)
        }
    }

    form.addEventListener('submit', (evento) => {
        evento.preventDefault()
        // alert(peso.value)
        if(nome.value === "" || peso.value === ""|| altura.value === "") {
            msg("Dados incompletos")
            // console.log(1)
        } else if(Number(peso.value) <= 0 || Number(altura.value) <= 0) {
            msg("Dados incorretos, por favor verifique e digite novamente!")
            // console.log(2)
        } else {
            if(Number(peso.value) != NaN && Number(altura.value) != NaN) {
                calc(nome.value, Number(peso.value), Number(altura.value))
            } else {
                msg('Algo de errado não deu certo!')
            }
        }
    })
})()
