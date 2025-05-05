class Carro {
    constructor(cor, modelo, velocidade) {
        this.cor = cor;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }

    andar() {
        console.log(`O carro ${this.modelo} da cor ${this.cor} andou numa velocidade de ${this.velocidade} KM/h`)
    }
}

const bmw = new Carro("Azul", "BMW", 200)
const gol = new Carro("Preto", "Volkswagen", 100)

bmw.andar();
gol.andar();

console.log(bmw.cor)