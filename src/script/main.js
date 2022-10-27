import Hour from "./module/hour.js"
import Posts from "./module/posts.js"
// import geraNumber from "./module/geraNumber.js"

(() => {

    const p = document.querySelector('.msg')
    const hora = new Hour()
    const posts = new Posts()
    const erro = 'Erro na captura da mensagem!'
    
    // console.log(hora.hora)

    try {
        if(hora.hora > 4 && hora.hora < 12) {
            p.innerHTML = posts.getDia(hora.dia) ?? erro
        } else if(hora.hora >= 12 && hora.hora < 18) {
            p.innerHTML = posts.getTarde(hora.dia) ?? erro
        } else if(hora.hora >= 18 && hora.hora <= 23) {
            p.innerHTML = posts.getNoite(hora.dia) ?? erro
        } else {
            p.innerHTML = posts.getAlert() ?? erro
        }
    } catch(e) {
        p.innerHTML = erro
        console.log(`error: ${e.message}`)
    }

})()