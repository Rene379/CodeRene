/*### 50. Jogo de Pedra, "Papel" e "Tesoura"
**Descrição:** Desenvolva um programa que simula um jogo de "pedra", "papel" e "tesoura" entre dois jogadores.
O programa deve determinar o vencedor com base nas escolhas dos jogadores ("pedra" vence "tesoura", "tesoura" vence "papel", "papel" vence "pedra").
**Objetivos de aprendizado:** Implementar lógica de jogo com estruturas condicionais complexas.
**Dica:** Utilize códigos para representar cada escolha (ex: 1 = "pedra", 2 = "papel", 3 = "tesoura") ou compare strings diretamente.
*/

const { isDate } = require('util/types');

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};

const j1 = input("Jogador 1: ");
const jogador1 = j1;
const j2 = input("Jogador 2: ");
const jogador2 = j2;

if (jogador1 == "pedra" && jogador2 == "papel") {
    console.log("O vencedor é o jogador 2.")
} else if (jogador1 == "pedra" && jogador2 == "tesoura") {
    console.log("O vencedor é o jogador 1.")
} else if (jogador1 == "papel" && jogador2 == "pedra") {
    console.log("O vencedor é o jogador 1.")
} else if (jogador1 == "papel" && jogador2 == "tesoura") {
    console.log("O vencedor é o jogador 2.")
} else if (jogador1 == "tesoura" && jogador2 == "pedra") {
    console.log("O vencedor é o jogador 2.")
} else if (jogador1 == "tesoura" && jogador2 == "papel") {
    console.log("O vencedor é o jogador 1.")
} else {
    console.log("Empate. Joguem novamente.")
};