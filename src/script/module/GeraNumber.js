export default class GeraNumber {

    constructor() {}

    static generate(max, min) {
        if(typeof(max) !== 'number' || typeof(min) !== 'number') throw new TypeError('Ambos os atributos devem ser do tipo number')
        if(min && max) throw new TypeError('Atributo não pode estar vazio')
        // min *= 1000; max *= 1000;
        return Math.floor(Math.random() * (max - min) + min)
    }
}
