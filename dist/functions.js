"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// sub - a função está engessada
function escreveConsole() {
    console.log("Santos é o novo campeão!");
}
function escreve() {
    return "Santos é o novo campeão!";
}
escreveConsole();
console.log(`O melhor time do mundo é o ${escreve()}`);
// Existem duas categorias de funções: built-in e user defined
//funções built-in
const empresa = "Avanade";
console.log(empresa.toUpperCase(), empresa.toLowerCase(), empresa.length);
const locale = 'pt-br';
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
};
console.log(new Date().toLocaleDateString(locale, options));
const user = {
    name: "João",
    age: 25,
    email: 'joao@gmail.com',
    cpf: '123.456.789-00',
    address: {
        street: 'Rua ABC',
        number: 1000,
        city: 'São Paulo',
        state: 'SP'
    }
};
console.log(user);
