class heroi{
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ''
    }
    
    atacar() {
        let ataque = ""; 
    
        switch (this.tipo) {
          case "mago":
            ataque = "MAGIA";
            break;
          case "guerreiro":
            ataque = "ESPADA";
            break;
          case "monge":
            ataque = "ARTES MARCIAIS";
            break;
          case "ninja":
            ataque = "SHURIKEN";
            break;
          default:
            ataque = "SEM ATAQUE DEFINIDO";
        }
        // Imprime a mensagem do ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}!`);
    }
}

// Usando a classe Herói
let heroi1 = new heroi('João', 20, 'mago');
let heroi2 = new heroi('Pedro', 16, 'guerreiro')
let heroi3 = new heroi('Lucas', 23, 'monge')
let heroi4 = new heroi('Paulo', 18, 'ninja')

// Usando a função Atacar
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();


