function formulario(){
    nome = document.getElementById('name').value;
    email = document.getElementById('mail').value;
    senha1 = document.getElementById('pass1').value;
    senha2 = document.getElementById('pass2').value;

    if(nome == ''){
        alert('nome não preenchido.');
    }
    else if(nome.length <= 2){
        alert('O nome deve conter no mínimo três dígitos.');
    }
    else if(nome.length >= 13){
        alert('O nome deve ser no máximo até doze dígitos.');
    }
    else if(email == ''){
        alert('Email não preenchido.');
    }
    else if(senha1 == ''){
        alert('A senha deve ser definida.');
    }
    else if(senha1.length <= 7){
        alert('A senha definida deve ter no mínimo oito dígitos.');
    }
    else if(senha2 == ''){
        alert('A senha deve ser confirmada');
    }
    else{
        if(senha1 == senha2){
            document.getElementById('mensagem').innerHTML = 'Bem-vindo(a) ' + nome + ' acesso liberado.';
        }
        else{
            alert('A senha de confirmação deve ser a mesma já definida.');
        }
    }

}