let info = "início"
const agora = new Date()
const dia = agora.getDay()
const hora = agora.getHours()
const msg = [[  // mensagens de bom dia
                'Bom dia, espero que tenha um ótimo domingo!', 
                'Bom dia, espero que tenha uma ótima segunda!', 
                'Bom dia, espero que tenha uma ótima terça!', 
                'Bom dia, espero que tenha uma ótima quarta!', 
                'Bom dia, espero que tenha uma ótima quinta!',
                'Bom dia, espero que tenha uma ótima sexta! | #Sextou',
                'Bom dia, espero que tenha um ótimo Sábado!'],
                [ // mensagens de boa tarde
                'Boa tarde, espero que esteja tendo um ótimo domingo!',
                'Boa tarde, espero que esteja tendo uma ótima segunda!',
                'Boa tarde, espero que esteja tendo uma ótima terça!',
                'Boa tarde, espero que esteja tendo uma ótima quarta!',
                'Boa tarde, espero que esteja tendo uma ótima quinta!',
                'Boa tarde, espero que esteja tendo uma ótima sexta',
                'Boa tarde, espero que esteja tendo um ótimo Sábado!'],
                [ // mensagens de boa noite
                'Boa noite, espero que tenha tido um ótimo domingo!',
                'Boa noite, espero que tenha tido uma ótima segunda!',
                'Boa noite, espero que tenha tido uma ótima terça!',
                'Boa noite, espero que tenha tido um ótima quarta!',
                'Boa noite, espero que tenha tido uma ótima quinta!',
                'Boa noite, espero que tenha tido uma ótima sexta!',
                'Boa noite, espero que tenha tido um ótimo Sábado!']]
const alerta = 'Isso não é hora de ninguém estar acordado'

function manha(pos)  { info = msg[0][pos] }
function tarde(pos)  { info = msg[1][pos] }
function noite(pos)  { info = msg[2][pos] }
function madrug()    { info = alerta      }

if (hora > 5 && hora < 12) {
    manha(dia)
}
else if (hora >= 12 && hora < 18) {
    tarde(dia)
}
else if (hora >= 18 && hora <= 23) {
    noite(dia)
}
else {
    madrug()
}

alert(info)
