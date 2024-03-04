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

    if(nome == ''){
        alert('Nome não preenchido');
    }
    else if(!(idade > 0)){
        alert('Idade inválida');
    }
    else if(nome.length <= 3){
        alert('Digite um nome com mais de 3 caracteres.');
    }
    else{
        if(idade >= 12){
            document.getElementById('mensagem').innerHTML = 'Bem-vindo(a) ' + nome +'! Acesso liberado.';
        }
        else{
            document.getElementById('mensagem').innerHTML = 'Bem-vindo(a) ' + nome +'! Você só poderá entrar daqui à '+(12 - idade) + ' anos.';   
        }
    }
}