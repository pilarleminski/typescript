import Pessoa from "../Pessoa";

class Funcionario extends Pessoa{
    ri:string;
    cpf:string;

    constructor(parametroNome: string, parametroIdade: number, parametroRi: string, parametroCpf: string){
        super(parametroNome, parametroIdade);
        this.ri = parametroRi;
        this.cpf = parametroCpf;
        this.cadFuncionario();
    }
    cadFuncionario(){
        console.log(`Funcionário ${this.nome} cadastrado com sucesso!`);
    }
}

export default Funcionario
const hcoder = new Funcionario("Paula", 23, "1342545", "123.123.123-00");
