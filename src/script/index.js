import Hour from "./module/hour.js"
import Posts from "./module/posts.js"

(() => {

    const p = document.querySelector('.msg')
    const hora = new Hour()
    const posts = new Posts()

    // console.log(hora.hora)
    if(hora.hora > 4 && hora.hora < 12) p.innerHTML = posts.getDia(hora.dia)
    if(hora.hora >= 12 && hora.hora < 18) p.innerHTML = posts.getTarde(hora.dia)
    if(hora.hora >= 18 && hora.hora <= 23) p.innerHTML = posts.getNoite(hora.dia)
    if(hora.hora > 23 && hora.hora <= 4) p.innerHTML = posts.alert

    console.log('module mode')
})()