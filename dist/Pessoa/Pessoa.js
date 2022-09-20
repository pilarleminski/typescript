"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    //Atributos - armazenam informações
    nome;
    idade;
    //Método - executam ações
    constructor(parametroNome, parametroIdade) {
        this.nome = parametroNome;
        this.idade = parametroIdade;
    }
}
exports.default = Pessoa;
//criando um objeto que instancia ou represenra a classe Pessoa
//tudo que precisamos, usamos o objeto funcionário
//chamando o método andar do objeto funcionario
//funcionario.andar("João", 20);
