export default class GeraNumber {

    constructor() {}

    static generate = (max, min) => {
        if(typeof(max) !== 'number' || typeof(min) !== 'number') throw new TypeError('Ambos os atributos devem ser do tipo number')
        if(min && max) throw new RangeError('Atributo não pode estar vazio')
        return Math.floor(Math.random() * (max - min) + min)
    }
}
