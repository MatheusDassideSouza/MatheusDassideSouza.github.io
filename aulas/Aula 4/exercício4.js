
function idade(){
    namea = document.getElementById('namea').value;
    agea = document.getElementById('agea').value;
    nameb = document.getElementById('nameb').value;
    ageb = document.getElementById('ageb').value;

    if (agea > ageb){
        document.getElementById('resultado').innerHTML = namea + 'é' + (agea - ageb) +  'mais velho que' + nameb;
    }
    else{
        document.getElementById('resultado').innerHTML = namea + 'é' + (ageb - agea) + 'mais novo que' + nameb
    }

}
