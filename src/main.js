var nameUser = 'Pilar Veiga'; //identificador
var idade = 38;
var statusUser = 1;
if (statusUser == 1) {
    console.log("Estudante");
}
else if (statusUser == 2) {
    console.log("Empresa");
}
else if (statusUser == 3) {
    console.log("Administrador");
}
if (idade <= 2) {
    console.log("Bebê");
}
else if (idade <= 11) {
    console.log("Criança");
}
else if (idade <= 19) {
    console.log("Adolescente");
}
else if (idade <= 59) {
    console.log("Adulto");
}
else {
    console.log("Idoso");
}
console.log("Seja bem vindo ao curso de TypeScript ".concat(nameUser));
