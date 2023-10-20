class Estudante{
  constructor(nome,idade,materia){
    this.nome = nome;
    this.idade = idade;
    this.materia = materia;
  }
  aprendendo(){
    console.log("Eu sou " + this.nome + ", estou estudando "+ this.materia);
  }
}

const estudante1 = new Estudante();
const estudante2 = new Estudante();

estudante1.nome = "Carlos";
estudante1.idade = 20;
estudante1.materia = "matemática";

estudante2.idade = 25;
estudante2.nome = "Marcos";

console.table(estudante2);
// console.log(estudante1.nome);
// estudante1.aprendendo();
