import GeraNumber from "./GeraNumber.js"

export default class Posts {

    constructor() {}

    #bomDia = [
        'Bom dia, espero que tenha um ótimo domingo!', 
        'Bom dia, espero que tenha uma ótima segunda!', 
        'Bom dia, espero que tenha uma ótima terça!', 
        'Bom dia, espero que tenha uma ótima quarta!', 
        'Bom dia, espero que tenha uma ótima quinta!',
        'Bom dia, espero que tenha uma ótima sexta! | #Sextou',
        'Bom dia, espero que tenha um ótimo Sábado!'
    ]

    #boaTarde = [
        'Boa tarde, espero que esteja tendo um ótimo domingo!',
        'Boa tarde, espero que esteja tendo uma ótima segunda!',
        'Boa tarde, espero que esteja tendo uma ótima terça!',
        'Boa tarde, espero que esteja tendo uma ótima quarta!',
        'Boa tarde, espero que esteja tendo uma ótima quinta!',
        'Boa tarde, espero que esteja tendo uma ótima sexta!',
        'Boa tarde, espero que esteja tendo um ótimo Sábado!'
    ]
    
    #boaNoite = [
        'Boa noite, espero que tenha tido um ótimo domingo!',
        'Boa noite, espero que tenha tido uma ótima segunda!',
        'Boa noite, espero que tenha tido uma ótima terça!',
        'Boa noite, espero que tenha tido uma ótima quarta!',
        'Boa noite, espero que tenha tido uma ótima quinta!',
        'Boa noite, espero que tenha tido uma ótima sexta!',
        'Boa noite, espero que tenha tido um ótimo Sábado!'
    ]
    
    #alert = [
        'Isso não é hora de ninguém estar acordado!',
        'Homi, vai dormir...',
        'Isso é hora de tu acordado criatura!?',
        'Cuida vai dormir, larga essa tela!',
        'olha a hora pow, vai dormir!'
    ]

    #erro = 'Erro na captura da mensagem!'
    #typeError = 'Argumento atribuído de tipo inválido'
    #rangeError = 'Argumento com valor acima do permitido'

    #shoot = i => {
        if(typeof(i) !== 'number') throw new TypeError(this.#typeError)
        switch(i) {
            case 1:
                throw new TypeError(this.#typeError)
                // break;
            case 2:
                throw new RangeError(this.#rangeError)
                // break;
        }
    }

    getDia = i => {
        if(typeof(i) !== 'number') this.#shoot(1)
        if(i > 6) this.#shoot(2)
        return this.#bomDia[i]
    }

    getTarde = i => {
        if(typeof(i) !== 'number') this.#shoot(1)
        if(i > 6) this.#shoot(2)
        return this.#boaTarde[i]
    }

    getNoite = i => {
        if(typeof(i) !== 'number') this.#shoot(1)
        if(i > 6) this.#shoot(2)
        return this.#boaNoite[i]
    }

    get alert() {
        return this.#alert[GeraNumber.generate(this.#alert.length, 0)]
    }

    get erro() {
        return this.#erro
    }
}
