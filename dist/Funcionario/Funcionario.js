"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    nome = 'Usuario';
    ri = '132345';
    cpf = '123.456.789-00';
    cadFuncionario(parametroNome, parametroRi, parametroCpf) {
        this.nome = parametroNome;
        this.ri = parametroRi;
        this.cpf = parametroCpf;
        console.log(`Funcionário ${this.nome} cadastrado com sucesso!`);
    }
}
exports.default = Funcionario;
