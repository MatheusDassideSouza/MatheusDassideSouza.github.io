function jogardado(){
    lados = parseInt(document.getElementById('dadosl').value);
    dados = parseInt(document.getElementById('dadosq').value);


    soma = 0
    numeros = []
    for(i=0; i<dados; i++){
        sorteado = Math.floor(Math.random() * lados+1);
        numeros.push(sorteado)
        soma += sorteado
    }
   
    document.getElementById('resultado').innerHTML = '<b>'+soma+'</b> ('+numeros.join(' / ')+')';
}
