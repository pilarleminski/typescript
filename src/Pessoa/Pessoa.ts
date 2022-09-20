class Pessoa {
    //Atributos - armazenam informações
    nome:string;
    idade:number;

    //Método - executam ações
    constructor(parametroNome: string, parametroIdade: number){
        this.nome = parametroNome;
        this.idade = parametroIdade;
        
    }
}

export default Pessoa;
//criando um objeto que instancia ou represenra a classe Pessoa
//tudo que precisamos, usamos o objeto funcionário

//chamando o método andar do objeto funcionario
//funcionario.andar("João", 20);