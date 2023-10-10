class Jogador{
  Score = 0;
  pause(){
    console.log("Jogo Pausado");
  }
  exit(){
    console.log("Jogo Terminado");
  }

}

const jogador1 = new Jogador();
const jogador2 = new Jogador();

jogador1.Score += 1;

console.log(jogador1.Score);
console.log(jogador2.Score);

jogador1.pause();
jogador2.exit();


