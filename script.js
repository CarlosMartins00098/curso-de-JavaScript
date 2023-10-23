class Estudante{
  #nome
  #idade
  #materia

  constructor(nome,idade,materia){
    this.#nome = nome;
    this.#idade = idade;
    this.#materia = materia;
  }

  get nome(){
    return this.#nome;
  }

  set nome(nome){
    this.#nome = nome;
  }

  get idade(){
    return this.#idade;
  }

  set idade(idade){
    this.#idade = idade;
  }

  get materia(){
    return this.#materia;
  }

  set materia(materia){
    this.#materia = materia;
  }

  aprendendo(){
    console.log("Eu sou " + this.nome + ", estou estudando "+ this.materia);
  }
}

const estudante1 = new Estudante("Carlos", 20, "matemática");

estudante1.nome = "pedro";
estudante1.idade = 22;
estudante1.materia = "geôgrafia"

console.table(estudante1.nome);
console.table(estudante1.idade);
console.table(estudante1.materia);
