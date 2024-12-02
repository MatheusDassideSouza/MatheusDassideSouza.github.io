mochila = []

function add(){
    a = document.getElementById('entrada').value;
    mochila.push(a);

    for(i = 0; i<mochila.length; i++){
        document.getElementById('itens').innerHTML = '<div>'+item+' <button>X<button></div>';
    }
}