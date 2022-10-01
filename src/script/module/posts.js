class Posts {

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

    #alert = 'Isso não é hora de ninguém estar acordado!'

    constructor() {}

    getDia(variable) {
        if(typeof(variable) !== 'number') throw 'Parâmetro de passagem inválido'
        if(variable > 6) throw 'Valor de parâmetro acima do permitido'
        return this.#bomDia[variable]
    }

    getTarde(variable) {
        if(typeof(variable) !== 'number') throw 'Parâmetro de passagem inválido'
        if(variable > 6) throw 'Valor de parâmetro acima do permitido'
        return this.#boaTarde[variable]
    }

    getNoite(variable) {
        if(typeof(variable) !== 'number') throw 'Parâmetro de passagem inválido'
        if(variable > 6) throw 'Valor de parâmetro acima do permitido'
        return this.#boaNoite[variable]
    }

    get alert() {
        return this.#alert
    }
}

export default Posts