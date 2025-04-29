/*
### 48. Identificação de Categoria de Produto
**Descrição:** Faça um programa que determina a categoria de um produto com base em um código de barras.
Por exemplo, códigos que começam com 3 são produtos de limpeza, com 4 são alimentos, com 5 são bebidas, etc.
**Objetivos de aprendizado:** Trabalhar com prefixos de códigos e estruturas condicionais.
**Dica:** Extraia o primeiro dígito do código para simplificar a verificação.
###
*/

const { isDate, isNumberObject } = require('util/types');

function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};


const cb = input("Informe o código: ");
const codigoBarra =  cb;

if (codigoBarra[0] == `3`) {
    console.log("Categoria: Produto de limpeza.")
} else if (codigoBarra[0] == `4`) {
    console.log("Categoria: Alimentos.")
} else if (codigoBarra[0] == `5`) {
    console.log("Categoraia: Bebidas.")
} else {
    console.log("Demais produtos.")
};