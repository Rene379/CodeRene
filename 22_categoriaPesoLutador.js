/*### 22. Categorização de Peso de Lutador
**Descrição:** Desenvolva um programa que classifica um lutador em categorias de peso: Peso-Mosca (até 52kg), Peso-Pena (até 57kg), 
Peso-Leve (até 63kg), Peso-Médio (até 74kg), Peso-Pesado (acima de 74kg).
**Objetivos de aprendizado:** Implementar múltiplas condições em cascata com limites específicos. 
**Dica:** Faça verificações do menor para o maior peso para simplificar a lógica. */

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

let peso = input("Informe o peso do lutador ");
let categoria = Number(peso);


if (categoria <= 52){
    console.log("O lutador é da categoria Peso-Mosca")
} else if (categoria > 52 && categoria <= 57) {
    console.log("O lutador é da categoria Peso-Pena")
} else if (categoria > 57 && categoria <= 63) {
    console.log("O lutador é da categoria Peso-leve")
} else if (categoria > 63 && categoria <= 74) {
    console.log("O lutador é da categoria Peso-Médio")
} else {
    console.log("O lutador é da categoria Peso-Pesado")
};

