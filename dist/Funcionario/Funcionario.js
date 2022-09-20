"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("../Pessoa"));
class Funcionario extends Pessoa_1.default {
    ri;
    cpf;
    constructor(parametroNome, parametroIdade, parametroRi, parametroCpf) {
        super(parametroNome, parametroIdade);
        this.ri = parametroRi;
        this.cpf = parametroCpf;
        this.cadFuncionario();
    }
    cadFuncionario() {
        console.log(`Funcionário ${this.nome} cadastrado com sucesso!`);
    }
}
exports.default = Funcionario;
const hcoder = new Funcionario("Paula", 23, "1342545", "123.123.123-00");
