/*Jo-Ken-Po*/

combinacoes = [0, 1, 2];

function JkpGame(jogada){
    definedValor = escolherValor();

    if(jogada == 0 && definedValor == 2){
        document.getElementById('Jkp-saida').innerHTML = "Vitória! O oponente jogou: Tesoura";
    }
    else if(jogada == 0 && definedValor == 1){
        document.getElementById('Jkp-saida').innerHTML = 'Derrota! O oponente jogou: Papel'
    }
    else if(jogada == 1 && definedValor == 0){
        document.getElementById('Jkp-saida').innerHTML = 'Vitória! O oponente jogou: Pedra'
    }
    else if(jogada == 1 && definedValor == 2){
        document.getElementById("Jkp-saida").innerHTML = 'Derrota! O oponente jogou: Tesoura'
    }
    else if(jogada == 2 && definedValor == 1){
        document.getElementById('Jkp-saida').innerHTML = 'Vitória! O oponente jogou: Papel'
    }
    else if(jogada == 2 && definedValor == 0){
        document.getElementById('Jkp-saida').innerHTML = 'Derrota! O oponente jogou: Pedra'
    }
    else{
        document.getElementById('Jkp-saida').innerHTML = 'Empate! O oponente jogou o mesmo que você'
    }
}

function escolherValor(){
    randomValor = Math.floor(Math.random() * combinacoes.length);
    return combinacoes[randomValor];
}

/*Jogo da Velha*/

const cells = document.getElementsByClassName('cell');
const statusJogo = document.getElementById('statusJogo');
const resetJv = document.getElementById('resetJv');
const winConditions = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", ""];
let jogador = 'X';
let runnig = false;

iniciarJogo();

function iniciarJogo(){
    cells.array.forEach(cell => cell.addEventListener('click', cellClicada));
    resetJv.addEventListener('click', resetJogo);
    statusJogo.textContent = 'É a vez de:'+jogador
}

function cellClicada(){

}

function updateCell(cell, index){

}

function mudarJogador(){
    
}

function checarVencedor(){

}

function resetJogo(){

}

/*Forca*/

/*Vou criar uma variável para o jogador2 escolher as palavras para o jogador 1*/

alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
palavras = [];
palavra = palavras[Math.floor(Math.random() * palavras.length)];
vida = 5;
erros = [];
posicoes = [];

for(i=0; i<palavra.length; i++){
    if(palavra[i] == '-' || palavra[i] == ' '){
        posicoes.push('-');
    }
    else{
        posicoes.push('_');
    }
}

document.getElementsById('resultado').innerHTML = 'Vida: '+vida+'<br> Erros: '+erros+'<br> Palavra: '+posicoes.join('');

function enviarLetra(){
    letra = document.getElementById('letra').value.toUpperCase();
    document.getElementById('letra').value = '';
    letraEncontrada = false;

    if(letra.length > 1){
        if(letra == palavra){
            telaVitoria();
        }
        else{
            telaDerrota();
        }
    }

    if(alfabeto.indexOf(letra) == -1){
        alert('Caractere inválido. Insira uma letra do alfabeto.')
    }
    else{
        for(i=0; i<palavra.length; i++){
            if(palavra[i] == letra){
                posicoes[i] = letra;
                letraEncontrada = true;
            }
        }

        if(letraEncontrada == false){
            if(erros.indexOf(letra) != -1){
                alert('Você já errou essa letra!')
            }
            else{
                erros.push(letra);
                vida--;
            }
        }

        if(posicoes.indexOf('_') == -1){
            telaVitoria()
        }
        else if(vida <= 0){
            telaDerrota()
        }
        else{
            document.getElementById('resultado').innerHTML = 'Vida: '+vida+'<br> Erros: '+erros+'<br> Palavra: '+posicoes.join(' ');
        }
    }
}

function telaDerrota(){
    document.getElementById('resultado').innerHTML = '<h1>Você perdeu..</h1> A palavra era <b>'+palavra+'</b>.'
}

function telaVitoria(){
    document.getElementById('resultado').innerHTML = '<h1>Você venceu!</h1>'
}