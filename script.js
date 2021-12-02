/*

var nome
var idade, peso, altura, tmp, IMC

alert("Bem vindo!")

nome = prompt("Qual seu nome?")
idade = Number.parseInt(prompt("Qual sua idade?"))
peso = Number.parseFloat(prompt("Qual seu peso?"))
tmp = Number.parseFloat(prompt("Qual sua altura em centímetros?"))

altura = tmp / 100
IMC = peso / (altura * altura)

if (idade >= 65) {

    if (IMC <= 22){
        alert(nome + ", você está abaixo do peso!")
    }
    else if (IMC > 22 && IMC <= 27){
        alert(nome + ", você está adequado ou eutrófico!")
    }
    else {
        alert(nome + ", você está acima do peso!")
    }
    
}
else if (idade < 65) {

    if (IMC < 18.5) {
        alert(nome + ", você está abaixo do peso!")
    }
    else if (IMC >=18.5 && IMC < 24.9) {
        alert(nome + ", você está com o peso normal!")
    }
    else if (IMC >=25 && IMC < 29.9) {
        alert(nome + ", excesso de peso!")
    }
    else if (IMC >=30 && IMC < 34.9) {
        alert(nome + ", você está com obesidade classe 1!")
    }
    else if (IMC >= 35 && IMC < 39.9) {
        alert(nome + ", você está com obesidade classe 2!")
    }
    else {
        alert(nome + ", você está com obesidade classe 3!")
    }
}     
else {
    alert("Ação inválida!")
}

alert("Beba água!")

*/