import GeraNumber from "./GeraNumber.js"
import msg from '../../data/msg.json' assert {type: 'json'}

export default class Posts {

    // constructor() {}

    #shoot = i => {
        if(typeof(i) !== 'number') throw new TypeError(msg.typeError)
        switch(i) {
            case 1: throw new TypeError(msg.typeError)
            case 2: throw new RangeError(msg.rangeError)
        }
    }

    getDia = i => {
        if(typeof(i) !== 'number') this.#shoot(1)
        if(i > 6) this.#shoot(2)
        return msg.bomDia[i]
    }

    getTarde = i => {
        if(typeof(i) !== 'number') this.#shoot(1)
        if(i > 6) this.#shoot(2)
        return msg.boaTarde[i]
    }

    getNoite = i => {
        if(typeof(i) !== 'number') this.#shoot(1)
        if(i > 6) this.#shoot(2)
        return msg.boaNoite[i]
    }

    get alert() { return msg.alert[GeraNumber.generate(msg.alert.length, 0)] }
    get erro() { return msg.erro }
}
