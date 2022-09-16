"use strict";
// sub - a função está engessada
function escreveConsole() {
    console.log("Santos é o novo campeão!");
}
function escreve() {
    return "Santos é o novo campeão!";
}
escreveConsole();
console.log(`O melhor time do mundo é o ${escreve()}`);
