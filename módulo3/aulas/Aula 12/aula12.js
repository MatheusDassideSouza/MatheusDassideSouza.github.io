function mix(){
    
    vermelho = parseInt(document.getElementById('red').value);
    verde = parseInt(document.getElementById('green').value);
    azul = parseInt(document.getElementById('blue').value);
    

    color = 'rgb(' + vermelho + ',' + verde + ',' + azul + ')';

    document.getElementById('box').style.backgroundColor = color;

}a