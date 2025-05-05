function input(texto) {
    process.stdout.write(texto);
    const { execSync } = require('child_process');
    return execSync('read input && echo "$input"', { stdio: ['inherit', 'pipe', 'inherit'] })
        .toString().trim();
};


let letra = input ("Digite uma letra ").toLocaleLowerCase(); 

if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
console.log("Esta letra é vogal")
} else {
    console.log("Esta letra é consoante")
};
