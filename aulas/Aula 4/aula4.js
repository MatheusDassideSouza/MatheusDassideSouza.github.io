a = 0;

function teste(){
    if(document.getElementById('entrada').value != ''){
        a += parseInt(document.getElementById("entrada").value);
    }
    document.getElementById('contagem').innerHTML = (a);

    if (a > 10){
        mensagem = ' Você passou de 10!';
    }
    if(a > 100){
        mensagem = ' Você passou de 100!';
    }

    document.getElementById('contagem').innerHTML += mensagem
    document.getElementById('entrada').value = ''
}