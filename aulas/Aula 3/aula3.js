a = 0;

cliques = 0;

contagem = 0;

function teste(){
    a += 1
    document.getElementById('resultado').innerHTML = 'Contagem de Cliks:'+(a);
}

function teste2(){
    a -= 1
    document.getElementById('resultado').innerHTML = 'Contagem de Cliks:'+(a);
}

function alternar(v){
    cliques += v
    document.getElementById('resultado').innerHTML = 'Contagem de cliks:'+cliques;
}

function soma(){
    valor = parseInt(document.getElementById('valor').value);
    
    contagem += valor;

    document.getElementById('resultado').innerHTML = contagem;
}

function valor1(){
    valor = parseInt(document.getElementById('resultado').innerHTML = contagem);

    contagem += valor;

    document.getElementById('resultado').innerHTML

}