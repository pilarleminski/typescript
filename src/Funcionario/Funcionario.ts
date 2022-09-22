import Pessoa from "../Pessoa";

class Funcionario extends Pessoa{ //Pessoa é a classe base e Funcionário é a classe extendida
    ri:string;
    cpf:string;
    static ipAddress: string = '127.0.0.1';
    private _salario: number = 0;
    isAdmin:boolean = true;

    constructor(parametroNome: string, parametroIdade: number, parametroRi: string, parametroCpf: string, parametroSalario: number){
        super(parametroNome, parametroIdade);
        this.ri = parametroRi;
        this.cpf = parametroCpf;
        this.salario = parametroSalario;
        console.log(`Funcionário ${this.nome} de idade ${this.idade} ganha ${this.salario}`);
    }

//Sempre que tivermos uma propriedade privada criamos o getter e o setter
//Getter - controla como você vê a propriedade

    get salario(): number {
        return (this.isAdmin) ? this._salario : 0;
    }
//Setter - controla como você manipula ela
    set salario(valor:number){
        if(valor < 1200) {
            this._salario = 1200;
        }else{
            this._salario = valor;
        }
    }
}

export default Funcionario
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