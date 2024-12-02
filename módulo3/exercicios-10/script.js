function ex1(){
    nome = document.getElementById('ex1-nome').value
    document.getElementById('ex1-saida').innerHTML = 'Olá '+nome+'!'
}

function ex2(){
    numero1 = parseInt(document.getElementById('ex2-number1').value);
    numero2 = parseInt(document.getElementById('ex2-number2').value);

    soma = numero1 + numero2;

    document.getElementById('ex2-saida').innerHTML = 'O resultado é:'+soma;
}

function ex3(){
    numero = document.getElementById('ex3-number').value;

    if(numero <= -1){
        document.getElementById('ex3-saida').innerHTML = 'O número é negativo'
    }
    else if(numero >= 1){
        document.getElementById('ex3-saida').innerHTML = 'O número é positivo'
    }
    else{
        document.getElementById('ex3-saida').innerHTML = 'O número é nulo'
    }
}

function ex4(){
    comprimento = document.getElementById('ex4-palavra').value;

    document.getElementById('ex4-saida').innerHTML = 'A quantidade de caracteres é: '+comprimento.length
}

function ex5(){
    loop_n = document.getElementById('ex5-number').value;
    for(i=0; i < loop_n; i++){
        document.getElementById('ex5-saida').innerHTML += (i+1)+' ';
    }
}

function ex6(){

    vermelho = parseInt(document.getElementById('red').value);
    verde = parseInt(document.getElementById('green').value);
    azul = parseInt(document.getElementById('blue').value);

    color = 'RGB(' + vermelho + ',' + verde + ',' + azul + ')';

    document.getElementById('box').style.backgroundColor = color;
}

function ex7(){
    dado = []
    valorMin = 1;
    valorMax = 20;

    numeroRandom = Math.floor(Math.random() * (valorMax - valorMin + 1)) + valorMin;
    dado.push(numeroRandom)

    if(dado == 1){
        document.getElementById('ex7-saida').innerHTML = dado + ' Falha crítica!';
    }
    else if(dado == 20){
        document.getElementById('ex7-saida').innerHTML = dado + ' Sucesso crítico!';
    }
    else{
        document.getElementById('ex7-saida').innerHTML = 'Seu dado caiu no número: ' + dado;
    }
}

numeros = [];

function ex8(){
    
    number = document.getElementById('ex8-number').value;
    numeros.push(number);
   
    document.getElementById('ex8-saida').innerHTML = numeros;
}

numeross = [];

function ex9(){
    
    numberEx9 = parseInt(document.getElementById('ex9-number').value);
    numeross.push(numberEx9);

    //Quantidade de números
    document.getElementById('ex9-q').innerHTML = 'A quantidade de números é: '+numeross.length

    //Maior número
    maxNumber = Math.max(...numeross);
    document.getElementById('ex9-M').innerHTML = 'O maior número é: '+maxNumber;

    //Menor número
    minNumber = Math.min(...numeross);
    document.getElementById('ex9-m').innerHTML = 'O menor número é: '+minNumber;

    //Soma dos números
    soma = 0;

    for(i=0; i<numeross.length; i++){
        soma += numeross[i];
    }
    document.getElementById('ex9-s').innerHTML = 'O resultado da soma é: '+soma;

    //Média dos números
    media = soma / numeross.length;
    document.getElementById('ex9-me').innerHTML = 'A média dos números é: '+media;
}