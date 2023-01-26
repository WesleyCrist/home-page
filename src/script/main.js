import Hour from "./module/hour.js"
import Posts from "./module/posts.js"

(() => {

    const p = document.querySelector('.msg')
    const hora = new Hour()
    const posts = new Posts()

    try {
        if(typeof(hora.hora) === 'undefined') throw new TypeError('campo hora vazio')
        if(hora.hora > 4 && hora.hora < 12) p.innerHTML = posts.getDia(hora.dia)
        if(hora.hora >= 12 && hora.hora < 18) p.innerHTML = posts.getTarde(hora.dia)
        if(hora.hora >= 18 && hora.hora <= 23) p.innerHTML = posts.getNoite(hora.dia)
        if(hora.hora >= 0 && hora.hora <= 4) p.innerHTML = posts.alert
        // console.log(hora.hora)
    } catch(e) {
        p.innerHTML = posts.erro
        console.log(`error: ${e.message}`)
    }

})()
