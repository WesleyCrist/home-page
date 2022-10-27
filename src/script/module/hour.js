class Hour {

    #hora
    #dia
    #agora

    constructor() {
        this.#agora = new Date()
        this.#dia = this.#agora.getDay()
        this.#hora = this.#agora.getHours()
    }

    get hora() {
        return this.#hora
    }

    get dia() {
        return this.#dia
    }
}

export default Hour