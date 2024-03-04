//alert('Olá, mas dessa vez no arquivo js');

function calcular(){
    n1 = parseInt(document.getElementById('n1').value);
    n2 = parseInt(document.getElementById('n1').value);

    //alert('A soma é: '+(n1+n2));
    document.getElementById('resultado').innerHTML = 'A soma é: '+(n1+n2);
}

function formulario(){
    nome = document.getElementById('name').value;
    idade = parseInt(document.getElementById('age').value);

    document.getElementById('mensagem').innerHTML = 'Bem-vindo(a)'+(nome)+'! Acesso liberado.'
}