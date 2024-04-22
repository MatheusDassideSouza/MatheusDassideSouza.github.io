mochila = []

function verItens(){
    document.getElementById('capacidade').innerHtml = mochila.length +'/4';
    document.getElementById('item').value = '';
    html = ''
    for(i=0; i<mochila.length; i++){
        html += '<div><div id=item'+i+'>'+mochila[i]+'</div><button onclick="editarItem('+i+')">E</button><button onclick="removerItem('+i+')">X</button></div>';
    }

    document.getElementById('itens').innerHTML = html;
}

function adicionarItem(){

    item = document.getElementById('item').value;
    item = item[0].toUpperCase() + item.slice(1).toLowerCase();

    if(item == ''){
        alert('Campo vazio');
    }
    else if(mochila.indexOf(item) != -1){
        alert('Este item já está na lista');
    }
    else{
        if(mochila.length < 4){
        mochila.push(item);
        verItens();
        }
        else{
            alert('A mochila está cheia.');
        }
    }
}

function removerItem(i){
    mochila.splice(i,1);
    verItens();
}

function editarItem(i){
    verItens();
    alert(i)
    alert(document.getElementById('item'+i).innerHTML)
    alert(mochila[i])
    alert(document.getElementById('item'+i).innerHTML == mochila[i])
    if(document.getElementById('item'+i).innerHTML == mochila[i]){
        document.getElementById('item'+i).innerHTML = '<input id="editado" type="text" value="'+mochila[i]+'">';
    }else{
        alert('foi')
        mochila[i] = document.getElementById('editado').value;
        verItens();
    }
}
