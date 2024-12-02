//Atividade 1 e 2.
carrinho = [];

function verItens(){
    document.getElementById('capacidade').innerHTML = carrinho.length + '/4';
    document.getElementById('item').value = '';
    html = '';

    for(i=0; i<carrinho.length; i++){
        html += '<div><div id=item'+i+'>'+carrinho[i]+'</div><button onclick="editarItem('+i+')">E</button><button onclick="removerItem('+i+')">X</button></div>';
    }

    document.getElementById('itens').innerHTML = html;
}

function adicionarItem(){

    item = document.getElementById('item').value;

    if(validarItem()){
        if(carrinho.length < 4){
            carrinho.push(item);
            verItens();
        }
        else{
            alert('O carrinho está cheio!')
        }
    }
}

function teste(){
    console.log('teste executou')
}

function removerItem(i){
    carrinho.splice(i,1);
    verItens();
}

function editarItem(i){
    if(document.getElementById('item'+i).innerHTML == carrinho[i]){
        document.getElementById('item'+i).innerHTML = '<input id="editado" type="text" value="'+carrinho[i]+'">';
    }
    else{
        item = document.getElementById('editado').value;
        if(validarItem()){
            carrinho[i] = item;
            verItens();
        }
    }
}

function validarItem(){

    item = item[0].toUpperCase() + item.slice(1).toLowerCase();

    if(item == ''){
        alert('Campo vazio');
        return false
    }
    else if(carrinho.indexOf(item) != -1){
        alert('Este item já está na lista');
        return false
    }
    else{
        console.log("até aqui foi")
        return true
    }
        
}


//Atividade 3.
numeros = [];

function verNumeros(){
    document.getElementById('termos').innerHTML = carrinho.length + '/4';
    document.getElementById('numero').value = '';
    html = '';

    for(i=0; i<numeros.length; i++){
        html += '<div><div id=numero'+i+'>'+numeros[i]+'</div><button onclick="editarNumero('+i+')">E</button><button onclick="removerNumero('+i+')">X</button></div>';
    }

    document.getElementById('numeros').innerHTML = html;
}

function adicionarNumero(){

    numero = document.getElementById('numero').value;

    if(validarNumero()){
        if(numeros.length < 4){
            numeros.push('numero');
            verNumeros();
        }
        else{
            alert('Não é possível inserir mais termos!')
        }
    }
}

function removerNumero(i){
    numeros.splice(i,1);
    verNumeros();
}

function editarNumero(i){
    if(document.getElementById('numero'+i).innerHTML == numeros[i]){
        document.getElementById('numero'+i).innerHTML = '<input id="editado" type="text" value="'+numeros[i]+'">';
    }
    else{
        item = document.getElementById('editado').value;
        if(validarNumero()){
            numeros[i] = numero;
            verNumeros();
        }
    }
}

function validarNumero(){

    numero = numero[0].toUpperCase() + numero.slice(1).toLowerCase();

    if(numero == ''){
        alert('Campo vazio');
        return false
    }
    else if(numeros.indexOf(item) != -1){
        alert('Este item já está na lista');
        return false
    }
    else{
        return true
    }      
}