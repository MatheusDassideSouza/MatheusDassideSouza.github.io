//"=" atribui um valor a algo.
//!() é atribuição de negação.

a = 0;

function teste(){
    document.getElementById('contagem').innerHTML = 'Contagem de Cliks:'+(a += 1);
}