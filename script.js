var info = "início"
var agora = new Date()
var dia = agora.getDay()
var hora = agora.getHours()
if (hora > 6 && hora < 12) {
    //Bom dia
    switch (dia){
        case 0:
        info = "Bom dia, espero que tenha um ótimo domingo!"
        break
    case 1:
        info = "Bom dia, espero que tenha uma ótima segunda!"
        break
    case 2:
        info = "Bom dia, espero que tenha uma ótima terça!"
        break
    case 3:
        info = "Bom dia, espero que tenha um ótima quarta!"
        break
    case 4:
        info = "Bom dia, espero que tenha uma ótima quinta!"
        break
    case 5:
        info = "Bom dia, espero que tenha uma ótima sexta! | #Sextou"
        break
    case 6:
        info = "Bom dia, espero que tenha um ótimo Sábado!"
        break
    default:
        console.log("Erro inexperado")
    }
} else if (hora >= 12 && hora < 18) {
    //Boa tarde
    switch (dia){
        case 0:
        info = "Boa tarde, espero que esteja tendo um ótimo domingo!"
        break
    case 1:
        info = "Boa tarde, espero que esteja tendo uma ótima segunda!"
        break
    case 2:
        info = "Boa tarde, espero que esteja tendo uma ótima terça!"
        break
    case 3:
        info = "Boa tarde, espero que esteja tendo um ótima quarta!"
        break
    case 4:
        info = "Boa tarde, espero que esteja tendo uma ótima quinta!"
        break
    case 5:
        info = "Boa tarde, espero que esteja tendo uma ótima sexta!"
        break
    case 6:
        info = "Boa tarde, espero que esteja tendo um ótimo Sábado!"
        break
    default:
        console.log("Erro inexperado")
    }
} else {
    //Boa noite
    switch (dia){
        case 0:
        info = "Boa noite, espero que tenha tido um ótimo domingo!"
        break
    case 1:
        info = "Boa noite, espero que tenha tido uma ótima segunda!"
        break
    case 2:
        info = "Boa noite, espero que tenha tido uma ótima terça!"
        break
    case 3:
        info = "Boa noite, espero que tenha tido um ótima quarta!"
        break
    case 4:
        info = "Boa noite, espero que tenha tido uma ótima quinta!"
        break
    case 5:
        info = "Boa noite, espero que tenha tido uma ótima sexta!"
        break
    case 6:
        info = "Boa noite, espero que tenha tido um ótimo Sábado!"
        break
    default:
        console.log("Erro inexperado")
    }
}
alert(info)