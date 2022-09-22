"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("../Pessoa"));
class Funcionario extends Pessoa_1.default {
    ri;
    cpf;
    static ipAddress = '127.0.0.1';
    _salario = 0;
    isAdmin = true;
    constructor(parametroNome, parametroIdade, parametroRi, parametroCpf, parametroSalario) {
        super(parametroNome, parametroIdade);
        this.ri = parametroRi;
        this.cpf = parametroCpf;
        this.salario = parametroSalario;
        console.log(`Funcionário ${this.nome} de idade ${this.idade} ganha ${this.salario}`);
    }
    //Sempre que tivermos uma propriedade privada criamos o getter e o setter
    //Getter - controla como você vê a propriedade
    get salario() {
        return (this.isAdmin) ? this._salario : 0;
    }
    //Setter - controla como você manipula ela
    set salario(valor) {
        if (valor < 1200) {
            this._salario = 1200;
        }
        else {
            this._salario = valor;
        }
    }
}
exports.default = Funcionario;
// criando um objeto que instancia ou representa a classe Funcionario
const hcoder = new Funcionario("Paula", 23, "1342545", "123.123.123-00", 1000);
console.log("Chamando a propriedade nome usando o objeto: NOME-", hcoder.nome);
console.log("Acessando a propriedade estática: " + Funcionario.ipAddress);
/* isAdmin = false
Funcionário Paula de idade 23 ganha 0
Chamando a propriedade nome usando o objeto: NOME- Paula
Acessando a propriedade estática: 127.0.0.1
*/
/* isAdmin = true
Funcionário Paula de idade 23 ganha 1200
Chamando a propriedade nome usando o objeto: NOME- Paula
Acessando a propriedade estática: 127.0.0.1
*/ 
